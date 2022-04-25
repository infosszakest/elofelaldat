const _0x3c9f51 = _0x4433;
(function (_0xb54b03, _0x54fb1d) {
  const _0x2febb6 = _0x4433,
    _0x117c40 = _0xb54b03();
  while (!![]) {
    try {
      const _0x270aec =
        parseInt(_0x2febb6(0xdd)) / 0x1 +
        (parseInt(_0x2febb6(0xf1)) / 0x2) * (parseInt(_0x2febb6(0xf5)) / 0x3) +
        (-parseInt(_0x2febb6(0xb9)) / 0x4) * (parseInt(_0x2febb6(0xc7)) / 0x5) +
        (-parseInt(_0x2febb6(0xcd)) / 0x6) *
          (-parseInt(_0x2febb6(0xb3)) / 0x7) +
        (-parseInt(_0x2febb6(0xba)) / 0x8) * (parseInt(_0x2febb6(0xe0)) / 0x9) +
        -parseInt(_0x2febb6(0xef)) / 0xa +
        (-parseInt(_0x2febb6(0x10d)) / 0xb) *
          (-parseInt(_0x2febb6(0x109)) / 0xc);
      if (_0x270aec === _0x54fb1d) break;
      else _0x117c40["push"](_0x117c40["shift"]());
    } catch (_0x432c4b) {
      _0x117c40["push"](_0x117c40["shift"]());
    }
  }
})(_0x395a, 0x499f9);
const mainContainer = document[_0x3c9f51(0xc5)](_0x3c9f51(0xd4)),
  canvas = document["getElementById"](_0x3c9f51(0xf7)),
  context = canvas[_0x3c9f51(0xec)]("2d"),
  circles = document["getElementsByClassName"]("gg"),
  makeActive = (_0x48413a) => {
    const _0xe18560 = _0x3c9f51;
    circles[_0x48413a][_0xe18560(0xe7)]["add"]("active");
  };
(canvas[_0x3c9f51(0xfe)] = window[_0x3c9f51(0x10c)]),
  (canvas["height"] = window[_0x3c9f51(0xb0)]);
const katakana = _0x3c9f51(0xcc),
  latin = _0x3c9f51(0xb2),
  nums = "0123456789",
  alphabet = katakana + latin + nums,
  fontSize = 0x10,
  columns = canvas[_0x3c9f51(0xfe)] / fontSize,
  rainDrops = [];
