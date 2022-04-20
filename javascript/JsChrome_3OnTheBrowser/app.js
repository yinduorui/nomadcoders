const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle(acitve);
}
//toggle: contains add/remove 대체 (Super Cool!!!)

h1.addEventListener("click", handleTitleClick);
