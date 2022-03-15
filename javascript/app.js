const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작 실행 방지
  //submit시 자동 새로고침을 방지하고자 사용함
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
