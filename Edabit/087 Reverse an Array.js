//Write a function to reverse an array.
function reverse(arr) {
    return arr.slice().reverse();
}
import { assertEquals } from '../testHelper.js';
assertEquals(reverse([1, 2, 3, 4]), [4, 3, 2, 1])
assertEquals(reverse([5, 6, 7]), [7, 6, 5])
assertEquals(reverse([9, 9, 2, 3, 4]), [4, 3, 2, 9, 9])
assertEquals(reverse([3, 3]), [3, 3])
assertEquals(reverse([-1, -1, -1]), [-1, -1, -1])
assertEquals(reverse([]), [])