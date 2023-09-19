import { Sidebar } from "../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="bg-slate-100 w-screen overflow-y-scroll h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
        <div className="flex">
          <Sidebar />
          <div className="p-2 w-full text-slate-900">
            {children}
          </div>
        </div>
      </div>
  );
}
