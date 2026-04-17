import { comparisonDimensions } from "../data/campaigns";

export default function Screen3({ selectedCampaigns, onBack }) {
  return (
    <>
      <button
        type="button"
        onClick={onBack}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "13px",
          color: "#6B7280",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          marginBottom: "16px",
          fontFamily: "inherit",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to Results
      </button>

      <h1
        style={{
          fontSize: "26px",
          fontWeight: "700",
          color: "#111827",
          margin: 0,
        }}
      >
        Campaign Comparison
      </h1>
      <p
        style={{
          fontSize: "13px",
          color: "#6B7280",
          marginTop: "6px",
        }}
      >
        Side-by-side comparison of your selected campaigns across key
        dimensions.
      </p>

      <div
        style={{
          marginTop: "32px",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <table style={{ width: "100%", textAlign: "left", fontSize: "13px", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #E5E7EB", backgroundColor: "#F9FAFB" }}>
              <th
                style={{
                  padding: "14px 24px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Dimension
              </th>
              {selectedCampaigns.map((c) => (
                <th
                  key={c.id}
                  style={{
                    padding: "14px 24px",
                    fontSize: "11px",
                    fontWeight: "600",
                    color: "#7B00D4",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonDimensions.map((dim, i) => (
              <tr
                key={dim.key}
                style={{
                  borderBottom: "1px solid #F3F4F6",
                  backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
                }}
              >
                <td
                  style={{
                    padding: "14px 24px",
                    fontWeight: "500",
                    color: "#374151",
                  }}
                >
                  {dim.label}
                </td>
                {selectedCampaigns.map((c) => (
                  <td
                    key={c.id}
                    style={{ padding: "14px 24px", color: "#6B7280" }}
                  >
                    {Array.isArray(c[dim.key])
                      ? c[dim.key].join(", ")
                      : c[dim.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
