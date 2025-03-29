import { CircleHelp, Github, Plus } from "lucide-react";
import Help from "../shared/Help";
import { Badge } from "../ui/badge";

const SocialLinks = () => {
  return (
    <div className="mt-5 space-y-4">
      <div className="flex items-center gap-2">
        <h2>Your Social Links</h2>
        <Help message="You can upload multiple resume here, to highlight different skills and experience for different jobs.">
          <CircleHelp size={18} className="opacity-60" />
        </Help>
      </div>

      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="bg-secondary/60 hover:bg-secondary/50 transition-all duration-200 ease-in-out p-2 rounded-lg h-20 min-w-40 z-0 relative flex flex-col items-center justify-center shadow gap-2"
          >
            <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
            <Github size={28} strokeWidth={1} />
            <Badge variant={"outline"}>Github</Badge>
          </div>
        ))}
        <div className="bg-secondary/40 hover:bg-secondary/50 transition-all duration-200 ease-in-out p-2 rounded-lg h-20 min-w-40 z-0 relative flex flex-col items-center justify-center shadow">
          <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
          <Plus size={36} />
          <p className="text-xs uppercase mt-2 font-extralight">
            Add Social Link
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
