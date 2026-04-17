import { useState } from "react";

const logoSrc = `${import.meta.env.BASE_URL}Accenture logo.png`;

export default function HomeScreen({ onStartProject, onExploreFree }) {
  const [showModal, setShowModal] = useState(false);
  const [nameInput, setNameInput] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4A00A0 0%, #A100FF 50%, #9B30FF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.97)",
          borderRadius: "24px",
          padding: "52px 56px",
          maxWidth: "460px",
          width: "90%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
        }}
      >
        {/* Logo */}
        <img
          src={logoSrc}
          alt="Accenture"
          style={{
            height: "36px",
            width: "auto",
            objectFit: "contain",
            display: "block",
            margin: "0 auto 36px auto",
          }}
        />

        {/* Product name */}
        <div
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#111827",
            lineHeight: 1.3,
            marginBottom: "12px",
            letterSpacing: "-0.02em",
          }}
        >
          Corporate Communications
          <br />
          Campaign Assistant
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "13px",
            color: "#6B7280",
            lineHeight: 1.6,
            maxWidth: "320px",
            margin: "0 auto 48px auto",
          }}
        >
          Surface campaign ideas backed by real engagement data.
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "#F3F4F6",
            marginBottom: "28px",
          }}
        />

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
          }}
        >
          <button
            type="button"
            onClick={() => setShowModal(true)}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "14px",
              fontWeight: "600",
              background: "#A100FF",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontFamily: "inherit",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#8B00DB")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#A100FF")}
          >
            Start New Project
          </button>
          <button
            type="button"
            onClick={onExploreFree}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "14px",
              fontWeight: "500",
              background: "#FFFFFF",
              color: "#A100FF",
              border: "1.5px solid #A100FF",
              borderRadius: "12px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F9F0FF")}
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
              onFocus={(e) => (e.target.style.borderColor = "#A100FF")}
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
                  background: nameInput.trim() ? "#A100FF" : "#D1D5DB",
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
