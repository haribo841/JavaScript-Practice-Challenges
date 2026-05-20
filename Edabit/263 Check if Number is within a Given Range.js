//Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
function isInRange(num, range) {
        return num >= range.min && num <= range.max;
}
import { assertEquals } from '../testHelper.js';
assertEquals(isInRange(4, { min: 0, max: 5 }), true)
assertEquals(isInRange(4, { min: 4, max: 5 }), true)
assertEquals(isInRange(4, { min: 0, max: 4 }), true)
assertEquals(isInRange(4, { min: 6, max: 10 }), false)
assertEquals(isInRange(11, { min: 6, max: 10 }), false)
assertEquals(isInRange(5, { min: 5, max: 5 }), true)
assertEquals(isInRange(1.5, { min: 1.25, max: 1.75 }), true)
assertEquals(isInRange(1.1, { min: 1.25, max: 1.75 }), false)
assertEquals(isInRange(1.8, { min: 1.25, max: 1.75 }), false)
assertEquals(isInRange(-1, { min: -1, max: 1 }), true)