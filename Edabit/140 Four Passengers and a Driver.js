//A typical car can hold four passengers and one driver, allowing five people to travel around.
//Given n number of people, return how many cars are needed to seat everyone comfortably.
function carsNeeded(n) {
    return Math.ceil(n / 5);
}
import { assertEquals } from '../testHelper.js';
assertEquals(carsNeeded(0), 0)
assertEquals(carsNeeded(1), 1)
assertEquals(carsNeeded(4), 1)
assertEquals(carsNeeded(5), 1)
assertEquals(carsNeeded(6), 2)
assertEquals(carsNeeded(18), 4)