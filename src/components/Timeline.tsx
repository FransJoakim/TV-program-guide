import { hoursOfDay } from "../lib/services";

export const Timeline = ({ rootWidth }: { rootWidth: number }) => {
  return (
    <div className="w-full h-14 mt-[1px] flex relative items-center">
      {hoursOfDay.map((hour) => (
        <div
          style={{
            width: rootWidth + "rem",
          }}
          className="text-xl h-full flex flex-col justify-end border-b border-borderGray z-40"
          key={hour}
        >
          <p className="font-mono ml-[-1.9rem] text-textWhite">{hour}</p>
          <div className="ml-[-1px] w-[1px] h-2 bg-borderGray" />
        </div>
      ))}
    </div>
  );
};
