# Sample Test Cases

Input test cases for the **UI Explorer Agent**.

## What belongs where

| Location | Contains | Does **not** contain |
|----------|----------|----------------------|
| `test-cases/*.md` | Intent: title, preconditions, test data, actions, expected results | Locators (`id=…`, CSS, XPath, role=…) |
| `output/*.json` | Locators discovered while the agent ran each case | Hand-written test intent |

The agent reads the Markdown as **what to do**. It explores the live UI and writes locators to `output/`. Putting locators in the Markdown would make rediscovery pointless.

## Test Cases

| ID | Title | Priority | File |
|----|-------|----------|------|
| TC001 | User Login | High | [TC001](test-cases/TC001_User_Login.md) |
| TC002 | Add Product To Cart | High | [TC002](test-cases/TC002_Add_Product_To_Cart.md) |
| TC003 | Wishlist Product | Medium | [TC003](test-cases/TC003_Wishlist_Product.md) |
| TC004 | Search Product | Medium | [TC004](test-cases/TC004_Search_Product.md) |

Discovered locators: [`output/`](output/).

## How the agent uses these

1. Parse Markdown → goal, steps, test data (no locators required).
2. Map generic product names to a real catalog item on the chosen store.
3. Explore the live UI, match each step to a DOM element, generate locators.
4. Write `output/ui_explorer_<ID>.json`.

## How to re-run

```bash
cd ../ui-explorer-agent
python main.py --all
```

Optional: `python main.py --all --push-output` to push updated JSON back to this repository.
