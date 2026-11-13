---
title: NeoOS
description: A mobile UI made for neurodivergent users.
cover: ./assets/neoos-cover.png
coverAlt: "TODO: describe the NeoOS screen shown here"
role: Product Designer & UX Researcher
timeline: "2026"
tools: [Figma]
services: [Mobile UI, Accessibility] # TODO — replace with real tags
accentColor: "#2E9E6B"
order: 3
featured: true
---

## Product Context

Most phones assume a steady nervous system and a working short-term memory: same taps, same steps, same pace, every time. That assumption breaks down for a lot of neurodivergent people on an ordinary day, and the phone has no idea anything changed. "Neurodivergent" here spans four conditions with very different daily friction: autism, dyspraxia, ADHD, and dyslexia or dyscalculia.

The project started from its sharpest case: autistic teenagers moving into adulthood and independence. Around age 15–16, parents and schools pull back the hand-holding fast, expecting a teen to self-manage homework, schedules, and daily routines with little warning. What doesn't happen is an actual transition. Task paralysis on one side, nagging and micromanaging on the other, and neither builds the independence everyone was hoping for.

NeoOS is a custom mobile interface built around that transition instead of a generic "accessible phone" brief, meant to be something a teen keeps using well past adolescence rather than a tool they age out of. It trades loud alarms and one-size UI for quiet visual structure a person can run on their own, with caregiver updates that confirm without needing a follow-up call.

## Research & Data

The research ran an AEIOU pass, activities, environments, interactions, objects, and users, alongside national statistics and primary visits to three psychiatry and therapy clinics in Ahmedabad, so the design would be grounded in clinical practice, not just survey data.

<ul class="stat-grid">
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="44" r="16"/><path d="M16 96c0-18 11-30 24-30s24 12 24 30"/><circle cx="82" cy="50" r="12"/><path d="M62 96c2-14 10-24 20-24s20 10 22 24"/></svg>
<p class="stat-number">1 in 8</p>
<p class="stat-label">Children in India with a neurodevelopmental condition</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="60" r="40"/><path d="M44 54v.1M76 54v.1" stroke-width="7"/><path d="M44 78h32"/></svg>
<p class="stat-number">85%</p>
<p class="stat-label">Autistic youth who can't name what they're feeling until it's already too late</p>
</li>
<li class="stat-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="64" r="36"/><path d="M60 40v24l18 12"/><path d="M42 22l9 9M78 22l-9 9"/></svg>
<p class="stat-number">15–16</p>
<p class="stat-label">The age hand-holding stops, almost overnight</p>
</li>
</ul>

Beyond the numbers, I sat in on sessions at Zen Mind, Akshar Psychiatric Clinic, and Genius Brain, three clinics in Ahmedabad, to hear how clinicians talk about this transition with families, not just how it reads in a paper.

<ul class="takeaway-list">
<li><strong>Teens quietly drop tools that feel juvenile.</strong> An assistive app that looks like it was built for a younger kid gets uninstalled within weeks, no matter how well it works.</li>
<li><strong>Masking all day leaves nothing left for home.</strong> A teen who holds it together at school often comes home and falls apart, which parents read as defiance instead of exhaustion.</li>
<li><strong>Reminders turn into nagging loops.</strong> A parent repeats the same instruction enough times that it stops being information and starts being noise both people tune out.</li>
</ul>

## User Personas

