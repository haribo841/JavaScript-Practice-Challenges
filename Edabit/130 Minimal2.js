//Write a function that returns the boolean true if the given number is zero,
//the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.
/**
 * @param {number} x Number to classify.
 * @returns {true | "positive" | "negative"} The mixed result types required by the exercise.
 */
function equilibrium(x) {
    if (x === 0) return true;
    if (x > 0) return "positive";
    return "negative";
}
import { assertEquals } from '../testHelper.js';
assertEquals(equilibrium(0.000), true)
assertEquals(equilibrium(0), true)
assertEquals(equilibrium(-0), true)

assertEquals(equilibrium(3), "positive")
assertEquals(equilibrium(66), "positive")
assertEquals(equilibrium(5425), "positive")
assertEquals(equilibrium(1111.1), "positive")
assertEquals(equilibrium(0.0001), "positive")
assertEquals(equilibrium(Number.MIN_VALUE), "positive")

assertEquals(equilibrium(-3), "negative")
assertEquals(equilibrium(-66), "negative")
assertEquals(equilibrium(-5425), "negative")
assertEquals(equilibrium(-1111.1), "negative")
assertEquals(equilibrium(-0.0001), "negative")
assertEquals(equilibrium(-Number.MIN_VALUE), "negative")
