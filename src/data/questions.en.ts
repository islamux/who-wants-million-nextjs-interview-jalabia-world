import type { Question, MoneyLevel } from '../types/game'

export const chapterQuestionsEn: Record<number, Question[]> = {
  1: [
    {
      text: 'Why is the `Home` page component declared as `async` in the Next.js App Router?',
      options: [
        { text: 'Server Components can be async so they can await `params` and data-fetching functions like `StoryService.getSortedStoriesData`.', correct: true },
        { text: 'All page components in Next.js 16 must be async, including Client Components.', correct: false },
        { text: 'Async components are required only when using the Pages Router, not the App Router.', correct: false },
        { text: 'The `async` keyword has no effect in React Server Components.', correct: false },
      ],
    },
    {
      text: 'What is the main difference between `page.tsx` and `FeaturedStories.tsx` in this project?',
      options: [
        { text: '`page.tsx` is a Server Component that fetches data; `FeaturedStories.tsx` is a Client Component that holds interactive state.', correct: true },
        { text: 'There is no difference — both are rendered on the server only.', correct: false },
        { text: '`page.tsx` runs in the browser, while `FeaturedStories.tsx` runs on the server.', correct: false },
        { text: 'Only `page.tsx` can use JSX; `FeaturedStories.tsx` must return a plain object.', correct: false },
      ],
    },
    {
      text: 'In `useHasMounted`, why is `setHasMounted(true)` called inside `useEffect` instead of during render?',
      options: [
        { text: 'It prevents hydration mismatches by only marking the component as mounted after the client-side effect runs.', correct: true },
        { text: 'Calling it during render would be faster and produce the same result.', correct: false },
        { text: '`useEffect` is forbidden from calling `setState` in React 19.', correct: false },
        { text: 'The hook is meant to run during server rendering, not on the client.', correct: false },
      ],
    },
    {
      text: 'Why must `"use client";` be added at the top of a component that uses `useState` or `useTranslations`?',
      options: [
        { text: 'In the App Router, components default to Server Components; hooks that need browser APIs or client context require the client directive.', correct: true },
        { text: 'It is only a linter hint and has no runtime effect in Next.js.', correct: false },
        { text: 'All components with JSX must include `"use client";` regardless of hooks.', correct: false },
        { text: 'It disables TypeScript strict mode for that file.', correct: false },
      ],
    },
    {
      text: 'What does TypeScript strict mode enforce in this project, and where is it enabled?',
      options: [
        { text: 'It enables stronger type checks like `noImplicitAny`; it is turned on in `tsconfig.json` via `"strict": true`.', correct: true },
        { text: 'Strict mode is enabled by `next.config.mjs` and disables all `any` usage at runtime.', correct: false },
        { text: 'It is a Next.js default that cannot be changed.', correct: false },
        { text: 'Strict mode only affects ESLint rules, not the TypeScript compiler.', correct: false },
      ],
    },
  ],
  2: [
    {
      text: 'Why does the project use `src/app/[locale]` with a dynamic segment instead of separate `src/app/en` and `src/app/ar` folders?',
      options: [
        { text: 'A dynamic locale segment lets a single layout/page serve both languages while sharing routing logic and validating the locale.', correct: true },
        { text: 'Dynamic segments are required for static site generation and prevent ISR.', correct: false },
        { text: 'Separate folders are impossible with `next-intl`.', correct: false },
        { text: 'It is purely cosmetic and has no impact on routing.', correct: false },
      ],
    },
    {
      text: 'What is the role of `src/lib/story-service.ts` in the data flow?',
      options: [
        { text: 'It encapsulates all story data operations — parsing markdown, filtering by locale, sorting, and fetching individual stories.', correct: true },
        { text: 'It is a React component that renders the story list.', correct: false },
        { text: 'It only stores static JSON configuration for the build.', correct: false },
        { text: 'It runs in the browser and fetches stories from an external API.', correct: false },
      ],
    },
    {
      text: 'Why are page components kept as Server Components while interactivity is delegated to client components?',
      options: [
        { text: 'Server Components reduce client-side JavaScript and can fetch data directly; client components handle state and browser events.', correct: true },
        { text: 'Server Components cannot use props, so client components are needed for rendering.', correct: false },
        { text: 'It is a limitation of `next-intl` that all pages must be Server Components.', correct: false },
        { text: 'Client Components are always faster than Server Components for data fetching.', correct: false },
      ],
    },
    {
      text: 'What is the benefit of co-locating markdown stories in `src/stories/` as `slug.md` and `slug-ar.md` pairs?',
      options: [
        { text: 'It keeps content under version control, pairs translations by filename, and lets `story-parser.ts` determine the locale from the suffix.', correct: true },
        { text: 'Markdown files must live inside `src/app` to be routable.', correct: false },
        { text: 'It prevents static generation because markdown cannot be parsed at build time.', correct: false },
        { text: 'The filename suffix has no special meaning to the parser.', correct: false },
      ],
    },
    {
      text: 'Why does the project separate UI primitives (`src/components/ui/`) from feature components (`src/components/`)?',
      options: [
        { text: 'It separates reusable, low-level building blocks from domain-specific feature components, improving reusability and testing.', correct: true },
        { text: 'Next.js only compiles files inside `src/components/ui/` by default.', correct: false },
        { text: 'Feature components cannot import files from `src/components/ui/`.', correct: false },
        { text: 'There is no real benefit; it is only a naming convention.', correct: false },
      ],
    },
  ],
  3: [
    {
      text: 'In `FeaturedStories`, why is `useMemo` used to compute `countries` and `filteredStories`?',
      options: [
        { text: 'To avoid recomputing the country list and filtered array on every render unless `stories` or `selectedCountry` changes.', correct: true },
        { text: 'Because `useMemo` is required whenever `useState` is used in the same component.', correct: false },
        { text: 'It makes the component a Server Component.', correct: false },
        { text: 'Memoization is always harmful and should be avoided in React 19.', correct: false },
      ],
    },
    {
      text: 'What problem does the `useHasMounted` hook solve, and where is it used?',
      options: [
        { text: 'It guards against hydration mismatches for components like `ThemeToggle` that depend on client-only theme state.', correct: true },
        { text: 'It replaces `useEffect` for all data fetching.', correct: false },
        { text: 'It forces a component to render only on the server.', correct: false },
        { text: 'It is used to detect when the window has finished resizing.', correct: false },
      ],
    },
    {
      text: 'How does `next-themes` manage theme state, and why is `suppressHydrationWarning` set on the html element?',
      options: [
        { text: '`next-themes` reads and persists the theme on the client; `suppressHydrationWarning` silences mismatches between server-rendered and client-rendered theme attributes.', correct: true },
        { text: 'It stores theme in a cookie and `suppressHydrationWarning` disables all React warnings.', correct: false },
        { text: 'Theme is determined entirely by the server and never changes on the client.', correct: false },
        { text: '`suppressHydrationWarning` enables dark mode automatically.', correct: false },
      ],
    },
    {
      text: 'Why is `selectedCountry` stored in `useState` inside `FeaturedStories` instead of the URL or global state?',
      options: [
        { text: 'It is local UI state that does not need to be shared or persisted; lifting it would add unnecessary complexity.', correct: true },
        { text: 'The URL cannot hold state in Next.js App Router.', correct: false },
        { text: 'Global state is required for all interactive state in React.', correct: false },
        { text: '`useState` is deprecated in React 19.', correct: false },
      ],
    },
    {
      text: 'What is the data flow when a user visits the homepage?',
      options: [
        { text: '`page.tsx` awaits `StoryService.getSortedStoriesData(locale)`, then passes the resulting array to `HomePageClient`, which renders `FeaturedStories`.', correct: true },
        { text: '`HomePageClient` fetches stories directly from the browser on mount.', correct: false },
        { text: 'Stories are loaded from `messages/en.json` via `useTranslations`.', correct: false },
        { text: 'The markdown files are sent to the client and parsed there.', correct: false },
      ],
    },
    {
      text: 'Why does `StoryOfTheDay` derive the excerpt from `contentHtml` instead of storing it in `StoryData`?',
      options: [
        { text: 'It keeps `StoryData` focused on raw content and derives presentation text at render time, avoiding stale or duplicated data.', correct: true },
        { text: 'HTML strings cannot be stored in TypeScript interfaces.', correct: false },
        { text: 'Deriving it at runtime is always slower than storing it.', correct: false },
        { text: '`contentHtml` is not available in `StoryData`.', correct: false },
      ],
    },
  ],
  4: [
    {
      text: 'Why is `setRequestLocale(locale)` called in both `LocaleLayout` and the `Home` page?',
      options: [
        { text: 'It enables static rendering and ensures `next-intl` knows the current locale for all server-side calls in that request.', correct: true },
        { text: 'It changes the user\'s browser language setting.', correct: false },
        { text: 'It is only needed in the root layout and is redundant elsewhere.', correct: false },
        { text: 'It redirects the user to the default locale if the locale is invalid.', correct: false },
      ],
    },
    {
      text: 'What does `hasLocale(routing.locales, locale)` prevent in `LocaleLayout`?',
      options: [
        { text: 'It validates the incoming locale and triggers `notFound()` if an unsupported locale is requested.', correct: true },
        { text: 'It automatically translates the page to the requested locale.', correct: false },
        { text: 'It removes the locale prefix from the URL.', correct: false },
        { text: 'It forces the locale to English for all users.', correct: false },
      ],
    },
    {
      text: 'How does `useTranslations("Common")` differ from server-side `getMessages()`?',
      options: [
        { text: '`useTranslations` is a client hook that reads from messages provided by `NextIntlClientProvider`; `getMessages()` runs on the server to load the JSON file.', correct: true },
        { text: 'Both are server-side functions that load translation files from disk.', correct: false },
        { text: '`getMessages()` is only used inside Client Components.', correct: false },
        { text: '`useTranslations` works without `NextIntlClientProvider`.', correct: false },
      ],
    },
    {
      text: 'What is the purpose of `messages/en.json` and `messages/ar.json`?',
      options: [
        { text: 'They store UI translation strings that `next-intl` loads based on the active locale.', correct: true },
        { text: 'They contain the full story content for each language.', correct: false },
        { text: 'They configure Next.js routing and middleware.', correct: false },
        { text: 'They are only used at build time to generate the sitemap.', correct: false },
      ],
    },
    {
      text: 'Why does `LocaleLayout` set `dir={locale === "ar" ? "rtl" : "ltr"}` on the inner div?',
      options: [
        { text: 'It applies the correct text direction for Arabic (RTL) versus English (LTR) layouts.', correct: true },
        { text: 'It changes the HTML `lang` attribute for search engines.', correct: false },
        { text: 'Tailwind CSS requires it to compile utility classes.', correct: false },
        { text: 'It forces all text to render right-to-left regardless of locale.', correct: false },
      ],
    },
  ],
  5: [
    {
      text: 'Why does `next.config.mjs` configure `images.formats: ["image/avif", "image/webp"]`?',
      options: [
        { text: 'It tells Next.js to serve optimized modern image formats when the browser supports them, reducing file size.', correct: true },
        { text: 'It prevents Next.js from optimizing images at all.', correct: false },
        { text: 'It forces all images to be downloaded as PNG.', correct: false },
        { text: 'It is only relevant for images loaded from external URLs.', correct: false },
      ],
    },
    {
      text: 'What is the purpose of the Content-Security-Policy headers in `next.config.mjs`?',
      options: [
        { text: 'They restrict which sources can load scripts, styles, images, and other resources, reducing XSS risks.', correct: true },
        { text: 'They enable server-side caching for static assets.', correct: false },
        { text: 'They configure Tailwind CSS purge settings.', correct: false },
        { text: 'They are required for `next-intl` to work.', correct: false },
      ],
    },
    {
      text: 'Why are components like `FeaturedStories` loaded with `dynamic(() => import(...), { ssr: true })`?',
      options: [
        { text: 'It keeps the import code-split while still rendering on the server, and allows a custom loading fallback.', correct: true },
        { text: 'It disables server-side rendering for those components.', correct: false },
        { text: 'It is required for all Client Components in Next.js.', correct: false },
        { text: 'It prevents the component from ever loading on the client.', correct: false },
      ],
    },
    {
      text: 'How does the PWA service worker enable offline reading of stories?',
      options: [
        { text: 'It caches static assets and pages at install time so the app can work without a network connection.', correct: true },
        { text: 'It downloads all markdown files dynamically on every visit.', correct: false },
        { text: 'Service workers cannot cache anything in Next.js.', correct: false },
        { text: 'It stores user preferences in cookies for offline access.', correct: false },
      ],
    },
    {
      text: 'Why does the project use Tailwind CSS v4 with `@tailwindcss/postcss`?',
      options: [
        { text: 'Tailwind v4 uses a CSS-first configuration approach integrated through PostCSS, removing the need for a separate JavaScript config file.', correct: true },
        { text: 'Tailwind v4 is required by Next.js 16 and cannot be disabled.', correct: false },
        { text: 'It prevents dark mode from working.', correct: false },
        { text: 'PostCSS is only used to compile Sass files.', correct: false },
      ],
    },
    {
      text: 'What is the purpose of the `loading` fallback in dynamic imports?',
      options: [
        { text: 'It shows a placeholder UI while the split chunk is being fetched and the component is not ready.', correct: true },
        { text: 'It replaces the component permanently if loading fails.', correct: false },
        { text: 'It disables the loading state entirely.', correct: false },
        { text: 'It is only shown on the server, never on the client.', correct: false },
      ],
    },
  ],
  6: [
    {
      text: 'Why does the project use `import type { StoryData } from "@/types"` instead of `import { StoryData }`?',
      options: [
        { text: '`import type` tells TypeScript the import is type-only, which helps bundlers drop it from the runtime output.', correct: true },
        { text: 'Type-only imports are required for all interfaces in Next.js.', correct: false },
        { text: 'It makes the type available at runtime for validation.', correct: false },
        { text: 'There is no difference between the two import forms.', correct: false },
      ],
    },
    {
      text: 'What is the benefit of defining explicit interfaces like `LocaleLayoutProps` instead of inline types?',
      options: [
        { text: 'Named interfaces are reusable, self-documenting, and easier to maintain and export from a shared types folder.', correct: true },
        { text: 'Inline types are always preferred in TypeScript strict mode.', correct: false },
        { text: 'Interfaces cannot be exported, so they are useless for shared types.', correct: false },
        { text: 'Named interfaces disable type checking for component props.', correct: false },
      ],
    },
    {
      text: 'Why is `params` typed as `Promise<{ locale: string }>` in Next.js 16?',
      options: [
        { text: 'Next.js 16 made `params` asynchronous; components must await it before reading `locale`.', correct: true },
        { text: 'It is a mistake and should be a plain object.', correct: false },
        { text: 'Promises are only used for query parameters, not route parameters.', correct: false },
        { text: 'It allows the component to skip static generation.', correct: false },
      ],
    },
    {
      text: 'What risk does the `as { ... }` cast in `story-parser.ts` introduce?',
      options: [
        { text: 'It bypasses TypeScript type checking for frontmatter fields, so missing or malformed YAML could cause runtime errors.', correct: true },
        { text: 'It validates frontmatter at compile time.', correct: false },
        { text: 'It makes the parser run faster by skipping gray-matter.', correct: false },
        { text: 'Type assertions have no effect on runtime behavior.', correct: false },
      ],
    },
    {
      text: 'Why does `StoryService.getSortedStoriesData` use `Promise.all` when parsing story files?',
      options: [
        { text: 'It parses all markdown files concurrently instead of sequentially, reducing total I/O time.', correct: true },
        { text: '`Promise.all` is required to sort the resulting array alphabetically.', correct: false },
        { text: 'Sequential parsing is always faster for file system operations.', correct: false },
        { text: 'It prevents `gray-matter` from reading frontmatter.', correct: false },
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
