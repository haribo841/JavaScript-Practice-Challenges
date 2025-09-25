//Given two integers, a and b, return true if a can be divided evenly by b.
//Return false otherwise.
function dividesEvenly(a, b) {
    return a % b === 0;
}
import { assertEquals } from '../testHelper.js';
assertEquals(dividesEvenly(98, 7), true)
assertEquals(dividesEvenly(87, 49), false)
assertEquals(dividesEvenly(34, 14), false)
assertEquals(dividesEvenly(78, 6), true)
assertEquals(dividesEvenly(30, 4), false)
assertEquals(dividesEvenly(87, 73), false)
assertEquals(dividesEvenly(74, 7), false)
assertEquals(dividesEvenly(87, 29), true)
assertEquals(dividesEvenly(48, 24), true)
assertEquals(dividesEvenly(99, 20), false)
assertEquals(dividesEvenly(98, 49), true)
assertEquals(dividesEvenly(100, 6), false)
assertEquals(dividesEvenly(64, 4), true)
assertEquals(dividesEvenly(70, 35), true)
assertEquals(dividesEvenly(38, 38), true)
assertEquals(dividesEvenly(29, 3), false)
assertEquals(dividesEvenly(20, 8), false)
assertEquals(dividesEvenly(66, 50), false)
assertEquals(dividesEvenly(95, 1), true)
assertEquals(dividesEvenly(58, 2), true)