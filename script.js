console.log("helooo world");

// // For Toggle Menu Bar
function setSidebarState(state) {
  localStorage.setItem("sidebarState", state);
}

// Open The Menu Bar
function openNav() {
  document.getElementById("menuList").style.width = "250px";
  setSidebarState("open");
}

// Close the Menu Bar
let closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click", () => {
  document.getElementById("menuList").style.width = "0";
  setSidebarState("closed");
});

function checkSidebarState() {
  const sidebarState = localStorage.getItem("sidebarState");

  if (sidebarState === "closed") {
    document.getElementById("menuList").style.width = "0";
  }
}
window.addEventListener("load", checkSidebarState);



/* <!-- Explore Diamonds Slider --> */
const sliderList = document.querySelector(".slider_list");
const sliderPrev = document.querySelector(".slider_prev");
const sliderNext = document.querySelector(".slider_next");
const slideWidth = sliderList.querySelector("li").offsetWidth;

let currentPosition = 0;

console.log(sliderList.children.length);

sliderPrev.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += slideWidth;
    sliderList.style.transform = `translateX(${currentPosition}px)`;
  }
});

sliderNext.addEventListener("click", () => {
  if (currentPosition > -slideWidth * (sliderList.children.length - 1)) {
    currentPosition -= slideWidth;
    sliderList.style.transform = `translateX(${currentPosition}px)`;
  }
});



/* <!-- Jewelry Designs Slider --> */
const sliderMenu = document.getElementById("slider_menu_list");
const menuPrev = document.getElementById("prev");
const menuNext = document.getElementById("next");
const menuWidth = sliderMenu.querySelector("li").offsetWidth;

let currentIndex = 1;

menuPrev.addEventListener("click", () => {
  if (currentIndex < 0) {
    currentIndex += menuWidth;
    sliderMenu.style.transform = `translateX(${currentIndex}px)`;
  }
});

menuNext.addEventListener("click", () => {
  if (currentIndex > -menuWidth * (sliderMenu.children.length - 1)) {
    currentIndex -= menuWidth;
    sliderMenu.style.transform = `translateX(${currentIndex}px)`;
  }
});
