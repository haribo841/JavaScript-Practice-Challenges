//Write a function that returns true if both numbers are:
//Smaller than 0, OR ...
//Greater than 0, OR ...
//Exactly 0
//Otherwise, return false.
function both(n1, n2) {
	return (n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0) || (n1 === 0 && n2 === 0);
}
import { assertEquals } from '../testHelper.js';
[
	[6, 2, true],
	[-6, -9, true],
	[6, -2, false],
	[0, 0, true],
	[100, 1, true],
	[-0, 0, true],
	[-80, -5000, true],
	[6.28, -999, false],
	[-1, 2, false],
	[0, 2, false]
].forEach(x => assertEquals(both(x[0], x[1]), x[2]))