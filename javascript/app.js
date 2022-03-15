const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본 동작 실행 방지
  //submit시 자동 새로고침을 방지하고자 사용함
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username); //개발자도구>Application>Local Strorage 확인!
  //불러오기: localStorage.getItem("key name")
  //삭제: localStorage.removeItem("key name")
  greeting.innerText = `Hello ${username} keep going`; //추천, 백틱(`)
  // greeting.innerText = "Hello " + username; 동일
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
