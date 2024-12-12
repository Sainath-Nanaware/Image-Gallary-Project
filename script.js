

const images = document.querySelectorAll(".image");
var img = document.getElementById("big-view");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click",  (e) => {
    const imageSrc = e.target.getAttribute("src");
    img.setAttribute("src", imageSrc);
  });
}

