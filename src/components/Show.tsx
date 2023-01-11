import { formatTime } from "../lib/services";
import { ShowInterface } from "../lib/state";

export const Show = ({
  show: { title, start, end },
  rootWidth,
}: {
  show: ShowInterface;
  rootWidth: number;
}) => {
  const timeFormated = formatTime(start, end);
  return (
    <div
      className="h-24 flex flex-col border-r border-b border-gray-400 p-2"
      style={{
        width:
          (24 * rootWidth) / (2400 / timeFormated.timeIntervalWidth) + "rem",
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
