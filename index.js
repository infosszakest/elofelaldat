const _0x1323b3 = _0x131f;
function _0x131f(_0x22688a, _0x4b7e68) {
  const _0x5f20d4 = _0x5f20();
  return (
    (_0x131f = function (_0x131f80, _0x376f84) {
      _0x131f80 = _0x131f80 - 0xbc;
      let _0x35cbdc = _0x5f20d4[_0x131f80];
      return _0x35cbdc;
    }),
    _0x131f(_0x22688a, _0x4b7e68)
  );
}
(function (_0x26eb3f, _0x208954) {
  const _0x66e9c8 = _0x131f,
    _0x41081d = _0x26eb3f();
  while (!![]) {
    try {
      const _0xe954f4 =
        parseInt(_0x66e9c8(0xe4)) / 0x1 +
        parseInt(_0x66e9c8(0xe1)) / 0x2 +
        (parseInt(_0x66e9c8(0xef)) / 0x3) * (-parseInt(_0x66e9c8(0xeb)) / 0x4) +
        (parseInt(_0x66e9c8(0x10e)) / 0x5) *
          (-parseInt(_0x66e9c8(0xe5)) / 0x6) +
        -parseInt(_0x66e9c8(0xbe)) / 0x7 +
        -parseInt(_0x66e9c8(0xce)) / 0x8 +
        (-parseInt(_0x66e9c8(0xf9)) / 0x9) * (-parseInt(_0x66e9c8(0xd2)) / 0xa);
      if (_0xe954f4 === _0x208954) break;
      else _0x41081d["push"](_0x41081d["shift"]());
    } catch (_0x13b819) {
      _0x41081d["push"](_0x41081d["shift"]());
    }
  }
})(_0x5f20, 0xdd20e);
const mainContainer = document["getElementById"](_0x1323b3(0xe0)),
  canvas = document[_0x1323b3(0xbf)](_0x1323b3(0xfa)),
  context = canvas[_0x1323b3(0x104)]("2d"),
  circles = document[_0x1323b3(0x111)]("gg"),
  makeActive = (_0x31f4a2) => {
    const _0x179fcd = _0x1323b3;
    circles[_0x31f4a2][_0x179fcd(0x11c)]["add"](_0x179fcd(0xbc));
  };
(canvas[_0x1323b3(0x117)] = window[_0x1323b3(0x101)]),
  (canvas["height"] = window["innerHeight"]);
const katakana = _0x1323b3(0x103),
  latin = _0x1323b3(0x115),
  nums = _0x1323b3(0xcd),
  alphabet = katakana + latin + nums,
  fontSize = 0x10,
  columns = canvas[_0x1323b3(0x117)] / fontSize,
  rainDrops = [];
for (let x = 0x0; x < columns; x++) {
  rainDrops[x] = 0x1;
}
const draw = () => {
  const _0x3ba905 = _0x1323b3;
  (context[_0x3ba905(0xbd)] = _0x3ba905(0xc1)),
    context[_0x3ba905(0xf6)](
      0x0,
      0x0,
      canvas[_0x3ba905(0x117)],
      canvas[_0x3ba905(0xdd)]
    ),
    (context[_0x3ba905(0xbd)] = _0x3ba905(0xe9)),
    (context[_0x3ba905(0x116)] = fontSize + _0x3ba905(0x118));
  for (
    let _0x5b0664 = 0x0;
    _0x5b0664 < rainDrops[_0x3ba905(0xf1)];
    _0x5b0664++
  ) {
    const _0x1ab856 = alphabet[_0x3ba905(0x113)](
      Math[_0x3ba905(0x110)](Math[_0x3ba905(0x107)]() * alphabet["length"])
    );
    context["fillText"](
      _0x1ab856,
      _0x5b0664 * fontSize,
      rainDrops[_0x5b0664] * fontSize
    ),
      rainDrops[_0x5b0664] * fontSize > canvas[_0x3ba905(0xdd)] &&
        Math["random"]() > 0.975 &&
        (rainDrops[_0x5b0664] = 0x0),
      rainDrops[_0x5b0664]++;
  }
};
setInterval(draw, 0x1e);
const clearContainer = () => {
  mainContainer["replaceChildren"]();
};
let modal = null;
const addModal = () => {
    const _0x2eb41b = _0x1323b3;
    (modal = document[_0x2eb41b(0x105)](_0x2eb41b(0xe2))),
      modal["classList"][_0x2eb41b(0xea)](_0x2eb41b(0x109));
    const _0x4b2da0 = document["createElement"]("h5");
    (_0x4b2da0[_0x2eb41b(0x119)] = "Megoldásaim:"),
      (_0x4b2da0[_0x2eb41b(0xdc)]["marginBottom"] = _0x2eb41b(0xf7)),
      modal[_0x2eb41b(0xc0)](_0x4b2da0),
      document[_0x2eb41b(0x11e)]["appendChild"](modal);
  },
  addGameTitle = (_0x4fe588) => {
    const _0x2a3aa2 = _0x1323b3,
      _0x3d95cb = document[_0x2a3aa2(0x105)]("h1");
    (_0x3d95cb[_0x2a3aa2(0x119)] = _0x4fe588),
      (_0x3d95cb[_0x2a3aa2(0xdc)][_0x2a3aa2(0xe3)] = "64px"),
      mainContainer["appendChild"](_0x3d95cb);
  },
  addElement = (_0xa1b94c) => {
    const _0x393e2d = _0x1323b3;
    mainContainer[_0x393e2d(0xc0)](_0xa1b94c);
  };
