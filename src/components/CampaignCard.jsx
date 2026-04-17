import { useState } from "react";

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span className="absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-lg bg-gray-900 px-3 py-2 text-xs text-white shadow-lg">
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </span>
      )}
    </span>
  );
}

function InfoIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 7.5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="5.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export default function CampaignCard({ campaign, isCompare, onToggleCompare }) {
  const [subjectLine, setSubjectLine] = useState(campaign.subjectLine);
  const [audienceEdit, setAudienceEdit] = useState(campaign.audienceSegment);
  const [channelEdit, setChannelEdit] = useState(campaign.channel);
  const [feedback, setFeedback] = useState(null); // "good" | "not-relevant" | null

  return (
    <div
      className={`rounded-2xl border bg-white shadow-sm transition-all ${
        isCompare
          ? "border-2 border-purple-500 ring-2 ring-purple-100"
          : "border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="rounded-t-2xl bg-gradient-to-r from-purple-50 to-white px-6 pt-5 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {campaign.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{campaign.tagline}</p>
          </div>
          <button
            type="button"
            onClick={onToggleCompare}
            className={`shrink-0 cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              isCompare
                ? "bg-purple-500 text-white"
                : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {isCompare ? "Added to Compare" : "Compare"}
          </button>
        </div>

        {/* Quick stats row */}
        <div className="mt-4 flex gap-4">
          <div className="rounded-lg bg-white/80 px-3 py-2 text-center shadow-sm">
            <p className="text-xs text-gray-500">Engagement</p>
            <p className="text-sm font-bold text-purple-500">
              {campaign.estimatedEngagement}
            </p>
          </div>
          <div className="rounded-lg bg-white/80 px-3 py-2 text-center shadow-sm">
            <p className="text-xs text-gray-500">Best Send</p>
            <p className="text-sm font-bold text-gray-900">
              {campaign.bestSendTime}
            </p>
          </div>
          <div className="rounded-lg bg-white/80 px-3 py-2 text-center shadow-sm">
            <p className="text-xs text-gray-500">Window</p>
            <p className="text-sm font-bold text-gray-900">
              {campaign.campaignWindow}
            </p>
          </div>
        </div>
      </div>

      {/* Body — two column */}
      <div className="grid grid-cols-2 gap-6 px-6 py-5">
        {/* Left column */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Key Message
              </p>
              <Tooltip text="The central message that drives the campaign narrative">
                <InfoIcon />
              </Tooltip>
            </div>
            <p className="mt-1 text-sm text-gray-800">{campaign.keyMessage}</p>
          </div>

          {campaign.bodyContent.map((block) => (
            <div key={block.label}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {block.label}
              </p>
              <p className="mt-1 text-sm text-gray-700">{block.value}</p>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Subject Line
              </p>
              <Tooltip text="Editable — click to customize the subject line">
                <InfoIcon />
              </Tooltip>
            </div>
            <input
              type="text"
              value={subjectLine}
              onChange={(e) => setSubjectLine(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Pre-header
            </p>
            <p className="mt-1 text-sm text-gray-700">{campaign.preHeader}</p>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Audience
              </p>
              <Tooltip text="Editable — adjust the target audience">
                <InfoIcon />
              </Tooltip>
            </div>
            <input
              type="text"
              value={audienceEdit}
              onChange={(e) => setAudienceEdit(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Channel
              </p>
              <Tooltip text="Editable — change the distribution channel">
                <InfoIcon />
              </Tooltip>
            </div>
            <input
              type="text"
              value={channelEdit}
              onChange={(e) => setChannelEdit(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Tone
            </p>
            <p className="mt-1 text-sm text-gray-700">{campaign.tone}</p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Visual Direction
            </p>
            <p className="mt-1 text-sm text-gray-700">
              {campaign.visualDirection}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              KPIs
            </p>
            <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
              {campaign.kpis.map((kpi) => (
                <li key={kpi}>{kpi}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Was this helpful?</span>
          <button
            type="button"
            onClick={() => setFeedback(feedback === "good" ? null : "good")}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              feedback === "good"
                ? "bg-green-100 text-green-700"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Looks Good
          </button>
          <button
            type="button"
            onClick={() =>
              setFeedback(feedback === "not-relevant" ? null : "not-relevant")
            }
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              feedback === "not-relevant"
                ? "bg-red-100 text-red-700"
                : "border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            Not Relevant
          </button>
        </div>
        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-500">
          {campaign.ctaText}
        </span>
      </div>
    </div>
  );
}
