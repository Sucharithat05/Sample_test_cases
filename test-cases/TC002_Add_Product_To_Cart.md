# TC002 - Add Product To Cart

## Test Case ID
TC002

## Title
Add Product To Cart

## Description
Verify that a logged-in user can navigate to a product, add it to the shopping cart, and confirm that the cart reflects the selected product.

## Preconditions
- Application is accessible and running.
- User is logged in successfully.
- At least one product is available for purchase and in stock.

## Test Data
| Field | Value |
|-------|-------|
| Product Name | Sample Wireless Headphones |
| Quantity | 1 |

## Priority
High

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | From the home page, navigate to the product catalog or category listing. | Product listing page is displayed with available products. |
| 2 | Select the product "Sample Wireless Headphones" (or an available equivalent). | Product detail page opens showing name, price, and Add to Cart option. |
| 3 | Set quantity to 1 (if quantity selector is available). | Quantity field shows 1. |
| 4 | Click the Add to Cart button. | Success confirmation is shown (toast/banner/message) indicating the product was added. |
| 5 | Open the shopping cart (cart icon or Cart page). | Cart page/drawer opens. |
| 6 | Verify the cart contents. | The selected product appears in the cart with correct name, quantity (1), and price. |

## Postconditions
- Product remains in the cart until removed, purchased, or cart is cleared.
- Cart item count reflects the added product.