addModal();
function startGame() {
  game1();
}
const game1 = () => {
    const _0x33061a = _0x1323b3;
    makeActive(0x0), clearContainer(), addGameTitle(_0x33061a(0x11f));
    const _0x22609e = document[_0x33061a(0x105)]("h2");
    (_0x22609e["innerText"] = _0x33061a(0x10d)),
      (_0x22609e[_0x33061a(0xdc)][_0x33061a(0xe3)] = _0x33061a(0xf4)),
      addElement(_0x22609e);
    const _0x595f75 = document[_0x33061a(0x105)](_0x33061a(0xd3));
    (_0x595f75[_0x33061a(0xdc)][_0x33061a(0xe3)] = _0x33061a(0xf4)),
      (_0x595f75[_0x33061a(0x112)] = "Aa"),
      addElement(_0x595f75);
    const _0x163570 = document[_0x33061a(0x105)](_0x33061a(0xf5));
    (_0x163570[_0x33061a(0x119)] = _0x33061a(0x100)),
      (_0x163570[_0x33061a(0xd7)] = () => {
        const _0x11ed18 = _0x33061a;
        if (_0x595f75["value"]["trim"]() === "") return;
        if (
          _0x595f75[_0x11ed18(0xd4)][_0x11ed18(0xcf)]() !== "Infós\x20szakest"
        ) {
          addPopup(_0x11ed18(0xde), 0x7d0);
          return;
        }
        addSolution(_0x595f75["value"][_0x11ed18(0xcf)]()), game2();
      }),
      addElement(_0x163570);
  },
  game2 = () => {
    const _0x785626 = _0x1323b3;
    makeActive(0x1), clearContainer(), addGameTitle("2.\x20feladat");
    let _0xc6f8fd = [];
    for (let _0x532c32 = 0x0; _0x532c32 < 0x14; _0x532c32++) {
      _0xc6f8fd[_0x785626(0xf8)](getRandomSentence(0x14));
    }
    (_0xc6f8fd = _0xc6f8fd[_0x785626(0x11a)]((_0x25e7f5) => ({
      value: _0x25e7f5,
      sort: Math[_0x785626(0x107)](),
    }))
      [_0x785626(0xc2)](
        (_0x493e6f, _0x4eca07) => _0x493e6f[_0x785626(0xc2)] - _0x4eca07["sort"]
      )
      [_0x785626(0x11a)](({ value: _0xef6e93 }) => _0xef6e93)),
      (_0xc6f8fd[0xa] = _0x785626(0xfb));
    const _0x296ac9 = document[_0x785626(0x105)]("h2");
    (_0x296ac9[_0x785626(0x119)] = _0xc6f8fd[0x0]),
      (_0x296ac9[_0x785626(0xdc)][_0x785626(0xe3)] = _0x785626(0xf4)),
      addElement(_0x296ac9);
    const _0xf8ed6d = document[_0x785626(0x105)](_0x785626(0xd3));
    (_0xf8ed6d[_0x785626(0xe8)] = _0x785626(0xf3)),
      (_0xf8ed6d["min"] = 0x0),
      (_0xf8ed6d[_0x785626(0xf2)] = 0x13),
      (_0xf8ed6d[_0x785626(0xd4)] = 0x0),
      (_0xf8ed6d[_0x785626(0xdc)][_0x785626(0xe3)] = "32px"),
      _0xf8ed6d[_0x785626(0x114)]("input", (_0x1e8f7a) => {
        const _0x125874 = _0x785626;
        _0x296ac9["innerText"] =
          _0xc6f8fd[_0x1e8f7a[_0x125874(0xc5)][_0x125874(0xd4)]];
      }),
      addElement(_0xf8ed6d);
    const _0xb56961 = document[_0x785626(0x105)](_0x785626(0xd3));
    (_0xb56961[_0x785626(0xdc)][_0x785626(0xe3)] = _0x785626(0xf4)),
      (_0xb56961["placeholder"] = "Aa"),
      addElement(_0xb56961);
    const _0x457a1e = document[_0x785626(0x105)]("button");
    (_0x457a1e[_0x785626(0x119)] = "Következő"),
      (_0x457a1e[_0x785626(0xd7)] = () => {
        const _0xb63047 = _0x785626;
        if (_0xb56961[_0xb63047(0xd4)]["trim"]() === "") return;
        if (_0xb56961[_0xb63047(0xd4)][_0xb63047(0xcf)]() !== _0xb63047(0xfb)) {
          addPopup(_0xb63047(0xde), 0x7d0);
          return;
        }
        addSolution(_0xb56961["value"][_0xb63047(0xcf)]()), game3();
      }),
      addElement(_0x457a1e);
  },
  game3 = () => {
    const _0x5e2f9f = _0x1323b3;
    makeActive(0x2),
      clearContainer(),
      addGameTitle(_0x5e2f9f(0xcc)),
      fetch(_0x5e2f9f(0xed));
    const _0x3b5c44 = document[_0x5e2f9f(0x105)]("h2");
    (_0x3b5c44[_0x5e2f9f(0x119)] = _0x5e2f9f(0xd9)),
      (_0x3b5c44[_0x5e2f9f(0xdc)]["marginBottom"] = "32px"),
      addElement(_0x3b5c44);
    const _0x2b47a8 = document["createElement"]("input");
    (_0x2b47a8[_0x5e2f9f(0xdc)][_0x5e2f9f(0xe3)] = _0x5e2f9f(0xf4)),
      (_0x2b47a8[_0x5e2f9f(0x112)] = "Aa"),
      addElement(_0x2b47a8);
    const _0x292344 = document[_0x5e2f9f(0x105)](_0x5e2f9f(0xf5));
    (_0x292344[_0x5e2f9f(0x119)] = _0x5e2f9f(0x100)),
      (_0x292344[_0x5e2f9f(0xd7)] = () => {
        const _0x3f0a17 = _0x5e2f9f;
        if (_0x2b47a8[_0x3f0a17(0xd4)][_0x3f0a17(0xcf)]() === "") return;
        if (_0x2b47a8[_0x3f0a17(0xd4)][_0x3f0a17(0xcf)]() !== _0x3f0a17(0xc3)) {
          addPopup(_0x3f0a17(0xde), 0x7d0);
          return;
        }
        addSolution(_0x2b47a8["value"][_0x3f0a17(0xcf)]()), game4();
      }),
      addElement(_0x292344);
  },
  game4 = () => {
    const _0x4bcfe9 = _0x1323b3;
    makeActive(0x3), clearContainer(), addGameTitle(_0x4bcfe9(0xf0));
    const _0x783838 = document["createElement"]("p");
    (_0x783838[_0x4bcfe9(0x119)] =
      "[7,\x201]\x20Az\x20informatika\x20önálló\x20tudományág,\x20amely\x20a\x20különböző\x20eszközökkel\x20–\x20de\x20különösen\x20a\x20számítógéppel\x20–\x20megvalósított\x20információkezeléssel,\x20azaz\x20az\x20információ\x20megszerzésével,\x20(gyűjtésével),\x20feldolgozásával,\x20tárolásával,\x20sokszorosításával\x20és\x20továbbításával\x20foglalkozik.\x20Az\x20informatika\x20az\x20a\x20diszciplína,\x20interdiszciplináris\x20szakterület,\x20amely\x20magába\x20foglalja\x20a\x20szakterületi\x20alkalmazás\x20struktúráit\x20és\x20jellegzetességeit,\x20s\x20olyan\x20tudományágakra\x20támaszkodik,\x20mint\x20a\x20számítógép-tudomány,\x20információtudomány,\x20információmenedzsment,\x20rendszertervezés,\x20matematika,\x20statisztika,\x20kölcsönhatás\x20ember\x20és\x20számítógép\x20között,\x20orvostudomány,\x20nyelvtudomány,\x20lélektan."),
      (_0x783838["style"][_0x4bcfe9(0xe3)] = _0x4bcfe9(0xf4)),
      addElement(_0x783838);
    const _0x517e11 = document["createElement"](_0x4bcfe9(0xd3));
    (_0x517e11[_0x4bcfe9(0xdc)]["marginBottom"] = _0x4bcfe9(0xf4)),
      (_0x517e11[_0x4bcfe9(0x112)] = "Aa"),
      addElement(_0x517e11);
    const _0x2ec221 = document[_0x4bcfe9(0x105)](_0x4bcfe9(0xf5));
    (_0x2ec221[_0x4bcfe9(0x119)] = _0x4bcfe9(0x100)),
      (_0x2ec221["onclick"] = () => {
        const _0x239b0e = _0x4bcfe9;
        if (_0x517e11[_0x239b0e(0xd4)][_0x239b0e(0xcf)]() === "") return;
        if (_0x517e11[_0x239b0e(0xd4)][_0x239b0e(0xcf)]() !== _0x239b0e(0xd1)) {
          addPopup(_0x239b0e(0xde), 0x7d0);
          return;
        }
        addSolution(_0x517e11[_0x239b0e(0xd4)][_0x239b0e(0xcf)]()), game5();
      }),
      addElement(_0x2ec221);
  },
  game5 = () => {
    const _0x3a7e0f = _0x1323b3;
    makeActive(0x4), clearContainer(), addGameTitle("5.\x20feladat");
    const _0x481651 = document[_0x3a7e0f(0x105)](_0x3a7e0f(0xfe));
    (_0x481651[_0x3a7e0f(0x119)] = _0x3a7e0f(0xdf)),
      (_0x481651[_0x3a7e0f(0xdc)][_0x3a7e0f(0xe3)] = _0x3a7e0f(0xf4)),
      (_0x481651["onclick"] = () => {
        gotoBogyo();
      }),
      addElement(_0x481651);
    const _0x4fc38f = document["createElement"](_0x3a7e0f(0xd3));
    (_0x4fc38f[_0x3a7e0f(0xdc)][_0x3a7e0f(0xe3)] = _0x3a7e0f(0x106)),
      (_0x4fc38f[_0x3a7e0f(0x112)] = "Aa"),
      _0x4fc38f["drag"](),
      addElement(_0x4fc38f);
    const _0x430012 = document[_0x3a7e0f(0x105)](_0x3a7e0f(0xf5));
    (_0x430012[_0x3a7e0f(0x119)] = _0x3a7e0f(0x100)),
      (_0x430012[_0x3a7e0f(0xd7)] = () => {
        const _0x218032 = _0x3a7e0f;
        if (_0x4fc38f[_0x218032(0xd4)][_0x218032(0xcf)]() === "") return;
        if (_0x4fc38f[_0x218032(0xd4)][_0x218032(0xcf)]() !== _0x218032(0xdf)) {
          addPopup(_0x218032(0xde), 0x7d0);
          return;
        }
        addSolution(_0x4fc38f[_0x218032(0xd4)][_0x218032(0xcf)]()), end();
      }),
      addElement(_0x430012);
  },
  end = () => {
    const _0x437e6f = _0x1323b3;
    clearContainer(), addGameTitle(_0x437e6f(0xd0));
    const _0x186f20 = document["createElement"]("h3");
    (_0x186f20["innerText"] = _0x437e6f(0xc7)),
      _0x186f20[_0x437e6f(0x11c)][_0x437e6f(0xea)](_0x437e6f(0x10f)),
      addElement(_0x186f20);
    const _0x1e9483 = document["createElement"]("p");
    (_0x1e9483["innerText"] = _0x437e6f(0xdb)),
      (_0x1e9483[_0x437e6f(0xdc)][_0x437e6f(0xe3)] = _0x437e6f(0xf7)),
      _0x1e9483[_0x437e6f(0x11c)][_0x437e6f(0xea)](_0x437e6f(0x10f)),
      addElement(_0x1e9483);
    const _0x713fa = document["createElement"]("h1");
    (_0x713fa[_0x437e6f(0x119)] = _0x437e6f(0xda)),
      _0x713fa[_0x437e6f(0x11c)]["add"](_0x437e6f(0x10f)),
      addElement(_0x713fa);
  },
  getRandomSentence = (_0x11a63a) => {
    const _0x27c7ec = _0x1323b3,
      _0xc888a2 = _0x27c7ec(0xfc);
    let _0x315d17 = [];
    for (let _0x4d2d52 = 0x0; _0x4d2d52 < _0x11a63a; _0x4d2d52++) {
      const _0x1e1a19 = Math[_0x27c7ec(0x110)](
        Math[_0x27c7ec(0x107)]() * _0xc888a2[_0x27c7ec(0xf1)]
      );
      _0x315d17["push"](_0xc888a2[_0x1e1a19]);
    }
    return _0x315d17[_0x27c7ec(0xc8)]("");
  },
  addSolution = (_0x310b6b) => {
    const _0x2a1299 = _0x1323b3,
      _0x1b89bb = document[_0x2a1299(0x105)]("p");
    (_0x1b89bb[_0x2a1299(0x119)] = _0x310b6b),
      modal[_0x2a1299(0xc0)](_0x1b89bb);
  };
