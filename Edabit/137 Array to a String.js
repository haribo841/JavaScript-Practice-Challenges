//Create a function that takes an array of numbers or letters and returns a string.
function arrayToString(arr) {
    return arr.join('');
}
import { assertEquals } from '../testHelper.js';
assertEquals(arrayToString([1, 2, 3, 4, 5, 6]), "123456")
assertEquals(arrayToString(['a', 'b', 'c', 'd', 'e', 'f']), "abcdef")
assertEquals(arrayToString([1, 2, 3, 'a', 's', 'd']), "123asd")
assertEquals(arrayToString(['a', 's', 'd', 'f', 'e', 'r', 1, 2, 3, 4, 5, 0]), "asdfer123450")
assertEquals(arrayToString(['A', 'D', 'F', 'G', 'H', 'Y', 'TR', 'NNHJK']), "ADFGHYTRNNHJK")