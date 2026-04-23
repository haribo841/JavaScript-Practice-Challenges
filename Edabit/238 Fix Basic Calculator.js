//Mubashir created a function that takes two numbers a and b and an operator o.
//His function should return the result of the corresponding mathematical function on both numbers.
//If the operator is not one of the specified characters +, -, /, *, the function should return -1.
function basicCalculator(a, o, b) {
	var result = null;
	if (o === "+") {
		return a + b;
	} else if (o === "-") {
			return a - b;
		}
		if (o === "/" && b !== 0) {
			return a / b;
		}
		if (o === "*") {
			return a * b;
		}
		return result;
	}
import { assertEquals } from '../testHelper.js';
assertEquals(basicCalculator(2, '+', 4), 6)
assertEquals(basicCalculator(12, '-', 6), 6)
assertEquals(basicCalculator(18, '/', 2), 9)
assertEquals(basicCalculator(6, '*', 4), 24)
assertEquals(basicCalculator(2, '/', 0), null)
assertEquals(basicCalculator(2, 'x', 4), null)
assertEquals(basicCalculator(2, 'o', 4), null)
assertEquals(basicCalculator(12, '-', 2), 10)
assertEquals(basicCalculator(17, '*', 2), 34)