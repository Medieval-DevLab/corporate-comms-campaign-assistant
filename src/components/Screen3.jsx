import { comparisonDimensions } from "../data/campaigns";

export default function Screen3({ selectedCampaigns, onBack }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
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
        Back to Results
      </button>

      <h1 className="text-3xl font-bold text-gray-900">
        Campaign Comparison
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        Side-by-side comparison of your selected campaigns across key
        dimensions.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Dimension
              </th>
              {selectedCampaigns.map((c) => (
                <th
                  key={c.id}
                  className="px-6 py-4 text-xs font-semibold text-purple-700 uppercase tracking-wide"
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonDimensions.map((dim, i) => (
              <tr
                key={dim.key}
                className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <td className="px-6 py-4 font-medium text-gray-700">
                  {dim.label}
                </td>
                {selectedCampaigns.map((c) => (
                  <td key={c.id} className="px-6 py-4 text-gray-600">
                    {Array.isArray(c[dim.key])
                      ? c[dim.key].join(", ")
                      : c[dim.key]}
                  </td>
                ))}
              </tr>
            ))}
            {/* KPIs row */}
            <tr className="border-b border-gray-100 bg-white">
              <td className="px-6 py-4 font-medium text-gray-700">KPIs</td>
              {selectedCampaigns.map((c) => (
                <td key={c.id} className="px-6 py-4 text-gray-600">
                  <ul className="list-inside list-disc space-y-1">
                    {c.kpis.map((kpi) => (
                      <li key={kpi}>{kpi}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
