//Write a function that validates whether two strings are identical. Make it case insensitive.
function match(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}
import { assertEquals } from '../testHelper.js';
assertEquals(match("hello", "hELLo"), true)
assertEquals(match("hey", "hey"), true)
assertEquals(match("venom", "VENOM"), true)
assertEquals(match("maGIciAN", "magician"), true)
assertEquals(match("stupIFy", "stupifY"), true)

assertEquals(match("bald", "blad"), false)
assertEquals(match("motive", "emotive"), false)
assertEquals(match("mask", "mAskinG"), false)
assertEquals(match("skim", "skimp"), false)
assertEquals(match("EXCEl", "exceLs"), false)