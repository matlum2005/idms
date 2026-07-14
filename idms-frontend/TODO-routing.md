# TODO: Configure complete Angular Routing

- [ ] Understand current routing structure and identify active routing entrypoints.
- [ ] Update `src/app/app-routing.ts` to:
  - [ ] Add `/dashboard`, `/interns/*`, `/batches/*` using lazy-loaded routes/components as required.
  - [ ] Add route guards to required routes.
  - [ ] Add 404 page route.
  - [ ] Replace wildcard redirect-to-dashboard with redirect/route to 404.
- [ ] Update `src/app/features/interns/interns.routes.ts` to:
  - [ ] Make all Intern routes lazy-loaded components.
  - [ ] Ensure `/interns/add`, `/interns/edit/:id`, and `/interns/view/:id` exist.
  - [ ] Keep backward compatibility if needed (optional alias).
- [ ] Verify `src/app/features/batches/batches.routes.ts` paths and guard integration.
- [ ] Verify `src/app/features/dashboard/dashboard.routes.ts` paths and guard integration.
- [ ] Add a simple `AuthGuard` under `src/app/core/guards/` that allows all by default (per user confirmation) and can be extended later.
- [ ] Add `src/app/pages/not-found/not-found.component.ts` (and template/styles if needed).
- [ ] Update navigation links if route paths changed (sidebar/navbar/quick links).
- [ ] Run `npm run build` to ensure routing compiles.

