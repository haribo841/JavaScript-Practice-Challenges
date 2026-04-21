//Create a function that takes an integer and returns the factorial of that integer.
//That is, the integer multiplied by all positive lower integers.
function factorial(int) {
    return int === 0 ? 1 : int * factorial(int - 1);
}
import { assertEquals } from '../testHelper.js';
assertEquals(factorial(2), 2)
assertEquals(factorial(6), 720)
assertEquals(factorial(3), 6)
assertEquals(factorial(12), 479001600)
assertEquals(factorial(5), 120)