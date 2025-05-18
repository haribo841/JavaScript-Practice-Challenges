//Create a function that will work as the modulus operator % without using the modulus operator.
function mod(a, b) {
    return a - Math.floor(a / b) * b;
}
import { assertEquals } from '../testHelper.js';
assertEquals(mod(0, 3), 0)
assertEquals(mod(1, 3), 1)
assertEquals(mod(5, 3), 2)
assertEquals(mod(4, 5), 4)
assertEquals(mod(218, 5), 3)