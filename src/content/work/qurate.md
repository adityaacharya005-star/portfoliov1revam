---
title: Qurate
description: Dashboard for employees.
cover: ./assets/qurate/cover.webp
coverAlt: Qurate Experiences dashboard shown on a desktop display, with a Mac Studio alongside it
role: Product Designer
timeline: 1 week
tools: [Figma]
services: [Product Design, Web Dashboard]
eyebrow: Product Case Study · October 2026
order: 1
featured: true
thumbVideoMp4: /videos/qurate-thumb.mp4
thumbVideoWebm: /videos/qurate-thumb.webm
accentColor: "#FF385C"
---

## Product Context

Qurate started as an Indian travel booking platform, then added an Experiences marketplace where hosts list tours, treks, and local activities.

## Research & Data

Three numbers that shaped the brief, identified while mapping the existing review workflow.

<ul class="stat-grid">
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><circle cx="16" cy="17" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M16 11v6l4 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 4h8M16 4v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
<p class="stat-number">70%</p>
<p class="stat-label">Manual Overhead</p>
<p>Spent jumping between attachments, host profiles, and formatting rules in separate windows.</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M9 5h14M9 27h14M10 5c0 6 5 7.5 6 9-1 1.5-6 3-6 9M22 5c0 6-5 7.5-6 9 1 1.5 6 3 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
<p class="stat-number">4.2 Days</p>
<p class="stat-label">Host Resolution Time</p>
<p>To fix a flagged issue, or give up, after a generic rejection email.</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="8" y="4" width="13" height="17" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M11 9h7M11 13h7M11 17h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="21" cy="22" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M24.5 25.5L27 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
<p class="stat-number">35%</p>
<p class="stat-label">Verification Delay</p>
<p>Lost opening external PDF viewers and matching credentials by hand.</p>
</li>
</ul>

## The Goal

Design the backend tool Qurate employees use to review, manage, and approve hosted experiences, alongside the bookings those experiences generate. One week meant picking a fight: fix the review workspace first, since that's where the 70% and 35% were bleeding, and leave booking management for a later pass.

## User Personas

<ul class="persona-grid">
<li class="persona-card">
<img class="persona-portrait" src="/images/qurate/persona-jitendra.webp" alt="Illustrated portrait representing Jitendra Gaur" />
<div>
<p class="persona-eyebrow">Employee</p>
<p class="persona-name">Jitendra Gaur</p>
<p class="persona-role">Experience Manager</p>
<p><strong>Wants</strong> to clear incoming listings fast, keep SLA breaches near zero, and apply the same quality bar every time.</p>
<p><strong>Needs</strong> an all-in-one dashboard with live queue filters, pass/flag accordions, and automated host feedback generation.</p>
</div>
</li>
<li class="persona-card">
<img class="persona-portrait" src="/images/qurate/persona-ritesh.webp" alt="Illustrated portrait representing Ritesh Pujara" />
<div>
<p class="persona-eyebrow">Experience Host</p>
<p class="persona-name">Ritesh Pujara</p>
<p class="persona-role">Tour Operator</p>
<p><strong>Wants</strong> to get new listings approved so bookings can start.</p>
<p><strong>Needs</strong> specific feedback when a listing needs revision, not a vague rejection that pushes him toward another platform.</p>
</div>
</li>
</ul>

Jitendra and Ritesh pull in opposite directions: a thorough review slows Ritesh down, a fast one risks Jitendra's quality bar. The dashboard has to let one through without giving up the other.

## Information Architecture

A single merged workspace was the first sketch. It fell apart once revision requests needed different handling from brand-new submissions. Splitting into three, an operations overview, the review queue, and a focused evaluation view, let Jitendra's quick status checks and his slow one-at-a-time evaluations stop competing for the same screen.

<figure>
<img src="/images/qurate/ia-diagram.webp" alt="Information architecture diagram: Qurate Experience Dashboard splits into Operations Dashboard, Review Queue, and Split Evaluation Workspace, each broken into their constituent panels" />
</figure>

## User Flow

Every submission runs through the same policy check before a decision locks in. Consistency matters more here than speed: two reviewers landing on the same listing need to reach the same call, not a different one depending on who's faster that day.

<figure>
<img src="/images/qurate/user-flow.webp" alt="User flow diagram from opening the dashboard through inspecting an experience to an approve, reject, or request-revision outcome" />
</figure>

