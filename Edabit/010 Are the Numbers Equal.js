//Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    return typeof num1 === 'number' && typeof num2 === 'number' && num1 === num2;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isSameNum(4, 8), false)
assertEquals(isSameNum(2, 2), true)
assertEquals(isSameNum(0, 6), false)
assertEquals(isSameNum(2, "2"), false)

assertEquals(isSameNum(2, 2), true)
assertEquals(isSameNum("1", 5), false)
assertEquals(isSameNum(88, 88), true)
assertEquals(isSameNum(36, 35), false)
assertEquals(isSameNum("1", 1), false)
assertEquals(isSameNum(1, 1), true)
assertEquals(isSameNum(5, 6), false)
assertEquals(isSameNum("1", "1"), false)