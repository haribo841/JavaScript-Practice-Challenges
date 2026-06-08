//Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
function addUpTo(n) {
    return n * (n + 1) / 2;
}
import { assertEquals } from '../testHelper.js';
assertEquals(addUpTo(3), 6, "Example #1")
assertEquals(addUpTo(10), 55, "Example #2")
assertEquals(addUpTo(0), 0)
assertEquals(addUpTo(2), 3)
assertEquals(addUpTo(20), 210)
assertEquals(addUpTo(1), 1)