//Create a function that returns the minimum number of removals to make the sum of all elements in an array even.
function minimumRemovals(arr) {
    return arr.reduce((sum, num) => sum + num, 0) % 2 === 0 ? 0 : 1;
}
import { assertEquals } from '../testHelper.js';
assertEquals(minimumRemovals([1, 2, 3, 4, 5]), 1)
assertEquals(minimumRemovals([5, 7, 9, 11]), 0)
assertEquals(minimumRemovals([5, 7, 9, 12]), 1)
assertEquals(minimumRemovals([5, 8, 8, 8]), 1)
assertEquals(minimumRemovals([5, 8, 8, 8, 9, 9]), 1)
assertEquals(minimumRemovals([9, 8, 8, 8, 9, 9]), 1)
assertEquals(minimumRemovals([5, 5, 4, 4, 3, 3]), 0)
assertEquals(minimumRemovals([5, 3, 4, 4, 3]), 1)
assertEquals(minimumRemovals([5, 3, 4, 4, 0]), 0)