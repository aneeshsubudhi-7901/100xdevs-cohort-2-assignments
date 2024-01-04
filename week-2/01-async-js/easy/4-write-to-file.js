const fs = require("fs");

//using callbacks
// fs.writeFile("a.txt", "hi my name is aneesh subudhi", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// });

//using promises
function writeToFile(data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile("a.txt", data, function (err) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

writeToFile("hi this is aneesh")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("file write completed");
