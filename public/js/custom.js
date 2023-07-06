
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
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

function opentab(tabname) {
  for (link of tablinks) {
    link.classList.remove("active-links");
  }
  for (content of tabcontents) {
    content.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
};


function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
};
