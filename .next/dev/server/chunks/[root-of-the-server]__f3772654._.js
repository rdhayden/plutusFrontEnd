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
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    host: process.env.POSTGRES_HOST ?? "localhost",
    port: Number(process.env.POSTGRES_PORT ?? 5432),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
});
const __TURBOPACK__default__export__ = pool;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/chart-state/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const USERNAME = "plutus";
async function GET() {
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].connect();
    try {
        const tabsRes = await client.query(`SELECT tab_id, ticker, exchange, name, timeframe, from_date, display_order, is_active
       FROM chart_tabs
       WHERE username = $1
       ORDER BY display_order ASC`, [
            USERNAME
        ]);
        const signalsRes = await client.query(`SELECT tab_id, signal_hash, signal_name, specification, visualise_with, display_order
       FROM chart_tab_signals
       WHERE username = $1
       ORDER BY tab_id, display_order ASC`, [
            USERNAME
        ]);
        const drawingsRes = await client.query(`SELECT tab_id, drawing_id, price
       FROM chart_tab_drawings
       WHERE username = $1`, [
            USERNAME
        ]);
        // Group signals by tab_id
        const signalsByTab = {};
        for (const row of signalsRes.rows){
            if (!signalsByTab[row.tab_id]) signalsByTab[row.tab_id] = [];
            signalsByTab[row.tab_id].push({
                signalHash: Number(row.signal_hash),
                signalName: row.signal_name,
                specification: row.specification,
                visualiseWith: row.visualise_with
            });
        }
        // Group drawings by tab_id
        const drawingsByTab = {};
        for (const row of drawingsRes.rows){
            if (!drawingsByTab[row.tab_id]) drawingsByTab[row.tab_id] = [];
            drawingsByTab[row.tab_id].push({
                id: row.drawing_id,
                price: Number(row.price)
            });
        }
        const tabs = tabsRes.rows.map((row)=>({
                id: row.tab_id,
                ticker: row.ticker,
                exchange: row.exchange ?? null,
                name: row.name,
                timeframe: row.timeframe,
                from: row.from_date,
                signals: signalsByTab[row.tab_id] ?? []
            }));
        const activeTabRow = tabsRes.rows.find((r)=>r.is_active);
        const activeTab = activeTabRow ? activeTabRow.tab_id : tabsRes.rows[0]?.tab_id ?? null;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            tabs,
            activeTab,
            drawingsPerTab: drawingsByTab
        });
    } finally{
        client.release();
    }
}
async function POST(request) {
    const { tabs, activeTab, drawingsPerTab } = await request.json();
    const client = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].connect();
    try {
        await client.query("BEGIN");
        // Replace all tab state for this user
        await client.query("DELETE FROM chart_tab_drawings WHERE username = $1", [
            USERNAME
        ]);
        await client.query("DELETE FROM chart_tab_signals WHERE username = $1", [
            USERNAME
        ]);
        await client.query("DELETE FROM chart_tabs WHERE username = $1", [
            USERNAME
        ]);
        for(let i = 0; i < tabs.length; i++){
            const tab = tabs[i];
            await client.query(`INSERT INTO chart_tabs (username, tab_id, ticker, exchange, name, timeframe, from_date, display_order, is_active)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [
                USERNAME,
                tab.id,
                tab.ticker,
                tab.exchange,
                tab.name,
                tab.timeframe,
                tab.from,
                i,
                tab.id === activeTab
            ]);
            for(let j = 0; j < tab.signals.length; j++){
                const sig = tab.signals[j];
                await client.query(`INSERT INTO chart_tab_signals (username, tab_id, signal_hash, signal_name, specification, visualise_with, display_order)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`, [
                    USERNAME,
                    tab.id,
                    sig.signalHash,
                    sig.signalName,
                    JSON.stringify(sig.specification),
                    JSON.stringify(sig.visualiseWith),
                    j
                ]);
            }
        }
        for (const [tabId, drawings] of Object.entries(drawingsPerTab)){
            for (const drawing of drawings){
                await client.query(`INSERT INTO chart_tab_drawings (username, tab_id, drawing_id, price)
           VALUES ($1, $2, $3, $4)`, [
                    USERNAME,
                    tabId,
                    drawing.id,
                    drawing.price
                ]);
            }
        }
        await client.query("COMMIT");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    } catch (err) {
        await client.query("ROLLBACK");
        console.error("Failed to save chart state:", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to save chart state"
        }, {
            status: 500
        });
    } finally{
        client.release();
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3772654._.js.map