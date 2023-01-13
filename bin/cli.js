#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.arv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/FransJoakim/TV-program-guide-Norigin ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(code - 1);

console.log(`Ìnstalling dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(code - 1);

console.log(
  "Congratulations! You are ready to try my EPG. Execute the following commands in two different terminal windows to start"
);
console.log(`cd ${repoName} && npm start:configured-api`);
console.log(`cd ${repoName} && npm start`);
