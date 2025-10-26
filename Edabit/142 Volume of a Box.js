//Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
function volumeOfBox(sizes) {
    return sizes.width * sizes.length * sizes.height;
}
import { assertEquals } from '../testHelper.js';
assertEquals(volumeOfBox({ width: 11, length: 1, height: 2 }), 22)
assertEquals(volumeOfBox({ width: 1, length: 5, height: 3 }), 15)
assertEquals(volumeOfBox({ width: 2, length: 1, height: 1 }), 2)
assertEquals(volumeOfBox({ width: 2, length: 6, height: 5 }), 60)
assertEquals(volumeOfBox({ width: 2, length: 5, height: 3 }), 30)
assertEquals(volumeOfBox({ width: 2, length: 5, height: 1 }), 10)