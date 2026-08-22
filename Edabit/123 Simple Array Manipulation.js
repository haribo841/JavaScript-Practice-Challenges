//Help fix all the bugs in the function incrementItems!
//It is intended to add 1 to every element in the array!
function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i] = arr[i] + 1
	return arr
}
import { assertEquals } from '../testHelper.js';
assertEquals(incrementItems([0, 1, 2, 3]), [1, 2, 3, 4])
assertEquals(incrementItems([2, 4, 6, 8]), [3, 5, 7, 9])
assertEquals(incrementItems([-1, -2, -3, -4]), [0, -1, -2, -3])
