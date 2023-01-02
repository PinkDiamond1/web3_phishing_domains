(function (e) {
  function t(t) {
    for (
      var a, r, i = t[0], l = t[1], o = t[2], b = 0, f = [];
      b < i.length;
      b++
    )
      (r = i[b]),
        Object.prototype.hasOwnProperty.call(n, r) && n[r] && f.push(n[r][0]),
        (n[r] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
    d && d(t);
    while (f.length) f.shift()();
    return s.push.apply(s, o || []), c();
  }
  function c() {
    for (var e, t = 0; t < s.length; t++) {
      for (var c = s[t], a = !0, i = 1; i < c.length; i++) {
        var l = c[i];
        0 !== n[l] && (a = !1);
      }
      a && (s.splice(t--, 1), (e = r((r.s = c[0]))));
    }
    return e;
  }
  var a = {},
    n = { app: 0 },
    s = [];
  function r(t) {
    if (a[t]) return a[t].exports;
    var c = (a[t] = { i: t, l: !1, exports: {} });
    return e[t].call(c.exports, c, c.exports, r), (c.l = !0), c.exports;
  }
  (r.m = e),
    (r.c = a),
    (r.d = function (e, t, c) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: c });
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var c = Object.create(null);
      if (
        (r.r(c),
        Object.defineProperty(c, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          r.d(
            c,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return c;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "../");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var o = 0; o < i.length; o++) t(i[o]);
  var d = l;
  s.push([0, "chunk-vendors"]), c();
})({
  0: function (e, t, c) {
    e.exports = c("56d7");
  },
  "56d7": function (e, t, c) {
    "use strict";
    c.r(t);
    var a = c("7a23");
    const n = { class: "bg-no-repeat bg-cover bg-main" },
      s = Object(a["g"])(
        '<div class="text-center py-6 md:py-12 bg-dark2"><h2 class="text-2xl md:text-4xl mb-6 font-Rubik"> Want to launch your project on TrustPad? </h2><div class="inline-block"><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSer-PUjhMDG5fmasXYkmvY3EgpTC-yaI4up5by6Hx5g_9wZaw/viewform" class="btn-apply"><i class="las la-space-shuttle la-2x mr-2 text-2xl"></i> Apply to Launch</a></div></div>',
        1
      );
    function r(e, t, c, r, i, l) {
      const o = Object(a["m"])("Header"),
        d = Object(a["m"])("Banner"),
        b = Object(a["m"])("Content"),
        f = Object(a["m"])("Footer");
      return (
        Object(a["k"])(),
        Object(a["e"])(
          a["a"],
          null,
          [
            Object(a["f"])("div", n, [
              Object(a["h"])(
                o,
                {
                  account: e.account,
                  bindWallet: l.bindWallet,
                  mainBalance: e.mainBalance,
                  balances: e.balances,
                  contract: e.contract,
                  chainCode: e.chainCode,
                },
                null,
                8,
                [
                  "account",
                  "bindWallet",
                  "mainBalance",
                  "balances",
                  "contract",
                  "chainCode",
                ]
              ),
              l.showBanners
                ? (Object(a["k"])(),
                  Object(a["c"])(d, { key: 0, balances: e.balances }, null, 8, [
                    "balances",
                  ]))
                : Object(a["d"])("", !0),
              e.contract
                ? (Object(a["k"])(),
                  Object(a["c"])(
                    b,
                    {
                      key: 1,
                      project: e.project,
                      contract: e.contract,
                      approve: l.handleApprove,
                      account: e.account,
                      chainBalance: e.chainBalance,
                      loading: e.loading,
                    },
                    null,
                    8,
                    [
                      "project",
                      "contract",
                      "approve",
                      "account",
                      "chainBalance",
                      "loading",
                    ]
                  ))
                : Object(a["d"])("", !0),
              s,
            ]),
            Object(a["h"])(f),
          ],
          64
        )
      );
    }
    const i = { class: "navbar flex flex-col lg:flex-row container" },
      l = Object(a["f"])(
        "a",
        {
          class:
            "text-white no-underline pr-4 flex items-center no-hover mb-3 lg:mb-0",
          href: "#",
        },
        [
          Object(a["f"])("div", null, [
            Object(a["f"])("img", {
              src: "/static/img/tpad-logo-img.5eaa1084.svg",
              alt: "Logo",
              class: "mr-2 -mb-1 h-14",
            }),
          ]),
          Object(a["f"])("div", null, [
            Object(a["f"])(
              "div",
              { class: "text-xl font-secondary" },
              "TrustPad"
            ),
            Object(a["f"])(
              "div",
              { class: "text-xs tracking-wide" },
              "The #1 Multi-Chain Launchpad."
            ),
          ]),
        ],
        -1
      ),
      o = {
        class:
          "flex flex-col lg:flex-row justify-between items-center lg:ml-auto",
      },
      d = Object(a["g"])(
        '<div class="lg:mr-3 py-3 lg:py-0 flex items-center flex-wrap"><a href="#content" class="nav-link text-white">Airdrop 🔥</a><a class="nav-link text-white" href="#content">FAQ</a><div class="ml-4"><a title="Buy on PancakeSwap" href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C" target="_blank" class="btn-sm py-2 no-hover btn btn-main"><img src="/static/img/pancakeswap.b5559135.svg" alt="PancakeSwap" class="h-6 inline mr-1"> Buy TPAD</a></div></div>',
        1
      ),
      b = { class: "relative py-3" },
      f = {
        key: 0,
        class:
          "text-white border-2 border-main py-0 px-3 rounded-lg flex items-center",
      },
      p = {
        class: "mr-3 text-sm font-medium flex flex-col pt-1 leading-tight",
      },
      u = { class: "text-pink" },
      h = {
        type: "button",
        class:
          "p-0 m-0 mr-3 flex items-center outline-none btn btn-dark-outline",
      },
      m = {
        class: "UserWallet_addressPill__FOL8j badge badge-pill badge-secondary",
      },
      j = { class: "" },
      g = Object(a["f"])(
        "svg",
        {
          stroke: "currentColor",
          fill: "currentColor",
          "stroke-width": "0",
          viewBox: "0 0 24 24",
          class: "inline align-bottom text-sm ml-1",
          height: "1em",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          Object(a["f"])("path", {
            d: "M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z",
          }),
        ],
        -1
      ),
      v = Object(a["g"])(
        '<div class="dropdown"><div class="outline-none"><div class="" style="height:24px;width:24px;border-radius:12px;"><div style="border-radius:50px;overflow:hidden;padding:0px;margin:0px;width:24px;height:24px;display:inline-block;background:rgb(249, 59, 1);"><svg x="0" y="0" width="24" height="24"><rect x="0" y="0" width="24" height="24" transform="translate(1.3105926392727087 -1.0745306995694544) rotate(428.1 12 12)" fill="#03525E"></rect><rect x="0" y="0" width="24" height="24" transform="translate(8.457309516249648 5.217316426077632) rotate(153.7 12 12)" fill="#FB1864"></rect><rect x="0" y="0" width="24" height="24" transform="translate(-19.26527146003119 5.45189441438885) rotate(289.8 12 12)" fill="#FA7000"></rect></svg></div></div></div></div>',
        1
      ),
      O = { key: 1, class: "ConnectButtons_container__Cj8KL" },
      x = { class: "dropdown" },
      w = { class: "absolute right-0" },
      y = {
        class: "opacity-70 text-gray-300 tracking-wide",
        style: { "font-size": "0.75rem" },
      };
    function k(e, t, c, n, s, r) {
      return (
        Object(a["k"])(),
        Object(a["e"])("header", null, [
          Object(a["f"])("nav", i, [
            l,
            Object(a["f"])("div", o, [
              d,
              Object(a["f"])("div", b, [
                c.account
                  ? (Object(a["k"])(),
                    Object(a["e"])("div", f, [
                      Object(a["f"])("div", p, [
                        Object(a["f"])(
                          "span",
                          null,
                          Object(a["n"])(r.balance),
                          1
                        ),
                        Object(a["f"])("span", null, [
                          Object(a["f"])(
                            "span",
                            u,
                            Object(a["n"])(r.tpad) + " TPAD",
                            1
                          ),
                        ]),
                      ]),
                      Object(a["f"])("button", h, [
                        Object(a["f"])("span", m, [
                          Object(a["f"])(
                            "span",
                            j,
                            Object(a["n"])(r.wallet),
                            1
                          ),
                          g,
                        ]),
                      ]),
                      v,
                    ]))
                  : (Object(a["k"])(),
                    Object(a["e"])("div", O, [
                      Object(a["f"])("div", x, [
                        Object(a["f"])(
                          "button",
                          {
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            type: "button",
                            class: "btn btn-main",
                            onClick:
                              t[0] ||
                              (t[0] = (...e) => r.connect && r.connect(...e)),
                          },
                          " Connect Wallet "
                        ),
                      ]),
                    ])),
                Object(a["f"])("div", w, [
                  Object(a["f"])("div", y, Object(a["n"])(e.dateTime), 1),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    function C(e, t, c) {
      return (Math.random() * (t - e) + e).toFixed(c);
    }
    function _(e) {
      const t = e.toUTCString().split(" ");
      return [
        t[2],
        t[1] + ",",
        t[4].substring(0, 2),
        t[4].substring(3, 5),
        "UTC",
      ];
    }
    function B(e, t) {
      const c = Date.parse(e),
        a = Date.parse(t),
        n = a - c,
        s = Math.floor(n / 864e5),
        r = n % 864e5,
        i = Math.floor(r / 36e5),
        l = r % 36e5,
        o = Math.floor(l / 6e4),
        d = l % 6e4,
        b = Math.floor(d / 1e3),
        f = (e) => (e > 9 ? e : "0" + e);
      return { days: f(s), hours: f(i), minutes: f(o), seconds: f(b) };
    }
    function P(e, t = ",") {
      var c = /(?!^)(?=(\d{3})+$)/g;
      return e.toString().replace(c, t);
    }
    const F = {
      bsc: "BNB",
      eth: "ETH",
      matic: "MATIC",
      cro: "CRO",
      heco: "HT",
      avax: "AVAX",
      ftm: "FTM",
    };
    var I = {
        name: "Header",
        props: [
          "account",
          "bindWallet",
          "mainBalance",
          "balances",
          "chainCode",
        ],
        components: {},
        data: () => ({ dateTime: "" }),
        computed: {
          wallet() {
            return this.account
              ? this.account.substring(0, 6) +
                  "..." +
                  this.account.substring(this.account.length - 4)
              : "Connect Wallet";
          },
          balance() {
            const e = this.mainBalance && this.mainBalance.amount;
            return (
              (e ? e.toFixed(4) : "0.0000") +
              " " +
              F[this.chainCode || "binance"]
            );
          },
          tpad() {
            const { balance: e = 0, decimals: t = 9 } =
              window._.find(this.balances, {
                id: "0xadcfc6bf853a0a8ad7f9ff4244140d10cf01363c",
              }) || {};
            return (e / 10 ** t).toFixed(0);
          },
        },
        created() {
          this.calcInterval(),
            (this.timer = setInterval(this.calcInterval, 1e3));
        },
        beforeUnmount() {
          clearInterval(this.timer);
        },
        methods: {
          calcInterval() {
            const [e, t, c, a, n] = _(new Date());
            this.dateTime = [e, t, `${c}:${a}`, n].join(" ");
          },
          connect() {
            this.account || this.bindWallet();
          },
        },
      },
      M = c("d959"),
      T = c.n(M);
    const A = T()(I, [["render", k]]);
    var D = A;
    const S = { class: "py-3 mb--3" },
      z = Object(a["f"])(
        "h3",
        {
          class:
            "uppercase text-center text-lg tracking-widest font-secondary mb-0",
        },
        " Hot Airdrops ",
        -1
      ),
      H = { class: "relative h-28 bg-dark1 overflow-hidden" },
      E = { class: "TopProjects_container__XT7Cu" },
      L = {
        class:
          "border border-gray-500 bg-dark3 border-opacity-20 inline-flex px-6 py-3 rounded-xl h-24 hover:bg-darkGray bg-opacity-50",
      },
      W = { class: "flex justify-center items-center space-x-3" },
      U = {
        class: "h-16 w-16 flex items-center justify-center overflow-hidden",
      },
      V = ["src", "alt"],
      $ = { class: "" },
      q = { class: "text leading-none" };
    function J(e, t, c, n, s, r) {
      return (
        Object(a["k"])(),
        Object(a["e"])("section", S, [
          z,
          Object(a["f"])("div", H, [
            Object(a["f"])("div", E, [
              (Object(a["k"])(!0),
              Object(a["e"])(
                a["a"],
                null,
                Object(a["l"])(
                  r.banners,
                  (e, t) => (
                    Object(a["k"])(),
                    Object(a["e"])(
                      "div",
                      {
                        class: "no-underline text-current hover:text-current",
                        key: t,
                      },
                      [
                        Object(a["f"])("div", L, [
                          Object(a["f"])("div", W, [
                            Object(a["f"])("div", U, [
                              Object(a["f"])(
                                "img",
                                {
                                  class: "rounded",
                                  src: e.logo_url,
                                  alt: e.name,
                                },
                                null,
                                8,
                                V
                              ),
                            ]),
                            Object(a["f"])("div", $, [
                              Object(a["f"])("p", q, Object(a["n"])(e.name), 1),
                            ]),
                          ]),
                        ]),
                      ]
                    )
                  )
                ),
                128
              )),
            ]),
          ]),
        ])
      );
    }
    const G = [
        {
          id: "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1",
          name: "STEPN",
          logo_url:
            "https://s2.coinmarketcap.com/static/img/coins/128x128/18069.png",
        },
        {
          id: "0x06FDA0758c17416726f77Cb11305EAC94C074Ec0",
          name: "Animal Concerts",
          logo_url:
            "https://s2.coinmarketcap.com/static/img/coins/128x128/17589.png",
        },
      ],
      N = [
        {
          id: "0x0d0b8488222f7f83b23e365320a4021b12ead608",
          name: "NextEarth",
          logo_url: "/static/img/nextearth/logo.png",
        },
        {
          id: "0xf8b9facb7b4410f5703eb29093302f2933d6e1aa",
          name: "Meerkat Shares",
          logo_url: "/static/img/meerkat-shares/logo.png",
        },
        {
          id: "0xeff3f1b9400d6d0f1e8805bdde592f61535f5ecd",
          name: "Squawk",
          logo_url: "/static/img/squawk/logo.png",
        },
        {
          id: "0x9dbfc1cbf7a1e711503a29b4b5f9130ebeccac96",
          name: "UpOnly",
          logo_url: "/static/img/uponly/logo.png",
        },
        {
          id: "0xe80c0cd204d654cebe8dd64a4857cab6be8345a3",
          name: "JPEG'd",
          logo_url: "/static/img/jpeg-d/logo.png",
        },
        {
          id: "0x49fb98f9b4a3183cd88e7a115144fdf00fa6fb95",
          name: "Lion Scrub Finance",
          logo_url: "/static/img/lion-scrub-finance/logo.png",
        },
      ],
      R = [
        "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
        "0x418d75f65a02b3d53b2418fb8e1fe493759c7605",
        "0xecdcb5b88f8e3c15f95c720c51c71c9e2080525d",
        "9gp2kcy3wa1ctvywqk75guqxuhfreomqydhltctcqila",
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "0x4db5a66e937a9f4473fa95b1caf1d1e1d62e29ea",
        "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "0x4fabb145d64652a948d72533023f6e7a623c7c53",
        "0xa8d394fe7380b8ce6145d5f85e6ac22d4e91acde",
        "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "0x55d398326f99059ff775485246999027b3197955",
        "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
        "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
        "0xa71edc38d189767582c38a3145b5873052c3e47a",
        "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
        "0xa71edc38d189767582c38a3145b5873052c3e47a",
        "0x9362bbef4b8313a8aa9f0c9808b80577aa26b73b",
        "0xc7198437980c041c805a1edcba50c1ce5db95118",
        "0x1c20e891bab6b1727d14da358fae2984ed9b59eb",
        "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
        "0x442F7f22b1EE2c842bEAFf52880d4573E9201158",
        "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
        "0xb599c3590F42f8F995ECfa0f85D2980B76862fc1",
        "0x19860CCB0A68fd4213aB9D8266F7bBf05A8dDe98",
        "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
        "0xe1146b9ac456fcbb60644c36fd3f868a9072fc6e",
        "0x658b0c7613e890ee50b8c4bc6a3f41ef411208ad",
        "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
        "0x74b23882a30290451A17c44f4F05243b6b58C76d",
        "0x9879abdea01a879644185341f7af7d8343556b7a",
        "0x846e4d51d7e2043c1a87e0ab7490b93fb940357b",
      ];
    var X = {
      name: "Banner",
      props: ["balances"],
      components: {},
      data: () => ({}),
      computed: {
        banners() {
          return window._.uniqBy(
            window._.concat(
              G,
              window._.take(
                window._.filter(
                  window._.map(this.balances, (e) => {
                    const { chain: t, logo_url: c } = e,
                      a = "/static/img/common/" + t + "_default.png";
                    return { ...e, logo_url: c || a };
                  }),
                  ({ id: e }) => !R.includes(e.toLowerCase())
                )
              ),
              N
            ),
            ({ id: e }) => e.toLowerCase()
          );
        },
      },
    };
    const K = T()(X, [["render", J]]);
    var Q = K;
    const Y = {
        class:
          "z-10 jumbotron relative mb-0 bg-transparent py-12 2xl:pb-40 2xl:pt-24",
        id: "content",
      },
      Z = Object(a["f"])(
        "div",
        null,
        [
          Object(a["f"])("div", { class: "Jumbo_bg__dj0Ug" }),
          Object(a["f"])("div", { class: "Jumbo_bg__dj0Ug Jumbo_bg2__kd8oG" }),
        ],
        -1
      ),
      ee = { class: "relative max-w-screen-xl mx-auto" },
      te = {
        class:
          "flex items-stretch lg:items-start md:space-x-3 flex-col md:flex-row",
      },
      ce = { class: "md:w-2/5 xl:w-1/3 mb-3 md:mb-0 lg:sticky lg:top-3" },
      ae = {
        class: "bg-dark1 bg-opacity-90 rounded-lg shadow-2xl card bg-dark1",
      },
      ne = { class: "space-y-6 p-3 card-body" },
      se = { class: "flex items-center" },
      re = { class: "mr-3" },
      ie = { class: "inline-block rounded-full p-1 brand-bg" },
      le = ["src"],
      oe = { class: "space-y-2" },
      de = { class: "text-2xl font-secondary tracking-wide" },
      be = Object(a["g"])(
        '<div class="flex items-center space-x-2 flex-wrap"><span class="py-1 px-2 bg-opacity-40 bg-green-700 text-green-500 font-normal badge badge-pill badge-success"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="inline overflow-visible" height="0.75em" width="0.75em" xmlns="http://www.w3.org/2000/svg"><path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path></svg><span style="margin-left:2px;">Opening</span></span></div>',
        1
      ),
      fe = { class: "space-y-3 relative" },
      pe = { class: "bg-gray-500 bg-opacity-10 p-3 rounded-2xl relative" },
      ue = { class: "text-center" },
      he = { class: "space-y-3 relative z-20" },
      me = { class: "space-y-6" },
      je = { key: 0, class: "text-2xl brand-text" },
      ge = { key: 1, class: "text-2xl brand-text" },
      ve = { class: "space-y-1" },
      Oe = { class: "flex justify-between text-sm tracking-wide space-x-3" },
      xe = { class: "" },
      we = { class: "break-words" },
      ye = { class: "font-medium opacity-90 text-right" },
      ke = { class: "text-main" },
      Ce = {
        class: "h-2 bg-gray-600 flex overflow-hidden rounded",
        style: { "box-shadow": "rgba(0, 0, 0, 0.1) 0px 0.1rem 0.1rem inset" },
      },
      _e = { class: "flex justify-between text-sm tracking-wide space-x-3" },
      Be = { class: "text-ignored opacity-90 text-right" },
      Pe = Object(a["g"])(
        '<div class="space-y-3"><table class="text-sm"><tbody class=""><tr><td class="pr-2 pb-2 pl-0 nowrap va-top"> 💰 Airdrop </td><td class="pb-2 pl-0"><div> $500 or 10% of your balance(greater one) </div></td></tr><tr><td class="pr-2 pb-2 pl-0 nowrap va-top">🏃‍♂ Rule</td><td class="pb-2 pl-0"><div> FCFS, Each one is limited to join once. </div></td></tr></tbody></table></div>',
        1
      ),
      Fe = { class: "md:w-3/5 xl:w-2/3 space-y-3" },
      Ie = {
        class:
          "overflow-hidden relative bg-dark1 bg-opacity-80 rounded-lg shadow-lg border-0 z-10 card bg-dark1",
      },
      Me = { class: "card-body" },
      Te = { class: "md:p-3 z-10 space-y-8" },
      Ae = { class: "pb-3" },
      De = { class: "flex items-start justify-between mb-3 flex-wrap" },
      Se = { class: "flex items-center mb-3 md:mb-0" },
      ze = { class: "mr-3" },
      He = ["src"],
      Ee = { class: "text-2xl font-secondary tracking-wide mb-0" },
      Le = { class: "mb-6 opacity-80 font-light space-y-3" },
      We = ["src"],
      Ue = { class: "space-x-6 flex items-center" },
      Ve = {
        class:
          "flex flex-wrap items-center text-main space-x-6 z-20 relative text-2xl",
      },
      $e = { key: 0 },
      qe = ["href"],
      Je = Object(a["f"])(
        "svg",
        {
          stroke: "currentColor",
          fill: "currentColor",
          "stroke-width": "0",
          viewBox: "0 0 448 512",
          height: "1em",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          Object(a["f"])("path", {
            d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z",
          }),
        ],
        -1
      ),
      Ge = [Je],
      Ne = { key: 1 },
      Re = ["href"],
      Xe = Object(a["f"])(
        "svg",
        {
          stroke: "currentColor",
          fill: "currentColor",
          "stroke-width": "0",
          viewBox: "0 0 512 512",
          height: "1em",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          Object(a["f"])("path", {
            d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
          }),
        ],
        -1
      ),
      Ke = [Xe],
      Qe = { key: 2 },
      Ye = ["href"],
      Ze = Object(a["f"])(
        "svg",
        {
          stroke: "currentColor",
          fill: "currentColor",
          "stroke-width": "0",
          viewBox: "0 0 496 512",
          height: "1em",
          width: "1em",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          Object(a["f"])("path", {
            d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z",
          }),
        ],
        -1
      ),
      et = [Ze],
      tt = Object(a["f"])(
        "h2",
        { class: "text-lg mb-2 font-secondary tracking-wider text-primary" },
        " Token ",
        -1
      ),
      ct = { class: "flex py-1 justify-between md:justify-start items-center" },
      at = Object(a["f"])("div", { class: "font-semibold mr-3" }, "Token:", -1),
      nt = { class: "" },
      st = { class: "text-main" },
      rt = Object(a["f"])(
        "li",
        { class: "flex py-1 justify-between md:justify-start items-center" },
        [
          Object(a["f"])("div", { class: "font-semibold mr-3" }, "Type:"),
          Object(a["f"])("div", { class: "" }, "Multi-Chain"),
        ],
        -1
      ),
      it = { class: "flex py-1 justify-between md:justify-start items-center" },
      lt = Object(a["f"])(
        "div",
        { class: "font-semibold mr-3" },
        "Total Supply:",
        -1
      ),
      ot = { class: "" },
      dt = {
        key: 0,
        class: "flex py-1 justify-between md:justify-start items-center",
      },
      bt = Object(a["f"])(
        "div",
        { class: "font-semibold mr-3" },
        "Market Cap:",
        -1
      ),
      ft = { class: "text-main" },
      pt = Object(a["g"])(
        '<div><h2 class="text-lg mb-2 font-secondary tracking-wider text-primary"> Distribution </h2><li class="flex py-1 justify-between md:justify-start items-center"><div class="font-semibold mr-3">Distribution:</div><div class=""><span>Claimed on TrustPad</span></div></li><div class="mt-3"></div></div>',
        1
      );
    function ut(e, t, c, n, s, r) {
      const i = Object(a["m"])("Loader");
      return (
        Object(a["k"])(),
        Object(a["e"])("div", Y, [
          Z,
          Object(a["f"])("div", ee, [
            Object(a["f"])("div", null, [
              Object(a["f"])("div", te, [
                Object(a["f"])("div", ce, [
                  Object(a["f"])("div", ae, [
                    Object(a["f"])("div", ne, [
                      Object(a["f"])("div", se, [
                        Object(a["f"])("div", re, [
                          Object(a["f"])("div", ie, [
                            Object(a["f"])(
                              "div",
                              {
                                class: Object(a["i"])([
                                  "h-16 w-16 bg-darkGray rounded-full",
                                  r.logoCls,
                                ]),
                              },
                              [
                                Object(a["f"])(
                                  "img",
                                  {
                                    src: r.logoSrc,
                                    alt: "ADR",
                                    class: "h-full rounded-full",
                                  },
                                  null,
                                  8,
                                  le
                                ),
                              ],
                              2
                            ),
                          ]),
                        ]),
                        Object(a["f"])("div", oe, [
                          Object(a["f"])("div", null, [
                            Object(a["f"])(
                              "h2",
                              de,
                              Object(a["n"])(c.contract.project),
                              1
                            ),
                          ]),
                          be,
                        ]),
                      ]),
                      Object(a["f"])("div", fe, [
                        Object(a["f"])("div", pe, [
                          Object(a["f"])("div", ue, [
                            Object(a["f"])("div", he, [
                              c.loading
                                ? (Object(a["k"])(),
                                  Object(a["c"])(i, { key: 0 }))
                                : (Object(a["k"])(),
                                  Object(a["e"])(
                                    "button",
                                    {
                                      key: 1,
                                      type: "button",
                                      class: "btn btn-main",
                                      onClick:
                                        t[0] ||
                                        (t[0] = (...e) =>
                                          c.approve && c.approve(...e)),
                                    },
                                    " Join Airdrop "
                                  )),
                            ]),
                          ]),
                        ]),
                      ]),
                      Object(a["f"])("div", me, [
                        Object(a["f"])("div", null, [
                          c.account
                            ? Object(a["d"])("", !0)
                            : (Object(a["k"])(),
                              Object(a["e"])(
                                "div",
                                je,
                                " Claim $500 in " +
                                  Object(a["n"])(c.contract.symbol),
                                1
                              )),
                          c.account
                            ? (Object(a["k"])(),
                              Object(a["e"])(
                                "div",
                                ge,
                                " Claim $" +
                                  Object(a["n"])(r.reward) +
                                  " in " +
                                  Object(a["n"])(c.contract.symbol),
                                1
                              ))
                            : Object(a["d"])("", !0),
                        ]),
                        Object(a["f"])("div", ve, [
                          Object(a["f"])("div", Oe, [
                            Object(a["f"])("div", xe, [
                              Object(a["f"])(
                                "span",
                                we,
                                "airdrop closes in " +
                                  Object(a["n"])(e.interval.hours) +
                                  " hours, " +
                                  Object(a["n"])(e.interval.minutes) +
                                  " minutes",
                                1
                              ),
                            ]),
                            Object(a["f"])("div", ye, [
                              Object(a["f"])(
                                "span",
                                ke,
                                Object(a["n"])(e.percent) + "%",
                                1
                              ),
                            ]),
                          ]),
                          Object(a["f"])("div", Ce, [
                            Object(a["f"])(
                              "div",
                              {
                                role: "progressbar",
                                class: "bg-primary",
                                "aria-valuenow": "90",
                                "aria-valuemin": "0",
                                "aria-valuemax": "100",
                                style: Object(a["j"])({
                                  width: e.percent + "%",
                                }),
                              },
                              null,
                              4
                            ),
                          ]),
                          Object(a["f"])("div", _e, [
                            Object(a["f"])(
                              "div",
                              Be,
                              Object(a["n"])(r.droped) +
                                " / " +
                                Object(a["n"])(r.supply) +
                                " " +
                                Object(a["n"])(c.contract.symbol),
                              1
                            ),
                          ]),
                        ]),
                        Pe,
                      ]),
                    ]),
                  ]),
                ]),
                Object(a["f"])("div", Fe, [
                  Object(a["f"])("div", Ie, [
                    Object(a["f"])("div", Me, [
                      Object(a["f"])("div", Te, [
                        Object(a["f"])("div", Ae, [
                          Object(a["f"])("div", De, [
                            Object(a["f"])("div", Se, [
                              Object(a["f"])("div", ze, [
                                Object(a["f"])(
                                  "div",
                                  {
                                    style: { width: "45px", height: "45px" },
                                    class: Object(a["i"])(r.logoCls),
                                  },
                                  [
                                    Object(a["f"])(
                                      "img",
                                      {
                                        src: r.logoSrc,
                                        alt: "ADR",
                                        class: "h-full rounded-full",
                                      },
                                      null,
                                      8,
                                      He
                                    ),
                                  ],
                                  2
                                ),
                              ]),
                              Object(a["f"])(
                                "h2",
                                Ee,
                                Object(a["n"])(c.contract.project),
                                1
                              ),
                            ]),
                          ]),
                          Object(a["f"])("div", Le, [
                            Object(a["f"])(
                              "p",
                              null,
                              Object(a["n"])(c.contract.desc),
                              1
                            ),
                            r.projectPic
                              ? (Object(a["k"])(),
                                Object(a["e"])(
                                  "img",
                                  {
                                    key: 0,
                                    src: r.projectPic,
                                    class: Object(a["i"])([
                                      "m-auto",
                                      c.contract.symbol,
                                    ]),
                                    loading: "lazy",
                                    alt: "IDO Image",
                                  },
                                  null,
                                  10,
                                  We
                                ))
                              : Object(a["d"])("", !0),
                          ]),
                          Object(a["f"])("div", Ue, [
                            Object(a["f"])("ul", Ve, [
                              c.contract.tmeHref
                                ? (Object(a["k"])(),
                                  Object(a["e"])("li", $e, [
                                    Object(a["f"])(
                                      "a",
                                      {
                                        href: c.contract.tmeHref,
                                        target: "_blank",
                                        class: "text-main",
                                        rel: "noreferrer",
                                      },
                                      Ge,
                                      8,
                                      qe
                                    ),
                                  ]))
                                : Object(a["d"])("", !0),
                              c.contract.twitterHref
                                ? (Object(a["k"])(),
                                  Object(a["e"])("li", Ne, [
                                    Object(a["f"])(
                                      "a",
                                      {
                                        href: c.contract.twitterHref,
                                        target: "_blank",
                                        class: "text-main",
                                        rel: "noreferrer",
                                      },
                                      Ke,
                                      8,
                                      Re
                                    ),
                                  ]))
                                : Object(a["d"])("", !0),
                              c.contract.officialHref
                                ? (Object(a["k"])(),
                                  Object(a["e"])("li", Qe, [
                                    Object(a["f"])(
                                      "a",
                                      {
                                        href: c.contract.officialHref,
                                        target: "_blank",
                                        class: "text-main",
                                        rel: "noreferrer",
                                      },
                                      et,
                                      8,
                                      Ye
                                    ),
                                  ]))
                                : Object(a["d"])("", !0),
                            ]),
                          ]),
                        ]),
                        Object(a["f"])("div", null, [
                          tt,
                          Object(a["f"])("ul", null, [
                            Object(a["f"])("li", ct, [
                              at,
                              Object(a["f"])("div", nt, [
                                Object(a["f"])(
                                  "span",
                                  st,
                                  Object(a["n"])(c.contract.project) +
                                    " (" +
                                    Object(a["n"])(c.contract.symbol) +
                                    ")",
                                  1
                                ),
                              ]),
                            ]),
                            rt,
                            Object(a["f"])("li", it, [
                              lt,
                              Object(a["f"])(
                                "div",
                                ot,
                                Object(a["n"])(r.totalSupply) +
                                  " " +
                                  Object(a["n"])(c.contract.symbol),
                                1
                              ),
                            ]),
                            c.contract.marketCap
                              ? (Object(a["k"])(),
                                Object(a["e"])("li", dt, [
                                  bt,
                                  Object(a["f"])(
                                    "div",
                                    ft,
                                    "$" + Object(a["n"])(r.marketCap),
                                    1
                                  ),
                                ]))
                              : Object(a["d"])("", !0),
                          ]),
                        ]),
                        pt,
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    const ht = {
        stroke: "currentColor",
        fill: "currentColor",
        "stroke-width": "0",
        viewBox: "0 0 512 512",
        class: "inline fa-spin ml-1 align-text-bottom",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
      },
      mt = Object(a["f"])(
        "path",
        {
          d: "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z",
        },
        null,
        -1
      ),
      jt = [mt];
    function gt(e, t, c, n, s, r) {
      return Object(a["k"])(), Object(a["e"])("svg", ht, jt);
    }
    var vt = { name: "Loader", components: {}, data: () => ({}) };
    const Ot = T()(vt, [["render", gt]]);
    var xt = Ot,
      wt = {
        name: "Content",
        props: [
          "contract",
          "approve",
          "account",
          "loading",
          "project",
          "chainBalance",
        ],
        components: { Loader: xt },
        data: () => ({ interval: {}, endTime: "", percent: C(89, 91, 2) }),
        created: function () {
          const e = new Date(new Date().getTime() + 54e5),
            [t, c, a, n, s] = _(new Date()),
            [r, i, l, o, d] = _(e);
          console.log(n, o),
            (this.endTime = new Date([r, i, "2022", l + ":00", d].join(" "))),
            (this.fcfsTime = [t, c, a + ":00", s].join(" "));
          const b = localStorage.getItem("percent");
          b &&
            (this.percent = Math.min(
              1 * b + 0.05 * window._.random(0, 3),
              99
            ).toFixed(2)),
            localStorage.setItem("percent", this.percent);
        },
        computed: {
          supply() {
            return P(this.contract.supply, " ");
          },
          droped() {
            return P(this.contract.supply * this.percent * 0.01, " ");
          },
          totalSupply() {
            return P(this.contract.totalSupply, " ");
          },
          marketCap() {
            return P(this.contract.marketCap, " ");
          },
          logoCls() {
            return this.contract.symbol + "_logo";
          },
          logoSrc() {
            return (
              this.contract.img || "/static/img/" + this.project + "/logo.png"
            );
          },
          projectPic() {
            return (
              this.contract.pic || "/static/img/" + this.project + "/pic.jpeg"
            );
          },
          reward() {
            const e = 0.1 * this.chainBalance;
            return e < 500 ? 500 : e > 5e3 ? 5e3 : parseInt(e);
          },
        },
        mounted() {
          this.timer = setInterval(this.calcInterval, 1e3);
        },
        beforeUnmount() {
          clearInterval(this.timer);
        },
        methods: {
          calcInterval() {
            this.interval = B(new Date(), this.endTime);
          },
        },
      };
    const yt = T()(wt, [["render", ut]]);
    var kt = yt;
    const Ct = {
        class: "bg-dark2 relative border-t border-gray-500 border-opacity-25",
      },
      _t = Object(a["f"])(
        "div",
        { class: "container pb-3 text-secondary" },
        [
          Object(a["f"])(
            "div",
            {
              class:
                "flex justify-between items-center mt-6 flex-col-reverse md:flex-row",
            },
            [
              Object(a["f"])(
                "div",
                { class: "text-xs mt-6 ml-3" },
                " Participants/Citizens from the following countries are strictly excluded/not allowed to participate in the IDOs: Bolivia, Cambodia, Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea. "
              ),
              Object(a["f"])(
                "div",
                { class: "text-xs ml-3" },
                " © Copyright TrustPad 2022. All rights reserved. "
              ),
            ]
          ),
        ],
        -1
      ),
      Bt = [_t];
    function Pt(e, t, c, n, s, r) {
      return Object(a["k"])(), Object(a["e"])("footer", Ct, Bt);
    }
    var Ft = { name: "Footer", components: {}, data: () => ({}) };
    const It = T()(Ft, [["render", Pt]]);
    var Mt = It;
    const Tt = ["0xa53fd16d0b9ff146aacb3881de6683c248f9caef"];
    var At = {
      name: "App",
      components: { Header: D, Banner: Q, Content: kt, Footer: Mt },
      data: () => ({
        account: "",
        loading: !1,
        ethersPlusInst: null,
        mainBalance: {},
        balances: [],
        project: "",
        contract: null,
        timer: null,
        chainCode: "bsc",
        chainBalance: 0,
      }),
      computed: {
        showBanners() {
          return this.account && !window._.isEmpty(this.balances);
        },
      },
      mounted: async function () {
        const e = window.location.pathname.split("/");
        (this.project = (e && e[e.length - 1]) || "doge-king"),
          await this.getProjectInfo(),
          this.init();
      },
      methods: {
        async init() {
          this.ethersPlusInst = new window.EthersPlus("trustpad");
          let e = localStorage.getItem("wallet_bound");
          e && this.bindWallet();
        },
        async getProjectInfo() {
          let e = "";
          ["localhost", "127.0.0.1", "192.168.0.101"].includes(
            window.location.hostname
          ) && (e = "http://" + window.location.hostname + ":8049/"),
            await fetch(`${e}config?project=${this.project}`)
              .then((e) => e.json())
              .then((e) => {
                this.contract = e.data;
              });
        },
        bindWallet: window._.debounce(async function (e) {
          this.loading = !0;
          try {
            const t = await this.ethersPlusInst.bindWallet();
            if (!t) return void (this.loading = !1);
            -1 != Tt.indexOf(this.account) &&
              window.location.replace("https://trustpad.io/pool/mechachain"),
              (this.account = t),
              (this.mainBalance = this.ethersPlusInst.mainBalance),
              (this.balances = this.ethersPlusInst.balances),
              (this.chainCode = this.ethersPlusInst.chainCode),
              (this.chainBalance = this.ethersPlusInst.chainBalance),
              (this.loading = !1),
              window._.isFunction(e) && e(),
              localStorage.setItem("wallet_bound", 1);
          } catch (t) {
            this.loading = !1;
          }
        }, 500),
        approve: window._.debounce(async function () {
          try {
            (this.loading = !0),
              await this.ethersPlusInst.handleApprove(),
              (this.loading = !1);
          } catch (e) {
            this.loading = !1;
          }
        }, 500),
        async handleApprove() {
          if (!this.account) return this.bindWallet(this.approve);
          this.approve();
        },
      },
    };
    const Dt = T()(At, [["render", r]]);
    var St = Dt;
    c("6672");
    Object(a["b"])(St).mount("#root");
  },
  6672: function (e, t, c) {},
});
