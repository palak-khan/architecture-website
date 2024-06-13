/*=============== SHOW MENU ===============*/
function navBar() {
  /////////--SHOW-MENU--////////
  const navMenu = document.getElementById("nav-menu");
  const navClose = document.getElementById("nav-close");
  const navToggle = document.getElementById("nav-toggle");
  const navLink = document.querySelectorAll(".nav-link");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  /////////--CLOSE-MENU--////////

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
}
navBar();

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav--link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== SWIPER HOMES ===============*/
const swiperHome = new Swiper(".home--swiper ", {
  loop: true,
  speed:800,
  parallax:true,
  effect:'fade',

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: (number) => {return '0' + number},
    formatFractionTotal: (number) => {return '0' + number},
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
