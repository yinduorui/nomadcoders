const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);

/*
setInterval(getClock, 5000); //5000ms 이후 5000ms 마다 반복 실행
setTimeout(getClock, 5000); //5000ms 이후 1번만 실행
*/
