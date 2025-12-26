//Create a function that takes an array of words and transforms it into an array of each word's length.
function wordLengths(arr) {
    return arr.map(x => x.length);
}
import { assertEquals } from '../testHelper.js';
assertEquals(wordLengths(["hello", "world"]), [5, 5], "Example #1")
assertEquals(wordLengths(["Halloween", "Thanksgiving", "Christmas"]), [9, 12, 9], "Example #2")
assertEquals(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]), [3, 5, 9, 4, 2, 3, 8], "Example #3")
assertEquals(wordLengths(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"]), [7, 5, 3, 3, 6, 2, 4])
assertEquals(wordLengths(["Programming", "is", "fun"]), [11, 2, 3])