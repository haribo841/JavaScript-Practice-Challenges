//A vehicle needs 10 times the amount of fuel than the distance it travels.
//However, it must always carry a minimum of 100 fuel before setting off.
//Create a function which calculates the amount of fuel it needs, given the distance.
function calculateFuel(n) {
    return Math.max(100, n * 10);
}
import { assertEquals } from '../testHelper.js';
assertEquals(calculateFuel(15), 150)
assertEquals(calculateFuel(23), 230)
assertEquals(calculateFuel(10), 100)
assertEquals(calculateFuel(3), 100)
assertEquals(calculateFuel(23.5), 235)
assertEquals(calculateFuel(3.14), 100)
assertEquals(calculateFuel(9.99999), 100)
assertEquals(calculateFuel(822315322), 8223153220)
assertEquals(calculateFuel(12345.6789), 123456.789)
assertEquals(calculateFuel(31.41), 314.1)