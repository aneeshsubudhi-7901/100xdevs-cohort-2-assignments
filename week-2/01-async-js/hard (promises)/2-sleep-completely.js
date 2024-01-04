/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

//the async way, but this probably keeps the JS thread idle
// function sleep(milliseconds) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve();
//     }, milliseconds);
//   });
// }

//sync way, busy waiting
function sleep(milliseconds) {
  const currentDate = Date.now();
  while (Date.now() - currentDate < milliseconds) {}

  return new Promise(function (resolve, reject) {
    resolve();
  });
}

module.exports = sleep;
