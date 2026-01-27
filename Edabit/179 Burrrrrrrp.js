//Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
function longBurp(num) {
    return "Bu" + "r".repeat(num) + "p";
}
import { assertEquals } from '../testHelper.js';
assertEquals(longBurp(3), "Burrrp")
assertEquals(longBurp(5), "Burrrrrp")
assertEquals(longBurp(9), "Burrrrrrrrrp")
assertEquals(longBurp(10), "Burrrrrrrrrrp")
assertEquals(longBurp(13), "Burrrrrrrrrrrrrp")
assertEquals(longBurp(18), "Burrrrrrrrrrrrrrrrrrp")
assertEquals(longBurp(1), "Burp")