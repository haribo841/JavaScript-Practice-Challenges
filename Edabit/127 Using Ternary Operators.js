//Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.
function yeah_nope(bool) {
    return bool ? "yeah" : "nope"
}
import { assertEquals } from '../testHelper.js';
assertEquals(yeah_nope(true), "yeah")
assertEquals(yeah_nope(false), "nope")