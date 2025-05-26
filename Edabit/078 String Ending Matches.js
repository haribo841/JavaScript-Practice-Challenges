//Create a function that takes a string (a random name).
//If the last character of the name is an "n", return true, otherwise return false.
function isLastCharacterN(word) {
    return word.charAt(word.length - 1).toLowerCase() === 'n';
}
import { assertEquals } from '../testHelper.js';
assertEquals(isLastCharacterN("Aiden"), true)
assertEquals(isLastCharacterN("Roxy"), false)
assertEquals(isLastCharacterN("Bert"), false)
assertEquals(isLastCharacterN("Dean"), true)
assertEquals(isLastCharacterN("Ian"), true)
assertEquals(isLastCharacterN("Brian"), true)
assertEquals(isLastCharacterN("Daniel"), false)