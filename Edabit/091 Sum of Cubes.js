//Create a function that takes in an array of numbers and returns the sum of its cubes.
function sumOfCubes(nums) {
    return nums.reduce((acc, num) => acc + Math.pow(num, 3), 0);
}
import { assertEquals } from '../testHelper.js';
assertEquals(sumOfCubes([1, 5, 9]), 855)
assertEquals(sumOfCubes([3, 4, 5]), 216)
assertEquals(sumOfCubes([1, 1, 1]), 3)
assertEquals(sumOfCubes([2]), 8)
assertEquals(sumOfCubes([5, 1, 2]), 134)
assertEquals(sumOfCubes([32]), 32768)
assertEquals(sumOfCubes([5, 9, 4, 4, 9]), 1711)
assertEquals(sumOfCubes([0, 1, 2]), 9)
assertEquals(sumOfCubes([]), 0)