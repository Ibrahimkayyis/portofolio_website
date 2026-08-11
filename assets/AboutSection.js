import {
    c as i,
    z as p,
    j as e,
    K as o,
    i as r,
    F as c,
    q as t,
    G as x,
    L as h,
    M as MailIcon
} from "./index.js";
import {
    S as g
} from "./SectionHeader.js";
import {
    L as f
} from "./react-vendor.js";
import {
    A as y
} from "./arrow-up-right.js";
import {
    S as j
} from "./shield-check.js";

const k = i("Flag", [
    ["path", {
        d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
        key: "i9b6wo"
    }],
    ["line", {
        x1: "4",
        x2: "4",
        y1: "22",
        y2: "15",
        key: "1cm3nv"
    }]
]);

const v = i("Layers3", [
    ["path", {
        d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
        key: "8b97xw"
    }],
    ["path", {
        d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
        key: "1e5n1m"
    }],
    ["path", {
        d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
        key: "1iwflc"
    }]
]);

const w = i("WifiOff", [
        ["path", {
            d: "M12 20h.01",
            key: "zekei9"
        }],
        ["path", {
            d: "M8.5 16.429a5 5 0 0 1 7 0",
            key: "1bycff"
        }],
        ["path", {
            d: "M5 12.859a10 10 0 0 1 5.17-2.69",
            key: "1dl1wf"
        }],
        ["path", {
            d: "M19 12.859a10 10 0 0 0-2.007-1.523",
            key: "4k23kn"
        }],
        ["path", {
            d: "M2 8.82a15 15 0 0 1 4.177-2.643",
            key: "1grhjp"
        }],
        ["path", {
            d: "M22 8.82a15 15 0 0 0-11.288-3.764",
            key: "z3jwby"
        }],
        ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }]
    ]),
    M = [{
        icon: v,
        label: "Clean Architecture",
        blurb: "Clear layer separation across Presentation, Domain, and Data for maintainable codebases."
    }, {
        icon: j,
        label: "State Management",
        blurb: "Predictable, reactive state flows using BLoC / Cubit in Flutter and MVVM in Kotlin."
    }, {
        icon: w,
        label: "Offline-First & Local Data",
        blurb: "Seamless local storage & sync capabilities leveraging Hive, SQLite, and Firestore."
    }, {
        icon: k,
        label: "Type-Safe & Scalable",
        blurb: "Robust API integration via Dio & Retrofit, GetIt dependency injection, and Slang i18n."
    }],
    L = [{
        href: t.github,
        label: "GitHub",
        Icon: x
    }, {
        href: t.linkedin,
        label: "LinkedIn",
        Icon: h
    }, {
        href: t.email,
        label: "Email",
        Icon: MailIcon
    }],
    F = [{
        label: "Location",
        value: r.location
    }, {
        label: "Role",
        value: r.currentTitle
    }, {
        label: "Focus",
        value: r.subtitle
    }],
    I = {
        open: "text-emerald-500 [&_.dot]:bg-emerald-500",
        selective: "text-amber [&_.dot]:bg-amber",
        closed: "text-muted-foreground [&_.dot]:bg-muted-foreground"
    };

