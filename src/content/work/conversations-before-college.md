---
title: Conversations before college
description: A system for the right career guidance in India.
cover: ./assets/conversations-before-college-cover.webp
coverAlt: "Conversations Before College title card on a blue-to-green gradient background"
role: Lead System & Interaction Designer
timeline: March – April 2026
tools: [Figma]
services: [System Design, Service Design, UI/UX]
order: 2
featured: true
eyebrow: System Design Case Study · March 2026
thumbVideoMp4: /videos/conversations-thumb.mp4
thumbVideoWebm: /videos/conversations-thumb.webm
accentColor: "#3B6FE0"
---

## Product Context

Indian students pick their academic stream in Grade 10, years before most of them have any real sense of what they're good at. Fear fills that gap: parents push Science and Math because those paths feel financially safe, not because they fit the student.

## Research & Data

Two numbers from early research, and a team of four built the rest of this system around them.

<ul class="stat-grid" style="grid-template-columns: repeat(2, 1fr)">
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 6h22l-8 12v8l-6 3v-11L5 6Z" stroke="var(--color-text)" stroke-width="1.5" stroke-linejoin="round"/><circle cx="16" cy="24" r="1.6" fill="var(--case-accent)" stroke="none"/></svg>
<p class="stat-number">99.7%</p>
<p class="stat-label">Bottleneck Failure</p>
<p>Students who don't clear JEE, NEET, or UPSC each year, after staking years of their schooling on passing.</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="9" cy="11" r="3" stroke="var(--color-text)" stroke-width="1.5"/><path d="M3 24c0-4 3-6 6-6s6 2 6 6" stroke="var(--color-text)" stroke-width="1.5" stroke-linecap="round"/><circle cx="23" cy="11" r="3" stroke="var(--color-text)" stroke-width="1.5"/><path d="M17 24c0-4 3-6 6-6s6 2 6 6" stroke="var(--color-text)" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="9" r="3.4" stroke="var(--case-accent)" stroke-width="2"/><path d="M9 23c0-4.5 3.2-7 7-7s7 2.5 7 7" stroke="var(--case-accent)" stroke-width="2" stroke-linecap="round"/></svg>
<p class="stat-number">22.79L</p>
<p class="stat-label">Candidates, One Exam</p>
<p>NEET 2026 registrations alone, all competing for the same narrow set of "safe" seats.</p>
</li>
</ul>

## The Goal

Design a system that replaces fear-based stream selection with structured autonomy, built on the Academic Bank of Credits that NEP 2020 already opened up but never gave students a way to use. The brief split into three deliverables: a redesigned school library, a one-year transition curriculum, and the app that ties both to real university credit.

## User Personas

<ul class="persona-grid">
<li class="persona-card">
<img class="persona-portrait" src="/images/qurate/persona-jitendra.webp" alt="Illustrated portrait representing a Grade 10 student" />
<div>
<p class="persona-eyebrow">Student</p>
<p class="persona-name">The Pressure</p>
<p class="persona-role">Grade 10, Undecided</p>
<p><strong>Wants</strong> to find out what he's actually good at, instead of defaulting into Science because it keeps every door open.</p>
<p><strong>Needs</strong> proof, credits, mentors, a portfolio, that exploring won't cost him his future.</p>
</div>
</li>
<li class="persona-card">
<img class="persona-portrait" src="/images/qurate/persona-ritesh.webp" alt="Illustrated portrait representing a parent" />
<div>
<p class="persona-eyebrow">Parent</p>
<p class="persona-name">The Safety Net</p>
<p class="persona-role">Parent of a Grade 10 Student</p>
<p><strong>Wants</strong> certainty that whatever path her child takes will still pay the bills.</p>
<p><strong>Needs</strong> data she can see updating in real time, not reassurance she has to take on faith.</p>
</div>
</li>
</ul>

A library can change a student's habits on its own. A parent's mind doesn't move without evidence. That gap between the two personas is what the three deliverables below are each built to close, one friction level at a time.

## System Overview

Three structural pillars, ordered by how much resistance each one meets on the way in.

