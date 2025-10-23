//Given an index and an array, return the value of the array with the given index.
function valueAt(arr, i) {
    return arr[Math.floor(i)];
}
import { assertEquals } from '../testHelper.js';
assertEquals(valueAt([1, 2, 3, 4, 5, 6], 10 / 2), 6)
assertEquals(valueAt([1, 2, 3, 4], 6.535355314 / 2), 4)
assertEquals(valueAt([1, 2], 1.0 / 2), 1)
assertEquals(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2), 5)