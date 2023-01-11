import { createContext, useEffect, useState } from "react";
import { fetchProgramData } from "./services";

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

export function ContextProvider({ children }: props) {
  const [channels, setChannels] = useState<ChannelInterface[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchProgramData();
      setChannels(data.channels);
    };
    getData();
  }, []);

  return (
    <ProgramContext.Provider value={channels}>
      {children}
    </ProgramContext.Provider>
  );
}
