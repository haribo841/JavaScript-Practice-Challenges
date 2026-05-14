//Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.
function oddSum(numbers) {
    return numbers.slice(0, -1).map((num, i) => {
        return (num + numbers[i + 1]) % 2 === 0;
    });
}
import { assertEquals } from '../testHelper.js';
assertEquals(oddSum([11, 15, 6, 8, 9, 10]), [true, false, true, false, false])
assertEquals(oddSum([12, 21, 5, 9, 65, 32]), [false, true, true, true, false])
assertEquals(oddSum([12, 21, 5, 9, 65, 32]), [false, true, true, true, false])
assertEquals(oddSum([1, 2, 3, 4, 5, 6]), [false, false, false, false, false])
assertEquals(oddSum([4, 5, 6, 7, 9, 45, 12, 32, 65, 49, 45, 840]), [false, false, false, true, true, false, true, false, true, true, false])
assertEquals(oddSum([88, 45, 654, 123]), [false, false, false])
assertEquals(oddSum([98, 4, 12, 565, 798, 465, 13, 1, 365, 14, 89, 565]), [true, true, false, false, false, true, true, true, false, false, true])