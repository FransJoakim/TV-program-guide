export const fetchProgramData = async () => {
  const programData = await fetch("http://localhost:1337/epg").then((data) =>
    data.json()
  );
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

const getFractionOfDay = (timeStamp: string): number => {
  const date = new Date(timeStamp);
  const hoursAsWholeNumbers: string =
    date.getHours() === 0 ? "" : String(date.getHours());
  const minutesAsFraction: number = (date.getMinutes() * 5) / 3;
  const minToString: string = makeDoubleDigitStr(minutesAsFraction);

  return Number(hoursAsWholeNumbers + minToString);
};

const getIntervalWidth = (start: string, end: string): number => {
  const startInterval = getFractionOfDay(start);
  const endInterval = getFractionOfDay(end);
  return endInterval - startInterval;
};

const formatTimeString = (time: string) => {
  const min = makeDoubleDigitStr(new Date(time).getMinutes());
  const hour = makeDoubleDigitStr(new Date(time).getHours());
  return hour + ":" + min;
};

export const formatTime = (start: string, end: string) => {
  const timeIntervalWidth = getIntervalWidth(start, end);
  const time = {
    start: formatTimeString(start),
    end: formatTimeString(end),
  };
  return { time, timeIntervalWidth };
};
