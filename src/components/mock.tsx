import { useContext } from "react";
import { ProgramContext } from "../lib/state";

export const Mock = () => {
  const theme = useContext(ProgramContext);
  console.log(theme);
  return <div></div>;
};
