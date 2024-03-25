let time = document.getElementById("time");
let menu = document.getElementById("menu");
let start = document.getElementById("start");
let power = document.getElementById("power");
let desktop = document.getElementById("desktop");
let startup = document.getElementById("startup");
let startupBtn = document.getElementById("startupBtn");
let loading = document.getElementById("loading");
let welcome = document.getElementById("welcome");
let welcomeSound = document.getElementById("welcomeSound");

startupBtn.addEventListener("click", function () {
  loading.style.display = "flex";
  startup.style.display = "none";
  setTimeout(function () {
    welcome.style.display = "flex";
    loading.style.display = "none";
    welcomeSound.volume = 0.5;
    welcomeSound.play();
    setTimeout(function () {
      desktop.style.display = "block";
      welcome.style.display = "none";
    }, 5000);
  }, 5000);
});

function clock() {
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  hr = (hr < 10 ? "0" : "") + hr;
  min = (min < 10 ? "0" : "") + min;
  let timeStr = `${hr}:${min}`;
  time.innerHTML = timeStr;
}
setInterval(clock, 1000);

start.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    start.style.backgroundColor = "#45a945";
  } else {
    menu.style.display = "block";
    start.style.backgroundColor = "#1a8b1a";
  }
});

power.addEventListener("click", function () {
  menu.style.display = "none";
  desktop.style.display = "none";
  startup.style.display = "flex";
});
