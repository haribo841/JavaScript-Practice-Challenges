//Write a function that returns true if an object is empty, and false otherwise.
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isEmpty({}), true)
assertEquals(isEmpty({ a: 1 }), false)
assertEquals(isEmpty({ z: 2, w: 4, y: 5 }), false)