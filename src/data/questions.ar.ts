import type { Question, MoneyLevel } from '../types/game'

export const chapterQuestionsAr: Record<number, Question[]> = {
  1: [
    {
      text: 'لماذا يُعلَّن مكون `Home` على أنه `async` في Next.js App Router؟',
      options: [
        { text: 'مكونات الخادم (Server Components) يمكن أن تكون async لتنتظر `params` ودوال جلب البيانات مثل `StoryService.getSortedStoriesData`.', correct: true },
        { text: 'جميع مكونات الصفحة في Next.js 16 يجب أن تكون async، بما في ذلك مكونات العميل.', correct: false },
        { text: 'الـ async مطلوب فقط عند استخدام Pages Router وليس App Router.', correct: false },
        { text: 'كلمة async لا تأثير لها في React Server Components.', correct: false },
      ],
    },
    {
      text: 'ما الفرق الأساسي بين `page.tsx` و `FeaturedStories.tsx` في هذا المشروع؟',
      options: [
        { text: '`page.tsx` هو Server Component يجلب البيانات؛ و`FeaturedStories.tsx` هو Client Component يحتفظ بالحالة التفاعلية.', correct: true },
        { text: 'لا يوجد فرق — كلاهما يُصيَّران على الخادم فقط.', correct: false },
        { text: '`page.tsx` يعمل في المتصفح، بينما `FeaturedStories.tsx` يعمل على الخادم.', correct: false },
        { text: 'فقط `page.tsx` يمكنه استخدام JSX؛ أما `FeaturedStories.tsx` فيجب أن يُرجع كائناً عادياً.', correct: false },
      ],
    },
    {
      text: 'في `useHasMounted`، لماذا يتم استدعاء `setHasMounted(true)` داخل `useEffect` بدلاً من أثناء الـ render؟',
      options: [
        { text: 'يمنع عدم تطابق الترطيب (hydration mismatch) بوضع علامة على المكون كmounted فقط بعد تشغيل تأثير جانبي على العميل.', correct: true },
        { text: 'استدعاؤه أثناء الـ render سيكون أسرع ويعطي نفس النتيجة.', correct: false },
        { text: 'يُحظر على `useEffect` استدعاء `setState` في React 19.', correct: false },
        { text: 'الـ hook مخصص للتشغيل أثناء تصيير الخادم وليس على العميل.', correct: false },
      ],
    },
    {
      text: 'لماذا يجب إضافة `"use client";` في أعلى المكون الذي يستخدم `useState` أو `useTranslations`؟',
      options: [
        { text: 'في App Router، المكونات افتراضياً Server Components؛ والـ hooks التي تحتاج إلى واجهات برمجة المتصفح أو سياق العميل تتطلب توجيه العميل.', correct: true },
        { text: 'إنها مجرد إشارة للـ linter وليس لها تأثير في وقت التشغيل في Next.js.', correct: false },
        { text: 'جميع المكونات التي تحتوي على JSX يجب أن تتضمن `"use client";` بغض النظر عن الـ hooks.', correct: false },
        { text: 'تُعطل وضع TypeScript strict لهذا الملف.', correct: false },
      ],
    },
    {
      text: 'ماذا يفرض TypeScript strict mode في هذا المشروع، وأين يتم تفعيله؟',
      options: [
        { text: 'يفرض فحوصات نوع أقوى مثل `noImplicitAny`؛ ويُفعَّل في `tsconfig.json` عبر `"strict": true`.', correct: true },
        { text: 'وضع strict مفعل من `next.config.mjs` ويمنع جميع استخدامات `any` في وقت التشغيل.', correct: false },
        { text: 'إنه إعداد افتراضي في Next.js لا يمكن تغييره.', correct: false },
        { text: 'وضع strict يؤثر فقط على قواعد ESLint وليس على مترجم TypeScript.', correct: false },
      ],
    },
  ],
  2: [
    {
      text: 'لماذا يستخدم المشروع `src/app/[locale]` كجزء ديناميكي بدلاً من مجلدات منفصلة `src/app/en` و `src/app/ar`؟',
      options: [
        { text: 'الجزء الديناميكي للـ locale يسمح لمكون layout/page واحد بخدمة اللغتين مع مشاركة منطق التوجيه والتحقق من الـ locale.', correct: true },
        { text: 'الأجزاء الديناميكية مطلوبة للتوليد الثابت (static generation) وتمنع ISR.', correct: false },
        { text: 'المجلدات المنفصلة غير ممكنة مع `next-intl`.', correct: false },
        { text: 'الأمر مجرد تجميلي وليس له تأثير على التوجيه.', correct: false },
      ],
    },
    {
      text: 'ما دور `src/lib/story-service.ts` في تدفق البيانات؟',
      options: [
        { text: 'يلخص جميع عمليات بيانات القصص — تحليل markdown، التصفية حسب اللغة، الترتيب، وجلب قصة محددة.', correct: true },
        { text: 'إنه مكون React يُصيِّر قائمة القصص.', correct: false },
        { text: 'يخزن فقط إعدادات JSON ثابتة للـ build.', correct: false },
        { text: 'يعمل في المتصفح ويجلب القصص من API خارجي.', correct: false },
      ],
    },
    {
      text: 'لماذا تبقى مكونات الصفحة كـ Server Components بينما يُناط التفاعل بمكونات العميل؟',
      options: [
        { text: 'مكونات الخادم تقلل من JavaScript على العميل ويمكنها جلب البيانات مباشرة؛ ومكونات العميل تدير الحالة وأحداث المتصفح.', correct: true },
        { text: 'مكونات الخادم لا يمكنها استخدام props، لذا نحتاج إلى مكونات العميل للتصيير.', correct: false },
        { text: 'إنه قيد من `next-intl` يجب أن تكون جميع الصفحات Server Components.', correct: false },
        { text: 'مكونات العميل دائماً أسرع من مكونات الخادم في جلب البيانات.', correct: false },
      ],
    },
    {
      text: 'ما فائدة وضع ملفات markdown للقصص في `src/stories/` كأزواج `slug.md` و `slug-ar.md`؟',
      options: [
        { text: 'تحتفظ بالمحتوى تحت مراقبة النسخ، تزاوج الترجمات حسب اسم الملف، وتتيح لـ `story-parser.ts` تحديد اللغة من اللاحقة.', correct: true },
        { text: 'ملفات Markdown يجب أن تعيش داخل `src/app` لتكون قابلة للتوجيه.', correct: false },
        { text: 'تمنع التوليد الثابت لأن markdown لا يمكن تحليله في وقت البناء.', correct: false },
        { text: 'لاحقة اسم الملف ليس لها معنى خاص بالنسبة للمحلل.', correct: false },
      ],
    },
    {
      text: 'لماذا يفصل المشروع وحدات واجهة المستخدم الأولية (`src/components/ui/`) عن مكونات الميزات (`src/components/`)?',
      options: [
        { text: 'يفصل كتل بناء قابلة لإعادة الاستخدام ومستوى منخفض عن مكونات الميزات الخاصة بالمجال، مما يحسن إعادة الاستخدام والاختبار.', correct: true },
        { text: 'Next.js يجمع فقط الملفات داخل `src/components/ui/` افتراضياً.', correct: false },
        { text: 'مكونات الميزات لا يمكنها استيراد ملفات من `src/components/ui/`.', correct: false },
        { text: 'لا يوجد فائدة حقيقية؛ إنه مجرد اتفاقية تسمية.', correct: false },
      ],
    },
  ],
  3: [
    {
      text: 'في `FeaturedStories`، لماذا يُستخدم `useMemo` لحساب `countries` و `filteredStories`؟',
      options: [
        { text: 'لتجنب إعادة حساب قائمة الدول والمصفوفة المُرشَّحة عند كل render ما لم يتغير `stories` أو `selectedCountry`.', correct: true },
        { text: 'لأن `useMemo` مطلوب كلما استُخدم `useState` في نفس المكون.', correct: false },
        { text: 'يجعل المكون Server Component.', correct: false },
        { text: 'الـ memoization دائماً ضارة ويجب تجنبها في React 19.', correct: false },
      ],
    },
    {
      text: 'ما المشكلة التي يحلها hook `useHasMounted` وأين يُستخدم؟',
      options: [
        { text: 'يحمي من عدم تطابق الترطيب للمكونات مثل `ThemeToggle` التي تعتمد على حالة السمة الخاصة بالعميل فقط.', correct: true },
        { text: 'يستبدل `useEffect` لجميع عمليات جلب البيانات.', correct: false },
        { text: 'يجبر المكون على التصيير فقط على الخادم.', correct: false },
        { text: 'يُستخدم لاكتشاف انتهاء تغيير حجم النافذة.', correct: false },
      ],
    },
    {
      text: 'كيف تدير `next-themes` حالة السمة، ولماذا يُضبط `suppressHydrationWarning` على عنصر html؟',
      options: [
        { text: 'تقرأ `next-themes` السمة وتثبتها على العميل؛ و `suppressHydrationWarning` يكتم تحذيرات عدم التطابق بين التصيير على الخادم والعميل.', correct: true },
        { text: 'تخزن السمة في ملف cookie و `suppressHydrationWarning` يعطل جميع تحذيرات React.', correct: false },
        { text: 'السمة تحددها الخادم بالكامل ولا تتغير على العميل.', correct: false },
        { text: '`suppressHydrationWarning` يُفعِّل الوضع الداكن تلقائياً.', correct: false },
      ],
    },
    {
      text: 'لماذا يُخزَّن `selectedCountry` في `useState` داخل `FeaturedStories` بدلاً من URL أو حالة عامة؟',
      options: [
        { text: 'إنها حالة واجهة محلية لا تحتاج للمشاركة أو الاستمرار؛ رفعها سيضيف تعقيداً غير ضروري.', correct: true },
        { text: 'لا يمكن أن يحمل URL الحالة في Next.js App Router.', correct: false },
        { text: 'الحالة العامة مطلوبة لجميع الحالات التفاعلية في React.', correct: false },
        { text: '`useState` مهمل في React 19.', correct: false },
      ],
    },
    {
      text: 'ما هو تدفق البيانات عندما يزور المستخدم الصفحة الرئيسية؟',
      options: [
        { text: '`page.tsx` تنتظر `StoryService.getSortedStoriesData(locale)`، ثم تمرر المصفوفة الناتجة إلى `HomePageClient` الذي يُصيِّر `FeaturedStories`.', correct: true },
        { text: '`HomePageClient` تجلب القصص مباشرة من المتصفح عند التثبيت.', correct: false },
        { text: 'القصص تُحمَّل من `messages/en.json` عبر `useTranslations`.', correct: false },
        { text: 'ملفات markdown تُرسل إلى العميل وتُحلل هناك.', correct: false },
      ],
    },
    {
      text: 'لماذا تستخرج `StoryOfTheDay` المقتطف من `contentHtml` بدلاً من تخزينه في `StoryData`؟',
      options: [
        { text: 'تبقي `StoryData` مركزة على المحتوى الخام وتستخرج نص العرض في وقت التصيير، مما يتجنب البيانات القديمة أو المكررة.', correct: true },
        { text: 'لا يمكن تخزين سلاسل HTML في واجهات TypeScript.', correct: false },
        { text: 'استخراجه في وقت التشغيل دائماً أبطأ من تخزينه.', correct: false },
        { text: '`contentHtml` غير متوفر في `StoryData`.', correct: false },
      ],
    },
  ],
  4: [
    {
      text: 'لماذا يتم استدعاء `setRequestLocale(locale)` في كلاً من `LocaleLayout` وصفحة `Home`؟',
      options: [
        { text: 'يُمكِّن التصيير الثابت ويضمن أن `next-intl` يعرف الـ locale الحالي لجميع استدعاءات الخادم في هذا الطلب.', correct: true },
        { text: 'يغير إعداد لغة المتصفح للمستخدم.', correct: false },
        { text: 'إنه مطلوب فقط في الـ root layout ويكون زائداً في أماكن أخرى.', correct: false },
        { text: 'يعيد توجيه المستخدم إلى الـ locale الافتراضي إذا كان الـ locale غير صالح.', correct: false },
      ],
    },
    {
      text: 'ماذا يمنع `hasLocale(routing.locales, locale)` في `LocaleLayout`؟',
      options: [
        { text: 'يتحقق من الـ locale الوارد ويطلق `notFound()` إذا طُلب locale غير مدعوم.', correct: true },
        { text: 'يترجم الصفحة تلقائياً إلى الـ locale المطلوب.', correct: false },
        { text: 'يزيل بادئة الـ locale من URL.', correct: false },
        { text: 'يجبر الـ locale على الإنجليزية لجميع المستخدمين.', correct: false },
      ],
    },
    {
      text: 'ما الفرق بين `useTranslations("Common")` و `getMessages()` من جانب الخادم؟',
      options: [
        { text: '`useTranslations` hook للعميل يقرأ من الرسائل المقدمة عبر `NextIntlClientProvider`؛ أما `getMessages()` فتعمل على الخادم لتحميل ملف JSON.', correct: true },
        { text: 'كلاهما دالتان من جانب الخادم لتحميل ملفات الترجمة من القرص.', correct: false },
        { text: '`getMessages()` تُستخدم فقط داخل مكونات العميل.', correct: false },
        { text: '`useTranslations` تعمل بدون `NextIntlClientProvider`.', correct: false },
      ],
    },
    {
      text: 'ما الغرض من `messages/en.json` و `messages/ar.json`؟',
      options: [
        { text: 'تخزن سلاسل ترجمة واجهة المستخدم التي يحمّلها `next-intl` بناءً على الـ locale النشط.', correct: true },
        { text: 'تحتوي على محتوى القصص الكامل لكل لغة.', correct: false },
        { text: 'تُكوِّن توجيه Next.js والـ middleware.', correct: false },
        { text: 'تُستخدم فقط في وقت البناء لتوليد خريطة الموقع.', correct: false },
      ],
    },
    {
      text: 'لماذا يضبط `LocaleLayout` قيمة `dir={locale === "ar" ? "rtl" : "ltr"}` على الـ div الداخلية؟',
      options: [
        { text: 'يطبق اتجاه النص الصحيح للعربية (من اليمين لليسار) مقابل الإنجليزية (من اليسار لليمين).', correct: true },
        { text: 'يغير سمة HTML `lang` لمحركات البحث.', correct: false },
        { text: 'Tailwind CSS يتطلب ذلك لتجميع الأصناف المساعدة.', correct: false },
        { text: 'يجبر جميع النصوص على الظهور من اليمين لليسار بغض النظر عن اللغة.', correct: false },
      ],
    },
  ],
  5: [
    {
      text: 'لماذا تُكوِّن `next.config.mjs` قيمة `images.formats: ["image/avif", "image/webp"]`؟',
      options: [
        { text: 'تخبر Next.js بعرض صيغ صور حديثة ومُحسَّنة عندما يدعمها المتصفح، مما يقلل حجم الملف.', correct: true },
        { text: 'تمنع Next.js من تحسين الصور تماماً.', correct: false },
        { text: 'تجبر جميع الصور على التنزيل كـ PNG.', correct: false },
        { text: 'إنها ذات صلة فقط بالصور المحملة من URLs خارجية.', correct: false },
      ],
    },
    {
      text: 'ما الغرض من رؤوس Content-Security-Policy في `next.config.mjs`؟',
      options: [
        { text: 'تقيّد المصادر التي يمكنها تحميل السكربتات والأنماط والصور وموارد أخرى، مما يقلل مخاطر XSS.', correct: true },
        { text: 'تُفعِّل التخزين المؤقت من جانب الخادم للأصول الثابتة.', correct: false },
        { text: 'تُكوِّن إعدادات تنظيف Tailwind CSS.', correct: false },
        { text: 'إنها مطلوبة لعمل `next-intl`.', correct: false },
      ],
    },
    {
      text: 'لماذا تُحمَّل مكونات مثل `FeaturedStories` باستخدام `dynamic(() => import(...), { ssr: true })`؟',
      options: [
        { text: 'تبقي الاستيراد مقسماً مع الاستمرار في التصيير على الخادم، وتتيح fallback مخصص أثناء التحميل.', correct: true },
        { text: 'تعطل تصيير الخادم لهذه المكونات.', correct: false },
        { text: 'إنه مطلوب لجميع مكونات العميل في Next.js.', correct: false },
        { text: 'يمنع المكون من التحميل على العميل نهائياً.', correct: false },
      ],
    },
    {
      text: 'كيف يُمكِّن service worker التطبيق من القراءة بدون اتصال (offline)؟',
      options: [
        { text: 'يخزن الأصول الثابتة والصفحات عند التثبيت ليعمل التطبيق بدون اتصال بالشبكة.', correct: true },
        { text: 'يحمّل جميع ملفات markdown ديناميكياً عند كل زيارة.', correct: false },
        { text: 'لا يستطيع Service Worker تخزين أي شيء في Next.js.', correct: false },
        { text: 'يخزن تفضيلات المستخدم في ملفات cookies للوصول بدون اتصال.', correct: false },
      ],
    },
    {
      text: 'لماذا يستخدم المشروع Tailwind CSS v4 مع `@tailwindcss/postcss`؟',
      options: [
        { text: 'يستخدم Tailwind v4 نهج إعداد يعتمد على CSS أولاً من خلال PostCSS، مما يلغي الحاجة لملف إعداد JavaScript منفصل.', correct: true },
        { text: 'Tailwind v4 مطلوب من Next.js 16 ولا يمكن تعطيله.', correct: false },
        { text: 'يمنع عمل الوضع الداكن.', correct: false },
        { text: 'يُستخدم PostCSS فقط لتجميع ملفات Sass.', correct: false },
      ],
    },
    {
      text: 'ما الغرض من fallback `loading` في الاستيرادات الديناميكية؟',
      options: [
        { text: 'يظهر واجهة placeholder أثناء جلب الجزء المقسم وعدم جاهزية المكون.', correct: true },
        { text: 'يستبدل المكون بشكل دائم إذا فشل التحميل.', correct: false },
        { text: 'يعطل حالة التحميل تماماً.', correct: false },
        { text: 'يُعرض فقط على الخادم وليس على العميل.', correct: false },
      ],
    },
  ],
  6: [
    {
      text: 'لماذا يستخدم المشروع `import type { StoryData } from "@/types"` بدلاً من `import { StoryData }`؟',
      options: [
        { text: '`import type` تخبر TypeScript أن الاستيراد للأنواع فقط، مما يساعد Bundlers على إسقاطه من مخرجات وقت التشغيل.', correct: true },
        { text: 'استيراد الأنواع مطلوب لجميع الواجهات في Next.js.', correct: false },
        { text: 'يجعل النوع متاحاً في وقت التشغيل للتحقق.', correct: false },
        { text: 'لا يوجد فرق بين شكلي الاستيراد.', correct: false },
      ],
    },
    {
      text: 'ما فائدة تعريف واجهات صريحة مثل `LocaleLayoutProps` بدلاً من الأنواع المضمّنة؟',
      options: [
        { text: 'الواجهات المسماة قابلة لإعادة الاستخدام وموثقة ذاتياً وسهلة الصيانة والتصدير من مجلد أنواع مشترك.', correct: true },
        { text: 'الأنواع المضمنة مفضلة دائماً في وضع TypeScript strict.', correct: false },
        { text: 'لا يمكن تصدير الواجهات، لذا لا فائدة منها للأنواع المشتركة.', correct: false },
        { text: 'الواجهات المسماة تعطل فحص الأنواع لـ props المكون.', correct: false },
      ],
    },
    {
      text: 'لماذا يُكتب `params` كنوع `Promise<{ locale: string }>` في Next.js 16؟',
      options: [
        { text: 'جعل Next.js 16 الـ params غير متزامن؛ يجب على المكونات انتظاره قبل قراءة `locale`.', correct: true },
        { text: 'إنه خطأ ويجب أن يكون كائناً عادياً.', correct: false },
        { text: 'الـ Promises تُستخدم فقط لمعاملات الاستعلام وليست لمعاملات المسار.', correct: false },
        { text: 'تسمح للمكون بتخطي التوليد الثابت.', correct: false },
      ],
    },
    {
      text: 'ما الخطر الذي يُحدثه `as { ... }` في `story-parser.ts`؟',
      options: [
        { text: 'يتجاوز فحص TypeScript لحقول frontmatter، لذا يمكن لـ YAML المفقود أو المعيب أن يسبب أخطاء وقت التشغيل.', correct: true },
        { text: 'يتحقق من frontmatter في وقت الترجمة.', correct: false },
        { text: 'يجعل المحلل أسرع بتخطي gray-matter.', correct: false },
        { text: 'تأكيدات النوع ليس لها تأثير على سلوك وقت التشغيل.', correct: false },
      ],
    },
    {
      text: 'لماذا تستخدم `StoryService.getSortedStoriesData` `Promise.all` عند تحليل ملفات القصص؟',
      options: [
        { text: 'تحلل جميع ملفات markdown بشكل متوازي بدلاً من متسلسل، مما يقلل إجمالي وقت I/O.', correct: true },
        { text: '`Promise.all` مطلوب لترتيب المصفوفة الناتجة أبجدياً.', correct: false },
        { text: 'التحليل المتسلسل دائماً أسرع لعمليات نظام الملفات.', correct: false },
        { text: 'تمنع `gray-matter` من قراءة frontmatter.', correct: false },
      ],
    },
  ],
}

export const moneyLevelsAr: MoneyLevel[] = [
  { amount: '1,000 ريال', isSafeHaven: false },
  { amount: '5,000 ريال', isSafeHaven: false },
  { amount: '10,000 ريال', isSafeHaven: true },
  { amount: '100,000 ريال', isSafeHaven: false },
  { amount: '250,000 ريال', isSafeHaven: true },
  { amount: '1,000,000 ريال', isSafeHaven: false },
]

export const chapterListAr = [
  { id: 1, title: 'أساسيات Next.js وReact' },
  { id: 2, title: 'البنية والهيكل' },
  { id: 3, title: 'الحالة وتدفق البيانات' },
  { id: 4, title: 'التدويل وnext-intl' },
  { id: 5, title: 'التنسيقات والPWA والأداء' },
  { id: 6, title: 'TypeScript والحالات الحافة' },
]

export const chapterNamesAr: Record<number, string> = {
  1: 'الأول',
  2: 'الثاني',
  3: 'الثالث',
  4: 'الرابع',
  5: 'الخامس',
  6: 'السادس',
}
