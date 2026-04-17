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

export default function CampaignCard({ campaign, isCompare, onToggleCompare }) {
  const [subjectLine, setSubjectLine] = useState(campaign.subjectLine);
  const [audienceEdit, setAudienceEdit] = useState(campaign.generatedAudience);
  const [channelEdit, setChannelEdit] = useState(campaign.generatedChannel);
  const [feedback, setFeedback] = useState(null);

  const inputStyle = {
    width: "100%",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    color: "#111827",
    fontFamily: "inherit",
    outline: "none",
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: "600",
    color: "#7B00D4",
    marginBottom: "6px",
  };

  return (
    <div
      style={{
        border: isCompare ? "2px solid #7B00D4" : "1px solid #E5E7EB",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        marginBottom: "24px",
        overflow: "hidden",
      }}
    >
      {/* ── HEADER ── */}
      <div
        style={{
          padding: "16px 24px",
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: label + title + geo pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              minWidth: 0,
            }}
          >
            <span
              style={{ fontSize: "13px", fontWeight: "600", color: "#7B00D4" }}
            >
              {campaign.label}
            </span>
            <span
              style={{ fontSize: "16px", fontWeight: "700", color: "#111827" }}
            >
              {campaign.title}
            </span>
            <span
              style={{
                border: "1px solid #D1D5DB",
                borderRadius: "999px",
                padding: "3px 12px",
                fontSize: "12px",
                color: "#374151",
                whiteSpace: "nowrap",
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
              flexShrink: 0,
              marginLeft: "16px",
            }}
          >
            <span
              style={{ fontSize: "13px", color: "#6B7280", marginRight: "8px" }}
            >
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

        <div
          style={{
            fontSize: "12px",
            color: "#9CA3AF",
            fontStyle: "italic",
            marginTop: "6px",
          }}
        >
          Format, frequency, timing and execution to be decided by the BU.
        </div>
      </div>

      {/* ── BODY — two columns ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "55% 45%",
          gap: "32px",
          padding: "20px 24px",
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          {/* Campaign Type */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4", marginBottom: "3px" }}>
              Campaign Type
            </div>
            <div style={{ fontSize: "14px", color: "#111827" }}>
              {campaign.campaignType}
            </div>
          </div>

          {/* Target Audience */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4" }}>
                Target Audience
              </span>
              <Tooltip text="Highest click segment for this content type in this region.">
                <InfoIcon />
              </Tooltip>
            </div>
            <div style={{ fontSize: "14px", color: "#111827" }}>
              {campaign.targetAudience}
            </div>
          </div>

          {/* Strongest Signal Channel */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4", marginBottom: "3px" }}>
              Strongest Signal Channel
            </div>
            <div style={{ fontSize: "14px", color: "#111827" }}>
              {campaign.strongestChannel}
            </div>
          </div>

          {/* Peak Engagement Window */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "3px" }}>
              <span style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4" }}>
                Peak Engagement Window
              </span>
              <Tooltip text="Based on historical send data — not a scheduling recommendation.">
                <InfoIcon />
              </Tooltip>
            </div>
            <div style={{ fontSize: "14px", color: "#111827" }}>
              {campaign.peakWindow}
            </div>
          </div>

          {/* Timing Restriction */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4", marginBottom: "3px" }}>
              Timing Restriction
            </div>
            <div style={{ fontSize: "14px", color: "#6B7280" }}>
              {campaign.timingRestriction}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ borderLeft: "1px solid #F3F4F6", paddingLeft: "32px" }}>
          {/* 3 metrics row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "8px",
              marginBottom: "12px",
            }}
          >
            <div>
              <div style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4", marginBottom: "4px" }}>
                Open Rate
              </div>
              <div style={{ fontSize: "24px", fontWeight: "700", color: "#111827" }}>
                {campaign.openRate}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4", marginBottom: "4px" }}>
                Click Rate
              </div>
              <div style={{ fontSize: "24px", fontWeight: "700", color: "#111827" }}>
                {campaign.clickRate}
              </div>
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4", marginBottom: "4px" }}>
                Signal Strength
              </div>
              <div style={{ fontSize: "24px", fontWeight: "700", color: "#111827" }}>
                {campaign.signalStrength}
              </div>
            </div>
          </div>

          {/* Org avg + Increase */}
          <div style={{ fontSize: "13px", color: "#6B7280", marginBottom: "4px" }}>
            Organization avg — {campaign.orgAvg}
          </div>
          <div style={{ fontSize: "13px", color: "#111827", marginBottom: "16px" }}>
            Increase — <span style={{ color: "#16A34A" }}>{campaign.increase}</span>
          </div>

          {/* Evidence Base */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: "600", color: "#7B00D4", marginBottom: "4px" }}>
              Evidence Base
            </div>
            <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6" }}>
              {campaign.evidence.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div
        style={{
          borderTop: "1px solid #F3F4F6",
          padding: "20px 24px",
        }}
      >
        {/* AI Rationale */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ ...labelStyle }}>AI Rationale</div>
          <div style={{ fontSize: "13px", color: "#374151", lineHeight: "1.6" }}>
            {campaign.aiRationale}
          </div>
        </div>

        {/* Generated Subject Line */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ ...labelStyle }}>Generated Subject Line</div>
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
            <div style={{ ...labelStyle }}>Generated Audience</div>
            <input
              type="text"
              value={audienceEdit}
              onChange={(e) => setAudienceEdit(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <div style={{ ...labelStyle }}>Generated Channel</div>
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
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#7B00D4",
              marginBottom: "4px",
            }}
          >
            Subject Line Rationale
          </div>
          <div style={{ fontSize: "13px", color: "#6B7280" }}>
            {campaign.subjectLineRationale}
          </div>
        </div>

        {/* Feedback buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="button"
            onClick={() => setFeedback(feedback === "good" ? null : "good")}
            style={{
              border:
                feedback === "good"
                  ? "1px solid #16A34A"
                  : "1px solid #D1D5DB",
              borderRadius: "8px",
              padding: "8px 20px",
              fontSize: "13px",
              backgroundColor: feedback === "good" ? "#DCFCE7" : "#FFFFFF",
              color: feedback === "good" ? "#16A34A" : "#374151",
              cursor: "pointer",
              fontFamily: "inherit",
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
                  : "1px solid #D1D5DB",
              borderRadius: "8px",
              padding: "8px 20px",
              fontSize: "13px",
              backgroundColor:
                feedback === "not-relevant" ? "#FEE2E2" : "#FFFFFF",
              color: feedback === "not-relevant" ? "#DC2626" : "#374151",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {feedback === "not-relevant" ? "✕ Not Relevant" : "Not Relevant"}
          </button>
        </div>
      </div>
    </div>
  );
}
