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
---

## Product Context

Qurate is an online platform that revolutionized Indian travel bookings and expanded into an 'Experiences' segment.

## The Goal

Design the interface of a backend tool for Qurate employees to evaluate, manage, and curate experiences submitted by hosts while handling bookings.

## Research & Data

Three numbers that shaped the brief, identified while mapping the existing review workflow.

<ul class="stat-grid">
<li class="stat-card">
<p class="stat-number">70%</p>
<p class="stat-label">Manual Overhead</p>
<p>Evaluation time spent checking attachments, background, and formatting rules across separate windows.</p>
</li>
<li class="stat-card">
<p class="stat-number">4.2 Days</p>
<p class="stat-label">Host Resolution Time</p>
<p>Average time taken by hosts to fix issues or drop off when receiving generic rejection emails.</p>
</li>
<li class="stat-card">
<p class="stat-number">35%</p>
<p class="stat-label">Verification Delay</p>
<p>Total review time consumed by opening external PDF viewers and matching credentials against profile fields.</p>
</li>
</ul>

## User Personas

<ul class="persona-grid">
<li class="persona-card">
<img class="persona-portrait" src="/images/qurate/persona-jitendra.webp" alt="Illustrated portrait representing Jitendra Gaur" />
<div>
<p class="persona-eyebrow">Employee</p>
<p class="persona-name">Jitendra Gaur</p>
<p class="persona-role">Experience Manager</p>
<p><strong>Wants</strong> to process incoming experience listings rapidly while keeping SLA breaches near zero and quality checks consistent. An efficient workspace.</p>
<p><strong>Needs</strong> an all-in-one dashboard with live queue filters, pass/flag accordions, and automated host feedback generation.</p>
</div>
</li>
<li class="persona-card">
<img class="persona-portrait" src="/images/qurate/persona-ritesh.webp" alt="Illustrated portrait representing Ritesh Pujara" />
<div>
<p class="persona-eyebrow">Experience Host</p>
<p class="persona-name">Ritesh Pujara</p>
<p class="persona-role">Tour Operator</p>
<p><strong>Wants</strong> to get new listings approved quickly to begin earning through bookings.</p>
<p><strong>Needs</strong> clear, transparent, and actionable feedback when items need revision, avoiding vague rejections so there is no need to change platforms.</p>
</div>
</li>
</ul>

## Information Architecture

The dashboard splits into three workspaces — an operations overview, the review queue, and a split evaluation workspace for the actual curation work.

<figure>
<img src="/images/qurate/ia-diagram.webp" alt="Information architecture diagram: Qurate Experience Dashboard splits into Operations Dashboard, Review Queue, and Split Evaluation Workspace, each broken into their constituent panels" />
</figure>

## User Flow

From opening the dashboard to a decision being made on a submitted experience, with the two branches — approval, and the policy-violation check that routes to either a rejection or a revision request.

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

Four key interfaces from the finished dashboard.

<figure>
<img src="/images/qurate/final-dashboard.webp" alt="Final Dashboard screen: summary cards, submission review queue, operations calendar, bookings and statistics, and host activity" />
<figcaption>Dashboard — top summary cards for at-a-glance capacity planning; a submission queue table that opens straight into evaluation; a calendar that surfaces reviews nearing deadline; and host/booking telemetry without leaving the page.</figcaption>
</figure>

<figure>
<img src="/images/qurate/final-review-queue.webp" alt="Final Review Queue screen: status-filtered tabs, search and sort toolbar, and a queue table with SLA countdown timers" />
<figcaption>Review Queue — status-filtered tabs isolate new submissions from active revisions; multi-parametric search and sort narrows to region or urgency in seconds; SLA countdown timers surface at-risk items first.</figcaption>
</figure>

<figure>
<img src="/images/qurate/final-split-evaluation.webp" alt="Final Split Evaluation screen: media gallery and itinerary on the left, a 5-step compliance checklist and auto-generated feedback on the right" />
<figcaption>Split Evaluation — every submission asset in one viewport; a 5-step checklist that standardizes the review; auto-generated, specific feedback for hosts; and a state-locked action footer that blocks approval until the checklist clears.</figcaption>
</figure>

<figure>
<img src="/images/qurate/final-style-guide.webp" alt="Qurate style guide: color palette, typography scale, action button states, and status badge colors" />
<figcaption>Style Guide</figcaption>
</figure>

## Retrospective

<ul class="outcome-grid">
<li class="outcome-card">
<h3>Efficient Interface</h3>
<p>Combining external document previews directly into the workspace cut verification time significantly.</p>
</li>
<li class="outcome-card">
<h3>Automated Feedback Generation</h3>
<p>Structured compliance checklists replaced generic rejection emails, accelerating host responses.</p>
</li>
<li class="outcome-card">
<h3>Density Without Overwhelm</h3>
<p>Organizing workflows into accordion lists with clear status indicators improved information hierarchy while preserving curator accuracy.</p>
</li>
</ul>
