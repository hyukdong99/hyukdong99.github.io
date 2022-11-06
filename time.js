const clock = document.querySelector("#clock");
const date1 = document.querySelector("#date1");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  date1.innerText = `${year}/${month}/${day}`;
  clock.innerText = `${hour}:${minute}:${second}`;
}
getClock();
setInterval(getClock, 1000);
