import AllResume from "@/components/home/AllResume";
import BarGraph from "@/components/home/BarGraph";
import Dashboard from "@/components/home/Dashboard";

export default async function Home() {
  return (
    <div className="p-2">
      <div className="flex lg:flex-row flex-col gap-2">
        <Dashboard />
        <BarGraph />
      </div>
      <AllResume />
    </div>
  );
}
