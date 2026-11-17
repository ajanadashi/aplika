# Aplika: rules and flows

## Users and roles

| Role | Who | Can do |
|---|---|---|
| **Visitor** | Not logged in | See the landing page, sign up, log in |
| **Job seeker (user)** | Registered, email verified | Create, edit, move and delete their own applications and notes; set reminders; see their own stats; upgrade to Pro |
| **Admin** | Product owner | See account counts and system health; activate or deactivate Pro manually; cannot read a user's notes by default |

A user can only ever see their own data.

## The three most important flows

### Flow 1: Sign up and verify
1. Visitor enters email and password on the sign-up page.
2. The system creates the account as *unverified* and queues a verification email.
3. The user opens the email and clicks the link.
4. The system marks the account *verified* and logs the user in.
5. The user lands on an empty board with a prompt: "Add your first application."

### Flow 2: Add an application and move it through stages
1. The user clicks "Add application" and enters company, job title and date applied (link and notes optional).
2. The system saves it with status **Applied** and sets a default follow-up date 7 days later.
3. As things happen, the user moves it: Applied, Interview, Offer, Rejected (or Withdrawn).
4. Each move is saved with the date, so the user sees a history.
5. On Offer or Rejected, the follow-up reminder is cancelled.

### Flow 3: Follow-up reminder email
1. A background job runs once a day and finds applications whose follow-up date is today and whose status is still Applied or Interview.
2. For each, the system puts a reminder email in the queue.
3. The worker sends it; on failure it retries up to 3 times with a delay.
4. The user clicks the link in the email and goes straight to that application.
5. The user either marks it followed up (the system sets the next date) or changes the status.

## Business rules

1. A user must verify their email before they can add applications.
2. Each application belongs to exactly one user, and only that user can read, change or delete it.
3. Every application has a company, a job title and a date applied; the date cannot be in the future.
4. Status can only be one of: Applied, Interview, Offer, Rejected, Withdrawn.
5. The free plan allows up to 25 active applications (Applied or Interview). Offers, Rejected and Withdrawn do not count toward the limit.
6. The default follow-up date is 7 days after applying; the user can change it to any future date.
7. No reminder is sent for applications with status Offer, Rejected or Withdrawn.
8. A user receives at most one reminder email per application per day, and at most 5 reminder emails per day in total (a digest if more).
9. Deleting an application is permanent after 30 days; before that the user can restore it.
10. A failed email is retried up to 3 times, then marked *failed* and not retried again.
11. The same company and job title applied for on the same date cannot be added twice; the user is warned and can still confirm.
12. Pro features are switched on and off by the admin after payment is confirmed in v1.
13. If a Pro plan ends, existing applications stay; the user just cannot add new ones past the free limit.

## What version 1 will NOT do

- No scraping or importing from job portals, and no auto-applying.
- No CV or cover-letter builder, no AI features.
- No browser extension or mobile app (the web app should just work on a phone).
- No online card payments; Pro is activated manually by the admin (to be revisited once real users exist).
- No career-centre or employer accounts, and no sharing of applications between users.
- No SMS or WhatsApp reminders; email only.
- No calendar sync and no contact/networking tracker.
