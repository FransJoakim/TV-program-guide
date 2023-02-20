import { createContext, useEffect, useState } from "react";
import { fetchProgramData, getFractionOfDay } from "./services";

export interface ShowInterface {
  id: string;
  title: string;
  start: string;
  end: string;
}

export interface ChannelInterface {
  id: string;
  title: string;
  images: {
    LOGO: string;
  };
  schedules: ShowInterface[];
}

type props = { children: JSX.Element };

export const ProgramContext = createContext<ChannelInterface[]>([]);
export const TimeContext = createContext(0);

export function ContextProvider({ children }: props) {
  const [channels, setChannels] = useState<ChannelInterface[]>([]);
  const [currentTime, setCurrentTime] = useState(getFractionOfDay(new Date()));

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProgramData();
      setChannels(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const trackerInterval = setInterval(() => {
      setCurrentTime(getFractionOfDay(new Date()));
    }, 10000);

    return () => clearInterval(trackerInterval);
  }, []);

  return (
    <ProgramContext.Provider value={channels}>
      <TimeContext.Provider value={currentTime}>
        {children}
      </TimeContext.Provider>
    </ProgramContext.Provider>
  );
}
