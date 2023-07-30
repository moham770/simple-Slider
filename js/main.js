let imgs = Array.from(document.querySelectorAll("img"));
let overLayContainer = document.getElementById("overlay-container");
let overLay = document.getElementById("overlay");
let close = document.getElementById("close");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
/////////////////////////////////////////////////////////////////

let imgSRC;
let imgIndex;
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", (e) => {
    let imgSrc = e.target.getAttribute("src");
    imgSRC = imgSrc;
    imgIndex = imgs.indexOf(e.target);
    console.log(imgIndex);
    displayOverLay();
    Next();
    previous();
  });
}

//! display overLAY***************************************
function displayOverLay() {
  overLayContainer.classList.remove("d-none");
  overLay.style.cssText = ` background-image: url(${imgSRC});`;
}
//! Close OverLay*****************************
close.addEventListener("click", closeOverlay);
function closeOverlay() {
  overLayContainer.classList.add("d-none");
}

//! next**********************************************
next.addEventListener("click", Next);

function Next() {
  imgIndex++;
  if (imgIndex == imgs.length) {
    imgIndex = 0;
  }
  let imgNextSrc = imgs[imgIndex].getAttribute("src");
  overLay.style.cssText = ` background-image: url(${imgNextSrc});`;
}
//! Prev **********************************************

prev.addEventListener("click", previous);
function previous() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgs.length - 1;
  }
  imgPrevSrc = imgs[imgIndex].getAttribute("src");
  overLay.style.cssText = ` background-image: url(${imgPrevSrc});`;
}

//! next and prev and close with key
document.body.addEventListener("keydown", (e) => {
  if (e.code == "ArrowRight") {
    Next();
  } else if (e.code === "ArrowLeft") {
    previous();
  } else if (e.code === "Escape") {
    closeOverlay();
  }
});

