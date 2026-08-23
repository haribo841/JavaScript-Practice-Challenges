//Write a function that returns the first truthy argument passed to the function.
//If all arguments are falsy, return the string "not found".
//The function will be called with a minimum of one and a maximum of four arguments: a, b, c, d.
function firstOne(a, b = 0, c = 0, d = 0) {
    return a || b || c || d || "not found";
}
import { assertEquals } from '../testHelper.js';
const firstTruthyCases = [
    [["Edabit"], "Edabit"],
    [[false], "not found"],
    [["", "Pikachu"], "Pikachu"],
    [["", 0], "not found"],
    [[0, 20, ""], 20],
    [[0, 0, ""], "not found"],
    [["", 0, true, false], true],
    [["", 0, false, true], true]
];

for (const [args, expected] of firstTruthyCases) {
    assertEquals(firstOne(...args), expected)
}