Element[_0x1323b3(0xe7)][_0x1323b3(0x10a)] = function () {
  const _0x3b872e = _0x1323b3;
  var _0x3d7000 = function (_0x968a7b) {
      const _0x31cea3 = _0x131f;
      (this[_0x31cea3(0xdc)][_0x31cea3(0xff)] =
        _0x968a7b[_0x31cea3(0x11d)] - this[_0x31cea3(0xec)] + "px"),
        (this[_0x31cea3(0xdc)][_0x31cea3(0x11b)] =
          _0x968a7b["clientY"] - this[_0x31cea3(0x102)] + "px");
    }[_0x3b872e(0xee)](this),
    _0xe1b706 = function (_0x25d01c) {
      const _0x7b7884 = _0x3b872e;
      document[_0x7b7884(0xcb)](_0x7b7884(0xc9), _0x3d7000),
        document[_0x7b7884(0xcb)](_0x7b7884(0x10c), _0xe1b706);
    }[_0x3b872e(0xee)](this);
  this["addEventListener"](
    _0x3b872e(0xe6),
    function (_0x461bf0) {
      const _0x20ad63 = _0x3b872e;
      (this[_0x20ad63(0xec)] = _0x461bf0[_0x20ad63(0xc6)]),
        (this[_0x20ad63(0x102)] = _0x461bf0["offsetY"]),
        document[_0x20ad63(0x114)](_0x20ad63(0xc9), _0x3d7000),
        document[_0x20ad63(0x114)](_0x20ad63(0x10c), _0xe1b706);
    }[_0x3b872e(0xee)](this)
  ),
    (this[_0x3b872e(0xdc)][_0x3b872e(0xd5)] = "absolute");
};
function _0x5f20() {
  const _0x46ed92 = [
    "body",
    "1.\x20feladat",
    "active",
    "fillStyle",
    "5532450cSUkWE",
    "getElementById",
    "appendChild",
    "rgba(0,\x200,\x200,\x200.05)",
    "sort",
    "Szabiván",
    "open",
    "target",
    "offsetX",
    "Sikeresen\x20teljesítettétek\x20az\x20előfeladatot.",
    "join",
    "mousemove",
    "https://www.facebook.com/bence.bolgovics",
    "removeEventListener",
    "3.\x20feladat",
    "0123456789",
    "11884528fljlpn",
    "trim",
    "Gratulálunk!",
    "alkalmazás",
    "26374510NtUHDH",
    "input",
    "value",
    "position",
    "_blank",
    "onclick",
    "focus",
    "Network\x20error",
    "iroda@sztettikhok.hu",
    "Nincs\x20más\x20dolgotok,\x20mint\x20a\x20bal\x20felső\x20sarokban\x20lévő\x20szavakat\x20elküldeni\x20nekünk\x20a\x20következő\x20email\x20címre:",
    "style",
    "height",
    "Hibás\x20megoldás!\x20Próbáld\x20újra.",
    "Bogyó\x20a\x20hobbit",
    "main-container",
    "2808228AhcMxP",
    "div",
    "marginBottom",
    "1446120VBLwiG",
    "614814dBqaFc",
    "mousedown",
    "prototype",
    "type",
    "#0F0",
    "add",
    "264lUWHyU",
    "dragStartX",
    "01010011\x2001111010\x2001100001\x2001100010\x2001101001\x2001110110\x2011000011\x2010100001\x2001101110",
    "bind",
    "81531GyAgWh",
    "4.\x20feladat",
    "length",
    "max",
    "range",
    "32px",
    "button",
    "fillRect",
    "16px",
    "push",
    "9ezfTDr",
    "matrix",
    "majd\x20jövőre",
    "abcde\x20fghi\x20jklmnop\x20qrstuvwxyz\x20",
    "anim-out",
    "small",
    "left",
    "Következő",
    "innerWidth",
    "dragStartY",
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン",
    "getContext",
    "createElement",
    "-32px",
    "random",
    "popup",
    "modal",
    "drag",
    "removeChild",
    "mouseup",
    "49\x206E\x2066\x20F3\x0a73\x2020\x2073\x207A\x0a61\x206B\x2065\x2073\x2074",
    "25SGMsEh",
    "text-center",
    "floor",
    "getElementsByClassName",
    "placeholder",
    "charAt",
    "addEventListener",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "font",
    "width",
    "px\x20monospace",
    "innerText",
    "map",
    "top",
    "classList",
    "clientX",
  ];
  _0x5f20 = function () {
    return _0x46ed92;
  };
  return _0x5f20();
} //
const addPopup = (_0x3be95b, _0x1c0cc6) => {
    const _0x1a8851 = _0x1323b3,
      _0xd152b4 = document[_0x1a8851(0xbf)](_0x1a8851(0x108));
    _0xd152b4 && document[_0x1a8851(0x11e)][_0x1a8851(0x10b)](_0xd152b4);
    const _0x38a0f2 = document[_0x1a8851(0x105)]("p");
    _0x38a0f2[_0x1a8851(0x119)] = _0x3be95b;
    const _0x15797b = document["createElement"](_0x1a8851(0xe2));
    _0x15797b["classList"][_0x1a8851(0xea)]("popup"),
      _0x15797b[_0x1a8851(0xc0)](_0x38a0f2),
      (_0x15797b["id"] = _0x1a8851(0x108)),
      document["body"][_0x1a8851(0xc0)](_0x15797b),
      setTimeout(() => {
        const _0x2cb6aa = _0x1a8851;
        _0x15797b[_0x2cb6aa(0x11c)]["add"](_0x2cb6aa(0xfd));
      }, _0x1c0cc6 - 0xfa),
      setTimeout(() => {
        const _0x2f38b5 = _0x1a8851;
        document[_0x2f38b5(0x11e)]["removeChild"](_0x15797b);
      }, _0x1c0cc6);
  },
  gotoBogyo = () => {
    const _0x21bdcc = _0x1323b3;
    window[_0x21bdcc(0xc4)](_0x21bdcc(0xca), _0x21bdcc(0xd6))[
      _0x21bdcc(0xd8)
    ]();
  };
//ewwet
