//Given a person's age and the number of times they've moved house as moves,
//return the average number of years that they've spent living in the same house.
function yearsInOneHouse(age, moves) {
    return Math.round(age / (moves + 1));
}
import { assertEquals } from '../testHelper.js';
assertEquals(yearsInOneHouse(30, 1), 15)
assertEquals(yearsInOneHouse(15, 2), 5)
assertEquals(yearsInOneHouse(80, 0), 80)
assertEquals(yearsInOneHouse(23, 2), 8)
assertEquals(yearsInOneHouse(31, 2), 10)
assertEquals(yearsInOneHouse(1, 0), 1)