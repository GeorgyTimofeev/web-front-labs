function showDate() {
  let out = document.getElementById("current-date");
  let today = new Date();
  out.innerHTML = "Русская локаль: " + today.toLocaleString("ru-RU");

  let out1 = document.getElementById("current-date1");
  out1.innerHTML = "Китайская локаль: " + today.toLocaleString("zh-CN");

  let out2 = document.getElementById("current-date2");
  out2.innerHTML = "Арабская локаль: " + today.toLocaleString("ar");

  let out3 = document.getElementById("current-date3");
  out3.innerHTML = "Тайская локаль: " + today.toLocaleString("th");

  let out4 = document.getElementById("current-date4");
  out4.innerHTML = "Египетская локаль: " + today.toLocaleString("ar-EG");

  let year = today.getFullYear();
  let mounth = today.getMonth();
  let date = today.getDate();
  let day = today.getDay();

  let mounthArr = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  document.getElementById("year").innerHTML = "Сегодняшний год: " + year;
  document.getElementById("mounth").innerHTML =
    "Сегодняшний месяц: " + mounthArr[mounth];
  document.getElementById("day").innerHTML = "Сегодняшний день: " + date;
  document.getElementById("dayWeek").innerHTML =
    "Сегодняшний день недели: " + dayArr[day];
}
