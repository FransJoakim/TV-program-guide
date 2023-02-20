import epgData from "./data.json";
import moment from "moment";

const alignToCurrentDay = function (time: string) {
  const currentDay = moment().format("YYYY-MM-DD");
  const timeOffset = moment(time).format("HH:mm");
  return currentDay + " " + timeOffset;
};

export const fetchProgramData = async () => {
  for (let i = 0; i < epgData.length; i++) {
    const channel = epgData[i];
    const schedules = channel.schedules;

    for (let j = 0; j < schedules.length; j++) {
      const program = schedules[j];

      program.start = alignToCurrentDay(program.start);
      program.end = alignToCurrentDay(program.end);

      epgData[i].schedules[j] = program;
    }
  }

  // fs.writeFileSync("./data.json", epgData);
  return epgData;
};

const makeDoubleDigitStr = (n: number): string => {
  return n < 10 ? "0" + n : String(n);
};

export const hoursOfDay: string[] = [];
for (let i = 0; i < 24; i++) {
  let hourOfDay = makeDoubleDigitStr(i);
  hoursOfDay.push(hourOfDay + ":00");
}

export const getFractionOfDay = (date: Date): number => {
  const hoursAsWholeNumbers: string =
    date.getHours() === 0 ? "" : String(date.getHours());
  const minutesAsFraction: number = (date.getMinutes() * 5) / 3;
  const minToString: string = makeDoubleDigitStr(minutesAsFraction);

  return Number(hoursAsWholeNumbers + minToString);
};

const formatTimeString = (time: string) => {
  const min = makeDoubleDigitStr(new Date(time).getMinutes());
  const hour = makeDoubleDigitStr(new Date(time).getHours());
  return hour + ":" + min;
};

export const formatTime = (start: string, end: string) => {
  const timeInterval = {
    start: getFractionOfDay(new Date(start)),
    end: getFractionOfDay(new Date(end)),
  };
  const timeString = {
    start: formatTimeString(start),
    end: formatTimeString(end),
  };
  return { timeString, timeInterval };
};
