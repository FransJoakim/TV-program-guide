import { ChannelInterface } from "../lib/state";

export const ChannelMenuSidebar = ({
  program,
}: {
  program: ChannelInterface[];
}) => {
  return (
    <div className="bg-black w-20">
      <div className="absolute bottom-0 top-0 bg-black">
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
