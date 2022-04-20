const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  const className = "acitve";
  if (h1.className === className) {
    h1.className = "";
  } else {
    h1.className = className;
  }
}

h1.addEventListener("click", handleTitleClick);
