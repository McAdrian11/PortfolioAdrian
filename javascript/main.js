let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let quadrates = document.querySelectorAll(".quadrate");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < quadrates.length; i++) {
    quadrates[i].className = quadrates[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  quadrates[slideIndex - 1].className += " active";
}

function popup1() {
  window.open(
    "https://mcadrian11.github.io/Dino-Adrian/",
    "popup",
    "top=100, left=243, width=1403, height=720, toolbar=NO, resizable=NO, Location=NO, Menubar=NO, Titlebar=No, Status=NO"
  );
}
function popup2() {
  window.open(
    "https://random-quote-machine-xi.vercel.app/",
    "popup",
    "top=100, left=243, width=1403, height=720, toolbar=NO, resizable=NO, Location=NO, Menubar=NO, Titlebar=No, Status=NO"
  );
}
