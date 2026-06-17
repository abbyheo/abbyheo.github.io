---
title: "BookIPs QA Viewer"
excerpt: "A QA viewer and validation workflow for turning AI-extracted English exam content into reviewable, measurable, client-deliverable structured data."
permalink: /projects/bookips-qa-viewer/
classes: wide
---

# BookIPs QA Viewer

> A QA viewer and validation workflow for turning AI-extracted English exam content from PDFs into reviewable, measurable, client-deliverable structured data.

## What I Built

I built a QA workflow and review interface for turning AI-extracted English exam content into client-deliverable structured data.

```text
PDF / Answer Sheet
→ Document AI OCR
→ Gemini Vision extraction
→ Structured JSON
→ BigQuery validation
→ QA Viewer
→ Reviewer decision
→ Client-ready delivery
```

## Why I Built It

The problem was not just extraction accuracy. The real bottleneck was creating a reviewable, measurable workflow that could recover quality and make delivery decisions reliable.

## How I Created It

The workflow connected extraction, validation, and reviewer decisioning:

- AI-assisted extraction and validation workflow
- BigQuery-based matching and integrity checks
- QA web viewer for raw JSON, rendered output, and reviewer decisions
- Repeatable decision process for client-deliverable data

## Operational Value Created

- Supported large-scale English exam content operations.
- Helped turn fragmented manual review into a measurable workflow.
- Made extracted content reviewable against rendered end-user output.
- Reinforced delivery confidence through validation gates and reviewer decisions.

## Confidentiality Note

Examples use reconstructed/public sample exam content to demonstrate the workflow without exposing client-proprietary data.

## Portfolio Assets

- [ ] Add final PDF
- [ ] Add QA viewer screenshot
- [ ] Add reconstructed/public sample output
