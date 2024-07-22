// Hide header
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll os greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("hide-header")
    : header.classList.remove("hide-header");
};

window.addEventListener("scroll", scrollHeader);

// Header animation
var typed = new Typed("#Header-anim", {
  strings: ["Developer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 500,
  fadeOutDelay: 500,
});
