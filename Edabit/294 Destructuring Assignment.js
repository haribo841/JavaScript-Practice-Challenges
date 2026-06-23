//Using Destructuring Assignment, your task is to unpack the arrays writeyourcodehere into three variables, first, a variable to ignore all middle values and last.
const [first, , , , , , , last] = [1, 2, 3, 4, 5, 6, 7, 8];
import { assertEquals } from '../testHelper.js';
assertEquals(first, 1)
assertEquals(last, 8)