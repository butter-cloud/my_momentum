const images = [
    "0.JPG",
    "1.JPG",
    "2.JPG",
    "3.JPG",
    "4.JPG",
    "5.JPG",
    "6.JPG"
]

const chosenimage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = `../../img/${chosenimage}`;

document.body.appendChild(bgImage);
