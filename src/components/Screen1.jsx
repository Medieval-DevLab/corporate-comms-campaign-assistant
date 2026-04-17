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
    <div className="relative mx-auto max-w-4xl px-6 py-12">
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-700" />
            <p className="text-sm font-medium text-gray-600">
              Generating campaign ideas...
            </p>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-900">
        Welcome to Employee Communications Intelligence
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Generate intelligent campaign ideas &amp; strategies tailored to your
        audience, platform, and objectives.
      </p>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <p className="text-sm text-gray-600">
            Describe your objective and audience. We&apos;ll surface ideas
            backed by engagement data.
          </p>
          <button
            type="button"
            onClick={onHowItWorks}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
          >
            <svg
              className="h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8 7.5V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
            </svg>
            How it works?
          </button>
        </div>

        {/* Campaign Objective */}
        <div className="mt-6">
          <label className="block text-base font-semibold text-purple-700">
            Campaign Objective
          </label>
          <p className="mt-0.5 mb-2 text-sm text-gray-500">
            Brief about Campaign Objective
          </p>
          <textarea
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="Enter Text Here."
            className="min-h-[120px] w-full rounded-xl border border-gray-300 p-4 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <p className="mt-2 text-sm italic text-gray-400">
            The more context you provide, the stronger the signal.
          </p>
        </div>

        {/* Audience + Industry */}
        <div className="mt-6 grid grid-cols-2 gap-6">
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

        {/* Channel + Geography */}
        <div className="mt-6 grid grid-cols-2 gap-6">
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
        <div className="mt-6 w-1/2">
          <MultiSelectDropdown
            label="Campaign Window"
            subLabel="Select campaign timeframe"
            options={WINDOW_OPTIONS}
            selected={campaignWindow}
            onChange={setCampaignWindow}
          />
        </div>

        {/* Number of Ideas */}
        <div className="mt-6">
          <label className="block text-base font-semibold text-purple-700">
            Number of Ideas to Surface
          </label>
          <div className="mt-3 flex items-center">
            <button
              type="button"
              onClick={() => setIdeaCount((c) => Math.max(1, c - 1))}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-lg font-medium text-gray-700 hover:bg-gray-200"
            >
              −
            </button>
            <span className="mx-4 text-2xl font-bold text-gray-900">
              {ideaCount}
            </span>
            <button
              type="button"
              onClick={() => setIdeaCount((c) => Math.min(5, c + 1))}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-lg font-medium text-gray-700 hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="mb-3 text-sm text-gray-500">
            Click below to generate the top campaign ideas
          </p>
          <button
            type="button"
            onClick={handleGenerate}
            className="w-full cursor-pointer rounded-2xl bg-[#7B00D4] py-4 text-base font-semibold text-white hover:bg-purple-800"
          >
            Find What Works
          </button>
        </div>
      </div>
    </div>
  );
}
