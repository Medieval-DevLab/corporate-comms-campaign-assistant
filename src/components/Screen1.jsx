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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/70">
          <div
            className="animate-spin rounded-full border-[3px] border-purple-200"
            style={{
              width: "24px",
              height: "24px",
              borderTopColor: "#7B00D4",
            }}
          />
        </div>
      )}

      {/* Page heading — sits on gray bg, no card */}
      <h1
        className="font-bold"
        style={{
          fontSize: "32px",
          color: "#111827",
          lineHeight: "1.2",
          marginBottom: "8px",
        }}
      >
        Welcome to Employee Communications Intelligence
      </h1>
      <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "32px" }}>
        Generate intelligent campaign ideas &amp; strategies tailored to your
        audience, platform, and objectives.
      </p>

      {/* White form card */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          border: "1px solid #E5E7EB",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          padding: "32px",
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between">
          <p style={{ fontSize: "13px", color: "#6B7280", maxWidth: "480px" }}>
            Describe your objective and audience. We&apos;ll surface ideas
            backed by engagement data.
          </p>
          <button
            type="button"
            onClick={onHowItWorks}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 bg-white"
            style={{
              border: "1px solid #D1D5DB",
              borderRadius: "999px",
              padding: "6px 14px",
              fontSize: "13px",
              color: "#374151",
            }}
          >
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
            How it works?
          </button>
        </div>

        {/* Campaign Objective */}
        <div style={{ marginTop: "24px" }}>
          <label
            className="block font-semibold"
            style={{ fontSize: "15px", color: "#7B00D4" }}
          >
            Campaign Objective
          </label>
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
          <textarea
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="Enter Text Here."
            style={{
              width: "100%",
              minHeight: "110px",
              border: "1px solid #D1D5DB",
              borderRadius: "8px",
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
          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              fontStyle: "italic",
              marginTop: "8px",
              marginBottom: "28px",
            }}
          >
            The more context you provide, the stronger the signal.
          </p>
        </div>

        {/* Audience Segment + Industry */}
        <div className="grid grid-cols-2 gap-6">
          <MultiSelectDropdown
            label="Audience Segment"
            subLabel="Select target audience"
            options={AUDIENCE_OPTIONS}
            selected={audience}
            onChange={setAudience}
          />
          <MultiSelectDropdown
            label="Industry"
            subLabel="Select industry vertical"
            options={INDUSTRY_OPTIONS}
            selected={industry}
            onChange={setIndustry}
          />
        </div>

        {/* Channel Preference + Geography */}
        <div className="grid grid-cols-2 gap-6" style={{ marginTop: "24px" }}>
          <MultiSelectDropdown
            label="Channel Preference"
            subLabel="Select communication channel"
            options={CHANNEL_OPTIONS}
            selected={channel}
            onChange={setChannel}
          />
          <MultiSelectDropdown
            label="Geography"
            subLabel="Select target region"
            options={GEOGRAPHY_OPTIONS}
            selected={geography}
            onChange={setGeography}
          />
        </div>

        {/* Campaign Window */}
        <div style={{ marginTop: "24px", width: "50%" }}>
          <MultiSelectDropdown
            label="Campaign Window"
            subLabel="Select campaign duration"
            options={WINDOW_OPTIONS}
            selected={campaignWindow}
            onChange={setCampaignWindow}
          />
        </div>

        {/* Number of Ideas to Surface */}
        <div style={{ marginTop: "24px" }}>
          <label
            className="block font-semibold"
            style={{ fontSize: "15px", color: "#7B00D4" }}
          >
            Number of Ideas to Surface
          </label>
          <div className="flex items-center" style={{ marginTop: "12px" }}>
            <button
              type="button"
              onClick={() => setIdeaCount((c) => Math.max(1, c - 1))}
              className="flex cursor-pointer items-center justify-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                border: "1px solid #E5E7EB",
                fontSize: "18px",
                color: "#374151",
                lineHeight: 1,
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
              className="font-bold"
              style={{
                fontSize: "24px",
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
              className="flex cursor-pointer items-center justify-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#F3F4F6",
                border: "1px solid #E5E7EB",
                fontSize: "18px",
                color: "#374151",
                lineHeight: 1,
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
            className="w-full cursor-pointer font-semibold text-white"
            style={{
              height: "52px",
              backgroundColor: "#7B00D4",
              borderRadius: "12px",
              border: "none",
              fontSize: "16px",
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
