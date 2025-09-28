//According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
//Your challenge is to write your own version using vanilla JavaScript.
function drop(arr, val = 1) {
    let newArr = [],
        len = arr.length,
        i = val === undefined ? 1 : val;
    while (i < len) {
        newArr.push(arr[i]);
        i += 1;
    }
    return newArr;
};
import { assertEquals } from '../testHelper.js';
assertEquals(drop([1, 2, 3], 2), [3])
assertEquals(drop([1, 2, 3], 5), [])
assertEquals(drop([1, 2, 3], 0), [1, 2, 3])
assertEquals(drop(["banana", "orange", "watermelon", "mango"], 2), ["watermelon", "mango"])
assertEquals(drop([], 2), [])
