//Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
function charCount(myChar, str) {
    return str.split(myChar).length - 1;
}
import { assertEquals } from '../testHelper.js';
assertEquals(charCount('a', 'edabit'), 1)
assertEquals(charCount('b', 'big fat bubble'), 4)
assertEquals(charCount('c', 'Chamber of secrets'), 1)
assertEquals(charCount('f', 'frank and his friends have offered five foxes for sale'), 7)
assertEquals(charCount('x', 'edabit'), 0)
assertEquals(charCount('a', 'Adam and Eve bit the apple and found a snake'), 6)
assertEquals(charCount('s', 'sssssssssssssssssssssssss'), 25)
assertEquals(charCount('7', '10795426697'), 2)