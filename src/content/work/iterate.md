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

Iterate started as a college design-course assignment, designed solo end to end: a mobile-first social platform built for that gap, with a verified student-only network instead of a public feed, structured feedback prompts instead of an open text box, and a portfolio that assembles itself from the process instead of a highlight reel built after the fact.

## Research & Data

Two structured surveys and an interview round with design students, 74 responses total, against a market big enough to make the gap worth closing.

<ul class="stat-grid">
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
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 90h80"/><path d="M30 90V60l16-10 16 14 16-20 12 10v36"/><circle cx="46" cy="50" r="5"/><circle cx="78" cy="34" r="5"/></svg>
<p class="stat-number">$400B+</p>
<p class="stat-label">EdTech Market</p>
<p>The size of the industry a dedicated student-design platform is missing from entirely.</p>
</li>
</ul>

## Competitor Benchmarking

Four platforms students already use as workarounds, and the specific job none of them actually does.

<ul class="benchmark-grid">
<li class="benchmark-card">
<div class="benchmark-header">
<svg class="benchmark-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true" stroke="#1769FF" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="40" height="40" rx="10"/><path d="M18 14v20"/><path d="M18 14h6a5 5 0 0 1 0 10h-6"/><path d="M18 24h7a5 5 0 0 1 0 10h-7"/></svg>
<p class="benchmark-name">Behance</p>
</div>
<p class="benchmark-purpose">A professional portfolio platform for in-depth, finished projects.</p>
<div class="benchmark-splits">
<ul class="benchmark-split benchmark-split--strength">
<li>Industry standard</li>
<li>High-quality, comprehensive</li>
</ul>
<ul class="benchmark-split benchmark-split--weakness">
<li>Highly intimidating</li>
<li>Superficial feedback</li>
<li>Not a student community</li>
</ul>
</div>
</li>
<li class="benchmark-card">
<div class="benchmark-header">
<svg class="benchmark-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true" stroke="#EA4C89" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="20"/><path d="M6 18c8 3 26 3 34 0"/><path d="M4 28c10 2 28 6 38 14"/><path d="M19 5c6 8 9 24 6 39"/></svg>
<p class="benchmark-name">Dribbble</p>
</div>
<p class="benchmark-purpose">A design community for sharing quick visual "shots."</p>
<div class="benchmark-splits">
<ul class="benchmark-split benchmark-split--strength">
<li>Massive reach, strong engagement</li>
<li>Trend-focused</li>
</ul>
<ul class="benchmark-split benchmark-split--weakness">
<li>Popularity-contest culture</li>
<li>Shallow feedback, lacks depth</li>
</ul>
</div>
</li>
<li class="benchmark-card">
<div class="benchmark-header">
<svg class="benchmark-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true" stroke="#E1306C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="38" height="38" rx="12"/><circle cx="24" cy="24" r="8"/><circle cx="33" cy="15" r="2" fill="#E1306C" stroke="none"/></svg>
<p class="benchmark-name">Instagram</p>
</div>
<p class="benchmark-purpose">General social media, used for marketing and branding.</p>
<div class="benchmark-splits">
<ul class="benchmark-split benchmark-split--strength">
<li>Quick, simple</li>
<li>Effortless sharing</li>
</ul>
<ul class="benchmark-split benchmark-split--weakness">
<li>Not design-specific</li>
<li>Algorithmic pressure</li>
<li>Poor for portfolios</li>
</ul>
</div>
</li>
<li class="benchmark-card">
<div class="benchmark-header">
<svg class="benchmark-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true" stroke="#FF4500" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 18v-7"/><path d="M24 11c0-1.7 1.4-3 3-3"/><circle cx="29" cy="7" r="2" fill="#FF4500" stroke="none"/><circle cx="24" cy="29" r="11"/><circle cx="13" cy="25" r="4"/><circle cx="35" cy="25" r="4"/><circle cx="19" cy="29" r="1.4" fill="#FF4500" stroke="none"/><circle cx="29" cy="29" r="1.4" fill="#FF4500" stroke="none"/><path d="M19 33c3 2 7 2 10 0"/></svg>
<p class="benchmark-name">Reddit</p>
</div>
<p class="benchmark-purpose">A community forum for anonymous feedback.</p>
<div class="benchmark-splits">
<ul class="benchmark-split benchmark-split--strength">
<li>Honest, direct feedback</li>
<li>Low pressure</li>
</ul>
<ul class="benchmark-split benchmark-split--weakness">
<li>Inconsistent quality</li>
<li>Clunky interface</li>
<li>No portfolio features</li>
</ul>
</div>
</li>
</ul>

## What Students Actually Said

Affinity-mapped straight from the 74 survey and interview responses, before any of it got turned into a feature.

