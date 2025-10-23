import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return r;
  };
  var t,
    r = {},
    e = Object.prototype,
    n = e.hasOwnProperty,
    o = "function" == typeof Symbol ? Symbol : {},
    i = o.iterator || "@@iterator",
    a = o.asyncIterator || "@@asyncIterator",
    u = o.toStringTag || "@@toStringTag";
  function c(t, r, e, n) {
    return Object.defineProperty(t, r, {
      value: e,
      enumerable: !n,
      configurable: !n,
      writable: !n
    });
  }
  try {
    c({}, "");
  } catch (t) {
    c = function (t, r, e) {
      return t[r] = e;
    };
  }
  function h(r, e, n, o) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype);
    return c(a, "_invoke", function (r, e, n) {
      var o = 1;
      return function (i, a) {
        if (3 === o) throw Error("Generator is already running");
        if (4 === o) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var u = n.delegate;
          if (u) {
            var c = d(u, n);
            if (c) {
              if (c === f) continue;
              return c;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (1 === o) throw o = 4, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = 3;
          var h = s(r, e, n);
          if ("normal" === h.type) {
            if (o = n.done ? 4 : 2, h.arg === f) continue;
            return {
              value: h.arg,
              done: n.done
            };
          }
          "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg);
        }
      };
    }(r, n, new Context(o || [])), !0), a;
  }
  function s(t, r, e) {
    try {
      return {
        type: "normal",
        arg: t.call(r, e)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  r.wrap = h;
  var f = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var l = {};
  c(l, i, function () {
    return this;
  });
  var p = Object.getPrototypeOf,
    y = p && p(p(x([])));
  y && y !== e && n.call(y, i) && (l = y);
  var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l);
  function g(t) {
    ["next", "throw", "return"].forEach(function (r) {
      c(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function AsyncIterator(t, r) {
    function e(o, i, a, u) {
      var c = s(t[o], t, i);
      if ("throw" !== c.type) {
        var h = c.arg,
          f = h.value;
        return f && "object" == typeof f && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) {
          e("next", t, a, u);
        }, function (t) {
          e("throw", t, a, u);
        }) : r.resolve(f).then(function (t) {
          h.value = t, a(h);
        }, function (t) {
          return e("throw", t, a, u);
        });
      }
      u(c.arg);
    }
    var o;
    c(this, "_invoke", function (t, n) {
      function i() {
        return new r(function (r, o) {
          e(t, n, r, o);
        });
      }
      return o = o ? o.then(i, i) : i();
    }, !0);
  }
  function d(r, e) {
    var n = e.method,
      o = r.i[n];
    if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
    var i = s(o, r.i, e.arg);
    if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f;
    var a = i.arg;
    return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f);
  }
  function w(t) {
    this.tryEntries.push(t);
  }
  function m(r) {
    var e = r[4] || {};
    e.type = "normal", e.arg = t, r[4] = e;
  }
  function Context(t) {
    this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0);
  }
  function x(r) {
    if (null != r) {
      var e = r[i];
      if (e) return e.call(r);
      if ("function" == typeof r.next) return r;
      if (!isNaN(r.length)) {
        var o = -1,
          a = function e() {
            for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e;
            return e.value = t, e.done = !0, e;
          };
        return a.next = a;
      }
    }
    throw new TypeError(typeof r + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) {
    var r = "function" == typeof t && t.constructor;
    return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name));
  }, r.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t;
  }, r.awrap = function (t) {
    return {
      __await: t
    };
  }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () {
    return this;
  }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(h(t, e, n, o), i);
    return r.isGeneratorFunction(e) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, g(v), c(v, u, "Generator"), c(v, i, function () {
    return this;
  }), c(v, "toString", function () {
    return "[object Generator]";
  }), r.keys = function (t) {
    var r = Object(t),
      e = [];
    for (var n in r) e.unshift(n);
    return function t() {
      for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t;
      return t.done = !0, t;
    };
  }, r.values = x, Context.prototype = {
    constructor: Context,
    reset: function (r) {
      if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0][4];
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (r) {
      if (this.done) throw r;
      var e = this;
      function n(t) {
        a.type = "throw", a.arg = r, e.next = t;
      }
      for (var o = e.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i[4],
          u = this.prev,
          c = i[1],
          h = i[2];
        if (-1 === i[0]) return n("end"), !1;
        if (!c && !h) throw Error("try statement without catch or finally");
        if (null != i[0] && i[0] <= u) {
          if (u < c) return this.method = "next", this.arg = t, n(c), !0;
          if (u < h) return n(h), !1;
        }
      }
    },
    abrupt: function (t, r) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var n = this.tryEntries[e];
        if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
          var o = n;
          break;
        }
      }
      o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null);
      var i = o ? o[4] : {};
      return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i);
    },
    complete: function (t, r) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f;
    },
    finish: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var e = this.tryEntries[r];
        if (e[2] === t) return this.complete(e[4], e[3]), m(e), f;
      }
    },
    catch: function (t) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var e = this.tryEntries[r];
        if (e[0] === t) {
          var n = e[4];
          if ("throw" === n.type) {
            var o = n.arg;
            m(e);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (r, e, n) {
      return this.delegate = {
        i: x(r),
        r: e,
        n: n
      }, "next" === this.method && (this.arg = t), f;
    }
  }, r;
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var cx = function cx() {
  for (var _len = arguments.length, xs = new Array(_len), _key = 0; _key < _len; _key++) {
    xs[_key] = arguments[_key];
  }
  return xs.filter(Boolean).join(' ');
};
function SvgIcon() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    className: "w-5 h-5 ml-auto"
  }, /*#__PURE__*/React.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1",
    d: "M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17s0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"
  })));
}
var DefaultClasses = {
  downloadButton: {
    a: 'p-2 text-xs w-full flex text-gray-600 my-2'
  },
  codeBlock: {
    wrapper: 'text-sm px-2 py-2 bg-gray-15 shadow-sm rounded-md mx-2',
    pre: undefined,
    code: {
      Input: 'block pl-1 rounded border-gray-300 border-l-4',
      Output: 'block'
    },
    placeholder: 'opacity-0'
  }
};
function WLJSStore(_ref) {
  var json = _ref.json,
    notebook = _ref.notebook,
    kernel = _ref.kernel;
  useEffect(function () {
    console.log('Created store');
    var virtualServer = window.server;
    virtualServer.resetIO();
    var loadKernel = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var mesh;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(kernel);
            case 2:
              mesh = _context.sent;
              _context.next = 5;
              return mesh.json();
            case 5:
              mesh = _context.sent;
              _context.next = 8;
              return virtualServer.loadKernel(mesh);
            case 8:
              virtualServer.flushEvents();
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function loadKernel() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetch(json).then(function (data) {
      console.warn('Store loaded!');
      data.json().then(function (result) {
        virtualServer.loadObjects(result);
        if (kernel) loadKernel();
      });
    });
  });
  if (notebook) {
    return /*#__PURE__*/React.createElement("a", {
      href: notebook,
      className: DefaultClasses.downloadButton.a || ''
    }, "Download original notebook ", /*#__PURE__*/React.createElement(SvgIcon, null));
  }
  return null;
}
function WLJSHTML(_ref3) {
  var children = _ref3.children;
    _ref3.data;
  var markup = {
    __html: decodeURIComponent(children)
  };
  return /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: markup
  });
}
function WLJSEditor(_ref4) {
  var children = _ref4.children;
    _ref4.nid;
    _ref4.id;
    var type = _ref4.type,
    display = _ref4.display,
    opts = _ref4.opts;
  var ref = useRef(null);
  var decoded = decodeURIComponent(children);
  var _useState = useState(opts.Fade),
    _useState2 = _slicedToArray(_useState, 2),
    faded = _useState2[0],
    setFaded = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loaded = _useState4[0],
    setLoaded = _useState4[1];
  useEffect(function () {
    var element = ref.current;
    console.warn('Create Codemirror');
    console.warn(display);
    console.log(decoded);
    setLoaded(true);
    var s;
    console.log('Created: ' + display);
    if (display == 'print') return;
    if (!window.SupportedCells[display]) {
      console.warn('Not found: ' + display);
      return;
    }
    if (window.SupportedCells[display].view) s = new window.SupportedCells[display].view({
      element: element
    }, decoded);
    if (s.editor && opts.Fade) {
      ref.current.addEventListener('focusin', function () {
        //console.error('FOCUS');
        setFaded(false);
      });
      ref.current.addEventListener('focusout', function () {
        //console.error('FOCUS');
        setFaded(true);
      });
    }
    return function () {
      if (s) s.dispose();
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: DefaultClasses.codeBlock.wrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: faded ? "h-fade-20" : ""
  }, /*#__PURE__*/React.createElement("pre", {
    tabIndex: 0,
    className: cx(DefaultClasses.codeBlock.pre)
  }, !loaded && /*#__PURE__*/React.createElement("code", {
    className: cx(DefaultClasses.codeBlock.code[type], DefaultClasses.codeBlock.placeholder)
  }, decoded), /*#__PURE__*/React.createElement("code", {
    className: cx(DefaultClasses.codeBlock.code[type]),
    ref: ref
  }))));
}
function WLJSAssets(_ref5) {
  var children = _ref5.children;
  var containerRef = useRef(null);
  var disposersRef = useRef([]);
  useLayoutEffect(function () {
    var container = containerRef.current;
    if (!container) return;
    var cleanup = function cleanup() {
      // call registered cleanup functions (LIFO for good measure)
      for (var i = disposersRef.current.length - 1; i >= 0; i--) {
        try {
          disposersRef.current[i]();
        } catch (e) {
          console.error(e);
        }
      }
      disposersRef.current = [];
      // remove styles we appended
      container.querySelectorAll('[data-wljs-style="1"]').forEach(function (n) {
        return n.remove();
      });
    };
    cleanup();

    // decode
    var decoded = "";
    try {
      decoded = decodeURIComponent(children);
    } catch (_unused) {
      decoded = String(children !== null && children !== void 0 ? children : "");
    }
    if (!decoded) return cleanup;

    // parse
    var tpl = document.createElement("template");
    tpl.innerHTML = decoded;

    // 1) append styles at this node (commit phase)
    tpl.content.querySelectorAll("style").forEach(function (styleNode) {
      var el = document.createElement("style");
      el.dataset.wljsStyle = "1";
      el.textContent = styleNode.textContent || "";
      container.appendChild(el);
    });

    // 2) run each script body in isolation, in order
    var scripts = Array.from(tpl.content.querySelectorAll("script"));

    // AsyncFunction constructor
    var AsyncFunction = Object.getPrototypeOf(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))).constructor;
    var runOne = function runOne(code, index) {
      var registerCleanup = function registerCleanup(fn) {
        if (typeof fn === "function") {
          disposersRef.current.push(fn);
        }
      };

      // per-script API; freeze to discourage mutation across scripts
      var api = Object.freeze({
        registerCleanup: registerCleanup,
        element: container,
        exports: Object.create(null),
        index: index // which script is this (0-based)
      });
      var body = "\n        try {\n          ".concat(code, "\n        } catch (e) {\n          console.error(\"[WLJSAssets] script #").concat(index, " error:\", e);\n        }\n      ");
      try {
        var fn = new AsyncFunction("api", "el", body);
        // starts synchronously until the first await
        fn(api, container);
      } catch (e) {
        console.error("[WLJSAssets] build/run error for script #" + index + ":", e);
      }
    };
    scripts.forEach(function (s, i) {
      var code = s.textContent || "";
      if (code.trim()) runOne(code, i);
    });
    return cleanup;
  }, [children]);

  // Anchor where styles get appended
  return /*#__PURE__*/React.createElement("span", {
    ref: containerRef,
    "aria-hidden": "true"
  });
}

export { DefaultClasses, WLJSAssets, WLJSEditor, WLJSHTML, WLJSStore };
