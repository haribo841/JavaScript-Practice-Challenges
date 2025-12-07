//Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}
import { assertEquals } from '../testHelper.js';
assertEquals(checkSquareAndCube([4, 8]), true)
assertEquals(checkSquareAndCube([5, 12]), false)
assertEquals(checkSquareAndCube([9, 27]), true)
assertEquals(checkSquareAndCube([25, 120]), false)
assertEquals(checkSquareAndCube([25, 125]), true)
assertEquals(checkSquareAndCube([36, 215]), false)
assertEquals(checkSquareAndCube([36, 217]), false)
assertEquals(checkSquareAndCube([144, 1728]), true)
assertEquals(checkSquareAndCube([1, 1]), true)
assertEquals(checkSquareAndCube([676, 17576]), true)