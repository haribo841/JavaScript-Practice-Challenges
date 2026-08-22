//A student learning JavaScript was trying to make a function.
//His code should concatenate a passed string name with string "Edabit" and store it in a variable called result.
//He needs your help to fix this code.
function nameString(name) {
	const b = "Edabit";
	const result = name + b;
	return result;
}
import * as Test from '../testHelper.js';
Test.assertEquals(nameString("Mubashir"), "MubashirEdabit")
Test.assertEquals(nameString("Matt"), "MattEdabit")
Test.assertEquals(nameString("javaScript"), "javaScriptEdabit")
Test.assertEquals(nameString("Airforce"), "AirforceEdabit")
