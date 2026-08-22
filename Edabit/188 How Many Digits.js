//Given an integer n. Your task is to find how many digits this integer contains without using String or Array methods!
function sumDigits(n) {
    let value = typeof n === "bigint" ? n : BigInt(n);
    if (value < 0n) value = -value;
    if (value === 0n) return 1;

    let digits = 0;
    while (value > 0n) {
        value /= 10n;
        digits += 1;
    }
    return digits;
}
import { assertEquals } from '../testHelper.js';
assertEquals(sumDigits(100), 3)
assertEquals(sumDigits(1000), 4)
assertEquals(sumDigits(12345), 5)
assertEquals(sumDigits(1000000000), 10)
assertEquals(sumDigits(145874589632), 12)
assertEquals(sumDigits(0), 1)
assertEquals(sumDigits(12345698745254856320n), 20)
assertEquals(sumDigits(123456789), 9)
assertEquals(sumDigits(1234569874525485632012345698745254856320n), 40)
assertEquals(sumDigits(1232458), 7)
