//Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.
function sumMinimums(arr) {
    return arr.reduce((sum, row) => sum + Math.min(...row), 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(sumMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]), 26)
assertEquals(sumMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
assertEquals(sumMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)