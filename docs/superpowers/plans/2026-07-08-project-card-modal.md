# Project Card Modal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace long inline project markdown rendering with clickable project cards and React/Tailwind modal details.

**Architecture:** Keep `data.json` as the source for project summaries, stack, period, and links. Use `Project/index.tsx` for selected project state, `ProjectItem.tsx` for clickable cards, and a new `ProjectModal.tsx` for structured detail content.

**Tech Stack:** Next.js pages router, React state, TypeScript, Tailwind CSS.

---

### Task 1: Project Card Grid

**Files:**
- Modify: `src/components/Project/index.tsx`
- Modify: `src/components/Project/ProjectItem.tsx`

- [ ] Render projects in a responsive grid.
- [ ] Make each card clickable.
- [ ] Keep GitHub links visible.

### Task 2: Modal Detail

**Files:**
- Create: `src/components/Project/ProjectModal.tsx`

- [ ] Render modal overlay when a project is selected.
- [ ] Show role, problem, solution, impact, retrospective, stack, and GitHub link.
- [ ] Close on backdrop, close button, and Escape key.

### Task 3: Verify

**Commands:**
- `npm run tsc`
- `npm run build`

- [ ] Confirm TypeScript passes.
- [ ] Confirm production build passes.
