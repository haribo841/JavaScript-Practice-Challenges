//Create a function that takes an array and returns the types of values (data types) in a new array.
function arrayValuesTypes(arr) {
    return arr.map(item => typeof item);
}
import { assertEquals } from '../testHelper.js';
assertEquals(arrayValuesTypes([1, 10]), ['number', 'number']);
assertEquals(arrayValuesTypes([["hello", 1], 10]), ['object', 'number']);
assertEquals(arrayValuesTypes(["shashwat", 10, 90]), ['string', 'number', 'number']);
assertEquals(arrayValuesTypes([[], true]), ['object', 'boolean']);
assertEquals(arrayValuesTypes([false, false, "true"]), ['boolean', 'boolean', "string"]);
assertEquals(arrayValuesTypes([1, 10]), ['number', 'number']);
assertEquals(arrayValuesTypes([undefined, null]), ['undefined', 'object']);
assertEquals(arrayValuesTypes([function () {}, 10]), ['function', 'number']);
