---
title: Iterate
description: A peer-feedback platform for design students.
cover: ./assets/iterate/cover.webp
coverAlt: "A hand holding a phone showing the Iterate home feed, with projects grouped by college, city, and country"
coverRatio: "1165 / 785"
role: Product Designer
timeline: "2025"
tools: [Figma]
services: [Product Design, Mobile App, Design System]
order: 4
featured: true
accentColor: "#F97316"
thumbVideoMp4: /videos/iterate-thumb.mp4
thumbVideoWebm: /videos/iterate-thumb.webm
---

## Product Context

Design students are stuck between two bad options: a portfolio site like Behance that only rewards finished, polished work, or a classroom critique that never leaves the room. Neither has a place for the actual work, the sketch that's half-wrong, the layout you're still arguing with yourself about.

Iterate is a mobile-first social platform built for that gap: a students-only space to post work-in-progress, trade structured peer feedback, and let a portfolio build itself out of the process instead of a highlight reel assembled after the fact.

## Research & Data

Two numbers that shaped the brief, from two surveys and an interview round before a single screen got drawn.

<ul class="stat-grid" style="grid-template-columns: repeat(2, 1fr)">
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="20" width="60" height="84" rx="6"/><path d="M46 20v-6h28v6"/><path d="M42 48h36M42 62h36M42 76h24"/><path d="M78 86l16-16 8 8-16 16Z"/></svg>
<p class="stat-number">74</p>
<p class="stat-label">Research Responses</p>
<p>Two structured surveys and an interview round with design students, before any feature got named.</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="24" y="30" width="50" height="60" rx="6"/><path d="M49 30c-14 0-20 10-20 20"/><circle cx="86" cy="80" r="20"/><path d="M78 80h16M86 72v16"/></svg>
<p class="stat-number">82%</p>
<p class="stat-label">Won't Post Unfinished Work</p>
<p>The exact hesitation Iterate is built to reverse, not design around.</p>
</li>
</ul>

## Competitive Landscape

Every existing option fails design students the same general way: built for somebody else's definition of "ready."

<ul class="insight-map">
<li class="insight-row">
<span class="insight-number">01</span>
<p class="insight-from">Behance only rewards finished, polished work, intimidating for a first-year's rough sketch.</p>
<svg class="insight-arrow" viewBox="0 0 48 24" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h38M30 3l12 9-12 9"/></svg>
<p class="insight-to">A students-only feed built for work-in-progress, not finished portfolios.</p>
</li>
<li class="insight-row">
<span class="insight-number">02</span>
<p class="insight-from">Instagram's algorithm rewards whatever looks good, not whatever actually needed feedback.</p>
<svg class="insight-arrow" viewBox="0 0 48 24" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h38M30 3l12 9-12 9"/></svg>
<p class="insight-to">A discipline-filtered feed in submission order, no engagement algorithm.</p>
</li>
<li class="insight-row">
<span class="insight-number">03</span>
<p class="insight-from">Reddit gives honest feedback with no structure, no portfolio, and no way to find it again.</p>
<svg class="insight-arrow" viewBox="0 0 48 24" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h38M30 3l12 9-12 9"/></svg>
<p class="insight-to">Structured feedback prompts, on a profile that compounds into a real portfolio.</p>
</li>
</ul>

## The Goal

Design a mobile platform where sharing early, unfinished work feels normal rather than risky: a verified student-only network instead of a public feed, structured feedback prompts instead of an open text box, and a portfolio that assembles itself from the process, not a highlight reel built after the fact.

## User Personas

