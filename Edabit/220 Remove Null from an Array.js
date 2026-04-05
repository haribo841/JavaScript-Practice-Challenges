//Create a function to remove all null values from an array.
function removeNull(arr) {
    return arr.filter(item => item !== null);
}
import { assertEquals } from '../testHelper.js';
assertEquals(removeNull(['a', null, 'b', null]), ['a', 'b'])
assertEquals(removeNull([null, null, null, null, null]), [])
assertEquals(removeNull([7, 8, null, 9]), [7, 8, 9])
assertEquals(removeNull([7, null, 8, null, 9]), [7, 8, 9])