for (let x = 0x0; x < columns; x++) {
  rainDrops[x] = 0x1;
}
function _0x4433(_0x56d0f9, _0x1604d8) {
  const _0x395aaf = _0x395a();
  return (
    (_0x4433 = function (_0x443382, _0x3bed06) {
      _0x443382 = _0x443382 - 0xb0;
      let _0xb290a6 = _0x395aaf[_0x443382];
      return _0xb290a6;
    }),
    _0x4433(_0x56d0f9, _0x1604d8)
  );
}
const draw = () => {
  const _0x12fc7b = _0x3c9f51;
  (context["fillStyle"] = _0x12fc7b(0xd0)),
    context["fillRect"](
      0x0,
      0x0,
      canvas[_0x12fc7b(0xfe)],
      canvas[_0x12fc7b(0xe2)]
    ),
    (context["fillStyle"] = _0x12fc7b(0xbb)),
    (context[_0x12fc7b(0xde)] = fontSize + "px\x20monospace");
  for (
    let _0x5cdf37 = 0x0;
    _0x5cdf37 < rainDrops[_0x12fc7b(0xf2)];
    _0x5cdf37++
  ) {
    const _0x5b5035 = alphabet[_0x12fc7b(0xc6)](
      Math[_0x12fc7b(0xe6)](Math[_0x12fc7b(0xbd)]() * alphabet[_0x12fc7b(0xf2)])
    );
    context[_0x12fc7b(0xe3)](
      _0x5b5035,
      _0x5cdf37 * fontSize,
      rainDrops[_0x5cdf37] * fontSize
    ),
      rainDrops[_0x5cdf37] * fontSize > canvas[_0x12fc7b(0xe2)] &&
        Math[_0x12fc7b(0xbd)]() > 0.975 &&
        (rainDrops[_0x5cdf37] = 0x0),
      rainDrops[_0x5cdf37]++;
  }
};
setInterval(draw, 0x1e);
const clearContainer = () => {
  const _0x3a2011 = _0x3c9f51;
  mainContainer[_0x3a2011(0xb1)]();
};
let modal = null;
const addModal = () => {
    const _0x50a7ea = _0x3c9f51;
    (modal = document[_0x50a7ea(0x100)](_0x50a7ea(0x102))),
      modal[_0x50a7ea(0xe7)][_0x50a7ea(0x106)](_0x50a7ea(0xb4));
    const _0x5d6671 = document["createElement"]("h5");
    (_0x5d6671["innerText"] = _0x50a7ea(0xee)),
      (_0x5d6671[_0x50a7ea(0xed)][_0x50a7ea(0x105)] = _0x50a7ea(0xb7)),
      modal["appendChild"](_0x5d6671),
      document[_0x50a7ea(0x10e)][_0x50a7ea(0x104)](modal);
  },
  addGameTitle = (_0x5f3956) => {
    const _0x41c54d = _0x3c9f51,
      _0x1b276b = document[_0x41c54d(0x100)]("h1");
    (_0x1b276b["innerText"] = _0x5f3956),
      (_0x1b276b[_0x41c54d(0xed)][_0x41c54d(0x105)] = _0x41c54d(0xca)),
      mainContainer[_0x41c54d(0x104)](_0x1b276b);
  },
  addElement = (_0x8b4a6f) => {
    const _0x4db17f = _0x3c9f51;
    mainContainer[_0x4db17f(0x104)](_0x8b4a6f);
  };
