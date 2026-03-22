import Header from "@/components/Header";

export default function BackTestPage() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-text-muted)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 className="heading-1">Back Test</h1>
          <p className="body-1" style={{ marginTop: "var(--space-s)" }}>
            Back testing functionality coming soon.
          </p>
        </div>
      </main>
    </div>
  );
}
