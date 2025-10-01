//Create a function that takes an angle in radians and returns the corresponding angle in degrees.
function radiansToDegrees(rad) {
    return rad * (180 / Math.PI);
}
import { assertEquals } from '../testHelper.js';
assertEquals(radiansToDegrees(1), 57.29577951308232)
assertEquals(radiansToDegrees(5), 286.4788975654116)
assertEquals(radiansToDegrees(7), 401.07045659157626)
assertEquals(radiansToDegrees(100), 5729.5779513082325)
assertEquals(radiansToDegrees(180), 10313.240312354817)