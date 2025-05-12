//Create a function that takes a number num and returns its length.
function numberLength(num) {
    return num.toString().length;
}
import { assertEquals } from '../testHelper.js';
assertEquals(numberLength(10), 2)
assertEquals(numberLength(5000), 4)
assertEquals(numberLength(0), 1)
assertEquals(numberLength(4039182), 7)
assertEquals(numberLength(9999999999999999n), 16)
assertEquals(numberLength(1), 1)
assertEquals(numberLength(777777777777777777777777777777n), 30)