import { useState } from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";

const AUDIENCE_OPTIONS = [
  "Cloud",
  "Customer Service",
  "Data and Artificial Intelligence",
  "Sales and Commerce",
  "Technology Transformation",
];
const INDUSTRY_OPTIONS = [
  "Aerospace and Defence",
  "Chemicals",
  "Private Equity",
  "Life Science",
  "Software and Platforms",
];
const CHANNEL_OPTIONS = ["GMA", "Portal", "Std. Mailer", "Viva Engage"];
const GEOGRAPHY_OPTIONS = ["NA", "APAC", "EMEA", "ANZ"];
const WINDOW_OPTIONS = ["This Quarter", "Next Quarter", "H2", "Full Year"];

export default function Screen1({ onGenerate, onHowItWorks }) {
  const [objective, setObjective] = useState("");
  const [audience, setAudience] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [channel, setChannel] = useState([]);
  const [geography, setGeography] = useState([]);
  const [campaignWindow, setCampaignWindow] = useState([]);
  const [ideaCount, setIdeaCount] = useState(3);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onGenerate();
    }, 1500);
  };

  return (
    <>
      {/* Loading overlay */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.7)",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              border: "3px solid #e9d5ff",
              borderTopColor: "#7B00D4",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Page heading — on gray bg, no card */}
      <div style={{ marginBottom: "32px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#111827",
            lineHeight: "1.2",
            marginBottom: "8px",
            whiteSpace: "nowrap",
          }}
        >
          Welcome to Employee Communications Intelligence
        </h1>
        <p style={{ fontSize: "14px", color: "#6B7280" }}>
          Generate intelligent campaign ideas &amp; strategies tailored to your
          audience, platform, and objectives.
        </p>
      </div>

      {/* White form card */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          border: "1px solid #E5E7EB",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          padding: "32px",
          width: "100%",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "13px", color: "#6B7280", maxWidth: "480px" }}>
            Describe your objective and audience. We&apos;ll surface ideas
            backed by engagement data.
          </p>
          {/* Fix #8: outlined pill button with outlined circle-i icon */}
          <button
            type="button"
            onClick={onHowItWorks}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid #D1D5DB",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "13px",
              color: "#374151",
              backgroundColor: "#FFFFFF",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <circle cx="7" cy="7" r="6" stroke="#6B7280" strokeWidth="1.2" />
              <path
                d="M7 6.5V9.5"
                stroke="#6B7280"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="7" cy="4.8" r="0.6" fill="#6B7280" />
            </svg>
            How it works?
          </button>
        </div>

        {/* Campaign Objective */}
        <div style={{ marginTop: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "600",
              color: "#7B00D4",
            }}
          >
            Campaign Objective
          </label>
          {/* Fix #9: sub-label kept */}
          <p
            style={{
              fontSize: "13px",
              color: "#6B7280",
              marginTop: "2px",
              marginBottom: "8px",
            }}
          >
            Brief about Campaign Objective
          </p>
          {/* Fix #5: textarea border-radius 12px */}
          <textarea
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="Enter Text Here."
            style={{
              width: "100%",
              minHeight: "110px",
              border: "1px solid #D1D5DB",
              borderRadius: "12px",
              padding: "12px",
              fontSize: "14px",
              color: "#111827",
              fontFamily: "inherit",
              resize: "vertical",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.border = "2px solid #7B00D4";
              e.target.style.padding = "11px";
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid #D1D5DB";
              e.target.style.padding = "12px";
            }}
          />
          {/* Fix #7: marginBottom 24px after hint to first dropdown row */}
          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              fontStyle: "italic",
              marginTop: "8px",
              marginBottom: "24px",
            }}
          >
            The more context you provide, the stronger the signal.
          </p>
        </div>

        {/* Audience Segment + Industry */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <MultiSelectDropdown
            label="Audience Segment"
            placeholder="Select target audience"
            options={AUDIENCE_OPTIONS}
            selected={audience}
            onChange={setAudience}
          />
          <MultiSelectDropdown
            label="Industry"
            placeholder="Select industry vertical"
            options={INDUSTRY_OPTIONS}
            selected={industry}
            onChange={setIndustry}
          />
        </div>

        {/* Channel Preference + Geography — Fix #7: marginTop 20px */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginTop: "20px",
          }}
        >
          <MultiSelectDropdown
            label="Channel Preference"
            placeholder="Select communication channel"
            options={CHANNEL_OPTIONS}
            selected={channel}
            onChange={setChannel}
          />
          <MultiSelectDropdown
            label="Geography"
            placeholder="Select target region"
            options={GEOGRAPHY_OPTIONS}
            selected={geography}
            onChange={setGeography}
          />
        </div>

        {/* Campaign Window — Fix #7: marginTop 20px */}
        <div style={{ marginTop: "20px", width: "50%" }}>
          <MultiSelectDropdown
            label="Campaign Window"
            placeholder="Select campaign duration"
            options={WINDOW_OPTIONS}
            selected={campaignWindow}
            onChange={setCampaignWindow}
          />
        </div>

        {/* Number of Ideas to Surface — Fix #7: marginTop 24px */}
        <div style={{ marginTop: "24px" }}>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "600",
              color: "#7B00D4",
            }}
          >
            Number of Ideas to Surface
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <button
              type="button"
              onClick={() => setIdeaCount((c) => Math.max(1, c - 1))}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                border: "1px solid #E5E7EB",
                fontSize: "18px",
                color: "#374151",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#E5E7EB")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#F3F4F6")
              }
            >
              −
            </button>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#111827",
                margin: "0 16px",
                minWidth: "20px",
                textAlign: "center",
              }}
            >
              {ideaCount}
            </span>
            <button
              type="button"
              onClick={() => setIdeaCount((c) => Math.min(5, c + 1))}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                border: "1px solid #E5E7EB",
                fontSize: "18px",
                color: "#374151",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#E5E7EB")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#F3F4F6")
              }
            >
              +
            </button>
          </div>
        </div>

        {/* CTA — Fix #7: marginTop 32px, Fix #10: font-size 15px */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              marginBottom: "12px",
            }}
          >
            Click below to generate the top campaign ideas
          </p>
          <button
            type="button"
            onClick={handleGenerate}
            style={{
              width: "100%",
              height: "52px",
              backgroundColor: "#7B00D4",
              borderRadius: "12px",
              border: "none",
              fontSize: "15px",
              fontWeight: "600",
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "background-color 0.15s, transform 0.1s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#6500B0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#7B00D4")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.99)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Find What Works
          </button>
        </div>
      </div>
    </>
  );
}
