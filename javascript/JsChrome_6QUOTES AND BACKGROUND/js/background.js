const images = ["0.jpeg", "1.jpeg", "2.JPG"];

const choosenImage = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${choosenImage}`;
document.body.appendChild(bgImg);
