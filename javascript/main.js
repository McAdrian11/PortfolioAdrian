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



let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

/* setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`; */

  /* digital clock */

 /*  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
    ampm.innerHTML = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
 */


function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = date;
  
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}