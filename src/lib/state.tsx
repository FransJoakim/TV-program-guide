import { createContext, useEffect, useState } from "react";
import { fetchProgramData } from "./services";

export const ProgramContext = createContext([]);
type props = { children: JSX.Element };

export function ContextProvider({ children }: props) {
  const [programData, setProgramData] = useState([]);

  useEffect(() => {
    const goFetch = async () => {
      const data = await fetchProgramData();
      setProgramData(data);
    };
    goFetch();
  }, []);

  return (
    <ProgramContext.Provider value={programData}>
      {children}
    </ProgramContext.Provider>
  );
}
