/*Write a function that returns the first truthy argument passed to the function.
If all arguments are falsy, return the string "not found".
The function will be called with a minimum of one and a maximum of four arguments: a, b, c, d.*/
function firstOne(a, b = 0, c = 0, d = 0) {
    return a || b || c || d || "not found";
}
import { assertEquals } from '../testHelper.js';
assertEquals(firstOne('Edabit'), 'Edabit')
assertEquals(firstOne(false), "not found")
assertEquals(firstOne('', 'Pikachu'), 'Pikachu')
assertEquals(firstOne('', 0), "not found")
assertEquals(firstOne(0, 20, ''), 20)
assertEquals(firstOne(0, 0, ''), "not found")
assertEquals(firstOne('', 0, true, false), true)
assertEquals(firstOne('', 0, false, false), "not found")