<ul class="persona-grid">
<li class="persona-card">
<img class="persona-portrait persona-portrait--avatar" src="/images/iterate/persona-priya.webp" alt="Portrait representing Priya Sharma" />
<div>
<p class="persona-eyebrow">UI/UX Student · NID</p>
<p class="persona-name">Priya Sharma</p>
<p class="persona-role">"I design to be the best. Feedback is the fastest way to get there."</p>
<p><strong>Wants</strong> to accelerate her practical skills and have a standout, job-ready portfolio before graduation.</p>
<p><strong>Needs</strong> specific, actionable critique instead of the "looks nice!" comments she gets from classmates.</p>
</div>
</li>
<li class="persona-card">
<img class="persona-portrait persona-portrait--avatar" src="/images/iterate/persona-aniket.webp" alt="Portrait representing Aniket Joshi" />
<div>
<p class="persona-eyebrow">Graphic Design Student · MIT-WPU</p>
<p class="persona-name">Aniket Joshi</p>
<p class="persona-role">"I have so many ideas in my head, I just wish I had the confidence to share them."</p>
<p><strong>Wants</strong> the confidence to post publicly for the first time, not just keep working privately.</p>
<p><strong>Needs</strong> a low-pressure way to post anonymously and receive gentle, structured feedback.</p>
</div>
</li>
</ul>

Priya wants fast, pointed critique to get job-ready. Aniket is too afraid of judgment to post at all. The feed has to work for someone racing to improve and someone who hasn't found the nerve to start.

## User Journey

Mapped against Aniket specifically, since he's the harder case: if the product works for someone this afraid of posting, it works for everyone less afraid. Two decisions came straight out of this map, verified-student signup and anonymous posting, both load-bearing enough to make the MVP cut on day one.

<figure>
<img src="/images/iterate/journey-map.webp" alt="User journey map for Aniket Joshi across four stages: Onboarding, First Post, Engagement, and Retention and Advocacy, split into MVP and to-be-prioritized items" />
</figure>

## User Flow

Every path through the app was checked against the one that matters most: the exit. A student who opens the app, finds nothing reassuring in the feed, and quits before ever posting is the failure case the whole product is designed against.

<div class="flow-diagram">
<div class="flow-row">
<span class="flow-step flow-step--accent">Opens Application</span>
<svg class="flow-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step-group"><span class="flow-step">Log In</span><span class="flow-step">Sign Up</span></span>
<svg class="flow-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Chose interested disciplines</span>
<svg class="flow-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Navigate Home Page</span>
<svg class="flow-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Checks out projects</span>
<svg class="flow-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Checks out events</span>
<svg class="flow-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Makes a list</span>
<svg class="flow-arrow" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Searches a particular project</span>
</div>
<div class="flow-connector flow-connector--end">
<svg viewBox="0 0 12 24" fill="none" aria-hidden="true"><path d="M6 0v18M1 12l5 6 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>
<div class="flow-row">
<span class="flow-step">Checks the demographic of the post</span>
<svg class="flow-arrow flow-arrow--left" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Visits the profile page</span>
<svg class="flow-arrow flow-arrow--left" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Checks friends and incoming notifications</span>
<svg class="flow-arrow flow-arrow--left" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Checks the activity page</span>
<svg class="flow-arrow flow-arrow--left" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Posts a project</span>
<svg class="flow-arrow flow-arrow--left" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Also checks the similar projects</span>
<svg class="flow-arrow flow-arrow--left" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="M0 6h18M12 1l6 5-6 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
<span class="flow-step">Goes through the project</span>
</div>
<div class="flow-connector">
<svg viewBox="0 0 12 24" fill="none" aria-hidden="true"><path d="M6 0v18M1 12l5 6 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>
<div class="flow-row">
<span class="flow-step flow-step--accent">Quits the application</span>
</div>
</div>

## Exploration & Sketches

The first sketch pass mapped every screen the app could plausibly need: profile settings, a full discovery search, a calendar of design events. The wireframe pass cut most of it, keeping only what a first-time, scared-to-post student actually touches before deciding whether to stay.

<figure>
<img src="/images/iterate/sketch.webp" alt="Hand-drawn sketch iterations exploring the Iterate app's core screens and navigation flow" />
<figcaption>Sketch Iterations</figcaption>
</figure>

