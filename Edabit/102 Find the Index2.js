//Create a function that searches for the index of a given item in an array.
//If the item is present, it should return the index, otherwise, it should return -1.
function search(arr, item) {
    return arr.indexOf(item);
}
import { assertEquals } from '../testHelper.js';
assertEquals(search([1, 2, 3, 4], 3), 2)
assertEquals(search([2, 4, 6, 8, 10], 8), 3)
assertEquals(search([1, 3, 5, 7, 9], 11), -1)
assertEquals(search([1, 5, 7, 11, 25, 100, 200, 350], 5), 1)