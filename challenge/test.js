const h1 = document.querySelector("h1");

function changeColor() {
  h1.style.color = "white";

  if (window.innerWidth <= 400) {
    document.body.style.backgroundColor = "#2C8CD3";
  } else if (window.innerWidth > 400 && window.innerWidth <= 700) {
    document.body.style.backgroundColor = "#914EAC";
  } else {
    document.body.style.backgroundColor = "#EEBC12";
  }
}

window.addEventListener("resize", changeColor);
