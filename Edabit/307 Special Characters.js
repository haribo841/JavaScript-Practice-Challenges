//Using the .test() method in your function, return whether a string contains the characters "a" and "c"
//(in that order) with any number of characters(including zero) between them.
function asterisk(string) {
    //return /a.*c/.test(string);
    return /^[^a]*a[\s\S]*c/.test(string);
}
import { assertEquals } from '../testHelper.js';
assertEquals(asterisk("account"), true)
assertEquals(asterisk("abccount"), true)
assertEquals(asterisk("abbbccount"), true)
assertEquals(asterisk("bbbccount"), false)
assertEquals(asterisk("ac"), true)
assertEquals(asterisk("ca"), false)