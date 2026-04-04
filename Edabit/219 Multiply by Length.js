//Create a function to multiply all of the values in an array by the amount of values in the given array.
function multiplyByLength(arr) {
    return arr.map(num => num * arr.length);
}
import { assertEquals } from '../testHelper.js';
assertEquals(multiplyByLength([2, 6, 4, 9]), [8, 24, 16, 36])
assertEquals(multiplyByLength([4, 1, 1]), [12, 3, 3])
assertEquals(multiplyByLength([1, 0, 3, 3, 7, 2, 1]), [7, 0, 21, 21, 49, 14, 7])
assertEquals(multiplyByLength([0]), [0])