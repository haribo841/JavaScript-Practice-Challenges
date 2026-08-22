//Create a function that evaluates an equation.
import { evaluateArithmeticExpression } from '../lib/evaluateArithmeticExpression.js';
import { assertEquals, assertThrows } from '../testHelper.js';

function eq(evaluate) {
    return evaluateArithmeticExpression(evaluate);
}
assertEquals(eq("1+2"), 3)
assertEquals(eq("6/(9-7)"), 3)
assertEquals(eq("3+2-4"), 1)
assertEquals(eq("3*4+1"), 13)
assertEquals(eq("5*8-4*9"), 4)
assertEquals(eq("3**7"), 2187)
assertEquals(eq("(6**3)+3"), 219)
assertThrows(() => eq("globalThis.process"), SyntaxError)
assertThrows(() => eq("constructor.constructor('return process')()"), SyntaxError)
