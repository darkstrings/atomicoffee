// Set current year
const headerEle = document.querySelector(".header");
const heroSectionEl = document.querySelector(".section-hero");
const mobileNav = document.querySelector(".header");
const menuIcon = document.querySelector(".btn-mobile-nav");

function toggleNav() {
  mobileNav.classList.toggle("nav-open");
}

document.querySelector(".year").innerText = new Date().getFullYear();

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      console.log(ent);
    } else {
      document.body.classList.remove("sticky");
    }
    // const addRemove = !ent.isIntersecting ? "add" : "remove";
    // headerEl.classList[addRemove]("sticky");
  },
  {
    // inside the viewport
    root: null,

    // As soon as 0% of the hero section is in the viewport....when it's 100% out....0% of it is in (hense the zero)
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);
