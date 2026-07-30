# TC001 - User Login

## Test Case ID
TC001

## Title
User Login with Valid Credentials

## Description
Verify that a registered user can log in with valid email and password and land on the account page.

## Preconditions
- Application is accessible and running.
- A valid registered account exists.
- User is logged out.

## Test Data
| Field | Value |
|-------|-------|
| Username / Email | Valid registered email |
| Password | Matching password for that account |

## Priority
High

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the account login page. | Login page loads with E-Mail Address and Password fields. |
| 2 | Enter a valid email in the E-Mail Address field. | The email value is shown in the field. |
| 3 | Enter a valid password in the Password field. | The password is accepted (masked) in the field. |
| 4 | Click the Login button. | The system authenticates the user. |
| 5 | Verify the post-login account page. | Page shows "My Account" and the account page is displayed. |

## Postconditions
- User session is active on the account page.
- User remains logged in until logout or session expiry.

## Notes
Locators are **not** part of this test case. The UI Explorer Agent discovers them at runtime and writes them to [`output/ui_explorer_TC001.json`](../output/ui_explorer_TC001.json).
