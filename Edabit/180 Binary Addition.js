//Create a function that takes two numbers and returns their sum as a binary string.
function addBinary(a, b) {
    return (a + b).toString(2);
}
import { assertEquals } from '../testHelper.js';
assertEquals(addBinary(1, 1), '10')
assertEquals(addBinary(1, 2), '11')
assertEquals(addBinary(4, 5), '1001')
assertEquals(addBinary(8, 20), '11100')
assertEquals(addBinary(100, 20), '1111000')
assertEquals(addBinary(40, 50), '1011010')
assertEquals(addBinary(65, 77), '10001110')
assertEquals(addBinary(40, 50), '1011010')
assertEquals(addBinary(1, 0), '1')