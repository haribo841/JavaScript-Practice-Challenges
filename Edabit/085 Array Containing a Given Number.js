//Write a function to check if an array contains a particular number.
function check(arr, el) {
    return arr.includes(el);
}
import { assertEquals } from '../testHelper.js';
assertEquals(check([1, 2, 3, 4, 5], 3), true)
assertEquals(check([1, 1, 2, 1, 1], 3), false)
assertEquals(check([1, 1, 2, 1, 5, 4, 7], 7), true)
assertEquals(check([1, 1, 2, 1, 5, 4, 7], 8), false)
assertEquals(check([5, 5, 5, 6], 5), true)
assertEquals(check([], 5), false)