<ul class="affinity-board">
<li class="affinity-column">
<p class="affinity-heading">Why They Don't Post</p>
<p class="affinity-chip">"Standards are too high."</p>
<p class="affinity-chip">Fear of harsh criticism, trolls.</p>
<p class="affinity-chip">More focus on pretty work than the thought process.</p>
</li>
<li class="affinity-column">
<p class="affinity-heading">Why They Would</p>
<p class="affinity-chip">Get constructive feedback.</p>
<p class="affinity-chip">Build a better portfolio.</p>
<p class="affinity-chip">Learn from more experienced people.</p>
</li>
<li class="affinity-column">
<p class="affinity-heading">Current App Frustrations</p>
<p class="affinity-chip">Fear of plagiarism, no way to protect work.</p>
<p class="affinity-chip">Instagram isn't convenient for sharing process.</p>
<p class="affinity-chip">Discord/WhatsApp groups have no visibility.</p>
</li>
<li class="affinity-column">
<p class="affinity-heading">Features They Wanted</p>
<p class="affinity-chip">Filters for finding a specific kind of work.</p>
<p class="affinity-chip">Easy to post process, not just final work.</p>
<p class="affinity-chip">Connections for future collaborations.</p>
</li>
</ul>

## User Personas

<ul class="persona-grid">
<li class="persona-card persona-card--iterate persona-card--id">
<div class="id-card__band">
<span class="id-card__hole" aria-hidden="true"></span>
</div>
<div class="id-card__body">
<span class="persona-portrait persona-portrait--sketch" role="img" aria-label="Sketch illustration representing Priya Sharma">
<svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="42" r="17"/><path d="M44 32c4-9 28-9 32 0"/><path d="M43 30c-6 10-8 26-3 42"/><path d="M77 30c6 10 8 26 3 42"/><path d="M26 100c0-20 15-32 34-32s34 12 34 32"/></svg>
</span>
<p class="persona-eyebrow">UI/UX Student · NID</p>
<p class="persona-name">Priya Sharma</p>
<p class="id-card__meta"><span>No. 2025-014</span><span>Issued 2025</span></p>
<p class="persona-role">"I design to be the best. Feedback is the fastest way to get there."</p>
<div class="persona-traits">
<p><strong>Wants</strong> A job-ready portfolio.</p>
<p><strong>Needs</strong> Specific, actionable critique.</p>
</div>
<div class="id-card__barcode" aria-hidden="true"></div>
</div>
</li>
<li class="persona-card persona-card--iterate persona-card--id">
<div class="id-card__band">
<span class="id-card__hole" aria-hidden="true"></span>
</div>
<div class="id-card__body">
<span class="persona-portrait persona-portrait--sketch" role="img" aria-label="Sketch illustration representing Aniket Joshi">
<svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="44" r="17"/><path d="M43 37c2-11 32-11 34 0"/><circle cx="52" cy="46" r="6.5"/><circle cx="68" cy="46" r="6.5"/><path d="M58.5 46h3"/><path d="M39 44h6.5"/><path d="M74.5 44h6.5"/><path d="M26 100c0-20 15-32 34-32s34 12 34 32"/></svg>
</span>
<p class="persona-eyebrow">Graphic Design Student · MIT-WPU</p>
<p class="persona-name">Aniket Joshi</p>
<p class="id-card__meta"><span>No. 2025-027</span><span>Issued 2025</span></p>
<p class="persona-role">"I have so many ideas in my head, I just wish I had the confidence to share them."</p>
<div class="persona-traits">
<p><strong>Wants</strong> Confidence to post publicly.</p>
<p><strong>Needs</strong> Low-pressure, anonymous feedback.</p>
</div>
<div class="id-card__barcode" aria-hidden="true"></div>
</div>
</li>
</ul>

Priya wants fast, pointed critique to get job-ready. Aniket is too afraid of judgment to post at all. The feed has to work for someone racing to improve and someone who hasn't found the nerve to start.

## Information Architecture

Onboarding funnels into five primary destinations, each one answering a single question: what's here, who's here, is it safe to post, what happened, and who am I on this app.

<figure class="figure--flush">
<img src="/images/iterate/information-architecture.webp" alt="Information architecture diagram: onboarding into Welcome/Login and Create Account, feeding the Iterate app's five primary destinations, Home, Search, Create Project, Activity, and Profile, each broken into its own sub-sections" />
</figure>

## User Flow

Mapped against Aniket specifically, since he's the harder case: if the product works for someone this afraid of posting, it works for everyone less afraid. Two decisions came straight out of this map, verified-student signup and anonymous posting, both load-bearing enough to make the MVP cut on day one.

<figure>
<img src="/images/iterate/journey-map.webp" alt="User journey map for Aniket Joshi across four stages: Onboarding, First Post, Engagement, and Retention and Advocacy, split into MVP and to-be-prioritized items" />
</figure>

