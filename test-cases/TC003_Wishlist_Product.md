# TC003 - Wishlist Product

## Test Case ID
TC003

## Title
Wishlist a Product

## Description
Verify that a logged-in user can add a product to the wish list and open the wish list page to confirm it.

## Preconditions
- Application is accessible and running.
- User is logged in successfully.
- Wish List feature is available for the account.
- At least one product is available in the catalog.

## Test Data
| Field | Value |
|-------|-------|
| Product Name | Sample Wireless Headphones |

## Priority
Medium

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | From the home page, navigate to the product catalog or search for a product. | Product listing or search results are displayed. |
| 2 | Select the product "Sample Wireless Headphones" (or an available equivalent). | Product detail page opens. |
| 3 | Click the Add to Wish List control. | Product is added to the wish list (confirmation or updated wish-list count). |
| 4 | Open the Wish List page. | Wish List page opens. |
| 5 | Verify the wish list contents. | The selected product appears in the wish list. |

## Postconditions
- Product remains in the wish list until removed by the user.
- Wish List page is reachable while the user session is active.

## Notes
Locators are **not** part of this test case. The UI Explorer Agent discovers them at runtime and writes them to [`output/ui_explorer_TC003.json`](../output/ui_explorer_TC003.json).
