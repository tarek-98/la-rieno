let btn = document.querySelector(".sidebar .item");
let form = document.querySelector(".form");

btn.onclick = function () {
  form.classList.toggle("active");
};
let btnn = document.querySelector(".sidebar .share");
let links = document.querySelector(".links");

btnn.onclick = function () {
  links.classList.toggle("active");
};

/*wrapper*/
const carousel = document.querySelector(".wrapper .carousel"),
  firstImg = carousel.querySelectorAll(".wrapper .carousel img")[0],
  arrowIcons = document.querySelectorAll(".wrapper svg");
let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;
const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});

/*video*/
function toggle() {
  var trailer = document.querySelector(".trailer");
  trailer.classList.toggle("active");
}
/*usermenu*/
function toggleMenu() {
  var usermenu = document.querySelector(".usermenu");
  usermenu.classList.toggle("active");
}
