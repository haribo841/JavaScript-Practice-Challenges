//Create a function that returns the number of arguments it was called with.
function numArgs() {
    return arguments.length;
}
import { assertEquals } from '../testHelper.js';
assertEquals(numArgs(), 0)
assertEquals(numArgs('foo'), 1)
assertEquals(numArgs('foo', 'bar'), 2)
assertEquals(numArgs(null, null), 2)
assertEquals(numArgs('foo', 'bar', 5, null), 4)
assertEquals(numArgs(false), 1)
assertEquals(numArgs('foo', {}), 2)
assertEquals(numArgs('foo', 'bar', {}), 3)
assertEquals(numArgs([], [], {}), 3)
assertEquals(numArgs('foo', 'bar', true, null, 0), 5)
assertEquals(numArgs('a', 'b', 'c'), 3)
assertEquals(numArgs(10, 20, 30, 40, 50), 5)
assertEquals(numArgs('x', 'y'), 2)
assertEquals(numArgs(), 0)