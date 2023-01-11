import { hoursOfDay } from "../lib/services";

export const Timeline = ({ rootWidth }: { rootWidth: number }) => {
  return (
    <div className="w-full h-14 bg-red-500 flex items-center">
      {hoursOfDay.map((hour) => (
        <div
          style={{
            width: rootWidth + "rem",
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
