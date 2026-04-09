//Create a function that takes in an array and returns true if all its values are even, and false otherwise.
function checkAllEven(arr) {
    return arr.every(x => x % 2 === 0);
}
import { assertEquals } from '../testHelper.js';
const x = [1, 2, 3, 4, 5]
assertEquals(checkAllEven([1, 2, 3, 4]), false)
assertEquals(checkAllEven([2, 4, 6]), true)
assertEquals(checkAllEven([5, 6, 8, 10]), false)
assertEquals(checkAllEven([-2, 2, -2, 2]), true)