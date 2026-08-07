//Create a function that finds the index of a given item.
function search(arr, item) {
   return arr.indexOf(item);
}
import { assertEquals } from '../testHelper.js';
assertEquals(search([1, 5, 3], 5), 1)
assertEquals(search([9, 8, 3], 3), 2)
assertEquals(search([1, 2, 3], 4), -1)
assertEquals(search([1, 5, 3, 10, 17, 20, -6], 20), 5)