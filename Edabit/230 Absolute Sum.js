//Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
function getAbsSum(arr) {
    return arr.reduce((acc, val) => acc + Math.abs(val), 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(getAbsSum([2, -1, -3, 4, 8]), 18);
assertEquals(getAbsSum([-1]), 1);
assertEquals(getAbsSum([-1, -3, -5, -4, -10, 0]), 23);
assertEquals(getAbsSum([8, 9, 10, 32, 101, -10]), 170);
assertEquals(getAbsSum([500]), 500);