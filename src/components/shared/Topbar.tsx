import Image from "next/image";
import { Input } from "../ui/input";
import { Bell, Search } from "lucide-react";
import { SidebarTrigger } from "../ui/sidebar";

const Topbar = () => {
  return (
    <div className="bg-secondary max-md:bg-secondary/40 p-2 md:m-2 md:rounded-lg h-12 max-md:backdrop-blur-lg absolute inset-0 z-10 flex items-center justify-between md:gap-4 gap-2 max-md:py-8">
      <Image src="/logo.png" alt="logo" width={36} height={36} className="" />

      <div className="flex items-center justify-center w-full">
        <div className="md:w-1/2 w-full flex items-center px-4 border rounded-lg h-8 gap-1">
          <Search size={18} />
          <Input
            type="text"
            placeholder="Search globally..."
            className="w-full bg-transparent dark:bg-transparent rounded-lg text-sm h-full border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none p-1"
          />
        </div>
      </div>

      <Bell className="mr-1 max-md:hidden" size={28} />
      <SidebarTrigger className="md:hidden" size={"lg"} />
    </div>
  );
};

export default Topbar;
