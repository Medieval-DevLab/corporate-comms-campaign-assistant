export const campaigns = [
  {
    id: 1,
    label: "Campaign 1",
    title: '"AI at Your Side" — Weekly AI Tips Series',
    geo: "India · Technology & Innovation",
    campaignType: "Good to Know + Action (2-part)",
    targetAudience: "All Technology + Innovation Community members",
    strongestChannel: "GMA + Mailer",
    peakWindow: "Tuesdays 9–10am",
    timingRestriction:
      "GMA data: 62% of Technology clicks occur Tue–Wed morning",
    openRate: "39-43%",
    clickRate: "11-15%",
    signalStrength: "87%",
    orgAvg: "28%",
    increase: "↑ +13pp",
    evidence: [
      "New AI Learning Paths — 37% open, 14% click",
      "Tech Fluency Assessment — 35% open, 12% click",
    ],
    aiRationale:
      "3.1× Viva velocity + 8,920 posts signals sustained interest. Technology org is the highest click segment (42% open). Weekly series format reduces content fatigue and builds habit — modelled on GMA recurring structure.",
    subjectLine:
      "Your weekly AI tip: 3 ways to prompt Copilot better this week",
    generatedAudience: "All Technology + Innovation Community members",
    generatedChannel: "Rich Text Email via GMA",
    subjectLineRationale:
      "Action-oriented, personalised, specific — mirrors top-performing subjects from RAG retrieval.",
  },
  {
    id: 2,
    label: "Campaign 2",
    title: '"Hybrid Work Policy Explainer"',
    geo: "EMEA · Operations",
    campaignType: "Good to Know + Action (2-part)",
    targetAudience: "All Accenture operations prioritised wave 1",
    strongestChannel: "GMA + Mailer (2-part series)",
    peakWindow: "Monday 8am",
    timingRestriction:
      "GMA Data: Monday morning has 28% higher read rates for policy communications",
    openRate: "40-45%",
    clickRate: "8-12%",
    signalStrength: "81%",
    orgAvg: "32%",
    increase: "↑ +17pp",
    evidence: [
      "Introducing Flexible Fridays — 41% open, 9% click",
      "Return-to-Office Guidelines — 38% open, 8% click",
    ],
    aiRationale:
      "Policy content consistently outperforms on Monday sends across EMEA. Operations segment shows highest read-through rates for compliance-adjacent communications. Two-part format improves comprehension and action rates.",
    subjectLine:
      "What the new hybrid policy means for your team — and what to do next",
    generatedAudience: "All Accenture operations prioritised wave 1",
    generatedChannel: "GMA + Mailer",
    subjectLineRationale:
      "Policy-framing with a clear action prompt — consistent with top-performing policy subject lines in the evidence base.",
  },
  {
    id: 3,
    label: "Campaign 3",
    title: '"Your Growth Path" — Performance & Promotion Resources',
    geo: "Global · Level 9–13",
    campaignType: "Action (Required)",
    targetAudience: "Level 9–13 Global — Early Career prioritised",
    strongestChannel: "Mailer Action + Portal notification card",
    peakWindow: "Aligned to performance review open window",
    timingRestriction:
      "Peer Feedback Nudge (same audience) showed 16% click — highest L9–13 result; timing amplifies relevance",
    openRate: "41-46%",
    clickRate: "15-19%",
    signalStrength: "84%",
    orgAvg: "30%",
    increase: "↑ +16pp",
    evidence: [
      "New AI Learning Paths — 37% open, 14% click",
      "Tech Fluency Assessment — 35% open, 12% click",
    ],
    aiRationale:
      "Early career segment shows highest engagement on career development content. Performance review window creates contextual relevance. Portal notification card drives secondary touchpoint for non-openers.",
    subjectLine:
      "Your performance review is open — here's everything you need in one place",
    generatedAudience: "Level 9–13 Global — Early Career prioritised",
    generatedChannel: "Mailer Action + Portal notification card",
    subjectLineRationale:
      "Urgency-led, resource-forward — mirrors highest-performing career communications in the evidence base.",
  },
  {
    id: 4,
    label: "Campaign 4",
    title: '"Mind Matters" — Wellbeing Resource Campaign',
    geo: "India · Technology & Innovation",
    campaignType: "Good to Know",
    targetAudience: "All Accenture",
    strongestChannel: "GMA + Mailer (2-part series)",
    peakWindow: "Thursday 2pm",
    timingRestriction:
      "GMA data: wellbeing content peaks Thursday afternoon — lowest meeting density window globally",
    openRate: "38-42%",
    clickRate: "6-10%",
    signalStrength: "74%",
    orgAvg: "28%",
    increase: "↑ +13pp",
    evidence: [
      "New Wellbeing Resources Available — 36% open, 7% click",
      "Mental Health First Aid Training — 35% open, 9% click",
    ],
    aiRationale:
      "Mixed sentiment is the KEY signal — employees are aware of the issue but not feeling supported. A resource-forward campaign directly addresses the gap. Past wellbeing Good to Know campaigns: steady 35–38% open rate.",
    subjectLine:
      "Five ways Accenture supports your wellbeing — resources inside",
    generatedAudience: "All Accenture",
    generatedChannel: "Good to Know",
    subjectLineRationale:
      "Specific number ('Five ways') + promise of resources drives both opens and clicks",
  },
  {
    id: 5,
    label: "Campaign 5",
    title: '"Our Planet, Our Commitment" — Sustainability Update',
    geo: "Global · Strategy & Green Community",
    campaignType: "Notification",
    targetAudience: "Strategy org + Green Accenture community members",
    strongestChannel: "Mailer Notification",
    peakWindow: "Wednesday 10am",
    timingRestriction:
      "Accenture Sustainability Report 2025 — 34% open, 8% click Social Impact Day Sign-Ups Open — 33% open, 7% click",
    openRate: "34-38%",
    clickRate: "7-11%",
    signalStrength: "70%",
    orgAvg: "28%",
    increase: "↑ +13pp",
    evidence: [
      "Introducing Flexible Fridays — 41% open, 9% click",
      "Return-to-Office Guidelines — 38% open, 8% click",
    ],
    aiRationale:
      "Lowest post volume but HIGHEST reactions per post (21.0) — signals a highly passionate niche audience. A targeted notification to the Strategy org and sustainability community will outperform a broad send. Quality over reach is the correct metric here.",
    subjectLine:
      "FY25 sustainability progress: where we are and what comes next",
    generatedAudience: "Strategy org + Green Accenture community members",
    generatedChannel: "Mailer Notification — targeted send",
    subjectLineRationale:
      "Progress framing ('where we are') with forward momentum ('what comes next') drives curiosity opens",
  },
];

export const comparisonDimensions = [
  { key: "campaignType", label: "Campaign Type" },
  { key: "targetAudience", label: "Target Audience" },
  { key: "strongestChannel", label: "Strongest Signal Channel" },
  { key: "peakWindow", label: "Peak Engagement Window" },
  { key: "openRate", label: "Open Rate" },
  { key: "clickRate", label: "Click Rate" },
  { key: "signalStrength", label: "Signal Strength" },
];
