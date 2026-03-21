//Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
function countdown(start) {
    return Array.from({ length: start + 1 }, (_, i) => start - i);
}
import { assertEquals } from '../testHelper.js';
assertEquals(countdown(3), [3, 2, 1, 0])
assertEquals(countdown(20), [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
assertEquals(countdown(1), [1, 0])
assertEquals(countdown(0), [0])