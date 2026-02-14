//Create a function that takes a number as an argument and returns the square root of that number cubed.
function cubeSquareRoot(num) {
    return Math.pow(Math.sqrt(num), 3)
}
import { assertEquals } from '../testHelper.js';
assertEquals(cubeSquareRoot(81), 729)
assertEquals(cubeSquareRoot(1646089), 2111932187)
assertEquals(cubeSquareRoot(695556), 580093704)