<ul class="persona-grid">
<li class="persona-card persona-card--neo">
<div class="persona-neo__portrait" style="--persona-tint: #C6DBF0">
<p class="persona-neo__tag">A high school student diagnosed with ADHD</p>
<svg class="persona-neo__figure" viewBox="0 0 200 200" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><circle cx="100" cy="76" r="38"/><path d="M62 58a38 38 0 0 1 76 0"/><rect x="48" y="66" width="20" height="30" rx="10"/><rect x="132" y="66" width="20" height="30" rx="10"/><path d="M88 108v10M112 108v10"/><path d="M38 186c0-42 28-66 62-66s62 24 62 66"/><path d="M64 135c-12-15-16-30-12-45"/><circle cx="50" cy="90" r="7"/></svg>
</div>
<div class="persona-neo__body">
<div class="persona-neo__head">
<p class="persona-name">Aarav</p>
<p class="persona-neo__age">16 years old</p>
</div>
<div class="persona-neo__lists">
<div class="persona-neo__legend">
<span class="persona-neo__legend-item persona-neo__legend-item--need">Needs</span>
<span class="persona-neo__legend-item persona-neo__legend-item--friction">Friction</span>
</div>
<div class="persona-neo__chip-row">
<span class="persona-neo__chip persona-neo__chip--need">A calm screen</span>
<span class="persona-neo__chip persona-neo__chip--friction">Long texts stall him</span>
<span class="persona-neo__chip persona-neo__chip--need">Routines that don't need repeating</span>
<span class="persona-neo__chip persona-neo__chip--friction">Rigid schedules spike anxiety</span>
</div>
</div>
</div>
</li>
<li class="persona-card persona-card--neo">
<div class="persona-neo__portrait" style="--persona-tint: #FCE3B8">
<p class="persona-neo__tag">Working Parent</p>
<svg class="persona-neo__figure" viewBox="0 0 200 200" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><circle cx="100" cy="78" r="36"/><path d="M66 58c0-24 68-24 68 0"/><circle cx="100" cy="40" r="13"/><path d="M38 186c0-42 28-66 62-66s62 24 62 66"/><path d="M126 150c0-16 6-30 16-38"/><circle cx="142" cy="113" r="7"/><rect x="133" y="82" width="18" height="30" rx="3"/><path d="M137 92h10"/></svg>
</div>
<div class="persona-neo__body">
<div class="persona-neo__head">
<p class="persona-name">Sunita</p>
<p class="persona-neo__age">44 years old</p>
</div>
<div class="persona-neo__lists">
<div class="persona-neo__legend">
<span class="persona-neo__legend-item persona-neo__legend-item--need">Needs</span>
<span class="persona-neo__legend-item persona-neo__legend-item--friction">Friction</span>
</div>
<div class="persona-neo__chip-row">
<span class="persona-neo__chip persona-neo__chip--need">Proof the reminder landed</span>
<span class="persona-neo__chip persona-neo__chip--friction">Repeating herself is the only fix</span>
<span class="persona-neo__chip persona-neo__chip--need">Tools that build independence</span>
<span class="persona-neo__chip persona-neo__chip--friction">Every step back feels risky</span>
</div>
</div>
</div>
</li>
</ul>

## Stakeholder Mapping

Tap anyone in the graph to see how they connect: the teen sits at the center with absolute veto power, and the three curved lines on the right show relationships that run independent of him, parents coordinating with therapists, school, and extended family.

