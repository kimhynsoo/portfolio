# Portfolio PDF Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply Kim Hyeon-Su's PDF portfolio content to the existing resume template with project GitHub links.

**Architecture:** Keep the current Next.js static portfolio structure. Update `data.json` and markdown content, make empty sections render nothing, rename Activities to Skills, and replace generic project thumbnails with simple generated thumbnails.

**Tech Stack:** Next.js 13, React, TypeScript, Tailwind CSS, JSON data, markdown content.

---

### Task 1: Replace Resume Content

**Files:**
- Modify: `data.json`
- Modify: `public/markdown/information/introduce.md`
- Modify: `public/markdown/project/0.md`
- Modify: `public/markdown/project/1.md`
- Modify: `public/markdown/project/2.md`

- [ ] Update profile, contact, project, skill, education, certificate, and award data.
- [ ] Write concise markdown summaries that emphasize problem definition, structure changes, and safety controls.

### Task 2: Fit Existing Template

**Files:**
- Modify: `src/components/Information/index.tsx`
- Modify: `src/components/Activity/index.tsx`
- Modify: `src/components/WorkExperience/index.tsx`
- Modify: `src/pages/index.tsx`

- [ ] Change hero text from frontend developer to Backend / AI Engineer.
- [ ] Use the Activity section as Skills.
- [ ] Hide Work Experience when the data array is empty.
- [ ] Only render sections that have content.

### Task 3: Project Thumbnails

**Files:**
- Modify: `public/images/project/0.png`
- Modify: `public/images/project/1.png`
- Modify: `public/images/project/2.png`

- [ ] Replace generic images with simple generated project title thumbnails.

### Task 4: Verify

**Commands:**
- `npm run tsc`
- `npm run build`
- `npm run dev -- -H 127.0.0.1 -p 3010`
- `curl -I http://127.0.0.1:3010`

- [ ] Confirm typecheck passes.
- [ ] Confirm production build passes.
- [ ] Confirm dev server returns HTTP 200.
