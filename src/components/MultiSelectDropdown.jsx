import { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown({
  label,
  subLabel,
  options,
  selected,
  onChange,
}) {
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
        <label
          className="block font-semibold"
          style={{ fontSize: "15px", color: "#7B00D4" }}
        >
          {label}
        </label>
      )}
      {subLabel && (
        <p
          className="font-normal"
          style={{
            fontSize: "13px",
            color: "#6B7280",
            marginTop: "2px",
            marginBottom: "8px",
          }}
        >
          {subLabel}
        </p>
      )}

      <div ref={ref} className="relative">
        {/* Trigger button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full cursor-pointer items-center justify-between bg-white"
          style={{
            height: "42px",
            border: "1px solid #D1D5DB",
            borderRadius: "8px",
            padding: "0 12px",
            fontSize: "14px",
            color: selected.length > 0 ? "#374151" : "#9CA3AF",
          }}
        >
          <span>{displayText}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.15s ease",
            }}
          >
            <path
              d="M3.5 5.25L7 8.75L10.5 5.25"
              stroke="#9CA3AF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dropdown panel */}
        {open && (
          <div
            className="absolute z-50 mt-1 w-full bg-white"
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            {options.map((option) => {
              const checked = selected.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => toggle(option)}
                  className="flex w-full cursor-pointer items-center"
                  style={{
                    padding: "10px 16px",
                    fontSize: "14px",
                    color: "#374151",
                    gap: "10px",
                    background: "transparent",
                    border: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F9FAFB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {/* Custom checkbox */}
                  <span
                    className="flex shrink-0 items-center justify-center"
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "3px",
                      border: `1.5px solid #7B00D4`,
                      backgroundColor: checked ? "#7B00D4" : "#FFFFFF",
                    }}
                  >
                    {checked && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5L4 7L8 3"
                          stroke="white"
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
