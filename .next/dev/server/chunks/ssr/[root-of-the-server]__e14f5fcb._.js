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
"[project]/src/components/Header.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "controls": "Header-module__hBw1pG__controls",
  "header": "Header-module__hBw1pG__header",
  "liveLabel": "Header-module__hBw1pG__liveLabel",
  "logo": "Header-module__hBw1pG__logo",
  "nav": "Header-module__hBw1pG__nav",
  "navLink": "Header-module__hBw1pG__navLink",
  "navLinkActive": "Header-module__hBw1pG__navLinkActive",
  "navLinkIcon": "Header-module__hBw1pG__navLinkIcon",
  "toggle": "Header-module__hBw1pG__toggle",
  "toggleOn": "Header-module__hBw1pG__toggleOn",
  "toggleThumb": "Header-module__hBw1pG__toggleThumb",
  "toggleThumbOn": "Header-module__hBw1pG__toggleThumbOn",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Header.module.css [app-ssr] (css module)");
"use client";
;
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                children: "TradingHub"
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                children: navItems.map((item)=>{
                    const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink}${isActive ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLinkActive}` : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLinkIcon,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this),
                            item.label
                        ]
                    }, item.href, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].liveLabel}`,
                        children: "Live"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "switch",
                        "aria-checked": liveMode,
                        "aria-label": "Toggle live mode",
                        onClick: ()=>onLiveModeChange?.(!liveMode),
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggle}${liveMode ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleOn}` : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleThumb}${liveMode ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleThumbOn}` : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SearchBar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "input": "SearchBar-module__9ObJ7W__input",
  "inputRow": "SearchBar-module__9ObJ7W__inputRow",
  "wrapper": "SearchBar-module__9ObJ7W__wrapper",
});
}),
"[project]/src/components/SearchBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SearchBar.module.css [app-ssr] (css module)");
"use client";
;
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputRow,
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
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "21",
                            y1: "21",
                            x2: "16.65",
                            y2: "16.65"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SearchBar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SearchBar.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: inputRef,
                    type: "text",
                    value: value,
                    onChange: (e)=>onChange(e.target.value),
                    onFocus: onFocus,
                    placeholder: "Search symbols...",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchBar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                }, void 0, false, {
                    fileName: "[project]/src/components/SearchBar.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SearchBar.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SearchBar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/NotesPanel.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnDelete": "NotesPanel-module__klo9CG__btnDelete",
  "closeBtn": "NotesPanel-module__klo9CG__closeBtn",
  "footer": "NotesPanel-module__klo9CG__footer",
  "header": "NotesPanel-module__klo9CG__header",
  "panel": "NotesPanel-module__klo9CG__panel",
  "textarea": "NotesPanel-module__klo9CG__textarea",
  "title": "NotesPanel-module__klo9CG__title",
});
}),
"[project]/src/components/NotesPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/NotesPanel.module.css [app-ssr] (css module)");
"use client";
;
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
        style: {
            top: y,
            left: x
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: [
                            "Notes — ",
                            ticker
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NotesPanel.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Close notes",
                        onClick: onClose,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/NotesPanel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NotesPanel.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                ref: textareaRef,
                value: note,
                onChange: (e)=>onChange(ticker, e.target.value),
                placeholder: "Add notes for this ticker...",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea
            }, void 0, false, {
                fileName: "[project]/src/components/NotesPanel.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>onDelete(ticker),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NotesPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnDelete,
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/src/components/NotesPanel.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/NotesPanel.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NotesPanel.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Watchlist.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chevron": "Watchlist-module__eA6O7G__chevron",
  "chevronOpen": "Watchlist-module__eA6O7G__chevronOpen",
  "deleteBtn": "Watchlist-module__eA6O7G__deleteBtn",
  "dragHandle": "Watchlist-module__eA6O7G__dragHandle",
  "emptyMsg": "Watchlist-module__eA6O7G__emptyMsg",
  "header": "Watchlist-module__eA6O7G__header",
  "itemBtn": "Watchlist-module__eA6O7G__itemBtn",
  "itemMeta": "Watchlist-module__eA6O7G__itemMeta",
  "itemName": "Watchlist-module__eA6O7G__itemName",
  "itemRow": "Watchlist-module__eA6O7G__itemRow",
  "itemTicker": "Watchlist-module__eA6O7G__itemTicker",
  "noteIcon": "Watchlist-module__eA6O7G__noteIcon",
  "removeBtn": "Watchlist-module__eA6O7G__removeBtn",
  "renameBtn": "Watchlist-module__eA6O7G__renameBtn",
  "renameError": "Watchlist-module__eA6O7G__renameError",
  "renameInput": "Watchlist-module__eA6O7G__renameInput",
  "renameInputError": "Watchlist-module__eA6O7G__renameInputError",
  "renameWrapper": "Watchlist-module__eA6O7G__renameWrapper",
  "root": "Watchlist-module__eA6O7G__root",
  "toggleBtn": "Watchlist-module__eA6O7G__toggleBtn",
  "toggleBtnName": "Watchlist-module__eA6O7G__toggleBtnName",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Watchlist.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function Watchlist({ name, items, isOpen, onToggle, onSelect, onRemove, onDelete, onRename, notes, onNoteChange, onNoteDelete, dragHandleProps }) {
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ...dragHandleProps,
                        "aria-label": "Drag to reorder",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dragHandle,
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
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8",
                                    cy: "2",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "4",
                                    cy: "6",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8",
                                    cy: "6",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "4",
                                    cy: "10",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8",
                                    cy: "10",
                                    r: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Watchlist.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    isRenaming ? /* Inline rename input */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].renameWrapper,
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
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].renameInput}${renameError ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].renameInputError}` : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            renameError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].renameError,
                                children: renameError
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 124,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this) : /* Toggle button — name + chevron */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onToggle,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleBtn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `heading-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].toggleBtnName}`,
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 129,
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
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chevron}${isOpen ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chevronOpen}` : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "6 9 12 15 18 9"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Watchlist.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this),
                    !isRenaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": `Rename watchlist ${name}`,
                        onClick: startRenaming,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].renameBtn,
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
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Watchlist.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    !isRenaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": `Delete watchlist ${name}`,
                        onClick: onDelete,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].deleteBtn,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Watchlist.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyMsg,
                        children: "Right-click a search result to add it here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Watchlist.tsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this),
                    items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onContextMenu: (e)=>handleContextMenu(e, item.ticker),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemRow,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSelect(item),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemBtn,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemMeta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemTicker,
                                                    children: item.ticker
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Watchlist.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 19
                                                }, this),
                                                notes[item.ticker] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "10",
                                                    height: "10",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].noteIcon,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Watchlist.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "14 2 14 8 20 8",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Watchlist.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Watchlist.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `body-2 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemName}`,
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Watchlist.tsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": `Remove ${item.ticker} from watchlist`,
                                    onClick: ()=>onRemove(item.ticker),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Watchlist$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].removeBtn,
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Watchlist.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.ticker, true, {
                            fileName: "[project]/src/components/Watchlist.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Watchlist.tsx",
                lineNumber: 164,
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
                lineNumber: 194,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Watchlist.tsx",
        lineNumber: 98,
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
"[project]/src/components/SearchResults.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "closeBtn": "SearchResults-module__jRBQ3a__closeBtn",
  "container": "SearchResults-module__jRBQ3a__container",
  "contextMenu": "SearchResults-module__jRBQ3a__contextMenu",
  "contextMenuEmpty": "SearchResults-module__jRBQ3a__contextMenuEmpty",
  "contextMenuHeader": "SearchResults-module__jRBQ3a__contextMenuHeader",
  "contextMenuItem": "SearchResults-module__jRBQ3a__contextMenuItem",
  "contextMenuItemDisabled": "SearchResults-module__jRBQ3a__contextMenuItemDisabled",
  "emptyMsg": "SearchResults-module__jRBQ3a__emptyMsg",
  "exchangeName": "SearchResults-module__jRBQ3a__exchangeName",
  "header": "SearchResults-module__jRBQ3a__header",
  "list": "SearchResults-module__jRBQ3a__list",
  "resultBtn": "SearchResults-module__jRBQ3a__resultBtn",
  "resultMeta": "SearchResults-module__jRBQ3a__resultMeta",
  "resultName": "SearchResults-module__jRBQ3a__resultName",
  "subheading": "SearchResults-module__jRBQ3a__subheading",
  "ticker": "SearchResults-module__jRBQ3a__ticker",
});
}),
"[project]/src/components/SearchResults.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SearchResults.module.css [app-ssr] (css module)");
"use client";
;
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading-3",
                                children: "Search Results"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `body-2 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subheading}`,
                                children: showTypeMore ? "Type another character" : isLoading ? "Searching..." : `${results.length} result${results.length !== 1 ? "s" : ""} for "${searchQuery}"`
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
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
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchResults.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                children: [
                    showTypeMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyMsg,
                        children: "Type another character"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 100,
                        columnNumber: 26
                    }, this),
                    !showTypeMore && results.map((result)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onSelect(result),
                            onContextMenu: (e)=>handleContextMenu(e, result),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultBtn,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultMeta,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ticker,
                                                children: result.ticker
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SearchResults.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this),
                                            result.exchange_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `body-2 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].exchangeName}`,
                                                children: result.exchange_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SearchResults.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SearchResults.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `body-2 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultName}`,
                                        children: result.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SearchResults.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SearchResults.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, result.exchange ? `${result.ticker}:${result.exchange}` : result.ticker, false, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contextMenuRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenu,
                style: {
                    top: contextMenu.y,
                    left: contextMenu.x
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenuHeader,
                        children: "Add to watchlist"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    watchlistNames.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenuEmpty,
                        children: "no watchlists"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchResults.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this) : watchlistNames.map((wlName)=>{
                        const alreadyIn = tickerMembership.get(contextMenu.result.ticker)?.has(wlName) ?? false;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>!alreadyIn && handleAddToWatchlist(wlName),
                            disabled: alreadyIn,
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenuItem}${alreadyIn ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SearchResults$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenuItemDisabled}` : ""}`,
                            children: wlName
                        }, wlName, false, {
                            fileName: "[project]/src/components/SearchResults.tsx",
                            lineNumber: 141,
                            columnNumber: 17
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchResults.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchResults.tsx",
        lineNumber: 70,
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
"[project]/src/components/CandlestickChart.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chartContainer": "CandlestickChart-module__ZmXyYW__chartContainer",
  "chartWrapper": "CandlestickChart-module__ZmXyYW__chartWrapper",
  "contextMenu": "CandlestickChart-module__ZmXyYW__contextMenu",
  "contextMenuItem": "CandlestickChart-module__ZmXyYW__contextMenuItem",
  "drawingHandle": "CandlestickChart-module__ZmXyYW__drawingHandle",
  "drawingLabel": "CandlestickChart-module__ZmXyYW__drawingLabel",
  "drawingLine": "CandlestickChart-module__ZmXyYW__drawingLine",
  "syncLabel": "CandlestickChart-module__ZmXyYW__syncLabel",
  "syncLine": "CandlestickChart-module__ZmXyYW__syncLine",
  "tooltip": "CandlestickChart-module__ZmXyYW__tooltip",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/CandlestickChart.module.css [app-ssr] (css module)");
"use client";
;
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
function CandlestickChart({ data, timeframe = "DAY", overlays = EMPTY_OVERLAYS, onExpandNeeded, onVisibleLogicalRangeChange, visibleLogicalRange, onCrosshairXChange, crosshairXFraction, referenceTimePoints, drawings, onDrawingPriceChange, onDrawingDelete, onRemoveOverlay }) {
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
    const signalSeriesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const onRemoveOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onRemoveOverlay);
    onRemoveOverlayRef.current = onRemoveOverlay;
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
    const [signalContextMenu, setSignalContextMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
        signalSeriesRef.current = [];
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
                signalSeriesRef.current.push({
                    series: lineSeries,
                    byTime,
                    signalHash: overlay.signalHash,
                    signalName: overlay.signalName
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
        const chartEl = containerRef.current;
        const handleContextMenu = (e)=>{
            if (!chartEl) return;
            const rect = chartEl.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const time = chart.timeScale().coordinateToTime(x);
            if (time == null) return;
            const timeKey = String(time);
            const THRESHOLD = 8;
            let best = null;
            for (const { series, byTime, signalHash, signalName } of signalSeriesRef.current){
                const value = byTime.get(timeKey);
                if (value === undefined) continue;
                const seriesY = series.priceToCoordinate(value);
                if (seriesY === null) continue;
                const dist = Math.abs(seriesY - y);
                if (dist < THRESHOLD && (!best || dist < best.dist)) {
                    best = {
                        signalHash,
                        signalName,
                        dist
                    };
                }
            }
            if (best) {
                e.preventDefault();
                setSignalContextMenu({
                    signalHash: best.signalHash,
                    signalName: best.signalName,
                    x: e.clientX,
                    y: e.clientY
                });
            }
        };
        chartEl?.addEventListener("contextmenu", handleContextMenu);
        return ()=>{
            if (debounceRef.current) clearTimeout(debounceRef.current);
            if (suppressTimerRef.current) clearTimeout(suppressTimerRef.current);
            chart.unsubscribeCrosshairMove(handleCrosshairMove);
            chart.timeScale().unsubscribeVisibleLogicalRangeChange(handleVisibleRangeChange);
            chartEl?.removeEventListener("contextmenu", handleContextMenu);
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
    // Close context menus on any outside click
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!contextMenu) return;
        const close = ()=>setContextMenu(null);
        document.addEventListener("click", close);
        return ()=>document.removeEventListener("click", close);
    }, [
        contextMenu
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!signalContextMenu) return;
        const close = ()=>setSignalContextMenu(null);
        document.addEventListener("click", close);
        return ()=>document.removeEventListener("click", close);
    }, [
        signalContextMenu
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartContainer
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: syncLineRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].syncLine,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sync-label": "",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].syncLabel
                }, void 0, false, {
                    fileName: "[project]/src/components/CandlestickChart.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 497,
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
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawingHandle,
                    style: {
                        top: `${y - 6}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawingLine
                        }, void 0, false, {
                            fileName: "[project]/src/components/CandlestickChart.tsx",
                            lineNumber: 521,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-testid": `drawing-label-${d.id}`,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].drawingLabel,
                            style: {
                                right: PRICE_SCALE_MIN_WIDTH + 4
                            },
                            children: d.price.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/CandlestickChart.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this)
                    ]
                }, d.id, true, {
                    fileName: "[project]/src/components/CandlestickChart.tsx",
                    lineNumber: 505,
                    columnNumber: 11
                }, this);
            }),
            contextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenu,
                style: {
                    top: contextMenu.y,
                    left: contextMenu.x
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onDrawingDeleteRef.current?.(contextMenu.id);
                        setContextMenu(null);
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenuItem,
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/src/components/CandlestickChart.tsx",
                    lineNumber: 538,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 534,
                columnNumber: 9
            }, this),
            signalContextMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenu,
                style: {
                    top: signalContextMenu.y,
                    left: signalContextMenu.x
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onRemoveOverlayRef.current?.(signalContextMenu.signalHash);
                        setSignalContextMenu(null);
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextMenuItem,
                    children: [
                        "Delete ",
                        signalContextMenu.signalName
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CandlestickChart.tsx",
                    lineNumber: 556,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 552,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tooltipRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tooltip
            }, void 0, false, {
                fileName: "[project]/src/components/CandlestickChart.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CandlestickChart.tsx",
        lineNumber: 494,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/VolumeChart.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chartContainer": "VolumeChart-module__WzZH3W__chartContainer",
  "chartWrapper": "VolumeChart-module__WzZH3W__chartWrapper",
  "syncLine": "VolumeChart-module__WzZH3W__syncLine",
  "tooltip": "VolumeChart-module__WzZH3W__tooltip",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VolumeChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/VolumeChart.module.css [app-ssr] (css module)");
"use client";
;
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VolumeChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VolumeChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartContainer
            }, void 0, false, {
                fileName: "[project]/src/components/VolumeChart.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: syncLineRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VolumeChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].syncLine
            }, void 0, false, {
                fileName: "[project]/src/components/VolumeChart.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: tooltipRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VolumeChart$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tooltip,
                "data-testid": "volume-tooltip"
            }, void 0, false, {
                fileName: "[project]/src/components/VolumeChart.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VolumeChart.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SignalConfigPanel.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnSubmit": "SignalConfigPanel-module__Nei1Wq__btnSubmit",
  "closeBtn": "SignalConfigPanel-module__Nei1Wq__closeBtn",
  "duplicateMsg": "SignalConfigPanel-module__Nei1Wq__duplicateMsg",
  "field": "SignalConfigPanel-module__Nei1Wq__field",
  "fieldError": "SignalConfigPanel-module__Nei1Wq__fieldError",
  "fieldInput": "SignalConfigPanel-module__Nei1Wq__fieldInput",
  "fieldInputError": "SignalConfigPanel-module__Nei1Wq__fieldInputError",
  "fieldLabel": "SignalConfigPanel-module__Nei1Wq__fieldLabel",
  "form": "SignalConfigPanel-module__Nei1Wq__form",
  "header": "SignalConfigPanel-module__Nei1Wq__header",
  "panel": "SignalConfigPanel-module__Nei1Wq__panel",
});
}),
"[project]/src/components/SignalConfigPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignalConfigPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/SignalConfigPanel.module.css [app-ssr] (css module)");
"use client";
;
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
            else if (p.default != null) initial[p.name] = String(p.default);
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "heading-3",
                        children: [
                            "Configure ",
                            signal.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SignalConfigPanel.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Close signal config",
                        onClick: onClose,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SignalConfigPanel.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SignalConfigPanel.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: (e)=>{
                    e.preventDefault();
                    handleSubmit();
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                children: [
                    signal.parameters.map((param)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].field,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldLabel}`,
                                    children: [
                                        param.name,
                                        " (",
                                        param.value,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SignalConfigPanel.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: getInputType(param),
                                    inputMode: param.value === "INTEGER" ? "numeric" : param.value === "FLOAT" ? "decimal" : "text",
                                    placeholder: getPlaceholder(param),
                                    value: values[param.name] ?? "",
                                    onChange: (e)=>handleChange(param.name, e.target.value),
                                    "aria-label": param.name,
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInput}${errors[param.name] ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldInputError}` : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignalConfigPanel.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                errors[param.name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    role: "alert",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fieldError,
                                    children: errors[param.name]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SignalConfigPanel.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, param.name, true, {
                            fileName: "[project]/src/components/SignalConfigPanel.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSubmit,
                        children: "Add Signal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SignalConfigPanel.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SignalConfigPanel.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            duplicateMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SignalConfigPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].duplicateMsg,
                children: duplicateMessage
            }, void 0, false, {
                fileName: "[project]/src/components/SignalConfigPanel.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SignalConfigPanel.tsx",
        lineNumber: 95,
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
"[project]/src/components/ChartPanel.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomSpacer": "ChartPanel-module__Iw_owG__bottomSpacer",
  "chartControls": "ChartPanel-module__Iw_owG__chartControls",
  "chartHeader": "ChartPanel-module__Iw_owG__chartHeader",
  "chartHeaderSubtitle": "ChartPanel-module__Iw_owG__chartHeaderSubtitle",
  "chartScrollArea": "ChartPanel-module__Iw_owG__chartScrollArea",
  "controlGroup": "ChartPanel-module__Iw_owG__controlGroup",
  "controlLabel": "ChartPanel-module__Iw_owG__controlLabel",
  "emptyState": "ChartPanel-module__Iw_owG__emptyState",
  "iconBtn": "ChartPanel-module__Iw_owG__iconBtn",
  "mainChartWrapper": "ChartPanel-module__Iw_owG__mainChartWrapper",
  "panelRoot": "ChartPanel-module__Iw_owG__panelRoot",
  "resizeDivider": "ChartPanel-module__Iw_owG__resizeDivider",
  "resizeDividerHandle": "ChartPanel-module__Iw_owG__resizeDividerHandle",
  "resizeDividerLine": "ChartPanel-module__Iw_owG__resizeDividerLine",
  "select": "ChartPanel-module__Iw_owG__select",
  "subChartHeader": "ChartPanel-module__Iw_owG__subChartHeader",
  "subChartLabel": "ChartPanel-module__Iw_owG__subChartLabel",
  "subChartRemoveBtn": "ChartPanel-module__Iw_owG__subChartRemoveBtn",
  "subChartSection": "ChartPanel-module__Iw_owG__subChartSection",
  "subChartWrapper": "ChartPanel-module__Iw_owG__subChartWrapper",
  "volumeBtn": "ChartPanel-module__Iw_owG__volumeBtn",
  "volumeBtnActive": "ChartPanel-module__Iw_owG__volumeBtnActive",
  "volumeWrapper": "ChartPanel-module__Iw_owG__volumeWrapper",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/ChartPanel.module.css [app-ssr] (css module)");
"use client";
;
;
;
const EMPTY_CANDLE_DATA = [];
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
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resizeDivider,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resizeDividerLine
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resizeDividerHandle
            }, void 0, false, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChartPanel.tsx",
        lineNumber: 123,
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
    const handleRemoveMainOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((signalHash)=>{
        if (activeChart) onRemoveSubChart(activeChart.id, [
            signalHash
        ]);
    }, [
        activeChart,
        onRemoveSubChart
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
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emptyState,
            children: "Search for a ticker to view its chart"
        }, void 0, false, {
            fileName: "[project]/src/components/ChartPanel.tsx",
            lineNumber: 398,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].panelRoot,
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
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 413,
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
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 409,
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
                                lineNumber: 432,
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
                                        lineNumber: 447,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 407,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartHeader,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "heading-2",
                                children: activeChart.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 464,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartHeaderSubtitle}`,
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
                                lineNumber: 465,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 463,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartControls,
                        children: [
                            hasVolume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "aria-label": isVolumeVisible ? "Hide volume" : "Show volume",
                                onClick: handleToggleVolume,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].volumeBtn}${isVolumeVisible ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].volumeBtnActive}` : ""}`,
                                children: "Vol"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 476,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Expand timespan",
                                        onClick: ()=>onTimespanChange(activeChart.id, "expand"),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Shrink timespan",
                                        onClick: ()=>onTimespanChange(activeChart.id, "shrink"),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconBtn,
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 487,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlLabel}`,
                                        children: "Timeframe:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: activeChart.timeframe,
                                        onChange: (e)=>onTimeframeChange(activeChart.id, e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                        children: TIMEFRAMES.map((tf)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: tf,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMEFRAME_LABELS"][tf]
                                            }, tf, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 495,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 485,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlLabel}`,
                                        children: "Add Signal:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 501,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: selectedSignal,
                                        onChange: (e)=>handleSignalChange(e.target.value),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Select --"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 503,
                                                columnNumber: 15
                                            }, this),
                                            availableSignals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: signal.name,
                                                    children: signal.name
                                                }, signal.name, false, {
                                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlLabel}`,
                                        children: "Drawings:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: "",
                                        onChange: (e)=>{
                                            if (e.target.value) handleAddDrawing(e.target.value);
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "-- Select --"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 517,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "horizontal-line",
                                                children: "Horizontal Line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ChartPanel.tsx",
                                                lineNumber: 518,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ChartPanel.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 510,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 462,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartScrollArea,
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
                        lineNumber: 528,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainChartWrapper,
                        style: {
                            height: `${mainChartHeight}px`,
                            minHeight: `${MIN_CHART_HEIGHT}px`
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
                            onDrawingDelete: handleDrawingDelete,
                            onRemoveOverlay: handleRemoveMainOverlay
                        }, void 0, false, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                        onDrag: handleMainResize
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this),
                    isVolumeVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].volumeWrapper,
                        style: {
                            height: `${volumeChartHeight}px`,
                            minHeight: `${MIN_CHART_HEIGHT}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subChartHeader,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subChartLabel}`,
                                    children: "Volume"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 562,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ChartPanel.tsx",
                                lineNumber: 561,
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
                                lineNumber: 564,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 560,
                        columnNumber: 11
                    }, this),
                    isVolumeVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                        onDrag: handleVolumeResize
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 575,
                        columnNumber: 29
                    }, this),
                    subCharts.map((pane)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subChartSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subChartWrapper,
                                    style: {
                                        height: `${subChartHeights[pane.label] ?? DEFAULT_SUB_HEIGHT}px`,
                                        minHeight: `${MIN_CHART_HEIGHT}px`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subChartHeader,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `body-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subChartLabel}`,
                                                    children: pane.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "aria-label": `Remove ${pane.label} subchart`,
                                                    onClick: ()=>onRemoveSubChart(activeChart.id, pane.overlays.map((o)=>o.signalHash)),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subChartRemoveBtn,
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ChartPanel.tsx",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CandlestickChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            data: EMPTY_CANDLE_DATA,
                                            timeframe: activeChart.timeframe,
                                            overlays: pane.overlays,
                                            visibleLogicalRange: sharedLogicalRange,
                                            onCrosshairXChange: handleCrosshairXChange,
                                            crosshairXFraction: sharedCrosshairX,
                                            referenceTimePoints: allTimePoints
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ChartPanel.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 580,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResizeHandle, {
                                    onDrag: (delta)=>handleSubResize(pane.label, delta)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChartPanel.tsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, pane.label, true, {
                            fileName: "[project]/src/components/ChartPanel.tsx",
                            lineNumber: 579,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChartPanel$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomSpacer
                    }, void 0, false, {
                        fileName: "[project]/src/components/ChartPanel.tsx",
                        lineNumber: 608,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ChartPanel.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChartPanel.tsx",
        lineNumber: 405,
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
"[project]/src/components/AddWatchlistModal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "AddWatchlistModal-module__UaZRrW__backdrop",
  "body": "AddWatchlistModal-module__UaZRrW__body",
  "btnCancel": "AddWatchlistModal-module__UaZRrW__btnCancel",
  "btnSubmit": "AddWatchlistModal-module__UaZRrW__btnSubmit",
  "closeBtn": "AddWatchlistModal-module__UaZRrW__closeBtn",
  "errorMsg": "AddWatchlistModal-module__UaZRrW__errorMsg",
  "footer": "AddWatchlistModal-module__UaZRrW__footer",
  "header": "AddWatchlistModal-module__UaZRrW__header",
  "input": "AddWatchlistModal-module__UaZRrW__input",
  "inputError": "AddWatchlistModal-module__UaZRrW__inputError",
  "label": "AddWatchlistModal-module__UaZRrW__label",
  "modal": "AddWatchlistModal-module__UaZRrW__modal",
  "title": "AddWatchlistModal-module__UaZRrW__title",
});
}),
"[project]/src/components/AddWatchlistModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddWatchlistModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/AddWatchlistModal.module.css [app-ssr] (css module)");
"use client";
;
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
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backdrop
            }, void 0, false, {
                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: "Add Watchlist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                "aria-label": "Close",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].body,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "watchlist-name",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                children: "Watchlist name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 51,
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
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input}${error ? ` ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputError}` : ""}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMsg,
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnCancel,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddWatchlistModal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnSubmit,
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddWatchlistModal.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddWatchlistModal.tsx",
                lineNumber: 42,
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
                        const signalDef = availableSignals.find((s)=>s.name === signal.signalName);
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
                                parameterTypes: signalDef?.parameters,
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
                    const signalDef = availableSignals.find((s)=>s.name === signal.signalName);
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
                            parameterTypes: signalDef?.parameters,
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
        availableSignals,
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
                    const signalDef = availableSignals.find((s)=>s.name === signal.signalName);
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
                            parameterTypes: signalDef?.parameters,
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
        availableSignals,
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
                    const signalDef = availableSignals.find((s)=>s.name === signal.signalName);
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
                            parameterTypes: signalDef?.parameters,
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
        availableSignals,
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
                lineNumber: 858,
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
                                lineNumber: 871,
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
                                    lineNumber: 881,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 880,
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
                                                lineNumber: 907,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 902,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 901,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 900,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 861,
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
                        lineNumber: 936,
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
                            lineNumber: 960,
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
                            lineNumber: 972,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 950,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 859,
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
                lineNumber: 994,
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
                lineNumber: 1006,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 850,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e14f5fcb._.js.map