function showTime() {
  let today = new Date();
  let currentTime = today.toLocaleTimeString("ru-RU");
  let seconds = String(today.getSeconds()).padStart(2, "0");
  document.getElementById("time").innerHTML = currentTime;
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("secondsLine").style.transform =
    `rotate(${180 + today.getSeconds() * 6 + today.getMilliseconds() * 0.006}deg) translate(0, 100px)`;
}

setInterval(showTime, 1);
