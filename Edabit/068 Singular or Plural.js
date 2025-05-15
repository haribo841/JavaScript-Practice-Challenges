//Create a function that takes in a word and determines whether or not it is plural.
//A plural word is one that ends in "s".
function isPlural(word) {
    return word.endsWith('s');
}
import { assertEquals } from '../testHelper.js';
assertEquals(isPlural("dudes"), true)
assertEquals(isPlural("flowers"), true)
assertEquals(isPlural("checks"), true)
assertEquals(isPlural("varies"), true)
assertEquals(isPlural("efforts"), true)
assertEquals(isPlural("mood"), false)
assertEquals(isPlural("whiteboard"), false)
assertEquals(isPlural("cow"), false)
assertEquals(isPlural("word"), false)
assertEquals(isPlural("love"), false)
assertEquals(isPlural("silly"), false)