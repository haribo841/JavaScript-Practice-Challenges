//Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.
function isAvgWhole(arr) {
    return arr.reduce((acc, val) => acc + val, 0) % arr.length === 0;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isAvgWhole([3, 5, 9]), false);
assertEquals(isAvgWhole([1, 1, 1, 1]), true);
assertEquals(isAvgWhole([1, 2, 3, 4, 5]), true);
assertEquals(isAvgWhole([5, 2, 4]), false);
assertEquals(isAvgWhole([11, 22]), false);
assertEquals(isAvgWhole([4, 1, 7, 9, 2, 5, 7, 2, 4]), false);