//Create a function to calculate the determinant of a 2 * 2 matrix.
//The determinant of the following matrix is: ad - bc:
//[[a, b], [c, d]]
function calcDeterminant(matrix) {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}
import { assertEquals } from '../testHelper.js';
assertEquals(calcDeterminant([
	[1, 2],
	[3, 4]
]), -2)

assertEquals(calcDeterminant([
	[5, 3],
	[3, 1]
]), -4)

assertEquals(calcDeterminant([
	[1, 1],
	[1, 1]
]), 0)
assertEquals(calcDeterminant([
	[1, 1],
	[1, 0]
]), -1)