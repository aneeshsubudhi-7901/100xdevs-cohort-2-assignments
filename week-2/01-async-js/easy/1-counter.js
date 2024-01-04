let ctrVar = 0;

let duration = 30;

//the function passed here will execute every second
let counter = setInterval(function () {
  console.log(++ctrVar);
}, 1000);

//the function passed here will execute after 30 seconds, to clear the interval
setTimeout(function () {
  clearInterval(counter);
}, duration * 1000);
