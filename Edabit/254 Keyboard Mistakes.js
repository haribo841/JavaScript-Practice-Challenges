//Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:
//A is misinterpreted as 4
//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1
//The test cases contain numbers only by mistake.
function keyboardMistakes(str) {
    return str
        .replaceAll("4", "A")
        .replaceAll("5", "S")
        .replaceAll("0", "O")
        .replaceAll("1", "I")
}
import { assertEquals } from '../testHelper.js';
assertEquals(keyboardMistakes("MUB45H1R"), "MUBASHIR")
assertEquals(keyboardMistakes("DUBL1N"), "DUBLIN")
assertEquals(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
assertEquals(keyboardMistakes("P4K15T4N"), "PAKISTAN")
assertEquals(keyboardMistakes("P4R15"), "PARIS")
