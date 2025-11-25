// DARK MODE
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// VISITOR COUNTER
if (!localStorage.visitors) {
  localStorage.visitors = 1;
} else {
  localStorage.visitors = Number(localStorage.visitors) + 1;
}

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("visitorCount");
  if (counter) counter.innerText = localStorage.visitors;
});

// IMAGE SLIDER
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let s of slides) s.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}
showSlides();
