//Given an array, rotate the values clockwise by one (the last value is sent to the first position).
function rotateByOne(arr) {
    return [arr[arr.length - 1], ...arr.slice(0, -1)]
}
import { assertEquals } from '../testHelper.js';
assertEquals(rotateByOne([1, 2, 3, 4, 5]), [5, 1, 2, 3, 4])
assertEquals(rotateByOne([6, 5, 8, 9, 7]), [7, 6, 5, 8, 9])
assertEquals(rotateByOne([20, 15, 26, 8, 4]), [4, 20, 15, 26, 8])
assertEquals(rotateByOne([7, 8, 6, 4, 5]), [5, 7, 8, 6, 4])
assertEquals(rotateByOne([5, 9, 45, 1, 2]), [2, 5, 9, 45, 1])
assertEquals(rotateByOne([5, 9, 45, 1, 2, 8, 10, 12, 15]), [15, 5, 9, 45, 1, 2, 8, 10, 12])
