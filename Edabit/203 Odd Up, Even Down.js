//Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.
function transform(arr) {
    return arr.map(x => x % 2 === 0 ? x - 1 : x + 1);
}
import { assertEquals } from '../testHelper.js';
assertEquals(transform([1, 2, 3, 4, 5]), [2, 1, 4, 3, 6])
assertEquals(transform([3, 3, 4, 3]), [4, 4, 3, 4])
assertEquals(transform([2, 2, 0, 8, 10]), [1, 1, -1, 7, 9])
assertEquals(transform([9, 13, 15, 5, 2, 11]), [10, 14, 16, 6, 1, 12])