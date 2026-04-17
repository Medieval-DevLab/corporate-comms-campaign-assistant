export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <span style={{ color: "#7B00D4", fontSize: "18px" }}>&#9654;</span>
        <div
          style={{
            width: "1px",
            height: "28px",
            backgroundColor: "#E5E7EB",
          }}
        />
        <span
          style={{ fontWeight: "600", fontSize: "15px", color: "#111827" }}
        >
          Employee Communications Intelligence
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://i.pravatar.cc/36"
          alt="Avatar"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div>
          <div
            style={{ fontWeight: "600", fontSize: "14px", color: "#111827" }}
          >
            John Smith{" "}
            <span style={{ color: "#9CA3AF", fontSize: "12px" }}>&#8744;</span>
          </div>
          <div style={{ fontSize: "12px", color: "#9CA3AF" }}>Designation</div>
        </div>
      </div>
    </nav>
  );
}
