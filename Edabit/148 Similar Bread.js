//Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread.
//The bread will always be found at the start and end of the array.
function hasSameBread(arr1, arr2) {
    return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1];
}
import { assertEquals } from '../testHelper.js';
assertEquals(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
), true)

assertEquals(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
), false)

assertEquals(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
), false)

assertEquals(hasSameBread(
    ["white bread", "lettuce", "toast"],
    ["white bread", "tomato", "toast"]
), true)

assertEquals(hasSameBread(
    ["white bread", "lettuce", "toast"],
    ["brown bread", "tomato", "toast"]
), false)

assertEquals(hasSameBread(
    ["white bread", "lettuce", "brown bread"],
    ["brown bread", "tomato", "white bread"]
), false)

assertEquals(hasSameBread(
    ["white bread", "lettuce", "brown bread"],
    ["white bread", "tomato", "white bread"]
), false)
