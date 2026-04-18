# Question Bank Structure

Authored question banks now live in topic files under `data/questions/`.

## Layout

- `data/questions/manifest.json`
- `data/questions/shell/topic-01-basic-algebra.json`
- `data/questions/remove/topic-22-angles-and-polygons.json`
- `data/questions/fifth-form/topic-44-functions.json`

## Question Shape

Each topic file contains a `skills` object. Each skill can hold an `items` array like this:

```json
{
  "q": "Use the diagram to find the midpoint of A and B.",
  "a": "(4,3)",
  "image": "assets/questions/shell/topic-09-coordinates/q-midpoint-grid.svg",
  "imageAlt": "Coordinate grid with A at (1, 2) and B at (7, 4).",
  "imageCaption": "Sample image-backed question."
}
```

## Editing Workflow

1. Open the topic file for the year group and topic you want.
2. Edit the question object for that skill.
3. If needed, add or replace the image file under `assets/questions/...`.
4. Refresh the page on the local server.

No build step is needed for normal editing because the site loads these topic JSON files directly.
