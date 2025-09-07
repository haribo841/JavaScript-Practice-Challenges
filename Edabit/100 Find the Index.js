//Create a function that takes an array and a string as arguments and returns the index of the string.
function findIndex(arr, str) {
    return arr.indexOf(str);
}
import { assertEquals } from '../testHelper.js';
assertEquals(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3)
assertEquals(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5)
assertEquals(findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1)