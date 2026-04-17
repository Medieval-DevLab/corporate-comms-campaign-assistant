import { useState, useEffect, useRef } from "react";

export default function Navbar({ projectName, onNavigateHome }) {
  const [saved, setSaved] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const dropdownRef = useRef(null);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  useEffect(() => {
    if (!showProjects) return;
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowProjects(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showProjects]);

  const btnStyle = {
    padding: "7px 16px",
    fontSize: "13px",
    fontWeight: "500",
    background: "#FFFFFF",
    color: "#374151",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    fontFamily: "inherit",
  };

  return (
    <nav
      style={{
        height: "72px",
        backgroundColor: "#FFFFFF",
        borderBottom: "2px solid #E5E7EB",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      {/* Left side */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/Accenture logo.png"
          alt="Accenture"
          style={{ height: "28px", width: "auto", objectFit: "contain" }}
        />
        <div
          style={{
            width: "1px",
            height: "32px",
            backgroundColor: "#D1D5DB",
            margin: "0 20px",
          }}
        />
        <span
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#111827",
            whiteSpace: "nowrap",
          }}
        >
          Corporate Communications Campaign Assistant
        </span>
        {projectName && (
          <>
            <span style={{ fontSize: "12px", color: "#9CA3AF", margin: "0 6px" }}>
              ›
            </span>
            <span style={{ fontSize: "14px", fontWeight: 500, color: "#7B00D4" }}>
              {projectName}
            </span>
          </>
        )}
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", position: "relative" }}>
        {/* Save Project */}
        <button
          type="button"
          onClick={handleSave}
          style={{
            ...btnStyle,
            ...(saved
              ? { background: "#F0FDF4", border: "1px solid #16A34A", color: "#16A34A" }
              : {}),
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>
          {saved ? "Saved ✓" : "Save Project"}
        </button>

        {/* My Projects */}
        <div ref={dropdownRef} style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => setShowProjects((v) => !v)}
            style={btnStyle}
          >
            My Projects ▾
          </button>

          {showProjects && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                right: 0,
                background: "#FFFFFF",
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                minWidth: "240px",
                zIndex: 200,
                padding: "8px 0",
              }}
            >
              <div
                style={{
                  padding: "8px 16px 6px",
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#9CA3AF",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Recent Projects
              </div>

              {[
                { name: "Q3 AI Awareness Campaign", date: "Saved 2 days ago" },
                { name: "EMEA Policy Comms", date: "Saved 5 days ago" },
                { name: "Global Onboarding Push", date: "Saved 1 week ago" },
              ].map((p) => (
                <div
                  key={p.name}
                  style={{
                    padding: "10px 16px",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <div style={{ fontSize: "13px", fontWeight: "500", color: "#111827" }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "2px" }}>
                    {p.date}
                  </div>
                </div>
              ))}

              <div style={{ borderTop: "1px solid #F0F0F0", margin: "6px 0" }} />

              <div
                onClick={() => {
                  setShowProjects(false);
                  if (onNavigateHome) onNavigateHome();
                }}
                style={{
                  padding: "10px 16px",
                  fontSize: "13px",
                  color: "#7B00D4",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F9FAFB")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                + Start New Project
              </div>
            </div>
          )}
        </div>

        {/* Vertical divider */}
        <div style={{ width: "1px", height: "28px", backgroundColor: "#E5E7EB", margin: "0 8px" }} />

        {/* User profile */}
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "10px",
          }}
        />
        <div>
          <div style={{ fontSize: "13px", fontWeight: "600", color: "#111827" }}>
            John Smith ∨
          </div>
          <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "2px" }}>
            Designation
          </div>
        </div>
      </div>
    </nav>
  );
}
