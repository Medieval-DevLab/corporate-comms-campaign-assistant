export default function HowItWorks({ onBack }) {
  return (
    <>
      <button
        type="button"
        onClick={onBack}
        className="mb-6 flex cursor-pointer items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
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

      <h1 className="text-3xl font-bold text-gray-900">How It Works</h1>
      <p className="mt-2 text-sm text-gray-500">
        A quick guide to getting the most out of Employee Communications
        Intelligence.
      </p>

      {/* Section 1 */}
      <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">What It Does</h2>
        <p className="mt-3 leading-relaxed text-gray-600">
          Corporate Communications Campaign Assistant analyzes your campaign objective,
          audience, channel preferences, and timing to generate data-backed
          campaign ideas. Each idea comes with a recommended subject line,
          messaging framework, visual direction, engagement estimate, and KPIs —
          all tailored to your specific context.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">How It Works</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              step: "1",
              title: "Describe your objective",
              desc: "Tell us what you're trying to achieve — launching a new tool, driving awareness of a policy change, boosting engagement with a program, etc.",
            },
            {
              step: "2",
              title: "Select your audience & channel",
              desc: "Choose the employee segment you're targeting and your preferred communication channels. You can select multiple options for each.",
            },
            {
              step: "3",
              title: "Set timing & quantity",
              desc: "Pick a campaign window and how many ideas you'd like generated. The engine optimizes send times based on historical engagement data.",
            },
            {
              step: "4",
              title: "Review, compare & refine",
              desc: "Browse the generated ideas, edit subject lines and audience fields inline, give feedback, and compare your top picks side by side.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">
          What It Doesn&apos;t Do
        </h2>
        <ul className="mt-4 space-y-3">
          {[
            "It does not send emails or publish content — it only generates recommendations.",
            "It does not access your organization's private employee data or PII.",
            "It does not replace your editorial judgment — think of it as a creative co-pilot, not an auto-publisher.",
            "It does not guarantee engagement outcomes — estimates are based on historical patterns and industry benchmarks.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs text-red-500">
                ✕
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
