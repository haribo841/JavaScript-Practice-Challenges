//Create a function that returns true if the first array can be nested inside the second and false otherwise.
function canNest(arr1, arr2) {
    return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}
import { assertEquals } from '../testHelper.js';
assertEquals(canNest([1, 2, 3, 4], [0, 6]), true)
assertEquals(canNest([3, 1], [4, 0]), true)
assertEquals(canNest([9, 9, 8], [8, 9, 10]), false)
assertEquals(canNest([9, 9, 8], [8, 9]), false)
assertEquals(canNest([1, 2, 3, 4], [2, 3]), false)