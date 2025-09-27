//Create a function that evaluates an equation.
function eq(evaluate) {
    return eval(evaluate);
}
import { assertEquals } from '../testHelper.js';
assertEquals(eq("1+2"), 3)
assertEquals(eq("6/(9-7)"), 3)
assertEquals(eq("3+2-4"), 1)
assertEquals(eq("3*4+1"), 13)
assertEquals(eq("5*8-4*9"), 4)
assertEquals(eq("3**7"), 2187)
assertEquals(eq("(6**3)+3"), 219)