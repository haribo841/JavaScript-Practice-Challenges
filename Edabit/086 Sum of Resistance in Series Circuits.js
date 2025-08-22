//Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. 
function seriesResistance(arr) {
    return arr.reduce((a, b) => a + b, 0) + (arr.reduce((a, b) => a + b, 0) === 1 ? " ohm" : " ohms");
}
import { assertEquals } from '../testHelper.js';
assertEquals(seriesResistance([1, 5, 6, 3]), "15 ohms")
assertEquals(seriesResistance([0.2, 0.3, 0.4]), "0.9 ohm")
assertEquals(seriesResistance([10, 12, 1, 10]), "33 ohms")
assertEquals(seriesResistance([10, 13, 3.8, 20, 10]), "56.8 ohms")
assertEquals(seriesResistance([0.5, 0.5]), "1 ohm")
assertEquals(seriesResistance([16, 30, 22.8, 4]), "72.8 ohms")
assertEquals(seriesResistance([20, 15, 32.5, 2]), "69.5 ohms")
assertEquals(seriesResistance([52, 22, 20, 30]), "124 ohms")
assertEquals(seriesResistance([10, 12, 32, 4.9, 5, 6, 71]), "140.9 ohms")