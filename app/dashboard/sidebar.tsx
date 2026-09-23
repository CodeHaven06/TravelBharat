export default function Sidebar() {
  return (
    <aside
      className="
        w-full bg-blue-950 text-white
        lg:fixed lg:left-0 lg:top-16 lg:h-[calc(100vh-4rem)] lg:w-64
      "
    >
      <div className="p-5">
        <h2 className="mb-4 text-xl font-bold">
          Dashboard
        </h2>

        <nav className="space-y-2">
          <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-blue-800">
            📊 Dashboard
          </button>

          <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-blue-800">
            📍 Destinations
          </button>

          <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-blue-800">
            🗺️ States
          </button>

          <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-blue-800">
            📂 Categories
          </button>

          <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-blue-800">
            🖼️ Images
          </button>
        </nav>
      </div>
    </aside>
  );
}