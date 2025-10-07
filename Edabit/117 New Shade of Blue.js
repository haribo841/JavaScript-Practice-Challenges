/*I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible.
Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.
n is the number of square meters I can paint.
w and h are the widths and heights of a single wall in meters.*/
function howManyWalls(n, w, h) {
    return Math.floor((n / (w * h)));
}
import { assertEquals } from '../testHelper.js';
assertEquals(howManyWalls(100, 4, 5), 5)
assertEquals(howManyWalls(10, 15, 12), 0)
assertEquals(howManyWalls(41, 3, 6), 2)
assertEquals(howManyWalls(50, 11, 5), 0)
assertEquals(howManyWalls(1, 1, 1), 1)