const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");
const { execSync } = require("child_process");

app.use(cors());

app.use(express.static("build"));

app.get("/api", (req, res) => {
  execSync("node updateEpg.js", { stdio: "inherit" });
  let rawdata = fs.readFileSync("./data.json");
  let epg = JSON.parse(rawdata);
  res.json(epg);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
