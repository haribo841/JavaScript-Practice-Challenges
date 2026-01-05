//Create a function that checks if the argument is an integer or a string.
//Return "int" if it's an integer and "str" if it's a string.
function intOrString(param) {
    return typeof param === "number" ? "int" : "str";
}
import { assertEquals } from '../testHelper.js';
assertEquals(intOrString(1), "int")
assertEquals(intOrString("HELLO"), "str")
assertEquals(intOrString("edabit"), "str")
assertEquals(intOrString(873432874), "int")
assertEquals(intOrString(5), "int")