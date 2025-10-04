/*Write a template string according to the following example:
const a = "John";
const b = "Joe";
const c = "Jack";
const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."*/
// modify the template variable to be a template string 
function format(a, b, c) {
	// the result string must give: "Their names were: a, b and c."
	const template = "Their names were: "+a+", "+b+" and "+c+"."
	return template
}
import { assertEquals } from '../testHelper.js';
assertEquals(format("John", "Joe", "Jack"), "Their names were: John, Joe and Jack.")
assertEquals(format("Peter", "Pin", "Pan"), "Their names were: Peter, Pin and Pan.")
assertEquals(format("E", "Da", "Bit"), "Their names were: E, Da and Bit.")
assertEquals(format("Bulbasaur", "Charmander", "Squirtle"), "Their names were: Bulbasaur, Charmander and Squirtle.")