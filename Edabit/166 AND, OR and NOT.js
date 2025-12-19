//You will need to write three unfinished logic gates.
//Continue to write the three logic gates: AND, OR, and NOT.
function NOT(n) {
    return n === 0 ? 1 : 0;
}

function AND(a, b) {
    return a === 1 && b === 1 ? 1 : 0;
}

function OR(a, b) {
    return a === 1 || b === 1 ? 1 : 0;
}
import { assertEquals } from '../testHelper.js';
assertEquals(AND(1, 1), 1)
assertEquals(OR(1, 1), 1)
assertEquals(AND(0, 1), 0)
assertEquals(AND(0, 0), 0)
assertEquals(OR(0, 1), 1)
assertEquals(OR(1, 0), 1)
assertEquals(OR(0, 0), 0)
assertEquals(NOT(0), 1)
assertEquals(AND(1, 0), 0)
assertEquals(NOT(1), 0)