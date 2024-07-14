document.querySelectorAll(".card-custom").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("card-hover");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("card-hover");
  });
});
