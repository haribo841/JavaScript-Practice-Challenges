//In this challenge, you have to implement a function that returns the given distance kilometers converted into miles.
//You have to round the result up to the fifth decimal digit.
function kmtomiles(kilometers) {
    return Math.round(kilometers * 0.621371 * 100000) / 100000
}
import { assertEquals } from '../testHelper.js';
assertEquals(kmtomiles(2), 1.24274)
assertEquals(kmtomiles(6), 3.72823)
assertEquals(kmtomiles(8), 4.97097)