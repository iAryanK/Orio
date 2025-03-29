import { CircleHelp, File, Plus } from "lucide-react";
import Image from "next/image";
import Help from "../shared/Help";

const AllResume = () => {
  return (
    <div className="mt-5 space-y-4">
      <div className="flex items-center gap-2">
        <h2>Your Resume</h2>
        <Help message="You can upload multiple resume here, to highlight different skills and experience for different jobs.">
          <CircleHelp size={18} className="opacity-60" />
        </Help>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
        {[1, 2].map((item) => (
          <div
            className="bg-secondary/40 p-2 rounded-lg h-fit w-40 z-0 shadow mb-2"
            key={item}
          >
            <div className="rounded-lg z-10 border bg-secondary/20 flex items-center justify-center w-full h-24 relative hover:bg-secondary/50 transition-all duration-200 ease-in-out">
              <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
              <Image
                src="/icons/file-pdf.svg"
                alt="resume"
                width={28}
                height={28}
                className="dark:invert invert-0"
              />
            </div>
            <div>
              <p className="text-sm mt-2 font-light flex items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
                <File size={16} /> Resume_name.pdf
              </p>
              <p className="text-xs opacity-50 font-extralight mt-1 flex items-center justify-between">
                <span>29-03-2025</span>
                <span>20:15 PM</span>
              </p>
            </div>
          </div>
        ))}
        <div className="bg-secondary/40 hover:bg-secondary/50 transition-all duration-200 ease-in-out p-2 rounded-lg h-40 min-w-40 z-0 relative flex flex-col items-center justify-center shadow">
          <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          <Plus size={36} />
          <p className="text-xs uppercase mt-2 font-extralight">Add Resume</p>
        </div>
      </div>
    </div>
  );
};

export default AllResume;
