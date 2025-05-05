import React, { useEffect, useRef, useState } from 'react';

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
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
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
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
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
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
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function SvgIcon() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "class": "w-5 h-5 ml-auto"
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
    code: undefined,
    placeholder: 'opacity-0'
  }
};
function WLJSStore(_ref) {
  var json = _ref.json,
    notebook = _ref.notebook,
    kernel = _ref.kernel;
  useEffect(function () {
    console.log('Created store');
    var promises = {};
    var symbols = {};
    var eventsPool = [];
    var allGood = new Deferred();
    window.server = {
      kernel: {
        io: {
          fire: function fire(uid, payload) {
            var pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Default";
            eventsPool.push(['fire', uid, payload, pattern]);
          },
          poke: function poke(uid) {
            eventsPool.push(['poke', uid]);
          }
        }
      }
    };
    window.server.kernel.emitt = function () {
      console.warn('Emitt is not supported anymore');
    };
    var _fetchFile = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _fetchFile = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function _fetchFile() {
                  return _ref3.apply(this, arguments);
                };
              }();
              fetch(json).then(function (data) {
                console.warn('Store loaded!');
                data.json().then(function (result) {
                  interpretate(result.objects, {
                    hold: true
                  }).then(function (i) {
                    console.warn('Objects loaded!');
                    Object.keys(i).forEach(function (oName) {
                      var obj = new ObjectStorage(oName);
                      obj.cache = i[oName];
                      obj.cached = true;
                    });
                    Object.keys(promises).forEach(function (key) {
                      if (Array.isArray(promises[key])) {
                        promises[key].forEach(function (el) {
                          return el.resolve(i[key]);
                        });
                      } else {
                        promises[key].resolve(i[key]);
                      }
                    });
                  });
                  interpretate(result.symbols, {
                    hold: true
                  }).then(function (i) {
                    console.warn('Symbols loaded!');
                    Object.keys(i).forEach(function (oName) {
                      core[oName] = /*#__PURE__*/function () {
                        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args, env) {
                          var data;
                          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                            while (1) switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return interpretate(core[oName].data, env);
                              case 2:
                                data = _context2.sent;
                                return _context2.abrupt("return", data);
                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }, _callee2);
                        }));
                        return function (_x, _x2) {
                          return _ref4.apply(this, arguments);
                        };
                      }();
                      core[oName].data = i[oName];
                      core[oName] = /*#__PURE__*/function () {
                        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(args, env) {
                          var data;
                          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                            while (1) switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log('IE: calling our symbol...');
                                //evaluate in the context
                                _context3.next = 3;
                                return interpretate(core[oName].data, env);
                              case 3:
                                data = _context3.sent;
                                if (env.root && !env.novirtual) core[oName].instances[env.root.uid] = env.root; //if it was evaluated insdide the container, then, add it to the tracking list
                                //if (env.hold) return ['JSObject', core[name].data];
                                return _context3.abrupt("return", data);
                              case 6:
                              case "end":
                                return _context3.stop();
                            }
                          }, _callee3);
                        }));
                        return function (_x3, _x4) {
                          return _ref5.apply(this, arguments);
                        };
                      }();
                      core[oName].update = /*#__PURE__*/function () {
                        var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(args, env) {
                          var data;
                          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                            while (1) switch (_context4.prev = _context4.next) {
                              case 0:
                                if (!env.useCache) {
                                  _context4.next = 7;
                                  break;
                                }
                                if (!(!core[oName].cached || core[oName].currentData != core[oName].data)) {
                                  _context4.next = 6;
                                  break;
                                }
                                _context4.next = 4;
                                return interpretate(core[oName].data, env);
                              case 4:
                                core[oName].cached = _context4.sent;
                                core[oName].currentData = core[oName].data; //just copy the reference
                                //console.log('cache miss');
                              case 6:
                                return _context4.abrupt("return", core[oName].cached);
                              case 7:
                                _context4.next = 9;
                                return interpretate(core[oName].data, env);
                              case 9:
                                data = _context4.sent;
                                return _context4.abrupt("return", data);
                              case 11:
                              case "end":
                                return _context4.stop();
                            }
                          }, _callee4);
                        }));
                        return function (_x5, _x6) {
                          return _ref6.apply(this, arguments);
                        };
                      }();
                      core[oName].destroy = /*#__PURE__*/function () {
                        var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(args, env) {
                          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                            while (1) switch (_context5.prev = _context5.next) {
                              case 0:
                                delete core[oName].instances[env.root.uid];
                                console.warn(env.root.uid + ' was destroyed');
                                console.warn('external symbol was destoryed');
                              case 3:
                              case "end":
                                return _context5.stop();
                            }
                          }, _callee5);
                        }));
                        return function (_x7, _x8) {
                          return _ref7.apply(this, arguments);
                        };
                      }();
                      core[oName].data = structuredClone(i[oName]); //get the data

                      core[oName].virtual = true;
                      core[oName].instances = {};
                    });
                    Object.keys(symbols).forEach(function (key) {
                      console.warn(key);
                      symbols[key].resolve(i[key]);
                    });
                    allGood.resolve(); // final point
                  });
                });
              });
            case 2:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function fetchFile() {
        return _ref2.apply(this, arguments);
      };
    }();
    var loadKernel = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              console.warn('Kernel');
              if (kernel) {
                console.warn('KERNEL');
                fetch(kernel).then(function (data) {
                  console.log(data);
                  data.json().then(/*#__PURE__*/function () {
                    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(result) {
                      var BlackBox, cryptoHash, virtualMachinesData, virtualMachines, _iterator, _step, machine, bbox, length;
                      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                        while (1) switch (_context12.prev = _context12.next) {
                          case 0:
                            BlackBox = {};
                            cryptoHash = /*#__PURE__*/function () {
                              var _ref0 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(message) {
                                var msgUint8, hashBuffer, hashArray, hashHex;
                                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                                  while (1) switch (_context7.prev = _context7.next) {
                                    case 0:
                                      msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
                                      _context7.next = 3;
                                      return window.crypto.subtle.digest("SHA-1", msgUint8);
                                    case 3:
                                      hashBuffer = _context7.sent;
                                      // hash the message
                                      hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
                                      hashHex = hashArray.map(function (b) {
                                        return b.toString(16).padStart(2, "0");
                                      }).join(""); // convert bytes to hex string
                                      return _context7.abrupt("return", hashHex);
                                    case 7:
                                    case "end":
                                      return _context7.stop();
                                  }
                                }, _callee7);
                              }));
                              return function cryptoHash(_x0) {
                                return _ref0.apply(this, arguments);
                              };
                            }();
                            BlackBox.StateMachine = /*#__PURE__*/function () {
                              function _class() {
                                _classCallCheck(this, _class);
                                this.map = new Map();
                                this.state = [];
                                this.symbol = null;
                                this.eventsMap = new Map();
                              }
                              return _createClass(_class, [{
                                key: "init",
                                value: function () {
                                  var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(machineData) {
                                    var string, parsed, self;
                                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                                      while (1) switch (_context8.prev = _context8.next) {
                                        case 0:
                                          _context8.next = 2;
                                          return interpretate.unzlib64String(machineData.CompressedMap);
                                        case 2:
                                          string = _context8.sent;
                                          parsed = JSON.parse(string);
                                          this.map = new Map(parsed);
                                          this.symbol = machineData.Symbol;
                                          this.state = _toConsumableArray(machineData.InitialValues);
                                          this.eventsMap = new Map();
                                          self = this;
                                          machineData.Events.forEach(function (el, index) {
                                            self.eventsMap.set(el[0] + '::' + el[1], index);
                                          });
                                          delete machineData.CompressedMap;
                                          return _context8.abrupt("return", this);
                                        case 12:
                                        case "end":
                                          return _context8.stop();
                                      }
                                    }, _callee8, this);
                                  }));
                                  function init(_x1) {
                                    return _init.apply(this, arguments);
                                  }
                                  return init;
                                }()
                              }, {
                                key: "run",
                                value: function () {
                                  var _run = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(evId, payload, pattern) {
                                    var uid, index, hash, symbol, _i, _Object$values, inst;
                                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                                      while (1) switch (_context9.prev = _context9.next) {
                                        case 0:
                                          uid = evId + '::' + pattern;
                                          if (this.eventsMap.has(uid)) {
                                            _context9.next = 3;
                                            break;
                                          }
                                          return _context9.abrupt("return");
                                        case 3:
                                          index = this.eventsMap.get(uid);
                                          this.state[index] = payload;
                                          _context9.next = 7;
                                          return cryptoHash(JSON.stringify(this.state));
                                        case 7:
                                          hash = _context9.sent;
                                          if (this.map.has(hash)) {
                                            _context9.next = 10;
                                            break;
                                          }
                                          return _context9.abrupt("return");
                                        case 10:
                                          symbol = core[this.symbol];
                                          symbol.data = ['JSObject', structuredClone(this.map.get(hash))];
                                          _i = 0, _Object$values = Object.values(symbol.instances);
                                        case 13:
                                          if (!(_i < _Object$values.length)) {
                                            _context9.next = 22;
                                            break;
                                          }
                                          inst = _Object$values[_i];
                                          if (!inst.dead) {
                                            _context9.next = 17;
                                            break;
                                          }
                                          return _context9.abrupt("continue", 19);
                                        case 17:
                                          _context9.next = 19;
                                          return inst.update();
                                        case 19:
                                          _i++;
                                          _context9.next = 13;
                                          break;
                                        case 22:
                                        case 23:
                                        case "end":
                                          return _context9.stop();
                                      }
                                    }, _callee9, this);
                                  }));
                                  function run(_x10, _x11, _x12) {
                                    return _run.apply(this, arguments);
                                  }
                                  return run;
                                }()
                              }]);
                            }();
                            BlackBox.PavlovMachine = /*#__PURE__*/function () {
                              function _class2() {
                                _classCallCheck(this, _class2);
                                this.map = new Map();
                                this.eventsMap = new Map();
                              }
                              return _createClass(_class2, [{
                                key: "init",
                                value: function () {
                                  var _init2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(machineData) {
                                    var string, parsed, self;
                                    return _regeneratorRuntime().wrap(function _callee0$(_context0) {
                                      while (1) switch (_context0.prev = _context0.next) {
                                        case 0:
                                          _context0.next = 2;
                                          return interpretate.unzlib64String(machineData.CompressedMap);
                                        case 2:
                                          string = _context0.sent;
                                          parsed = JSON.parse(string);
                                          this.map = new Map(parsed);
                                          this.eventsMap = new Map();
                                          self = this;
                                          machineData.Events.forEach(function (el) {
                                            self.eventsMap.set(el[0] + '::' + el[1]);
                                          });
                                          delete machineData.CompressedMap;
                                          return _context0.abrupt("return", this);
                                        case 10:
                                        case "end":
                                          return _context0.stop();
                                      }
                                    }, _callee0, this);
                                  }));
                                  function init(_x13) {
                                    return _init2.apply(this, arguments);
                                  }
                                  return init;
                                }()
                              }, {
                                key: "run",
                                value: function () {
                                  var _run2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1(evId, payload, pattern) {
                                    var uid, hash, global, local;
                                    return _regeneratorRuntime().wrap(function _callee1$(_context1) {
                                      while (1) switch (_context1.prev = _context1.next) {
                                        case 0:
                                          uid = evId + '::' + pattern;
                                          if (this.eventsMap.has(uid)) {
                                            _context1.next = 3;
                                            break;
                                          }
                                          return _context1.abrupt("return");
                                        case 3:
                                          _context1.next = 5;
                                          return cryptoHash(JSON.stringify([evId, pattern, payload]));
                                        case 5:
                                          hash = _context1.sent;
                                          if (this.map.has(hash)) {
                                            _context1.next = 8;
                                            break;
                                          }
                                          return _context1.abrupt("return");
                                        case 8:
                                          global = {};
                                          local = {};
                                          interpretate(JSON.parse(this.map.get(hash)), {
                                            global: global,
                                            local: local
                                          });
                                        case 11:
                                        case "end":
                                          return _context1.stop();
                                      }
                                    }, _callee1, this);
                                  }));
                                  function run(_x14, _x15, _x16) {
                                    return _run2.apply(this, arguments);
                                  }
                                  return run;
                                }()
                              }]);
                            }();
                            BlackBox.AnimationMachine = /*#__PURE__*/function () {
                              function _class3() {
                                _classCallCheck(this, _class3);
                              }
                              return _createClass(_class3, [{
                                key: "init",
                                value: function () {
                                  var _init3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(machineData) {
                                    var string, parsed;
                                    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                                      while (1) switch (_context10.prev = _context10.next) {
                                        case 0:
                                          _context10.next = 2;
                                          return interpretate.unzlib64String(machineData.Compressed);
                                        case 2:
                                          string = _context10.sent;
                                          parsed = JSON.parse(string);
                                          this.values = parsed;
                                          this.count = 0;
                                          this.parity = true;
                                          this.symbol = machineData.Symbol;
                                          this.hash = machineData.HashState;
                                          this.eventId = machineData.Event[0];
                                          return _context10.abrupt("return", this);
                                        case 11:
                                        case "end":
                                          return _context10.stop();
                                      }
                                    }, _callee10, this);
                                  }));
                                  function init(_x17) {
                                    return _init3.apply(this, arguments);
                                  }
                                  return init;
                                }()
                              }, {
                                key: "run",
                                value: function () {
                                  var _run3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(evId, payload, pattern) {
                                    var symbol, _i2, _Object$values2, inst;
                                    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                                      while (1) switch (_context11.prev = _context11.next) {
                                        case 0:
                                          if (!(this.eventId != evId)) {
                                            _context11.next = 2;
                                            break;
                                          }
                                          return _context11.abrupt("return");
                                        case 2:
                                          symbol = core[this.symbol];
                                          symbol.data = ['JSObject', structuredClone(this.values[this.count])];
                                          _i2 = 0, _Object$values2 = Object.values(symbol.instances);
                                        case 5:
                                          if (!(_i2 < _Object$values2.length)) {
                                            _context11.next = 14;
                                            break;
                                          }
                                          inst = _Object$values2[_i2];
                                          if (!inst.dead) {
                                            _context11.next = 9;
                                            break;
                                          }
                                          return _context11.abrupt("continue", 11);
                                        case 9:
                                          _context11.next = 11;
                                          return inst.update();
                                        case 11:
                                          _i2++;
                                          _context11.next = 5;
                                          break;
                                        case 14:
                                          if (!this.parity) this.count++;
                                          this.parity = !this.parity; //animate on 2
                                          if (this.values.length == this.count) this.count = 0;
                                        case 18:
                                        case "end":
                                          return _context11.stop();
                                      }
                                    }, _callee11, this);
                                  }));
                                  function run(_x18, _x19, _x20) {
                                    return _run3.apply(this, arguments);
                                  }
                                  return run;
                                }()
                              }]);
                            }();
                            _context12.next = 7;
                            return interpretate(result, {});
                          case 7:
                            virtualMachinesData = _context12.sent;
                            virtualMachines = [];
                            _iterator = _createForOfIteratorHelper(virtualMachinesData);
                            _context12.prev = 10;
                            _iterator.s();
                          case 12:
                            if ((_step = _iterator.n()).done) {
                              _context12.next = 20;
                              break;
                            }
                            machine = _step.value;
                            bbox = new BlackBox[machine.Class]();
                            _context12.next = 17;
                            return bbox.init(machine);
                          case 17:
                            virtualMachines.push(bbox);
                          case 18:
                            _context12.next = 12;
                            break;
                          case 20:
                            _context12.next = 25;
                            break;
                          case 22:
                            _context12.prev = 22;
                            _context12.t0 = _context12["catch"](10);
                            _iterator.e(_context12.t0);
                          case 25:
                            _context12.prev = 25;
                            _iterator.f();
                            return _context12.finish(25);
                          case 28:
                            length = virtualMachines.length;
                            window.server.kernel = {
                              io: {
                                fire: function fire(evId, payload) {
                                  var pattern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Default";
                                  for (var i = 0; i < length; ++i) virtualMachines[i].run(evId, payload, pattern);
                                },
                                poke: function poke(evId) {
                                  for (var i = 0; i < length; ++i) virtualMachines[i].run(evId, true, 'Default');
                                }
                              }
                            };
                            eventsPool.forEach(function (ev) {
                              if (ev[0] == 'fire') {
                                window.server.kernel.io.fire(ev[1], ev[2], ev[3]);
                              } else if (ev[0] == 'poke') {
                                window.server.kernel.io.poke(ev[1]);
                              }
                            });
                            eventsPool = [];

                            //eventsPool.forEach((ev) => window.server.kernel.emitt(ev.uid, ev.data, ev.type));
                          case 32:
                          case "end":
                            return _context12.stop();
                        }
                      }, _callee12, null, [[10, 22, 25, 28]]);
                    }));
                    return function (_x9) {
                      return _ref9.apply(this, arguments);
                    };
                  }());
                });
              }
            case 2:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      return function loadKernel() {
        return _ref8.apply(this, arguments);
      };
    }();
    core.Offload = function (args, env) {
      if (args.length > 1) {
        //alternative path - checking options
        //do it in ugly superfast way
        if (args[1][1] === "'Static'") {
          if (args[1][2]) {
            return interpretate(args[0], _objectSpread2(_objectSpread2({}, env), {}, {
              "static": true
            }));
          }
        } else if (args.length > 2) {
          if (args[2][1] === "'Static'") {
            if (args[2][2]) {
              return interpretate(args[0], _objectSpread2(_objectSpread2({}, env), {}, {
                "static": true
              }));
            }
          }
        }
      }
      return interpretate(args[0], env);
    };
    core.Medium = function () {
      return 0.7;
    };
    core.Offload.update = function (args, env) {
      if (args.length > 1) {
        //alternative path - checking options
        //do it in ugly superfast way

        //Volitile -> False -> Reject updates

        //low-level optimizations, we dont' need to spend time on parsing options
        if (args[1][1] === "'Volatile'") {
          if (!args[1][2]) {
            console.log('Update was rejected (Nonvolatile)');
            return;
          }
        } else if (args.length > 2) {
          if (args[2][1] === "'Volatile'") {
            if (!args[2][2]) {
              console.log('Update was rejected (Nonvolatile)');
              return;
            }
          }
        }
      }
      return interpretate(args[0], env);
    };
    window.server.ask = function (what) {
      var p = new Deferred();
      if (what.length < 42) {
        console.error('Unknown command');
        console.error(what);
        return false;
      }
      //throw what;
      var offset = 'CoffeeLiqueur`Extensions`FrontendObject`Internal`GetObject["'.length;
      if (Array.isArray(promises[what.slice(offset, -2)])) {
        promises[what.slice(offset, -2)].push(p);
      } else {
        promises[what.slice(offset, -2)] = [p];
      }
      _fetchFile();
      return p.promise;
    };
    window.server.getSymbol = function (name) {
      var p = new Deferred();
      console.warn('Asking for symbol' + name);
      symbols[name] = p;
      return p.promise;
    };
    interpretate.anonymous = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(d, org) {
        var name, data, p;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              //TODO Check if it set delayed or set... if set, then one need only to cache it
              console.log('Anonimous symbol: ' + JSON.stringify(d));
              if (!(d instanceof Array)) {
                _context17.next = 6;
                break;
              }
              console.error(d);
              //console.error(jsonStringifyRecursive(org.global.stack));
              throw 'unknown WL expression. Error at ' + d[0];
            case 6:
              name = d; //symbol
            case 7:
              p = new Deferred();
              console.warn('Asking for symbol' + name);
              symbols[name] = p;
              _context17.next = 12;
              return p.promise;
            case 12:
              data = _context17.sent;
              //if it is OK

              core[name] = /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(args, env) {
                  var data;
                  return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                      case 0:
                        console.log('IE: calling our symbol...');
                        //evaluate in the context
                        _context14.next = 3;
                        return interpretate(core[name].data, env);
                      case 3:
                        data = _context14.sent;
                        if (env.root && !env.novirtual) core[name].instances[env.root.uid] = env.root; //if it was evaluated insdide the container, then, add it to the tracking list
                        //if (env.hold) return ['JSObject', core[name].data];
                        return _context14.abrupt("return", data);
                      case 6:
                      case "end":
                        return _context14.stop();
                    }
                  }, _callee14);
                }));
                return function (_x23, _x24) {
                  return _ref10.apply(this, arguments);
                };
              }();
              core[name].update = /*#__PURE__*/function () {
                var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(args, env) {
                  var data;
                  return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        if (!env.useCache) {
                          _context15.next = 7;
                          break;
                        }
                        if (!(!core[name].cached || core[name].currentData != core[name].data)) {
                          _context15.next = 6;
                          break;
                        }
                        _context15.next = 4;
                        return interpretate(core[name].data, env);
                      case 4:
                        core[name].cached = _context15.sent;
                        core[name].currentData = core[name].data; //just copy the reference
                        //console.log('cache miss');
                      case 6:
                        return _context15.abrupt("return", core[name].cached);
                      case 7:
                        _context15.next = 9;
                        return interpretate(core[name].data, env);
                      case 9:
                        data = _context15.sent;
                        return _context15.abrupt("return", data);
                      case 11:
                      case "end":
                        return _context15.stop();
                    }
                  }, _callee15);
                }));
                return function (_x25, _x26) {
                  return _ref11.apply(this, arguments);
                };
              }();
              core[name].destroy = /*#__PURE__*/function () {
                var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(args, env) {
                  return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                    while (1) switch (_context16.prev = _context16.next) {
                      case 0:
                        delete core[name].instances[env.root.uid];
                        console.warn(env.root.uid + ' was destroyed');
                        console.warn('external symbol was destoryed');
                      case 3:
                      case "end":
                        return _context16.stop();
                    }
                  }, _callee16);
                }));
                return function (_x27, _x28) {
                  return _ref12.apply(this, arguments);
                };
              }();
              core[name].data = data; //get the data

              core[name].virtual = true;
              core[name].instances = {};

              //interpretate it AGAIN!
              return _context17.abrupt("return", interpretate(d, org));
            case 20:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      return function (_x21, _x22) {
        return _ref1.apply(this, arguments);
      };
    }();
    loadKernel();
  });
  console.log('DONE loading mesh');
  if (notebook) {
    return /*#__PURE__*/React.createElement("a", {
      href: notebook,
      className: DefaultClasses.downloadButton.a || ''
    }, "Download original notebook ", /*#__PURE__*/React.createElement(SvgIcon, null));
  }
  return null;
}
function WLJSHTML(_ref13) {
  var children = _ref13.children;
    _ref13.data;
  var markup = {
    __html: decodeURIComponent(children)
  };
  return /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: markup
  });
}
function WLJSEditor(_ref14) {
  var children = _ref14.children;
    _ref14.nid;
    _ref14.id;
    _ref14.type;
    var display = _ref14.display,
    opts = _ref14.opts;
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
    tabIndex: "0",
    className: DefaultClasses.codeBlock.pre
  }, !loaded && /*#__PURE__*/React.createElement("code", {
    className: [DefaultClasses.codeBlock.code, DefaultClasses.codeBlock.placeholder].join(' ')
  }, decoded), /*#__PURE__*/React.createElement("code", {
    className: DefaultClasses.codeBlock.code,
    ref: ref
  }))));
}

export { DefaultClasses, WLJSEditor, WLJSHTML, WLJSStore };
