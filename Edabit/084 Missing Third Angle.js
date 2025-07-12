//You are given 2 out of 3 angles in a triangle, in degrees.
//Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//An acute angle is less than 90 degrees.
//A right angle is exactly 90 degrees.
//An obtuse angle is greater than 90 degrees(but less than 180 degrees).
//For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
function missingAngle(angle1, angle2) {
    return angle1 + angle2 < 90 ? "obtuse" :
        angle1 + angle2 === 90 ? "right" :
            angle1 + angle2 < 180 ? "acute" :
                "invalid"; // This case is added to handle angles that sum to 180 or more.
}
import { assertEquals } from '../testHelper.js';
assertEquals(missingAngle(27, 59), "obtuse")
assertEquals(missingAngle(135, 11), "acute")
assertEquals(missingAngle(45, 45), "right")
assertEquals(missingAngle(45, 15), "obtuse")
assertEquals(missingAngle(31, 100), "acute")
assertEquals(missingAngle(35, 55), "right")