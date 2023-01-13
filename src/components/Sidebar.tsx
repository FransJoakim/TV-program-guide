import { useContext } from "react";
import { ProgramContext } from "../lib/state";

export const Sidebar = ({ padding }: { padding: number }) => {
  const program = useContext(ProgramContext);
  const height = 24 * 4 * program.length + 56 + "px";

  return (
    <div style={{ width: padding + "px", height }} className="z-30 h-full">
      <div
        style={{ height: height }}
        className="absolute bottom-0 top-0 z-30 bg-background"
      >
        <div className="h-14 w-full" />
        {program.map((channel) => (
          <div
            style={{ width: padding + "px" }}
            className="h-24 flex items-center justify-center text-textWhite md:text-xl lg:text-xl border-t border-borderGray shadow-lg shadow-black"
            key={channel.id}
          >
            {channel.title}
          </div>
        ))}
      </div>
    </div>
  );
};
