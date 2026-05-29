//Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.
function arrayLessThan100(arr) {
    return arr.reduce((acc, num) => acc + num, 0) < 100;
}
import { assertEquals } from '../testHelper.js';
assertEquals(arrayLessThan100([5, 57]), true)
assertEquals(arrayLessThan100([77, 30]), false)
assertEquals(arrayLessThan100([0, 59, 15]), true)
assertEquals(arrayLessThan100([0]), true)
assertEquals(arrayLessThan100([35, 59, 15]), false)
assertEquals(arrayLessThan100([25, 50, 25]), false)