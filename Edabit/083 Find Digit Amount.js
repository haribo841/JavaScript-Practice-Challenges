//Create a function that takes a number as an argument and returns the amount of digits it has.
function findDigitAmount(num) {
    return num.toString().length;
}
import { assertEquals } from '../testHelper.js';
assertEquals(findDigitAmount(1), 1, 'Should work with one digit')
assertEquals(findDigitAmount(67), 2, 'Should work with a two-digit number')
assertEquals(findDigitAmount(123), 3, 'Should work with a three-digit number')
assertEquals(findDigitAmount(55551), 5, 'Should work with a bit bigger number')
assertEquals(findDigitAmount(96456431), 8, 'Should work with bigger numbers')
assertEquals(findDigitAmount(0), 1, '0 should return 1, as it is a digit')