//In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system.
//Given an array of ones and zeroes of a binary number, return the equivalent decimal value.
function binaryToDecimal(arr) {
    return arr.reduce((acc, val, index) => acc + val * Math.pow(2, arr.length - 1 - index), 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(binaryToDecimal([0, 0, 0, 1]), 1)
assertEquals(binaryToDecimal([0, 0, 1, 0]), 2)
assertEquals(binaryToDecimal([1, 1, 1, 1]), 15)
assertEquals(binaryToDecimal([0, 1, 1, 0]), 6)
assertEquals(binaryToDecimal([1, 0, 1, 0, 1, 1, 1]), 87)
assertEquals(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]), 1005)
assertEquals(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1]), 2013)