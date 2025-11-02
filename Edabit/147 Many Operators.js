//Some basic arithmetic operators are +, -, *, /, and %.
//In this challenge you will be given three parameters, num1, num2, and an operator.Use the operator on number 1 and 2.
function operate(num1, num2, operator) {
    return eval(`${num1} ${operator} ${num2}`);
}
import { assertEquals } from '../testHelper.js';
assertEquals(operate(1, 1, "+"), 2)
assertEquals(operate(1, 1, "-"), 0)
assertEquals(operate(1, 1, "*"), 1)
assertEquals(operate(1, 1, "/"), 1)
assertEquals(operate(1, 1, "%"), 0)
assertEquals(operate(2, 1, "+"), 3)
assertEquals(operate(2, 1, "-"), 1)
assertEquals(operate(2, 1, "*"), 2)
assertEquals(operate(2, 1, "/"), 2)
assertEquals(operate(2, 1, "%"), 0)