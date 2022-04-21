const imgArray = [
    "1.jpg","2.jpeg","3.jpeg"];

const choicImg = imgArray[Math.floor(Math.random()*imgArray.length)]

const inputImg = document.createElement("img");

inputImg.src = `img/${choicImg}`;

document.body.appendChild(inputImg);


