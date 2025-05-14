//Create a function that accepts an array and returns the last item in the array.
function getLastItem(arr) {
    return arr[arr.length - 1];
}
import { assertEquals } from '../testHelper.js';
assertEquals(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck')
assertEquals(getLastItem([1, 2, 3]), 3)
assertEquals(getLastItem([undefined]))
assertEquals(getLastItem([true, false, false, true]), true)
assertEquals(getLastItem([7, 'String', false, undefined, null]), null)
assertEquals(getLastItem([false]), false)
assertEquals(getLastItem([undefined, undefined, undefined]), undefined)
assertEquals(getLastItem([1, 2, 3, 56, 87, 23, 65, 45]), 45)
assertEquals(getLastItem(['Apple', 'Orange', undefined]), undefined)
assertEquals(getLastItem([true, false, 'Apple']), 'Apple')
assertEquals(getLastItem([null, null, null]), null)
assertEquals(getLastItem([1]), 1)