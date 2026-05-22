module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
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
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: {
                    display: "flex",
                    gap: "var(--space-xs)"
                },
                children: navItems.map((item)=>{
                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginLeft: "auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-xs)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/components/SearchBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SearchBar({ value, onChange, onFocus }) {
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "/" && document.activeElement !== inputRef.current) {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "var(--inset-s)",
            borderBottom: "1px solid var(--color-border)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "var(--color-text-muted)",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "11",
                            cy: "11",
                            r: "8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchBar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
}),
"[project]/src/components/NotesPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const PANEL_WIDTH = 280;
const PANEL_HEIGHT = 220;
function NotesPanel({ ticker, note, position, onChange, onClose, onDelete }) {
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Clamp position so the panel stays within the viewport
    const x = Math.min(position.x, window.innerWidth - PANEL_WIDTH - 8);
    const y = Math.min(position.y, window.innerHeight - PANEL_HEIGHT - 8);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        textareaRef.current?.focus();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") onClose();
        };
        const handleMouseDown = (e)=>{
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleMouseDown);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, [
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: panelRef,
        style: {
            position: "fixed",
            top: y,
            left: x,
            width: `${PANEL_WIDTH}px`,
            zIndex: 1000,
            background: "var(--color-bg)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-m)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "var(--inset-xs) var(--inset-s)",
                    borderBottom: "1px solid var(--color-border)",
                    background: "var(--color-bg-secondary)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "var(--body-1-size)",
                            fontWeight: 600,
                            color: "var(--color-text-primary)"
                        },
                        children: [
                            "Notes — ",
                            ticker
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NotesPanel.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Close notes",
                        onClick: onClose,
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
                        fileName: "[project]/src/components/NotesPanel.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NotesPanel.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: textareaRef,
                value: note,
                onChange: (e)=>onChange(ticker, e.target.value),
                placeholder: "Add notes for this ticker...",
                style: {
                    flex: 1,
                    resize: "none",
                    border: "none",
                    outline: "none",
                    padding: "var(--inset-s)",
                    fontSize: "var(--body-2-size)",
                    color: "var(--color-text-primary)",
                    background: "var(--color-bg)",
                    fontFamily: "inherit",
                    lineHeight: 1.5,
                    height: "130px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/NotesPanel.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "var(--inset-xs) var(--inset-s)",
                    borderTop: "1px solid var(--color-border)",
                    gap: "var(--space-xs)",
                    background: "var(--color-bg-secondary)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onDelete(ticker),
                    style: {
                        padding: "4px var(--inset-s)",
                        border: "1px solid var(--color-border)",
                        borderRadius: "var(--radius-s)",
                        background: "transparent",
                        cursor: "pointer",
                        fontSize: "var(--body-2-size)",
                        color: "var(--color-negative)"
                    },
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/src/components/NotesPanel.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NotesPanel.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NotesPanel.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Watchlist.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Watchlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NotesPanel.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Watchlist({ name, items, isOpen, onToggle, onSelect, onRemove, onDelete, onRename, notes, onNoteChange, onNoteDelete, dragHandleProps }) {
    const [hoveredTicker, setHoveredTicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [headerHovered, setHeaderHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notesPanel, setNotesPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRenaming, setIsRenaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [renameValue, setRenameValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [renameError, setRenameError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const renameInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isRenaming) {
            renameInputRef.current?.focus();
            renameInputRef.current?.select();
        }
    }, [
        isRenaming
    ]);
    const startRenaming = ()=>{
        setRenameValue(name);
        setRenameError(null);
        setIsRenaming(true);
    };
    const commitRename = ()=>{
        const trimmed = renameValue.trim();
        if (trimmed === name) {
            setIsRenaming(false);
            return;
        }
        const error = onRename(trimmed);
        if (error) {
            setRenameError(error);
            renameInputRef.current?.focus();
        } else {
            setIsRenaming(false);
        }
    };
    const cancelRename = ()=>{
        setIsRenaming(false);
        setRenameError(null);
    };
    const handleRenameKeyDown = (e)=>{
        if (e.key === "Enter") commitRename();
        if (e.key === "Escape") cancelRename();
    };
    const handleContextMenu = (e, ticker)=>{
        e.preventDefault();
        setNotesPanel({
            ticker,
            x: e.clientX,
            y: e.clientY
        });
    };
    const handleNoteDelete = (ticker)=>{
        onNoteDelete(ticker);
        setNotesPanel(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            borderBottom: "1px solid var(--color-border)",
            flexShrink: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: ()=>setHeaderHovered(true),
                onMouseLeave: ()=>setHeaderHovered(false),
                style: {
                    display: "flex",
                    alignItems: "center",
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ...dragHandleProps,
                        "aria-label": "Drag to reorder",
                        style: {
                            flexShrink: 0,
                            padding: "var(--inset-s) 0 var(--inset-s) var(--inset-s)",
                            background: "transparent",
                            border: "none",
                            cursor: "grab",
                            color: "var(--color-text-muted)",
                            display: "flex",
                            alignItems: "center",
                            opacity: headerHovered ? 0.6 : 0,
                            transition: "opacity 0.15s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "currentColor",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "4",
                                    cy: "2",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8",
                                    cy: "2",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "4",
                                    cy: "6",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8",
                                    cy: "6",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "4",
                                    cy: "10",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8",
                                    cy: "10",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Watchlist.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    isRenaming ? /* Inline rename input */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            padding: "var(--inset-xs) var(--inset-xs)",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: renameInputRef,
                                value: renameValue,
                                onChange: (e)=>{
                                    setRenameValue(e.target.value);
                                    setRenameError(null);
                                },
                                onKeyDown: handleRenameKeyDown,
                                onBlur: commitRename,
                                style: {
                                    width: "100%",
                                    padding: "2px var(--inset-xs)",
                                    background: "var(--color-bg-secondary)",
                                    border: `1px solid ${renameError ? "var(--color-negative)" : "var(--color-border)"}`,
                                    borderRadius: "var(--radius-s)",
                                    color: "var(--color-text-primary)",
                                    fontSize: "var(--body-1-size)",
                                    fontWeight: 600,
                                    outline: "none",
                                    boxSizing: "border-box"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            renameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "var(--body-2-size)",
                                    color: "var(--color-negative)",
                                    marginTop: "2px"
                                },
                                children: renameError
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 156,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this) : /* Toggle button — name + chevron */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggle,
                        style: {
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "var(--inset-s) var(--inset-xs) var(--inset-s) var(--inset-xs)",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            minWidth: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "heading-3",
                                style: {
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                style: {
                                    color: "var(--color-text-muted)",
                                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "transform 0.2s",
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "6 9 12 15 18 9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    !isRenaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": `Rename watchlist ${name}`,
                        onClick: startRenaming,
                        style: {
                            flexShrink: 0,
                            padding: "var(--inset-s) var(--inset-xs)",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--color-text-muted)",
                            display: "flex",
                            alignItems: "center",
                            opacity: headerHovered ? 0.7 : 0,
                            transition: "opacity 0.15s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Watchlist.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this),
                    !isRenaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": `Delete watchlist ${name}`,
                        onClick: onDelete,
                        style: {
                            flexShrink: 0,
                            padding: "var(--inset-s) var(--inset-s) var(--inset-s) var(--inset-xs)",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--color-text-muted)",
                            fontSize: "16px",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            opacity: headerHovered ? 1 : 0,
                            transition: "opacity 0.15s"
                        },
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Watchlist.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "var(--inset-s) var(--inset-s) var(--inset-m)",
                            textAlign: "center",
                            color: "var(--color-text-muted)",
                            fontSize: "var(--body-2-size)"
                        },
                        children: "Right-click a search result to add it here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 259,
                        columnNumber: 13
                    }, this),
                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onContextMenu: (e)=>handleContextMenu(e, item.ticker),
                            style: {
                                display: "flex",
                                alignItems: "center",
                                background: hoveredTicker === item.ticker ? "var(--color-bg-secondary)" : "transparent",
                                transition: "background 0.15s"
                            },
                            onMouseEnter: ()=>setHoveredTicker(item.ticker),
                            onMouseLeave: ()=>setHoveredTicker(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSelect(item),
                                    style: {
                                        flex: 1,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        padding: "10px var(--inset-xs) 10px var(--inset-s)",
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        minWidth: 0
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "var(--space-xs)",
                                                width: "100%"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontWeight: 600,
                                                        fontSize: "var(--body-1-size)",
                                                        color: "var(--color-text-primary)",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap"
                                                    },
                                                    children: item.ticker
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Watchlist.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 19
                                                }, this),
                                                notes[item.ticker] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "10",
                                                    height: "10",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    style: {
                                                        color: "var(--color-text-muted)",
                                                        flexShrink: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Watchlist.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "14 2 14 8 20 8",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Watchlist.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Watchlist.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 301,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "body-2",
                                            style: {
                                                color: "var(--color-text-muted)",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "nowrap",
                                                width: "100%"
                                            },
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 286,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": `Remove ${item.ticker} from watchlist`,
                                    onClick: ()=>onRemove(item.ticker),
                                    style: {
                                        flexShrink: 0,
                                        padding: "0 var(--inset-s) 0 var(--inset-xs)",
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "var(--color-text-muted)",
                                        fontSize: "14px",
                                        lineHeight: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        opacity: hoveredTicker === item.ticker ? 1 : 0,
                                        transition: "opacity 0.15s"
                                    },
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 352,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.ticker, true, {
                            fileName: "[project]/src/components/Watchlist.tsx",
                            lineNumber: 271,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Watchlist.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, this),
            notesPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ticker: notesPanel.ticker,
                note: notes[notesPanel.ticker] ?? "",
                position: {
                    x: notesPanel.x,
                    y: notesPanel.y
                },
                onChange: onNoteChange,
                onClose: ()=>setNotesPanel(null),
                onDelete: handleNoteDelete
            }, void 0, false, {
                fileName: "[project]/src/components/Watchlist.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Watchlist.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SortableWatchlistItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SortableWatchlistItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Watchlist.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SortableWatchlistItem({ id, ...watchlistProps }) {
    const { setNodeRef, transform, transition, attributes, listeners } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSortable"])({
        id
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: {
            transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
            transition
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...watchlistProps,
            dragHandleProps: {
                ...attributes,
                ...listeners
            }
        }, void 0, false, {
            fileName: "[project]/src/components/SortableWatchlistItem.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SortableWatchlistItem.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SearchResults.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SearchResults({ results, searchQuery, isLoading, showTypeMore, watchlistNames, tickerMembership, onSelect, onAddToWatchlist, onClose }) {
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const contextMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu) return;
        const handleClickOutside = (e)=>{
            if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
                setContextMenu(null);
            }
        };
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") setContextMenu(null);
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "var(--inset-s)",
                    borderBottom: "1px solid var(--color-border)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading-3",
                                children: "Search Results"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchResults.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflow: "auto"
                },
                children: [
                    showTypeMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    !showTypeMore && results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "baseline",
                                            gap: "var(--space-s)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontWeight: 600,
                                                    fontSize: "var(--body-1-size)",
                                                    color: "var(--color-text-primary)"
                                                },
                                                children: result.ticker
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SearchResults.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            result.exchange_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "body-2",
                                                style: {
                                                    color: "var(--color-text-muted)"
                                                },
                                                children: result.exchange_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SearchResults.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SearchResults.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "body-2",
                                        style: {
                                            color: "var(--color-text-muted)"
                                        },
                                        children: result.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SearchResults.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        }, result.exchange ? `${result.ticker}:${result.exchange}` : result.ticker, false, {
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
            contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 225,
                        columnNumber: 11
                    }, this),
                    watchlistNames.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "10px var(--inset-m)",
                            fontSize: "var(--body-1-size)",
                            color: "var(--color-text-muted)",
                            userSelect: "none"
                        },
                        children: "no watchlists"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, this) : watchlistNames.map((wlName)=>{
                        const alreadyIn = tickerMembership.get(contextMenu.result.ticker)?.has(wlName) ?? false;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 253,
                            columnNumber: 17
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchResults.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/CandlestickChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CandlestickChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lightweight-charts/dist/lightweight-charts.development.mjs [app-ssr] (ecmascript)");
"use client";
;
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
const EMPTY_OVERLAYS = [];
function CandlestickChart({ data, timeframe = "DAY", overlays = EMPTY_OVERLAYS, onExpandNeeded, onVisibleLogicalRangeChange, visibleLogicalRange, onCrosshairXChange, crosshairXFraction, referenceTimePoints, drawings, onDrawingPriceChange, onDrawingDelete }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const syncLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const candlestickSeriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const expandingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const suppressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const syncingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const debounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suppressTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onExpandNeededRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onExpandNeeded);
    onExpandNeededRef.current = onExpandNeeded;
    const onVisibleLogicalRangeChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onVisibleLogicalRangeChange);
    onVisibleLogicalRangeChangeRef.current = onVisibleLogicalRangeChange;
    const onCrosshairXChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onCrosshairXChange);
    onCrosshairXChangeRef.current = onCrosshairXChange;
    const isCrosshairSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const overlayLookupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Drawings
    const drawingsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    drawingsRef.current = drawings ?? [];
    const [lineYPositions, setLineYPositions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const updateLinePositionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const draggingIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onDrawingPriceChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onDrawingPriceChange);
    onDrawingPriceChangeRef.current = onDrawingPriceChange;
    const onDrawingDeleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onDrawingDelete);
    onDrawingDeleteRef.current = onDrawingDelete;
    const [contextMenu, setContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChart"])(containerRef.current, {
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
        const candlestickSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandlestickSeries"], {
            upColor: "hsl(145, 65%, 45%)",
            downColor: "hsl(0, 70%, 55%)",
            borderUpColor: "hsl(145, 65%, 40%)",
            borderDownColor: "hsl(0, 70%, 50%)",
            wickUpColor: "hsl(145, 65%, 40%)",
            wickDownColor: "hsl(0, 70%, 50%)"
        });
        candlestickSeriesRef.current = candlestickSeries;
        if (data.length > 0) {
            const chartData = data.map((d)=>({
                    time: d.time,
                    open: d.open,
                    high: d.high,
                    low: d.low,
                    close: d.close
                }));
            candlestickSeries.setData(chartData);
        }
        const updateLinePositions = ()=>{
            const positions = {};
            for (const d of drawingsRef.current){
                const y = candlestickSeries.priceToCoordinate(d.price);
                positions[d.id] = y !== null ? y : null;
            }
            setLineYPositions({
                ...positions
            });
        };
        updateLinePositionsRef.current = updateLinePositions;
        const handleVisibleRangeChange = (logicalRange)=>{
            updateLinePositions();
            if (syncingRef.current) return;
            if (onVisibleLogicalRangeChangeRef.current) {
                onVisibleLogicalRangeChangeRef.current(logicalRange);
            }
            if (!logicalRange || expandingRef.current || suppressRef.current || !candlestickSeriesRef.current) return;
            const barsInfo = candlestickSeriesRef.current.barsInLogicalRange(logicalRange);
            if (barsInfo && barsInfo.barsBefore < 0) {
                if (debounceRef.current) clearTimeout(debounceRef.current);
                debounceRef.current = setTimeout(()=>{
                    if (onExpandNeededRef.current && !expandingRef.current) {
                        expandingRef.current = true;
                        onExpandNeededRef.current();
                    }
                }, 500);
            }
        };
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
                const lineSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                    color,
                    lineWidth: 2
                });
                const lineData = overlay.timeSeries.map((pt)=>({
                        time: pt.time,
                        value: pt.values[key] ?? 0
                    }));
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
            const refSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: "transparent",
                lastValueVisible: false,
                priceLineVisible: false,
                crosshairMarkerVisible: false,
                priceScaleId: "_ref"
            });
            refSeries.priceScale().applyOptions({
                visible: false
            });
            refSeries.setData(referenceTimePoints.map((t)=>({
                    time: t,
                    value: 0
                })));
        }
        // Tooltip on crosshair move
        const tooltip = tooltipRef.current;
        const syncLine = syncLineRef.current;
        const handleCrosshairMove = (param)=>{
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
                const fmt = (v)=>v.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
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
        };
        chart.subscribeCrosshairMove(handleCrosshairMove);
        chart.timeScale().fitContent();
        // Suppress auto-expand detection while the chart settles after fitContent
        suppressRef.current = true;
        suppressTimerRef.current = setTimeout(()=>{
            suppressRef.current = false;
        }, 1000);
        return ()=>{
            if (debounceRef.current) clearTimeout(debounceRef.current);
            if (suppressTimerRef.current) clearTimeout(suppressTimerRef.current);
            chart.unsubscribeCrosshairMove(handleCrosshairMove);
            chart.timeScale().unsubscribeVisibleLogicalRangeChange(handleVisibleRangeChange);
            chart.remove();
            chartRef.current = null;
            candlestickSeriesRef.current = null;
            updateLinePositionsRef.current = null;
            expandingRef.current = false;
            suppressRef.current = false;
        };
    }, [
        data,
        timeframe,
        overlays,
        referenceTimePoints
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!chartRef.current || !visibleLogicalRange) return;
        syncingRef.current = true;
        chartRef.current.timeScale().setVisibleLogicalRange(visibleLogicalRange);
        requestAnimationFrame(()=>{
            syncingRef.current = false;
            updateLinePositionsRef.current?.();
        });
    }, [
        visibleLogicalRange
    ]);
    // Recompute line Y positions whenever drawings change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        updateLinePositionsRef.current?.();
    }, [
        drawings
    ]);
    // Document-level drag handlers for horizontal line drawings (registered once)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            const id = draggingIdRef.current;
            if (!id || !containerRef.current || !candlestickSeriesRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const y = e.clientY - rect.top;
            const price = candlestickSeriesRef.current.coordinateToPrice(y);
            if (price !== null) {
                onDrawingPriceChangeRef.current?.(id, price);
            }
        };
        const handleMouseUp = ()=>{
            if (draggingIdRef.current) {
                draggingIdRef.current = null;
                document.body.style.cursor = "";
            }
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
    // Close context menu on any outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu) return;
        const close = ()=>setContextMenu(null);
        document.addEventListener("click", close);
        return ()=>document.removeEventListener("click", close);
    }, [
        contextMenu
    ]);
    // Sync crosshair from other charts using a custom vertical line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        crosshairXFraction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    lineNumber: 471,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 458,
                columnNumber: 7
            }, this),
            (drawings ?? []).map((d)=>{
                const y = lineYPositions[d.id];
                if (y == null) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onMouseDown: (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        draggingIdRef.current = d.id;
                        document.body.style.cursor = "ns-resize";
                    },
                    onContextMenu: (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        setContextMenu({
                            id: d.id,
                            x: e.clientX,
                            y: e.clientY
                        });
                    },
                    style: {
                        position: "absolute",
                        top: `${y - 6}px`,
                        left: 0,
                        right: 0,
                        height: "13px",
                        cursor: "ns-resize",
                        zIndex: 30
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: "6px",
                                left: 0,
                                right: 0,
                                height: "1px",
                                background: "#000",
                                pointerEvents: "none"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/CandlestickChart.tsx",
                            lineNumber: 515,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-testid": `drawing-label-${d.id}`,
                            style: {
                                position: "absolute",
                                top: "50%",
                                right: PRICE_SCALE_MIN_WIDTH + 4,
                                transform: "translateY(-50%)",
                                background: "hsla(220, 13%, 18%, 0.92)",
                                color: "#fff",
                                fontSize: "11px",
                                padding: "2px 5px",
                                borderRadius: "3px",
                                pointerEvents: "none",
                                whiteSpace: "nowrap",
                                userSelect: "none"
                            },
                            children: d.price.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/CandlestickChart.tsx",
                            lineNumber: 526,
                            columnNumber: 13
                        }, this)
                    ]
                }, d.id, true, {
                    fileName: "[project]/src/components/CandlestickChart.tsx",
                    lineNumber: 492,
                    columnNumber: 11
                }, this);
            }),
            contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: contextMenu.y,
                    left: contextMenu.x,
                    zIndex: 1000,
                    background: "var(--color-bg)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-s)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                    overflow: "hidden",
                    minWidth: "100px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onDrawingDeleteRef.current?.(contextMenu.id);
                        setContextMenu(null);
                    },
                    style: {
                        display: "block",
                        width: "100%",
                        padding: "var(--inset-xs) var(--inset-s)",
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        textAlign: "left",
                        fontSize: "var(--body-2-size)",
                        color: "var(--color-red-60)"
                    },
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.background = "var(--color-bg-secondary)";
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.background = "transparent";
                    },
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/src/components/CandlestickChart.tsx",
                    lineNumber: 564,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 550,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 592,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CandlestickChart.tsx",
        lineNumber: 449,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/VolumeChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VolumeChart,
    "formatVolume",
    ()=>formatVolume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lightweight-charts/dist/lightweight-charts.development.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/** Fixed right price scale width — must match CandlestickChart so time axes align. */ const PRICE_SCALE_MIN_WIDTH = 80;
