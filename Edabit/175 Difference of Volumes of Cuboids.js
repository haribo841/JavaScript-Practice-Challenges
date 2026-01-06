//Create a program that will take two arrays of integers, a and b.
//Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b.
//Find the difference of the cuboids' volumes.
//For example, if the parameters passed are([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20.
//Therefore, the function should return 8.
function findDifference(a, b) {
    return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}
import { assertEquals } from '../testHelper.js';
assertEquals(findDifference([28, 16, 29], [7, 8, 17]), 12040)
assertEquals(findDifference([9, 22, 18], [16, 24, 10]), 276)
assertEquals(findDifference([1, 9, 25], [10, 7, 9]), 405)
assertEquals(findDifference([7, 6, 16], [26, 9, 26]), 5412)
assertEquals(findDifference([20, 19, 8], [5, 29, 1]), 2895)
assertEquals(findDifference([21, 6, 7], [25, 14, 17]), 5068)
assertEquals(findDifference([18, 29, 12], [24, 22, 4]), 4152)
assertEquals(findDifference([1, 16, 11], [26, 10, 17]), 4244)
assertEquals(findDifference([27, 11, 7], [2, 8, 26]), 1663)
assertEquals(findDifference([20, 17, 30], [20, 1, 13]), 9940)
assertEquals(findDifference([15, 7, 28], [3, 12, 11]), 2544)
assertEquals(findDifference([16, 17, 25], [18, 14, 28]), 256)
assertEquals(findDifference([1, 3, 22], [12, 23, 16]), 4350)
assertEquals(findDifference([3, 29, 12], [4, 9, 6]), 828)
assertEquals(findDifference([5, 18, 15], [16, 14, 26]), 4474)
assertEquals(findDifference([6, 14, 18], [30, 12, 22]), 6408)