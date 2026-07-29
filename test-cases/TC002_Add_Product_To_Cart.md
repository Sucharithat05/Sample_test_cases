# TC002 - Add Product To Cart

## Test Case ID
TC002

## Title
Add Product To Cart

## Description
Verify that a user can log in, search for a product, open the product detail page, add it to the shopping cart, and open the cart page.

## Application
| Field | Value |
|-------|-------|
| Store | OpenCart demo (`opencart.abstracta.us`) |
| Start URL | `https://opencart.abstracta.us/index.php?route=account/login` |
| Output | [`output/ui_explorer_TC002.json`](../output/ui_explorer_TC002.json) |

## Preconditions
- Application is accessible and running.
- A valid registered account exists.
- Catalog contains the product under test (demo catalog uses **iPhone**).

## Test Data
| Field | Value |
|-------|-------|
| Username / Email | APP_USERNAME from `.env` |
| Password | APP_PASSWORD from `.env` |
| Product Name | iPhone |
| Search Term | iPhone |
| Quantity | 1 (store default; not changed by agent) |

## Priority
High

## Test Steps

These steps match the actions executed and locators captured by the UI Explorer Agent.

| Step | Action | Expected Result | Locator (from output) |
|------|--------|-----------------|------------------------|
| 1 | Navigate to the account login page. | Login page is displayed. | URL: `.../index.php?route=account/login` |
| 2 | Enter a valid email in the E-Mail Address field. | Email is shown in the field. | `id=input-email` (unique) |
| 3 | Enter a valid password in the Password field. | Password is accepted (masked). | `id=input-password` (unique) |
| 4 | Click the Login button. | User is authenticated. | `role=button\|name=Login` (unique) |
| 5 | Navigate to the product search page. | Search page loads. | URL: `.../index.php?route=product/search` |
| 6 | Enter the search term "iPhone" in the Keywords / Search Criteria field. | Search term appears in the field. | `id=input-search` (unique) |
| 7 | Click the Search button. | Search results for iPhone are shown. | `id=button-search` (unique) |
| 8 | Click the product link "iPhone". | Product detail page opens. | `role=link\|name=iPhone` |
| 9 | Click the Add to Cart button. | Product is added to the cart. | `id=button-cart` (unique) |
| 10 | Navigate to the shopping cart page. | Cart page opens. | URL: `.../index.php?route=checkout/cart` |
| 11 | Verify the cart page is displayed. | Page contains the text "Shopping Cart". | Assert text: `Shopping Cart` |

## Postconditions
- Product remains in the cart until removed, purchased, or cart is cleared.
- Cart page is reachable while the user session is active.
