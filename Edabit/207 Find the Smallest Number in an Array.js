//Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(arr) {
    return Math.min(...arr);
}
import { assertEquals } from '../testHelper.js';
assertEquals(findSmallestNum([34, 15, 88, 2]), 2)
assertEquals(findSmallestNum([34, -345, -1, 100]), -345)
assertEquals(findSmallestNum([-76, 1.345, 1, 0]), -76)
assertEquals(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]), -0.9999)
assertEquals(findSmallestNum([7, 7, 7]), 7)
assertEquals(findSmallestNum([4, 6, 1, 3, 4, 5, 5, 1]), 1)
assertEquals(findSmallestNum([-4, -6, -8, -1]), -8)
assertEquals(findSmallestNum([54, 76, 23, 54]), 23)
assertEquals(findSmallestNum([100]), 100)
assertEquals(findSmallestNum([0, 1, 2, 3, 4, 5]), 0)