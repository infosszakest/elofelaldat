const mainContainer = document.getElementById("main-container");
const canvas = document.getElementById("matrix");
const context = canvas.getContext("2d");
const circles = document.getElementsByClassName("gg");

const makeActive = (index) => {
  circles[index].classList.add("active");
};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana =
  "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#0F0";
  context.font = fontSize + "px monospace";

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);

const clearContainer = () => {
  mainContainer.replaceChildren();
};

let modal = null;

const addModal = () => {
  modal = document.createElement("div");
  modal.classList.add("modal");

  const text = document.createElement("h5");
  text.innerText = "Megoldásaim:";
  text.style.marginBottom = "16px";
  modal.appendChild(text);

  document.body.appendChild(modal);
};

const addGameTitle = (title) => {
  const text = document.createElement("h1");
  text.innerText = title;
  text.style.marginBottom = "64px";
  mainContainer.appendChild(text);
};

const addElement = (element) => {
  mainContainer.appendChild(element);
};

addModal();
function startGame() {
  game1();
}

const game1 = () => {
  makeActive(0);
  clearContainer();
  addGameTitle("1. feladat");

  const text = document.createElement("h2");
  text.innerText = "49 6E 66 F3\n73 20 73 7A\n61 6B 65 73 74";
  text.style.marginBottom = "32px";
  addElement(text);

  const input = document.createElement("input");
  input.style.marginBottom = "32px";
  input.placeholder = "Aa";
  addElement(input);

  const btn = document.createElement("button");
  btn.innerText = "Következő";
  btn.onclick = () => {
    if (input.value.trim() === "") {
      return;
    }

    if (input.value.trim() !== "Infós szakest") {
      addPopup("Hibás megoldás! Próbáld újra.", 2000);
      return;
    }

    addSolution(input.value.trim());

    game2();
  };
  addElement(btn);
};

const game2 = () => {
  makeActive(1);
  clearContainer();
  addGameTitle("2. feladat");

  let words = [];
  for (let i = 0; i < 20; i++) {
    words.push(getRandomSentence(20));
  }

  words = words
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  words[10] = "majd jövőre";

  const text = document.createElement("h2");
  text.innerText = words[0];
  text.style.marginBottom = "32px";
  addElement(text);

  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = 0;
  slider.max = 19;
  slider.value = 0;
  slider.style.marginBottom = "32px";
  slider.addEventListener("input", (event) => {
    text.innerText = words[event.target.value];
  });

  addElement(slider);

  const input = document.createElement("input");
  input.style.marginBottom = "32px";
  input.placeholder = "Aa";
  addElement(input);

  const btn = document.createElement("button");
  btn.innerText = "Következő";
  btn.onclick = () => {
    if (input.value.trim() === "") {
      return;
    }

    if (input.value.trim() !== "majd jövőre") {
      addPopup("Hibás megoldás! Próbáld újra.", 2000);
      return;
    }

    addSolution(input.value.trim());

    game3();
  };
  addElement(btn);
};

const game3 = () => {
  makeActive(2);
  clearContainer();
  addGameTitle("3. feladat");

  fetch(
    "01010011 01111010 01100001 01100010 01101001 01110110 11000011 10100001 01101110"
  );

  const text = document.createElement("h2");
  text.innerText = "Network error";
  text.style.marginBottom = "32px";
  addElement(text);

  const input = document.createElement("input");
  input.style.marginBottom = "32px";
  input.placeholder = "Aa";
  addElement(input);

  const btn = document.createElement("button");
  btn.innerText = "Következő";
  btn.onclick = () => {
    if (input.value.trim() === "") {
      return;
    }

    if (input.value.trim() !== "Szabiván") {
      addPopup("Hibás megoldás! Próbáld újra.", 2000);
      return;
    }

    addSolution(input.value.trim());

    game4();
  };

  addElement(btn);
};

