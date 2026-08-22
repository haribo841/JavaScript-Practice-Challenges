//Create a function that takes the number of wins,
//draws and losses and calculates the number of points a football team has obtained so far.
function footballPoints(wins, draws, losses) {
    return wins * 3 + draws;
}
import * as Test from '../testHelper.js';
Test.assertEquals(footballPoints(1, 2, 3), 5)
Test.assertEquals(footballPoints(5, 5, 5), 20)
Test.assertEquals(footballPoints(1, 0, 0), 3)
Test.assertEquals(footballPoints(0, 7, 0), 7)
Test.assertEquals(footballPoints(0, 0, 15), 0)