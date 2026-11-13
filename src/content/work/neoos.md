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
<div class="persona-neo__head">
<span class="persona-neo__icon" role="img" aria-label="Sketch illustration representing Aarav">
<svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="44" r="17"/><path d="M43 37c2-11 32-11 34 0"/><path d="M26 100c0-20 15-32 34-32s34 12 34 32"/><path d="M38 50q-6 2-6 10M82 50q6 2 6 10"/></svg>
</span>
<div class="persona-neo__id">
<p class="persona-eyebrow">High School Student · ADHD</p>
<p class="persona-name">Aarav</p>
</div>
<p class="persona-neo__age"><span>16</span>yrs</p>
</div>
<div class="persona-neo__body">
<div class="persona-neo__col">
<p class="persona-neo__label">Needs</p>
<ul class="persona-neo__list">
<li>A calm screen, not a loud one.</li>
<li>Visual cues instead of walls of text.</li>
<li>A routine that doesn't need a parent to repeat it.</li>
</ul>
</div>
<div class="persona-neo__col">
<p class="persona-neo__label">Friction</p>
<ul class="persona-neo__list">
<li>A long text message is enough to stall him.</li>
<li>Switching apps wipes what he was just doing.</li>
<li>A strict schedule raises his anxiety instead of lowering it.</li>
</ul>
</div>
</div>
</li>
<li class="persona-card persona-card--neo">
<div class="persona-neo__head">
<span class="persona-neo__icon" role="img" aria-label="Sketch illustration representing Sunita">
<svg viewBox="0 0 120 120" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="44" r="17"/><path d="M41 34c2-12 36-12 38 0"/><path d="M39 38c-6 14-4 28 2 36M81 38c6 14 4 28-2 36"/><path d="M26 100c0-20 15-32 34-32s34 12 34 32"/></svg>
</span>
<div class="persona-neo__id">
<p class="persona-eyebrow">Working Parent</p>
<p class="persona-name">Sunita</p>
</div>
<p class="persona-neo__age"><span>44</span>yrs</p>
</div>
<div class="persona-neo__body">
<div class="persona-neo__col">
<p class="persona-neo__label">Needs</p>
<ul class="persona-neo__list">
<li>Proof a reminder actually landed.</li>
<li>A way to follow up without nagging.</li>
<li>Tools that build Aarav's independence, not her workload.</li>
</ul>
</div>
<div class="persona-neo__col">
<p class="persona-neo__label">Friction</p>
<ul class="persona-neo__list">
<li>Repeating herself is the only thing that works.</li>
<li>No way to tell if a permission slip got seen.</li>
<li>Every step back feels like a risk, not progress.</li>
</ul>
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
