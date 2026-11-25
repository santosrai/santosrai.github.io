---
title: "RuberDuck AI"
description: "Interactive AI whiteboard tutor that turns worked solutions into animated drawings, spoken narration, lesson history, and recap quizzes with multi-user RBAC."
repository: "https://github.com/santosrai/RuberDuckAI"
technologies: ["JavaScript", "Node.js", "SQLite", "MCP", "HTML5 Canvas", "OpenRouter"]
status: "completed"
featured: true
date: "2026-11-25"
screenshot: "/projects/ruberduck-ai.webp"
---

# RuberDuck AI

RuberDuck AI is an interactive whiteboard tutor where AI assistants (in-app via OpenRouter, or connected from Claude and ChatGPT via MCP) publish worked solutions as synchronized, animated board drawings and step-by-step explanations.

## Key Features

- **Animated Whiteboard Playback**: Play, pause, scrub, adjust speed, pan, zoom, and follow the camera automatically across worked lesson sections.
- **Spoken Voice Narration**: Optional synthesized voice narration (Kokoro TTS) synchronized alongside step captions and visual drawings.
- **Interactive Drawing Tools**: Annotate directly on lessons with pen marks, arrows, rectangles, and text, with annotations saved per lesson.
- **In-App Tutor & MCP Integration**: Start lessons directly from Topic, Exam Prep, or Homework modes via OpenRouter, or publish and reopen lessons from Claude/ChatGPT via built-in MCP tools (`list_lessons`, `open_lesson`, `publish_recap`).
- **Lesson Recaps & Study Tools**: Generates structured lesson summaries, key takeaways, a three-question interactive quiz with instant feedback, and shuffleable flip flashcards.
- **Multi-User Auth & RBAC**: Role-based access control (`admin` and `learner` roles), invite-based registration, daily usage quotas, SQLite persistence, and HTTPS reverse-proxy deployment hardening (`Secure` / `__Host-` cookies and HSTS).

## Architecture

- **Runtime & Storage**: Zero-bloat Node.js 24 ESM server with SQLite storage and JSON schema validation (`ajv`).
- **Frontend**: Vanilla JavaScript, HTML5 Canvas whiteboard engine, timeline scrubber, chat panel, and recap study view.
- **AI & Voice**: OpenRouter chat/lesson generation, MCP stdio/panel integration, and Kokoro voice playback.
