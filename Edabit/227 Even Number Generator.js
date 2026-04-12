//Create a function that finds all even numbers from 1 to the given number.
function findEvenNums(num) {
    return Array.from({ length: Math.floor(num / 2) }, (_, i) => (i + 1) * 2);
}
import { assertEquals } from '../testHelper.js';
assertEquals(findEvenNums(4), [2, 4])
assertEquals(findEvenNums(8), [2, 4, 6, 8])
assertEquals(findEvenNums(2), [2])
assertEquals(findEvenNums(1), [])
assertEquals(findEvenNums(9), [2, 4, 6, 8])
assertEquals(findEvenNums(11), [2, 4, 6, 8, 10])