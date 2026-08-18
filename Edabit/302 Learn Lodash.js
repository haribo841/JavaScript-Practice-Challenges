/*Write your own version of the lodash _.isEqual function using vanilla JavaScript
(so, no external libraries - namely, lodash; don't import it).
isEqual performs a deep comparison between two values to determine if they are equal.
You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.
This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed,
but regular JavaScript comparison is too strict.
Arguments
value (can be anything): The first value to compare.
other (can be anything): The other value to compare against.
returns: (boolean): Returns true if they are the same, otherwise false.*/
function isEqual_myVersion(a, b) {
    // Te same wartości/referencje
    if (a === b) {
        return true;
    }

    // NaN === NaN według _.isEqual()
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }

    // null lub różne typy
    if (
        a === null ||
        b === null ||
        typeof a !== "object" ||
        typeof b !== "object"
    ) {
        return false;
    }

    // Date
    if (a instanceof Date || b instanceof Date) {
        return (
            a instanceof Date &&
            b instanceof Date &&
            a.getTime() === b.getTime()
        );
    }

    // RegExp
    if (a instanceof RegExp || b instanceof RegExp) {
        return (
            a instanceof RegExp &&
            b instanceof RegExp &&
            a.source === b.source &&
            a.flags === b.flags
        );
    }

    // Typed arrays
    if (ArrayBuffer.isView(a) || ArrayBuffer.isView(b)) {
        if (
            !ArrayBuffer.isView(a) ||
            !ArrayBuffer.isView(b) ||
            a.constructor !== b.constructor ||
            a.length !== b.length
        ) {
            return false;
        }

        return Array.from(a).every(
            (value, index) => value === b[index]
        );
    }

    // Set
    if (a instanceof Set || b instanceof Set) {
        if (
            !(a instanceof Set) ||
            !(b instanceof Set) ||
            a.size !== b.size
        ) {
            return false;
        }

        const valuesB = [...b];

        return [...a].every(valueA => {
            const index = valuesB.findIndex(valueB =>
                isEqual_myVersion(valueA, valueB)
            );

            if (index === -1) {
                return false;
            }

            valuesB.splice(index, 1);
            return true;
        });
    }

    // Arrays
    if (Array.isArray(a) || Array.isArray(b)) {
        if (
            !Array.isArray(a) ||
            !Array.isArray(b) ||
            a.length !== b.length
        ) {
            return false;
        }

        return a.every((value, index) =>
            isEqual_myVersion(value, b[index])
        );
    }

    // Objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    return keysA.every(
        key =>
            Object.prototype.hasOwnProperty.call(b, key) &&
            isEqual_myVersion(a[key], b[key])
    );
}
import { assertEquals } from '../testHelper.js';
//const _ = require("lodash")
import _ from "lodash";
const cars = [
    { make: "mazda", year: 2020, color: "red", isUsed: false },
    { make: "mazda", year: 2020, color: "red", isUsed: false },
    { make: "mazda", year: 2018, color: "blue", isUsed: true },
    { make: "toyota", year: 2018, color: "blue", isUsed: true },
    { make: "toyota", year: 2017, color: "grey", isUsed: true },
    { make: "ford", year: 2017, color: "grey", isUsed: true },
    { make: "for", year: 2020, color: "red", isUsed: false },
];
const carsAsObject = {
    stall1: { make: "mazda", year: 2020, color: "red", isUsed: false },
    stall2: { make: "mazda", year: 2020, color: "red", isUsed: false },
    stall3: { make: "mazda", year: 2018, color: "blue", isUsed: true },
    stall4: { make: "toyota", year: 2018, color: "blue", isUsed: true },
    stall5: { make: "toyota", year: 2017, color: "grey", isUsed: true },
    stall6: { make: "ford", year: 2017, color: "grey", isUsed: true },
    stall7: { make: "for", year: 2020, color: "red", isUsed: false },
};

// Lodash Tests
assertEquals(_.isEqual(cars[0], cars[1]), isEqual_myVersion(cars[0], cars[1]));
assertEquals(_.isEqual(cars[0], cars[2]), isEqual_myVersion(cars[0], cars[2]));
assertEquals(_.isEqual(cars, Object.values(carsAsObject)), isEqual_myVersion(cars, Object.values(carsAsObject)));
assertEquals(
    _.isEqual(carsAsObject.stall1.year, carsAsObject.stall2.year),
    isEqual_myVersion(carsAsObject.stall1.year, carsAsObject.stall2.year)
);