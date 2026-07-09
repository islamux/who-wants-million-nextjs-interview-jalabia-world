import type { Question, MoneyLevel } from '../types/game'

export const chapterQuestionsEn: Record<number, Question[]> = {
  1: [
    {
      text: 'In `src/app/page.tsx`, why would a Server Component be declared as `async`?',
      options: [
        { text: 'It can await data-fetching functions directly on the server, eliminating the need for `useEffect` and client-side loading states.', correct: true },
        { text: 'All React components in Next.js 16 must be declared async regardless of their role.', correct: false },
        { text: 'Async components are only valid inside Client Components, not Server Components.', correct: false },
        { text: 'The `async` keyword is a linter convention with no effect on rendering behavior.', correct: false },
      ],
    },
    {
      text: 'Why does `src/components/SearchInput.tsx` need `"use client"` at the top of the file?',
      options: [
        { text: 'It uses `useState` for the search term and `onChange` handlers — hooks and event handlers only execute on the client.', correct: true },
        { text: 'Every file that imports a CSS module requires the client directive.', correct: false },
        { text: 'Any component returning JSX must be a Client Component in the App Router.', correct: false },
        { text: 'The directive is only needed for TypeScript files to enable type inference.', correct: false },
      ],
    },
    {
      text: 'In `src/app/dashboard/page.tsx`, data is fetched with `await fetch(...)` at the component\u2019s top level. Where does this code execute?',
      options: [
        { text: 'On the server at request time — Server Components run on the server and their output is sent to the client as serialized HTML.', correct: true },
        { text: 'In the browser after the component mounts, just like Client Components.', correct: false },
        { text: 'Partially on the server for the initial render, then entirely on the client for subsequent navigations.', correct: false },
        { text: 'In a Web Worker to avoid blocking the main thread during SSR.', correct: false },
      ],
    },
    {
      text: 'What does `"strict": true` in `tsconfig.json` actually enforce?',
      options: [
        { text: 'It enables `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, and several other type-checking flags that tighten TypeScript\'s type safety.', correct: true },
        { text: 'It guarantees that no runtime errors will occur in production.', correct: false },
        { text: 'It only controls VS Code squiggly lines — the TypeScript compiler ignores the strict flag during build.', correct: false },
        { text: 'It requires every function to have an explicit return type annotation or the build fails.', correct: false },
      ],
    },
    {
      text: 'In `src/hooks/useMediaQuery.ts`, a `useEffect` sets state to `true` only after mount. Why not set it during render?',
      options: [
        { text: 'The hook reads `window.matchMedia` which does not exist during server rendering; deferring to `useEffect` prevents a hydration mismatch.', correct: true },
        { text: 'React 19 prohibits all state updates during the render phase — only `useEffect` is allowed.', correct: false },
        { text: 'Setting state during render would be faster; deferring is purely a stylistic convention.', correct: false },
        { text: 'SSR automatically skips `useEffect` calls, so the outcome is identical either way.', correct: false },
      ],
    },
  ],
  2: [
    {
      text: 'Why use `src/app/[locale]/layout.tsx` with a dynamic segment instead of creating `src/app/en/` and `src/app/ar/` as separate folders?',
      options: [
        { text: 'A single dynamic segment shares all layout and routing logic across locales, validating the locale param once instead of duplicating per-locale folder trees.', correct: true },
        { text: 'Separate locale folders are not supported by the Next.js App Router.', correct: false },
        { text: 'Dynamic segments are always rendered faster than static route folders.', correct: false },
        { text: 'The middleware layer can only intercept dynamic route segments, not static folder names.', correct: false },
      ],
    },
    {
      text: 'What role does `src/lib/api-client.ts` play in a typical Next.js project structure?',
      options: [
        { text: 'It centralizes all external API calls with shared base URL, error handling, and typed request/response contracts — a single place to configure HTTP logic.', correct: true },
        { text: 'It is a React component that renders API response data directly into the DOM.', correct: false },
        { text: 'It replaces Next.js API routes entirely, handling all server logic.', correct: false },
        { text: 'It only stores static configuration constants and environment variable values.', correct: false },
      ],
    },
    {
      text: 'Why keep `src/app/products/page.tsx` as a Server Component while `src/components/AddToCartButton.tsx` is a Client Component?',
      options: [
        { text: 'Server Components reduce the client JS bundle and fetch data at request time; Client Components handle interactive state like button clicks and local state.', correct: true },
        { text: 'Server Components cannot receive props, so all data display must happen in Client Components.', correct: false },
        { text: 'Next.js requires every `page.tsx` to be a Server Component regardless of interactivity.', correct: false },
        { text: 'Client Components are always faster at rendering than Server Components for any workload.', correct: false },
      ],
    },
    {
      text: 'What distinguishes `src/components/ui/Button.tsx` from `src/components/CheckoutForm.tsx` in a well-structured project?',
      options: [
        { text: '`ui/Button.tsx` is a low-level reusable primitive with no business logic; `CheckoutForm.tsx` is a feature component with domain-specific state and behavior.', correct: true },
        { text: 'Only files inside `src/components/ui/` are allowed to accept a `className` prop.', correct: false },
        { text: 'Feature components are prohibited from importing anything from the `ui/` directory.', correct: false },
        { text: 'The bundler applies different tree-shaking rules to files inside `src/components/ui/`.', correct: false },
      ],
    },
    {
      text: 'In `src/app/layout.tsx`, why wrap the entire `<body>` in provider components instead of placing providers inside each page?',
      options: [
        { text: 'The root layout is the single place where providers wrap the entire app once, avoiding provider re-mounting on client-side navigation between pages.', correct: true },
        { text: 'Providers can only be rendered inside layout files — they are illegal inside page components.', correct: false },
        { text: 'Each page requires its own isolated provider instance to prevent cross-page state leaks.', correct: false },
        { text: 'Layout components re-render from scratch on every route change, resetting all provider state.', correct: false },
      ],
    },
  ],
  3: [
    {
      text: 'In `src/components/GameEngine.tsx`, why choose `useReducer` over multiple `useState` calls for managing complex state?',
      options: [
        { text: '`useReducer` centralizes all state transitions in a single pure reducer function, making complex logic predictable, debuggable, and testable through dispatched actions.', correct: true },
        { text: '`useReducer` is always measurably faster than `useState` regardless of state complexity.', correct: false },
        { text: 'React enforces `useReducer` whenever a component manages more than three state variables.', correct: false },
        { text: '`useState` has been deprecated in React 19 in favor of `useReducer`.', correct: false },
      ],
    },
    {
      text: 'In `src/components/ProductFilter.tsx`, `useMemo` wraps the filtered products computation. When is `useMemo` counterproductive?',
      options: [
        { text: 'When the computation is trivially cheap — `useMemo` itself has a cost, and for simple operations it adds more overhead than it saves.', correct: true },
        { text: '`useMemo` should always wrap every derived value for consistency.', correct: false },
        { text: '`useMemo` cannot be used inside Client Components — it is server-only.', correct: false },
        { text: '`useMemo` is deprecated in React 19 and replaced by `useCallback`.', correct: false },
      ],
    },
    {
      text: 'How does `src/app/products/page.tsx` (a Server Component) pass fetched data to `src/components/ProductList.tsx` (a Client Component)?',
      options: [
        { text: 'The Server Component awaits the data, then passes it as serializable props to the Client Component — React handles crossing the server-client boundary.', correct: true },
        { text: 'Client Components must re-fetch all data themselves in `useEffect` on mount; server data cannot be passed as props.', correct: false },
        { text: 'Data flows through a shared Zustand store that is initialized on the server and hydrated on the client.', correct: false },
        { text: 'Server Components encode data into URL search parameters, and Client Components read them with `useSearchParams`.', correct: false },
      ],
    },
    {
      text: 'In `src/context/AuthContext.tsx`, what does React Context solve and what does it NOT solve?',
      options: [
        { text: 'Context eliminates prop drilling for deeply nested consumers, but every consumer re-renders when the context value changes — it does not optimize rendering.', correct: true },
        { text: 'Context fully replaces the need for any external state management library in all applications.', correct: false },
        { text: 'Context is limited to server-side state only and cannot hold client-side values.', correct: false },
        { text: 'Context automatically memoizes all consumers, preventing any unnecessary re-renders.', correct: false },
      ],
    },
    {
      text: 'In `src/hooks/useDebounce.ts`, `useEffect` declares `[value, delay]` as dependencies. What happens if `delay` is omitted from the array?',
      options: [
        { text: 'The debounced value would never update if `delay` changes, and the exhaustive-deps lint rule would flag a missing dependency warning.', correct: true },
        { text: 'React ignores the dependency array entirely — all effects run on every render regardless.', correct: false },
        { text: 'The effect runs on every single render because the array is invalid.', correct: false },
        { text: 'Omitting dependencies from the array is the recommended pattern for performance optimization.', correct: false },
      ],
    },
    {
      text: 'In `src/components/Dashboard.tsx`, `selectedTab` state is kept local via `useState` instead of being lifted to the parent. Why?',
      options: [
        { text: 'It is local UI state that no sibling or ancestor component needs access to; lifting it would add unnecessary complexity and trigger extra re-renders.', correct: true },
        { text: 'All React state must remain local to the component that first renders it.', correct: false },
        { text: 'Parent components in the App Router are always Server Components and cannot hold interactive state.', correct: false },
        { text: 'Lifting state is an anti-pattern in React and should always be avoided.', correct: false },
      ],
    },
  ],
  4: [
    {
      text: 'Why is `setRequestLocale(locale)` called in both `src/app/[locale]/layout.tsx` and `src/app/[locale]/page.tsx`?',
      options: [
        { text: 'It enables static rendering per locale and ensures `next-intl` APIs resolve the correct locale for all server-side calls within the entire request scope.', correct: true },
        { text: 'It modifies the user\'s browser language preference stored in the `Accept-Language` header.', correct: false },
        { text: 'Calling it in the root layout is sufficient; calling it again in the page is a redundant mistake.', correct: false },
        { text: 'It performs a redirect to the default locale when an unsupported locale is detected.', correct: false },
      ],
    },
    {
      text: 'What happens when `hasLocale(routing.locales, locale)` returns `false` inside `src/app/[locale]/layout.tsx`?',
      options: [
        { text: 'The layout calls `notFound()`, which renders the Next.js 404 page — preventing the app from serving content for an unsupported locale.', correct: true },
        { text: 'The middleware automatically translates all content to the closest matching locale.', correct: false },
        { text: 'The locale segment is silently stripped from the URL and the default locale is used instead.', correct: false },
        { text: 'The request is forwarded to the `/api/locale` route for dynamic resolution.', correct: false },
      ],
    },
    {
      text: 'How does `useTranslations("Common")` inside `src/components/Navbar.tsx` differ from server-side `getMessages()`?',
      options: [
        { text: '`useTranslations` is a client-side hook reading from messages provided by `NextIntlClientProvider`; `getMessages()` loads JSON message files directly on the server.', correct: true },
        { text: 'Both are fully interchangeable — `getMessages()` can be called inside any Client Component.', correct: false },
        { text: '`getMessages()` is only available inside `useEffect` callbacks, not at the top level of components.', correct: false },
        { text: '`useTranslations` works without `NextIntlClientProvider` wrapping the component tree.', correct: false },
      ],
    },
    {
      text: 'What content belongs in `src/messages/en.json` and `src/messages/ar.json`?',
      options: [
        { text: 'Key-value pairs for every translatable UI string — button labels, headings, error messages — loaded by `next-intl` based on the active locale.', correct: true },
        { text: 'The full application business logic, including database queries and API route handlers.', correct: false },
        { text: 'Routing configuration, middleware rules, and redirect patterns for each locale.', correct: false },
        { text: 'Build-time only metadata used by the bundler for tree-shaking and dead-code elimination.', correct: false },
      ],
    },
    {
      text: 'Why does `src/app/[locale]/layout.tsx` set `dir={locale === "ar" ? "rtl" : "ltr"}` on the root HTML element?',
      options: [
        { text: 'It applies correct text direction: right-to-left for Arabic, left-to-right for English — affecting layout, text alignment, and scrollbar placement.', correct: true },
        { text: 'It only changes the HTML `lang` attribute used by search engines for indexing.', correct: false },
        { text: 'Tailwind CSS requires the `dir` attribute on every element to compile utility classes.', correct: false },
        { text: 'It horizontally flips all images and icons to match the reading direction.', correct: false },
      ],
    },
  ],
  5: [
    {
      text: 'In Tailwind CSS v4, how does `@tailwindcss/postcss` change the configuration approach from v3?',
      options: [
        { text: 'Configuration moves into CSS itself via `@theme` and `@import` directives, removing the need for a separate `tailwind.config.js` file.', correct: true },
        { text: 'All utility classes are removed; only inline styles and CSS modules are supported.', correct: false },
        { text: 'Every component must import its own isolated Tailwind configuration file.', correct: false },
        { text: 'Dark mode and responsive variants are disabled by default.', correct: false },
      ],
    },
    {
      text: 'In `src/app/page.tsx`, why wrap `<ProductGallery>` inside `dynamic(() => import(...), { ssr: true, loading: () => <Skeleton /> })`?',
      options: [
        { text: 'It code-splits the component into a separate JS chunk while keeping server-side rendering, and shows a skeleton placeholder while the chunk downloads.', correct: true },
        { text: 'It completely disables server-side rendering so the component only mounts in the browser.', correct: false },
        { text: 'It makes the component load instantly by pre-fetching all its sub-imports at build time.', correct: false },
        { text: '`dynamic()` is a mandatory wrapper for every component in the Next.js App Router.', correct: false },
      ],
    },
    {
      text: 'How does a PWA service worker enable offline functionality without a network connection?',
      options: [
        { text: 'It precaches static assets (JS, CSS, images) at install time and serves them from Cache Storage when the network is unavailable.', correct: true },
        { text: 'It downloads the entire website as a single ZIP archive stored in localStorage.', correct: false },
        { text: 'It stores every user interaction and replays them when connectivity resumes.', correct: false },
        { text: 'Service workers can only cache API JSON responses, not JavaScript or CSS bundles.', correct: false },
      ],
    },
    {
      text: 'Why configure `images.formats: ["image/avif", "image/webp"]` in `next.config.mjs`?',
      options: [
        { text: 'It tells the Next.js image optimizer to serve modern, bandwidth-efficient formats when the browser supports them, reducing page weight.', correct: true },
        { text: 'It forces all images to be converted to grayscale for accessibility.', correct: false },
        { text: 'This setting only applies to images hosted on external CDNs, not local images.', correct: false },
        { text: 'It disables the built-in image optimizer and falls back to raw `<img>` tags.', correct: false },
      ],
    },
    {
      text: 'What is the purpose of Content-Security-Policy headers defined in `next.config.mjs`?',
      options: [
        { text: 'They restrict which origins can load scripts, styles, images, and fonts — mitigating XSS and data injection attacks.', correct: true },
        { text: 'They enable automatic server-side caching of all static assets with infinite TTL.', correct: false },
        { text: 'They configure which Tailwind utility classes are included in the production CSS bundle.', correct: false },
        { text: 'They are a prerequisite for `next-intl` to detect and switch locales correctly.', correct: false },
      ],
    },
    {
      text: 'In `src/components/SearchResults.tsx`, what does `<Suspense fallback={<Spinner />}>` achieve when wrapping an async component?',
      options: [
        { text: 'It shows a spinner while the wrapped async component waits for data, enabling streaming SSR where the rest of the page renders immediately.', correct: true },
        { text: 'It automatically retries the async operation up to three times if it fails.', correct: false },
        { text: 'It disables JavaScript execution for the wrapped subtree to improve performance.', correct: false },
        { text: '`Suspense` only works with `useEffect` and `useState`, not with async Server Components.', correct: false },
      ],
    },
  ],
  6: [
    {
      text: 'Why use `import type { User }` instead of `import { User }` in `src/types/user.ts`?',
      options: [
        { text: '`import type` signals a type-only import; bundlers drop it from the JavaScript output since types do not exist at runtime.', correct: true },
        { text: '`import type` is required by Next.js for all imports inside Server Components.', correct: false },
        { text: 'It makes the imported type available at runtime for use with `typeof` and `instanceof`.', correct: false },
        { text: 'There is no behavioral or output difference between the two import forms.', correct: false },
      ],
    },
    {
      text: 'In `src/hooks/useGame.ts`, game actions are modeled as a discriminated union: `{ type: "MOVE"; x: number } | { type: "ATTACK"; target: string }`. What advantage does this give?',
      options: [
        { text: 'TypeScript narrows the payload type when you switch on `type`, giving exhaustiveness checking, precise autocomplete per variant, and compile-time safety for the reducer.', correct: true },
        { text: 'Discriminated unions are the only valid way to pass arguments to `useReducer` — plain objects are rejected.', correct: false },
        { text: 'They make the code execute faster by avoiding any runtime type-checking in the reducer.', correct: false },
        { text: 'TypeScript does not natively support discriminated unions; it is a community convention without compiler enforcement.', correct: false },
      ],
    },
    {
      text: 'Why is `params` typed as `Promise<{ locale: string }>` in Next.js 16 page components?',
      options: [
        { text: 'Next.js 16 made route parameters asynchronous; components must `await params` before accessing properties like `params.locale`.', correct: true },
        { text: 'It is a typo in the type definitions — `params` should be a plain synchronous object.', correct: false },
        { text: '`Promise` is only used for query parameters like `?search=term`, not for path segments.', correct: false },
        { text: 'Wrapping `params` in a Promise makes the locale optional and allows the page to render without it.', correct: false },
      ],
    },
    {
      text: 'What risk does `const config = parseYaml(raw) as AppConfig` introduce in `src/lib/config-loader.ts`?',
      options: [
        { text: 'The `as` assertion bypasses TypeScript checks — if `parseYaml` returns malformed data, `config` may have missing fields that cause runtime errors.', correct: true },
        { text: 'It performs extra runtime validation of the YAML structure before the cast applies.', correct: false },
        { text: 'It makes the parser execute faster by skipping validation of unused config fields.', correct: false },
        { text: 'Type assertions are erased by the bundler and have zero effect on runtime behavior.', correct: false },
      ],
    },
    {
      text: 'In `src/lib/data-service.ts`, why use `Promise.all(files.map(f => parseFile(f)))` instead of a `for...of` loop?',
      options: [
        { text: 'All files are parsed concurrently rather than one after another, reducing total I/O time when the operations are independent.', correct: true },
        { text: '`Promise.all` guarantees the result array is sorted alphabetically by filename.', correct: false },
        { text: 'Sequential parsing with `for...of` is always faster for filesystem operations.', correct: false },
        { text: '`Promise.all` silently catches and suppresses errors from individual file parses.', correct: false },
      ],
    },
  ],
}

export const moneyLevelsEn: MoneyLevel[] = [
  { amount: '1,000 SAR', isSafeHaven: false },
  { amount: '5,000 SAR', isSafeHaven: false },
  { amount: '10,000 SAR', isSafeHaven: true },
  { amount: '100,000 SAR', isSafeHaven: false },
  { amount: '250,000 SAR', isSafeHaven: true },
  { amount: '1,000,000 SAR', isSafeHaven: false },
]

export const chapterListEn = [
  { id: 1, title: 'Next.js & React Basics' },
  { id: 2, title: 'Architecture & Structure' },
  { id: 3, title: 'State & Data Flow' },
  { id: 4, title: 'i18n & next-intl' },
  { id: 5, title: 'Styling, PWA & Performance' },
  { id: 6, title: 'TypeScript & Edge Cases' },
]

export const chapterNamesEn: Record<number, string> = {
  1: 'First',
  2: 'Second',
  3: 'Third',
  4: 'Fourth',
  5: 'Fifth',
  6: 'Sixth',
}
