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
        <img
          src="/accenture-logo.png"
          alt="Accenture"
          style={{ height: "32px", width: "auto", objectFit: "contain" }}
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
            fontSize: "20px",
            fontWeight: "700",
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