<figure>
<img src="/images/iterate/wireframe-iterations.webp" alt="Grid of low-fidelity wireframe screens iterating on the feed, search, posting, and profile layouts" />
<figcaption>Wireframe Iterations</figcaption>
</figure>

## Final Design

Six core screens, each one answering a specific fear from the research: posting too early, posting publicly, or posting into silence.

<figure class="figure--white">
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/iterate/onboard-3.webp" alt="Iterate onboarding screen requiring a college email, name, and password to create an account" />
<p class="screen-caption">Onboarding. Signup only accepts a college email, so the feed stays verified-student-only, the one guarantee that made the 82% comfortable enough to post.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/home.webp" alt="Iterate home feed showing Projects, Events, and Lists tabs with a curated gallery of student design work" />
<p class="screen-caption">Home. Projects feed first, tagged in progress or complete so nobody mistakes a sketch for a finished pitch.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/search.webp" alt="Iterate search screen with fields for author name, project name, college name, and discipline name" />
<p class="screen-caption">Search. Filtered by discipline and college, not just keyword, so a student can find peers in their own field instead of scrolling a generic feed.</p>
</li>
</ul>
</figure>

<figure class="figure--white figure--feature">
<p class="figure-eyebrow">The core screen</p>
<img class="figure-img--phone" src="/images/iterate/new-project-b.webp" alt="Iterate new project screen with tags for Ongoing or Complete, an Add People option, and a Publish button" />
<figcaption>New Project. The "Ongoing" tag is the whole point: it's the one feature that turns posting unfinished work from a risk into the expected norm.</figcaption>
</figure>

<figure class="figure--white">
<ul class="screen-grid" style="grid-template-columns: repeat(2, 1fr)">
<li class="screen-item">
<img src="/images/iterate/activity-friends.webp" alt="Iterate activity feed showing friends' recent posts, comments, and collaboration invites" />
<p class="screen-caption">Activity. A plain chronological log, not a notifications dump, because a student checking in on feedback shouldn't have to dig for it.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/profile-aditya.webp" alt="Iterate profile screen showing a student's university, discipline, bio, external portfolio links, and published posts" />
<p class="screen-caption">Profile. Posts, connections, and likes compound here automatically, so the portfolio is a byproduct of using the app, not a separate project.</p>
</li>
</ul>
</figure>

## Style Guide

<figure>
<img src="/images/iterate/design-system-a.webp" alt="Iterate design system: color palette, Poppins typography scale, and button components" />
</figure>

<figure>
<img src="/images/iterate/design-system-b.webp" alt="Iterate design system: primary logo mark, typography weights, accent color values, and logo color variants" />
</figure>

## Retrospective

<ul class="outcome-grid">
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="24" width="56" height="72" rx="6"/><path d="M32 42h32M32 56h32M32 70h20"/><circle cx="86" cy="80" r="20"/><path d="M78 80l6 6 12-14"/></svg>
<h3>Research Only Counts Once It's a Screen</h3>
<p>A survey finding like "students fear harsh criticism" is just a sentence until it becomes a specific UI decision, here, an anonymous-post toggle. The gap between insight and feature is the actual design work.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="26" cy="30" r="9"/><circle cx="94" cy="30" r="9"/><circle cx="60" cy="90" r="9"/><path d="M34 36l20 46M86 36L66 82"/></svg>
<h3>A Flow Diagram Finds the Dead Ends</h3>
<p>Mapping Aniket's journey instead of a generic one surfaced a real exit ramp: a student who checks the feed, finds nothing reassuring, and quits before ever posting. That single path shaped more decisions than the other three personas combined.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 18l34 14v26c0 28-16 46-34 54-18-8-34-26-34-54V32Z"/><path d="M48 60l9 9 16-18"/></svg>
<h3>Safety Is a Structural Decision, Not a Feature</h3>
<p>Verified student emails and anonymous posting aren't bonus features bolted onto a social feed, they're the reason the feed is usable at all for someone like Aniket. Psychological safety has to be designed before the fun parts, not after.</p>
</li>
</ul>
