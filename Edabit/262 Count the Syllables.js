//Create a function that returns the number of syllables in a simple string.
//The string is made up of short repeated words like "Lalalalalalala"(which would have 7 syllables).
function countSyllables(str) {
    return str.length / 2
}
import { assertEquals } from '../testHelper.js';
assertEquals(countSyllables("Hehehehehehe"), 6)
assertEquals(countSyllables("bobobobobobobobo"), 8)
assertEquals(countSyllables("NANANANA"), 4)
assertEquals(countSyllables("lelelele"), 4)
assertEquals(countSyllables("momomomomomomomomo"), 9)
assertEquals(countSyllables("WiWiWiWiWiWiWiWiWiWi"), 10)
assertEquals(countSyllables("RURURURURURUrurururuRURU"), 12)
assertEquals(countSyllables("go"), 1)
assertEquals(countSyllables("dede"), 2)