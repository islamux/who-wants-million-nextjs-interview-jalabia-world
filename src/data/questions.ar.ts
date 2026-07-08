import type { Question, MoneyLevel } from '../types/game'

export const chapterQuestionsAr: Record<number, Question[]> = {
  1: [
    {
      text: 'لماذا اختير StateFlow بدلاً من LiveData في مشروع Jetpack Compose بالكامل؟',
      options: [
        { text: 'لأن collectAsState() يربط StateFlow بالـ lifecycle تلقائياً في Compose، وهو Kotlin-first بلا اعتماد على AndroidX.', correct: true },
        { text: 'لأن StateFlow أفضل من LiveData في كل الحالات دون استثناء.', correct: false },
        { text: 'لأن StateFlow من AndroidX مثله مثل LiveData لكنه أحدث.', correct: false },
        { text: 'لأن LiveData لا يعمل مع Compose إطلاقاً ولا يمكن ربطه أبداً.', correct: false },
      ],
    },
    {
      text: 'ما الفرق الجوهري بين `String` و `String?` في Kotlin؟',
      options: [
        { text: 'String? نوع nullable يُفحص في compile-time بدون أي runtime overhead.', correct: true },
        { text: 'String? يلتف حول كائن Optional مثل Java ويضيف heap allocation.', correct: false },
        { text: 'استخدام `!!` هو الطريقة الآمنة الموصى بها للتعامل مع null في production.', correct: false },
        { text: 'لا فرق بينهما سوى أن `?` توثيقية فقط ولا يؤثر في الـ compiler.', correct: false },
      ],
    },
    {
      text: 'ما المشكلة في `if (current < 37f) { ... = current + 2f }` داخل دالة تكبير الخط؟',
      options: [
        { text: 'أرقام سحرية بدون أسماء، إضافة إلى أن 36f + 2f = 38f يتجاوز الحد؛ الأصح const val مع coerceIn.', correct: true },
        { text: 'لا توجد مشكلة، الكود يعمل بشكل صحيح طالما الشرط موجود.', correct: false },
        { text: 'المشكلة أن `const val` في companion object بطيء ويضيف overhead.', correct: false },
        { text: 'coerceIn و coerceAtMost لا يصلحان مع أنواع Float في Kotlin.', correct: false },
      ],
    },
    {
      text: 'متى يُلغى الـ coroutine المنطلق من `viewModelScope.launch`؟',
      options: [
        { text: 'تلقائياً عند استدعاء ViewModel.onCleared()، وليس عند دوران الشاشة.', correct: true },
        { text: 'GlobalScope بديل آمن ومناسب لاستخدامه داخل ViewModel.', correct: false },
        { text: 'يُلغى تماماً عند دوران الشاشة ويُعاد تشغيله يدوياً.', correct: false },
        { text: 'يجب إلغاؤه يدوياً دائماً لأن viewModelScope لا يلغي شيئاً.', correct: false },
      ],
    },
    {
      text: 'لماذا استُخدم `object AppModule` بدلاً من `class` لتوفير الـ dependencies؟',
      options: [
        { text: 'لأن `object` هو singleton lazy و thread-safe تلقائياً في Kotlin.', correct: true },
        { text: 'لأن `object` لا يدعم thread-safety ويحتاج synchronized يدوي.', correct: false },
        { text: 'لأن `object` يُنشأ عند بدء التطبيق فوراً وليس lazy.', correct: false },
        { text: 'لأن `object` و `companion object` نفس الشيء تماماً.', correct: false },
      ],
    },
  ],
  2: [
    {
      text: 'ما المشكلة في تنفيذ `provideRepository` الحالي (الـ `!!` و `if (repo == null)`)؟',
      options: [
        { text: 'الـ `!!` قد يرمي NPE، والـ null check ليس thread-safe وقد يُنشئ repository مرتين.', correct: true },
        { text: 'Manual DI دائماً أفضل من Hilt ولا توجد مشكلة في هذا التنفيذ.', correct: false },
        { text: 'لا توجد مشكلة طالما الكود يعمل في runtime.', correct: false },
        { text: '@Volatile و @Synchronized غير مدعومين في Kotlin ويجب استخدام Java فقط.', correct: false },
      ],
    },
    {
      text: 'لماذا يوجد حقل `order: List<String>` في Page بدلاً من ترتيب ثابت للحقول؟',
      options: [
        { text: 'يفصل البيانات عن العرض، فكل صفحة تعلن ترتيب عرضها الخاص.', correct: true },
        { text: '`order` مجرد ترتيب عرض لا يحمل فلسفة تصميم ويمكن حذفه.', correct: false },
        { text: 'يجب حذفه واستخدام ترتيب ثابت دائماً في الكود.', correct: false },
        { text: 'وُجد لإبطاء الأداء فقط ولا فائدة منه.', correct: false },
      ],
    },
    {
      text: 'ماذا يفعل `@SerialName("order_index")` وماذا يحدث لو أزلته مع وجود `ignoreUnknownKeys = true`؟',
      options: [
        { text: 'bidirectional: يحدد اسم الحقل في JSON في الاتجاهين؛ بدونه يأخذ orderIndex القيمة 0 صامتاً (خطأ خفي).', correct: true },
        { text: 'يعمل في القراءة فقط ولا يؤثر في serialization.', correct: false },
        { text: 'ignoreUnknownKeys يحل المشكلة بالكامل ويملأ القيمة الصحيحة.', correct: false },
        { text: 'لا يؤثر إزالته طالما الـ property اسمه orderIndex.', correct: false },
      ],
    },
    {
      text: 'ما الخطر الرئيسي في الـ cache الحالي `cachedContent` داخل JsonKhatiraRepository؟',
      options: [
        { text: 'stale data — لا توجد آلية invalidation بعد تغير الملف، وassets داخل APK لا تتغير وقت التشغيل.', correct: true },
        { text: 'الـ cache يُحدَّث تلقائياً عند تغير الملف دون تدخل.', correct: false },
        { text: 'يمكن تغيير assets داخل APK وقت التشغيل بسهولة.', correct: false },
        { text: 'لا توجد مخاطر طالما المحتوى ثابت.', correct: false },
      ],
    },
    {
      text: 'لماذا استُخدم ملف JSON واحد بدلاً من Room database في هذا المشروع؟',
      options: [
        { text: 'التطبيق offline والمحتوى ثابت وصغير (~849KB)، فلا داعي لتعقيد Room.', correct: true },
        { text: 'لأن Room أبطأ دائماً من قراءة JSON في كل مرة.', correct: false },
        { text: 'لأن JSON يدعم SQL queries أفضل من Room.', correct: false },
        { text: 'لأن Play Asset Delivery غير مدعوم لتطبيقات Android.', correct: false },
      ],
    },
  ],
  3: [
    {
      text: 'في إنشاء `ReaderViewModel` عبر `viewModel(key = chapterId)`، ماذا يضمن الـ key؟',
      options: [
        { text: 'ViewModel مختلف لكل فصل، بحيث لا تتشارك الفصول في الحالة.', correct: true },
        { text: 'ViewModel واحد مشترك لكل الفصول لتوفير الذاكرة.', correct: false },
        { text: 'يُستخدم لتحميل الفصل فقط ولا يؤثر على دورة حياة ViewModel.', correct: false },
        { text: 'يجعل ViewModel يُلغى عند دوران الشاشة.', correct: false },
      ],
    },
    {
      text: 'لماذا يحيط `key(uiState.fontSize)` بـ PageContent في ReaderScreen؟',
      options: [
        { text: 'يجبر Compose على إزالة وإعادة إنشاء composable عند تغير fontSize، ويعيد تعيين rememberScrollState.', correct: true },
        { text: '`key()` لا يؤثر على composition ولا على remember.', correct: false },
        { text: '`remember` يبقى محفوظاً دائماً حتى مع تغير key.', correct: false },
        { text: 'يستخدم لتسريع الأداء فقط دون أي تأثير على الحالة.', correct: false },
      ],
    },
    {
      text: 'ما الـ performance bottleneck في آلية البحث الحالية (SearchViewModel)؟',
      options: [
        { text: 'كل ضغطة تعيد معالجة ~2650 حقلاً مع إنشاء String جديد لكل قيمة، فيسبب GC pressure.', correct: true },
        { text: 'removeSearchDiacritics لا تُستدعى لكل حقل، بل مرة واحدة فقط.', correct: false },
        { text: 'لا حاجة لـ debounce لأن العمليات خفيفة جداً.', correct: false },
        { text: 'إنشاء كائنات String المتكرر لا يسبب GC pressure في JVM.', correct: false },
      ],
    },
    {
      text: 'لماذا يوجد `LaunchedEffect(uiState.isLoading)` مع `pagerState.scrollToPage(initialPage)` في ReaderScreen؟',
      options: [
        { text: 'لحل مشكلة التوقيت — انتظار تحميل الصفحات ثم التمرير لـ initialPage (وإلا قد يحدث flicker).', correct: true },
        { text: 'لا حاجة له، initialPage في rememberPagerState يكفي دائماً.', correct: false },
        { text: 'path parameter يكفي دون الحاجة لـ query parameter.', correct: false },
        { text: 'لا يوجد flicker محتمل طالما PagerState يُنشأ بالـ initialPage.', correct: false },
      ],
    },
  ],
  4: [
    {
      text: 'لماذا `exitProcess(0)` خطأ في تطبيق Android؟',
      options: [
        { text: 'يتجاوز Activity و Application lifecycle فلا يُستدعى onDestroy ولا يُحفظ savedInstanceState، وقد يعيد النظام تشغيل التطبيق ظناً أنه crash.', correct: true },
        { text: 'exitProcess(0) يعادل finish() تماماً ويلتزم بالـ lifecycle.', correct: false },
        { text: 'النظام لن يعيد تشغيل التطبيق أبداً بعد exitProcess.', correct: false },
        { text: 'finishAffinity() لا يُغلق الـ Activities ولا يُنظف الموارد.', correct: false },
      ],
    },
    {
      text: 'ما المشكلة الأمنية في وضع `storePassword = "salam123"` داخل build.gradle.kts؟',
      options: [
        { text: 'credential hardcoding في VCS — كل من لديه access للمستودع يملك كلمة مرور التوقيع ويستطيع انتحال هوية التطبيق.', correct: true },
        { text: 'يكفي إضافتها إلى .gitignore لتنظيف git history بالكامل.', correct: false },
        { text: 'لا حاجة لتدوير المفتاح (key rotation) بعد إصلاح الكود.', correct: false },
        { text: 'وجود keystore في git لا يهم طالما كلمة المرور مخفية في ملف منفصل.', correct: false },
      ],
    },
    {
      text: 'ماذا يرى المستخدم عند فشل تحميل الفصول في HomeViewModel الحالي (catch يضع isLoading=false فقط)؟',
      options: [
        { text: 'شاشة فارغة تماماً بدون رسالة خطأ أو زر إعادة محاولة، فيظن التطبيق معلقاً.', correct: true },
        { text: 'الـ JSON لن يتلف أبداً فلا مشكلة في silent catch.', correct: false },
        { text: 'لا حاجة لإضافة retry mechanism في هذه الحالة.', correct: false },
        { text: 'الحالات loading و error و empty متطابقة وتُعرض بنفس الشكل.', correct: false },
      ],
    },
    {
      text: 'كم عملية تقريباً تتم في كل ضغطة مفتاح في البحث الحالي، وما أهم تحسينين؟',
      options: [
        { text: '~13,250 عملية؛ وأهم تحسينين: debounce ثم pre-normalize للحقول مرة واحدة.', correct: true },
        { text: 'حوالي 100 عملية فقط، فلا حاجة لأي تحسين.', correct: false },
        { text: 'debounce لا يفيد لأن المستخدم يكتب ببطء دائماً.', correct: false },
        { text: 'pre-normalize لا يوفر شيئاً لأن removeDiacritics عملية مجانية.', correct: false },
      ],
    },
    {
      text: 'ما المشكلة في `compileSdk = 37` في app/build.gradle.kts؟',
      options: [
        { text: 'API Level 37 غير موجود — أعلى level مطروح هو 36 (Android 16)، فالـ build سيفشل.', correct: true },
        { text: 'الـ build سينجح بـ SDK غير موجود دون أي مشكلة.', correct: false },
        { text: 'compileSdk يجب أن يساوي minSdk دائماً.', correct: false },
        { text: 'لا فرق بين compileSdk و targetSdk و minSdk سوى التسمية.', correct: false },
      ],
    },
  ],
  5: [
    {
      text: 'كيف تنجو ViewModel من تغيير الإعدادات (مثل التدوير)؟',
      options: [
        { text: 'ViewModelStore يُحتفظ به بعد destruction ويُمرَّر إلى Activity الجديد، ولا يُستدعى onCleared إلا عند finish.', correct: true },
        { text: 'ViewModel لا ينجو من config change ويُعاد إنشاؤه من الصفر.', correct: false },
        { text: 'onSaveInstanceState يحل محل ViewModel تماماً ويخزن أي حجم بيانات.', correct: false },
        { text: 'ViewModel يبقى حياً حتى بعد process death كأنه قاعدة بيانات.', correct: false },
      ],
    },
    {
      text: 'هل `System.gc()` يضمن تشغيل Garbage Collection في Android؟ ومتى تحتاج GC tuning؟',
      options: [
        { text: 'لا — مجرد اقتراح للـ Runtime ولا يضمن التنفيذ؛ وتحتاج tuning عند كثرة allocations تسبب jank، أو memory leaks، أو bitmap كبير.', correct: true },
        { text: 'System.gc() يحل مشاكل الذاكرة دائماً ويفرض GC فوراً.', correct: false },
        { text: 'Android يستخدم Reference Counting مثل Swift ARC.', correct: false },
        { text: 'ART GC لا يحتوي على أي Stop-The-World pauses إطلاقاً.', correct: false },
      ],
    },
    {
      text: 'أي مبدأ من مبادئ SOLID ينتهك `fieldLabel()` التي تستخدم `when` لكل الحقول وتحتاج تعديلها عند إضافة حقل جديد؟',
      options: [
        { text: 'Open/Closed — مفتوح للتمديد مغلق للتعديل، لكن إضافة حقل تتطلب تعديل الدالة.', correct: true },
        { text: 'Single Responsibility فقط ولا انتهاك آخر.', correct: false },
        { text: 'لا يوجد انتهاك طالما الدالة صغيرة.', correct: false },
        { text: 'Liskov Substitution لأن الدالة لا تُستبدل.', correct: false },
      ],
    },
    {
      text: 'في كتابة unit test لـ `increaseFontSize()`، ماذا تحتاج إلى mock وكيف تتعامل مع viewModelScope؟',
      options: [
        { text: 'mock لـ KhatiraRepository فقط، مع Dispatchers.setMain(StandardTestDispatcher) ثم advanceUntilIdle().', correct: true },
        { text: 'لا نحتاج mock لشيء لأنها دالة نقية.', correct: false },
        { text: 'نختبر Compose recomposition ضمن unit test.', correct: false },
        { text: 'نستخدم Dispatchers.Main مباشرة بدون setMain في الاختبارات.', correct: false },
      ],
    },
    {
      text: 'ماذا يفعل R8 في release build، ولماذا تعطيله (`optimization.enable = false`) خطير؟',
      options: [
        { text: 'shrink + obfuscate + optimize؛ تعطيله يُبقي أسماء الـ classes و الـ methods مكشوفة فيسهل reverse engineering ويزيد حجم APK.', correct: true },
        { text: 'R8 مجرد تحسين حجم وليس ضرورياً للأمان.', correct: false },
        { text: 'بدون R8 الكود آمن تماماً ولا يمكن فك تشفيره.', correct: false },
        { text: 'proguard-rules.pro لا حاجة لها طالما R8 مفعل.', correct: false },
      ],
    },
    {
      text: 'كيف يمكن لمهاجم استغلال keystore المكشوف مع R8 معطل معاً لانتحال هوية التطبيق؟',
      options: [
        { text: 'يبني تطبيقاً ضاراً موقّعاً بنفس توقيعك ويفهم الكود بسهولة عبر decompiler، فيوزعه كتحديث أو تطبيق منتحل.', correct: true },
        { text: 'لا حاجة لـ Play App Signing لأنه لا يحمي المفاتيح.', correct: false },
        { text: 'Key rotation غير ممكن بعد إطلاق التطبيق إطلاقاً.', correct: false },
        { text: 'لا يمكن انتحال هوية التطبيق طالما كلمة المرور بسيطة.', correct: false },
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
  { id: 1, title: 'أساسيات Kotlin & Android' },
  { id: 2, title: 'قرارات معمارية' },
  { id: 3, title: 'تتبع التدفق' },
  { id: 4, title: 'اكتشف المشاكل' },
  { id: 5, title: 'نظرية عامة' },
]

export const chapterNamesAr: Record<number, string> = {
  1: 'الأول',
  2: 'الثاني',
  3: 'الثالث',
  4: 'الرابع',
  5: 'الخامس',
}
