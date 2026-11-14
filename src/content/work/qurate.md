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
illustrationStyle: polished
---

## Product Context

Qurate is a design brief modeled on Airbnb: an Indian travel booking platform launching an Experiences marketplace, where hosts list tours, treks, and local activities. My task was the side of that launch nobody designs for the demo, the backend tool the employees reviewing those listings use every day.

## Research & Data

Three numbers that shaped the brief, identified while mapping the existing review workflow.

<ul class="stat-grid">
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="22" width="92" height="68" rx="8"/><circle cx="25" cy="32" r="2.2" fill="currentColor" stroke="none"/><circle cx="34" cy="32" r="2.2" fill="currentColor" stroke="none"/><circle cx="43" cy="32" r="2.2" fill="currentColor" stroke="none"/><rect x="54" y="27" width="44" height="9" rx="4.5"/><path d="M28 60q9 5 14 -1" stroke-width="3.5"/><path d="M26 70q9 5 14 -1" stroke-width="3.5"/><path d="M50 54L50 80 56 74 60 84 65 82 61 72 70 72Z" fill="currentColor" stroke="none"/></svg>
<p class="stat-number">70%</p>
<p class="stat-label">Manual Overhead</p>
<p>Spent jumping between attachments, host profiles, and formatting rules in separate windows.</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="60" r="40"/><path d="M60 60L60 38"/><path d="M60 60Q78 50 86 62" stroke-width="3.5"/><circle cx="60" cy="60" r="4" fill="currentColor" stroke="none"/><path d="M60 20v6M100 60h-6M60 100v-6M20 60h6" stroke-width="3.5"/></svg>
<p class="stat-number">4.2 Days</p>
<p class="stat-label">Host Resolution Time</p>
<p>To fix a flagged issue, or give up, after a generic rejection email.</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M35 20H71L85 34V90H35Z"/><path d="M71 20L85 34H71Z" fill="currentColor" stroke="none"/><path d="M43 50h28M43 60h20"/><path d="M43 74l6 6 14-14" stroke-width="3.5"/></svg>
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
<img loading="lazy" decoding="async" class="persona-portrait" src="/images/qurate/persona-jitendra.webp" alt="Illustrated portrait representing Jitendra Gaur" />
<div>
<p class="persona-eyebrow">Employee</p>
<p class="persona-name">Jitendra Gaur</p>
<p class="persona-role">Experience Manager</p>
<p><strong>Wants</strong> to clear incoming listings fast, keep SLA breaches near zero, and apply the same quality bar every time.</p>
<p><strong>Needs</strong> an all-in-one dashboard with live queue filters, pass/flag accordions, and automated host feedback generation.</p>
</div>
</li>
<li class="persona-card">
<img loading="lazy" decoding="async" class="persona-portrait" src="/images/qurate/persona-ritesh.webp" alt="Illustrated portrait representing Ritesh Pujara" />
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
<img loading="lazy" decoding="async" src="/images/qurate/ia-diagram.webp" alt="Information architecture diagram: Qurate Experience Dashboard splits into Operations Dashboard, Review Queue, and Split Evaluation Workspace, each broken into their constituent panels" />
</figure>

## User Flow

Every submission runs through the same policy check before a decision locks in. Consistency matters more here than speed: two reviewers landing on the same listing need to reach the same call, not a different one depending on who's faster that day.

<figure>
<img loading="lazy" decoding="async" src="/images/qurate/user-flow.webp" alt="User flow diagram from opening the dashboard through inspecting an experience to an approve, reject, or request-revision outcome" />
</figure>

## Exploration & Sketches

Before committing to the three-panel split, each panel got its own round of rough exploration: how dense the dashboard could get before it turned into noise, how a reviewer actually wants a queue sorted, whether the calendar needed to exist as its own view at all.

<figure>
<img loading="lazy" decoding="async" src="/images/qurate/sketch-iterations.webp" alt="Hand-drawn sketch iterations exploring the dashboard, review queue, and calendar layouts" />
<figcaption>Early passes leaned toward cramming status, deadline, and actions into every card. Most of that got cut once it was clear a reviewer only needs three things at a glance: what's new, what's overdue, what's already decided.</figcaption>
</figure>

<figure>
<img loading="lazy" decoding="async" src="/images/qurate/lofi-screens.webp" alt="Grid of low-fidelity wireframe screens for the dashboard, review queue, and operations calendar" />
<figcaption>This is where the SLA countdown earned its place on the queue table, once sorting by submission date kept burying the listings actually at risk of breaching it.</figcaption>
</figure>

## Final Design

Three key interfaces from the finished dashboard. Split Evaluation is the one that mattered, built to go straight at the 70% and 35% from the research. The dashboard and queue exist to feed reviewers into it fast.

