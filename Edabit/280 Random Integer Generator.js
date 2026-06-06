//The challenge is simple. Return a random integer N such that a <= N <= b.
function randomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
import { assertEquals, assertNotEquals } from '../testHelper.js';
const range = (start, stop, step = 1) =>
    Array(Math.ceil((stop - start) / step))
        .fill(start)
        .map((x, y) => x + y * step);

assertEquals(Number.isInteger(randomInt(1, 5)), true, 'Return value must be an integer')
assertEquals(range(1, 4).includes(randomInt(1, 3)), true, 'Your function should return a value N such that a <= N <= b')
assertEquals(range(3, 6).includes(randomInt(3, 5)), true, 'Your function should return a value N such that a <= N <= b')
assertEquals(range(1, 11).includes(randomInt(1, 10)), true, 'Your function should return a value N such that a <= N <= b')
assertEquals(range(20, 31).includes(randomInt(20, 30)), true, 'Your function should return a value N such that a <= N <= b')
assertEquals(range(50, 101).includes(randomInt(50, 100)), true, 'Your function should return a value N such that a <= N <= b')
assertEquals(randomInt(5, 5), 5, 'Your function should return a value N such that a <= N <= b')
assertNotEquals(randomInt(1, 100000), randomInt(1, 100000), 'Your function doesn\'t seem to generate random integers or you\'re the unluckiest person alive.')