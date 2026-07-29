# TC004 - Search Product

## Test Case ID
TC004

## Title
Search a Product

## Description
Verify that a user can log in, open the product search page, enter a search term, submit the search, and see matching results.

## Application
| Field | Value |
|-------|-------|
| Store | OpenCart demo (`opencart.abstracta.us`) |
| Start URL | `https://opencart.abstracta.us/index.php?route=account/login` |
| Output | [`output/ui_explorer_TC004.json`](../output/ui_explorer_TC004.json) |

## Preconditions
- Application is accessible and running.
- A valid registered account exists.
- Catalog contains products matching the search term (demo catalog uses **iPhone**).

## Test Data
| Field | Value |
|-------|-------|
| Username / Email | APP_USERNAME from `.env` |
| Password | APP_PASSWORD from `.env` |
| Search Term | iPhone |

## Priority
Medium

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
| 7 | Click the Search button. | Search results page loads for the submitted term. | `id=button-search` (unique) |
| 8 | Verify search results relevance. | Results page contains the text "iPhone". | Assert text: `iPhone` |

## Postconditions
- User remains on the search results page with the applied search term.
- User can clear or refine the search and run a new query.
