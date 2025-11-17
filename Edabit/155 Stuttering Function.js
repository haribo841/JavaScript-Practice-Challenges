//Write a function that stutters a word as if someone is struggling to read it.
//The first two letters are repeated twice with an ellipsis ... 
//and space after each, and then the word is pronounced with a question mark?.
function stutter(word) {
    return `${word.slice(0, 2)}... ${word.slice(0, 2)}... ${word}?`;
}
import { assertEquals } from '../testHelper.js';
assertEquals(stutter("incredible"), "in... in... incredible?")
assertEquals(stutter("am"), "am... am... am?")
assertEquals(stutter("outstanding"), "ou... ou... outstanding?")