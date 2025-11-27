//Create a function that takes in a current mood and return a sentence in the following format:
//"Today, I am feeling {mood}".
//However, if no argument is passed, return "Today, I am feeling neutral".
function moodToday(mood) {
    return `Today, I am feeling ${mood || "neutral"}`;
}
import { assertEquals } from '../testHelper.js';
assertEquals(moodToday("happy"), "Today, I am feeling happy")
assertEquals(moodToday("sad"), "Today, I am feeling sad")
assertEquals(moodToday("very happy"), "Today, I am feeling very happy")
assertEquals(moodToday("rather empty inside"), "Today, I am feeling rather empty inside")
assertEquals(moodToday("confused"), "Today, I am feeling confused")
assertEquals(moodToday(), "Today, I am feeling neutral")