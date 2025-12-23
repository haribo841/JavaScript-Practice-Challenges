/*Create a function that takes a whole number as input and returns the shape with that number's amount of sides.
Here are the expected outputs to get from these inputs.
Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"*/
function nSidedShape(n) {
    const shapes = {
        1: "circle",
        2: "semi-circle",
        3: "triangle",
        4: "square",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon"
    };
}
import { assertEquals } from '../testHelper.js';
assertEquals(nSidedShape(1), "circle")
assertEquals(nSidedShape(2), "semi-circle")
assertEquals(nSidedShape(3), "triangle")
assertEquals(nSidedShape(4), "square")
assertEquals(nSidedShape(5), "pentagon")
assertEquals(nSidedShape(6), "hexagon")
assertEquals(nSidedShape(7), "heptagon")
assertEquals(nSidedShape(8), "octagon")
assertEquals(nSidedShape(9), "nonagon")
assertEquals(nSidedShape(10), "decagon")