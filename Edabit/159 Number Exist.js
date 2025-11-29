//Create a function which validates whether a given number exists, and could represent a real life quantity.
//Inputs will be given as a string.
function validStrNumber(n) {
    return /^(\d+|\d*\.\d+)$/.test(n);
}
import { assertEquals } from '../testHelper.js';
assertEquals(validStrNumber("3.2"), true)
assertEquals(validStrNumber("324"), true)
assertEquals(validStrNumber("54..4"), false)
assertEquals(validStrNumber("number"), false)
assertEquals(validStrNumber(".5"), true)
assertEquals(validStrNumber("03"), true)
assertEquals(validStrNumber("3.e"), false)
assertEquals(validStrNumber("1234321"), true)
assertEquals(validStrNumber(".42.3"), false)
assertEquals(validStrNumber("0000000"), true)
assertEquals(validStrNumber("000.000"), true)