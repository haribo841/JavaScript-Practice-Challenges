//Create a function that returns the ASCII value of the passed in character.
function ctoa(c) {
    return c.charCodeAt(0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(ctoa(' '), 32)
assertEquals(ctoa('A'), 65)
assertEquals(ctoa(']'), 93)
assertEquals(ctoa('^'), 94)
assertEquals(ctoa('c'), 99)