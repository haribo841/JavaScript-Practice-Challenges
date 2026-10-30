/**
 * Run independent challenges with bounded concurrency and stable result order.
 * @template T
 * @param {string[]} fileNames Challenge names in reporting order.
 * @param {(fileName: string) => Promise<T>} runChallenge Executes one challenge.
 * @param {number} concurrency Maximum number of active challenges.
 * @returns {Promise<T[]>} Results in the same order as the input names.
 */
export async function runChallengePool(fileNames, runChallenge, concurrency = 4) {
  if (!Number.isInteger(concurrency) || concurrency < 1) {
    throw new RangeError('Concurrency must be a positive integer.');
  }

  const results = new Array(fileNames.length);
  let nextIndex = 0;

  function runNext() {
    if (nextIndex >= fileNames.length) return Promise.resolve();
    const index = nextIndex;
    nextIndex += 1;

    return runChallenge(fileNames[index]).then(result => {
      results[index] = result;
      return runNext();
    });
  }

  const workerCount = Math.min(concurrency, fileNames.length);
  await Promise.all(Array.from({ length: workerCount }, () => runNext()));
  return results;
}
