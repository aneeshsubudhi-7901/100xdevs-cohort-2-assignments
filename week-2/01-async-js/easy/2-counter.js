function counter(cnt) {
  console.log(cnt);
  setTimeout(function () {
    counter(cnt + 1);
  }, 1000);
}

counter(0);
