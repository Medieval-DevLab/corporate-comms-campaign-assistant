import { useState } from "react";
import CampaignCard from "./CampaignCard";
import { campaigns } from "../data/campaigns";

export default function Screen2({ onCompare, onBack }) {
  const [compareSet, setCompareSet] = useState(new Set());

  const toggleCompare = (id) => {
    setCompareSet((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const canCompare = compareSet.size >= 2;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-start justify-between">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="mb-4 flex cursor-pointer items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 16 16">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Input
          </button>
          <h1 className="text-3xl font-bold text-gray-900">
            Generated Campaign Ideas
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Review the AI-generated campaign ideas below. Toggle cards to
            compare, give feedback, or edit fields directly.
          </p>
        </div>

        <button
          type="button"
          disabled={!canCompare}
          onClick={() => {
            const selected = campaigns.filter((c) => compareSet.has(c.id));
            onCompare(selected);
          }}
          className={`shrink-0 rounded-2xl px-6 py-3 text-sm font-semibold transition-colors ${
            canCompare
              ? "cursor-pointer bg-[#7B00D4] text-white hover:bg-purple-800"
              : "cursor-not-allowed bg-gray-200 text-gray-400"
          }`}
        >
          Compare Ideas ({compareSet.size})
        </button>
      </div>

      <div className="mt-8 space-y-6">
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            isCompare={compareSet.has(campaign.id)}
            onToggleCompare={() => toggleCompare(campaign.id)}
          />
        ))}
      </div>
    </div>
  );
}