const game4 = () => {
  makeActive(3);
  clearContainer();
  addGameTitle("4. feladat");

  const text = document.createElement("p");
  text.innerText =
    "[7, 1] Az informatika önálló tudományág, amely a különböző eszközökkel – de különösen a számítógéppel – megvalósított információkezeléssel, azaz az információ megszerzésével, (gyűjtésével), feldolgozásával, tárolásával, sokszorosításával és továbbításával foglalkozik. Az informatika az a diszciplína, interdiszciplináris szakterület, amely magába foglalja a szakterületi alkalmazás struktúráit és jellegzetességeit, s olyan tudományágakra támaszkodik, mint a számítógép-tudomány, információtudomány, információmenedzsment, rendszertervezés, matematika, statisztika, kölcsönhatás ember és számítógép között, orvostudomány, nyelvtudomány, lélektan.";
  text.style.marginBottom = "32px";
  addElement(text);

  const input = document.createElement("input");
  input.style.marginBottom = "32px";
  input.placeholder = "Aa";
  addElement(input);

  const btn = document.createElement("button");
  btn.innerText = "Következő";
  btn.onclick = () => {
    if (input.value.trim() === "") {
      return;
    }

    if (input.value.trim() !== "alkalmazás") {
      addPopup("Hibás megoldás! Próbáld újra.", 2000);
      return;
    }

    addSolution(input.value.trim());

    game5();
  };

  addElement(btn);
};

const game5 = () => {
  makeActive(4);
  clearContainer();
  addGameTitle("5. feladat");

  const text = document.createElement("small");
  text.innerText = "Bogyó a hobbit";
  text.style.marginBottom = "32px";
  text.onclick = () => {
    gotoBogyo();
  };
  addElement(text);

  const input = document.createElement("input");
  input.style.marginBottom = "-32px";
  input.placeholder = "Aa";
  input.drag();
  addElement(input);

  const btn = document.createElement("button");
  btn.innerText = "Következő";
  btn.onclick = () => {
    if (input.value.trim() === "") {
      return;
    }

    if (input.value.trim() !== "Bogyó a hobbit") {
      addPopup("Hibás megoldás! Próbáld újra.", 2000);
      return;
    }

    addSolution(input.value.trim());

    end();
  };

  addElement(btn);
};

const end = () => {
  clearContainer();
  addGameTitle("Gratulálunk!");

  const text = document.createElement("h3");
  text.innerText = "Sikeresen teljesítettétek az előfeladatot.";
  text.classList.add("text-center");
  addElement(text);

  const text2 = document.createElement("p");
  text2.innerText =
    "Nincs más dolgotok, mint a bal felső sarokban lévő szavakat elküldeni nekünk a következő email címre:";
  text2.style.marginBottom = "16px";
  text2.classList.add("text-center");
  addElement(text2);

  const text3 = document.createElement("h1");
  text3.innerText = "iroda@sztettikhok.hu";
  text3.classList.add("text-center");
  addElement(text3);
};

const getRandomSentence = (length) => {
  const letters = "abcde fghi jklmnop qrstuvwxyz ";
  let res = [];
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * letters.length);
    res.push(letters[index]);
  }

  return res.join("");
};

const addSolution = (sol) => {
  const text = document.createElement("p");
  text.innerText = sol;
  modal.appendChild(text);
};

Element.prototype.drag = function () {
  var mousemove = function (e) {
    this.style.left = e.clientX - this.dragStartX + "px";
    this.style.top = e.clientY - this.dragStartY + "px";
  }.bind(this);

  var mouseup = function (e) {
    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
  }.bind(this);

  this.addEventListener(
    "mousedown",
    function (e) {
      this.dragStartX = e.offsetX;
      this.dragStartY = e.offsetY;

      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", mouseup);
    }.bind(this)
  );

  this.style.position = "absolute";
};

const addPopup = (str, time) => {
  const exists = document.getElementById("popup");
  if (exists) {
    document.body.removeChild(exists);
  }
  const text = document.createElement("p");
  text.innerText = str;

  const div = document.createElement("div");
  div.classList.add("popup");
  div.appendChild(text);
  div.id = "popup";

  document.body.appendChild(div);
  setTimeout(() => {
    div.classList.add("anim-out");
  }, time - 250);
  setTimeout(() => {
    document.body.removeChild(div);
  }, time);
};

const gotoBogyo = () => {
  window.open("https://www.facebook.com/bence.bolgovics", "_blank").focus();
};
//
//
