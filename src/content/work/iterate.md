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

_I know the feeling from the inside. Scroll Behance long enough and every sketch starts to feel embarrassing next to someone else's fully rendered case study, even though that's not a fair comparison to make at 1am. Turns out most design students feel exactly the same way, which is what made this worth building instead of just complaining about._

Iterate started as a college design-course assignment, designed solo end to end: a mobile-first social platform built for that gap, with three decisions at its core.

<ul class="takeaway-list">
<li><strong>A verified student-only network,</strong> not a public feed.</li>
<li><strong>Structured feedback prompts,</strong> not an open text box.</li>
<li><strong>A self-assembling portfolio,</strong> not a highlight reel built after the fact.</li>
</ul>

## Research & Data

Two structured surveys and an interview round with design students, 74 responses total, against a market big enough to make the gap worth closing.

<ul class="stat-grid">
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="30" y="20" width="60" height="84" rx="6"/><path d="M46 20v-6h28v6"/><path d="M42 48h36M42 62h36M42 76h24"/><path d="M78 86l16-16 8 8-16 16Z"/></svg>
<p class="stat-number">74</p>
<p class="stat-label">Research Responses</p>
<p>The baseline every later screen and feature got checked against.</p>
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

Four platforms students already use as workarounds, and the specific job none of them does.

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
<p><strong>Needs</strong> Low-pressure, structured feedback.</p>
</div>
<div class="id-card__barcode" aria-hidden="true"></div>
</div>
</li>
</ul>

Priya wants fast, pointed critique to get job-ready. Aniket is too afraid of judgment to post at all. The feed has to work for someone racing to improve and someone who hasn't found the nerve to start.

## Information Architecture

Onboarding funnels into five primary destinations, each one answering a single question: what's here, who's here, is it safe to post, what happened, and who am I on this app.

<figure class="figure--flush">
<img loading="lazy" decoding="async" src="/images/iterate/information-architecture.webp" width="2000" height="1107" alt="Information architecture diagram: onboarding into Welcome/Login and Create Account, feeding the Iterate app's five primary destinations, Home, Search, Create Project, Activity, and Profile, each broken into its own sub-sections" />
</figure>

## User Flow

Mapped against Aniket, the harder case: if the product works for someone this afraid of posting, it works for everyone less afraid. Two decisions came straight out of this map and made the MVP cut on day one.

<ul class="takeaway-list">
<li><strong>Verified-student signup.</strong> Keeps the feed closed to outsiders.</li>
<li><strong>The "Ongoing" tag.</strong> Makes posting unfinished work the expected norm, not a risk.</li>
</ul>

<figure>
<img loading="lazy" decoding="async" src="/images/iterate/journey-map.webp" width="2000" height="1417" alt="User journey map for Aniket Joshi across four stages, Onboarding, First Post, Engagement, and Retention & Advocacy, mapping touchpoints, actions, pain points, emotions, and opportunities, with an emotional curve rising from cautious to anxious to confident" />
</figure>

That journey was then checked against the exit: a student who opens the app, finds nothing reassuring in the feed, and quits before ever posting. The whole product is designed against that one failure case.

<figure class="figure--flush">
<img loading="lazy" decoding="async" src="/images/iterate/user-flow.webp" width="2000" height="723" alt="User flow diagram: Opens Application leads to Log In or Sign Up, then discipline selection, Home Page, projects, events, lists, and a project search, down into the project itself, then across profile, friends and notifications, activity, posting, and similar projects, ending at Quits the Application" />
</figure>

## Exploration & Sketches

The first sketch pass mapped every screen the app could plausibly need: profile settings, a full discovery search, a calendar of design events. The wireframe pass cut most of it, keeping only what a first-time, scared-to-post student touches before deciding whether to stay.

<div class="figure-row">
<figure>
<img loading="lazy" decoding="async" src="/images/iterate/sketch.webp" width="661" height="680" alt="Hand-drawn sketch iterations exploring the Iterate app's core screens and navigation flow" />
<figcaption>Sketch Iterations</figcaption>
</figure>

<figure>
<img loading="lazy" decoding="async" src="/images/iterate/wireframe-iterations.webp" width="908" height="695" alt="Figma board showing dozens of iterative wireframe screens across onboarding, feed, search, posting, and profile flows" />
<figcaption>Wireframe Iterations</figcaption>
</figure>
</div>

Three decisions came out of those rounds and shaped the final screens.

<ul class="takeaway-list">
<li><strong>Search became its own destination.</strong> Filters moved out of the main feed so browsing stays uncluttered.</li>
<li><strong>One profile template, not custom layouts.</strong> Every student gets the same layout, so the feature ships without per-student design work.</li>
<li><strong>Activity split into three tabs.</strong> Friends, You, and Incoming stay separate, so checking your own activity never means scrolling past everyone else's.</li>
</ul>

## Final Design

The screens across onboarding and the core flow, each one answering a specific fear from the research: posting too early, posting publicly, or posting into silence.

