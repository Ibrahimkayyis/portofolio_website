import {
    j as e,
    l as d,
    u as j,
    H as g,
    b,
    B as i,
    i as o,
    q as r,
    L as f,
    G as N,
    M as y,
    r as m,
    T as G
} from "./index.js";
import {
    Footer as v
} from "./Footer.js";
import {
    r as c
} from "./react-vendor.js";
import {
    D as w
} from "./download.js";
const l = c.forwardRef(({
    className: t,
    ...a
}, s) => e.jsx("div", {
    ref: s,
    className: d("rounded-lg border bg-card text-card-foreground shadow-sm", t),
    ...a
}));
l.displayName = "Card";
const C = c.forwardRef(({
    className: t,
    ...a
}, s) => e.jsx("div", {
    ref: s,
    className: d("flex flex-col space-y-1.5 p-6", t),
    ...a
}));
C.displayName = "CardHeader";
const k = c.forwardRef(({
    className: t,
    ...a
}, s) => e.jsx("h3", {
    ref: s,
    className: d("text-2xl font-semibold leading-none tracking-tight", t),
    ...a
}));
k.displayName = "CardTitle";
const S = c.forwardRef(({
    className: t,
    ...a
}, s) => e.jsx("p", {
    ref: s,
    className: d("text-sm text-muted-foreground", t),
    ...a
}));
S.displayName = "CardDescription";
const V = c.forwardRef(({
    className: t,
    ...a
}, s) => e.jsx("div", {
    ref: s,
    className: d("p-6 pt-0", t),
    ...a
}));
V.displayName = "CardContent";
const D = c.forwardRef(({
    className: t,
    ...a
}, s) => e.jsx("div", {
    ref: s,
    className: d("flex items-center p-6 pt-0", t),
    ...a
}));
D.displayName = "CardFooter";
const n = "https://ibrahimkayyis.github.io",
    R = [{
        label: "GPA",
        stat: m[0]
    }, {
        label: "Certifications",
        stat: m[1]
    }, {
        label: "Internship",
        stat: m[2]
    }, {
        label: "Platforms",
        stat: m[3]
    }],
    E = () => {
        const {
            theme: t,
            toggleTheme: a
        } = j(), s = r.cv, h = {
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${n}/#person`,
            name: o.name,
            url: `${n}/`,
            description: "Mobile Developer specializing in Flutter, Dart, and Kotlin with experience at PT Neural Technologies Indonesia and Bangkit Academy",
            image: `${n}/avatar-512.webp`,
            jobTitle: o.currentTitle,
            worksFor: {
                "@type": "Organization",
                "@id": `${n}/#istoria`,
                name: o.company,
                url: o.companyUrl
            },
            location: {
                "@type": "Place",
                name: "Indonesia"
            },
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "General",
                email: o.email
            },
            sameAs: [r.github, r.linkedin],
            hasDocument: {
                "@type": "MediaObject",
                name: "Ibrahim Kayyis - CV/Resume",
                description: "Complete CV and resume of Ibrahim Kayyis, Mobile Developer",
                url: s,
                encodingFormat: "application/pdf"
            }
        }, p = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${n}/`
            }, {
                "@type": "ListItem",
                position: 2,
                name: "CV",
                item: `${n}/CV/`
            }]
        };
        return e.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [e.jsxs(g, {
                children: [e.jsx("title", {
                    children: "CV — Ibrahim Kayyis | Mobile Developer (Flutter)"
                }), e.jsx("meta", {
                    name: "description",
                    content: "The CV / resume of Ibrahim Kayyis — Mobile Developer (Flutter & Android) with hands-on internship experience at PT Neural Technologies Indonesia and Bangkit Academy."
                }), e.jsx("meta", {
                    name: "keywords",
                    content: "CV, resume, Ibrahim Kayyis, mobile engineer, Flutter, Dart, iOS, Android, software engineer"
                }), e.jsx("meta", {
                    property: "og:title",
                    content: "CV - Ibrahim Kayyis"
                }), e.jsx("meta", {
                    property: "og:description",
                    content: "Download my complete CV/resume as a PDF"
                }), e.jsx("meta", {
                    property: "og:type",
                    content: "profile"
                }), e.jsx("meta", {
                    property: "og:url",
                    content: `${n}/CV/`
                }), e.jsx("meta", {
                    property: "og:image",
                    content: `${n}/cv-og-v2.png`
                }), e.jsx("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), e.jsx("meta", {
                    name: "twitter:title",
                    content: "CV - Ibrahim Kayyis"
                }), e.jsx("meta", {
                    name: "twitter:description",
                    content: "Download my complete CV/resume as a PDF"
                }), e.jsx("meta", {
                    name: "twitter:image",
                    content: `${n}/cv-og-v2.png`
                }), e.jsx("link", {
                    rel: "canonical",
                    href: `${n}/CV/`
                }), e.jsx("script", {
                    type: "application/ld+json",
                    children: JSON.stringify(h)
                }), e.jsx("script", {
                    type: "application/ld+json",
                    children: JSON.stringify(p)
                })]
            }), e.jsx(b, {
                theme: t,
                toggleTheme: a
            }), e.jsx("main", {
                id: "main",
                className: "min-h-screen bg-background pt-16",
                children: e.jsxs("div", {
                    className: "container mx-auto px-4 py-16",
                    children: [e.jsxs("div", {
                        className: "mb-12 text-center",
                        children: [e.jsx("h1", {
                            className: "mb-4 text-4xl font-bold tracking-tight sm:text-5xl",
                            children: "My CV & Resume"
                        }), e.jsx("p", {
                            className: "mb-8 text-lg text-muted-foreground",
                            children: "Mobile Developer specializing in Flutter & Dart — building production apps with Clean Architecture, BLoC, and REST API integration"
                        })]
                    }), e.jsx("div", {
                        className: "mb-12 flex justify-center",
                        children: e.jsx("a", {
                            href: s,
                            download: !0,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.jsxs(i, {
                                size: "lg",
                                className: "gap-2",
                                children: [e.jsx(w, {
                                    className: "h-5 w-5"
                                }), "Download CV (PDF)"]
                            })
                        })
                    }), e.jsxs("div", {
                        className: "mx-auto max-w-3xl space-y-8",
                        children: [e.jsxs(l, {
                            className: "border-0 bg-muted/50 p-6",
                            children: [e.jsx("h2", {
                                className: "mb-4 text-xl font-semibold",
                                children: "Quick Facts"
                            }), e.jsx("div", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: R.map(({
                                    label: x,
                                    stat: u
                                }) => e.jsxs("div", {
                                    children: [e.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: x
                                    }), e.jsx("p", {
                                        className: "text-lg font-semibold",
                                        children: u.value
                                    })]
                                }, x))
                            })]
                        }), e.jsxs(l, {
                            className: "border-0 bg-muted/50 p-6",
                            children: [e.jsx("h2", {
                                className: "mb-4 text-xl font-semibold",
                                children: "Core Expertise"
                            }), e.jsxs("div", {
                                className: "space-y-4",
                                children: [e.jsxs("div", {
                                    children: [e.jsx("h3", {
                                        className: "font-medium text-sm text-muted-foreground mb-2",
                                        children: "Flutter Development"
                                    }), e.jsx("p", {
                                        className: "text-sm",
                                        children: "Flutter, Dart, Clean Architecture, BLoC/Cubit, Dio, Service Locator, Slang, Firebase Firestore, Hive, Melos"
                                    })]
                                }), e.jsxs("div", {
                                    children: [e.jsx("h3", {
                                        className: "font-medium text-sm text-muted-foreground mb-2",
                                        children: "Native Android"
                                    }), e.jsx("p", {
                                        className: "text-sm",
                                        children: "Kotlin, Java, MVVM, Material Design 3, RESTful APIs, ML Model Integration, DataStore, Retrofit"
                                    })]
                                }), e.jsxs("div", {
                                    children: [e.jsx("h3", {
                                        className: "font-medium text-sm text-muted-foreground mb-2",
                                        children: "Tools & Practices"
                                    }), e.jsx("p", {
                                        className: "text-sm",
                                        children: "Git, GitHub, Agile, REST API Integration, Offline-first Design, Dependency Injection"
                                    })]
                                })]
                            })]
                        }), e.jsxs(l, {
                            className: "border-0 bg-muted/50 p-6",
                            children: [e.jsx("h2", {
                                className: "mb-4 text-xl font-semibold",
                                children: "Experience"
                            }), e.jsxs("div", {
                                className: "space-y-6",
                                children: [e.jsxs("div", {
                                    children: [e.jsx("h3", {
                                        className: "font-semibold",
                                        children: "Mobile Developer Intern (Flutter)"
                                    }), e.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "PT Neural Technologies Indonesia · Feb 2025 – Jun 2025"
                                    }), e.jsxs("ul", {
                                        className: "mt-2 text-sm space-y-1 list-disc list-inside",
                                        children: [e.jsx("li", { children: "Contributed to the development of an internal enterprise application using Flutter within a Melos-managed monorepo codebase." }), e.jsx("li", { children: "Implemented UI layouts based on design specifications and integrated RESTful APIs using Dio for data fetching." }), e.jsx("li", { children: "Applied Clean Architecture principles and Cubit (BLoC) for state management to build maintainable, scalable features." })]
                                    })]
                                }), e.jsxs("div", {
                                    children: [e.jsx("h3", {
                                        className: "font-semibold",
                                        children: "Mobile Development Cohort"
                                    }), e.jsx("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Bangkit Academy (Google, GoTo, Traveloka) · Sep 2024 – Present"
                                    }), e.jsxs("ul", {
                                        className: "mt-2 text-sm space-y-1 list-disc list-inside",
                                        children: [e.jsx("li", { children: "Acquired advanced Android development skills using Kotlin with Material Design 3 and MVVM architecture." }), e.jsx("li", { children: "Collaborated with ML and Cloud Computing tracks to integrate AI/ML features and cloud solutions into Android apps." }), e.jsx("li", { children: "Led development of an AI-powered skin disease detection app using CameraX, RESTful APIs, and DataStore." })]
                                    })]
                                })]
                            })]
                        }), e.jsxs(l, {
                            className: "border-0 bg-muted/50 p-6",
                            children: [e.jsx("h2", {
                                className: "mb-4 text-xl font-semibold",
                                children: "Get in Touch"
                            }), e.jsxs("div", {
                                className: "flex flex-wrap gap-3",
                                children: [e.jsx("a", {
                                    href: r.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: e.jsxs(i, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-2",
                                        children: [e.jsx(f, {
                                            className: "h-4 w-4"
                                        }), "LinkedIn"]
                                    })
                                }), e.jsx("a", {
                                    href: r.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: e.jsxs(i, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-2",
                                        children: [e.jsx(N, {
                                            className: "h-4 w-4"
                                        }), "GitHub"]
                                    })
                                }), e.jsx("a", {
                                    href: r.email,
                                    onClick: () => {
                                        if (navigator.clipboard) {
                                            navigator.clipboard.writeText("kaykid369@gmail.com").catch(() => {});
                                            G.success("Email copied to clipboard: kaykid369@gmail.com");
                                        }
                                    },
                                    children: e.jsxs(i, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-2",
                                        children: [e.jsx(y, {
                                            className: "h-4 w-4"
                                        }), "Email"]
                                    })
                                })]
                            })]
                        }), e.jsx("div", { className: "hidden",
                            children: [e.jsx("h2", {
                                className: "mb-4 text-xl font-semibold",
                                children: "Versions Available (hidden)"
                            }), e.jsxs("div", {
                                className: "space-y-3",
                                children: [e.jsxs("div", {
                                    className: "flex items-start justify-between",
                                    children: [e.jsxs("div", {
                                        children: [e.jsx("p", {
                                            className: "font-medium text-sm",
                                            children: "PDF Resume"
                                        }), e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Download as PDF for sharing and printing"
                                        })]
                                    }), e.jsx("a", {
                                        href: s,
                                        download: !0,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: e.jsx(i, {
                                            variant: "outline",
                                            size: "sm",
                                            children: "Download"
                                        })
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex items-start justify-between",
                                    children: [e.jsxs("div", {
                                        children: [e.jsx("p", {
                                            className: "font-medium text-sm",
                                            children: "Markdown Version"
                                        }), e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Read the markdown version on this site"
                                        })]
                                    }), e.jsx("a", {
                                        href: "/cv.md",
                                        children: e.jsx(i, {
                                            variant: "outline",
                                            size: "sm",
                                            children: "View"
                                        })
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex items-start justify-between",
                                    children: [e.jsxs("div", {
                                        children: [e.jsx("p", {
                                            className: "font-medium text-sm",
                                            children: "LaTeX Source"
                                        }), e.jsx("p", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Source code on GitHub for customization"
                                        })]
                                    }), e.jsx("a", {
                                        href: "https://github.com/Ibrahimkayyis/CV",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: e.jsx(i, {
                                            variant: "outline",
                                            size: "sm",
                                            children: "View"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }), e.jsx(v, {})]
        })
    };
export {
    E as
    default
};