const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

//less expensive operation
for (let i = 0; i < 10000000; i++) {}
console.log("hi from this side 1");

//expensive operation
for (let i = 0; i < 100000000000; i++) {}

console.log("hi from this side 2");
