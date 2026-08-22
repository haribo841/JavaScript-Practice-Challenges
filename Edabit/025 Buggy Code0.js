//The challenge is to try and fix this buggy code, given the inputs true and false.
function has_bugs(buggy_code) {
	if (buggy_code) {
		return 'sad days';
	} else {
		return "it's a good day";
	}
}
import * as Test from '../testHelper.js';
Test.assertEquals(has_bugs(true), "sad days")
Test.assertEquals(has_bugs(false), "it's a good day")