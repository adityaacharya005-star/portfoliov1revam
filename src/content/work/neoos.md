---
title: NeoOS
description: A mobile UI made for neurodivergent users.
cover: ./assets/neoos-cover.png
coverAlt: "TODO: describe the NeoOS screen shown here"
role: TODO — e.g. Product Designer
timeline: TODO — e.g. 2025
tools: [Figma, TODO]
services: [Mobile UI, Accessibility] # TODO — replace with real tags
accentColor: "#2E9E6B"
order: 3
featured: true
---

## User Personas

<ul class="persona-grid">
<li class="persona-card persona-card--neo">
<div class="persona-neo__portrait" style="--persona-tint: #C6DBF0">
<p class="persona-neo__tag">High School Student · ADHD</p>
<svg class="persona-neo__figure" viewBox="0 0 200 200" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><circle cx="100" cy="76" r="38"/><path d="M62 58a38 38 0 0 1 76 0"/><rect x="48" y="66" width="20" height="30" rx="10"/><rect x="132" y="66" width="20" height="30" rx="10"/><path d="M88 108v10M112 108v10"/><path d="M38 186c0-42 28-66 62-66s62 24 62 66"/></svg>
</div>
<div class="persona-neo__body">
<div class="persona-neo__head">
<p class="persona-name">Aarav</p>
<p class="persona-neo__age">16 years old</p>
</div>
<div class="persona-neo__lists">
<div class="persona-neo__group">
<p class="persona-neo__label">Needs</p>
<div class="persona-neo__chip-row">
<span class="persona-neo__chip persona-neo__chip--need">A calm screen</span>
<span class="persona-neo__chip persona-neo__chip--need">Visual cues over walls of text</span>
<span class="persona-neo__chip persona-neo__chip--need">Routines that don't need repeating</span>
</div>
</div>
<div class="persona-neo__group">
<p class="persona-neo__label">Friction</p>
<div class="persona-neo__chip-row">
<span class="persona-neo__chip persona-neo__chip--friction">Long texts stall him</span>
<span class="persona-neo__chip persona-neo__chip--friction">App-switching wipes his focus</span>
<span class="persona-neo__chip persona-neo__chip--friction">Rigid schedules spike anxiety</span>
</div>
</div>
</div>
</div>
</li>
<li class="persona-card persona-card--neo">
<div class="persona-neo__portrait" style="--persona-tint: #FCE3B8">
<p class="persona-neo__tag">Working Parent</p>
<svg class="persona-neo__figure" viewBox="0 0 200 200" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><circle cx="100" cy="78" r="36"/><path d="M66 58c0-24 68-24 68 0"/><circle cx="100" cy="40" r="13"/><path d="M38 186c0-42 28-66 62-66s62 24 62 66"/><path d="M132 150c9-5 15-16 13-27"/></svg>
</div>
<div class="persona-neo__body">
<div class="persona-neo__head">
<p class="persona-name">Sunita</p>
<p class="persona-neo__age">44 years old</p>
</div>
<div class="persona-neo__lists">
<div class="persona-neo__group">
<p class="persona-neo__label">Needs</p>
<div class="persona-neo__chip-row">
<span class="persona-neo__chip persona-neo__chip--need">Proof the reminder landed</span>
<span class="persona-neo__chip persona-neo__chip--need">Following up without nagging</span>
<span class="persona-neo__chip persona-neo__chip--need">Tools that build independence</span>
</div>
</div>
<div class="persona-neo__group">
<p class="persona-neo__label">Friction</p>
<div class="persona-neo__chip-row">
<span class="persona-neo__chip persona-neo__chip--friction">Repeating herself is the only fix</span>
<span class="persona-neo__chip persona-neo__chip--friction">No visibility into what's seen</span>
<span class="persona-neo__chip persona-neo__chip--friction">Every step back feels risky</span>
</div>
</div>
</div>
</div>
</li>
</ul>

## Stakeholder Mapping

<ul class="stakeholder-ladder">
<li class="stakeholder-row">
<span class="stakeholder-row__icon" aria-hidden="true"><svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="40" r="20"/><path d="M26 100c0-22 15-36 34-36s34 14 34 36"/></svg></span>
<div class="stakeholder-row__text">
<p class="stakeholder-row__name">The teen</p>
<p class="stakeholder-row__detail">Nothing ships if he won't use it. Every other opinion in this list is downstream of his.</p>
</div>
<span class="stakeholder-row__tag">Highest say</span>
</li>
<li class="stakeholder-row">
<span class="stakeholder-row__icon" aria-hidden="true"><svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="40" cy="38" r="16"/><circle cx="82" cy="40" r="14"/><path d="M14 98c0-18 12-30 28-30 10 0 18 4 23 11"/><path d="M58 98c2-16 12-26 27-26s25 10 27 26"/></svg></span>
<div class="stakeholder-row__text">
<p class="stakeholder-row__name">Parents</p>
<p class="stakeholder-row__detail">They buy it, set it up, and live with whatever happens if it fails.</p>
</div>
<span class="stakeholder-row__tag">High</span>
</li>
<li class="stakeholder-row">
<span class="stakeholder-row__icon" aria-hidden="true"><svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M60 18l34 14v26c0 28-16 46-34 54-18-8-34-26-34-54V32Z"/><path d="M48 60l9 9 16-18"/></svg></span>
<div class="stakeholder-row__text">
<p class="stakeholder-row__name">Therapists &amp; psychiatrists</p>
<p class="stakeholder-row__detail">The closest thing to an evidence-based opinion in the room.</p>
</div>
<span class="stakeholder-row__tag">Medium-High</span>
</li>
<li class="stakeholder-row">
<span class="stakeholder-row__icon" aria-hidden="true"><svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><circle cx="34" cy="42" r="13"/><circle cx="86" cy="42" r="13"/><path d="M12 92c0-16 10-26 22-26s22 10 22 26"/><path d="M64 92c0-16 10-26 22-26s22 10 22 26"/></svg></span>
<div class="stakeholder-row__text">
<p class="stakeholder-row__name">Classmates</p>
<p class="stakeholder-row__detail">Decide whether using the tool looks normal or makes him a target.</p>
</div>
<span class="stakeholder-row__tag">Medium</span>
</li>
<li class="stakeholder-row">
<span class="stakeholder-row__icon" aria-hidden="true"><svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="30" width="80" height="56" rx="6"/><path d="M20 46h80"/><path d="M40 30v-8M80 30v-8"/></svg></span>
<div class="stakeholder-row__text">
<p class="stakeholder-row__name">Teachers &amp; school staff</p>
<p class="stakeholder-row__detail">Enforce whatever rules the school already has, nothing more.</p>
</div>
<span class="stakeholder-row__tag">Medium-Low</span>
</li>
</ul>
