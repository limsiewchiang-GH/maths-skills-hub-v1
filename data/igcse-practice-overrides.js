window.igcsePracticeOverrides = {
  Shell: {
    "Simplifying by collecting like terms": {
      items: [
        { q: "Simplify: 3x + 5 - 2x + 7", a: "x + 12" },
        { q: "Simplify: 4a - 3b + 6a + b", a: "10a - 2b" },
        { q: "Simplify: 2p + 3q - 5p + 8 - q", a: "-3p + 2q + 8" },
        { q: "Simplify: 9m - 4 + 2m + 11", a: "11m + 7" },
        { q: "Simplify: 7y - 3x + 5y + x", a: "12y - 2x" },
        { q: "Simplify: 6r + 8 - 2r - 3 + r", a: "5r + 5" }
      ]
    },
    "Multiplying out:": {
      items: [
        { q: "Expand: 4(x + 3)", a: "4x + 12" },
        { q: "Expand: -2(3y - 5)", a: "-6y + 10" },
        { q: "Expand: 5(a - 2b + 1)", a: "5a - 10b + 5" },
        { q: "Expand: 3(2m + n)", a: "6m + 3n" },
        { q: "Expand: -4(p - q + 2)", a: "-4p + 4q - 8" },
        { q: "Expand: 6(r + 2s - 1)", a: "6r + 12s - 6" }
      ]
    },
    "1 bracket with constant term": {
      items: [
        { q: "Expand: 7(x - 4)", a: "7x - 28" },
        { q: "Expand: -3(2x + 1)", a: "-6x - 3" },
        { q: "Expand: 9(1 - y)", a: "9 - 9y" },
        { q: "Expand: -5(a - 3)", a: "-5a + 15" },
        { q: "Expand: 8(2 - b)", a: "16 - 8b" },
        { q: "Expand: 4(3p + 2)", a: "12p + 8" }
      ]
    },
    "2 brackets (‘FOIL’)": {
      items: [
        { q: "Expand: (x + 4)(x + 1)", a: "x^2 + 5x + 4" },
        { q: "Expand: (x - 3)(x + 5)", a: "x^2 + 2x - 15" },
        { q: "Expand: (2x + 1)(x - 2)", a: "2x^2 - 3x - 2" },
        { q: "Expand: (x + 7)(x - 2)", a: "x^2 + 5x - 14" },
        { q: "Expand: (3x - 1)(x + 4)", a: "3x^2 + 11x - 4" },
        { q: "Expand: (2x - 5)(x - 3)", a: "2x^2 - 11x + 15" }
      ]
    },
    "3 brackets": {
      items: [
        { q: "Expand: (x + 1)(x + 2)(x + 3)", a: "x^3 + 6x^2 + 11x + 6" },
        { q: "Expand: (x - 1)(x + 2)(x + 4)", a: "x^3 + 5x^2 + 2x - 8" },
        { q: "Expand: (2x + 1)(x - 1)(x + 3)", a: "2x^3 + 5x^2 - 4x - 3" },
        { q: "Expand: (x + 2)(x + 2)(x - 1)", a: "x^3 + 3x^2 - 4" },
        { q: "Expand: (x - 2)(x - 1)(x + 5)", a: "x^3 + 2x^2 - 13x + 10" },
        { q: "Expand: (2x - 1)(x + 1)(x + 2)", a: "2x^3 + 5x^2 + x - 2" }
      ]
    },
    "Factorising by taking out a common factor": {
      items: [
        { q: "Factorise: 12x + 18", a: "6(2x + 3)" },
        { q: "Factorise: 15a^2b - 20ab", a: "5ab(3a - 4)" },
        { q: "Factorise: 9y^3 + 6y^2 - 3y", a: "3y(3y^2 + 2y - 1)" },
        { q: "Factorise: 14p - 21", a: "7(2p - 3)" },
        { q: "Factorise: 8m^2n + 12mn", a: "4mn(2m + 3)" },
        { q: "Factorise: 5x^3 - 10x^2 + 15x", a: "5x(x^2 - 2x + 3)" }
      ]
    },
    "Solving linear equations with one occurrence of the unknown": {
      items: [
        { q: "Solve: 3x + 7 = 25", a: "x = 6" },
        { q: "Solve: 5x - 4 = 2x + 11", a: "x = 5" },
        { q: "Solve: 9 - 2x = 1", a: "x = 4" },
        { q: "Solve: 4x + 3 = 31", a: "x = 7" },
        { q: "Solve: 6x - 5 = 19", a: "x = 4" },
        { q: "Solve: 2x + 15 = 33", a: "x = 9" }
      ]
    },
    "Equations with brackets": {
      items: [
        { q: "Solve: 2(x + 3) = 18", a: "x = 6" },
        { q: "Solve: 3(x - 2) + 4 = 19", a: "x = 7" },
        { q: "Solve: 5 - (2x - 1) = 10", a: "x = -2" },
        { q: "Solve: 4(x + 1) = 28", a: "x = 6" },
        { q: "Solve: 2(3x - 5) = 14", a: "x = 4" },
        { q: "Solve: 7 - (x + 2) = 1", a: "x = 4" }
      ]
    },
    "Equations with fractions": {
      items: [
        { q: "Solve: x/3 + 5 = 9", a: "x = 12" },
        { q: "Solve: x/4 - 2 = 3", a: "x = 20" },
        { q: "Solve: (2x/5) + 1 = 7", a: "x = 15" },
        { q: "Solve: x/6 + 4 = 9", a: "x = 30" },
        { q: "Solve: 3x/4 = 12", a: "x = 16" },
        { q: "Solve: x/8 - 1 = 5", a: "x = 48" }
      ]
    },
    "Unknown appears more than once": {
      items: [
        { q: "Solve: 4x + 7 = 2x + 19", a: "x = 6" },
        { q: "Solve: 3(x + 1) = 2x + 11", a: "x = 8" },
        { q: "Solve: 7 - x = 2x - 5", a: "x = 4" },
        { q: "Solve: 5x - 3 = 2x + 12", a: "x = 5" },
        { q: "Solve: 4(x - 1) = 2x + 10", a: "x = 7" },
        { q: "Solve: 9 + 2x = x + 14", a: "x = 5" }
      ]
    },
    "Forming linear equations from word problems": {
      items: [
        { q: "A number plus 9 is 25. Find the number.", a: "16" },
        { q: "Twice a number minus 3 is 17. Find the number.", a: "10" },
        { q: "A rectangle has perimeter 34 cm and width 7 cm. Find the length.", a: "10" },
        { q: "Three times a number plus 4 is 22. Find the number.", a: "6" },
        { q: "Five more than half a number is 17. Find the number.", a: "24" },
        { q: "One ribbon piece is 6 cm longer than the other and the total is 30 cm. Find the shorter piece.", a: "12" }
      ]
    },
    "Equivalent fractions": {
      items: [
        { q: "Write 3/5 as an equivalent fraction with denominator 20.", a: "12/20" },
        { q: "Write 7/8 as an equivalent fraction with denominator 40.", a: "35/40" },
        { q: "Write 4/9 as an equivalent fraction with denominator 27.", a: "12/27" },
        { q: "Write 5/6 as an equivalent fraction with denominator 42.", a: "35/42" },
        { q: "Write 11/12 as an equivalent fraction with denominator 60.", a: "55/60" },
        { q: "Write 2/15 as an equivalent fraction with denominator 45.", a: "6/45" }
      ]
    },
    "Mixed numbers and top-heavy fractions": {
      items: [
        { q: "Convert 2 3/5 to an improper fraction.", a: "13/5" },
        { q: "Convert 17/4 to a mixed number.", a: "4 1/4" },
        { q: "Convert 5 1/3 to an improper fraction.", a: "16/3" },
        { q: "Convert 11/3 to a mixed number.", a: "3 2/3" },
        { q: "Convert 4 3/4 to an improper fraction.", a: "19/4" },
        { q: "Convert 29/5 to a mixed number.", a: "5 4/5" }
      ]
    },
    "Adding and subtracting fractions": {
      items: [
        { q: "Find: 3/4 + 5/6", a: "19/12" },
        { q: "Find: 7/8 - 1/3", a: "13/24" },
        { q: "Find: 2 1/5 + 3/10", a: "2 1/2" },
        { q: "Find: 5/12 + 1/4", a: "2/3" },
        { q: "Find: 7/10 - 1/5", a: "1/2" },
        { q: "Find: 1 3/4 - 2/5", a: "1 7/20" }
      ]
    },
    "Multiplying and dividing fractions": {
      items: [
        { q: "Find: (2/3)(9/10)", a: "3/5" },
        { q: "Find: (5/8) ÷ (15/16)", a: "2/3" },
        { q: "Find: 2 1/2 × 4/5", a: "2" },
        { q: "Find: (3/7)(14/15)", a: "2/5" },
        { q: "Find: (7/9) ÷ (14/27)", a: "3/2" },
        { q: "Find: 1 1/4 ÷ 5/6", a: "3/2" }
      ]
    },
    "Terminating decimals as fractions": {
      items: [
        { q: "Write 0.6 as a fraction.", a: "3/5" },
        { q: "Write 0.125 as a fraction.", a: "1/8" },
        { q: "Write 2.75 as a fraction.", a: "11/4" },
        { q: "Write 0.04 as a fraction.", a: "1/25" },
        { q: "Write 1.2 as a fraction.", a: "6/5" },
        { q: "Write 0.375 as a fraction.", a: "3/8" }
      ]
    },
    "Converting recurring decimals into fractions:": {
      items: [
        { q: "Convert 0.777... to a fraction.", a: "7/9" },
        { q: "Convert 0.333... to a fraction.", a: "1/3" },
        { q: "Convert 0.999... to a fraction.", a: "1" },
        { q: "Convert 0.121212... to a fraction.", a: "4/33" },
        { q: "Convert 1.414141... to a fraction.", a: "140/99" },
        { q: "Convert 0.1666... to a fraction.", a: "1/6" }
      ]
    },
    "One recurring unit": {
      items: [
        { q: "Convert 0.222... to a fraction.", a: "2/9" },
        { q: "Convert 0.888... to a fraction.", a: "8/9" },
        { q: "Convert 1.666... to a fraction.", a: "5/3" },
        { q: "Convert 0.444... to a fraction.", a: "4/9" },
        { q: "Convert 2.111... to a fraction.", a: "19/9" },
        { q: "Convert 3.555... to a fraction.", a: "32/9" }
      ]
    },
    "Two recurring units": {
      items: [
        { q: "Convert 0.121212... to a fraction.", a: "4/33" },
        { q: "Convert 0.272727... to a fraction.", a: "3/11" },
        { q: "Convert 1.414141... to a fraction.", a: "140/99" },
        { q: "Convert 0.343434... to a fraction.", a: "34/99" },
        { q: "Convert 2.565656... to a fraction.", a: "254/99" },
        { q: "Convert 0.838383... to a fraction.", a: "83/99" }
      ]
    },
    "One or two recurring units with a leading non-recurring element": {
      items: [
        { q: "Convert 0.1666... to a fraction.", a: "1/6" },
        { q: "Convert 0.2333... to a fraction.", a: "7/30" },
        { q: "Convert 0.41666... to a fraction.", a: "5/12" },
        { q: "Convert 2.08333... to a fraction.", a: "25/12" },
        { q: "Convert 0.1454545... to a fraction.", a: "8/55" },
        { q: "Convert 0.2777... to a fraction.", a: "5/18" }
      ]
    },
    "Basic ideas: one number as a percent of another; finding a percent of a number": {
      items: [
        { q: "What is 18 as a percentage of 60?", a: "30%" },
        { q: "Find 35% of 240.", a: "84" },
        { q: "Find 12.5% of 64.", a: "8" },
        { q: "What is 45 as a percentage of 90?", a: "50%" },
        { q: "Find 18% of 350.", a: "63" },
        { q: "What is 27 as a percentage of 45?", a: "60%" }
      ]
    },
    "Percentage change": {
      items: [
        { q: "Price rises from 50 to 62.5. % increase?", a: "25% increase" },
        { q: "Population drops from 800 to 680. % decrease?", a: "15% decrease" },
        { q: "Value rises from 20 to 23. % change?", a: "15% increase" },
        { q: "A score moves from 40 to 46. % increase?", a: "15% increase" },
        { q: "A price falls from 120 to 102. % decrease?", a: "15% decrease" },
        { q: "A balance rises from 200 to 250. % increase?", a: "25% increase" }
      ]
    },
    "Reverse percentages": {
      items: [
        { q: "After 20% off, the price is 72. Find the original price.", a: "90" },
        { q: "After a 15% increase, the value is 230. Find the original value.", a: "200" },
        { q: "After a 10% decrease, the value is 54. Find the original value.", a: "60" },
        { q: "After 25% off, a jumper costs 45. Find the original price.", a: "60" },
        { q: "After a 20% increase, a population is 960. Find the original population.", a: "800" },
        { q: "After a 5% decrease, a balance is 190. Find the original balance.", a: "200" }
      ]
    },
    "Compounding percentage change": {
      items: [
        { q: "A price is 200 and increases by 10% each year for 2 years. Find the final price.", a: "242" },
        { q: "A value is 500 and decreases by 8% each year for 3 years. Find the final value to the nearest whole number.", a: "389" },
        { q: "A population grows by 4% per year from 1200 for 5 years. Find the population to the nearest whole number.", a: "1460" },
        { q: "A bike worth 800 loses 15% of its value each year for 2 years. Find the value after 2 years.", a: "578" },
        { q: "Savings of 150 grow by 6% per year for 3 years. Find the final amount to 2 d.p.", a: "178.65" },
        { q: "A town with population 2500 grows by 2% per year for 4 years. Find the population to the nearest whole number.", a: "2706" }
      ]
    },
    "Basic operations (+, -, ×, ÷, %, powers), and other functions including storing/recalling values, exact/approx modes, and reset to default.": {
      items: [
        { q: "Evaluate: (3.5 + 2.7) × 4", a: "24.8" },
        { q: "Evaluate: 7.2^2", a: "51.84" },
        { q: "Evaluate: sqrt(196) + 1/4", a: "14.25" },
        { q: "Evaluate: 18% of 250", a: "45" },
        { q: "Evaluate: (5.6 - 1.8) ÷ 0.2", a: "19" },
        { q: "Evaluate: 3^4 - 2^5", a: "49" }
      ]
    },
    "Rounding to a given number of sig fig and d.p.": {
      items: [
        { q: "Round 0.004786 to 2 s.f.", a: "0.0048" },
        { q: "Round 73.486 to 1 d.p.", a: "73.5" },
        { q: "Round 12995 to 3 s.f.", a: "13000" },
        { q: "Round 5.0873 to 2 d.p.", a: "5.09" },
        { q: "Round 90451 to 2 s.f.", a: "90000" },
        { q: "Round 0.08951 to 3 s.f.", a: "0.0895" }
      ]
    },
    "Approximate values by rounding to 1s.f or another sensible value": {
      items: [
        { q: "Estimate 19.8 × 4.1", a: "80" },
        { q: "Estimate 298/6.2", a: "50" },
        { q: "Estimate sqrt(399)", a: "20" },
        { q: "Estimate 0.198 × 49", a: "10" },
        { q: "Estimate 602 ÷ 19.7", a: "30" },
        { q: "Estimate 31.4 + 8.7 - 1.9", a: "38" }
      ]
    },
    "Finding lengths using Pythagoras in 2D": {
      items: [
        { q: "Right triangle legs 6 and 8. Find the hypotenuse.", a: "10" },
        { q: "Hypotenuse 13, one leg 5. Find the other leg.", a: "12" },
        { q: "Rectangle 9 by 12. Find the diagonal.", a: "15" },
        { q: "Right triangle legs 5 and 12. Find the hypotenuse.", a: "13" },
        { q: "Hypotenuse 25, one leg 7. Find the other leg.", a: "24" },
        { q: "A square has side 10. Find its diagonal.", a: "10sqrt(2)" }
      ]
    },
    "Pythagoras in 3D": {
      items: [
        { q: "A cuboid is 3 by 4 by 12. Find the body diagonal.", a: "13" },
        { q: "A cuboid is 2 by 3 by 6. Find the body diagonal.", a: "7" },
        { q: "Find the distance from (0,0,0) to (1,2,2).", a: "3" },
        { q: "A cuboid is 6 by 8 by 24. Find the body diagonal.", a: "26" },
        { q: "Find the distance from (1,1,1) to (4,5,13).", a: "13" },
        { q: "A cuboid is 5 by 12 by 12. Find the body diagonal.", a: "17" }
      ]
    },
    "Simplifying Surds": {
      items: [
        { q: "Simplify sqrt(50)", a: "5sqrt(2)" },
        { q: "Simplify sqrt(72)", a: "6sqrt(2)" },
        { q: "Simplify sqrt(200)", a: "10sqrt(2)" },
        { q: "Simplify sqrt(98)", a: "7sqrt(2)" },
        { q: "Simplify sqrt(45)", a: "3sqrt(5)" },
        { q: "Simplify sqrt(147)", a: "7sqrt(3)" }
      ]
    },
    "Multiplying Surds": {
      items: [
        { q: "Simplify: (2sqrt(3))(5sqrt(6))", a: "30sqrt(2)" },
        { q: "Simplify: (3sqrt(2))(4sqrt(8))", a: "24" },
        { q: "Simplify: sqrt(5) x sqrt(20)", a: "10" },
        { q: "Simplify: (2sqrt(7))(3sqrt(14))", a: "42sqrt(2)" },
        { q: "Simplify: sqrt(12) x sqrt(3)", a: "6" },
        { q: "Simplify: (4sqrt(5))(sqrt(15))", a: "20sqrt(3)" }
      ]
    },
    "Adding surds": {
      items: [
        { q: "Simplify: 3sqrt(2) + 5sqrt(2)", a: "8sqrt(2)" },
        { q: "Simplify: 7sqrt(3) - 2sqrt(3)", a: "5sqrt(3)" },
        { q: "Simplify: sqrt(50) + sqrt(8)", a: "7sqrt(2)" },
        { q: "Simplify: 4sqrt(5) + 3sqrt(5)", a: "7sqrt(5)" },
        { q: "Simplify: sqrt(27) + sqrt(12)", a: "5sqrt(3)" },
        { q: "Simplify: 6sqrt(7) - sqrt(7)", a: "5sqrt(7)" }
      ]
    },
    "Dividing two surd terms": {
      items: [
        { q: "Simplify: sqrt(18) / sqrt(2)", a: "3" },
        { q: "Simplify: (6sqrt(15))/(3sqrt(5))", a: "2sqrt(3)" },
        { q: "Simplify: sqrt(48)/sqrt(3)", a: "4" },
        { q: "Simplify: sqrt(75)/sqrt(3)", a: "5" },
        { q: "Simplify: (8sqrt(6))/(2sqrt(3))", a: "4sqrt(2)" },
        { q: "Simplify: sqrt(98)/sqrt(2)", a: "7" }
      ]
    },
    "Midpoint of two points": {
      items: [
        { q: "Midpoint of (2,5) and (8,1)", a: "(5,3)" },
        { q: "Midpoint of (-4,6) and (10,2)", a: "(3,4)" },
        { q: "Midpoint of (3,-1) and (7,9)", a: "(5,4)" },
        { q: "Midpoint of (6,4) and (10,8)", a: "(8,6)" },
        { q: "Midpoint of (-5,2) and (1,14)", a: "(-2,8)" },
        { q: "Midpoint of (0,-6) and (12,2)", a: "(6,-2)" }
      ]
    },
    "Distance between two points using Pythagoras": {
      items: [
        { q: "Distance between (1,2) and (7,10)", a: "10" },
        { q: "Distance between (-2,3) and (4,3)", a: "6" },
        { q: "Distance between (0,0) and (5,12)", a: "13" },
        { q: "Distance between (2,1) and (10,7)", a: "10" },
        { q: "Distance between (-3,-4) and (0,0)", a: "5" },
        { q: "Distance between (6,8) and (6,-7)", a: "15" }
      ]
    },
    "Must include working in three dimensions": {
      items: [
        { q: "Distance from (1,2,3) to (4,6,3).", a: "5" },
        { q: "Distance from (0,0,0) to (2,3,6).", a: "7" },
        { q: "Midpoint of (2,4,6) and (6,8,10).", a: "(4,6,8)" },
        { q: "Distance from (1,1,1) to (5,4,1).", a: "5" },
        { q: "Midpoint of (-2,3,7) and (4,9,1).", a: "(1,6,4)" },
        { q: "Distance from (2,-1,0) to (2,3,12).", a: "4sqrt(10)" }
      ]
    },
    "Elimination": {
      items: [
        { q: "Solve: 2x + y = 11 and x - y = 1", a: "x = 4, y = 3" },
        { q: "Solve: 3x + 2y = 16 and x + y = 6", a: "x = 4, y = 2" },
        { q: "Solve: 4x - y = 9 and 2x + y = 7", a: "x = 8/3, y = 5/3" },
        { q: "Solve: x + y = 9 and x - y = 3", a: "x = 6, y = 3" },
        { q: "Solve: 5x + y = 17 and 2x - y = 1", a: "x = 18/7, y = 29/7" },
        { q: "Solve: 3x + y = 13 and x + y = 9", a: "x = 2, y = 7" }
      ]
    },
    "Substitution": {
      items: [
        { q: "Solve: y = 2x + 1 and x + y = 10", a: "x = 3, y = 7" },
        { q: "Solve: x = y + 3 and 2x + y = 12", a: "x = 5, y = 2" },
        { q: "Solve: y = 5 - x and 3x + y = 13", a: "x = 4, y = 1" },
        { q: "Solve: y = x + 2 and 2x + y = 11", a: "x = 3, y = 5" },
        { q: "Solve: x = 2y - 1 and x + y = 11", a: "x = 7, y = 4" },
        { q: "Solve: y = 3x - 2 and x + y = 14", a: "x = 4, y = 10" }
      ]
    },
    "Geometrical interpretation": {
      items: [
        { q: "Find the intersection of y = 2x + 1 and y = 7 - x.", a: "(2,5)" },
        { q: "Find the intersection of y = 3x - 4 and y = x + 2.", a: "(3,5)" },
        { q: "Do y = 2x + 1 and y = 2x - 3 intersect?", a: "No, they are parallel" },
        { q: "Find the intersection of y = x + 4 and y = 10 - x.", a: "(3,7)" },
        { q: "Do y = -x + 2 and y = -x - 5 intersect?", a: "No, they are parallel" },
        { q: "Find the intersection of y = 4x - 1 and y = x + 8.", a: "(3,11)" }
      ]
    },
    "Prime Factors": {
      items: [
        { q: "Prime factorise 84.", a: "2^2 x 3 x 7" },
        { q: "Prime factorise 150.", a: "2 x 3 x 5^2" },
        { q: "Prime factorise 360.", a: "2^3 x 3^2 x 5" },
        { q: "Prime factorise 126.", a: "2 x 3^2 x 7" },
        { q: "Prime factorise 196.", a: "2^2 x 7^2" },
        { q: "Prime factorise 270.", a: "2 x 3^3 x 5" }
      ]
    },
    "HCF and LCM of two numbers": {
      items: [
        { q: "Find the HCF and LCM of 18 and 24.", a: "HCF 6, LCM 72" },
        { q: "Find the HCF and LCM of 20 and 30.", a: "HCF 10, LCM 60" },
        { q: "Find the HCF and LCM of 12 and 45.", a: "HCF 3, LCM 180" },
        { q: "Find the HCF and LCM of 36 and 54.", a: "HCF 18, LCM 108" },
        { q: "Find the HCF and LCM of 14 and 35.", a: "HCF 7, LCM 70" },
        { q: "Find the HCF and LCM of 16 and 40.", a: "HCF 8, LCM 80" }
      ]
    },
    "Laws of Indices": {
      items: [
        { q: "Simplify: x^5 x x^2", a: "x^7" },
        { q: "Simplify: a^9 / a^4", a: "a^5" },
        { q: "Simplify: (m^3)^4", a: "m^12" },
        { q: "Simplify: y^6 x y^3", a: "y^9" },
        { q: "Simplify: p^8 / p^2", a: "p^6" },
        { q: "Simplify: (q^2)^5", a: "q^10" }
      ]
    },
    "Negative Indices": {
      items: [
        { q: "Simplify: x^-3", a: "1/x^3" },
        { q: "Simplify: 2a^-2", a: "2/a^2" },
        { q: "Rewrite 1/(5x^3) using a negative index.", a: "(1/5)x^-3" },
        { q: "Simplify: y^-1", a: "1/y" },
        { q: "Simplify: 4b^-3", a: "4/b^3" },
        { q: "Rewrite 3/(k^2) using a negative index.", a: "3k^-2" }
      ]
    },
    "Fractional Indices": {
      items: [
        { q: "Simplify: x^(1/2)", a: "sqrt(x)" },
        { q: "Simplify: 27^(1/3)", a: "3" },
        { q: "Simplify: 16^(3/4)", a: "8" },
        { q: "Simplify: 81^(1/2)", a: "9" },
        { q: "Simplify: 32^(2/5)", a: "4" },
        { q: "Simplify: x^(3/2)", a: "xsqrt(x)" }
      ]
    },
    "Converting from standard form to base 10 (and vice versa)": {
      items: [
        { q: "Write 5.2 x 10^3 as an ordinary number.", a: "5200" },
        { q: "Write 0.00078 in standard form.", a: "7.8 x 10^-4" },
        { q: "Write 3450000 in standard form.", a: "3.45 x 10^6" },
        { q: "Write 6.03 x 10^5 as an ordinary number.", a: "603000" },
        { q: "Write 0.0045 in standard form.", a: "4.5 x 10^-3" },
        { q: "Write 98000000 in standard form.", a: "9.8 x 10^7" }
      ]
    },
    "Multiplication and Division of numbers in standard form": {
      items: [
        { q: "Simplify: (2 x 10^4)(3 x 10^2)", a: "6 x 10^6" },
        { q: "Simplify: (8 x 10^7) / (2 x 10^3)", a: "4 x 10^4" },
        { q: "Simplify: (5 x 10^-2)(4 x 10^6)", a: "2 x 10^5" },
        { q: "Simplify: (3 x 10^5)(2 x 10^-2)", a: "6 x 10^3" },
        { q: "Simplify: (9 x 10^6) / (3 x 10^2)", a: "3 x 10^4" },
        { q: "Simplify: (7 x 10^-3)(2 x 10^4)", a: "1.4 x 10^2" }
      ]
    },
    "Addition and subtraction of numbers in standard form": {
      items: [
        { q: "Add: 3.2 x 10^5 + 1.1 x 10^5", a: "4.3 x 10^5" },
        { q: "Subtract: 7.5 x 10^4 - 2.0 x 10^4", a: "5.5 x 10^4" },
        { q: "Add: 4.8 x 10^-3 + 1.2 x 10^-3", a: "6.0 x 10^-3" },
        { q: "Add: 6.4 x 10^6 + 2.1 x 10^6", a: "8.5 x 10^6" },
        { q: "Subtract: 9.0 x 10^-2 - 3.5 x 10^-2", a: "5.5 x 10^-2" },
        { q: "Add: 1.7 x 10^3 + 4.6 x 10^3", a: "6.3 x 10^3" }
      ]
    },
    "Combining standard form with indices laws": {
      items: [
        { q: "Simplify: (2 x 10^3)^2", a: "4 x 10^6" },
        { q: "Simplify: (6 x 10^5)(2 x 10^-3)", a: "1.2 x 10^3" },
        { q: "Simplify: (9 x 10^8)/(3 x 10^2)", a: "3 x 10^6" },
        { q: "Simplify: (5 x 10^4)^2", a: "2.5 x 10^9" },
        { q: "Simplify: (4 x 10^7)/(2 x 10^-1)", a: "2 x 10^8" },
        { q: "Simplify: (3 x 10^-2)^2", a: "9 x 10^-4" }
      ]
    },
    "Gradient": {
      items: [
        { q: "Find the gradient between (1,2) and (5,10).", a: "2" },
        { q: "Find the gradient between (-2,3) and (4,-9).", a: "-2" },
        { q: "Find the gradient of the line y = 3x - 7.", a: "3" },
        { q: "Find the gradient between (0,4) and (6,1).", a: "-1/2" },
        { q: "Find the gradient of the line through (2,5) and (10,9).", a: "1/2" },
        { q: "Find the gradient of y = -4x + 6.", a: "-4" }
      ]
    },
    "Equation of a line": {
      items: [
        { q: "Find the equation of the line with gradient 2 through (0,3).", a: "y = 2x + 3" },
        { q: "Find the equation of the line through (1,4) with gradient -3.", a: "y = -3x + 7" },
        { q: "Find the equation of the line through (2,5) and (6,13).", a: "y = 2x + 1" },
        { q: "Find the equation of the line with gradient 4 through (0,-2).", a: "y = 4x - 2" },
        { q: "Find the equation of the line with gradient -1 through (3,5).", a: "y = -x + 8" },
        { q: "Find the equation of the line through (0,7) and (2,11).", a: "y = 2x + 7" }
      ]
    },
    "Drawing straight lines": {
      items: [
        { q: "Give two points on y = 2x + 1.", a: "(0,1) and (2,5)" },
        { q: "Give two points on y = -x + 4.", a: "(0,4) and (4,0)" },
        { q: "Give two points on y = 3.", a: "(0,3) and (5,3)" },
        { q: "Give two points on y = x - 2.", a: "(0,-2) and (2,0)" },
        { q: "Give two points on y = -2x + 6.", a: "(0,6) and (3,0)" },
        { q: "Give two points on x = 4.", a: "(4,0) and (4,5)" }
      ]
    },
    "Intersection of two lines": {
      items: [
        { q: "Find the intersection of y = 2x + 1 and y = 9 - x.", a: "(8/3,19/3)" },
        { q: "Find the intersection of y = 3x - 2 and y = x + 6.", a: "(4,10)" },
        { q: "Find the intersection of y = -x + 7 and y = 2x + 1.", a: "(2,5)" },
        { q: "Find the intersection of y = x + 4 and y = 2x + 1.", a: "(3,7)" },
        { q: "Find the intersection of y = 5 - x and y = x - 1.", a: "(3,2)" },
        { q: "Find the intersection of y = 4x + 3 and y = x + 9.", a: "(2,11)" }
      ]
    },
    "Parallel lines": {
      items: [
        { q: "Find the equation of the line parallel to y = 3x - 2 through (0,5).", a: "y = 3x + 5" },
        { q: "Are y = 2x + 1 and y = 2x - 9 parallel?", a: "Yes" },
        { q: "Find k if y = kx + 4 is parallel to y = -1/2 x + 1.", a: "k = -1/2" },
        { q: "Find the equation of the line parallel to y = -4x + 7 through (1,2).", a: "y = -4x + 6" },
        { q: "Are y = 5x - 1 and y = 5x + 8 parallel?", a: "Yes" },
        { q: "Find the equation of the line parallel to y = x - 3 through (0,6).", a: "y = x + 6" }
      ]
    },
    "Perpendicular lines": {
      items: [
        { q: "Find the gradient perpendicular to 2.", a: "-1/2" },
        { q: "Find the equation of the line perpendicular to y = 3x + 1 through the origin.", a: "y = -1/3 x" },
        { q: "Are y = 1/2 x + 4 and y = -2x + 1 perpendicular?", a: "Yes" },
        { q: "Find the gradient perpendicular to -4.", a: "1/4" },
        { q: "Find the equation of the line perpendicular to y = x + 2 through (0,5).", a: "y = -x + 5" },
        { q: "Are y = 3x - 2 and y = -1/3 x + 7 perpendicular?", a: "Yes" }
      ]
    },
    "Derive a formula to represent a scenario": {
      items: [
        { q: "If the perimeter P of a rectangle is 2l + 2w, make l the subject.", a: "l = (P - 2w)/2" },
        { q: "If C = 5n + 7, make n the subject.", a: "n = (C - 7)/5" },
        { q: "If A = bh/2, make h the subject.", a: "h = 2A/b" },
        { q: "If V = lwh, make w the subject.", a: "w = V/(lh)" },
        { q: "If F = 9c/5 + 32, make c the subject.", a: "c = 5(F - 32)/9" },
        { q: "If d = st, make s the subject.", a: "s = d/t" }
      ]
    },
    "Rearranging formulae where the desired subject appears once": {
      items: [
        { q: "Make x the subject: y = 3x + 4.", a: "x = (y - 4)/3" },
        { q: "Make r the subject: A = pi r^2.", a: "r = sqrt(A/pi)" },
        { q: "Make t the subject: v = u + at.", a: "t = (v - u)/a" },
        { q: "Make b the subject: P = 2a + 2b.", a: "b = (P - 2a)/2" },
        { q: "Make m the subject: C = mn + p.", a: "m = (C - p)/n" },
        { q: "Make x the subject: k = x/7 - 2.", a: "x = 7(k + 2)" }
      ]
    },
    "Rearranging formulae where the desired subject appears more than once": {
      items: [
        { q: "Make x the subject: P = 3x + 2x.", a: "x = P/5" },
        { q: "Make y the subject: A = 2y + 5y - 7.", a: "y = (A + 7)/7" },
        { q: "Make a the subject: K = 4a - a + 9.", a: "a = (K - 9)/3" },
        { q: "Make t the subject: d = 3t + 2t.", a: "t = d/5" },
        { q: "Make p the subject: M = 6p - p + 10.", a: "p = (M - 10)/5" },
        { q: "Make n the subject: Q = 8n + n - 18.", a: "n = (Q + 18)/9" }
      ]
    },
    "Factorising monic trinomials": {
      items: [
        { q: "Factorise: x^2 + 7x + 12", a: "(x + 3)(x + 4)" },
        { q: "Factorise: x^2 - 3x - 10", a: "(x - 5)(x + 2)" },
        { q: "Factorise: x^2 + 11x + 30", a: "(x + 5)(x + 6)" },
        { q: "Factorise: x^2 + x - 12", a: "(x + 4)(x - 3)" },
        { q: "Factorise: x^2 - 8x + 15", a: "(x - 3)(x - 5)" },
        { q: "Factorise: x^2 + 9x + 20", a: "(x + 4)(x + 5)" }
      ]
    },
    "Factorising non-monic trinomials": {
      items: [
        { q: "Factorise: 2x^2 + 7x + 3", a: "(2x + 1)(x + 3)" },
        { q: "Factorise: 3x^2 - x - 2", a: "(3x + 2)(x - 1)" },
        { q: "Factorise: 4x^2 + 4x - 3", a: "(2x + 3)(2x - 1)" },
        { q: "Factorise: 2x^2 + 5x - 3", a: "(2x - 1)(x + 3)" },
        { q: "Factorise: 5x^2 + 13x + 6", a: "(5x + 3)(x + 2)" },
        { q: "Factorise: 6x^2 + x - 2", a: "(3x + 2)(2x - 1)" }
      ]
    },
    "Solving by factorising": {
      items: [
        { q: "Solve: x^2 + 5x + 6 = 0", a: "x = -2 or x = -3" },
        { q: "Solve: 2x^2 - 3x - 2 = 0", a: "x = 2 or x = -1/2" },
        { q: "Solve: x^2 - 9 = 0", a: "x = 3 or x = -3" },
        { q: "Solve: x^2 + x - 12 = 0", a: "x = 3 or x = -4" },
        { q: "Solve: 3x^2 - x - 2 = 0", a: "x = 1 or x = -2/3" },
        { q: "Solve: x^2 - 7x + 12 = 0", a: "x = 3 or x = 4" }
      ]
    },
    "Sketching basic parabolae": {
      items: [
        { q: "For y = x^2 - 4, find the x-intercepts.", a: "x = -2 and x = 2" },
        { q: "For y = (x - 2)^2, find the vertex.", a: "(2,0)" },
        { q: "For y = -x^2 + 6x - 5, does it open up or down?", a: "Down" },
        { q: "For y = x^2 + 6x + 8, find the x-intercepts.", a: "x = -2 and x = -4" },
        { q: "For y = (x + 3)^2 - 1, find the vertex.", a: "(-3,-1)" },
        { q: "For y = 2 - x^2, does it open up or down?", a: "Down" }
      ]
    },
    "Contextualised problems": {
      items: [
        { q: "A rectangle has area 48 and sides x and x + 2. Form the equation.", a: "x(x + 2) = 48" },
        { q: "A projectile has height h = -t^2 + 6t + 7. Find when h = 0.", a: "t = 7 or t = -1" },
        { q: "A garden path has length x + 3 and width x - 1 with area 24. Form the equation.", a: "(x + 3)(x - 1) = 24" },
        { q: "A rectangle has sides x and x + 5 with area 84. Form the equation.", a: "x(x + 5) = 84" },
        { q: "A ball has height h = -x^2 + 4x + 5. Find when it hits the ground.", a: "x = 5 or x = -1" },
        { q: "Two consecutive integers have product 56. Form the equation.", a: "x(x + 1) = 56" }
      ]
    },
    "Basic perimeter and area expressions (includes, squares, rectangles, parallelograms, trapezia, triangles, circles, semi- and quarter-circles)": {
      items: [
        { q: "Find the area of a rectangle with sides 8 and x + 3.", a: "8x + 24" },
        { q: "Find the circumference of a circle of radius r.", a: "2pi r" },
        { q: "Find the area of a trapezium with parallel sides 8 and 12 and height 5.", a: "50" },
        { q: "Find the area of a triangle with base 14 and height 9.", a: "63" },
        { q: "Find the area of a semicircle of radius 6.", a: "18pi" },
        { q: "Find the perimeter of a square of side 3x.", a: "12x" }
      ]
    },
    "Compound shapes (all rectilinear shapes; other obviously compound shapes)": {
      items: [
        { q: "An L-shape is made from rectangles 8 by 3 and 5 by 2. Find the total area.", a: "34" },
        { q: "A circle of radius 7 sits inside a square of side 14. Find the shaded area outside the circle.", a: "196 - 49pi" },
        { q: "Find the area of a semicircle of radius 6.", a: "18pi" },
        { q: "A shape is made from a 10 by 4 rectangle and a 3 by 6 rectangle. Find the total area.", a: "58" },
        { q: "A 12 by 9 rectangle has a 4 by 3 rectangle removed. Find the remaining area.", a: "96" },
        { q: "Two rectangles 7 by 5 and 2 by 9 are joined without overlap. Find the total area.", a: "53" }
      ]
    },
    "Lengths in similar shapes": {
      items: [
        { q: "The scale factor is 3 and the original side is 5. Find the new side.", a: "15" },
        { q: "Similar triangles have corresponding sides 4 and 10. Find the scale factor.", a: "2.5" },
        { q: "If the scale factor from small to large is 1.5 and the small length is 12, find the large length.", a: "18" },
        { q: "A model is built at scale factor 4 from a shape with side 7 cm. Find the model side.", a: "28" },
        { q: "The scale factor from large to small is 1/3 and the large length is 27. Find the small length.", a: "9" },
        { q: "A shape is enlarged by factor 2.2. A side is 15 cm. Find the new side.", a: "33" }
      ]
    },
    "Areas in similar shapes": {
      items: [
        { q: "The linear scale factor is 3. Find the area scale factor.", a: "9" },
        { q: "The area of a small shape is 20 and the linear scale factor is 2.5. Find the large area.", a: "125" },
        { q: "Find the area ratio if the linear ratio is 4:7.", a: "16:49" },
        { q: "The linear scale factor is 5. Find the area scale factor.", a: "25" },
        { q: "The area of a shape is 12 and the linear scale factor is 4. Find the new area.", a: "192" },
        { q: "Find the area ratio if the linear ratio is 3:8.", a: "9:64" }
      ]
    },
    "Volumes in similar shapes": {
      items: [
        { q: "The linear scale factor is 2. Find the volume scale factor.", a: "8" },
        { q: "A small volume is 30 cm^3 and the linear scale factor is 3. Find the large volume.", a: "810" },
        { q: "Find the volume ratio if the linear ratio is 2:5.", a: "8:125" },
        { q: "The linear scale factor is 4. Find the volume scale factor.", a: "64" },
        { q: "A cone has volume 15 cm^3 and is enlarged by factor 2. Find the new volume.", a: "120" },
        { q: "Find the volume ratio if the linear ratio is 3:7.", a: "27:343" }
      ]
    },
    "Converting between units": {
      items: [
        { q: "Convert 2.4 m to cm.", a: "240 cm" },
        { q: "Convert 3500 g to kg.", a: "3.5 kg" },
        { q: "Convert 1.2 km to m.", a: "1200 m" },
        { q: "Convert 450 cm to m.", a: "4.5 m" },
        { q: "Convert 0.8 kg to g.", a: "800 g" },
        { q: "Convert 3600 mm to m.", a: "3.6 m" }
      ]
    },
    "Data collection": {
      items: [
        { q: "If you collect 10 class heights, what type of variable is this?", a: "Continuous" },
        { q: "Give one primary and one secondary data source.", a: "Survey and published dataset" },
        { q: "State one risk of a small sample size.", a: "It may be less representative" },
        { q: "What is a census?", a: "Data from every member of the population" },
        { q: "What is a sample?", a: "A subset of the population" },
        { q: "Why might bias be a problem in data collection?", a: "It can distort the results" }
      ]
    },
    "Measures of Location": {
      items: [
        { q: "Find the mean of 4, 6, 8, 10.", a: "7" },
        { q: "Find the median of 2, 9, 1, 7, 6.", a: "6" },
        { q: "Find the mode of 3, 5, 5, 2, 5, 1.", a: "5" },
        { q: "Find the mean of 12, 15, 18.", a: "15" },
        { q: "Find the median of 4, 8, 10, 13.", a: "9" },
        { q: "Find the mode of 7, 9, 7, 6, 9, 7.", a: "7" }
      ]
    },
    "Measures of Dispersion": {
      items: [
        { q: "Find the range of 12, 7, 20, 9.", a: "13" },
        { q: "Find the interquartile range of 1, 2, 4, 7, 8, 10, 13.", a: "7" },
        { q: "Which data set is more spread out: range 8 or range 14?", a: "Range 14" },
        { q: "Find the range of 5, 11, 3, 19.", a: "16" },
        { q: "Find the interquartile range of 2, 3, 5, 7, 9, 12, 14.", a: "9" },
        { q: "Which is more spread out: IQR 6 or IQR 11?", a: "IQR 11" }
      ]
    },
    "Grouped Data": {
      items: [
        { q: "For classes 0-10, 10-20, 20-30, find the class midpoints.", a: "5, 15, 25" },
        { q: "A grouped table has midpoints 5, 15, 25 with frequencies 3, 5, 2. Estimate the mean.", a: "14" },
        { q: "Why is a grouped mean estimated rather than exact?", a: "Exact values inside each class are unknown" },
        { q: "For classes 20-30, 30-40, 40-50, find the class midpoints.", a: "25, 35, 45" },
        { q: "A grouped table has midpoints 10, 20, 30 with frequencies 2, 4, 4. Estimate the mean.", a: "22" },
        { q: "What is frequency density?", a: "Frequency divided by class width" }
      ]
    },
    "Drawing a cumulative frequency graph from a set of grouped data": {
      items: [
        { q: "Frequencies are 3, 5, 7, 4. Find the cumulative frequencies.", a: "3, 8, 15, 19" },
        { q: "What is plotted on the horizontal axis of a cumulative frequency graph?", a: "Upper class boundaries" },
        { q: "What is plotted on the vertical axis of a cumulative frequency graph?", a: "Cumulative frequency" },
        { q: "Frequencies are 6, 4, 3. Find the cumulative frequencies.", a: "6, 10, 13" },
        { q: "What does the final point on a cumulative frequency graph show?", a: "The total frequency" },
        { q: "Should the cumulative frequency graph join the points smoothly?", a: "Yes" }
      ]
    },
    "Completing a table from a given cumulative frequency graph": {
      items: [
        { q: "If the cumulative frequencies are 3, 8, 15, 19, find the class frequencies.", a: "3, 5, 7, 4" },
        { q: "If the final cumulative frequency is 19, what is the total frequency?", a: "19" },
        { q: "If cumulative frequencies are 4, 9, 14, find the class frequencies.", a: "4, 5, 5" },
        { q: "If the cumulative frequencies are 2, 6, 11, 18, find the class frequencies.", a: "2, 4, 5, 7" },
        { q: "If the graph reads 12 at an upper boundary, what does this mean?", a: "12 data values are at or below that boundary" },
        { q: "If the total cumulative frequency is 40, what is the total number of data values?", a: "40" }
      ]
    },
    "Using a c.f. graph to find values (e.g. median, quartiles, percentiles)": {
      items: [
        { q: "A data set has size 80. Which cumulative frequency gives the median?", a: "40" },
        { q: "A data set has size 80. Which cumulative frequency gives Q1?", a: "20" },
        { q: "A data set has size 80. Which cumulative frequency gives Q3?", a: "60" },
        { q: "A data set has size 120. Which cumulative frequency gives the median?", a: "60" },
        { q: "A data set has size 120. Which cumulative frequency gives Q1?", a: "30" },
        { q: "A data set has size 120. Which cumulative frequency gives Q3?", a: "90" }
      ]
    },
    "Drawing a histogram from a data set": {
      items: [
        { q: "A class has width 5 and frequency 15. Find the frequency density.", a: "3" },
        { q: "A class has width 10 and frequency 25. Find the frequency density.", a: "2.5" },
        { q: "Why does the area of a histogram bar represent frequency?", a: "Because frequency density x class width = frequency" },
        { q: "A class has width 4 and frequency 12. Find the frequency density.", a: "3" },
        { q: "A class has width 8 and frequency 20. Find the frequency density.", a: "2.5" },
        { q: "What goes on the vertical axis of a histogram?", a: "Frequency density" }
      ]
    },
    "Completing a table from a histogram": {
      items: [
        { q: "A class has width 4 and density 2.5. Find the frequency.", a: "10" },
        { q: "A class has width 6 and density 1.5. Find the frequency.", a: "9" },
        { q: "If the bar area is 18 and the class width is 3, find the density.", a: "6" },
        { q: "A class has width 5 and density 4. Find the frequency.", a: "20" },
        { q: "A class has width 8 and density 1.25. Find the frequency.", a: "10" },
        { q: "If a class has frequency 12 and width 3, find the density.", a: "4" }
      ]
    }
  },
  Remove: {
    "Linear inequalities": {
      items: [
        { q: "Solve: 3x + 5 > 17", a: "x > 4" },
        { q: "Solve: 2x - 7 <= 9", a: "x <= 8" },
        { q: "Solve: 5 - x < 11", a: "x > -6" },
        { q: "Solve: 4x + 1 >= 13", a: "x >= 3" },
        { q: "Solve: 7 - 2x > 1", a: "x < 3" },
        { q: "Solve: x/3 + 2 <= 5", a: "x <= 9" }
      ]
    },
    "To include quadratic inequalities that factorise": {
      items: [
        { q: "Solve: x^2 - 5x + 6 > 0", a: "x < 2 or x > 3" },
        { q: "Solve: x^2 - 4 < 0", a: "-2 < x < 2" },
        { q: "Solve: x^2 + x - 6 >= 0", a: "x <= -3 or x >= 2" },
        { q: "Solve: x^2 - x - 12 < 0", a: "-3 < x < 4" },
        { q: "Solve: x^2 - 9 >= 0", a: "x <= -3 or x >= 3" },
        { q: "Solve: x^2 + 2x - 8 <= 0", a: "-4 <= x <= 2" }
      ]
    },
    "Includes shading regions": {
      items: [
        { q: "For the region y > 2x + 1, should the boundary line be solid or dashed?", a: "Dashed" },
        { q: "For the region y <= x - 3, should the boundary line be solid or dashed?", a: "Solid" },
        { q: "Does the point (0,0) satisfy y > x + 2?", a: "No" },
        { q: "Does the point (2,5) satisfy y >= 2x + 1?", a: "Yes" },
        { q: "For the inequality y < -x + 4, should the region be above or below the line?", a: "Below" },
        { q: "For the inequality y >= 3, should the region be above or below the horizontal line?", a: "Above" }
      ]
    },
    "Angles within parallel lines": {
      items: [
        { q: "Two corresponding angles on parallel lines are x and 68°. Find x.", a: "68" },
        { q: "Co-interior angles on parallel lines are x and 115°. Find x.", a: "65" },
        { q: "Alternate angles on parallel lines are x and 47°. Find x.", a: "47" },
        { q: "A straight-line angle is split into x and 132°. Find x.", a: "48" },
        { q: "A vertically opposite angle to 83° is x. Find x.", a: "83" },
        { q: "Corresponding angles are 3x and 96°. Find x.", a: "32" }
      ]
    },
    "Angles within polygons": {
      items: [
        { q: "Find the sum of the interior angles of a pentagon.", a: "540" },
        { q: "Find the sum of the interior angles of an octagon.", a: "1080" },
        { q: "Each interior angle of a regular hexagon is x. Find x.", a: "120" },
        { q: "A quadrilateral has angles 90°, 88°, 101°, and x. Find x.", a: "81" },
        { q: "A pentagon has interior angles summing to how many degrees?", a: "540" },
        { q: "Find one exterior angle of a regular nonagon.", a: "40" }
      ]
    },
    "Regular polygons": {
      items: [
        { q: "Find one exterior angle of a regular decagon.", a: "36" },
        { q: "A regular polygon has exterior angle 45°. How many sides does it have?", a: "8" },
        { q: "Find one interior angle of a regular pentagon.", a: "108" },
        { q: "A regular polygon has 12 sides. Find one exterior angle.", a: "30" },
        { q: "A regular polygon has exterior angle 24°. How many sides does it have?", a: "15" },
        { q: "Find one interior angle of a regular octagon.", a: "135" }
      ]
    },
    "Ratios within a right-angled triangle": {
      items: [
        { q: "In a right triangle with angle 30°, opposite side 5, and hypotenuse 10, find sin 30°.", a: "1/2" },
        { q: "In a right triangle with angle 45°, adjacent side 1, and hypotenuse sqrt(2), find cos 45°.", a: "sqrt(2)/2" },
        { q: "In a right triangle with angle 60°, opposite side sqrt(3), adjacent side 1, find tan 60°.", a: "sqrt(3)" },
        { q: "In a right triangle, opposite side 8 and hypotenuse 17. Find sin theta.", a: "8/17" },
        { q: "In a right triangle, adjacent side 12 and hypotenuse 13. Find cos theta.", a: "12/13" },
        { q: "In a right triangle, opposite side 7 and adjacent side 24. Find tan theta.", a: "7/24" }
      ]
    },
    "Using SoHCaHToA": {
      items: [
        { q: "Find the missing side: opposite = 6, angle = 30°. Use sine to find the hypotenuse.", a: "12" },
        { q: "Find the missing side: adjacent = 8, angle = 60°. Use cosine to find the hypotenuse.", a: "16" },
        { q: "Find the missing side: opposite = 9, angle = 45°. Use tangent to find the adjacent side.", a: "9" },
        { q: "Find the angle: opposite = 5, hypotenuse = 10.", a: "30" },
        { q: "Find the angle: adjacent = 6, hypotenuse = 12.", a: "60" },
        { q: "Find the angle: opposite = 1, adjacent = 1.", a: "45" }
      ]
    },
    "Angles of elevation and depression": {
      items: [
        { q: "A ladder reaches 5 m up a wall and is 12 m from the wall. Find the angle of elevation.", a: "23" },
        { q: "A kite is 20 m high and 20sqrt(3) m away horizontally. Find the angle of elevation.", a: "30" },
        { q: "A cliff top is seen at an angle of elevation of 45° from 30 m away. Find the height.", a: "30" },
        { q: "A ship is seen at an angle of depression of 30° from a lighthouse 40sqrt(3) m high. Find the horizontal distance.", a: "120" },
        { q: "A tree top is seen at 60° from a point 10 m away. Find the height.", a: "10sqrt(3)" },
        { q: "A balloon is 50 m high and seen at 45°. Find the horizontal distance.", a: "50" }
      ]
    },
    "Bearings": {
      items: [
        { q: "A ship travels on a bearing of 090°. What direction is this?", a: "East" },
        { q: "A plane travels due south. Write the bearing.", a: "180" },
        { q: "A point is north-west of another. Is the bearing 315°?", a: "Yes" },
        { q: "A town lies on a bearing of 045° from a village. What compass direction is this?", a: "North-east" },
        { q: "A ship travels on a bearing of 270°. What direction is this?", a: "West" },
        { q: "Write the bearing for due north.", a: "000" }
      ]
    },
    "Trig in 3D": {
      items: [
        { q: "A cuboid is 3 by 4 by 12. Find the body diagonal.", a: "13" },
        { q: "A cuboid is 6 by 8 by 24. Find the body diagonal.", a: "26" },
        { q: "Find the angle between the base and the diagonal of a cuboid with height 12 and base diagonal 5.", a: "67" },
        { q: "A ladder reaches a window 12 m above the ground and 5 m out from the wall. Find the ladder length.", a: "13" },
        { q: "A cuboid has base diagonal 15 and height 8. Find the body diagonal.", a: "17" },
        { q: "A cuboid is 9 by 12 by 20. Find the body diagonal.", a: "25" }
      ]
    },
    "Angles in a semicircle": {
      items: [
        { q: "An angle subtended by a diameter at the circumference is x. Find x.", a: "90" },
        { q: "A triangle in a semicircle has one angle 35° and the angle in the semicircle. Find the third angle.", a: "55" },
        { q: "If one non-right angle in a semicircle triangle is 28°, find the other.", a: "62" },
        { q: "True or false: the angle in a semicircle is always a right angle.", a: "True" },
        { q: "A semicircle triangle has angles 90°, 41°, and x. Find x.", a: "49" },
        { q: "An angle in a semicircle triangle is 90°. What theorem is this?", a: "Angle in a semicircle" }
      ]
    },
    "Angle at the centre": {
      items: [
        { q: "An angle at the centre is 80°. Find the angle at the circumference on the same arc.", a: "40" },
        { q: "An angle at the circumference is 35°. Find the angle at the centre on the same arc.", a: "70" },
        { q: "The centre angle is double which other angle?", a: "Angle at the circumference" },
        { q: "An angle at the centre is 124°. Find the matching circumference angle.", a: "62" },
        { q: "A circumference angle is 48°. Find the matching centre angle.", a: "96" },
        { q: "If the centre angle is x and the circumference angle is 33°, find x.", a: "66" }
      ]
    },
    "Cyclic Quadrilateral": {
      items: [
        { q: "Opposite angles in a cyclic quadrilateral are x and 112°. Find x.", a: "68" },
        { q: "A cyclic quadrilateral has opposite angles 3x and 96°. Find x.", a: "28" },
        { q: "One angle in a cyclic quadrilateral is 71°. Find the opposite angle.", a: "109" },
        { q: "True or false: opposite angles in a cyclic quadrilateral sum to 180°.", a: "True" },
        { q: "Opposite angles are x and x + 24 in a cyclic quadrilateral. Find x.", a: "78" },
        { q: "A cyclic quadrilateral has opposite angles 84° and y. Find y.", a: "96" }
      ]
    },
    "Angles in the same segment": {
      items: [
        { q: "Angles in the same segment are 42° and x. Find x.", a: "42" },
        { q: "True or false: angles in the same segment are equal.", a: "True" },
        { q: "An angle in one segment is 57°. Find the matching angle in the same segment.", a: "57" },
        { q: "Angles in the same segment are 3x and 84°. Find x.", a: "28" },
        { q: "If one same-segment angle is 31°, what is the other?", a: "31" },
        { q: "Angles in the same segment are x and x + 7. Is this possible?", a: "No" }
      ]
    },
    "Alternate Segment Theorem": {
      items: [
        { q: "The angle between a tangent and chord is 48°. Find the angle in the alternate segment.", a: "48" },
        { q: "A tangent-chord angle is x and the alternate segment angle is 63°. Find x.", a: "63" },
        { q: "True or false: the angle between a tangent and chord equals the angle in the alternate segment.", a: "True" },
        { q: "The alternate segment angle is 35°. Find the tangent-chord angle.", a: "35" },
        { q: "A tangent-chord angle is 2x and the alternate segment angle is 74°. Find x.", a: "37" },
        { q: "The tangent-chord angle is 90°. What is the alternate segment angle?", a: "90" }
      ]
    },
    "Radius ⟂ tangent": {
      items: [
        { q: "What angle does a radius make with a tangent at the point of contact?", a: "90" },
        { q: "A tangent and radius meet at angle x. Find x.", a: "90" },
        { q: "True or false: a radius is perpendicular to a tangent at the point of contact.", a: "True" },
        { q: "A tangent touches a circle at P. What is angle OPT if OP is a radius?", a: "90" },
        { q: "If a line is tangent to a circle, what is its angle to the radius there?", a: "90" },
        { q: "A radius and tangent form a right angle. Which theorem is this?", a: "Radius perpendicular to tangent" }
      ]
    },
    "Tangents to the same point": {
      items: [
        { q: "Tangents from the same external point are lengths x and 9. Find x.", a: "9" },
        { q: "Two tangents from the same point have lengths 3x and 21. Find x.", a: "7" },
        { q: "True or false: tangents from the same point are equal in length.", a: "True" },
        { q: "Tangents from one external point are x + 2 and 11. Find x.", a: "9" },
        { q: "If one tangent from an external point is 14, what is the other?", a: "14" },
        { q: "Tangents from the same point are 5x - 1 and 19. Find x.", a: "4" }
      ]
    },
    "Radius ⟂ chord and bisects chord": {
      items: [
        { q: "A radius meets a chord at 90°. What else does it do to the chord?", a: "Bisects it" },
        { q: "A chord is 16 cm long. A perpendicular radius meets it. Find half the chord.", a: "8" },
        { q: "True or false: a perpendicular from the centre to a chord bisects the chord.", a: "True" },
        { q: "Half a bisected chord is 6 cm. Find the full chord.", a: "12" },
        { q: "A radius is perpendicular to a 20 cm chord. Find each half.", a: "10" },
        { q: "Which theorem states that a perpendicular radius bisects a chord?", a: "Radius perpendicular to chord bisects chord" }
      ]
    },
    "Intersecting Chord Theorem (aka ‘power of a point’": {
      items: [
        { q: "Two chords intersect. One has segments 3 and 8, the other has segments 4 and x. Find x.", a: "6" },
        { q: "Two intersecting chords have segments 5 and 6 on one chord, and 3 and x on the other. Find x.", a: "10" },
        { q: "If one chord has segments 2 and 9 and the other 3 and x, find x.", a: "6" },
        { q: "True or false: for intersecting chords, segment product equals segment product.", a: "True" },
        { q: "Chords intersect with segments 4 and 7, and 2 and x. Find x.", a: "14" },
        { q: "Chords intersect with segments 6 and 10, and 5 and x. Find x.", a: "12" }
      ]
    },
    "Simplifying ratios": {
      items: [
        { q: "Simplify the ratio 18:24.", a: "3:4" },
        { q: "Simplify the ratio 14:35.", a: "2:5" },
        { q: "Simplify the ratio 45:60.", a: "3:4" },
        { q: "Simplify the ratio 27:9.", a: "3:1" },
        { q: "Simplify the ratio 32:48.", a: "2:3" },
        { q: "Simplify the ratio 21:49.", a: "3:7" }
      ]
    },
    "Comparing ratios": {
      items: [
        { q: "Which is greater: 2:3 or 3:4?", a: "3:4" },
        { q: "Are the ratios 4:6 and 10:15 equivalent?", a: "Yes" },
        { q: "Which is greater: 5:8 or 7:12?", a: "5:8" },
        { q: "Are 9:12 and 3:4 equivalent?", a: "Yes" },
        { q: "Which is greater: 4:5 or 7:9?", a: "4:5" },
        { q: "Are 8:14 and 12:21 equivalent?", a: "Yes" }
      ]
    },
    "Basic idea of inverse proportion can be introduced (e.g. twice as many people  half the time)": {
      items: [
        { q: "If twice as many workers do a job, what happens to the time?", a: "It halves" },
        { q: "If the number of people triples, what happens to the time in inverse proportion?", a: "It becomes a third" },
        { q: "4 workers take 6 hours. In inverse proportion, how long do 8 workers take?", a: "3" },
        { q: "5 taps fill a tank in 12 minutes. How long would 10 taps take in inverse proportion?", a: "6" },
        { q: "True or false: in inverse proportion, one quantity increases while the other decreases.", a: "True" },
        { q: "3 people take 20 minutes. How long would 1 person take in inverse proportion?", a: "60" }
      ]
    },
    "Direct proportion of two quantities": {
      items: [
        { q: "If y is directly proportional to x and y = 12 when x = 3, find y when x = 5.", a: "20" },
        { q: "If y is directly proportional to x and y = 18 when x = 6, find y when x = 10.", a: "30" },
        { q: "If y is directly proportional to x and y = 7 when x = 1, find y when x = 4.", a: "28" },
        { q: "If y is directly proportional to x and y = 15 when x = 5, find x when y = 24.", a: "8" },
        { q: "If y is directly proportional to x and y = 9 when x = 2, find y when x = 6.", a: "27" },
        { q: "If y is directly proportional to x and y = 40 when x = 8, find y when x = 3.", a: "15" }
      ]
    },
    "Direct prop’n of functions of two quantities": {
      items: [
        { q: "If y is directly proportional to x^2 and y = 18 when x = 3, find y when x = 5.", a: "50" },
        { q: "If y is directly proportional to x^2 and y = 8 when x = 2, find y when x = 6.", a: "72" },
        { q: "If y is directly proportional to sqrt(x) and y = 6 when x = 9, find y when x = 25.", a: "10" },
        { q: "If y is directly proportional to x^3 and y = 16 when x = 2, find y when x = 3.", a: "54" },
        { q: "If y is directly proportional to x^2 and y = 27 when x = 3, find x when y = 75.", a: "5" },
        { q: "If y is directly proportional to sqrt(x) and y = 4 when x = 16, find y when x = 81.", a: "9" }
      ]
    },
    "Inverse prop’n of two quantities": {
      items: [
        { q: "If y is inversely proportional to x and y = 12 when x = 2, find y when x = 8.", a: "3" },
        { q: "If y is inversely proportional to x and y = 15 when x = 3, find y when x = 5.", a: "9" },
        { q: "If y is inversely proportional to x and y = 20 when x = 4, find y when x = 10.", a: "8" },
        { q: "If y is inversely proportional to x and y = 18 when x = 6, find x when y = 9.", a: "12" },
        { q: "If y is inversely proportional to x and y = 7 when x = 1, find y when x = 14.", a: "1/2" },
        { q: "If y is inversely proportional to x and y = 30 when x = 5, find y when x = 3.", a: "50" }
      ]
    },
    "Inverse prop’n of functions of two quantities": {
      items: [
        { q: "If y is inversely proportional to x^2 and y = 8 when x = 2, find y when x = 4.", a: "2" },
        { q: "If y is inversely proportional to sqrt(x) and y = 12 when x = 9, find y when x = 25.", a: "36/5" },
        { q: "If y is inversely proportional to x^2 and y = 18 when x = 3, find y when x = 6.", a: "9/2" },
        { q: "If y is inversely proportional to x^3 and y = 16 when x = 2, find y when x = 4.", a: "2" },
        { q: "If y is inversely proportional to sqrt(x) and y = 20 when x = 4, find y when x = 25.", a: "8" },
        { q: "If y is inversely proportional to x^2 and y = 50 when x = 1, find y when x = 5.", a: "2" }
      ]
    },
    "Levels of accuracy; d.p. and s.f.": {
      items: [
        { q: "A value 7.36 is given to 1 d.p. What are the lower and upper bounds?", a: "7.35 and 7.45" },
        { q: "A value 580 is given to 2 s.f. What are the lower and upper bounds?", a: "575 and 585" },
        { q: "A length 3.4 cm is correct to 1 d.p. State the error interval.", a: "3.35 <= x < 3.45" },
        { q: "A mass 2.75 kg is given to 2 d.p. What is the upper bound?", a: "2.755" },
        { q: "A population 4300 is given to 2 s.f. What is the lower bound?", a: "4250" },
        { q: "A number 9.81 is correct to 2 d.p. State the lower bound.", a: "9.805" }
      ]
    },
    "Upper and lower bounds of values": {
      items: [
        { q: "A length is 8.2 cm correct to 1 d.p. Find the lower bound.", a: "8.15" },
        { q: "A width is 15 cm correct to the nearest cm. Find the upper bound.", a: "15.5" },
        { q: "A time is 2.4 s correct to 1 d.p. Find the upper bound.", a: "2.45" },
        { q: "A mass is 350 g correct to 2 s.f. Find the lower bound.", a: "345" },
        { q: "A distance is 1.25 km correct to 2 d.p. Find the lower bound.", a: "1.245" },
        { q: "A value is 74 correct to the nearest integer. Find the error interval.", a: "73.5 <= x < 74.5" }
      ]
    },
    "Calculations with bounds": {
      items: [
        { q: "A length is 5.2 cm and width is 3.1 cm, both correct to 1 d.p. Find the upper bound for the area.", a: "16.8975" },
        { q: "A distance is 120 m and time is 15 s, both correct to the nearest integer. Find the upper bound for the speed.", a: "8.0333" },
        { q: "A rectangle is 8.4 m by 2.6 m, both to 1 d.p. Find the lower bound for the area.", a: "21.375" },
        { q: "A mass is 7.5 kg and 3 equal bags are made. Both values exact except the mass is correct to 1 d.p. Find the upper bound for one bag.", a: "2.5167" },
        { q: "A distance is 40 km correct to the nearest km and fuel used is 5 L correct to the nearest litre. Find the lower bound for km/L.", a: "7.1818" },
        { q: "A square has side 6.0 cm correct to 1 d.p. Find the upper bound for its perimeter.", a: "24.2" }
      ]
    },
    "Include “…an appropriate degree of accuracy”": {
      items: [
        { q: "A calculation gives 18.67391 for a length in cm. State an appropriate degree of accuracy.", a: "18.7 cm" },
        { q: "A population estimate is 2486.7 people. Give an appropriate degree of accuracy.", a: "2487" },
        { q: "A cost is 12.384 pounds. State an appropriate degree of accuracy.", a: "12.38" },
        { q: "A speed is 17.246 m/s. Give an appropriate degree of accuracy.", a: "17.2 m/s" },
        { q: "An area is 53.998 cm^2. State an appropriate degree of accuracy.", a: "54.0 cm^2" },
        { q: "A journey time is 2.483 hours. State an appropriate degree of accuracy.", a: "2.48 h" }
      ]
    },
    "Length of an arc": {
      items: [
        { q: "Find the arc length of a sector with radius 6 cm and angle 120°.", a: "4pi" },
        { q: "Find the arc length of a sector with radius 10 cm and angle 90°.", a: "5pi" },
        { q: "Find the arc length of a sector with radius 8 cm and angle 45°.", a: "2pi" },
        { q: "Find the arc length of a sector with radius 12 cm and angle 150°.", a: "10pi" },
        { q: "Find the arc length of a sector with radius 14 cm and angle 180°.", a: "14pi" },
        { q: "Find the arc length of a sector with radius 9 cm and angle 80°.", a: "4pi" }
      ]
    },
    "Area of a sector": {
      items: [
        { q: "Find the area of a sector with radius 6 cm and angle 120°.", a: "12pi" },
        { q: "Find the area of a sector with radius 10 cm and angle 90°.", a: "25pi" },
        { q: "Find the area of a sector with radius 8 cm and angle 45°.", a: "8pi" },
        { q: "Find the area of a sector with radius 12 cm and angle 150°.", a: "60pi" },
        { q: "Find the area of a semicircle with radius 14 cm.", a: "98pi" },
        { q: "Find the area of a sector with radius 9 cm and angle 80°.", a: "18pi" }
      ]
    },
    "Area of a segment": {
      items: [
        { q: "A 90° sector of radius 6 cm has the triangle removed. Find the area of the segment.", a: "9pi - 18" },
        { q: "A 60° sector of radius 12 cm has the triangle removed. Find the area of the segment.", a: "24pi - 36sqrt(3)" },
        { q: "A 180° sector of radius 5 cm has the triangle removed. Find the area of the segment.", a: "25pi/2 - 25/2" },
        { q: "A 120° sector of radius 3 cm has the triangle removed. Find the area of the segment.", a: "3pi - 9sqrt(3)/4" },
        { q: "A 90° sector of radius 4 cm has the triangle removed. Find the area of the segment.", a: "4pi - 8" },
        { q: "A 60° sector of radius 6 cm has the triangle removed. Find the area of the segment.", a: "6pi - 9sqrt(3)" }
      ]
    },
    "Prisms, cylinders & spheres": {
      items: [
        { q: "Find the volume of a cylinder of radius 3 cm and height 10 cm.", a: "90pi" },
        { q: "Find the surface area of a cylinder of radius 4 cm and height 5 cm.", a: "72pi" },
        { q: "Find the volume of a sphere of radius 6 cm.", a: "288pi" },
        { q: "Find the volume of a prism with cross-sectional area 12 cm^2 and length 8 cm.", a: "96" },
        { q: "Find the curved surface area of a cylinder of radius 7 cm and height 9 cm.", a: "126pi" },
        { q: "Find the surface area of a sphere of radius 5 cm.", a: "100pi" }
      ]
    },
    "Compound figures": {
      items: [
        { q: "A solid is made from a cylinder of volume 50pi and a hemisphere of volume 18pi. Find the total volume.", a: "68pi" },
        { q: "A cuboid has volume 120 cm^3 and a cylinder hole of volume 15pi cm^3 is removed. Find the remaining volume.", a: "120 - 15pi" },
        { q: "A prism of volume 72 cm^3 is joined to a cube of volume 27 cm^3. Find the total volume.", a: "99" },
        { q: "A cylinder of volume 81pi cm^3 has a cone of volume 21pi cm^3 removed. Find the remaining volume.", a: "60pi" },
        { q: "Two spheres each have volume 36pi cm^3. Find the combined volume.", a: "72pi" },
        { q: "A hemisphere of volume 144pi cm^3 is joined to a cylinder of volume 80pi cm^3. Find the total volume.", a: "224pi" }
      ]
    },
    "Revise factorising": {
      items: [
        { q: "Factorise: x^2 + 6x + 8", a: "(x + 2)(x + 4)" },
        { q: "Factorise: x^2 - x - 20", a: "(x - 5)(x + 4)" },
        { q: "Factorise: 2x^2 + 9x + 4", a: "(2x + 1)(x + 4)" },
        { q: "Factorise: 3x^2 - 10x - 8", a: "(3x + 2)(x - 4)" },
        { q: "Factorise: x^2 - 16", a: "(x - 4)(x + 4)" },
        { q: "Factorise: 4x^2 - 25", a: "(2x - 5)(2x + 5)" }
      ]
    },
    "Formula": {
      items: [
        { q: "Solve using the quadratic formula: x^2 - 5x + 6 = 0", a: "x = 2 or x = 3" },
        { q: "Solve using the quadratic formula: x^2 + x - 12 = 0", a: "x = 3 or x = -4" },
        { q: "Solve using the quadratic formula: 2x^2 - 3x - 2 = 0", a: "x = 2 or x = -1/2" },
        { q: "Solve using the quadratic formula: x^2 - 4x - 5 = 0", a: "x = 5 or x = -1" },
        { q: "Solve using the quadratic formula: 3x^2 + x - 2 = 0", a: "x = 2/3 or x = -1" },
        { q: "Solve using the quadratic formula: x^2 - 2x - 8 = 0", a: "x = 4 or x = -2" }
      ]
    },
    "Completing the Square": {
      items: [
        { q: "Write x^2 + 6x + 5 in the form (x + a)^2 + b.", a: "(x + 3)^2 - 4" },
        { q: "Write x^2 - 8x + 3 in the form (x + a)^2 + b.", a: "(x - 4)^2 - 13" },
        { q: "Write x^2 + 4x - 1 in the form (x + a)^2 + b.", a: "(x + 2)^2 - 5" },
        { q: "Write x^2 - 2x + 7 in the form (x + a)^2 + b.", a: "(x - 1)^2 + 6" },
        { q: "Write x^2 + 10x + 1 in the form (x + a)^2 + b.", a: "(x + 5)^2 - 24" },
        { q: "Write x^2 - 12x + 20 in the form (x + a)^2 + b.", a: "(x - 6)^2 - 16" }
      ]
    },
    "Drawing quadratic graphs pt 2": {
      items: [
        { q: "For y = x^2 - 6x + 5, find the vertex.", a: "(3,-4)" },
        { q: "For y = x^2 - 4x - 5, find the x-intercepts.", a: "x = 5 and x = -1" },
        { q: "For y = -x^2 + 2x + 3, does the graph open up or down?", a: "Down" },
        { q: "For y = x^2 + 2x - 8, find the y-intercept.", a: "-8" },
        { q: "For y = (x - 4)^2 + 1, find the vertex.", a: "(4,1)" },
        { q: "For y = x^2 - 9, find the line of symmetry.", a: "x = 0" }
      ]
    },
    "Quadratic Inequalities": {
      items: [
        { q: "Solve: x^2 - 5x + 6 >= 0", a: "x <= 2 or x >= 3" },
        { q: "Solve: x^2 - 9 < 0", a: "-3 < x < 3" },
        { q: "Solve: x^2 + x - 6 <= 0", a: "-3 <= x <= 2" },
        { q: "Solve: x^2 - x - 12 > 0", a: "x < -3 or x > 4" },
        { q: "Solve: x^2 - 4x + 3 < 0", a: "1 < x < 3" },
        { q: "Solve: x^2 + 2x - 8 >= 0", a: "x <= -4 or x >= 2" }
      ]
    },
    "1 linear, 1 quadratic": {
      items: [
        { q: "Solve simultaneously: y = x + 1 and y = x^2 - 3.", a: "(2,3) and (-1,0)" },
        { q: "Solve simultaneously: y = 2x and y = x^2 - 2.", a: "(1,2) and (-2,-4)" },
        { q: "Solve simultaneously: y = x + 3 and y = x^2 - x + 1.", a: "(2,5) and (-1,2)" },
        { q: "Solve simultaneously: y = 3x - 2 and y = x^2 + x - 2.", a: "(0,-2) and (2,4)" },
        { q: "Solve simultaneously: y = x - 1 and y = x^2 - 5.", a: "(2,1) and (-1,-2)" },
        { q: "Solve simultaneously: y = x + 2 and y = x^2 + 2x.", a: "(1,3) and (-2,0)" }
      ]
    },
    "Definition of a sequence": {
      items: [
        { q: "What is the next term in 3, 6, 9, 12, ...?", a: "15" },
        { q: "What is the next term in 5, 8, 11, 14, ...?", a: "17" },
        { q: "Is 2, 4, 8, 16, ... a sequence?", a: "Yes" },
        { q: "What is the common difference in 7, 10, 13, 16, ...?", a: "3" },
        { q: "What is the next term in 1, 4, 9, 16, ...?", a: "25" },
        { q: "What is the first term of 12, 15, 18, ...?", a: "12" }
      ]
    },
    "AdMaths recurrence relationships (there’s not a lot here, but this can extend to difference equations if you want to!)": {
      items: [
        { q: "Given u_(n+1) = u_n + 3 and u_1 = 2, find u_2.", a: "5" },
        { q: "Given u_(n+1) = 2u_n and u_1 = 4, find u_3.", a: "16" },
        { q: "Given u_(n+1) = u_n - 5 and u_1 = 20, find u_4.", a: "5" },
        { q: "Given u_(n+1) = 3u_n and u_1 = 1, find u_4.", a: "27" },
        { q: "Given u_(n+1) = u_n + 2 and u_1 = 7, find u_5.", a: "15" },
        { q: "Given u_(n+1) = u_n / 2 and u_1 = 32, find u_3.", a: "8" }
      ]
    },
    "Quadratic sequences are a good area for investigation.": {
      items: [
        { q: "Find the next term in 1, 4, 9, 16, ...", a: "25" },
        { q: "Find the next term in 2, 6, 12, 20, ...", a: "30" },
        { q: "The nth term is n^2 + 1. Find the 4th term.", a: "17" },
        { q: "Find the next term in 3, 8, 15, 24, ...", a: "35" },
        { q: "The nth term is n^2 - n. Find the 5th term.", a: "20" },
        { q: "Find the next term in 5, 10, 17, 26, ...", a: "37" }
      ]
    },
    "Geometric sequences and series": {
      items: [
        { q: "Find the next term in 2, 6, 18, 54, ...", a: "162" },
        { q: "Find the common ratio of 5, 10, 20, 40, ...", a: "2" },
        { q: "Find the 5th term of a geometric sequence with first term 3 and ratio 2.", a: "48" },
        { q: "Find the sum of the first 4 terms of 2, 4, 8, 16, ...", a: "30" },
        { q: "Find the next term in 81, 27, 9, 3, ...", a: "1" },
        { q: "A geometric series has first term 1 and ratio 3. Find the first 3-term sum.", a: "13" }
      ]
    },
    "Arithmetic sequences": {
      items: [
        { q: "Find the next term in 4, 9, 14, 19, ...", a: "24" },
        { q: "Find the common difference of 12, 17, 22, 27, ...", a: "5" },
        { q: "Find the 10th term of an arithmetic sequence with first term 3 and difference 4.", a: "39" },
        { q: "Find the nth term of 5, 8, 11, 14, ...", a: "3n + 2" },
        { q: "Find the 7th term of 2, 6, 10, 14, ...", a: "26" },
        { q: "Find the nth term of 9, 13, 17, 21, ...", a: "4n + 5" }
      ]
    },
    "Arithmetic series": {
      items: [
        { q: "Find the sum of the first 5 terms of 3, 7, 11, 15, ...", a: "55" },
        { q: "Find the sum of the first 10 natural numbers.", a: "55" },
        { q: "Find the sum of the first 4 terms of 6, 9, 12, 15, ...", a: "42" },
        { q: "Find the sum of the first 6 terms of 2, 5, 8, 11, ...", a: "57" },
        { q: "Find the sum of the first 8 terms of 1, 4, 7, 10, ...", a: "92" },
        { q: "Find the sum of the first 3 terms of 10, 13, 16, ...", a: "39" }
      ]
    },
    "Problem solving": {
      items: [
        { q: "A sequence starts at 4 and increases by 3 each term. Find the 8th term.", a: "25" },
        { q: "The 1st term of an arithmetic sequence is 7 and the 5th term is 23. Find the common difference.", a: "4" },
        { q: "A geometric sequence starts at 2 and doubles each time. Find the 6th term.", a: "64" },
        { q: "The nth term of a sequence is 5n - 1. Find the 9th term.", a: "44" },
        { q: "The 3rd term of an arithmetic sequence is 11 and the common difference is 4. Find the 1st term.", a: "3" },
        { q: "A sequence has nth term n^2 + 2n. Find the 5th term.", a: "35" }
      ]
    },
    "Basic ideas and results": {
      items: [
        { q: "What is the probability of getting a head on a fair coin?", a: "1/2" },
        { q: "What is the probability of rolling a 4 on a fair six-sided die?", a: "1/6" },
        { q: "If P(A) = 0.35, find P(not A).", a: "0.65" },
        { q: "Can a probability be greater than 1?", a: "No" },
        { q: "The probability of rain is 0.2. Write this as a percentage.", a: "20%" },
        { q: "A bag has 3 red and 2 blue counters. Find P(red).", a: "3/5" }
      ]
    },
    "Sample space": {
      items: [
        { q: "How many outcomes are there when two fair coins are tossed?", a: "4" },
        { q: "List the sample space size for rolling a die and flipping a coin.", a: "12" },
        { q: "How many outcomes are there when two six-sided dice are rolled?", a: "36" },
        { q: "A spinner has 5 equal sections. It is spun twice. How many outcomes are there?", a: "25" },
        { q: "How many outcomes are there when a die is rolled three times?", a: "216" },
        { q: "A card is chosen from 4 cards labelled A, B, C, D and a coin is tossed. How many outcomes?", a: "8" }
      ]
    },
    "Definitions of independent and mutually exclusive": {
      items: [
        { q: "Can two mutually exclusive events happen together?", a: "No" },
        { q: "If two events are independent, does one affect the probability of the other?", a: "No" },
        { q: "Are getting a head and getting a tail on one coin toss mutually exclusive?", a: "Yes" },
        { q: "Are rolling a 3 and rolling an odd number on one die mutually exclusive?", a: "No" },
        { q: "Are tossing a coin and rolling a die independent events?", a: "Yes" },
        { q: "If events A and B are mutually exclusive, what is P(A and B)?", a: "0" }
      ]
    },
    "Multiplication law": {
      items: [
        { q: "A coin is tossed twice. Find the probability of two heads.", a: "1/4" },
        { q: "A die is rolled twice. Find the probability of getting a 6 both times.", a: "1/36" },
        { q: "Two independent events have probabilities 0.3 and 0.5. Find the probability both occur.", a: "0.15" },
        { q: "A bag has 2 red and 3 blue counters. Two counters are chosen with replacement. Find P(red then red).", a: "4/25" },
        { q: "Find the probability of choosing an ace from a pack and then rolling an even number.", a: "1/26" },
        { q: "A spinner lands on green with probability 0.4. It is spun twice. Find P(green both times).", a: "0.16" }
      ]
    },
    "Tree diagrams": {
      items: [
        { q: "A bag has 1 red and 3 blue counters. One counter is chosen, replaced, then another is chosen. Find P(red then blue).", a: "3/16" },
        { q: "A fair coin is tossed twice. What is the probability of exactly one head?", a: "1/2" },
        { q: "A bag has 2 red and 1 green counter. One is chosen with replacement twice. Find P(two greens).", a: "1/9" },
        { q: "A die is rolled twice. Find the probability of getting an odd number both times.", a: "1/4" },
        { q: "A spinner has equal sections red, blue, blue. It is spun twice. Find P(red then red).", a: "1/9" },
        { q: "A bag has 4 black and 1 white counter. With replacement, find P(one black then one white).", a: "4/25" }
      ]
    },
    "Basic binomial": {
      items: [
        { q: "Find (x + 2)^2.", a: "x^2 + 4x + 4" },
        { q: "Find (x + 3)^2.", a: "x^2 + 6x + 9" },
        { q: "Find (2x + 1)^2.", a: "4x^2 + 4x + 1" },
        { q: "Find (x - 5)^2.", a: "x^2 - 10x + 25" },
        { q: "Find (3x - 2)^2.", a: "9x^2 - 12x + 4" },
        { q: "Find (2x + 5)^2.", a: "4x^2 + 20x + 25" }
      ]
    },
    "Sine rule": {
      items: [
        { q: "In triangle ABC, a = 8, A = 30°, B = 45°. Find b.", a: "8sqrt(2)" },
        { q: "In triangle ABC, a = 10, A = 90°, B = 30°. Find b.", a: "5" },
        { q: "In triangle ABC, a = 12, A = 60°, B = 45°. Find b.", a: "4sqrt(6)" },
        { q: "In triangle ABC, a = 14, A = 45°, B = 30°. Find b.", a: "7sqrt(2)" },
        { q: "In triangle ABC, a = 6, A = 30°, B = 60°. Find b.", a: "6sqrt(3)" },
        { q: "In triangle ABC, a = 9, A = 90°, B = 45°. Find b.", a: "9sqrt(2)/2" }
      ]
    },
    "Cosine rule": {
      items: [
        { q: "Two sides of a triangle are 5 cm and 7 cm with included angle 60°. Find the third side.", a: "sqrt(39)" },
        { q: "Two sides are 8 cm and 10 cm with included angle 90°. Find the third side.", a: "2sqrt(41)" },
        { q: "Two sides are 6 cm and 9 cm with included angle 120°. Find the third side.", a: "3sqrt(7)" },
        { q: "Two sides are 7 cm and 7 cm with included angle 60°. Find the third side.", a: "7" },
        { q: "Two sides are 12 cm and 5 cm with included angle 180°. Find the third side.", a: "17" },
        { q: "Two sides are 9 cm and 9 cm with included angle 120°. Find the third side.", a: "9sqrt(3)" }
      ]
    },
    "Area of a triangle": {
      items: [
        { q: "Find the area of a triangle with sides 8 cm and 10 cm including angle 30°.", a: "20" },
        { q: "Find the area of a triangle with sides 6 cm and 7 cm including angle 90°.", a: "21" },
        { q: "Find the area of a triangle with sides 12 cm and 5 cm including angle 60°.", a: "15sqrt(3)" },
        { q: "Find the area of a triangle with sides 9 cm and 9 cm including angle 45°.", a: "81sqrt(2)/4" },
        { q: "Find the area of a triangle with sides 14 cm and 4 cm including angle 30°.", a: "14" },
        { q: "Find the area of a triangle with sides 11 cm and 13 cm including angle 180°.", a: "0" }
      ]
    },
    "Problem solving": {
      items: [
        { q: "A ladder 10 m long makes an angle of 30° with the ground. Find the vertical height reached.", a: "5" },
        { q: "A ship travels 12 km east then 5 km north. Find the direct distance from the start.", a: "13" },
        { q: "In a triangle, two sides are 7 cm and 9 cm with angle 60° between them. Find the area.", a: "63sqrt(3)/4" },
        { q: "A kite string is 20 m long and makes a 45° angle with the ground. Find the height.", a: "10sqrt(2)" },
        { q: "Two sides of a triangle are 8 cm and 15 cm at right angles. Find the third side.", a: "17" },
        { q: "A man walks 6 km south and 8 km east. Find how far he is from the start.", a: "10" }
      ]
    },
    "Sine rule ambiguous case": {
      items: [
        { q: "A triangle has side a = 10, angle A = 30°, and side b = 12. How many possible triangles are there?", a: "2" },
        { q: "A triangle has side a = 8, angle A = 45°, and side b = 5. How many possible triangles are there?", a: "1" },
        { q: "A triangle has side a = 6, angle A = 30°, and side b = 14. How many possible triangles are there?", a: "0" },
        { q: "A triangle has side a = 9, angle A = 35°, and side b = 11. How many possible triangles are there?", a: "2" },
        { q: "A triangle has side a = 7, angle A = 60°, and side b = 6. How many possible triangles are there?", a: "1" },
        { q: "A triangle has side a = 5, angle A = 20°, and side b = 9. How many possible triangles are there?", a: "0" }
      ]
    },
    "Trig graphs": {
      items: [
        { q: "For y = sin x, find the value at x = 90°.", a: "1" },
        { q: "For y = cos x, find the value at x = 180°.", a: "-1" },
        { q: "For y = sin x, find the value at x = 0°.", a: "0" },
        { q: "For y = cos x, find the value at x = 0°.", a: "1" },
        { q: "For y = sin x, find the value at x = 270°.", a: "-1" },
        { q: "For y = cos x, find the value at x = 90°.", a: "0" }
      ]
    },
    "Plotting graphs": {
      items: [
        { q: "Find the y-value when x = 2 for y = x^2 - 3.", a: "1" },
        { q: "Find the y-value when x = -1 for y = 2x + 5.", a: "3" },
        { q: "Find the y-value when x = 3 for y = x^2 + 1.", a: "10" },
        { q: "Find the y-value when x = 0 for y = 4 - x.", a: "4" },
        { q: "Find the y-value when x = -2 for y = x^2 - 1.", a: "3" },
        { q: "Find the y-value when x = 5 for y = 3x - 4.", a: "11" }
      ]
    },
    "Reading solutions off a graph": {
      items: [
        { q: "If the graph of y = x^2 - 4 crosses the x-axis at x = a and x = b, find a and b.", a: "-2 and 2" },
        { q: "The line y = 2x + 1 crosses the y-axis at what value?", a: "1" },
        { q: "The graph y = x^2 has minimum point at what coordinate?", a: "(0,0)" },
        { q: "The graph y = x - 3 crosses the x-axis at x = what?", a: "3" },
        { q: "The graph y = (x - 1)^2 has vertex at what coordinate?", a: "(1,0)" },
        { q: "The graph y = -x + 5 crosses the y-axis at what value?", a: "5" }
      ]
    },
    "Rearranging before finding a graphical solution": {
      items: [
        { q: "Rearrange x + y = 7 into the form y = mx + c.", a: "y = 7 - x" },
        { q: "Rearrange 2x + y = 9 into the form y = mx + c.", a: "y = 9 - 2x" },
        { q: "Rearrange x - y = 4 into the form y = mx + c.", a: "y = x - 4" },
        { q: "Rearrange 3x + 2y = 8 into the form y = mx + c.", a: "y = 4 - 3x/2" },
        { q: "Rearrange y - x = 6 into the form y = mx + c.", a: "y = x + 6" },
        { q: "Rearrange 4x - y = 1 into the form y = mx + c.", a: "y = 4x - 1" }
      ]
    },
    "Drawing a tangent to estimate gradient": {
      items: [
        { q: "A tangent rises 6 units for a run of 2 units. Estimate the gradient.", a: "3" },
        { q: "A tangent falls 4 units over a run of 8 units. Estimate the gradient.", a: "-1/2" },
        { q: "A tangent rises 5 units over a run of 5 units. Estimate the gradient.", a: "1" },
        { q: "A tangent falls 9 units over a run of 3 units. Estimate the gradient.", a: "-3" },
        { q: "A tangent rises 2 units over a run of 10 units. Estimate the gradient.", a: "1/5" },
        { q: "A tangent falls 1 unit over a run of 4 units. Estimate the gradient.", a: "-1/4" }
      ]
    },
    "Speed-distance-time": {
      items: [
        { q: "A car travels 150 km in 3 hours. Find the speed.", a: "50" },
        { q: "A runner moves at 8 m/s for 25 s. Find the distance.", a: "200" },
        { q: "A plane travels 600 km at 200 km/h. Find the time.", a: "3" },
        { q: "A cyclist travels 45 km in 1.5 hours. Find the speed.", a: "30" },
        { q: "A train moves at 90 km/h for 2 hours. Find the distance.", a: "180" },
        { q: "A boat covers 72 km at 24 km/h. Find the time.", a: "3" }
      ]
    },
    "Other compound measures": {
      items: [
        { q: "A force of 60 N acts on an area of 12 m^2. Find the pressure.", a: "5" },
        { q: "A density is 8 g/cm^3 and the volume is 15 cm^3. Find the mass.", a: "120" },
        { q: "A mass is 54 g and the volume is 6 cm^3. Find the density.", a: "9" },
        { q: "A force of 45 N acts on 9 m^2. Find the pressure.", a: "5" },
        { q: "A pressure is 7 N/m^2 over an area of 4 m^2. Find the force.", a: "28" },
        { q: "A density is 2.5 g/cm^3 and the mass is 20 g. Find the volume.", a: "8" }
      ]
    },
    "Drawing and interpreting travel graphs": {
      items: [
        { q: "On a distance-time graph, what does a flat section mean?", a: "Stationary" },
        { q: "On a distance-time graph, what does a steeper line mean?", a: "Faster speed" },
        { q: "A journey covers 120 km in 3 hours on a travel graph. Find the average speed.", a: "40" },
        { q: "A travel graph goes from 0 km to 90 km in 1.5 hours. Find the speed.", a: "60" },
        { q: "A section slopes downwards on a distance-time graph. What does this mean?", a: "Returning towards the start" },
        { q: "If a travel graph is horizontal for 20 minutes, what is happening?", a: "No movement" }
      ]
    }
  },
  "Fifth Form": {
    "Revise basics": {
      items: [
        { q: "Simplify sqrt(18) + sqrt(8).", a: "5sqrt(2)" },
        { q: "Simplify 3sqrt(5) - sqrt(5).", a: "2sqrt(5)" },
        { q: "Simplify sqrt(27) + 2sqrt(3).", a: "5sqrt(3)" },
        { q: "Simplify sqrt(50) - sqrt(8).", a: "3sqrt(2)" },
        { q: "Simplify 4sqrt(7) + 3sqrt(7).", a: "7sqrt(7)" },
        { q: "Simplify sqrt(12) + sqrt(75).", a: "7sqrt(3)" }
      ]
    },
    "Rationalising": {
      items: [
        { q: "Rationalise the denominator: 1/sqrt(2).", a: "sqrt(2)/2" },
        { q: "Rationalise the denominator: 3/sqrt(5).", a: "3sqrt(5)/5" },
        { q: "Rationalise the denominator: 2/(3sqrt(7)).", a: "2sqrt(7)/21" },
        { q: "Rationalise the denominator: 5/sqrt(3).", a: "5sqrt(3)/3" },
        { q: "Rationalise the denominator: 4/(sqrt(11)).", a: "4sqrt(11)/11" },
        { q: "Rationalise the denominator: 7/(2sqrt(2)).", a: "7sqrt(2)/4" }
      ]
    },
    "Basic process": {
      items: [
        { q: "Differentiate y = x^3.", a: "3x^2" },
        { q: "Differentiate y = 5x^4.", a: "20x^3" },
        { q: "Differentiate y = 7x.", a: "7" },
        { q: "Differentiate y = 4x^2 + 3x.", a: "8x + 3" },
        { q: "Differentiate y = x^5 - 2x^2.", a: "5x^4 - 4x" },
        { q: "Differentiate y = 6x^3 + 2.", a: "18x^2" }
      ]
    },
    "Rewriting into index form": {
      items: [
        { q: "Differentiate y = 3/sqrt(x).", a: "-3/(2x^(3/2))" },
        { q: "Differentiate y = 2sqrt(x).", a: "1/sqrt(x)" },
        { q: "Differentiate y = 5/x^2.", a: "-10/x^3" },
        { q: "Differentiate y = 4x^(1/2) + x^(-1).", a: "2x^(-1/2) - x^(-2)" },
        { q: "Differentiate y = x^(3/2).", a: "(3/2)x^(1/2)" },
        { q: "Differentiate y = 6x^(-1/2).", a: "-3x^(-3/2)" }
      ]
    },
    "Using differentiation to find gradient": {
      items: [
        { q: "Find the gradient of y = x^2 at x = 3.", a: "6" },
        { q: "Find the gradient of y = x^3 at x = 2.", a: "12" },
        { q: "Find the gradient of y = 4x^2 - x at x = 1.", a: "7" },
        { q: "Find the gradient of y = 2x^3 - 5x at x = -1.", a: "1" },
        { q: "Find the gradient of y = 3x^2 + 2x at x = 4.", a: "26" },
        { q: "Find the gradient of y = x^4 at x = 1.", a: "4" }
      ]
    },
    "Words": {
      items: [
        { q: "What does differentiate mean in one sentence?", a: "Find the rate of change" },
        { q: "What does the gradient of a curve mean at a point?", a: "The slope of the tangent there" },
        { q: "Is differentiation about average or instantaneous rate of change?", a: "Instantaneous" },
        { q: "What line is used to represent the gradient at a single point on a curve?", a: "Tangent" },
        { q: "True or false: the derivative gives the gradient function.", a: "True" },
        { q: "What does stationary point mean?", a: "A point where the gradient is zero" }
      ]
    },
    "Stationary points": {
      items: [
        { q: "Find the x-coordinate of the stationary point of y = x^2 - 4x + 1.", a: "2" },
        { q: "Find the x-coordinate of the stationary point of y = x^2 + 6x + 2.", a: "-3" },
        { q: "Find the stationary point of y = x^2 - 8x + 5.", a: "(4,-11)" },
        { q: "Find the stationary point of y = x^2 + 2x - 3.", a: "(-1,-4)" },
        { q: "Find the x-coordinate of the stationary point of y = 3x^2 - 12x + 7.", a: "2" },
        { q: "Find the stationary point of y = x^2 - 10x + 9.", a: "(5,-16)" }
      ]
    },
    "Problems in context": {
      items: [
        { q: "The distance of a particle is s = t^2 + 3t. Find the velocity when t = 2.", a: "7" },
        { q: "A height is given by h = -x^2 + 6x. Find the gradient when x = 1.", a: "4" },
        { q: "The cost is C = 2x^2 + 5x. Find the rate of change when x = 3.", a: "17" },
        { q: "The distance is s = x^3. Find the velocity when x = 2.", a: "12" },
        { q: "The area is A = x^2 + x. Find the rate of change when x = 4.", a: "9" },
        { q: "The height is h = x^2 - 2x. Find the stationary point x-value.", a: "1" }
      ]
    },
    "Definition: what is a set": {
      items: [
        { q: "Write the set of even numbers less than 10.", a: "{2,4,6,8}" },
        { q: "Is 3 in the set {1,2,4}?", a: "No" },
        { q: "List the set of prime numbers less than 8.", a: "{2,3,5,7}" },
        { q: "What brackets are used for a set?", a: "Curly brackets" },
        { q: "Is {a,e,i,o,u} a set?", a: "Yes" },
        { q: "Can a set contain repeated elements?", a: "No" }
      ]
    },
    "Universal set": {
      items: [
        { q: "If U = {1,2,3,4,5,6}, find the complement of {1,3,5}.", a: "{2,4,6}" },
        { q: "Is 11 in U = {1,2,3,4,5,6,7,8,9,10}?", a: "No" },
        { q: "True or false: every set A discussed in a question is a subset of U.", a: "True" },
        { q: "If U = {a,b,c,d} and A = {a,c}, find A'.", a: "{b,d}" },
        { q: "What does the universal set represent?", a: "All elements being considered" },
        { q: "If U = {1,2,3,4} and B = {2,4}, find B'.", a: "{1,3}" }
      ]
    },
    "Intersection and union": {
      items: [
        { q: "If A = {1,2,3} and B = {3,4,5}, find A n B.", a: "{3}" },
        { q: "If A = {1,2,3} and B = {3,4,5}, find A u B.", a: "{1,2,3,4,5}" },
        { q: "If A and B have no common elements, what is A n B?", a: "{}" },
        { q: "If A = {2,4,6} and B = {4,6,8}, find A n B.", a: "{4,6}" },
        { q: "If A = {a,b} and B = {b,c,d}, find A u B.", a: "{a,b,c,d}" },
        { q: "What word describes two sets with empty intersection?", a: "Disjoint" }
      ]
    },
    "Venn diagrams (Euler diagrams)": {
      items: [
        { q: "In a class of 30, 18 like maths, 12 like physics, and 7 like both. How many like maths only?", a: "11" },
        { q: "In the same class, how many like neither subject?", a: "7" },
        { q: "How many like at least one subject?", a: "23" },
        { q: "A Venn diagram has 5 in A only, 3 in both, and 4 in B only. How many are in A?", a: "8" },
        { q: "If 20 are in U, 6 in A only, 5 in both, and 3 in B only, how many are outside both?", a: "6" },
        { q: "What does the overlap in a Venn diagram represent?", a: "Intersection" }
      ]
    },
    "Addition and subtraction": {
      items: [
        { q: "Simplify: 2/3 + 5/12", a: "13/12" },
        { q: "Simplify: 7/(x+1) - 2/(x+1)", a: "5/(x+1)" },
        { q: "Simplify: x/(x-2) + 1/(x-2)", a: "(x+1)/(x-2)" },
        { q: "Simplify: 3/(x+4) + 2/(x+4)", a: "5/(x+4)" },
        { q: "Simplify: 5/a - 1/a", a: "4/a" },
        { q: "Simplify: 2/(x-1) + 3/(x-1)", a: "5/(x-1)" }
      ]
    },
    "Transformations": {
      items: [
        { q: "Translate the point (2,-1) by the vector (3,4).", a: "(5,3)" },
        { q: "Reflect the point (5,2) in the y-axis.", a: "(-5,2)" },
        { q: "Rotate the point (1,0) by 90° anticlockwise about the origin.", a: "(0,1)" },
        { q: "Translate the point (-2,3) by the vector (4,-1).", a: "(2,2)" },
        { q: "Reflect the point (4,-6) in the x-axis.", a: "(4,6)" },
        { q: "Rotate the point (0,2) by 180° about the origin.", a: "(0,-2)" }
      ]
    },
    "Half term prep: get a compass": {
      items: [
        { q: "Name two tools needed for geometric constructions.", a: "Compass and ruler" },
        { q: "Why should the compass width stay fixed when drawing equal arcs?", a: "To keep the radius equal" },
        { q: "What should be drawn lightly first in a construction?", a: "Construction arcs" },
        { q: "What does a ruler without markings help preserve in constructions?", a: "Accuracy of straight lines" },
        { q: "Should construction lines usually be erased before checking?", a: "No" },
        { q: "What is the main purpose of a compass in constructions?", a: "Drawing equal distances or arcs" }
      ]
    },
    "Constructions": {
      items: [
        { q: "Construct a line segment 6 cm long and find its midpoint. Where is the midpoint?", a: "3 cm from each end" },
        { q: "What angle should a constructed perpendicular make with the line?", a: "90" },
        { q: "A construction uses arcs from both endpoints of a segment. What line do the arc intersections help construct?", a: "Perpendicular bisector" },
        { q: "What does SSS mean when constructing a triangle?", a: "Side-side-side" },
        { q: "In a valid construction, should measurements be guessed freehand?", a: "No" },
        { q: "What tool is used to draw the arc in a construction?", a: "Compass" }
      ]
    },
    "Bisecting an angle": {
      items: [
        { q: "If an angle is 70°, what is each half after bisecting?", a: "35" },
        { q: "If an angle is 118°, what is each half after bisecting?", a: "59" },
        { q: "What do points on an angle bisector have equal distance from?", a: "Both arms of the angle" },
        { q: "If an angle is 96°, what is each half after bisecting?", a: "48" },
        { q: "A bisected angle gives two equal angles of 27°. What was the original angle?", a: "54" },
        { q: "What tool is essential for constructing an angle bisector?", a: "Compass" }
      ]
    },
    "Perpendicular bisector": {
      items: [
        { q: "What angle does a perpendicular bisector make with the segment?", a: "90" },
        { q: "What does a perpendicular bisector do to a line segment?", a: "Cuts it into two equal parts" },
        { q: "What is the locus of points equidistant from A and B?", a: "Perpendicular bisector" },
        { q: "A segment is 14 cm long. Where is the midpoint on its perpendicular bisector?", a: "7 cm from each end" },
        { q: "True or false: a perpendicular bisector passes through the midpoint.", a: "True" },
        { q: "What pair of arcs are used to construct a perpendicular bisector?", a: "Equal-radius arcs from each endpoint" }
      ]
    },
    "Constructing an equilateral triangle": {
      items: [
        { q: "If one side of an equilateral triangle is 8 cm, what are the other sides?", a: "8 cm each" },
        { q: "What is each interior angle of an equilateral triangle?", a: "60" },
        { q: "When constructing an equilateral triangle, what compass radius is used from each endpoint?", a: "The side length" },
        { q: "If an equilateral triangle has side 5 cm, what is its perimeter?", a: "15" },
        { q: "True or false: all angles in an equilateral triangle are equal.", a: "True" },
        { q: "What shape is formed when three sides are all equal?", a: "Equilateral triangle" }
      ]
    },
    "Domain and Range": {
      items: [
        { q: "For f(x) = x^2 with x in R, what is the range?", a: "y >= 0" },
        { q: "For f(x) = 1/x, what is the domain?", a: "x != 0" },
        { q: "For x in [0,3], f(x) = 2x + 1. What is the range?", a: "[1,7]" },
        { q: "For f(x) = sqrt(x), what is the domain?", a: "x >= 0" },
        { q: "For f(x) = x + 4, what is the domain if no restriction is given?", a: "All real numbers" },
        { q: "For f(x) = (x - 2)^2, what is the minimum value in the range?", a: "0" }
      ]
    },
    "Composite functions": {
      items: [
        { q: "If f(x) = 2x + 1 and g(x) = x^2, find f(g(3)).", a: "19" },
        { q: "If f(x) = 2x + 1 and g(x) = x^2, find g(f(x)).", a: "(2x + 1)^2" },
        { q: "If f(x) = 2x + 1 and g(x) = x^2, find f(g(x)).", a: "2x^2 + 1" },
        { q: "If f(x) = x - 4 and g(x) = 3x, find f(g(2)).", a: "2" },
        { q: "If f(x) = x + 5 and g(x) = 2x, find g(f(1)).", a: "12" },
        { q: "If f(x) = x^2 and g(x) = x + 1, find f(g(2)).", a: "9" }
      ]
    },
    "Inverses": {
      items: [
        { q: "Find the inverse of f(x) = 3x - 4.", a: "f^-1(x) = (x + 4)/3" },
        { q: "For f(x) = 3x - 4, find f^-1(11).", a: "5" },
        { q: "What condition must a function satisfy to have an inverse on its full domain?", a: "It must be one-to-one" },
        { q: "Find the inverse of f(x) = x + 7.", a: "f^-1(x) = x - 7" },
        { q: "Find the inverse of f(x) = 2x + 3.", a: "f^-1(x) = (x - 3)/2" },
        { q: "True or false: a many-to-one function has an inverse on the full domain.", a: "False" }
      ]
    },
    "Inverse of a quadratic": {
      items: [
        { q: "Why does y = x^2 not have an inverse on all real x?", a: "It is not one-to-one" },
        { q: "If y = x^2 with x >= 0, find the inverse.", a: "y = sqrt(x)" },
        { q: "If y = (x - 2)^2 with x >= 2, find the inverse.", a: "y = 2 + sqrt(x)" },
        { q: "If y = (x + 3)^2 with x >= -3, find the inverse.", a: "y = -3 + sqrt(x)" },
        { q: "What restriction on x makes y = x^2 invertible?", a: "x >= 0 or x <= 0" },
        { q: "True or false: restricting the domain can make a quadratic invertible.", a: "True" }
      ]
    },
    "Transformation of graphs": {
      items: [
        { q: "Write the graph y = x^2 shifted up 3.", a: "y = x^2 + 3" },
        { q: "Write the graph y = x^2 shifted right 4.", a: "y = (x - 4)^2" },
        { q: "Write the graph y = x^2 reflected in the x-axis.", a: "y = -x^2" },
        { q: "Write the graph y = sqrt(x) shifted left 2.", a: "y = sqrt(x + 2)" },
        { q: "Write the graph y = x^2 shifted down 5.", a: "y = x^2 - 5" },
        { q: "Write the graph y = x^3 reflected in the y-axis.", a: "y = -x^3" }
      ]
    },
    "Algebraic manipulation, including quadratics and inequalities;": {
      items: [
        { q: "Solve: x^2 - 5x + 6 = 0.", a: "x = 2 or x = 3" },
        { q: "Simplify: (x^2 - 9)/(x - 3).", a: "x + 3" },
        { q: "Solve: x^2 - 4 < 0.", a: "-2 < x < 2" },
        { q: "Factorise: x^2 + 7x + 10.", a: "(x + 5)(x + 2)" },
        { q: "Solve: x^2 + x - 12 = 0.", a: "x = 3 or x = -4" },
        { q: "Solve: x^2 - x - 6 >= 0.", a: "x <= -2 or x >= 3" }
      ]
    },
    "Circle theorems": {
      items: [
        { q: "How does the angle at the centre compare with the angle at the circumference on the same arc?", a: "It is double" },
        { q: "What do opposite angles in a cyclic quadrilateral add up to?", a: "180" },
        { q: "What angle is formed between a tangent and a radius at the point of contact?", a: "90" },
        { q: "Angles in the same segment are what?", a: "Equal" },
        { q: "The angle in a semicircle is always what?", a: "90" },
        { q: "True or false: the alternate segment angle equals the angle between the tangent and chord.", a: "True" }
      ]
    },
    "Probability": {
      items: [
        { q: "If P(A) = 0.35, find P(not A).", a: "0.65" },
        { q: "A fair die is rolled. Find the probability of a prime number.", a: "1/2" },
        { q: "Two coins are tossed. Find the probability of exactly one head.", a: "1/2" },
        { q: "A bag has 4 red and 6 blue counters. Find P(red).", a: "2/5" },
        { q: "True or false: probabilities must be between 0 and 1 inclusive.", a: "True" },
        { q: "If events are mutually exclusive, what is P(A and B)?", a: "0" }
      ]
    },
    "What is ‘proof’?": {
      items: [
        { q: "What is the aim of a mathematical proof?", a: "To show a statement is always true" },
        { q: "Can one example prove a statement for all integers?", a: "No" },
        { q: "Name one proof method.", a: "Direct proof" },
        { q: "True or false: proof is different from checking a few examples.", a: "True" },
        { q: "What does a proof rely on: logic or guesswork?", a: "Logic" },
        { q: "Does a proof need to work for all valid cases?", a: "Yes" }
      ]
    },
    "Direct (‘algebraic’) proof": {
      items: [
        { q: "Prove the sum of two even numbers is even. Write the conclusion form.", a: "2(a + b)" },
        { q: "Write an odd number in algebraic form.", a: "2n + 1" },
        { q: "Write an even number in algebraic form.", a: "2n" },
        { q: "The product of two odd numbers is of the form what?", a: "2k + 1" },
        { q: "Is n(n + 1) always even or odd?", a: "Even" },
        { q: "True or false: a direct proof should start from known facts.", a: "True" }
      ]
    },
    "Some very simple examples can demonstrate this – e.g. prove that": {
      items: [
        { q: "Is 2n + 1 even or odd?", a: "Odd" },
        { q: "If n is even, is n^2 even or odd?", a: "Even" },
        { q: "Simplify 3(n + 1) - 3n.", a: "3" },
        { q: "If n = 2k, write n^2 in terms of k.", a: "4k^2" },
        { q: "Can 2n represent any odd integer?", a: "No" },
        { q: "Does 2n + 1 always represent an odd integer?", a: "Yes" }
      ]
    },
    "The idea “start from what we know” and progress from there is a key idea.": {
      items: [
        { q: "In direct proof, where should you usually start?", a: "From known facts or definitions" },
        { q: "Why should you avoid assuming the final statement is already true?", a: "It can become circular" },
        { q: "What should each line in a proof follow from?", a: "The previous valid line" },
        { q: "True or false: proof should proceed logically step by step.", a: "True" },
        { q: "Does direct proof work best with clear definitions?", a: "Yes" },
        { q: "What is the danger of starting from the result instead of the assumptions?", a: "Circular reasoning" }
      ]
    },
    "They can do some ‘jottings’ first, but insist they develop the habit of starting from a known result and reaching the desired conclusion.": {
      items: [
        { q: "What should a polished proof contain after rough jottings?", a: "A clear logical argument" },
        { q: "Should large unexplained jumps be allowed in a proof?", a: "No" },
        { q: "Why is logical ordering important in proof writing?", a: "So each step can be checked" },
        { q: "True or false: rough work should be turned into a clear final argument.", a: "True" },
        { q: "Should you state definitions when useful in a proof?", a: "Yes" },
        { q: "What is better in a proof: neat logic or guesswork?", a: "Neat logic" }
      ]
    },
    "It’s helpful to discuss how we may represent even and odd numbers algebraically.": {
      items: [
        { q: "Write a general even integer.", a: "2k" },
        { q: "Write a general odd integer.", a: "2k + 1" },
        { q: "Is 2k + 3 even or odd?", a: "Odd" },
        { q: "Is 2k + 4 even or odd?", a: "Even" },
        { q: "Can every even integer be written as 2k?", a: "Yes" },
        { q: "Can every odd integer be written as 2k + 1?", a: "Yes" }
      ]
    },
    "Squares are non-negative": {
      items: [
        { q: "Can x^2 ever be negative for real x?", a: "No" },
        { q: "What is the minimum value of (x - 3)^2?", a: "0" },
        { q: "Solve x^2 = -4 over the reals.", a: "No real solution" },
        { q: "True or false: the square of a real number is always non-negative.", a: "True" },
        { q: "What is the minimum value of x^2 + 5?", a: "5" },
        { q: "If a square is 0, what can the original real number be?", a: "0" }
      ]
    },
    "Definitions": {
      items: [
        { q: "What is a vector?", a: "A quantity with magnitude and direction" },
        { q: "Can the magnitude of a vector be negative?", a: "No" },
        { q: "Are vectors with the same magnitude and direction equal?", a: "Yes" },
        { q: "What symbol is often used to describe the magnitude of vector a?", a: "|a|" },
        { q: "Does direction matter for vectors?", a: "Yes" },
        { q: "True or false: vectors can represent displacement.", a: "True" }
      ]
    },
    "Adding & subtracting vectors": {
      items: [
        { q: "If a = (2,3) and b = (5,-1), find a + b.", a: "(7,2)" },
        { q: "If a = (2,3) and b = (5,-1), find a - b.", a: "(-3,4)" },
        { q: "If a = (2,3), find 2a.", a: "(4,6)" },
        { q: "If p = (1,4) and q = (-2,3), find p + q.", a: "(-1,7)" },
        { q: "If p = (1,4) and q = (-2,3), find p - q.", a: "(3,1)" },
        { q: "If a = (3,-2) and b = (1,5), find 2a + b.", a: "(7,1)" }
      ]
    },
    "Vector proof": {
      items: [
        { q: "Complete: AB + BC = ?", a: "AC" },
        { q: "In a parallelogram, vector AB equals which opposite side vector?", a: "DC" },
        { q: "If P divides AB in the ratio 1:2, which point is closer to A or B?", a: "A" },
        { q: "True or false: vector proofs rely on direction as well as length.", a: "True" },
        { q: "What law states AB + BC = AC?", a: "Triangle law" },
        { q: "In a parallelogram, vector AD equals which opposite side vector?", a: "BC" }
      ]
    }
  }
};
