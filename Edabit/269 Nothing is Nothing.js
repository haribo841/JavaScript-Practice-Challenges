//Given any number of parameters, return true if none of the arguments are falsy.
function nothingIsNothing() {
    return [...arguments].every(arg => Boolean(arg));
}
import { assertEquals } from '../testHelper.js';
assertEquals(nothingIsNothing(0, false, [], {}), false)
assertEquals(nothingIsNothing(33, 'Hello', (true, true, 3)), true)
assertEquals(nothingIsNothing(true, null), false)
assertEquals(nothingIsNothing(null, null), false)
assertEquals(nothingIsNothing(221), true)
assertEquals(nothingIsNothing(221, 0, 0, 0), false)
assertEquals(nothingIsNothing([221, 0, 0, 0]), true)