<div class="stakeholder-graph">
<div class="stakeholder-graph__canvas">
<svg class="stakeholder-graph__lines" viewBox="0 0 800 500" aria-hidden="true">
<line class="graph-edge is-highlighted" data-pair="teen therapists" x1="400" y1="250" x2="400" y2="60" stroke-width="3"/>
<line class="graph-edge is-highlighted" data-pair="teen parents" x1="400" y1="250" x2="590" y2="250" stroke-width="4.5"/>
<line class="graph-edge is-highlighted" data-pair="teen teachers" x1="400" y1="250" x2="400" y2="440" stroke-width="2.5"/>
<line class="graph-edge is-highlighted" data-pair="teen classmates" x1="400" y1="250" x2="210" y2="250" stroke-width="3.5"/>
<path class="graph-edge graph-edge--arc" data-pair="parents therapists" d="M400,60 Q590,60 590,250" fill="none" stroke-width="2.5" stroke-dasharray="7 7"/>
<path class="graph-edge graph-edge--arc" data-pair="parents teachers" d="M590,250 Q590,440 400,440" fill="none" stroke-width="2.5" stroke-dasharray="7 7"/>
<path class="graph-edge graph-edge--arc" data-pair="parents extended-family" d="M590,250 Q690,320 720,390" fill="none" stroke-width="2" stroke-dasharray="7 7"/>
</svg>
<button type="button" class="graph-node graph-node--hub is-active" style="left:50%;top:50%" data-id="teen" aria-pressed="true" data-name="The teen" data-tier="Absolute veto power" data-detail="Nothing ships if he won't use it. Every other opinion here is downstream of that veto.">
<span class="graph-node__circle" style="--node-tint:#C6DBF0"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="40" r="20"/><path d="M26 100c0-22 15-36 34-36s34 14 34 36"/></svg></span>
<span class="graph-node__label">The teen</span>
</button>
<button type="button" class="graph-node" style="left:50%;top:12%" data-id="therapists" aria-pressed="false" data-name="Therapists & psychiatrists" data-tier="Clinical evaluator, referral gatekeeper" data-detail="Whether a diagnosis or referral happens at all usually runs through them first.">
<span class="graph-node__circle" style="--node-tint:#E8D0EE"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M60 18l34 14v26c0 28-16 46-34 54-18-8-34-26-34-54V32Z"/><path d="M48 60l9 9 16-18"/></svg></span>
<span class="graph-node__label">Therapists</span>
</button>
<button type="button" class="graph-node" style="left:73.75%;top:50%" data-id="parents" aria-pressed="false" data-name="Parents" data-tier="Payer, purchaser, domestic enabler" data-detail="They pay for it, set it up, and absorb the guilt and burnout if it fails. The household runs through them.">
<span class="graph-node__circle" style="--node-tint:#FCE3B8"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="38" r="16"/><circle cx="82" cy="40" r="14"/><path d="M14 98c0-18 12-30 28-30 10 0 18 4 23 11"/><path d="M58 98c2-16 12-26 27-26s25 10 27 26"/></svg></span>
<span class="graph-node__label">Parents</span>
</button>
<button type="button" class="graph-node" style="left:50%;top:88%" data-id="teachers" aria-pressed="false" data-name="Teachers & school staff" data-tier="Contextual enforcer" data-detail="They apply whatever rules the school already has, nothing more.">
<span class="graph-node__circle" style="--node-tint:#E4E4E0"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="30" width="80" height="56" rx="6"/><path d="M20 46h80"/><path d="M40 30v-8M80 30v-8"/></svg></span>
<span class="graph-node__label">Teachers</span>
</button>
<button type="button" class="graph-node" style="left:26.25%;top:50%" data-id="classmates" aria-pressed="false" data-name="Classmates" data-tier="Indirect social filter" data-detail="They decide whether using this looks normal or makes him a target.">
<span class="graph-node__circle" style="--node-tint:#CCE8CD"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="36" r="11"/><path d="M14 78c0-13 8-22 18-22s18 9 18 22"/><circle cx="88" cy="36" r="11"/><path d="M70 78c0-13 8-22 18-22s18 9 18 22"/><circle cx="60" cy="52" r="13"/><path d="M38 102c0-15 10-26 22-26s22 11 22 26"/></svg></span>
<span class="graph-node__label">Classmates</span>
</button>
<button type="button" class="graph-node" style="left:90%;top:78%" data-id="extended-family" aria-pressed="false" data-name="Extended family" data-tier="Domestic social pressure" data-detail="Rarely involved directly, but the pressure they put on parents about what's 'normal' still reaches the teen secondhand.">
<span class="graph-node__circle" style="--node-tint:#F2F4F7"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 58L60 26l40 32"/><rect x="34" y="58" width="52" height="38" rx="4"/><rect x="52" y="76" width="16" height="20"/></svg></span>
<span class="graph-node__label">Family</span>
</button>
</div>
<div class="stakeholder-graph__detail">
<p class="stakeholder-graph__detail-name"><span class="stakeholder-graph__detail-name-text">The teen</span><span class="stakeholder-graph__detail-tier">Absolute veto power</span></p>
<p class="stakeholder-graph__detail-text">Nothing ships if he won't use it. Every other opinion here is downstream of that veto.</p>
</div>
</div>

## User Flow

Onboarding splits into the OS layer and two native apps, picked for the two complaints that came up most in research. Focus breaks an overwhelming workload into one step at a time, against task paralysis. Inbox turns chaotic chat threads into short summaries, against working-memory overload and notification anxiety. Each loops back to the home screen on its own, instead of one long path a teen has to retrace every time.

<figure class="figure--flush">
<img src="/images/neoos/user-flow.webp" alt="NeoOS user flow diagram: Installs UI leads through Onboarding (Information, Focus, Feel), font choice, and home screen setup, then branches into the Focus app loop (current task, timer, full day tasks) and the Inbox app loop (message stack, AI summary or full messages, reply), both returning to the home screen" />
</figure>

## Exploration & Sketches

The first pass was paper: onboarding, home layout, app folders, and the quick panel, worked out by hand before any screen touched Figma.

<figure>
<img src="/images/neoos/sketch-board.webp" alt="Hand-drawn sketch sheet exploring NeoOS onboarding, home layout, app folders, quick panel, Focus app, and Inbox app screens, with annotations on thumb-zone ergonomics and widget placement" />
</figure>

That structure carried almost unchanged into grayscale wireframes, then into the pastel UI, color and polish added last rather than steering the layout.

<figure>
<img src="/images/neoos/wireframe-board.webp" alt="Mid-fidelity wireframe board showing NeoOS onboarding, settings, Focus app, Inbox app, and home screen variants progressing from grayscale boxes to colored mockups" />
</figure>

