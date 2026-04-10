//Create a function that returns the product of all odd integers in an array.
function oddProduct(arr) {
    return arr.filter(x => x % 2 !== 0).reduce((product, x) => product * x, 1);
}
import { assertEquals } from '../testHelper.js';
assertEquals(oddProduct([3, 4, 1, 1, 5]), 15)
assertEquals(oddProduct([5, 5, 8, 2, 4, 32]), 25)
assertEquals(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1)
assertEquals(oddProduct([0, 0, 0, 1]), 1)
assertEquals(oddProduct([1, 2, 2, 5, 2, 0]), 5)