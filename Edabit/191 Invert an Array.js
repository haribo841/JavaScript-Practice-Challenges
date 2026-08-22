//Create a function that takes an array of numbers arr and returns an inverted array.
function invertArray(arr) {
    return arr.map((x) => x === 0 ? 0 : -x);
}
import { assertEquals } from '../testHelper.js';
assertEquals(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
assertEquals(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
assertEquals(invertArray([]), [])
assertEquals(invertArray([0]), [0])
