import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard de la aplicación",
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl mt-2">Dashboard</h1>
      <span className="text-xl">Información General</span>
      <WidgetsGrid />
    </div>
  );
}