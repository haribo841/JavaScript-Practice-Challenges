//Create a function that takes two numbers and a mathematical operator and returns the result.
function calculate(num1, num2, op) {
    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
        case "%": return num1 % num2;
        default: return null;
    }
}
import { assertEquals } from '../testHelper.js';
assertEquals(calculate(24, 100, "-"), -76)
assertEquals(calculate(-20, -30, "+"), -50)
assertEquals(calculate(1500, 5, "/"), 300)
assertEquals(calculate(38, 3, "*"), 114)
assertEquals(calculate(49, 5, "%"), 4)
