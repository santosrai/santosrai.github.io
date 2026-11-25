---
title: "NovoProtein AI"
description: "AI-powered molecular visualization and protein engineering platform combining natural language interaction, 3D Molstar graphics, and visual RFdiffusion/ProteinMPNN workflows."
repository: "https://github.com/santosrai/novoprotien-ai"
technologies: ["Python", "TypeScript", "React", "Vite", "Tailwind CSS", "Molstar", "Zustand", "Monaco Editor", "Docker"]
status: "completed"
featured: true
date: "2026-09-05"
screenshot: "/projects/novoprotein-ai.webp"
---

# NovoProtein AI

NovoProtein AI is a web-based molecular visualization and protein engineering platform that combines a natural language AI assistant with real-time 3D protein structure visualization powered by Molstar.

## Key Features

- **Natural Language Visualization**: Describe proteins and molecular views in plain English (e.g., loading insulin, hemoglobin with heme groups, antibodies, or specific PDB IDs) to generate and execute Molstar builder code.
- **Real-Time 3D Molstar Viewer**: High-performance interactive 3D molecular graphics with rotation, zoom, pan, camera reset, screenshots, and fullscreen mode.
- **Integrated Monaco Code Editor**: Full IDE editing with TypeScript/JavaScript syntax highlighting, Molstar API auto-completion, and sandboxed code execution.
- **ProteinMPNN Sequence Redesign**: Run NVIDIA ProteinMPNN against RFdiffusion outputs or uploaded PDB backbones with configurable parameters (sequence count, temperature, chain filters, and fixed residues) and downloadable FASTA/JSON results.
- **Visual Pipeline Canvas**: Reusable React Flow DAG workflow builder connecting Input, RFdiffusion, ProteinMPNN, and AlphaFold nodes with JSON-configured schemas.

## Architecture

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Zustand, Monaco Editor, Molstar, and React Flow.
- **Backend & AI**: Python/Node API server with JWT authentication, PDB uploads, RCSB PDB resolution, and OpenRouter-powered AI code generation.
- **Testing & Deployment**: Vitest, Playwright end-to-end testing, and Docker / Docker Compose support.
