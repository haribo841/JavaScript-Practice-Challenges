//Write a function that returns the string "even" if the given integer is even, and the string "odd" if it's odd.
function parity(n) {
    return (n % 2) ? "odd" : "even";
}
import { assertEquals } from '../testHelper.js';
assertEquals(parity(2), 'even')
assertEquals(parity(3), 'odd')
assertEquals(parity(10), 'even')
assertEquals(parity(31), 'odd')
assertEquals(parity(666), 'even')
assertEquals(parity(777), 'odd')
assertEquals(parity(3482034), 'even')
assertEquals(parity(3482035), 'odd')