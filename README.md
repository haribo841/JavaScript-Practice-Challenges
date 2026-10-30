# JavaScript Practice Challenges

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=haribo841_JavaScript-Practice-Challenges&metric=alert_status)](https://sonarcloud.io/dashboard?id=haribo841_JavaScript-Practice-Challenges)

Solutions to JavaScript challenges from Edabit. Every challenge contains its own
assertions and is executed in a separate Node.js process so that declarations from
one exercise cannot affect another.

## Local quality checks

```sh
npm ci
npm run check
```

- `npm run lint` checks every JavaScript file with ESLint.
- `npm test` checks the runner's worker pool, then executes every challenge with a
  per-file timeout and at most four challenge processes at once. Reporting stays
  in filename order.
- `npm run check` runs both checks.

SonarQube Cloud analyzes this public repository automatically after each push to
`master`. Because direct commits are intentionally allowed, its quality gate is a
post-push verification; run `npm run check` before pushing.

When an exercise explicitly requires mixed return types, its JSDoc declares that
union instead of changing the expected outputs. Source-level `NOSONAR`
suppressions and disabled rules are not used for these fixes. Exercise 304 now
rejects with an `Error`, retaining the original message and adding a stack trace;
its source and wiki explicitly describe this modernization of the original
string-rejection exercise.
