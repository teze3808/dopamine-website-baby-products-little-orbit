# Little Orbit — Dopamine Shopping HK

## Product summary

Little Orbit is a playful, zero-cost baby-products shopping simulator for Hong Kong users under the Dopamine Shopping HK concept. Visitors browse a dreamy catalog of fictional nursery goods, add them to a cart, complete an obviously fictional checkout, and watch a comic delivery story unfold. Nothing is sold, charged, shipped, or promised.

The experience recreates the satisfying rhythm of online shopping without encouraging users to spend money or enter real payment information.

Brand line: **小小宇宙，大大想像。**

Campaign line: **買盡成個宇宙，埋單都係 $0。**

## Release identity

- Product name: **Little Orbit**
- Website type: **baby-products**
- Website name: **little-orbit**
- GitHub repository: **`dopamine-website-baby-products-little-orbit`**
- Intended GitHub owner: **`teze3808`**
- Production host: **Render**
- Render service name: **`dopamine-website-baby-products-little-orbit`**, subject to Render availability
- Primary locale/currency: **Traditional Chinese (`zh-HK`) / HKD**

Repository names for future sites in this series must follow:

```text
dopamine-website-<website-type>-<website-name>
```

Use lowercase kebab-case for both variable segments. The GitHub repository and Render service should use the same canonical name unless the hosting platform requires a unique suffix.

## Relationship to Maison Mallow

