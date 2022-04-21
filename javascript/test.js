const clock = document.querySelector(".hello");

function getClock() {
  const date = new Date();
  var week = ["일", "월", "화", "수", "목", "금", "토"];

  const years = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const days = week[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const mins = String(date.getMinutes()).padStart(2, "0");
  const secs = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${years}년 ${month}월 ${dates}일 (${days}) ${hours}시 ${mins}분 ${secs}초`;
}

getClock();
setInterval(getClock, 1000);
