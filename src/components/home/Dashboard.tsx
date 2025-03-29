import { Check, Hourglass, Meh, Smile } from "lucide-react";

const Dashboard = () => {
  const data = [
    {
      icon: Check,
      title: "Applied",
      value: 46,
    },
    {
      icon: Hourglass,
      title: "Pending",
      value: 20,
    },
    {
      icon: Smile,
      title: "Accepted",
      value: 10,
    },
    {
      icon: Meh,
      title: "Rejected",
      value: 16,
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-secondary/20 shadow rounded-lg p-4 h-40 flex items-center justify-center flex-col gap-4 relative overflow-hidden"
          >
            <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="bg-secondary p-2 rounded-lg ">
              <item.icon size={32} />
            </div>
            <h3 className="text-2xl font-semibold">{item.value}</h3>
            <p className="text-xs text-gray-400 uppercase">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
