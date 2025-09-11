//Create a function that takes a string and returns the word count.
//The string will be a sentence.
function countWords(str) {
    return str.split(' ').length;
}
import { assertEquals } from '../testHelper.js';
assertEquals(countWords("It's high noon"), 3)
assertEquals(countWords("Is this easy mode"), 4)
assertEquals(countWords("What an easy task, right"), 5)
assertEquals(countWords("This is a test"), 4)
assertEquals(countWords("Just an example here move along"), 6)
assertEquals(countWords("How are you today?"), 4)