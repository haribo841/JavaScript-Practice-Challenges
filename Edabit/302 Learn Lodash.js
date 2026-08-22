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
function areDatesEqual(a, b) {
    return a instanceof Date && b instanceof Date && a.getTime() === b.getTime();
}

function areRegularExpressionsEqual(a, b) {
    return a instanceof RegExp && b instanceof RegExp && a.source === b.source && a.flags === b.flags;
}

function areTypedArraysEqual(a, b) {
    if (!ArrayBuffer.isView(a) || !ArrayBuffer.isView(b)) return false;
    if (a.constructor !== b.constructor || a.length !== b.length) return false;
    return Array.from(a).every((value, index) => value === b[index]);
}

function areSetsEqual(a, b) {
    if (!(a instanceof Set) || !(b instanceof Set) || a.size !== b.size) return false;

    const unmatchedValues = [...b];
    for (const valueA of a) {
        const matchingIndex = unmatchedValues.findIndex(valueB => isEqual_myVersion(valueA, valueB));
        if (matchingIndex === -1) return false;
        unmatchedValues.splice(matchingIndex, 1);
    }
    return true;
}

function areArraysEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    return a.every((value, index) => isEqual_myVersion(value, b[index]));
}

function areObjectsEqual(a, b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    return keysA.every(key => Object.hasOwn(b, key) && isEqual_myVersion(a[key], b[key]));
}

function isEqual_myVersion(a, b) {
    if (a === b) return true;
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
    if (a === null || b === null || typeof a !== "object" || typeof b !== "object") return false;
    if (a instanceof Date || b instanceof Date) return areDatesEqual(a, b);
    if (a instanceof RegExp || b instanceof RegExp) return areRegularExpressionsEqual(a, b);
    if (ArrayBuffer.isView(a) || ArrayBuffer.isView(b)) return areTypedArraysEqual(a, b);
    if (a instanceof Set || b instanceof Set) return areSetsEqual(a, b);
    if (Array.isArray(a) || Array.isArray(b)) return areArraysEqual(a, b);
    return areObjectsEqual(a, b);
}

import { assertEquals } from '../testHelper.js';
const cars = [
    { make: "mazda", year: 2020, color: "red", isUsed: false },
    { make: "mazda", year: 2020, color: "red", isUsed: false },
    { make: "mazda", year: 2018, color: "blue", isUsed: true }
];
const carsAsObject = {
    stall1: { make: "mazda", year: 2020, color: "red", isUsed: false },
    stall2: { make: "mazda", year: 2020, color: "red", isUsed: false },
    stall3: { make: "mazda", year: 2018, color: "blue", isUsed: true }
};

assertEquals(isEqual_myVersion(cars[0], cars[1]), true)
assertEquals(isEqual_myVersion(cars[0], cars[2]), false)
assertEquals(isEqual_myVersion(cars, Object.values(carsAsObject)), true)
assertEquals(isEqual_myVersion(Number.NaN, Number.NaN), true)
assertEquals(isEqual_myVersion(new Date("2026-01-01"), new Date("2026-01-01")), true)
assertEquals(isEqual_myVersion(/edabit/gi, /edabit/gi), true)
assertEquals(isEqual_myVersion(new Uint8Array([1, 2]), new Uint8Array([1, 2])), true)
assertEquals(isEqual_myVersion(new Set([1, { value: 2 }]), new Set([{ value: 2 }, 1])), true)
