//Create a function that counts the number of syllables a word has.
//Each syllable is separated with a dash -.
function numberSyllables(word) {
    return word.split('-').length;
}
import { assertEquals } from '../testHelper.js';
assertEquals(numberSyllables("buf-fet"), 2)
assertEquals(numberSyllables("beau-ti-ful"), 3)
assertEquals(numberSyllables("mon-u-men-tal"), 4)
assertEquals(numberSyllables("on-o-mat-o-poe-ia"), 6)
assertEquals(numberSyllables("o-ver-ly"), 3)
assertEquals(numberSyllables("pas-try"), 2)
assertEquals(numberSyllables("flu-id"), 2)
assertEquals(numberSyllables("syl-la-ble"), 3)