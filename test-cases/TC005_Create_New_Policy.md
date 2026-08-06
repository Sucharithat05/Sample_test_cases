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
- Westfield / Policy application is accessible (`APP_BASE_URL` in ui-explorer-agent `.env`).
- User can open the New Policy form.
- No locator values are authored here; the UI Explorer Agent discovers them.

## Test Data
| Field | Value |
|-------|-------|
| Business Name | Acme Insurance Co |
| Premium | 1250.00 |
| Status | Active |
| Policy Holder | Jordan Lee |
| Effective Date | 2026-01-15 |

## Priority
High

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the New Policy form. | Create form loads with business, premium, status, and related fields. |
| 2 | Fill all required and optional fields from scenario data. | Field values are accepted (business name, premium, status, holder, effective date). |
| 3 | Submit the form. | Form posts successfully and redirects to the policy detail page. |
| 4 | Verify the detail page shows raw fields and ViewModel currency formatting. | Detail shows business name and premium formatted (e.g. $1,250.00). |
| 5 | Navigate to the policy list and confirm the new policy row appears. | List contains a row with the new business name. |

## Postconditions
- A new policy exists and is visible on the list page.
- Detail page reflects submitted values with ViewModel formatting.

## Notes
- Site profile: **westfield** (`APP_SITE=westfield`).
- Confidential base URL belongs only in `ui-explorer-agent/.env` as `APP_BASE_URL` — never in this Markdown.
- Locators are discovered at runtime into [`output/ui_explorer_TC005.json`](../output/ui_explorer_TC005.json).
