import { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown({ label, subLabel, options, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (option) => {
    const next = selected.includes(option)
      ? selected.filter((s) => s !== option)
      : [...selected, option];
    onChange(next);
  };

  const displayText =
    selected.length === 0
      ? "Select Option"
      : selected.length === 1
        ? selected[0]
        : `${selected.length} selected`;

  return (
    <div>
      {label && (
        <label className="block text-base font-semibold text-purple-700">
          {label}
        </label>
      )}
      {subLabel && (
        <p className="mt-0.5 mb-2 text-sm text-gray-500">{subLabel}</p>
      )}

      <div ref={ref} className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-400"
        >
          <span className={selected.length > 0 ? "text-gray-800" : ""}>
            {displayText}
          </span>
          <svg
            className={`h-4 w-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute z-50 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-md">
            {options.map((option) => {
              const checked = selected.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggle(option)}
                  className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-[1.5px] ${
                      checked
                        ? "border-purple-700 bg-purple-700"
                        : "border-purple-700 bg-white"
                    }`}
                  >
                    {checked && (
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 12 12"
                      >
                        <path
                          d="M2.5 6l2.5 2.5 4.5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
