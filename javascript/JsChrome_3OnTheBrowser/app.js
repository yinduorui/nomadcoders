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

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
