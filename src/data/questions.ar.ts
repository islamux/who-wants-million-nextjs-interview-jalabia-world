import type { Question, MoneyLevel } from '../types/game'

export const chapterQuestionsAr: Record<number, Question[]> = {
  1: [
    {
      text: 'في `src/app/page.tsx`، لماذا يُعلن مكون الخادم (Server Component) على أنه `async`؟',
      options: [
        { text: 'يمكنه انتظار دوال جلب البيانات مباشرة على الخادم، مما يلغي الحاجة إلى `useEffect` وحالات التحميل على العميل.', correct: true },
        { text: 'جميع مكونات React في Next.js 16 يجب أن تُعلن async بغض النظر عن دورها.', correct: false },
        { text: 'المكونات غير المتزامنة (async) صالحة فقط داخل مكونات العميل وليس مكونات الخادم.', correct: false },
        { text: 'كلمة `async` مجرد اصطلاح للـ linter وليس لها تأثير على سلوك التصيير.', correct: false },
      ],
    },
    {
      text: 'لماذا يحتاج `src/components/SearchInput.tsx` إلى `"use client"` في أعلى الملف؟',
      options: [
        { text: 'لأنه يستخدم `useState` لمصطلح البحث ومعالجات `onChange` — الخطافات (hooks) ومعالجات الأحداث تعمل فقط على العميل.', correct: true },
        { text: 'كل ملف يستورد وحدة CSS يحتاج إلى توجيه العميل.', correct: false },
        { text: 'أي مكون يُرجع JSX يجب أن يكون مكون عميل في App Router.', correct: false },
        { text: 'التوجيه مطلوب فقط لملفات TypeScript لتمكين استدلال الأنواع.', correct: false },
      ],
    },
    {
      text: 'في `src/app/dashboard/page.tsx`، تُجلب البيانات باستخدام `await fetch(...)` في المستوى الأعلى للمكون. أين يُنفذ هذا الكود؟',
      options: [
        { text: 'على الخادم عند وقت الطلب — مكونات الخادم تعمل على الخادم ويُرسل ناتجها إلى العميل كـ HTML متسلسل.', correct: true },
        { text: 'في المتصفح بعد تركيب المكون، تماماً مثل مكونات العميل.', correct: false },
        { text: 'جزئياً على الخادم للتصيير الأولي، ثم بالكامل على العميل للتنقلات اللاحقة.', correct: false },
        { text: 'في Web Worker لتجنب حجب الخيط الرئيسي أثناء التصيير من جانب الخادم.', correct: false },
      ],
    },
    {
      text: 'ماذا يفرض `"strict": true` في `tsconfig.json` فعلياً؟',
      options: [
        { text: 'يُفعِّل `noImplicitAny` و`strictNullChecks` و`strictFunctionTypes` وعدة إشارات أخرى تشدد فحص الأنواع في TypeScript.', correct: true },
        { text: 'يضمن عدم حدوث أي أخطاء وقت التشغيل في بيئة الإنتاج.', correct: false },
        { text: 'يؤثر فقط على التمويجات الحمراء في VS Code — مترجم TypeScript يتجاهل إشارة strict أثناء البناء.', correct: false },
        { text: 'يتطلب من كل دالة أن يكون لها تعليق توضيحي صريح لنوع الإرجاع وإلا يفشل البناء.', correct: false },
      ],
    },
    {
      text: 'في `src/hooks/useMediaQuery.ts`، يستخدم `useEffect` لتعيين الحالة إلى `true` فقط بعد التركيب. لماذا لا يتم تعيينها أثناء التصيير (render)؟',
      options: [
        { text: 'الخطاف يقرأ `window.matchMedia` وهو غير موجود أثناء التصيير على الخادم؛ التأجيل إلى `useEffect` يمنع عدم تطابق الترطيب (hydration mismatch).', correct: true },
        { text: 'React 19 يحظر جميع تحديثات الحالة أثناء مرحلة التصيير — فقط `useEffect` مسموح به.', correct: false },
        { text: 'تعيين الحالة أثناء التصيير سيكون أسرع؛ التأجيل مجرد اصطلاح أسلوبي.', correct: false },
        { text: 'التصيير من جانب الخادم يتخطى استدعاءات `useEffect` تلقائياً، لذا النتيجة متطابقة في الحالتين.', correct: false },
      ],
    },
  ],
  2: [
    {
      text: 'لماذا نستخدم `src/app/[locale]/layout.tsx` بجزء ديناميكي بدلاً من إنشاء مجلدات `src/app/en/` و`src/app/ar/` منفصلة؟',
      options: [
        { text: 'الجزء الديناميكي الواحد يُشارك كل منطق التنسيق والتوجيه عبر اللغات، مع التحقق من معامل locale مرة واحدة بدلاً من تكرار شجرات المجلدات لكل لغة.', correct: true },
        { text: 'مجلدات اللغات المنفصلة غير مدعومة في Next.js App Router.', correct: false },
        { text: 'الأجزاء الديناميكية دائماً تُصيَّر أسرع من مجلدات المسارات الثابتة.', correct: false },
        { text: 'طبقة الوسيط (middleware) يمكنها فقط اعتراض أجزاء المسار الديناميكية، وليس أسماء المجلدات الثابتة.', correct: false },
      ],
    },
    {
      text: 'ما الدور الذي يلعبه `src/lib/api-client.ts` في هيكلية مشروع Next.js نموذجي؟',
      options: [
        { text: 'يُركِّز جميع استدعاءات API الخارجية مع عنوان URL أساسي مشترك، ومعالجة الأخطاء، وعقود الطلب/الاستجابة المُنمَّطة — مكان واحد لتكوين منطق HTTP.', correct: true },
        { text: 'هو مكون React يُصيِّر بيانات استجابة API مباشرة في DOM.', correct: false },
        { text: 'يستبدل مسارات API في Next.js بالكامل، ويتولى كل منطق الخادم.', correct: false },
        { text: 'يُخزِّن فقط ثوابت التكوين الثابتة وقيم متغيرات البيئة.', correct: false },
      ],
    },
    {
      text: 'لماذا نُبقي `src/app/products/page.tsx` كمكون خادم بينما `src/components/AddToCartButton.tsx` مكون عميل؟',
      options: [
        { text: 'مكونات الخادم تُقلِّص حزمة JavaScript على العميل وتجلب البيانات عند وقت الطلب؛ مكونات العميل تدير الحالة التفاعلية مثل نقرات الأزرار والحالة المحلية.', correct: true },
        { text: 'مكونات الخادم لا يمكنها استقبال props، لذا يجب أن يحدث كل عرض البيانات في مكونات العميل.', correct: false },
        { text: 'Next.js يتطلب أن يكون كل `page.tsx` مكون خادم بغض النظر عن التفاعلية.', correct: false },
        { text: 'مكونات العميل دائماً أسرع في التصيير من مكونات الخادم لأي نوع من العمل.', correct: false },
      ],
    },
    {
      text: 'ما الذي يُميِّز `src/components/ui/Button.tsx` عن `src/components/CheckoutForm.tsx` في مشروع مُنظَّم جيداً؟',
      options: [
        { text: '`ui/Button.tsx` هو بدائي قابل لإعادة الاستخدام منخفض المستوى بدون منطق عمل؛ `CheckoutForm.tsx` هو مكون ميزة بحالة وسلوك خاصين بالمجال.', correct: true },
        { text: 'فقط الملفات داخل `src/components/ui/` مسموح لها بقبول prop من نوع `className`.', correct: false },
        { text: 'مكونات الميزات ممنوعة من استيراد أي شيء من مجلد `ui/`.', correct: false },
        { text: 'الحزمة تُطبِّق قواعد مختلفة لاقتطاع الشجرة (tree-shaking) على الملفات داخل `src/components/ui/`.', correct: false },
      ],
    },
    {
      text: 'في `src/app/layout.tsx`، لماذا نُغلِّف عنصر `<body>` بالكامل في مكونات مُزوِّدة (providers) بدلاً من وضع المزوِّدات داخل كل صفحة؟',
      options: [
        { text: 'التنسيق الجذري هو المكان الوحيد الذي تُغلِّف فيه المزوِّدات التطبيق بالكامل مرة واحدة، مما يتجنب إعادة تركيب المزوِّدات عند التنقل بين الصفحات على العميل.', correct: true },
        { text: 'المزوِّدات لا يمكن تصييرها إلا داخل ملفات التنسيق — وهي غير قانونية داخل مكونات الصفحة.', correct: false },
        { text: 'كل صفحة تحتاج إلى نسخة مزوِّد معزولة خاصة بها لمنع تسرب الحالة بين الصفحات.', correct: false },
        { text: 'مكونات التنسيق تُعاد تصييرها من الصفر عند كل تغيير مسار، مما يعيد ضبط كل حالة المزوِّدات.', correct: false },
      ],
    },
  ],
  3: [
    {
      text: 'في `src/components/GameEngine.tsx`، لماذا نختار `useReducer` بدلاً من استدعاءات `useState` المتعددة لإدارة حالة معقدة؟',
      options: [
        { text: '`useReducer` يُركِّز جميع انتقالات الحالة في دالة مُخفِّض (reducer) نقية واحدة، مما يجعل المنطق المعقد قابلاً للتوقع والتصحيح والاختبار من خلال الإجراءات المُرسَلة (dispatched actions).', correct: true },
        { text: '`useReducer` دائماً أسرع بشكل قابل للقياس من `useState` بغض النظر عن تعقيد الحالة.', correct: false },
        { text: 'React يفرض `useReducer` كلما أدار المكون أكثر من ثلاثة متغيرات حالة.', correct: false },
        { text: 'تم إهمال `useState` في React 19 لصالح `useReducer`.', correct: false },
      ],
    },
    {
      text: 'في `src/components/ProductFilter.tsx`، يُستخدم `useMemo` لحساب المنتجات المُصفَّاة. متى يكون `useMemo` نتائجه عكسية؟',
      options: [
        { text: 'عندما تكون العملية الحسابية بسيطة جداً — `useMemo` نفسه له تكلفة، وللعمليات البسيطة يضيف عبئاً أكثر مما يُوفِّر.', correct: true },
        { text: 'يجب أن يُغلِّف `useMemo` دائماً كل قيمة مُشتقَّة للاتساق.', correct: false },
        { text: 'لا يمكن استخدام `useMemo` داخل مكونات العميل — هو للخادم فقط.', correct: false },
        { text: 'تم إهمال `useMemo` في React 19 واستبداله بـ `useCallback`.', correct: false },
      ],
    },
    {
      text: 'كيف يمرر `src/app/products/page.tsx` (مكون خادم) البيانات المجلوبة إلى `src/components/ProductList.tsx` (مكون عميل)؟',
      options: [
        { text: 'مكون الخادم ينتظر البيانات، ثم يمررها كـ props قابلة للتسلسل إلى مكون العميل — React يتولى عبور الحدود بين الخادم والعميل.', correct: true },
        { text: 'مكونات العميل يجب أن تعيد جلب كل البيانات بنفسها في `useEffect` عند التركيب؛ بيانات الخادم لا يمكن تمريرها كـ props.', correct: false },
        { text: 'تتدفق البيانات عبر مخزن Zustand مشترك يُهيَّأ على الخادم ويُرطَّب على العميل.', correct: false },
        { text: 'مكونات الخادم تُشفِّر البيانات في معاملات بحث URL، ومكونات العميل تقرأها بـ `useSearchParams`.', correct: false },
      ],
    },
    {
      text: 'في `src/context/AuthContext.tsx`، ما الذي يحله React Context وما الذي لا يحله؟',
      options: [
        { text: 'السياق يلغي الحاجة لتمرير props عبر مستويات متعددة (prop drilling) للمستهلكين العميقين، لكن كل مستهلك يُعاد تصييره عندما تتغير قيمة السياق — هو لا يُحسِّن التصيير.', correct: true },
        { text: 'السياق يستبدل بالكامل الحاجة إلى أي مكتبة إدارة حالة خارجية في جميع التطبيقات.', correct: false },
        { text: 'السياق مقصور على حالة جانب الخادم فقط ولا يمكنه حمل قيم جانب العميل.', correct: false },
        { text: 'السياق يُذكِّر (memoizes) جميع المستهلكين تلقائياً، مانعاً أي إعادة تصيير غير ضرورية.', correct: false },
      ],
    },
    {
      text: 'في `src/hooks/useDebounce.ts`، يُعلن `useEffect` عن `[value, delay]` كتبعيات. ماذا يحدث إذا حُذفت `delay` من المصفوفة؟',
      options: [
        { text: 'القيمة المُنقَّحة (debounced value) لن تتحدث أبداً إذا تغير `delay`، وقاعدة exhaustive-deps في الـ linter ستُبلغ عن تحذير تبعية مفقودة.', correct: true },
        { text: 'React يتجاهل مصفوفة التبعيات بالكامل — كل التأثيرات تعمل عند كل تصيير بغض النظر.', correct: false },
        { text: 'التأثير يعمل عند كل تصيير فردي لأن المصفوفة غير صالحة.', correct: false },
        { text: 'حذف التبعيات من المصفوفة هو النمط الموصى به لتحسين الأداء.', correct: false },
      ],
    },
    {
      text: 'في `src/components/Dashboard.tsx`، حالة `selectedTab` محفوظة محلياً عبر `useState` بدلاً من رفعها إلى المكون الأب. لماذا؟',
      options: [
        { text: 'هي حالة واجهة محلية لا يحتاج أي مكون شقيق أو سلف للوصول إليها؛ رفعها سيضيف تعقيداً غير ضروري ويُشغِّل إعادة تصيير إضافية.', correct: true },
        { text: 'كل حالة React يجب أن تبقى محلية في المكون الذي يصيِّرها أولاً.', correct: false },
        { text: 'المكونات الآباء في App Router هي دائماً مكونات خادم ولا يمكنها حمل حالة تفاعلية.', correct: false },
        { text: 'رفع الحالة نمط مضاد (anti-pattern) في React ويجب تجنبه دائماً.', correct: false },
      ],
    },
  ],
  4: [
    {
      text: 'لماذا يُستدعى `setRequestLocale(locale)` في كلاً من `src/app/[locale]/layout.tsx` و`src/app/[locale]/page.tsx`؟',
      options: [
        { text: 'يُفعِّل التصيير الثابت لكل لغة ويضمن أن واجهات `next-intl` تحل الـ locale الصحيح لجميع استدعاءات جانب الخادم ضمن نطاق الطلب بالكامل.', correct: true },
        { text: 'يُعدِّل تفضيل لغة المتصفح للمستخدم المخزن في ترويسة `Accept-Language`.', correct: false },
        { text: 'استدعاؤه في التنسيق الجذري كافٍ؛ استدعاؤه مرة أخرى في الصفحة خطأ مكرر.', correct: false },
        { text: 'يُجري إعادة توجيه إلى اللغة الافتراضية عند اكتشاف لغة غير مدعومة.', correct: false },
      ],
    },
    {
      text: 'ماذا يحدث عندما يُرجع `hasLocale(routing.locales, locale)` القيمة `false` داخل `src/app/[locale]/layout.tsx`؟',
      options: [
        { text: 'يستدعي التنسيق `notFound()`، مما يُصيِّر صفحة 404 الخاصة بـ Next.js — مانعاً التطبيق من تقديم محتوى للغة غير مدعومة.', correct: true },
        { text: 'الوسيط (middleware) يترجم تلقائياً كل المحتوى إلى أقرب لغة مطابقة.', correct: false },
        { text: 'يُجرَّد جزء اللغة من عنوان URL بصمت وتُستخدم اللغة الافتراضية بدلاً منه.', correct: false },
        { text: 'يُعاد توجيه الطلب إلى المسار `/api/locale` للحل الديناميكي.', correct: false },
      ],
    },
    {
      text: 'كيف يختلف `useTranslations("Common")` داخل `src/components/Navbar.tsx` عن `getMessages()` من جانب الخادم؟',
      options: [
        { text: '`useTranslations` هو خطاف (hook) من جانب العميل يقرأ من الرسائل المُقدَّمة عبر `NextIntlClientProvider`؛ أما `getMessages()` فتُحمِّل ملفات JSON للرسائل مباشرة على الخادم.', correct: true },
        { text: 'كلاهما قابلان للتبادل بالكامل — يمكن استدعاء `getMessages()` داخل أي مكون عميل.', correct: false },
        { text: '`getMessages()` متاحة فقط داخل ردود نداء `useEffect`، وليس في المستوى الأعلى للمكونات.', correct: false },
        { text: '`useTranslations` يعمل بدون أن يُغلِّف `NextIntlClientProvider` شجرة المكونات.', correct: false },
      ],
    },
    {
      text: 'ما المحتوى الذي ينتمي إلى `src/messages/en.json` و`src/messages/ar.json`؟',
      options: [
        { text: 'أزواج مفتاح-قيمة لكل سلسلة واجهة مستخدم قابلة للترجمة — نصوص الأزرار، العناوين، رسائل الخطأ — تُحمَّل بواسطة `next-intl` بناءً على اللغة النشطة.', correct: true },
        { text: 'منطق العمل الكامل للتطبيق، بما في ذلك استعلامات قاعدة البيانات ومعالجات مسارات API.', correct: false },
        { text: 'تكوين التوجيه، قواعد الوسيط (middleware)، وأنماط إعادة التوجيه لكل لغة.', correct: false },
        { text: 'بيانات وصفية تُستخدم فقط وقت البناء من قبل الحزمة لاقتطاع الشجرة وإزالة الكود الميت.', correct: false },
      ],
    },
    {
      text: 'لماذا يضبط `src/app/[locale]/layout.tsx` القيمة `dir={locale === "ar" ? "rtl" : "ltr"}` على عنصر HTML الجذري؟',
      options: [
        { text: 'يُطبِّق اتجاه النص الصحيح: من اليمين لليسار للعربية، من اليسار لليمين للإنجليزية — مما يؤثر على التنسيق ومحاذاة النص وموضع شريط التمرير.', correct: true },
        { text: 'يُغيِّر فقط سمة HTML `lang` التي تستخدمها محركات البحث للفهرسة.', correct: false },
        { text: 'Tailwind CSS يتطلب سمة `dir` على كل عنصر لترجمة أصناف الأدوات المساعدة.', correct: false },
        { text: 'يقلب جميع الصور والأيقونات أفقياً لتتوافق مع اتجاه القراءة.', correct: false },
      ],
    },
  ],
  5: [
    {
      text: 'في Tailwind CSS v4، كيف يُغيِّر `@tailwindcss/postcss` نهج التكوين مقارنة بالإصدار 3؟',
      options: [
        { text: 'ينتقل التكوين إلى CSS نفسه عبر توجيهات `@theme` و`@import`، مما يلغي الحاجة إلى ملف `tailwind.config.js` منفصل.', correct: true },
        { text: 'تُزال جميع أصناف الأدوات المساعدة؛ فقط الأنماط المضمنة (inline styles) ووحدات CSS مدعومة.', correct: false },
        { text: 'كل مكون يجب أن يستورد ملف تكوين Tailwind معزول خاص به.', correct: false },
        { text: 'الوضع الداكن ومتغيرات الاستجابة مُعطَّلة افتراضياً.', correct: false },
      ],
    },
    {
      text: 'في `src/app/page.tsx`، لماذا نُغلِّف `<ProductGallery>` داخل `dynamic(() => import(...), { ssr: true, loading: () => <Skeleton /> })`؟',
      options: [
        { text: 'يُقسِّم الكود إلى أجزاء منفصلة مع الحفاظ على التصيير من جانب الخادم، ويُظهر عنصراً نائباً (skeleton) أثناء تحميل الجزء.', correct: true },
        { text: 'يُعطِّل التصيير من جانب الخادم تماماً بحيث يُركَّب المكون فقط في المتصفح.', correct: false },
        { text: 'يجعل المكون يُحمَّل فوراً بجلب جميع استيراداته الفرعية مسبقاً وقت البناء.', correct: false },
        { text: '`dynamic()` غلاف إلزامي لكل مكون في Next.js App Router.', correct: false },
      ],
    },
    {
      text: 'كيف يُمكِّن عامل الخدمة (service worker) في PWA العمل بدون اتصال بالإنترنت؟',
      options: [
        { text: 'يُخزِّن الأصول الثابتة (JS، CSS، الصور) مسبقاً عند التثبيت ويُقدِّمها من مخزن الذاكرة المؤقتة (Cache Storage) عندما تكون الشبكة غير متاحة.', correct: true },
        { text: 'يُنزِّل الموقع بالكامل كأرشيف ZIP واحد مخزن في localStorage.', correct: false },
        { text: 'يُخزِّن كل تفاعل مستخدم ويُعيد تشغيله عند استعادة الاتصال.', correct: false },
        { text: 'عوامل الخدمة يمكنها فقط تخزين استجابات API JSON مؤقتاً، وليس حزم JavaScript أو CSS.', correct: false },
      ],
    },
    {
      text: 'لماذا نُكوِّن `images.formats: ["image/avif", "image/webp"]` في `next.config.mjs`؟',
      options: [
        { text: 'يُخبر مُحسِّن الصور في Next.js بتقديم صيغ حديثة موفرة للنطاق الترددي عندما يدعمها المتصفح، مما يُقلِّل وزن الصفحة.', correct: true },
        { text: 'يُجبر جميع الصور على التحويل إلى تدرج الرمادي لإمكانية الوصول.', correct: false },
        { text: 'هذا الإعداد ينطبق فقط على الصور المستضافة على CDNs خارجية، وليس الصور المحلية.', correct: false },
        { text: 'يُعطِّل مُحسِّن الصور المدمج ويعود إلى وسوم `<img>` الخام.', correct: false },
      ],
    },
    {
      text: 'ما الغرض من ترويسات Content-Security-Policy المُعرَّفة في `next.config.mjs`؟',
      options: [
        { text: 'تُقيِّد المصادر التي يمكنها تحميل السكربتات والأنماط والصور والخطوط — مما يُخفِّف من هجمات XSS وحقن البيانات.', correct: true },
        { text: 'تُفعِّل التخزين المؤقت التلقائي من جانب الخادم لجميع الأصول الثابتة مع TTL لا نهائي.', correct: false },
        { text: 'تُكوِّن أي أصناف Tailwind المساعدة تُضمَّن في حزمة CSS للإنتاج.', correct: false },
        { text: 'هي شرط أساسي لعمل `next-intl` في اكتشاف وتبديل اللغات بشكل صحيح.', correct: false },
      ],
    },
    {
      text: 'في `src/components/SearchResults.tsx`، ماذا يُحقِّق `<Suspense fallback={<Spinner />}>` عند تغليف مكون غير متزامن (async component)؟',
      options: [
        { text: 'يُظهر مؤشر تحميل (spinner) بينما ينتظر المكون غير المتزامن البيانات، مما يُمكِّن التصيير المتدفق من جانب الخادم (streaming SSR) حيث تُصيَّر بقية الصفحة فوراً.', correct: true },
        { text: 'يُعيد محاولة العملية غير المتزامنة تلقائياً حتى ثلاث مرات إذا فشلت.', correct: false },
        { text: 'يُعطِّل تنفيذ JavaScript للشجرة الفرعية المُغلَّفة لتحسين الأداء.', correct: false },
        { text: '`Suspense` يعمل فقط مع `useEffect` و`useState`، وليس مع مكونات الخادم غير المتزامنة.', correct: false },
      ],
    },
  ],
  6: [
    {
      text: 'لماذا نستخدم `import type { User }` بدلاً من `import { User }` في `src/types/user.ts`؟',
      options: [
        { text: '`import type` يُشير إلى استيراد للأنواع فقط؛ الحزم تسقطه من مخرجات JavaScript لأن الأنواع لا وجود لها وقت التشغيل.', correct: true },
        { text: '`import type` مطلوب من Next.js لجميع الاستيرادات داخل مكونات الخادم.', correct: false },
        { text: 'يجعل النوع المُستورَد متاحاً وقت التشغيل للاستخدام مع `typeof` و`instanceof`.', correct: false },
        { text: 'لا يوجد فرق سلوكي أو في المخرجات بين شكلي الاستيراد.', correct: false },
      ],
    },
    {
      text: 'في `src/hooks/useGame.ts`، تُنمذج إجراءات اللعبة كاتحاد مُميَّز (discriminated union): `{ type: "MOVE"; x: number } | { type: "ATTACK"; target: string }`. ما الميزة التي يمنحها هذا؟',
      options: [
        { text: 'TypeScript يُضيِّق نوع الحمولة (payload) عند التبديل على `type`، مما يعطي فحص شمولية (exhaustiveness checking)، وإكمال تلقائي دقيق لكل متغير، وأمان في وقت الترجمة للمُخفِّض (reducer).', correct: true },
        { text: 'الاتحادات المُميَّزة هي الطريقة الوحيدة الصالحة لتمرير الوسائط إلى `useReducer` — الكائنات العادية مرفوضة.', correct: false },
        { text: 'تجعل الكود ينفذ أسرع بتجنب أي فحص نوع وقت التشغيل في المُخفِّض.', correct: false },
        { text: 'TypeScript لا يدعم الاتحادات المُميَّزة أصلاً؛ إنها اصطلاح مجتمعي بدون تطبيق من المترجم.', correct: false },
      ],
    },
    {
      text: 'لماذا يُنمَّط `params` كـ `Promise<{ locale: string }>` في مكونات صفحة Next.js 16؟',
      options: [
        { text: 'Next.js 16 جعل معاملات المسار غير متزامنة؛ يجب على المكونات استخدام `await params` قبل الوصول إلى خصائص مثل `params.locale`.', correct: true },
        { text: 'إنه خطأ مطبعي في تعريفات الأنواع — `params` يجب أن يكون كائناً متزامناً عادياً.', correct: false },
        { text: '`Promise` تُستخدم فقط لمعاملات الاستعلام مثل `?search=term`، وليس لأجزاء المسار.', correct: false },
        { text: 'تغليف `params` في Promise يجعل اللغة اختيارية ويسمح للصفحة بالتصيير بدونها.', correct: false },
      ],
    },
    {
      text: 'ما الخطر الذي يُحدثه `const config = parseYaml(raw) as AppConfig` في `src/lib/config-loader.ts`؟',
      options: [
        { text: 'تأكيد النوع `as` يتجاوز فحوصات TypeScript — إذا أعاد `parseYaml` بيانات مشوهة، فقد يحتوي `config` على حقول مفقودة تُسبب أخطاء وقت التشغيل.', correct: true },
        { text: 'يُجري تحققاً إضافياً وقت التشغيل من بنية YAML قبل تطبيق التحويل.', correct: false },
        { text: 'يجعل المُحلِّل يعمل أسرع بتخطي التحقق من حقول التكوين غير المستخدمة.', correct: false },
        { text: 'تأكيدات النوع تُمحى بواسطة الحزمة وليس لها أي تأثير على سلوك وقت التشغيل.', correct: false },
      ],
    },
    {
      text: 'في `src/lib/data-service.ts`، لماذا نستخدم `Promise.all(files.map(f => parseFile(f)))` بدلاً من حلقة `for...of`؟',
      options: [
        { text: 'جميع الملفات تُحلل بشكل متزامن بدلاً من واحد تلو الآخر، مما يُقلِّل إجمالي وقت الإدخال/الإخراج عندما تكون العمليات مستقلة.', correct: true },
        { text: '`Promise.all` يضمن أن مصفوفة النتائج مُرتَّبة أبجدياً حسب اسم الملف.', correct: false },
        { text: 'التحليل المتسلسل بـ `for...of` دائماً أسرع لعمليات نظام الملفات.', correct: false },
        { text: '`Promise.all` يلتقط ويكبت أخطاء تحليل الملفات الفردية بصمت.', correct: false },
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
  { id: 5, title: 'التنسيقات والـPWA والأداء' },
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
