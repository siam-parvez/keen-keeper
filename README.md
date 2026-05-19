**KeenKeeper**

A small Next.js app to help you keep friendships alive by tracking interactions, scheduling follow-ups, and visualizing contact health.

**Technologies:**

- **Framework:** Next.js (App Router) with Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS (shadcn UI components)
- **UI primitives:** Radix UI + lucide icons
- **Package manager:** pnpm
- **Charts:** Recharts

**Key Features:**

- **Timeline:** View and filter past interactions (calls, texts, video) in a chronological timeline.
- **Friends Dashboard:** Manage friends, view next due dates, and track contact frequency.
- **Stats & Insights:** Visualize contact progress and trends with charts to identify overdue connections.

Getting started

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

Project structure (high level)

- `src/app` — Next.js app routes and pages
- `src/components` — Reusable UI components (shadcn/radix wrappers)
- `src/context` — Application context and client state (localStorage-backed interactions)
- `src/data` — Seed data such as `friends.json`

Want changes or additions to this README? Tell me which details you'd like expanded (installation, deployment, tests, or contribution notes) and I'll update it.
