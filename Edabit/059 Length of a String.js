//Write a function that returns the length of a string.
//Make your function recursive.
function length(str) {
    return str === '' ? 0 : 1 + length(str.slice(1));
}
import * as Test from '../testHelper.js';
Test.assertEquals(length('shipment'), 8)
Test.assertEquals(length('apple'), 5)
Test.assertEquals(length('make'), 4)
Test.assertEquals(length('a'), 1)
Test.assertEquals(length(''), 0)