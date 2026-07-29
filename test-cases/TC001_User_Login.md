# TC001 - User Login

## Test Case ID
TC001

## Title
User Login with Valid Credentials

## Description
Verify that a registered user can successfully log in to the e-commerce application using valid username/email and password credentials.

## Preconditions
- Application is accessible and running.
- User has a valid registered account.
- User is logged out and on the application home page or login page.

## Test Data
| Field | Value |
|-------|-------|
| Username / Email | valid.user@example.com |
| Password | ValidPass@123 |

## Priority
High

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to the application login page. | Login page is displayed with username/email and password fields. |
| 2 | Enter a valid username or email in the username/email field. | The entered value is shown in the field. |
| 3 | Enter a valid password in the password field. | The password is accepted (masked) in the field. |
| 4 | Click the Login / Sign In button. | The system authenticates the user successfully. |
| 5 | Observe the post-login landing page. | User is redirected to the home/dashboard page and a logged-in user indicator (e.g., profile name or account menu) is visible. |

## Postconditions
- User session is active.
- User remains logged in until logout or session expiry.
