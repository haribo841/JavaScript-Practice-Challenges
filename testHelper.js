import assert from 'node:assert/strict';

export function assertEquals(actual, expected, message) {
  assert.deepStrictEqual(actual, expected, message);
}

export function assertNotEquals(actual, notExpected, message) {
  assert.notStrictEqual(actual, notExpected, message);
}

export function assertThrows(callback, expected, message) {
  assert.throws(callback, expected, message);
}
