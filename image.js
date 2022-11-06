const images = ["image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg"];
const changeImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `image/${changeImage}`;

document.body.appendChild(bgImage);
