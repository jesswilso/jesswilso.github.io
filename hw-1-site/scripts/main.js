const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cropped-prof.png") {
    myImage.setAttribute("src", "images/cropped-prof-2.png");
  } else {
    myImage.setAttribute("src", "images/cropped-prof.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }


  myButton.onclick = () => {
    setUserName();
  };