<figure class="figure--white">
<p class="figure-eyebrow">Onboarding</p>
<ul class="screen-grid">
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/onboard-splash.webp" width="417" height="844" alt="Iterate onboarding splash screen with the tagline Discover new perspectives, elevate your work, over a background of the app's own hand-drawn sketches" />
<p class="screen-caption">The first screen is the app's own sketches, not a signup form. It sets the mood before asking for anything.</p>
</li>
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/onboard-login.webp" width="419" height="848" alt="Iterate login screen with options to continue with Google, phone, or email" />
<p class="screen-caption">Multiple ways in, so no single option is a dead end.</p>
</li>
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/onboard-signup.webp" width="418" height="846" alt="Iterate create account screen requiring a name, college email, and password" />
<p class="screen-caption">Signing up needs a college email. That's what keeps the whole feed verified-student-only.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Home</p>
<img loading="lazy" decoding="async" class="figure-img--phone" src="/images/iterate/home.webp" width="577" height="1168" alt="Iterate home feed showing Projects, Events, and Lists tabs with a curated gallery of student design work" />
<figcaption>The feed shows projects first, each tagged in progress or complete, so no one mistakes a sketch for a finished pitch.</figcaption>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Search</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/search.webp" width="495" height="1002" alt="Iterate search screen with fields for author name, project name, college name, and discipline name" />
<p class="screen-caption">Search filters by discipline and college, not just keywords, so a student can find peers in their own field quickly.</p>
</li>
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/search-results.webp" width="496" height="1005" alt="Iterate search results screen with active filter chips for author, project, college, and discipline, plus a similar projects section" />
<p class="screen-caption">Results show the filters used as chips, with similar projects listed below in case the search comes up short.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">New Project</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/new-project-a.webp" width="463" height="933" alt="Iterate new project form with fields for Project Title, Visuals, and Project Bio" />
<p class="screen-caption">Posting is kept to three fields, so starting takes under a minute.</p>
</li>
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/new-project-b.webp" width="463" height="933" alt="Iterate new project screen with tags for Ongoing or Complete, an Add People option, and a Publish button" />
<p class="screen-caption">The "Ongoing" tag is the key part. It makes posting unfinished work expected, not risky.</p>
</li>
</ul>
<figcaption>A short form, simple enough to fill out before you second-guess posting at all.</figcaption>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Activity, three tabs</p>
<ul class="screen-grid">
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/activity-friends.webp" width="421" height="850" alt="Iterate activity feed, Friends tab, showing friends' recent posts, comments, and collaboration invites" />
<p class="screen-caption">Friends shows a simple timeline of what people are up to, not a pile of notifications.</p>
</li>
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/activity-you.webp" width="422" height="850" alt="Iterate activity feed, You tab, showing the student's own recent posts, comments, and collaborations" />
<p class="screen-caption">You shows that same timeline, filtered down to just your own activity.</p>
</li>
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/activity-incoming.webp" width="421" height="850" alt="Iterate activity feed, Incoming tab, showing connection requests and messages sent to the student" />
<p class="screen-caption">Incoming keeps requests and messages separate, so one doesn't get buried in the other.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Profile, any student</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/profile-aditya.webp" width="429" height="864" alt="Iterate profile screen showing Aditya Nair's university, discipline, bio, external portfolio links, and published posts" />
<p class="screen-caption">Posts, connections, and likes build up here automatically, just from using the app.</p>
</li>
<li class="screen-item">
<img loading="lazy" decoding="async" src="/images/iterate/profile-arka.webp" width="427" height="859" alt="Iterate profile screen for a different student, Arka Gupta, showing the same layout with their own bio and posts" />
<p class="screen-caption">Every student gets this same layout filled in with their own work. No one designs their own profile.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Project Detail</p>
<img loading="lazy" decoding="async" class="figure-img--phone" src="/images/iterate/project-detail.webp" width="428" height="864" alt="Iterate project detail screen for Solace, a conceptual smart companion by Arka Gupta, tagged Ongoing" />
<figcaption>Opening a project keeps its "Ongoing" tag visible, so that context carries through from the feed to the profile to the post itself.</figcaption>
</figure>

## Style Guide

<figure>
<img loading="lazy" decoding="async" src="/images/iterate/design-system.webp" width="881" height="2000" alt="Iterate design system: color palette, Poppins typography scale, button and navigation bar components, primary logo mark, typography weights, and logo color variants" />
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
<p>Mapping Aniket's journey instead of a generic one surfaced a real exit ramp: a student who checks the feed, finds nothing reassuring, and quits before ever posting. That one path shaped more of the final design than any other insight from the research.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 18l34 14v26c0 28-16 46-34 54-18-8-34-26-34-54V32Z"/><path d="M48 60l9 9 16-18"/></svg>
<h3>Safety Is a Structural Decision, Not a Feature</h3>
<p>Verified student emails make the feed usable at all for someone like Aniket. Psychological safety has to come before the fun parts, not after them.</p>
</li>
</ul>
