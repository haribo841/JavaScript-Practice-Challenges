//Create a function that takes an array and returns the sum of all numbers in the array.
function getSumOfItems(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)
}
import { assertEquals } from '../testHelper.js';
assertEquals(getSumOfItems([2, 7, 4]), 13)
assertEquals(getSumOfItems([45, 3, 0]), 48)
assertEquals(getSumOfItems([-2, 84, 23]), 105)