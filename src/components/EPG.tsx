import { useContext } from "react";
import { formatTime, hoursOfDay } from "../lib/services";
import { ProgramContext, ChannelInterface, ShowInterface } from "../lib/state";

const rootDimention = 20;
const widthTotal = 24 * rootDimention;
const channelLogoPadding = rootDimention / 3;

const ChannelMenuSidebar = ({ program }: { program: ChannelInterface[] }) => {
  return (
    <div
      style={{ width: channelLogoPadding + "rem" }}
      className="bg-black h-screen"
    >
      <div className="absolute bottom-0 top-0 bg-black">
        <div className="h-14 w-full" />
        {program.map((channel) => (
          <div
            style={{ width: channelLogoPadding + "rem" }}
            className="h-20 flex items-center justify-center"
            key={channel.id}
          >
            {channel.title}
          </div>
        ))}
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="w-full h-14 bg-red-500 flex items-center">
      {hoursOfDay.map((hour) => (
        <div
          style={{
            width: rootDimention + "rem",
          }}
          className="text-xl h-full border-r border-b border-gray-400"
          key={hour}
        >
          {hour}
        </div>
      ))}
    </div>
  );
};

const Show = ({ title, start, end }: ShowInterface) => {
  const timeFormated = formatTime(start, end);
  return (
    <div
      className="h-20 flex flex-col border-r border-b border-gray-400 p-2"
      style={{
        width: widthTotal / (2400 / timeFormated.timeIntervalWidth) + "rem",
      }}
    >
      <p>{title}</p>
      <p
        style={{
          fontSize: timeFormated.timeIntervalWidth < 40 ? "0.8rem" : "0.9rem",
        }}
      >
        {timeFormated.time.start} - {timeFormated.time.end}
      </p>
    </div>
  );
};

export const EPG = () => {
  const program = useContext(ProgramContext);

  return (
    <div
      style={{ width: widthTotal + channelLogoPadding + "rem" }}
      className="h-full flex"
    >
      <ChannelMenuSidebar program={program} />
      <div>
        <Timeline />
        {program.map((channel) => (
          <div key={channel.id}>
            <div className="flex">
              {channel.schedules.map((show, index) => (
                <Show {...show} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
