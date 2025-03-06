const sharp = require("sharp");
const fs = require("fs-extra");
const path = require("path");

const inputFolder = "./public/assets";
const outputFolder = "./public/images-webp"; 

fs.ensureDirSync(outputFolder);

fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  files.forEach((file) => {
    const inputFilePath = path.join(inputFolder, file);
    const outputFilePath = path.join(outputFolder, file.replace(/\.[^.]+$/, ".webp"));

    sharp(inputFilePath)
      .toFormat("webp")
      .toFile(outputFilePath, (err, info) => {
        if (err) console.error("Error converting", file, ":", err);
        else console.log("Converted:", file, "→", info);
      });
  });
});
