//You are counting points for a basketball game,
//given the amount of 3-pointers scored and 2-pointers scored,
//find the final points for the team and return that value
//([2 -pointers scored, 3-pointers scored]).
function points(twoPointers, threePointers) {
    return twoPointers * 2 + threePointers * 3;
}
import * as Test from '../testHelper.js';
Test.assertEquals(points(1, 1), 5)
Test.assertEquals(points(1, 2), 8)
Test.assertEquals(points(2, 1), 7)
Test.assertEquals(points(2, 2), 10)
Test.assertEquals(points(69, 420), 1398)