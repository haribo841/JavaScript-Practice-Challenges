//Create a function that takes two arguments.
//Both arguments are integers, a and b.
//Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b) {
    return a === 10 || b === 10 || a + b === 10;
}
import { assertEquals } from '../testHelper.js';
assertEquals(makesTen(9, 10), true)
assertEquals(makesTen(9, 9), false)
assertEquals(makesTen(1, 9), true)
assertEquals(makesTen(10, 1), true)
assertEquals(makesTen(10, 10), true)
assertEquals(makesTen(8, 2), true)
assertEquals(makesTen(8, 3), false)
assertEquals(makesTen(10, 42), true)
assertEquals(makesTen(12, -2), true)