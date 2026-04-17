export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between bg-white px-6"
      style={{ height: "56px", borderBottom: "1px solid #E5E7EB" }}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Purple triangle / play icon */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 2L18 10L4 18V2Z" fill="#7B00D4" />
        </svg>

        {/* Vertical divider */}
        <div
          style={{
            width: "1px",
            height: "28px",
            backgroundColor: "#E5E7EB",
          }}
        />

        <span
          className="font-semibold text-gray-900"
          style={{ fontSize: "16px" }}
        >
          Employee Communications Intelligence
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
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
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span
              className="font-semibold text-gray-900"
              style={{ fontSize: "14px" }}
            >
              John Smith
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              style={{ marginTop: "1px" }}
            >
              <path
                d="M2.5 4L5 6.5L7.5 4"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>
            Designation
          </span>
        </div>
      </div>
    </nav>
  );
}
