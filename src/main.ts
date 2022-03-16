const img = document.createElement("img");
document.body.append(img);
/* Detta fungerar inte
img.src = "./img/batcat.jpg"; */

const imgUrl = new URL("./img/batcat.jpg", import.meta.url);
img.src = imgUrl.href;
console.log(imgUrl);