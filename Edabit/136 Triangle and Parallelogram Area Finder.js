//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
function areaShape(base, height, shape) {
    return shape === "triangle" ? +(base * height / 2).toFixed(3) : +(base * height).toFixed(3);
}
import { assertEquals } from '../testHelper.js';
assertEquals(areaShape(2, 3, "triangle"), 3)
assertEquals(areaShape(8, 6, "parallelogram"), 48)
assertEquals(areaShape(0, 1, "triangle"), 0)
assertEquals(areaShape(2.9, 1.3, "parallelogram"), 3.77)
assertEquals(areaShape(0.01, 5, "triangle"), 0.025)