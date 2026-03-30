//Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
function checkFactors(factors, num) {
    return factors.every(factor => num % factor === 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(checkFactors([2, 3, 4], 12), true)
assertEquals(checkFactors([1, 2, 3, 8], 12), false, '8 is not a factor of 12')
assertEquals(checkFactors([1, 2, 50], 100), true)
assertEquals(checkFactors([1, 9, 81], 81), true)
assertEquals(checkFactors([5, 10, 50], 500), true)
assertEquals(checkFactors([5, 10, 499], 500), false, '499 is not a factor of 500')
assertEquals(checkFactors([3, 6], 9), false, '6 is not a factor of 9')