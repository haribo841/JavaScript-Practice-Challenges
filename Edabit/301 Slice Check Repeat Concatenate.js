//Create a function that takes a string; we'll say that the front is the first three characters of the string.
//If the string length is less than three characters, the front is whatever is there.
//Return a new string, which is three copies of the front.
function frontThree(str) {
    return str.length < 3 ? str.repeat(3) : str.slice(0, 3).repeat(3)
}
import { assertEquals } from '../testHelper.js';
assertEquals(frontThree('Python'), 'PytPytPyt', 'Simple string#1')
assertEquals(frontThree('Chocolate'), 'ChoChoCho', 'Simple strin#2')
assertEquals(frontThree('duh'), 'duhduhduh', '3 characters string')
assertEquals(frontThree('Sportsmanship'), 'SpoSpoSpo', 'Generic string')
assertEquals(frontThree('ab'), 'ababab', '2 characters string')
assertEquals(frontThree('a'), 'aaa', '1 characters string')
assertEquals(frontThree(''), '', 'Empty string')