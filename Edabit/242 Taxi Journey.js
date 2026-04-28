//A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
//Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.
function journeyDistance(num) {
    return (num < 3 ? 0 : (Math.ceil((num - 3) / 2)) + 1);
}
import { assertEquals } from '../testHelper.js';
assertEquals(journeyDistance(0), 0)
assertEquals(journeyDistance(3), 1)
assertEquals(journeyDistance(5), 2)
assertEquals(journeyDistance(9), 4)
assertEquals(journeyDistance(15), 7)
assertEquals(journeyDistance(99), 49)
assertEquals(journeyDistance(11037), 5518)