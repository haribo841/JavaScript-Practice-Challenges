//What if the array has nested arrays?
//With ES6, you can assign variables from arrays in a much more succinct way.
const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// Fix the following using es6 destructuring
// Only edit what's inside of [ trans1, trans2, trans3, trans4 ]
const [trans1, trans2, [trans3, [trans4]] ] = arr

/*
console.log(trans1) // should output "cars"
console.log(trans2) // should output "planes"
console.log(trans3) // should output "trains"
console.log(trans4) // should output "motorcycles"
*/
import { assertEquals } from '../testHelper.js';
assertEquals(trans1, "cars", 'trans1 does not equal "cars"')
assertEquals(trans2, "planes", 'trans2 does not equal "planes"')
assertEquals(trans3, "trains", 'trans3 does not equal "trains"')
assertEquals(trans4, "motorcycles", 'trans4 does not equal "motorcycles"')
