# Sample Test Cases

Input test cases for the **UI Explorer Agent**, plus the Phase 2 Playwright suite.

This folder is a **local clone** of https://github.com/Sucharithat05/Sample_test_cases.
The agent reads/writes the filesystem here — it does **not** call the GitHub API on every run.
Local writes stay local until you commit/push (or pass `--push-output` for `output/` only).

## Two-phase contract

| Phase | Where | What |
|-------|-------|------|
| 1 Explore | `../ui-explorer-agent` | Discover locators via Playwright MCP (no suite fill/click) → `output/*.json` |
| 2 Generate | `../ui-explorer-agent --phase generate` | JSON → `generated/*.spec.ts` |
| 2 Run | this folder | `npx playwright test` — parallel, **zero LLM** |

```bash
cd ../ui-explorer-agent
python main.py --phase explore --test-case ..\Sample_test_cases\test-cases\TC001_User_Login.md --no-llm
python main.py --phase generate
python main.py --phase run
# or: python main.py --phase all --no-llm
```

Auth for cart/wishlist: `python ../ui-explorer-agent/scripts/bootstrap_auth.py` writes `.auth/opencart.json` (gitignored) for Phase 1 discovery.
In Phase 2 the `setup` project (`auth.setup.ts`) refreshes that file before every batch, because OpenCart sessions expire long before a
saved exploration is replayed. It logs in with `APP_USERNAME` / `APP_PASSWORD` (read from `../ui-explorer-agent/.env`) and skips when they are unset.

## What belongs where

| Location | Contains | Does **not** contain |
|----------|----------|----------------------|
| `test-cases/*.md` | Intent: title, preconditions, test data, actions, expected results | Locators (`id=…`, CSS, XPath, role=…) |
| `output/*.json` | Locators discovered while the agent explored each case | Hand-written test intent |
| `generated/*.spec.ts` | Frozen Playwright specs from codegen | Live LLM / MCP calls |
| `auth.setup.ts` | Login that refreshes `.auth/<site>.json` before each batch | Test intent or locators |
| `.auth/` | Playwright `storageState` (local only) | Committed secrets |


## Locator strategy policy

Exported locators **never** use `strategy: id`. Preferred order:

`test_id` → `role` → `label` → `placeholder` → `text` → `name` → `attribute` → `css` → `xpath_*`

DOM `id` attributes may still help discovery matching, but chosen/exported locators use the next-best unique strategy.
Credential values in `output/*.json` are redacted (`${APP_USERNAME}` / `${APP_PASSWORD}`). `.auth/` and `.env` are never committed.

## GitHub sync (honest defaults)

| Artifact | Read from | Written to | Auto-pushed? |
|----------|-----------|------------|--------------|
| `test-cases/*.md` | Local clone (originally from GitHub) | — | No |
| `output/*.json` | Local disk | Local `output/` | Only if you pass `--push-output` on explore |
| `generated/*.spec.ts` | — | Local `generated/` | **Never** automatic — commit/push yourself |
| `.auth/` | Local | Local | Gitignored |

```bash
# Optional: after explore, commit+push locator JSON only
python main.py --phase explore --no-llm --push-output

# Specs / Playwright project — manual when you want them on GitHub
cd ..\Sample_test_cases
git add generated package.json package-lock.json playwright.config.ts auth.setup.ts tsconfig.json
git commit -m "Add generated Playwright specs"
git push
```

## Opening `*.spec.ts` on Windows

The specs are valid TypeScript (not empty). Open them in **Cursor / VS Code**.

Windows often registers `.ts` as a **video** type (Windows Media Player). Double-clicking
`TC001.spec.ts` in Explorer opens a blank media player — that is an OS file association,
not a broken file. This repo sets `.vscode/settings.json` so the editor treats `*.ts` as TypeScript.

## Test Cases

| ID | Title | Priority | File |
|----|-------|----------|------|
| TC001 | User Login | High | [TC001](test-cases/TC001_User_Login.md) |
| TC002 | Add Product To Cart | High | [TC002](test-cases/TC002_Add_Product_To_Cart.md) |
| TC003 | Wishlist Product | Medium | [TC003](test-cases/TC003_Wishlist_Product.md) |
| TC004 | Search Product | Medium | [TC004](test-cases/TC004_Search_Product.md) |

Discovered locators: [`output/`](output/). Generated specs: [`generated/`](generated/).

## Playwright project

Run these from **this folder** (`Sample_test_cases`), not from `ui-explorer-agent`:

```bash
cd C:\Users\Sucharitha\Documents\Sample_test_cases
npm install
npx playwright install chromium
npx playwright test
npx playwright show-report
# or: npm run report
```

`playwright.config.ts` runs two projects: `setup` (auth refresh) and `chromium` (`testDir: ./generated`, parallel workers).
`BASE_URL` / `STORAGE_STATE` override the defaults when set. Auth-gated specs opt in with `test.use({ storageState })`;
the login case deliberately does not, so it always starts logged out.
