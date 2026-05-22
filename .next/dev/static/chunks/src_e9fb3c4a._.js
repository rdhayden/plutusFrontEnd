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
function Header({ liveMode = false, onLiveModeChange }) {
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
                lineNumber: 33,
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
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.href, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-xs)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "body-1",
                        style: {
                            color: "var(--color-text-secondary)",
                            fontSize: "var(--body-1-size)"
                        },
                        children: "Live"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "switch",
                        "aria-checked": liveMode,
                        "aria-label": "Toggle live mode",
                        onClick: ()=>onLiveModeChange?.(!liveMode),
                        style: {
                            width: "36px",
                            height: "20px",
                            borderRadius: "10px",
                            border: "none",
                            background: liveMode ? "var(--green-40)" : "var(--grey-60)",
                            cursor: "pointer",
                            position: "relative",
                            transition: "background 0.2s",
                            flexShrink: 0
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                position: "absolute",
                                top: "2px",
                                left: liveMode ? "18px" : "2px",
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                background: "white",
                                transition: "left 0.2s"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 22,
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
"[project]/src/components/SearchResults.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SearchResults({ results, searchQuery, isLoading, showTypeMore, watchlistNames, tickerMembership, onSelect, onAddToWatchlist, onClose }) {
    _s();
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const contextMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchResults.useEffect": ()=>{
            if (!contextMenu) return;
            const handleClickOutside = {
                "SearchResults.useEffect.handleClickOutside": (e)=>{
                    if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
                        setContextMenu(null);
                    }
                }
            }["SearchResults.useEffect.handleClickOutside"];
            const handleKeyDown = {
                "SearchResults.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") setContextMenu(null);
                }
            }["SearchResults.useEffect.handleKeyDown"];
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "SearchResults.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                    document.removeEventListener("keydown", handleKeyDown);
                }
            })["SearchResults.useEffect"];
        }
    }["SearchResults.useEffect"], [
        contextMenu
    ]);
    const handleContextMenu = (e, result)=>{
        e.preventDefault();
        setContextMenu({
            x: e.clientX,
            y: e.clientY,
            result
        });
    };
    const handleAddToWatchlist = (watchlistName)=>{
        if (contextMenu) {
            onAddToWatchlist(contextMenu.result, watchlistName);
            setContextMenu(null);
        }
    };
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
                                lineNumber: 91,
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
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 90,
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
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchResults.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 81,
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
                        lineNumber: 135,
                        columnNumber: 11
                    }, this),
                    !showTypeMore && results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(result),
                            onContextMenu: (e)=>handleContextMenu(e, result),
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
                                        lineNumber: 174,
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
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        }, result.ticker, false, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contextMenuRef,
                style: {
                    position: "fixed",
                    top: contextMenu.y,
                    left: contextMenu.x,
                    zIndex: 1000,
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-m)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                    minWidth: "180px",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "6px var(--inset-m)",
                            fontSize: "var(--body-2-size)",
                            color: "var(--color-text-muted)",
                            borderBottom: "1px solid var(--color-border)",
                            userSelect: "none"
                        },
                        children: "Add to watchlist"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    watchlistNames.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "10px var(--inset-m)",
                            fontSize: "var(--body-1-size)",
                            color: "var(--color-text-muted)",
                            userSelect: "none"
                        },
                        children: "no watchlists"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this) : watchlistNames.map((wlName)=>{
                        const alreadyIn = tickerMembership.get(contextMenu.result.ticker)?.has(wlName) ?? false;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>!alreadyIn && handleAddToWatchlist(wlName),
                            disabled: alreadyIn,
                            style: {
                                display: "block",
                                width: "100%",
                                padding: "10px var(--inset-m)",
                                background: "transparent",
                                border: "none",
                                cursor: alreadyIn ? "default" : "pointer",
                                textAlign: "left",
                                fontSize: "var(--body-1-size)",
                                color: alreadyIn ? "var(--color-text-muted)" : "var(--color-text-primary)",
                                transition: "background 0.15s"
                            },
                            onMouseEnter: (e)=>{
                                if (!alreadyIn) e.currentTarget.style.background = "var(--color-bg-secondary)";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.background = "transparent";
                            },
                            children: wlName
                        }, wlName, false, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 237,
                            columnNumber: 17
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 193,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchResults.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(SearchResults, "M2T3NZjiQMkWwJxK2OiCISA8pgs=");
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
/** Fixed right price scale width so all charts have identical time-scale pixel widths. */ const PRICE_SCALE_MIN_WIDTH = 80;
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
function CandlestickChart({ data, timeframe = "DAY", overlays = [], onExpandNeeded, onVisibleLogicalRangeChange, visibleLogicalRange, onCrosshairXChange, crosshairXFraction, referenceTimePoints }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const syncLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const candlestickSeriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const expandingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const suppressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const syncingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suppressTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onExpandNeededRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onExpandNeeded);
    onExpandNeededRef.current = onExpandNeeded;
    const onVisibleLogicalRangeChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onVisibleLogicalRangeChange);
    onVisibleLogicalRangeChangeRef.current = onVisibleLogicalRangeChange;
    const onCrosshairXChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onCrosshairXChange);
    onCrosshairXChangeRef.current = onCrosshairXChange;
    const isCrosshairSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const overlayLookupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
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
                    borderColor: "hsl(220, 13%, 90%)",
                    minimumWidth: PRICE_SCALE_MIN_WIDTH,
                    scaleMargins: {
                        top: 0.1,
                        bottom: 0.1
                    }
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
            candlestickSeriesRef.current = candlestickSeries;
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
            const handleVisibleRangeChange = {
                "CandlestickChart.useEffect.handleVisibleRangeChange": (logicalRange)=>{
                    if (syncingRef.current) return;
                    if (onVisibleLogicalRangeChangeRef.current) {
                        onVisibleLogicalRangeChangeRef.current(logicalRange);
                    }
                    if (!logicalRange || expandingRef.current || suppressRef.current || !candlestickSeriesRef.current) return;
                    const barsInfo = candlestickSeriesRef.current.barsInLogicalRange(logicalRange);
                    if (barsInfo && barsInfo.barsBefore < 0) {
                        if (debounceRef.current) clearTimeout(debounceRef.current);
                        debounceRef.current = setTimeout({
                            "CandlestickChart.useEffect.handleVisibleRangeChange": ()=>{
                                if (onExpandNeededRef.current && !expandingRef.current) {
                                    expandingRef.current = true;
                                    onExpandNeededRef.current();
                                }
                            }
                        }["CandlestickChart.useEffect.handleVisibleRangeChange"], 500);
                    }
                }
            }["CandlestickChart.useEffect.handleVisibleRangeChange"];
            chart.timeScale().subscribeVisibleLogicalRangeChange(handleVisibleRangeChange);
            const lineSeriesMap = [];
            overlayLookupRef.current = [];
            for(let i = 0; i < overlays.length; i++){
                const overlay = overlays[i];
                if (overlay.timeSeries.length === 0) continue;
                const valueKeys = Object.keys(overlay.timeSeries[0].values);
                for(let k = 0; k < valueKeys.length; k++){
                    const key = valueKeys[k];
                    const colorIndex = (i * valueKeys.length + k) % OVERLAY_COLORS.length;
                    const color = OVERLAY_COLORS[colorIndex];
                    const lineSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSeries"], {
                        color,
                        lineWidth: 2
                    });
                    const lineData = overlay.timeSeries.map({
                        "CandlestickChart.useEffect.lineData": (pt)=>({
                                time: pt.time,
                                value: pt.values[key] ?? 0
                            })
                    }["CandlestickChart.useEffect.lineData"]);
                    lineSeries.setData(lineData);
                    const label = valueKeys.length > 1 ? `${overlay.signalName} ${key}` : overlay.signalName;
                    lineSeriesMap.push({
                        series: lineSeries,
                        label,
                        color
                    });
                    const byTime = new Map();
                    for (const pt of overlay.timeSeries){
                        byTime.set(String(pt.time), pt.values[key] ?? 0);
                    }
                    overlayLookupRef.current.push({
                        label,
                        color,
                        byTime
                    });
                }
            }
            // Add a reference series with all time points to unify the time scale across
            // charts. Placed on a separate hidden price scale so its value=0 data points
            // don't distort the y-axis range of the visible series.
            if (referenceTimePoints && referenceTimePoints.length > 0) {
                const refSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSeries"], {
                    color: "transparent",
                    lastValueVisible: false,
                    priceLineVisible: false,
                    crosshairMarkerVisible: false,
                    priceScaleId: "_ref"
                });
                refSeries.priceScale().applyOptions({
                    visible: false
                });
                refSeries.setData(referenceTimePoints.map({
                    "CandlestickChart.useEffect": (t)=>({
                            time: t,
                            value: 0
                        })
                }["CandlestickChart.useEffect"]));
            }
            // Tooltip on crosshair move
            const tooltip = tooltipRef.current;
            const syncLine = syncLineRef.current;
            const handleCrosshairMove = {
                "CandlestickChart.useEffect.handleCrosshairMove": (param)=>{
                    if (!tooltip) return;
                    // Broadcast raw pixel x and time to other charts
                    if (onCrosshairXChangeRef.current) {
                        isCrosshairSourceRef.current = true;
                        if (param.point && param.point.x >= 0 && param.time) {
                            onCrosshairXChangeRef.current({
                                x: param.point.x,
                                time: param.time
                            });
                        } else {
                            onCrosshairXChangeRef.current(null);
                        }
                    }
                    // When this chart is the source, hide the sync line (built-in crosshair is active)
                    if (syncLine) {
                        syncLine.style.display = "none";
                    }
                    if (!param.time || !param.point || param.point.x < 0 || param.point.y < 0) {
                        tooltip.style.display = "none";
                        return;
                    }
                    const lines = [];
                    // Format time
                    if (typeof param.time === "number") {
                        const d = new Date(param.time * 1000);
                        lines.push(`<div style="margin-bottom:4px;font-weight:600">${d.toLocaleString()}</div>`);
                    } else {
                        lines.push(`<div style="margin-bottom:4px;font-weight:600">${String(param.time)}</div>`);
                    }
                    // OHLCV from candlestick series
                    const candleData = param.seriesData.get(candlestickSeries);
                    if (candleData && "open" in candleData) {
                        const fmt = {
                            "CandlestickChart.useEffect.handleCrosshairMove.fmt": (v)=>v.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                })
                        }["CandlestickChart.useEffect.handleCrosshairMove.fmt"];
                        lines.push(`<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">O</span><span>${fmt(candleData.open)}</span></div>`, `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">H</span><span>${fmt(candleData.high)}</span></div>`, `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">L</span><span>${fmt(candleData.low)}</span></div>`, `<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:hsl(220,10%,50%)">C</span><span>${fmt(candleData.close)}</span></div>`);
                    }
                    // Signal overlay values
                    for (const { series, label, color } of lineSeriesMap){
                        const lineData = param.seriesData.get(series);
                        if (lineData && "value" in lineData && lineData.value !== undefined) {
                            const val = lineData.value.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 4
                            });
                            lines.push(`<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:${color}">${label}</span><span>${val}</span></div>`);
                        }
                    }
                    tooltip.innerHTML = lines.join("");
                    tooltip.style.display = "block";
                    // Position tooltip near cursor, but keep within bounds
                    const container = containerRef.current;
                    if (container) {
                        const cw = container.clientWidth;
                        const tooltipWidth = 200;
                        const tooltipMargin = 12;
                        let left = param.point.x + tooltipMargin;
                        if (left + tooltipWidth > cw) {
                            left = param.point.x - tooltipWidth - tooltipMargin;
                        }
                        tooltip.style.left = `${Math.max(0, left)}px`;
                        tooltip.style.top = `${Math.max(0, param.point.y + tooltipMargin)}px`;
                    }
                }
            }["CandlestickChart.useEffect.handleCrosshairMove"];
            chart.subscribeCrosshairMove(handleCrosshairMove);
            chart.timeScale().fitContent();
            // Suppress auto-expand detection while the chart settles after fitContent
            suppressRef.current = true;
            suppressTimerRef.current = setTimeout({
                "CandlestickChart.useEffect": ()=>{
                    suppressRef.current = false;
                }
            }["CandlestickChart.useEffect"], 1000);
            return ({
                "CandlestickChart.useEffect": ()=>{
                    if (debounceRef.current) clearTimeout(debounceRef.current);
                    if (suppressTimerRef.current) clearTimeout(suppressTimerRef.current);
                    chart.unsubscribeCrosshairMove(handleCrosshairMove);
                    chart.timeScale().unsubscribeVisibleLogicalRangeChange(handleVisibleRangeChange);
                    chart.remove();
                    chartRef.current = null;
                    candlestickSeriesRef.current = null;
                    expandingRef.current = false;
                    suppressRef.current = false;
                }
            })["CandlestickChart.useEffect"];
        }
    }["CandlestickChart.useEffect"], [
        data,
        timeframe,
        overlays,
        referenceTimePoints
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CandlestickChart.useEffect": ()=>{
            if (!chartRef.current || !visibleLogicalRange) return;
            syncingRef.current = true;
            chartRef.current.timeScale().setVisibleLogicalRange(visibleLogicalRange);
            requestAnimationFrame({
                "CandlestickChart.useEffect": ()=>{
                    syncingRef.current = false;
                }
            }["CandlestickChart.useEffect"]);
        }
    }["CandlestickChart.useEffect"], [
        visibleLogicalRange
    ]);
    // Sync crosshair from other charts using a custom vertical line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CandlestickChart.useEffect": ()=>{
            const chart = chartRef.current;
            const syncLine = syncLineRef.current;
            if (!chart || !syncLine) return;
            // Skip if this chart is the source — it already has the correct crosshair from mouse
            if (isCrosshairSourceRef.current) {
                isCrosshairSourceRef.current = false;
                return;
            }
            const tooltip = tooltipRef.current;
            if (crosshairXFraction == null) {
                syncLine.style.display = "none";
                if (tooltip) tooltip.style.display = "none";
                chart.clearCrosshairPosition();
                return;
            }
            const { x, time } = crosshairXFraction;
            // Position the sync line
            syncLine.style.display = "block";
            syncLine.style.left = `${x}px`;
            // Show tooltip with overlay values at the synced time
            if (tooltip && overlayLookupRef.current.length > 0) {
                const timeKey = String(time);
                const lines = [];
                for (const { label, color, byTime } of overlayLookupRef.current){
                    const value = byTime.get(timeKey);
                    if (value !== undefined) {
                        const val = value.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 4
                        });
                        lines.push(`<div style="display:flex;justify-content:space-between;gap:12px"><span style="color:${color}">${label}</span><span>${val}</span></div>`);
                    }
                }
                if (lines.length > 0) {
                    tooltip.innerHTML = lines.join("");
                    tooltip.style.display = "block";
                    const container = containerRef.current;
                    if (container) {
                        const cw = container.clientWidth;
                        const tooltipWidth = 200;
                        const tooltipMargin = 12;
                        let left = x + tooltipMargin;
                        if (left + tooltipWidth > cw) {
                            left = x - tooltipWidth - tooltipMargin;
                        }
                        tooltip.style.left = `${Math.max(0, left)}px`;
                        tooltip.style.top = `${tooltipMargin}px`;
                    }
                } else {
                    tooltip.style.display = "none";
                }
            }
        }
    }["CandlestickChart.useEffect"], [
        crosshairXFraction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: syncLineRef,
                style: {
                    display: "none",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    width: 0,
                    borderLeft: "1px dashed hsl(215, 80%, 40%)",
                    pointerEvents: "none",
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sync-label": "",
                    style: {
                        position: "absolute",
                        bottom: "24px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "hsl(215, 80%, 40%)",
                        color: "#fff",
                        fontSize: "11px",
                        padding: "2px 6px",
                        borderRadius: "3px",
                        whiteSpace: "nowrap"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/CandlestickChart.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tooltipRef,
                style: {
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 20,
                    pointerEvents: "none",
                    minWidth: "140px",
                    maxWidth: "200px",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    lineHeight: "1.5",
                    fontFamily: "Inter, system-ui, sans-serif",
                    background: "hsla(220, 13%, 18%, 0.92)",
                    color: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.25)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 412,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CandlestickChart.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
_s(CandlestickChart, "cRQAWbu+NVkAjYynSZL80cAFyyg=");
_c = CandlestickChart;
var _c;
__turbopack_context__.k.register(_c, "CandlestickChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SignalConfigPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignalConfigPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function validateValue(value, paramType) {
    if (value === "") return "Value is required";
    if (paramType === "INTEGER") {
        if (!/^-?\d+$/.test(value)) return "Must be an integer";
    } else if (paramType === "FLOAT") {
        if (!/^-?\d+(\.\d+)?$/.test(value)) return "Must be a number";
    }
    return null;
}
function SignalConfigPanel({ signal, defaultTicker, defaultExchange, onSubmit, onClose, duplicateMessage }) {
    _s();
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SignalConfigPanel.useState": ()=>{
            const initial = {};
            for (const p of signal.parameters){
                if (p.name === "ticker") initial[p.name] = defaultTicker;
                else if (p.name === "exchange") initial[p.name] = defaultExchange ?? "";
                else initial[p.name] = "";
            }
            return initial;
        }
    }["SignalConfigPanel.useState"]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (paramName, value)=>{
        setValues((prev)=>({
                ...prev,
                [paramName]: value
            }));
        if (submitted) {
            const param = signal.parameters.find((p)=>p.name === paramName);
            if (param) {
                setErrors((prev)=>({
                        ...prev,
                        [paramName]: validateValue(value, param.value)
                    }));
            }
        }
    };
    const handleSubmit = ()=>{
        setSubmitted(true);
        const newErrors = {};
        let hasError = false;
        for (const param of signal.parameters){
            const error = validateValue(values[param.name] ?? "", param.value);
            newErrors[param.name] = error;
            if (error) hasError = true;
        }
        setErrors(newErrors);
        if (hasError) return;
        const specification = signal.parameters.map((p)=>({
                name: p.name,
                value: values[p.name]
            }));
        onSubmit(signal.name, specification);
    };
    const getInputType = (param)=>{
        if (param.value === "INTEGER" || param.value === "FLOAT") return "text";
        return "text";
    };
    const getPlaceholder = (param)=>{
        if (param.value === "INTEGER") return "e.g. 14";
        if (param.value === "FLOAT") return "e.g. 1.5";
        return "e.g. AAPL";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "var(--inset-m)",
            borderBottom: "1px solid var(--color-border-light)",
            background: "var(--color-bg-secondary)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--space-s)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "heading-3",
                        children: [
                            "Configure ",
                            signal.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SignalConfigPanel.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Close signal config",
                        onClick: onClose,
                        style: {
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            fontSize: "18px",
                            color: "var(--color-text-secondary)",
                            padding: "2px 6px"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SignalConfigPanel.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SignalConfigPanel.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    handleSubmit();
                },
                style: {
                    display: "flex",
                    gap: "var(--space-s)",
                    flexWrap: "wrap",
                    alignItems: "flex-start"
                },
                children: [
                    signal.parameters.map((param)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "2px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "body-1",
                                    style: {
                                        color: "var(--color-text-secondary)",
                                        fontSize: "12px"
                                    },
                                    children: [
                                        param.name,
                                        " (",
                                        param.value,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SignalConfigPanel.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: getInputType(param),
                                    inputMode: param.value === "INTEGER" ? "numeric" : param.value === "FLOAT" ? "decimal" : "text",
                                    placeholder: getPlaceholder(param),
                                    value: values[param.name] ?? "",
                                    onChange: (e)=>handleChange(param.name, e.target.value),
                                    "aria-label": param.name,
                                    style: {
                                        padding: "var(--inset-xs) 8px",
                                        border: `1px solid ${errors[param.name] ? "var(--color-red-60)" : "var(--color-border)"}`,
                                        borderRadius: "var(--radius-m)",
                                        fontSize: "var(--body-1-size)",
                                        color: "var(--color-text-primary)",
                                        background: "var(--color-bg)",
                                        width: "140px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignalConfigPanel.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                errors[param.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    role: "alert",
                                    style: {
                                        color: "var(--color-red-60)",
                                        fontSize: "11px"
                                    },
                                    children: errors[param.name]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignalConfigPanel.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, param.name, true, {
                            fileName: "[project]/src/components/SignalConfigPanel.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            padding: "var(--inset-xs) var(--inset-s)",
                            border: "1px solid var(--color-primary)",
                            borderRadius: "var(--radius-m)",
                            fontSize: "var(--body-1-size)",
                            color: "#fff",
                            background: "var(--color-primary)",
                            cursor: "pointer",
                            alignSelf: "flex-end"
                        },
                        children: "Add Signal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SignalConfigPanel.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SignalConfigPanel.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            duplicateMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                style: {
                    marginTop: "var(--space-xs)",
                    color: "var(--color-text-muted)",
                    fontSize: "12px"
                },
                children: duplicateMessage
            }, void 0, false, {
                fileName: "[project]/src/components/SignalConfigPanel.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SignalConfigPanel.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(SignalConfigPanel, "nEOwVqzLBOxEAKw4/NWMsGFTJIE=");
_c = SignalConfigPanel;
var _c;
__turbopack_context__.k.register(_c, "SignalConfigPanel");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CandlestickChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SignalConfigPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function computeSubCharts(signals) {
    // Panes: each independent signal (visualiseWith=[]) gets its own sub-chart.
    // Dependent signals (visualiseWith non-empty) join panes containing their targets.
    // "PriceSignal" is implicitly on the main chart, handled by the caller.
    const panes = [];
    const dependents = [];
    for (const signal of signals){
        if (signal.visualiseWith.length === 0) {
            panes.push({
                label: signal.signalName,
                overlays: [
                    signal
                ]
            });
        } else if (signal.visualiseWith.includes("PriceSignal")) {
            // Handled by main chart - skip here, but also check sub-charts
            // for multi-target signals
            for (const pane of panes){
                if (signal.visualiseWith.some((name)=>pane.overlays.some((o)=>o.signalName === name))) {
                    pane.overlays.push(signal);
                }
            }
        } else {
            dependents.push(signal);
        }
    }
    for (const signal of dependents){
        let placed = false;
        for (const pane of panes){
            if (signal.visualiseWith.some((name)=>pane.overlays.some((o)=>o.signalName === name))) {
                pane.overlays.push(signal);
                placed = true;
            }
        }
        if (!placed) {
            panes.push({
                label: signal.signalName,
                overlays: [
                    signal
                ]
            });
        }
    }
    return panes;
}
function getMainChartOverlays(signals) {
    // Signals that visualise with PriceSignal (or with other signals already on the main chart)
    const mainSignalNames = new Set([
        "PriceSignal"
    ]);
    const result = [];
    // Multiple passes to resolve transitive dependencies
    let changed = true;
    while(changed){
        changed = false;
        for (const signal of signals){
            if (result.includes(signal)) continue;
            if (signal.visualiseWith.some((name)=>mainSignalNames.has(name))) {
                result.push(signal);
                mainSignalNames.add(signal.signalName);
                changed = true;
            }
        }
    }
    return result;
}
const TIMEFRAMES = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMEFRAME_LABELS"]);
_c = TIMEFRAMES;
const DEFAULT_MAIN_HEIGHT = 400;
const DEFAULT_SUB_HEIGHT = 200;
const MIN_CHART_HEIGHT = 100;
function ResizeHandle({ onDrag }) {
    _s();
    const draggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const onDragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onDrag);
    onDragRef.current = onDrag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResizeHandle.useEffect": ()=>{
            const handleMouseMove = {
                "ResizeHandle.useEffect.handleMouseMove": (e)=>{
                    if (!draggingRef.current) return;
                    const delta = e.clientY - lastYRef.current;
                    lastYRef.current = e.clientY;
                    onDragRef.current(delta);
                }
            }["ResizeHandle.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "ResizeHandle.useEffect.handleMouseUp": ()=>{
                    if (draggingRef.current) {
                        draggingRef.current = false;
                        document.body.style.cursor = "";
                        document.body.style.userSelect = "";
                    }
                }
            }["ResizeHandle.useEffect.handleMouseUp"];
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            return ({
                "ResizeHandle.useEffect": ()=>{
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }
            })["ResizeHandle.useEffect"];
        }
    }["ResizeHandle.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "separator",
        "aria-orientation": "horizontal",
        "aria-label": "Resize chart",
        onMouseDown: (e)=>{
            e.preventDefault();
            draggingRef.current = true;
            lastYRef.current = e.clientY;
            document.body.style.cursor = "row-resize";
            document.body.style.userSelect = "none";
        },
        style: {
            height: "12px",
            cursor: "row-resize",
            position: "relative",
            zIndex: 10,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "1px",
                    background: "var(--color-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "40px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "var(--color-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChartPanel.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_s(ResizeHandle, "uh1yFLqfpTK1tBy9sewne+PHDXQ=");
_c1 = ResizeHandle;
function ChartPanel({ tabs, activeTab, onTabSelect, onTimeframeChange, onTimespanChange, onAddSignal, onAutoExpand, onTabClose, availableSignals, selectedSignal, onSignalChange }) {
    _s1();
    const [showConfigPanel, setShowConfigPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [duplicateMessage, setDuplicateMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mainChartHeight, setMainChartHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_MAIN_HEIGHT);
    const [subChartHeights, setSubChartHeights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sharedLogicalRange, setSharedLogicalRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sharedCrosshairX, setSharedCrosshairX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeChart = tabs.find((t)=>t.ticker === activeTab);
    const selectedSignalDef = availableSignals.find((s)=>s.name === selectedSignal);
    const handleSignalChange = (value)=>{
        onSignalChange(value);
        if (value) {
            setShowConfigPanel(true);
            setDuplicateMessage(null);
        } else {
            setShowConfigPanel(false);
        }
    };
    const handleSubmitSignal = async (signalName, specification)=>{
        if (!activeChart) return;
        setDuplicateMessage(null);
        const errorMsg = await onAddSignal(activeChart.ticker, signalName, specification);
        if (errorMsg) {
            setDuplicateMessage(errorMsg);
        } else {
            setShowConfigPanel(false);
            onSignalChange("");
        }
    };
    const handleCloseConfig = ()=>{
        setShowConfigPanel(false);
        setDuplicateMessage(null);
    };
    const handleExpandNeeded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChartPanel.useCallback[handleExpandNeeded]": ()=>{
            if (activeChart) onAutoExpand(activeChart.ticker);
        }
    }["ChartPanel.useCallback[handleExpandNeeded]"], [
        onAutoExpand,
        activeChart
    ]);
    const mainOverlays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChartPanel.useMemo[mainOverlays]": ()=>getMainChartOverlays(activeChart?.signals ?? [])
    }["ChartPanel.useMemo[mainOverlays]"], [
        activeChart?.signals
    ]);
    const subCharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChartPanel.useMemo[subCharts]": ()=>computeSubCharts(activeChart?.signals ?? [])
    }["ChartPanel.useMemo[subCharts]"], [
        activeChart?.signals
    ]);
    // Compute the union of all time points (candle data + all signal overlays)
    // so that every chart has the same bar count and time-to-pixel mapping.
    const allTimePoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChartPanel.useMemo[allTimePoints]": ()=>{
            const timeSet = new Set();
            for (const d of activeChart?.data ?? []){
                timeSet.add(d.time);
            }
            for (const signal of activeChart?.signals ?? []){
                for (const pt of signal.timeSeries){
                    timeSet.add(pt.time);
                }
            }
            return Array.from(timeSet).sort({
                "ChartPanel.useMemo[allTimePoints]": (a, b)=>{
                    if (typeof a === "number" && typeof b === "number") return a - b;
                    return String(a).localeCompare(String(b));
                }
            }["ChartPanel.useMemo[allTimePoints]"]);
        }
    }["ChartPanel.useMemo[allTimePoints]"], [
        activeChart?.data,
        activeChart?.signals
    ]);
    const handleMainResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChartPanel.useCallback[handleMainResize]": (delta)=>{
            setMainChartHeight({
                "ChartPanel.useCallback[handleMainResize]": (h)=>Math.max(MIN_CHART_HEIGHT, h + delta)
            }["ChartPanel.useCallback[handleMainResize]"]);
        }
    }["ChartPanel.useCallback[handleMainResize]"], []);
    const handleSubResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChartPanel.useCallback[handleSubResize]": (label, delta)=>{
            setSubChartHeights({
                "ChartPanel.useCallback[handleSubResize]": (prev)=>({
                        ...prev,
                        [label]: Math.max(MIN_CHART_HEIGHT, (prev[label] ?? DEFAULT_SUB_HEIGHT) + delta)
                    })
            }["ChartPanel.useCallback[handleSubResize]"]);
        }
    }["ChartPanel.useCallback[handleSubResize]"], []);
    const handleMainVisibleRangeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChartPanel.useCallback[handleMainVisibleRangeChange]": (range)=>{
            setSharedLogicalRange(range);
        }
    }["ChartPanel.useCallback[handleMainVisibleRangeChange]"], []);
    const handleCrosshairXChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChartPanel.useCallback[handleCrosshairXChange]": (xFraction)=>{
            setSharedCrosshairX(xFraction);
        }
    }["ChartPanel.useCallback[handleCrosshairXChange]"], []);
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
            lineNumber: 289,
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
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            borderBottom: tab.ticker === activeTab ? "2px solid var(--color-primary)" : "2px solid transparent",
                            marginBottom: "-1px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onTabSelect(tab.ticker),
                                style: {
                                    padding: "var(--inset-xs) var(--space-xs) var(--inset-xs) var(--inset-s)",
                                    border: "none",
                                    background: "transparent",
                                    cursor: "pointer",
                                    fontWeight: tab.ticker === activeTab ? 600 : 400,
                                    fontSize: "var(--body-1-size)",
                                    color: tab.ticker === activeTab ? "var(--color-primary)" : "var(--color-text-secondary)",
                                    transition: "color 0.15s"
                                },
                                children: tab.ticker
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": `Close ${tab.ticker}`,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onTabClose(tab.ticker);
                                },
                                style: {
                                    padding: "0 var(--inset-xs) 0 0",
                                    border: "none",
                                    background: "transparent",
                                    cursor: "pointer",
                                    color: "var(--color-text-muted)",
                                    fontSize: "14px",
                                    lineHeight: 1,
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tab.ticker, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 307,
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
                                lineNumber: 381,
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
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 380,
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
                                        lineNumber: 396,
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
                                        lineNumber: 416,
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
                                        lineNumber: 436,
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
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 439,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 395,
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
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedSignal,
                                        onChange: (e)=>handleSignalChange(e.target.value),
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
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Select --"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this),
                                            availableSignals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: signal.name,
                                                    children: signal.name
                                                }, signal.name, false, {
                                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 394,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 371,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: "auto",
                    minHeight: 0
                },
                children: [
                    showConfigPanel && selectedSignalDef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        signal: selectedSignalDef,
                        defaultTicker: activeChart.ticker,
                        defaultExchange: activeChart.exchange,
                        onSubmit: handleSubmitSignal,
                        onClose: handleCloseConfig,
                        duplicateMessage: duplicateMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "var(--inset-m)",
                            height: `${mainChartHeight}px`,
                            minHeight: `${MIN_CHART_HEIGHT}px`,
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            data: activeChart.data,
                            timeframe: activeChart.timeframe,
                            overlays: mainOverlays,
                            onExpandNeeded: handleExpandNeeded,
                            onVisibleLogicalRangeChange: handleMainVisibleRangeChange,
                            onCrosshairXChange: handleCrosshairXChange,
                            crosshairXFraction: sharedCrosshairX,
                            referenceTimePoints: allTimePoints
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 520,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                        onDrag: handleMainResize
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    subCharts.map((pane)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "var(--space-m)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: `${subChartHeights[pane.label] ?? DEFAULT_SUB_HEIGHT}px`,
                                        minHeight: `${MIN_CHART_HEIGHT}px`,
                                        padding: "0 var(--inset-m) var(--inset-m)",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "body-1",
                                            style: {
                                                color: "var(--color-text-secondary)",
                                                padding: "var(--inset-xs) 0",
                                                fontSize: "12px"
                                            },
                                            children: pane.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChartPanel.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            data: [],
                                            timeframe: activeChart.timeframe,
                                            overlays: pane.overlays,
                                            visibleLogicalRange: sharedLogicalRange,
                                            onCrosshairXChange: handleCrosshairXChange,
                                            crosshairXFraction: sharedCrosshairX,
                                            referenceTimePoints: allTimePoints
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChartPanel.tsx",
                                            lineNumber: 555,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 537,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                                    onDrag: (delta)=>handleSubResize(pane.label, delta)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 566,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, pane.label, true, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: "var(--space-xl)",
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChartPanel.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, this);
}
_s1(ChartPanel, "mm/h7BgqG43YkcZm5omh5FYRzN8=");
_c2 = ChartPanel;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TIMEFRAMES");
__turbopack_context__.k.register(_c1, "ResizeHandle");
__turbopack_context__.k.register(_c2, "ChartPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useWatchlists.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWatchlists",
    ()=>useWatchlists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const MAX_WATCHLISTS = 50;
const MAX_NAME_LENGTH = 30;
const VALID_NAME_RE = /^[a-zA-Z0-9 ]+$/;
const NOTE_DEBOUNCE_MS = 600;
function validateName(name, existingNames, currentName) {
    const trimmed = name.trim();
    if (trimmed.length === 0) return "Watchlist name must not be empty";
    if (trimmed.length > MAX_NAME_LENGTH) return `Watchlist name must be ${MAX_NAME_LENGTH} characters or fewer`;
    if (!VALID_NAME_RE.test(trimmed)) return "Watchlist name must contain only letters, numbers, and spaces";
    if (trimmed !== currentName && existingNames.some((n)=>n === trimmed)) return "Watchlist name must be unique";
    return null;
}
function useWatchlists() {
    _s();
    const [watchlists, setWatchlists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Notes keyed by ticker — shared across all watchlists
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const noteDebounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    // Bootstrap: load all watchlists and entries on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWatchlists.useEffect": ()=>{
            fetch("/api/watchlists/all").then({
                "useWatchlists.useEffect": (res)=>res.json()
            }["useWatchlists.useEffect"]).then({
                "useWatchlists.useEffect": (data)=>{
                    const loadedNotes = {};
                    const loaded = data.map({
                        "useWatchlists.useEffect.loaded": (w)=>({
                                name: w.name,
                                displayOrder: w.display_order,
                                isOpen: w.entries.length > 0,
                                entries: w.entries.map({
                                    "useWatchlists.useEffect.loaded": (e)=>{
                                        // Notes are global per ticker — first occurrence wins
                                        if (e.notes && !loadedNotes[e.ticker]) {
                                            loadedNotes[e.ticker] = e.notes;
                                        }
                                        return {
                                            ticker: e.ticker,
                                            name: null,
                                            notes: e.notes
                                        };
                                    }
                                }["useWatchlists.useEffect.loaded"])
                            })
                    }["useWatchlists.useEffect.loaded"]);
                    setWatchlists(loaded);
                    setNotes(loadedNotes);
                }
            }["useWatchlists.useEffect"]).catch({
                "useWatchlists.useEffect": ()=>console.error("Failed to load watchlists")
            }["useWatchlists.useEffect"]);
        }
    }["useWatchlists.useEffect"], []);
    // Derived: Map<ticker, Set<watchlistName>> — which watchlists each ticker belongs to
    const tickerMembership = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useWatchlists.useMemo[tickerMembership]": ()=>{
            const map = new Map();
            for (const wl of watchlists){
                for (const entry of wl.entries){
                    if (!map.has(entry.ticker)) map.set(entry.ticker, new Set());
                    map.get(entry.ticker).add(wl.name);
                }
            }
            return map;
        }
    }["useWatchlists.useMemo[tickerMembership]"], [
        watchlists
    ]);
    const toggleWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[toggleWatchlist]": (name)=>{
            setWatchlists({
                "useWatchlists.useCallback[toggleWatchlist]": (prev)=>prev.map({
                        "useWatchlists.useCallback[toggleWatchlist]": (wl)=>wl.name === name ? {
                                ...wl,
                                isOpen: !wl.isOpen
                            } : wl
                    }["useWatchlists.useCallback[toggleWatchlist]"])
            }["useWatchlists.useCallback[toggleWatchlist]"]);
        }
    }["useWatchlists.useCallback[toggleWatchlist]"], []);
    // Returns error string on validation failure, null on success
    const createWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[createWatchlist]": (name)=>{
            const trimmed = name.trim();
            const existingNames = watchlists.map({
                "useWatchlists.useCallback[createWatchlist].existingNames": (w)=>w.name
            }["useWatchlists.useCallback[createWatchlist].existingNames"]);
            if (existingNames.length >= MAX_WATCHLISTS) {
                return `You cannot have more than ${MAX_WATCHLISTS} watchlists`;
            }
            const error = validateName(trimmed, existingNames);
            if (error) return error;
            const nextOrder = watchlists.length > 0 ? Math.max(...watchlists.map({
                "useWatchlists.useCallback[createWatchlist]": (w)=>w.displayOrder
            }["useWatchlists.useCallback[createWatchlist]"])) + 1 : 0;
            setWatchlists({
                "useWatchlists.useCallback[createWatchlist]": (prev)=>[
                        ...prev,
                        {
                            name: trimmed,
                            displayOrder: nextOrder,
                            isOpen: true,
                            entries: []
                        }
                    ]
            }["useWatchlists.useCallback[createWatchlist]"]);
            fetch("/api/watchlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: trimmed
                })
            }).catch({
                "useWatchlists.useCallback[createWatchlist]": ()=>console.error("Failed to create watchlist")
            }["useWatchlists.useCallback[createWatchlist]"]);
            return null;
        }
    }["useWatchlists.useCallback[createWatchlist]"], [
        watchlists
    ]);
    // Returns error string on validation failure, null on success
    const renameWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[renameWatchlist]": (oldName, newName)=>{
            const trimmed = newName.trim();
            const existingNames = watchlists.map({
                "useWatchlists.useCallback[renameWatchlist].existingNames": (w)=>w.name
            }["useWatchlists.useCallback[renameWatchlist].existingNames"]);
            const error = validateName(trimmed, existingNames, oldName);
            if (error) return error;
            setWatchlists({
                "useWatchlists.useCallback[renameWatchlist]": (prev)=>prev.map({
                        "useWatchlists.useCallback[renameWatchlist]": (wl)=>wl.name === oldName ? {
                                ...wl,
                                name: trimmed
                            } : wl
                    }["useWatchlists.useCallback[renameWatchlist]"])
            }["useWatchlists.useCallback[renameWatchlist]"]);
            fetch(`/api/watchlists/${encodeURIComponent(oldName)}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    newName: trimmed
                })
            }).catch({
                "useWatchlists.useCallback[renameWatchlist]": ()=>console.error("Failed to rename watchlist")
            }["useWatchlists.useCallback[renameWatchlist]"]);
            return null;
        }
    }["useWatchlists.useCallback[renameWatchlist]"], [
        watchlists
    ]);
    const deleteWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[deleteWatchlist]": (name)=>{
            setWatchlists({
                "useWatchlists.useCallback[deleteWatchlist]": (prev)=>prev.filter({
                        "useWatchlists.useCallback[deleteWatchlist]": (wl)=>wl.name !== name
                    }["useWatchlists.useCallback[deleteWatchlist]"])
            }["useWatchlists.useCallback[deleteWatchlist]"]);
            fetch(`/api/watchlists/${encodeURIComponent(name)}`, {
                method: "DELETE"
            }).catch({
                "useWatchlists.useCallback[deleteWatchlist]": ()=>console.error("Failed to delete watchlist")
            }["useWatchlists.useCallback[deleteWatchlist]"]);
        }
    }["useWatchlists.useCallback[deleteWatchlist]"], []);
    const reorderWatchlists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[reorderWatchlists]": (reordered)=>{
            const withNewOrder = reordered.map({
                "useWatchlists.useCallback[reorderWatchlists].withNewOrder": (wl, i)=>({
                        ...wl,
                        displayOrder: i
                    })
            }["useWatchlists.useCallback[reorderWatchlists].withNewOrder"]);
            setWatchlists(withNewOrder);
            fetch("/api/watchlists/reorder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(withNewOrder.map({
                    "useWatchlists.useCallback[reorderWatchlists]": (wl)=>({
                            name: wl.name,
                            display_order: wl.displayOrder
                        })
                }["useWatchlists.useCallback[reorderWatchlists]"]))
            }).catch({
                "useWatchlists.useCallback[reorderWatchlists]": ()=>console.error("Failed to reorder watchlists")
            }["useWatchlists.useCallback[reorderWatchlists]"]);
        }
    }["useWatchlists.useCallback[reorderWatchlists]"], []);
    const addTicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[addTicker]": (watchlistName, result)=>{
            setWatchlists({
                "useWatchlists.useCallback[addTicker]": (prev)=>prev.map({
                        "useWatchlists.useCallback[addTicker]": (wl)=>{
                            if (wl.name !== watchlistName) return wl;
                            if (wl.entries.some({
                                "useWatchlists.useCallback[addTicker]": (e)=>e.ticker === result.ticker
                            }["useWatchlists.useCallback[addTicker]"])) return wl;
                            return {
                                ...wl,
                                isOpen: true,
                                entries: [
                                    ...wl.entries,
                                    {
                                        ticker: result.ticker,
                                        name: result.name,
                                        notes: ""
                                    }
                                ]
                            };
                        }
                    }["useWatchlists.useCallback[addTicker]"])
            }["useWatchlists.useCallback[addTicker]"]);
            fetch("/api/watchlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    watchlist_name: watchlistName,
                    ticker: result.ticker,
                    notes: ""
                })
            }).catch({
                "useWatchlists.useCallback[addTicker]": ()=>console.error("Failed to add ticker")
            }["useWatchlists.useCallback[addTicker]"]);
        }
    }["useWatchlists.useCallback[addTicker]"], []);
    const removeTicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[removeTicker]": (watchlistName, ticker)=>{
            setWatchlists({
                "useWatchlists.useCallback[removeTicker]": (prev)=>prev.map({
                        "useWatchlists.useCallback[removeTicker]": (wl)=>wl.name === watchlistName ? {
                                ...wl,
                                entries: wl.entries.filter({
                                    "useWatchlists.useCallback[removeTicker]": (e)=>e.ticker !== ticker
                                }["useWatchlists.useCallback[removeTicker]"])
                            } : wl
                    }["useWatchlists.useCallback[removeTicker]"])
            }["useWatchlists.useCallback[removeTicker]"]);
            fetch(`/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(watchlistName)}`, {
                method: "DELETE"
            }).catch({
                "useWatchlists.useCallback[removeTicker]": ()=>console.error("Failed to remove ticker")
            }["useWatchlists.useCallback[removeTicker]"]);
        }
    }["useWatchlists.useCallback[removeTicker]"], []);
    const updateNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[updateNote]": (ticker, note, watchlistNames)=>{
            setNotes({
                "useWatchlists.useCallback[updateNote]": (prev)=>({
                        ...prev,
                        [ticker]: note
                    })
            }["useWatchlists.useCallback[updateNote]"]);
            // Debounce the DB write
            if (noteDebounceRef.current[ticker]) {
                clearTimeout(noteDebounceRef.current[ticker]);
            }
            noteDebounceRef.current[ticker] = setTimeout({
                "useWatchlists.useCallback[updateNote]": ()=>{
                    // Update the note in every watchlist that contains this ticker
                    for (const name of watchlistNames){
                        fetch(`/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(name)}`, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                notes: note
                            })
                        }).catch({
                            "useWatchlists.useCallback[updateNote]": ()=>console.error("Failed to save note")
                        }["useWatchlists.useCallback[updateNote]"]);
                    }
                }
            }["useWatchlists.useCallback[updateNote]"], NOTE_DEBOUNCE_MS);
        }
    }["useWatchlists.useCallback[updateNote]"], []);
    const deleteNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWatchlists.useCallback[deleteNote]": (ticker, watchlistNames)=>{
            setNotes({
                "useWatchlists.useCallback[deleteNote]": (prev)=>{
                    const next = {
                        ...prev
                    };
                    delete next[ticker];
                    return next;
                }
            }["useWatchlists.useCallback[deleteNote]"]);
            // Cancel any pending debounce and write immediately
            if (noteDebounceRef.current[ticker]) {
                clearTimeout(noteDebounceRef.current[ticker]);
                delete noteDebounceRef.current[ticker];
            }
            for (const name of watchlistNames){
                fetch(`/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(name)}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        notes: ""
                    })
                }).catch({
                    "useWatchlists.useCallback[deleteNote]": ()=>console.error("Failed to delete note")
                }["useWatchlists.useCallback[deleteNote]"]);
            }
        }
    }["useWatchlists.useCallback[deleteNote]"], []);
    return {
        watchlists,
        notes,
        tickerMembership,
        toggleWatchlist,
        createWatchlist,
        renameWatchlist,
        deleteWatchlist,
        reorderWatchlists,
        addTicker,
        removeTicker,
        updateNote,
        deleteNote
    };
}
_s(useWatchlists, "c+zs/Ec8w+j4QPmM9E+W7QJPsKg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddWatchlistModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddWatchlistModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AddWatchlistModal({ onConfirm, onClose }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddWatchlistModal.useEffect": ()=>{
            inputRef.current?.focus();
        }
    }["AddWatchlistModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddWatchlistModal.useEffect": ()=>{
            const handleKeyDown = {
                "AddWatchlistModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["AddWatchlistModal.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "AddWatchlistModal.useEffect": ()=>document.removeEventListener("keydown", handleKeyDown)
            })["AddWatchlistModal.useEffect"];
        }
    }["AddWatchlistModal.useEffect"], [
        onClose
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const result = onConfirm(name);
        if (result !== null) {
            setError(result);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    zIndex: 1000
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1001,
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-m)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                    width: "320px",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "var(--inset-s) var(--inset-m)",
                            borderBottom: "1px solid var(--color-border)",
                            background: "var(--color-bg-secondary)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: "var(--body-1-size)",
                                    color: "var(--color-text-primary)"
                                },
                                children: "Add Watchlist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close",
                                style: {
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "var(--color-text-muted)",
                                    fontSize: "16px",
                                    lineHeight: 1,
                                    padding: "2px 4px",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            padding: "var(--inset-m)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "watchlist-name",
                                style: {
                                    display: "block",
                                    fontSize: "var(--body-2-size)",
                                    color: "var(--color-text-muted)",
                                    marginBottom: "var(--space-xs)"
                                },
                                children: "Watchlist name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "watchlist-name",
                                ref: inputRef,
                                type: "text",
                                value: name,
                                onChange: (e)=>{
                                    setName(e.target.value);
                                    setError(null);
                                },
                                placeholder: "e.g. Holdings",
                                style: {
                                    width: "100%",
                                    padding: "var(--inset-xs) var(--inset-s)",
                                    background: "var(--color-bg-secondary)",
                                    border: `1px solid ${error ? "var(--color-negative)" : "var(--color-border)"}`,
                                    borderRadius: "var(--radius-s)",
                                    color: "var(--color-text-primary)",
                                    fontSize: "var(--body-1-size)",
                                    outline: "none",
                                    boxSizing: "border-box"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "var(--space-xs)",
                                    fontSize: "var(--body-2-size)",
                                    color: "var(--color-negative)"
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    gap: "var(--space-xs)",
                                    marginTop: "var(--inset-m)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        style: {
                                            padding: "var(--inset-xs) var(--inset-m)",
                                            background: "transparent",
                                            border: "1px solid var(--color-border)",
                                            borderRadius: "var(--radius-s)",
                                            cursor: "pointer",
                                            fontSize: "var(--body-2-size)",
                                            color: "var(--color-text-primary)"
                                        },
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        style: {
                                            padding: "var(--inset-xs) var(--inset-m)",
                                            background: "var(--color-bg-secondary)",
                                            border: "1px solid var(--color-border)",
                                            borderRadius: "var(--radius-s)",
                                            cursor: "pointer",
                                            fontSize: "var(--body-2-size)",
                                            color: "var(--color-text-primary)",
                                            fontWeight: 600
                                        },
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AddWatchlistModal, "yqFLLWzq9y4/2M+1mBhmwQBhQCg=");
_c = AddWatchlistModal;
var _c;
__turbopack_context__.k.register(_c, "AddWatchlistModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ConfirmDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ConfirmDialog({ message, onConfirm, onCancel }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmDialog.useEffect": ()=>{
            const handleKeyDown = {
                "ConfirmDialog.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape") onCancel();
                }
            }["ConfirmDialog.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "ConfirmDialog.useEffect": ()=>document.removeEventListener("keydown", handleKeyDown)
            })["ConfirmDialog.useEffect"];
        }
    }["ConfirmDialog.useEffect"], [
        onCancel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onCancel,
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    zIndex: 1000
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ConfirmDialog.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1001,
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-m)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                    width: "320px",
                    padding: "var(--inset-m)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            margin: "0 0 var(--inset-m) 0",
                            fontSize: "var(--body-1-size)",
                            color: "var(--color-text-primary)",
                            lineHeight: 1.5
                        },
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConfirmDialog.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "flex-end",
                            gap: "var(--space-xs)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCancel,
                                style: {
                                    padding: "var(--inset-xs) var(--inset-m)",
                                    background: "transparent",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "var(--radius-s)",
                                    cursor: "pointer",
                                    fontSize: "var(--body-2-size)",
                                    color: "var(--color-text-primary)"
                                },
                                children: "No"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConfirmDialog.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onConfirm,
                                style: {
                                    padding: "var(--inset-xs) var(--inset-m)",
                                    background: "transparent",
                                    border: "1px solid var(--color-negative)",
                                    borderRadius: "var(--radius-s)",
                                    cursor: "pointer",
                                    fontSize: "var(--body-2-size)",
                                    color: "var(--color-negative)",
                                    fontWeight: 600
                                },
                                children: "Yes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConfirmDialog.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConfirmDialog.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConfirmDialog.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ConfirmDialog, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ConfirmDialog;
