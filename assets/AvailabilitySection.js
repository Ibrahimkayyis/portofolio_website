import {
    z as t,
    j as e,
    F as o,
    B as i,
    C as m,
    q as l,
    M as c,
    A as d,
    w as x,
    m as p,
    T as G
} from "./index.js";
import {
    L as h
} from "./react-vendor.js";
import {
    S as u
} from "./SectionHeader.js";
import {
    E as w,
    A as j
} from "./EngagementCards.js";
import "./clock.js";

function N() {
    const {
        ref: n,
        isInView: a
    } = t({
        margin: "-100px"
    }), s = p(), r = () => {
        s == null || s.capture("calendly_popup_opened", {
            source: "work_with_me"
        }), x(l.calendly)
    };
    return e.jsx("section", {
        id: "work-with-me",
        className: "py-14 md:py-20",
        ref: n,
        children: e.jsxs("div", {
            className: "container mx-auto px-6",
            children: [e.jsx(u, {
                index: "08",
                label: "Availability",
                inView: a,
                title: e.jsxs(e.Fragment, {
                    children: ["Ways we can ", e.jsx("span", {
                        className: "text-primary",
                        children: "work together."
                    })]
                }),
                description: o.summary
            }), e.jsx(w, {
                inView: a
            }), e.jsx(j, {
                inView: a
            }), e.jsxs("div", {
                className: `mt-8 flex flex-col sm:flex-row sm:items-center gap-3 reveal-hidden ${a?"animate-fade-in-up":""}`,
                style: {
                    animationDelay: "0.6s"
                },
                children: [e.jsx(i, {
                    variant: "hero",
                    size: "lg",
                    asChild: !0,
                    className: "group",
                    children: e.jsxs("a", {
                        href: l.email,
                        onClick: () => {
                            if (navigator.clipboard) {
                                navigator.clipboard.writeText("kaykid369@gmail.com").catch(() => {});
                                G.success("Email copied to clipboard: kaykid369@gmail.com");
                            }
                        },
                        children: [e.jsx(c, {
                            className: "mr-1 h-4 w-4"
                        }), "Email me directly"]
                    })
                }), e.jsxs(h, {
                    to: "/hire",
                    className: "link-underline inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:ml-2",
                    children: ["Full details on working together", e.jsx(d, {
                        className: "h-3.5 w-3.5"
                    })]
                })]
            })]
        })
    })
}
export {
    N as AvailabilitySection
};