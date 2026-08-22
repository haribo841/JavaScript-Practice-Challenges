//Fix the code in the code tab to pass this challenge (only syntax errors).
function squared(b) {
	return b * b
}
import * as Test from '../testHelper.js';
Test.assertEquals(squared(10), 100, "Expected 100")
Test.assertEquals(squared(69), 4761, "Expected 4761")
Test.assertEquals(squared(666), 443556, "Expected 443556")
Test.assertEquals(squared(-21), 441, "Expected 441")
Test.assertEquals(squared(21), 441, "Expected 441")