# TC004 - Search Product

## Test Case ID
TC004

## Title
Search a Product

## Description
Verify that a user can search for a product and see matching results.

## Preconditions
- Application is accessible and running.
- Catalog contains products matching the search term.

## Test Data
| Field | Value |
|-------|-------|
| Search Term | Sample Wireless Headphones |

## Priority
Medium

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the home page or search page. | Search field is available. |
| 2 | Enter the search term in the search field. | Search term appears in the field. |
| 3 | Submit the search (Search button or Enter). | Search results page loads. |
| 4 | Verify search results relevance. | Results include products matching the search term (or a clear no-results message). |

## Postconditions
- User remains on the search results page with the applied search term.
- User can clear or refine the search and run a new query.

## Notes
Locators are **not** part of this test case. The UI Explorer Agent discovers them at runtime and writes them to [`output/ui_explorer_TC004.json`](../output/ui_explorer_TC004.json).
