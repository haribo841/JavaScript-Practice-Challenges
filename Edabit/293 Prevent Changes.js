//The police send you an electronic statement for you to sign.
//As you begin to sign, an error pops up.Apparently, they sent you a protected document.
//This challenge is a bit different as the function you are given already contains some code that you should not change or remove.
//Also, don't do a return statement, it is already included.
//Your task is, given an object, prevent changes to that object.
function preventChanges(obj) {
	// write your code here
	Object.freeze(obj)
	// don't use a return statement
    // non-strict mode dont need to use try catch, but strict mode will throw an error if you try to change a frozen object

	// DON'T CHANGE OR REMOVE THE LINES BELOW
	try {
	obj.noChanges = false;
	obj.signature = "whatever";
	} catch { }

	return obj;
}
import { assertEquals } from '../testHelper.js';
assertEquals(preventChanges({ noChanges: true }), { noChanges: true })