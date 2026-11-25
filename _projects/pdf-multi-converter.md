---
title: "Pportable - PDF Multi-Converter"
description: "Batch document converter web application that transforms multiple PPT, PPTX, DOC, and DOCX files into PDFs with real-time progress tracking and ZIP bundling."
repository: "https://github.com/santosrai/PdfMultiConverter"
demo: "https://pportable.com/"
technologies: ["TypeScript", "React", "Node.js", "Express", "Tailwind CSS", "LibreOffice", "React Query"]
status: "completed"
featured: true
date: "2026-02-14"
screenshot: "/projects/pdf-multi-converter.webp"
---

# Pportable - PDF Multi-Converter

Pportable is a full-stack batch document conversion web application that lets users convert multiple presentation and document files (PPT, PPTX, DOC, DOCX) into PDFs simultaneously while preserving original formatting, images, and embedded elements.

## Key Features

- **Multi-File Drag-and-Drop**: Upload multiple documents at once (up to 100MB per file) using `react-dropzone`.
- **Real-Time Conversion Progress**: Live per-file conversion status tracking with the ability to cancel ongoing conversions.
- **Flexible Downloads**: Download converted PDFs individually or bundle the entire batch into a single ZIP archive using JSZip.
- **Format Fidelity**: Powered by LibreOffice CLI on the backend to faithfully preserve slide layouts, typography, images, and embedded content.
- **Privacy & Security**: Input validation, sanitization, and automated file cleanup after 24 hours.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui, React Query, `react-dropzone`, and JSZip.
- **Backend**: Node.js, Express, REST conversion API (`POST /api/conversion`, `GET /api/files/:id/:filename`, `POST /api/conversion/:id/cancel`), and LibreOffice CLI integration.
