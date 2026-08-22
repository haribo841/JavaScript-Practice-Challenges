//A bartender is writing a simple program to determine whether he should serve drinks to someone.
//He only serves drinks to people 18 and older and when he's not on break.
//Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
function shouldServeDrinks(age, onBreak) {
    return age >= 18 && !onBreak;
}
import * as Test from '../testHelper.js';
Test.assertEquals(shouldServeDrinks(17, true), false)
Test.assertEquals(shouldServeDrinks(30, true), false)
Test.assertEquals(shouldServeDrinks(24, false), true)
Test.assertEquals(shouldServeDrinks(18, false), true)
Test.assertEquals(shouldServeDrinks(3, false), false)