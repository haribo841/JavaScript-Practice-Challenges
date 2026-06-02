//Create a function that takes an angle in radians and converts it into degrees.
function toDegree(radian) {
    return Math.round(radian * (180 / Math.PI) * 100) / 100;
}
import { assertEquals } from '../testHelper.js';
assertEquals(toDegree(2 * Math.PI), 360)
assertEquals(toDegree(Math.PI), 180)
assertEquals(toDegree(Math.PI / 2), 90)
assertEquals(toDegree(Math.PI / 4), 45)
assertEquals(toDegree(Math.PI / 3), 60)