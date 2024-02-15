// ////////////////////////////////////////////////////
// Slider
const swiper = new Swiper(".swiper", {
  loop: true,
  // SlidePerView: "auto",  이 코드 없어도 되는 거 같은데?
  spaceBetween: 30,
});

// ////////////////////////////////////////////////////
// Scroll effect setting
// Google search scrollreveal
const scrollRevealOperation = {
  distance: "5rem",
  origin: "bottom",
  duration: 1000, // 1s
};

// Header container scroll effect
ScrollReveal().reveal(".grid_home_img img", {
  ...scrollRevealOperation,
  interval: 500, //간격
});

// About container scroll effect
ScrollReveal().reveal(".about_card", {
  ...scrollRevealOperation,
  interval: 500,
});

// Portfolio container scroll effect
ScrollReveal().reveal(".portfolio_picture", {
  ...scrollRevealOperation,
  interval: 500,
});

// News container scroll effect
ScrollReveal().reveal(".news_card", {
  ...scrollRevealOperation,
  interval: 500,
});

// ////////////////////////////////////////////////////
// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    // if (link.classList.contains("main-nav-link"))
    //   headerEL.classList.toggle("nav-open");
  });
});

// ////////////////////////////////////////////////////
// Make mobile nav work
const btnNavEl = document.querySelector(".btn_mobile_nav");
const headerEl = document.querySelector(".header_container");
const navLinksEl = document.querySelectorAll(".nav_links");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav_open");
});

navLinksEl.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEl.classList.toggle("nav_open");
  });
});
// ////////////////////////////////////////////////////
//  Sticky nav
const sectionHomeEl = document.querySelector(".section_home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.querySelector(".header_container").classList.add("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);
obs.observe(sectionHomeEl);

///////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
