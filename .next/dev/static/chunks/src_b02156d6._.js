(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navItems = [
    {
        label: "Back Test",
        href: "/backtest",
        icon: "⚡"
    },
    {
        label: "Scanner",
        href: "/scanner",
        icon: "⚙"
    },
    {
        label: "Charts",
        href: "/",
        icon: "📊"
    },
    {
        label: "Journal",
        href: "/journal",
        icon: "📋"
    }
];
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            height: "var(--header-height)",
            borderBottom: "1px solid var(--color-border)",
            background: "var(--color-bg)",
            display: "flex",
            alignItems: "center",
            padding: "0 var(--inset-m)",
            gap: "var(--space-l)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "var(--font-family-heading)",
                    fontSize: "var(--heading-2-size)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--color-text-primary)"
                },
                children: "TradingHub"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    display: "flex",
                    gap: "var(--space-xs)"
                },
                children: navItems.map((item)=>{
                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-xs)",
                            padding: "var(--inset-xs) var(--inset-s)",
                            borderRadius: "var(--radius-m)",
                            textDecoration: "none",
                            fontSize: "var(--body-1-size)",
                            fontWeight: 500,
                            color: isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
                            background: isActive ? "var(--color-bg-secondary)" : "transparent",
                            transition: "background 0.15s, color 0.15s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "14px"
                                },
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.href, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Header, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SearchBar({ value, onChange, onFocus }) {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            const handleKeyDown = {
                "SearchBar.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "/" && document.activeElement !== inputRef.current) {
                        e.preventDefault();
                        inputRef.current?.focus();
                    }
                }
            }["SearchBar.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "SearchBar.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["SearchBar.useEffect"];
        }
    }["SearchBar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "var(--inset-s)",
            borderBottom: "1px solid var(--color-border)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                alignItems: "center",
                gap: "var(--space-xs)",
                background: "var(--color-bg-secondary)",
                borderRadius: "var(--radius-m)",
                padding: "0 12px",
                height: "36px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--color-text-muted)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchBar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "21",
                            y1: "21",
                            x2: "16.65",
                            y2: "16.65"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchBar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchBar.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: inputRef,
                    type: "text",
                    value: value,
                    onChange: (e)=>onChange(e.target.value),
                    onFocus: onFocus,
                    placeholder: "Search symbols...",
                    style: {
                        border: "none",
                        background: "transparent",
                        outline: "none",
                        flex: 1,
                        fontSize: "var(--body-2-size)",
                        color: "var(--color-text-primary)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchBar.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchBar.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SearchBar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "cBQ6FQ+sf5H+lvNONLKqtm4aeQ8=");
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Watchlist.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Watchlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Watchlist({ items, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            overflow: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "var(--inset-s)",
                    borderBottom: "1px solid var(--color-border)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "heading-3",
                    children: "Watchlist"
                }, void 0, false, {
                    fileName: "[project]/src/components/Watchlist.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Watchlist.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "var(--inset-l) var(--inset-s)",
                            textAlign: "center",
                            color: "var(--color-text-muted)",
                            fontSize: "var(--body-2-size)"
                        },
                        children: "No tickers in watchlist. Search and select a ticker to get started."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    items.map((item)=>{
                        const changePercent = item.data.length > 1 ? ((item.data[item.data.length - 1].close - item.data[0].open) / item.data[0].open * 100).toFixed(2) : "0.00";
                        const isPositive = parseFloat(changePercent) >= 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(item.ticker),
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%",
                                padding: "12px var(--inset-s)",
                                margin: "0 var(--inset-xs)",
                                marginRight: "var(--inset-xs)",
                                background: "transparent",
                                border: "none",
                                borderRadius: "var(--radius-m)",
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "background 0.15s"
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = "var(--color-bg-secondary)",
                            onMouseLeave: (e)=>e.currentTarget.style.background = "transparent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 600,
                                                fontSize: "var(--body-1-size)",
                                                color: "var(--color-text-primary)"
                                            },
                                            children: item.ticker
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "body-2",
                                            style: {
                                                color: "var(--color-text-muted)"
                                            },
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        textAlign: "right"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontWeight: 600,
                                                fontSize: "var(--body-1-size)"
                                            },
                                            children: [
                                                "$",
                                                item.lastPrice.toLocaleString(undefined, {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "body-2",
                                            style: {
                                                color: isPositive ? "var(--color-positive)" : "var(--color-negative)"
                                            },
                                            children: [
                                                isPositive ? "+" : "",
                                                changePercent,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.ticker, true, {
                            fileName: "[project]/src/components/Watchlist.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Watchlist.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Watchlist.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Watchlist;
var _c;
__turbopack_context__.k.register(_c, "Watchlist");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SearchResults.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SearchResults({ results, searchQuery, isLoading, showTypeMore, onSelect, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "280px",
            borderLeft: "1px solid var(--color-border)",
            borderRight: "1px solid var(--color-border)",
            background: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "var(--inset-s)",
                    borderBottom: "1px solid var(--color-border)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading-3",
                                children: "Search Results"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "body-2",
                                style: {
                                    color: "var(--color-text-muted)",
                                    marginTop: "2px"
                                },
                                children: showTypeMore ? "Type another character" : isLoading ? "Searching..." : `${results.length} result${results.length !== 1 ? "s" : ""} for "${searchQuery}"`
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "4px",
                            borderRadius: "var(--radius-s)",
                            color: "var(--color-text-muted)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchResults.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchResults.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflow: "auto"
                },
                children: [
                    showTypeMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "var(--inset-l) var(--inset-s)",
                            textAlign: "center",
                            color: "var(--color-text-muted)",
                            fontSize: "var(--body-2-size)"
                        },
                        children: "Type another character"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this),
                    !showTypeMore && results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(result),
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "calc(100% - 16px)",
                                padding: "12px",
                                margin: "var(--inset-xs)",
                                background: "transparent",
                                border: "none",
                                borderRadius: "var(--radius-m)",
                                cursor: "pointer",
                                textAlign: "left",
                                transition: "background 0.15s"
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = "var(--color-bg-secondary)",
                            onMouseLeave: (e)=>e.currentTarget.style.background = "transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontWeight: 600,
                                            fontSize: "var(--body-1-size)",
                                            color: "var(--color-text-primary)"
                                        },
                                        children: result.ticker
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SearchResults.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "body-2",
                                        style: {
                                            color: "var(--color-text-muted)"
                                        },
                                        children: result.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SearchResults.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 127,
                                columnNumber: 15
                            }, this)
                        }, result.ticker, false, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchResults.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = SearchResults;
var _c;
__turbopack_context__.k.register(_c, "SearchResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TIMEFRAME_LABELS",
    ()=>TIMEFRAME_LABELS
]);
const TIMEFRAME_LABELS = {
    TICK: "Tick",
    SECOND: "1 Second",
    MINUTE: "1 Minute",
    HOUR: "1 Hour",
    DAY: "1 Day",
    WEEK: "1 Week",
    MONTH: "1 Month"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CandlestickChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CandlestickChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lightweight-charts/dist/lightweight-charts.development.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const OVERLAY_COLORS = [
    "hsl(215, 80%, 55%)",
    "hsl(30, 80%, 55%)",
    "hsl(280, 60%, 55%)",
    "hsl(170, 60%, 45%)",
    "hsl(340, 70%, 55%)",
    "hsl(50, 80%, 50%)"
];
const INTRADAY_TIMEFRAMES = new Set([
    "TICK",
    "SECOND",
    "MINUTE",
    "HOUR"
]);
function CandlestickChart({ data, timeframe = "DAY", overlays = [] }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CandlestickChart.useEffect": ()=>{
            if (!containerRef.current) return;
            const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChart"])(containerRef.current, {
                autoSize: true,
                layout: {
                    background: {
                        color: "#ffffff"
                    },
                    textColor: "hsl(220, 10%, 40%)",
                    fontFamily: "Inter, system-ui, sans-serif",
                    fontSize: 12
                },
                grid: {
                    vertLines: {
                        color: "hsl(220, 13%, 94%)"
                    },
                    horzLines: {
                        color: "hsl(220, 13%, 94%)"
                    }
                },
                crosshair: {
                    vertLine: {
                        labelBackgroundColor: "hsl(215, 80%, 40%)"
                    },
                    horzLine: {
                        labelBackgroundColor: "hsl(215, 80%, 40%)"
                    }
                },
                rightPriceScale: {
                    borderColor: "hsl(220, 13%, 90%)"
                },
                timeScale: {
                    borderColor: "hsl(220, 13%, 90%)",
                    timeVisible: INTRADAY_TIMEFRAMES.has(timeframe),
                    secondsVisible: timeframe === "SECOND" || timeframe === "TICK"
                }
            });
            chartRef.current = chart;
            const candlestickSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandlestickSeries"], {
                upColor: "hsl(145, 65%, 45%)",
                downColor: "hsl(0, 70%, 55%)",
                borderUpColor: "hsl(145, 65%, 40%)",
                borderDownColor: "hsl(0, 70%, 50%)",
                wickUpColor: "hsl(145, 65%, 40%)",
                wickDownColor: "hsl(0, 70%, 50%)"
            });
            if (data.length > 0) {
                const chartData = data.map({
                    "CandlestickChart.useEffect.chartData": (d)=>({
                            time: d.time,
                            open: d.open,
                            high: d.high,
                            low: d.low,
                            close: d.close
                        })
                }["CandlestickChart.useEffect.chartData"]);
                candlestickSeries.setData(chartData);
            }
            for(let i = 0; i < overlays.length; i++){
                const overlay = overlays[i];
                if (overlay.timeSeries.length === 0) continue;
                const valueKeys = Object.keys(overlay.timeSeries[0].values);
                for(let k = 0; k < valueKeys.length; k++){
                    const key = valueKeys[k];
                    const colorIndex = (i * valueKeys.length + k) % OVERLAY_COLORS.length;
                    const lineSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSeries"], {
                        color: OVERLAY_COLORS[colorIndex],
                        lineWidth: 2,
                        title: `${overlay.signalName} ${key}`
                    });
                    const lineData = overlay.timeSeries.map({
                        "CandlestickChart.useEffect.lineData": (pt)=>({
                                time: pt.time,
                                value: pt.values[key] ?? 0
                            })
                    }["CandlestickChart.useEffect.lineData"]);
                    lineSeries.setData(lineData);
                }
            }
            chart.timeScale().fitContent();
            return ({
                "CandlestickChart.useEffect": ()=>{
                    chart.remove();
                    chartRef.current = null;
                }
            })["CandlestickChart.useEffect"];
        }
    }["CandlestickChart.useEffect"], [
        data,
        timeframe,
        overlays
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            width: "100%",
            height: "100%",
            minHeight: "400px"
        }
    }, void 0, false, {
        fileName: "[project]/src/components/CandlestickChart.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(CandlestickChart, "N7eiWgMNjO2maY43WSz+3usQQZQ=");
_c = CandlestickChart;
var _c;
__turbopack_context__.k.register(_c, "CandlestickChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ChartPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChartPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CandlestickChart.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const TIMEFRAMES = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMEFRAME_LABELS"]);
_c = TIMEFRAMES;
function ChartPanel({ tabs, activeTab, onTabSelect, onTimeframeChange, onTimespanChange, availableSignals, selectedSignal, onSignalChange }) {
    const activeChart = tabs.find((t)=>t.ticker === activeTab);
    if (!activeChart) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text-muted)",
                fontSize: "var(--body-1-size)"
            },
            children: "Search for a ticker to view its chart"
        }, void 0, false, {
            fileName: "[project]/src/components/ChartPanel.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "48px",
                    borderBottom: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 var(--inset-s)",
                    gap: 0,
                    background: "var(--color-bg-secondary)"
                },
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onTabSelect(tab.ticker),
                        style: {
                            padding: "var(--inset-xs) var(--inset-s)",
                            border: "none",
                            borderBottom: tab.ticker === activeTab ? "2px solid var(--color-primary)" : "2px solid transparent",
                            background: "transparent",
                            cursor: "pointer",
                            fontWeight: tab.ticker === activeTab ? 600 : 400,
                            fontSize: "var(--body-1-size)",
                            color: tab.ticker === activeTab ? "var(--color-primary)" : "var(--color-text-secondary)",
                            transition: "color 0.15s, border-color 0.15s",
                            marginBottom: "-1px"
                        },
                        children: tab.ticker
                    }, tab.ticker, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "var(--inset-s) var(--inset-m)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid var(--color-border-light)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading-2",
                                children: activeChart.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "body-1",
                                style: {
                                    color: "var(--color-text-muted)",
                                    marginTop: "2px"
                                },
                                children: [
                                    activeChart.ticker,
                                    " • $",
                                    activeChart.lastPrice.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "var(--space-s)",
                            alignItems: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Expand timespan",
                                        onClick: ()=>onTimespanChange(activeChart.ticker, "expand"),
                                        style: {
                                            width: "28px",
                                            height: "28px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid var(--color-border)",
                                            borderRadius: "var(--radius-m)",
                                            background: "var(--color-bg)",
                                            color: "var(--color-text-primary)",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            lineHeight: 1
                                        },
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Shrink timespan",
                                        onClick: ()=>onTimespanChange(activeChart.ticker, "shrink"),
                                        style: {
                                            width: "28px",
                                            height: "28px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid var(--color-border)",
                                            borderRadius: "var(--radius-m)",
                                            background: "var(--color-bg)",
                                            color: "var(--color-text-primary)",
                                            cursor: "pointer",
                                            fontSize: "16px",
                                            lineHeight: 1
                                        },
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "body-1",
                                        style: {
                                            color: "var(--color-text-secondary)"
                                        },
                                        children: "Timeframe:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: activeChart.timeframe,
                                        onChange: (e)=>onTimeframeChange(activeChart.ticker, e.target.value),
                                        style: {
                                            padding: "var(--inset-xs) 12px",
                                            border: "1px solid var(--color-border)",
                                            borderRadius: "var(--radius-m)",
                                            fontSize: "var(--body-1-size)",
                                            color: "var(--color-text-primary)",
                                            background: "var(--color-bg)",
                                            cursor: "pointer",
                                            appearance: "none",
                                            WebkitAppearance: "none",
                                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "right 8px center",
                                            paddingRight: "28px"
                                        },
                                        children: TIMEFRAMES.map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: tf,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMEFRAME_LABELS"][tf]
                                            }, tf, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "body-1",
                                        style: {
                                            color: "var(--color-text-secondary)"
                                        },
                                        children: "Add Signal:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedSignal,
                                        onChange: (e)=>onSignalChange(e.target.value),
                                        style: {
                                            padding: "var(--inset-xs) 12px",
                                            border: "1px solid var(--color-border)",
                                            borderRadius: "var(--radius-m)",
                                            fontSize: "var(--body-1-size)",
                                            color: "var(--color-text-primary)",
                                            background: "var(--color-bg)",
                                            cursor: "pointer",
                                            appearance: "none",
                                            WebkitAppearance: "none",
                                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "right 8px center",
                                            paddingRight: "28px"
                                        },
                                        children: availableSignals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: signal.name,
                                                children: signal.name
                                            }, signal.name, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    padding: "var(--inset-m)",
                    minHeight: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: activeChart.data,
                    timeframe: activeChart.timeframe
                }, void 0, false, {
                    fileName: "[project]/src/components/ChartPanel.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChartPanel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c1 = ChartPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "TIMEFRAMES");
__turbopack_context__.k.register(_c1, "ChartPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Watchlist.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchResults.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChartPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Home() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSearchResults, setShowSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chartTabs, setChartTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingChart, setIsLoadingChart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [availableSignals, setAvailableSignals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSignal, setSelectedSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PriceSignal");
    const searchTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastSearchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    const searchTickers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[searchTickers]": async (query)=>{
            if (query.length < 2) return;
            lastSearchRef.current = query;
            setIsSearching(true);
            try {
                const res = await fetch(`/api/tickers/search?prefix=${encodeURIComponent(query)}`);
                const data = await res.json();
                if (lastSearchRef.current === query) {
                    setSearchResults(data);
                }
            } catch  {
                console.error("Search failed");
            } finally{
                setIsSearching(false);
            }
        }
    }["Home.useCallback[searchTickers]"], []);
    const handleSearchChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSearchChange]": (value)=>{
            setSearchQuery(value);
            if (value.length >= 1) {
                setShowSearchResults(true);
            } else {
                setShowSearchResults(false);
                setSearchResults([]);
            }
            if (searchTimerRef.current) {
                clearTimeout(searchTimerRef.current);
            }
            if (value.length >= 2) {
                searchTimerRef.current = setTimeout({
                    "Home.useCallback[handleSearchChange]": ()=>{
                        searchTickers(value);
                    }
                }["Home.useCallback[handleSearchChange]"], 700);
            } else {
                setSearchResults([]);
            }
        }
    }["Home.useCallback[handleSearchChange]"], [
        searchTickers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            return ({
                "Home.useEffect": ()=>{
                    if (searchTimerRef.current) {
                        clearTimeout(searchTimerRef.current);
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetch("/api/signals/available").then({
                "Home.useEffect": (res)=>res.json()
            }["Home.useEffect"]).then({
                "Home.useEffect": (data)=>setAvailableSignals(data.signals || [])
            }["Home.useEffect"]).catch({
                "Home.useEffect": ()=>console.error("Failed to fetch available signals")
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
    const handleSearchResultSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleSearchResultSelect]": async (result)=>{
            setIsLoadingChart(true);
            setShowSearchResults(false);
            setSearchQuery("");
            const existingTab = chartTabs.find({
                "Home.useCallback[handleSearchResultSelect].existingTab": (t)=>t.ticker === result.ticker
            }["Home.useCallback[handleSearchResultSelect].existingTab"]);
            if (existingTab) {
                setActiveTab(result.ticker);
                setIsLoadingChart(false);
                return;
            }
            const now = new Date();
            const sixMonthsAgo = new Date(now);
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
            const formatDate = {
                "Home.useCallback[handleSearchResultSelect].formatDate": (d)=>d.toISOString().split("T")[0]
            }["Home.useCallback[handleSearchResultSelect].formatDate"];
            try {
                const res = await fetch("/api/signals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ticker: result.ticker,
                        from: formatDate(sixMonthsAgo),
                        to: formatDate(now)
                    })
                });
                const data = await res.json();
                const candles = data.candles || [];
                const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                const newTab = {
                    ticker: result.ticker,
                    name: result.name || result.ticker,
                    data: candles,
                    lastPrice,
                    timeframe: "DAY",
                    from: formatDate(sixMonthsAgo)
                };
                setChartTabs({
                    "Home.useCallback[handleSearchResultSelect]": (prev)=>{
                        const existing = prev.find({
                            "Home.useCallback[handleSearchResultSelect].existing": (t)=>t.ticker === result.ticker
                        }["Home.useCallback[handleSearchResultSelect].existing"]);
                        if (existing) return prev;
                        return [
                            ...prev,
                            newTab
                        ];
                    }
                }["Home.useCallback[handleSearchResultSelect]"]);
                setActiveTab(result.ticker);
            } catch  {
                console.error("Failed to fetch chart data");
            } finally{
                setIsLoadingChart(false);
            }
        }
    }["Home.useCallback[handleSearchResultSelect]"], [
        chartTabs
    ]);
    const handleTimeframeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleTimeframeChange]": async (ticker, timeframe)=>{
            const tab = chartTabs.find({
                "Home.useCallback[handleTimeframeChange].tab": (t)=>t.ticker === ticker
            }["Home.useCallback[handleTimeframeChange].tab"]);
            if (!tab) return;
            setChartTabs({
                "Home.useCallback[handleTimeframeChange]": (prev)=>prev.map({
                        "Home.useCallback[handleTimeframeChange]": (t)=>t.ticker === ticker ? {
                                ...t,
                                timeframe,
                                data: []
                            } : t
                    }["Home.useCallback[handleTimeframeChange]"])
            }["Home.useCallback[handleTimeframeChange]"]);
            const now = new Date();
            const from = new Date(now);
            from.setMonth(from.getMonth() - 6);
            const formatDate = {
                "Home.useCallback[handleTimeframeChange].formatDate": (d)=>d.toISOString().split("T")[0]
            }["Home.useCallback[handleTimeframeChange].formatDate"];
            try {
                const res = await fetch("/api/signals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ticker,
                        from: formatDate(from),
                        to: formatDate(now),
                        timeframe
                    })
                });
                const data = await res.json();
                const candles = data.candles || [];
                const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                setChartTabs({
                    "Home.useCallback[handleTimeframeChange]": (prev)=>prev.map({
                            "Home.useCallback[handleTimeframeChange]": (t)=>t.ticker === ticker ? {
                                    ...t,
                                    data: candles,
                                    lastPrice,
                                    timeframe,
                                    from: formatDate(from)
                                } : t
                        }["Home.useCallback[handleTimeframeChange]"])
                }["Home.useCallback[handleTimeframeChange]"]);
            } catch  {
                console.error("Failed to fetch chart data for timeframe change");
            }
        }
    }["Home.useCallback[handleTimeframeChange]"], [
        chartTabs
    ]);
    const handleTimespanChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleTimespanChange]": async (ticker, direction)=>{
            const tab = chartTabs.find({
                "Home.useCallback[handleTimespanChange].tab": (t)=>t.ticker === ticker
            }["Home.useCallback[handleTimespanChange].tab"]);
            if (!tab) return;
            const formatDate = {
                "Home.useCallback[handleTimespanChange].formatDate": (d)=>d.toISOString().split("T")[0]
            }["Home.useCallback[handleTimespanChange].formatDate"];
            const now = new Date();
            const toDate = formatDate(now);
            const currentFrom = new Date(tab.from);
            const spanMs = now.getTime() - currentFrom.getTime();
            const spanDays = spanMs / (1000 * 60 * 60 * 24);
            if (direction === "shrink") {
                const timeframePeriodDays = {
                    TICK: 1 / 86400,
                    SECOND: 1 / 86400,
                    MINUTE: 1 / 1440,
                    HOUR: 1 / 24,
                    DAY: 1,
                    WEEK: 7,
                    MONTH: 30
                };
                const periodDays = timeframePeriodDays[tab.timeframe] ?? 1;
                const currentPeriods = spanDays / periodDays;
                if (currentPeriods <= 15) return;
            }
            const shiftMs = spanMs * 0.3;
            let newFrom;
            if (direction === "expand") {
                newFrom = new Date(currentFrom.getTime() - shiftMs);
            } else {
                newFrom = new Date(currentFrom.getTime() + shiftMs);
            }
            const newFromStr = formatDate(newFrom);
            setChartTabs({
                "Home.useCallback[handleTimespanChange]": (prev)=>prev.map({
                        "Home.useCallback[handleTimespanChange]": (t)=>t.ticker === ticker ? {
                                ...t,
                                data: [],
                                from: newFromStr
                            } : t
                    }["Home.useCallback[handleTimespanChange]"])
            }["Home.useCallback[handleTimespanChange]"]);
            try {
                const res = await fetch("/api/signals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ticker,
                        from: newFromStr,
                        to: toDate,
                        timeframe: tab.timeframe
                    })
                });
                const data = await res.json();
                const candles = data.candles || [];
                const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                setChartTabs({
                    "Home.useCallback[handleTimespanChange]": (prev)=>prev.map({
                            "Home.useCallback[handleTimespanChange]": (t)=>t.ticker === ticker ? {
                                    ...t,
                                    data: candles,
                                    lastPrice,
                                    from: newFromStr
                                } : t
                        }["Home.useCallback[handleTimespanChange]"])
                }["Home.useCallback[handleTimespanChange]"]);
            } catch  {
                console.error("Failed to fetch chart data for timespan change");
            }
        }
    }["Home.useCallback[handleTimespanChange]"], [
        chartTabs
    ]);
    const handleWatchlistSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleWatchlistSelect]": (ticker)=>{
            setActiveTab(ticker);
        }
    }["Home.useCallback[handleWatchlistSelect]"], []);
    const handleCloseSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleCloseSearch]": ()=>{
            setShowSearchResults(false);
            setSearchQuery("");
            setSearchResults([]);
        }
    }["Home.useCallback[handleCloseSearch]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: {
                            width: "var(--sidebar-width)",
                            borderRight: "1px solid var(--color-border)",
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: searchQuery,
                                onChange: handleSearchChange,
                                onFocus: ()=>{
                                    if (searchQuery.length >= 1) setShowSearchResults(true);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                items: chartTabs,
                                onSelect: handleWatchlistSelect
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    showSearchResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        results: searchResults,
                        searchQuery: searchQuery,
                        isLoading: isSearching,
                        showTypeMore: searchQuery.length === 1,
                        onSelect: handleSearchResultSelect,
                        onClose: handleCloseSearch
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            background: "var(--color-bg)"
                        },
                        children: isLoadingChart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--color-text-muted)"
                            },
                            children: "Loading chart data..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            tabs: chartTabs,
                            activeTab: activeTab,
                            onTabSelect: setActiveTab,
                            onTimeframeChange: handleTimeframeChange,
                            onTimespanChange: handleTimespanChange,
                            availableSignals: availableSignals,
                            selectedSignal: selectedSignal,
                            onSignalChange: setSelectedSignal
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 277,
        columnNumber: 5
    }, this);
}
_s(Home, "Y7vE6VCwTMsndNHHH8pv38rfXCc=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b02156d6._.js.map