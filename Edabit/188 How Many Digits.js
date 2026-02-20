//Given an integer n. Your task is to find how many digits this integer contains without using String or Array methods!
function sumDigits(n) {
    return n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1
}
import { assertEquals } from '../testHelper.js';
assertEquals(sumDigits(100), 3)
assertEquals(sumDigits(1000), 4)
assertEquals(sumDigits(12345), 5)
assertEquals(sumDigits(1000000000), 10)
assertEquals(sumDigits(145874589632), 12)
assertEquals(sumDigits(0), 1)
assertEquals(sumDigits(12345698745254856320), 20)
assertEquals(sumDigits(123456789), 9)
assertEquals(sumDigits(1234569874525485632012345698745254856320), 40)
assertEquals(sumDigits(1232458), 7)