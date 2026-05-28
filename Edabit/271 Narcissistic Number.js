//Create a function that returns true or false depending upon whether the given number n is a Narcissistic number or not.
function isNarcissistic(n) {
    return String(n).split('').reduce((acc, digit) => acc + Math.pow(parseInt(digit, 10), String(n).length), 0) === n;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isNarcissistic(1), true, "1 is narcissistic")
assertEquals(isNarcissistic(5), true, "5 is narcissistic")
assertEquals(isNarcissistic(7), true, "7 is narcissistic")
assertEquals(isNarcissistic(153), true, "153 is narcissistic")
assertEquals(isNarcissistic(370), true, "370 is narcissistic")
assertEquals(isNarcissistic(371), true, "371 is narcissistic")
assertEquals(isNarcissistic(1634), true, "1634 is narcissistic")
assertEquals(isNarcissistic(9004), false)
assertEquals(isNarcissistic(2546), false)
assertEquals(isNarcissistic(2124), false)
assertEquals(isNarcissistic(8345), false)