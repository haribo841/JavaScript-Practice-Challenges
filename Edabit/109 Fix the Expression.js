//Fix the code so the function returns true if and only if x is equal to 7.
function isSeven(x) {
	return x == "7" ? true : false;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isSeven(4), false)
assertEquals(isSeven(9), false)
assertEquals(isSeven(7), true)
assertEquals(isSeven(10), false)
assertEquals(isSeven(20), false)
assertEquals(isSeven(7), true)