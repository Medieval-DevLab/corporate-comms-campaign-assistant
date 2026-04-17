import { useState } from "react";

export default function HomeScreen({ onStartProject, onExploreFree }) {
  const [showModal, setShowModal] = useState(false);
  const [nameInput, setNameInput] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3F4F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "20px",
          padding: "56px 64px",
          textAlign: "center",
          maxWidth: "480px",
          width: "90%",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          border: "1px solid #E5E7EB",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 36 36"
          fill="none"
          style={{ marginBottom: "20px" }}
        >
          <polygon points="6,4 6,16 22,10" fill="#7B00D4" />
          <polygon points="6,20 6,32 22,26" fill="#7B00D4" />
        </svg>

        <div
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "8px",
          }}
        >
          Corporate Communications Campaign Assistant
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "#6B7280",
            marginBottom: "40px",
          }}
        >
          Generate intelligent campaign ideas backed by engagement data.
        </div>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            style={{
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: "600",
              background: "#7B00D4",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6500B0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#7B00D4")}
          >
            Start New Project
          </button>
          <button
            type="button"
            onClick={onExploreFree}
            style={{
              padding: "12px 28px",
              fontSize: "14px",
              fontWeight: "600",
              background: "#FFFFFF",
              color: "#7B00D4",
              border: "2px solid #7B00D4",
              borderRadius: "10px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F5F3FF")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FFFFFF")}
          >
            Explore Freely
          </button>
        </div>
      </div>

      {/* Project name modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "36px 40px",
              width: "100%",
              maxWidth: "440px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: "6px",
              }}
            >
              Name your project
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "#6B7280",
                marginBottom: "24px",
              }}
            >
              Give this campaign project a name so you can find it later.
            </div>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="e.g. Q3 AI Awareness Campaign"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
                fontSize: "14px",
                fontFamily: "inherit",
                outline: "none",
                marginBottom: "20px",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#7B00D4")}
              onBlur={(e) => (e.target.style.borderColor = "#D1D5DB")}
            />
            <div style={{ display: "flex", gap: "12px", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => {
                  setShowModal(false);
                  setNameInput("");
                }}
                style={{
                  padding: "9px 20px",
                  fontSize: "13px",
                  fontWeight: "500",
                  background: "#FFFFFF",
                  color: "#374151",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!nameInput.trim()}
                onClick={() => {
                  onStartProject(nameInput.trim());
                  setShowModal(false);
                  setNameInput("");
                }}
                style={{
                  padding: "9px 20px",
                  fontSize: "13px",
                  fontWeight: "600",
                  background: nameInput.trim() ? "#7B00D4" : "#D1D5DB",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "8px",
                  cursor: nameInput.trim() ? "pointer" : "not-allowed",
                  fontFamily: "inherit",
                }}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