## Exploration & Sketches

<figure>
<img src="/images/qurate/sketch-iterations.webp" alt="Hand-drawn sketch iterations exploring the dashboard, review queue, and calendar layouts" />
<figcaption>Sketch Iterations</figcaption>
</figure>

<figure>
<img src="/images/qurate/lofi-screens.webp" alt="Grid of low-fidelity wireframe screens for the dashboard, review queue, and operations calendar" />
<figcaption>Low-Fidelity Screens</figcaption>
</figure>

## Final Design

Three key interfaces from the finished dashboard. Split Evaluation is the one that mattered, built to go straight at the 70% and 35% from the research. The dashboard and queue exist to feed reviewers into it fast.

<figure>
<img src="/images/qurate/final-dashboard.webp" alt="Final Dashboard screen: summary cards, submission review queue, operations calendar, bookings and statistics, and host activity" />
<figcaption>Dashboard. Scoped to the first two minutes of the day: what's overdue, what's new, what's already decided.</figcaption>
</figure>

<figure>
<img src="/images/qurate/final-review-queue.webp" alt="Final Review Queue screen: status-filtered tabs, search and sort toolbar, and a queue table with SLA countdown timers" />
<figcaption>Review Queue. Sorted by deadline by default, because the real risk was never a bad listing, it was a missed one.</figcaption>
</figure>

<figure class="figure--feature">
<p class="figure-eyebrow">The core screen</p>
<img src="/images/qurate/final-split-evaluation.webp" alt="Final Split Evaluation screen: media gallery and itinerary on the left, a 5-step compliance checklist and auto-generated feedback on the right" />
<figcaption>Split Evaluation. Every asset and the checklist that judges it, in one viewport, no PDF viewer, no switching tabs to verify a credential. This is the 70% and the 35%, solved on one screen.</figcaption>
</figure>

## Other Directions

Three other layouts for that same screen, each rejected for the same reason: they put evidence and judgment in different places instead of the same one.

<ul class="compare-grid">
<li class="compare-card">
<img src="/images/qurate/alt-stacked-full.webp" alt="Rejected layout: gallery, info, and itinerary stacked full-width above a separate quality checklist panel" />
<p class="compare-label">Stacked, checklist below</p>
<p>Gallery and itinerary filled the screen before the checklist even started. Flagging an image meant scrolling back up to find it again.</p>
</li>
<li class="compare-card">
<img src="/images/qurate/alt-checklist-first.webp" alt="Rejected layout: quality checklist on the left, experience overview and gallery on the right" />
<p class="compare-label">Checklist first</p>
<p>Closer to the final split, but leading with the checklist trains a reviewer to judge before they've looked at what they're judging.</p>
</li>
<li class="compare-card">
<img src="/images/qurate/alt-stacked-feedback.webp" alt="Rejected layout: gallery and info stacked above a checklist with a feedback panel beside each flagged item" />
<p class="compare-label">Stacked, feedback beside checklist</p>
<p>Pairs the flagged item with its feedback box, but that pair still sits a full scroll away from the photo that triggered it.</p>
</li>
</ul>

## Style Guide

<figure>
<img src="/images/qurate/final-style-guide.webp" alt="Qurate style guide: color palette, typography scale, action button states, and status badge colors" />
</figure>

## Retrospective

<ul class="outcome-grid">
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect x="4" y="7" width="11" height="18" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="17" y="7" width="11" height="18" rx="1" stroke="currentColor" stroke-width="1.5"/><path d="M15 16h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
<h3>Efficient Interface</h3>
<p>Document previews live in the workspace instead of a separate PDF viewer, aimed straight at the context switch behind that 35%.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M8 18a8 8 0 1 1 3 6.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M8 24v-6h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 15l2 2 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
<h3>Automated Feedback Generation</h3>
<p>Structured checklists replace the generic rejection email. The bet is that a host who knows exactly what to fix responds faster than one guessing from a form letter, worth checking against that 4.2-day number once this ships.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 5l12 6-12 6-12-6 12-6Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4 17l12 6 12-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 23l12 6 12-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
<h3>Density Without Overwhelm</h3>
<p>Accordion lists with status indicators keep the queue dense without burying what a curator needs to decide.</p>
</li>
</ul>