<ul class="takeaway-list">
<li><strong>Preference over assumption, settled before any screen existed.</strong> Research showed no two neurodivergent profiles take in information the same way, so the first sketch asked a question instead of picking one default. That single decision shaped the rest of the OS.</li>
<li><strong>Thumb-zone placement, to cut the physical cost of finding an app.</strong> A margin note reading "apps should be near the thumb" became the fixed layout behind the App Drawer and Quick Panel, so using the phone never takes more effort or reach than it has to.</li>
<li><strong>One task, one ring, solved before a single color was picked.</strong> The Focus app's single-card-per-task structure and its isolating timer ring, the actual answer to task paralysis, were locked in grayscale. Color and polish only arrived after the problem itself was already handled on paper.</li>
</ul>

## Final Design

Every screen below answers a specific piece of the research: an abrupt support drop at 15–16, task paralysis, working-memory overload, a teen who struggles to name what he's feeling, and a parent who only wants confirmation without a follow-up call.

<figure class="figure--white">
<div class="figure-header">
<p class="figure-eyebrow">Onboarding</p>
<button type="button" class="darkmode-toggle" data-darkmode-toggle aria-pressed="false">
<svg class="darkmode-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/></svg>
<span>Dark mode</span>
</button>
</div>
<img class="figure-img--phone" src="/images/neoos/onboard-landing.webp" data-light="/images/neoos/onboard-landing.webp" data-dark="/images/neoos/onboard-landing-dark.webp" alt="NeoOS onboarding landing screen reading Say hi to NeoOS, your phone built for the way you think, with a Get Started button" />
<figcaption>The first screen just says hello and sets expectations in one line. No form, no questions yet.</figcaption>
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/neoos/onboard-info.webp" data-light="/images/neoos/onboard-info.webp" data-dark="/images/neoos/onboard-info-dark.webp" alt="NeoOS onboarding preference screen asking How would you like to see information, with options Visual, Simple, Spoken, and Mixed" />
<p class="screen-caption">How to see information: visual, simple, spoken, or mixed.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/onboard-focus.webp" data-light="/images/neoos/onboard-focus.webp" data-dark="/images/neoos/onboard-focus-dark.webp" alt="NeoOS onboarding preference screen asking How do you like to focus, with options One Thing, Steps, Progress, and My Way" />
<p class="screen-caption">How to break down tasks: one thing at a time, in steps, by progress, or left open-ended.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/onboard-feel.webp" data-light="/images/neoos/onboard-feel.webp" data-dark="/images/neoos/onboard-feel-dark.webp" alt="NeoOS onboarding preference screen asking How do you want the screen to feel, with options Calm, Clear, Fast, and Custom" />
<p class="screen-caption">How the screen should feel: calm, clear, fast, or custom. Naming an emotion is often the hardest part of regulating it, so this asks for a texture instead of a word.</p>
</li>
</ul>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img src="/images/neoos/onboard-font.webp" data-light="/images/neoos/onboard-font.webp" data-dark="/images/neoos/onboard-font-dark.webp" alt="NeoOS font selection screen offering Atkinson Hyperlegible, Lexend, and OpenDyslexic" />
<p class="screen-caption">The font list includes Atkinson Hyperlegible and OpenDyslexic alongside the usual options, picked for reading speed, not branding.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/onboard-ready.webp" data-light="/images/neoos/onboard-ready.webp" data-dark="/images/neoos/onboard-ready-dark.webp" alt="NeoOS loading screen reading NeoOS is ready for you" />
<p class="screen-caption">Three questions and a font choice, and onboarding is already done. No account to set up first.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Lock Screen</p>
<img class="figure-img--phone" src="/images/neoos/lock-screen.webp" alt="NeoOS lock screen with soft bento widgets for now-playing media, unread messages, and task completion" />
<figcaption>Notifications sit in soft, low-contrast bento widgets instead of a stacked list of banners, so nothing fights for attention the moment the screen wakes up.</figcaption>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Home Screen</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<div class="screen-annotate">
<p class="screen-annotate__tag">Widgets, for a glance ↓</p>
<div class="screen-annotate__frame">
<img src="/images/neoos/home-screen-a.webp" alt="NeoOS home screen with widgets for weather, date, music, and messages above a grid of app icons" />
<span class="screen-annotate__line" style="top:49%"></span>
</div>
<p class="screen-annotate__tag">↑ Apps, in thumb's reach</p>
</div>
<p class="screen-caption">The default pick: weather, date, music, messages.</p>
</li>
<li class="screen-item">
<div class="screen-annotate">
<p class="screen-annotate__tag">Widgets, swapped ↓</p>
<div class="screen-annotate__frame">
<img src="/images/neoos/home-screen-b.webp" alt="NeoOS home screen variant with a task-breakdown widget showing Morning routine steps in place of the media and calendar widgets" />
<span class="screen-annotate__line" style="top:49%"></span>
</div>
<p class="screen-annotate__tag">↑ Apps, unchanged</p>
</div>
<p class="screen-caption">A task-first pick: the day's routine instead.</p>
</li>
</ul>
<figcaption>Same split either way. The sketch note behind it just said "apps should be near the thumb."</figcaption>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">App Drawer</p>
<img class="figure-img--phone" src="/images/neoos/app-drawer.webp" alt="NeoOS app drawer with apps sorted into four color-coded folders: System and Navigation, Media and Tools, Focus and Productivity, and Social and Communication" />
<figcaption>Apps sort into four color-coded groups by what they're for, not alphabetically, so finding the right one doesn't take a search.</figcaption>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Quick Panel</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img src="/images/neoos/quick-panel-inactive.webp" alt="NeoOS quick settings panel with Focus Mode, Sensory Shield, Bluetooth, and a task routine toggle all shown muted and inactive" />
<p class="screen-caption">Settings start muted and grey.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/quick-panel-active.webp" alt="NeoOS quick settings panel with the same toggles now shown in full color once enabled" />
<p class="screen-caption">Turning one on shifts its tile to full color right away, so the state of Focus Mode or Sensory Shield is never a guess.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<div class="figure-header">
<p class="figure-eyebrow">Focus App</p>
<button type="button" class="darkmode-toggle" data-darkmode-toggle aria-pressed="false">
<svg class="darkmode-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/></svg>
<span>Dark mode</span>
</button>
</div>
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/neoos/focus-tasks.webp" data-light="/images/neoos/focus-tasks.webp" data-dark="/images/neoos/focus-tasks-dark.webp" alt="NeoOS Focus app task stack showing Prep for School broken into three sub-steps with a progress count" />
<p class="screen-caption">The day's task opens as a single card with its own sub-steps checked off one at a time, not a long list competing for attention.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/focus-timer.webp" data-light="/images/neoos/focus-timer.webp" data-dark="/images/neoos/focus-timer-dark.webp" alt="NeoOS Focus app countdown timer for the current task, showing 14 minutes 55 seconds remaining on a ring" />
<p class="screen-caption">Isolating one task behind its own countdown ring keeps attention on it without needing a separate timer app.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/focus-day-glance.webp" data-light="/images/neoos/focus-day-glance.webp" data-dark="/images/neoos/focus-day-glance-dark.webp" alt="NeoOS Focus app Day at a Glance view with Morning, Afternoon, Evening, and Night blocks color-coded by time of day" />
<p class="screen-caption">Mapping the day into four color-coded blocks, morning through night, gives a sense of the whole day without reading a full schedule.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<div class="figure-header">
<p class="figure-eyebrow">Inbox App</p>
<button type="button" class="darkmode-toggle" data-darkmode-toggle aria-pressed="false">
<svg class="darkmode-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"/></svg>
<span>Dark mode</span>
</button>
</div>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img src="/images/neoos/inbox-stack.webp" data-light="/images/neoos/inbox-stack.webp" data-dark="/images/neoos/inbox-stack-dark.webp" alt="NeoOS Inbox app message stack grouped by School, Parents, Work, Sports, and Library, with stack size showing unread count" />
<p class="screen-caption">Messages stack by sender, with the size of each stack showing how many are waiting, not just a number badge.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/inbox-ai-summary.webp" data-light="/images/neoos/inbox-ai-summary.webp" data-dark="/images/neoos/inbox-ai-summary-dark.webp" alt="NeoOS Inbox app AI summary of the Parents message stack, listing items to grab and a schedule change before the raw messages" />
<p class="screen-caption">Opening a stack offers an AI summary first, items to grab, a schedule change, before the raw messages underneath it.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Settings</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img src="/images/neoos/settings-main.webp" alt="NeoOS settings screen grouped into visual cards for Dark and Light Mode, Pastel Themes, Font and Size, Smart Summaries, and more" />
<p class="screen-caption">Settings group into a few visual cards instead of one long scrolling list, so nothing gets lost past the fold.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/settings-darkmode.webp" alt="NeoOS Dark and Light Mode settings screen with a live side-by-side preview of both home screen states" />
<p class="screen-caption">Dark and light mode show a live preview of the actual home screen before switching, rather than asking for a blind toggle.</p>
</li>
</ul>
</figure>

