//Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.
function outlierNumber(arr) {
    const majorityIsEven = arr.slice(0, 3).filter(value => value % 2 === 0).length >= 2;
    return arr.find(value => (value % 2 === 0) !== majorityIsEven);
}
import { assertEquals } from '../testHelper.js';
assertEquals(outlierNumber([2, 3, 4]), 3)
assertEquals(outlierNumber([1, 2, 3]), 2)
assertEquals(outlierNumber([4, 1, 3, 5, 9]), 4)
assertEquals(outlierNumber([2, 6, 8, 10, 3]), 3)
assertEquals(outlierNumber([2, 6, 8, 200, 700, 1, 84, 10, 4]), 1)
assertEquals(outlierNumber([17, 6, 8, 10, 6, 12, 24, 36]), 17)
assertEquals(outlierNumber([1, 1, 1, 1, 1, 44, 7, 7, 7, 7, 7, 7, 7, 7]), 44)
assertEquals(outlierNumber([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 35, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7, 1000]), 1000)
assertEquals(outlierNumber([1, 0, 0]), 1)
assertEquals(outlierNumber([3, 7, -99, 81, 90211, 0, 7]), 0)
assertEquals(outlierNumber([2, -6, 8, -10, -3]), -3)
assertEquals(outlierNumber([2, 6, 8, 2, -66, 34, -35, 66, 700, 1002, -84, 10, 4]), -35)
assertEquals(outlierNumber([-20, 1, 7, 17, 19, 211, 7]), -20)
assertEquals(outlierNumber([1, 1, -1, 1, 1, -44, 7, 7, 7, 7, 7, 7, 7, 7]), -44)
