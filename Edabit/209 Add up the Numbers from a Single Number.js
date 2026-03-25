//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
//For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
function addUp(num) {
    return num * (num + 1) / 2;
}
import { assertEquals } from '../testHelper.js';
assertEquals(addUp(4), 10)
assertEquals(addUp(13), 91)
assertEquals(addUp(600), 180300)
assertEquals(addUp(392), 77028)
assertEquals(addUp(53), 1431)
assertEquals(addUp(897), 402753)
assertEquals(addUp(23), 276)
assertEquals(addUp(1000), 500500)
assertEquals(addUp(738), 272691)
assertEquals(addUp(100), 5050)
assertEquals(addUp(925), 428275)
assertEquals(addUp(1), 1)
assertEquals(addUp(999), 499500)
assertEquals(addUp(175), 15400)
assertEquals(addUp(111), 6216)