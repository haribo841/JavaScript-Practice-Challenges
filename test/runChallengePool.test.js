import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout } from 'node:timers/promises';
import { runChallengePool } from '../lib/runChallengePool.js';

test('limits concurrent work and preserves input order', async () => {
  const files = ['slow', 'fast', 'third', 'last'];
  const delays = { slow: 20, fast: 1, third: 2, last: 1 };
  let active = 0;
  let maximumActive = 0;
  const completed = [];
  const results = await runChallengePool(files, async fileName => {
    active += 1;
    maximumActive = Math.max(maximumActive, active);
    await setTimeout(delays[fileName]);
    active -= 1;
    completed.push(fileName);
    return fileName.toUpperCase();
  }, 2);

  assert.equal(maximumActive, 2);
  assert.equal(active, 0);
  assert.notEqual(completed[0], 'slow');
  assert.deepEqual(results, ['SLOW', 'FAST', 'THIRD', 'LAST']);
  assert.deepEqual(files, ['slow', 'fast', 'third', 'last']);
});

test('runs sequentially when concurrency is one', async () => {
  const visited = [];
  const results = await runChallengePool(['a', 'b', 'c'], async fileName => {
    visited.push(fileName);
    return fileName;
  }, 1);
  assert.deepEqual(visited, ['a', 'b', 'c']);
  assert.deepEqual(results, visited);
});

test('uses at most four workers by default', async () => {
  let active = 0;
  let maximumActive = 0;
  await runChallengePool(['a', 'b', 'c', 'd', 'e', 'f'], async fileName => {
    active += 1;
    maximumActive = Math.max(maximumActive, active);
    await setTimeout(1);
    active -= 1;
    return fileName;
  });
  assert.equal(maximumActive, 4);
});

test('starts no work for an empty list', async () => {
  let calls = 0;
  const results = await runChallengePool([], async () => { calls += 1; });
  assert.deepEqual(results, []);
  assert.equal(calls, 0);
});

test('does not duplicate work when concurrency exceeds the file count', async () => {
  const visited = [];
  const results = await runChallengePool(['one', 'two'], async fileName => {
    visited.push(fileName);
    return fileName;
  }, 20);
  assert.deepEqual(visited, ['one', 'two']);
  assert.deepEqual(results, ['one', 'two']);
});

test('retains failed process results for the caller to report', async () => {
  const expected = [
    { code: 0, timedOut: false },
    { code: 1, timedOut: false },
    { code: null, timedOut: true }
  ];
  const results = await runChallengePool(['0', '1', '2'], async fileName => expected[Number(fileName)]);
  assert.deepEqual(results, expected);
});

test('rejects if a worker fails unexpectedly', async () => {
  const error = new Error('worker failed');
  await assert.rejects(runChallengePool(['a'], async () => { throw error; }), error);
});

test('rejects invalid concurrency values', async () => {
  const invalidValues = [0, -1, 1.5, NaN, Infinity, '2', null];
  const runUnexpected = async () => assert.fail('Invalid concurrency must be rejected before any work starts.');
  const checks = invalidValues.map(value =>
    assert.rejects(runChallengePool(['unused'], runUnexpected, value), RangeError));
  await Promise.all(checks);
});
