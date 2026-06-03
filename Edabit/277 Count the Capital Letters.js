//Given a string of letters, how many capital letters are there?
function capitalLetters(str) {
    return str.split("").filter(x => x.toUpperCase() === x).length
}
import { assertEquals } from '../testHelper.js';
assertEquals(capitalLetters("hvbHKuFxMORMuBYRsgNF"), 12)
assertEquals(capitalLetters("nrrvrXlmfwjwlbcjwrzt"), 1)
assertEquals(capitalLetters("VdefGMkIeTUipnLhnIfe"), 8)
assertEquals(capitalLetters("ShwvYyeQdGsJYRBhoihI"), 9)
assertEquals(capitalLetters("ykEblUluPthiCMhxQFlz"), 7)
assertEquals(capitalLetters("NCdLUzNdihwUumkqfJqN"), 8)
assertEquals(capitalLetters("sdbMinvzxxulkzyzhfWe"), 2)
assertEquals(capitalLetters("NEcLjmRMJEXwnBkiPpCO"), 12)
assertEquals(capitalLetters("KVFifdDbnuWdkDdmDAkO"), 9)
assertEquals(capitalLetters("pkgUmnquvzIueBlLbtYu"), 5)
assertEquals(capitalLetters("xbbpykGhycjVEvCdaMew"), 5)
assertEquals(capitalLetters("YVgbDlgZDDaGkOymseSP"), 10)
assertEquals(capitalLetters("miuyhtTofqSuoCrgyhtc"), 3)
assertEquals(capitalLetters("YYoNuXdYJhHIPFZZndya"), 12)
assertEquals(capitalLetters("LRuGZepMZYIwQWXJpoTB"), 14)
assertEquals(capitalLetters("gmEosHVTLNEsYOFLCrRR"), 14)
assertEquals(capitalLetters("dPiadMjurjCjrgYbceuK"), 5)
assertEquals(capitalLetters("PQgSxLADOswVPWoDBgCD"), 14)
assertEquals(capitalLetters("odoaxlnmuyixnpthidus"), 0)
assertEquals(capitalLetters("XcqykqdmvtuMynFhnayf"), 3)