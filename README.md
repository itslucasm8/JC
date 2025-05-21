# README - Job Club Platform (French Version)

## 🚀 Project Overview

The Job Club app is a French-language job discovery platform for backpackers on a Working Holiday Visa (WHV) in Australia. It features daily updated job listings and learning resources designed to help French-speaking users find work efficiently, with a clean and intuitive dashboard.

## 👩‍💼 Target Audience

* French-speaking backpackers (18-35 years old)
* Users with Working Holiday Visas
* Living or arriving in Australia, seeking short-term or flexible employment

## 🌐 Languages

* All content (UI + resources) will be in **French**.

## 🔄 Core Features

### Authentication

* Simple email/password login
* Users access a personalized dashboard after login

### Job Feed (`/jobs`)

* 20-30 new jobs posted daily
* Jobs curated to be **backpacker-friendly**
* Jobs across **all Australian states/territories**
* **Filtering options**:

  * State (QLD, NSW, VIC, etc.)
  * Job type (Farm, Resto, Transport, etc.)
  * Date posted
  * Accommodation provided (yes/no)
* Job details include:

  * Description, location (with map), how to apply, duration, job type, perks
  * "Save" and "I've Applied" buttons for user tracking

### Dashboard (`/dashboard`)

* Welcome section
* Job alerts based on user preferences
* Saved jobs widget
* Application tracking
* Suggested learning resources

### Resources (`/ressources`)

* Article categories:

  * ✍️ Rédiger son CV australien
  * 💼 Trouver un job en Australie
  * 🔊 Podcasts sur l'expérience WHV
  * 📚 Conseils pratiques (entretien, e-mails de relance, erreurs à éviter)
* Embedded video tutorials
* Downloadable CV templates & cover letters

### User Profile (`/mon-compte`)

* Personal info (name, email, visa status)
* Preferred job sectors & states
* Document uploads (CV, cover letter)
* Notification preferences

### Bonus UX Features

* Email alerts when matching jobs are posted
* Smart job suggestions based on user profile
* Dark/light mode toggle
* Partner discount space (TFN, NAATI, Packs, etc.)

## 📊 App Structure (Proposed Pages)

```
- / (Landing page - post login)
- /jobs (Filtered job list)
- /jobs/:id (Job detail page)
- /dashboard (User dashboard)
- /ressources (Learning hub)
- /ressources/:slug (Article or video detail)
- /mon-compte (Profile settings)
```

## 📓 CMS & Admin Notes

* Admin panel to post new jobs daily (bulk import or manual)
* Content upload system for articles/videos
* Resource tagging system by job type, region, and keyword

## 🌈 Design Guidelines

* Mobile-first responsive UI
* Visual-heavy interface using pictograms for job types
* Use light, clean design (backpacker, playful, trustworthy)
* Use clear French copy and avoid heavy formalities

## ⚡ Tech Stack Suggestions (Optional Guidance)

* **Frontend**: React + TailwindCSS
* **Backend**: Node.js + Express or Firebase
* **Database**: MongoDB / Firestore
* **Hosting**: Vercel / Firebase Hosting
* **Admin Panel**: Sanity, Strapi or custom React CMS

## ℹ️ Additional Notes for Cursor

* This app is not an English platform translated to French. It is **French-native** and must feel local.
* Priority on job discovery UX and intuitive onboarding
* The dashboard must feel like the user's control center, with reminders, insights, and value
* Search and filter functions should be fast
* Keep data fetching optimized (caching jobs when needed)
* Emphasize component reusability: cards, filter controls, job info panel
* Avoid unnecessary integrations (e.g., no Google login)

---

This README acts as your base spec to build the Job Club app. Expand on any section as needed for implementation. We're vibe coding it — focus on fast builds, nice UX, and core value delivery first.
