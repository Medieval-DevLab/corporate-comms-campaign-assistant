import { useState } from "react";

function EyeOpen() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeSlash() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function Screen3({ selectedCampaigns, onBack }) {
  const [hiddenAttributes, setHiddenAttributes] = useState([]);

  const sections = [
    {
      heading: "Campaign Overview",
      rows: [
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

  const toggleHide = (key) => {
    setHiddenAttributes((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

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

  const totalColumns = 1 + selectedCampaigns.length;

  // Collect all hidden rows with their original metadata
  const allHiddenRows = [];
  sections.forEach((section) => {
    section.rows.forEach((row) => {
      if (hiddenAttributes.includes(row.key)) {
        allHiddenRows.push(row);
      }
    });
  });

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
              const visibleRows = section.rows.filter(
                (row) => !hiddenAttributes.includes(row.key)
              );

              if (visibleRows.length === 0) return null;

              const result = [];

              result.push(
                <tr key={`section-${section.heading}`}>
                  <td
                    colSpan={totalColumns}
                    style={{
                      background: "#F0EFFE",
                      padding: "10px 20px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#7B00D4",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      textAlign: "center",
                      borderTop: "1px solid #E5E7EB",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    {section.heading}
                  </td>
                </tr>
              );

              visibleRows.forEach((row) => {
                const currentRow = rowCounter;
                rowCounter++;
                const isEven = currentRow % 2 === 0;
                const rowBg = isEven ? "#FAFAFA" : "#FFFFFF";
                const bestIdx = row.highlight ? findBestIndex(row.key) : -1;

                result.push(
                  <tr
                    key={row.key}
                    style={{ borderBottom: "1px solid #F5F5F5" }}
                  >
                    <td
                      style={{
                        padding: "14px 20px",
                        verticalAlign: "top",
                        backgroundColor: rowBg,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#7B00D4",
                          }}
                        >
                          {row.label}
                        </span>
                        <span
                          onClick={() => toggleHide(row.key)}
                          style={{
                            cursor: "pointer",
                            marginLeft: "8px",
                            userSelect: "none",
                            flexShrink: 0,
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                          title="Hide attribute"
                        >
                          <EyeOpen />
                        </span>
                      </div>
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
                                <div
                                  key={idx}
                                  style={{
                                    marginBottom:
                                      idx < val.length - 1 ? "4px" : 0,
                                  }}
                                >
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

              return result;
            })}

            {allHiddenRows.length > 0 && (
              <>
                <tr key="hidden-section">
                  <td
                    colSpan={totalColumns}
                    style={{
                      background: "#F9FAFB",
                      padding: "10px 20px",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#9CA3AF",
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      textAlign: "center",
                      borderTop: "2px dashed #E5E7EB",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    Hidden Attributes
                  </td>
                </tr>
                {allHiddenRows.map((row) => (
                  <tr
                    key={`hidden-${row.key}`}
                    style={{ borderBottom: "1px solid #F5F5F5" }}
                  >
                    <td
                      style={{
                        padding: "14px 20px",
                        verticalAlign: "top",
                        backgroundColor: "#FAFAFA",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 400,
                            color: "#C4B5FD",
                          }}
                        >
                          {row.label}
                        </span>
                        <span
                          onClick={() => toggleHide(row.key)}
                          style={{
                            cursor: "pointer",
                            marginLeft: "8px",
                            userSelect: "none",
                            flexShrink: 0,
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                          title="Restore attribute"
                        >
                          <EyeSlash />
                        </span>
                      </div>
                    </td>
                    {selectedCampaigns.map((c) => {
                      const val = c[row.key];
                      return (
                        <td
                          key={c.id}
                          style={{
                            padding: "14px 20px",
                            fontSize: "13px",
                            color: "#D1D5DB",
                            fontWeight: "400",
                            verticalAlign: "top",
                            lineHeight: "1.5",
                            backgroundColor: "#FAFAFA",
                          }}
                        >
                          {Array.isArray(val)
                            ? val.map((item, idx) => (
                                <div
                                  key={idx}
                                  style={{
                                    marginBottom:
                                      idx < val.length - 1 ? "4px" : 0,
                                  }}
                                >
                                  {item}
                                </div>
                              ))
                            : val}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
