import {
    i as o,
    q as t
} from "./index.js";

const c = ["my-halaqoh", "lensa-kulitku", "our-story", "report"],
    r = "https://ibrahimkayyis.github.io",
    h = "https://avatars.githubusercontent.com/u/33700292?v=4&s=512",
    g = [{
        key: "problem",
        label: "The Problem"
    }, {
        key: "constraints",
        label: "Constraints"
    }, {
        key: "solution",
        label: "The Solution"
    }, {
        key: "architecture",
        label: "Architecture"
    }, {
        key: "performance",
        label: "Performance"
    }, {
        key: "results",
        label: "Results"
    }, {
        key: "lessons",
        label: "Lessons Learned"
    }],
    l = [{
        slug: "my-halaqoh",
        title: "MyHalaqoh — Quran Memorization & Pesantren Management",
        subtitle: "Digital backbone for Qur'an memorization tracking & attendance management in pesantren",
        description: "Designed & engineered MyHalaqoh, an offline-first Flutter mobile application enabling role-based management (Admin, Teachers, Parents) for Qur'an memorization progress, multi-session attendance with barcode scanning, and automated push notifications.",
        date: "2026-06-15",
        readTime: "6 min read",
        tags: ["Flutter", "Dart", "Clean Architecture", "Cubit / BLoC", "Hive", "Firestore"],
        heroImage: "/project-images/my_halaqoh.png",
        role: "Lead Mobile Developer",
        timeline: "2024 — Present",
        platforms: ["Android", "iOS"],
        links: [{
            label: "View Repository on GitHub",
            url: "https://github.com/Ibrahimkayyis/my_halaqoh"
        }],
        metrics: [{
            value: "114",
            label: "Surahs Tracked"
        }, {
            value: "100%",
            label: "Offline Sync"
        }, {
            value: "4",
            label: "User Roles"
        }, {
            value: "5",
            label: "Daily Sessions"
        }],
        problem: `Many pesantren (Islamic boarding schools) in Indonesia still rely on paper-based systems for daily operations — recording Qur'an memorization progress on handwritten cards, tracking attendance in physical logbooks, and communicating student progress to parents through informal channels. This manual approach is error-prone, hard to aggregate, and offers no real-time visibility.`,
        constraints: `Key architectural constraints:
- **Offline-First Sync**: Teachers need to record attendance and memorization progress in areas with unstable internet connectivity. Data must write locally to Hive and automatically sync with Cloud Firestore when connected.
- **Role-Based Access Control**: Strict route guards and permissions enforced across 4 user roles (Super Admin, Admin, Guru, Wali Santri).
- **Comprehensive Quran Metadata**: Accurate per-surah (114 surahs) and per-juz memorization tracking with kelancaran and tajwid ratings.`,
        solution: `MyHalaqoh employs an **offline-first architecture** with **Clean Architecture** principles, featuring role-based dashboards for Super Admin, Admin, Guru, and Wali Santri.

### Key Features
- **Super Admin**: Role impersonation for testing, complete activity audit log, full system access.
- **Admin**: Guru & Santri profile management, Halaqoh study circle setup, Target Hafalan (SPI) semester progress indicators, user account management via Cloud Functions.
- **Guru**: Multi-session attendance (Shubuh, Dhuha, Siang, Ashar, Maghrib) with barcode scanning, Hafalan input (surah, ayah range, juz, kelancaran & tajwid ratings), mutaba'ah progress analytics, PDF/CSV report exports.
- **Wali Santri**: Parent overview dashboard, memorization history, per-juz & per-surah analytics, instant FCM push notifications upon attendance or hafalan submissions.
- **Cross-Cutting**: Bilingual support (Indonesian & English via slang i18n), Dark/Light themes, responsive design via flutter_screenutil (360x690 base), and strict role-based access control.

### Offline-First Sync Flow Architecture

![Offline-First Sync Flow Architecture](/project-images/offline_first_sync_myhalaqoh.png)

**Key Sync Mechanics:**
- **Write Path**: Instant save to local Hive box (<5ms UI response) -> async background push to Firestore.
- **Read Path**: Stream directly from Hive boxes; Firestore accessed only for initial seed (seedFromRemoteIfEmpty).
- **Sync Trigger**: connectivity_plus stream listener automatically triggers sync queue upon network restoration.
- **ID Strategy**: Deterministic client keys ({halaqohId}_{timestampMs}_{sesi}) guarantee stability across offline/online states.
- **Push Notifications**: Firestore writes trigger Firebase Cloud Functions (sendAbsensiNotification & sendHafalanNotification) to dispatch FCM push notifications to parents.
`,
        architecture: `MyHalaqoh follows **Clean Architecture** principles with three distinct layers per feature module (Presentation, Domain, Data):

![Clean Architecture Layers](/project-images/architecture_my_halaqoh.png)

### Code Structure & Data Flow

\`\`\`dart
// Data Layer: Repository implementation handling local Hive cache & Firestore remote sync
class HafalanRepositoryImpl implements HafalanRepository {
  final HafalanLocalDataSource localDataSource;
  final HafalanRemoteDataSource remoteDataSource;
  final NetworkInfo networkInfo;

  HafalanRepositoryImpl({
    required this.localDataSource,
    required this.remoteDataSource,
    required this.networkInfo,
  });

  @override
  Future<Either<Failure, Unit>> submitHafalan(HafalanModel record) async {
    try {
      // 1. Instant local write to Hive NoSQL box
      await localDataSource.saveHafalan(record.copyWith(isSynced: false));

      // 2. Async push to Firestore if online
      if (await networkInfo.isConnected) {
        await remoteDataSource.syncHafalan(record);
        await localDataSource.markSynced(record.id);
      }
      return right(unit);
    } catch (e) {
      return left(CacheFailure());
    }
  }
}
\`\`\`

### Key Modules & Tech Stack
- **Framework & State**: Flutter 3.35.4, Dart ^3.9.2, flutter_bloc (Cubit), freezed, get_it DI, dartz (Either).
- **Backend & Offline**: Firebase Firestore, Firebase Auth, FCM, hive_flutter (8 TypeAdapters), connectivity_plus.
- **UI & i18n**: flutter_screenutil (360x690 base), google_fonts (Poppins), mobile_scanner, slang (type-safe i18n).
`,
        performance: `Offline writes execute instantaneously (<5ms) to Hive cache. Background sync reconciles records with Firestore within 1.2s of network reconnection.`,
        results: `Adopted for daily Qur'an memorization tracking, handling multi-session attendance across 5 daily prayer times with 100% data preservation during offline operation.`,
        lessons: `Building an offline-first architecture with Hive + Firestore requires strict local-first state mutation rules to ensure zero data loss when multiple sessions write concurrently.`
    }, {
        slug: "lensa-kulitku",
        title: "LensaKulitku — AI-Powered Skin Disease Detection",
        subtitle: "Empowering early dermatological detection with Android Native and Machine Learning",
        description: "Bangkit Academy Capstone Project: Built an AI-driven Android application utilizing TensorFlow Lite models and CameraX for early skin disease classification, comparative health tracking, and intuitive Material Design 3 UI.",
        date: "2026-05-20",
        readTime: "5 min read",
        tags: ["Kotlin", "Android Native", "TensorFlow Lite", "CameraX", "MVVM", "Material Design 3"],
        heroImage: "/project-images/LensaKulitku.jpg",
        role: "Android Developer (Bangkit Capstone)",
        timeline: "2024",
        platforms: ["Android"],
        links: [{
            label: "View Repository on GitHub",
            url: "https://github.com/Ibrahimkayyis/LensaKulitku"
        }],
        metrics: [{
            value: "AI",
            label: "TFLite Model"
        }, {
            value: "Real-time",
            label: "CameraX Analysis"
        }, {
            value: "MD3",
            label: "Material Design"
        }, {
            value: "MVVM",
            label: "Clean Architecture"
        }],
        problem: `Delayed skin disease detection and limited access to dermatology services cause severe health risks for individuals in remote areas with limited access to clinics or high medical costs.`,
        constraints: `- **On-Device Inference Speed**: Machine learning models must process image frames fast without freezing the UI thread.
- **Camera Reliability**: High-resolution image capture and preprocessing across diverse Android hardware devices.`,
        solution: `LensaKulitku combines **Android Native (Kotlin)** with **TensorFlow Lite** for fast on-device image classification.

Features:
- **Instant Camera & Gallery Upload**: Seamless camera integration using CameraX with automatic image cropping and normalization.
- **Skin Condition Tracking**: Historical comparison views allowing users to monitor skin improvement or changes over time.
- **Material Design 3**: Modern, accessible UI design tailored for easy navigation by users of all ages.`,
        architecture: `\`\`\`kotlin
// MVVM Image Analysis Pipeline
class ScanViewModel(private val repository: SkinRepository) : ViewModel() {
    fun analyzeSkinImage(bitmap: Bitmap) = viewModelScope.launch {
        val result = repository.classifyImage(bitmap)
        _scanResult.postValue(result)
    }
}
\`\`\``,
        performance: `On-device image preprocessing and TFLite classification completes in <350ms on standard mobile processors.`,
        results: `Developed as a Bangkit Academy Capstone project, providing accessible early skin disease detection and tracking.`,
        lessons: `Optimizing machine learning models for mobile requires precise image tensor normalization and background thread allocation.`
    }, {
        slug: "our-story",
        title: "OurStory — Geolocation Social Storytelling Platform",
        subtitle: "Connecting student communities through photo stories and interactive geolocation mapping",
        description: "A social networking mobile application featuring story sharing, photo uploads with descriptions, and an interactive Google Maps view allowing users to explore geo-tagged stories from peers.",
        date: "2026-04-10",
        readTime: "4 min read",
        tags: ["Kotlin", "Android Native", "Google Maps API", "REST API", "Retrofit"],
        heroImage: "/project-images/OurStory.jpg",
        role: "Android Developer",
        timeline: "2024",
        platforms: ["Android"],
        links: [{
            label: "View Repository on GitHub",
            url: "https://github.com/Ibrahimkayyis/OurStory"
        }],
        metrics: [{
            value: "Maps API",
            label: "Interactive Map"
        }, {
            value: "Geo-tag",
            label: "Story Location"
        }, {
            value: "Retrofit",
            label: "REST Client"
        }],
        problem: `Students and community members lack a centralized, visually rich platform to share learning journeys and explore stories tagged by geographical location.`,
        constraints: `- **Smooth Map Rendering**: Efficient custom marker rendering on Google Maps API for dense story clusters.
- **Media Upload**: Compression and multipart uploading of high-resolution images.`,
        solution: `Built with **Kotlin Native** using **Retrofit** for REST API integration and **Google Maps SDK**.

Features:
- **Interactive Story Map**: Visualizing peer stories across custom map markers with instant preview callouts.
- **Rich Story Posting**: Photo capture, description writing, and precise location tagging.
- **Authentication & Persistence**: Secure token storage and session management.`,
        architecture: `\`\`\`kotlin
// Maps Location Marker Integration
override onMapReady(googleMap: GoogleMap) {
    viewModel.storiesWithLocation.observe(this) { stories ->
        stories.forEach { story ->
            googleMap.addMarker(MarkerOptions().position(LatLng(story.lat, story.lon)).title(story.name))
        }
    }
}
\`\`\``,
        performance: `Loads story map markers asynchronously with zero main-thread stuttering.`,
        results: `Successfully delivered as a comprehensive Dicoding Android project, featuring full location-based social interaction.`,
        lessons: `Combining Google Maps SDK with LiveData ensures reactive updates whenever new story locations are published.`
    }, {
        slug: "report",
        title: "REPORT — Regional e-Portal for Operation & Request Tracking",
        subtitle: "Production-grade, cross-platform Flutter application for regional operations, work-order management, and real-time field reporting",
        description: "Designed and engineered REPORT, an enterprise Flutter application built with Clean Architecture, BLoC/Cubit, offline-first data persistence, Retrofit + Dio REST API, Sentry error monitoring, Firebase Cloud Messaging, QR/barcode scanning, rich PDF export, and built-in real-time chat.",
        date: "2026-07-01",
        readTime: "6 min read",
        tags: ["Flutter", "Dart", "Clean Architecture", "BLoC / Cubit", "Retrofit & Dio", "Hive & SQLite", "Sentry", "Firebase FCM", "slang i18n"],
        heroImage: "/project-images/report_screenshot.png",
        role: "Lead Flutter Developer",
        timeline: "2025",
        platforms: ["Android", "iOS", "Web"],
        links: [{
            label: "View Repository on GitHub",
            url: "https://github.com/Ibrahimkayyis/Report"
        }],
        metrics: [{
            value: "Clean Arch",
            label: "3-Layer Design"
        }, {
            value: "Offline-first",
            label: "Hive & SQLite"
        }, {
            value: "Sentry",
            label: "Error Monitoring"
        }, {
            value: "i18n",
            label: "Slang (ID & EN)"
        }],
        problem: `Regional infrastructure management and field operations in large organizations often suffer from fragmented reporting methods, lack of offline support in remote field sites, untracked work-order lifecycles, and delayed resolution times.`,
        constraints: `Key technical requirements:
- **Clean Architecture & Scalability**: Modularized feature structure (Auth, Dashboard, Report, Chat, Scanner, Calendar, Profile, Notifications) with domain purity and pure Dart use cases.
- **Offline Data & Sync**: Local storage using Hive NoSQL boxes and SQLite for offline work-order drafts, with Sentry exception streaming upon reconnect.
- **Type-Safe Tooling**: Zero magic strings through code generators (auto_route v10, freezed, injectable, retrofit_generator, slang_build_runner, envied).`,
        solution: `REPORT provides a unified mobile and web platform for field officers and administrators.

### Core Architectural Features:
- **Feature Modules**: Independent vertical slices (\`features/report\`, \`features/chat\`, \`features/scanner\`, \`features/calendar\`, \`features/notification\`, \`features/dashboard\`).
- **Networking & Resilience**: Retrofit REST client over Dio with custom interceptors (\`pretty_dio_logger\`), automatic Sentry error tracking, and environment security via \`envied\`.
- **State Management**: BLoC / Cubit pattern with immutable \`freezed\` events/states and \`get_it\` + \`injectable\` dependency injection.
- **QR / Barcode & Media**: Integrated \`mobile_scanner\` for inventory/asset scanning, photo attachments via \`image_picker\`, and PDF generation via \`pdf\`.
- **Real-time Chat & Calendar**: In-app messaging via \`flutter_chat_ui\` and scheduling with \`table_calendar\`.
- **Localization**: Bilingual support (Indonesian base locale + English) powered by \`slang\`.`,
        architecture: `\`\`\`
┌─────────────────────────────────────────────────────────┐
│ Presentation Layer                                      │
│ Widgets · Pages · BLoC / Cubit · auto_route v10         │
├─────────────────────────────────────────────────────────┤
│ Domain Layer                                            │
│ Use Cases · Entities · Repository Contracts (Pure Dart) │
├─────────────────────────────────────────────────────────┤
│ Data Layer                                              │
│ Repositories · DTOs · Retrofit · Dio · Hive · SQLite    │
└─────────────────────────────────────────────────────────┘
\`\`\`

### Data Flow Example (Report Submission):
\`\`\`dart
// Data Layer: Repository Impl with Dio Retrofit Remote & Hive Local fallback
class ReportRepositoryImpl implements ReportRepository {
  final ReportRemoteDataSource remoteDataSource;
  final ReportLocalDataSource localDataSource;

  ReportRepositoryImpl({
    required this.remoteDataSource,
    required this.localDataSource,
  });

  @override
  Future<Either<Failure, ReportEntity>> submitReport(ReportParams params) async {
    try {
      final dto = ReportDto.fromDomain(params);
      final response = await remoteDataSource.createReport(dto);
      await localDataSource.cacheReport(response);
      return Right(response.toDomain());
    } catch (e, stackTrace) {
      await Sentry.captureException(e, stackTrace: stackTrace);
      return Left(ServerFailure(e.toString()));
    }
  }
}
\`\`\``,
        performance: `On-device barcode scanning, PDF report generation, and type-safe i18n string switching execute under 60fps frame budgets with zero UI thread blocking.`,
        results: `Delivered a complete, production-ready enterprise codebase with automated build pipelines, Sentry crash monitoring, and multi-platform support (Android, iOS, Web).`,
        lessons: `Leveraging build_runner code generators (injectable, auto_route, freezed, slang) drastically reduces boilerplate code while enforcing compile-time safety across complex enterprise Flutter applications.`
    }];

function m(e) {
    return l.find(a => a.slug === e)
}

function u() {
    return {
        "@type": "Person",
        "@id": `${r}/#person`,
        name: o.name,
        url: r,
        image: h
    }
}

const p = {
    "@type": "Organization",
    "@id": `${r}/#brand`,
    name: "Ibrahim Kayyis Portfolio",
    url: r,
    logo: {
        "@type": "ImageObject",
        url: h
    }
};

function s(e) {
    return `${e}T00:00:00+00:00`
}

function y(e, a, i) {
    return {
        "@context": "https://schema.org",
        "@type": ["TechArticle", "Article"],
        headline: `${e.title} — Case Study`,
        name: e.title,
        description: e.description,
        image: i,
        inLanguage: "en",
        datePublished: s(e.date),
        dateModified: s(e.dateModified || e.date),
        author: u(),
        publisher: p,
        keywords: e.tags.join(", "),
        about: {
            "@type": "SoftwareApplication",
            name: e.title,
            applicationCategory: "EducationalApplication",
            operatingSystem: (e.platforms || []).join(", ")
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": a
        },
        url: a
    }
}

export {
    g as C, y as a, l as c, m as g
};
