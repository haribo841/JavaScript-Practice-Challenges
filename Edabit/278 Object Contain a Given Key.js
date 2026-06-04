//Write a function that returns true if a hash contains the specified key, and false otherwise.
function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
import { assertEquals } from '../testHelper.js';
assertEquals(hasKey({ pot: 1, tot: 2, not: 3 }, "not"), true)
assertEquals(hasKey({ craves: true, midnight: true, snack: true }, "morning"), false)
assertEquals(hasKey({ a: 44, b: 45, c: 46 }, "d"), false)
assertEquals(hasKey({ a: "z", b: "y", c: "x" }, "c"), true)