//Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:
//A is misinterpreted as 4
//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1
//The test cases contain numbers only by mistake.
function keyboardMistakes(str) {
    return str.replace(/4/g, "A").replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I")
}
import { assertEquals } from '../testHelper.js';
assertEquals(keyboardMistakes("MUB45H1R"), "MUBASHIR")
assertEquals(keyboardMistakes("DUBL1N"), "DUBLIN")
assertEquals(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
assertEquals(keyboardMistakes("P4K15T4N"), "PAKISTAN")
assertEquals(keyboardMistakes("P4R15"), "PARIS")