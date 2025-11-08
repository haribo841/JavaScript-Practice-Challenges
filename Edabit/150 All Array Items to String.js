//Create a function that takes an array of integers and strings.
//Convert integers to strings and return the new array.
function parseArray(arr) {
    return arr.map(String);
}
import { assertEquals } from '../testHelper.js';
assertEquals(parseArray([1, 2, "a", "b"]), ['1', '2', "a", "b"])
assertEquals(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]), ['1', '2', '3', '17', '24', '3', 'a', '123b'])
assertEquals(parseArray(["abc", 123, "def", 456]), ['abc', '123', 'def', '456'])
assertEquals(parseArray([]), [])