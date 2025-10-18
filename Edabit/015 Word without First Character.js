//Create a function that takes a word and returns the new word without including the first character.
function newWord(str) {
    return str.slice(1);
}
import { assertEquals } from '../testHelper.js';
assertEquals(newWord("pokhara"), "okhara")
assertEquals(newWord("biratnagar"), "iratnagar")
assertEquals(newWord("nepal"), "epal")
assertEquals(newWord("damak"), "amak")
assertEquals(newWord("itahari"), "tahari")
assertEquals(newWord("rasuwa"), "asuwa")
assertEquals(newWord("rolpa"), "olpa")