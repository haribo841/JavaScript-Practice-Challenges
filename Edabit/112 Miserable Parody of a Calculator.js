//Create a function that will handle simple math expressions.
//The input is an expression in the form of a string.
function calculator(str) {
    return Function(`return ${str}`)();
}
import { assertEquals } from '../testHelper.js';
assertEquals(calculator("23+4"), 27)
assertEquals(calculator("45-15"), 30)
assertEquals(calculator("13+2-5*2"), 5)
assertEquals(calculator("49/7*2-3"), 11)
assertEquals(calculator("2+2*2"), 6)
assertEquals(calculator("5/2"), 2.5)
assertEquals(calculator("-34/4"), -8.5)
assertEquals(calculator("0+43-0+56*0"), 43)
assertEquals(calculator("-14*2-37-0"), -65)
assertEquals(calculator("0*0"), 0)
assertEquals(calculator("4+2+3-5*2-8/4-12-0+3-14"), -26)
assertEquals(calculator("9/2+9/4"), 6.75)
assertEquals(calculator("56*27*18*12/2*0"), 0)
assertEquals(calculator("34/4*0*45*7"), 0)