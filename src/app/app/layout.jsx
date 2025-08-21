import Sidebar from "../components/assets/Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Content on the right */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
