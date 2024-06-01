function showDaysCount() {
  let today = new Date();
  let inputDate = document.querySelector("input[type=date]");
  let birthday = new Date(inputDate.value);
  let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
  daysCount = Math.floor(daysCount);
  if (isNaN(daysCount)) {
    document.getElementById("daysCount").innerHTML = "Заполните поле даты";
  } else if (daysCount <= 0) {
    document.getElementById("daysCount").innerHTML = "Вы еще не родились";
  } else {
    document.getElementById("daysCount").innerHTML =
      "Количество прожитых мной дней = " + daysCount;
  }
}

function emptyDaysCount() {
  document.getElementById("daysCount").innerHTML = "";
  document.querySelector("input[type=date]").value = "";
}
