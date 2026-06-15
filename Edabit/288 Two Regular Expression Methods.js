//There are three methods (we exclude compile) that you can use with regular expression literals.
//Use these two methods to fix the code.
//One method returns a boolean if there is a match.
//The other method returns an iterator from a search.
function twoMethods() {
	// find and equals are not regular expression methods.  Replace them.
	//	let methodOne = /hello/.find("hello")[0] === "hello"
	// 	let methodTwo = /hello/.equals("hello") // returns a boolean
	let methodOne = /hello/.test("hello")
	let methodTwo = /hello/.exec("hello") // returns an iterator
	return methodOne && !!methodTwo
}
import { assertEquals } from '../testHelper.js';
assertEquals(twoMethods(), true, "done")