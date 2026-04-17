export default function Screen3({ selectedCampaigns, onBack }) {
  const sections = [
    {
      heading: "Campaign Overview",
      rows: [
        { label: "Campaign Name", key: "title" },
        { label: "Campaign Type", key: "campaignType" },
        { label: "Target Audience", key: "targetAudience" },
        { label: "Geography", key: "geo" },
      ],
    },
    {
      heading: "Timing & Channels",
      rows: [
        { label: "Strongest Signal Channel", key: "strongestChannel" },
        { label: "Peak Engagement Window", key: "peakWindow" },
        { label: "Timing Restriction", key: "timingRestriction" },
      ],
    },
    {
      heading: "Performance Metrics",
      rows: [
        { label: "Open Rate", key: "openRate", highlight: true },
        { label: "Click Rate", key: "clickRate", highlight: true },
        { label: "Signal Strength", key: "signalStrength", highlight: true },
        { label: "Organization Average", key: "orgAvg" },
        { label: "Increase", key: "increase" },
      ],
    },
    {
      heading: "Evidence & Insights",
      rows: [{ label: "Evidence Base", key: "evidence" }],
    },
  ];

  const parsePercent = (val) => {
    if (typeof val !== "string") return 0;
    const match = val.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  const findBestIndex = (key) => {
    let bestIdx = -1;
    let bestVal = -1;
    selectedCampaigns.forEach((c, i) => {
      const v = parsePercent(c[key]);
      if (v > bestVal) {
        bestVal = v;
        bestIdx = i;
      }
    });
    return bestIdx;
  };

  let rowCounter = 0;

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
        ← Back to list
      </button>

      <h1
        style={{
          fontSize: "26px",
          fontWeight: "700",
          color: "#111827",
          margin: 0,
        }}
      >
        Campaign Idea Comparison
      </h1>
      <p
        style={{
          fontSize: "13px",
          color: "#6B7280",
          marginTop: "6px",
          marginBottom: 0,
        }}
      >
        Evaluate campaign strategies side by side based on audience, timing,
        channels, and predicted performance metrics to identify the most
        effective approach.
      </p>

      <div
        style={{
          marginTop: "32px",
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <table
          style={{
            width: "100%",
            textAlign: "left",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ borderBottom: "2px solid #F0F0F0" }}>
              <th
                style={{
                  width: "180px",
                  padding: "16px 20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  backgroundColor: "#FFFFFF",
                }}
              >
                Attributes
              </th>
              {selectedCampaigns.map((c) => (
                <th
                  key={c.id}
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "#FFFFFF",
                    verticalAlign: "top",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "#7B00D4",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "#111827",
                      lineHeight: "1.4",
                      marginTop: "4px",
                    }}
                  >
                    {c.title}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => {
              const sectionRows = [];

              sectionRows.push(
                <tr key={`section-${section.heading}`}>
                  <td
                    colSpan={1 + selectedCampaigns.length}
                    style={{
                      background: "#F9FAFB",
                      padding: "8px 20px",
                      fontSize: "11px",
                      fontWeight: "700",
                      color: "#9CA3AF",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      borderTop: "1px solid #F0F0F0",
                    }}
                  >
                    {section.heading}
                  </td>
                </tr>
              );

              section.rows.forEach((row) => {
                const currentRow = rowCounter;
                rowCounter++;
                const isEven = currentRow % 2 === 0;
                const rowBg = isEven ? "#FAFAFA" : "#FFFFFF";

                const bestIdx = row.highlight
                  ? findBestIndex(row.key)
                  : -1;

                sectionRows.push(
                  <tr
                    key={row.key}
                    style={{
                      borderBottom: "1px solid #F5F5F5",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#7B00D4",
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                        backgroundColor: rowBg,
                      }}
                    >
                      {row.label}
                    </td>
                    {selectedCampaigns.map((c, i) => {
                      const isBest = row.highlight && i === bestIdx;
                      const val = c[row.key];

                      return (
                        <td
                          key={c.id}
                          style={{
                            padding: "14px 20px",
                            fontSize: "13px",
                            color: isBest ? "#7B00D4" : "#374151",
                            fontWeight: isBest ? "600" : "400",
                            verticalAlign: "top",
                            lineHeight: "1.5",
                            backgroundColor: isBest ? "#F5F3FF" : rowBg,
                          }}
                        >
                          {Array.isArray(val)
                            ? val.map((item, idx) => (
                                <div key={idx} style={{ marginBottom: idx < val.length - 1 ? "4px" : 0 }}>
                                  {item}
                                </div>
                              ))
                            : val}
                        </td>
                      );
                    })}
                  </tr>
                );
              });

              return sectionRows;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
