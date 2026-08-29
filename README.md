# Little Orbit

[![Little Orbit homepage](docs/little-orbit-homepage.png)](https://little-orbit.onrender.com/)

[View the live storefront](https://little-orbit.onrender.com/)

Little Orbit is a Hong Kong–first fictional baby-products storefront. Visitors can browse 50 original products, add them to a local cart, complete a clearly simulated checkout, and follow an imaginary delivery story. The payable amount is always HK$0.

## Trust promise

- No real products, payments, merchants, inventory, or deliveries.
- No card, phone, identity, or precise-address fields.
- Cart and fictional orders remain in the visitor's browser.
- Local data can be cleared from the footer.

## Development

Requirements: Node.js 22+ and pnpm.

```sh
pnpm install
pnpm dev
```

Quality checks:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Deployment

The canonical repository is `teze3808/dopamine-website-baby-products-little-orbit`.

Render configuration is versioned in `render.yaml`:

- Service type: Static Site
- Build command: `pnpm install --frozen-lockfile && pnpm build`
- Publish directory: `dist`
- SPA fallback: `/*` rewrites to `/index.html`

See `PROJECT.md` for the product specification and `AGENTS.md` for implementation rules.
