//Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.
function makeCopy(obj) {
    return Object.assign({}, obj);
}
import { assertEquals, assertNotEquals } from '../testHelper.js';
const obj = { piano: 100 }
const obj2 = { stereo: 200 }
const obj3 = { tv: Math.random() }

assertNotEquals(makeCopy(obj), obj, "Return a copy of the obj, not the obj itself")
assertEquals(makeCopy(obj), obj)
assertNotEquals(makeCopy(obj2), obj2, "Return a copy of the obj, not the obj itself")
assertEquals(makeCopy(obj2), obj2)
assertNotEquals(makeCopy(obj3), obj3)
assertEquals(makeCopy(obj3), obj3)