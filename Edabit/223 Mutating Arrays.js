//Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array.
//Fix the code so that the results are no longer mutating the array.
function minusOne(arr) {
    return arr.slice(0, -1);
}
import { assertEquals } from '../testHelper.js';
const x = [1, 2, 3, 4, 5]
assertEquals(minusOne(x), [1, 2, 3, 4])
assertEquals(minusOne(x), [1, 2, 3, 4])
assertEquals(minusOne(x), [1, 2, 3, 4])
assertEquals(minusOne(x), [1, 2, 3, 4])
assertEquals(minusOne(x), [1, 2, 3, 4])