function A() {
    const {
        ref: m,
        isInView: d
    } = p({
        margin: "-100px"
    }), l = () => `reveal-hidden ${d?"animate-fade-in-up":""}`;
    return e.jsx("section", {
        id: "about",
        className: "py-14 md:py-20",
        ref: m,
        children: e.jsxs("div", {
            className: "container mx-auto px-6",
            children: [e.jsx(g, {
                index: "05",
                label: "About",
                inView: d,
                title: e.jsxs(e.Fragment, {
                    children: ["Building clean & ", e.jsx("span", {
                        className: "text-primary underline decoration-primary/50 decoration-[3px] underline-offset-[0.16em]",
                        children: "maintainable apps."
                    })]
                }),
                description: "Flutter & Android developer focusing on Clean Architecture, state management, and reliable mobile user experiences."
            }), e.jsx("blockquote", {
                className: `relative max-w-4xl border-l-2 border-primary/60 pl-6 md:pl-8 mb-14 md:mb-20 ${l()}`,
                style: {
                    animationDelay: "0.15s"
                },
                children: e.jsx("p", {
                    className: "text-xl md:text-2xl leading-relaxed text-foreground text-pretty font-light",
                    children: o[0]
                })
            }), e.jsxs("div", {
                className: "grid lg:grid-cols-12 gap-10 lg:gap-14",
                children: [e.jsxs("div", {
                    className: "lg:col-span-8 space-y-12 lg:order-1 order-2",
                    children: [e.jsx("div", {
                        className: l() + " space-y-6",
                        style: {
                            animationDelay: "0.25s"
                        },
                        children: o.slice(1).map(a => e.jsx("p", {
                            className: "text-lg leading-relaxed text-muted-foreground text-pretty",
                            children: a
                        }, a.slice(0, 32)))
                    }), e.jsxs("div", {
                        className: l(),
                        style: {
                            animationDelay: "0.35s"
                        },
                        children: [e.jsxs("div", {
                            className: "flex items-center gap-3 mb-6",
                            children: [e.jsxs("span", {
                                className: "kicker text-primary normal-case tracking-normal",
                                children: [e.jsx("span", {
                                    className: "text-muted-foreground/70",
                                    children: "$"
                                }), " cat ./principles"]
                            }), e.jsx("span", {
                                className: "h-px flex-1 bg-border"
                            }), e.jsx("span", {
                                className: "kicker text-muted-foreground",
                                children: "make the right thing the default"
                            })]
                        }), e.jsx("div", {
                            className: "grid sm:grid-cols-2 gap-px bg-border border border-border",
                            children: M.map(({
                                icon: a,
                                label: s,
                                blurb: n
                            }) => e.jsxs("div", {
                                className: "group bg-card p-5 md:p-6 transition-colors hover:bg-background",
                                children: [e.jsxs("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [e.jsx(a, {
                                        className: "h-[1.1rem] w-[1.1rem] text-primary shrink-0"
                                    }), e.jsx("h3", {
                                        className: "kicker text-foreground/90",
                                        children: s
                                    })]
                                }), e.jsx("p", {
                                    className: "mt-3 text-sm leading-relaxed text-muted-foreground text-pretty",
                                    children: n
                                })]
                            }, s))
                        })]
                    })]
                }), e.jsx("aside", {
                    className: `lg:col-span-4 lg:order-2 order-1 ${l()}`,
                    style: {
                        animationDelay: "0.3s"
                    },
                    children: e.jsxs("div", {
                        className: "dossier-card p-6 md:p-7 lg:sticky lg:top-24",
                        children: [e.jsxs("div", {
                            className: "kicker text-muted-foreground mb-5 flex items-center justify-between",
                            children: [e.jsx("span", {
                                children: "$ cat ~/identity"
                            }), e.jsx("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-primary/40",
                                "aria-hidden": "true"
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [e.jsx("img", {
                                src: r.avatarUrl,
                                alt: r.name,
                                width: 64,
                                height: 64,
                                loading: "lazy",
                                className: "h-16 w-16 border border-border object-cover"
                            }), e.jsxs("div", {
                                className: "min-w-0",
                                children: [e.jsx("div", {
                                    className: "font-heading text-xl leading-tight tracking-tight truncate",
                                    children: r.name
                                }), e.jsx("div", {
                                    className: "text-sm text-muted-foreground truncate",
                                    children: r.currentTitle
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: `mt-4 inline-flex items-center gap-2 kicker ${I[c.status]}`,
                            children: [e.jsx("span", {
                                className: "dot h-1.5 w-1.5 rounded-full animate-pulse"
                            }), c.label]
                        }), e.jsx("div", {
                            className: "my-5 h-px w-full bg-border",
                            "aria-hidden": "true"
                        }), e.jsx("dl", {
                            className: "divide-y divide-border",
                            children: F.map(a => e.jsxs("div", {
                                className: "flex items-baseline justify-between gap-4 py-3",
                                children: [e.jsx("dt", {
                                    className: "kicker text-muted-foreground shrink-0",
                                    children: a.label
                                }), e.jsx("dd", {
                                    className: "text-right text-sm font-medium",
                                    children: a.href ? e.jsx("a", {
                                        href: a.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-primary link-underline",
                                        children: a.value
                                    }) : a.value
                                })]
                            }, a.label))
                        }), e.jsx("div", {
                            className: "my-5 h-px w-full bg-border",
                            "aria-hidden": "true"
                        }), e.jsx("div", {
                            className: "flex items-center justify-between",
                            children: L.map(({
                                href: a,
                                label: s,
                                Icon: n
                            }) => e.jsx("a", {
                                href: a,
                                onClick: () => {
                                    if (a.startsWith("mailto") && navigator.clipboard) {
                                        navigator.clipboard.writeText("kaykid369@gmail.com").catch(() => {});
                                    }
                                },
                                target: a.startsWith("mailto") ? void 0 : "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": s,
                                title: s,
                                className: "grid h-9 w-9 place-items-center text-muted-foreground transition-colors hover:text-primary",
                                children: e.jsx(n, {
                                    className: "h-[1.15rem] w-[1.15rem]"
                                })
                            }, s))
                        }), e.jsxs(f, {
                            to: "/CV",
                            className: "group mt-5 flex items-center justify-between border border-border px-4 py-3 kicker text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5",
                            children: ["View My CV & Resume", e.jsx(y, {
                                className: "h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}
export {
    A as AboutSection
};