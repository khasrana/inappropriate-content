/*
Incomplete API for inappropriate-content project by NeotiDev
*/

const fs = require("fs");
const path = require("path");
const websites = require("../dist/websites");
const words = require("../dist/words");

if (!fs.existsSync(path.resolve(__dirname, "./dist")))
  fs.mkdirSync(path.resolve(__dirname, "./dist"));

if (!fs.existsSync(path.resolve(__dirname, "./dist/words")))
  fs.mkdirSync(path.resolve(__dirname, "./dist/words"));

fs.copyFileSync(
  path.resolve(__dirname, "../dist/words.json"),
  path.resolve(__dirname, "./dist/words.json")
);

words.forEach(word => {
  fs.writeFileSync(
    path.resolve(__dirname, "./dist/words", word),
    JSON.stringify({ contained: true })
  );
});

if (!fs.existsSync(path.resolve(__dirname, "./dist/websites")))
  fs.mkdirSync(path.resolve(__dirname, "./dist/websites"));

fs.copyFileSync(
  path.resolve(__dirname, "../dist/websites.json"),
  path.resolve(__dirname, "./dist/websites.json")
);

websites.forEach(website => {
  const domain = website.domain;
  delete website.domain;
  website.contained = true;
  fs.writeFileSync(
    path.resolve(__dirname, "./dist/websites", domain),
    JSON.stringify(website)
  );
});
