# TC004 - Search Product

## Test Case ID
TC004

## Title
Search a Product

## Description
Verify that a user can enter a search term in the product search field and receive relevant matching results.

## Preconditions
- Application is accessible and running.
- Search functionality is available on the header or home page.
- Catalog contains products matching the search term.

## Test Data
| Field | Value |
|-------|-------|
| Search Term | wireless headphones |

## Priority
Medium

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Locate the product search input on the application header or home page. | Search field is visible and editable. |
| 2 | Enter the search term "wireless headphones" in the search field. | The search term appears in the input field. |
| 3 | Submit the search (press Enter or click the Search icon/button). | Search results page loads for the submitted term. |
| 4 | Review the list of returned products. | Results related to the search term are displayed (e.g., headphone products). |
| 5 | Confirm result relevance and UI feedback. | Matching products are shown with names/titles containing or related to the search term; if no exact matches exist, an appropriate empty-state or suggestions message is shown. |

## Postconditions
- User remains on the search results page with the applied search term.
- User can clear or refine the search and run a new query.