## Color Psychology

<ul class="swatch-grid">
<li class="swatch"><span class="swatch-color" style="background:#FCE3B8"></span><p class="swatch-name">Pastel Yellow</p><p class="swatch-hex">#FCE3B8</p></li>
<li class="swatch"><span class="swatch-color" style="background:#CCE8CD"></span><p class="swatch-name">Pastel Green</p><p class="swatch-hex">#CCE8CD</p></li>
<li class="swatch"><span class="swatch-color" style="background:#E8D0EE"></span><p class="swatch-name">Pastel Purple</p><p class="swatch-hex">#E8D0EE</p></li>
<li class="swatch"><span class="swatch-color" style="background:#C6DBF0"></span><p class="swatch-name">Pastel Blue</p><p class="swatch-hex">#C6DBF0</p></li>
<li class="swatch"><span class="swatch-color" style="background:#282828"></span><p class="swatch-name">Charcoal</p><p class="swatch-hex">#282828</p></li>
<li class="swatch"><span class="swatch-color" style="background:#F2F4F7"></span><p class="swatch-name">Off-White</p><p class="swatch-hex">#F2F4F7</p></li>
</ul>

Every hue stays low-saturation on purpose. A bright, high-contrast palette reads as alert and urgent, which is the opposite of what a teen trying to self-regulate needs from their own phone.