<figure>
<img loading="lazy" decoding="async" src="/images/qurate/final-dashboard.webp" alt="Final Dashboard screen: summary cards, submission review queue, operations calendar, bookings and statistics, and host activity" />
<figcaption>The dashboard only shows what's overdue, what's new, and what's already decided, everything a reviewer needs for the first two minutes of the day.</figcaption>
</figure>

<figure>
<img loading="lazy" decoding="async" src="/images/qurate/final-review-queue.webp" alt="Final Review Queue screen: status-filtered tabs, search and sort toolbar, and a queue table with SLA countdown timers" />
<figcaption>Review Queue, sorted by deadline by default: a missed listing breaches SLA faster than a bad one gets caught.</figcaption>
</figure>

<figure class="figure--feature">
<p class="figure-eyebrow">The core screen</p>
<img loading="lazy" decoding="async" src="/images/qurate/final-split-evaluation.webp" alt="Final Split Evaluation screen: media gallery and itinerary on the left, a 5-step compliance checklist and auto-generated feedback on the right" />
<figcaption>Split Evaluation keeps every asset and the checklist that judges it in one viewport. No PDF viewer, no switching tabs to verify a credential.</figcaption>
</figure>

## Other Directions

Three other layouts for that same screen, each rejected for the same reason: they put evidence and judgment in different places instead of the same one.

<ul class="compare-grid">
<li class="compare-card">
<img loading="lazy" decoding="async" src="/images/qurate/alt-stacked-full.webp" alt="Rejected layout: gallery, info, and itinerary stacked full-width above a separate quality checklist panel" />
<p class="compare-label">Stacked, checklist below</p>
<p>Gallery and itinerary filled the screen before the checklist even started. Flagging an image meant sending your eye all the way back up to find it again.</p>
</li>
<li class="compare-card">
<img loading="lazy" decoding="async" src="/images/qurate/alt-checklist-first.webp" alt="Rejected layout: quality checklist on the left, experience overview and gallery on the right" />
<p class="compare-label">Checklist first</p>
<p>Closer to the final split, but leading with the checklist trains a reviewer to judge before they've looked at what they're judging.</p>
</li>
<li class="compare-card">
<img loading="lazy" decoding="async" src="/images/qurate/alt-stacked-feedback.webp" alt="Rejected layout: gallery and info stacked above a checklist with a feedback panel beside each flagged item" />
<p class="compare-label">Stacked, feedback beside checklist</p>
<p>Pairs the flagged item with its feedback box, but that pair still sits far enough from the photo that triggered it that your eye has to travel to connect them.</p>
</li>
</ul>

## Style Guide

<figure>
<img loading="lazy" decoding="async" src="/images/qurate/final-style-guide.webp" alt="Qurate style guide: color palette, typography scale, action button states, and status badge colors" />
</figure>

## Retrospective

<ul class="outcome-grid">
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="20" width="80" height="56" rx="7"/><path d="M50 76v8M70 76v8"/><path d="M38 92h44"/><path d="M42 50l10 10 24-24" stroke-width="3.5"/><path d="M28 30q7 -5 12 0" stroke-width="3.5"/></svg>
<h3>One Screen Beats One Fewer Tab</h3>
<p>The 35% came from switching between two good tools, not from either tool being bad. Cutting that context switch did more for the number than any feature added inside either screen it replaced.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="46" r="22"/><path d="M54 68L46 80h28l-8-12Z"/><rect x="46" y="80" width="28" height="8" rx="2" fill="currentColor" stroke="none"/><path d="M48 92h24"/><path d="M51 44l5 6 4-9 4 9 5-6" stroke-width="2.6"/><path d="M60 14v8M38 22l5 7M82 22l-5 7" stroke-width="3.5"/></svg>
<h3>Specific Feedback Beats a Generic Rejection</h3>
<p>Replacing the form-letter rejection with a structured checklist showed me clarity is the real lever, not speed: a host who knows exactly what to fix resolves it faster than one left guessing. That principle is carrying into the next tool I design.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="24" y="28" width="72" height="64" rx="7"/><path d="M40 28v-8M80 28v-8" stroke-width="4"/><path d="M24 44h72"/><circle cx="38" cy="58" r="2.2" fill="currentColor" stroke="none"/><circle cx="54" cy="58" r="2.2" fill="currentColor" stroke="none"/><circle cx="70" cy="58" r="2.2" fill="currentColor" stroke="none"/><circle cx="86" cy="58" r="2.2" fill="currentColor" stroke="none"/><circle cx="38" cy="74" r="2.2" fill="currentColor" stroke="none"/><circle cx="54" cy="74" r="2.2" fill="currentColor" stroke="none"/><path d="M20 92L100 28" stroke-width="4"/></svg>
<h3>Booking Management, Deliberately Cut</h3>
<p>One week meant the review workspace only. Booking management stayed untouched simply because the 70% and 35% weren't coming from there.</p>
</li>
</ul>

