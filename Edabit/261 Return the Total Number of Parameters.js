//Create a function that returns the total number of parameters passed in.
function numberArgs(/* fill-in */) {
    return arguments.length
}
import { assertEquals } from '../testHelper.js';
assertEquals(numberArgs('a', 'b', 'c'), 3)
assertEquals(numberArgs(10, 20, 30, 40, 50), 5)
assertEquals(numberArgs('x', 'y'), 2)
assertEquals(numberArgs(), 0)