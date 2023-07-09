
let sidemenu = document.getElementById("sidemenu");
const goTopBtn = document.querySelector(".button-home");

window.addEventListener("scroll", trackScroll);

function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    goTopBtn.classList.add("button-home--show");
  } else {
    goTopBtn.classList.remove("button-home--show");
  }
};

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
};
