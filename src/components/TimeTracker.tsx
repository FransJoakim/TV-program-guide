import { useContext, useEffect, useRef, useState } from "react";
import { getFractionOfDay } from "../lib/services";
import { TimeContext } from "../lib/state";

export const TimeTracker = ({ rootWidth }: { rootWidth: number }) => {
  const currentTime = useContext(TimeContext);
  const currentPosition = (24 * rootWidth) / (2400 / currentTime);
  return (
    <>
      <div
        style={{ left: currentPosition - 0.3 + "rem" }}
        className="w-[7px] h-[2.9rem] rounded absolute bg-orange z-10 top-[6px]"
      />
      <div
        style={{ left: currentPosition - 0.14 + "rem" }}
        className="w-[2px] h-full absolute bg-orange z-10 top-[6px]"
      />
    </>
  );
};
