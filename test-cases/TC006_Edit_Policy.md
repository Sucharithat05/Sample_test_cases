# TC006 - Edit Seeded Policy

## Test Case ID
TC006

## Title
Edit Policy POL-001 and Restore for Isolation

## Description
Flow:
1. Open the edit form for the seeded policy (POL-001)
2. Verify form is pre-populated with existing values
3. Update businessName, premium, and status
4. Submit the form
5. Verify detail page shows updated values with ViewModel formatting
6. Verify updated name appears in the list row
7. Restore original businessName for test isolation

## Preconditions
- Westfield / Policy application is accessible (`APP_BASE_URL` in ui-explorer-agent `.env`).
- Seeded policy **POL-001** exists with known original values.
- Edit deep-link path can be overridden via `WESTFIELD_EDIT_POLICY_PATH` in `.env`.

## Test Data
| Field | Value |
|-------|-------|
| Seeded Policy | POL-001 |
| Original Business Name | Seeded Policy Holder LLC |
| Original Premium | 999.00 |
| Original Status | Active |
| Updated Business Name | Updated Acme Holdings |
| Updated Premium | 1500.50 |
| Updated Status | Pending |

## Priority
High

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open the edit form for seeded policy POL-001. | Edit form loads for POL-001. |
| 2 | Verify the form is pre-populated with existing values. | Business name / premium / status match the seeded originals. |
| 3 | Update businessName, premium, and status. | Updated values are shown in the form fields. |
| 4 | Submit the form. | Changes save and the detail page opens. |
| 5 | Verify the detail page shows updated values with ViewModel formatting. | Detail shows updated business name and premium (e.g. $1,500.50). |
| 6 | Verify the updated name appears in the list row. | Policy list row shows the updated business name. |
| 7 | Restore original businessName (and related fields) for test isolation. | POL-001 is restored to the original seeded values. |

## Postconditions
- Temporary edits are verified, then rolled back so later runs stay isolated.
- POL-001 remains in its seeded baseline state.

## Notes
- Site profile: **westfield** (`APP_SITE=westfield`).
- Confidential base URL belongs only in `ui-explorer-agent/.env` as `APP_BASE_URL` — never in this Markdown.
- Locators are discovered at runtime into [`output/ui_explorer_TC006.json`](../output/ui_explorer_TC006.json).
