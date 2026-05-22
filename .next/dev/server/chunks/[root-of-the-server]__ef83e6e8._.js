module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/signal-store.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRequestTimeframe",
    ()=>getRequestTimeframe,
    "registerPendingRequest",
    ()=>registerPendingRequest,
    "resolveRequest",
    ()=>resolveRequest
]);
const pendingRequests = new Map();
function registerPendingRequest(requestId, timeframe = "DAY") {
    return new Promise((resolve)=>{
        pendingRequests.set(requestId, {
            resolve,
            timeframe
        });
        setTimeout(()=>{
            if (pendingRequests.has(requestId)) {
                pendingRequests.delete(requestId);
                resolve({
                    signalHash: 0,
                    candles: [],
                    timeSeries: []
                });
            }
        }, 30000);
    });
}
function getRequestTimeframe(requestId) {
    const entry = pendingRequests.get(requestId);
    return entry ? entry.timeframe : null;
}
function resolveRequest(requestId, data) {
    const entry = pendingRequests.get(requestId);
    if (entry) {
        entry.resolve(data);
        pendingRequests.delete(requestId);
        return true;
    }
    return false;
}
}),
"[project]/src/app/api/signals/callback/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signal$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/signal-store.ts [app-route] (ecmascript)");
;
;
const INTRADAY_TIMEFRAMES = new Set([
    "TICK",
    "SECOND",
    "MINUTE",
    "HOUR"
]);
function formatTime(isoDate, intraday) {
    if (intraday) {
        // lightweight-charts needs a Unix timestamp (seconds) for intraday data
        return Math.floor(new Date(isoDate).getTime() / 1000);
    }
    // For daily+ timeframes, use "YYYY-MM-DD" business-day format
    return isoDate.slice(0, 10);
}
async function POST(request) {
    const body = await request.json();
    // Payload structure from Plutus signals service:
    // { signal_requests_id, signals: [{ signal_request_id, signal_hash, time_series_collection: [{ date, events: [{ name, value }] }] }] }
    const signals = body.signals || [];
    for (const sr of signals){
        const requestId = sr.signal_request_id;
        const signalHash = sr.signal_hash ?? 0;
        const collection = sr.time_series_collection || [];
        const timeframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signal$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRequestTimeframe"])(requestId);
        const intraday = timeframe ? INTRADAY_TIMEFRAMES.has(timeframe) : false;
        const candles = collection.map((entry)=>{
            const get = (name)=>entry.events.find((e)=>e.name === name)?.value ?? 0;
            return {
                time: formatTime(entry.date, intraday),
                open: get("open"),
                high: get("high"),
                low: get("low"),
                close: get("close"),
                volume: get("volume")
            };
        });
        const timeSeries = collection.map((entry)=>{
            const values = {};
            for (const e of entry.events){
                values[e.name] = e.value;
            }
            return {
                time: formatTime(entry.date, intraday),
                values
            };
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signal$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRequest"])(requestId, {
            signalHash,
            candles,
            timeSeries
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        status: "ok"
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef83e6e8._.js.map