//Create a function which takes a number and returns the maximum value by rearranging its digits.
function rotateMaxNumber(num) {
    return Number.parseInt(String(num).split('').sort((a, b) => b - a).join(''), 10);
}
import { assertEquals } from '../testHelper.js';
assertEquals(rotateMaxNumber(123), 321)
assertEquals(rotateMaxNumber(1546), 6541)
assertEquals(rotateMaxNumber("001"), 100)
assertEquals(rotateMaxNumber(999), 999)
assertEquals(rotateMaxNumber("12345"), 54321)
assertEquals(rotateMaxNumber("00009"), 90000)
