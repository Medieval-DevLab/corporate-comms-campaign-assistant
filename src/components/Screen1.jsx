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
    }, 4000);
  };

  return (
    <>
      {/* Loading overlay modal */}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "48px 64px",
              textAlign: "center",
              minWidth: "400px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                border: "3px solid #E5E7EB",
                borderTopColor: "#7B00D4",
                borderRadius: "50%",
                animation: "spin 0.9s linear infinite",
                margin: "0 auto 24px auto",
              }}
            />
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#7B00D4",
                marginBottom: "12px",
              }}
            >
              Generating Your Campaign Ideas
            </div>
            <div style={{ fontSize: "14px", color: "#6B7280" }}>
              Analyzing your inputs to create targeted campaign ideas
            </div>
          </div>
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Page heading */}
      <div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#000000",
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
          marginTop: "40px",
          width: "100%",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <p style={{ fontSize: "13px", color: "#6B7280", maxWidth: "480px" }}>
            Describe your objective and audience. We&apos;ll surface ideas
            backed by engagement data.
          </p>
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
        <div>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "600",
              color: "#A100FF",
              marginBottom: "4px",
            }}
          >
            Campaign Objective
          </label>
          <p
            style={{
              fontSize: "13px",
              color: "#6B7280",
              marginTop: "0",
              marginBottom: "8px",
            }}
          >
            Brief about Campaign Objective
          </p>
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
              color: "#000000",
              fontFamily: "inherit",
              resize: "vertical",
              outline: "none",
            }}
            onFocus={(e) => {
              e.target.style.border = "2px solid #A100FF";
              e.target.style.padding = "11px";
            }}
            onBlur={(e) => {
              e.target.style.border = "1px solid #D1D5DB";
              e.target.style.padding = "12px";
            }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              fontStyle: "italic",
              marginTop: "10px",
              marginBottom: "32px",
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
            marginBottom: "28px",
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

        {/* Channel Preference + Geography */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginBottom: "28px",
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

        {/* Campaign Window */}
        <div style={{ marginBottom: "28px", width: "50%" }}>
          <MultiSelectDropdown
            label="Campaign Window"
            placeholder="Select campaign duration"
            options={WINDOW_OPTIONS}
            selected={campaignWindow}
            onChange={setCampaignWindow}
            multiSelect={false}
          />
        </div>

        {/* Number of Ideas to Surface */}
        <div style={{ marginBottom: "36px" }}>
          <label
            style={{
              display: "block",
              fontSize: "15px",
              fontWeight: "600",
              color: "#A100FF",
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
                color: "#000000",
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

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
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
              backgroundColor: "#A100FF",
              borderRadius: "12px",
              border: "none",
              fontSize: "15px",
              fontWeight: "600",
              color: "#FFFFFF",
              cursor: "pointer",
              marginTop: "10px",
              transition: "background-color 0.15s, transform 0.1s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#8a00db")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#A100FF")
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
