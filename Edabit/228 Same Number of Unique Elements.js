//Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.
function same(a1, a2) {
    return new Set(a1).size === new Set(a2).size;
}
import { assertEquals } from '../testHelper.js';
assertEquals(same([1, 3, 4, 4, 4], [2, 5, 7]), true)
assertEquals(same([9, 8, 7, 6], [4, 4, 3, 1]), false)
assertEquals(same([2], [3, 3, 3, 3, 3]), true)
assertEquals(same([5, 6, 7, 9], [4, 1]), false)
assertEquals(same([5, 9, 9], [9, 5]), true)
assertEquals(same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4]), true)
assertEquals(same([], []), true)