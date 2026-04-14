//Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
function spelling(str) {
    return str.split('').map((x, i) => str.slice(0, i + 1))
}
import { assertEquals } from '../testHelper.js';
assertEquals(spelling("bee"), ['b', 'be', 'bee'])
assertEquals(spelling("cake"), ['c', 'ca', 'cak', 'cake'])
assertEquals(spelling("happy"), ['h', 'ha', 'hap', 'happ', 'happy'])
assertEquals(spelling("eagerly"), ['e', 'ea', 'eag', 'eage', 'eager', 'eagerl', 'eagerly'])
assertEquals(spelling("believe"), ['b', 'be', 'bel', 'beli', 'belie', 'believ', 'believe'])