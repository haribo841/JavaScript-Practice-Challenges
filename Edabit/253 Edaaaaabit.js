//Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
function howManyTimes(num) {
    return "Ed" + "a".repeat(num) + "bit"
}
import { assertEquals } from '../testHelper.js';
assertEquals(howManyTimes(5), "Edaaaaabit")
assertEquals(howManyTimes(15), "Edaaaaaaaaaaaaaaabit")
assertEquals(howManyTimes(10), "Edaaaaaaaaaabit")
assertEquals(howManyTimes(23), "Edaaaaaaaaaaaaaaaaaaaaaaabit")
assertEquals(howManyTimes(1), "Edabit")