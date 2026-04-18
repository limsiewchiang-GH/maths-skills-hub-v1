window.igcsePracticeOverrides = window.igcsePracticeOverrides || {};

window.igcseQuestionBankReady = (async () => {
  const target = window.igcsePracticeOverrides;
  const manifestResponse = await fetch("data/questions/manifest.json", { cache: "no-store" });
  if (!manifestResponse.ok) {
    throw new Error(`Could not load question manifest: ${manifestResponse.status}`);
  }

  const manifest = await manifestResponse.json();
  await Promise.all(
    manifest.map(async (entry) => {
      const response = await fetch(entry.file, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Could not load topic file: ${entry.file}`);
      }

      const topic = await response.json();
      const yearBank = target[topic.year] || (target[topic.year] = {});
      Object.entries(topic.skills || {}).forEach(([skill, payload]) => {
        yearBank[skill] = payload;
      });
    })
  );

  window.dispatchEvent(new CustomEvent("igcse-question-bank-ready", { detail: { topics: manifest.length } }));
  return target;
})().catch((error) => {
  console.error(error);
  window.dispatchEvent(new CustomEvent("igcse-question-bank-error", { detail: error }));
  throw error;
});
