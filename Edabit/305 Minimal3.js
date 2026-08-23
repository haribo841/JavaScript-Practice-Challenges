//Write a function that returns the boolean true if the given number is zero,
//the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.
function equilibrium(x) {
    if (x > 0) return "positive";
    if (x < 0) return "negative";
    return true;
}
import { assertEquals } from '../testHelper.js';
const equilibriumCases = [
    [0.000, true],
    [0, true],
    [3, "positive"],
    [66, "positive"],
    [5425, "positive"],
    [1111.1, "positive"],
    [0.0001, "positive"],
    [-3, "negative"],
    [-66, "negative"],
    [-5425, "negative"],
    [-1111.1, "negative"],
    [-0.0001, "negative"]
];

for (const [input, expected] of equilibriumCases) {
    assertEquals(equilibrium(input), expected)
}