var _c;
__turbopack_context__.k.register(_c, "ConfirmDialog");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchResults.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChartPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWatchlists$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWatchlists.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddWatchlistModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmDialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const formatDate = (d)=>d.toISOString().split("T")[0];
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
    const [selectedSignal, setSelectedSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [liveMode, setLiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmDeleteName, setConfirmDeleteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { watchlists, notes: watchlistNotes, tickerMembership, toggleWatchlist, createWatchlist, renameWatchlist, deleteWatchlist, reorderWatchlists, addTicker, removeTicker, updateNote, deleteNote } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWatchlists$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchlists"])();
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
    // Keep a ref to the latest chartTabs so the liveMode effect never captures a stale value
    const chartTabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(chartTabs);
    chartTabsRef.current = chartTabs;
    // Re-fetch all open charts when liveMode is toggled (skip initial mount)
    const liveModeInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (liveModeInitialMount.current) {
                liveModeInitialMount.current = false;
                return;
            }
            const toDate = formatDate(new Date());
            chartTabsRef.current.forEach({
                "Home.useEffect": async (tab)=>{
                    try {
                        const priceRes = await fetch("/api/signals", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                signalName: "PriceSignal",
                                specification: [
                                    {
                                        name: "ticker",
                                        value: tab.ticker
                                    }
                                ],
                                ticker: tab.ticker,
                                exchange: tab.exchange,
                                from: tab.from,
                                to: toDate,
                                timeframe: tab.timeframe,
                                liveMode
                            })
                        });
                        const priceData = await priceRes.json();
                        const candles = priceData.candles || [];
                        const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                        const updatedSignals = await Promise.all(tab.signals.map({
                            "Home.useEffect": async (signal)=>{
                                try {
                                    const sigRes = await fetch("/api/signals", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify({
                                            signalName: signal.signalName,
                                            specification: signal.specification,
                                            ticker: tab.ticker,
                                            exchange: tab.exchange,
                                            from: tab.from,
                                            to: toDate,
                                            timeframe: tab.timeframe,
                                            liveMode
                                        })
                                    });
                                    const sigData = await sigRes.json();
                                    return {
                                        ...signal,
                                        signalHash: sigData.signalHash ?? signal.signalHash,
                                        timeSeries: sigData.timeSeries || signal.timeSeries
                                    };
                                } catch  {
                                    return signal;
                                }
                            }
                        }["Home.useEffect"]));
                        setChartTabs({
                            "Home.useEffect": (prev)=>prev.map({
                                    "Home.useEffect": (t)=>t.ticker === tab.ticker ? {
                                            ...t,
                                            data: candles,
                                            lastPrice,
                                            signals: updatedSignals
                                        } : t
                                }["Home.useEffect"])
                        }["Home.useEffect"]);
                    } catch  {
                        console.error(`Failed to re-fetch chart data for ${tab.ticker}`);
                    }
                }
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], [
        liveMode
    ]);
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
            try {
                const res = await fetch("/api/signals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        signalName: "PriceSignal",
                        specification: [
                            {
                                name: "ticker",
                                value: result.ticker
                            }
                        ],
                        ticker: result.ticker,
                        exchange: result.exchange,
                        from: formatDate(sixMonthsAgo),
                        to: formatDate(now),
                        liveMode
                    })
                });
                const data = await res.json();
                const candles = data.candles || [];
                const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                const newTab = {
                    ticker: result.ticker,
                    exchange: result.exchange,
                    name: result.name || result.ticker,
                    data: candles,
                    lastPrice,
                    timeframe: "DAY",
                    from: formatDate(sixMonthsAgo),
                    signals: []
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
        chartTabs,
        liveMode
    ]);
    const handleTimeframeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleTimeframeChange]": async (ticker, timeframe)=>{
            const tab = chartTabs.find({
                "Home.useCallback[handleTimeframeChange].tab": (t)=>t.ticker === ticker
            }["Home.useCallback[handleTimeframeChange].tab"]);
            if (!tab) return;
            // Calculate from date so the new timeframe shows the same number of bars
            const barCount = Math.max(tab.data.length, 15);
            const timeframePeriodMs = {
                TICK: 1000,
                SECOND: 1000,
                MINUTE: 60 * 1000,
                HOUR: 60 * 60 * 1000,
                DAY: 24 * 60 * 60 * 1000,
                WEEK: 7 * 24 * 60 * 60 * 1000,
                MONTH: 30 * 24 * 60 * 60 * 1000
            };
            const periodMs = timeframePeriodMs[timeframe] ?? 24 * 60 * 60 * 1000;
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
            const from = new Date(now.getTime() - barCount * periodMs);
            const fromStr = formatDate(from);
            const toStr = formatDate(now);
            try {
                const res = await fetch("/api/signals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        signalName: "PriceSignal",
                        specification: [
                            {
                                name: "ticker",
                                value: ticker
                            }
                        ],
                        ticker: tab.ticker,
                        exchange: tab.exchange,
                        from: fromStr,
                        to: toStr,
                        timeframe,
                        liveMode
                    })
                });
                const data = await res.json();
                const candles = data.candles || [];
                const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                const updatedSignals = await Promise.all(tab.signals.map({
                    "Home.useCallback[handleTimeframeChange]": async (signal)=>{
                        try {
                            const sigRes = await fetch("/api/signals", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    signalName: signal.signalName,
                                    specification: signal.specification,
                                    ticker: tab.ticker,
                                    exchange: tab.exchange,
                                    from: fromStr,
                                    to: toStr,
                                    timeframe,
                                    liveMode
                                })
                            });
                            const sigData = await sigRes.json();
                            return {
                                ...signal,
                                signalHash: sigData.signalHash ?? signal.signalHash,
                                timeSeries: sigData.timeSeries || signal.timeSeries
                            };
                        } catch  {
                            return signal;
                        }
                    }
                }["Home.useCallback[handleTimeframeChange]"]));
                setChartTabs({
                    "Home.useCallback[handleTimeframeChange]": (prev)=>prev.map({
                            "Home.useCallback[handleTimeframeChange]": (t)=>t.ticker === ticker ? {
                                    ...t,
                                    data: candles,
                                    lastPrice,
                                    signals: updatedSignals,
                                    timeframe,
                                    from: fromStr
                                } : t
                        }["Home.useCallback[handleTimeframeChange]"])
                }["Home.useCallback[handleTimeframeChange]"]);
            } catch  {
                console.error("Failed to fetch chart data for timeframe change");
            }
        }
    }["Home.useCallback[handleTimeframeChange]"], [
        chartTabs,
        liveMode
    ]);
    const handleTimespanChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleTimespanChange]": async (ticker, direction)=>{
            const tab = chartTabs.find({
                "Home.useCallback[handleTimespanChange].tab": (t)=>t.ticker === ticker
            }["Home.useCallback[handleTimespanChange].tab"]);
            if (!tab) return;
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
                        signalName: "PriceSignal",
                        specification: [
                            {
                                name: "ticker",
                                value: ticker
                            }
                        ],
                        ticker: tab.ticker,
                        exchange: tab.exchange,
                        from: newFromStr,
                        to: toDate,
                        timeframe: tab.timeframe,
                        liveMode
                    })
                });
                const data = await res.json();
                const candles = data.candles || [];
                const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                const updatedSignals = await Promise.all(tab.signals.map({
                    "Home.useCallback[handleTimespanChange]": async (signal)=>{
                        try {
                            const sigRes = await fetch("/api/signals", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    signalName: signal.signalName,
                                    specification: signal.specification,
                                    ticker: tab.ticker,
                                    exchange: tab.exchange,
                                    from: newFromStr,
                                    to: toDate,
                                    timeframe: tab.timeframe,
                                    liveMode
                                })
                            });
                            const sigData = await sigRes.json();
                            return {
                                ...signal,
                                signalHash: sigData.signalHash ?? signal.signalHash,
                                timeSeries: sigData.timeSeries || signal.timeSeries
                            };
                        } catch  {
                            return signal;
                        }
                    }
                }["Home.useCallback[handleTimespanChange]"]));
                setChartTabs({
                    "Home.useCallback[handleTimespanChange]": (prev)=>prev.map({
                            "Home.useCallback[handleTimespanChange]": (t)=>t.ticker === ticker ? {
                                    ...t,
                                    data: candles,
                                    lastPrice,
                                    signals: updatedSignals,
                                    from: newFromStr
                                } : t
                        }["Home.useCallback[handleTimespanChange]"])
                }["Home.useCallback[handleTimespanChange]"]);
            } catch  {
                console.error("Failed to fetch chart data for timespan change");
            }
        }
    }["Home.useCallback[handleTimespanChange]"], [
        chartTabs,
        liveMode
    ]);
    const handleAutoExpand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleAutoExpand]": async (ticker)=>{
            const tab = chartTabs.find({
                "Home.useCallback[handleAutoExpand].tab": (t)=>t.ticker === ticker
            }["Home.useCallback[handleAutoExpand].tab"]);
            if (!tab) return;
            const now = new Date();
            const currentFrom = new Date(tab.from);
            const spanMs = now.getTime() - currentFrom.getTime();
            const shiftMs = spanMs * 0.5;
            const newFrom = new Date(currentFrom.getTime() - shiftMs);
            const newFromStr = formatDate(newFrom);
            const toDate = formatDate(now);
            try {
                const priceRes = await fetch("/api/signals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        signalName: "PriceSignal",
                        specification: [
                            {
                                name: "ticker",
                                value: ticker
                            }
                        ],
                        ticker: tab.ticker,
                        exchange: tab.exchange,
                        from: newFromStr,
                        to: toDate,
                        timeframe: tab.timeframe,
                        liveMode
                    })
                });
                const priceData = await priceRes.json();
                const candles = priceData.candles || [];
                const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                const updatedSignals = await Promise.all(tab.signals.map({
                    "Home.useCallback[handleAutoExpand]": async (signal)=>{
                        try {
                            const res = await fetch("/api/signals", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    signalName: signal.signalName,
                                    specification: signal.specification,
                                    ticker: tab.ticker,
                                    exchange: tab.exchange,
                                    from: newFromStr,
                                    to: toDate,
                                    timeframe: tab.timeframe,
                                    liveMode
                                })
                            });
                            const data = await res.json();
                            return {
                                ...signal,
                                signalHash: data.signalHash ?? signal.signalHash,
                                timeSeries: data.timeSeries || signal.timeSeries
                            };
                        } catch  {
                            return signal;
                        }
                    }
                }["Home.useCallback[handleAutoExpand]"]));
                setChartTabs({
                    "Home.useCallback[handleAutoExpand]": (prev)=>prev.map({
                            "Home.useCallback[handleAutoExpand]": (t)=>t.ticker === ticker ? {
                                    ...t,
                                    data: candles,
                                    lastPrice,
                                    from: newFromStr,
                                    signals: updatedSignals
                                } : t
                        }["Home.useCallback[handleAutoExpand]"])
                }["Home.useCallback[handleAutoExpand]"]);
            } catch  {
                console.error("Failed to auto-expand chart data");
            }
        }
    }["Home.useCallback[handleAutoExpand]"], [
        chartTabs,
        liveMode
    ]);
    const handleAddSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleAddSignal]": async (ticker, signalName, specification)=>{
            const tab = chartTabs.find({
                "Home.useCallback[handleAddSignal].tab": (t)=>t.ticker === ticker
            }["Home.useCallback[handleAddSignal].tab"]);
            if (!tab) return "No active chart";
            const isDuplicate = tab.signals.some({
                "Home.useCallback[handleAddSignal].isDuplicate": (s)=>s.signalName === signalName && s.specification.length === specification.length && s.specification.every({
                        "Home.useCallback[handleAddSignal].isDuplicate": (existing, i)=>existing.name === specification[i].name && existing.value === specification[i].value
                    }["Home.useCallback[handleAddSignal].isDuplicate"])
            }["Home.useCallback[handleAddSignal].isDuplicate"]);
            if (isDuplicate) {
                return "This signal with the same parameters is already on the chart";
            }
            const now = new Date();
            const signalDef = availableSignals.find({
                "Home.useCallback[handleAddSignal].signalDef": (s)=>s.name === signalName
            }["Home.useCallback[handleAddSignal].signalDef"]);
            const parameterTypes = signalDef?.parameters;
            try {
                const res = await fetch("/api/signals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        signalName,
                        specification,
                        ticker: tab.ticker,
                        exchange: tab.exchange,
                        from: tab.from,
                        to: formatDate(now),
                        timeframe: tab.timeframe,
                        parameterTypes,
                        liveMode
                    })
                });
                const data = await res.json();
                if (!res.ok) {
                    return data.error || "Failed to fetch signal";
                }
                const newOverlay = {
                    signalName,
                    signalHash: data.signalHash,
                    specification,
                    timeSeries: data.timeSeries || [],
                    visualiseWith: signalDef?.visualiseWith ?? []
                };
                setChartTabs({
                    "Home.useCallback[handleAddSignal]": (prev)=>prev.map({
                            "Home.useCallback[handleAddSignal]": (t)=>t.ticker === ticker ? {
                                    ...t,
                                    signals: [
                                        ...t.signals,
                                        newOverlay
                                    ]
                                } : t
                        }["Home.useCallback[handleAddSignal]"])
                }["Home.useCallback[handleAddSignal]"]);
                return null;
            } catch  {
                return "Failed to fetch signal data";
            }
        }
    }["Home.useCallback[handleAddSignal]"], [
        chartTabs,
        availableSignals,
        liveMode
    ]);
    const handleTabClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleTabClose]": (ticker)=>{
            setChartTabs({
                "Home.useCallback[handleTabClose]": (prev)=>{
                    const remaining = prev.filter({
                        "Home.useCallback[handleTabClose].remaining": (t)=>t.ticker !== ticker
                    }["Home.useCallback[handleTabClose].remaining"]);
                    setActiveTab({
                        "Home.useCallback[handleTabClose]": (active)=>{
                            if (active !== ticker) return active;
                            if (remaining.length === 0) return null;
                            const closedIndex = prev.findIndex({
                                "Home.useCallback[handleTabClose].closedIndex": (t)=>t.ticker === ticker
                            }["Home.useCallback[handleTabClose].closedIndex"]);
                            return remaining[Math.min(closedIndex, remaining.length - 1)].ticker;
                        }
                    }["Home.useCallback[handleTabClose]"]);
                    return remaining;
                }
            }["Home.useCallback[handleTabClose]"]);
        }
    }["Home.useCallback[handleTabClose]"], []);
    const handleAddToWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleAddToWatchlist]": (result, watchlistName)=>{
            addTicker(watchlistName, result);
        }
    }["Home.useCallback[handleAddToWatchlist]"], [
        addTicker
    ]);
    const handleWatchlistSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleWatchlistSelect]": (entry)=>{
            handleSearchResultSelect({
                ticker: entry.ticker,
                name: entry.name,
                exchange: null
            });
        }
    }["Home.useCallback[handleWatchlistSelect]"], [
        handleSearchResultSelect
    ]);
    const handleNoteChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleNoteChange]": (ticker, note)=>{
            updateNote(ticker, note, Array.from(tickerMembership.get(ticker) ?? []));
        }
    }["Home.useCallback[handleNoteChange]"], [
        updateNote,
        tickerMembership
    ]);
    const handleNoteDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleNoteDelete]": (ticker)=>{
            deleteNote(ticker, Array.from(tickerMembership.get(ticker) ?? []));
        }
    }["Home.useCallback[handleNoteDelete]"], [
        deleteNote,
        tickerMembership
    ]);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Home.useCallback[handleDragEnd]": (event)=>{
            const { active, over } = event;
            if (!over || active.id === over.id) return;
            const oldIndex = watchlists.findIndex({
                "Home.useCallback[handleDragEnd].oldIndex": (wl)=>wl.name === active.id
            }["Home.useCallback[handleDragEnd].oldIndex"]);
            const newIndex = watchlists.findIndex({
                "Home.useCallback[handleDragEnd].newIndex": (wl)=>wl.name === over.id
            }["Home.useCallback[handleDragEnd].newIndex"]);
            if (oldIndex === -1 || newIndex === -1) return;
            const reordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayMove"])(watchlists, oldIndex, newIndex);
            reorderWatchlists(reordered);
        }
    }["Home.useCallback[handleDragEnd]"], [
        watchlists,
        reorderWatchlists
    ]);
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                liveMode: liveMode,
                onLiveModeChange: setLiveMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 667,
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
                                lineNumber: 680,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "var(--inset-s)",
                                    borderBottom: "1px solid var(--color-border)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowAddModal(true),
                                    style: {
                                        width: "100%",
                                        padding: "var(--inset-xs) var(--inset-s)",
                                        background: "transparent",
                                        border: "1px solid var(--color-border)",
                                        borderRadius: "var(--radius-s)",
                                        cursor: "pointer",
                                        fontSize: "var(--body-2-size)",
                                        color: "var(--color-text-primary)",
                                        textAlign: "center"
                                    },
                                    children: "+ Add Watchlist"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 690,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto"
                                },
                                children: watchlists.map((wl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Watchlist, {
                                        name: wl.name,
                                        items: wl.entries,
                                        isOpen: wl.isOpen,
                                        onToggle: ()=>toggleWatchlist(wl.name),
                                        onSelect: handleWatchlistSelect,
                                        onRemove: (ticker)=>removeTicker(wl.name, ticker),
                                        onDelete: ()=>{
                                            if (wl.entries.length > 0) {
                                                setConfirmDeleteName(wl.name);
                                            } else {
                                                deleteWatchlist(wl.name);
                                            }
                                        },
                                        onRename: (newName)=>renameWatchlist(wl.name, newName),
                                        notes: watchlistNotes,
                                        onNoteChange: handleNoteChange,
                                        onNoteDelete: handleNoteDelete
                                    }, wl.name, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 709,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 670,
                        columnNumber: 9
                    }, this),
                    showSearchResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        results: searchResults,
                        searchQuery: searchQuery,
                        isLoading: isSearching,
                        showTypeMore: searchQuery.length === 1,
                        watchlistNames: watchlists.map((wl)=>wl.name),
                        tickerMembership: tickerMembership,
                        onSelect: handleSearchResultSelect,
                        onAddToWatchlist: handleAddToWatchlist,
                        onClose: handleCloseSearch
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 737,
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
                            lineNumber: 761,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            tabs: chartTabs,
                            activeTab: activeTab,
                            onTabSelect: setActiveTab,
                            onTimeframeChange: handleTimeframeChange,
                            onTimespanChange: handleTimespanChange,
                            onAddSignal: handleAddSignal,
                            onAutoExpand: handleAutoExpand,
                            onTabClose: handleTabClose,
                            availableSignals: availableSignals,
                            selectedSignal: selectedSignal,
                            onSignalChange: setSelectedSignal
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 773,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 751,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 668,
                columnNumber: 7
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onConfirm: (name)=>{
                    const error = createWatchlist(name);
                    if (!error) setShowAddModal(false);
                    return error;
                },
                onClose: ()=>setShowAddModal(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 792,
                columnNumber: 9
            }, this),
            confirmDeleteName !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                message: "Watchlist not empty, are you sure you want to delete it?",
                onConfirm: ()=>{
                    deleteWatchlist(confirmDeleteName);
                    setConfirmDeleteName(null);
                },
                onCancel: ()=>setConfirmDeleteName(null)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 804,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 659,
        columnNumber: 5
    }, this);
}
_s(Home, "SWFwgEF6Zqb8BNTzrEXbnYiBfgo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWatchlists$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchlists"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_e9fb3c4a._.js.map