Typography runs on Atkinson Hyperlegible by default, a typeface built by the Braille Institute specifically to keep letterforms distinct at a glance, with Lexend and OpenDyslexic offered as alternatives in settings. All three exist to cut the effort of decoding text, not to make a style statement.

App icons default to soft, pastel-shaded 3D surfaces instead of flat line art. Rounded, dimensional shapes read as less harsh than hard edges, which makes a crowded home screen feel inviting instead of overwhelming. A flat icon style stays available in settings for anyone who prefers it, changing only the icon shading, not the rest of the system.

<ul class="icon-grid">
<li><img src="/images/neoos/icon-phone.webp" alt="Soft 3D phone icon" /></li>
<li><img src="/images/neoos/icon-chat.webp" alt="Soft 3D chat icon" /></li>
<li><img src="/images/neoos/icon-mail.webp" alt="Soft 3D mail icon" /></li>
<li><img src="/images/neoos/icon-contacts.webp" alt="Soft 3D contacts icon" /></li>
<li><img src="/images/neoos/icon-calendar.webp" alt="Soft 3D calendar icon" /></li>
<li><img src="/images/neoos/icon-notes.webp" alt="Soft 3D notes icon" /></li>
<li><img src="/images/neoos/icon-checklist.webp" alt="Soft 3D checklist icon" /></li>
<li><img src="/images/neoos/icon-target.webp" alt="Soft 3D target icon" /></li>
</ul>

## Retrospective

<ul class="outcome-grid">
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="24" width="56" height="72" rx="6"/><path d="M32 42h32M32 56h32M32 70h20"/><circle cx="86" cy="80" r="20"/><path d="M78 80l6 6 12-14"/></svg>
<h3>A Preference Screen Instead of One Fixed Interface</h3>
<p>Letting a teen choose how they want information shown, visual, simple, spoken, or mixed, admits from the first screen that no two neurodivergent profiles work the same way. The OS adapts instead of assuming.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="26" cy="30" r="9"/><circle cx="94" cy="30" r="9"/><circle cx="60" cy="90" r="9"/><path d="M34 36l20 46M86 36L66 82"/></svg>
<h3>A Fixed Layout Grid, Even When Everything Else Is Customizable</h3>
<p>Whichever widgets a teen picks, they stay in the top half of the home screen, and apps stay in the bottom half, within thumb's reach. That fixed split means switching layouts never means relearning where to look or where to reach.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 18l34 14v26c0 28-16 46-34 54-18-8-34-26-34-54V32Z"/><path d="M60 50v24M60 82v.1" stroke-width="5"/></svg>
<h3>This Still Needs Time with Real Teens and Clinicians</h3>
<p>Everything here is grounded in the Ahmedabad clinic visits and the survey data, but none of it has been tested with an actual neurodivergent teen using it day to day. That's the obvious next step before calling any of this validated.</p>
</li>
</ul>
