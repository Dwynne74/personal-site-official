const theme = document.querySelector("#mode-theme");

theme.addEventListener("click", () => {
  theme.classList.toggle("bi-moon");
  theme.classList.toggle("bi-sun");
  document.body.classList.toggle("dark");
});

const sections = document.querySelectorAll(".nav-section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
