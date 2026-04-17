import { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown({
  label,
  subLabel,
  placeholder = "Select Option",
  options,
  selected,
  onChange,
  multiSelect = true,
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
    if (multiSelect) {
      const next = selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option];
      onChange(next);
    } else {
      onChange(selected[0] === option ? [] : [option]);
      setOpen(false);
    }
  };

  const displayText =
    selected.length === 0
      ? placeholder
      : selected.length === 1
        ? selected[0]
        : `${selected.length} selected`;

  return (
    <div>
      {label && (
        <label
          style={{
            display: "block",
            fontSize: "15px",
            fontWeight: "600",
            color: "#A100FF",
          }}
        >
          {label}
        </label>
      )}
      {subLabel && (
        <p
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

      <div ref={ref} style={{ position: "relative" }}>
        {/* Trigger button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            height: "42px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #D1D5DB",
            borderRadius: "10px",
            padding: "0 12px",
            fontSize: "14px",
            color: selected.length > 0 ? "#374151" : "#9CA3AF",
            cursor: "pointer",
            fontFamily: "inherit",
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
              flexShrink: 0,
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
            style={{
              position: "absolute",
              zIndex: 50,
              marginTop: "4px",
              width: "100%",
              backgroundColor: "#FFFFFF",
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
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 16px",
                    fontSize: "14px",
                    color: "#374151",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#F9FAFB")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {/* Custom checkbox / radio */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "16px",
                      height: "16px",
                      borderRadius: multiSelect ? "3px" : "50%",
                      border: "1.5px solid #A100FF",
                      backgroundColor: checked ? "#A100FF" : "#FFFFFF",
                      flexShrink: 0,
                    }}
                  >
                    {checked && multiSelect && (
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
                    {checked && !multiSelect && (
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#FFFFFF",
                        }}
                      />
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
