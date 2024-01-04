function clockCounter() {
  const currentDate = new Date();

  const currentSeconds = currentDate.getSeconds();
  const currentSecondsString =
    currentSeconds >= 10 ? currentSeconds : "0" + currentSeconds;

  const currentMinutes = currentDate.getMinutes();
  const currentMinutesString =
    currentMinutes >= 10 ? currentMinutes : "0" + currentMinutes;

  const currentHours = currentDate.getHours();
  const currentHoursString =
    currentHours >= 10 ? currentHours : "0" + currentHours;

  const format = currentHours >= 12 ? "PM" : "AM";

  const dateString = `${currentHoursString}:${currentMinutesString}:${currentSecondsString} ${format}`;
  console.log(dateString);
}

// clockCounter()

setInterval(clockCounter, 1000);
