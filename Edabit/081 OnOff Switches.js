//Create a function that returns how many possible arrangements can come from a certain number of switches (on / off).
//In other words, for a given number of switches, how many different patterns of on and off can we have ?
function posCom(num) {
    return Math.pow(2, num);
}
import { assertEquals } from '../testHelper.js';
assertEquals(posCom(5), 32)
assertEquals(posCom(4), 16)
assertEquals(posCom(3), 8)
assertEquals(posCom(2), 4)
assertEquals(posCom(1), 2)
assertEquals(posCom(6), 64)
assertEquals(posCom(7), 128)
assertEquals(posCom(8), 256)
assertEquals(posCom(9), 512)
assertEquals(posCom(10), 1024)
assertEquals(posCom(25), 33554432)