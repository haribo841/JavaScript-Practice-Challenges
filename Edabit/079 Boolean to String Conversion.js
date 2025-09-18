//Create a function that takes a boolean variable flag and returns it as a string.
function boolToString(flag) {
    return flag.toString();
}
import { assertEquals } from '../testHelper.js';
assertEquals(boolToString(true), "true")
assertEquals(boolToString(false), "false")