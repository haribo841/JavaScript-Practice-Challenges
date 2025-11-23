//Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
function greaterThanOne(frac) {
    return eval(frac) > 1;
}
import { assertEquals } from '../testHelper.js';
assertEquals(greaterThanOne("1/2"), false)
assertEquals(greaterThanOne("7/4"), true)
assertEquals(greaterThanOne("10/10"), false)
assertEquals(greaterThanOne("12/30"), false)
assertEquals(greaterThanOne("28/3"), true)
assertEquals(greaterThanOne("35/31"), true)
assertEquals(greaterThanOne("11/27"), false)
assertEquals(greaterThanOne("42/32"), true)
assertEquals(greaterThanOne("34/15"), true)
assertEquals(greaterThanOne("16/16"), false)
assertEquals(greaterThanOne("38/41"), false)
assertEquals(greaterThanOne("45/43"), true)
assertEquals(greaterThanOne("13/38"), false)
assertEquals(greaterThanOne("43/2"), true)
assertEquals(greaterThanOne("16/31"), false)
assertEquals(greaterThanOne("41/15"), true)
assertEquals(greaterThanOne("2/38"), false)
assertEquals(greaterThanOne("37/21"), true)