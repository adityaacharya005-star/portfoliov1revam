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

Most phones assume a steady nervous system and a working short-term memory: same taps, same steps, same pace, every time. That assumption breaks down for a lot of neurodivergent teenagers on an ordinary day, and the phone has no idea anything changed.

The real gap opens around age 15–16. Up to that point, parents and schools hand-hold through routines, schedules, and reminders. Then, almost overnight, that support gets pulled, not faded, right as the teen is expected to self-manage everything from homework to leaving the house on time. One side ends up in task paralysis and anxiety; the other defaults to nagging and micromanaging, which undermines the independence everyone was hoping for.

NeoOS is a custom mobile interface built around that transition instead of a generic "accessible phone" brief. It trades loud alarms and one-size UI for an age-fading system: quiet visual structure a teen can run without a parent standing over their shoulder, and caregiver updates that confirm without needing a follow-up call.

## Research & Data

The research mixed national statistics with primary visits to three psychiatry and therapy clinics in Ahmedabad, so the design would be grounded in clinical practice, not just survey data.

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
<p class="stat-label">The age caregiver support disappears, instead of fading</p>
</li>
</ul>

Beyond the numbers, I sat in on sessions at Zen Mind, Akshar Psychiatric Clinic, and Genius Brain, three clinics in Ahmedabad, to hear how clinicians talk about this transition with families, not just how it reads in a paper.

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

Tap anyone in the graph to see how they connect: the teen sits at the center because nothing ships without his buy-in, and the two curved lines on the right show the one relationship that runs independent of him, parents coordinating directly with both therapists and school.

<div class="stakeholder-graph">
<div class="stakeholder-graph__canvas">
<svg class="stakeholder-graph__lines" viewBox="0 0 800 500" aria-hidden="true">
<line class="graph-edge is-highlighted" data-pair="teen therapists" x1="400" y1="250" x2="400" y2="60" stroke-width="3"/>
<line class="graph-edge is-highlighted" data-pair="teen parents" x1="400" y1="250" x2="590" y2="250" stroke-width="4.5"/>
<line class="graph-edge is-highlighted" data-pair="teen teachers" x1="400" y1="250" x2="400" y2="440" stroke-width="2.5"/>
<line class="graph-edge is-highlighted" data-pair="teen classmates" x1="400" y1="250" x2="210" y2="250" stroke-width="3.5"/>
<path class="graph-edge graph-edge--arc" data-pair="parents therapists" d="M400,60 Q590,60 590,250" fill="none" stroke-width="2.5" stroke-dasharray="7 7"/>
<path class="graph-edge graph-edge--arc" data-pair="parents teachers" d="M590,250 Q590,440 400,440" fill="none" stroke-width="2.5" stroke-dasharray="7 7"/>
</svg>
<button type="button" class="graph-node graph-node--hub is-active" style="left:50%;top:50%" data-id="teen" aria-pressed="true" data-name="The teen" data-tier="Highest say" data-detail="Nothing ships if he won't use it. Every other opinion here is downstream of his.">
<span class="graph-node__circle" style="--node-tint:#C6DBF0"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="40" r="20"/><path d="M26 100c0-22 15-36 34-36s34 14 34 36"/></svg></span>
<span class="graph-node__label">The teen</span>
</button>
<button type="button" class="graph-node" style="left:50%;top:12%" data-id="therapists" aria-pressed="false" data-name="Therapists & psychiatrists" data-tier="Medium-High" data-detail="The closest thing to an evidence-based opinion in the room.">
<span class="graph-node__circle" style="--node-tint:#E8D0EE"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M60 18l34 14v26c0 28-16 46-34 54-18-8-34-26-34-54V32Z"/><path d="M48 60l9 9 16-18"/></svg></span>
<span class="graph-node__label">Therapists</span>
</button>
<button type="button" class="graph-node" style="left:73.75%;top:50%" data-id="parents" aria-pressed="false" data-name="Parents" data-tier="High" data-detail="They buy it, set it up, and live with whatever happens if it fails.">
<span class="graph-node__circle" style="--node-tint:#FCE3B8"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="38" r="16"/><circle cx="82" cy="40" r="14"/><path d="M14 98c0-18 12-30 28-30 10 0 18 4 23 11"/><path d="M58 98c2-16 12-26 27-26s25 10 27 26"/></svg></span>
<span class="graph-node__label">Parents</span>
</button>
<button type="button" class="graph-node" style="left:50%;top:88%" data-id="teachers" aria-pressed="false" data-name="Teachers & school staff" data-tier="Medium-Low" data-detail="Enforce whatever rules the school already has, nothing more.">
<span class="graph-node__circle" style="--node-tint:#E4E4E0"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="30" width="80" height="56" rx="6"/><path d="M20 46h80"/><path d="M40 30v-8M80 30v-8"/></svg></span>
<span class="graph-node__label">Teachers</span>
</button>
<button type="button" class="graph-node" style="left:26.25%;top:50%" data-id="classmates" aria-pressed="false" data-name="Classmates" data-tier="Medium" data-detail="Decide whether using the tool looks normal or makes him a target.">
<span class="graph-node__circle" style="--node-tint:#CCE8CD"><svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="36" r="11"/><path d="M14 78c0-13 8-22 18-22s18 9 18 22"/><circle cx="88" cy="36" r="11"/><path d="M70 78c0-13 8-22 18-22s18 9 18 22"/><circle cx="60" cy="52" r="13"/><path d="M38 102c0-15 10-26 22-26s22 11 22 26"/></svg></span>
<span class="graph-node__label">Classmates</span>
</button>
</div>
<div class="stakeholder-graph__detail">
<p class="stakeholder-graph__detail-name"><span class="stakeholder-graph__detail-name-text">The teen</span><span class="stakeholder-graph__detail-tier">Highest say</span></p>
<p class="stakeholder-graph__detail-text">Nothing ships if he won't use it. Every other opinion here is downstream of his.</p>
</div>
</div>

