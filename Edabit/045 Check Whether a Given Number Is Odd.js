//Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.
function isOdd(num) {
	return num % 2 != 0;
}
import * as Test from '../testHelper.js';
Test.assertEquals(isOdd(-5), true)
Test.assertEquals(isOdd(-50), false)
Test.assertEquals(isOdd(0), false)
Test.assertEquals(isOdd(25), true)
Test.assertEquals(isOdd(-19), true)
Test.assertEquals(isOdd(12), false)
Test.assertEquals(isOdd(23), true)
Test.assertEquals(isOdd(-71), true)