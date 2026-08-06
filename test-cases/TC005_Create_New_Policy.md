# TC005 - Create New Policy

## Test Case ID
TC005

## Title
Create New Policy and Verify Detail + List

## Description
Flow:
1. Navigate to New Policy form
2. Fill all required and optional fields from scenario data
3. Submit the form
4. Verify redirect to detail page — raw fields + ViewModel currency formatting
5. Navigate to list and confirm policy row appears

## Preconditions
- Westfield Policy app is running (`APP_BASE_URL` in ui-explorer-agent `.env`, default `http://localhost:3000`).
- User can open `/policy/new`.
- No locator values are authored here; the UI Explorer Agent discovers them.

## Test Data
| Field | Value |
|-------|-------|
| Business Name | Green Valley Bakery LLC |
| Business Type | Food & Beverage |
| Owner Name | Sarah Mitchell |
| Email | sarah@greenvalleybakery.example |
| Phone | (614) 555-0110 |
| Address | 42 Baker Street, Columbus, OH 43215 |
| Policy Type | General Liability |
| Status | Active |
| Coverage Amount | 1000000 |
| Premium | 2750 |
| Deductible | 500 |
| Agent | James Kowalski |
| Effective Date | 2026-08-06 |
| Notes | Created by UI Explorer TC005 |

## Priority
High

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the New Policy form. | Create form loads (`data-testid=policy-form`) with business and coverage fields. |
| 2 | Fill all required and optional fields from scenario data. | Field values are accepted (business, owner, contact, policy type, amounts, agent, dates). |
| 3 | Submit the form (Save Policy). | Form posts successfully and redirects to `/policy/POL-…`. |
| 4 | Verify the detail page shows raw fields and ViewModel currency formatting. | Detail shows business name and premium (e.g. `$2,750.00`). |
| 5 | Navigate to the policy list and confirm the new policy row appears. | List contains a row with the new business name. |

## Postconditions
- A new policy exists and is visible on the list page.
- Detail page reflects submitted values with ViewModel formatting.

## Notes
- Site profile: **westfield** (`APP_SITE=westfield`).
- Base URL belongs only in `ui-explorer-agent/.env` as `APP_BASE_URL` — never in this Markdown.
- Locators are discovered at runtime into [`output/ui_explorer_TC005.json`](../output/ui_explorer_TC005.json).
- Do **not** hand-author `.spec.ts` here; generate via `python main.py --phase generate` after explore.
