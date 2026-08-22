//Write two functions:
//toInt() : A function to convert a string to an integer.
//toStr() : A function to convert an integer to a string.
function toInt(str) {
    return Number.parseInt(str, 10);
}

function toStr(int) {
    return int.toString();
}
import { assertEquals } from '../testHelper.js';
assertEquals(toInt("37"), 37)
assertEquals(toInt("113"), 113)
assertEquals(toInt("5"), 5)
assertEquals(toInt("5231"), 5231)
assertEquals(toStr(37), "37")
assertEquals(toStr(113), "113")
assertEquals(toStr(5), "5")
assertEquals(toStr(5231), "5231")
