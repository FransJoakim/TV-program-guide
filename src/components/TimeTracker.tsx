import { useContext, useEffect, useRef, useState } from "react";
import { getFractionOfDay } from "../lib/services";
import { TimeContext } from "../lib/state";

export const TimeTracker = ({ rootWidth }: { rootWidth: number }) => {
  const currentTime = useContext(TimeContext);
  const currentPosition = (24 * rootWidth) / (2400 / currentTime);
  return (
    <div
      style={{ left: currentPosition - 0.14 + "rem", top: "0" }}
      className="w-[0.28rem] h-full absolute bg-orange-500 z-10"
    />
  );
};
