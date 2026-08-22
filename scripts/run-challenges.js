import { spawn } from 'node:child_process';
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { clearTimeout, setTimeout } from 'node:timers';
import { fileURLToPath } from 'node:url';

const TIMEOUT_MS = 5000;
const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const challengesDirectory = path.join(repositoryRoot, 'Edabit');

function runChallenge(fileName) {
  return new Promise((resolve) => {
    const filePath = path.join(challengesDirectory, fileName);
    const child = spawn(process.execPath, [filePath], {
      cwd: repositoryRoot,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true
    });

    let stdout = '';
    let stderr = '';
    let timedOut = false;

    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', chunk => { stdout += chunk; });
    child.stderr.on('data', chunk => { stderr += chunk; });

    const timeout = setTimeout(() => {
      timedOut = true;
      child.kill();
    }, TIMEOUT_MS);

    child.on('error', error => {
      clearTimeout(timeout);
      resolve({ fileName, error, stderr, stdout, timedOut });
    });

    child.on('close', code => {
      clearTimeout(timeout);
      resolve({ fileName, code, stderr, stdout, timedOut });
    });
  });
}

function printFailure(result) {
  const reason = result.timedOut
    ? `timed out after ${TIMEOUT_MS} ms`
    : result.error?.message ?? `exited with code ${result.code}`;

  console.error(`\nFAIL ${result.fileName}: ${reason}`);
  if (result.stdout.trim()) console.error(result.stdout.trim());
  if (result.stderr.trim()) console.error(result.stderr.trim());
}

const entries = await readdir(challengesDirectory, { withFileTypes: true });
const challengeFiles = entries
  .filter(entry => entry.isFile() && entry.name.endsWith('.js'))
  .map(entry => entry.name)
  .sort((left, right) => left.localeCompare(right, 'en'));

const failures = [];
for (const fileName of challengeFiles) {
  const result = await runChallenge(fileName);
  if (result.timedOut || result.error || result.code !== 0) failures.push(result);
}

failures.forEach(printFailure);
console.log(`\n${challengeFiles.length - failures.length}/${challengeFiles.length} challenges passed.`);

if (failures.length > 0) process.exitCode = 1;
