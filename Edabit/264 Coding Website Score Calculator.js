//Create a function that takes the amount of challenges a user has completed for each challenge level,
//and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges,
//so the function should return the string "invalid" if any of the passed parameters are negative.
function scoreCalculator(easy, med, hard) {
    return (easy < 0 || med < 0 || hard < 0) ? "invalid" : (easy * 5 + med * 10 + hard * 20)
}
import { assertEquals } from '../testHelper.js';
assertEquals(scoreCalculator(4, 2, 7), 180, "Test 1")
assertEquals(scoreCalculator(3, 12, 0), 135, "Test 2")
assertEquals(scoreCalculator(5, -5, 2), "invalid", "Test 3")
assertEquals(scoreCalculator(20, 7, 3), 230)
assertEquals(scoreCalculator(0, 0, 0), 0)
assertEquals(scoreCalculator(1, 2, 3), 85)