//Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
function matchHouses(step) {
    return step === 0 ? 0 : 6 + (step - 1) * 5;
}
import { assertEquals } from '../testHelper.js';
assertEquals(matchHouses(1), 6)
assertEquals(matchHouses(0), 0)
assertEquals(matchHouses(17), 86)
assertEquals(matchHouses(36), 181)
assertEquals(matchHouses(15), 76)
assertEquals(matchHouses(99), 496)
assertEquals(matchHouses(3), 16)
assertEquals(matchHouses(87), 436)