//Write a function that takes two numbers and returns if they should be added, subtracted, multiplied or divided to get 24.
//If none of the operations can give 24, return null.
function operation(num1, num2) {
    return num1 + num2 === 24 ? "added" :
        num1 - num2 === 24 ? "subtracted" :
            num1 * num2 === 24 ? "multiplied" :
                num1 / num2 === 24 ? "divided" : null
}
import { assertEquals } from '../testHelper.js';
assertEquals(operation(12, 12), "added")
assertEquals(operation(100, 76), "subtracted")
assertEquals(operation(6, 4), "multiplied")
assertEquals(operation(528, 22), "divided")
assertEquals(operation(10, 12), null)