const VOLUME_COLOR_UP = "hsla(145, 65%, 45%, 0.7)";
const VOLUME_COLOR_DOWN = "hsla(0, 70%, 55%, 0.7)";
const VOLUME_COLOR_FLAT = "hsla(220, 10%, 20%, 0.7)";
const INTRADAY_TIMEFRAMES = new Set([
    "TICK",
    "SECOND",
    "MINUTE",
    "HOUR"
]);
function formatVolume(v) {
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`;
    if (v >= 1_000) return `${(v / 1_000).toFixed(1)}K`;
    return String(Math.round(v));
}
function VolumeChart({ data, timeframe = "DAY", visibleLogicalRange, onCrosshairXChange, crosshairXFraction, referenceTimePoints }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const syncLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const volumeSeriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const syncingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isCrosshairSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onCrosshairXChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onCrosshairXChange);
    onCrosshairXChangeRef.current = onCrosshairXChange;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current) return;
        const chart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createChart"])(containerRef.current, {
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
                    bottom: 0
                }
            },
            timeScale: {
                borderColor: "hsl(220, 13%, 90%)",
                timeVisible: INTRADAY_TIMEFRAMES.has(timeframe),
                secondsVisible: timeframe === "SECOND" || timeframe === "TICK"
            }
        });
        chartRef.current = chart;
        const volumeSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HistogramSeries"], {
            priceLineVisible: false,
            lastValueVisible: false
        });
        volumeSeries.priceScale().applyOptions({
            scaleMargins: {
                top: 0.1,
                bottom: 0
            },
            // @ts-expect-error priceFormatter is a valid option in lightweight-charts v5
            priceFormatter: formatVolume
        });
        if (data.length > 0) {
            volumeSeries.setData(data.map((d)=>({
                    time: d.time,
                    value: d.volume ?? 0,
                    color: d.close > d.open ? VOLUME_COLOR_UP : d.close < d.open ? VOLUME_COLOR_DOWN : VOLUME_COLOR_FLAT
                })));
        }
        volumeSeriesRef.current = volumeSeries;
        // Hidden reference series to unify time scale with other charts
        if (referenceTimePoints && referenceTimePoints.length > 0) {
            const refSeries = chart.addSeries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lightweight$2d$charts$2f$dist$2f$lightweight$2d$charts$2e$development$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineSeries"], {
                color: "transparent",
                lastValueVisible: false,
                priceLineVisible: false,
                crosshairMarkerVisible: false,
                priceScaleId: "_ref"
            });
            refSeries.priceScale().applyOptions({
                visible: false
            });
            refSeries.setData(referenceTimePoints.map((t)=>({
                    time: t,
                    value: 0
                })));
        }
        // Tooltip
        const tooltip = tooltipRef.current;
        const syncLine = syncLineRef.current;
        const handleCrosshairMove = (param)=>{
            if (!tooltip) return;
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
            if (syncLine) syncLine.style.display = "none";
            if (!param.time || !param.point || param.point.x < 0 || param.point.y < 0) {
                tooltip.style.display = "none";
                return;
            }
            const volData = param.seriesData.get(volumeSeries);
            if (volData && "value" in volData && (volData.value ?? 0) > 0) {
                tooltip.innerHTML = `<div style="display:flex;justify-content:space-between;gap:12px">` + `<span style="color:hsl(220,10%,50%)">V</span>` + `<span>${formatVolume(volData.value)}</span></div>`;
                tooltip.style.display = "block";
                const container = containerRef.current;
                if (container) {
                    const cw = container.clientWidth;
                    const tooltipWidth = 140;
                    const tooltipMargin = 12;
                    let left = param.point.x + tooltipMargin;
                    if (left + tooltipWidth > cw) left = param.point.x - tooltipWidth - tooltipMargin;
                    tooltip.style.left = `${Math.max(0, left)}px`;
                    tooltip.style.top = `${Math.max(0, param.point.y + tooltipMargin)}px`;
                }
            } else {
                tooltip.style.display = "none";
            }
        };
        chart.subscribeCrosshairMove(handleCrosshairMove);
        chart.timeScale().fitContent();
        return ()=>{
            chart.unsubscribeCrosshairMove(handleCrosshairMove);
            chart.remove();
            chartRef.current = null;
            volumeSeriesRef.current = null;
        };
    }, [
        data,
        timeframe,
        referenceTimePoints
    ]);
    // Sync logical range from main chart
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!chartRef.current || !visibleLogicalRange) return;
        syncingRef.current = true;
        chartRef.current.timeScale().setVisibleLogicalRange(visibleLogicalRange);
        requestAnimationFrame(()=>{
            syncingRef.current = false;
        });
    }, [
        visibleLogicalRange
    ]);
    // Sync crosshair from other charts via a custom vertical line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const chart = chartRef.current;
        const syncLine = syncLineRef.current;
        if (!chart || !syncLine) return;
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
        syncLine.style.display = "block";
        syncLine.style.left = `${crosshairXFraction.x}px`;
        if (tooltip) tooltip.style.display = "none";
    }, [
        crosshairXFraction
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                style: {
                    width: "100%",
                    height: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/VolumeChart.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                }
            }, void 0, false, {
                fileName: "[project]/src/components/VolumeChart.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tooltipRef,
                style: {
                    display: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 20,
                    pointerEvents: "none",
                    minWidth: "100px",
                    maxWidth: "140px",
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
                fileName: "[project]/src/components/VolumeChart.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VolumeChart.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SignalConfigPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignalConfigPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
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
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const initial = {};
        for (const p of signal.parameters){
            if (p.name === "ticker") initial[p.name] = defaultTicker;
            else if (p.name === "exchange") initial[p.name] = defaultExchange ?? "";
            else initial[p.name] = "";
        }
        return initial;
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: "var(--inset-m)",
            borderBottom: "1px solid var(--color-border-light)",
            background: "var(--color-bg-secondary)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "var(--space-s)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
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
                    signal.parameters.map((param)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "2px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                errors[param.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            duplicateMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/components/ChartTabBar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeBtn": "ChartTabBar-module__UmGooa__closeBtn",
  "pill": "ChartTabBar-module__UmGooa__pill",
  "pillDropdown": "ChartTabBar-module__UmGooa__pillDropdown",
  "pillDropdownItem": "ChartTabBar-module__UmGooa__pillDropdownItem",
  "tab": "ChartTabBar-module__UmGooa__tab",
  "tabActive": "ChartTabBar-module__UmGooa__tabActive",
  "tabBar": "ChartTabBar-module__UmGooa__tabBar",
  "tabBtn": "ChartTabBar-module__UmGooa__tabBtn",
  "tabBtnActive": "ChartTabBar-module__UmGooa__tabBtnActive",
  "ticker": "ChartTabBar-module__UmGooa__ticker",
  "tickerActive": "ChartTabBar-module__UmGooa__tickerActive",
});
}),
"[project]/src/components/ChartPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChartPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CandlestickChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VolumeChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VolumeChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SignalConfigPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ChartTabBar.module.css [app-ssr] (css module)");
"use client";
;
;
;
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
const TIMEFRAMES = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMEFRAME_LABELS"]);
const DEFAULT_MAIN_HEIGHT = 400;
const DEFAULT_SUB_HEIGHT = 200;
const DEFAULT_VOLUME_HEIGHT = 120;
const MIN_CHART_HEIGHT = 100;
function ResizeHandle({ onDrag }) {
    const draggingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const onDragRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onDrag);
    onDragRef.current = onDrag;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (e)=>{
            if (!draggingRef.current) return;
            const delta = e.clientY - lastYRef.current;
            lastYRef.current = e.clientY;
            onDragRef.current(delta);
        };
        const handleMouseUp = ()=>{
            if (draggingRef.current) {
                draggingRef.current = false;
                document.body.style.cursor = "";
                document.body.style.userSelect = "";
            }
        };
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "1px",
                    background: "var(--color-border)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChartPanel.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
function ChartPanel({ tabs, activeTab, onTabSelect, onTimeframeChange, onTimespanChange, onAddSignal, onAutoExpand, onTabClose, onRemoveSubChart, availableSignals, selectedSignal, onSignalChange, drawingsPerTab, onDrawingsChange }) {
    const [showConfigPanel, setShowConfigPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [duplicateMessage, setDuplicateMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mainChartHeight, setMainChartHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_MAIN_HEIGHT);
    // Tab overflow: measure how many tabs fit at minimum width
    const PILL_RESERVE = 44;
    const MIN_TAB_WIDTH = 52;
    const tabBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(tabs.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = tabBarRef.current;
        if (!el) return;
        const measure = ()=>{
            const width = el.clientWidth;
            // clientWidth is 0 in JSDOM / before layout — show all tabs
            if (width === 0) {
                setVisibleCount(tabs.length);
                return;
            }
            const totalFit = Math.floor(width / MIN_TAB_WIDTH);
            if (tabs.length <= totalFit) {
                setVisibleCount(tabs.length);
            } else {
                setVisibleCount(Math.max(1, Math.floor((width - PILL_RESERVE) / MIN_TAB_WIDTH)));
            }
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        return ()=>ro.disconnect();
    }, [
        tabs.length
    ]);
    // Compute visible window: preserve tab order, shift so active tab is last visible slot
    const activeIndex = Math.max(0, tabs.findIndex((t)=>t.id === activeTab));
    const windowEnd = Math.min(tabs.length, Math.max(visibleCount, activeIndex + 1));
    const windowStart = Math.max(0, windowEnd - visibleCount);
    const visibleTabs = tabs.slice(windowStart, windowEnd);
    const hiddenTabs = [
        ...tabs.slice(0, windowStart),
        ...tabs.slice(windowEnd)
    ];
    const [volumeChartHeight, setVolumeChartHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_VOLUME_HEIGHT);
    const [subChartHeights, setSubChartHeights] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [sharedLogicalRange, setSharedLogicalRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sharedCrosshairX, setSharedCrosshairX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [volumeVisiblePerTab, setVolumeVisiblePerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // +N overflow pill dropdown
    const pillBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pillMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pillOpen, setPillOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pillPos, setPillPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        right: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!pillOpen) return;
        const onDown = (e)=>{
            if (pillMenuRef.current && !pillMenuRef.current.contains(e.target) && pillBtnRef.current && !pillBtnRef.current.contains(e.target)) {
                setPillOpen(false);
            }
        };
        const onKey = (e)=>{
            if (e.key === "Escape") setPillOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        document.addEventListener("keydown", onKey);
        return ()=>{
            document.removeEventListener("mousedown", onDown);
            document.removeEventListener("keydown", onKey);
        };
    }, [
        pillOpen
    ]);
    const handlePillClick = ()=>{
        if (!pillBtnRef.current) return;
        const rect = pillBtnRef.current.getBoundingClientRect();
        setPillPos({
            top: rect.bottom,
            right: window.innerWidth - rect.right
        });
        setPillOpen((prev)=>!prev);
    };
    const handleHiddenTabSelect = (tabId)=>{
        setPillOpen(false);
        onTabSelect(tabId);
    };
    const activeChart = tabs.find((t)=>t.id === activeTab);
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
        const errorMsg = await onAddSignal(activeChart.id, signalName, specification);
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
    const hasVolume = (activeChart?.data ?? []).some((d)=>(d.volume ?? 0) > 0);
    const isVolumeVisible = hasVolume && (volumeVisiblePerTab[activeTab ?? ""] ?? true);
    const handleToggleVolume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setVolumeVisiblePerTab((prev)=>({
                ...prev,
                [activeTab ?? ""]: !(prev[activeTab ?? ""] ?? true)
            }));
    }, [
        activeTab
    ]);
    const handleAddDrawing = (type)=>{
        if (!activeChart || type !== "horizontal-line") return;
        const data = activeChart.data;
        let midPrice = activeChart.lastPrice;
        if (data.length > 0) {
            const maxHigh = Math.max(...data.map((d)=>d.high));
            const minLow = Math.min(...data.map((d)=>d.low));
            midPrice = (maxHigh + minLow) / 2;
        }
        const newLine = {
            id: `hline-${Date.now()}`,
            price: midPrice
        };
        const current = drawingsPerTab[activeChart.id] ?? [];
        onDrawingsChange(activeChart.id, [
            ...current,
            newLine
        ]);
    };
    const handleDrawingPriceChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, price)=>{
        if (!activeChart) return;
        const current = drawingsPerTab[activeChart.id] ?? [];
        onDrawingsChange(activeChart.id, current.map((d)=>d.id === id ? {
                ...d,
                price
            } : d));
    }, [
        activeChart,
        drawingsPerTab,
        onDrawingsChange
    ]);
    const handleDrawingDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        if (!activeChart) return;
        const current = drawingsPerTab[activeChart.id] ?? [];
        onDrawingsChange(activeChart.id, current.filter((d)=>d.id !== id));
    }, [
        activeChart,
        drawingsPerTab,
        onDrawingsChange
    ]);
    const handleExpandNeeded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (activeChart) onAutoExpand(activeChart.id);
    }, [
        onAutoExpand,
        activeChart
    ]);
    const activeDrawings = drawingsPerTab[activeTab ?? ""] ?? [];
    const mainOverlays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>getMainChartOverlays(activeChart?.signals ?? []), [
        activeChart?.signals
    ]);
    const subCharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>computeSubCharts(activeChart?.signals ?? []), [
        activeChart?.signals
    ]);
    // Compute the union of all time points (candle data + all signal overlays)
    // so that every chart has the same bar count and time-to-pixel mapping.
    const allTimePoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const timeSet = new Set();
        for (const d of activeChart?.data ?? []){
            timeSet.add(d.time);
        }
        for (const signal of activeChart?.signals ?? []){
            for (const pt of signal.timeSeries){
                timeSet.add(pt.time);
            }
        }
        return Array.from(timeSet).sort((a, b)=>{
            if (typeof a === "number" && typeof b === "number") return a - b;
            return String(a).localeCompare(String(b));
        });
    }, [
        activeChart?.data,
        activeChart?.signals
    ]);
    const handleMainResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((delta)=>{
        setMainChartHeight((h)=>Math.max(MIN_CHART_HEIGHT, h + delta));
    }, []);
    const handleVolumeResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((delta)=>{
        setVolumeChartHeight((h)=>Math.max(MIN_CHART_HEIGHT, h + delta));
    }, []);
    const handleSubResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((label, delta)=>{
        setSubChartHeights((prev)=>({
                ...prev,
                [label]: Math.max(MIN_CHART_HEIGHT, (prev[label] ?? DEFAULT_SUB_HEIGHT) + delta)
            }));
    }, []);
    const handleMainVisibleRangeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((range)=>{
        setSharedLogicalRange(range);
    }, []);
    const handleCrosshairXChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((xFraction)=>{
        setSharedCrosshairX(xFraction);
    }, []);
    if (!activeChart) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            lineNumber: 415,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabBar,
                ref: tabBarRef,
                children: [
                    visibleTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tab}${tab.id === activeTab ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabActive}` : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onTabSelect(tab.id),
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabBtn}${tab.id === activeTab ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabBtnActive}` : ""}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ticker}${tab.id === activeTab ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tickerActive}` : ""}`,
                                        children: tab.ticker
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 443,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": `Close ${tab.ticker}`,
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        onTabClose(tab.id);
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)),
                    hiddenTabs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: pillBtnRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pill,
                                onClick: handlePillClick,
                                "aria-label": `${hiddenTabs.length} more tabs`,
                                children: [
                                    "+",
                                    hiddenTabs.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            pillOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: pillMenuRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillDropdown,
                                style: {
                                    top: pillPos.top,
                                    right: pillPos.right
                                },
                                children: hiddenTabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartTabBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillDropdownItem,
                                        onClick: ()=>handleHiddenTabSelect(tab.id),
                                        children: tab.ticker
                                    }, tab.id, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 473,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 467,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "var(--inset-s) var(--inset-m)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid var(--color-border-light)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading-2",
                                children: activeChart.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 498,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                lineNumber: 499,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 497,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "var(--space-s)",
                            alignItems: "center"
                        },
                        children: [
                            hasVolume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": isVolumeVisible ? "Hide volume" : "Show volume",
                                onClick: handleToggleVolume,
                                style: {
                                    width: "28px",
                                    height: "28px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "var(--radius-m)",
                                    background: isVolumeVisible ? "var(--color-primary)" : "var(--color-bg)",
                                    color: isVolumeVisible ? "#fff" : "var(--color-text-primary)",
                                    cursor: "pointer",
                                    fontSize: "11px",
                                    fontWeight: 600
                                },
                                children: "Vol"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 513,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Expand timespan",
                                        onClick: ()=>onTimespanChange(activeChart.id, "expand"),
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
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Shrink timespan",
                                        onClick: ()=>onTimespanChange(activeChart.id, "shrink"),
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
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "body-1",
                                        style: {
                                            color: "var(--color-text-secondary)"
                                        },
                                        children: "Timeframe:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: activeChart.timeframe,
                                        onChange: (e)=>onTimeframeChange(activeChart.id, e.target.value),
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
                                        children: TIMEFRAMES.map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: tf,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMEFRAME_LABELS"][tf]
                                            }, tf, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 602,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 579,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 535,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "body-1",
                                        style: {
                                            color: "var(--color-text-secondary)"
                                        },
                                        children: "Add Signal:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 610,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Select --"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 633,
                                                columnNumber: 15
                                            }, this),
                                            availableSignals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: signal.name,
                                                    children: signal.name
                                                }, signal.name, false, {
                                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                                    lineNumber: 635,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-xs)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "body-1",
                                        style: {
                                            color: "var(--color-text-secondary)"
                                        },
                                        children: "Drawings:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 643,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: "",
                                        onChange: (e)=>{
                                            if (e.target.value) handleAddDrawing(e.target.value);
                                        },
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Select --"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 668,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "horizontal-line",
                                                children: "Horizontal Line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 669,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 646,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 642,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    overflowY: "auto",
                    minHeight: 0
                },
                children: [
                    showConfigPanel && selectedSignalDef && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        signal: selectedSignalDef,
                        defaultTicker: activeChart.ticker,
                        defaultExchange: activeChart.exchange,
                        onSubmit: handleSubmitSignal,
                        onClose: handleCloseConfig,
                        duplicateMessage: duplicateMessage
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 679,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: "var(--inset-m)",
                            height: `${mainChartHeight}px`,
                            minHeight: `${MIN_CHART_HEIGHT}px`,
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            data: activeChart.data,
                            timeframe: activeChart.timeframe,
                            overlays: mainOverlays,
                            onExpandNeeded: handleExpandNeeded,
                            onVisibleLogicalRangeChange: handleMainVisibleRangeChange,
                            onCrosshairXChange: handleCrosshairXChange,
                            crosshairXFraction: sharedCrosshairX,
                            referenceTimePoints: allTimePoints,
                            drawings: activeDrawings,
                            onDrawingPriceChange: handleDrawingPriceChange,
                            onDrawingDelete: handleDrawingDelete
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 691,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 690,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                        onDrag: handleMainResize
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 706,
                        columnNumber: 9
                    }, this),
                    isVolumeVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: `${volumeChartHeight}px`,
                            minHeight: `${MIN_CHART_HEIGHT}px`,
                            padding: "0 var(--inset-m) var(--inset-m)",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "var(--inset-xs) 0"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "body-1",
                                    style: {
                                        color: "var(--color-text-secondary)",
                                        fontSize: "12px"
                                    },
                                    children: "Volume"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 712,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 711,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VolumeChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                data: activeChart.data,
                                timeframe: activeChart.timeframe,
                                visibleLogicalRange: sharedLogicalRange,
                                onCrosshairXChange: handleCrosshairXChange,
                                crosshairXFraction: sharedCrosshairX,
                                referenceTimePoints: allTimePoints
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 716,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 710,
                        columnNumber: 11
                    }, this),
                    isVolumeVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                        onDrag: handleVolumeResize
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 727,
                        columnNumber: 29
                    }, this),
                    subCharts.map((pane)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "var(--space-m)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: `${subChartHeights[pane.label] ?? DEFAULT_SUB_HEIGHT}px`,
                                        minHeight: `${MIN_CHART_HEIGHT}px`,
                                        padding: "0 var(--inset-m) var(--inset-m)",
                                        overflow: "hidden"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "var(--inset-xs) 0"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "body-1",
                                                    style: {
                                                        color: "var(--color-text-secondary)",
                                                        fontSize: "12px"
                                                    },
                                                    children: pane.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": `Remove ${pane.label} subchart`,
                                                    onClick: ()=>onRemoveSubChart(activeChart.id, pane.overlays.map((o)=>o.signalHash)),
                                                    style: {
                                                        padding: "0 var(--inset-xs)",
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
                                                    lineNumber: 757,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ChartPanel.tsx",
                                            lineNumber: 740,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            data: [],
                                            timeframe: activeChart.timeframe,
                                            overlays: pane.overlays,
                                            visibleLogicalRange: sharedLogicalRange,
                                            onCrosshairXChange: handleCrosshairXChange,
                                            crosshairXFraction: sharedCrosshairX,
                                            referenceTimePoints: allTimePoints
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChartPanel.tsx",
                                            lineNumber: 775,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 732,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                                    onDrag: (delta)=>handleSubResize(pane.label, delta)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 786,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, pane.label, true, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 731,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: "var(--space-xl)",
                            flexShrink: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 791,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 676,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChartPanel.tsx",
        lineNumber: 431,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/hooks/useWatchlists.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWatchlists",
    ()=>useWatchlists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    const [watchlists, setWatchlists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Notes keyed by ticker — shared across all watchlists
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const noteDebounceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const nameBackfillDoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Bootstrap: load all watchlists and entries on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/watchlists/all").then((res)=>res.json()).then((data)=>{
            const loadedNotes = {};
            const loaded = data.map((w)=>({
                    name: w.name,
                    displayOrder: w.display_order,
                    isOpen: w.entries.length > 0,
                    entries: w.entries.map((e)=>{
                        // Notes are global per ticker — first occurrence wins
                        if (e.notes && !loadedNotes[e.ticker]) {
                            loadedNotes[e.ticker] = e.notes;
                        }
                        return {
                            ticker: e.ticker,
                            name: e.name ?? null,
                            exchange: e.exchange ?? null,
                            notes: e.notes
                        };
                    })
                }));
            setWatchlists(loaded);
            setNotes(loadedNotes);
        }).catch(()=>console.error("Failed to load watchlists"));
    }, []);
    // Backfill missing stock names for entries that pre-date the name column
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (nameBackfillDoneRef.current || watchlists.length === 0) return;
        nameBackfillDoneRef.current = true;
        const missingEntries = watchlists.flatMap((wl)=>wl.entries.filter((e)=>!e.name).map((e)=>({
                    ticker: e.ticker,
                    exchange: e.exchange,
                    watchlistName: wl.name,
                    notes: e.notes
                })));
        if (missingEntries.length === 0) return;
        const uniqueTickers = [
            ...new Set(missingEntries.map((e)=>e.ticker))
        ];
        Promise.all(uniqueTickers.map((ticker)=>fetch(`/api/tickers/search?prefix=${encodeURIComponent(ticker)}`).then((r)=>r.json()).then((results)=>{
                const match = results.find((r)=>r.ticker === ticker);
                return match?.name ? {
                    ticker,
                    name: match.name
                } : null;
            }).catch(()=>null))).then((results)=>{
            const nameMap = new Map();
            for (const r of results){
                if (r?.name) nameMap.set(r.ticker, r.name);
            }
            if (nameMap.size === 0) return;
            setWatchlists((prev)=>prev.map((wl)=>({
                        ...wl,
                        entries: wl.entries.map((e)=>({
                                ...e,
                                name: e.name ?? nameMap.get(e.ticker) ?? null
                            }))
                    })));
            // Persist backfilled names to the database
            for (const entry of missingEntries){
                const foundName = nameMap.get(entry.ticker);
                if (foundName) {
                    fetch("/api/watchlist", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            watchlist_name: entry.watchlistName,
                            ticker: entry.ticker,
                            exchange: entry.exchange,
                            name: foundName,
                            notes: entry.notes
                        })
                    }).catch(()=>{});
                }
            }
        });
    }, [
        watchlists
    ]);
    // Derived: Map<ticker, Set<watchlistName>> — which watchlists each ticker belongs to
    const tickerMembership = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const wl of watchlists){
            for (const entry of wl.entries){
                if (!map.has(entry.ticker)) map.set(entry.ticker, new Set());
                map.get(entry.ticker).add(wl.name);
            }
        }
        return map;
    }, [
        watchlists
    ]);
    const toggleWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name)=>{
        setWatchlists((prev)=>prev.map((wl)=>wl.name === name ? {
                    ...wl,
                    isOpen: !wl.isOpen
                } : wl));
    }, []);
    // Returns error string on validation failure, null on success
    const createWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name)=>{
        const trimmed = name.trim();
        const existingNames = watchlists.map((w)=>w.name);
        if (existingNames.length >= MAX_WATCHLISTS) {
            return `You cannot have more than ${MAX_WATCHLISTS} watchlists`;
        }
        const error = validateName(trimmed, existingNames);
        if (error) return error;
        const nextOrder = watchlists.length > 0 ? Math.max(...watchlists.map((w)=>w.displayOrder)) + 1 : 0;
        setWatchlists((prev)=>[
                ...prev,
                {
                    name: trimmed,
                    displayOrder: nextOrder,
                    isOpen: true,
                    entries: []
                }
            ]);
        fetch("/api/watchlists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: trimmed
            })
        }).catch(()=>console.error("Failed to create watchlist"));
        return null;
    }, [
        watchlists
    ]);
    // Returns error string on validation failure, null on success
    const renameWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((oldName, newName)=>{
        const trimmed = newName.trim();
        const existingNames = watchlists.map((w)=>w.name);
        const error = validateName(trimmed, existingNames, oldName);
        if (error) return error;
        setWatchlists((prev)=>prev.map((wl)=>wl.name === oldName ? {
                    ...wl,
                    name: trimmed
                } : wl));
        fetch(`/api/watchlists/${encodeURIComponent(oldName)}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newName: trimmed
            })
        }).catch(()=>console.error("Failed to rename watchlist"));
        return null;
    }, [
        watchlists
    ]);
    const deleteWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((name)=>{
        setWatchlists((prev)=>prev.filter((wl)=>wl.name !== name));
        fetch(`/api/watchlists/${encodeURIComponent(name)}`, {
            method: "DELETE"
        }).catch(()=>console.error("Failed to delete watchlist"));
    }, []);
    const reorderWatchlists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((reordered)=>{
        const withNewOrder = reordered.map((wl, i)=>({
                ...wl,
                displayOrder: i
            }));
        setWatchlists(withNewOrder);
        fetch("/api/watchlists/reorder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(withNewOrder.map((wl)=>({
                    name: wl.name,
                    display_order: wl.displayOrder
                })))
        }).catch(()=>console.error("Failed to reorder watchlists"));
    }, []);
    const addTicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((watchlistName, result)=>{
        setWatchlists((prev)=>prev.map((wl)=>{
                if (wl.name !== watchlistName) return wl;
                if (wl.entries.some((e)=>e.ticker === result.ticker)) return wl;
                return {
                    ...wl,
                    isOpen: true,
                    entries: [
                        ...wl.entries,
                        {
                            ticker: result.ticker,
                            name: result.name,
                            exchange: result.exchange,
                            notes: ""
                        }
                    ]
                };
            }));
        fetch("/api/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                watchlist_name: watchlistName,
                ticker: result.ticker,
                exchange: result.exchange,
                name: result.name,
                notes: ""
            })
        }).catch(()=>console.error("Failed to add ticker"));
    }, []);
    const removeTicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((watchlistName, ticker)=>{
        setWatchlists((prev)=>prev.map((wl)=>wl.name === watchlistName ? {
                    ...wl,
                    entries: wl.entries.filter((e)=>e.ticker !== ticker)
                } : wl));
        fetch(`/api/watchlist/${encodeURIComponent(ticker)}?name=${encodeURIComponent(watchlistName)}`, {
            method: "DELETE"
        }).catch(()=>console.error("Failed to remove ticker"));
    }, []);
    const updateNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ticker, note, watchlistNames)=>{
        setNotes((prev)=>({
                ...prev,
                [ticker]: note
            }));
        // Debounce the DB write
        if (noteDebounceRef.current[ticker]) {
            clearTimeout(noteDebounceRef.current[ticker]);
        }
        noteDebounceRef.current[ticker] = setTimeout(()=>{
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
                }).catch(()=>console.error("Failed to save note"));
            }
        }, NOTE_DEBOUNCE_MS);
    }, []);
    const deleteNote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ticker, watchlistNames)=>{
        setNotes((prev)=>{
            const next = {
                ...prev
            };
            delete next[ticker];
            return next;
        });
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
            }).catch(()=>console.error("Failed to delete note"));
        }
    }, []);
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
}),
"[project]/src/components/AddWatchlistModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddWatchlistModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AddWatchlistModal({ onConfirm, onClose }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inputRef.current?.focus();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>document.removeEventListener("keydown", handleKeyDown);
    }, [
        onClose
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const result = onConfirm(name);
        if (result !== null) {
            setError(result);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    zIndex: 1000
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "var(--inset-s) var(--inset-m)",
                            borderBottom: "1px solid var(--color-border)",
                            background: "var(--color-bg-secondary)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontWeight: 600,
                                    fontSize: "var(--body-1-size)",
                                    color: "var(--color-text-primary)"
                                },
                                children: "Add Watchlist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            padding: "var(--inset-m)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: "var(--space-xs)",
                                    fontSize: "var(--body-2-size)",
                                    color: "var(--color-negative)"
                                },
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    gap: "var(--space-xs)",
                                    marginTop: "var(--inset-m)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/ConfirmDialog.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "ConfirmDialog-module__dLTK2q__backdrop",
  "btnCancel": "ConfirmDialog-module__dLTK2q__btnCancel",
  "btnConfirm": "ConfirmDialog-module__dLTK2q__btnConfirm",
  "dialog": "ConfirmDialog-module__dLTK2q__dialog",
  "footer": "ConfirmDialog-module__dLTK2q__footer",
  "message": "ConfirmDialog-module__dLTK2q__message",
});
}),
"[project]/src/components/ConfirmDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmDialog.module.css [app-ssr] (css module)");
"use client";
;
;
;
function ConfirmDialog({ message, onConfirm, onCancel }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === "Escape") onCancel();
        };
        document.addEventListener("keydown", handleKeyDown);
        return ()=>document.removeEventListener("keydown", handleKeyDown);
    }, [
        onCancel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onCancel,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backdrop
            }, void 0, false, {
                fileName: "[project]/src/components/ConfirmDialog.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dialog,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message,
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ConfirmDialog.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onCancel,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnCancel,
                                children: "No"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConfirmDialog.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onConfirm,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnConfirm,
                                children: "Yes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ConfirmDialog.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ConfirmDialog.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ConfirmDialog.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SortableWatchlistItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SortableWatchlistItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SearchResults.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChartPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWatchlists$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useWatchlists.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddWatchlistModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ConfirmDialog.tsx [app-ssr] (ecmascript)");
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
;
;
;
const formatDate = (d)=>d.toISOString().split("T")[0];
function Home() {
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSearchResults, setShowSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chartTabs, setChartTabs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [drawingsPerTab, setDrawingsPerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoadingChart, setIsLoadingChart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRestoringState, setIsRestoringState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [availableSignals, setAvailableSignals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSignal, setSelectedSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [liveMode, setLiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAddModal, setShowAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmDeleteName, setConfirmDeleteName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { watchlists, notes: watchlistNotes, tickerMembership, toggleWatchlist, createWatchlist, renameWatchlist, deleteWatchlist, reorderWatchlists, addTicker, removeTicker, updateNote, deleteNote } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useWatchlists$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWatchlists"])();
    const searchTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastSearchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const searchTickers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (query)=>{
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
    }, []);
    const handleSearchChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
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
            searchTimerRef.current = setTimeout(()=>{
                searchTickers(value);
            }, 700);
        } else {
            setSearchResults([]);
        }
    }, [
        searchTickers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (searchTimerRef.current) {
                clearTimeout(searchTimerRef.current);
            }
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch("/api/signals/available").then((res)=>res.json()).then((data)=>setAvailableSignals(data.signals || [])).catch(()=>console.error("Failed to fetch available signals"));
    }, []);
    // Keep a ref to the latest chartTabs so the liveMode effect never captures a stale value
    const chartTabsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(chartTabs);
    chartTabsRef.current = chartTabs;
    // Re-fetch all open charts when liveMode is toggled (skip initial mount)
    const liveModeInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (liveModeInitialMount.current) {
            liveModeInitialMount.current = false;
            return;
        }
        const toDate = formatDate(new Date());
        chartTabsRef.current.forEach(async (tab)=>{
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
                const updatedSignals = await Promise.all(tab.signals.map(async (signal)=>{
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
                }));
                setChartTabs((prev)=>prev.map((t)=>t.id === tab.id ? {
                            ...t,
                            data: candles,
                            lastPrice,
                            signals: updatedSignals
                        } : t));
            } catch  {
                console.error(`Failed to re-fetch chart data for ${tab.ticker}`);
            }
        });
    }, [
        liveMode
    ]);
    // ── Persist chart state ────────────────────────────────────────────────────
    const saveTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartTabsRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(chartTabs);
    chartTabsRef2.current = chartTabs;
    const activeTabRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(activeTab);
    activeTabRef.current = activeTab;
    const drawingsPerTabRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(drawingsPerTab);
    drawingsPerTabRef.current = drawingsPerTab;
    const scheduleStateSave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
        saveTimerRef.current = setTimeout(()=>{
            const tabsToSave = chartTabsRef2.current.map((t)=>({
                    id: t.id,
                    ticker: t.ticker,
                    exchange: t.exchange,
                    name: t.name,
                    timeframe: t.timeframe,
                    from: t.from,
                    signals: t.signals.map((s)=>({
                            signalHash: s.signalHash,
                            signalName: s.signalName,
                            specification: s.specification,
                            visualiseWith: s.visualiseWith
                        }))
                }));
            fetch("/api/chart-state", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tabs: tabsToSave,
                    activeTab: activeTabRef.current,
                    drawingsPerTab: drawingsPerTabRef.current
                })
            }).catch(()=>console.error("Failed to persist chart state"));
        }, 500);
    }, []);
    // Restore state on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            try {
                const res = await fetch("/api/chart-state");
                if (!res.ok) return;
                const saved = await res.json();
                if (saved.tabs.length === 0) return;
                const toDate = formatDate(new Date());
                // Re-fetch price data + signals for each saved tab in parallel
                const restoredTabs = await Promise.all(saved.tabs.map(async (savedTab)=>{
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
                                        value: savedTab.ticker
                                    }
                                ],
                                ticker: savedTab.ticker,
                                exchange: savedTab.exchange,
                                from: savedTab.from,
                                to: toDate,
                                timeframe: savedTab.timeframe,
                                liveMode: false
                            })
                        });
                        const priceData = await priceRes.json();
                        const candles = priceData.candles || [];
                        const lastPrice = candles.length > 0 ? candles[candles.length - 1].close : 0;
                        const restoredSignals = await Promise.all(savedTab.signals.map(async (sig)=>{
                            try {
                                const sigRes = await fetch("/api/signals", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        signalName: sig.signalName,
                                        specification: sig.specification,
                                        ticker: savedTab.ticker,
                                        exchange: savedTab.exchange,
                                        from: savedTab.from,
                                        to: toDate,
                                        timeframe: savedTab.timeframe,
                                        liveMode: false
                                    })
                                });
                                const sigData = await sigRes.json();
                                return {
                                    signalName: sig.signalName,
                                    signalHash: sigData.signalHash ?? sig.signalHash,
                                    specification: sig.specification,
                                    timeSeries: sigData.timeSeries || [],
                                    visualiseWith: sig.visualiseWith
                                };
                            } catch  {
                                return {
                                    ...sig,
                                    timeSeries: []
                                };
                            }
                        }));
                        return {
                            id: savedTab.id,
                            ticker: savedTab.ticker,
                            exchange: savedTab.exchange,
                            name: savedTab.name,
                            data: candles,
                            lastPrice,
                            timeframe: savedTab.timeframe,
                            from: savedTab.from,
                            signals: restoredSignals
                        };
                    } catch  {
                        return null;
                    }
                }));
                const validTabs = restoredTabs.filter((t)=>t !== null);
                if (validTabs.length > 0) {
                    setChartTabs(validTabs);
                    setActiveTab(saved.activeTab);
                    setDrawingsPerTab(saved.drawingsPerTab);
                }
            } catch  {
                console.error("Failed to restore chart state");
            } finally{
                setIsRestoringState(false);
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // ────────────────────────────────────────────────────────────────────────────
    const handleSearchResultSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (result)=>{
        setIsLoadingChart(true);
        setShowSearchResults(false);
        setSearchQuery("");
        const tabId = result.exchange ? `${result.ticker}:${result.exchange}` : result.ticker;
        const existingTab = chartTabs.find((t)=>t.id === tabId);
        if (existingTab) {
            setActiveTab(tabId);
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
                id: tabId,
                ticker: result.ticker,
                exchange: result.exchange,
                name: result.name || result.ticker,
                data: candles,
                lastPrice,
                timeframe: "DAY",
                from: formatDate(sixMonthsAgo),
                signals: []
            };
            setChartTabs((prev)=>{
                const existing = prev.find((t)=>t.id === tabId);
                if (existing) return prev;
                return [
                    ...prev,
                    newTab
                ];
            });
            setActiveTab(tabId);
            scheduleStateSave();
        } catch  {
            console.error("Failed to fetch chart data");
        } finally{
            setIsLoadingChart(false);
        }
    }, [
        chartTabs,
        liveMode,
        scheduleStateSave
    ]);
    const handleTimeframeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (tabId, timeframe)=>{
        const tab = chartTabs.find((t)=>t.id === tabId);
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
        setChartTabs((prev)=>prev.map((t)=>t.id === tabId ? {
                    ...t,
                    timeframe,
                    data: []
                } : t));
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
                            value: tab.ticker
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
            const updatedSignals = await Promise.all(tab.signals.map(async (signal)=>{
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
            }));
            setChartTabs((prev)=>prev.map((t)=>t.id === tabId ? {
                        ...t,
                        data: candles,
                        lastPrice,
                        signals: updatedSignals,
                        timeframe,
                        from: fromStr
                    } : t));
            scheduleStateSave();
        } catch  {
            console.error("Failed to fetch chart data for timeframe change");
        }
    }, [
        chartTabs,
        liveMode,
        scheduleStateSave
    ]);
    const handleTimespanChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (tabId, direction)=>{
        const tab = chartTabs.find((t)=>t.id === tabId);
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
        setChartTabs((prev)=>prev.map((t)=>t.id === tabId ? {
                    ...t,
                    data: [],
                    from: newFromStr
                } : t));
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
                            value: tab.ticker
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
            const updatedSignals = await Promise.all(tab.signals.map(async (signal)=>{
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
            }));
            setChartTabs((prev)=>prev.map((t)=>t.id === tabId ? {
                        ...t,
                        data: candles,
                        lastPrice,
                        signals: updatedSignals,
                        from: newFromStr
                    } : t));
            scheduleStateSave();
        } catch  {
            console.error("Failed to fetch chart data for timespan change");
        }
    }, [
        chartTabs,
        liveMode,
        scheduleStateSave
    ]);
    const handleAutoExpand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (tabId)=>{
        const tab = chartTabs.find((t)=>t.id === tabId);
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
                            value: tab.ticker
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
            const updatedSignals = await Promise.all(tab.signals.map(async (signal)=>{
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
            }));
            setChartTabs((prev)=>prev.map((t)=>t.id === tabId ? {
                        ...t,
                        data: candles,
                        lastPrice,
                        from: newFromStr,
                        signals: updatedSignals
                    } : t));
            scheduleStateSave();
        } catch  {
            console.error("Failed to auto-expand chart data");
        }
    }, [
        chartTabs,
        liveMode,
        scheduleStateSave
    ]);
    const handleAddSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (tabId, signalName, specification)=>{
        const tab = chartTabs.find((t)=>t.id === tabId);
        if (!tab) return "No active chart";
        const isDuplicate = tab.signals.some((s)=>s.signalName === signalName && s.specification.length === specification.length && s.specification.every((existing, i)=>existing.name === specification[i].name && existing.value === specification[i].value));
        if (isDuplicate) {
            return "This signal with the same parameters is already on the chart";
        }
        const now = new Date();
        const signalDef = availableSignals.find((s)=>s.name === signalName);
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
            setChartTabs((prev)=>prev.map((t)=>t.id === tabId ? {
                        ...t,
                        signals: [
                            ...t.signals,
                            newOverlay
                        ]
                    } : t));
            scheduleStateSave();
            return null;
        } catch  {
            return "Failed to fetch signal data";
        }
    }, [
        chartTabs,
        availableSignals,
        liveMode,
        scheduleStateSave
    ]);
    const handleRemoveSubChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tabId, signalHashes)=>{
        setChartTabs((prev)=>prev.map((t)=>t.id === tabId ? {
                    ...t,
                    signals: t.signals.filter((s)=>!signalHashes.includes(s.signalHash))
                } : t));
        scheduleStateSave();
    }, [
        scheduleStateSave
    ]);
    const handleTabClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tabId)=>{
        setChartTabs((prev)=>{
            const remaining = prev.filter((t)=>t.id !== tabId);
            setActiveTab((active)=>{
                if (active !== tabId) return active;
                if (remaining.length === 0) return null;
                const closedIndex = prev.findIndex((t)=>t.id === tabId);
                return remaining[Math.min(closedIndex, remaining.length - 1)].id;
            });
            return remaining;
        });
        setDrawingsPerTab((prev)=>{
            const next = {
                ...prev
            };
            delete next[tabId];
            return next;
        });
        scheduleStateSave();
    }, [
        scheduleStateSave
    ]);
    const handleDrawingsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tabId, drawings)=>{
        setDrawingsPerTab((prev)=>({
                ...prev,
                [tabId]: drawings
            }));
        scheduleStateSave();
    }, [
        scheduleStateSave
    ]);
    const handleTabSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((tabId)=>{
        setActiveTab(tabId);
        scheduleStateSave();
    }, [
        scheduleStateSave
    ]);
    const handleAddToWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((result, watchlistName)=>{
        addTicker(watchlistName, result);
    }, [
        addTicker
    ]);
    const handleWatchlistSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((entry)=>{
        handleSearchResultSelect({
            ticker: entry.ticker,
            name: entry.name,
            exchange: entry.exchange,
            exchange_name: null
        });
    }, [
        handleSearchResultSelect
    ]);
    const handleNoteChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ticker, note)=>{
        updateNote(ticker, note, Array.from(tickerMembership.get(ticker) ?? []));
    }, [
        updateNote,
        tickerMembership
    ]);
    const handleNoteDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ticker)=>{
        deleteNote(ticker, Array.from(tickerMembership.get(ticker) ?? []));
    }, [
        deleteNote,
        tickerMembership
    ]);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const oldIndex = watchlists.findIndex((wl)=>wl.name === active.id);
        const newIndex = watchlists.findIndex((wl)=>wl.name === over.id);
        if (oldIndex === -1 || newIndex === -1) return;
        const reordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayMove"])(watchlists, oldIndex, newIndex);
        reorderWatchlists(reordered);
    }, [
        watchlists,
        reorderWatchlists
    ]);
    const handleCloseSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowSearchResults(false);
        setSearchQuery("");
        setSearchResults([]);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                liveMode: liveMode,
                onLiveModeChange: setLiveMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 850,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    display: "flex",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        style: {
                            width: "var(--sidebar-width)",
                            borderRight: "1px solid var(--color-border)",
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                value: searchQuery,
                                onChange: handleSearchChange,
                                onFocus: ()=>{
                                    if (searchQuery.length >= 1) setShowSearchResults(true);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 863,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "var(--inset-s)",
                                    borderBottom: "1px solid var(--color-border)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 873,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 872,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DndContext"], {
                                    collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closestCenter"],
                                    onDragEnd: handleDragEnd,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SortableContext"], {
                                        items: watchlists.map((wl)=>wl.name),
                                        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verticalListSortingStrategy"],
                                        children: watchlists.map((wl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SortableWatchlistItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                id: wl.name,
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
                                                lineNumber: 899,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 894,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 893,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 892,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 853,
                        columnNumber: 9
                    }, this),
                    showSearchResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 928,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        style: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "hidden",
                            background: "var(--color-bg)"
                        },
                        children: isRestoringState || isLoadingChart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--color-text-muted)"
                            },
                            children: isRestoringState ? "Restoring charts..." : "Loading chart data..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 952,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            tabs: chartTabs,
                            activeTab: activeTab,
                            onTabSelect: handleTabSelect,
                            onTimeframeChange: handleTimeframeChange,
                            onTimespanChange: handleTimespanChange,
                            onAddSignal: handleAddSignal,
                            onAutoExpand: handleAutoExpand,
                            onTabClose: handleTabClose,
                            onRemoveSubChart: handleRemoveSubChart,
                            availableSignals: availableSignals,
                            selectedSignal: selectedSignal,
                            onSignalChange: setSelectedSignal,
                            drawingsPerTab: drawingsPerTab,
                            onDrawingsChange: handleDrawingsChange
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 964,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 942,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 851,
                columnNumber: 7
            }, this),
            showAddModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onConfirm: (name)=>{
                    const error = createWatchlist(name);
                    if (!error) setShowAddModal(false);
                    return error;
                },
                onClose: ()=>setShowAddModal(false)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 986,
                columnNumber: 9
            }, this),
            confirmDeleteName !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ConfirmDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                message: "Watchlist not empty, are you sure you want to delete it?",
                onConfirm: ()=>{
                    deleteWatchlist(confirmDeleteName);
                    setConfirmDeleteName(null);
                },
                onCancel: ()=>setConfirmDeleteName(null)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 998,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 842,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__62e60267._.js.map