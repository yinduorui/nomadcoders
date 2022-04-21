const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

/*
setInterval(getClock, 5000); //5000ms 이후 5000ms 마다 반복 실행
setTimeout(getClock, 5000); //5000ms 이후 1번만 실행
*/
