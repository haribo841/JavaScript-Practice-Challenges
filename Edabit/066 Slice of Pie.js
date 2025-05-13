//Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
//Total number of slices.
//Number of recipients.
//How many slices each person gets.
function equalSlices(total, people, each) {
    return total >= people * each;
}
import { assertEquals } from '../testHelper.js';
assertEquals(equalSlices(8, 3, 2), true)
assertEquals(equalSlices(8, 3, 3), false)
assertEquals(equalSlices(24, 12, 2), true)
assertEquals(equalSlices(5, 6, 1), false)
assertEquals(equalSlices(5, 0, 100), true)
assertEquals(equalSlices(15, 2, 7), true)
assertEquals(equalSlices(15, 2, 8), false)