<ul class="outcome-grid">
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 7c-2.5-1.5-6-2-9-1v18c3-1 6.5-.5 9 1 2.5-1.5 6-2 9-1V6c-3-1-6.5-.5-9 1Z" stroke="var(--color-text)" stroke-width="1.5" stroke-linejoin="round"/><path d="M16 7v18" stroke="var(--color-text)" stroke-width="1.5"/><path d="M13 22v6l2-1.5 2 1.5v-6Z" fill="var(--case-accent)" stroke="var(--case-accent)" stroke-width="1.5" stroke-linejoin="round"/></svg>
<h3>The Library</h3>
<p>Physical, low friction. A school can repaint shelves over a weekend, no policy or parent buy-in required.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M4 22c4-8 20-8 24 0" stroke="var(--color-text)" stroke-width="1.5" stroke-linecap="round"/><path d="M4 22h24" stroke="var(--case-accent)" stroke-width="2.5" stroke-linecap="round"/><path d="M9 22v4M16 22v4M23 22v4" stroke="var(--color-text)" stroke-width="1.5" stroke-linecap="round"/></svg>
<h3>SETU Curriculum</h3>
<p>Structural, high friction. A full transition-year framework that needs school and board-level buy-in to run.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="9" y="4" width="14" height="24" rx="2.5" stroke="var(--color-text)" stroke-width="1.5"/><path d="M13 8h6" stroke="var(--color-text)" stroke-width="1.5" stroke-linecap="round"/><path d="M13 24h6" stroke="var(--case-accent)" stroke-width="2.5" stroke-linecap="round"/></svg>
<h3>CareerBridge App</h3>
<p>Digital, medium friction. The daily engine that turns the curriculum into tasks and the library's habits into data.</p>
</li>
</ul>

## The Library

Subjects taught kids that knowledge lives in sealed boxes, Science over here, Arts over there. The redesign replaces those boxes with four zones organized by intent instead of subject: a quiet Reference vault, a collaborative Explorer zone, a hands-on Creation zone, and a Leisure corner that treats reading for fun as seriously as reading for grades. Color-coded floor paths make the whole room self-navigating, down to a third grader.

<figure>
<img src="/images/conversations/library-floorplan.webp" alt="Floor plan of the redesigned school library showing the Blue, Yellow, Green, and Purple intent-based zones with wayfinding paths" />
<figcaption>The four zones: Blue (Reference), Yellow (Explorer), Green (Creation), Purple (Leisure), connected by a single color-coded wayfinding path from the entrance.</figcaption>
</figure>

<figure>
<img src="/images/conversations/library-photos.webp" alt="Photos of the implemented library redesign: students working in each of the four color-coded zones, a digital zone-guide screen, and the floor wayfinding paths" />
<figcaption>Built and in use. The zone guide screen at the entrance tells each grade which zone they're rotating through that week.</figcaption>
</figure>

## CareerBridge

A curriculum on paper can't guide a student on a Tuesday morning. CareerBridge is the daily engine: a dual-access app that turns the transition year into bite-sized tasks for the student while giving the parent a live dashboard instead of a vague assurance.

The first screen after login isn't a subject picker. It's eight situational questions, how a student reacts to failure, what kind of workspace they picture themselves in, which role they'd claim first on a team project. Subject-based onboarding just re-asks the question a student already can't answer. Behavior doesn't lie the same way.

<figure>
<video src="/videos/careerbridge-demo.mp4" autoplay loop muted playsinline data-autoplay-video aria-label="CareerBridge app walkthrough: onboarding, behavioral calibration, the student dashboard, curriculum tracking, and the parent trust tracker">
<source src="/videos/careerbridge-demo.webm" type="video/webm" />
<source src="/videos/careerbridge-demo.mp4" type="video/mp4" />
</video>
<figcaption>A quick run through CareerBridge end to end before the screen-by-screen breakdown below.</figcaption>
</figure>

<figure class="figure--feature">
<p class="figure-eyebrow">The core mechanism</p>
<img src="/images/conversations/app-onboarding.webp" alt="CareerBridge onboarding: the welcome screen, and the dual-access login screens for students (Exploring) and parents (Assessing)" />
<figcaption>Dual access from the first screen. A student logs in to explore; a parent logs in to a different view entirely, built to assess, not control.</figcaption>
</figure>

