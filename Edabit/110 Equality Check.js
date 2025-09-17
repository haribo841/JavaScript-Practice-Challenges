/*In this challenge, you must verify the equality of two different values given the parameters a and b.
Both the value and type of the parameters need to be equal.The possible types of the given parameters are:
Numbers
Strings
Booleans(false or true)
Special values: undefined, null and NaN
What have you learned so far that will permit you to do two different checks(value and type) with a single statement ?
	Implement a function that returns true if the parameters are equal, and false if they are not.*/
function checkEquality(a, b) {
    return a === b;
}
import { assertEquals } from '../testHelper.js';
assertEquals(checkEquality(1, true), false, "Example #1")
assertEquals(checkEquality(0, "0"), false, "Example #2")
assertEquals(checkEquality(1, 1), true, "Example #3")
assertEquals(checkEquality(0, ""), false)
assertEquals(checkEquality(1, "1"), false)
assertEquals(checkEquality(0, false), false)
assertEquals(checkEquality(NaN, NaN), false)
assertEquals(checkEquality(null, undefined), false)
assertEquals(checkEquality(undefined, undefined), true)
assertEquals(checkEquality(false, null), false)