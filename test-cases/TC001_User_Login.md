# TC001 - User Login

## Test Case ID
TC001

## Title
User Login with Valid Credentials

## Description
Verify that a registered user can log in to the OpenCart demo store with valid email and password, then land on the account page.

## Application
| Field | Value |
|-------|-------|
| Store | OpenCart demo (`opencart.abstracta.us`) |
| Start URL | `https://opencart.abstracta.us/index.php?route=account/login` |
| Output | [`output/ui_explorer_TC001.json`](../output/ui_explorer_TC001.json) |

## Preconditions
- Application is accessible and running.
- A valid registered account exists (credentials from agent `.env`: `APP_USERNAME` / `APP_PASSWORD`).
- User is logged out.

## Test Data
| Field | Value |
|-------|-------|
| Username / Email | APP_USERNAME from `.env` |
| Password | APP_PASSWORD from `.env` |

## Priority
High

## Test Steps

These steps match the actions executed and locators captured by the UI Explorer Agent.

| Step | Action | Expected Result | Locator (from output) |
|------|--------|-----------------|------------------------|
| 1 | Navigate to the account login page. | Login page loads with E-Mail Address and Password fields. | URL: `.../index.php?route=account/login` |
| 2 | Enter a valid email in the E-Mail Address field. | The email value is shown in the field. | `id=input-email` (unique) |
| 3 | Enter a valid password in the Password field. | The password is accepted (masked) in the field. | `id=input-password` (unique) |
| 4 | Click the Login button. | The system authenticates the user. | `role=button\|name=Login` (unique) |
| 5 | Verify the post-login account page. | Page shows "My Account" and URL is the account page. | Assert text: `My Account` |

## Postconditions
- User session is active on the account page.
- User remains logged in until logout or session expiry.
