//Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.
function isTruthy(input) {
    return input ? 1 : 0;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isTruthy(1), 1)
assertEquals(isTruthy(-1), 1)
assertEquals(isTruthy("false"), 1)
assertEquals(isTruthy([]), 1)
assertEquals(isTruthy(true), 1)
assertEquals(isTruthy({}), 1)
assertEquals(isTruthy(function () { }), 1)
assertEquals(isTruthy(0), 0)
assertEquals(isTruthy(""), 0)
assertEquals(isTruthy(null), 0)
assertEquals(isTruthy(undefined), 0)
assertEquals(isTruthy(false), 0)
assertEquals(isTruthy(NaN), 0)
assertEquals(isTruthy(''), 0)