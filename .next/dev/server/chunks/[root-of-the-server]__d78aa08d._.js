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
"[project]/src/app/api/signals/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signal$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/signal-store.ts [app-route] (ecmascript)");
;
;
const GRAPHQL_URL = process.env.GRAPHQL_URL ?? "http://localhost:8000/graphql";
function validateSpecification(specification, parameterTypes) {
    if (!Array.isArray(specification) || specification.length === 0) {
        return "specification must be a non-empty array";
    }
    for (const spec of specification){
        if (typeof spec.name !== "string" || spec.name.length === 0) {
            return "each specification must have a non-empty name";
        }
        if (spec.value === undefined || spec.value === null || spec.value === "") {
            return `specification '${spec.name}' must have a value`;
        }
        if (parameterTypes) {
            const paramDef = parameterTypes.find((p)=>p.name === spec.name);
            if (paramDef) {
                const valueStr = String(spec.value);
                if (paramDef.value === "INTEGER") {
                    if (!/^-?\d+$/.test(valueStr)) {
                        return `'${spec.name}' must be an integer`;
                    }
                } else if (paramDef.value === "FLOAT") {
                    if (!/^-?\d+(\.\d+)?$/.test(valueStr)) {
                        return `'${spec.name}' must be a number`;
                    }
                }
            }
        }
    }
    return null;
}
async function POST(request) {
    const body = await request.json();
    const { signalName, specification, from, to, timeframe = "DAY", parameterTypes, liveMode = false, ticker, exchange } = body;
    if (!signalName || typeof signalName !== "string") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "signalName is required"
        }, {
            status: 400
        });
    }
    const validationError = validateSpecification(specification, parameterTypes);
    if (validationError) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: validationError
        }, {
            status: 400
        });
    }
    // Coerce specification values to proper types so the backend receives
    // integers/floats instead of strings for numeric parameters.
    const coercedSpec = specification.map((spec)=>{
        if (parameterTypes) {
            const paramDef = parameterTypes.find((p)=>p.name === spec.name);
            if (paramDef?.value === "INTEGER") {
                return {
                    name: spec.name,
                    value: parseInt(spec.value, 10)
                };
            }
            if (paramDef?.value === "FLOAT") {
                return {
                    name: spec.name,
                    value: parseFloat(spec.value)
                };
            }
        }
        return {
            name: spec.name,
            value: spec.value
        };
    });
    const signalRequestId = `${signalName}-${Date.now()}`;
    const signalRequestsId = `batch-${signalRequestId}`;
    const origin = request.nextUrl.origin;
    const callbackUrl = `${origin}/api/signals/callback`;
    const mutation = `
    mutation GetSignals($input: SignalRequestsInput!) {
      getSignals(input: $input) {
        status
        errorMessage
      }
    }
  `;
    const variables = {
        input: {
            signalRequestsId: signalRequestsId,
            callbackUrl: callbackUrl,
            ticker: ticker,
            exchange: exchange,
            timeframe: timeframe,
            liveMode: liveMode,
            timespan: {
                from: from,
                to: to
            },
            signalRequests: [
                {
                    signalRequestId: signalRequestId,
                    signalName: signalName,
                    specification: coercedSpec
                }
            ]
        }
    };
    const dataPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$signal$2d$store$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["registerPendingRequest"])(signalRequestId, timeframe);
    const gqlRes = await fetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: mutation,
            variables
        })
    });
    const gqlData = await gqlRes.json();
    if (gqlData.errors || gqlData.data?.getSignals?.status !== "SUCCESS") {
        console.error("Signal request failed:", JSON.stringify(gqlData, null, 2));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Signal request failed",
            details: gqlData
        }, {
            status: 500
        });
    }
    const result = await dataPromise;
    // Sort by time ascending (lightweight-charts requires sorted data)
    const compareTime = (a, b)=>typeof a === "number" && typeof b === "number" ? a - b : String(a).localeCompare(String(b));
    result.candles.sort((a, b)=>compareTime(a.time, b.time));
    result.timeSeries.sort((a, b)=>compareTime(a.time, b.time));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        signalHash: result.signalHash,
        candles: result.candles,
        timeSeries: result.timeSeries
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d78aa08d._.js.map