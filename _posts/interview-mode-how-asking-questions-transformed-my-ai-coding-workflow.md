---
title: 'Interview Mode: How Asking Questions Transformed My AI Coding Workflow'
excerpt: 'Discover how Interview Mode—forcing AI to ask clarifying questions before coding—transformed my workflow from debugging bad code to writing the right code on the first try.'
date: '2026-01-19'
author: 'Santosh Rai'
---

When I first started using AI coding tools like Claude or Cursor, it felt magical.

I could give a one-line prompt—"Build a React component for protein visualization"—and get a full feature back.

That magic faded the moment I reviewed the code.

The architecture didn't match my app. The UI assumptions were wrong. Edge cases were missing. I'd spend the next hour rewriting the output or arguing with the AI line by line.

The mistake wasn't the model.

It was how I was using it.

I was treating the AI like an autocomplete engine, when I should have been treating it like a junior engineer.

That shift led me to new prompting technique which was shared by Thariq from the Claude Code team.

https://x.com/trq212/status/2005315275026260309

## The Real Problem: Missing Context

AI coding tools aren't bad at writing code. They're bad at guessing intent.

When you give a vague prompt, the AI fills in the gaps with average assumptions. That's fine for a demo app. It's disastrous for a real system.

I'm currently building an **AI-powered protein design platform** with heavy data visualization and computational biology tools. "Average" assumptions there lead to unusable architecture.

The fix wasn't better prompts. It was forcing a pause *before* code generation

## Implementing "Interview Mode" in Cursor

Here is how I set it up, how it works, and why it saved my latest project.

1. **Open Cursor Settings** and navigate to **Rules for AI**.
2. **Add a new Command** (e.g., `/interview`).
3. **Define the behavior:**

> "Before you write any code, ask me clarifying questions about: technical implementation details, architecture choices, UI/UX expectations, and edge cases. Do not produce code until I have answered your questions and confirmed we're aligned."
> 
1. Save the command

Now, when I start a new feature, I don't just say "build X." I say "Build X, `/interview`."

## The "Interview" in Action

Recently, I needed to refactor a complex data flow in my protein design app. In the old days, I would have prompted Cursor to "refactor the state management." It would have likely hallucinated a Redux setup I don't use or broken the existing prop drilling.

Instead, I triggered Interview Mode. Claude paused and asked:

- *"Are we strictly using local state, or is there a global store involved?"*
- *"How should this interact with the existing RFdiffusion tool outputs?"*
- *"What are the latency constraints for the UI during these updates?"*

It forced me to articulate requirements I hadn't fully crystallized myself. We had  a couple of minutes back-and-forth "interview." Once we aligned, I gave the green light. The code it produced next was flawless. It worked on the first try because we shared a mental model *before* the syntax generation started.

## The Trade-off: Slow Down to Speed Up

I won't lie—this feels slower at the start. You want to see code immediately. It takes discipline to spend the first ten minutes of a session just talking to a chatbot.

But look at the math:

- **The Old Way:** 1 minute prompting + 60 minutes debugging/rewriting.
- **The Interview Way:** 10 minutes planning + 5 minutes coding.

The frustration of rewriting bad code is replaced by the satisfaction of watching the *right* code appear.

## When to Use It (And When Not To)

I don't use this for everything. If I need to center a div or write a regex, I just ask for it. But I strictly enforce Interview Mode for:

- **New features from scratch:** Setting the foundation correctly is non-negotiable.
- **Refactors:** Changing code that impacts multiple files requires a shared understanding of the blast radius.
- **UI/UX heavy work:** "Make it look good" is subjective; "Make it look like a dashboard for scientists" requires calibration.

## Beyond Code: AI as a Partner

This shift has changed how I view AI tools. Claude isn't just a snippet generator; it's a requirements analyst and a design reviewer.

By forcing it to ask questions, I'm effectively using it to "rubber duck" my own ideas. Often, Claude's questions reveal a flaw in my logic before we've written a line of code ("*Have you considered how this will handle network failure during the protein folding step?*").

If you're building serious systems—whether it's a SaaS platform, a complex data pipeline, or a protein design tool—stop letting AI guess your intentions. Make it interview you. The code you get on the other side will be worth the conversation.
