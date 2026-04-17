export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M6 4L20 14L6 24V4Z"
              fill="#7B00D4"
              stroke="#7B00D4"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mx-2 h-8 w-px bg-gray-200" />
        <span className="text-lg font-semibold text-gray-900">
          Employee Communications Intelligence
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="mx-2 h-8 w-px bg-gray-200" />
        <img
          src="https://i.pravatar.cc/36"
          alt="Avatar"
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-gray-900">
              John Smith
            </span>
            <svg
              className="h-3 w-3 text-gray-500"
              fill="none"
              viewBox="0 0 12 12"
            >
              <path
                d="M3 5l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500">Designation</span>
        </div>
      </div>
    </nav>
  );
}
