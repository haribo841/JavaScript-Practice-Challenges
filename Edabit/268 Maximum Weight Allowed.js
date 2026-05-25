//Create a function that returns true if the combined weight of a car car and
//the weight of the passengers p in the car is less than the maximum weight maxWeight the car is allowed to carry.
//Otherwise, return false.
//The weight of the car and the weight of the passengers are given in pounds.
//The maximum weight is given in kilograms.
function weightAllowed(car, p, maxWeight) {
    return car + p.reduce((a, b) => a + b, 0) < maxWeight * 2.20462;
}
import { assertEquals } from '../testHelper.js';
assertEquals(weightAllowed(3000, [150, 201, 75, 88, 195], 1700), true);
assertEquals(weightAllowed(3200, [220, 101, 115, 228, 15], 1700), false);
assertEquals(weightAllowed(2900, [225, 171, 300, 274, 191], 1850), true);
assertEquals(weightAllowed(3550, [180, 201, 140, 99, 204], 1980), false);
assertEquals(weightAllowed(4500, [157, 154, 75, 88, 190], 2400), true);
assertEquals(weightAllowed(4000, [150, 200, 79, 80, 159], 2000), false);