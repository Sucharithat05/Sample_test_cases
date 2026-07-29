# TC003 - Wishlist Product

## Test Case ID
TC003

## Title
Wishlist a Product

## Description
Verify that a logged-in user can find a product and add it to the wishlist, then confirm that the product appears in the wishlist.

## Preconditions
- Application is accessible and running.
- User is logged in successfully.
- Wishlist feature is enabled for the account.
- At least one product is available to wishlist.

## Test Data
| Field | Value |
|-------|-------|
| Product Name | Sample Running Shoes |

## Priority
Medium

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the product catalog or use browse/search to find products. | Product listing is displayed. |
| 2 | Locate and open the product "Sample Running Shoes" (or an available equivalent). | Product detail page is displayed. |
| 3 | Click the Add to Wishlist / Heart / Save icon. | Success confirmation indicates the product was added to the wishlist. |
| 4 | Navigate to the Wishlist page from the account menu or wishlist icon. | Wishlist page opens. |
| 5 | Verify the wishlist contents. | The selected product appears in the wishlist with correct name and product details. |

## Postconditions
- Product remains in the wishlist until removed by the user.
- Wishlist count (if shown) is updated accordingly.
