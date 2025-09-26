//Write a function that returns true if the given integer is even, and false if it's odd.
function isEven(n) {
    return n % 2 === 0;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isEven(2), true)
assertEquals(isEven(3), false)
assertEquals(isEven(10), true)
assertEquals(isEven(31), false)
assertEquals(isEven(666), true)
assertEquals(isEven(777), false)
assertEquals(isEven(3482034), true)
assertEquals(isEven(3482035), false)