addModal();
function _0x395a() {
  const _0x46bf64 = [
    "body",
    "push",
    "abcde\x20fghi\x20jklmnop\x20qrstuvwxyz\x20",
    "top",
    "innerHeight",
    "replaceChildren",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "7YtShDS",
    "modal",
    "range",
    "-32px",
    "16px",
    "Gratulálunk!",
    "17764cHmlJa",
    "8oLyRey",
    "#0F0",
    "Bogyó\x20a\x20hobbit",
    "random",
    "trim",
    "5.\x20feladat",
    "open",
    "Hibás\x20megoldás!\x20Próbáld\x20újra.",
    "_blank",
    "majd\x20jövőre",
    "anim-out",
    "getElementById",
    "charAt",
    "305mtMbKA",
    "target",
    "popup",
    "64px",
    "value",
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン",
    "960894EdyVGj",
    "join",
    "input",
    "rgba(0,\x200,\x200,\x200.05)",
    "prototype",
    "bind",
    "Szabiván",
    "main-container",
    "3.\x20feladat",
    "dragStartY",
    "type",
    "dragStartX",
    "1.\x20feladat",
    "absolute",
    "Network\x20error",
    "Nincs\x20más\x20dolgotok,\x20mint\x20a\x20bal\x20felső\x20sarokban\x20lévő\x20szavakat\x20elküldeni\x20nekünk\x20a\x20következő\x20email\x20címre:",
    "49956NkHnLG",
    "font",
    "removeChild",
    "2035647HKqaAT",
    "sort",
    "height",
    "fillText",
    "button",
    "innerText",
    "floor",
    "classList",
    "alkalmazás",
    "Következő",
    "small",
    "drag",
    "getContext",
    "style",
    "Megoldásaim:",
    "3233190Hyborb",
    "addEventListener",
    "250brYJoH",
    "length",
    "text-center",
    "01010011\x2001111010\x2001100001\x2001100010\x2001101001\x2001110110\x2011000011\x2010100001\x2001101110",
    "8463tvJcdE",
    "mousemove",
    "matrix",
    "position",
    "iroda@sztettikhok.hu",
    "removeEventListener",
    "32px",
    "min",
    "onclick",
    "width",
    "clientX",
    "createElement",
    "4.\x20feladat",
    "div",
    "offsetY",
    "appendChild",
    "marginBottom",
    "add",
    "mousedown",
    "map",
    "312akLdag",
    "clientY",
    "placeholder",
    "innerWidth",
    "236599JUSYjU",
  ];
  _0x395a = function () {
    return _0x46bf64;
  };
  return _0x395a();
}
function startGame() {
  game1();
}
const game1 = () => {
    const _0x47231e = _0x3c9f51;
    makeActive(0x0), clearContainer(), addGameTitle(_0x47231e(0xd9));
    const _0x2947b1 = document["createElement"]("h2");
    (_0x2947b1[_0x47231e(0xe5)] =
      "49\x206E\x2066\x20F3\x0a73\x2020\x2073\x207A\x0a61\x206B\x2065\x2073\x2074"),
      (_0x2947b1[_0x47231e(0xed)]["marginBottom"] = _0x47231e(0xfb)),
      addElement(_0x2947b1);
    const _0x5e8f18 = document[_0x47231e(0x100)](_0x47231e(0xcf));
    (_0x5e8f18[_0x47231e(0xed)][_0x47231e(0x105)] = "32px"),
      (_0x5e8f18[_0x47231e(0x10b)] = "Aa"),
      addElement(_0x5e8f18);
    const _0x303dc2 = document[_0x47231e(0x100)](_0x47231e(0xe4));
    (_0x303dc2["innerText"] = _0x47231e(0xe9)),
      (_0x303dc2[_0x47231e(0xfd)] = () => {
        const _0x58f5a7 = _0x47231e;
        if (_0x5e8f18["value"]["trim"]() === "") return;
        if (
          _0x5e8f18[_0x58f5a7(0xcb)][_0x58f5a7(0xbe)]() !== "Infós\x20szakest"
        ) {
          addPopup(_0x58f5a7(0xc1), 0x7d0);
          return;
        }
        addSolution(_0x5e8f18[_0x58f5a7(0xcb)]["trim"]()), game2();
      }),
      addElement(_0x303dc2);
  },
  game2 = () => {
    const _0x178ad1 = _0x3c9f51;
    makeActive(0x1), clearContainer(), addGameTitle("2.\x20feladat");
    let _0x20260f = [];
    for (let _0x4f0151 = 0x0; _0x4f0151 < 0x14; _0x4f0151++) {
      _0x20260f["push"](getRandomSentence(0x14));
    }
    (_0x20260f = _0x20260f[_0x178ad1(0x108)]((_0x1485f7) => ({
      value: _0x1485f7,
      sort: Math["random"](),
    }))
      [_0x178ad1(0xe1)](
        (_0x2bff11, _0x3e3835) =>
          _0x2bff11[_0x178ad1(0xe1)] - _0x3e3835[_0x178ad1(0xe1)]
      )
      ["map"](({ value: _0xd18e9a }) => _0xd18e9a)),
      (_0x20260f[0xa] = _0x178ad1(0xc3));
    const _0x175bd6 = document["createElement"]("h2");
    (_0x175bd6[_0x178ad1(0xe5)] = _0x20260f[0x0]),
      (_0x175bd6[_0x178ad1(0xed)][_0x178ad1(0x105)] = _0x178ad1(0xfb)),
      addElement(_0x175bd6);
    const _0x19a01a = document[_0x178ad1(0x100)](_0x178ad1(0xcf));
    (_0x19a01a[_0x178ad1(0xd7)] = _0x178ad1(0xb5)),
      (_0x19a01a[_0x178ad1(0xfc)] = 0x0),
      (_0x19a01a["max"] = 0x13),
      (_0x19a01a[_0x178ad1(0xcb)] = 0x0),
      (_0x19a01a[_0x178ad1(0xed)][_0x178ad1(0x105)] = _0x178ad1(0xfb)),
      _0x19a01a["addEventListener"]("input", (_0x5003ef) => {
        const _0x52747c = _0x178ad1;
        _0x175bd6[_0x52747c(0xe5)] =
          _0x20260f[_0x5003ef[_0x52747c(0xc8)][_0x52747c(0xcb)]];
      }),
      addElement(_0x19a01a);
    const _0x5819e9 = document[_0x178ad1(0x100)]("input");
    (_0x5819e9[_0x178ad1(0xed)][_0x178ad1(0x105)] = _0x178ad1(0xfb)),
      (_0x5819e9[_0x178ad1(0x10b)] = "Aa"),
      addElement(_0x5819e9);
    const _0x5de9cc = document[_0x178ad1(0x100)]("button");
    (_0x5de9cc[_0x178ad1(0xe5)] = "Következő"),
      (_0x5de9cc[_0x178ad1(0xfd)] = () => {
        const _0x5875d9 = _0x178ad1;
        if (_0x5819e9["value"]["trim"]() === "") return;
        if (_0x5819e9[_0x5875d9(0xcb)][_0x5875d9(0xbe)]() !== _0x5875d9(0xc3)) {
          addPopup(_0x5875d9(0xc1), 0x7d0);
          return;
        }
        addSolution(_0x5819e9[_0x5875d9(0xcb)][_0x5875d9(0xbe)]()), game3();
      }),
      addElement(_0x5de9cc);
  },
  game3 = () => {
    const _0x205812 = _0x3c9f51;
    makeActive(0x2),
      clearContainer(),
      addGameTitle(_0x205812(0xd5)),
      fetch(_0x205812(0xf4));
    const _0x2a3543 = document["createElement"]("h2");
    (_0x2a3543[_0x205812(0xe5)] = _0x205812(0xdb)),
      (_0x2a3543[_0x205812(0xed)]["marginBottom"] = _0x205812(0xfb)),
      addElement(_0x2a3543);
    const _0x29d547 = document[_0x205812(0x100)](_0x205812(0xcf));
    (_0x29d547["style"][_0x205812(0x105)] = _0x205812(0xfb)),
      (_0x29d547[_0x205812(0x10b)] = "Aa"),
      addElement(_0x29d547);
    const _0x48711c = document[_0x205812(0x100)](_0x205812(0xe4));
    (_0x48711c[_0x205812(0xe5)] = _0x205812(0xe9)),
      (_0x48711c[_0x205812(0xfd)] = () => {
        const _0x304a51 = _0x205812;
        if (_0x29d547[_0x304a51(0xcb)][_0x304a51(0xbe)]() === "") return;
        if (_0x29d547["value"][_0x304a51(0xbe)]() !== _0x304a51(0xd3)) {
          addPopup("Hibás\x20megoldás!\x20Próbáld\x20újra.", 0x7d0);
          return;
        }
        addSolution(_0x29d547[_0x304a51(0xcb)][_0x304a51(0xbe)]()), game4();
      }),
      addElement(_0x48711c);
  },
  game4 = () => {
    const _0x51175f = _0x3c9f51;
    makeActive(0x3), clearContainer(), addGameTitle(_0x51175f(0x101));
    const _0x55297f = document[_0x51175f(0x100)]("p");
    (_0x55297f["innerText"] =
      "[7,\x201]\x20Az\x20informatika\x20önálló\x20tudományág,\x20amely\x20a\x20különböző\x20eszközökkel\x20–\x20de\x20különösen\x20a\x20számítógéppel\x20–\x20megvalósított\x20információkezeléssel,\x20azaz\x20az\x20információ\x20megszerzésével,\x20(gyűjtésével),\x20feldolgozásával,\x20tárolásával,\x20sokszorosításával\x20és\x20továbbításával\x20foglalkozik.\x20Az\x20informatika\x20az\x20a\x20diszciplína,\x20interdiszciplináris\x20szakterület,\x20amely\x20magába\x20foglalja\x20a\x20szakterületi\x20alkalmazás\x20struktúráit\x20és\x20jellegzetességeit,\x20s\x20olyan\x20tudományágakra\x20támaszkodik,\x20mint\x20a\x20számítógép-tudomány,\x20információtudomány,\x20információmenedzsment,\x20rendszertervezés,\x20matematika,\x20statisztika,\x20kölcsönhatás\x20ember\x20és\x20számítógép\x20között,\x20orvostudomány,\x20nyelvtudomány,\x20lélektan."),
      (_0x55297f[_0x51175f(0xed)][_0x51175f(0x105)] = _0x51175f(0xfb)),
      addElement(_0x55297f);
    const _0x22fd41 = document[_0x51175f(0x100)](_0x51175f(0xcf));
    (_0x22fd41["style"][_0x51175f(0x105)] = _0x51175f(0xfb)),
      (_0x22fd41[_0x51175f(0x10b)] = "Aa"),
      addElement(_0x22fd41);
    const _0x4abf62 = document[_0x51175f(0x100)](_0x51175f(0xe4));
    (_0x4abf62[_0x51175f(0xe5)] = _0x51175f(0xe9)),
      (_0x4abf62["onclick"] = () => {
        const _0x403abf = _0x51175f;
        if (_0x22fd41[_0x403abf(0xcb)][_0x403abf(0xbe)]() === "") return;
        if (_0x22fd41[_0x403abf(0xcb)]["trim"]() !== _0x403abf(0xe8)) {
          addPopup(_0x403abf(0xc1), 0x7d0);
          return;
        }
        addSolution(_0x22fd41[_0x403abf(0xcb)][_0x403abf(0xbe)]()), game5();
      }),
      addElement(_0x4abf62);
  },
  game5 = () => {
    const _0x179239 = _0x3c9f51;
    makeActive(0x4), clearContainer(), addGameTitle(_0x179239(0xbf));
    const _0x24140a = document[_0x179239(0x100)](_0x179239(0xea));
    (_0x24140a[_0x179239(0xe5)] = _0x179239(0xbc)),
      (_0x24140a[_0x179239(0xed)][_0x179239(0x105)] = _0x179239(0xfb)),
      (_0x24140a["onclick"] = () => {
        gotoBogyo();
      }),
      addElement(_0x24140a);
    const _0x262a16 = document[_0x179239(0x100)](_0x179239(0xcf));
    (_0x262a16[_0x179239(0xed)]["marginBottom"] = _0x179239(0xb6)),
      (_0x262a16[_0x179239(0x10b)] = "Aa"),
      _0x262a16[_0x179239(0xeb)](),
      addElement(_0x262a16);
    const _0x11a05b = document[_0x179239(0x100)](_0x179239(0xe4));
    (_0x11a05b[_0x179239(0xe5)] = "Következő"),
      (_0x11a05b[_0x179239(0xfd)] = () => {
        const _0xc3f798 = _0x179239;
        if (_0x262a16[_0xc3f798(0xcb)][_0xc3f798(0xbe)]() === "") return;
        if (_0x262a16[_0xc3f798(0xcb)][_0xc3f798(0xbe)]() !== _0xc3f798(0xbc)) {
          addPopup(_0xc3f798(0xc1), 0x7d0);
          return;
        }
        addSolution(_0x262a16[_0xc3f798(0xcb)][_0xc3f798(0xbe)]()), end();
      }),
      addElement(_0x11a05b);
  },
  end = () => {
    const _0x35d19b = _0x3c9f51;
    clearContainer(), addGameTitle(_0x35d19b(0xb8));
    const _0x10b62a = document["createElement"]("h3");
    (_0x10b62a[_0x35d19b(0xe5)] =
      "Sikeresen\x20teljesítettétek\x20az\x20előfeladatot."),
      _0x10b62a["classList"][_0x35d19b(0x106)](_0x35d19b(0xf3)),
      addElement(_0x10b62a);
    const _0x3b6286 = document["createElement"]("p");
    (_0x3b6286["innerText"] = _0x35d19b(0xdc)),
      (_0x3b6286[_0x35d19b(0xed)][_0x35d19b(0x105)] = _0x35d19b(0xb7)),
      _0x3b6286["classList"][_0x35d19b(0x106)](_0x35d19b(0xf3)),
      addElement(_0x3b6286);
    const _0x540c5a = document[_0x35d19b(0x100)]("h1");
    (_0x540c5a[_0x35d19b(0xe5)] = _0x35d19b(0xf9)),
      _0x540c5a[_0x35d19b(0xe7)][_0x35d19b(0x106)](_0x35d19b(0xf3)),
      addElement(_0x540c5a);
  },
  getRandomSentence = (_0x4dcbd9) => {
    const _0x33f4c8 = _0x3c9f51,
      _0x54dc47 = _0x33f4c8(0x110);
    let _0x256801 = [];
    for (let _0x13ff5d = 0x0; _0x13ff5d < _0x4dcbd9; _0x13ff5d++) {
      const _0x228562 = Math[_0x33f4c8(0xe6)](
        Math[_0x33f4c8(0xbd)]() * _0x54dc47["length"]
      );
      _0x256801[_0x33f4c8(0x10f)](_0x54dc47[_0x228562]);
    }
    return _0x256801[_0x33f4c8(0xce)]("");
  },
  addSolution = (_0x4f37d3) => {
    const _0x3831eb = _0x3c9f51,
      _0x49f114 = document["createElement"]("p");
    (_0x49f114[_0x3831eb(0xe5)] = _0x4f37d3),
      modal[_0x3831eb(0x104)](_0x49f114);
  };
