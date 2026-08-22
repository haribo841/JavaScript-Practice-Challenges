//Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24.
//If none of the operations can give 24, return null.
function operation(num1, num2) {
    if (num1 + num2 === 24) return "added";
    if (num1 - num2 === 24) return "subtracted";
    if (num1 * num2 === 24) return "multiplied";
    if (num1 / num2 === 24) return "divided";
    return null;
}
import { assertEquals } from '../testHelper.js';
assertEquals(operation(12, 12), "added")
assertEquals(operation(100, 76), "subtracted")
assertEquals(operation(6, 4), "multiplied")
assertEquals(operation(528, 22), "divided")
assertEquals(operation(10, 12), null)