<figure>
<img src="/images/conversations/app-dashboard-task.webp" alt="CareerBridge student dashboard showing today's focus task, and the detail view for a task from NID Ahmedabad" />
<figcaption>Today's Focus. Every task is tagged with the real institution behind it, NID, IIIT, so a 90-day exploration carries actual academic weight, not a random internet module.</figcaption>
</figure>

<figure>
<img src="/images/conversations/app-curriculum.webp" alt="CareerBridge curriculum tracking screen showing completed and upcoming weeks with credit values per task" />
<figcaption>Completed weeks collapse, the current week expands. Each task underneath carries its own credit value, so progress reads as a build-up, not a checklist.</figcaption>
</figure>

<figure>
<img src="/images/conversations/app-progress.webp" alt="CareerBridge student progress screen showing weekly engagement hours, total ABC credits, average mentor rating, and a portfolio link" />
<figcaption>The student's own view: hours logged, credits earned, mentor ratings, a portfolio building itself in the background.</figcaption>
</figure>

<figure>
<img src="/images/conversations/app-parent.webp" alt="CareerBridge parent dashboard showing verified ABC credits, project consistency, mentor sessions, and program investment details" />
<figcaption>The parent's view of the same data: verified credits, consistency score, engagement level. The anxious check-in becomes a number the parent can actually read.</figcaption>
</figure>

## SETU Curriculum

In India, a gap year usually means one thing: dropping a year to retake an exam. SETU, Sanskrit for bridge, reframes that year as a structured transition instead, built on three terms: Explore, Experience, Envision. Every term closes with a parent-facing deliverable, a family conversation, an industry interface day, a joint planning session, so the year builds trust alongside the student's own portfolio.

<figure>
<img src="/images/conversations/setu-booklet.webp" alt="Pages from the SETU transition year curriculum booklet, showing the guiding philosophy, annual curriculum architecture, and teacher preparation programme" />
<figcaption>The 25-page booklet schools use to run the year: what NEP 2020 already allows, what it leaves open, and the week-by-week structure that fills the gap.</figcaption>
</figure>

## Field Validation

The proposal went to Sri Prakash Vidyaniketan's administration before it went anywhere else, specifically to the Vice Principal, since a system that adds work for already-stretched teachers doesn't survive contact with a real school.

> "By this it will be very helpful for the kids... from the school's side, we feel content seeing the children happy with their choices and this helps them focus more for their preparation. Parents will also be happy seeing kids settled in their chosen direction."
>
> — Sri Lakshmi, Vice Principal

## Retrospective

<ul class="outcome-grid">
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="16" r="10" stroke="var(--color-text)" stroke-width="1.5"/><path d="M16 6v6M16 20v6M6 16h6M20 16h6" stroke="var(--case-accent)" stroke-width="2" stroke-linecap="round"/></svg>
<h3>Designing for Complex Systems</h3>
<p>A policy like NEP 2020 can open a door on paper and still leave it shut in practice, because the real blocker was never the policy. It was the behavior built up around the old one.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="10" cy="11" r="3.5" stroke="var(--color-text)" stroke-width="1.5"/><circle cx="22" cy="11" r="3.5" stroke="var(--case-accent)" stroke-width="2"/><path d="M4 25c0-4.5 3-7 6-7s6 2.5 6 7M16 25c0-4.5 3-7 6-7s6 2.5 6 7" stroke="var(--color-text)" stroke-width="1.5" stroke-linecap="round"/></svg>
<h3>Multi-Stakeholder Friction</h3>
<p>Student anxiety, parental fear, and a school administration's workload don't resolve into one blueprint cleanly. The friction-ordered rollout, library first, app second, curriculum last, exists because that fight couldn't be won in one move.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M5 23l6-14 6 9 4-6 6 11" stroke="var(--color-text)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="21" cy="12" r="1.8" fill="var(--case-accent)" stroke="none"/></svg>
<h3>Sequencing the Ask</h3>
<p>Leading with the hardest change (a new exam, a new curriculum mandate) would have stalled before a single student felt the difference. Proving the library worked first made the harder asks easier to say yes to.</p>
</li>
</ul>
