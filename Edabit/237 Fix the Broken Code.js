//A student learning JavaScript was trying to make a function that sorts all the letters of a word,
//but their code is broken, and they can't figure out why.
//Spot and fix the error(s) in the code to make the function work.
function sortWord(word) {
	return word.split('').sort().join('');
}
import { assertEquals } from '../testHelper.js';
assertEquals(sortWord("dcba"), "abcd")
assertEquals(sortWord("pneumonoultramicroscopicsilicovolcanoconiosis"), "aacccccceiiiiiilllmmnnnnooooooooopprrsssstuuv")
assertEquals(sortWord("Unpredictable"), "Uabcdeeilnprt", "Capital letters should come first!")
assertEquals(sortWord("a"), "a")
assertEquals(sortWord("ability"), "abiilty")
assertEquals(sortWord("able"), "abel")
assertEquals(sortWord("about"), "abotu")
assertEquals(sortWord("above"), "abeov")
assertEquals(sortWord("accept"), "accept")