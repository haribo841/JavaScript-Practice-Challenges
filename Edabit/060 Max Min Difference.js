//Given an array of integers, return the difference between the largest and smallest integers in the array.
function difference(nums) {
    return Math.max(...nums) - Math.min(...nums);
}
import * as Test from '../testHelper.js';
Test.assertEquals(difference([-9, -8, 6, -9, 15, 6]), 24)
Test.assertEquals(difference([-5, 6, 18, 4, 16, -2]), 23)
Test.assertEquals(difference([-2, 20, -9, -9, -2, -7]), 29)
Test.assertEquals(difference([4, -2, 11, -9, 15, 2]), 24)
Test.assertEquals(difference([15, 10, 3, -6, 6, 19]), 25)
Test.assertEquals(difference([1, 7, 18, -1, -2, 9]), 20)
Test.assertEquals(difference([5, 1, -9, 7, -8, -10]), 17)
Test.assertEquals(difference([-4, 17, -4, 20, -7, 0]), 27)
Test.assertEquals(difference([-2, 11, 11, -3, -3, -3]), 14)
Test.assertEquals(difference([1, 15, 14, 20, 10, 6]), 19)
Test.assertEquals(difference([4, 17, 12, 2, 10, 2]), 15)
Test.assertEquals(difference([-3, 3, 20, 10, 0, 17]), 23)
Test.assertEquals(difference([-3, 6, 20, 9, 6, 7]), 23)
Test.assertEquals(difference([16, 15, 1, 18, -7, -3]), 25)
Test.assertEquals(difference([-7, 4, -4, -3, -8, -9]), 13)
Test.assertEquals(difference([15, 8, 17, 18, 10, 10]), 10)
Test.assertEquals(difference([-3, 20, 16, 8, 18, -10]), 30)
Test.assertEquals(difference([6, 18, 9, 1, 3, 1]), 17)
Test.assertEquals(difference([20, 18, -2, -10, -10, 17]), 30)
Test.assertEquals(difference([18, 20, -7, -4, -2, -8]), 28)