import { useState } from "react";

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  return (
    <span
      style={{ position: "relative", display: "inline-flex", cursor: "help" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          style={{
            position: "absolute",
            bottom: "calc(100% + 6px)",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#111827",
            color: "#FFFFFF",
            fontSize: "11px",
            lineHeight: "1.4",
            padding: "6px 10px",
            borderRadius: "6px",
            whiteSpace: "nowrap",
            zIndex: 100,
          }}
        >
          {text}
        </span>
      )}
    </span>
  );
}

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <circle cx="7" cy="7" r="6" stroke="#9CA3AF" strokeWidth="1.2" />
      <path
        d="M7 6.5V9.5"
        stroke="#9CA3AF"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="7" cy="4.8" r="0.6" fill="#9CA3AF" />
    </svg>
  );
}

const labelStyle = {
  fontSize: "11px",
  fontWeight: "600",
  color: "#7B00D4",
  marginBottom: "3px",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  lineHeight: "1.4",
};

const valueStyle = {
  fontSize: "13px",
  color: "#374151",
  lineHeight: "1.4",
};

const footerLabelStyle = {
  fontSize: "11px",
  fontWeight: "600",
  color: "#7B00D4",
  textTransform: "uppercase",
  letterSpacing: "0.03em",
  marginBottom: "6px",
  lineHeight: "1.4",
};

