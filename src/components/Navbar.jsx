export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-6">
      {/* Left side */}
      <div className="flex items-center">
        {/* Purple solid triangle */}
        <span style={{ color: "#7B00D4", fontSize: "18px", lineHeight: 1 }}>
          ▶
        </span>

        {/* Vertical divider */}
        <div
          className="bg-gray-200"
          style={{ width: "1px", height: "28px", margin: "0 16px" }}
        />

        <span className="font-semibold text-gray-900" style={{ fontSize: "16px" }}>
          Employee Communications Intelligence
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2.5">
        <img
          src="https://i.pravatar.cc/36"
          alt="Avatar"
          className="rounded-full object-cover"
          style={{ width: "36px", height: "36px" }}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900" style={{ fontSize: "14px" }}>
              John Smith
            </span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2.5 4L5 6.5L7.5 4"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>Designation</span>
        </div>
      </div>
    </nav>
  );
}
