# AGENTS.md

This file defines the working rules for coding agents in this repository. Read `PROJECT.md` before planning or changing product behavior.

## Mission

Build a delightful Hong Kong–first fictional shopping experience in which users can browse, add items, complete a simulated checkout, and track an imaginary delivery while paying exactly HK$0.

The essential trust promise is non-negotiable: this is not a real store, it never charges money, and it does not collect sensitive checkout data.

## Project identity and release target

- Brand: **Little Orbit**
- Canonical repository: **`teze3808/dopamine-website-baby-products-little-orbit`**
- Repository naming convention: **`dopamine-website-<website-type>-<website-name>`**
- Hosting target: **Render Static Site**
- Build command: **`pnpm build`**
- Publish directory: **`dist`**

Keep repository and Render service names in lowercase kebab-case. Do not rename the project, GitHub repository, or hosting service without an explicit user request.

## Instruction priority

When requirements conflict, apply them in this order:

1. The user's current request.
2. Safety, privacy, and trust requirements in `PROJECT.md`.
3. This file.
4. Existing repository conventions and nearby code.
5. General framework conventions.

Do not silently weaken the zero-payment or no-sensitive-data rules. Call out any request or existing behavior that would do so.

## Before making changes

- Read `PROJECT.md` and the relevant source, tests, configuration, and package scripts.
- Check the working tree and preserve unrelated user changes.
- Look for more specific `AGENTS.md` files in subdirectories; the closest file governs that subtree.
- Prefer the smallest coherent change that fully satisfies the request.
- If the repository is still uninitialized, follow the suggested foundation in `PROJECT.md` unless the user specifies another stack.

## Maison Mallow reference policy

The creator's prior prototype, [Maison Mallow](https://maison-mallow.onrender.com/), is an approved reference for product decisions. Agents may inspect it to understand the creator's established quality bar and interaction preferences.

Patterns worth carrying forward:

- Editorial storefront hierarchy and strong hero-to-catalog pacing.
- Search, category filters, product badges, and accessible product-specific actions.
- Cart drawer behavior, quantity controls, empty states, and clear order summaries.
- Centralized multilingual content and independent locale/currency selection.
- Cohesive product photography and storytelling sections.

Patterns that must not be carried forward unchanged:

- Realistic editable contact, street-address, card-number, expiry, or CVC fields.
- Shipping fees, free-shipping thresholds, or non-zero payment calls to action.
- Real-shop language that obscures the parody.
- Maison Mallow's name, kitchen catalog, pastel identity, copy, or imagery.

If Maison Mallow source code becomes available locally, audit its license/provenance and architecture before reusing code. Prefer extracting generic, tested primitives over copying its page wholesale. Record any intentional reuse or adaptation in `PROJECT.md` or a short architecture decision note.

## Product invariants

Every implementation must preserve these invariants:

- The final payable and charged amount is always HK$0.
- Checkout never accepts a real card number, CVV, bank credential, identity number, phone number, or precise address.
- The site plainly identifies itself as fictional before checkout and at confirmation.
- There is no real payment, merchant, delivery, inventory, or courier integration.
- Cart and fictional-order data stay on the device for the MVP.
- Sharing never exposes user-entered location or browser identifiers.
- Users can clear locally stored data.
- Core functionality works without creating an account.

Treat violations of these rules as severity-one bugs.

## Implementation conventions

### TypeScript and components

- Use TypeScript in strict mode. Avoid `any`; narrow `unknown` at boundaries.
- Prefer small, composable components with explicit props over large page components.
- Keep business rules in pure functions and UI state in components or dedicated hooks.
- Model product IDs, cart quantities, prices, and order states explicitly.
- Represent HKD values as integers. Never derive the charged total from the imaginary subtotal; set and validate it as zero.
- Avoid premature abstraction. Extract shared behavior after a real second use appears.

### State and persistence

- Keep a single source of truth for the cart.
- Access `localStorage` only through a versioned adapter that validates parsed data and handles unavailable or corrupt storage.
- Do not persist transient UI state such as open dialogs or animations.
- Do not add a backend, database, authentication, analytics, or external API unless the user explicitly expands the scope.
- Persist locale and cart preferences independently so changing language cannot corrupt cart state.
- Keep currency conversion/display logic separate from the zero-charge invariant.

### Content and localization

