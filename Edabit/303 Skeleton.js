/*Write a class called Point that represents a point in two-dimensional.
It should have the following constructor:
constructor(x, y)
It should have the following properties:
x
y
It should have the following methods:
toString()
Returns a string representation of this point, as [x=1, y=2].*/
// Point class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `[x=${this.x}, y=${this.y}]`;
    }
}
import { assertEquals } from '../testHelper.js';
const point = new Point(1, 2);

assertEquals(point.x, 1);
assertEquals(point.y, 2);
assertEquals(point.toString(), "[x=1, y=2]");
assertEquals(new Point(0, 0).toString(), "[x=0, y=0]");
assertEquals(new Point(-3, 4).toString(), "[x=-3, y=4]");
assertEquals(new Point(1.5, 2.5).toString(), "[x=1.5, y=2.5]");