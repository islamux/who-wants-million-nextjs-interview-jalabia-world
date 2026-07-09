import type { Question, MoneyLevel } from '../types/game'

export const chapterQuestionsEn: Record<number, Question[]> = {
  1: [
    {
      text: 'Why was StateFlow chosen over LiveData in a full Jetpack Compose project?',
      options: [
        { text: 'Because collectAsState() bridges StateFlow to the Compose lifecycle automatically, and it is Kotlin-first with no AndroidX dependency.', correct: true },
        { text: 'Because StateFlow is always better than LiveData in every situation.', correct: false },
        { text: 'Because StateFlow is part of AndroidX just like LiveData, but newer.', correct: false },
        { text: 'Because LiveData cannot work with Compose at all and can never be wired up.', correct: false },
      ],
    },
    {
      text: 'What is the fundamental difference between `String` and `String?` in Kotlin?',
      options: [
        { text: 'String? is a nullable type checked at compile time with zero runtime overhead.', correct: true },
        { text: 'String? wraps an Optional object like in Java and adds heap allocation.', correct: false },
        { text: 'Using `!!` is the safe, recommended way to handle null in production.', correct: false },
        { text: 'There is no difference — the `?` is only documentation and does not affect the compiler.', correct: false },
      ],
    },
    {
      text: 'What is the problem with `if (current < 37f) { ... = current + 2f }` in a font-size increment function?',
      options: [
        { text: 'Magic numbers without names, plus 36f + 2f = 38f exceeds the bound; the fix is const val with coerceIn.', correct: true },
        { text: 'There is no problem — the code works correctly as long as the condition is present.', correct: false },
        { text: 'The problem is that `const val` in a companion object is slow and adds overhead.', correct: false },
        { text: 'coerceIn and coerceAtMost do not work on Float types in Kotlin.', correct: false },
      ],
    },
    {
      text: 'When is a coroutine launched from `viewModelScope.launch` cancelled?',
      options: [
        { text: 'Automatically when ViewModel.onCleared() is called, not on screen rotation.', correct: true },
        { text: 'GlobalScope is a safe and appropriate alternative to use inside a ViewModel.', correct: false },
        { text: 'It is fully cancelled on every screen rotation and must be restarted manually.', correct: false },
        { text: 'It must always be cancelled manually because viewModelScope cancels nothing.', correct: false },
      ],
    },
    {
      text: 'Why was `object AppModule` used instead of a `class` to provide dependencies?',
      options: [
        { text: 'Because `object` is a lazy, thread-safe singleton automatically in Kotlin.', correct: true },
        { text: 'Because `object` does not support thread-safety and needs manual synchronized.', correct: false },
        { text: 'Because `object` is created eagerly at app start and is not lazy.', correct: false },
        { text: 'Because `object` and `companion object` are exactly the same thing.', correct: false },
      ],
    },
  ],
  2: [
    {
      text: 'What is the problem with the current `provideRepository` implementation (the `!!` and `if (repo == null)`)?',
      options: [
        { text: 'The `!!` can throw NPE, and the null check is not thread-safe and could create the repository twice.', correct: true },
        { text: 'Manual DI is always better than Hilt and there is no problem with this implementation.', correct: false },
        { text: 'There is no problem as long as the code works at runtime.', correct: false },
        { text: '@Volatile and @Synchronized are not supported in Kotlin and require Java.', correct: false },
      ],
    },
    {
      text: 'Why does Page have an `order: List<String>` field instead of a fixed field order?',
      options: [
        { text: 'It separates data from presentation: each page declares its own display order.', correct: true },
        { text: '`order` is just a display sequence with no design philosophy and can be removed.', correct: false },
        { text: 'It should be removed and replaced with a fixed order in code.', correct: false },
        { text: 'It exists only to slow things down and has no benefit.', correct: false },
      ],
    },
    {
      text: 'What does `@SerialName("order_index")` do, and what happens if you remove it when `ignoreUnknownKeys = true`?',
      options: [
        { text: 'Bidirectional: it pins the JSON field name in both directions; without it, orderIndex silently takes the default value 0 (a hidden bug).', correct: true },
        { text: 'It works only for deserialization and has no effect on serialization.', correct: false },
        { text: 'ignoreUnknownKeys solves the problem completely and fills in the correct value.', correct: false },
        { text: 'Removing it has no effect as long as the property is named orderIndex.', correct: false },
      ],
    },
    {
      text: 'What is the main risk of the current `cachedContent` in JsonKhatiraRepository?',
      options: [
        { text: 'Stale data — there is no invalidation mechanism after the file changes, and assets inside the APK cannot change at runtime.', correct: true },
        { text: 'The cache is updated automatically when the file changes, with no intervention.', correct: false },
        { text: 'Assets inside an APK can easily be changed at runtime.', correct: false },
        { text: 'There are no risks as long as the content is static.', correct: false },
      ],
    },
    {
      text: 'Why was a single JSON file used instead of a Room database in this project?',
      options: [
        { text: 'The app is offline, the content is static and small (~849KB), so Room is unnecessary complexity.', correct: true },
        { text: 'Because Room is always slower than reading JSON every time.', correct: false },
        { text: 'Because JSON supports better SQL queries than Room.', correct: false },
        { text: 'Because Play Asset Delivery is not supported on Android.', correct: false },
      ],
    },
  ],
  3: [
    {
      text: 'In creating `ReaderViewModel` via `viewModel(key = chapterId)`, what does the key guarantee?',
      options: [
        { text: 'A different ViewModel per chapter, so chapters do not share state.', correct: true },
        { text: 'A single shared ViewModel across all chapters to save memory.', correct: false },
        { text: 'It is used only to load the chapter and does not affect the ViewModel lifecycle.', correct: false },
        { text: 'It causes the ViewModel to be cancelled on every screen rotation.', correct: false },
      ],
    },
    {
      text: 'Why does `key(uiState.fontSize)` wrap PageContent in ReaderScreen?',
      options: [
        { text: 'It forces Compose to remove and recreate the composable when fontSize changes, resetting rememberScrollState.', correct: true },
        { text: '`key()` has no effect on composition or remember.', correct: false },
        { text: '`remember` always persists, even when the key changes.', correct: false },
        { text: 'It is used only to speed things up with no impact on state.', correct: false },
      ],
    },
    {
      text: 'What is the performance bottleneck in the current search mechanism (SearchViewModel)?',
      options: [
        { text: 'Every keystroke re-processes ~2650 fields and creates a new String for each value, causing GC pressure.', correct: true },
        { text: 'removeSearchDiacritics is not called for every field — only once.', correct: false },
        { text: 'Debouncing is unnecessary because the operations are very lightweight.', correct: false },
        { text: 'Repeated String allocation does not cause GC pressure on the JVM.', correct: false },
      ],
    },
    {
      text: 'Why does ReaderScreen have `LaunchedEffect(uiState.isLoading)` with `pagerState.scrollToPage(initialPage)`?',
      options: [
        { text: 'It solves a timing problem — wait for pages to load, then scroll to initialPage (otherwise it would flicker).', correct: true },
        { text: 'It is unnecessary; initialPage in rememberPagerState is always enough.', correct: false },
        { text: 'A path parameter is enough with no need for a query parameter.', correct: false },
        { text: 'There is no possible flicker as long as PagerState is created with initialPage.', correct: false },
      ],
    },
    {
      text: 'Why is `val uiState: StateFlow` exposed while the backing field is `MutableStateFlow` inside the ViewModels?',
      options: [
        { text: 'Encapsulation: the outside reads only via StateFlow, and writes happen inside the ViewModel — preventing state mutation from anywhere.', correct: true },
        { text: 'No difference; exposing the MutableStateFlow directly causes no problems.', correct: false },
        { text: 'StateFlow is slower than MutableStateFlow, so two instances are used.', correct: false },
        { text: 'MutableStateFlow does not work with collectAsState in Compose.', correct: false },
      ],
    },
    {
      text: 'Why `rememberCoroutineScope()` (not viewModelScope) to launch `pagerState.scrollToPage` inside the Slider?',
      options: [
        { text: 'It is tied to the composition lifecycle: it is cancelled when the screen leaves; scrollToPage is a UI operation, not business logic.', correct: true },
        { text: 'viewModelScope is always better for every coroutine inside Compose.', correct: false },
        { text: 'rememberCoroutineScope survives screen destruction and lives for the whole session.', correct: false },
        { text: 'scrollToPage is not suspend so it needs no scope at all.', correct: false },
      ],
    },
  ],
  4: [
    {
      text: 'Why is `exitProcess(0)` wrong in an Android app?',
      options: [
        { text: 'It bypasses the Activity and Application lifecycle — onDestroy is not called, savedInstanceState is not saved, and the system may relaunch the app thinking it crashed.', correct: true },
        { text: 'exitProcess(0) is exactly equivalent to finish() and respects the lifecycle.', correct: false },
        { text: 'The system will never relaunch the app after exitProcess.', correct: false },
        { text: 'finishAffinity() does not close the Activities and does not clean up resources.', correct: false },
      ],
    },
    {
      text: 'What is the security issue with putting `storePassword = "salam123"` in build.gradle.kts?',
      options: [
        { text: 'Credential hardcoding in VCS — anyone with access to the repository owns the signing password and can impersonate the app.', correct: true },
        { text: 'Adding it to .gitignore alone fully cleans git history.', correct: false },
        { text: 'No key rotation is needed once the code is fixed.', correct: false },
        { text: 'The keystore being in git does not matter as long as the password is hidden in a separate file.', correct: false },
      ],
    },
    {
      text: 'What does the user see when chapter loading fails in the current HomeViewModel (catch only sets isLoading=false)?',
      options: [
        { text: 'A completely blank screen with no error message or retry button — the app looks frozen.', correct: true },
        { text: 'The JSON will never be corrupted, so a silent catch is fine.', correct: false },
        { text: 'A retry mechanism is unnecessary in this case.', correct: false },
        { text: 'Loading, error, and empty are identical and render the same way.', correct: false },
      ],
    },
    {
      text: 'Roughly how many operations happen per keystroke in the current search, and what are the two most important improvements?',
      options: [
        { text: '~13,250 operations; the two most important improvements are debouncing, then pre-normalizing fields once.', correct: true },
        { text: 'About 100 operations, so no improvement is needed.', correct: false },
        { text: 'Debouncing does not help because users always type slowly.', correct: false },
        { text: 'Pre-normalizing saves nothing because removeDiacritics is free.', correct: false },
      ],
    },
    {
      text: 'What is the problem with `compileSdk = 37` in app/build.gradle.kts?',
      options: [
        { text: 'API level 37 does not exist — the highest released level is 36 (Android 16), so the build will fail.', correct: true },
        { text: 'The build will succeed with a non-existent SDK without any problem.', correct: false },
        { text: 'compileSdk must always equal minSdk.', correct: false },
        { text: 'There is no difference between compileSdk, targetSdk, and minSdk apart from the name.', correct: false },
      ],
    },
  ],
  5: [
    {
      text: 'How does a ViewModel survive a configuration change (e.g. rotation)?',
      options: [
        { text: 'The ViewModelStore is kept after destruction and handed to the new Activity; onCleared runs only on finish.', correct: true },
        { text: 'The ViewModel does not survive a config change and is recreated from scratch.', correct: false },
        { text: 'onSaveInstanceState fully replaces the ViewModel and can store data of any size.', correct: false },
        { text: 'The ViewModel stays alive even after process death, like a database.', correct: false },
      ],
    },
    {
      text: 'Does `System.gc()` guarantee a garbage-collection run on Android, and when do you need GC tuning?',
      options: [
        { text: 'No — it is only a hint to the runtime and is not guaranteed; tune when heavy allocations cause jank, memory leaks, or large bitmaps.', correct: true },
        { text: 'System.gc() always solves memory problems and forces GC immediately.', correct: false },
        { text: 'Android uses reference counting like Swift ARC.', correct: false },
        { text: 'ART GC has no Stop-The-World pauses at all.', correct: false },
      ],
    },
    {
      text: 'Which SOLID principle does `fieldLabel()` (a `when` over every field that must be edited when a new field is added) violate?',
      options: [
        { text: 'Open/Closed — open to extension, closed to modification, but adding a field requires modifying the function.', correct: true },
        { text: 'Only Single Responsibility, with no other violation.', correct: false },
        { text: 'There is no violation as long as the function is small.', correct: false },
        { text: 'Liskov Substitution, because the function is not substituted.', correct: false },
      ],
    },
    {
      text: 'When writing a unit test for `increaseFontSize()`, what do you need to mock, and how do you handle viewModelScope?',
      options: [
        { text: 'Mock only KhatiraRepository, with Dispatchers.setMain(StandardTestDispatcher) and advanceUntilIdle().', correct: true },
        { text: 'Nothing needs to be mocked because the function is pure.', correct: false },
        { text: 'Test Compose recomposition as part of the unit test.', correct: false },
        { text: 'Use Dispatchers.Main directly without setMain in the tests.', correct: false },
      ],
    },
    {
      text: 'What does R8 do in a release build, and why is disabling it (`optimization.enable = false`) dangerous?',
      options: [
        { text: 'Shrink + obfuscate + optimize; disabling it leaves class and method names exposed, making reverse engineering easy and bloating APK size.', correct: true },
        { text: 'R8 is just a size optimization and is not needed for security.', correct: false },
        { text: 'Without R8 the code is fully secure and cannot be decompiled.', correct: false },
        { text: 'proguard-rules.pro is unnecessary as long as R8 is enabled.', correct: false },
      ],
    },
    {
      text: 'How can an attacker exploit an exposed keystore together with R8 disabled to impersonate the app?',
      options: [
        { text: 'They build a malicious app signed with your signature and read your code easily via a decompiler, then distribute it as a fake update or app.', correct: true },
        { text: 'Play App Signing is not needed because it does not protect keys.', correct: false },
        { text: 'Key rotation is impossible once the app is published.', correct: false },
        { text: 'App impersonation is impossible as long as the password is simple.', correct: false },
      ],
    },
  ],
  6: [
    {
      text: 'Why `const val HOME = "home"` inside `object Routes` instead of a plain `val`?',
      options: [
        { text: 'const val is a compile-time constant inlined at use sites — faster with no allocation and no object instantiation.', correct: true },
        { text: 'val and const val are identical in the generated bytecode.', correct: false },
        { text: 'const val only works at top-level and is not allowed inside an object.', correct: false },
        { text: 'const val adds a heap allocation per use because it creates a String object.', correct: false },
      ],
    },
    {
      text: 'Why `Intent().apply { action = ...; putExtra(...) }` instead of `also` or `let`?',
      options: [
        { text: 'apply returns the receiver itself after configuring it — ideal for building and chaining an Intent.', correct: true },
        { text: 'also returns the lambda result instead of the receiver.', correct: false },
        { text: 'let preserves the receiver and needs no explicit return.', correct: false },
        { text: 'apply and run are exactly the same and both return the lambda result.', correct: false },
      ],
    },
    {
      text: 'What does `.bufferedReader().use { it.readText() }` guarantee, and what happens if you remove `use`?',
      options: [
        { text: 'It closes the stream automatically even on exception; without it, a file descriptor leak occurs.', correct: true },
        { text: 'use is just syntax sugar and does not close anything automatically.', correct: false },
        { text: 'readText closes the reader automatically, so use is unnecessary.', correct: false },
        { text: 'use only works on Cursor and is not supported on Reader.', correct: false },
      ],
    },
    {
      text: 'Why `JsonKhatiraRepository(context.applicationContext)` in the singleton instead of `context` directly?',
      options: [
        { text: 'The singleton lives for the whole process; holding an Activity context would leak the Activity on rotation. applicationContext is safe.', correct: true },
        { text: 'applicationContext is slower than Activity context when opening assets.', correct: false },
        { text: 'No difference; both are exactly the same object.', correct: false },
        { text: 'applicationContext does not work with assets.open at all.', correct: false },
      ],
    },
    {
      text: 'How does `decodeFromString<KhatiraContent>(...)` work without passing a Class<T> explicitly?',
      options: [
        { text: 'The function is inline with a reified type parameter: the compiler knows KhatiraContent::class at the call site and generates the serializer.', correct: true },
        { text: 'reified is available in all regular functions without inline.', correct: false },
        { text: 'decodeFromString reflects on T::class.java on every call.', correct: false },
        { text: 'reified adds a heap allocation per call because it creates a Class object.', correct: false },
      ],
    },
    {
      text: 'Why do we need a Factory with `@Suppress("UNCHECKED_CAST")` instead of direct `viewModel()`?',
      options: [
        { text: 'The default viewModel() cannot inject constructor params; the Factory builds it with the repository. The cast is logically safe but the compiler cannot prove it — hence @Suppress.', correct: true },
        { text: 'viewModel() builds any ViewModel automatically even with constructor params, no Factory needed.', correct: false },
        { text: 'UNCHECKED_CAST means a guaranteed runtime error.', correct: false },
        { text: 'A Factory removes the need for viewModelScope in the ViewModel entirely.', correct: false },
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
  { id: 1, title: 'Kotlin & Android Basics' },
  { id: 2, title: 'Architecture Decisions' },
  { id: 3, title: 'Flow Tracing' },
  { id: 4, title: 'Spot the Bugs' },
  { id: 5, title: 'General Theory' },
  { id: 6, title: 'Kotlin In The Trenches' },
]

export const chapterNamesEn: Record<number, string> = {
  1: 'First',
  2: 'Second',
  3: 'Third',
  4: 'Fourth',
  5: 'Fifth',
  6: 'Sixth',
}
