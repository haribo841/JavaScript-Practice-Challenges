//Given an array of integers, determine whether the sum of its elements is even or odd.
//The return value should be a string("odd" or "even").
//If the input array is empty, consider it as an array with a zero([0]).
function evenOrOdd(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? 'even' : 'odd'
}
import { assertEquals } from '../testHelper.js';
assertEquals(evenOrOdd([0]), 'even')
assertEquals(evenOrOdd([1]), 'odd')
assertEquals(evenOrOdd([]), 'even')
assertEquals(evenOrOdd([0, 1, 5]), 'even')
assertEquals(evenOrOdd([0, 1, 3]), 'even')
assertEquals(evenOrOdd([1023, 1, 2]), 'even')
assertEquals(evenOrOdd([0, -1, -5]), 'even')
assertEquals(evenOrOdd([0, -1, -3]), 'even')
assertEquals(evenOrOdd([-1023, 1, -2]), 'even')
assertEquals(evenOrOdd([0, 1, 2]), 'odd')
assertEquals(evenOrOdd([0, 1, 4]), 'odd')
assertEquals(evenOrOdd([1023, 1, 3]), 'odd')
assertEquals(evenOrOdd([0, -1, 2]), 'odd')
assertEquals(evenOrOdd([0, 1, -4]), 'odd')
assertEquals(evenOrOdd([-1023, -1, 3]), 'odd')