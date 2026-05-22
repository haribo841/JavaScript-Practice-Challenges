//Given a set containing an element, return the sole element.
function elementSet(s) {
        return s.values().next().value;
}
import { assertEquals } from '../testHelper.js';
const first = new Set();
first.add(1);
assertEquals(elementSet(first), 1)

const second = new Set();
second.add("apple");
assertEquals(elementSet(second), "apple")

const third = new Set();
third.add(false);
assertEquals(elementSet(third), false)