Element[_0x3c9f51(0xd1)][_0x3c9f51(0xeb)] = function () {
  const _0x13cdc9 = _0x3c9f51;
  var _0x421ece = function (_0x5386b3) {
      const _0x598d06 = _0x4433;
      (this[_0x598d06(0xed)]["left"] =
        _0x5386b3[_0x598d06(0xff)] - this[_0x598d06(0xd8)] + "px"),
        (this[_0x598d06(0xed)][_0x598d06(0x111)] =
          _0x5386b3[_0x598d06(0x10a)] - this[_0x598d06(0xd6)] + "px");
    }[_0x13cdc9(0xd2)](this),
    _0x38eafe = function (_0x2af05b) {
      const _0x2d7ca3 = _0x13cdc9;
      document["removeEventListener"]("mousemove", _0x421ece),
        document[_0x2d7ca3(0xfa)]("mouseup", _0x38eafe);
    }[_0x13cdc9(0xd2)](this);
  this["addEventListener"](
    _0x13cdc9(0x107),
    function (_0x4a570f) {
      const _0x139096 = _0x13cdc9;
      (this[_0x139096(0xd8)] = _0x4a570f["offsetX"]),
        (this[_0x139096(0xd6)] = _0x4a570f[_0x139096(0x103)]),
        document[_0x139096(0xf0)](_0x139096(0xf6), _0x421ece),
        document["addEventListener"]("mouseup", _0x38eafe);
    }["bind"](this)
  ),
    (this[_0x13cdc9(0xed)][_0x13cdc9(0xf8)] = _0x13cdc9(0xda));
};
const addPopup = (_0x3b8535, _0x1f8d53) => {
    const _0x477782 = _0x3c9f51,
      _0xf72d3d = document[_0x477782(0xc5)]("popup");
    _0xf72d3d && document[_0x477782(0x10e)]["removeChild"](_0xf72d3d);
    const _0x54e065 = document["createElement"]("p");
    _0x54e065[_0x477782(0xe5)] = _0x3b8535;
    const _0x4f225b = document[_0x477782(0x100)](_0x477782(0x102));
    _0x4f225b[_0x477782(0xe7)][_0x477782(0x106)](_0x477782(0xc9)),
      _0x4f225b[_0x477782(0x104)](_0x54e065),
      (_0x4f225b["id"] = _0x477782(0xc9)),
      document["body"][_0x477782(0x104)](_0x4f225b),
      setTimeout(() => {
        const _0x4b21ed = _0x477782;
        _0x4f225b[_0x4b21ed(0xe7)][_0x4b21ed(0x106)](_0x4b21ed(0xc4));
      }, _0x1f8d53 - 0xfa),
      setTimeout(() => {
        const _0x4f8747 = _0x477782;
        document[_0x4f8747(0x10e)][_0x4f8747(0xdf)](_0x4f225b);
      }, _0x1f8d53);
  },
  gotoBogyo = () => {
    const _0x998c1e = _0x3c9f51;
    window[_0x998c1e(0xc0)](
      "https://www.facebook.com/bence.bolgovics",
      _0x998c1e(0xc2)
    )["focus"]();
  };
