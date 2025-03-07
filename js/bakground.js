const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.position = "absolute";
bgImage.style.top = 0;
bgImage.style.left = 0;
bgImage.style.width = "100vw";
bgImage.style.height = "100vh";
bgImage.style.objectFit = "cover";
bgImage.style.zIndex = "-1";

document.body.appendChild(bgImage);
