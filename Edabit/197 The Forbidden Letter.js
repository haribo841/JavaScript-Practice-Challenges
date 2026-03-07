//Given a letter and an array of words, return whether the letter does not appear in any of the words.
function forbiddenLetter(char, arr) {
    return arr.every(word => !word.includes(char));
}
import { assertEquals } from '../testHelper.js';
assertEquals(forbiddenLetter('e', ['rinse', 'and', 'repeat']), false)
assertEquals(forbiddenLetter('d', ['python', 'javascript', 'ruby', 'fortran']), true)
assertEquals(forbiddenLetter('a', ['spoon', 'fork', 'knife']), true)
assertEquals(forbiddenLetter('b', ['test', 'dot', 'assert', 'equals']), true)
assertEquals(forbiddenLetter('i', ['rock', 'paper', 'scissors']), false)
assertEquals(forbiddenLetter('t', []), true)