import { useContext } from "react";
import { formatTime } from "../lib/services";
import { ShowInterface, ProgramContext, TimeContext } from "../lib/state";

const Show = ({
  show: { title, start, end },
  rootWidth,
}: {
  show: ShowInterface;
  rootWidth: number;
}) => {
  const timeFormated = formatTime(start, end);
  const currentTime = useContext(TimeContext);

  const timeIntervalWidth =
    timeFormated.timeInterval.end - timeFormated.timeInterval.start;
  const isCurrentlyScreening =
    currentTime >= timeFormated.timeInterval.start &&
    currentTime < timeFormated.timeInterval.end;

  return (
    <div
      className="h-24 flex flex-col border-r border-b border-borderGray p-2"
      style={{
        width: (24 * rootWidth) / (2400 / timeIntervalWidth) + "rem",
        backgroundColor: isCurrentlyScreening ? "rgb(34, 34, 34)" : "#111111",
      }}
    >
      <p className="text-textWhite">{title}</p>
      <p
        style={{
          fontSize: timeIntervalWidth < 40 ? "0.8rem" : "0.9rem",
        }}
        className="text-textGray"
      >
        {timeFormated.timeString.start} - {timeFormated.timeString.end}
      </p>
    </div>
  );
};

export const Program = ({ rootWidth }: { rootWidth: number }) => {
  const program = useContext(ProgramContext);

  return (
    <>
      {program.map((channel) => (
        <div key={channel.id}>
          <div className="flex">
            {channel.schedules.map((show, index) => (
              <Show show={show} rootWidth={rootWidth} key={index} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
