import assert from 'node:assert/strict';
import { inspect } from 'node:util';

function runTest(assertion, successMessage) {
    try {
        assertion();
        console.log(`Test Passed: ${successMessage}`);
    } catch (error) {
        console.error(`Test Failed: ${error.message}`);
        throw error; // keeps the correct non-zero exit code
    }
}

export function assertEquals(actual, expected, message) {
    runTest(
        () => assert.deepStrictEqual(actual, expected, message),
        `Value == ${inspect(actual)}`
    );
}

export function assertNotEquals(actual, notExpected, message) {
    runTest(
        () => assert.notStrictEqual(actual, notExpected, message),
        `Value != ${inspect(notExpected)}`
    );
}

export function assertThrows(callback, expected, message) {
    runTest(
        () => assert.throws(callback, expected, message),
        'Function threw the expected error'
    );
}