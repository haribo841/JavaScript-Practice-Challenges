//Given the side length x find the area of a hexagon.
function areaOfHexagon(x) {
    if (x <= 0) return null;

    const area = (3 * Math.sqrt(3) * x * x) / 2;
    return Math.round(area * 10) / 10;
}
import { assertEquals } from '../testHelper.js';
assertEquals(areaOfHexagon(1), 2.6)
assertEquals(areaOfHexagon(2), 10.4)
assertEquals(areaOfHexagon(3), 23.4)
assertEquals(areaOfHexagon(4), 41.6)
assertEquals(areaOfHexagon(5), 65)
assertEquals(areaOfHexagon(0), null)
assertEquals(areaOfHexagon(-1), null)