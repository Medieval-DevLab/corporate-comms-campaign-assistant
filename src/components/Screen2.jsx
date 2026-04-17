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
    <>
      {/* Back button */}
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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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

      {/* Page header */}
      <div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#111827",
            margin: 0,
          }}
        >
          Generated Campaign Ideas
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#6B7280",
            marginTop: "6px",
            marginBottom: 0,
          }}
        >
          Here are five campaign ideas generated based on your inputs, designed
          to align with your objectives and target audience.
        </p>
        <button
          type="button"
          disabled={!canCompare}
          onClick={() => {
            const selected = campaigns.filter((c) => compareSet.has(c.id));
            onCompare(selected);
          }}
          style={{
            marginTop: "24px",
            marginBottom: "28px",
            border: canCompare ? "2px solid #7B00D4" : "2px solid #D1D5DB",
            borderRadius: "999px",
            padding: "8px 24px",
            fontSize: "14px",
            fontWeight: "600",
            color: canCompare ? "#7B00D4" : "#9CA3AF",
            backgroundColor: "#FFFFFF",
            cursor: canCompare ? "pointer" : "not-allowed",
            fontFamily: "inherit",
          }}
        >
          Compare ideas ({compareSet.size})
        </button>
      </div>

      {/* Campaign cards */}
      <div>
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            isCompare={compareSet.has(campaign.id)}
            onToggleCompare={() => toggleCompare(campaign.id)}
          />
        ))}
      </div>
    </>
  );
}