- Put user-facing strings in locale files, not directly in components, except for temporary prototypes explicitly requested by the user.
- Use `zh-HK` as the default locale and natural Traditional Chinese/Cantonese phrasing.
- Keep translation keys semantic and stable; do not use full source sentences as keys.
- Format currency and dates with locale-aware APIs.
- Avoid copied retailer language, logos, branded payment marks, or unlicensed product assets.
- Record image attribution or provenance alongside catalog data when required.
- Keep search aliases and localized product metadata in the catalog schema rather than scattering synonym logic through components.
- When a new locale is added, translate the entire core journey before enabling it in the locale selector.

### Styling and interaction

- Use shared design tokens for color, spacing, typography, radius, shadow, and motion.
- Design mobile-first and verify at narrow, medium, and wide widths.
- Every interactive element needs hover, focus-visible, active, disabled, and loading states where applicable.
- Respect `prefers-reduced-motion`; important information cannot depend on animation.
- Do not imitate a real payment form. The fictional payment method is display-only.
- Prefer purposeful micro-interactions over continuous or distracting effects.
- Product cards, cart rows, category tiles, badges, price blocks, and status steps must use shared primitives rather than page-specific replicas.
- Keep the cart drawer responsive: side panel on wide viewports and an accessible bottom sheet or full-height panel on narrow viewports.

### Accessibility

- Use semantic HTML before ARIA.
- All functionality must be keyboard operable.
- Maintain logical heading order and visible focus.
- Announce cart changes and checkout results without moving focus unexpectedly.
- Give dialogs correct names, focus management, Escape behavior, and focus restoration.
- Maintain WCAG AA contrast and do not encode state by color alone.

## Testing requirements

Add or update tests with behavior changes. At minimum, protect:

- Adding, updating, and removing cart items.
- Imaginary subtotal calculations.
- The invariant that payable and charged totals remain zero.
- Checkout acknowledgement before order creation.
- Rejection of malformed persisted data.
- Local order creation without sensitive fields.
- Clear-local-data behavior.
- The complete happy path in a mobile viewport.
- Locale switching across navigation, catalog, cart, checkout, and order tracking.
- Cart-drawer focus management, quantity controls, empty state, and close behavior.
- Currency formatting and the zero-charge invariant after locale/currency changes.

Prefer user-observable assertions over implementation details. Avoid snapshots for dynamic commerce UI unless they protect a small, stable output.

Before handing off code, run the repository's equivalent of:

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Run focused checks while iterating and the broadest practical checks before completion. If a command is unavailable or fails for an unrelated reason, report that precisely.

## Security and privacy review

For every change touching forms, persistence, sharing, analytics, or external services, verify:

- What data is collected?
- Where is it stored or transmitted?
- Is it necessary for the fictional journey?
- Can the same result be achieved locally with less data?
- Could a visitor mistake the interaction for a real transaction?

Never log form values or local order contents to production telemetry. Never commit secrets, credentials, private endpoints, or copied customer data.

## Dependency policy

- Prefer platform and framework capabilities before adding packages.
- Add a dependency only when it materially reduces complexity or risk.
- Check maintenance status, license, bundle cost, and browser impact.
- Keep runtime dependencies especially lean because the primary experience is mobile.
- Do not add payment, commerce-platform, mapping, geolocation, or identity SDKs for the MVP.

## Git and file hygiene

- Do not discard or overwrite unrelated working-tree changes.
- Keep generated output, build artifacts, environment files, and local caches out of version control.
- Use focused commits when commits are requested.
- Update documentation when behavior, commands, architecture, or scope changes.
- Do not modify lockfiles unless dependency changes require it.
- Do not commit `node_modules`, `dist`, caches, logs, local Render metadata, deploy hooks, or credentials.
- Before pushing, confirm the configured GitHub remote resolves to `teze3808/dopamine-website-baby-products-little-orbit`.
- Deploy to Render only after the pushed revision passes the repository's full local checks.
- After deployment, verify the public URL and update `PROJECT.md` with the final Render URL.

## Definition of done

A change is done when:

- It satisfies the requested behavior and preserves every product invariant.
- Empty, loading, error, and small-screen states are handled where relevant.
- Accessibility has been considered and manually checked for changed interactions.
- Relevant tests pass and new logic has appropriate coverage.
- Lint, type checks, and build pass when available.
- No sensitive fields, real transaction paths, or unapproved external data flows were introduced.
- Documentation reflects any durable decision or changed command.

## When uncertain

Choose the option that is clearer to visitors, collects less data, and makes the fictional nature of the experience more obvious. Ask the user before introducing real-world integrations, accounts, personal-data collection, or any monetization path.
