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
let explorerS = document.getElementById("explorerS");
let explorerM = document.getElementById("explorerM");
let explorerT = document.getElementById("explorerT");
let explorer = document.getElementById("explorer");
let app = document.getElementById("app");
let esc = document.getElementById("esc");
let googleLink = document.getElementById("googleLink");
let facebookLink = document.getElementById("facebookLink");
let google = document.getElementById("google");
let facebook = document.getElementById("facebook");
let error = document.getElementById("error");
let go = document.getElementById("go");
let search = document.getElementById("search");
let goURL = document.getElementById("goURL");
let searchURL = document.getElementById("searchURL");

// startupBtn.addEventListener("click", function () {
//   loading.style.display = "flex";
//   startup.style.display = "none";
//   setTimeout(function () {
//     welcome.style.display = "flex";
//     loading.style.display = "none";
//     welcomeSound.volume = 0.5;
//     welcomeSound.play();
//     setTimeout(function () {
//       desktop.style.display = "block";
//       welcome.style.display = "none";
//     }, 5000);
//   }, 5000);
// });

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

// power.addEventListener("click", function () {
//   menu.style.display = "none";
//   desktop.style.display = "none";
//   startup.style.display = "flex";
// });


// explorer functionality
explorerS.addEventListener("click", function () {
  app.style.display = "block";
  explorer.style.display = "flex";
  google.style.display = "flex";
  facebook.style.display = "none";
  error.style.display = "none";
  goURL.value = "";
});
explorerM.addEventListener("click", function () {
  app.style.display = "block";
  explorer.style.display = "flex";
  google.style.display = "flex";
  facebook.style.display = "none";
  error.style.display = "none";
  goURL.value = "";
  menu.style.display = "none";
  start.style.backgroundColor = "#45a945";
});
explorerT.addEventListener("click", function () {
  app.style.display = "block";
  explorer.style.display = "flex";
  google.style.display = "flex";
  facebook.style.display = "none";
  error.style.display = "none";
  goURL.value = "";
});

esc.addEventListener("click", function () {
  app.style.display = "none";
  explorer.style.display = "none";
  error.style.display = "none";
  goURL.value = "";
});

googleLink.addEventListener("click", function (event) {
  event.preventDefault();
  google.style.display = "flex";
  facebook.style.display = "none";
  error.style.display = "none";
  goURL.value = "";
});
facebookLink.addEventListener("click", function (event) {
  event.preventDefault();
  google.style.display = "none";
  facebook.style.display = "block";
  error.style.display = "none";
  goURL.value = "";
});

go.addEventListener("click", function () {
  if (goURL.value == "facebook") {
    google.style.display = "none";
    facebook.style.display = "block";
    error.style.display = "none";
    goURL.value = "";
  } else if (goURL.value == "google") {
    google.style.display = "flex";
    facebook.style.display = "none";
    error.style.display = "none";
    goURL.value = "";
  } else {
    google.style.display = "none";
    facebook.style.display = "none";
    error.style.display = "flex";
    goURL.value = "";
  }
});

search.addEventListener("click", function () {
  if (searchURL.value == "facebook") {
    google.style.display = "none";
    facebook.style.display = "block";
    error.style.display = "none";
    searchURL.value = "";
  } else if (searchURL.value == "google") {
    google.style.display = "flex";
    facebook.style.display = "none";
    error.style.display = "none";
    searchURL.value = "";
  } else {
    google.style.display = "none";
    facebook.style.display = "none";
    error.style.display = "flex";
    searchURL.value = "";
  }
});


