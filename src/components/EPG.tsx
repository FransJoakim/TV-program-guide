import { useContext } from "react";
import { ProgramContext } from "../lib/state";

export const EPG = () => {
  const program = useContext(ProgramContext);
  return (
    <div>
      {program.map((channel) => {
        return (
          <div key={channel.id}>
            <ul>
              {channel.schedules.map((show, index) => {
                const date = new Date(show.start);
                const hoursAsWholeNumbers: string =
                  date.getHours() === 0 ? "" : String(date.getHours());
                const minutesAsFraction: number = (date.getMinutes() * 5) / 3;
                const minToString: string =
                  minutesAsFraction === 0
                    ? "00"
                    : minutesAsFraction < 10
                    ? "0" + minutesAsFraction.toFixed(3)
                    : String(minutesAsFraction.toFixed(3));

                const fractionOfDay = Number(hoursAsWholeNumbers + minToString);

                return <li key={index}>{fractionOfDay}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
