# Project Image Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 프로젝트 카드에는 대표 이미지를 표시하고 상세 팝업에서는 원본 비율을 유지한 이미지 갤러리를 제공한다.

**Architecture:** `data.json`이 프로젝트별 이미지 배열을 제공하고 `ProjectProps`가 이를 선택 속성으로 정의한다. `ProjectItem`은 배열의 첫 이미지를 대표 이미지로 사용하고, `ProjectModal`은 로컬 선택 상태를 가진 갤러리 컴포넌트를 렌더링한다.

**Tech Stack:** Next.js 13, React, TypeScript, Tailwind CSS, `next/image`

---

### Task 1: Add The Project Image Data Contract

**Files:**
- Modify: `data.json`
- Modify: `src/types/index.ts`

- [ ] **Step 1: Add image arrays to project data**

```json
"images": ["/images/project/DocQ.png", "/images/project/DocQ2.png"]
```

우주드로우와 Y-ECOUNT에도 각각 실제 이미지 경로 한 개를 추가한다.

- [ ] **Step 2: Run TypeScript to verify the missing contract**

Run: `npm run tsc`

Expected: 기존 타입 사용 지점에서 `images` 속성을 읽기 전까지는 통과한다. 다음 단계에서 컴포넌트가 속성을 읽으면 타입 오류가 발생해야 한다.

- [ ] **Step 3: Read `images` from `ProjectItem` before adding the type**

```tsx
const previewImage = project.images?.[0] ?? project.imgSrc;
```

- [ ] **Step 4: Run TypeScript and verify it fails**

Run: `npm run tsc`

Expected: FAIL with `Property 'images' does not exist on type 'ProjectProps'`.

- [ ] **Step 5: Add the type contract**

```ts
images?: string[];
```

Add it to `ProjectProps` next to `imgSrc`.

- [ ] **Step 6: Run TypeScript and verify it passes**

Run: `npm run tsc`

Expected: PASS.

### Task 2: Render Stable Card Preview Images

**Files:**
- Modify: `src/components/Project/ProjectItem.tsx`

- [ ] **Step 1: Render the representative image**

Use `project.images?.[0] ?? project.imgSrc` and render it inside a fixed-height neutral container:

```tsx
<div className="flex h-44 items-center justify-center bg-GRAY_LIGHT p-3 dark:bg-GRAY_EXTRAHEAVY">
  <Image
    src={previewImage}
    width={640}
    height={400}
    alt={`${name} 대표 화면`}
    className="h-full w-full object-contain"
  />
</div>
```

- [ ] **Step 2: Run TypeScript**

Run: `npm run tsc`

Expected: PASS.

### Task 3: Add The Detail Image Gallery

**Files:**
- Create: `src/components/Project/ProjectGallery.tsx`
- Modify: `src/components/Project/ProjectModal.tsx`

- [ ] **Step 1: Create a focused gallery component**

The component accepts `projectName` and `images`, initializes the selected index to zero, resets it when the image list changes, renders one large `next/image`, and only renders thumbnail buttons when there is more than one image.

- [ ] **Step 2: Add selected and inactive thumbnail styles**

The selected thumbnail uses `border-PRIMARY`; inactive thumbnails use the existing gray border and gain primary color on hover. Every button has an `aria-label` containing the project name and image number.

- [ ] **Step 3: Render the gallery in the modal**

Place it after the modal heading block and before the impact metrics:

```tsx
{project.images && project.images.length > 0 && (
  <ProjectGallery projectName={project.name} images={project.images} />
)}
```

- [ ] **Step 4: Run TypeScript**

Run: `npm run tsc`

Expected: PASS.

### Task 4: Verify Production And User Flow

**Files:**
- Verify: `src/components/Project/ProjectItem.tsx`
- Verify: `src/components/Project/ProjectGallery.tsx`
- Verify: `src/components/Project/ProjectModal.tsx`

- [ ] **Step 1: Run the production build**

Run: `npm run build`

Expected: Next.js build completes successfully.

- [ ] **Step 2: Verify the browser flow**

Open the running development page and confirm:

- Three project cards show the correct representative image without cropping.
- DocQ opens with two thumbnails and switching thumbnails updates the large image.
- 우주드로우 and Y-ECOUNT show one large image without a thumbnail row.
- Mobile width has no image or text overlap.

- [ ] **Step 3: Inspect the final diff**

Run: `git diff --check`

Expected: no whitespace errors.
