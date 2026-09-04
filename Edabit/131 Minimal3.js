/*Write a function that returns the strings:
"both" if both given booleans a and b are true.
"first" if only a is true.
"second" if only b is true .
"neither" if both a and b are false.*/
function areTrue(a, b) {
    if (a && b) return "both";
    if (a) return "first";
    if (b) return "second";
    return "neither";
}
import { assertEquals } from '../testHelper.js';
assertEquals(areTrue(true, true), "both")
assertEquals(areTrue(true, false), "first")
assertEquals(areTrue(false, true), "second")
assertEquals(areTrue(false, false), "neither")
