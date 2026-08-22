//Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {
    return arr.map(x => x * 2);
}
import { assertEquals } from '../testHelper.js';
assertEquals(getMultipliedArr([2, 5, 3]), [4, 10, 6])
assertEquals(getMultipliedArr([1, 86, -5]), [2, 172, -10])
assertEquals(getMultipliedArr([5, 382, 0]), [10, 764, 0])
