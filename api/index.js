const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");
var moment = require("moment");

app.use(cors());

app.use(express.static("build"));

const getUpdatedEpgData = () => {
  let rawdata = fs.readFileSync("./data.json");
  let epgData = JSON.parse(rawdata.toString());
  const currentDay = moment().format("YYYY-MM-DD");

  const alignToCurrentDay = function (time) {
    const timeOffset = moment(time).format("HH:mm");
    return moment(currentDay + " " + timeOffset).valueOf();
  };

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

app.get("/api", (req, res) => {
  let epg = getUpdatedEpgData();
  res.json(epg);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
