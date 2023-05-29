window.addEventListener("scroll", (e) => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
