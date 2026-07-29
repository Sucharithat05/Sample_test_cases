# Sample Test Cases

This repository contains sample manual test cases for an e-commerce style application. The cases cover common user flows such as login, cart, wishlist, and product search.

## Test Cases

| ID | Title | Priority | File |
|----|-------|----------|------|
| TC001 | User Login | High | [TC001_User_Login.md](test-cases/TC001_User_Login.md) |
| TC002 | Add Product To Cart | High | [TC002_Add_Product_To_Cart.md](test-cases/TC002_Add_Product_To_Cart.md) |
| TC003 | Wishlist Product | Medium | [TC003_Wishlist_Product.md](test-cases/TC003_Wishlist_Product.md) |
| TC004 | Search Product | Medium | [TC004_Search_Product.md](test-cases/TC004_Search_Product.md) |

## Purpose

These documents provide a clear, reusable structure for writing and reviewing manual test cases. Each file includes preconditions, test data, numbered steps with expected results, and postconditions so QA teams can execute and track coverage consistently.

## UI Explorer Agent

The companion UI Explorer Agent uses the Markdown files under `test-cases/` as inputs. When a case has no application URL, it defaults to **Amazon** (`https://www.amazon.in/`) or **Flipkart** (`https://www.flipkart.com/`).

Locator JSON produced by the agent is stored under [`output/`](output/).

```bash
# From ui-explorer-agent
python main.py --all
python main.py --test-case ../Sample_test_cases/test-cases/TC004_Search_Product.md --site amazon
python main.py --all --site flipkart --push-output
```

## How to Use (manual QA)

1. Open the relevant test case under `test-cases/`.
2. Confirm preconditions and prepare the listed test data.
3. Execute each step and compare the actual result with the expected result.
4. Record pass/fail status and any defects found.
