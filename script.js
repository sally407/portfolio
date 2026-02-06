document.addEventListener("DOMContentLoaded",() => {
  const cards =
  document.querySelectorAll(".childhood-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.forEach(c => 
        c.classList.add("active"));
        card.classList.add("active");
    });
  });
});

window.onload = function () {
  let section =
  document.getElementById("content");
  section.style.opacity = 0;

  setTimeout (() => {
    section.style.opacity = 1;
    section.style.transition = 
    "opacity 2s";

  },500);
};