const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
  title.innerText = "Mouse is clicked!";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}

function handleResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleCopy() {
  alert("copier!");
}

function handleOffline() {
  alert("SOS no WIFI!");
}

function handleOnline() {
  alert("ALL GOOOOOOD!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleResize);
window.addEventListener("copy", handleCopy);
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
