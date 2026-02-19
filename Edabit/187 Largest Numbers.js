//Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.
function largestNumbers(n, arr) {
    return arr.sort((a, b) => a - b).slice(-n)
}
import { assertEquals } from '../testHelper.js';
assertEquals(largestNumbers(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [9, 10])
assertEquals(largestNumbers(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]), [5, 5, 5])
assertEquals(largestNumbers(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]), [3, 5, 9, 13, 22, 50, 63])
assertEquals(largestNumbers(0, [1, 2, 3, 4, 8, 7, 6, 5]), [])
assertEquals(largestNumbers(2, [4, 3, 2, 1]), [3, 4])
assertEquals(largestNumbers(1, [7, 19, 4, 2]), [19])
assertEquals(largestNumbers(3, [14, 12, 57, 11, 18, 16]), [16, 18, 57])