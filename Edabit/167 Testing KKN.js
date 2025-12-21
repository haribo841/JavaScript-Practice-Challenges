//Write a function that returns true if k^k == n for input (n, k) and return false otherwise.
function kToK(n, k) {
    return Math.pow(k, k) === n;
}
import { assertEquals } from '../testHelper.js';
assertEquals(kToK(4, 2), true)
assertEquals(kToK(387420489, 9), true)
assertEquals(kToK(302875106592253, 13), true)

assertEquals(kToK(3124, 5), false)
assertEquals(kToK(17, 3), false)
assertEquals(kToK(823544, 7), false)