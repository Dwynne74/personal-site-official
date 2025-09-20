const theme = document.querySelector("#mode-theme");

theme.addEventListener("click", () => {
  theme.classList.toggle("bi-moon");
  theme.classList.toggle("bi-sun");
  document.body.classList.toggle("dark");
});
