//Given a number n, find if its 2nd, 4th and 8th roots are all integers (perfect roots), return true if it exists, false if not.
function perfectRoots(n) {
    return Number.isInteger(Math.sqrt(n)) && Number.isInteger(Math.pow(n, 1 / 4)) && Number.isInteger(Math.pow(n, 1 / 8))
}
import { assertEquals } from '../testHelper.js';
assertEquals(perfectRoots(256), true)
assertEquals(perfectRoots(1000), false)
assertEquals(perfectRoots(6561), true)
assertEquals(perfectRoots(12534), false)
assertEquals(perfectRoots(3455), false)
assertEquals(perfectRoots(65536), true)
assertEquals(perfectRoots(390625), true)
assertEquals(perfectRoots(1679616), true)
assertEquals(perfectRoots(6534561), false)
assertEquals(perfectRoots(253456), false)
assertEquals(perfectRoots(5764801), true)
assertEquals(perfectRoots(100000000), true)