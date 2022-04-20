const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "acitve";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
//className: 기존 class 보존 불가

h1.addEventListener("click", handleTitleClick);
