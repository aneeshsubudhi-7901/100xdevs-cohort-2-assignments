const fs = require("fs");

console.log("hi");

function readFileForCleaning(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, "utf-8", function (err, data) {
      if (err) {
        reject(err);
        return;
      }
      console.log("File read successfully");
      resolve(data);
    });
  });
}

function cleanFileData(data) {
  return new Promise(function (resolve, reject) {
    if (!data) {
      reject("No data in file");
      return;
    }
    console.log("File cleaned successfully");
    resolve(data.replace(/\s+/g, " "));
  });
}

function writeCleanDataToFile(data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile("1-file-cleaner.txt", data, function (err) {
      if (err) {
        reject("Error in writing file");
        return;
      }
      resolve("File written successfully");
    });
  });
}

readFileForCleaning("1-file-cleaner.txt")
  .then(function (data) {
    return cleanFileData(data);
  })
  .then(function (data) {
    return writeCleanDataToFile(data);
  })
  .catch(function (err) {
    console.log(err);
  });
