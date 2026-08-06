# Sample Test Cases

Input test cases for the **UI Explorer Agent**, plus the Phase 2 Playwright suite.

This folder is a **local clone** of https://github.com/Sucharithat05/Sample_test_cases.
The agent reads/writes the filesystem here — it does **not** call the GitHub API on every run.
Local writes stay local until you commit/push (or pass `--push-output`).

## Two-phase contract

| Phase | Where | What |
|-------|-------|------|
| 1 Explore | `../ui-explorer-agent` | Discover locators → `output/*.json` |
| 2 Generate | `../ui-explorer-agent --phase generate` | JSON → `generated/*.spec.ts` |
| 2 Run | this folder | `npx playwright test` — parallel, **zero LLM** |

```bash
cd ../ui-explorer-agent
python main.py --phase explore --site westfield --no-llm --backend playwright
python main.py --phase generate --push-output
python main.py --phase run
```

## What belongs where

| Location | Contains |
|----------|----------|
| `test-cases/*.md` | Intent: title, preconditions, test data, actions, expected results |
| `output/*.json` | Locators discovered while the agent explored each case |
| `generated/*.spec.ts` | Frozen Playwright specs from codegen |

## GitHub sync

`--push-output` commits and pushes **`test-cases/`**, **`output/`**, and **`generated/`** together:

```bash
# Explore + push locator JSON (+ MD if changed)
python main.py --phase explore --site westfield --no-llm --backend playwright --push-output

# Generate specs + push them to GitHub
python main.py --phase generate --push-output

# Or both
python main.py --phase all --site westfield --no-llm --backend playwright --push-output
```

## Test Cases (Westfield only)

| ID | Title | Priority | File |
|----|-------|----------|------|
| TC005 | Create New Policy | High | [TC005](test-cases/TC005_Create_New_Policy.md) |
| TC006 | Edit Policy POL-001 | High | [TC006](test-cases/TC006_Edit_Policy.md) |

```env
# in ../ui-explorer-agent/.env
APP_SITE=westfield
APP_BASE_URL=http://localhost:3000
```

Start the local app first (`policy-app` on port 3000), then explore / generate / run.

## Playwright project

```bash
cd C:\Users\Sucharitha\Documents\Sample_test_cases
npm install
npx playwright install chromium
npx playwright test
npx playwright show-report
```

`BASE_URL` / `APP_BASE_URL` defaults to `http://localhost:3000`. Auth setup is skipped for Westfield (no login).
