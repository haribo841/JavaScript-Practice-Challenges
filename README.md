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
- `npm test` executes every challenge with a per-file timeout.
- `npm run check` runs both checks.

SonarQube Cloud analyzes this public repository automatically after each push to
`master`. Because direct commits are intentionally allowed, its quality gate is a
post-push verification; run `npm run check` before pushing.

Findings caused by an exercise's explicit teaching contract are reviewed and
marked **Accepted** in SonarQube Cloud with a written rationale. Other findings are
fixed in code. Source-level `NOSONAR` suppressions are not used.