[Maison Mallow](https://maison-mallow.onrender.com/) is the creator's earlier storefront prototype and should be treated as an internal product-design baseline, not as a dependency or a theme to duplicate.

The live prototype demonstrates useful, already-proven patterns:

- A complete editorial storefront on one approachable page: announcement strip, navigation, hero, benefits, category discovery, product grid, story, newsletter, and footer.
- A 50-item catalog organized into clearly named categories.
- Search, category filters, compact product cards, badges, and one-tap add-to-cart actions.
- A side cart with quantity controls, subtotal, shipping threshold feedback, checkout action, and an empty state.
- Runtime language switching across English, Japanese, Traditional Chinese, and Simplified Chinese.
- Runtime currency switching across USD, GBP, EUR, JPY, HKD, and CNY.
- Locale-aware copy and accessible names such as product-specific add-to-cart labels.
- A consistent editorial voice connecting product utility to a broader lifestyle story.

Reuse the information architecture, interaction polish, and component lessons where they shorten development. Do not carry over Maison Mallow's brand identity, pastel kitchen aesthetic, product catalog, or lifestyle story.

Most importantly, do not reuse its current checkout model unchanged. The prototype shows editable contact, name, address, card-number, expiry, and CVC fields, plus shipping and a non-zero payment button. Those patterns make sense for demonstrating a conventional storefront but conflict with this project's trust promise. Dopamine Shopping HK replaces them with a display-only fictional payment token, optional broad district choice, no shipping charge, and a final total of HK$0.

## Product principles

1. **Fun before realism.** It should feel familiar enough to use immediately, but playful enough that nobody mistakes it for a real shop.
2. **Zero money, zero ambiguity.** Every important step says that the transaction is fictional and the final charge is HK$0.
3. **No sensitive data.** Never request or store real card numbers, identity documents, phone numbers, or precise home addresses.
4. **Fast dopamine loop.** A visitor should be able to browse, add an item, check out, and see a delivery event in under one minute.
5. **Hong Kong personality.** Traditional Chinese and conversational Cantonese are the primary voice, with optional English support. Prices display in HKD.
6. **Original execution.** Reference sites may inform the interaction pattern, but branding, copy, artwork, catalog data, and implementation must be original.

## Audience

Primary audience:

- Hong Kong Gen Z and young adults who enjoy internet culture, shopping interfaces, memes, and shareable experiences.
- People trying to interrupt impulse-shopping habits without losing the small ritual of browsing and adding to cart.

Secondary audience:

- Friends sharing funny carts or fictional order outcomes.
- Creators looking for a light, visual social-media experience.

## Core user journey

1. The visitor lands on a storefront that immediately explains: this is a parody, every order costs HK$0, and nothing will arrive.
2. They browse or search a compact catalog of products.
3. They add one or more products to the cart and see a satisfying visual response.
4. The cart displays the imaginary retail total, the dopamine discount, and a final payable total of **HK$0**.
5. Checkout uses a pre-filled fictional payment method. It must not include editable card-number, CVV, bank, or identity fields.
6. The visitor presses a clearly labelled fictional purchase button such as **「模擬落單・唔會扣錢」**.
7. A short confirmation animation creates an order and begins a fictional delivery timeline.
8. The tracker progresses through comic Hong Kong-themed events and eventually ends in a clearly fictional outcome.
9. The visitor can share a privacy-safe result card or start another order.

## Experience architecture

The first release should preserve Maison Mallow's low-friction, single-storefront rhythm while adding dedicated views only where the dopamine story benefits from them.

Recommended route map:

| Route | Purpose |
| --- | --- |
| `/` | Hero, explanation, categories, featured products, catalog, and FAQ preview |
| `/product/[slug]` | Optional shareable product detail; a modal or drawer is acceptable for MVP if deep links still work |
| `/checkout` | Fictional order review, acknowledgement, display-only payment method, and simulated order action |
| `/order/[id]` | Local fictional confirmation and delivery story; handle missing local orders gracefully |
| `/about` | Concept, safety promise, and how it works |
| `/privacy` | Plain-language local-data explanation and clear-data control |

The cart remains a side drawer on wide screens and a bottom sheet or full-height panel on mobile. It should not require a dedicated cart route unless testing shows that accessibility or navigation is materially better with one.

### Recommended page rhythm

1. Persistent zero-cost/parody notice.
2. Header with wordmark, navigation, search, locale control, and cart count.
3. Hero with one clear call to action and an original visual statement.
4. Three-step explainer: add, pretend to pay, track.
5. Category discovery with meaningful product counts.
6. Featured or randomized products.
7. Full searchable/filterable catalog.
8. Short editorial section explaining the idea without making medical claims.
9. FAQ and trust summary.
10. Footer with About, Privacy, clear-local-data control, and attribution links.

## MVP scope

### Storefront

- Hero statement with an always-visible parody/zero-charge explanation.
- Featured products and category browsing.
- Product cards with image, name, imaginary price, rating, and add-to-cart action.
- Search and category filtering.
- Responsive layout optimized for mobile.

Suggested initial categories:

- 睡眠星系
- 穿搭軌道
- 玩樂宇宙
- 出門探索
- 小窩禮物

### Product details

- Original product name, description, imagery, imaginary price, and optional variants.
- Add-to-cart interaction with immediate visual and accessible feedback.
- Prominent text stating that the item is fictional and cannot be purchased.

### Cart

- Change quantity and remove items.
- Show imaginary subtotal and savings.
- Force the payable total to `HK$0` at both presentation and business-logic levels.
- Persist the cart locally so a refresh does not lose it.
- Open a polished cart drawer after adding an item, following the interaction quality demonstrated by Maison Mallow.
- Include product thumbnail, name, selected variant, quantity stepper, imaginary line total, and remove action.
- Replace conventional shipping-threshold persuasion with playful, non-commercial feedback such as **「再加幾多件都係免運，因為根本冇貨送。」**

### Fictional checkout

- No real payment integration and no editable payment credentials.
- A pre-filled display-only method such as `DOPAMINE PASS •••• 0000`.
- Delivery destination is limited to a broad, optional district selection; never request a street address for the MVP.
- Required acknowledgement: **「我明白呢個係模擬落單，唔會付款，亦唔會收到貨。」**
- Final button: **「模擬落單・HK$0」**.
- Show the imaginary subtotal as context, then apply a named discount such as **「多巴胺全免優惠」** equal to the full amount.
- Do not show shipping fees, tax, installment offers, or a non-zero amount on the primary action.

### Order confirmation and tracking

- Generate a random local-only order reference that cannot identify the visitor.
- Animate a short status timeline, for example:
  - 落單成功
  - 店員喺貨倉搵緊你件貨
  - 件貨搭錯咗船去長洲
  - 速遞員喺獅子山迷路
  - 成功送達你嘅想像力
- Include multiple randomized story branches for replay value.
- Store fictional orders only in the browser.

### Sharing

- Generate a share card containing product summary, imaginary spend, HK$0 paid, and a comic delivery outcome.
- Never include district choice, browser identifiers, or other personal data in the card or share URL.
- Use the native Web Share API where supported, with download/copy fallback.

### Information pages

- About / How it works.
- Privacy statement in plain language.
- FAQ covering whether the store, payment, and delivery are real.

## Explicitly out of scope for MVP

- Real payments, payment SDKs, financial accounts, or donations inside checkout.
- Real fulfillment, restaurant integrations, courier APIs, or inventory.
- User accounts, email collection, push notifications, or marketing subscriptions.
- Precise location, GPS, street address, phone number, or identity collection.
- Marketplace uploads or third-party sellers.
- Leaderboards, streak pressure, loot boxes, or dark-pattern retention mechanics.
- Scraping commercial catalogs or copying product descriptions and branded assets without permission.

## Content and voice

Primary UI language is Traditional Chinese (`zh-HK`) with concise, natural Cantonese phrasing. English (`en`) may be added through the same translation system. Do not hard-code both languages into components.

Voice characteristics:

- Playful, self-aware, and locally recognizable.
- Short phrases suitable for mobile screens.
- Never deceptive, coercive, or shame-based.
- Avoid claims about treating addiction, anxiety, or other medical conditions.

Example copy:

- Hero: **買盡全世界，埋單都係 $0。**
- Supporting line: **加落購物車、撳掣「付款」、等件永遠唔會到嘅貨。全程純屬玩樂。**
- Cart success: **加咗！銀包表示非常安全。**
- Confirmation: **落單成功——放心，冇任何錢離開過你。**

## Visual direction

- Energetic editorial-commerce aesthetic rather than a clone of a specific retailer.
- Warm off-white or near-black base with one vivid dopamine accent color.
- Oversized headlines, expressive stickers, tactile product cards, and restrained motion.
- Use original illustrations, properly licensed photography, or generated imagery with documented provenance.
- Avoid third-party retailer logos, payment-provider marks, or layouts that imply affiliation.

Motion should reward actions but respect `prefers-reduced-motion`. Avoid constant animation, flashing, or effects that block navigation.

### Visual system requirements

Build a small, explicit design system before styling individual sections:

- One display typeface and one highly legible UI typeface, both supporting Traditional Chinese.
- A compact palette with named semantic roles: canvas, surface, ink, muted ink, accent, success, warning, focus, and overlay.
- A consistent spacing scale, three or fewer corner-radius tiers, and restrained elevation levels.
- Standard product-card aspect ratio to prevent layout movement while images load.
- Shared treatments for category tiles, product badges, price displays, cart rows, and status steps.
- A distinct illustration language for fictional delivery stories.

Maison Mallow proves that calm art direction and clear commerce structure can coexist. This project should keep that level of coherence while moving toward a louder, more mischievous identity suited to the concept.

## Catalog strategy

The first catalog contains 50 original fictional baby and nursery products across five categories. Each product has a dedicated locally hosted image and original Traditional Chinese/Cantonese copy.

Catalog rules:

- Mix plausible aspirational products with a smaller number of absurd, shareable items.
- Use stable IDs and slugs independent of translated names.
- Include at least one accessible, properly cropped image per product.
- Keep prices believable enough to make the imaginary subtotal satisfying.
- Use badges sparingly (`熱門`, `新品`, `離譜之選`) and translate them through locale files.
- Do not imply that a real brand manufactured or endorsed a fictional item.
- Keep searchable aliases in catalog data so Hong Kong vocabulary variants can find the same item.

Representative product directions:

- 星海慢游鯨魚
- 漂浮雲朵夜燈
- 月光針織小外套
- 小行星疊疊塔
- 星座紗巾三件組
- 第一次環遊禮物組

The existing generated product imagery is part of the Little Orbit identity. Keep it local, optimized, and mapped to products by stable slug.

## Localization and currency behavior

Maison Mallow demonstrates that language and currency controls can work independently. For this project:

- Default to `zh-HK` and HKD.
- Ship English as the second locale only when the complete primary journey is translated; never mix fallback English into a Traditional Chinese checkout.
- Preserve the visitor's locale preference locally.
- HKD is the canonical catalog currency for MVP. If more display currencies are added later, convert only the imaginary subtotal; the charged amount remains numeric zero in every currency.
- Use `Intl.NumberFormat` and test zero, large totals, and locale switching.
- Search should match localized names and aliases for the active locale.

## Safety, privacy, and trust requirements

These are release blockers:

- Display **「純屬模擬・不會收費・不會送貨」** in the header or another persistent location.
- Do not render inputs that resemble usable card-number, CVV, bank-login, or government-ID fields.
- Do not send checkout, cart, or district data to a server in the MVP.
- Do not use third-party analytics that capture form values or replay sessions by default.
- Do not claim that a real merchant, courier, or payment provider participates.
- Do not let a visual bug show a payable total above HK$0.
- Include a one-click way to clear all locally stored cart and order data.
- External links must be visually distinguishable and use safe link attributes where appropriate.

## Accessibility and quality bar

- Meet WCAG 2.2 AA for the primary journey.
- Full keyboard support, visible focus, semantic landmarks, and meaningful button labels.
- Product imagery has useful alt text; decorative art has empty alt text.
- Color is never the only indicator of state.
- Cart updates are announced through an appropriate live region.
- Dialogs trap focus, close with Escape, and restore focus to their trigger.
- Support current mobile and desktop versions of Safari, Chrome, Firefox, and Edge.
- Aim for Lighthouse scores of 90+ in Performance, Accessibility, Best Practices, and SEO on production builds.

## Suggested technical foundation

Unless the repository establishes another stack, use:

- Next.js with TypeScript and the App Router.
- CSS Modules or a small token-based styling layer; avoid adding a large UI framework without need.
- Static catalog data stored in the repository.
- React context or a lightweight store for cart and fictional-order state.
- `localStorage` behind a versioned persistence adapter.
- `next-intl` or an equivalent typed translation system for `zh-HK` and future `en` support.
- Vitest and Testing Library for behavior tests; Playwright for the core mobile journey.

The application should remain deployable as a mostly static site. Server-side state is unnecessary for the MVP.

## Conceptual data model

```ts
type Product = {
  id: string;
  slug: string;
  nameKey: string;
  descriptionKey: string;
  category: string;
  imaginaryPriceHkd: number;
  image: { src: string; altKey: string; credit?: string };
  variants?: Array<{ id: string; labelKey: string }>;
};

type CartItem = {
  productId: string;
  variantId?: string;
  quantity: number;
};

type FictionalOrder = {
  id: string;
  createdAt: string;
  items: CartItem[];
  imaginarySubtotalHkd: number;
  chargedHkd: 0;
  district?: string;
  storyId: string;
};
```

Money values are integers in HKD for the MVP. `chargedHkd` must be the literal type and runtime value `0`.

## MVP acceptance criteria

The MVP is complete when:

- A first-time mobile visitor understands within five seconds that the shop is fictional and free.
- A visitor can complete the browse → cart → fictional checkout → tracking journey without an account.
- No step accepts or transmits sensitive personal or payment data.
- The payable amount is always HK$0, including after quantity and navigation changes.
- Refreshing preserves local cart/order state, and the visitor can clear it.
- At least three distinct fictional delivery stories are available.
- The primary journey works by keyboard and with reduced motion enabled.
- Automated tests cover pricing invariants, cart behavior, checkout acknowledgement, and order creation.
- Production build, lint, type checks, and tests pass.
- Locale changes update navigation, product content, accessible labels, cart, checkout, and order tracking as one consistent experience.
- The cart drawer supports quantity changes and has a useful empty state at mobile and desktop widths.

## Later opportunities

- English localization.
- More Hong Kong-themed fictional products and delivery stories.
- A “surprise me” product selector.
- Privacy-safe shared carts encoded in the URL.
- Installable PWA support.
- Optional mindful-spending prompts, written as general wellness content and not medical advice.

## Source control and deployment

The canonical source lives in the public or private GitHub repository `teze3808/dopamine-website-baby-products-little-orbit`. Render deploys from its default branch.

Release workflow:

1. Run lint, type checks, tests, and the production build locally.
2. Commit only source, documentation, configuration, and approved static assets.
3. Exclude `node_modules`, `dist`, local caches, logs, and secrets.
4. Push the verified default branch to GitHub.
5. Configure a Render Static Site connected to the GitHub repository.
6. Use build command `pnpm build` and publish directory `dist`.
7. Verify the live homepage, a cart interaction, the fictional checkout, and direct-route fallback behavior after deployment.

Do not place API keys or Render deploy hooks in the repository. If Render assigns a hostname with a suffix, record the final production URL here after successful deployment.

## References

The concept was inspired by the interaction genre demonstrated by:

- [dopamineshopping.com](https://dopamineshopping.com/)
- [dopaminekart.com](https://dopaminekart.com/)
- [FoodNeverComes.com](https://foodnevercomes.com/)

The creator's previous prototype is a direct internal reference for storefront craft and reusable interaction decisions:

- [Maison Mallow](https://maison-mallow.onrender.com/)

These are product references only. Do not copy their code, trademarks, copy, imagery, product catalog, or distinctive visual identity.
