# Sample Test Cases

This repository contains sample e-commerce test cases aligned with the **UI Explorer Agent** execution on the OpenCart demo store (`https://opencart.abstracta.us/`).

Each Markdown file under `test-cases/` documents the **exact steps that were executed**, including the locators captured in the matching JSON under [`output/`](output/).

## Test Cases

| ID | Title | Priority | Steps executed | Output |
|----|-------|----------|----------------|--------|
| TC001 | User Login | High | Login → assert My Account | [TC001](test-cases/TC001_User_Login.md) · [JSON](output/ui_explorer_TC001.json) |
| TC002 | Add Product To Cart | High | Login → search iPhone → add to cart → open cart | [TC002](test-cases/TC002_Add_Product_To_Cart.md) · [JSON](output/ui_explorer_TC002.json) |
| TC003 | Wishlist Product | Medium | Login → search iPhone → add to wish list → open wish list | [TC003](test-cases/TC003_Wishlist_Product.md) · [JSON](output/ui_explorer_TC003.json) |
| TC004 | Search Product | Medium | Login → search iPhone → assert results | [TC004](test-cases/TC004_Search_Product.md) · [JSON](output/ui_explorer_TC004.json) |

## Application under test

| Field | Value |
|-------|-------|
| Store | OpenCart demo |
| Base URL | `https://opencart.abstracta.us/` |
| Login URL | `https://opencart.abstracta.us/index.php?route=account/login` |
| Demo product | iPhone |

Every case **starts with login**. Credentials are supplied by the agent `.env` (`APP_USERNAME` / `APP_PASSWORD`).

## Purpose

These documents are the human-readable mirror of the agent run:

1. Preconditions and test data for the flow that actually ran.
2. Numbered steps matching `output/ui_explorer_*.json`.
3. Locators discovered for each interactive step (`id`, `role`, `attribute`, etc.).

## How to re-run (UI Explorer Agent)

```bash
cd ../ui-explorer-agent
python main.py --no-llm --push-output
```

That regenerates the JSON under `output/` and can push updates back to this repository.