export default function CampaignCard({ campaign, isCompare, onToggleCompare }) {
  const [subjectLine, setSubjectLine] = useState(campaign.subjectLine);
  const [audienceEdit, setAudienceEdit] = useState(campaign.generatedAudience);
  const [channelEdit, setChannelEdit] = useState(campaign.generatedChannel);
  const [feedback, setFeedback] = useState(null);
  const [rationaleOpen, setRationaleOpen] = useState(false);

  const inputStyle = {
    width: "100%",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "13px",
    color: "#111827",
    fontFamily: "inherit",
    outline: "none",
    lineHeight: "1.4",
    backgroundColor: "#FFFFFF",
  };

  return (
    <div
      style={{
        border: isCompare ? "2px solid #7B00D4" : "1px solid #E5E7EB",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        marginBottom: "28px",
        overflow: "hidden",
        lineHeight: "1.4",
      }}
    >
      {/* ── HEADER ROW 1 ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 24px",
          borderBottom: "1px solid #F0F0F0",
        }}
      >
        {/* Left: label + title + geo pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              color: "#7B00D4",
              fontSize: "12px",
              fontWeight: "700",
              lineHeight: "1.4",
            }}
          >
            {campaign.label}
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              color: "#111827",
              lineHeight: "1.4",
            }}
          >
            {campaign.title}
          </span>
          <span
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "999px",
              padding: "2px 10px",
              fontSize: "11px",
              color: "#6B7280",
              backgroundColor: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              whiteSpace: "nowrap",
              lineHeight: "1.4",
            }}
          >
            📍 {campaign.geo}
          </span>
        </div>

        {/* Right: Compare toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: "12px", color: "#6B7280", lineHeight: "1.4" }}>
            Compare
          </span>
          <button
            type="button"
            onClick={onToggleCompare}
            style={{
              width: "40px",
              height: "22px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: isCompare ? "#7B00D4" : "#D1D5DB",
              position: "relative",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "2px",
                left: isCompare ? "20px" : "2px",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                transition: "left 0.2s",
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          </button>
        </div>
      </div>

      {/* ── HEADER ROW 2 — italic disclaimer ── */}
      <div
        style={{
          padding: "6px 24px 10px",
          borderBottom: "1px solid #F0F0F0",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#9CA3AF",
            fontStyle: "italic",
            lineHeight: "1.4",
          }}
        >
          Format, frequency, timing and execution to be decided by the BU.
        </span>
      </div>

      {/* ── BODY — two columns ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 55%",
          minHeight: "280px",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ padding: "24px", borderRight: "1px solid #EBEBEB" }}>
          {/* Campaign Type */}
          <div style={{ marginBottom: "16px" }}>
            <div style={labelStyle}>Campaign Type</div>
            <div style={valueStyle}>{campaign.campaignType}</div>
          </div>

          {/* Target Audience */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "3px",
              }}
            >
              <span style={labelStyle}>Target Audience</span>
              <Tooltip text="Highest click segment for this content type in this region.">
                <InfoIcon />
              </Tooltip>
            </div>
            <div style={valueStyle}>{campaign.targetAudience}</div>
          </div>

          {/* Strongest Signal Channel */}
          <div style={{ marginBottom: "16px" }}>
            <div style={labelStyle}>Strongest Signal Channel</div>
            <div style={valueStyle}>{campaign.strongestChannel}</div>
          </div>

          {/* Peak Engagement Window */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                marginBottom: "3px",
              }}
            >
              <span style={labelStyle}>Peak Engagement Window</span>
              <Tooltip text="Based on historical send data — not a scheduling recommendation.">
                <InfoIcon />
              </Tooltip>
            </div>
            <div style={valueStyle}>{campaign.peakWindow}</div>
          </div>

          {/* Timing Restriction */}
          <div>
            <div style={labelStyle}>Timing Restriction</div>
            <div style={{ fontSize: "13px", color: "#374151", lineHeight: "1.4" }}>
              {campaign.timingRestriction}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ padding: "24px", backgroundColor: "#F9FAFB" }}>
          {/* Top — 3 metrics */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "0",
              marginBottom: "16px",
              paddingBottom: "16px",
              borderBottom: "1px solid #EBEBEB",
            }}
          >
            <div style={{ padding: "0 16px 0 0" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#7B00D4",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  marginBottom: "6px",
                  lineHeight: "1.4",
                }}
              >
                Open Rate
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#111827",
                  lineHeight: "1.2",
                }}
              >
                {campaign.openRate}
              </div>
            </div>
            <div style={{ padding: "0 16px 0 0" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#7B00D4",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  marginBottom: "6px",
                  lineHeight: "1.4",
                }}
              >
                Click Rate
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#111827",
                  lineHeight: "1.2",
                }}
              >
                {campaign.clickRate}
              </div>
            </div>
            <div style={{ padding: "0" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#7B00D4",
                  textTransform: "uppercase",
                  letterSpacing: "0.03em",
                  marginBottom: "6px",
                  lineHeight: "1.4",
                }}
              >
                Signal Strength
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#111827",
                  lineHeight: "1.2",
                }}
              >
                {campaign.signalStrength}
              </div>
            </div>
          </div>

          {/* Middle — org stats */}
          <div
            style={{
              marginBottom: "16px",
              paddingBottom: "16px",
              borderBottom: "1px solid #EBEBEB",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#374151",
                marginBottom: "4px",
                lineHeight: "1.4",
              }}
            >
              Organization avg —{" "}
              <strong style={{ color: "#374151" }}>{campaign.orgAvg}</strong>
            </div>
            <div style={{ fontSize: "12px", color: "#374151", lineHeight: "1.4" }}>
              Increase —{" "}
              <span style={{ color: "#16A34A", fontWeight: "600" }}>
                {campaign.increase}
              </span>
            </div>
          </div>

          {/* Bottom — evidence base */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: "600",
                color: "#7B00D4",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                marginBottom: "6px",
                lineHeight: "1.4",
              }}
            >
              Evidence Base
            </div>
            <div>
              {campaign.evidence.map((item, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "12px",
                    color: "#374151",
                    lineHeight: "1.6",
                    display: "block",
                    marginBottom: "2px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── AI RATIONALE ACCORDION ── */}
      <div style={{ borderTop: "1px solid #F0F0F0", marginTop: "4px" }}>
        <div
          onClick={() => setRationaleOpen((v) => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 24px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: "600",
              color: "#7B00D4",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              lineHeight: "1.4",
            }}
          >
            AI Rationale
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#7B00D4",
              transform: rationaleOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              lineHeight: "1",
            }}
          >
            ▾
          </span>
        </div>
        {rationaleOpen && (
          <div style={{ padding: "0 24px 20px" }}>
            <p
              style={{
                fontSize: "12px",
                color: "#374151",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {campaign.aiRationale}
            </p>
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <div
        style={{
          borderTop: "1px solid #F0F0F0",
          padding: "24px",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Generated Subject Line */}
        <div style={{ marginBottom: "16px" }}>
          <div style={footerLabelStyle}>Generated Subject Line</div>
          <input
            type="text"
            value={subjectLine}
            onChange={(e) => setSubjectLine(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Generated Audience + Channel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div>
            <div style={footerLabelStyle}>Generated Audience</div>
            <input
              type="text"
              value={audienceEdit}
              onChange={(e) => setAudienceEdit(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <div style={footerLabelStyle}>Generated Channel</div>
            <input
              type="text"
              value={channelEdit}
              onChange={(e) => setChannelEdit(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Subject Line Rationale */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ ...footerLabelStyle, marginBottom: "4px" }}>
            Subject Line Rationale
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#374151",
              lineHeight: "1.6",
            }}
          >
            {campaign.subjectLineRationale}
          </div>
        </div>

        {/* Feedback buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="button"
            onClick={() => setFeedback(feedback === "good" ? null : "good")}
            style={{
              border:
                feedback === "good"
                  ? "1px solid #16A34A"
                  : "1px solid #E5E7EB",
              borderRadius: "8px",
              padding: "7px 20px",
              fontSize: "12px",
              fontWeight: "500",
              backgroundColor: feedback === "good" ? "#F0FDF4" : "#FFFFFF",
              color: feedback === "good" ? "#16A34A" : "#374151",
              cursor: "pointer",
              fontFamily: "inherit",
              lineHeight: "1.4",
            }}
          >
            {feedback === "good" ? "✓ Looks Good" : "Looks Good"}
          </button>
          <button
            type="button"
            onClick={() =>
              setFeedback(feedback === "not-relevant" ? null : "not-relevant")
            }
            style={{
              border:
                feedback === "not-relevant"
                  ? "1px solid #DC2626"
                  : "1px solid #E5E7EB",
              borderRadius: "8px",
              padding: "7px 20px",
              fontSize: "12px",
              fontWeight: "500",
              backgroundColor:
                feedback === "not-relevant" ? "#FEF2F2" : "#FFFFFF",
              color: feedback === "not-relevant" ? "#DC2626" : "#374151",
              cursor: "pointer",
              fontFamily: "inherit",
              lineHeight: "1.4",
            }}
          >
            {feedback === "not-relevant" ? "✕ Not Relevant" : "Not Relevant"}
          </button>
        </div>
      </div>
    </div>
  );
}
