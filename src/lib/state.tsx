import { createContext, useEffect, useState } from "react";
import { fetchProgramData } from "./services";

export const ProgramContext = createContext<Channel[]>([]);

interface Show {
  id: string;
  title: string;
  start: number;
  end: number;
}

export interface Channel {
  id: string;
  title: string;
  images: {
    LOGO: string;
  };
  schedules: Show[];
}

type props = { children: JSX.Element };

export function ContextProvider({ children }: props) {
  const [channels, setChannels] = useState<Channel[]>([]);

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
