//Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.
function nTablesPlusOne(n) {
    return Array.from({ length: 10 }, (_, i) => (i + 1) * n + 1).join(',')
}
import { assertEquals } from '../testHelper.js';
assertEquals(nTablesPlusOne(1), "2,3,4,5,6,7,8,9,10,11")
assertEquals(nTablesPlusOne(7), "8,15,22,29,36,43,50,57,64,71")
assertEquals(nTablesPlusOne(134), "135,269,403,537,671,805,939,1073,1207,1341")