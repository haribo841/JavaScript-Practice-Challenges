//Write a function that checks whether a person can watch an MA15 + rated movie.
//One of the following two conditions is required for admittance:
//The person is at least 15 years old.
//They have parental supervision.
//The function accepts two parameters, age and isSupervised.
//Return a boolean.
function acceptIntoMovie(age, isSupervised) {
    return age >= 15 || isSupervised;
}
import { assertEquals } from '../testHelper.js';
assertEquals(acceptIntoMovie(14, true), true)
assertEquals(acceptIntoMovie(15, true), true)
assertEquals(acceptIntoMovie(16, true), true)
assertEquals(acceptIntoMovie(14, false), false)
assertEquals(acceptIntoMovie(15, false), true)
assertEquals(acceptIntoMovie(16, false), true)
assertEquals(acceptIntoMovie(14.99999, true), true)
assertEquals(acceptIntoMovie(14.99999, false), false)