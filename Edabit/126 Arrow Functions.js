/*Your goal is to submit a function as minimalist as possible.
Use the tips in the tips section below.
Write five adder functions:
add2(x) should return 2 + x.
add3(x) should return 3 + x.
add5(x) should return 5 + x.
add7(x) should return 7 + x.
add11(x) should return 11 + x.*/
const [add2, add3, add5, add7, add11] = [2, 3, 5, 7, 11].map(n => x => x + n);
import { assertEquals } from '../testHelper.js';
assertEquals(add2(1), 3)
assertEquals(add2(9), 11)
assertEquals(add2(435), 437)

assertEquals(add3(1), 4)
assertEquals(add3(9), 12)
assertEquals(add3(435), 438)

assertEquals(add5(1), 6)
assertEquals(add5(9), 14)
assertEquals(add5(435), 440)

assertEquals(add7(1), 8)
assertEquals(add7(9), 16)
assertEquals(add7(435), 442)

assertEquals(add11(1), 12)
assertEquals(add11(9), 20)
assertEquals(add11(435), 446)