import {
    j as e,
    u as f,
    H as N,
    b as y,
    x as r,
    q as k,
    z as w
} from "./index-M-52U9mK.js";
import {
    L as C
} from "./react-vendor-iqlcZCOr.js";
import {
    Footer as L
} from "./Footer-CF6X5QOV.js";
import {
    F as A,
    C as D
} from "./ProjectsSection-BOmOkMYt.js";
import {
    A as H
} from "./arrow-left-B-YyplZK.js";
import {
    A as u
} from "./arrow-up-right-DTBoS46a.js";

const pageUrl = "http://localhost:3000/projects/",
    pageDesc = "Mobile applications built with Flutter, Clean Architecture, Cubit, and Kotlin — featured and open-source projects by Ibrahim Kayyis.",
    featuredProjects = r.filter(s => s.category === "featured"),
    openSourceProjects = r.filter(s => s.category === "open-source");

function StatCard({ value, label, index }) {
    const { ref: o, isInView: n } = w({ margin: "-40px" });
    return e.jsxs("div", {
        ref: o,
        className: `border-r border-b border-border p-5 md:p-6 reveal-hidden ${n ? "animate-fade-in-up" : ""}`,
        style: { animationDelay: `${index * 0.07}s` },
        children: [
            e.jsx("div", {
                className: "font-heading text-3xl md:text-4xl leading-none tracking-tight tabular-nums text-foreground",
                children: value
            }),
            e.jsx("div", {
                className: "kicker text-muted-foreground mt-2.5 leading-snug",
                children: label
            })
        ]
    });
}

export default function ProjectsPage() {
    const { theme: s, toggleTheme: t } = f();
    const heroProject = featuredProjects[0];
    const otherFeatured = featuredProjects.slice(1);

    return e.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [
            e.jsxs(N, {
                children: [
                    e.jsx("title", { children: "Projects | Ibrahim Kayyis" }),
                    e.jsx("meta", { name: "description", content: pageDesc }),
                    e.jsx("link", { rel: "canonical", href: pageUrl }),
                    e.jsx("meta", { property: "og:type", content: "website" }),
                    e.jsx("meta", { property: "og:url", content: pageUrl }),
                    e.jsx("meta", { property: "og:title", content: "Projects | Ibrahim Kayyis" }),
                    e.jsx("meta", { property: "og:description", content: pageDesc }),
                    e.jsx("meta", { property: "og:site_name", content: "Ibrahim Kayyis" })
                ]
            }),
            e.jsx(y, { theme: s, toggleTheme: t }),
            e.jsx("main", {
                id: "main",
                tabIndex: -1,
                className: "container mx-auto px-6 pt-32 pb-20",
                children: e.jsxs("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        e.jsxs(C, {
                            to: "/",
                            className: "inline-flex items-center kicker text-muted-foreground hover:text-primary transition-colors mb-10",
                            children: [
                                e.jsx(H, { className: "mr-2 h-3.5 w-3.5" }),
                                "Ibrahim Kayyis"
                            ]
                        }),
                        e.jsxs("header", {
                            className: "mb-12 max-w-3xl",
                            children: [
                                e.jsxs("p", {
                                    className: "kicker text-primary normal-case tracking-normal mb-5",
                                    children: [
                                        e.jsx("span", { className: "text-muted-foreground/70", children: "$" }),
                                        " cd ~/projects"
                                    ]
                                }),
                                e.jsx("h1", {
                                    className: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6 text-balance",
                                    children: "Projects"
                                }),
                                e.jsxs("p", {
                                    className: "text-xl text-muted-foreground text-pretty mb-6",
                                    children: [
                                        "Featured mobile applications built with ",
                                        e.jsx("span", { className: "text-foreground", children: "Flutter" }),
                                        " and ",
                                        e.jsx("span", { className: "text-foreground", children: "Kotlin" }),
                                        " — adhering to Clean Architecture, BLoC/Cubit, and MVVM patterns."
                                    ]
                                }),
                                e.jsxs("a", {
                                    href: k.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "link-underline inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary",
                                    children: [
                                        "All repositories on GitHub",
                                        e.jsx(u, { className: "h-3.5 w-3.5" })
                                    ]
                                })
                            ]
                        }),
                        e.jsx("section", {
                            "aria-label": "Project totals",
                            className: "mb-20",
                            children: e.jsxs("div", {
                                className: "grid grid-cols-2 sm:grid-cols-4 border-l border-t border-border",
                                children: [
                                    e.jsx(StatCard, { value: "4+", label: "Projects built", index: 0 }),
                                    e.jsx(StatCard, { value: "9", label: "Certifications", index: 1 }),
                                    e.jsx(StatCard, { value: "3.85", label: "GPA / 4.00", index: 2 }),
                                    e.jsx(StatCard, { value: "2", label: "Platforms (Flutter & Android)", index: 3 })
                                ]
                            })
                        }),
                        e.jsxs("section", {
                            "aria-labelledby": "featured-heading",
                            className: "mb-20",
                            children: [
                                e.jsxs("div", {
                                    className: "mb-8 flex items-baseline justify-between border-b border-border pb-3",
                                    children: [
                                        e.jsxs("h2", {
                                            id: "featured-heading",
                                            className: "font-heading text-2xl tracking-tight",
                                            children: [
                                                e.jsx("span", { className: "mr-2 font-mono text-lg text-primary/50", children: "01" }),
                                                "Featured Projects"
                                            ]
                                        }),
                                        e.jsxs("span", {
                                            className: "kicker text-muted-foreground",
                                            children: [`${featuredProjects.length} projects`]
                                        })
                                    ]
                                }),
                                heroProject && e.jsx("div", {
                                    className: "mb-6",
                                    children: e.jsx(A, { project: heroProject, index: 0 })
                                }),
                                otherFeatured.length > 0 && e.jsx("div", {
                                    className: "grid sm:grid-cols-2 gap-6",
                                    children: otherFeatured.map((item, idx) => e.jsx(D, { project: item, index: idx + 1 }, item.title))
                                })
                            ]
                        }),
                        openSourceProjects.length > 0 && e.jsxs("section", {
                            "aria-labelledby": "oss-heading",
                            children: [
                                e.jsxs("div", {
                                    className: "mb-8 flex items-baseline justify-between border-b border-border pb-3",
                                    children: [
                                        e.jsxs("h2", {
                                            id: "oss-heading",
                                            className: "font-heading text-2xl tracking-tight",
                                            children: [
                                                e.jsx("span", { className: "mr-2 font-mono text-lg text-primary/50", children: "02" }),
                                                "Open Source & Apps"
                                            ]
                                        }),
                                        e.jsxs("span", {
                                            className: "kicker text-muted-foreground",
                                            children: [`${openSourceProjects.length} entry`]
                                        })
                                    ]
                                }),
                                e.jsx("div", {
                                    className: "grid sm:grid-cols-2 gap-6",
                                    children: openSourceProjects.map((item, idx) => e.jsx(D, { project: item, index: idx + 1 }, item.title))
                                })
                            ]
                        })
                    ]
                })
            }),
            e.jsx(L, {})
        ]
    });
}
