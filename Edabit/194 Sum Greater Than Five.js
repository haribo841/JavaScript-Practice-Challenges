//Write a function that returns the sum of elements greater than 5, in the given array.
function sumFive(arr) {
    return arr.reduce((sum, num) => num > 5 ? sum + num : sum, 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(sumFive([1, 5, 20, 30, 4, 9, 18]), 77)
assertEquals(sumFive([1, 2, 3, 4]), 0)
assertEquals(sumFive([10, 12, 28, 47, 55, 100]), 252)
assertEquals(sumFive([25, 44, 6, 4, 3, 36]), 111)
assertEquals(sumFive([5, 2, 150, 187, 254, 0]), 591)
assertEquals(sumFive([1000, 2500, 2, 4, 500, 400]), 4400)
assertEquals(sumFive([125.5, 147.2, 548.6, 2.3, 1.5]), 821.3)