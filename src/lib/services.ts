export const fetchProgramData = async () => {
  const programData = await fetch(
    process.env.REACT_APP_baseurl + ":1337/epg"
  ).then((data) => data.json());
  return programData;
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
