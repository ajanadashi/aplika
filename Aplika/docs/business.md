# Aplika: business

> Working name: **Aplika** (see `brand-book.md`). Items marked **[TODO]** need your own input before you hand in.

## 1. The problem

**One sentence:** Students and young professionals in Kosovo and North Macedonia who apply to many jobs lose track of where they applied, what was said and when to follow up, so they miss replies, forget interviews and send follow-ups too late, and today they patch it together with Excel, notes and email search.

**What it costs them today:** time (re-searching email and spreadsheets), missed opportunities (no follow-up, late replies) and stress during an already stressful search.

### Conversations with real people **[TODO, required by the brief]**

Talk to at least two people who have searched for a job in the last year. Write their words, not yours.

| Person (first name, age, situation) | What they said, in their words | How they track applications today |
|---|---|---|
| **[TODO]** | "…" | **[TODO]** |
| **[TODO]** | "…" | **[TODO]** |

Suggested questions: How many jobs did you apply to last time? How do you remember where you applied? Has anything slipped through? Would you pay for something that fixed it, and how much?

## 2. The big picture

**Product in one sentence:** Aplika is a simple web app where job seekers save every application, move it through stages (applied, interview, offer, rejected) and get email reminders to follow up, in one place instead of scattered across Excel and email.

- **Who uses it:** job seekers, mostly students and graduates aged 18-34.
- **Who pays:** the job seeker (a small monthly price) in v1. A later second payer could be a university career centre or bootcamp that gives it to its students.
- **Why now:** young people in both countries search online and across several portals at once, and the existing trackers are priced for Western salaries and don't cover the local portals.

### Three different ways to solve the same problem

| Option | What it is | Pros | Cons |
|---|---|---|---|
| **A. Web app (chosen)** | Account, board of applications, reminder emails | Full control, works on phone browser, fits the course backend (PostgreSQL, email queue) | Needs users to build a habit |
| B. WhatsApp/Viber bot | Message the bot "applied to X at Y"; it reminds you | Zero install, where users already are | Messaging-platform limits and cost, weak overview |
| C. Service for career centres | Universities pay a licence; students get a shared tracker and reports | Real budget, many users at once | Long sales cycle, harder to start with no references |

**Why A:** it is the fastest to build and test with real users, and it can grow into C later (career centres) once there are real users to show them.

## 3. The market

### Competitors and the "do nothing" option

| Competitor | Price | Does well | Fails | Link |
|---|---|---|---|---|
| **Huntr** (international tracker) | Free plan with limits; Pro reported at $40/month billed monthly, $30/month billed quarterly | Kanban board, Chrome extension, resume tools | Priced far above local income; not built around local portals or languages | https://huntr.co/pricing |
| **Teal** (international tracker) | Reported $9/week or $29/month (**verify on the site**) | Tracker plus AI resume tools | Same price/locale issue; heavy feature set for a simple need | https://www.tealhq.com |
| **JobShinobi** (international tracker) | Reported $20/month Pro | Analytics (response rate, interview conversion) | Same locale issue; small brand | https://jobshinobi.com |
| **Local job portals** (Duapune, KosovaJob, Vrabotuvanje.com.mk) | Free for job seekers; employers pay (Duapune publishes ad prices and annual plans) | Where the vacancies are | They list jobs; they don't track *your* applications across portals | https://duapune.com, https://kosovajob.com, https://vrabotuvanje.com.mk |
| **Do nothing**: Excel / Google Sheets / notes / email search | Free | Familiar, no signup | No reminders, easy to forget updating, nothing connects to email | n/a |

> **[TODO]** Ask Claude Research or search yourself for 1-2 more competitors (for example Simplify, or any local CV/career tool) and add them. Check the prices on each site before you hand in; prices change.

### How many possible customers (the maths, with assumptions)

| Step | Number | Source / assumption |
|---|---|---|
| Kosovo population | 1,602,515 | 2024 census, Kosovo Agency of Statistics |
| North Macedonia population | about 1.8 million | 2021 census, **[TODO verify exact figure]** |
| Total population | about 3.4 million | sum |
| Aged 18-34 (assumed 30%) | about 1.0 million | **assumption**, check with the national statistics offices |
| Searching for a job in a given year (assumed 25%) | about 250,000 | **assumption** |
| Reachable online and comfortable with an English/Albanian/Macedonian web app (assumed 70%) | about 175,000 | **assumption** |

**Realistic first-year target:** 0.3% of the reachable group, about 500 users, with 10% paying, about 50 paying users, about €150/month. Small, but enough to learn from.

**Why a customer would choose us:** because it is a simple, cheap tracker with email reminders that costs about €3 a month instead of $30-40, built for how people here actually search.

## 4. Business model and price

### Lean Canvas

| | |
|---|---|
| **Problem** | Applications get lost across Excel, email and notes; follow-ups are forgotten; no overview of progress. |
| **Customer segments** | Students, graduates and young professionals in Kosovo and North Macedonia, actively searching. Later: career centres. |
| **Unique value proposition** | One simple place for every application with reminders, at a local price. |
| **Solution** | Application board, stages, notes, deadline and follow-up reminders by email. |
| **Channels** | Universities and student groups, LinkedIn and Instagram, Facebook job groups, bootcamps (see below). |
| **Revenue streams** | Free plan plus Pro subscription. Later: career-centre licences. |
| **Cost structure** | Hosting, domain, email sending, optional AI later (see below). |
| **Key metrics** | Signups, users who add 5+ applications in week 1, reminder emails opened, free to Pro conversion. |
| **Unfair advantage** | Local language and price, plus direct access to students and bootcamps through the course network. **[TODO: confirm what access you really have]** |

### Price and why

**Proposal:** Free for up to 25 active applications. **Pro €3/month** (or about €25/year), unlimited applications and extra reminders.
**Why:** a monthly price matches how people search (a few intense months), it is a fraction of the $30-40 international tools, and 25 free applications lets people see the value before paying. **[TODO: test €3 with your two interviewees and adjust.]**

### Monthly costs (estimates, verify before you rely on them)

| Item | Estimate |
|---|---|
| Hosting (small app plus PostgreSQL) | about €5-15 |
| Domain | about €1-2/month (€12-20/year) |
| Email sending (Resend) | €0 on the free tier at first (verify current limits), then a paid plan |
| SMS | €0, not in v1 |
| AI | €0 in v1 |
| Monitoring (Asniher /health) | per the course setup |
| **Total at launch** | roughly **€10-20/month**, so about 5-7 Pro users cover it |

### First 10 customers: channels

1. **Friends and classmates** you personally message (first 3-5).
2. **Your InfoTech Academy cohort and alumni**: ask them to try it and share it.
3. **University career-centre contacts** in Prishtina, Skopje or Tetovo: ask for 15 minutes to show it to students. **[TODO: name the exact university/office]**
4. **Facebook and LinkedIn job-seeker groups** in Kosovo and North Macedonia: post a short "I built this, free for 25 applications" message.
5. **Instagram** posts and stories showing before (messy Excel) and after (the board).
