//Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.
function arrIndex(arr, idx) {
    return idx.map(i => {
        const row = Math.floor((i - 1) / arr[0].length);
        const col = (i - 1) % arr[0].length;
        return arr[row][col];
    }).join('');
}
import { assertEquals } from '../testHelper.js';
const results1 = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']], [1, 3, 5, 8])
assertEquals(results1, 'mbsr')
const results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
assertEquals(results2, 'myexample')
const results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
assertEquals(results3, 'mam')
const results4 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
assertEquals(results4, 'mepl')