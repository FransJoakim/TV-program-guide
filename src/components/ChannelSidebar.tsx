import { useContext } from "react";
import { ProgramContext } from "../lib/state";

export const ChannelSidebar = () => {
  const program = useContext(ProgramContext);

  return (
    <div className="bg-black w-20 h-full z-30">
      <div className="absolute h-full bottom-0 top-0 z-30 bg-black">
        <div className="h-14 w-full" />
        {program.map((channel) => (
          <div
            className="h-24 w-20 flex items-center justify-center"
            key={channel.id}
          >
            {channel.title}
          </div>
        ))}
      </div>
    </div>
  );
};
