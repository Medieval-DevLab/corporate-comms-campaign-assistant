export default function Navbar() {
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <polygon points="6,4 6,16 22,10" fill="#7B00D4" />
          <polygon points="6,20 6,32 22,26" fill="#7B00D4" />
        </svg>
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
            fontSize: "17px",
            fontWeight: "600",
            color: "#111827",
            whiteSpace: "nowrap",
          }}
        >
          Employee Communications Intelligence
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "1px",
            height: "32px",
            backgroundColor: "#D1D5DB",
            margin: "0 24px",
          }}
        />
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
          <div
            style={{ fontSize: "15px", fontWeight: "600", color: "#111827" }}
          >
            John Smith ∨
          </div>
          <div
            style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "2px" }}
          >
            Designation
          </div>
        </div>
      </div>
    </nav>
  );
}
