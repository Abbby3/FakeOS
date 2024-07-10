const time = document.getElementById("time");
const menu = document.getElementById("menu");
const start = document.getElementById("start");
const power = document.getElementById("power");
const desktop = document.getElementById("desktop");
const startup = document.getElementById("startup");
const startupBtn = document.getElementById("startupBtn");
const loading = document.getElementById("loading");
const welcome = document.getElementById("welcome");
const welcomeSound = document.getElementById("welcomeSound");
const explorerS = document.getElementById("explorerS");
const explorerM = document.getElementById("explorerM");
const explorerT = document.getElementById("explorerT");
const explorer = document.getElementById("explorer");
const app = document.getElementById("app");
const esc = document.getElementById("esc");
const googleLink = document.getElementById("googleLink");
const facebookLink = document.getElementById("facebookLink");
const google = document.getElementById("google");
const facebook = document.getElementById("facebook");
const error = document.getElementById("error");
const go = document.getElementById("go");
const search = document.getElementById("search");
const goURL = document.getElementById("goURL");
const searchURL = document.getElementById("searchURL");
const even = document.getElementById("even");
const evenInput = document.getElementById("evenInput");
const evenBtn = document.getElementById("evenBtn");
const result = document.getElementById("result");
const evenS = document.getElementById("evenS");
const evenM = document.getElementById("evenM");
const evenT = document.getElementById("evenT");
const ticS = document.getElementById("ticS");
const ticM = document.getElementById("ticM");
const ticT = document.getElementById("ticT");
const tic = document.getElementById("tic");
const ending = document.getElementById("ending");

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

const clock = () => {
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  hr = (hr < 10 ? "0" : "") + hr;
  min = (min < 10 ? "0" : "") + min;
  let timeStr = `${hr}:${min}`;
  time.innerHTML = timeStr;
};
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

// window exit
esc.addEventListener("click", function () {
  app.style.display = "none";
  explorer.style.display = "none";
  error.style.display = "none";
  goURL.value = "";
  even.style.display = "none";
  tic.style.display = "none";
});

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

// even
evenS.addEventListener("click", function () {
  app.style.display = "block";
  even.style.display = "flex";
});
evenM.addEventListener("click", function () {
  app.style.display = "block";
  even.style.display = "flex";
  menu.style.display = "none";
  start.style.backgroundColor = "#45a945";
});
evenT.addEventListener("click", function () {
  app.style.display = "block";
  even.style.display = "flex";
});
evenBtn.addEventListener("click", function () {
  if (evenInput.value.length < 1) {
    result.textContent = "Please input a valid number!";
  } else if (evenInput.value % 2 == 0) {
    result.textContent = `${evenInput.value} is even!`;
  } else {
    result.textContent = `${evenInput.value} is odd!`;
  }
});

// tic
ticS.addEventListener("click", function () {
  app.style.display = "block";
  tic.style.display = "flex";
});
ticM.addEventListener("click", function () {
  app.style.display = "block";
  tic.style.display = "flex";
  menu.style.display = "none";
  start.style.backgroundColor = "#45a945";
});
ticT.addEventListener("click", function () {
  app.style.display = "block";
  tic.style.display = "flex";
});

let endStr1 = "";
let endStr2 = "";
let count = 0;
let buttons = ["btnA", "btnB", "btnC", "btnD", "btnE", "btnF", "btnG", "btnH", "btnI"];

const reset = () => {
  endStr1 = "";
  endStr2 = "";
  count = 0;
  ending.innerText = "";
  buttons.forEach((id) => {
    const button = document.getElementById(id);
    button.innerText = "";
    button.disabled = false;
  });
};

const addChar = (id, char) => {
  const button = document.getElementById(id);
  button.addEventListener("click", function () {
    if (count % 2 == 0) {
      count++;
      endStr1 += char;
      button.innerText = "X";
      button.disabled = true;
      checkWin(endStr1);
    } else {
      count++;
      endStr2 += char;
      button.innerText = "O";
      button.disabled = true;
      checkWin(endStr2);
    }
    if (count === 9 && !document.getElementById("ending").innerText) {
      document.getElementById("ending").innerText = "It's a draw!";
      setTimeout(reset, 3000);
    }
  });
};

const wins = ["abc", "adg", "ghi", "ifc", "aei", "ceg", "beh", "def"];
const checkWin = (str) => {
  for (let win of wins) {
    let found = true;
    for (let letter of win) {
      if (!str.includes(letter)) {
        found = false;
        break;
      }
    }
    if (found) {
      if (count % 2 != 0) {
        ending.innerText = "Player 1 wins!";
        setTimeout(reset, 3000);
      } else {
        ending.innerText = "Player 2 wins!";
        setTimeout(reset, 3000);
      }
      break;
    }
  }
};

addChar("btnA", "a");
addChar("btnB", "b");
addChar("btnC", "c");
addChar("btnD", "d");
addChar("btnE", "e");
addChar("btnF", "f");
addChar("btnG", "g");
addChar("btnH", "h");
addChar("btnI", "i");
