const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cropped-prof.png") {
    myImage.setAttribute("src", "images/cropped-prof-2.png");
  } else {
    myImage.setAttribute("src", "images/cropped-prof.png");
  }
};

const showImageButton = document.getElementById("show-image-button");
const babyImage = document.getElementById("my-image"); 
showImageButton.addEventListener("click", () => { 
  babyImage.style.display = "block"; 
});

let myHeading = document.querySelector("h1");