That journey was then checked against the path that matters most: the exit. A student who opens the app, finds nothing reassuring in the feed, and quits before ever posting is the failure case the whole product is designed against.

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
<img src="/images/iterate/wireframe-iterations.webp" alt="Figma board showing dozens of iterative wireframe screens across onboarding, feed, search, posting, and profile flows" />
<figcaption>Wireframe Iterations</figcaption>
</figure>

## Final Design

The screens across onboarding and the core flow, each one answering a specific fear from the research: posting too early, posting publicly, or posting into silence.

<figure class="figure--white">
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/iterate/onboard-splash.webp" alt="Iterate onboarding splash screen with the tagline Discover new perspectives, elevate your work, over a background of the app's own hand-drawn sketches" />
<p class="screen-caption">Onboarding opens on the mood, not a form. The background is the sketches themselves, so the app's identity reads as a process before anyone logs in.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/onboard-login.webp" alt="Iterate login screen with options to continue with Google, phone, or email" />
<p class="screen-caption">Three login paths, Google, phone, or email, so the account choice doesn't become the first point of friction.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/onboard-signup.webp" alt="Iterate create account screen requiring a name, college email, and password" />
<p class="screen-caption">Signup only accepts a college email, so the feed stays verified-student-only, the one guarantee that made the 82% comfortable enough to post.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/iterate/home.webp" alt="Iterate home feed showing Projects, Events, and Lists tabs with a curated gallery of student design work" />
<p class="screen-caption">Home. Projects feed first, tagged in progress or complete so nobody mistakes a sketch for a finished pitch.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/search.webp" alt="Iterate search screen with fields for author name, project name, college name, and discipline name" />
<p class="screen-caption">Search. Filtered by discipline and college, not just keyword, so a student can find peers in their own field instead of scrolling a generic feed.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/search-results.webp" alt="Iterate search results screen with active filter chips for author, project, college, and discipline, plus a similar projects section" />
<p class="screen-caption">Results stay tied to the filters that produced them, shown as chips, and surface similar projects underneath so a dead-end search still leads somewhere.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img src="/images/iterate/new-project-a.webp" alt="Iterate new project form with fields for Project Title, Visuals, and Project Bio" />
<p class="screen-caption">Title, visuals, and a bio field, nothing else required to start a post.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/new-project-b.webp" alt="Iterate new project screen with tags for Ongoing or Complete, an Add People option, and a Publish button" />
<p class="screen-caption">The "Ongoing" tag is the whole point: it's the one feature that turns posting unfinished work from a risk into the expected norm.</p>
</li>
</ul>
<figcaption>New Project. A short form you can clear in the time it takes to find the "Ongoing" tag.</figcaption>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Activity, three tabs</p>
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/iterate/activity-friends.webp" alt="Iterate activity feed, Friends tab, showing friends' recent posts, comments, and collaboration invites" />
<p class="screen-caption">Friends. A plain chronological log, not a notifications dump, because a student checking in on feedback shouldn't have to dig for it.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/activity-you.webp" alt="Iterate activity feed, You tab, showing the student's own recent posts, comments, and collaborations" />
<p class="screen-caption">You. The same log, filtered to your own actions, so checking what you've posted doesn't mean scrolling past everyone else's.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/activity-incoming.webp" alt="Iterate activity feed, Incoming tab, showing connection requests and messages sent to the student" />
<p class="screen-caption">Incoming. Connection requests and messages kept separate from the activity log, so a request doesn't get lost in the scroll.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Profile, any student</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img src="/images/iterate/profile-aditya.webp" alt="Iterate profile screen showing Aditya Nair's university, discipline, bio, external portfolio links, and published posts" />
<p class="screen-caption">Profile. Posts, connections, and likes compound here automatically, so the portfolio is a byproduct of using the app, not a separate project.</p>
</li>
<li class="screen-item">
<img src="/images/iterate/profile-arka.webp" alt="Iterate profile screen for a different student, Arka Gupta, showing the same layout with their own bio and posts" />
<p class="screen-caption">Same layout, any student. The profile is a template the app fills in, not a page every student builds from scratch.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<img class="figure-img--phone" src="/images/iterate/project-detail.webp" alt="Iterate project detail screen for Solace, a conceptual smart companion by Arka Gupta, tagged Ongoing" />
<figcaption>Project Detail. Opened from a profile, the "Ongoing" tag follows the project everywhere it's shown, so the context never gets lost between the feed, the profile, and the post itself.</figcaption>
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
<p>A survey finding like "students fear harsh criticism" is just a sentence until it becomes a specific UI decision, here, a college-email signup gate that keeps the whole feed verified-student-only. The gap between insight and feature is the actual design work.</p>
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
