(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Qt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Eh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function E0(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var _h = { exports: {} },
  Ls = {},
  Ch = { exports: {} },
  H = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Di = Symbol.for("react.element"),
  _0 = Symbol.for("react.portal"),
  C0 = Symbol.for("react.fragment"),
  O0 = Symbol.for("react.strict_mode"),
  b0 = Symbol.for("react.profiler"),
  M0 = Symbol.for("react.provider"),
  L0 = Symbol.for("react.context"),
  j0 = Symbol.for("react.forward_ref"),
  D0 = Symbol.for("react.suspense"),
  R0 = Symbol.for("react.memo"),
  A0 = Symbol.for("react.lazy"),
  pf = Symbol.iterator;
function N0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pf && e[pf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Oh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bh = Object.assign,
  Mh = {};
function _r(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mh),
    (this.updater = n || Oh);
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Lh() {}
Lh.prototype = _r.prototype;
function bu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Mh),
    (this.updater = n || Oh);
}
var Mu = (bu.prototype = new Lh());
Mu.constructor = bu;
bh(Mu, _r.prototype);
Mu.isPureReactComponent = !0;
var hf = Array.isArray,
  jh = Object.prototype.hasOwnProperty,
  Lu = { current: null },
  Dh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      jh.call(t, r) && !Dh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Di,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Lu.current,
  };
}
function z0(e, t) {
  return {
    $$typeof: Di,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ju(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Di;
}
function I0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var mf = /\/+/g;
function ua(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? I0("" + e.key)
    : t.toString(36);
}
function ko(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Di:
          case _0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ua(s, 0) : r),
      hf(i)
        ? ((n = ""),
          e != null && (n = e.replace(mf, "$&/") + "/"),
          ko(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ju(i) &&
            (i = z0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(mf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), hf(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + ua(o, a);
      s += ko(o, t, n, l, i);
    }
  else if (((l = N0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + ua(o, a++)), (s += ko(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function qi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ko(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function V0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Re = { current: null },
  Eo = { transition: null },
  F0 = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: Eo,
    ReactCurrentOwner: Lu,
  };
H.Children = {
  map: qi,
  forEach: function (e, t, n) {
    qi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ju(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = _r;
H.Fragment = C0;
H.Profiler = b0;
H.PureComponent = bu;
H.StrictMode = O0;
H.Suspense = D0;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bh({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Lu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      jh.call(t, l) &&
        !Dh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Di, type: e.type, key: i, ref: o, props: r, _owner: s };
};
H.createContext = function (e) {
  return (
    (e = {
      $$typeof: L0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: M0, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = Rh;
H.createFactory = function (e) {
  var t = Rh.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: j0, render: e };
};
H.isValidElement = ju;
H.lazy = function (e) {
  return { $$typeof: A0, _payload: { _status: -1, _result: e }, _init: V0 };
};
H.memo = function (e, t) {
  return { $$typeof: R0, type: e, compare: t === void 0 ? null : t };
};
H.startTransition = function (e) {
  var t = Eo.transition;
  Eo.transition = {};
  try {
    e();
  } finally {
    Eo.transition = t;
  }
};
H.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
H.useCallback = function (e, t) {
  return Re.current.useCallback(e, t);
};
H.useContext = function (e) {
  return Re.current.useContext(e);
};
H.useDebugValue = function () {};
H.useDeferredValue = function (e) {
  return Re.current.useDeferredValue(e);
};
H.useEffect = function (e, t) {
  return Re.current.useEffect(e, t);
};
H.useId = function () {
  return Re.current.useId();
};
H.useImperativeHandle = function (e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
H.useInsertionEffect = function (e, t) {
  return Re.current.useInsertionEffect(e, t);
};
H.useLayoutEffect = function (e, t) {
  return Re.current.useLayoutEffect(e, t);
};
H.useMemo = function (e, t) {
  return Re.current.useMemo(e, t);
};
H.useReducer = function (e, t, n) {
  return Re.current.useReducer(e, t, n);
};
H.useRef = function (e) {
  return Re.current.useRef(e);
};
H.useState = function (e) {
  return Re.current.useState(e);
};
H.useSyncExternalStore = function (e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
H.useTransition = function () {
  return Re.current.useTransition();
};
H.version = "18.2.0";
Ch.exports = H;
var R = Ch.exports;
const qt = Eh(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $0 = R,
  B0 = Symbol.for("react.element"),
  H0 = Symbol.for("react.fragment"),
  U0 = Object.prototype.hasOwnProperty,
  W0 = $0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  K0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ah(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) U0.call(t, r) && !K0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: B0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: W0.current,
  };
}
Ls.Fragment = H0;
Ls.jsx = Ah;
Ls.jsxs = Ah;
_h.exports = Ls;
var T = _h.exports,
  ll = {},
  Nh = { exports: {} },
  Ge = {},
  zh = { exports: {} },
  Ih = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, A) {
    var F = b.length;
    b.push(A);
    e: for (; 0 < F; ) {
      var G = (F - 1) >>> 1,
        de = b[G];
      if (0 < i(de, A)) (b[G] = A), (b[F] = de), (F = G);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var A = b[0],
      F = b.pop();
    if (F !== A) {
      b[0] = F;
      e: for (var G = 0, de = b.length, Xe = de >>> 1; G < Xe; ) {
        var kt = 2 * (G + 1) - 1,
          Et = b[kt],
          gn = kt + 1,
          Xi = b[gn];
        if (0 > i(Et, F))
          gn < de && 0 > i(Xi, Et)
            ? ((b[G] = Xi), (b[gn] = F), (G = gn))
            : ((b[G] = Et), (b[kt] = F), (G = kt));
        else if (gn < de && 0 > i(Xi, F)) (b[G] = Xi), (b[gn] = F), (G = gn);
        else break e;
      }
    }
    return A;
  }
  function i(b, A) {
    var F = b.sortIndex - A.sortIndex;
    return F !== 0 ? F : b.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    v = !1,
    y = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(b) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= b)
        r(u), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(u);
    }
  }
  function w(b) {
    if (((g = !1), m(b), !y))
      if (n(l) !== null) (y = !0), fe(S);
      else {
        var A = n(u);
        A !== null && W(w, A.startTime - b);
      }
  }
  function S(b, A) {
    (y = !1), g && ((g = !1), h(_), (_ = -1)), (v = !0);
    var F = d;
    try {
      for (
        m(A), f = n(l);
        f !== null && (!(f.expirationTime > A) || (b && !j()));

      ) {
        var G = f.callback;
        if (typeof G == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var de = G(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof de == "function" ? (f.callback = de) : f === n(l) && r(l),
            m(A);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Xe = !0;
      else {
        var kt = n(u);
        kt !== null && W(w, kt.startTime - A), (Xe = !1);
      }
      return Xe;
    } finally {
      (f = null), (d = F), (v = !1);
    }
  }
  var P = !1,
    E = null,
    _ = -1,
    C = 5,
    k = -1;
  function j() {
    return !(e.unstable_now() - k < C);
  }
  function D() {
    if (E !== null) {
      var b = e.unstable_now();
      k = b;
      var A = !0;
      try {
        A = E(!0, b);
      } finally {
        A ? N() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var N;
  if (typeof p == "function")
    N = function () {
      p(D);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      Ye = z.port2;
    (z.port1.onmessage = D),
      (N = function () {
        Ye.postMessage(null);
      });
  } else
    N = function () {
      x(D, 0);
    };
  function fe(b) {
    (E = b), P || ((P = !0), N());
  }
  function W(b, A) {
    _ = x(function () {
      b(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || v || ((y = !0), fe(S));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (C = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (b) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var F = d;
      d = A;
      try {
        return b();
      } finally {
        d = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var F = d;
      d = b;
      try {
        return A();
      } finally {
        d = F;
      }
    }),
    (e.unstable_scheduleCallback = function (b, A, F) {
      var G = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? G + F : G))
          : (F = G),
        b)
      ) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return (
        (de = F + de),
        (b = {
          id: c++,
          callback: A,
          priorityLevel: b,
          startTime: F,
          expirationTime: de,
          sortIndex: -1,
        }),
        F > G
          ? ((b.sortIndex = F),
            t(u, b),
            n(l) === null &&
              b === n(u) &&
              (g ? (h(_), (_ = -1)) : (g = !0), W(w, F - G)))
          : ((b.sortIndex = de), t(l, b), y || v || ((y = !0), fe(S))),
        b
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (b) {
      var A = d;
      return function () {
        var F = d;
        d = A;
        try {
          return b.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(Ih);
zh.exports = Ih;
var G0 = zh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh = R,
  Ke = G0;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fh = new Set(),
  li = {};
function Nn(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (li[e] = t, e = 0; e < t.length; e++) Fh.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ul = Object.prototype.hasOwnProperty,
  Q0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vf = {},
  gf = {};
function Y0(e) {
  return ul.call(gf, e)
    ? !0
    : ul.call(vf, e)
    ? !1
    : Q0.test(e)
    ? (gf[e] = !0)
    : ((vf[e] = !0), !1);
}
function X0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function q0(e, t, n, r) {
  if (t === null || typeof t > "u" || X0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ae(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new Ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Te[e] = new Ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new Ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new Ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new Ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Du = /[\-:]([a-z])/g;
function Ru(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Du, Ru);
    Te[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Du, Ru);
    Te[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Du, Ru);
  Te[t] = new Ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Au(e, t, n, r) {
  var i = Te.hasOwnProperty(t) ? Te[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (q0(t, n, i, r) && (n = null),
    r || i === null
      ? Y0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var It = Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zi = Symbol.for("react.element"),
  Fn = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  Nu = Symbol.for("react.strict_mode"),
  cl = Symbol.for("react.profiler"),
  $h = Symbol.for("react.provider"),
  Bh = Symbol.for("react.context"),
  zu = Symbol.for("react.forward_ref"),
  fl = Symbol.for("react.suspense"),
  dl = Symbol.for("react.suspense_list"),
  Iu = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  Hh = Symbol.for("react.offscreen"),
  yf = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (yf && e[yf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  ca;
function $r(e) {
  if (ca === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ca = (t && t[1]) || "";
    }
  return (
    `
` +
    ca +
    e
  );
}
var fa = !1;
function da(e, t) {
  if (!e || fa) return "";
  fa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (fa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? $r(e) : "";
}
function Z0(e) {
  switch (e.tag) {
    case 5:
      return $r(e.type);
    case 16:
      return $r("Lazy");
    case 13:
      return $r("Suspense");
    case 19:
      return $r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = da(e.type, !1)), e;
    case 11:
      return (e = da(e.type.render, !1)), e;
    case 1:
      return (e = da(e.type, !0)), e;
    default:
      return "";
  }
}
function pl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Fn:
      return "Portal";
    case cl:
      return "Profiler";
    case Nu:
      return "StrictMode";
    case fl:
      return "Suspense";
    case dl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Bh:
        return (e.displayName || "Context") + ".Consumer";
      case $h:
        return (e._context.displayName || "Context") + ".Provider";
      case zu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Iu:
        return (
          (t = e.displayName || null), t !== null ? t : pl(e.type) || "Memo"
        );
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return pl(e(t));
        } catch {}
    }
  return null;
}
function J0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return pl(t);
    case 8:
      return t === Nu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function e1(e) {
  var t = Uh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ji(e) {
  e._valueTracker || (e._valueTracker = e1(e));
}
function Wh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Bo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hl(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ln(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Kh(e, t) {
  (t = t.checked), t != null && Au(e, "checked", t, !1);
}
function ml(e, t) {
  Kh(e, t);
  var n = ln(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? vl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && vl(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function vl(e, t, n) {
  (t !== "number" || Bo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Br = Array.isArray;
function rr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function gl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ln(n) };
}
function Gh(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Pf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Qh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function yl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Qh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var eo,
  Yh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        eo = eo || document.createElement("div"),
          eo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = eo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ui(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Qr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  t1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Qr).forEach(function (e) {
  t1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qr[t] = Qr[e]);
  });
});
function Xh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Qr.hasOwnProperty(e) && Qr[e])
    ? ("" + t).trim()
    : t + "px";
}
function qh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Xh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var n1 = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wl(e, t) {
  if (t) {
    if (n1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Sl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xl = null;
function Vu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pl = null,
  ir = null,
  or = null;
function Tf(e) {
  if ((e = Ni(e))) {
    if (typeof Pl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Ns(t)), Pl(e.stateNode, e.type, t));
  }
}
function Zh(e) {
  ir ? (or ? or.push(e) : (or = [e])) : (ir = e);
}
function Jh() {
  if (ir) {
    var e = ir,
      t = or;
    if (((or = ir = null), Tf(e), t)) for (e = 0; e < t.length; e++) Tf(t[e]);
  }
}
function em(e, t) {
  return e(t);
}
function tm() {}
var pa = !1;
function nm(e, t, n) {
  if (pa) return e(t, n);
  pa = !0;
  try {
    return em(e, t, n);
  } finally {
    (pa = !1), (ir !== null || or !== null) && (tm(), Jh());
  }
}
function ci(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ns(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Tl = !1;
if (Dt)
  try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", {
      get: function () {
        Tl = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr);
  } catch {
    Tl = !1;
  }
function r1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Yr = !1,
  Ho = null,
  Uo = !1,
  kl = null,
  i1 = {
    onError: function (e) {
      (Yr = !0), (Ho = e);
    },
  };
function o1(e, t, n, r, i, o, s, a, l) {
  (Yr = !1), (Ho = null), r1.apply(i1, arguments);
}
function s1(e, t, n, r, i, o, s, a, l) {
  if ((o1.apply(this, arguments), Yr)) {
    if (Yr) {
      var u = Ho;
      (Yr = !1), (Ho = null);
    } else throw Error(O(198));
    Uo || ((Uo = !0), (kl = u));
  }
}
function zn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function rm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function kf(e) {
  if (zn(e) !== e) throw Error(O(188));
}
function a1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zn(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return kf(i), e;
        if (o === r) return kf(i), t;
        o = o.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function im(e) {
  return (e = a1(e)), e !== null ? om(e) : null;
}
function om(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = om(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sm = Ke.unstable_scheduleCallback,
  Ef = Ke.unstable_cancelCallback,
  l1 = Ke.unstable_shouldYield,
  u1 = Ke.unstable_requestPaint,
  he = Ke.unstable_now,
  c1 = Ke.unstable_getCurrentPriorityLevel,
  Fu = Ke.unstable_ImmediatePriority,
  am = Ke.unstable_UserBlockingPriority,
  Wo = Ke.unstable_NormalPriority,
  f1 = Ke.unstable_LowPriority,
  lm = Ke.unstable_IdlePriority,
  js = null,
  wt = null;
function d1(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(js, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : m1,
  p1 = Math.log,
  h1 = Math.LN2;
function m1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((p1(e) / h1) | 0)) | 0;
}
var to = 64,
  no = 4194304;
function Hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ko(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Hr(a)) : ((o &= s), o !== 0 && (r = Hr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Hr(s)) : o !== 0 && (r = Hr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ft(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function v1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function g1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - ft(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = v1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function El(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function um() {
  var e = to;
  return (to <<= 1), !(to & 4194240) && (to = 64), e;
}
function ha(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ri(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ft(t)),
    (e[t] = n);
}
function y1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ft(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function $u(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var K = 0;
function cm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fm,
  Bu,
  dm,
  pm,
  hm,
  _l = !1,
  ro = [],
  Zt = null,
  Jt = null,
  en = null,
  fi = new Map(),
  di = new Map(),
  Kt = [],
  w1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function _f(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      fi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      di.delete(t.pointerId);
  }
}
function Rr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ni(t)), t !== null && Bu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function S1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Zt = Rr(Zt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Jt = Rr(Jt, e, t, n, r, i)), !0;
    case "mouseover":
      return (en = Rr(en, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return fi.set(o, Rr(fi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), di.set(o, Rr(di.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function mm(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = rm(n)), t !== null)) {
          (e.blockedOn = t),
            hm(e.priority, function () {
              dm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _o(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Cl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xl = r), n.target.dispatchEvent(r), (xl = null);
    } else return (t = Ni(n)), t !== null && Bu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Cf(e, t, n) {
  _o(e) && n.delete(t);
}
function x1() {
  (_l = !1),
    Zt !== null && _o(Zt) && (Zt = null),
    Jt !== null && _o(Jt) && (Jt = null),
    en !== null && _o(en) && (en = null),
    fi.forEach(Cf),
    di.forEach(Cf);
}
function Ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _l ||
      ((_l = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, x1)));
}
function pi(e) {
  function t(i) {
    return Ar(i, e);
  }
  if (0 < ro.length) {
    Ar(ro[0], e);
    for (var n = 1; n < ro.length; n++) {
      var r = ro[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zt !== null && Ar(Zt, e),
      Jt !== null && Ar(Jt, e),
      en !== null && Ar(en, e),
      fi.forEach(t),
      di.forEach(t),
      n = 0;
    n < Kt.length;
    n++
  )
    (r = Kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && ((n = Kt[0]), n.blockedOn === null); )
    mm(n), n.blockedOn === null && Kt.shift();
}
var sr = It.ReactCurrentBatchConfig,
  Go = !0;
function P1(e, t, n, r) {
  var i = K,
    o = sr.transition;
  sr.transition = null;
  try {
    (K = 1), Hu(e, t, n, r);
  } finally {
    (K = i), (sr.transition = o);
  }
}
function T1(e, t, n, r) {
  var i = K,
    o = sr.transition;
  sr.transition = null;
  try {
    (K = 4), Hu(e, t, n, r);
  } finally {
    (K = i), (sr.transition = o);
  }
}
function Hu(e, t, n, r) {
  if (Go) {
    var i = Cl(e, t, n, r);
    if (i === null) ka(e, t, r, Qo, n), _f(e, r);
    else if (S1(i, e, t, n, r)) r.stopPropagation();
    else if ((_f(e, r), t & 4 && -1 < w1.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ni(i);
        if (
          (o !== null && fm(o),
          (o = Cl(e, t, n, r)),
          o === null && ka(e, t, r, Qo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ka(e, t, r, null, n);
  }
}
var Qo = null;
function Cl(e, t, n, r) {
  if (((Qo = null), (e = Vu(r)), (e = Tn(e)), e !== null))
    if (((t = zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = rm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Qo = e), null;
}
function vm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (c1()) {
        case Fu:
          return 1;
        case am:
          return 4;
        case Wo:
        case f1:
          return 16;
        case lm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Uu = null,
  Co = null;
function gm() {
  if (Co) return Co;
  var e,
    t = Uu,
    n = t.length,
    r,
    i = "value" in Yt ? Yt.value : Yt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Co = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Oo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function io() {
  return !0;
}
function Of() {
  return !1;
}
function Qe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? io
        : Of),
      (this.isPropagationStopped = Of),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = io));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = io));
      },
      persist: function () {},
      isPersistent: io,
    }),
    t
  );
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wu = Qe(Cr),
  Ai = ae({}, Cr, { view: 0, detail: 0 }),
  k1 = Qe(Ai),
  ma,
  va,
  Nr,
  Ds = ae({}, Ai, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ku,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((ma = e.screenX - Nr.screenX), (va = e.screenY - Nr.screenY))
              : (va = ma = 0),
            (Nr = e)),
          ma);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : va;
    },
  }),
  bf = Qe(Ds),
  E1 = ae({}, Ds, { dataTransfer: 0 }),
  _1 = Qe(E1),
  C1 = ae({}, Ai, { relatedTarget: 0 }),
  ga = Qe(C1),
  O1 = ae({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b1 = Qe(O1),
  M1 = ae({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  L1 = Qe(M1),
  j1 = ae({}, Cr, { data: 0 }),
  Mf = Qe(j1),
  D1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  R1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  A1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function N1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = A1[e]) ? !!t[e] : !1;
}
function Ku() {
  return N1;
}
var z1 = ae({}, Ai, {
    key: function (e) {
      if (e.key) {
        var t = D1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? R1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ku,
    charCode: function (e) {
      return e.type === "keypress" ? Oo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Oo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  I1 = Qe(z1),
  V1 = ae({}, Ds, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lf = Qe(V1),
  F1 = ae({}, Ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ku,
  }),
  $1 = Qe(F1),
  B1 = ae({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  H1 = Qe(B1),
  U1 = ae({}, Ds, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  W1 = Qe(U1),
  K1 = [9, 13, 27, 32],
  Gu = Dt && "CompositionEvent" in window,
  Xr = null;
Dt && "documentMode" in document && (Xr = document.documentMode);
var G1 = Dt && "TextEvent" in window && !Xr,
  ym = Dt && (!Gu || (Xr && 8 < Xr && 11 >= Xr)),
  jf = " ",
  Df = !1;
function wm(e, t) {
  switch (e) {
    case "keyup":
      return K1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Sm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function Q1(e, t) {
  switch (e) {
    case "compositionend":
      return Sm(t);
    case "keypress":
      return t.which !== 32 ? null : ((Df = !0), jf);
    case "textInput":
      return (e = t.data), e === jf && Df ? null : e;
    default:
      return null;
  }
}
function Y1(e, t) {
  if (Bn)
    return e === "compositionend" || (!Gu && wm(e, t))
      ? ((e = gm()), (Co = Uu = Yt = null), (Bn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ym && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var X1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Rf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!X1[e.type] : t === "textarea";
}
function xm(e, t, n, r) {
  Zh(r),
    (t = Yo(t, "onChange")),
    0 < t.length &&
      ((n = new Wu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qr = null,
  hi = null;
function q1(e) {
  jm(e, 0);
}
function Rs(e) {
  var t = Wn(e);
  if (Wh(t)) return e;
}
function Z1(e, t) {
  if (e === "change") return t;
}
var Pm = !1;
if (Dt) {
  var ya;
  if (Dt) {
    var wa = "oninput" in document;
    if (!wa) {
      var Af = document.createElement("div");
      Af.setAttribute("oninput", "return;"),
        (wa = typeof Af.oninput == "function");
    }
    ya = wa;
  } else ya = !1;
  Pm = ya && (!document.documentMode || 9 < document.documentMode);
}
function Nf() {
  qr && (qr.detachEvent("onpropertychange", Tm), (hi = qr = null));
}
function Tm(e) {
  if (e.propertyName === "value" && Rs(hi)) {
    var t = [];
    xm(t, hi, e, Vu(e)), nm(q1, t);
  }
}
function J1(e, t, n) {
  e === "focusin"
    ? (Nf(), (qr = t), (hi = n), qr.attachEvent("onpropertychange", Tm))
    : e === "focusout" && Nf();
}
function ew(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Rs(hi);
}
function tw(e, t) {
  if (e === "click") return Rs(t);
}
function nw(e, t) {
  if (e === "input" || e === "change") return Rs(t);
}
function rw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : rw;
function mi(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ul.call(t, i) || !pt(e[i], t[i])) return !1;
  }
  return !0;
}
function zf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function If(e, t) {
  var n = zf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zf(n);
  }
}
function km(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? km(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Em() {
  for (var e = window, t = Bo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Bo(e.document);
  }
  return t;
}
function Qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function iw(e) {
  var t = Em(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    km(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Qu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = If(n, o));
        var s = If(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ow = Dt && "documentMode" in document && 11 >= document.documentMode,
  Hn = null,
  Ol = null,
  Zr = null,
  bl = !1;
function Vf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bl ||
    Hn == null ||
    Hn !== Bo(r) ||
    ((r = Hn),
    "selectionStart" in r && Qu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zr && mi(Zr, r)) ||
      ((Zr = r),
      (r = Yo(Ol, "onSelect")),
      0 < r.length &&
        ((t = new Wu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Hn))));
}
function oo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Un = {
    animationend: oo("Animation", "AnimationEnd"),
    animationiteration: oo("Animation", "AnimationIteration"),
    animationstart: oo("Animation", "AnimationStart"),
    transitionend: oo("Transition", "TransitionEnd"),
  },
  Sa = {},
  _m = {};
Dt &&
  ((_m = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  "TransitionEvent" in window || delete Un.transitionend.transition);
function As(e) {
  if (Sa[e]) return Sa[e];
  if (!Un[e]) return e;
  var t = Un[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _m) return (Sa[e] = t[n]);
  return e;
}
var Cm = As("animationend"),
  Om = As("animationiteration"),
  bm = As("animationstart"),
  Mm = As("transitionend"),
  Lm = new Map(),
  Ff =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dn(e, t) {
  Lm.set(e, t), Nn(t, [e]);
}
for (var xa = 0; xa < Ff.length; xa++) {
  var Pa = Ff[xa],
    sw = Pa.toLowerCase(),
    aw = Pa[0].toUpperCase() + Pa.slice(1);
  dn(sw, "on" + aw);
}
dn(Cm, "onAnimationEnd");
dn(Om, "onAnimationIteration");
dn(bm, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Mm, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ur =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  lw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));
function $f(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), s1(r, t, void 0, e), (e.currentTarget = null);
}
function jm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          $f(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          $f(i, a, u), (o = l);
        }
    }
  }
  if (Uo) throw ((e = kl), (Uo = !1), (kl = null), e);
}
function X(e, t) {
  var n = t[Rl];
  n === void 0 && (n = t[Rl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Dm(t, e, 2, !1), n.add(r));
}
function Ta(e, t, n) {
  var r = 0;
  t && (r |= 4), Dm(n, e, r, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function vi(e) {
  if (!e[so]) {
    (e[so] = !0),
      Fh.forEach(function (n) {
        n !== "selectionchange" && (lw.has(n) || Ta(n, !1, e), Ta(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || ((t[so] = !0), Ta("selectionchange", !1, t));
  }
}
function Dm(e, t, n, r) {
  switch (vm(t)) {
    case 1:
      var i = P1;
      break;
    case 4:
      i = T1;
      break;
    default:
      i = Hu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Tl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function ka(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Tn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  nm(function () {
    var u = o,
      c = Vu(n),
      f = [];
    e: {
      var d = Lm.get(e);
      if (d !== void 0) {
        var v = Wu,
          y = e;
        switch (e) {
          case "keypress":
            if (Oo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = I1;
            break;
          case "focusin":
            (y = "focus"), (v = ga);
            break;
          case "focusout":
            (y = "blur"), (v = ga);
            break;
          case "beforeblur":
          case "afterblur":
            v = ga;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = _1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = $1;
            break;
          case Cm:
          case Om:
          case bm:
            v = b1;
            break;
          case Mm:
            v = H1;
            break;
          case "scroll":
            v = k1;
            break;
          case "wheel":
            v = W1;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = L1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Lf;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          h = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              h !== null && ((w = ci(p, h)), w != null && g.push(gi(p, w, m)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((d = new v(d, y, null, n, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          d &&
            n !== xl &&
            (y = n.relatedTarget || n.fromElement) &&
            (Tn(y) || y[Rt]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((y = n.relatedTarget || n.toElement),
              (v = u),
              (y = y ? Tn(y) : null),
              y !== null &&
                ((x = zn(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((v = null), (y = u)),
          v !== y)
        ) {
          if (
            ((g = bf),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Lf),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (x = v == null ? d : Wn(v)),
            (m = y == null ? d : Wn(y)),
            (d = new g(w, p + "leave", v, n, c)),
            (d.target = x),
            (d.relatedTarget = m),
            (w = null),
            Tn(c) === u &&
              ((g = new g(h, p + "enter", y, n, c)),
              (g.target = m),
              (g.relatedTarget = x),
              (w = g)),
            (x = w),
            v && y)
          )
            t: {
              for (g = v, h = y, p = 0, m = g; m; m = Vn(m)) p++;
              for (m = 0, w = h; w; w = Vn(w)) m++;
              for (; 0 < p - m; ) (g = Vn(g)), p--;
              for (; 0 < m - p; ) (h = Vn(h)), m--;
              for (; p--; ) {
                if (g === h || (h !== null && g === h.alternate)) break t;
                (g = Vn(g)), (h = Vn(h));
              }
              g = null;
            }
          else g = null;
          v !== null && Bf(f, d, v, g, !1),
            y !== null && x !== null && Bf(f, x, y, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? Wn(u) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var S = Z1;
        else if (Rf(d))
          if (Pm) S = nw;
          else {
            S = ew;
            var P = J1;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = tw);
        if (S && (S = S(e, u))) {
          xm(f, S, n, c);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            vl(d, "number", d.value);
      }
      switch (((P = u ? Wn(u) : window), e)) {
        case "focusin":
          (Rf(P) || P.contentEditable === "true") &&
            ((Hn = P), (Ol = u), (Zr = null));
          break;
        case "focusout":
          Zr = Ol = Hn = null;
          break;
        case "mousedown":
          bl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bl = !1), Vf(f, n, c);
          break;
        case "selectionchange":
          if (ow) break;
        case "keydown":
        case "keyup":
          Vf(f, n, c);
      }
      var E;
      if (Gu)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Bn
          ? wm(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (ym &&
          n.locale !== "ko" &&
          (Bn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Bn && (E = gm())
            : ((Yt = c),
              (Uu = "value" in Yt ? Yt.value : Yt.textContent),
              (Bn = !0))),
        (P = Yo(u, _)),
        0 < P.length &&
          ((_ = new Mf(_, e, null, n, c)),
          f.push({ event: _, listeners: P }),
          E ? (_.data = E) : ((E = Sm(n)), E !== null && (_.data = E)))),
        (E = G1 ? Q1(e, n) : Y1(e, n)) &&
          ((u = Yo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Mf("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    jm(f, t);
  });
}
function gi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Yo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ci(e, n)),
      o != null && r.unshift(gi(e, o, i)),
      (o = ci(e, t)),
      o != null && r.push(gi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Bf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = ci(n, o)), l != null && s.unshift(gi(n, l, a)))
        : i || ((l = ci(n, o)), l != null && s.push(gi(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var uw = /\r\n?/g,
  cw = /\u0000|\uFFFD/g;
function Hf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      uw,
      `
`
    )
    .replace(cw, "");
}
function ao(e, t, n) {
  if (((t = Hf(t)), Hf(e) !== t && n)) throw Error(O(425));
}
function Xo() {}
var Ml = null,
  Ll = null;
function jl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Dl = typeof setTimeout == "function" ? setTimeout : void 0,
  fw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uf = typeof Promise == "function" ? Promise : void 0,
  dw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uf < "u"
      ? function (e) {
          return Uf.resolve(null).then(e).catch(pw);
        }
      : Dl;
function pw(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ea(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), pi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  pi(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Or = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + Or,
  yi = "__reactProps$" + Or,
  Rt = "__reactContainer$" + Or,
  Rl = "__reactEvents$" + Or,
  hw = "__reactListeners$" + Or,
  mw = "__reactHandles$" + Or;
function Tn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wf(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Wf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ni(e) {
  return (
    (e = e[yt] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Ns(e) {
  return e[yi] || null;
}
var Al = [],
  Kn = -1;
function pn(e) {
  return { current: e };
}
function q(e) {
  0 > Kn || ((e.current = Al[Kn]), (Al[Kn] = null), Kn--);
}
function Q(e, t) {
  Kn++, (Al[Kn] = e.current), (e.current = t);
}
var un = {},
  be = pn(un),
  Ve = pn(!1),
  Mn = un;
function dr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function qo() {
  q(Ve), q(be);
}
function Kf(e, t, n) {
  if (be.current !== un) throw Error(O(168));
  Q(be, t), Q(Ve, n);
}
function Rm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, J0(e) || "Unknown", i));
  return ae({}, n, r);
}
function Zo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (Mn = be.current),
    Q(be, e),
    Q(Ve, Ve.current),
    !0
  );
}
function Gf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Rm(e, t, Mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Ve),
      q(be),
      Q(be, e))
    : q(Ve),
    Q(Ve, n);
}
var Ct = null,
  zs = !1,
  _a = !1;
function Am(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function vw(e) {
  (zs = !0), Am(e);
}
function hn() {
  if (!_a && Ct !== null) {
    _a = !0;
    var e = 0,
      t = K;
    try {
      var n = Ct;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (zs = !1);
    } catch (i) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), sm(Fu, hn), i);
    } finally {
      (K = t), (_a = !1);
    }
  }
  return null;
}
var Gn = [],
  Qn = 0,
  Jo = null,
  es = 0,
  Je = [],
  et = 0,
  Ln = null,
  Ot = 1,
  bt = "";
function Sn(e, t) {
  (Gn[Qn++] = es), (Gn[Qn++] = Jo), (Jo = e), (es = t);
}
function Nm(e, t, n) {
  (Je[et++] = Ot), (Je[et++] = bt), (Je[et++] = Ln), (Ln = e);
  var r = Ot;
  e = bt;
  var i = 32 - ft(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - ft(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Ot = (1 << (32 - ft(t) + i)) | (n << i) | r),
      (bt = o + e);
  } else (Ot = (1 << o) | (n << i) | r), (bt = e);
}
function Yu(e) {
  e.return !== null && (Sn(e, 1), Nm(e, 1, 0));
}
function Xu(e) {
  for (; e === Jo; )
    (Jo = Gn[--Qn]), (Gn[Qn] = null), (es = Gn[--Qn]), (Gn[Qn] = null);
  for (; e === Ln; )
    (Ln = Je[--et]),
      (Je[et] = null),
      (bt = Je[--et]),
      (Je[et] = null),
      (Ot = Je[--et]),
      (Je[et] = null);
}
var Ue = null,
  He = null,
  ee = !1,
  ct = null;
function zm(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (He = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ln !== null ? { id: Ot, overflow: bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zl(e) {
  if (ee) {
    var t = He;
    if (t) {
      var n = t;
      if (!Qf(e, t)) {
        if (Nl(e)) throw Error(O(418));
        t = tn(n.nextSibling);
        var r = Ue;
        t && Qf(e, t)
          ? zm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (Ue = e));
      }
    } else {
      if (Nl(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (Ue = e);
    }
  }
}
function Yf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function lo(e) {
  if (e !== Ue) return !1;
  if (!ee) return Yf(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !jl(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (Nl(e)) throw (Im(), Error(O(418)));
    for (; t; ) zm(e, t), (t = tn(t.nextSibling));
  }
  if ((Yf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = Ue ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function Im() {
  for (var e = He; e; ) e = tn(e.nextSibling);
}
function pr() {
  (He = Ue = null), (ee = !1);
}
function qu(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var gw = It.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ts = pn(null),
  ns = null,
  Yn = null,
  Zu = null;
function Ju() {
  Zu = Yn = ns = null;
}
function ec(e) {
  var t = ts.current;
  q(ts), (e._currentValue = t);
}
function Il(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ar(e, t) {
  (ns = e),
    (Zu = Yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (Zu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
      if (ns === null) throw Error(O(308));
      (Yn = e), (ns.dependencies = { lanes: 0, firstContext: e });
    } else Yn = Yn.next = e;
  return t;
}
var kn = null;
function tc(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function Vm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), tc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    At(e, r)
  );
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ut = !1;
function nc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Fm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      At(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), tc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    At(e, n)
  );
}
function bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
  }
}
function Xf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function rs(e, t, n, r) {
  var i = e.updateQueue;
  Ut = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        v = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((d = t), (v = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                f = y.call(v, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(v, f, d) : y),
                d == null)
              )
                break e;
              f = ae({}, f, d);
              break e;
            case 2:
              Ut = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (l = f)) : (c = c.next = v),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Dn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function qf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(O(191, i));
        i.call(r);
      }
    }
}
var $m = new Vh.Component().refs;
function Vl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Is = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = on(e),
      o = Mt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = nn(e, o, i)),
      t !== null && (dt(t, e, i, r), bo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = on(e),
      o = Mt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = nn(e, o, i)),
      t !== null && (dt(t, e, i, r), bo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = on(e),
      i = Mt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = nn(e, i, r)),
      t !== null && (dt(t, e, r, n), bo(t, e, r));
  },
};
function Zf(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mi(n, r) || !mi(i, o)
      : !0
  );
}
function Bm(e, t, n) {
  var r = !1,
    i = un,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = rt(o))
      : ((i = Fe(t) ? Mn : be.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? dr(e, i) : un)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Is),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Jf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Is.enqueueReplaceState(t, t.state, null);
}
function Fl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = $m), nc(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = rt(o))
    : ((o = Fe(t) ? Mn : be.current), (i.context = dr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Vl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Is.enqueueReplaceState(i, i.state, null),
      rs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === $m && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function uo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ed(e) {
  var t = e._init;
  return t(e._payload);
}
function Hm(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = sn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, m, w) {
    return p === null || p.tag !== 6
      ? ((p = Da(m, h.mode, w)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function l(h, p, m, w) {
    var S = m.type;
    return S === $n
      ? c(h, p, m.props.children, w, m.key)
      : p !== null &&
        (p.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Ht &&
            ed(S) === p.type))
      ? ((w = i(p, m.props)), (w.ref = zr(h, p, m)), (w.return = h), w)
      : ((w = Ao(m.type, m.key, m.props, null, h.mode, w)),
        (w.ref = zr(h, p, m)),
        (w.return = h),
        w);
  }
  function u(h, p, m, w) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Ra(m, h.mode, w)), (p.return = h), p)
      : ((p = i(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, w, S) {
    return p === null || p.tag !== 7
      ? ((p = On(m, h.mode, w, S)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function f(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Da("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Zi:
          return (
            (m = Ao(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = zr(h, null, p)),
            (m.return = h),
            m
          );
        case Fn:
          return (p = Ra(p, h.mode, m)), (p.return = h), p;
        case Ht:
          var w = p._init;
          return f(h, w(p._payload), m);
      }
      if (Br(p) || jr(p))
        return (p = On(p, h.mode, m, null)), (p.return = h), p;
      uo(h, p);
    }
    return null;
  }
  function d(h, p, m, w) {
    var S = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : a(h, p, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Zi:
          return m.key === S ? l(h, p, m, w) : null;
        case Fn:
          return m.key === S ? u(h, p, m, w) : null;
        case Ht:
          return (S = m._init), d(h, p, S(m._payload), w);
      }
      if (Br(m) || jr(m)) return S !== null ? null : c(h, p, m, w, null);
      uo(h, m);
    }
    return null;
  }
  function v(h, p, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (h = h.get(m) || null), a(p, h, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Zi:
          return (h = h.get(w.key === null ? m : w.key) || null), l(p, h, w, S);
        case Fn:
          return (h = h.get(w.key === null ? m : w.key) || null), u(p, h, w, S);
        case Ht:
          var P = w._init;
          return v(h, p, m, P(w._payload), S);
      }
      if (Br(w) || jr(w)) return (h = h.get(m) || null), c(p, h, w, S, null);
      uo(p, w);
    }
    return null;
  }
  function y(h, p, m, w) {
    for (
      var S = null, P = null, E = p, _ = (p = 0), C = null;
      E !== null && _ < m.length;
      _++
    ) {
      E.index > _ ? ((C = E), (E = null)) : (C = E.sibling);
      var k = d(h, E, m[_], w);
      if (k === null) {
        E === null && (E = C);
        break;
      }
      e && E && k.alternate === null && t(h, E),
        (p = o(k, p, _)),
        P === null ? (S = k) : (P.sibling = k),
        (P = k),
        (E = C);
    }
    if (_ === m.length) return n(h, E), ee && Sn(h, _), S;
    if (E === null) {
      for (; _ < m.length; _++)
        (E = f(h, m[_], w)),
          E !== null &&
            ((p = o(E, p, _)), P === null ? (S = E) : (P.sibling = E), (P = E));
      return ee && Sn(h, _), S;
    }
    for (E = r(h, E); _ < m.length; _++)
      (C = v(E, h, _, m[_], w)),
        C !== null &&
          (e && C.alternate !== null && E.delete(C.key === null ? _ : C.key),
          (p = o(C, p, _)),
          P === null ? (S = C) : (P.sibling = C),
          (P = C));
    return (
      e &&
        E.forEach(function (j) {
          return t(h, j);
        }),
      ee && Sn(h, _),
      S
    );
  }
  function g(h, p, m, w) {
    var S = jr(m);
    if (typeof S != "function") throw Error(O(150));
    if (((m = S.call(m)), m == null)) throw Error(O(151));
    for (
      var P = (S = null), E = p, _ = (p = 0), C = null, k = m.next();
      E !== null && !k.done;
      _++, k = m.next()
    ) {
      E.index > _ ? ((C = E), (E = null)) : (C = E.sibling);
      var j = d(h, E, k.value, w);
      if (j === null) {
        E === null && (E = C);
        break;
      }
      e && E && j.alternate === null && t(h, E),
        (p = o(j, p, _)),
        P === null ? (S = j) : (P.sibling = j),
        (P = j),
        (E = C);
    }
    if (k.done) return n(h, E), ee && Sn(h, _), S;
    if (E === null) {
      for (; !k.done; _++, k = m.next())
        (k = f(h, k.value, w)),
          k !== null &&
            ((p = o(k, p, _)), P === null ? (S = k) : (P.sibling = k), (P = k));
      return ee && Sn(h, _), S;
    }
    for (E = r(h, E); !k.done; _++, k = m.next())
      (k = v(E, h, _, k.value, w)),
        k !== null &&
          (e && k.alternate !== null && E.delete(k.key === null ? _ : k.key),
          (p = o(k, p, _)),
          P === null ? (S = k) : (P.sibling = k),
          (P = k));
    return (
      e &&
        E.forEach(function (D) {
          return t(h, D);
        }),
      ee && Sn(h, _),
      S
    );
  }
  function x(h, p, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === $n &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Zi:
          e: {
            for (var S = m.key, P = p; P !== null; ) {
              if (P.key === S) {
                if (((S = m.type), S === $n)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = i(P, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Ht &&
                    ed(S) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = i(P, m.props)),
                    (p.ref = zr(h, P, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            m.type === $n
              ? ((p = On(m.props.children, h.mode, w, m.key)),
                (p.return = h),
                (h = p))
              : ((w = Ao(m.type, m.key, m.props, null, h.mode, w)),
                (w.ref = zr(h, p, m)),
                (w.return = h),
                (h = w));
          }
          return s(h);
        case Fn:
          e: {
            for (P = m.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Ra(m, h.mode, w)), (p.return = h), (h = p);
          }
          return s(h);
        case Ht:
          return (P = m._init), x(h, p, P(m._payload), w);
      }
      if (Br(m)) return y(h, p, m, w);
      if (jr(m)) return g(h, p, m, w);
      uo(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = Da(m, h.mode, w)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return x;
}
var hr = Hm(!0),
  Um = Hm(!1),
  zi = {},
  St = pn(zi),
  wi = pn(zi),
  Si = pn(zi);
function En(e) {
  if (e === zi) throw Error(O(174));
  return e;
}
function rc(e, t) {
  switch ((Q(Si, t), Q(wi, e), Q(St, zi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : yl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = yl(t, e));
  }
  q(St), Q(St, t);
}
function mr() {
  q(St), q(wi), q(Si);
}
function Wm(e) {
  En(Si.current);
  var t = En(St.current),
    n = yl(t, e.type);
  t !== n && (Q(wi, e), Q(St, n));
}
function ic(e) {
  wi.current === e && (q(St), q(wi));
}
var ie = pn(0);
function is(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ca = [];
function oc() {
  for (var e = 0; e < Ca.length; e++)
    Ca[e]._workInProgressVersionPrimary = null;
  Ca.length = 0;
}
var Mo = It.ReactCurrentDispatcher,
  Oa = It.ReactCurrentBatchConfig,
  jn = 0,
  se = null,
  ve = null,
  ye = null,
  os = !1,
  Jr = !1,
  xi = 0,
  yw = 0;
function ke() {
  throw Error(O(321));
}
function sc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function ac(e, t, n, r, i, o) {
  if (
    ((jn = o),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mo.current = e === null || e.memoizedState === null ? Pw : Tw),
    (e = n(r, i)),
    Jr)
  ) {
    o = 0;
    do {
      if (((Jr = !1), (xi = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (ye = ve = null),
        (t.updateQueue = null),
        (Mo.current = kw),
        (e = n(r, i));
    } while (Jr);
  }
  if (
    ((Mo.current = ss),
    (t = ve !== null && ve.next !== null),
    (jn = 0),
    (ye = ve = se = null),
    (os = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function lc() {
  var e = xi !== 0;
  return (xi = 0), e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function it() {
  if (ve === null) {
    var e = se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = ye === null ? se.memoizedState : ye.next;
  if (t !== null) (ye = t), (ve = e);
  else {
    if (e === null) throw Error(O(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      ye === null ? (se.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function Pi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ba(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = ve,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((jn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (se.lanes |= c),
          (Dn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      pt(r, t.memoizedState) || (Ie = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (se.lanes |= o), (Dn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ma(e) {
  var t = it(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    pt(o, t.memoizedState) || (Ie = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Km() {}
function Gm(e, t) {
  var n = se,
    r = it(),
    i = t(),
    o = !pt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ie = !0)),
    (r = r.queue),
    uc(Xm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ti(9, Ym.bind(null, n, r, i, t), void 0, null),
      we === null)
    )
      throw Error(O(349));
    jn & 30 || Qm(n, t, i);
  }
  return i;
}
function Qm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ym(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), qm(t) && Zm(e);
}
function Xm(e, t, n) {
  return n(function () {
    qm(t) && Zm(e);
  });
}
function qm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Zm(e) {
  var t = At(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function td(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = xw.bind(null, se, e)),
    [t.memoizedState, e]
  );
}
function Ti(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Jm() {
  return it().memoizedState;
}
function Lo(e, t, n, r) {
  var i = vt();
  (se.flags |= e),
    (i.memoizedState = Ti(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vs(e, t, n, r) {
  var i = it();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ve !== null) {
    var s = ve.memoizedState;
    if (((o = s.destroy), r !== null && sc(r, s.deps))) {
      i.memoizedState = Ti(t, n, o, r);
      return;
    }
  }
  (se.flags |= e), (i.memoizedState = Ti(1 | t, n, o, r));
}
function nd(e, t) {
  return Lo(8390656, 8, e, t);
}
function uc(e, t) {
  return Vs(2048, 8, e, t);
}
function ev(e, t) {
  return Vs(4, 2, e, t);
}
function tv(e, t) {
  return Vs(4, 4, e, t);
}
function nv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function rv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vs(4, 4, nv.bind(null, t, e), n)
  );
}
function cc() {}
function iv(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ov(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && sc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sv(e, t, n) {
  return jn & 21
    ? (pt(n, t) || ((n = um()), (se.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function ww(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Oa.transition;
  Oa.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Oa.transition = r);
  }
}
function av() {
  return it().memoizedState;
}
function Sw(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    lv(e))
  )
    uv(t, n);
  else if (((n = Vm(e, t, n, r)), n !== null)) {
    var i = De();
    dt(n, e, r, i), cv(n, t, r);
  }
}
function xw(e, t, n) {
  var r = on(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (lv(e)) uv(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), pt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), tc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vm(e, t, i, r)),
      n !== null && ((i = De()), dt(n, e, r, i), cv(n, t, r));
  }
}
function lv(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function uv(e, t) {
  Jr = os = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
  }
}
var ss = {
    readContext: rt,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Pw = {
    readContext: rt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: nd,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lo(4194308, 4, nv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Lo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sw.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: td,
    useDebugValue: cc,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = td(!1),
        t = e[0];
      return (e = ww.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = se,
        i = vt();
      if (ee) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(O(349));
        jn & 30 || Qm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        nd(Xm.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ti(9, Ym.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vt(),
        t = we.identifierPrefix;
      if (ee) {
        var n = bt,
          r = Ot;
        (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = yw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Tw = {
    readContext: rt,
    useCallback: iv,
    useContext: rt,
    useEffect: uc,
    useImperativeHandle: rv,
    useInsertionEffect: ev,
    useLayoutEffect: tv,
    useMemo: ov,
    useReducer: ba,
    useRef: Jm,
    useState: function () {
      return ba(Pi);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = it();
      return sv(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ba(Pi)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Km,
    useSyncExternalStore: Gm,
    useId: av,
    unstable_isNewReconciler: !1,
  },
  kw = {
    readContext: rt,
    useCallback: iv,
    useContext: rt,
    useEffect: uc,
    useImperativeHandle: rv,
    useInsertionEffect: ev,
    useLayoutEffect: tv,
    useMemo: ov,
    useReducer: Ma,
    useRef: Jm,
    useState: function () {
      return Ma(Pi);
    },
    useDebugValue: cc,
    useDeferredValue: function (e) {
      var t = it();
      return ve === null ? (t.memoizedState = e) : sv(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ma(Pi)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Km,
    useSyncExternalStore: Gm,
    useId: av,
    unstable_isNewReconciler: !1,
  };
function vr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Z0(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function La(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $l(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ew = typeof WeakMap == "function" ? WeakMap : Map;
function fv(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ls || ((ls = !0), (ql = r)), $l(e, t);
    }),
    n
  );
}
function dv(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        $l(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        $l(e, t),
          typeof r != "function" &&
            (rn === null ? (rn = new Set([this])) : rn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function rd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ew();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Vw.bind(null, e, t, n)), t.then(e, e));
}
function id(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function od(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mt(-1, 1)), (t.tag = 2), nn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var _w = It.ReactCurrentOwner,
  Ie = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Um(t, null, n, r) : hr(t, e.child, n, r);
}
function sd(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ar(t, i),
    (r = ac(e, t, n, r, o, i)),
    (n = lc()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ee && n && Yu(t), (t.flags |= 1), Le(e, t, r, i), t.child)
  );
}
function ad(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !yc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), pv(e, t, o, r, i))
      : ((e = Ao(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : mi), n(s, r) && e.ref === t.ref)
    )
      return Nt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = sn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pv(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (mi(o, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), Nt(e, t, i);
  }
  return Bl(e, t, n, r, i);
}
function hv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(qn, Be),
        (Be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(qn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Q(qn, Be),
        (Be |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(qn, Be),
      (Be |= r);
  return Le(e, t, i, n), t.child;
}
function mv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bl(e, t, n, r, i) {
  var o = Fe(n) ? Mn : be.current;
  return (
    (o = dr(t, o)),
    ar(t, i),
    (n = ac(e, t, n, r, o, i)),
    (r = lc()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ee && r && Yu(t), (t.flags |= 1), Le(e, t, n, i), t.child)
  );
}
function ld(e, t, n, r, i) {
  if (Fe(n)) {
    var o = !0;
    Zo(t);
  } else o = !1;
  if ((ar(t, i), t.stateNode === null))
    jo(e, t), Bm(t, n, r), Fl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = rt(u))
      : ((u = Fe(n) ? Mn : be.current), (u = dr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Jf(t, s, r, u)),
      (Ut = !1);
    var d = t.memoizedState;
    (s.state = d),
      rs(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ve.current || Ut
        ? (typeof c == "function" && (Vl(t, n, c, r), (l = t.memoizedState)),
          (a = Ut || Zf(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Fm(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : at(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = rt(l))
        : ((l = Fe(n) ? Mn : be.current), (l = dr(t, l)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Jf(t, s, r, l)),
      (Ut = !1),
      (d = t.memoizedState),
      (s.state = d),
      rs(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || Ve.current || Ut
      ? (typeof v == "function" && (Vl(t, n, v, r), (y = t.memoizedState)),
        (u = Ut || Zf(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hl(e, t, n, r, o, i);
}
function Hl(e, t, n, r, i, o) {
  mv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Gf(t, n, !1), Nt(e, t, o);
  (r = t.stateNode), (_w.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = hr(t, e.child, null, o)), (t.child = hr(t, null, a, o)))
      : Le(e, t, a, o),
    (t.memoizedState = r.state),
    i && Gf(t, n, !0),
    t.child
  );
}
function vv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Kf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Kf(e, t.context, !1),
    rc(e, t.containerInfo);
}
function ud(e, t, n, r, i) {
  return pr(), qu(i), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gv(e, t, n) {
  var r = t.pendingProps,
    i = ie.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    Q(ie, i & 1),
    e === null)
  )
    return (
      zl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Bs(s, r, 0, null)),
              (e = On(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Wl(n)),
              (t.memoizedState = Ul),
              e)
            : fc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Cw(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = sn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = sn(a, o)) : ((o = On(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Wl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ul),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = sn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function fc(e, t) {
  return (
    (t = Bs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function co(e, t, n, r) {
  return (
    r !== null && qu(r),
    hr(t, e.child, null, n),
    (e = fc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Cw(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = La(Error(O(422)))), co(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Bs({ mode: "visible", children: r.children }, i, 0, null)),
        (o = On(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && hr(t, e.child, null, s),
        (t.child.memoizedState = Wl(s)),
        (t.memoizedState = Ul),
        o);
  if (!(t.mode & 1)) return co(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(O(419))), (r = La(o, r, void 0)), co(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ie || a)) {
    if (((r = we), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), At(e, i), dt(r, e, i, -1));
    }
    return gc(), (r = La(Error(O(421)))), co(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (He = tn(i.nextSibling)),
      (Ue = t),
      (ee = !0),
      (ct = null),
      e !== null &&
        ((Je[et++] = Ot),
        (Je[et++] = bt),
        (Je[et++] = Ln),
        (Ot = e.id),
        (bt = e.overflow),
        (Ln = t)),
      (t = fc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Il(e.return, t, n);
}
function ja(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function yv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Le(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cd(e, n, t);
        else if (e.tag === 19) cd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && is(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ja(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && is(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ja(t, !0, n, null, o);
        break;
      case "together":
        ja(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Ow(e, t, n) {
  switch (t.tag) {
    case 3:
      vv(t), pr();
      break;
    case 5:
      Wm(t);
      break;
    case 1:
      Fe(t.type) && Zo(t);
      break;
    case 4:
      rc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Q(ts, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? gv(e, t, n)
          : (Q(ie, ie.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      Q(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Q(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), hv(e, t, n);
  }
  return Nt(e, t, n);
}
var wv, Kl, Sv, xv;
wv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Kl = function () {};
Sv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), En(St.current);
    var o = null;
    switch (n) {
      case "input":
        (i = hl(e, i)), (r = hl(e, r)), (o = []);
        break;
      case "select":
        (i = ae({}, i, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = gl(e, i)), (r = gl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xo);
    }
    wl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (li.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (li.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && X("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
xv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ir(e, t) {
  if (!ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bw(e, t, n) {
  var r = t.pendingProps;
  switch ((Xu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ee(t), null;
    case 1:
      return Fe(t.type) && qo(), Ee(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mr(),
        q(Ve),
        q(be),
        oc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (eu(ct), (ct = null)))),
        Kl(e, t),
        Ee(t),
        null
      );
    case 5:
      ic(t);
      var i = En(Si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Sv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return Ee(t), null;
        }
        if (((e = En(St.current)), lo(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[yt] = t), (r[yi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ur.length; i++) X(Ur[i], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              wf(r, o), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              xf(r, o), X("invalid", r);
          }
          wl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      ao(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      ao(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : li.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              Ji(r), Sf(r, o, !0);
              break;
            case "textarea":
              Ji(r), Pf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Xo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Qh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[yt] = t),
            (e[yi] = r),
            wv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Sl(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ur.length; i++) X(Ur[i], e);
                i = r;
                break;
              case "source":
                X("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (i = r);
                break;
              case "details":
                X("toggle", e), (i = r);
                break;
              case "input":
                wf(e, r), (i = hl(e, r)), X("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ae({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                xf(e, r), (i = gl(e, r)), X("invalid", e);
                break;
              default:
                i = r;
            }
            wl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? qh(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Yh(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ui(e, l)
                    : typeof l == "number" && ui(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (li.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && X("scroll", e)
                      : l != null && Au(e, o, l, s));
              }
            switch (n) {
              case "input":
                Ji(e), Sf(e, r, !1);
                break;
              case "textarea":
                Ji(e), Pf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? rr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      rr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Xo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) xv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = En(Si.current)), En(St.current), lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                ao(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ao(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Ee(t), null;
    case 13:
      if (
        (q(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ee && He !== null && t.mode & 1 && !(t.flags & 128))
          Im(), pr(), (t.flags |= 98560), (o = !1);
        else if (((o = lo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(O(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(O(317));
            o[yt] = t;
          } else
            pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ee(t), (o = !1);
        } else ct !== null && (eu(ct), (ct = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? ge === 0 && (ge = 3) : gc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ee(t),
          null);
    case 4:
      return (
        mr(), Kl(e, t), e === null && vi(t.stateNode.containerInfo), Ee(t), null
      );
    case 10:
      return ec(t.type._context), Ee(t), null;
    case 17:
      return Fe(t.type) && qo(), Ee(t), null;
    case 19:
      if ((q(ie), (o = t.memoizedState), o === null)) return Ee(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Ir(o, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = is(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ir(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            he() > gr &&
            ((t.flags |= 128), (r = !0), Ir(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = is(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ir(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ee)
            )
              return Ee(t), null;
          } else
            2 * he() - o.renderingStartTime > gr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ir(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = he()),
          (t.sibling = null),
          (n = ie.current),
          Q(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ee(t), null);
    case 22:
    case 23:
      return (
        vc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ee(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Mw(e, t) {
  switch ((Xu(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && qo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mr(),
        q(Ve),
        q(be),
        oc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ic(t), null;
    case 13:
      if ((q(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(O(340));
        pr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(ie), null;
    case 4:
      return mr(), null;
    case 10:
      return ec(t.type._context), null;
    case 22:
    case 23:
      return vc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fo = !1,
  Ce = !1,
  Lw = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function Xn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function Gl(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var fd = !1;
function jw(e, t) {
  if (((Ml = Go), (e = Em()), Qu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (v = f.firstChild) !== null;

            )
              (d = f), (f = v);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (v = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = v;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ll = { focusedElem: e, selectionRange: n }, Go = !1, L = t; L !== null; )
    if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (L = e);
    else
      for (; L !== null; ) {
        t = L;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    x = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : at(t.type, g),
                      x
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (w) {
          ce(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (L = e);
          break;
        }
        L = t.return;
      }
  return (y = fd), (fd = !1), y;
}
function ei(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Gl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Fs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ql(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Pv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Pv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[yi], delete t[Rl], delete t[hw], delete t[mw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Yl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Xo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yl(e, t, n), e = e.sibling; e !== null; ) Yl(e, t, n), (e = e.sibling);
}
function Xl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), (e = e.sibling);
}
var Se = null,
  ut = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) kv(e, t, n), (n = n.sibling);
}
function kv(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function")
    try {
      wt.onCommitFiberUnmount(js, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || Xn(n, t);
    case 6:
      var r = Se,
        i = ut;
      (Se = null),
        Vt(e, t, n),
        (Se = r),
        (ut = i),
        Se !== null &&
          (ut
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (ut
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ea(e.parentNode, n)
              : e.nodeType === 1 && Ea(e, n),
            pi(e))
          : Ea(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (i = ut),
        (Se = n.stateNode.containerInfo),
        (ut = !0),
        Vt(e, t, n),
        (Se = r),
        (ut = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Gl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (Xn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), Vt(e, t, n), (Ce = r))
        : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function pd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Lw()),
      t.forEach(function (r) {
        var i = $w.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Se = a.stateNode), (ut = !1);
              break e;
            case 3:
              (Se = a.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (Se = a.stateNode.containerInfo), (ut = !0);
              break e;
          }
          a = a.return;
        }
        if (Se === null) throw Error(O(160));
        kv(o, s, i), (Se = null), (ut = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ce(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ev(t, e), (t = t.sibling);
}
function Ev(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), ht(e), r & 4)) {
        try {
          ei(3, e, e.return), Fs(3, e);
        } catch (g) {
          ce(e, e.return, g);
        }
        try {
          ei(5, e, e.return);
        } catch (g) {
          ce(e, e.return, g);
        }
      }
      break;
    case 1:
      ot(t, e), ht(e), r & 512 && n !== null && Xn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        ht(e),
        r & 512 && n !== null && Xn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ui(i, "");
        } catch (g) {
          ce(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Kh(i, o),
              Sl(a, s);
            var u = Sl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? qh(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Yh(i, f)
                : c === "children"
                ? ui(i, f)
                : Au(i, c, f, u);
            }
            switch (a) {
              case "input":
                ml(i, o);
                break;
              case "textarea":
                Gh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? rr(i, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rr(i, !!o.multiple, o.defaultValue, !0)
                      : rr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[yi] = o;
          } catch (g) {
            ce(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ot(t, e), ht(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          ce(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pi(t.containerInfo);
        } catch (g) {
          ce(e, e.return, g);
        }
      break;
    case 4:
      ot(t, e), ht(e);
      break;
    case 13:
      ot(t, e),
        ht(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (hc = he())),
        r & 4 && pd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (u = Ce) || c), ot(t, e), (Ce = u)) : ot(t, e),
        ht(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (L = e, c = e.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ei(4, d, d.return);
                  break;
                case 1:
                  Xn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      ce(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Xn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    md(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (L = v)) : md(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Xh("display", s)));
              } catch (g) {
                ce(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                ce(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), ht(e), r & 4 && pd(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), ht(e);
  }
}
function ht(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Tv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ui(i, ""), (r.flags &= -33));
          var o = dd(e);
          Xl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = dd(e);
          Yl(e, a, s);
          break;
        default:
          throw Error(O(161));
      }
    } catch (l) {
      ce(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dw(e, t, n) {
  (L = e), _v(e);
}
function _v(e, t, n) {
  for (var r = (e.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || fo;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ce;
        a = fo;
        var u = Ce;
        if (((fo = s), (Ce = l) && !u))
          for (L = i; L !== null; )
            (s = L),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? vd(i)
                : l !== null
                ? ((l.return = s), (L = l))
                : vd(i);
        for (; o !== null; ) (L = o), _v(o), (o = o.sibling);
        (L = i), (fo = a), (Ce = u);
      }
      hd(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : hd(e);
  }
}
function hd(e) {
  for (; L !== null; ) {
    var t = L;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Fs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && qf(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                qf(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && pi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        Ce || (t.flags & 512 && Ql(t));
      } catch (d) {
        ce(t, t.return, d);
      }
    }
    if (t === e) {
      L = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function md(e) {
  for (; L !== null; ) {
    var t = L;
    if (t === e) {
      L = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (L = n);
      break;
    }
    L = t.return;
  }
}
function vd(e) {
  for (; L !== null; ) {
    var t = L;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Fs(4, t);
          } catch (l) {
            ce(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ce(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ql(t);
          } catch (l) {
            ce(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ql(t);
          } catch (l) {
            ce(t, s, l);
          }
      }
    } catch (l) {
      ce(t, t.return, l);
    }
    if (t === e) {
      L = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (L = a);
      break;
    }
    L = t.return;
  }
}
var Rw = Math.ceil,
  as = It.ReactCurrentDispatcher,
  dc = It.ReactCurrentOwner,
  nt = It.ReactCurrentBatchConfig,
  U = 0,
  we = null,
  me = null,
  Pe = 0,
  Be = 0,
  qn = pn(0),
  ge = 0,
  ki = null,
  Dn = 0,
  $s = 0,
  pc = 0,
  ti = null,
  ze = null,
  hc = 0,
  gr = 1 / 0,
  _t = null,
  ls = !1,
  ql = null,
  rn = null,
  po = !1,
  Xt = null,
  us = 0,
  ni = 0,
  Zl = null,
  Do = -1,
  Ro = 0;
function De() {
  return U & 6 ? he() : Do !== -1 ? Do : (Do = he());
}
function on(e) {
  return e.mode & 1
    ? U & 2 && Pe !== 0
      ? Pe & -Pe
      : gw.transition !== null
      ? (Ro === 0 && (Ro = um()), Ro)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vm(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < ni) throw ((ni = 0), (Zl = null), Error(O(185)));
  Ri(e, n, r),
    (!(U & 2) || e !== we) &&
      (e === we && (!(U & 2) && ($s |= n), ge === 4 && Gt(e, Pe)),
      $e(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((gr = he() + 500), zs && hn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  g1(e, t);
  var r = Ko(e, e === we ? Pe : 0);
  if (r === 0)
    n !== null && Ef(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ef(n), t === 1))
      e.tag === 0 ? vw(gd.bind(null, e)) : Am(gd.bind(null, e)),
        dw(function () {
          !(U & 6) && hn();
        }),
        (n = null);
    else {
      switch (cm(r)) {
        case 1:
          n = Fu;
          break;
        case 4:
          n = am;
          break;
        case 16:
          n = Wo;
          break;
        case 536870912:
          n = lm;
          break;
        default:
          n = Wo;
      }
      n = Rv(n, Cv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cv(e, t) {
  if (((Do = -1), (Ro = 0), U & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var r = Ko(e, e === we ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cs(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var o = bv();
    (we !== e || Pe !== t) && ((_t = null), (gr = he() + 500), Cn(e, t));
    do
      try {
        zw();
        break;
      } catch (a) {
        Ov(e, a);
      }
    while (!0);
    Ju(),
      (as.current = o),
      (U = i),
      me !== null ? (t = 0) : ((we = null), (Pe = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = El(e)), i !== 0 && ((r = i), (t = Jl(e, i)))), t === 1)
    )
      throw ((n = ki), Cn(e, 0), Gt(e, r), $e(e, he()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Aw(i) &&
          ((t = cs(e, r)),
          t === 2 && ((o = El(e)), o !== 0 && ((r = o), (t = Jl(e, o)))),
          t === 1))
      )
        throw ((n = ki), Cn(e, 0), Gt(e, r), $e(e, he()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          xn(e, ze, _t);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = hc + 500 - he()), 10 < t))
          ) {
            if (Ko(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Dl(xn.bind(null, e, ze, _t), t);
            break;
          }
          xn(e, ze, _t);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - ft(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Rw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Dl(xn.bind(null, e, ze, _t), r);
            break;
          }
          xn(e, ze, _t);
          break;
        case 5:
          xn(e, ze, _t);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return $e(e, he()), e.callbackNode === n ? Cv.bind(null, e) : null;
}
function Jl(e, t) {
  var n = ti;
  return (
    e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256),
    (e = cs(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && eu(t)),
    e
  );
}
function eu(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Aw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!pt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gt(e, t) {
  for (
    t &= ~pc,
      t &= ~$s,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function gd(e) {
  if (U & 6) throw Error(O(327));
  lr();
  var t = Ko(e, 0);
  if (!(t & 1)) return $e(e, he()), null;
  var n = cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = El(e);
    r !== 0 && ((t = r), (n = Jl(e, r)));
  }
  if (n === 1) throw ((n = ki), Cn(e, 0), Gt(e, t), $e(e, he()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, ze, _t),
    $e(e, he()),
    null
  );
}
function mc(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((gr = he() + 500), zs && hn());
  }
}
function Rn(e) {
  Xt !== null && Xt.tag === 0 && !(U & 6) && lr();
  var t = U;
  U |= 1;
  var n = nt.transition,
    r = K;
  try {
    if (((nt.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (nt.transition = n), (U = t), !(U & 6) && hn();
  }
}
function vc() {
  (Be = qn.current), q(qn);
}
function Cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fw(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Xu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qo();
          break;
        case 3:
          mr(), q(Ve), q(be), oc();
          break;
        case 5:
          ic(r);
          break;
        case 4:
          mr();
          break;
        case 13:
          q(ie);
          break;
        case 19:
          q(ie);
          break;
        case 10:
          ec(r.type._context);
          break;
        case 22:
        case 23:
          vc();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (me = e = sn(e.current, null)),
    (Pe = Be = t),
    (ge = 0),
    (ki = null),
    (pc = $s = Dn = 0),
    (ze = ti = null),
    kn !== null)
  ) {
    for (t = 0; t < kn.length; t++)
      if (((n = kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    kn = null;
  }
  return e;
}
function Ov(e, t) {
  do {
    var n = me;
    try {
      if ((Ju(), (Mo.current = ss), os)) {
        for (var r = se.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        os = !1;
      }
      if (
        ((jn = 0),
        (ye = ve = se = null),
        (Jr = !1),
        (xi = 0),
        (dc.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (ki = t), (me = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Pe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = id(s);
          if (v !== null) {
            (v.flags &= -257),
              od(v, s, a, o, t),
              v.mode & 1 && rd(o, u, t),
              (t = v),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              rd(o, u, t), gc();
              break e;
            }
            l = Error(O(426));
          }
        } else if (ee && a.mode & 1) {
          var x = id(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              od(x, s, a, o, t),
              qu(vr(l, a));
            break e;
          }
        }
        (o = l = vr(l, a)),
          ge !== 4 && (ge = 2),
          ti === null ? (ti = [o]) : ti.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = fv(o, l, t);
              Xf(o, h);
              break e;
            case 1:
              a = l;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (rn === null || !rn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = dv(o, a, t);
                Xf(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Lv(n);
    } catch (S) {
      (t = S), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bv() {
  var e = as.current;
  return (as.current = ss), e === null ? ss : e;
}
function gc() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    we === null || (!(Dn & 268435455) && !($s & 268435455)) || Gt(we, Pe);
}
function cs(e, t) {
  var n = U;
  U |= 2;
  var r = bv();
  (we !== e || Pe !== t) && ((_t = null), Cn(e, t));
  do
    try {
      Nw();
      break;
    } catch (i) {
      Ov(e, i);
    }
  while (!0);
  if ((Ju(), (U = n), (as.current = r), me !== null)) throw Error(O(261));
  return (we = null), (Pe = 0), ge;
}
function Nw() {
  for (; me !== null; ) Mv(me);
}
function zw() {
  for (; me !== null && !l1(); ) Mv(me);
}
function Mv(e) {
  var t = Dv(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lv(e) : (me = t),
    (dc.current = null);
}
function Lv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Mw(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (me = null);
        return;
      }
    } else if (((n = bw(n, t, Be)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function xn(e, t, n) {
  var r = K,
    i = nt.transition;
  try {
    (nt.transition = null), (K = 1), Iw(e, t, n, r);
  } finally {
    (nt.transition = i), (K = r);
  }
  return null;
}
function Iw(e, t, n, r) {
  do lr();
  while (Xt !== null);
  if (U & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (y1(e, o),
    e === we && ((me = we = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      po ||
      ((po = !0),
      Rv(Wo, function () {
        return lr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = nt.transition), (nt.transition = null);
    var s = K;
    K = 1;
    var a = U;
    (U |= 4),
      (dc.current = null),
      jw(e, n),
      Ev(n, e),
      iw(Ll),
      (Go = !!Ml),
      (Ll = Ml = null),
      (e.current = n),
      Dw(n),
      u1(),
      (U = a),
      (K = s),
      (nt.transition = o);
  } else e.current = n;
  if (
    (po && ((po = !1), (Xt = e), (us = i)),
    (o = e.pendingLanes),
    o === 0 && (rn = null),
    d1(n.stateNode),
    $e(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ls) throw ((ls = !1), (e = ql), (ql = null), e);
  return (
    us & 1 && e.tag !== 0 && lr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Zl ? ni++ : ((ni = 0), (Zl = e))) : (ni = 0),
    hn(),
    null
  );
}
function lr() {
  if (Xt !== null) {
    var e = cm(us),
      t = nt.transition,
      n = K;
    try {
      if (((nt.transition = null), (K = 16 > e ? 16 : e), Xt === null))
        var r = !1;
      else {
        if (((e = Xt), (Xt = null), (us = 0), U & 6)) throw Error(O(331));
        var i = U;
        for (U |= 4, L = e.current; L !== null; ) {
          var o = L,
            s = o.child;
          if (L.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        v = c.return;
                      if ((Pv(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (L = d);
                        break;
                      }
                      L = v;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ei(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (L = h);
                break e;
              }
              L = o.return;
            }
        }
        var p = e.current;
        for (L = p; L !== null; ) {
          s = L;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (L = m);
          else
            e: for (s = p; L !== null; ) {
              if (((a = L), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fs(9, a);
                  }
                } catch (S) {
                  ce(a, a.return, S);
                }
              if (a === s) {
                L = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (L = w);
                break e;
              }
              L = a.return;
            }
        }
        if (
          ((U = i), hn(), wt && typeof wt.onPostCommitFiberRoot == "function")
        )
          try {
            wt.onPostCommitFiberRoot(js, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (nt.transition = t);
    }
  }
  return !1;
}
function yd(e, t, n) {
  (t = vr(n, t)),
    (t = fv(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = De()),
    e !== null && (Ri(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) yd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        yd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rn === null || !rn.has(r)))
        ) {
          (e = vr(n, e)),
            (e = dv(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = De()),
            t !== null && (Ri(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Vw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Pe & n) === n &&
      (ge === 4 || (ge === 3 && (Pe & 130023424) === Pe && 500 > he() - hc)
        ? Cn(e, 0)
        : (pc |= n)),
    $e(e, t);
}
function jv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = no), (no <<= 1), !(no & 130023424) && (no = 4194304))
      : (t = 1));
  var n = De();
  (e = At(e, t)), e !== null && (Ri(e, t, n), $e(e, n));
}
function Fw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), jv(e, n);
}
function $w(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), jv(e, n);
}
var Dv;
Dv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), Ow(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), ee && t.flags & 1048576 && Nm(t, es, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jo(e, t), (e = t.pendingProps);
      var i = dr(t, be.current);
      ar(t, n), (i = ac(null, t, r, e, i, n));
      var o = lc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((o = !0), Zo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            nc(t),
            (i.updater = Is),
            (t.stateNode = i),
            (i._reactInternals = t),
            Fl(t, r, e, n),
            (t = Hl(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && Yu(t), Le(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (jo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Hw(r)),
          (e = at(r, e)),
          i)
        ) {
          case 0:
            t = Bl(null, t, r, e, n);
            break e;
          case 1:
            t = ld(null, t, r, e, n);
            break e;
          case 11:
            t = sd(null, t, r, e, n);
            break e;
          case 14:
            t = ad(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        Bl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        ld(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((vv(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Fm(e, t),
          rs(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = vr(Error(O(423)), t)), (t = ud(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = vr(Error(O(424)), t)), (t = ud(e, t, r, n, i));
            break e;
          } else
            for (
              He = tn(t.stateNode.containerInfo.firstChild),
                Ue = t,
                ee = !0,
                ct = null,
                n = Um(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pr(), r === i)) {
            t = Nt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wm(t),
        e === null && zl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        jl(r, i) ? (s = null) : o !== null && jl(r, o) && (t.flags |= 32),
        mv(e, t),
        Le(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && zl(t), null;
    case 13:
      return gv(e, t, n);
    case 4:
      return (
        rc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        sd(e, t, r, i, n)
      );
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Q(ts, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (pt(o.value, s)) {
            if (o.children === i.children && !Ve.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Mt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Il(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(O(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Il(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Le(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ar(t, n),
        (i = rt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = at(r, t.pendingProps)),
        (i = at(r.type, i)),
        ad(e, t, r, i, n)
      );
    case 15:
      return pv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        jo(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Zo(t)) : (e = !1),
        ar(t, n),
        Bm(t, r, i),
        Fl(t, r, i, n),
        Hl(null, t, r, !0, e, n)
      );
    case 19:
      return yv(e, t, n);
    case 22:
      return hv(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Rv(e, t) {
  return sm(e, t);
}
function Bw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tt(e, t, n, r) {
  return new Bw(e, t, n, r);
}
function yc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Hw(e) {
  if (typeof e == "function") return yc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zu)) return 11;
    if (e === Iu) return 14;
  }
  return 2;
}
function sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ao(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) yc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case $n:
        return On(n.children, i, o, t);
      case Nu:
        (s = 8), (i |= 8);
        break;
      case cl:
        return (
          (e = tt(12, n, t, i | 2)), (e.elementType = cl), (e.lanes = o), e
        );
      case fl:
        return (e = tt(13, n, t, i)), (e.elementType = fl), (e.lanes = o), e;
      case dl:
        return (e = tt(19, n, t, i)), (e.elementType = dl), (e.lanes = o), e;
      case Hh:
        return Bs(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $h:
              s = 10;
              break e;
            case Bh:
              s = 9;
              break e;
            case zu:
              s = 11;
              break e;
            case Iu:
              s = 14;
              break e;
            case Ht:
              (s = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function On(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function Bs(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = Hh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Da(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function Ra(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Uw(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ha(0)),
    (this.expirationTimes = ha(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ha(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function wc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Uw(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = tt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    nc(o),
    e
  );
}
function Ww(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Av(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return Rm(e, n, t);
  }
  return t;
}
function Nv(e, t, n, r, i, o, s, a, l) {
  return (
    (e = wc(n, r, !0, e, i, o, s, a, l)),
    (e.context = Av(null)),
    (n = e.current),
    (r = De()),
    (i = on(n)),
    (o = Mt(r, i)),
    (o.callback = t ?? null),
    nn(n, o, i),
    (e.current.lanes = i),
    Ri(e, i, r),
    $e(e, r),
    e
  );
}
function Hs(e, t, n, r) {
  var i = t.current,
    o = De(),
    s = on(i);
  return (
    (n = Av(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = nn(i, t, s)),
    e !== null && (dt(e, i, s, o), bo(e, i, s)),
    s
  );
}
function fs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sc(e, t) {
  wd(e, t), (e = e.alternate) && wd(e, t);
}
function Kw() {
  return null;
}
var zv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function xc(e) {
  this._internalRoot = e;
}
Us.prototype.render = xc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Hs(e, t, null, null);
};
Us.prototype.unmount = xc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rn(function () {
      Hs(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function Us(e) {
  this._internalRoot = e;
}
Us.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && mm(e);
  }
};
function Pc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ws(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sd() {}
function Gw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = fs(s);
        o.call(u);
      };
    }
    var s = Nv(t, r, e, 0, null, !1, !1, "", Sd);
    return (
      (e._reactRootContainer = s),
      (e[Rt] = s.current),
      vi(e.nodeType === 8 ? e.parentNode : e),
      Rn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = fs(l);
      a.call(u);
    };
  }
  var l = wc(e, 0, !1, null, null, !1, !1, "", Sd);
  return (
    (e._reactRootContainer = l),
    (e[Rt] = l.current),
    vi(e.nodeType === 8 ? e.parentNode : e),
    Rn(function () {
      Hs(t, l, n, r);
    }),
    l
  );
}
function Ks(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = fs(s);
        a.call(l);
      };
    }
    Hs(t, s, e, i);
  } else s = Gw(n, t, e, i, r);
  return fs(s);
}
fm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          ($u(t, n | 1), $e(t, he()), !(U & 6) && ((gr = he() + 500), hn()));
      }
      break;
    case 13:
      Rn(function () {
        var r = At(e, 1);
        if (r !== null) {
          var i = De();
          dt(r, e, 1, i);
        }
      }),
        Sc(e, 1);
  }
};
Bu = function (e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = De();
      dt(t, e, 134217728, n);
    }
    Sc(e, 134217728);
  }
};
dm = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = At(e, t);
    if (n !== null) {
      var r = De();
      dt(n, e, t, r);
    }
    Sc(e, t);
  }
};
pm = function () {
  return K;
};
hm = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Pl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ns(r);
            if (!i) throw Error(O(90));
            Wh(r), ml(r, i);
          }
        }
      }
      break;
    case "textarea":
      Gh(e, n);
      break;
    case "select":
      (t = n.value), t != null && rr(e, !!n.multiple, t, !1);
  }
};
em = mc;
tm = Rn;
var Qw = { usingClientEntryPoint: !1, Events: [Ni, Wn, Ns, Zh, Jh, mc] },
  Vr = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Yw = {
    bundleType: Vr.bundleType,
    version: Vr.version,
    rendererPackageName: Vr.rendererPackageName,
    rendererConfig: Vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = im(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Kw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ho.isDisabled && ho.supportsFiber)
    try {
      (js = ho.inject(Yw)), (wt = ho);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qw;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pc(t)) throw Error(O(200));
  return Ww(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Pc(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = zv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = wc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Rt] = t.current),
    vi(e.nodeType === 8 ? e.parentNode : e),
    new xc(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = im(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return Rn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Ws(t)) throw Error(O(200));
  return Ks(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Pc(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = zv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Nv(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Rt] = t.current),
    vi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Us(t);
};
Ge.render = function (e, t, n) {
  if (!Ws(t)) throw Error(O(200));
  return Ks(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Ws(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Rn(function () {
        Ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = mc;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ws(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ks(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function Iv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Iv);
    } catch (e) {
      console.error(e);
    }
}
Iv(), (Nh.exports = Ge);
var Vv = Nh.exports,
  xd = Vv;
(ll.createRoot = xd.createRoot), (ll.hydrateRoot = xd.hydrateRoot);
const Xw = () =>
    T.jsx("div", {
      name: "about",
      className:
        "pt-20 md:pt-0 w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white",
      children: T.jsxs("div", {
        className:
          "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full",
        children: [
          T.jsx("div", {
            children: T.jsx("p", {
              className:
                "text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500",
              children: "About Me...",
            }),
          }),
          T.jsxs("p", {
            className:
              "text-sm sm:text-base md:text-lg mt-6 sm:mt-10 text-justify",
            children: [
              "Hello there! I'm Prakhar Mathur, an Engineer based in",
              " ",
              T.jsx("span", { className: "text-orange-300", children: "IN" }),
              T.jsx("span", { className: "text-blue-500", children: "D" }),
              T.jsx("span", { className: "text-green-300", children: "IA" }),
              ", with a Bachelor's in Information Technology from Poornima College of Engineering. I thrive at the intersection of cloud infrastructure, DevOps, and reliability engineering, ensuring that systems not only stay up but stay fast, efficient, and resilient.",
              " ",
              T.jsx("span", {
                className: "font-semibold text-blue-300",
                children:
                  "I specialize in Kubernetes monitoring, cloud automation, and incident management, making sure applications don’t just run but run like a well-oiled machine. Whether it’s optimizing performance, automating alerts, or debugging production issues at 3 AM, I get the job done.",
              }),
            ],
          }),
          T.jsx("p", {
            className: "text-sm sm:text-base md:text-lg mt-4 text-justify",
            children:
              "For me, SRE isn’t just about fixing things—it’s about building better, self-healing systems that keep businesses running smoothly. I geek out over observability tools, container orchestration, and SLIs/SLAs, making sure users have a seamless experience while we crush downtime.",
          }),
          T.jsxs("p", {
            className: "text-sm sm:text-base md:text-lg mt-4 text-justify",
            children: [
              T.jsx("span", {
                className: "font-bold text-blue-300",
                children:
                  "When I’m not busy scaling Kubernetes clusters or setting up killer Grafana dashboards, you’ll find me tinkering with frontend development, exploring data science, or just chilling with some good Aussie humor (Oi! 😆).",
              }),
              " ",
              "Always up for new challenges, tech banter, and cool projects—let’s connect and make the internet a more reliable place! 💻✨",
            ],
          }),
        ],
      }),
    }),
  qw = () =>
    T.jsx("div", {
      name: "contact",
      className:
        "w-screen h-screen bg-gradient-to-t from-black to-gray-800 p-4 text-white",
      children: T.jsxs("div", {
        className:
          "flex flex-col justify-center max-w-screen-lg mx-auto h-full p-4",
        children: [
          T.jsxs("div", {
            className: "pb-8",
            children: [
              T.jsx("div", {
                className: "flex items-center gap-4",
                children: T.jsx("p", {
                  className:
                    "text-4xl font-bold  inline border-b-4 border-gray-500",
                  children: "Contact",
                }),
              }),
              T.jsxs("p", {
                className: "py-6 text-lg",
                children: [
                  "Submit the form below to get in touch with me or",
                  " ",
                  T.jsx("a", {
                    href: "mailto:mathurprakha1@gmail.com",
                    className: "text-cyan-400 hover:underline",
                    children: "Email me",
                  }),
                  " ",
                  "directly.",
                ],
              }),
            ],
          }),
          T.jsx("div", {
            className: "flex justify-center items-center",
            children: T.jsxs("form", {
              action: "#",
              method: "POST",
              className: "flex flex-col w-full md:w-1/2",
              children: [
                T.jsx("input", {
                  type: "text",
                  name: "name",
                  placeholder: "Enter your name",
                  className:
                    "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-400 transition duration-200",
                  required: !0,
                }),
                T.jsx("input", {
                  type: "email",
                  name: "email",
                  placeholder: "Enter your email",
                  className:
                    "my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-400 transition duration-200",
                  required: !0,
                }),
                T.jsx("textarea", {
                  name: "message",
                  placeholder: "Enter your message",
                  rows: "10",
                  className:
                    "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-400 transition duration-200",
                  required: !0,
                }),
                T.jsx("button", {
                  type: "submit",
                  className:
                    "text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 hover:shadow-lg transition duration-300",
                  children: "Let's talk",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  Zw = "./assets/hexagon_technology_sdn_bhd_logo-BNb8k9eD.jpeg",
  Jw = "./assets/logo-decurtis-corporation-ryFhlHtS.png",
  eS = () =>
    T.jsx("div", {
      name: "experience",
      className:
        "w-screen min-h-screen bg-gradient-to-b from-black to-gray-800 p-8 text-white",
      children: T.jsxs("div", {
        className: "max-w-screen-lg mx-auto flex flex-col justify-center",
        children: [
          T.jsx("div", {
            className: "pb-8",
            children: T.jsx("p", {
              className: "text-4xl font-bold inline border-b-4 border-gray-500",
              children: "Experience",
            }),
          }),
          [
            {
              company: "Hexagon Technology Sdn. Bdh.",
              role: "Site Reliability Engineer",
              duration: "01/2024 - Present",
              logo: Zw,
              responsibilities: [
                "Monitored and troubleshot applications and Kubernetes services using tools like Robusta, Argo CD, Lens, Graylog, and Kibana.",
                "Automated alerting for critical Kubernetes events using Prometheus and Alertmanager, reducing response time by 60%.",
                "Developed comprehensive dashboards and alerts in Grafana and New Relic to improve monitoring efficiency.",
                "Defined, monitored, and improved SLOs, SLIs, and SLAs to ensure alignment with business goals.",
                "Configured Prometheus alerts for Kubernetes workloads, monitoring pod crashes, deployment failures, resource exhaustion, and cluster health to enhance proactive incident management.",
              ],
            },
            {
              company: "Decurtis Corporation",
              role: "Associate Site Reliability Engineer",
              duration: "02/2023 - 12/2023",
              logo: Jw,
              responsibilities: [
                "Provided Level 1 & Level 2 production support using Chrome DevTools, SQL Queries, ELK Logs, Postman, Kafka, Kubernetes, and more.",
                "Developed an interactive SRE Tech Radar using ReactJS & TailwindCSS.",
                "Ensured data accuracy and consistency for PostgreSQL databases as a Data Quality Analyst.",
                "Developed Python automation to simplify microservice operations and monitoring.",
              ],
            },
          ].map((e, t) =>
            T.jsxs(
              "div",
              {
                className:
                  "flex flex-col md:flex-row items-center md:items-start mb-12",
                children: [
                  T.jsxs("div", {
                    className: "md:w-1/3 flex flex-col items-center",
                    children: [
                      T.jsx("img", {
                        src: e.logo,
                        alt: e.company,
                        className: "w-40 md:w-48 object-contain mb-4",
                      }),
                      T.jsx("h1", {
                        className: "text-lg md:text-xl font-bold text-center",
                        children: e.company,
                      }),
                      T.jsx("h2", {
                        className: "text-md md:text-lg text-center",
                        children: e.role,
                      }),
                      T.jsx("p", {
                        className:
                          "text-sm md:text-base text-gray-300 text-center mt-2",
                        children: e.duration,
                      }),
                    ],
                  }),
                  T.jsxs("div", {
                    className: "md:w-2/3 mt-6 md:mt-0 md:pl-6",
                    children: [
                      T.jsx("h1", {
                        className: "text-lg md:text-xl font-semibold mb-2",
                        children: "Roles & Responsibilities",
                      }),
                      T.jsx("ul", {
                        className: "text-sm md:text-base space-y-2",
                        children: e.responsibilities.map((n, r) =>
                          T.jsx(
                            "li",
                            { className: "list-disc list-inside", children: n },
                            r
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              },
              t
            )
          ),
        ],
      }),
    });
var Fv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Pd = qt.createContext && qt.createContext(Fv),
  an = function () {
    return (
      (an =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      an.apply(this, arguments)
    );
  },
  tS = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function $v(e) {
  return (
    e &&
    e.map(function (t, n) {
      return qt.createElement(t.tag, an({ key: n }, t.attr), $v(t.child));
    })
  );
}
function mn(e) {
  return function (t) {
    return qt.createElement(nS, an({ attr: an({}, e.attr) }, t), $v(e.child));
  };
}
function nS(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = tS(e, ["attr", "size", "title"]),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      qt.createElement(
        "svg",
        an(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: an(an({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && qt.createElement("title", null, o),
        e.children
      )
    );
  };
  return Pd !== void 0
    ? qt.createElement(Pd.Consumer, null, function (n) {
        return t(n);
      })
    : t(Fv);
}
function Bv(e) {
  return mn({
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z",
        },
      },
    ],
  })(e);
}
function Hv(e) {
  return mn({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(e);
}
function Uv(e) {
  return mn({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
      },
    ],
  })(e);
}
function rS(e) {
  return mn({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
        },
      },
    ],
  })(e);
}
function iS(e) {
  return mn({
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
        },
      },
    ],
  })(e);
}
function Td(e) {
  return mn({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
        },
      },
    ],
  })(e);
}
function Wv(e) {
  return mn({
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "2",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        },
      },
    ],
  })(e);
}
const oS = () => {
    const e = new Date().getFullYear();
    return T.jsxs("div", {
      name: "contact",
      className:
        " h-36 w-screen bg-gradient-to-b from-black to-black p-4 text-white",
      children: [
        T.jsx("hr", { className: "w-auto" }),
        T.jsxs("div", {
          className: " flex items-center justify-center mt-8 gap-10",
          children: [
            T.jsx("a", {
              href: "https://www.linkedin.com/in/mathurprakhar1/",
              children: T.jsx(Uv, { size: 30 }),
            }),
            T.jsx("a", { href: "", children: T.jsx(Hv, { size: 30 }) }),
            T.jsx("a", {
              href: "mailto:mathurprakhar1@gmail.com",
              children: T.jsx(Wv, { size: 30 }),
            }),
            T.jsx("a", { href: "", children: T.jsx(Bv, { size: 30 }) }),
          ],
        }),
        T.jsxs("p", {
          className: " text-center py-5",
          children: ["© ", e, " Prakhar Mathur. All Rights Reserved."],
        }),
      ],
    });
  },
  Kv = R.createContext({});
function sS(e) {
  const t = R.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Tc = R.createContext(null),
  Gv = R.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function aS(e = !0) {
  const t = R.useContext(Tc);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = R.useId();
  R.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = R.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const kc = typeof window < "u",
  lS = kc ? R.useLayoutEffect : R.useEffect,
  We = (e) => e;
let Qv = We;
function Ec(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const yr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Lt = (e) => e * 1e3,
  jt = (e) => e / 1e3,
  uS = { useManualTiming: !1 },
  mo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  kd = { value: null };
function cS(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(f) {
    s.has(f) && (c.schedule(f), e()), l++, f(a);
  }
  const c = {
    schedule: (f, d = !1, v = !1) => {
      const g = v && i ? n : r;
      return d && s.add(f), g.has(f) || g.add(f), f;
    },
    cancel: (f) => {
      r.delete(f), s.delete(f);
    },
    process: (f) => {
      if (((a = f), i)) {
        o = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && kd.value && kd.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(f));
    },
  };
  return c;
}
const fS = 40;
function Yv(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = mo.reduce((h, p) => ((h[p] = cS(o, t ? p : void 0)), h), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    v = () => {
      const h = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, fS), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(v);
    };
  return {
    schedule: mo.reduce((h, p) => {
      const m = s[p];
      return (h[p] = (w, S = !1, P = !1) => (n || y(), m.schedule(w, S, P))), h;
    }, {}),
    cancel: (h) => {
      for (let p = 0; p < mo.length; p++) s[mo[p]].cancel(h);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: Y,
    cancel: cn,
    state: xe,
    steps: Aa,
  } = Yv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : We, !0),
  Xv = R.createContext({ strict: !1 }),
  Ed = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  wr = {};
for (const e in Ed) wr[e] = { isEnabled: (t) => Ed[e].some((n) => !!t[n]) };
function dS(e) {
  for (const t in e) wr[t] = { ...wr[t], ...e[t] };
}
const pS = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function ds(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    pS.has(e)
  );
}
let qv = (e) => !ds(e);
function hS(e) {
  e && (qv = (t) => (t.startsWith("on") ? !ds(t) : e(t)));
}
try {
  hS(require("@emotion/is-prop-valid").default);
} catch {}
function mS(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((qv(i) ||
        (n === !0 && ds(i)) ||
        (!t && !ds(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function vS(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Gs = R.createContext({});
function Qs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ei(e) {
  return typeof e == "string" || Array.isArray(e);
}
const _c = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Cc = ["initial", ..._c];
function Ys(e) {
  return Qs(e.animate) || Cc.some((t) => Ei(e[t]));
}
function Zv(e) {
  return !!(Ys(e) || e.variants);
}
function gS(e, t) {
  if (Ys(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ei(n) ? n : void 0,
      animate: Ei(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function yS(e) {
  const { initial: t, animate: n } = gS(e, R.useContext(Gs));
  return R.useMemo(() => ({ initial: t, animate: n }), [_d(t), _d(n)]);
}
function _d(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const wS = Symbol.for("motionComponentSymbol");
function Zn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function SS(e, t, n) {
  return R.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Zn(n) && (n.current = r));
    },
    [t]
  );
}
const Oc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  xS = "framerAppearId",
  Jv = "data-" + Oc(xS),
  { schedule: bc } = Yv(queueMicrotask, !1),
  eg = R.createContext({});
function PS(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = R.useContext(Gs),
    l = R.useContext(Xv),
    u = R.useContext(Tc),
    c = R.useContext(Gv).reducedMotion,
    f = R.useRef(null);
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    v = R.useContext(eg);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    TS(f.current, n, i, v);
  const y = R.useRef(!1);
  R.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const g = n[Jv],
    x = R.useRef(
      !!g &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, g)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, g))
    );
  return (
    lS(() => {
      d &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        bc.render(d.render),
        x.current && d.animationState && d.animationState.animateChanges());
    }),
    R.useEffect(() => {
      d &&
        (!x.current && d.animationState && d.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var h;
            (h = window.MotionHandoffMarkAsComplete) === null ||
              h === void 0 ||
              h.call(window, g);
          }),
          (x.current = !1)));
    }),
    d
  );
}
function TS(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : tg(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Zn(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function tg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : tg(e.parent);
}
function kS({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var o, s;
  e && dS(e);
  function a(u, c) {
    let f;
    const d = { ...R.useContext(Gv), ...u, layoutId: ES(u) },
      { isStatic: v } = d,
      y = yS(u),
      g = r(u, v);
    if (!v && kc) {
      _S();
      const x = CS(d);
      (f = x.MeasureLayout),
        (y.visualElement = PS(i, g, d, t, x.ProjectionNode));
    }
    return T.jsxs(Gs.Provider, {
      value: y,
      children: [
        f && y.visualElement
          ? T.jsx(f, { visualElement: y.visualElement, ...d })
          : null,
        n(i, u, SS(g, y.visualElement, c), g, v, y.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof i == "string"
      ? i
      : `create(${
          (s = (o = i.displayName) !== null && o !== void 0 ? o : i.name) !==
            null && s !== void 0
            ? s
            : ""
        })`
  }`;
  const l = R.forwardRef(a);
  return (l[wS] = i), l;
}
function ES({ layoutId: e }) {
  const t = R.useContext(Kv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function _S(e, t) {
  R.useContext(Xv).strict;
}
function CS(e) {
  const { drag: t, layout: n } = wr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const ng = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Mc = ng("--"),
  OS = ng("var(--"),
  Lc = (e) => (OS(e) ? bS.test(e.split("/*")[0].trim()) : !1),
  bS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  _i = {};
function MS(e) {
  for (const t in e) (_i[t] = e[t]), Mc(t) && (_i[t].isCSSVariable = !0);
}
const br = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  In = new Set(br);
function rg(e, { layout: t, layoutId: n }) {
  return (
    In.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!_i[e] || e === "opacity"))
  );
}
const Oe = (e) => !!(e && e.getVelocity),
  ig = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  zt = (e, t, n) => (n > t ? t : n < e ? e : n),
  Mr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ci = { ...Mr, transform: (e) => zt(0, 1, e) },
  vo = { ...Mr, default: 1 },
  Ii = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Bt = Ii("deg"),
  xt = Ii("%"),
  V = Ii("px"),
  LS = Ii("vh"),
  jS = Ii("vw"),
  Cd = {
    ...xt,
    parse: (e) => xt.parse(e) / 100,
    transform: (e) => xt.transform(e * 100),
  },
  DS = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
  },
  RS = {
    rotate: Bt,
    rotateX: Bt,
    rotateY: Bt,
    rotateZ: Bt,
    scale: vo,
    scaleX: vo,
    scaleY: vo,
    scaleZ: vo,
    skew: Bt,
    skewX: Bt,
    skewY: Bt,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Ci,
    originX: Cd,
    originY: Cd,
    originZ: V,
  },
  Od = { ...Mr, transform: Math.round },
  jc = {
    ...DS,
    ...RS,
    zIndex: Od,
    size: V,
    fillOpacity: Ci,
    strokeOpacity: Ci,
    numOctaves: Od,
  },
  AS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  NS = br.length;
function zS(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < NS; o++) {
    const s = br[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = ig(a, jc[s]);
      if (!l) {
        i = !1;
        const c = AS[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Dc(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (In.has(l)) {
      s = !0;
      continue;
    } else if (Mc(l)) {
      i[l] = u;
      continue;
    } else {
      const c = ig(u, jc[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = zS(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Rc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function og(e, t, n) {
  for (const r in t) !Oe(t[r]) && !rg(r, n) && (e[r] = t[r]);
}
function IS({ transformTemplate: e }, t) {
  return R.useMemo(() => {
    const n = Rc();
    return Dc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function VS(e, t) {
  const n = e.style || {},
    r = {};
  return og(r, n, e), Object.assign(r, IS(e, t)), r;
}
function FS(e, t) {
  const n = {},
    r = VS(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const $S = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ac(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!($S.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const BS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  HS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function US(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? BS : HS;
  e[o.offset] = V.transform(-r);
  const s = V.transform(t),
    a = V.transform(n);
  e[o.array] = `${s} ${a}`;
}
function bd(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function WS(e, t, n) {
  const r = bd(t, e.x, e.width),
    i = bd(n, e.y, e.height);
  return `${r} ${i}`;
}
function Nc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f
) {
  if ((Dc(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: v, dimensions: y } = e;
  d.transform && (y && (v.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = WS(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && US(d, s, a, l, !1);
}
const sg = () => ({ ...Rc(), attrs: {} }),
  zc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function KS(e, t, n, r) {
  const i = R.useMemo(() => {
    const o = sg();
    return (
      Nc(o, t, zc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    og(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function GS(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (Ac(n) ? KS : FS)(r, o, s, n),
      u = mS(r, typeof n == "string", e),
      c = n !== R.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = R.useMemo(() => (Oe(f) ? f.get() : f), [f]);
    return R.createElement(n, { ...c, children: d });
  };
}
function Md(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Ic(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Md(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Md(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const tu = (e) => Array.isArray(e),
  QS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  YS = (e) => (tu(e) ? e[e.length - 1] || 0 : e);
function No(e) {
  const t = Oe(e) ? e.get() : e;
  return QS(t) ? t.toValue() : t;
}
function XS(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  o
) {
  const s = { latestValues: qS(r, i, o, e), renderState: t() };
  return (
    n &&
      ((s.onMount = (a) => n({ props: r, current: a, ...s })),
      (s.onUpdate = (a) => n(a))),
    s
  );
}
const ag = (e) => (t, n) => {
  const r = R.useContext(Gs),
    i = R.useContext(Tc),
    o = () => XS(e, t, r, i);
  return n ? o() : sS(o);
};
function qS(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = No(o[d]);
  let { initial: s, animate: a } = e;
  const l = Ys(e),
    u = Zv(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !Qs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let v = 0; v < d.length; v++) {
      const y = Ic(e, d[v]);
      if (y) {
        const { transitionEnd: g, transition: x, ...h } = y;
        for (const p in h) {
          let m = h[p];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[p] = m);
        }
        for (const p in g) i[p] = g[p];
      }
    }
  }
  return i;
}
function Vc(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Oe(i[s]) ||
      (t.style && Oe(t.style[s])) ||
      rg(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
const ZS = {
  useVisualState: ag({
    scrapeMotionValuesFromProps: Vc,
    createRenderState: Rc,
  }),
};
function lg(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function ug(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const cg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function fg(e, t, n, r) {
  ug(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(cg.has(i) ? i : Oc(i), t.attrs[i]);
}
function dg(e, t, n) {
  const r = Vc(e, t, n);
  for (const i in e)
    if (Oe(e[i]) || Oe(t[i])) {
      const o =
        br.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
const Ld = ["x", "y", "width", "height", "cx", "cy", "r"],
  JS = {
    useVisualState: ag({
      scrapeMotionValuesFromProps: dg,
      createRenderState: sg,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let o = !!e.drag;
        if (!o) {
          for (const a in i)
            if (In.has(a)) {
              o = !0;
              break;
            }
        }
        if (!o) return;
        let s = !t;
        if (t)
          for (let a = 0; a < Ld.length; a++) {
            const l = Ld[a];
            e[l] !== t[l] && (s = !0);
          }
        s &&
          Y.read(() => {
            lg(n, r),
              Y.render(() => {
                Nc(r, i, zc(n.tagName), e.transformTemplate), fg(n, r);
              });
          });
      },
    }),
  };
function e2(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(Ac(r) ? JS : ZS),
      preloadedFeatures: e,
      useRender: GS(i),
      createVisualElement: t,
      Component: r,
    };
    return kS(s);
  };
}
function Oi(e, t, n) {
  const r = e.getProps();
  return Ic(r, t, n !== void 0 ? n : r.custom, e);
}
const t2 = Ec(() => window.ScrollTimeline !== void 0);
class n2 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (t2() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class r2 extends n2 {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Fc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const nu = 2e4;
function pg(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < nu; ) (t += n), (r = e.next(t));
  return t >= nu ? 1 / 0 : t;
}
function $c(e) {
  return typeof e == "function";
}
function jd(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Bc = (e) => Array.isArray(e) && typeof e[0] == "number",
  i2 = { linearEasing: void 0 };
function o2(e, t) {
  const n = Ec(e);
  return () => {
    var r;
    return (r = i2[t]) !== null && r !== void 0 ? r : n();
  };
}
const ps = o2(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  hg = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++) r += e(yr(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function mg(e) {
  return !!(
    (typeof e == "function" && ps()) ||
    !e ||
    (typeof e == "string" && (e in ru || ps())) ||
    Bc(e) ||
    (Array.isArray(e) && e.every(mg))
  );
}
const Wr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  ru = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Wr([0, 0.65, 0.55, 1]),
    circOut: Wr([0.55, 0, 1, 0.45]),
    backIn: Wr([0.31, 0.01, 0.66, -0.59]),
    backOut: Wr([0.33, 1.53, 0.69, 0.99]),
  };
function vg(e, t) {
  if (e)
    return typeof e == "function" && ps()
      ? hg(e, t)
      : Bc(e)
      ? Wr(e)
      : Array.isArray(e)
      ? e.map((n) => vg(n, t) || ru.easeOut)
      : ru[e];
}
const st = { x: !1, y: !1 };
function gg() {
  return st.x || st.y;
}
function s2(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function yg(e, t) {
  const n = s2(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Dd(e) {
  return !(e.pointerType === "touch" || gg());
}
function a2(e, t, n = {}) {
  const [r, i, o] = yg(e, n),
    s = (a) => {
      if (!Dd(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != "function" || !l) return;
      const c = (f) => {
        Dd(f) && (u(f), l.removeEventListener("pointerleave", c));
      };
      l.addEventListener("pointerleave", c, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, i);
    }),
    o
  );
}
const wg = (e, t) => (t ? (e === t ? !0 : wg(e, t.parentElement)) : !1),
  Hc = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  l2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function u2(e) {
  return l2.has(e.tagName) || e.tabIndex !== -1;
}
const Kr = new WeakSet();
function Rd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Na(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const c2 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Rd(() => {
    if (Kr.has(n)) return;
    Na(n, "down");
    const i = Rd(() => {
        Na(n, "up");
      }),
      o = () => Na(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ad(e) {
  return Hc(e) && !gg();
}
function f2(e, t, n = {}) {
  const [r, i, o] = yg(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!Ad(a) || Kr.has(l)) return;
      Kr.add(l);
      const u = t(l, a),
        c = (v, y) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!Ad(v) || !Kr.has(l)) &&
              (Kr.delete(l), typeof u == "function" && u(v, { success: y }));
        },
        f = (v) => {
          c(v, n.useGlobalTarget || wg(l, v.target));
        },
        d = (v) => {
          c(v, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i);
    };
  return (
    r.forEach((a) => {
      !u2(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        a.addEventListener("focus", (u) => c2(u, i), i);
    }),
    o
  );
}
function d2(e) {
  return e === "x" || e === "y"
    ? st[e]
      ? null
      : ((st[e] = !0),
        () => {
          st[e] = !1;
        })
    : st.x || st.y
    ? null
    : ((st.x = st.y = !0),
      () => {
        st.x = st.y = !1;
      });
}
const Sg = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...br,
]);
let zo;
function p2() {
  zo = void 0;
}
const Pt = {
  now: () => (
    zo === void 0 &&
      Pt.set(
        xe.isProcessing || uS.useManualTiming ? xe.timestamp : performance.now()
      ),
    zo
  ),
  set: (e) => {
    (zo = e), queueMicrotask(p2);
  },
};
function Uc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Wc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Kc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Uc(this.subscriptions, t), () => Wc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function xg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Nd = 30,
  h2 = (e) => !isNaN(parseFloat(e));
class m2 {
  constructor(t, n = {}) {
    (this.version = "12.4.1"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = Pt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Pt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = h2(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Kc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Y.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Pt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Nd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Nd);
    return xg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function bi(e, t) {
  return new m2(e, t);
}
function v2(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, bi(n));
}
function g2(e, t) {
  const n = Oi(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = YS(o[s]);
    v2(e, s, a);
  }
}
function y2(e) {
  return !!(Oe(e) && e.add);
}
function iu(e, t) {
  const n = e.getValue("willChange");
  if (y2(n)) return n.add(t);
}
function Pg(e) {
  return e.props[Jv];
}
const Tg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  w2 = 1e-7,
  S2 = 12;
function x2(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Tg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > w2 && ++a < S2);
  return s;
}
function Vi(e, t, n, r) {
  if (e === t && n === r) return We;
  const i = (o) => x2(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Tg(i(o), t, r));
}
const kg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Eg = (e) => (t) => 1 - e(1 - t),
  _g = Vi(0.33, 1.53, 0.69, 0.99),
  Gc = Eg(_g),
  Cg = kg(Gc),
  Og = (e) =>
    (e *= 2) < 1 ? 0.5 * Gc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Qc = (e) => 1 - Math.sin(Math.acos(e)),
  bg = Eg(Qc),
  Mg = kg(Qc),
  Lg = (e) => /^0[^.\s]+$/u.test(e);
function P2(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Lg(e)
    : !0;
}
const ri = (e) => Math.round(e * 1e5) / 1e5,
  Yc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function T2(e) {
  return e == null;
}
const k2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Xc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && k2.test(n) && n.startsWith(e)) ||
      (t && !T2(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  jg = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Yc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  E2 = (e) => zt(0, 255, e),
  za = { ...Mr, transform: (e) => Math.round(E2(e)) },
  _n = {
    test: Xc("rgb", "red"),
    parse: jg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      za.transform(e) +
      ", " +
      za.transform(t) +
      ", " +
      za.transform(n) +
      ", " +
      ri(Ci.transform(r)) +
      ")",
  };
function _2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ou = { test: Xc("#"), parse: _2, transform: _n.transform },
  Jn = {
    test: Xc("hsl", "hue"),
    parse: jg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      xt.transform(ri(t)) +
      ", " +
      xt.transform(ri(n)) +
      ", " +
      ri(Ci.transform(r)) +
      ")",
  },
  _e = {
    test: (e) => _n.test(e) || ou.test(e) || Jn.test(e),
    parse: (e) =>
      _n.test(e) ? _n.parse(e) : Jn.test(e) ? Jn.parse(e) : ou.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? _n.transform(e)
        : Jn.transform(e),
  },
  C2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function O2(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Yc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(C2)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Dg = "number",
  Rg = "color",
  b2 = "var",
  M2 = "var(",
  zd = "${}",
  L2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Mi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      L2,
      (l) => (
        _e.test(l)
          ? (r.color.push(o), i.push(Rg), n.push(_e.parse(l)))
          : l.startsWith(M2)
          ? (r.var.push(o), i.push(b2), n.push(l))
          : (r.number.push(o), i.push(Dg), n.push(parseFloat(l))),
        ++o,
        zd
      )
    )
    .split(zd);
  return { values: n, split: a, indexes: r, types: i };
}
function Ag(e) {
  return Mi(e).values;
}
function Ng(e) {
  const { split: t, types: n } = Mi(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Dg
          ? (o += ri(i[s]))
          : a === Rg
          ? (o += _e.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const j2 = (e) => (typeof e == "number" ? 0 : e);
function D2(e) {
  const t = Ag(e);
  return Ng(e)(t.map(j2));
}
const fn = {
    test: O2,
    parse: Ag,
    createTransformer: Ng,
    getAnimatableNone: D2,
  },
  R2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function A2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Yc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = R2.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const N2 = /\b([a-z-]*)\(.*?\)/gu,
  su = {
    ...fn,
    getAnimatableNone: (e) => {
      const t = e.match(N2);
      return t ? t.map(A2).join(" ") : e;
    },
  },
  z2 = {
    ...jc,
    color: _e,
    backgroundColor: _e,
    outlineColor: _e,
    fill: _e,
    stroke: _e,
    borderColor: _e,
    borderTopColor: _e,
    borderRightColor: _e,
    borderBottomColor: _e,
    borderLeftColor: _e,
    filter: su,
    WebkitFilter: su,
  },
  qc = (e) => z2[e];
function zg(e, t) {
  let n = qc(e);
  return (
    n !== su && (n = fn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const I2 = new Set(["auto", "none", "0"]);
function V2(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !I2.has(o) && Mi(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = zg(n, i);
}
const Id = (e) => e === Mr || e === V,
  Vd = (e, t) => parseFloat(e.split(", ")[t]),
  Fd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Vd(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Vd(o[1], e) : 0;
      }
    },
  F2 = new Set(["x", "y", "z"]),
  $2 = br.filter((e) => !F2.has(e));
function B2(e) {
  const t = [];
  return (
    $2.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Sr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Fd(4, 13),
  y: Fd(5, 14),
};
Sr.translateX = Sr.x;
Sr.translateY = Sr.y;
const bn = new Set();
let au = !1,
  lu = !1;
function Ig() {
  if (lu) {
    const e = Array.from(bn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = B2(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (lu = !1), (au = !1), bn.forEach((e) => e.complete()), bn.clear();
}
function Vg() {
  bn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (lu = !0);
  });
}
function H2() {
  Vg(), Ig();
}
class Zc {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (bn.add(this), au || ((au = !0), Y.read(Vg), Y.resolveKeyframes(Ig)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      bn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), bn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Fg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  U2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function W2(e) {
  const t = U2.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function $g(e, t, n = 1) {
  const [r, i] = W2(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Fg(s) ? parseFloat(s) : s;
  }
  return Lc(i) ? $g(i, t, n + 1) : i;
}
const Bg = (e) => (t) => t.test(e),
  K2 = { test: (e) => e === "auto", parse: (e) => e },
  Hg = [Mr, V, xt, Bt, jS, LS, K2],
  $d = (e) => Hg.find(Bg(e));
class Ug extends Zc {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Lc(u))) {
        const c = $g(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Sg.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = $d(i),
      a = $d(o);
    if (s !== a)
      if (Id(s) && Id(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) P2(t[i]) && r.push(i);
    r.length && V2(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Sr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = Sr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
const Bd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (fn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function G2(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Q2(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Bd(i, t),
    a = Bd(o, t);
  return !s || !a ? !1 : G2(e) || ((n === "spring" || $c(n)) && r);
}
const Y2 = (e) => e !== null;
function Xs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(Y2),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const X2 = 40;
class Wg {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Pt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > X2
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && H2(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Pt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Q2(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l && l(Xs(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const oe = (e, t, n) => e + (t - e) * n;
function Ia(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function q2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ia(l, a, e + 1 / 3)), (o = Ia(l, a, e)), (s = Ia(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function hs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Va = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Z2 = [ou, _n, Jn],
  J2 = (e) => Z2.find((t) => t.test(e));
function Hd(e) {
  const t = J2(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Jn && (n = q2(n)), n;
}
const Ud = (e, t) => {
    const n = Hd(e),
      r = Hd(t);
    if (!n || !r) return hs(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = Va(n.red, r.red, o)),
      (i.green = Va(n.green, r.green, o)),
      (i.blue = Va(n.blue, r.blue, o)),
      (i.alpha = oe(n.alpha, r.alpha, o)),
      _n.transform(i)
    );
  },
  ex = (e, t) => (n) => t(e(n)),
  Fi = (...e) => e.reduce(ex),
  uu = new Set(["none", "hidden"]);
function tx(e, t) {
  return uu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function nx(e, t) {
  return (n) => oe(e, t, n);
}
function Jc(e) {
  return typeof e == "number"
    ? nx
    : typeof e == "string"
    ? Lc(e)
      ? hs
      : _e.test(e)
      ? Ud
      : ox
    : Array.isArray(e)
    ? Kg
    : typeof e == "object"
    ? _e.test(e)
      ? Ud
      : rx
    : hs;
}
function Kg(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Jc(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function rx(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Jc(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function ix(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const ox = (e, t) => {
  const n = fn.createTransformer(t),
    r = Mi(e),
    i = Mi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (uu.has(e) && !i.values.length) || (uu.has(t) && !r.values.length)
      ? tx(e, t)
      : Fi(Kg(ix(r, i), i.values), n)
    : hs(e, t);
};
function Gg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? oe(e, t, n)
    : Jc(e)(e, t);
}
const sx = 5;
function Qg(e, t, n) {
  const r = Math.max(t - sx, 0);
  return xg(n - e(r), t - r);
}
const le = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Wd = 0.001;
function ax({
  duration: e = le.duration,
  bounce: t = le.bounce,
  velocity: n = le.velocity,
  mass: r = le.mass,
}) {
  let i,
    o,
    s = 1 - t;
  (s = zt(le.minDamping, le.maxDamping, s)),
    (e = zt(le.minDuration, le.maxDuration, jt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            v = cu(u, s),
            y = Math.exp(-f);
          return Wd - (d / v) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            g = cu(Math.pow(u, 2), s);
          return ((-i(u) + Wd > 0 ? -1 : 1) * ((d - v) * y)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -0.001 + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = ux(i, o, a);
  if (((e = Lt(e)), isNaN(l)))
    return { stiffness: le.stiffness, damping: le.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const lx = 12;
function ux(e, t, n) {
  let r = n;
  for (let i = 1; i < lx; i++) r = r - e(r) / t(r);
  return r;
}
function cu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const cx = ["duration", "bounce"],
  fx = ["stiffness", "damping", "mass"];
function Kd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function dx(e) {
  let t = {
    velocity: le.velocity,
    stiffness: le.stiffness,
    damping: le.damping,
    mass: le.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Kd(e, fx) && Kd(e, cx))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * zt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: le.mass, stiffness: i, damping: o };
    } else {
      const n = ax(e);
      (t = { ...t, ...n, mass: le.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Yg(e = le.visualDuration, t = le.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: v,
    } = dx({ ...n, velocity: -jt(n.velocity || 0) }),
    y = d || 0,
    g = u / (2 * Math.sqrt(l * c)),
    x = s - o,
    h = jt(Math.sqrt(l / c)),
    p = Math.abs(x) < 5;
  r || (r = p ? le.restSpeed.granular : le.restSpeed.default),
    i || (i = p ? le.restDelta.granular : le.restDelta.default);
  let m;
  if (g < 1) {
    const S = cu(h, g);
    m = (P) => {
      const E = Math.exp(-g * h * P);
      return (
        s - E * (((y + g * h * x) / S) * Math.sin(S * P) + x * Math.cos(S * P))
      );
    };
  } else if (g === 1) m = (S) => s - Math.exp(-h * S) * (x + (y + h * x) * S);
  else {
    const S = h * Math.sqrt(g * g - 1);
    m = (P) => {
      const E = Math.exp(-g * h * P),
        _ = Math.min(S * P, 300);
      return (
        s - (E * ((y + g * h * x) * Math.sinh(_) + S * x * Math.cosh(_))) / S
      );
    };
  }
  const w = {
    calculatedDuration: (v && f) || null,
    next: (S) => {
      const P = m(S);
      if (v) a.done = S >= f;
      else {
        let E = 0;
        g < 1 && (E = S === 0 ? Lt(y) : Qg(m, S, P));
        const _ = Math.abs(E) <= r,
          C = Math.abs(s - P) <= i;
        a.done = _ && C;
      }
      return (a.value = a.done ? s : P), a;
    },
    toString: () => {
      const S = Math.min(pg(w), nu),
        P = hg((E) => w.next(S * E).value, S, 30);
      return S + "ms " + P;
    },
  };
  return w;
}
function Gd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    v = (_) => (a !== void 0 && _ < a) || (l !== void 0 && _ > l),
    y = (_) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - _) < Math.abs(l - _)
        ? a
        : l;
  let g = n * t;
  const x = f + g,
    h = s === void 0 ? x : s(x);
  h !== x && (g = h - f);
  const p = (_) => -g * Math.exp(-_ / r),
    m = (_) => h + p(_),
    w = (_) => {
      const C = p(_),
        k = m(_);
      (d.done = Math.abs(C) <= u), (d.value = d.done ? h : k);
    };
  let S, P;
  const E = (_) => {
    v(d.value) &&
      ((S = _),
      (P = Yg({
        keyframes: [d.value, y(d.value)],
        velocity: Qg(m, _, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (_) => {
        let C = !1;
        return (
          !P && S === void 0 && ((C = !0), w(_), E(_)),
          S !== void 0 && _ >= S ? P.next(_ - S) : (!C && w(_), d)
        );
      },
    }
  );
}
const px = Vi(0.42, 0, 1, 1),
  hx = Vi(0, 0, 0.58, 1),
  Xg = Vi(0.42, 0, 0.58, 1),
  mx = (e) => Array.isArray(e) && typeof e[0] != "number",
  vx = {
    linear: We,
    easeIn: px,
    easeInOut: Xg,
    easeOut: hx,
    circIn: Qc,
    circInOut: Mg,
    circOut: bg,
    backIn: Gc,
    backInOut: Cg,
    backOut: _g,
    anticipate: Og,
  },
  Qd = (e) => {
    if (Bc(e)) {
      Qv(e.length === 4);
      const [t, n, r, i] = e;
      return Vi(t, n, r, i);
    } else if (typeof e == "string") return vx[e];
    return e;
  };
function gx(e, t, n) {
  const r = [],
    i = n || Gg,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || We : t;
      a = Fi(l, a);
    }
    r.push(a);
  }
  return r;
}
function yx(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Qv(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = gx(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = yr(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(zt(e[0], e[o - 1], c)) : u;
}
function wx(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = yr(0, t, r);
    e.push(oe(n, 1, i));
  }
}
function Sx(e) {
  const t = [0];
  return wx(t, e.length - 1), t;
}
function xx(e, t) {
  return e.map((n) => n * t);
}
function Px(e, t) {
  return e.map(() => t || Xg).splice(0, e.length - 1);
}
function ms({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = mx(r) ? r.map(Qd) : Qd(r),
    o = { done: !1, value: t[0] },
    s = xx(n && n.length === t.length ? n : Sx(t), e),
    a = yx(s, t, { ease: Array.isArray(i) ? i : Px(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const Tx = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Y.update(t, !0),
      stop: () => cn(t),
      now: () => (xe.isProcessing ? xe.timestamp : Pt.now()),
    };
  },
  kx = { decay: Gd, inertia: Gd, tween: ms, keyframes: ms, spring: Yg },
  Ex = (e) => e / 100;
class ef extends Wg {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Zc,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = $c(n) ? n : kx[n] || ms;
    let l, u;
    a !== ms &&
      typeof t[0] != "number" &&
      ((l = Fi(Ex, Gg(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = pg(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      v = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: _ } = this.options;
      return { done: !0, value: _[_.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: v,
      repeatType: y,
      repeatDelay: g,
      onUpdate: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const h = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? h < 0 : h > c;
    (this.currentTime = Math.max(h, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      w = o;
    if (v) {
      const _ = Math.min(this.currentTime, c) / f;
      let C = Math.floor(_),
        k = _ % 1;
      !k && _ >= 1 && (k = 1),
        k === 1 && C--,
        (C = Math.min(C, v + 1)),
        !!(C % 2) &&
          (y === "reverse"
            ? ((k = 1 - k), g && (k -= g / f))
            : y === "mirror" && (w = s)),
        (m = zt(0, 1, k) * f);
    }
    const S = p ? { done: !1, value: l[0] } : w.next(m);
    a && (S.value = a(S.value));
    let { done: P } = S;
    !p &&
      u !== null &&
      (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && P));
    return (
      E && i !== void 0 && (S.value = Xs(l, this.options, i)),
      x && x(S.value),
      E && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? jt(t.calculatedDuration) : 0;
  }
  get time() {
    return jt(this.currentTime);
  }
  set time(t) {
    (t = Lt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = jt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Tx, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const _x = new Set(["opacity", "clipPath", "filter", "transform"]);
function Cx(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = vg(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
const Ox = Ec(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  vs = 10,
  bx = 2e4;
function Mx(e) {
  return $c(e.type) || e.type === "spring" || !mg(e.ease);
}
function Lx(e, t) {
  const n = new ef({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < bx; ) (r = n.sample(o)), i.push(r.value), (o += vs);
  return { times: void 0, keyframes: i, duration: o - vs, ease: "linear" };
}
const qg = { anticipate: Og, backInOut: Cg, circInOut: Mg };
function jx(e) {
  return e in qg;
}
class Yd extends Wg {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new Ug(
      o,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof o == "string" && ps() && jx(o) && (o = qg[o]), Mx(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: d,
          motionValue: v,
          element: y,
          ...g
        } = this.options,
        x = Lx(t, g);
      (t = x.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = x.duration),
        (i = x.times),
        (o = x.ease),
        (s = "keyframes");
    }
    const c = Cx(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (jd(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options;
            a.set(Xs(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return jt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return jt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Lt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return We;
      const { animation: r } = n;
      jd(r, t);
    }
    return We;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...v
        } = this.options,
        y = new ef({
          ...v,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        g = Lt(this.time);
      u.setWithVelocity(y.sample(g - vs).value, y.sample(g).value, vs);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      Ox() &&
      r &&
      _x.has(r) &&
      !l &&
      !u &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const Dx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Rx = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Ax = { type: "keyframes", duration: 0.8 },
  Nx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  zx = (e, { keyframes: t }) =>
    t.length > 2
      ? Ax
      : In.has(e)
      ? e.startsWith("scale")
        ? Rx(t[1])
        : Dx
      : Nx;
function Ix({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const tf =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = Fc(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Lt(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        t.set(d), a.onUpdate && a.onUpdate(d);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    Ix(a) || (c = { ...c, ...zx(e, c) }),
      c.duration && (c.duration = Lt(c.duration)),
      c.repeatDelay && (c.repeatDelay = Lt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !o && t.get() !== void 0)
    ) {
      const d = Xs(c.keyframes, a);
      if (d !== void 0)
        return (
          Y.update(() => {
            c.onUpdate(d), c.onComplete();
          }),
          new r2([])
        );
    }
    return !o && Yd.supports(c) ? new Yd(c) : new ef(c);
  };
function Vx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Zg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      v = l[f];
    if (v === void 0 || (c && Vx(c, f))) continue;
    const y = { delay: n, ...Fc(s || {}, f) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const h = Pg(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, f, Y);
        p !== null && ((y.startTime = p), (g = !0));
      }
    }
    iu(e, f),
      d.start(
        tf(f, d, v, e.shouldReduceMotion && Sg.has(f) ? { type: !1 } : y, e, g)
      );
    const x = d.animation;
    x && u.push(x);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Y.update(() => {
          a && g2(e, a);
        });
      }),
    u
  );
}
function fu(e, t, n = {}) {
  var r;
  const i = Oi(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(Zg(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return Fx(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function Fx(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort($x)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            fu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function $x(e, t) {
  return e.sortNodePosition(t);
}
function Bx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => fu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = fu(e, t, n);
  else {
    const i = typeof t == "function" ? Oi(e, t, n.custom) : t;
    r = Promise.all(Zg(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Jg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const Hx = Cc.length;
function ey(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? ey(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Hx; n++) {
    const r = Cc[n],
      i = e.props[r];
    (Ei(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const Ux = [..._c].reverse(),
  Wx = _c.length;
function Kx(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Bx(e, n, r)));
}
function Gx(e) {
  let t = Kx(e),
    n = Xd(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = Oi(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: v, transitionEnd: y, ...g } = d;
      u = { ...u, ...g, ...y };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = ey(e.parent) || {},
      f = [],
      d = new Set();
    let v = {},
      y = 1 / 0;
    for (let x = 0; x < Wx; x++) {
      const h = Ux[x],
        p = n[h],
        m = u[h] !== void 0 ? u[h] : c[h],
        w = Ei(m),
        S = h === l ? p.isActive : null;
      S === !1 && (y = x);
      let P = m === c[h] && m !== u[h] && w;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (p.protectedKeys = { ...v }),
        (!p.isActive && S === null) ||
          (!m && !p.prevProp) ||
          Qs(m) ||
          typeof m == "boolean")
      )
        continue;
      const E = Qx(p.prevProp, m);
      let _ = E || (h === l && p.isActive && !P && w) || (x > y && w),
        C = !1;
      const k = Array.isArray(m) ? m : [m];
      let j = k.reduce(i(h), {});
      S === !1 && (j = {});
      const { prevResolvedValues: D = {} } = p,
        N = { ...D, ...j },
        z = (W) => {
          (_ = !0),
            d.has(W) && ((C = !0), d.delete(W)),
            (p.needsAnimating[W] = !0);
          const b = e.getValue(W);
          b && (b.liveStyle = !1);
        };
      for (const W in N) {
        const b = j[W],
          A = D[W];
        if (v.hasOwnProperty(W)) continue;
        let F = !1;
        tu(b) && tu(A) ? (F = !Jg(b, A)) : (F = b !== A),
          F
            ? b != null
              ? z(W)
              : d.add(W)
            : b !== void 0 && d.has(W)
            ? z(W)
            : (p.protectedKeys[W] = !0);
      }
      (p.prevProp = m),
        (p.prevResolvedValues = j),
        p.isActive && (v = { ...v, ...j }),
        r && e.blockInitialAnimation && (_ = !1),
        _ &&
          (!(P && E) || C) &&
          f.push(...k.map((W) => ({ animation: W, options: { type: h } })));
    }
    if (d.size) {
      const x = {};
      if (typeof u.initial != "boolean") {
        const h = Oi(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        h && h.transition && (x.transition = h.transition);
      }
      d.forEach((h) => {
        const p = e.getBaseTarget(h),
          m = e.getValue(h);
        m && (m.liveStyle = !0), (x[h] = p ?? null);
      }),
        f.push({ animation: x });
    }
    let g = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var v;
        return (v = d.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Xd()), (r = !0);
    },
  };
}
function Qx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Jg(t, e) : !1;
}
function yn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Xd() {
  return {
    animate: yn(!0),
    whileInView: yn(),
    whileHover: yn(),
    whileTap: yn(),
    whileDrag: yn(),
    whileFocus: yn(),
    exit: yn(),
  };
}
class vn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class Yx extends vn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Gx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Qs(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let Xx = 0;
class qx extends vn {
  constructor() {
    super(...arguments), (this.id = Xx++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const Zx = { animation: { Feature: Yx }, exit: { Feature: qx } };
function Li(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function $i(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Jx = (e) => (t) => Hc(t) && e(t, $i(t));
function ii(e, t, n, r) {
  return Li(e, t, Jx(n), r);
}
const qd = (e, t) => Math.abs(e - t);
function eP(e, t) {
  const n = qd(e.x, t.x),
    r = qd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ty {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = $a(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          v = eP(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !v) return;
        const { point: y } = f,
          { timestamp: g } = xe;
        this.history.push({ ...y, timestamp: g });
        const { onStart: x, onMove: h } = this.handlers;
        d ||
          (x && x(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = Fa(d, this.transformPagePoint)),
          Y.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: v, onSessionEnd: y, resumeAnimation: g } = this.handlers;
        if (
          (this.dragSnapToOrigin && g && g(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = $a(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Fa(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(f, x), y && y(f, x);
      }),
      !Hc(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = $i(t),
      a = Fa(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = xe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, $a(a, this.history)),
      (this.removeListeners = Fi(
        ii(this.contextWindow, "pointermove", this.handlePointerMove),
        ii(this.contextWindow, "pointerup", this.handlePointerUp),
        ii(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), cn(this.updatePoint);
  }
}
function Fa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Zd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $a({ point: e }, t) {
  return {
    point: e,
    delta: Zd(e, ny(t)),
    offset: Zd(e, tP(t)),
    velocity: nP(t, 0.1),
  };
}
function tP(e) {
  return e[0];
}
function ny(e) {
  return e[e.length - 1];
}
function nP(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = ny(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Lt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = jt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const ry = 1e-4,
  rP = 1 - ry,
  iP = 1 + ry,
  iy = 0.01,
  oP = 0 - iy,
  sP = 0 + iy;
function je(e) {
  return e.max - e.min;
}
function aP(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Jd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = oe(t.min, t.max, e.origin)),
    (e.scale = je(n) / je(t)),
    (e.translate = oe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= rP && e.scale <= iP) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= oP && e.translate <= sP) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function oi(e, t, n, r) {
  Jd(e.x, t.x, n.x, r ? r.originX : void 0),
    Jd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ep(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + je(t));
}
function lP(e, t, n) {
  ep(e.x, t.x, n.x), ep(e.y, t.y, n.y);
}
function tp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + je(t));
}
function si(e, t, n) {
  tp(e.x, t.x, n.x), tp(e.y, t.y, n.y);
}
function uP(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? oe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? oe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function np(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function cP(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: np(e.x, n, i), y: np(e.y, t, r) };
}
function rp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function fP(e, t) {
  return { x: rp(e.x, t.x), y: rp(e.y, t.y) };
}
function dP(e, t) {
  let n = 0.5;
  const r = je(e),
    i = je(t);
  return (
    i > r
      ? (n = yr(t.min, t.max - r, e.min))
      : r > i && (n = yr(e.min, e.max - i, t.min)),
    zt(0, 1, n)
  );
}
function pP(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const du = 0.35;
function hP(e = du) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = du),
    { x: ip(e, "left", "right"), y: ip(e, "top", "bottom") }
  );
}
function ip(e, t, n) {
  return { min: op(e, t), max: op(e, n) };
}
function op(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const sp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  er = () => ({ x: sp(), y: sp() }),
  ap = () => ({ min: 0, max: 0 }),
  pe = () => ({ x: ap(), y: ap() });
function Ze(e) {
  return [e("x"), e("y")];
}
function oy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function mP({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function vP(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ba(e) {
  return e === void 0 || e === 1;
}
function pu({ scale: e, scaleX: t, scaleY: n }) {
  return !Ba(e) || !Ba(t) || !Ba(n);
}
function Pn(e) {
  return (
    pu(e) ||
    sy(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function sy(e) {
  return lp(e.x) || lp(e.y);
}
function lp(e) {
  return e && e !== "0%";
}
function gs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function up(e, t, n, r, i) {
  return i !== void 0 && (e = gs(e, i, r)), gs(e, n, r) + t;
}
function hu(e, t = 0, n = 1, r, i) {
  (e.min = up(e.min, t, n, r, i)), (e.max = up(e.max, t, n, r, i));
}
function ay(e, { x: t, y: n }) {
  hu(e.x, t.translate, t.scale, t.originPoint),
    hu(e.y, n.translate, n.scale, n.originPoint);
}
const cp = 0.999999999999,
  fp = 1.0000000000001;
function gP(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        nr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), ay(e, s)),
      r && Pn(o.latestValues) && nr(e, o.latestValues));
  }
  t.x < fp && t.x > cp && (t.x = 1), t.y < fp && t.y > cp && (t.y = 1);
}
function tr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function dp(e, t, n, r, i = 0.5) {
  const o = oe(e.min, e.max, i);
  hu(e, t, n, o, r);
}
function nr(e, t) {
  dp(e.x, t.x, t.scaleX, t.scale, t.originX),
    dp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ly(e, t) {
  return oy(vP(e.getBoundingClientRect(), t));
}
function yP(e, t, n) {
  const r = ly(e, n),
    { scroll: i } = t;
  return i && (tr(r.x, i.offset.x), tr(r.y, i.offset.y)), r;
}
const uy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  wP = new WeakMap();
class SP {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = pe()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor($i(c).point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: v, onDragStart: y } = this.getProps();
        if (
          d &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = d2(d)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ze((x) => {
            let h = this.getAxisMotionValue(x).get() || 0;
            if (xt.test(h)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const m = p.layout.layoutBox[x];
                m && (h = je(m) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[x] = h;
          }),
          y && Y.postRender(() => y(c, f)),
          iu(this.visualElement, "transform");
        const { animationState: g } = this.visualElement;
        g && g.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: v,
          onDirectionLock: y,
          onDrag: g,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: x } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = xP(x)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, x),
          this.updateAxis("y", f.point, x),
          this.visualElement.render(),
          g && g(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        Ze((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ty(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: uy(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Y.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !go(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = uP(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Zn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = cP(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = hP(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ze((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = pP(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Zn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = yP(r, i.root, this.visualElement.getTransformPagePoint());
    let s = fP(i.layout.layoutBox, o);
    if (n) {
      const a = n(mP(s));
      (this.hasMutatedConstraints = !!a), a && (s = oy(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Ze((c) => {
        if (!go(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          v = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: v,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      iu(this.visualElement, t), r.start(tf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ze((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ze((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ze((n) => {
      const { drag: r } = this.getProps();
      if (!go(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - oe(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Zn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Ze((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = dP({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ze((s) => {
        if (!go(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(oe(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    wP.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ii(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Zn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      Y.read(r);
    const s = Li(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Ze((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = du,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function go(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function xP(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class PP extends vn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = We),
      (this.removeListeners = We),
      (this.controls = new SP(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || We);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const pp = (e) => (t, n) => {
  e && Y.postRender(() => e(t, n));
};
class TP extends vn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = We);
  }
  onPointerDown(t) {
    this.session = new ty(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: uy(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: pp(t),
      onStart: pp(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && Y.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ii(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Io = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function hp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = hp(e, t.target.x),
        r = hp(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  kP = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = fn.parse(e);
      if (i.length > 5) return r;
      const o = fn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = oe(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class EP extends R.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    MS(_P),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Io.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              Y.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      bc.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function cy(e) {
  const [t, n] = aS(),
    r = R.useContext(Kv);
  return T.jsx(EP, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: R.useContext(eg),
    isPresent: t,
    safeToRemove: n,
  });
}
const _P = {
  borderRadius: {
    ...Fr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Fr,
  borderTopRightRadius: Fr,
  borderBottomLeftRadius: Fr,
  borderBottomRightRadius: Fr,
  boxShadow: kP,
};
function CP(e, t, n) {
  const r = Oe(e) ? e : bi(e);
  return r.start(tf("", r, t, n)), r.animation;
}
function OP(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const bP = (e, t) => e.depth - t.depth;
class MP {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Uc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Wc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(bP),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function LP(e, t) {
  const n = Pt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (cn(r), e(o - t));
    };
  return Y.read(r, !0), () => cn(r);
}
const fy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  jP = fy.length,
  mp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  vp = (e) => typeof e == "number" || V.test(e);
function DP(e, t, n, r, i, o) {
  i
    ? ((e.opacity = oe(0, n.opacity !== void 0 ? n.opacity : 1, RP(r))),
      (e.opacityExit = oe(t.opacity !== void 0 ? t.opacity : 1, 0, AP(r))))
    : o &&
      (e.opacity = oe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < jP; s++) {
    const a = `border${fy[s]}Radius`;
    let l = gp(t, a),
      u = gp(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || vp(l) === vp(u)
        ? ((e[a] = Math.max(oe(mp(l), mp(u), r), 0)),
          (xt.test(u) || xt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = oe(t.rotate || 0, n.rotate || 0, r));
}
function gp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const RP = dy(0, 0.5, bg),
  AP = dy(0.5, 0.95, We);
function dy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yr(e, t, r)));
}
function yp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function qe(e, t) {
  yp(e.x, t.x), yp(e.y, t.y);
}
function wp(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Sp(e, t, n, r, i) {
  return (
    (e -= t), (e = gs(e, 1 / n, r)), i !== void 0 && (e = gs(e, 1 / i, r)), e
  );
}
function NP(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (xt.test(t) &&
      ((t = parseFloat(t)), (t = oe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = oe(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Sp(e.min, t, n, a, i)),
    (e.max = Sp(e.max, t, n, a, i));
}
function xp(e, t, [n, r, i], o, s) {
  NP(e, t[n], t[r], t[i], t.scale, o, s);
}
const zP = ["x", "scaleX", "originX"],
  IP = ["y", "scaleY", "originY"];
function Pp(e, t, n, r) {
  xp(e.x, t, zP, n ? n.x : void 0, r ? r.x : void 0),
    xp(e.y, t, IP, n ? n.y : void 0, r ? r.y : void 0);
}
function Tp(e) {
  return e.translate === 0 && e.scale === 1;
}
function py(e) {
  return Tp(e.x) && Tp(e.y);
}
function kp(e, t) {
  return e.min === t.min && e.max === t.max;
}
function VP(e, t) {
  return kp(e.x, t.x) && kp(e.y, t.y);
}
function Ep(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function hy(e, t) {
  return Ep(e.x, t.x) && Ep(e.y, t.y);
}
function _p(e) {
  return je(e.x) / je(e.y);
}
function Cp(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class FP {
  constructor() {
    this.members = [];
  }
  add(t) {
    Uc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Wc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function $P(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: v,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      v && (r += `skewX(${v}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Ha = ["", "X", "Y", "Z"],
  BP = { visibility: "hidden" },
  Op = 1e3;
let HP = 0;
function Ua(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function my(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Pg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Y, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && my(r);
}
function vy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = HP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(KP),
            this.nodes.forEach(qP),
            this.nodes.forEach(ZP),
            this.nodes.forEach(GP);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new MP());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Kc()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = OP(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = LP(d, 250)),
            Io.hasAnimatedSinceResize &&
              ((Io.hasAnimatedSinceResize = !1), this.nodes.forEach(Mp));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: v,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const g =
                  this.options.transition || c.getDefaultTransition() || rT,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: h } =
                  c.getProps(),
                p = !this.targetLayout || !hy(this.targetLayout, y),
                m = !d && v;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                m ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...Fc(g, "layout"), onPlay: x, onComplete: h };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || Mp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        cn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(JP),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          my(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(bp);
        return;
      }
      this.isUpdating || this.nodes.forEach(YP),
        (this.isUpdating = !1),
        this.nodes.forEach(XP),
        this.nodes.forEach(UP),
        this.nodes.forEach(WP),
        this.clearAllSnapshots();
      const a = Pt.now();
      (xe.delta = zt(0, 1e3 / 60, a - xe.timestamp)),
        (xe.timestamp = a),
        (xe.isProcessing = !0),
        Aa.update.process(xe),
        Aa.preRender.process(xe),
        Aa.render.process(xe),
        (xe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), bc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(QP), this.sharedNodes.forEach(eT);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Y.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Y.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !je(this.snapshot.measuredBox.x) &&
          !je(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = pe()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !py(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Pn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        iT(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return pe();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(oT)
        )
      ) {
        const { scroll: c } = this.root;
        c && (tr(l.x, c.offset.x), tr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = pe();
      if (
        (qe(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && qe(l, s), tr(l.x, f.offset.x), tr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = pe();
      qe(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          nr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Pn(c.latestValues) && nr(l, c.latestValues);
      }
      return Pn(this.latestValues) && nr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = pe();
      qe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Pn(u.latestValues)) continue;
        pu(u.latestValues) && u.updateSnapshot();
        const c = pe(),
          f = u.measurePageBox();
        qe(c, f),
          Pp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Pn(this.latestValues) && Pp(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = xe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const v = this.getClosestProjectingParent();
          v && v.layout && this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = pe()),
              (this.relativeTargetOrigin = pe()),
              si(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                v.layout.layoutBox
              ),
              qe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = pe()), (this.targetWithTransforms = pe())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              lP(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : qe(this.target, this.layout.layoutBox),
              ay(this.target, this.targetDelta))
            : qe(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const v = this.getClosestProjectingParent();
          v &&
          !!v.resumingFrom == !!this.resumingFrom &&
          !v.options.layoutScroll &&
          v.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = v),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = pe()),
              (this.relativeTargetOrigin = pe()),
              si(this.relativeTargetOrigin, this.target, v.target),
              qe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          pu(this.parent.latestValues) ||
          sy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === xe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      qe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        v = this.treeScale.y;
      gP(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = pe()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (wp(this.prevProjectionDelta.x, this.projectionDelta.x),
          wp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        oi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== v ||
          !Cp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Cp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = er()),
        (this.projectionDelta = er()),
        (this.projectionDeltaWithTransform = er());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = er();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = pe(),
        v = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        g = v !== y,
        x = this.getStack(),
        h = !x || x.members.length <= 1,
        p = !!(g && !h && this.options.crossfade === !0 && !this.path.some(nT));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Lp(f.x, s.x, S),
          Lp(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (si(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            tT(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && VP(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = pe()),
            qe(m, this.relativeTarget)),
          g &&
            ((this.animationValues = c), DP(c, u, this.latestValues, S, p, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (cn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Y.update(() => {
          (Io.hasAnimatedSinceResize = !0),
            (this.currentAnimation = CP(0, Op, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onStop: () => {},
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Op),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          gy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || pe();
          const f = je(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = je(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        qe(a, l),
          nr(a, c),
          oi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new FP()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Ua("z", s, u, this.animationValues);
      for (let c = 0; c < Ha.length; c++)
        Ua(`rotate${Ha[c]}`, s, u, this.animationValues),
          Ua(`skew${Ha[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return BP;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = No(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = No(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Pn(this.latestValues) &&
            ((g.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = $P(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: v, y } = this.projectionDelta;
      (u.transformOrigin = `${v.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const g in _i) {
        if (d[g] === void 0) continue;
        const { correct: x, applyTo: h, isCSSVariable: p } = _i[g],
          m = u.transform === "none" ? d[g] : x(d[g], f);
        if (h) {
          const w = h.length;
          for (let S = 0; S < w; S++) u[h[S]] = m;
        } else
          p ? (this.options.visualElement.renderState.vars[g] = m) : (u[g] = m);
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? No(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(bp),
        this.root.sharedNodes.clear();
    }
  };
}
function UP(e) {
  e.updateLayout();
}
function WP(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? Ze((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            v = je(d);
          (d.min = r[f].min), (d.max = d.min + v);
        })
      : gy(o, n.layoutBox, r) &&
        Ze((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            v = je(r[f]);
          (d.max = d.min + v),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + v));
        });
    const a = er();
    oi(a, r, n.layoutBox);
    const l = er();
    s ? oi(l, e.applyTransform(i, !0), n.measuredBox) : oi(l, r, n.layoutBox);
    const u = !py(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: v } = f;
        if (d && v) {
          const y = pe();
          si(y, n.layoutBox, d.layoutBox);
          const g = pe();
          si(g, r, v.layoutBox),
            hy(y, g) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function KP(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function GP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function QP(e) {
  e.clearSnapshot();
}
function bp(e) {
  e.clearMeasurements();
}
function YP(e) {
  e.isLayoutDirty = !1;
}
function XP(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Mp(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function qP(e) {
  e.resolveTargetDelta();
}
function ZP(e) {
  e.calcProjection();
}
function JP(e) {
  e.resetSkewAndRotation();
}
function eT(e) {
  e.removeLeadSnapshot();
}
function Lp(e, t, n) {
  (e.translate = oe(t.translate, 0, n)),
    (e.scale = oe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function jp(e, t, n, r) {
  (e.min = oe(t.min, n.min, r)), (e.max = oe(t.max, n.max, r));
}
function tT(e, t, n, r) {
  jp(e.x, t.x, n.x, r), jp(e.y, t.y, n.y, r);
}
function nT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const rT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Dp = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Rp = Dp("applewebkit/") && !Dp("chrome/") ? Math.round : We;
function Ap(e) {
  (e.min = Rp(e.min)), (e.max = Rp(e.max));
}
function iT(e) {
  Ap(e.x), Ap(e.y);
}
function gy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !aP(_p(t), _p(n), 0.2))
  );
}
function oT(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const sT = vy({
    attachResizeListener: (e, t) => Li(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Wa = { current: void 0 },
  yy = vy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Wa.current) {
        const e = new sT({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Wa.current = e);
      }
      return Wa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  aT = {
    pan: { Feature: TP },
    drag: { Feature: PP, ProjectionNode: yy, MeasureLayout: cy },
  };
function Np(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && Y.postRender(() => o(t, $i(t)));
}
class lT extends vn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = a2(
        t,
        (n, r) => (Np(this.node, r, "Start"), (i) => Np(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class uT extends vn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Fi(
      Li(this.node.current, "focus", () => this.onFocus()),
      Li(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function zp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && Y.postRender(() => o(t, $i(t)));
}
class cT extends vn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = f2(
        t,
        (n, r) => (
          zp(this.node, r, "Start"),
          (i, { success: o }) => zp(this.node, i, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const mu = new WeakMap(),
  Ka = new WeakMap(),
  fT = (e) => {
    const t = mu.get(e.target);
    t && t(e);
  },
  dT = (e) => {
    e.forEach(fT);
  };
function pT({ root: e, ...t }) {
  const n = e || document;
  Ka.has(n) || Ka.set(n, {});
  const r = Ka.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(dT, { root: e, ...t })), r[i];
}
function hT(e, t, n) {
  const r = pT(t);
  return (
    mu.set(e, n),
    r.observe(e),
    () => {
      mu.delete(e), r.unobserve(e);
    }
  );
}
const mT = { some: 0, all: 1 };
class vT extends vn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : mT[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return hT(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(gT(t, n)) && this.startObserver();
  }
  unmount() {}
}
function gT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const yT = {
    inView: { Feature: vT },
    tap: { Feature: cT },
    focus: { Feature: uT },
    hover: { Feature: lT },
  },
  wT = { layout: { ProjectionNode: yy, MeasureLayout: cy } },
  vu = { current: null },
  wy = { current: !1 };
function ST() {
  if (((wy.current = !0), !!kc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (vu.current = e.matches);
      e.addListener(t), t();
    } else vu.current = !1;
}
const xT = [...Hg, _e, fn],
  PT = (e) => xT.find(Bg(e)),
  TT = new WeakMap();
function kT(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (Oe(i)) e.addValue(r, i);
    else if (Oe(o)) e.addValue(r, bi(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, bi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ip = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class ET {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Zc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const v = Pt.now();
        this.renderScheduledAt < v &&
          ((this.renderScheduledAt = v), Y.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u, onUpdate: c } = s;
    (this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Ys(n)),
      (this.isVariantNode = Zv(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const v in d) {
      const y = d[v];
      l[v] !== void 0 && Oe(y) && y.set(l[v], !1);
    }
  }
  mount(t) {
    (this.current = t),
      TT.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      wy.current || ST(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : vu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(),
      cn(this.notifyUpdate),
      cn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = In.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && Y.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in wr) {
      const n = wr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : pe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Ip.length; r++) {
      const i = Ip[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = kT(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = bi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Fg(i) || Lg(i))
          ? (i = parseFloat(i))
          : !PT(i) && fn.test(n) && (i = zg(t, n)),
        this.setBaseTarget(t, Oe(i) ? i.get() : i)),
      Oe(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = Ic(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Oe(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Kc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Sy extends ET {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Ug);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Oe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function _T(e) {
  return window.getComputedStyle(e);
}
class CT extends Sy {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = ug);
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = qc(n);
      return (r && r.default) || 0;
    } else {
      const r = _T(t),
        i = (Mc(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ly(t, n);
  }
  build(t, n, r) {
    Dc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Vc(t, n, r);
  }
}
class OT extends Sy {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = pe),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          lg(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = qc(n);
      return (r && r.default) || 0;
    }
    return (n = cg.has(n) ? n : Oc(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return dg(t, n, r);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      Y.postRender(this.updateDimensions);
  }
  build(t, n, r) {
    Nc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    fg(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = zc(t.tagName)), super.mount(t);
  }
}
const bT = (e, t) =>
    Ac(e) ? new OT(t) : new CT(t, { allowProjection: e !== R.Fragment }),
  MT = e2({ ...Zx, ...yT, ...aT, ...wT }, bT),
  ai = vS(MT);
function LT(e) {
  return mn({
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: { d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" },
      },
    ],
  })(e);
}
var ue = {},
  nf = {},
  Bi = {},
  Hi = {},
  xy = "Expected a function",
  Vp = NaN,
  jT = "[object Symbol]",
  DT = /^\s+|\s+$/g,
  RT = /^[-+]0x[0-9a-f]+$/i,
  AT = /^0b[01]+$/i,
  NT = /^0o[0-7]+$/i,
  zT = parseInt,
  IT = typeof Qt == "object" && Qt && Qt.Object === Object && Qt,
  VT = typeof self == "object" && self && self.Object === Object && self,
  FT = IT || VT || Function("return this")(),
  $T = Object.prototype,
  BT = $T.toString,
  HT = Math.max,
  UT = Math.min,
  Ga = function () {
    return FT.Date.now();
  };
function WT(e, t, n) {
  var r,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    c = !1,
    f = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(xy);
  (t = Fp(t) || 0),
    ys(n) &&
      ((c = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? HT(Fp(n.maxWait) || 0, t) : o),
      (d = "trailing" in n ? !!n.trailing : d));
  function v(P) {
    var E = r,
      _ = i;
    return (r = i = void 0), (u = P), (s = e.apply(_, E)), s;
  }
  function y(P) {
    return (u = P), (a = setTimeout(h, t)), c ? v(P) : s;
  }
  function g(P) {
    var E = P - l,
      _ = P - u,
      C = t - E;
    return f ? UT(C, o - _) : C;
  }
  function x(P) {
    var E = P - l,
      _ = P - u;
    return l === void 0 || E >= t || E < 0 || (f && _ >= o);
  }
  function h() {
    var P = Ga();
    if (x(P)) return p(P);
    a = setTimeout(h, g(P));
  }
  function p(P) {
    return (a = void 0), d && r ? v(P) : ((r = i = void 0), s);
  }
  function m() {
    a !== void 0 && clearTimeout(a), (u = 0), (r = l = i = a = void 0);
  }
  function w() {
    return a === void 0 ? s : p(Ga());
  }
  function S() {
    var P = Ga(),
      E = x(P);
    if (((r = arguments), (i = this), (l = P), E)) {
      if (a === void 0) return y(l);
      if (f) return (a = setTimeout(h, t)), v(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), s;
  }
  return (S.cancel = m), (S.flush = w), S;
}
function KT(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(xy);
  return (
    ys(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    WT(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function ys(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function GT(e) {
  return !!e && typeof e == "object";
}
function QT(e) {
  return typeof e == "symbol" || (GT(e) && BT.call(e) == jT);
}
function Fp(e) {
  if (typeof e == "number") return e;
  if (QT(e)) return Vp;
  if (ys(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ys(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(DT, "");
  var n = AT.test(e);
  return n || NT.test(e) ? zT(e.slice(2), n ? 2 : 8) : RT.test(e) ? Vp : +e;
}
var YT = KT,
  Ui = {};
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.addPassiveEventListener = function (t, n, r) {
  var i = r.name;
  i || ((i = n), console.warn("Listener must be a named function.")),
    Vo.has(n) || Vo.set(n, new Set());
  var o = Vo.get(n);
  if (!o.has(i)) {
    var s = (function () {
      var a = !1;
      try {
        var l = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        window.addEventListener("test", null, l);
      } catch {}
      return a;
    })();
    t.addEventListener(n, r, s ? { passive: !0 } : !1), o.add(i);
  }
};
Ui.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), Vo.get(n).delete(r.name || n);
};
var Vo = new Map();
Object.defineProperty(Hi, "__esModule", { value: !0 });
var XT = YT,
  qT = JT(XT),
  ZT = Ui;
function JT(e) {
  return e && e.__esModule ? e : { default: e };
}
var ek = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, qT.default)(t, n);
  },
  ne = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = ek(function (i) {
          ne.scrollHandler(t);
        }, n);
        ne.scrollSpyContainers.push(t),
          (0, ZT.addPassiveEventListener)(t, "scroll", r);
      }
    },
    isMounted: function (t) {
      return ne.scrollSpyContainers.indexOf(t) !== -1;
    },
    currentPositionX: function (t) {
      if (t === document) {
        var n = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageXOffset
          : r
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
      } else return t.scrollLeft;
    },
    currentPositionY: function (t) {
      if (t === document) {
        var n = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageYOffset
          : r
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      } else return t.scrollTop;
    },
    scrollHandler: function (t) {
      var n =
        ne.scrollSpyContainers[ne.scrollSpyContainers.indexOf(t)]
          .spyCallbacks || [];
      n.forEach(function (r) {
        return r(ne.currentPositionX(t), ne.currentPositionY(t));
      });
    },
    addStateHandler: function (t) {
      ne.spySetState.push(t);
    },
    addSpyHandler: function (t, n) {
      var r = ne.scrollSpyContainers[ne.scrollSpyContainers.indexOf(n)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(ne.currentPositionX(n), ne.currentPositionY(n));
    },
    updateStates: function () {
      ne.spySetState.forEach(function (t) {
        return t();
      });
    },
    unmount: function (t, n) {
      ne.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(n) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        );
      }),
        ne.spySetState &&
          ne.spySetState.length &&
          ne.spySetState.indexOf(t) > -1 &&
          ne.spySetState.splice(ne.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", ne.scrollHandler);
    },
    update: function () {
      return ne.scrollSpyContainers.forEach(function (t) {
        return ne.scrollHandler(t);
      });
    },
  };
Hi.default = ne;
var Lr = {},
  Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
var tk = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t,
      i = r ? "#" + r : "",
      o = window && window.location,
      s = i ? o.pathname + o.search + i : o.pathname + o.search;
    n
      ? history.pushState(history.state, "", s)
      : history.replaceState(history.state, "", s);
  },
  nk = function () {
    return window.location.hash.replace(/^#/, "");
  },
  rk = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  ik = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  Qa = function (t, n) {
    for (var r = t.offsetTop, i = t.offsetParent; i && !n(i); )
      (r += i.offsetTop), (i = i.offsetParent);
    return { offsetTop: r, offsetParent: i };
  },
  ok = function (t, n, r) {
    if (r)
      return t === document
        ? n.getBoundingClientRect().left +
            (window.scrollX || window.pageXOffset)
        : getComputedStyle(t).position !== "static"
        ? n.offsetLeft
        : n.offsetLeft - t.offsetLeft;
    if (t === document)
      return (
        n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (ik(t)) {
      if (n.offsetParent !== t) {
        var i = function (c) {
            return c === t || c === document;
          },
          o = Qa(n, i),
          s = o.offsetTop,
          a = o.offsetParent;
        if (a !== t)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element"
          );
        return s;
      }
      return n.offsetTop;
    }
    if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
    var l = function (c) {
      return c === document;
    };
    return Qa(n, l).offsetTop - Qa(t, l).offsetTop;
  };
Wi.default = {
  updateHash: tk,
  getHash: nk,
  filterElementInContainer: rk,
  scrollOffset: ok,
};
var qs = {},
  rf = {};
Object.defineProperty(rf, "__esModule", { value: !0 });
rf.default = {
  defaultEasing: function (t) {
    return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
  },
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
var of = {};
Object.defineProperty(of, "__esModule", { value: !0 });
var sk = Ui,
  ak = ["mousedown", "mousewheel", "touchmove", "keydown"];
of.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      ak.forEach(function (n) {
        return (0, sk.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
var gu = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      gu.registered[t] = n;
    },
    remove: function (t) {
      gu.registered[t] = null;
    },
  },
};
Ki.default = gu;
Object.defineProperty(qs, "__esModule", { value: !0 });
var lk =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  uk = Wi;
Zs(uk);
var ck = rf,
  $p = Zs(ck),
  fk = of,
  dk = Zs(fk),
  pk = Ki,
  gt = Zs(pk);
function Zs(e) {
  return e && e.__esModule ? e : { default: e };
}
var Py = function (t) {
    return $p.default[t.smooth] || $p.default.defaultEasing;
  },
  hk = function (t) {
    return typeof t == "function"
      ? t
      : function () {
          return t;
        };
  },
  mk = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  yu = (function () {
    return (
      mk() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  Ty = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  ky = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollLeft;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : i
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
  },
  Ey = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollTop;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : i
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  },
  vk = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollWidth - n.offsetWidth;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      i.clientWidth,
      i.scrollWidth,
      i.offsetWidth
    );
  },
  gk = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollHeight - n.offsetHeight;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      i.clientHeight,
      i.scrollHeight,
      i.offsetHeight
    );
  },
  yk = function e(t, n, r) {
    var i = n.data;
    if (!n.ignoreCancelEvents && i.cancel) {
      gt.default.registered.end &&
        gt.default.registered.end(i.to, i.target, i.currentPositionY);
      return;
    }
    if (
      ((i.delta = Math.round(i.targetPosition - i.startPosition)),
      i.start === null && (i.start = r),
      (i.progress = r - i.start),
      (i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
      (i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent)),
      i.containerElement &&
      i.containerElement !== document &&
      i.containerElement !== document.body
        ? n.horizontal
          ? (i.containerElement.scrollLeft = i.currentPosition)
          : (i.containerElement.scrollTop = i.currentPosition)
        : n.horizontal
        ? window.scrollTo(i.currentPosition, 0)
        : window.scrollTo(0, i.currentPosition),
      i.percent < 1)
    ) {
      var o = e.bind(null, t, n);
      yu.call(window, o);
      return;
    }
    gt.default.registered.end &&
      gt.default.registered.end(i.to, i.target, i.currentPosition);
  },
  sf = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
        ? t.container
        : document
      : null;
  },
  Gi = function (t, n, r, i) {
    (n.data = n.data || Ty()), window.clearTimeout(n.data.delayTimeout);
    var o = function () {
      n.data.cancel = !0;
    };
    if (
      (dk.default.subscribe(o),
      sf(n),
      (n.data.start = null),
      (n.data.cancel = !1),
      (n.data.startPosition = n.horizontal ? ky(n) : Ey(n)),
      (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
      n.data.startPosition === n.data.targetPosition)
    ) {
      gt.default.registered.end &&
        gt.default.registered.end(
          n.data.to,
          n.data.target,
          n.data.currentPosition
        );
      return;
    }
    (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
      (n.data.duration = hk(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = i);
    var s = Py(n),
      a = yk.bind(null, s, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        gt.default.registered.begin &&
          gt.default.registered.begin(n.data.to, n.data.target),
          yu.call(window, a);
      }, n.delay);
      return;
    }
    gt.default.registered.begin &&
      gt.default.registered.begin(n.data.to, n.data.target),
      yu.call(window, a);
  },
  Js = function (t) {
    return (t = lk({}, t)), (t.data = t.data || Ty()), (t.absolute = !0), t;
  },
  wk = function (t) {
    Gi(0, Js(t));
  },
  Sk = function (t, n) {
    Gi(t, Js(n));
  },
  xk = function (t) {
    (t = Js(t)), sf(t), Gi(t.horizontal ? vk(t) : gk(t), t);
  },
  Pk = function (t, n) {
    (n = Js(n)), sf(n);
    var r = n.horizontal ? ky(n) : Ey(n);
    Gi(t + r, n);
  };
qs.default = {
  animateTopScroll: Gi,
  getAnimationType: Py,
  scrollToTop: wk,
  scrollToBottom: xk,
  scrollTo: Sk,
  scrollMore: Pk,
};
Object.defineProperty(Lr, "__esModule", { value: !0 });
var Tk =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  kk = Wi,
  Ek = af(kk),
  _k = qs,
  Ck = af(_k),
  Ok = Ki,
  yo = af(Ok);
function af(e) {
  return e && e.__esModule ? e : { default: e };
}
var wo = {},
  Bp = void 0;
Lr.default = {
  unmount: function () {
    wo = {};
  },
  register: function (t, n) {
    wo[t] = n;
  },
  unregister: function (t) {
    delete wo[t];
  },
  get: function (t) {
    return (
      wo[t] ||
      document.getElementById(t) ||
      document.getElementsByName(t)[0] ||
      document.getElementsByClassName(t)[0]
    );
  },
  setActiveLink: function (t) {
    return (Bp = t);
  },
  getActiveLink: function () {
    return Bp;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = Tk({}, n, { absolute: !1 });
    var i = n.containerId,
      o = n.container,
      s = void 0;
    i
      ? (s = document.getElementById(i))
      : o && o.nodeType
      ? (s = o)
      : (s = document),
      (n.absolute = !0);
    var a = n.horizontal,
      l = Ek.default.scrollOffset(s, r, a) + (n.offset || 0);
    if (!n.smooth) {
      yo.default.registered.begin && yo.default.registered.begin(t, r),
        s === document
          ? n.horizontal
            ? window.scrollTo(l, 0)
            : window.scrollTo(0, l)
          : (s.scrollTop = l),
        yo.default.registered.end && yo.default.registered.end(t, r);
      return;
    }
    Ck.default.animateTopScroll(l, n, t, r);
  },
};
var _y = { exports: {} },
  bk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Mk = bk,
  Lk = Mk;
function Cy() {}
function Oy() {}
Oy.resetWarningCache = Cy;
var jk = function () {
  function e(r, i, o, s, a, l) {
    if (l !== Lk) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Oy,
    resetWarningCache: Cy,
  };
  return (n.PropTypes = n), n;
};
_y.exports = jk();
var ea = _y.exports,
  ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
var Dk = Wi,
  Ya = Rk(Dk);
function Rk(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ak = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (t) {
    (this.scroller = t),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (t, n) {
    this.containers[t] = n;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var t = this,
      n = this.getHash();
    n
      ? window.setTimeout(function () {
          t.scrollTo(n, !0), (t.initialized = !0);
        }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (t, n) {
    var r = this.scroller,
      i = r.get(t);
    if (i && (n || t !== r.getActiveLink())) {
      var o = this.containers[t] || document;
      r.scrollTo(t, { container: o });
    }
  },
  getHash: function () {
    return Ya.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      Ya.default.getHash() !== t &&
      Ya.default.updateHash(t, n);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
ta.default = Ak;
Object.defineProperty(Bi, "__esModule", { value: !0 });
var So =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Nk = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  zk = R,
  Hp = Qi(zk),
  Ik = Hi,
  xo = Qi(Ik),
  Vk = Lr,
  Fk = Qi(Vk),
  $k = ea,
  Z = Qi($k),
  Bk = ta,
  Ft = Qi(Bk);
function Qi(e) {
  return e && e.__esModule ? e : { default: e };
}
function Hk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Uk(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Wk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Up = {
  to: Z.default.string.isRequired,
  containerId: Z.default.string,
  container: Z.default.object,
  activeClass: Z.default.string,
  activeStyle: Z.default.object,
  spy: Z.default.bool,
  horizontal: Z.default.bool,
  smooth: Z.default.oneOfType([Z.default.bool, Z.default.string]),
  offset: Z.default.number,
  delay: Z.default.number,
  isDynamic: Z.default.bool,
  onClick: Z.default.func,
  duration: Z.default.oneOfType([Z.default.number, Z.default.func]),
  absolute: Z.default.bool,
  onSetActive: Z.default.func,
  onSetInactive: Z.default.func,
  ignoreCancelEvents: Z.default.bool,
  hashSpy: Z.default.bool,
  saveHashHistory: Z.default.bool,
  spyThrottle: Z.default.number,
};
Bi.default = function (e, t) {
  var n = t || Fk.default,
    r = (function (o) {
      Wk(s, o);
      function s(a) {
        Hk(this, s);
        var l = Uk(
          this,
          (s.__proto__ || Object.getPrototypeOf(s)).call(this, a)
        );
        return i.call(l), (l.state = { active: !1 }), l;
      }
      return (
        Nk(s, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var l = this.props.containerId,
                u = this.props.container;
              return l && !u
                ? document.getElementById(l)
                : u && u.nodeType
                ? u
                : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var l = this.getScrollSpyContainer();
                xo.default.isMounted(l) ||
                  xo.default.mount(l, this.props.spyThrottle),
                  this.props.hashSpy &&
                    (Ft.default.isMounted() || Ft.default.mount(n),
                    Ft.default.mapContainer(this.props.to, l)),
                  xo.default.addSpyHandler(this.spyHandler, l),
                  this.setState({ container: l });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              xo.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var l = "";
              this.state && this.state.active
                ? (l = (
                    (this.props.className || "") +
                    " " +
                    (this.props.activeClass || "active")
                  ).trim())
                : (l = this.props.className);
              var u = {};
              this.state && this.state.active
                ? (u = So({}, this.props.style, this.props.activeStyle))
                : (u = So({}, this.props.style));
              var c = So({}, this.props);
              for (var f in Up) c.hasOwnProperty(f) && delete c[f];
              return (
                (c.className = l),
                (c.style = u),
                (c.onClick = this.handleClick),
                Hp.default.createElement(e, c)
              );
            },
          },
        ]),
        s
      );
    })(Hp.default.PureComponent),
    i = function () {
      var s = this;
      (this.scrollTo = function (a, l) {
        n.scrollTo(a, So({}, s.state, l));
      }),
        (this.handleClick = function (a) {
          s.props.onClick && s.props.onClick(a),
            a.stopPropagation && a.stopPropagation(),
            a.preventDefault && a.preventDefault(),
            s.scrollTo(s.props.to, s.props);
        }),
        (this.spyHandler = function (a, l) {
          var u = s.getScrollSpyContainer();
          if (!(Ft.default.isMounted() && !Ft.default.isInitialized())) {
            var c = s.props.horizontal,
              f = s.props.to,
              d = null,
              v = void 0,
              y = void 0;
            if (c) {
              var g = 0,
                x = 0,
                h = 0;
              if (u.getBoundingClientRect) {
                var p = u.getBoundingClientRect();
                h = p.left;
              }
              if (!d || s.props.isDynamic) {
                if (((d = n.get(f)), !d)) return;
                var m = d.getBoundingClientRect();
                (g = m.left - h + a), (x = g + m.width);
              }
              var w = a - s.props.offset;
              (v = w >= Math.floor(g) && w < Math.floor(x)),
                (y = w < Math.floor(g) || w >= Math.floor(x));
            } else {
              var S = 0,
                P = 0,
                E = 0;
              if (u.getBoundingClientRect) {
                var _ = u.getBoundingClientRect();
                E = _.top;
              }
              if (!d || s.props.isDynamic) {
                if (((d = n.get(f)), !d)) return;
                var C = d.getBoundingClientRect();
                (S = C.top - E + l), (P = S + C.height);
              }
              var k = l - s.props.offset;
              (v = k >= Math.floor(S) && k < Math.floor(P)),
                (y = k < Math.floor(S) || k >= Math.floor(P));
            }
            var j = n.getActiveLink();
            if (y) {
              if (
                (f === j && n.setActiveLink(void 0),
                s.props.hashSpy && Ft.default.getHash() === f)
              ) {
                var D = s.props.saveHashHistory,
                  N = D === void 0 ? !1 : D;
                Ft.default.changeHash("", N);
              }
              s.props.spy &&
                s.state.active &&
                (s.setState({ active: !1 }),
                s.props.onSetInactive && s.props.onSetInactive(f, d));
            }
            if (v && (j !== f || s.state.active === !1)) {
              n.setActiveLink(f);
              var z = s.props.saveHashHistory,
                Ye = z === void 0 ? !1 : z;
              s.props.hashSpy && Ft.default.changeHash(f, Ye),
                s.props.spy &&
                  (s.setState({ active: !0 }),
                  s.props.onSetActive && s.props.onSetActive(f, d));
            }
          }
        });
    };
  return (r.propTypes = Up), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(nf, "__esModule", { value: !0 });
var Kk = R,
  Wp = by(Kk),
  Gk = Bi,
  Qk = by(Gk);
function by(e) {
  return e && e.__esModule ? e : { default: e };
}
function Yk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kp(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function Xk(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var qk = (function (e) {
  Xk(t, e);
  function t() {
    var n, r, i, o;
    Yk(this, t);
    for (var s = arguments.length, a = Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    return (
      (o =
        ((r =
          ((i = Kp(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(a)
            )
          )),
          i)),
        (i.render = function () {
          return Wp.default.createElement("a", i.props, i.props.children);
        }),
        r)),
      Kp(i, o)
    );
  }
  return t;
})(Wp.default.Component);
nf.default = (0, Qk.default)(qk);
var lf = {};
Object.defineProperty(lf, "__esModule", { value: !0 });
var Zk = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Jk = R,
  Gp = My(Jk),
  eE = Bi,
  tE = My(eE);
function My(e) {
  return e && e.__esModule ? e : { default: e };
}
function nE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rE(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function iE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var oE = (function (e) {
  iE(t, e);
  function t() {
    return (
      nE(this, t),
      rE(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    Zk(t, [
      {
        key: "render",
        value: function () {
          return Gp.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        },
      },
    ]),
    t
  );
})(Gp.default.Component);
lf.default = (0, tE.default)(oE);
var uf = {},
  na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
var sE =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  aE = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  lE = R,
  Qp = ra(lE),
  uE = Vv;
ra(uE);
var cE = Lr,
  Yp = ra(cE),
  fE = ea,
  Xp = ra(fE);
function ra(e) {
  return e && e.__esModule ? e : { default: e };
}
function dE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pE(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function hE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
na.default = function (e) {
  var t = (function (n) {
    hE(r, n);
    function r(i) {
      dE(this, r);
      var o = pE(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return (o.childBindings = { domNode: null }), o;
    }
    return (
      aE(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (o) {
            this.props.name !== o.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            Yp.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (o) {
            Yp.default.register(o, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return Qp.default.createElement(
              e,
              sE({}, this.props, { parentBindings: this.childBindings })
            );
          },
        },
      ]),
      r
    );
  })(Qp.default.Component);
  return (t.propTypes = { name: Xp.default.string, id: Xp.default.string }), t;
};
Object.defineProperty(uf, "__esModule", { value: !0 });
var qp =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  mE = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  vE = R,
  Zp = cf(vE),
  gE = na,
  yE = cf(gE),
  wE = ea,
  Jp = cf(wE);
function cf(e) {
  return e && e.__esModule ? e : { default: e };
}
function SE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xE(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function PE(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ly = (function (e) {
  PE(t, e);
  function t() {
    return (
      SE(this, t),
      xE(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    mE(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            i = qp({}, this.props);
          return (
            delete i.name,
            i.parentBindings && delete i.parentBindings,
            Zp.default.createElement(
              "div",
              qp({}, i, {
                ref: function (s) {
                  r.props.parentBindings.domNode = s;
                },
              }),
              this.props.children
            )
          );
        },
      },
    ]),
    t
  );
})(Zp.default.Component);
Ly.propTypes = { name: Jp.default.string, id: Jp.default.string };
uf.default = (0, yE.default)(Ly);
var Xa =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  eh = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function th(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nh(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function rh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Po = R,
  wn = Hi,
  qa = Lr,
  re = ea,
  $t = ta,
  ih = {
    to: re.string.isRequired,
    containerId: re.string,
    container: re.object,
    activeClass: re.string,
    spy: re.bool,
    smooth: re.oneOfType([re.bool, re.string]),
    offset: re.number,
    delay: re.number,
    isDynamic: re.bool,
    onClick: re.func,
    duration: re.oneOfType([re.number, re.func]),
    absolute: re.bool,
    onSetActive: re.func,
    onSetInactive: re.func,
    ignoreCancelEvents: re.bool,
    hashSpy: re.bool,
    spyThrottle: re.number,
  },
  TE = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || qa,
        i = (function (s) {
          rh(a, s);
          function a(l) {
            th(this, a);
            var u = nh(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, l)
            );
            return o.call(u), (u.state = { active: !1 }), u;
          }
          return (
            eh(a, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var u = this.props.containerId,
                    c = this.props.container;
                  return u
                    ? document.getElementById(u)
                    : c && c.nodeType
                    ? c
                    : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var u = this.getScrollSpyContainer();
                    wn.isMounted(u) || wn.mount(u, this.props.spyThrottle),
                      this.props.hashSpy &&
                        ($t.isMounted() || $t.mount(r),
                        $t.mapContainer(this.props.to, u)),
                      this.props.spy && wn.addStateHandler(this.stateHandler),
                      wn.addSpyHandler(this.spyHandler, u),
                      this.setState({ container: u });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  wn.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var u = "";
                  this.state && this.state.active
                    ? (u = (
                        (this.props.className || "") +
                        " " +
                        (this.props.activeClass || "active")
                      ).trim())
                    : (u = this.props.className);
                  var c = Xa({}, this.props);
                  for (var f in ih) c.hasOwnProperty(f) && delete c[f];
                  return (
                    (c.className = u),
                    (c.onClick = this.handleClick),
                    Po.createElement(t, c)
                  );
                },
              },
            ]),
            a
          );
        })(Po.Component),
        o = function () {
          var a = this;
          (this.scrollTo = function (l, u) {
            r.scrollTo(l, Xa({}, a.state, u));
          }),
            (this.handleClick = function (l) {
              a.props.onClick && a.props.onClick(l),
                l.stopPropagation && l.stopPropagation(),
                l.preventDefault && l.preventDefault(),
                a.scrollTo(a.props.to, a.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== a.props.to &&
                (a.state !== null &&
                  a.state.active &&
                  a.props.onSetInactive &&
                  a.props.onSetInactive(),
                a.setState({ active: !1 }));
            }),
            (this.spyHandler = function (l) {
              var u = a.getScrollSpyContainer();
              if (!($t.isMounted() && !$t.isInitialized())) {
                var c = a.props.to,
                  f = null,
                  d = 0,
                  v = 0,
                  y = 0;
                if (u.getBoundingClientRect) {
                  var g = u.getBoundingClientRect();
                  y = g.top;
                }
                if (!f || a.props.isDynamic) {
                  if (((f = r.get(c)), !f)) return;
                  var x = f.getBoundingClientRect();
                  (d = x.top - y + l), (v = d + x.height);
                }
                var h = l - a.props.offset,
                  p = h >= Math.floor(d) && h < Math.floor(v),
                  m = h < Math.floor(d) || h >= Math.floor(v),
                  w = r.getActiveLink();
                if (m)
                  return (
                    c === w && r.setActiveLink(void 0),
                    a.props.hashSpy && $t.getHash() === c && $t.changeHash(),
                    a.props.spy &&
                      a.state.active &&
                      (a.setState({ active: !1 }),
                      a.props.onSetInactive && a.props.onSetInactive()),
                    wn.updateStates()
                  );
                if (p && w !== c)
                  return (
                    r.setActiveLink(c),
                    a.props.hashSpy && $t.changeHash(c),
                    a.props.spy &&
                      (a.setState({ active: !0 }),
                      a.props.onSetActive && a.props.onSetActive(c)),
                    wn.updateStates()
                  );
              }
            });
        };
      return (i.propTypes = ih), (i.defaultProps = { offset: 0 }), i;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        rh(i, r);
        function i(o) {
          th(this, i);
          var s = nh(
            this,
            (i.__proto__ || Object.getPrototypeOf(i)).call(this, o)
          );
          return (s.childBindings = { domNode: null }), s;
        }
        return (
          eh(i, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (s) {
                this.props.name !== s.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                qa.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (s) {
                qa.register(s, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return Po.createElement(
                  t,
                  Xa({}, this.props, { parentBindings: this.childBindings })
                );
              },
            },
          ]),
          i
        );
      })(Po.Component);
      return (n.propTypes = { name: re.string, id: re.string }), n;
    },
  },
  kE = TE;
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.Helpers =
  ue.ScrollElement =
  ue.ScrollLink =
  ue.animateScroll =
  ue.scrollSpy =
  ue.Events =
  ue.scroller =
  ue.Element =
  ue.Button =
  ws =
  ue.Link =
    void 0;
var EE = nf,
  jy = Tt(EE),
  _E = lf,
  Dy = Tt(_E),
  CE = uf,
  Ry = Tt(CE),
  OE = Lr,
  Ay = Tt(OE),
  bE = Ki,
  Ny = Tt(bE),
  ME = Hi,
  zy = Tt(ME),
  LE = qs,
  Iy = Tt(LE),
  jE = Bi,
  Vy = Tt(jE),
  DE = na,
  Fy = Tt(DE),
  RE = kE,
  $y = Tt(RE);
function Tt(e) {
  return e && e.__esModule ? e : { default: e };
}
var ws = (ue.Link = jy.default);
ue.Button = Dy.default;
ue.Element = Ry.default;
ue.scroller = Ay.default;
ue.Events = Ny.default;
ue.scrollSpy = zy.default;
ue.animateScroll = Iy.default;
ue.ScrollLink = Vy.default;
ue.ScrollElement = Fy.default;
ue.Helpers = $y.default;
ue.default = {
  Link: jy.default,
  Button: Dy.default,
  Element: Ry.default,
  scroller: Ay.default,
  Events: Ny.default,
  scrollSpy: zy.default,
  animateScroll: Iy.default,
  ScrollLink: Vy.default,
  ScrollElement: Fy.default,
  Helpers: $y.default,
};
var Fo = {},
  By;
Object.defineProperty(Fo, "__esModule", { value: !0 });
var Gr = T,
  mt = R,
  lt = function () {
    return (
      (lt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      lt.apply(this, arguments)
    );
  };
function AE(e, t) {
  var n, r;
  switch (t.type) {
    case "TYPE":
      return lt(lt({}, e), {
        speed: t.speed,
        text:
          (n = t.payload) === null || n === void 0
            ? void 0
            : n.substring(0, e.text.length + 1),
      });
    case "DELAY":
      return lt(lt({}, e), { speed: t.payload });
    case "DELETE":
      return lt(lt({}, e), {
        speed: t.speed,
        text:
          (r = t.payload) === null || r === void 0
            ? void 0
            : r.substring(0, e.text.length - 1),
      });
    case "COUNT":
      return lt(lt({}, e), { count: e.count + 1 });
    default:
      return e;
  }
}
var oh = function (e) {
    var t = e.words,
      n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
      r = e.loop,
      i = r === void 0 ? 1 : r,
      o = e.typeSpeed,
      s = o === void 0 ? 80 : o,
      a = e.deleteSpeed,
      l = a === void 0 ? 50 : a,
      u = e.delaySpeed,
      c = u === void 0 ? 1500 : u,
      f = e.onLoopDone,
      d = e.onType,
      v = e.onDelete,
      y = e.onDelay,
      g = mt.useReducer(AE, { speed: s, text: "", count: 0 }),
      x = g[0],
      h = x.speed,
      p = x.text,
      m = x.count,
      w = g[1],
      S = mt.useRef(0),
      P = mt.useRef(!1),
      E = mt.useRef(!1),
      _ = mt.useRef(!1),
      C = mt.useRef(!1),
      k = mt.useCallback(
        function () {
          var j = m % n.length,
            D = n[j];
          E.current
            ? (w({ type: "DELETE", payload: D, speed: l }),
              p === "" && ((E.current = !1), w({ type: "COUNT" })))
            : (w({ type: "TYPE", payload: D, speed: s }),
              (_.current = !0),
              p === D &&
                (w({ type: "DELAY", payload: c }),
                (_.current = !1),
                (C.current = !0),
                setTimeout(function () {
                  (C.current = !1), (E.current = !0);
                }, c),
                i > 0 &&
                  ((S.current += 1),
                  S.current / n.length === i &&
                    ((C.current = !1), (P.current = !0))))),
            _.current && d && d(S.current),
            E.current && v && v(),
            C.current && y && y();
        },
        [m, c, l, i, s, n, p, d, v, y]
      );
    return (
      mt.useEffect(
        function () {
          var j = setTimeout(k, h);
          return (
            P.current && clearTimeout(j),
            function () {
              return clearTimeout(j);
            }
          );
        },
        [k, h]
      ),
      mt.useEffect(
        function () {
          f && P.current && f();
        },
        [f]
      ),
      [
        p,
        {
          isType: _.current,
          isDelay: C.current,
          isDelete: E.current,
          isDone: P.current,
        },
      ]
    );
  },
  NE = "styles-module_blinkingCursor__yugAC",
  zE = "styles-module_blinking__9VXRT";
(function (e, t) {
  t === void 0 && (t = {});
  var n = t.insertAt;
  if (typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0],
      i = document.createElement("style");
    (i.type = "text/css"),
      n === "top" && r.firstChild
        ? r.insertBefore(i, r.firstChild)
        : r.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e));
  }
})(
  ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
);
var sh = mt.memo(function (e) {
  var t = e.cursorBlinking,
    n = t === void 0 || t,
    r = e.cursorStyle,
    i = r === void 0 ? "|" : r,
    o = e.cursorColor,
    s = o === void 0 ? "inherit" : o;
  return Gr.jsx(
    "span",
    lt(
      {
        style: { color: s },
        className: "".concat(NE, " ").concat(n ? zE : ""),
      },
      { children: i }
    )
  );
});
(Fo.Cursor = sh),
  (By = Fo.Typewriter =
    function (e) {
      var t = e.words,
        n =
          t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
        r = e.loop,
        i = r === void 0 ? 1 : r,
        o = e.typeSpeed,
        s = o === void 0 ? 80 : o,
        a = e.deleteSpeed,
        l = a === void 0 ? 50 : a,
        u = e.delaySpeed,
        c = u === void 0 ? 1500 : u,
        f = e.cursor,
        d = f !== void 0 && f,
        v = e.cursorStyle,
        y = v === void 0 ? "|" : v,
        g = e.cursorColor,
        x = g === void 0 ? "inherit" : g,
        h = e.cursorBlinking,
        p = h === void 0 || h,
        m = e.onLoopDone,
        w = e.onType,
        S = e.onDelay,
        P = e.onDelete,
        E = oh({
          words: n,
          loop: i,
          typeSpeed: s,
          deleteSpeed: l,
          delaySpeed: c,
          onLoopDone: m,
          onType: w,
          onDelay: S,
          onDelete: P,
        })[0];
      return Gr.jsxs(Gr.Fragment, {
        children: [
          Gr.jsx("span", { children: E }),
          d &&
            Gr.jsx(sh, { cursorStyle: y, cursorColor: x, cursorBlinking: p }),
        ],
      });
    }),
  (Fo.useTypewriter = oh);
const IE = "./assets/IMG_20241122_155102115(1)-CKmGhIqK.jpg",
  VE = () =>
    T.jsx("div", {
      name: "home",
      className:
        "pt-28 h-screen w-full bg-gradient-to-b from-black to-gray-800",
      children: T.jsxs("div", {
        className:
          "max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4",
        children: [
          T.jsxs("div", {
            className:
              "flex flex-col justify-center h-full w-full text-center md:text-left",
            children: [
              T.jsx(ai.h2, {
                className: "text-4xl sm:text-6xl font-bold text-white",
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: "easeOut" },
                children: "I'm Prakhar Mathur",
              }),
              T.jsx("p", {
                className:
                  "text-slate-400 py-4 max-w-md mx-auto md:mx-0 text-lg sm:text-xl",
                children: T.jsx("span", {
                  children: T.jsx(By, {
                    words: [
                      "Site Reliability Engineer",
                      "DevOps Engineer",
                      "Frontend Developer",
                      "Data Analyst",
                      "Machine Learning Engineer",
                    ],
                    loop: 0,
                    cursor: !0,
                    cursorStyle: "|",
                    typeSpeed: 70,
                    deleteSpeed: 50,
                    delaySpeed: 1e3,
                  }),
                }),
              }),
              T.jsx(ai.div, {
                className: "mt-4",
                initial: { scale: 0.9 },
                animate: { scale: 1 },
                whileHover: { scale: 1.1 },
                transition: { duration: 0.3 },
                children: T.jsxs(ws, {
                  to: "portfolio",
                  smooth: !0,
                  duration: 500,
                  className:
                    "group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-[#60efff] to-[#0061ff] hover:scale-105 duration-300",
                  children: [
                    "Portfolio",
                    T.jsx("span", {
                      className: "group-hover:rotate-90 duration-300",
                      children: T.jsx(LT, { size: 25, className: "ml-1" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          T.jsx("div", {
            className:
              "w-full md:w-full md:h-full flex justify-center items-center",
            children: T.jsx("div", {
              className:
                "rounded-2xl overflow-hidden w-full md:w-10/12 lg:w-11/12 xl:w-full",
              children: T.jsx("img", {
                src: IE,
                alt: "Prakhar Mathur",
                className: "w-full h-auto object-cover",
                style: {
                  objectPosition: "center top",
                  transform: "scale(1.2)",
                },
              }),
            }),
          }),
        ],
      }),
    }),
  FE = "./assets/Prakhar_mathur_logoWhite-C_FdjS5F.png",
  $E = () => {
    const [e, t] = R.useState(!1),
      n = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "portfolio" },
        { id: 4, link: "skills" },
        { id: 5, link: "experience" },
        { id: 6, link: "contact" },
      ];
    return T.jsxs("div", {
      className:
        "flex justify-between items-center w-full h-20 text-white bg-black fixed z-50 px-4 sm:px-8 lg:px-20",
      children: [
        T.jsx("div", {
          children: T.jsx(ai.figure, {
            className: "w-16 h-16",
            whileHover: { scale: 1.2 },
            transition: { type: "spring", stiffness: 300 },
            children: T.jsx("img", {
              src: FE,
              alt: "Logo",
              className: "cursor-pointer",
            }),
          }),
        }),
        T.jsxs("ul", {
          className: "hidden md:flex space-x-6 lg:space-x-8",
          children: [
            n.map(({ id: r, link: i }) =>
              T.jsxs(
                ai.li,
                {
                  whileHover: { scale: 1.1 },
                  transition: { type: "spring", stiffness: 200 },
                  className:
                    "flex items-center px-2 cursor-pointer capitalize font-medium text-white relative",
                  children: [
                    T.jsx(ws, {
                      to: i,
                      smooth: !0,
                      duration: 500,
                      className: "hover:text-[#0061ff] transition duration-200",
                      children: i,
                    }),
                    T.jsx(ai.div, {
                      className:
                        "absolute bottom-0 left-0 w-0 h-[2px] bg-[#0061ff]",
                      whileHover: { width: "100%" },
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }),
                  ],
                },
                r
              )
            ),
            T.jsx("li", {
              children: T.jsx("div", {
                className: "relative group",
                children: T.jsxs("a", {
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: "https://drive.google.com/file/d/1XZUV8UJaaP6FdoxNIhHCHc8lwkO1_idG/view?usp=drive_link",
                  className:
                    "relative text-white w-fit px-4 py-2 lg:px-5 lg:py-3 flex items-center overflow-hidden rounded-md bg-gradient-to-l from-[#60efff] to-[#0061ff] cursor-pointer",
                  children: [
                    T.jsxs("span", {
                      className: "relative z-10 flex items-center",
                      children: [
                        "Resume",
                        T.jsx(Td, { size: 20, className: "ml-1 lg:ml-2" }),
                      ],
                    }),
                    T.jsx("span", {
                      className:
                        "absolute inset-0 bg-gradient-to-l from-[#0061ff] to-[#60efff] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-in-out",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        T.jsx("div", {
          onClick: () => t(!e),
          className: "cursor-pointer pr-4 z-10 text-white md:hidden",
          children: e ? T.jsx(iS, { size: 30 }) : T.jsx(rS, { size: 30 }),
        }),
        e &&
          T.jsxs("ul", {
            className:
              "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white",
            children: [
              n.map(({ id: r, link: i }) =>
                T.jsx(
                  "li",
                  {
                    className:
                      "px-4 cursor-pointer capitalize py-6 text-2xl sm:text-3xl hover:text-[#0061ff]",
                    children: T.jsx(ws, {
                      onClick: () => t(!e),
                      to: i,
                      smooth: !0,
                      duration: 500,
                      children: i,
                    }),
                  },
                  r
                )
              ),
              T.jsx("li", {
                children: T.jsx("div", {
                  className: "relative group",
                  children: T.jsxs("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://drive.google.com/file/d/1tSEY1NWGAf4EGPlyCFDC09mNp7bIvPsz/view?usp=sharing",
                    className:
                      "relative text-white w-fit px-4 py-2 flex items-center overflow-hidden rounded-md bg-gradient-to-l from-[#60efff] to-[#0061ff] cursor-pointer",
                    children: [
                      T.jsxs("span", {
                        className: "relative z-10 flex items-center",
                        children: [
                          "Resume",
                          T.jsx(Td, { size: 20, className: "ml-2" }),
                        ],
                      }),
                      T.jsx("span", {
                        className:
                          "absolute inset-0 bg-gradient-to-l from-[#0061ff] to-[#60efff] transform scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-in-out",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
      ],
    });
  };
var Hy = {},
  Uy = {},
  ia = {},
  Wy = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  e.default = t;
})(Wy);
var BE = "Expected a function",
  ah = NaN,
  HE = "[object Symbol]",
  UE = /^\s+|\s+$/g,
  WE = /^[-+]0x[0-9a-f]+$/i,
  KE = /^0b[01]+$/i,
  GE = /^0o[0-7]+$/i,
  QE = parseInt,
  YE = typeof Qt == "object" && Qt && Qt.Object === Object && Qt,
  XE = typeof self == "object" && self && self.Object === Object && self,
  qE = YE || XE || Function("return this")(),
  ZE = Object.prototype,
  JE = ZE.toString,
  e_ = Math.max,
  t_ = Math.min,
  Za = function () {
    return qE.Date.now();
  };
function n_(e, t, n) {
  var r,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    c = !1,
    f = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(BE);
  (t = lh(t) || 0),
    wu(n) &&
      ((c = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? e_(lh(n.maxWait) || 0, t) : o),
      (d = "trailing" in n ? !!n.trailing : d));
  function v(P) {
    var E = r,
      _ = i;
    return (r = i = void 0), (u = P), (s = e.apply(_, E)), s;
  }
  function y(P) {
    return (u = P), (a = setTimeout(h, t)), c ? v(P) : s;
  }
  function g(P) {
    var E = P - l,
      _ = P - u,
      C = t - E;
    return f ? t_(C, o - _) : C;
  }
  function x(P) {
    var E = P - l,
      _ = P - u;
    return l === void 0 || E >= t || E < 0 || (f && _ >= o);
  }
  function h() {
    var P = Za();
    if (x(P)) return p(P);
    a = setTimeout(h, g(P));
  }
  function p(P) {
    return (a = void 0), d && r ? v(P) : ((r = i = void 0), s);
  }
  function m() {
    a !== void 0 && clearTimeout(a), (u = 0), (r = l = i = a = void 0);
  }
  function w() {
    return a === void 0 ? s : p(Za());
  }
  function S() {
    var P = Za(),
      E = x(P);
    if (((r = arguments), (i = this), (l = P), E)) {
      if (a === void 0) return y(l);
      if (f) return (a = setTimeout(h, t)), v(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), s;
  }
  return (S.cancel = m), (S.flush = w), S;
}
function wu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function r_(e) {
  return !!e && typeof e == "object";
}
function i_(e) {
  return typeof e == "symbol" || (r_(e) && JE.call(e) == HE);
}
function lh(e) {
  if (typeof e == "number") return e;
  if (i_(e)) return ah;
  if (wu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = wu(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(UE, "");
  var n = KE.test(e);
  return n || GE.test(e) ? QE(e.slice(2), n ? 2 : 8) : WE.test(e) ? ah : +e;
}
var o_ = n_,
  Ky = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var a = arguments[s];
        a && (o = i(o, r(a)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var s = "";
      for (var a in o) t.call(o, a) && o[a] && (s = i(s, a));
      return s;
    }
    function i(o, s) {
      return s ? (o ? o + " " + s : o + s) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Ky);
var oa = Ky.exports,
  M = {},
  ff = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(R);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var r = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (o) {
      return t.default.createElement("ul", { style: { display: "block" } }, o);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (o) {
      return t.default.createElement("button", null, o + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
    unslick: !1,
  };
  e.default = r;
})(ff);
Object.defineProperty(M, "__esModule", { value: !0 });
M.checkSpecKeys =
  M.checkNavigable =
  M.changeSlide =
  M.canUseDOM =
  M.canGoNext =
    void 0;
M.clamp = Qy;
M.extractObject = void 0;
M.filterSettings = S_;
M.validSettings =
  M.swipeStart =
  M.swipeMove =
  M.swipeEnd =
  M.slidesOnRight =
  M.slidesOnLeft =
  M.slideHandler =
  M.siblingDirection =
  M.safePreventDefault =
  M.lazyStartIndex =
  M.lazySlidesOnRight =
  M.lazySlidesOnLeft =
  M.lazyEndIndex =
  M.keyHandler =
  M.initializedState =
  M.getWidth =
  M.getTrackLeft =
  M.getTrackCSS =
  M.getTrackAnimateCSS =
  M.getTotalSlides =
  M.getSwipeDirection =
  M.getSlideCount =
  M.getRequiredLazySlides =
  M.getPreClones =
  M.getPostClones =
  M.getOnDemandLazySlides =
  M.getNavigableIndexes =
  M.getHeight =
    void 0;
var s_ = Gy(R),
  a_ = Gy(ff);
function Gy(e) {
  return e && e.__esModule ? e : { default: e };
}
function ji(e) {
  "@babel/helpers - typeof";
  return (
    (ji =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ji(e)
  );
}
function uh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uh(Object(n), !0).forEach(function (r) {
          l_(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : uh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function l_(e, t, n) {
  return (
    (t = u_(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function u_(e) {
  var t = c_(e, "string");
  return ji(t) == "symbol" ? t : String(t);
}
function c_(e, t) {
  if (ji(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ji(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qy(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var ur = (M.safePreventDefault = function (t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault();
  }),
  Yy = (M.getOnDemandLazySlides = function (t) {
    for (var n = [], r = Xy(t), i = qy(t), o = r; o < i; o++)
      t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
    return n;
  });
M.getRequiredLazySlides = function (t) {
  for (var n = [], r = Xy(t), i = qy(t), o = r; o < i; o++) n.push(o);
  return n;
};
var Xy = (M.lazyStartIndex = function (t) {
    return t.currentSlide - f_(t);
  }),
  qy = (M.lazyEndIndex = function (t) {
    return t.currentSlide + d_(t);
  }),
  f_ = (M.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  d_ = (M.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
          1 +
          (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  Su = (M.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  Zy = (M.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  Jy = (M.getSwipeDirection = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r,
      i,
      o,
      s;
    return (
      (r = t.startX - t.curX),
      (i = t.startY - t.curY),
      (o = Math.atan2(i, r)),
      (s = Math.round((o * 180) / Math.PI)),
      s < 0 && (s = 360 - Math.abs(s)),
      (s <= 45 && s >= 0) || (s <= 360 && s >= 315)
        ? "left"
        : s >= 135 && s <= 225
        ? "right"
        : n === !0
        ? s >= 35 && s <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  e0 = (M.canGoNext = function (t) {
    var n = !0;
    return (
      t.infinite ||
        (((t.centerMode && t.currentSlide >= t.slideCount - 1) ||
          t.slideCount <= t.slidesToShow ||
          t.currentSlide >= t.slideCount - t.slidesToShow) &&
          (n = !1)),
      n
    );
  });
M.extractObject = function (t, n) {
  var r = {};
  return (
    n.forEach(function (i) {
      return (r[i] = t[i]);
    }),
    r
  );
};
M.initializedState = function (t) {
  var n = s_.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(Su(r)),
    o = t.trackRef && t.trackRef.node,
    s = Math.ceil(Su(o)),
    a;
  if (t.vertical) a = i;
  else {
    var l = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (l *= i / 100),
      (a = Math.ceil((i - l) / t.slidesToShow));
  }
  var u = r && Zy(r.querySelector('[data-index="0"]')),
    c = u * t.slidesToShow,
    f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
  var d = t.lazyLoadedList || [],
    v = Yy(J(J({}, t), {}, { currentSlide: f, lazyLoadedList: d }));
  d = d.concat(v);
  var y = {
    slideCount: n,
    slideWidth: a,
    listWidth: i,
    trackWidth: s,
    currentSlide: f,
    slideHeight: u,
    listHeight: c,
    lazyLoadedList: d,
  };
  return t.autoplaying === null && t.autoplay && (y.autoplaying = "playing"), y;
};
M.slideHandler = function (t) {
  var n = t.waitForAnimate,
    r = t.animating,
    i = t.fade,
    o = t.infinite,
    s = t.index,
    a = t.slideCount,
    l = t.lazyLoad,
    u = t.currentSlide,
    c = t.centerMode,
    f = t.slidesToScroll,
    d = t.slidesToShow,
    v = t.useCSS,
    y = t.lazyLoadedList;
  if (n && r) return {};
  var g = s,
    x,
    h,
    p,
    m = {},
    w = {},
    S = o ? s : Qy(s, 0, a - 1);
  if (i) {
    if (!o && (s < 0 || s >= a)) return {};
    s < 0 ? (g = s + a) : s >= a && (g = s - a),
      l && y.indexOf(g) < 0 && (y = y.concat(g)),
      (m = {
        animating: !0,
        currentSlide: g,
        lazyLoadedList: y,
        targetSlide: g,
      }),
      (w = { animating: !1, targetSlide: g });
  } else
    (x = g),
      g < 0
        ? ((x = g + a), o ? a % f !== 0 && (x = a - (a % f)) : (x = 0))
        : !e0(t) && g > u
        ? (g = x = u)
        : c && g >= a
        ? ((g = o ? a : a - 1), (x = o ? 0 : a - 1))
        : g >= a && ((x = g - a), o ? a % f !== 0 && (x = 0) : (x = a - d)),
      !o && g + d >= a && (x = a - d),
      (h = xs(J(J({}, t), {}, { slideIndex: g }))),
      (p = xs(J(J({}, t), {}, { slideIndex: x }))),
      o || (h === p && (g = x), (h = p)),
      l && (y = y.concat(Yy(J(J({}, t), {}, { currentSlide: g })))),
      v
        ? ((m = {
            animating: !0,
            currentSlide: x,
            trackStyle: t0(J(J({}, t), {}, { left: h })),
            lazyLoadedList: y,
            targetSlide: S,
          }),
          (w = {
            animating: !1,
            currentSlide: x,
            trackStyle: Ss(J(J({}, t), {}, { left: p })),
            swipeLeft: null,
            targetSlide: S,
          }))
        : (m = {
            currentSlide: x,
            trackStyle: Ss(J(J({}, t), {}, { left: p })),
            lazyLoadedList: y,
            targetSlide: S,
          });
  return { state: m, nextState: w };
};
M.changeSlide = function (t, n) {
  var r,
    i,
    o,
    s,
    a,
    l = t.slidesToScroll,
    u = t.slidesToShow,
    c = t.slideCount,
    f = t.currentSlide,
    d = t.targetSlide,
    v = t.lazyLoad,
    y = t.infinite;
  if (((s = c % l !== 0), (r = s ? 0 : (c - f) % l), n.message === "previous"))
    (o = r === 0 ? l : u - r),
      (a = f - o),
      v && !y && ((i = f - o), (a = i === -1 ? c - 1 : i)),
      y || (a = d - l);
  else if (n.message === "next")
    (o = r === 0 ? l : r),
      (a = f + o),
      v && !y && (a = ((f + l) % c) + r),
      y || (a = d + l);
  else if (n.message === "dots") a = n.index * n.slidesToScroll;
  else if (n.message === "children") {
    if (((a = n.index), y)) {
      var g = v_(J(J({}, t), {}, { targetSlide: a }));
      a > n.currentSlide && g === "left"
        ? (a = a - c)
        : a < n.currentSlide && g === "right" && (a = a + c);
    }
  } else n.message === "index" && (a = Number(n.index));
  return a;
};
M.keyHandler = function (t, n, r) {
  return t.target.tagName.match("TEXTAREA|INPUT|SELECT") || !n
    ? ""
    : t.keyCode === 37
    ? r
      ? "next"
      : "previous"
    : t.keyCode === 39
    ? r
      ? "previous"
      : "next"
    : "";
};
M.swipeStart = function (t, n, r) {
  return (
    t.target.tagName === "IMG" && ur(t),
    !n || (!r && t.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: t.touches ? t.touches[0].pageX : t.clientX,
            startY: t.touches ? t.touches[0].pageY : t.clientY,
            curX: t.touches ? t.touches[0].pageX : t.clientX,
            curY: t.touches ? t.touches[0].pageY : t.clientY,
          },
        }
  );
};
M.swipeMove = function (t, n) {
  var r = n.scrolling,
    i = n.animating,
    o = n.vertical,
    s = n.swipeToSlide,
    a = n.verticalSwiping,
    l = n.rtl,
    u = n.currentSlide,
    c = n.edgeFriction,
    f = n.edgeDragged,
    d = n.onEdge,
    v = n.swiped,
    y = n.swiping,
    g = n.slideCount,
    x = n.slidesToScroll,
    h = n.infinite,
    p = n.touchObject,
    m = n.swipeEvent,
    w = n.listHeight,
    S = n.listWidth;
  if (!r) {
    if (i) return ur(t);
    o && s && a && ur(t);
    var P,
      E = {},
      _ = xs(n);
    (p.curX = t.touches ? t.touches[0].pageX : t.clientX),
      (p.curY = t.touches ? t.touches[0].pageY : t.clientY),
      (p.swipeLength = Math.round(Math.sqrt(Math.pow(p.curX - p.startX, 2))));
    var C = Math.round(Math.sqrt(Math.pow(p.curY - p.startY, 2)));
    if (!a && !y && C > 10) return { scrolling: !0 };
    a && (p.swipeLength = C);
    var k = (l ? -1 : 1) * (p.curX > p.startX ? 1 : -1);
    a && (k = p.curY > p.startY ? 1 : -1);
    var j = Math.ceil(g / x),
      D = Jy(n.touchObject, a),
      N = p.swipeLength;
    return (
      h ||
        (((u === 0 && (D === "right" || D === "down")) ||
          (u + 1 >= j && (D === "left" || D === "up")) ||
          (!e0(n) && (D === "left" || D === "up"))) &&
          ((N = p.swipeLength * c),
          f === !1 && d && (d(D), (E.edgeDragged = !0)))),
      !v && m && (m(D), (E.swiped = !0)),
      o ? (P = _ + N * (w / S) * k) : l ? (P = _ - N * k) : (P = _ + N * k),
      a && (P = _ + N * k),
      (E = J(
        J({}, E),
        {},
        {
          touchObject: p,
          swipeLeft: P,
          trackStyle: Ss(J(J({}, n), {}, { left: P })),
        }
      )),
      Math.abs(p.curX - p.startX) < Math.abs(p.curY - p.startY) * 0.8 ||
        (p.swipeLength > 10 && ((E.swiping = !0), ur(t))),
      E
    );
  }
};
M.swipeEnd = function (t, n) {
  var r = n.dragging,
    i = n.swipe,
    o = n.touchObject,
    s = n.listWidth,
    a = n.touchThreshold,
    l = n.verticalSwiping,
    u = n.listHeight,
    c = n.swipeToSlide,
    f = n.scrolling,
    d = n.onSwipe,
    v = n.targetSlide,
    y = n.currentSlide,
    g = n.infinite;
  if (!r) return i && ur(t), {};
  var x = l ? u / a : s / a,
    h = Jy(o, l),
    p = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (f || !o.swipeLength) return p;
  if (o.swipeLength > x) {
    ur(t), d && d(h);
    var m,
      w,
      S = g ? y : v;
    switch (h) {
      case "left":
      case "up":
        (w = S + fh(n)), (m = c ? ch(n, w) : w), (p.currentDirection = 0);
        break;
      case "right":
      case "down":
        (w = S - fh(n)), (m = c ? ch(n, w) : w), (p.currentDirection = 1);
        break;
      default:
        m = S;
    }
    p.triggerSlideHandler = m;
  } else {
    var P = xs(n);
    p.trackStyle = t0(J(J({}, n), {}, { left: P }));
  }
  return p;
};
var p_ = (M.getNavigableIndexes = function (t) {
    for (
      var n = t.infinite ? t.slideCount * 2 : t.slideCount,
        r = t.infinite ? t.slidesToShow * -1 : 0,
        i = t.infinite ? t.slidesToShow * -1 : 0,
        o = [];
      r < n;

    )
      o.push(r),
        (r = i + t.slidesToScroll),
        (i += Math.min(t.slidesToScroll, t.slidesToShow));
    return o;
  }),
  ch = (M.checkNavigable = function (t, n) {
    var r = p_(t),
      i = 0;
    if (n > r[r.length - 1]) n = r[r.length - 1];
    else
      for (var o in r) {
        if (n < r[o]) {
          n = i;
          break;
        }
        i = r[o];
      }
    return n;
  }),
  fh = (M.getSlideCount = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var r,
        i = t.listRef,
        o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(o).every(function (l) {
          if (t.vertical) {
            if (l.offsetTop + Zy(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
          } else if (l.offsetLeft - n + Su(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
          return !0;
        }),
        !r)
      )
        return 0;
      var s = t.rtl === !0 ? t.slideCount - t.currentSlide : t.currentSlide,
        a = Math.abs(r.dataset.index - s) || 1;
      return a;
    } else return t.slidesToScroll;
  }),
  df = (M.checkSpecKeys = function (t, n) {
    return n.reduce(function (r, i) {
      return r && t.hasOwnProperty(i);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  Ss = (M.getTrackCSS = function (t) {
    df(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var n,
      r,
      i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (r = i * t.slideHeight) : (n = m_(t) * t.slideWidth);
    var o = { opacity: 1, transition: "", WebkitTransition: "" };
    if (t.useTransform) {
      var s = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        a = t.vertical
          ? "translate3d(0px, " + t.left + "px, 0px)"
          : "translate3d(" + t.left + "px, 0px, 0px)",
        l = t.vertical
          ? "translateY(" + t.left + "px)"
          : "translateX(" + t.left + "px)";
      o = J(J({}, o), {}, { WebkitTransform: s, transform: a, msTransform: l });
    } else t.vertical ? (o.top = t.left) : (o.left = t.left);
    return (
      t.fade && (o = { opacity: 1 }),
      n && (o.width = n),
      r && (o.height = r),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (t.vertical
          ? (o.marginTop = t.left + "px")
          : (o.marginLeft = t.left + "px")),
      o
    );
  }),
  t0 = (M.getTrackAnimateCSS = function (t) {
    df(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var n = Ss(t);
    return (
      t.useTransform
        ? ((n.WebkitTransition =
            "-webkit-transform " + t.speed + "ms " + t.cssEase),
          (n.transition = "transform " + t.speed + "ms " + t.cssEase))
        : t.vertical
        ? (n.transition = "top " + t.speed + "ms " + t.cssEase)
        : (n.transition = "left " + t.speed + "ms " + t.cssEase),
      n
    );
  }),
  xs = (M.getTrackLeft = function (t) {
    if (t.unslick) return 0;
    df(t, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var n = t.slideIndex,
      r = t.trackRef,
      i = t.infinite,
      o = t.centerMode,
      s = t.slideCount,
      a = t.slidesToShow,
      l = t.slidesToScroll,
      u = t.slideWidth,
      c = t.listWidth,
      f = t.variableWidth,
      d = t.slideHeight,
      v = t.fade,
      y = t.vertical,
      g = 0,
      x,
      h,
      p = 0;
    if (v || t.slideCount === 1) return 0;
    var m = 0;
    if (
      (i
        ? ((m = -$o(t)),
          s % l !== 0 && n + l > s && (m = -(n > s ? a - (n - s) : s % l)),
          o && (m += parseInt(a / 2)))
        : (s % l !== 0 && n + l > s && (m = a - (s % l)),
          o && (m = parseInt(a / 2))),
      (g = m * u),
      (p = m * d),
      y ? (x = n * d * -1 + p) : (x = n * u * -1 + g),
      f === !0)
    ) {
      var w,
        S = r && r.node;
      if (
        ((w = n + $o(t)),
        (h = S && S.childNodes[w]),
        (x = h ? h.offsetLeft * -1 : 0),
        o === !0)
      ) {
        (w = i ? n + $o(t) : n), (h = S && S.children[w]), (x = 0);
        for (var P = 0; P < w; P++)
          x -= S && S.children[P] && S.children[P].offsetWidth;
        (x -= parseInt(t.centerPadding)), (x += h && (c - h.offsetWidth) / 2);
      }
    }
    return x;
  }),
  $o = (M.getPreClones = function (t) {
    return t.unslick || !t.infinite
      ? 0
      : t.variableWidth
      ? t.slideCount
      : t.slidesToShow + (t.centerMode ? 1 : 0);
  }),
  h_ = (M.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  m_ = (M.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : $o(t) + t.slideCount + h_(t);
  }),
  v_ = (M.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + g_(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - y_(t)
      ? "right"
      : "left";
  }),
  g_ = (M.slidesOnRight = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var s = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (s += 1), i && n % 2 === 0 && (s += 1), s;
    }
    return i ? 0 : n - 1;
  }),
  y_ = (M.slidesOnLeft = function (t) {
    var n = t.slidesToShow,
      r = t.centerMode,
      i = t.rtl,
      o = t.centerPadding;
    if (r) {
      var s = (n - 1) / 2 + 1;
      return parseInt(o) > 0 && (s += 1), !i && n % 2 === 0 && (s += 1), s;
    }
    return i ? n - 1 : 0;
  });
M.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var w_ = (M.validSettings = Object.keys(a_.default));
function S_(e) {
  return w_.reduce(function (t, n) {
    return e.hasOwnProperty(n) && (t[n] = e[n]), t;
  }, {});
}
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.Track = void 0;
var Wt = n0(R),
  Ja = n0(oa),
  el = M;
function n0(e) {
  return e && e.__esModule ? e : { default: e };
}
function xr(e) {
  "@babel/helpers - typeof";
  return (
    (xr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    xr(e)
  );
}
function xu() {
  return (
    (xu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xu.apply(this, arguments)
  );
}
function x_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function P_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, i0(r.key), r);
  }
}
function T_(e, t, n) {
  return (
    t && P_(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function k_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Pu(e, t);
}
function Pu(e, t) {
  return (
    (Pu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Pu(e, t)
  );
}
function E_(e) {
  var t = r0();
  return function () {
    var r = Ps(e),
      i;
    if (t) {
      var o = Ps(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return __(this, i);
  };
}
function __(e, t) {
  if (t && (xr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Tu(e);
}
function Tu(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function r0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (r0 = function () {
    return !!e;
  })();
}
function Ps(e) {
  return (
    (Ps = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ps(e)
  );
}
function dh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? dh(Object(n), !0).forEach(function (r) {
          ku(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : dh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ku(e, t, n) {
  return (
    (t = i0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function i0(e) {
  var t = C_(e, "string");
  return xr(t) == "symbol" ? t : String(t);
}
function C_(e, t) {
  if (xr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (xr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tl = function (t) {
    var n, r, i, o, s;
    t.rtl ? (s = t.slideCount - 1 - t.index) : (s = t.index),
      (i = s < 0 || s >= t.slideCount),
      t.centerMode
        ? ((o = Math.floor(t.slidesToShow / 2)),
          (r = (s - t.currentSlide) % t.slideCount === 0),
          s > t.currentSlide - o - 1 && s <= t.currentSlide + o && (n = !0))
        : (n = t.currentSlide <= s && s < t.currentSlide + t.slidesToShow);
    var a;
    t.targetSlide < 0
      ? (a = t.targetSlide + t.slideCount)
      : t.targetSlide >= t.slideCount
      ? (a = t.targetSlide - t.slideCount)
      : (a = t.targetSlide);
    var l = s === a;
    return {
      "slick-slide": !0,
      "slick-active": n,
      "slick-center": r,
      "slick-cloned": i,
      "slick-current": l,
    };
  },
  O_ = function (t) {
    var n = {};
    return (
      (t.variableWidth === void 0 || t.variableWidth === !1) &&
        (n.width = t.slideWidth),
      t.fade &&
        ((n.position = "relative"),
        t.vertical
          ? (n.top = -t.index * parseInt(t.slideHeight))
          : (n.left = -t.index * parseInt(t.slideWidth)),
        (n.opacity = t.currentSlide === t.index ? 1 : 0),
        (n.zIndex = t.currentSlide === t.index ? 999 : 998),
        t.useCSS &&
          (n.transition =
            "opacity " +
            t.speed +
            "ms " +
            t.cssEase +
            ", visibility " +
            t.speed +
            "ms " +
            t.cssEase)),
      n
    );
  },
  nl = function (t, n) {
    return t.key || n;
  },
  b_ = function (t) {
    var n,
      r = [],
      i = [],
      o = [],
      s = Wt.default.Children.count(t.children),
      a = (0, el.lazyStartIndex)(t),
      l = (0, el.lazyEndIndex)(t);
    return (
      Wt.default.Children.forEach(t.children, function (u, c) {
        var f,
          d = {
            message: "children",
            index: c,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(c) >= 0)
          ? (f = u)
          : (f = Wt.default.createElement("div", null));
        var v = O_(Ne(Ne({}, t), {}, { index: c })),
          y = f.props.className || "",
          g = tl(Ne(Ne({}, t), {}, { index: c }));
        if (
          (r.push(
            Wt.default.cloneElement(f, {
              key: "original" + nl(f, c),
              "data-index": c,
              className: (0, Ja.default)(g, y),
              tabIndex: "-1",
              "aria-hidden": !g["slick-active"],
              style: Ne(Ne({ outline: "none" }, f.props.style || {}), v),
              onClick: function (p) {
                f.props && f.props.onClick && f.props.onClick(p),
                  t.focusOnSelect && t.focusOnSelect(d);
              },
            })
          ),
          t.infinite && t.fade === !1)
        ) {
          var x = s - c;
          x <= (0, el.getPreClones)(t) &&
            ((n = -x),
            n >= a && (f = u),
            (g = tl(Ne(Ne({}, t), {}, { index: n }))),
            i.push(
              Wt.default.cloneElement(f, {
                key: "precloned" + nl(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, Ja.default)(g, y),
                "aria-hidden": !g["slick-active"],
                style: Ne(Ne({}, f.props.style || {}), v),
                onClick: function (p) {
                  f.props && f.props.onClick && f.props.onClick(p),
                    t.focusOnSelect && t.focusOnSelect(d);
                },
              })
            )),
            (n = s + c),
            n < l && (f = u),
            (g = tl(Ne(Ne({}, t), {}, { index: n }))),
            o.push(
              Wt.default.cloneElement(f, {
                key: "postcloned" + nl(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, Ja.default)(g, y),
                "aria-hidden": !g["slick-active"],
                style: Ne(Ne({}, f.props.style || {}), v),
                onClick: function (p) {
                  f.props && f.props.onClick && f.props.onClick(p),
                    t.focusOnSelect && t.focusOnSelect(d);
                },
              })
            );
        }
      }),
      t.rtl ? i.concat(r, o).reverse() : i.concat(r, o)
    );
  };
sa.Track = (function (e) {
  k_(n, e);
  var t = E_(n);
  function n() {
    var r;
    x_(this, n);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      ku(Tu(r), "node", null),
      ku(Tu(r), "handleRef", function (a) {
        r.node = a;
      }),
      r
    );
  }
  return (
    T_(n, [
      {
        key: "render",
        value: function () {
          var i = b_(this.props),
            o = this.props,
            s = o.onMouseEnter,
            a = o.onMouseOver,
            l = o.onMouseLeave,
            u = { onMouseEnter: s, onMouseOver: a, onMouseLeave: l };
          return Wt.default.createElement(
            "div",
            xu(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              u
            ),
            i
          );
        },
      },
    ]),
    n
  );
})(Wt.default.PureComponent);
var aa = {};
function Pr(e) {
  "@babel/helpers - typeof";
  return (
    (Pr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Pr(e)
  );
}
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.Dots = void 0;
var To = o0(R),
  M_ = o0(oa),
  ph = M;
function o0(e) {
  return e && e.__esModule ? e : { default: e };
}
function hh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function L_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hh(Object(n), !0).forEach(function (r) {
          j_(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function j_(e, t, n) {
  return (
    (t = s0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function D_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function R_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, s0(r.key), r);
  }
}
function A_(e, t, n) {
  return (
    t && R_(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function s0(e) {
  var t = N_(e, "string");
  return Pr(t) == "symbol" ? t : String(t);
}
function N_(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Pr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function z_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Eu(e, t);
}
function Eu(e, t) {
  return (
    (Eu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Eu(e, t)
  );
}
function I_(e) {
  var t = a0();
  return function () {
    var r = Ts(e),
      i;
    if (t) {
      var o = Ts(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return V_(this, i);
  };
}
function V_(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return F_(e);
}
function F_(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function a0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (a0 = function () {
    return !!e;
  })();
}
function Ts(e) {
  return (
    (Ts = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ts(e)
  );
}
var $_ = function (t) {
  var n;
  return (
    t.infinite
      ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
      : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    n
  );
};
aa.Dots = (function (e) {
  z_(n, e);
  var t = I_(n);
  function n() {
    return D_(this, n), t.apply(this, arguments);
  }
  return (
    A_(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o.preventDefault(), this.props.clickHandler(i);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var i = this.props,
              o = i.onMouseEnter,
              s = i.onMouseOver,
              a = i.onMouseLeave,
              l = i.infinite,
              u = i.slidesToScroll,
              c = i.slidesToShow,
              f = i.slideCount,
              d = i.currentSlide,
              v = $_({
                slideCount: f,
                slidesToScroll: u,
                slidesToShow: c,
                infinite: l,
              }),
              y = { onMouseEnter: o, onMouseOver: s, onMouseLeave: a },
              g = [],
              x = 0;
            x < v;
            x++
          ) {
            var h = (x + 1) * u - 1,
              p = l ? h : (0, ph.clamp)(h, 0, f - 1),
              m = p - (u - 1),
              w = l ? m : (0, ph.clamp)(m, 0, f - 1),
              S = (0, M_.default)({
                "slick-active": l ? d >= w && d <= p : d === w,
              }),
              P = {
                message: "dots",
                index: x,
                slidesToScroll: u,
                currentSlide: d,
              },
              E = this.clickHandler.bind(this, P);
            g = g.concat(
              To.default.createElement(
                "li",
                { key: x, className: S },
                To.default.cloneElement(this.props.customPaging(x), {
                  onClick: E,
                })
              )
            );
          }
          return To.default.cloneElement(
            this.props.appendDots(g),
            L_({ className: this.props.dotsClass }, y)
          );
        },
      },
    ]),
    n
  );
})(To.default.PureComponent);
var Tr = {};
function kr(e) {
  "@babel/helpers - typeof";
  return (
    (kr =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    kr(e)
  );
}
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.PrevArrow = Tr.NextArrow = void 0;
var cr = u0(R),
  l0 = u0(oa),
  B_ = M;
function u0(e) {
  return e && e.__esModule ? e : { default: e };
}
function ks() {
  return (
    (ks = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ks.apply(this, arguments)
  );
}
function mh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mh(Object(n), !0).forEach(function (r) {
          H_(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : mh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function H_(e, t, n) {
  return (
    (t = d0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function c0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U_(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, d0(r.key), r);
  }
}
function f0(e, t, n) {
  return (
    t && U_(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function d0(e) {
  var t = W_(e, "string");
  return kr(t) == "symbol" ? t : String(t);
}
function W_(e, t) {
  if (kr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function p0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && _u(e, t);
}
function _u(e, t) {
  return (
    (_u = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    _u(e, t)
  );
}
function h0(e) {
  var t = m0();
  return function () {
    var r = _s(e),
      i;
    if (t) {
      var o = _s(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return K_(this, i);
  };
}
function K_(e, t) {
  if (t && (kr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return G_(e);
}
function G_(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function m0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (m0 = function () {
    return !!e;
  })();
}
function _s(e) {
  return (
    (_s = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    _s(e)
  );
}
Tr.PrevArrow = (function (e) {
  p0(n, e);
  var t = h0(n);
  function n() {
    return c0(this, n), t.apply(this, arguments);
  }
  return (
    f0(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-prev": !0 },
            o = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
              key: "0",
              "data-role": "none",
              className: (0, l0.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            a = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.prevArrow
              ? (l = cr.default.cloneElement(
                  this.props.prevArrow,
                  Es(Es({}, s), a)
                ))
              : (l = cr.default.createElement(
                  "button",
                  ks({ key: "0", type: "button" }, s),
                  " ",
                  "Previous"
                )),
            l
          );
        },
      },
    ]),
    n
  );
})(cr.default.PureComponent);
Tr.NextArrow = (function (e) {
  p0(n, e);
  var t = h0(n);
  function n() {
    return c0(this, n), t.apply(this, arguments);
  }
  return (
    f0(n, [
      {
        key: "clickHandler",
        value: function (i, o) {
          o && o.preventDefault(), this.props.clickHandler(i, o);
        },
      },
      {
        key: "render",
        value: function () {
          var i = { "slick-arrow": !0, "slick-next": !0 },
            o = this.clickHandler.bind(this, { message: "next" });
          (0, B_.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
              key: "1",
              "data-role": "none",
              className: (0, l0.default)(i),
              style: { display: "block" },
              onClick: o,
            },
            a = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            l;
          return (
            this.props.nextArrow
              ? (l = cr.default.cloneElement(
                  this.props.nextArrow,
                  Es(Es({}, s), a)
                ))
              : (l = cr.default.createElement(
                  "button",
                  ks({ key: "1", type: "button" }, s),
                  " ",
                  "Next"
                )),
            l
          );
        },
      },
    ]),
    n
  );
})(cr.default.PureComponent);
var v0 = (function () {
    if (typeof Map < "u") return Map;
    function e(t, n) {
      var r = -1;
      return (
        t.some(function (i, o) {
          return i[0] === n ? ((r = o), !0) : !1;
        }),
        r
      );
    }
    return (function () {
      function t() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r];
          return i && i[1];
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n);
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r]);
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n);
          ~i && r.splice(i, 1);
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n);
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null);
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var s = o[i];
            n.call(r, s[1], s[0]);
          }
        }),
        t
      );
    })();
  })(),
  Cu =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  Cs = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  Q_ = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Cs)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  Y_ = 2;
function X_(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function o() {
    n && ((n = !1), e()), r && a();
  }
  function s() {
    Q_(o);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - i < Y_) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(s, t);
    i = l;
  }
  return a;
}
var q_ = 20,
  Z_ = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  J_ = typeof MutationObserver < "u",
  eC = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = X_(this.refresh.bind(this), q_));
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_();
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t);
        ~r && n.splice(r, 1),
          !n.length && this.connected_ && this.disconnect_();
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_();
        t && this.refresh();
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive();
        });
        return (
          t.forEach(function (n) {
            return n.broadcastActive();
          }),
          t.length > 0
        );
      }),
      (e.prototype.connect_ = function () {
        !Cu ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          J_
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (e.prototype.disconnect_ = function () {
        !Cu ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? "" : n,
          i = Z_.some(function (o) {
            return !!~r.indexOf(o);
          });
        i && this.refresh();
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_;
      }),
      (e.instance_ = null),
      e
    );
  })(),
  g0 = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n];
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return e;
  },
  Er = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView;
    return t || Cs;
  },
  y0 = la(0, 0, 0, 0);
function Os(e) {
  return parseFloat(e) || 0;
}
function vh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var o = e["border-" + i + "-width"];
    return r + Os(o);
  }, 0);
}
function tC(e) {
  for (
    var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var o = i[r],
      s = e["padding-" + o];
    n[o] = Os(s);
  }
  return n;
}
function nC(e) {
  var t = e.getBBox();
  return la(0, 0, t.width, t.height);
}
function rC(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return y0;
  var r = Er(e).getComputedStyle(e),
    i = tC(r),
    o = i.left + i.right,
    s = i.top + i.bottom,
    a = Os(r.width),
    l = Os(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(a + o) !== t && (a -= vh(r, "left", "right") + o),
      Math.round(l + s) !== n && (l -= vh(r, "top", "bottom") + s)),
    !oC(e))
  ) {
    var u = Math.round(a + o) - t,
      c = Math.round(l + s) - n;
    Math.abs(u) !== 1 && (a -= u), Math.abs(c) !== 1 && (l -= c);
  }
  return la(i.left, i.top, a, l);
}
var iC = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof Er(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Er(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function oC(e) {
  return e === Er(e).document.documentElement;
}
function sC(e) {
  return Cu ? (iC(e) ? nC(e) : rC(e)) : y0;
}
function aC(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    s = Object.create(o.prototype);
  return (
    g0(s, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    s
  );
}
function la(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var lC = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = la(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = sC(this.target);
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        );
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_;
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        );
      }),
      e
    );
  })(),
  uC = (function () {
    function e(t, n) {
      var r = aC(n);
      g0(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  cC = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new v0()),
        typeof t != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof Er(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) ||
            (n.set(t, new lC(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(t instanceof Er(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var n = this.observations_;
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this));
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (e.prototype.gatherActive = function () {
        var t = this;
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n);
          });
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new uC(r.target, r.broadcastRect());
            });
          this.callback_.call(t, n, t), this.clearActive();
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      e
    );
  })(),
  w0 = typeof WeakMap < "u" ? new WeakMap() : new v0(),
  S0 = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = eC.getInstance(),
        r = new cC(t, n, this);
      w0.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  S0.prototype[e] = function () {
    var t;
    return (t = w0.get(this))[e].apply(t, arguments);
  };
});
var fC = (function () {
  return typeof Cs.ResizeObserver < "u" ? Cs.ResizeObserver : S0;
})();
const dC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: fC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  pC = E0(dC);
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.InnerSlider = void 0;
var Me = Yi(R),
  hC = Yi(Wy),
  mC = Yi(o_),
  vC = Yi(oa),
  te = M,
  gC = sa,
  yC = aa,
  gh = Tr,
  wC = Yi(pC);
function Yi(e) {
  return e && e.__esModule ? e : { default: e };
}
function An(e) {
  "@babel/helpers - typeof";
  return (
    (An =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    An(e)
  );
}
function bs() {
  return (
    (bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    bs.apply(this, arguments)
  );
}
function SC(e, t) {
  if (e == null) return {};
  var n = xC(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function xC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function yh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? yh(Object(n), !0).forEach(function (r) {
          B(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : yh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function PC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TC(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, P0(r.key), r);
  }
}
function kC(e, t, n) {
  return (
    t && TC(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function EC(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Ou(e, t);
}
function Ou(e, t) {
  return (
    (Ou = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Ou(e, t)
  );
}
function _C(e) {
  var t = x0();
  return function () {
    var r = Ms(e),
      i;
    if (t) {
      var o = Ms(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return CC(this, i);
  };
}
function CC(e, t) {
  if (t && (An(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return $(e);
}
function $(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function x0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (x0 = function () {
    return !!e;
  })();
}
function Ms(e) {
  return (
    (Ms = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ms(e)
  );
}
function B(e, t, n) {
  return (
    (t = P0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function P0(e) {
  var t = OC(e, "string");
  return An(t) == "symbol" ? t : String(t);
}
function OC(e, t) {
  if (An(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (An(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
ia.InnerSlider = (function (e) {
  EC(n, e);
  var t = _C(n);
  function n(r) {
    var i;
    PC(this, n),
      (i = t.call(this, r)),
      B($(i), "listRefHandler", function (s) {
        return (i.list = s);
      }),
      B($(i), "trackRefHandler", function (s) {
        return (i.track = s);
      }),
      B($(i), "adaptHeight", function () {
        if (i.props.adaptiveHeight && i.list) {
          var s = i.list.querySelector(
            '[data-index="'.concat(i.state.currentSlide, '"]')
          );
          i.list.style.height = (0, te.getHeight)(s) + "px";
        }
      }),
      B($(i), "componentDidMount", function () {
        if ((i.props.onInit && i.props.onInit(), i.props.lazyLoad)) {
          var s = (0, te.getOnDemandLazySlides)(I(I({}, i.props), i.state));
          s.length > 0 &&
            (i.setState(function (l) {
              return { lazyLoadedList: l.lazyLoadedList.concat(s) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s));
        }
        var a = I({ listRef: i.list, trackRef: i.track }, i.props);
        i.updateState(a, !0, function () {
          i.adaptHeight(), i.props.autoplay && i.autoPlay("update");
        }),
          i.props.lazyLoad === "progressive" &&
            (i.lazyLoadTimer = setInterval(i.progressiveLazyLoad, 1e3)),
          (i.ro = new wC.default(function () {
            i.state.animating
              ? (i.onWindowResized(!1),
                i.callbackTimers.push(
                  setTimeout(function () {
                    return i.onWindowResized();
                  }, i.props.speed)
                ))
              : i.onWindowResized();
          })),
          i.ro.observe(i.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (l) {
                (l.onfocus = i.props.pauseOnFocus ? i.onSlideFocus : null),
                  (l.onblur = i.props.pauseOnFocus ? i.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", i.onWindowResized)
            : window.attachEvent("onresize", i.onWindowResized);
      }),
      B($(i), "componentWillUnmount", function () {
        i.animationEndCallback && clearTimeout(i.animationEndCallback),
          i.lazyLoadTimer && clearInterval(i.lazyLoadTimer),
          i.callbackTimers.length &&
            (i.callbackTimers.forEach(function (s) {
              return clearTimeout(s);
            }),
            (i.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", i.onWindowResized)
            : window.detachEvent("onresize", i.onWindowResized),
          i.autoplayTimer && clearInterval(i.autoplayTimer),
          i.ro.disconnect();
      }),
      B($(i), "componentDidUpdate", function (s) {
        if (
          (i.checkImagesLoad(),
          i.props.onReInit && i.props.onReInit(),
          i.props.lazyLoad)
        ) {
          var a = (0, te.getOnDemandLazySlides)(I(I({}, i.props), i.state));
          a.length > 0 &&
            (i.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(a) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(a));
        }
        i.adaptHeight();
        var l = I(I({ listRef: i.list, trackRef: i.track }, i.props), i.state),
          u = i.didPropsChange(s);
        u &&
          i.updateState(l, u, function () {
            i.state.currentSlide >=
              Me.default.Children.count(i.props.children) &&
              i.changeSlide({
                message: "index",
                index:
                  Me.default.Children.count(i.props.children) -
                  i.props.slidesToShow,
                currentSlide: i.state.currentSlide,
              }),
              i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          });
      }),
      B($(i), "onWindowResized", function (s) {
        i.debouncedResize && i.debouncedResize.cancel(),
          (i.debouncedResize = (0, mC.default)(function () {
            return i.resizeWindow(s);
          }, 50)),
          i.debouncedResize();
      }),
      B($(i), "resizeWindow", function () {
        var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          a = !!(i.track && i.track.node);
        if (a) {
          var l = I(
            I({ listRef: i.list, trackRef: i.track }, i.props),
            i.state
          );
          i.updateState(l, s, function () {
            i.props.autoplay ? i.autoPlay("update") : i.pause("paused");
          }),
            i.setState({ animating: !1 }),
            clearTimeout(i.animationEndCallback),
            delete i.animationEndCallback;
        }
      }),
      B($(i), "updateState", function (s, a, l) {
        var u = (0, te.initializedState)(s);
        s = I(I(I({}, s), u), {}, { slideIndex: u.currentSlide });
        var c = (0, te.getTrackLeft)(s);
        s = I(I({}, s), {}, { left: c });
        var f = (0, te.getTrackCSS)(s);
        (a ||
          Me.default.Children.count(i.props.children) !==
            Me.default.Children.count(s.children)) &&
          (u.trackStyle = f),
          i.setState(u, l);
      }),
      B($(i), "ssrInit", function () {
        if (i.props.variableWidth) {
          var s = 0,
            a = 0,
            l = [],
            u = (0, te.getPreClones)(
              I(
                I(I({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            ),
            c = (0, te.getPostClones)(
              I(
                I(I({}, i.props), i.state),
                {},
                { slideCount: i.props.children.length }
              )
            );
          i.props.children.forEach(function (E) {
            l.push(E.props.style.width), (s += E.props.style.width);
          });
          for (var f = 0; f < u; f++)
            (a += l[l.length - 1 - f]), (s += l[l.length - 1 - f]);
          for (var d = 0; d < c; d++) s += l[d];
          for (var v = 0; v < i.state.currentSlide; v++) a += l[v];
          var y = { width: s + "px", left: -a + "px" };
          if (i.props.centerMode) {
            var g = "".concat(l[i.state.currentSlide], "px");
            y.left = "calc("
              .concat(y.left, " + (100% - ")
              .concat(g, ") / 2 ) ");
          }
          return { trackStyle: y };
        }
        var x = Me.default.Children.count(i.props.children),
          h = I(I(I({}, i.props), i.state), {}, { slideCount: x }),
          p = (0, te.getPreClones)(h) + (0, te.getPostClones)(h) + x,
          m = (100 / i.props.slidesToShow) * p,
          w = 100 / p,
          S = (-w * ((0, te.getPreClones)(h) + i.state.currentSlide) * m) / 100;
        i.props.centerMode && (S += (100 - (w * m) / 100) / 2);
        var P = { width: m + "%", left: S + "%" };
        return { slideWidth: w + "%", trackStyle: P };
      }),
      B($(i), "checkImagesLoad", function () {
        var s =
            (i.list &&
              i.list.querySelectorAll &&
              i.list.querySelectorAll(".slick-slide img")) ||
            [],
          a = s.length,
          l = 0;
        Array.prototype.forEach.call(s, function (u) {
          var c = function () {
            return ++l && l >= a && i.onWindowResized();
          };
          if (!u.onclick)
            u.onclick = function () {
              return u.parentNode.focus();
            };
          else {
            var f = u.onclick;
            u.onclick = function (d) {
              f(d), u.parentNode.focus();
            };
          }
          u.onload ||
            (i.props.lazyLoad
              ? (u.onload = function () {
                  i.adaptHeight(),
                    i.callbackTimers.push(
                      setTimeout(i.onWindowResized, i.props.speed)
                    );
                })
              : ((u.onload = c),
                (u.onerror = function () {
                  c(), i.props.onLazyLoadError && i.props.onLazyLoadError();
                })));
        });
      }),
      B($(i), "progressiveLazyLoad", function () {
        for (
          var s = [], a = I(I({}, i.props), i.state), l = i.state.currentSlide;
          l < i.state.slideCount + (0, te.getPostClones)(a);
          l++
        )
          if (i.state.lazyLoadedList.indexOf(l) < 0) {
            s.push(l);
            break;
          }
        for (
          var u = i.state.currentSlide - 1;
          u >= -(0, te.getPreClones)(a);
          u--
        )
          if (i.state.lazyLoadedList.indexOf(u) < 0) {
            s.push(u);
            break;
          }
        s.length > 0
          ? (i.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(s) };
            }),
            i.props.onLazyLoad && i.props.onLazyLoad(s))
          : i.lazyLoadTimer &&
            (clearInterval(i.lazyLoadTimer), delete i.lazyLoadTimer);
      }),
      B($(i), "slideHandler", function (s) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = i.props,
          u = l.asNavFor,
          c = l.beforeChange,
          f = l.onLazyLoad,
          d = l.speed,
          v = l.afterChange,
          y = i.state.currentSlide,
          g = (0, te.slideHandler)(
            I(
              I(I({ index: s }, i.props), i.state),
              {},
              { trackRef: i.track, useCSS: i.props.useCSS && !a }
            )
          ),
          x = g.state,
          h = g.nextState;
        if (x) {
          c && c(y, x.currentSlide);
          var p = x.lazyLoadedList.filter(function (m) {
            return i.state.lazyLoadedList.indexOf(m) < 0;
          });
          f && p.length > 0 && f(p),
            !i.props.waitForAnimate &&
              i.animationEndCallback &&
              (clearTimeout(i.animationEndCallback),
              v && v(y),
              delete i.animationEndCallback),
            i.setState(x, function () {
              u &&
                i.asNavForIndex !== s &&
                ((i.asNavForIndex = s), u.innerSlider.slideHandler(s)),
                h &&
                  (i.animationEndCallback = setTimeout(function () {
                    var m = h.animating,
                      w = SC(h, ["animating"]);
                    i.setState(w, function () {
                      i.callbackTimers.push(
                        setTimeout(function () {
                          return i.setState({ animating: m });
                        }, 10)
                      ),
                        v && v(x.currentSlide),
                        delete i.animationEndCallback;
                    });
                  }, d));
            });
        }
      }),
      B($(i), "changeSlide", function (s) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          l = I(I({}, i.props), i.state),
          u = (0, te.changeSlide)(l, s);
        if (
          !(u !== 0 && !u) &&
          (a === !0 ? i.slideHandler(u, a) : i.slideHandler(u),
          i.props.autoplay && i.autoPlay("update"),
          i.props.focusOnSelect)
        ) {
          var c = i.list.querySelectorAll(".slick-current");
          c[0] && c[0].focus();
        }
      }),
      B($(i), "clickHandler", function (s) {
        i.clickable === !1 && (s.stopPropagation(), s.preventDefault()),
          (i.clickable = !0);
      }),
      B($(i), "keyHandler", function (s) {
        var a = (0, te.keyHandler)(s, i.props.accessibility, i.props.rtl);
        a !== "" && i.changeSlide({ message: a });
      }),
      B($(i), "selectHandler", function (s) {
        i.changeSlide(s);
      }),
      B($(i), "disableBodyScroll", function () {
        var s = function (l) {
          (l = l || window.event),
            l.preventDefault && l.preventDefault(),
            (l.returnValue = !1);
        };
        window.ontouchmove = s;
      }),
      B($(i), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      B($(i), "swipeStart", function (s) {
        i.props.verticalSwiping && i.disableBodyScroll();
        var a = (0, te.swipeStart)(s, i.props.swipe, i.props.draggable);
        a !== "" && i.setState(a);
      }),
      B($(i), "swipeMove", function (s) {
        var a = (0, te.swipeMove)(
          s,
          I(
            I(I({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        a && (a.swiping && (i.clickable = !1), i.setState(a));
      }),
      B($(i), "swipeEnd", function (s) {
        var a = (0, te.swipeEnd)(
          s,
          I(
            I(I({}, i.props), i.state),
            {},
            {
              trackRef: i.track,
              listRef: i.list,
              slideIndex: i.state.currentSlide,
            }
          )
        );
        if (a) {
          var l = a.triggerSlideHandler;
          delete a.triggerSlideHandler,
            i.setState(a),
            l !== void 0 &&
              (i.slideHandler(l),
              i.props.verticalSwiping && i.enableBodyScroll());
        }
      }),
      B($(i), "touchEnd", function (s) {
        i.swipeEnd(s), (i.clickable = !0);
      }),
      B($(i), "slickPrev", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      B($(i), "slickNext", function () {
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      B($(i), "slickGoTo", function (s) {
        var a =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((s = Number(s)), isNaN(s))) return "";
        i.callbackTimers.push(
          setTimeout(function () {
            return i.changeSlide(
              {
                message: "index",
                index: s,
                currentSlide: i.state.currentSlide,
              },
              a
            );
          }, 0)
        );
      }),
      B($(i), "play", function () {
        var s;
        if (i.props.rtl) s = i.state.currentSlide - i.props.slidesToScroll;
        else if ((0, te.canGoNext)(I(I({}, i.props), i.state)))
          s = i.state.currentSlide + i.props.slidesToScroll;
        else return !1;
        i.slideHandler(s);
      }),
      B($(i), "autoPlay", function (s) {
        i.autoplayTimer && clearInterval(i.autoplayTimer);
        var a = i.state.autoplaying;
        if (s === "update") {
          if (a === "hovered" || a === "focused" || a === "paused") return;
        } else if (s === "leave") {
          if (a === "paused" || a === "focused") return;
        } else if (s === "blur" && (a === "paused" || a === "hovered")) return;
        (i.autoplayTimer = setInterval(i.play, i.props.autoplaySpeed + 50)),
          i.setState({ autoplaying: "playing" });
      }),
      B($(i), "pause", function (s) {
        i.autoplayTimer &&
          (clearInterval(i.autoplayTimer), (i.autoplayTimer = null));
        var a = i.state.autoplaying;
        s === "paused"
          ? i.setState({ autoplaying: "paused" })
          : s === "focused"
          ? (a === "hovered" || a === "playing") &&
            i.setState({ autoplaying: "focused" })
          : a === "playing" && i.setState({ autoplaying: "hovered" });
      }),
      B($(i), "onDotsOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      B($(i), "onDotsLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      B($(i), "onTrackOver", function () {
        return i.props.autoplay && i.pause("hovered");
      }),
      B($(i), "onTrackLeave", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "hovered" &&
          i.autoPlay("leave")
        );
      }),
      B($(i), "onSlideFocus", function () {
        return i.props.autoplay && i.pause("focused");
      }),
      B($(i), "onSlideBlur", function () {
        return (
          i.props.autoplay &&
          i.state.autoplaying === "focused" &&
          i.autoPlay("blur")
        );
      }),
      B($(i), "render", function () {
        var s = (0, vC.default)("slick-slider", i.props.className, {
            "slick-vertical": i.props.vertical,
            "slick-initialized": !0,
          }),
          a = I(I({}, i.props), i.state),
          l = (0, te.extractObject)(a, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          u = i.props.pauseOnHover;
        l = I(
          I({}, l),
          {},
          {
            onMouseEnter: u ? i.onTrackOver : null,
            onMouseLeave: u ? i.onTrackLeave : null,
            onMouseOver: u ? i.onTrackOver : null,
            focusOnSelect:
              i.props.focusOnSelect && i.clickable ? i.selectHandler : null,
          }
        );
        var c;
        if (i.props.dots === !0 && i.state.slideCount >= i.props.slidesToShow) {
          var f = (0, te.extractObject)(a, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            d = i.props.pauseOnDotsHover;
          (f = I(
            I({}, f),
            {},
            {
              clickHandler: i.changeSlide,
              onMouseEnter: d ? i.onDotsLeave : null,
              onMouseOver: d ? i.onDotsOver : null,
              onMouseLeave: d ? i.onDotsLeave : null,
            }
          )),
            (c = Me.default.createElement(yC.Dots, f));
        }
        var v,
          y,
          g = (0, te.extractObject)(a, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (g.clickHandler = i.changeSlide),
          i.props.arrows &&
            ((v = Me.default.createElement(gh.PrevArrow, g)),
            (y = Me.default.createElement(gh.NextArrow, g)));
        var x = null;
        i.props.vertical && (x = { height: i.state.listHeight });
        var h = null;
        i.props.vertical === !1
          ? i.props.centerMode === !0 &&
            (h = { padding: "0px " + i.props.centerPadding })
          : i.props.centerMode === !0 &&
            (h = { padding: i.props.centerPadding + " 0px" });
        var p = I(I({}, x), h),
          m = i.props.touchMove,
          w = {
            className: "slick-list",
            style: p,
            onClick: i.clickHandler,
            onMouseDown: m ? i.swipeStart : null,
            onMouseMove: i.state.dragging && m ? i.swipeMove : null,
            onMouseUp: m ? i.swipeEnd : null,
            onMouseLeave: i.state.dragging && m ? i.swipeEnd : null,
            onTouchStart: m ? i.swipeStart : null,
            onTouchMove: i.state.dragging && m ? i.swipeMove : null,
            onTouchEnd: m ? i.touchEnd : null,
            onTouchCancel: i.state.dragging && m ? i.swipeEnd : null,
            onKeyDown: i.props.accessibility ? i.keyHandler : null,
          },
          S = { className: s, dir: "ltr", style: i.props.style };
        return (
          i.props.unslick &&
            ((w = { className: "slick-list" }), (S = { className: s })),
          Me.default.createElement(
            "div",
            S,
            i.props.unslick ? "" : v,
            Me.default.createElement(
              "div",
              bs({ ref: i.listRefHandler }, w),
              Me.default.createElement(
                gC.Track,
                bs({ ref: i.trackRefHandler }, l),
                i.props.children
              )
            ),
            i.props.unslick ? "" : y,
            i.props.unslick ? "" : c
          )
        );
      }),
      (i.list = null),
      (i.track = null),
      (i.state = I(
        I({}, hC.default),
        {},
        {
          currentSlide: i.props.initialSlide,
          targetSlide: i.props.initialSlide ? i.props.initialSlide : 0,
          slideCount: Me.default.Children.count(i.props.children),
        }
      )),
      (i.callbackTimers = []),
      (i.clickable = !0),
      (i.debouncedResize = null);
    var o = i.ssrInit();
    return (i.state = I(I({}, i.state), o)), i;
  }
  return (
    kC(n, [
      {
        key: "didPropsChange",
        value: function (i) {
          for (
            var o = !1, s = 0, a = Object.keys(this.props);
            s < a.length;
            s++
          ) {
            var l = a[s];
            if (!i.hasOwnProperty(l)) {
              o = !0;
              break;
            }
            if (
              !(
                An(i[l]) === "object" ||
                typeof i[l] == "function" ||
                isNaN(i[l])
              ) &&
              i[l] !== this.props[l]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            Me.default.Children.count(this.props.children) !==
              Me.default.Children.count(i.children)
          );
        },
      },
    ]),
    n
  );
})(Me.default.Component);
var bC = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  MC = bC,
  LC = MC,
  jC = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  wh = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var o = e[r];
        (r = LC(r)),
          jC(r) && typeof o == "number" && (o = o + "px"),
          o === !0
            ? (t += r)
            : o === !1
            ? (t += "not " + r)
            : (t += "(" + r + ": " + o + ")"),
          i < n.length - 1 && (t += " and ");
      }),
      t
    );
  },
  DC = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (n, r) {
          (t += wh(n)), r < e.length - 1 && (t += ", ");
        }),
        t)
      : wh(e);
  },
  RC = DC,
  rl,
  Sh;
function AC() {
  if (Sh) return rl;
  Sh = 1;
  function e(t) {
    (this.options = t), !t.deferSetup && this.setup();
  }
  return (
    (e.prototype = {
      constructor: e,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (t) {
        return this.options === t || this.options.match === t;
      },
    }),
    (rl = e),
    rl
  );
}
var il, xh;
function T0() {
  if (xh) return il;
  xh = 1;
  function e(r, i) {
    var o = 0,
      s = r.length,
      a;
    for (o; o < s && ((a = i(r[o], o)), a !== !1); o++);
  }
  function t(r) {
    return Object.prototype.toString.apply(r) === "[object Array]";
  }
  function n(r) {
    return typeof r == "function";
  }
  return (il = { isFunction: n, isArray: t, each: e }), il;
}
var ol, Ph;
function NC() {
  if (Ph) return ol;
  Ph = 1;
  var e = AC(),
    t = T0().each;
  function n(r, i) {
    (this.query = r),
      (this.isUnconditional = i),
      (this.handlers = []),
      (this.mql = window.matchMedia(r));
    var o = this;
    (this.listener = function (s) {
      (o.mql = s.currentTarget || s), o.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (n.prototype = {
      constuctor: n,
      addHandler: function (r) {
        var i = new e(r);
        this.handlers.push(i), this.matches() && i.on();
      },
      removeHandler: function (r) {
        var i = this.handlers;
        t(i, function (o, s) {
          if (o.equals(r)) return o.destroy(), !i.splice(s, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        t(this.handlers, function (r) {
          r.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var r = this.matches() ? "on" : "off";
        t(this.handlers, function (i) {
          i[r]();
        });
      },
    }),
    (ol = n),
    ol
  );
}
var sl, Th;
function zC() {
  if (Th) return sl;
  Th = 1;
  var e = NC(),
    t = T0(),
    n = t.each,
    r = t.isFunction,
    i = t.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (o.prototype = {
      constructor: o,
      register: function (s, a, l) {
        var u = this.queries,
          c = l && this.browserIsIncapable;
        return (
          u[s] || (u[s] = new e(s, c)),
          r(a) && (a = { match: a }),
          i(a) || (a = [a]),
          n(a, function (f) {
            r(f) && (f = { match: f }), u[s].addHandler(f);
          }),
          this
        );
      },
      unregister: function (s, a) {
        var l = this.queries[s];
        return (
          l && (a ? l.removeHandler(a) : (l.clear(), delete this.queries[s])),
          this
        );
      },
    }),
    (sl = o),
    sl
  );
}
var al, kh;
function IC() {
  if (kh) return al;
  kh = 1;
  var e = zC();
  return (al = new e()), al;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = s(R),
    n = ia,
    r = s(RC),
    i = s(ff),
    o = M;
  function s(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function a(C) {
    "@babel/helpers - typeof";
    return (
      (a =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (k) {
              return typeof k;
            }
          : function (k) {
              return k &&
                typeof Symbol == "function" &&
                k.constructor === Symbol &&
                k !== Symbol.prototype
                ? "symbol"
                : typeof k;
            }),
      a(C)
    );
  }
  function l() {
    return (
      (l = Object.assign
        ? Object.assign.bind()
        : function (C) {
            for (var k = 1; k < arguments.length; k++) {
              var j = arguments[k];
              for (var D in j)
                Object.prototype.hasOwnProperty.call(j, D) && (C[D] = j[D]);
            }
            return C;
          }),
      l.apply(this, arguments)
    );
  }
  function u(C, k) {
    var j = Object.keys(C);
    if (Object.getOwnPropertySymbols) {
      var D = Object.getOwnPropertySymbols(C);
      k &&
        (D = D.filter(function (N) {
          return Object.getOwnPropertyDescriptor(C, N).enumerable;
        })),
        j.push.apply(j, D);
    }
    return j;
  }
  function c(C) {
    for (var k = 1; k < arguments.length; k++) {
      var j = arguments[k] != null ? arguments[k] : {};
      k % 2
        ? u(Object(j), !0).forEach(function (D) {
            S(C, D, j[D]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(j))
        : u(Object(j)).forEach(function (D) {
            Object.defineProperty(C, D, Object.getOwnPropertyDescriptor(j, D));
          });
    }
    return C;
  }
  function f(C, k) {
    if (!(C instanceof k))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(C, k) {
    for (var j = 0; j < k.length; j++) {
      var D = k[j];
      (D.enumerable = D.enumerable || !1),
        (D.configurable = !0),
        "value" in D && (D.writable = !0),
        Object.defineProperty(C, P(D.key), D);
    }
  }
  function v(C, k, j) {
    return (
      k && d(C.prototype, k),
      Object.defineProperty(C, "prototype", { writable: !1 }),
      C
    );
  }
  function y(C, k) {
    if (typeof k != "function" && k !== null)
      throw new TypeError("Super expression must either be null or a function");
    (C.prototype = Object.create(k && k.prototype, {
      constructor: { value: C, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(C, "prototype", { writable: !1 }),
      k && g(C, k);
  }
  function g(C, k) {
    return (
      (g = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (D, N) {
            return (D.__proto__ = N), D;
          }),
      g(C, k)
    );
  }
  function x(C) {
    var k = m();
    return function () {
      var D = w(C),
        N;
      if (k) {
        var z = w(this).constructor;
        N = Reflect.construct(D, arguments, z);
      } else N = D.apply(this, arguments);
      return h(this, N);
    };
  }
  function h(C, k) {
    if (k && (a(k) === "object" || typeof k == "function")) return k;
    if (k !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return p(C);
  }
  function p(C) {
    if (C === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return C;
  }
  function m() {
    try {
      var C = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (m = function () {
      return !!C;
    })();
  }
  function w(C) {
    return (
      (w = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (j) {
            return j.__proto__ || Object.getPrototypeOf(j);
          }),
      w(C)
    );
  }
  function S(C, k, j) {
    return (
      (k = P(k)),
      k in C
        ? Object.defineProperty(C, k, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (C[k] = j),
      C
    );
  }
  function P(C) {
    var k = E(C, "string");
    return a(k) == "symbol" ? k : String(k);
  }
  function E(C, k) {
    if (a(C) != "object" || !C) return C;
    var j = C[Symbol.toPrimitive];
    if (j !== void 0) {
      var D = j.call(C, k);
      if (a(D) != "object") return D;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (k === "string" ? String : Number)(C);
  }
  var _ = (0, o.canUseDOM)() && IC();
  e.default = (function (C) {
    y(j, C);
    var k = x(j);
    function j(D) {
      var N;
      return (
        f(this, j),
        (N = k.call(this, D)),
        S(p(N), "innerSliderRefHandler", function (z) {
          return (N.innerSlider = z);
        }),
        S(p(N), "slickPrev", function () {
          return N.innerSlider.slickPrev();
        }),
        S(p(N), "slickNext", function () {
          return N.innerSlider.slickNext();
        }),
        S(p(N), "slickGoTo", function (z) {
          var Ye =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return N.innerSlider.slickGoTo(z, Ye);
        }),
        S(p(N), "slickPause", function () {
          return N.innerSlider.pause("paused");
        }),
        S(p(N), "slickPlay", function () {
          return N.innerSlider.autoPlay("play");
        }),
        (N.state = { breakpoint: null }),
        (N._responsiveMediaHandlers = []),
        N
      );
    }
    return (
      v(j, [
        {
          key: "media",
          value: function (N, z) {
            _.register(N, z),
              this._responsiveMediaHandlers.push({ query: N, handler: z });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var N = this;
            if (this.props.responsive) {
              var z = this.props.responsive.map(function (fe) {
                return fe.breakpoint;
              });
              z.sort(function (fe, W) {
                return fe - W;
              }),
                z.forEach(function (fe, W) {
                  var b;
                  W === 0
                    ? (b = (0, r.default)({ minWidth: 0, maxWidth: fe }))
                    : (b = (0, r.default)({
                        minWidth: z[W - 1] + 1,
                        maxWidth: fe,
                      })),
                    (0, o.canUseDOM)() &&
                      N.media(b, function () {
                        N.setState({ breakpoint: fe });
                      });
                });
              var Ye = (0, r.default)({ minWidth: z.slice(-1)[0] });
              (0, o.canUseDOM)() &&
                this.media(Ye, function () {
                  N.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (N) {
              _.unregister(N.query, N.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var N = this,
              z,
              Ye;
            this.state.breakpoint
              ? ((Ye = this.props.responsive.filter(function (Et) {
                  return Et.breakpoint === N.state.breakpoint;
                })),
                (z =
                  Ye[0].settings === "unslick"
                    ? "unslick"
                    : c(c(c({}, i.default), this.props), Ye[0].settings)))
              : (z = c(c({}, i.default), this.props)),
              z.centerMode && (z.slidesToScroll > 1, (z.slidesToScroll = 1)),
              z.fade &&
                (z.slidesToShow > 1,
                z.slidesToScroll > 1,
                (z.slidesToShow = 1),
                (z.slidesToScroll = 1));
            var fe = t.default.Children.toArray(this.props.children);
            (fe = fe.filter(function (Et) {
              return typeof Et == "string" ? !!Et.trim() : !!Et;
            })),
              z.variableWidth &&
                (z.rows > 1 || z.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (z.variableWidth = !1));
            for (
              var W = [], b = null, A = 0;
              A < fe.length;
              A += z.rows * z.slidesPerRow
            ) {
              for (
                var F = [], G = A;
                G < A + z.rows * z.slidesPerRow;
                G += z.slidesPerRow
              ) {
                for (
                  var de = [], Xe = G;
                  Xe < G + z.slidesPerRow &&
                  (z.variableWidth &&
                    fe[Xe].props.style &&
                    (b = fe[Xe].props.style.width),
                  !(Xe >= fe.length));
                  Xe += 1
                )
                  de.push(
                    t.default.cloneElement(fe[Xe], {
                      key: 100 * A + 10 * G + Xe,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / z.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                F.push(t.default.createElement("div", { key: 10 * A + G }, de));
              }
              z.variableWidth
                ? W.push(
                    t.default.createElement(
                      "div",
                      { key: A, style: { width: b } },
                      F
                    )
                  )
                : W.push(t.default.createElement("div", { key: A }, F));
            }
            if (z === "unslick") {
              var kt = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: kt }, fe);
            } else
              W.length <= z.slidesToShow && !z.infinite && (z.unslick = !0);
            return t.default.createElement(
              n.InnerSlider,
              l(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, o.filterSettings)(z)
              ),
              W
            );
          },
        },
      ]),
      j
    );
  })(t.default.Component);
})(Uy);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(Uy);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.default = t.default;
})(Hy);
const k0 = Eh(Hy),
  VC = "./assets/Gymwebsite-BYuAf9fK.png",
  FC = "./assets/ecom-CrxL78MH.png",
  $C = "./assets/jobportal-pAwUoUaG.png",
  BC = "./assets/signlang-D9UarpfI.png",
  HC = () => {
    const e = [
        {
          id: 1,
          name: "House Price Prediction",
          domain: "Machine Learning & Data Analytics",
          link: "https://github.com/prakhar-mathur4/House-Price-Predction",
          src: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5lksNVWUW8prwtwOAiq1pQ.jpeg",
        },
        {
          id: 2,
          name: "Customer Churn Prediction",
          domain: "Machine Learning & Data Analytics",
          link: "https://github.com/prakhar-mathur4/Churn-prediction-Reliance-Jio-Info-COMM-Limited-Telecom-Industry-",
          src: "https://cdn.analyticsvidhya.com/wp-content/uploads/2019/05/customer-churn-edit.jpeg",
        },
        {
          id: 3,
          name: "Sign Language Detection",
          domain: "Machine Learning & Deep Learning",
          link: "https://github.com/prakhar-mathur4/Sign-Language-Recognition-System/tree/main",
          src: BC,
        },
        {
          id: 4,
          name: "Ecommerce Project",
          domain: "Frontend Website with Ecommerce functionality",
          link: "https://6570a7f90f58ec161970fb6f--aquamarine-malabi-a15292.netlify.app/",
          src: FC,
        },
        {
          id: 5,
          name: "Job Portal",
          domain: "Fullstack website using Firebase",
          link: "https://pcas-job-portal.vercel.app/",
          src: $C,
        },
        {
          id: 6,
          name: "Fitclub Gym Website",
          domain: "Frontend Website",
          link: "https://65664545a7cccb0c94a37575--phenomenal-queijadas-e0a852.netlify.app/",
          src: VC,
        },
      ],
      t = {
        dots: !0,
        infinite: !0,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
      };
    return T.jsx("div", {
      name: "portfolio",
      className:
        "pt-10 md:pt-20 bg-gradient-to-b from-black to-gray-800 w-full text-white",
      children: T.jsxs("div", {
        className:
          "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full",
        children: [
          T.jsxs("div", {
            className: "pb-8",
            children: [
              T.jsx("p", {
                className:
                  "text-4xl font-bold inline border-b-4 border-gray-500",
                children: "Portfolio",
              }),
              T.jsx("p", {
                className: "py-6",
                children: "Check out some of my work right here",
              }),
            ],
          }),
          T.jsx(k0, {
            ...t,
            children: e.map(({ id: n, src: r, name: i, domain: o, link: s }) =>
              T.jsx(
                "div",
                {
                  className: "p-4",
                  children: T.jsxs("div", {
                    className:
                      "shadow-md shadow-gray-600 hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg h-[20rem] w-full flex flex-col ",
                    children: [
                      T.jsx("img", {
                        src: r,
                        alt: i,
                        loading: "lazy",
                        className:
                          "rounded-t-md duration-200 hover:scale-105 h-[12rem] w-full object-cover ",
                      }),
                      T.jsxs("div", {
                        className:
                          "flex flex-col justify-between p-4 flex-grow",
                        children: [
                          T.jsx("p", {
                            className: "text-lg font-bold text-center truncate",
                            children: i,
                          }),
                          T.jsxs("p", {
                            className:
                              "text-sm text-gray-400 text-center truncate",
                            children: ["Domain: ", o],
                          }),
                          T.jsx("a", {
                            href: s,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-center hover:underline mt-2",
                            children: "Demo",
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  UC = "./assets/ArgoCD-J_lmjqAi.png",
  WC = "./assets/aws-_96mvvw2.png",
  KC = "./assets/Azure-4HZsExMp.png",
  GC = "./assets/c__-COLDLYDH.png",
  QC = "./assets/css-CjQniWua.png",
  YC = "./assets/Docker-C1sZ0HwF.png",
  XC = "./assets/Elasticsearch--idIxNaF.png",
  qC = "./assets/github-BR5NuBbG.png",
  ZC =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3clinearGradient%20id='grafana-original-a'%20gradientUnits='userSpaceOnUse'%20x1='45.842'%20y1='89.57'%20x2='45.842'%20y2='8.802'%20gradientTransform='translate(-.23%2028.462)%20scale(1.4011)'%3e%3cstop%20offset='0'%20stop-color='%23fcee1f'/%3e%3cstop%20offset='1'%20stop-color='%23f15b2a'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23grafana-original-a)'%20d='M120.8%2056.9c-.2-2.1-.6-4.5-1.2-7.2s-1.8-5.5-3.2-8.6c-1.5-3-3.4-6.2-5.9-9.1-1-1.2-2.1-2.3-3.2-3.5%201.8-6.9-2.1-13-2.1-13-6.7-.4-10.9%202.1-12.4%203.2-.2-.1-.6-.2-.8-.3-1.1-.4-2.3-.9-3.5-1.3-1.2-.3-2.4-.8-3.6-1-1.2-.3-2.5-.6-3.9-.8-.2%200-.4-.1-.7-.1C77.5%206%2069.1%202%2069.1%202c-9.6%206.2-11.4%2014.4-11.4%2014.4s0%20.2-.1.4c-.6.1-1%20.3-1.5.4-.7.2-1.4.4-2.1.8l-2.1.9c-1.4.7-2.8%201.3-4.2%202.1-1.3.8-2.6%201.5-3.9%202.4-.2-.1-.3-.2-.3-.2-12.9-5-24.3%201-24.3%201-1%2013.8%205.2%2022.3%206.4%2023.9-.3.9-.6%201.7-.9%202.5-1%203.1-1.7%206.3-2.1%209.6-.1.4-.1%201-.2%201.4C10.5%2067.5%207%2079.6%207%2079.6%2016.9%2091%2028.5%2091.7%2028.5%2091.7c1.4%202.6%203.2%205.2%205.1%207.5.8%201%201.7%201.9%202.5%202.9-3.6%2010.3.6%2019%20.6%2019%2011.1.4%2018.4-4.8%2019.9-6.1%201.1.3%202.2.7%203.3%201%203.4.9%206.9%201.4%2010.3%201.5h4.5c5.2%207.5%2014.4%208.5%2014.4%208.5%206.5-6.9%206.9-13.6%206.9-15.2v-.6c1.3-1%202.6-2%204-3.1%202.6-2.3%204.8-5.1%206.8-7.9.2-.2.3-.6.6-.8%207.4.4%2012.5-4.6%2012.5-4.6-1.2-7.7-5.6-11.4-6.5-12.1l-.1-.1-.1-.1-.1-.1c0-.4.1-.9.1-1.4.1-.9.1-1.7.1-2.5v-3.3c0-.2%200-.4-.1-.7l-.1-.7-.1-.7c-.1-.9-.3-1.7-.4-2.5-.8-3.3-2.1-6.5-3.7-9.2-1.8-2.9-3.9-5.3-6.3-7.5-2.4-2.1-5.1-3.9-7.9-5.1-2.9-1.3-5.7-2.1-8.7-2.4-1.4-.2-3-.2-4.4-.2h-2.3c-.8.1-1.5.2-2.2.3-3%20.6-5.7%201.7-8.1%203.1-2.4%201.4-4.5%203.3-6.3%205.4-1.8%202.1-3.1%204.3-4%206.7-.9%202.3-1.4%204.8-1.5%207.2v2.6c0%20.3%200%20.6.1.9.1%201.2.3%202.3.7%203.4.7%202.2%201.7%204.2%203%205.9s2.8%203.1%204.4%204.2c1.7%201.1%203.3%201.9%205.1%202.4s3.4.8%205%20.7h2.3c.2%200%20.4-.1.6-.1.2%200%20.3-.1.6-.1.3-.1.8-.2%201.1-.3.7-.2%201.3-.6%202-.8.7-.3%201.2-.7%201.7-1%20.1-.1.3-.2.4-.3.6-.4.7-1.2.2-1.8-.4-.4-1.1-.6-1.7-.3-.1.1-.2.1-.4.2-.4.2-1%20.4-1.4.6-.6.1-1.1.3-1.7.4-.3%200-.6.1-.9.1h-1.8s-.1%200%200%200h-.7c-.1%200-.3%200-.4-.1-1.2-.2-2.5-.6-3.7-1.1-1.2-.6-2.4-1.3-3.4-2.3-1.1-1-2-2.1-2.8-3.4-.8-1.3-1.2-2.8-1.4-4.2-.1-.8-.2-1.5-.1-2.3v-.7c0%20.1%200%200%200%200V70c0-.4.1-.8.2-1.2.6-3.3%202.2-6.5%204.7-8.9.7-.7%201.3-1.2%202.1-1.7.8-.6%201.5-1%202.3-1.3.8-.3%201.7-.7%202.5-.9.9-.2%201.8-.4%202.6-.4.4%200%20.9-.1%201.3-.1h.8c.1%200%200%200%200%200h.4c1%20.1%202%20.2%202.9.4%201.9.4%203.7%201.1%205.5%202.1%203.5%202%206.5%205%208.3%208.6.9%201.8%201.5%203.7%201.9%205.8.1.6.1%201%20.2%201.5v2.7c0%20.6-.1%201.1-.1%201.7-.1.6-.1%201.1-.2%201.7s-.2%201.1-.3%201.7c-.2%201.1-.7%202.1-1%203.2-.8%202.1-1.9%204.1-3.2%205.8-2.6%203.6-6.3%206.6-10.3%208.5-2.1.9-4.2%201.7-6.4%202-1.1.2-2.2.3-3.3.3h-1.6c.1%200%200%200%200%200h-.1c-.6%200-1.2%200-1.8-.1-2.4-.2-4.7-.7-7-1.3-2.3-.7-4.5-1.5-6.6-2.6-4.2-2.2-7.9-5.4-10.9-9-1.4-1.9-2.8-3.9-3.9-5.9s-1.9-4.3-2.5-6.5c-.7-2.2-1-4.5-1.1-6.8v-3.5c0-1.1.1-2.3.3-3.5.1-1.2.3-2.3.6-3.5.2-1.2.6-2.3.9-3.5.7-2.3%201.4-4.5%202.4-6.6%202-4.2%204.5-7.9%207.5-10.9.8-.8%201.5-1.4%202.4-2.1.3-.3%201.1-1%202-1.5s1.8-1.1%202.8-1.5c.4-.2.9-.4%201.4-.7.2-.1.4-.2.8-.3.2-.1.4-.2.8-.3%201-.4%202-.8%203-1.1.2-.1.6-.1.8-.2.2-.1.6-.1.8-.2.6-.1%201-.2%201.5-.4.2-.1.6-.1.8-.2.2%200%20.6-.1.8-.1.2%200%20.6-.1.8-.1l.4-.1.4-.1c.2%200%20.6-.1.8-.1.3%200%20.6-.1.9-.1.2%200%20.7-.1.9-.1.2%200%20.3%200%20.6-.1h.7c.3%200%20.6%200%20.9-.1h.4s.1%200%200%200h4.1c2%20.1%204%20.3%205.8.7%203.7.7%207.4%201.9%2010.6%203.5%203.2%201.5%206.2%203.5%208.6%205.6.1.1.3.2.4.4.1.1.3.2.4.4.3.2.6.6.9.8.3.2.6.6.9.8.2.3.6.6.8.9%201.1%201.1%202.1%202.3%203%203.4%201.8%202.3%203.2%204.6%204.3%206.8.1.1.1.2.2.4.1.1.1.2.2.4s.2.6.4.8c.1.2.2.6.3.8.1.2.2.6.3.8.4%201%20.8%202%201.1%203%20.6%201.5.9%202.9%201.2%204%20.1.4.6.8%201%20.8.6%200%20.9-.4.9-1-.3-1.7-.3-3.1-.4-4.8z'/%3e%3c/svg%3e",
  JC = "./assets/HTML5-DDlchswO.png",
  eO = "./assets/javscript-CLdV-RIe.png",
  tO = "./assets/Jira-DoHLxjGC.png",
  nO = "./assets/Kafka-CPNVJL5N.png",
  rO = "./assets/keras-BGHvb01Y.png",
  iO = "./assets/Kibana-CnugKxSV.png",
  oO = "./assets/Kubernetes-B8JqKn9z.png",
  sO = "./assets/Linux-C6g7AoMi.png",
  aO = "./assets/mysql-D1fmG43W.png",
  lO = "./assets/NewRelic-Czphatp4.png",
  uO = "./assets/postgresql-Dy5BWNJI.png",
  cO = "./assets/powerbi-B08B-lin.png",
  fO = "./assets/Prometheus-B2LiWihQ.png",
  dO = "./assets/python-Bxi4hHvr.png",
  pO = "./assets/reactjs-4gEGafqw.png",
  hO = "./assets/Robusta-C6YYF1Uj.svg",
  mO = "./assets/sklearn-CmrvMMgx.png",
  vO = "./assets/tailwindcss-BMTYlt07.png",
  gO = "./assets/tensorflow-5ti5fQJB.png",
  yO = "./assets/Terraform-BGfKm2SU.png",
  wO = () => {
    const e = [
        { id: 1, src: sO, title: "Linux" },
        { id: 2, src: GC, title: "C++" },
        { id: 3, src: dO, title: "Python" },
        { id: 4, src: WC, title: "AWS" },
        { id: 5, src: KC, title: "Azure" },
        { id: 5, src: qC, title: "GitHub" },
        { id: 7, src: YC, title: "Docker" },
        { id: 8, src: oO, title: "Kubernetes" },
        { id: 9, src: hO, title: "Robusta" },
        { id: 10, src: iO, title: "Kibana" },
        { id: 11, src: UC, title: "ArgoCD" },
        { id: 12, src: XC, title: "Elasticsearch" },
        { id: 13, src: fO, title: "Prometheus" },
        { id: 14, src: ZC, title: "Grafana" },
        { id: 15, src: yO, title: "Terraform" },
        { id: 16, src: lO, title: "New Relic" },
        { id: 17, src: tO, title: "Jira" },
        { id: 18, src: aO, title: "MySQL" },
        { id: 19, src: uO, title: "PostgreSQL" },
        { id: 20, src: nO, title: "Kafka" },
        { id: 21, src: JC, title: "HTML" },
        { id: 22, src: QC, title: "CSS" },
        { id: 23, src: eO, title: "JavaScript" },
        { id: 24, src: pO, title: "ReactJS" },
        { id: 25, src: vO, title: "TailwindCSS" },
        { id: 26, src: gO, title: "Tensorflow" },
        { id: 27, src: rO, title: "Keras" },
        { id: 28, src: mO, title: "Scikit-Learn" },
        { id: 29, src: cO, title: "Power BI" },
      ],
      t = {
        infinite: !0,
        speed: 2e3,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: !1,
        rtl: !0,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 640, settings: { slidesToShow: 2 } },
        ],
      };
    return T.jsx("div", {
      name: "skills",
      className:
        "pt-16 md:pt-20 bg-gradient-to-b from-gray-800 to-black w-full text-white",
      children: T.jsxs("div", {
        className:
          "max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full",
        children: [
          T.jsxs("div", {
            className: "mb-8",
            children: [
              T.jsx("p", {
                className:
                  "text-4xl font-bold border-b-4 border-gray-500 inline",
                children: "Skills",
              }),
              T.jsx("p", {
                className: "py-4",
                children:
                  "These are the tools & technologies I've worked with.",
              }),
            ],
          }),
          T.jsx(k0, {
            ...t,
            children: e.map(({ id: n, src: r, title: i }) =>
              T.jsx(
                "div",
                {
                  className:
                    "flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36",
                  children: T.jsx("img", {
                    src: r,
                    alt: i,
                    className: "w-20 h-20 md:w-24 md:h-24 object-contain",
                  }),
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  SO = () => {
    const e = [
      {
        id: 1,
        child: T.jsxs(T.Fragment, {
          children: ["LinkedIn ", T.jsx(Uv, { size: 30 })],
        }),
        href: "https://www.linkedin.com/in/mathurprakhar1/",
        style: "rounded-tr-md",
      },
      {
        id: 2,
        child: T.jsxs(T.Fragment, {
          children: ["GitHub ", T.jsx(Hv, { size: 30 })],
        }),
        href: "https://github.com/prakhar-mathur4",
      },
      {
        id: 3,
        child: T.jsxs(T.Fragment, {
          children: ["Mail ", T.jsx(Wv, { size: 30 })],
        }),
        href: "mailto:mathurprakhar1@gmail.com",
      },
      {
        id: 4,
        child: T.jsxs(T.Fragment, {
          children: ["Resume ", T.jsx(Bv, { size: 30 })],
        }),
        href: "https://drive.google.com/file/d/1XZUV8UJaaP6FdoxNIhHCHc8lwkO1_idG/view?usp=drive_link",
        style: "rounded-br-md",
        download: !0,
      },
    ];
    return T.jsx("div", {
      className: "hidden lg:flex flex-col top-[35%] left-0 fixed",
      children: T.jsx("ul", {
        children: e.map(({ id: t, child: n, href: r, style: i, download: o }) =>
          T.jsx(
            "li",
            {
              className: `flex justify-between items-center w-40 h-14 px-4 ml-[-100px] 
              hover:ml-[-10px] hover:rounded-md transition-all duration-500 ease-in-out bg-gray-500 ${i}`,
              children: T.jsx("a", {
                href: r,
                className:
                  "flex justify-between items-center w-full text-white",
                download: o,
                target: "_blank",
                rel: "noreferrer",
                children: n,
              }),
            },
            t
          )
        ),
      }),
    });
  };
function xO() {
  const [e, t] = R.useState(0);
  return T.jsxs(T.Fragment, {
    children: [
      T.jsx($E, {}),
      T.jsx(VE, {}),
      T.jsx(Xw, {}),
      T.jsx(HC, {}),
      T.jsx(wO, {}),
      T.jsx(eS, {}),
      T.jsx(qw, {}),
      T.jsx(oS, {}),
      T.jsx(SO, {}),
    ],
  });
}
ll.createRoot(document.getElementById("root")).render(
  T.jsx(qt.StrictMode, { children: T.jsx(xO, {}) })
);
