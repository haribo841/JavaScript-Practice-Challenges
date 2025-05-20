//Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
    return arr.reduce((a, b) => Math.max(a, b));
}
import { assertEquals } from '../testHelper.js';
assertEquals(findLargestNum([4, 5, 1, 3]), 5)
assertEquals(findLargestNum([13, 27, 18, 26]), 27)
assertEquals(findLargestNum([32, 35, 37, 39]), 39)
assertEquals(findLargestNum([1000, 1001, 857, 1]), 1001)
assertEquals(findLargestNum([27364, 837363, 736736, 73635]), 837363)
assertEquals(findLargestNum([30, 2, 40, 3]), 40)
assertEquals(findLargestNum([0, 1, 0, 0, 1]), 1)