## User Flow

Onboarding splits into the OS layer and the two native apps, Focus and Inbox, each with its own short loop back to the home screen rather than one long path a teen has to retrace every time.

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
<li><strong>The preference-based onboarding was there from the first sketch.</strong> Visual, Simple, Spoken, and Mixed, even color-coded by shape in an early pass, went almost untouched into the final screens.</li>
<li><strong>App placement was argued out on paper first.</strong> A note reading "apps should be near the thumb" became the thumb-zone layout behind the App Drawer and Quick Panel.</li>
<li><strong>Focus and Inbox kept their grayscale bones.</strong> The task stack, timer ring, and Day at a Glance blocks are structurally the same boxes from the wireframe pass, just colored in.</li>
</ul>

## Final Design

Every screen below answers a specific piece of the research: an abrupt support drop at 15–16, and a parent who only wants confirmation without a follow-up call.

<figure class="figure--white">
<p class="figure-eyebrow">Onboarding</p>
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/neoos/onboard-landing.webp" alt="NeoOS onboarding landing screen reading Say hi to NeoOS, your phone built for the way you think, with a Get Started button" />
<p class="screen-caption">The first screen just says hello and sets expectations in one line. No form, no questions yet.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/onboard-info.webp" alt="NeoOS onboarding preference screen asking How would you like to see information, with options Visual, Simple, Spoken, and Mixed" />
<p class="screen-caption">A single preference question decides how information gets shown across the whole OS: visual, simple, spoken, or mixed.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/onboard-font.webp" alt="NeoOS font selection screen offering Atkinson Hyperlegible, Lexend, and OpenDyslexic" />
<p class="screen-caption">The font list includes Atkinson Hyperlegible and OpenDyslexic alongside the usual options, picked for reading speed, not branding.</p>
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
<img src="/images/neoos/home-screen-a.webp" alt="NeoOS home screen with widgets for weather, date, music, and messages above a grid of app icons" />
<p class="screen-caption">The default layout leads with weather, the date, music, and messages, the things most home screens open with.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/home-screen-b.webp" alt="NeoOS home screen variant with a task-breakdown widget showing Morning routine steps in place of the media and calendar widgets" />
<p class="screen-caption">Swapping to a task-first layout replaces half of those widgets with the day's routine instead, the same OS reading differently depending on what a teen needs that morning.</p>
</li>
</ul>
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
<p class="figure-eyebrow">Focus App</p>
<ul class="screen-grid">
<li class="screen-item">
<img src="/images/neoos/focus-tasks.webp" alt="NeoOS Focus app task stack showing Prep for School broken into three sub-steps with a progress count" />
<p class="screen-caption">The day's task opens as a single card with its own sub-steps checked off one at a time, not a long list competing for attention.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/focus-timer.webp" alt="NeoOS Focus app countdown timer for the current task, showing 14 minutes 55 seconds remaining on a ring" />
<p class="screen-caption">Isolating one task behind its own countdown ring keeps attention on it without needing a separate timer app.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/focus-day-glance.webp" alt="NeoOS Focus app Day at a Glance view with Morning, Afternoon, Evening, and Night blocks color-coded by time of day" />
<p class="screen-caption">Mapping the day into four color-coded blocks, morning through night, gives a sense of the whole day without reading a full schedule.</p>
</li>
</ul>
</figure>

<figure class="figure--white">
<p class="figure-eyebrow">Inbox App</p>
<ul class="screen-grid screen-grid--2">
<li class="screen-item">
<img src="/images/neoos/inbox-stack.webp" alt="NeoOS Inbox app message stack grouped by School, Parents, Work, Sports, and Library, with stack size showing unread count" />
<p class="screen-caption">Messages stack by sender, with the size of each stack showing how many are waiting, not just a number badge.</p>
</li>
<li class="screen-item">
<img src="/images/neoos/inbox-ai-summary.webp" alt="NeoOS Inbox app AI summary of the Parents message stack, listing items to grab and a schedule change before the raw messages" />
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

## Retrospective

<ul class="outcome-grid">
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="24" width="56" height="72" rx="6"/><path d="M32 42h32M32 56h32M32 70h20"/><circle cx="86" cy="80" r="20"/><path d="M78 80l6 6 12-14"/></svg>
<h3>A Preference Screen Instead of One Fixed Interface</h3>
<p>Letting a teen choose how they want information shown, visual, simple, spoken, or mixed, admits from the first screen that no two neurodivergent profiles work the same way. The OS adapts instead of assuming.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="26" cy="30" r="9"/><circle cx="94" cy="30" r="9"/><circle cx="60" cy="90" r="9"/><path d="M34 36l20 46M86 36L66 82"/></svg>
<h3>The Fade Has to Be Designed, Not Just the App</h3>
<p>The real finding wasn't a UI gap, it was that support disappears overnight instead of tapering off. The two home-screen states, parent-visible and teen-independent, are an attempt to build that taper into the product itself.</p>
</li>
<li class="outcome-card">
<svg class="card-icon" viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M60 18l34 14v26c0 28-16 46-34 54-18-8-34-26-34-54V32Z"/><path d="M60 50v24M60 82v.1" stroke-width="5"/></svg>
<h3>This Still Needs Time with Real Teens and Clinicians</h3>
<p>Everything here is grounded in the Ahmedabad clinic visits and the survey data, but none of it has been tested with an actual neurodivergent teen using it day to day. That's the obvious next step before calling any of this validated.</p>
</li>
</ul>
