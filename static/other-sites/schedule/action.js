function loadDefaultSchedule(type) {
  fetch("/other-sites/schedule/data/schedule-001.json")
    .then((res) => res.json())
    .then((d) => {
      if (type == undefined) {
        let date = new Date().getDay();
        type = date == 0 || date == 6 ? "weekend" : "weekday";
        document
          .querySelectorAll(".schedule-button")
          .forEach((btn) => btn.classList.add("inactive"));
        document
          .querySelectorAll(".schedule-button." + type)[0]
          .classList.remove("inactive");
      }
      let arr = d.schedule[type];
      let tableBody = "";
      for (let i = 0; i < arr.length; i++) {
        let isScheduleInCurrentTime = checkIfCurrentTimeInSchedule(arr[i]);
        let scheduleRowClass = isScheduleInCurrentTime
          ? "highlight-schedule-row"
          : "";

        tableBody += ` <tr class="${scheduleRowClass}">
                <td>${arr[i].start}</td>
                <td>${arr[i].end}</td>
                <td>${arr[i].thingsToDo}</td>
            </tr>
            `;
      }
      let tbodyEle = document.querySelectorAll("#schedule tbody");
      tbodyEle[0].innerHTML = tableBody;

      let taskStr = "";
      d.currentPendingItems.forEach(
        (item) => (taskStr += `<li>${item.name}</li>`)
      );
      document.querySelectorAll("#taskpending")[0].innerHTML = taskStr;
    });
}

function checkIfCurrentTimeInSchedule(schedule) {
  let currentTime = new Date().getMinutes();
  let cuurentHours = new Date().getHours();
  let currentTimeInMinutes = cuurentHours * 60 + currentTime;
  return (
    getTimeInMinutes(schedule.start) <= currentTimeInMinutes &&
    currentTimeInMinutes <= getTimeInMinutes(schedule.end)
  );
}

function getTimeInMinutes(scheduleTimeStr) {
  let timeArr = scheduleTimeStr.split(":");
  return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);
}

function showschedule(type, button) {
  loadDefaultSchedule(type);
  let buttons = document.querySelectorAll(".schedule-button");
  buttons.forEach((btn) => btn.classList.add("inactive"));
  button.classList.remove("inactive");
}
