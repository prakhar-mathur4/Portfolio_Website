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
var Gt =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Oh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function C0(e) {
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
var bh = { exports: {} },
  Ls = {},
  Mh = { exports: {} },
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
  O0 = Symbol.for("react.portal"),
  b0 = Symbol.for("react.fragment"),
  M0 = Symbol.for("react.strict_mode"),
  L0 = Symbol.for("react.profiler"),
  j0 = Symbol.for("react.provider"),
  D0 = Symbol.for("react.context"),
  R0 = Symbol.for("react.forward_ref"),
  A0 = Symbol.for("react.suspense"),
  N0 = Symbol.for("react.memo"),
  z0 = Symbol.for("react.lazy"),
  mf = Symbol.iterator;
function I0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mf && e[mf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  jh = Object.assign,
  Dh = {};
function _r(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dh),
    (this.updater = n || Lh);
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
function Rh() {}
Rh.prototype = _r.prototype;
function Lu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dh),
    (this.updater = n || Lh);
}
var ju = (Lu.prototype = new Rh());
ju.constructor = Lu;
jh(ju, _r.prototype);
ju.isPureReactComponent = !0;
var vf = Array.isArray,
  Ah = Object.prototype.hasOwnProperty,
  Du = { current: null },
  Nh = { key: !0, ref: !0, __self: !0, __source: !0 };
function zh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ah.call(t, r) && !Nh.hasOwnProperty(r) && (i[r] = t[r]);
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
    _owner: Du.current,
  };
}
function V0(e, t) {
  return {
    $$typeof: Di,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ru(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Di;
}
function F0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gf = /\/+/g;
function ua(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? F0("" + e.key)
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
          case O0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + ua(s, 0) : r),
      vf(i)
        ? ((n = ""),
          e != null && (n = e.replace(gf, "$&/") + "/"),
          ko(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Ru(i) &&
            (i = V0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), vf(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + ua(o, a);
      s += ko(o, t, n, l, i);
    }
  else if (((l = I0(e)), typeof l == "function"))
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
function $0(e) {
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
  B0 = {
    ReactCurrentDispatcher: Re,
    ReactCurrentBatchConfig: Eo,
    ReactCurrentOwner: Du,
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
    if (!Ru(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
H.Component = _r;
H.Fragment = b0;
H.Profiler = L0;
H.PureComponent = Lu;
H.StrictMode = M0;
H.Suspense = A0;
H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B0;
H.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = jh({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Du.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Ah.call(t, l) &&
        !Nh.hasOwnProperty(l) &&
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
      $$typeof: D0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: j0, _context: e }),
    (e.Consumer = e)
  );
};
H.createElement = zh;
H.createFactory = function (e) {
  var t = zh.bind(null, e);
  return (t.type = e), t;
};
H.createRef = function () {
  return { current: null };
};
H.forwardRef = function (e) {
  return { $$typeof: R0, render: e };
};
H.isValidElement = Ru;
H.lazy = function (e) {
  return { $$typeof: z0, _payload: { _status: -1, _result: e }, _init: $0 };
};
H.memo = function (e, t) {
  return { $$typeof: N0, type: e, compare: t === void 0 ? null : t };
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
Mh.exports = H;
var R = Mh.exports;
const qt = Oh(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H0 = R,
  W0 = Symbol.for("react.element"),
  U0 = Symbol.for("react.fragment"),
  K0 = Object.prototype.hasOwnProperty,
  Q0 = H0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  G0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ih(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) K0.call(t, r) && !G0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: W0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Q0.current,
  };
}
Ls.Fragment = U0;
Ls.jsx = Ih;
Ls.jsxs = Ih;
bh.exports = Ls;
var T = bh.exports,
  ul = {},
  Vh = { exports: {} },
  Qe = {},
  Fh = { exports: {} },
  $h = {};
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
      var Q = (F - 1) >>> 1,
        de = b[Q];
      if (0 < i(de, A)) (b[Q] = A), (b[F] = de), (F = Q);
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
      e: for (var Q = 0, de = b.length, Xe = de >>> 1; Q < Xe; ) {
        var kt = 2 * (Q + 1) - 1,
          Et = b[kt],
          gn = kt + 1,
          Xi = b[gn];
        if (0 > i(Et, F))
          gn < de && 0 > i(Xi, Et)
            ? ((b[Q] = Xi), (b[gn] = F), (Q = gn))
            : ((b[Q] = Et), (b[kt] = F), (Q = kt));
        else if (gn < de && 0 > i(Xi, F)) (b[Q] = Xi), (b[gn] = F), (Q = gn);
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
        A !== null && U(w, A.startTime - b);
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
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var de = Q(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof de == "function" ? (f.callback = de) : f === n(l) && r(l),
            m(A);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Xe = !0;
      else {
        var kt = n(u);
        kt !== null && U(w, kt.startTime - A), (Xe = !1);
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
  function U(b, A) {
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
      var Q = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? Q + F : Q))
          : (F = Q),
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
        F > Q
          ? ((b.sortIndex = F),
            t(u, b),
            n(l) === null &&
              b === n(u) &&
              (g ? (h(_), (_ = -1)) : (g = !0), U(w, F - Q)))
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
})($h);
Fh.exports = $h;
var Y0 = Fh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bh = R,
  Ke = Y0;
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
var Hh = new Set(),
  li = {};
function Nn(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (li[e] = t, e = 0; e < t.length; e++) Hh.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  cl = Object.prototype.hasOwnProperty,
  X0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yf = {},
  wf = {};
function q0(e) {
  return cl.call(wf, e)
    ? !0
    : cl.call(yf, e)
    ? !1
    : X0.test(e)
    ? (wf[e] = !0)
    : ((yf[e] = !0), !1);
}
function Z0(e, t, n, r) {
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
function J0(e, t, n, r) {
  if (t === null || typeof t > "u" || Z0(e, t, n, r)) return !0;
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
var Au = /[\-:]([a-z])/g;
function Nu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Au, Nu);
    Te[t] = new Ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Au, Nu);
    Te[t] = new Ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Au, Nu);
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
function zu(e, t, n, r) {
  var i = Te.hasOwnProperty(t) ? Te[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (J0(t, n, i, r) && (n = null),
    r || i === null
      ? q0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var It = Bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zi = Symbol.for("react.element"),
  Fn = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  Iu = Symbol.for("react.strict_mode"),
  fl = Symbol.for("react.profiler"),
  Wh = Symbol.for("react.provider"),
  Uh = Symbol.for("react.context"),
  Vu = Symbol.for("react.forward_ref"),
  dl = Symbol.for("react.suspense"),
  pl = Symbol.for("react.suspense_list"),
  Fu = Symbol.for("react.memo"),
  Ht = Symbol.for("react.lazy"),
  Kh = Symbol.for("react.offscreen"),
  Sf = Symbol.iterator;
function jr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sf && e[Sf]) || e["@@iterator"]),
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
function e1(e) {
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
function hl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Fn:
      return "Portal";
    case fl:
      return "Profiler";
    case Iu:
      return "StrictMode";
    case dl:
      return "Suspense";
    case pl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uh:
        return (e.displayName || "Context") + ".Consumer";
      case Wh:
        return (e._context.displayName || "Context") + ".Provider";
      case Vu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Fu:
        return (
          (t = e.displayName || null), t !== null ? t : hl(e.type) || "Memo"
        );
      case Ht:
        (t = e._payload), (e = e._init);
        try {
          return hl(e(t));
        } catch {}
    }
  return null;
}
function t1(e) {
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
      return hl(t);
    case 8:
      return t === Iu ? "StrictMode" : "Mode";
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
function Qh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function n1(e) {
  var t = Qh(e) ? "checked" : "value",
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
  e._valueTracker || (e._valueTracker = n1(e));
}
function Gh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Qh(e) ? (e.checked ? "true" : "false") : e.value),
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
function ml(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xf(e, t) {
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
function Yh(e, t) {
  (t = t.checked), t != null && zu(e, "checked", t, !1);
}
function vl(e, t) {
  Yh(e, t);
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
    ? gl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && gl(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pf(e, t, n) {
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
function gl(e, t, n) {
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
function yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Tf(e, t) {
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
function Xh(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function kf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var eo,
  Zh = (function (e) {
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
var Gr = {
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
  r1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gr).forEach(function (e) {
  r1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gr[t] = Gr[e]);
  });
});
function Jh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gr.hasOwnProperty(e) && Gr[e])
    ? ("" + t).trim()
    : t + "px";
}
function em(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Jh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var i1 = ae(
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
function Sl(e, t) {
  if (t) {
    if (i1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function xl(e, t) {
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
var Pl = null;
function $u(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tl = null,
  ir = null,
  or = null;
function Ef(e) {
  if ((e = Ni(e))) {
    if (typeof Tl != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Ns(t)), Tl(e.stateNode, e.type, t));
  }
}
function tm(e) {
  ir ? (or ? or.push(e) : (or = [e])) : (ir = e);
}
function nm() {
  if (ir) {
    var e = ir,
      t = or;
    if (((or = ir = null), Ef(e), t)) for (e = 0; e < t.length; e++) Ef(t[e]);
  }
}
function rm(e, t) {
  return e(t);
}
function im() {}
var pa = !1;
function om(e, t, n) {
  if (pa) return e(t, n);
  pa = !0;
  try {
    return rm(e, t, n);
  } finally {
    (pa = !1), (ir !== null || or !== null) && (im(), nm());
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
var kl = !1;
if (Dt)
  try {
    var Dr = {};
    Object.defineProperty(Dr, "passive", {
      get: function () {
        kl = !0;
      },
    }),
      window.addEventListener("test", Dr, Dr),
      window.removeEventListener("test", Dr, Dr);
  } catch {
    kl = !1;
  }
function o1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Yr = !1,
  Ho = null,
  Wo = !1,
  El = null,
  s1 = {
    onError: function (e) {
      (Yr = !0), (Ho = e);
    },
  };
function a1(e, t, n, r, i, o, s, a, l) {
  (Yr = !1), (Ho = null), o1.apply(s1, arguments);
}
function l1(e, t, n, r, i, o, s, a, l) {
  if ((a1.apply(this, arguments), Yr)) {
    if (Yr) {
      var u = Ho;
      (Yr = !1), (Ho = null);
    } else throw Error(O(198));
    Wo || ((Wo = !0), (El = u));
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
function sm(e) {
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
function _f(e) {
  if (zn(e) !== e) throw Error(O(188));
}
function u1(e) {
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
        if (o === n) return _f(i), e;
        if (o === r) return _f(i), t;
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
function am(e) {
  return (e = u1(e)), e !== null ? lm(e) : null;
}
function lm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var um = Ke.unstable_scheduleCallback,
  Cf = Ke.unstable_cancelCallback,
  c1 = Ke.unstable_shouldYield,
  f1 = Ke.unstable_requestPaint,
  he = Ke.unstable_now,
  d1 = Ke.unstable_getCurrentPriorityLevel,
  Bu = Ke.unstable_ImmediatePriority,
  cm = Ke.unstable_UserBlockingPriority,
  Uo = Ke.unstable_NormalPriority,
  p1 = Ke.unstable_LowPriority,
  fm = Ke.unstable_IdlePriority,
  js = null,
  wt = null;
function h1(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function")
    try {
      wt.onCommitFiberRoot(js, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : g1,
  m1 = Math.log,
  v1 = Math.LN2;
function g1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((m1(e) / v1) | 0)) | 0;
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
function y1(e, t) {
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
function w1(e, t) {
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
      ? (!(a & n) || a & r) && (i[s] = y1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function _l(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function dm() {
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
function S1(e, t) {
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
function Hu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var K = 0;
function pm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hm,
  Wu,
  mm,
  vm,
  gm,
  Cl = !1,
  ro = [],
  Zt = null,
  Jt = null,
  en = null,
  fi = new Map(),
  di = new Map(),
  Kt = [],
  x1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Of(e, t) {
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
      t !== null && ((t = Ni(t)), t !== null && Wu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function P1(e, t, n, r, i) {
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
function ym(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = sm(n)), t !== null)) {
          (e.blockedOn = t),
            gm(e.priority, function () {
              mm(n);
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
    var n = Ol(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pl = r), n.target.dispatchEvent(r), (Pl = null);
    } else return (t = Ni(n)), t !== null && Wu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bf(e, t, n) {
  _o(e) && n.delete(t);
}
function T1() {
  (Cl = !1),
    Zt !== null && _o(Zt) && (Zt = null),
    Jt !== null && _o(Jt) && (Jt = null),
    en !== null && _o(en) && (en = null),
    fi.forEach(bf),
    di.forEach(bf);
}
function Ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Cl ||
      ((Cl = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, T1)));
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
    ym(n), n.blockedOn === null && Kt.shift();
}
var sr = It.ReactCurrentBatchConfig,
  Qo = !0;
function k1(e, t, n, r) {
  var i = K,
    o = sr.transition;
  sr.transition = null;
  try {
    (K = 1), Uu(e, t, n, r);
  } finally {
    (K = i), (sr.transition = o);
  }
}
function E1(e, t, n, r) {
  var i = K,
    o = sr.transition;
  sr.transition = null;
  try {
    (K = 4), Uu(e, t, n, r);
  } finally {
    (K = i), (sr.transition = o);
  }
}
function Uu(e, t, n, r) {
  if (Qo) {
    var i = Ol(e, t, n, r);
    if (i === null) ka(e, t, r, Go, n), Of(e, r);
    else if (P1(i, e, t, n, r)) r.stopPropagation();
    else if ((Of(e, r), t & 4 && -1 < x1.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ni(i);
        if (
          (o !== null && hm(o),
          (o = Ol(e, t, n, r)),
          o === null && ka(e, t, r, Go, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else ka(e, t, r, null, n);
  }
}
var Go = null;
function Ol(e, t, n, r) {
  if (((Go = null), (e = $u(r)), (e = Tn(e)), e !== null))
    if (((t = zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = sm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Go = e), null;
}
function wm(e) {
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
      switch (d1()) {
        case Bu:
          return 1;
        case cm:
          return 4;
        case Uo:
        case p1:
          return 16;
        case fm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  Ku = null,
  Co = null;
function Sm() {
  if (Co) return Co;
  var e,
    t = Ku,
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
function Mf() {
  return !1;
}
function Ge(e) {
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
        : Mf),
      (this.isPropagationStopped = Mf),
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
  Qu = Ge(Cr),
  Ai = ae({}, Cr, { view: 0, detail: 0 }),
  _1 = Ge(Ai),
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
    getModifierState: Gu,
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
  Lf = Ge(Ds),
  C1 = ae({}, Ds, { dataTransfer: 0 }),
  O1 = Ge(C1),
  b1 = ae({}, Ai, { relatedTarget: 0 }),
  ga = Ge(b1),
  M1 = ae({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L1 = Ge(M1),
  j1 = ae({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  D1 = Ge(j1),
  R1 = ae({}, Cr, { data: 0 }),
  jf = Ge(R1),
  A1 = {
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
  N1 = {
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
  z1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function I1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = z1[e]) ? !!t[e] : !1;
}
function Gu() {
  return I1;
}
var V1 = ae({}, Ai, {
    key: function (e) {
      if (e.key) {
        var t = A1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Oo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? N1[e.keyCode] || "Unidentified"
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
    getModifierState: Gu,
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
  F1 = Ge(V1),
  $1 = ae({}, Ds, {
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
  Df = Ge($1),
  B1 = ae({}, Ai, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Gu,
  }),
  H1 = Ge(B1),
  W1 = ae({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  U1 = Ge(W1),
  K1 = ae({}, Ds, {
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
  Q1 = Ge(K1),
  G1 = [9, 13, 27, 32],
  Yu = Dt && "CompositionEvent" in window,
  Xr = null;
Dt && "documentMode" in document && (Xr = document.documentMode);
var Y1 = Dt && "TextEvent" in window && !Xr,
  xm = Dt && (!Yu || (Xr && 8 < Xr && 11 >= Xr)),
  Rf = " ",
  Af = !1;
function Pm(e, t) {
  switch (e) {
    case "keyup":
      return G1.indexOf(t.keyCode) !== -1;
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
function Tm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bn = !1;
function X1(e, t) {
  switch (e) {
    case "compositionend":
      return Tm(t);
    case "keypress":
      return t.which !== 32 ? null : ((Af = !0), Rf);
    case "textInput":
      return (e = t.data), e === Rf && Af ? null : e;
    default:
      return null;
  }
}
function q1(e, t) {
  if (Bn)
    return e === "compositionend" || (!Yu && Pm(e, t))
      ? ((e = Sm()), (Co = Ku = Yt = null), (Bn = !1), e)
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
      return xm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Z1 = {
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
function Nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Z1[e.type] : t === "textarea";
}
function km(e, t, n, r) {
  tm(r),
    (t = Yo(t, "onChange")),
    0 < t.length &&
      ((n = new Qu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qr = null,
  hi = null;
function J1(e) {
  Am(e, 0);
}
function Rs(e) {
  var t = Un(e);
  if (Gh(t)) return e;
}
function ew(e, t) {
  if (e === "change") return t;
}
var Em = !1;
if (Dt) {
  var ya;
  if (Dt) {
    var wa = "oninput" in document;
    if (!wa) {
      var zf = document.createElement("div");
      zf.setAttribute("oninput", "return;"),
        (wa = typeof zf.oninput == "function");
    }
    ya = wa;
  } else ya = !1;
  Em = ya && (!document.documentMode || 9 < document.documentMode);
}
function If() {
  qr && (qr.detachEvent("onpropertychange", _m), (hi = qr = null));
}
function _m(e) {
  if (e.propertyName === "value" && Rs(hi)) {
    var t = [];
    km(t, hi, e, $u(e)), om(J1, t);
  }
}
function tw(e, t, n) {
  e === "focusin"
    ? (If(), (qr = t), (hi = n), qr.attachEvent("onpropertychange", _m))
    : e === "focusout" && If();
}
function nw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Rs(hi);
}
function rw(e, t) {
  if (e === "click") return Rs(t);
}
function iw(e, t) {
  if (e === "input" || e === "change") return Rs(t);
}
function ow(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : ow;
function mi(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!cl.call(t, i) || !pt(e[i], t[i])) return !1;
  }
  return !0;
}
function Vf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ff(e, t) {
  var n = Vf(e);
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
    n = Vf(n);
  }
}
function Cm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Om() {
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
function Xu(e) {
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
function sw(e) {
  var t = Om(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Xu(n)) {
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
          (i = Ff(n, o));
        var s = Ff(n, r);
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
var aw = Dt && "documentMode" in document && 11 >= document.documentMode,
  Hn = null,
  bl = null,
  Zr = null,
  Ml = !1;
function $f(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ml ||
    Hn == null ||
    Hn !== Bo(r) ||
    ((r = Hn),
    "selectionStart" in r && Xu(r)
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
      (r = Yo(bl, "onSelect")),
      0 < r.length &&
        ((t = new Qu("onSelect", "select", null, t, n)),
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
var Wn = {
    animationend: oo("Animation", "AnimationEnd"),
    animationiteration: oo("Animation", "AnimationIteration"),
    animationstart: oo("Animation", "AnimationStart"),
    transitionend: oo("Transition", "TransitionEnd"),
  },
  Sa = {},
  bm = {};
Dt &&
  ((bm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wn.animationend.animation,
    delete Wn.animationiteration.animation,
    delete Wn.animationstart.animation),
  "TransitionEvent" in window || delete Wn.transitionend.transition);
function As(e) {
  if (Sa[e]) return Sa[e];
  if (!Wn[e]) return e;
  var t = Wn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bm) return (Sa[e] = t[n]);
  return e;
}
var Mm = As("animationend"),
  Lm = As("animationiteration"),
  jm = As("animationstart"),
  Dm = As("transitionend"),
  Rm = new Map(),
  Bf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dn(e, t) {
  Rm.set(e, t), Nn(t, [e]);
}
for (var xa = 0; xa < Bf.length; xa++) {
  var Pa = Bf[xa],
    lw = Pa.toLowerCase(),
    uw = Pa[0].toUpperCase() + Pa.slice(1);
  dn(lw, "on" + uw);
}
dn(Mm, "onAnimationEnd");
dn(Lm, "onAnimationIteration");
dn(jm, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(Dm, "onTransitionEnd");
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
var Wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  cw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
function Hf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), l1(r, t, void 0, e), (e.currentTarget = null);
}
function Am(e, t) {
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
          Hf(i, a, u), (o = l);
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
          Hf(i, a, u), (o = l);
        }
    }
  }
  if (Wo) throw ((e = El), (Wo = !1), (El = null), e);
}
function X(e, t) {
  var n = t[Al];
  n === void 0 && (n = t[Al] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Nm(t, e, 2, !1), n.add(r));
}
function Ta(e, t, n) {
  var r = 0;
  t && (r |= 4), Nm(n, e, r, t);
}
var so = "_reactListening" + Math.random().toString(36).slice(2);
function vi(e) {
  if (!e[so]) {
    (e[so] = !0),
      Hh.forEach(function (n) {
        n !== "selectionchange" && (cw.has(n) || Ta(n, !1, e), Ta(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[so] || ((t[so] = !0), Ta("selectionchange", !1, t));
  }
}
function Nm(e, t, n, r) {
  switch (wm(t)) {
    case 1:
      var i = k1;
      break;
    case 4:
      i = E1;
      break;
    default:
      i = Uu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !kl ||
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
  om(function () {
    var u = o,
      c = $u(n),
      f = [];
    e: {
      var d = Rm.get(e);
      if (d !== void 0) {
        var v = Qu,
          y = e;
        switch (e) {
          case "keypress":
            if (Oo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = F1;
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
            v = Lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = O1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = H1;
            break;
          case Mm:
          case Lm:
          case jm:
            v = L1;
            break;
          case Dm:
            v = U1;
            break;
          case "scroll":
            v = _1;
            break;
          case "wheel":
            v = Q1;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = D1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Df;
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
            n !== Pl &&
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
            ((g = Lf),
            (w = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Df),
              (w = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (x = v == null ? d : Un(v)),
            (m = y == null ? d : Un(y)),
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
          v !== null && Wf(f, d, v, g, !1),
            y !== null && x !== null && Wf(f, x, y, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? Un(u) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === "select" || (v === "input" && d.type === "file"))
        )
          var S = ew;
        else if (Nf(d))
          if (Em) S = iw;
          else {
            S = nw;
            var P = tw;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = rw);
        if (S && (S = S(e, u))) {
          km(f, S, n, c);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            gl(d, "number", d.value);
      }
      switch (((P = u ? Un(u) : window), e)) {
        case "focusin":
          (Nf(P) || P.contentEditable === "true") &&
            ((Hn = P), (bl = u), (Zr = null));
          break;
        case "focusout":
          Zr = bl = Hn = null;
          break;
        case "mousedown":
          Ml = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ml = !1), $f(f, n, c);
          break;
        case "selectionchange":
          if (aw) break;
        case "keydown":
        case "keyup":
          $f(f, n, c);
      }
      var E;
      if (Yu)
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
          ? Pm(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (xm &&
          n.locale !== "ko" &&
          (Bn || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Bn && (E = Sm())
            : ((Yt = c),
              (Ku = "value" in Yt ? Yt.value : Yt.textContent),
              (Bn = !0))),
        (P = Yo(u, _)),
        0 < P.length &&
          ((_ = new jf(_, e, null, n, c)),
          f.push({ event: _, listeners: P }),
          E ? (_.data = E) : ((E = Tm(n)), E !== null && (_.data = E)))),
        (E = Y1 ? X1(e, n) : q1(e, n)) &&
          ((u = Yo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new jf("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Am(f, t);
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
function Wf(e, t, n, r, i) {
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
var fw = /\r\n?/g,
  dw = /\u0000|\uFFFD/g;
function Uf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fw,
      `
`
    )
    .replace(dw, "");
}
function ao(e, t, n) {
  if (((t = Uf(t)), Uf(e) !== t && n)) throw Error(O(425));
}
function Xo() {}
var Ll = null,
  jl = null;
function Dl(e, t) {
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
var Rl = typeof setTimeout == "function" ? setTimeout : void 0,
  pw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Kf = typeof Promise == "function" ? Promise : void 0,
  hw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Kf < "u"
      ? function (e) {
          return Kf.resolve(null).then(e).catch(mw);
        }
      : Rl;
function mw(e) {
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
function Qf(e) {
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
  Al = "__reactEvents$" + Or,
  vw = "__reactListeners$" + Or,
  gw = "__reactHandles$" + Or;
function Tn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Qf(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = Qf(e);
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
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Ns(e) {
  return e[yi] || null;
}
var Nl = [],
  Kn = -1;
function pn(e) {
  return { current: e };
}
function q(e) {
  0 > Kn || ((e.current = Nl[Kn]), (Nl[Kn] = null), Kn--);
}
function G(e, t) {
  Kn++, (Nl[Kn] = e.current), (e.current = t);
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
function Gf(e, t, n) {
  if (be.current !== un) throw Error(O(168));
  G(be, t), G(Ve, n);
}
function zm(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(O(108, t1(e) || "Unknown", i));
  return ae({}, n, r);
}
function Zo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (Mn = be.current),
    G(be, e),
    G(Ve, Ve.current),
    !0
  );
}
function Yf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = zm(e, t, Mn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(Ve),
      q(be),
      G(be, e))
    : q(Ve),
    G(Ve, n);
}
var Ct = null,
  zs = !1,
  _a = !1;
function Im(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function yw(e) {
  (zs = !0), Im(e);
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
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), um(Bu, hn), i);
    } finally {
      (K = t), (_a = !1);
    }
  }
  return null;
}
var Qn = [],
  Gn = 0,
  Jo = null,
  es = 0,
  Je = [],
  et = 0,
  Ln = null,
  Ot = 1,
  bt = "";
function Sn(e, t) {
  (Qn[Gn++] = es), (Qn[Gn++] = Jo), (Jo = e), (es = t);
}
function Vm(e, t, n) {
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
function qu(e) {
  e.return !== null && (Sn(e, 1), Vm(e, 1, 0));
}
function Zu(e) {
  for (; e === Jo; )
    (Jo = Qn[--Gn]), (Qn[Gn] = null), (es = Qn[--Gn]), (Qn[Gn] = null);
  for (; e === Ln; )
    (Ln = Je[--et]),
      (Je[et] = null),
      (bt = Je[--et]),
      (Je[et] = null),
      (Ot = Je[--et]),
      (Je[et] = null);
}
var We = null,
  He = null,
  ee = !1,
  ct = null;
function Fm(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (He = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (He = null), !0) : !1
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
            (We = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Il(e) {
  if (ee) {
    var t = He;
    if (t) {
      var n = t;
      if (!Xf(e, t)) {
        if (zl(e)) throw Error(O(418));
        t = tn(n.nextSibling);
        var r = We;
        t && Xf(e, t)
          ? Fm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ee = !1), (We = e));
      }
    } else {
      if (zl(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (ee = !1), (We = e);
    }
  }
}
function qf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function lo(e) {
  if (e !== We) return !1;
  if (!ee) return qf(e), (ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Dl(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (zl(e)) throw ($m(), Error(O(418)));
    for (; t; ) Fm(e, t), (t = tn(t.nextSibling));
  }
  if ((qf(e), e.tag === 13)) {
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
  } else He = We ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function $m() {
  for (var e = He; e; ) e = tn(e.nextSibling);
}
function pr() {
  (He = We = null), (ee = !1);
}
function Ju(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var ww = It.ReactCurrentBatchConfig;
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
  ec = null;
function tc() {
  ec = Yn = ns = null;
}
function nc(e) {
  var t = ts.current;
  q(ts), (e._currentValue = t);
}
function Vl(e, t, n) {
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
    (ec = Yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (ec !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yn === null)) {
      if (ns === null) throw Error(O(308));
      (Yn = e), (ns.dependencies = { lanes: 0, firstContext: e });
    } else Yn = Yn.next = e;
  return t;
}
var kn = null;
function rc(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function Bm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), rc(t)) : ((n.next = i.next), (i.next = n)),
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
var Wt = !1;
function ic(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hm(e, t) {
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
  if (((r = r.shared), W & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      At(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), rc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    At(e, n)
  );
}
function bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hu(e, n);
  }
}
function Zf(e, t) {
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
  Wt = !1;
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
              Wt = !0;
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
function Jf(e, t, n) {
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
var Wm = new Bh.Component().refs;
function Fl(e, t, n, r) {
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
function ed(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mi(n, r) || !mi(i, o)
      : !0
  );
}
function Um(e, t, n) {
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
function td(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Is.enqueueReplaceState(t, t.state, null);
}
function $l(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Wm), ic(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = rt(o))
    : ((o = Fe(t) ? Mn : be.current), (i.context = dr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Fl(e, t, o, n), (i.state = e.memoizedState)),
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
            a === Wm && (a = i.refs = {}),
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
function nd(e) {
  var t = e._init;
  return t(e._payload);
}
function Km(e) {
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
            nd(S) === p.type))
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
                    nd(S) === P.type)
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
var hr = Km(!0),
  Qm = Km(!1),
  zi = {},
  St = pn(zi),
  wi = pn(zi),
  Si = pn(zi);
function En(e) {
  if (e === zi) throw Error(O(174));
  return e;
}
function oc(e, t) {
  switch ((G(Si, t), G(wi, e), G(St, zi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wl(t, e));
  }
  q(St), G(St, t);
}
function mr() {
  q(St), q(wi), q(Si);
}
function Gm(e) {
  En(Si.current);
  var t = En(St.current),
    n = wl(t, e.type);
  t !== n && (G(wi, e), G(St, n));
}
function sc(e) {
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
function ac() {
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
  Sw = 0;
function ke() {
  throw Error(O(321));
}
function lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function uc(e, t, n, r, i, o) {
  if (
    ((jn = o),
    (se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Mo.current = e === null || e.memoizedState === null ? kw : Ew),
    (e = n(r, i)),
    Jr)
  ) {
    o = 0;
    do {
      if (((Jr = !1), (xi = 0), 25 <= o)) throw Error(O(301));
      (o += 1),
        (ye = ve = null),
        (t.updateQueue = null),
        (Mo.current = _w),
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
function cc() {
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
function Ym() {}
function Xm(e, t) {
  var n = se,
    r = it(),
    i = t(),
    o = !pt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ie = !0)),
    (r = r.queue),
    fc(Jm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ti(9, Zm.bind(null, n, r, i, t), void 0, null),
      we === null)
    )
      throw Error(O(349));
    jn & 30 || qm(n, t, i);
  }
  return i;
}
function qm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ev(t) && tv(e);
}
function Jm(e, t, n) {
  return n(function () {
    ev(t) && tv(e);
  });
}
function ev(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function tv(e) {
  var t = At(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function rd(e) {
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
    (e = e.dispatch = Tw.bind(null, se, e)),
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
function nv() {
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
    if (((o = s.destroy), r !== null && lc(r, s.deps))) {
      i.memoizedState = Ti(t, n, o, r);
      return;
    }
  }
  (se.flags |= e), (i.memoizedState = Ti(1 | t, n, o, r));
}
function id(e, t) {
  return Lo(8390656, 8, e, t);
}
function fc(e, t) {
  return Vs(2048, 8, e, t);
}
function rv(e, t) {
  return Vs(4, 2, e, t);
}
function iv(e, t) {
  return Vs(4, 4, e, t);
}
function ov(e, t) {
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
function sv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vs(4, 4, ov.bind(null, t, e), n)
  );
}
function dc() {}
function av(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lv(e, t) {
  var n = it();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uv(e, t, n) {
  return jn & 21
    ? (pt(n, t) || ((n = dm()), (se.lanes |= n), (Dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function xw(e, t) {
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
function cv() {
  return it().memoizedState;
}
function Pw(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fv(e))
  )
    dv(t, n);
  else if (((n = Bm(e, t, n, r)), n !== null)) {
    var i = De();
    dt(n, e, r, i), pv(n, t, r);
  }
}
function Tw(e, t, n) {
  var r = on(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fv(e)) dv(t, i);
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
            ? ((i.next = i), rc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bm(e, t, i, r)),
      n !== null && ((i = De()), dt(n, e, r, i), pv(n, t, r));
  }
}
function fv(e) {
  var t = e.alternate;
  return e === se || (t !== null && t === se);
}
function dv(e, t) {
  Jr = os = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function pv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Hu(e, n);
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
  kw = {
    readContext: rt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: id,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Lo(4194308, 4, ov.bind(null, t, e), n)
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
        (e = e.dispatch = Pw.bind(null, se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: rd,
    useDebugValue: dc,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = rd(!1),
        t = e[0];
      return (e = xw.bind(null, e[1])), (vt().memoizedState = e), [t, e];
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
        jn & 30 || qm(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        id(Jm.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ti(9, Zm.bind(null, r, o, n, t), void 0, null),
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
      } else (n = Sw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ew = {
    readContext: rt,
    useCallback: av,
    useContext: rt,
    useEffect: fc,
    useImperativeHandle: sv,
    useInsertionEffect: rv,
    useLayoutEffect: iv,
    useMemo: lv,
    useReducer: ba,
    useRef: nv,
    useState: function () {
      return ba(Pi);
    },
    useDebugValue: dc,
    useDeferredValue: function (e) {
      var t = it();
      return uv(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ba(Pi)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Ym,
    useSyncExternalStore: Xm,
    useId: cv,
    unstable_isNewReconciler: !1,
  },
  _w = {
    readContext: rt,
    useCallback: av,
    useContext: rt,
    useEffect: fc,
    useImperativeHandle: sv,
    useInsertionEffect: rv,
    useLayoutEffect: iv,
    useMemo: lv,
    useReducer: Ma,
    useRef: nv,
    useState: function () {
      return Ma(Pi);
    },
    useDebugValue: dc,
    useDeferredValue: function (e) {
      var t = it();
      return ve === null ? (t.memoizedState = e) : uv(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ma(Pi)[0],
        t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: Ym,
    useSyncExternalStore: Xm,
    useId: cv,
    unstable_isNewReconciler: !1,
  };
function vr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += e1(r)), (r = r.return);
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
function Bl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Cw = typeof WeakMap == "function" ? WeakMap : Map;
function hv(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ls || ((ls = !0), (Zl = r)), Bl(e, t);
    }),
    n
  );
}
function mv(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Bl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Bl(e, t),
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
function od(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cw();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = $w.bind(null, e, t, n)), t.then(e, e));
}
function sd(e) {
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
function ad(e, t, n, r, i) {
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
var Ow = It.ReactCurrentOwner,
  Ie = !1;
function Le(e, t, n, r) {
  t.child = e === null ? Qm(t, null, n, r) : hr(t, e.child, n, r);
}
function ld(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ar(t, i),
    (r = uc(e, t, n, r, o, i)),
    (n = cc()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ee && n && qu(t), (t.flags |= 1), Le(e, t, r, i), t.child)
  );
}
function ud(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Sc(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vv(e, t, o, r, i))
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
function vv(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (mi(o, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), Nt(e, t, i);
  }
  return Hl(e, t, n, r, i);
}
function gv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(qn, Be),
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
          G(qn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        G(qn, Be),
        (Be |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(qn, Be),
      (Be |= r);
  return Le(e, t, i, n), t.child;
}
function yv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Hl(e, t, n, r, i) {
  var o = Fe(n) ? Mn : be.current;
  return (
    (o = dr(t, o)),
    ar(t, i),
    (n = uc(e, t, n, r, o, i)),
    (r = cc()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Nt(e, t, i))
      : (ee && r && qu(t), (t.flags |= 1), Le(e, t, n, i), t.child)
  );
}
function cd(e, t, n, r, i) {
  if (Fe(n)) {
    var o = !0;
    Zo(t);
  } else o = !1;
  if ((ar(t, i), t.stateNode === null))
    jo(e, t), Um(t, n, r), $l(t, n, r, i), (r = !0);
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
      ((a !== r || l !== u) && td(t, s, r, u)),
      (Wt = !1);
    var d = t.memoizedState;
    (s.state = d),
      rs(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ve.current || Wt
        ? (typeof c == "function" && (Fl(t, n, c, r), (l = t.memoizedState)),
          (a = Wt || ed(t, n, a, r, d, l, u))
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
      Hm(e, t),
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
      ((a !== f || d !== l) && td(t, s, r, l)),
      (Wt = !1),
      (d = t.memoizedState),
      (s.state = d),
      rs(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || Ve.current || Wt
      ? (typeof v == "function" && (Fl(t, n, v, r), (y = t.memoizedState)),
        (u = Wt || ed(t, n, u, r, d, y, l) || !1)
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
  return Wl(e, t, n, r, o, i);
}
function Wl(e, t, n, r, i, o) {
  yv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Yf(t, n, !1), Nt(e, t, o);
  (r = t.stateNode), (Ow.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = hr(t, e.child, null, o)), (t.child = hr(t, null, a, o)))
      : Le(e, t, a, o),
    (t.memoizedState = r.state),
    i && Yf(t, n, !0),
    t.child
  );
}
function wv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gf(e, t.context, !1),
    oc(e, t.containerInfo);
}
function fd(e, t, n, r, i) {
  return pr(), Ju(i), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var Ul = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sv(e, t, n) {
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
    G(ie, i & 1),
    e === null)
  )
    return (
      Il(t),
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
              (t.child.memoizedState = Kl(n)),
              (t.memoizedState = Ul),
              e)
            : pc(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return bw(e, t, s, r, a, i, n);
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
          ? Kl(n)
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
function pc(e, t) {
  return (
    (t = Bs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function co(e, t, n, r) {
  return (
    r !== null && Ju(r),
    hr(t, e.child, null, n),
    (e = pc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bw(e, t, n, r, i, o, s) {
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
        (t.child.memoizedState = Kl(s)),
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
    return wc(), (r = La(Error(O(421)))), co(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Bw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (He = tn(i.nextSibling)),
      (We = t),
      (ee = !0),
      (ct = null),
      e !== null &&
        ((Je[et++] = Ot),
        (Je[et++] = bt),
        (Je[et++] = Ln),
        (Ot = e.id),
        (bt = e.overflow),
        (Ln = t)),
      (t = pc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function dd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Vl(e.return, t, n);
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
function xv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Le(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dd(e, n, t);
        else if (e.tag === 19) dd(e, n, t);
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
  if ((G(ie, r), !(t.mode & 1))) t.memoizedState = null;
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
function Mw(e, t, n) {
  switch (t.tag) {
    case 3:
      wv(t), pr();
      break;
    case 5:
      Gm(t);
      break;
    case 1:
      Fe(t.type) && Zo(t);
      break;
    case 4:
      oc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      G(ts, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sv(e, t, n)
          : (G(ie, ie.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      G(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), gv(e, t, n);
  }
  return Nt(e, t, n);
}
var Pv, Ql, Tv, kv;
Pv = function (e, t) {
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
Ql = function () {};
Tv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), En(St.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ml(e, i)), (r = ml(e, r)), (o = []);
        break;
      case "select":
        (i = ae({}, i, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = yl(e, i)), (r = yl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Xo);
    }
    Sl(n, r);
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
kv = function (e, t, n, r) {
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
function Lw(e, t, n) {
  var r = t.pendingProps;
  switch ((Zu(t), t.tag)) {
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
        ac(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (lo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (tu(ct), (ct = null)))),
        Ql(e, t),
        Ee(t),
        null
      );
    case 5:
      sc(t);
      var i = En(Si.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tv(e, t, n, r, i),
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
              for (i = 0; i < Wr.length; i++) X(Wr[i], r);
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
              xf(r, o), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              Tf(r, o), X("invalid", r);
          }
          Sl(n, o), (i = null);
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
              Ji(r), Pf(r, o, !0);
              break;
            case "textarea":
              Ji(r), kf(r);
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
            e === "http://www.w3.org/1999/xhtml" && (e = qh(n)),
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
            Pv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = xl(n, r)), n)) {
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
                for (i = 0; i < Wr.length; i++) X(Wr[i], e);
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
                xf(e, r), (i = ml(e, r)), X("invalid", e);
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
                Tf(e, r), (i = yl(e, r)), X("invalid", e);
                break;
              default:
                i = r;
            }
            Sl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? em(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Zh(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ui(e, l)
                    : typeof l == "number" && ui(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (li.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && X("scroll", e)
                      : l != null && zu(e, o, l, s));
              }
            switch (n) {
              case "input":
                Ji(e), Pf(e, r, !1);
                break;
              case "textarea":
                Ji(e), kf(e);
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
      if (e && t.stateNode != null) kv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = En(Si.current)), En(St.current), lo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = We), e !== null))
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
          $m(), pr(), (t.flags |= 98560), (o = !1);
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
        } else ct !== null && (tu(ct), (ct = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? ge === 0 && (ge = 3) : wc())),
          t.updateQueue !== null && (t.flags |= 4),
          Ee(t),
          null);
    case 4:
      return (
        mr(), Ql(e, t), e === null && vi(t.stateNode.containerInfo), Ee(t), null
      );
    case 10:
      return nc(t.type._context), Ee(t), null;
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
                return G(ie, (ie.current & 1) | 2), t.child;
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
          G(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ee(t), null);
    case 22:
    case 23:
      return (
        yc(),
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
function jw(e, t) {
  switch ((Zu(t), t.tag)) {
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
        ac(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return sc(t), null;
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
      return nc(t.type._context), null;
    case 22:
    case 23:
      return yc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var fo = !1,
  Ce = !1,
  Dw = typeof WeakSet == "function" ? WeakSet : Set,
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
var pd = !1;
function Rw(e, t) {
  if (((Ll = Qo), (e = Om()), Xu(e))) {
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
  for (jl = { focusedElem: e, selectionRange: n }, Qo = !1, L = t; L !== null; )
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
  return (y = pd), (pd = !1), y;
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
function Yl(e) {
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
function Ev(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ev(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[yi], delete t[Al], delete t[vw], delete t[gw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _v(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _v(e.return)) return null;
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
function Xl(e, t, n) {
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
    for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), (e = e.sibling);
}
function ql(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ql(e, t, n), e = e.sibling; e !== null; ) ql(e, t, n), (e = e.sibling);
}
var Se = null,
  ut = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) Cv(e, t, n), (n = n.sibling);
}
function Cv(e, t, n) {
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
function md(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Dw()),
      t.forEach(function (r) {
        var i = Hw.bind(null, e, r);
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
        Cv(o, s, i), (Se = null), (ut = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ce(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ov(t, e), (t = t.sibling);
}
function Ov(e, t) {
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
            a === "input" && o.type === "radio" && o.name != null && Yh(i, o),
              xl(a, s);
            var u = xl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? em(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Zh(i, f)
                : c === "children"
                ? ui(i, f)
                : zu(i, c, f, u);
            }
            switch (a) {
              case "input":
                vl(i, o);
                break;
              case "textarea":
                Xh(i, o);
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
            (vc = he())),
        r & 4 && md(e);
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
                    gd(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (L = v)) : gd(f);
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
                      (a.style.display = Jh("display", s)));
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
      ot(t, e), ht(e), r & 4 && md(e);
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
          if (_v(n)) {
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
          var o = hd(e);
          ql(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = hd(e);
          Xl(e, a, s);
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
function Aw(e, t, n) {
  (L = e), bv(e);
}
function bv(e, t, n) {
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
                ? yd(i)
                : l !== null
                ? ((l.return = s), (L = l))
                : yd(i);
        for (; o !== null; ) (L = o), bv(o), (o = o.sibling);
        (L = i), (fo = a), (Ce = u);
      }
      vd(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : vd(e);
  }
}
function vd(e) {
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
              o !== null && Jf(t, o, r);
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
                Jf(t, s, n);
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
        Ce || (t.flags & 512 && Yl(t));
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
function gd(e) {
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
function yd(e) {
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
            Yl(t);
          } catch (l) {
            ce(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Yl(t);
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
var Nw = Math.ceil,
  as = It.ReactCurrentDispatcher,
  hc = It.ReactCurrentOwner,
  nt = It.ReactCurrentBatchConfig,
  W = 0,
  we = null,
  me = null,
  Pe = 0,
  Be = 0,
  qn = pn(0),
  ge = 0,
  ki = null,
  Dn = 0,
  $s = 0,
  mc = 0,
  ti = null,
  ze = null,
  vc = 0,
  gr = 1 / 0,
  _t = null,
  ls = !1,
  Zl = null,
  rn = null,
  po = !1,
  Xt = null,
  us = 0,
  ni = 0,
  Jl = null,
  Do = -1,
  Ro = 0;
function De() {
  return W & 6 ? he() : Do !== -1 ? Do : (Do = he());
}
function on(e) {
  return e.mode & 1
    ? W & 2 && Pe !== 0
      ? Pe & -Pe
      : ww.transition !== null
      ? (Ro === 0 && (Ro = dm()), Ro)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wm(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < ni) throw ((ni = 0), (Jl = null), Error(O(185)));
  Ri(e, n, r),
    (!(W & 2) || e !== we) &&
      (e === we && (!(W & 2) && ($s |= n), ge === 4 && Qt(e, Pe)),
      $e(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((gr = he() + 500), zs && hn()));
}
function $e(e, t) {
  var n = e.callbackNode;
  w1(e, t);
  var r = Ko(e, e === we ? Pe : 0);
  if (r === 0)
    n !== null && Cf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Cf(n), t === 1))
      e.tag === 0 ? yw(wd.bind(null, e)) : Im(wd.bind(null, e)),
        hw(function () {
          !(W & 6) && hn();
        }),
        (n = null);
    else {
      switch (pm(r)) {
        case 1:
          n = Bu;
          break;
        case 4:
          n = cm;
          break;
        case 16:
          n = Uo;
          break;
        case 536870912:
          n = fm;
          break;
        default:
          n = Uo;
      }
      n = zv(n, Mv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mv(e, t) {
  if (((Do = -1), (Ro = 0), W & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var r = Ko(e, e === we ? Pe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cs(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var o = jv();
    (we !== e || Pe !== t) && ((_t = null), (gr = he() + 500), Cn(e, t));
    do
      try {
        Vw();
        break;
      } catch (a) {
        Lv(e, a);
      }
    while (!0);
    tc(),
      (as.current = o),
      (W = i),
      me !== null ? (t = 0) : ((we = null), (Pe = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = _l(e)), i !== 0 && ((r = i), (t = eu(e, i)))), t === 1)
    )
      throw ((n = ki), Cn(e, 0), Qt(e, r), $e(e, he()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !zw(i) &&
          ((t = cs(e, r)),
          t === 2 && ((o = _l(e)), o !== 0 && ((r = o), (t = eu(e, o)))),
          t === 1))
      )
        throw ((n = ki), Cn(e, 0), Qt(e, r), $e(e, he()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          xn(e, ze, _t);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = vc + 500 - he()), 10 < t))
          ) {
            if (Ko(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              De(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Rl(xn.bind(null, e, ze, _t), t);
            break;
          }
          xn(e, ze, _t);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
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
                : 1960 * Nw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Rl(xn.bind(null, e, ze, _t), r);
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
  return $e(e, he()), e.callbackNode === n ? Mv.bind(null, e) : null;
}
function eu(e, t) {
  var n = ti;
  return (
    e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256),
    (e = cs(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && tu(t)),
    e
  );
}
function tu(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function zw(e) {
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
function Qt(e, t) {
  for (
    t &= ~mc,
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
function wd(e) {
  if (W & 6) throw Error(O(327));
  lr();
  var t = Ko(e, 0);
  if (!(t & 1)) return $e(e, he()), null;
  var n = cs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _l(e);
    r !== 0 && ((t = r), (n = eu(e, r)));
  }
  if (n === 1) throw ((n = ki), Cn(e, 0), Qt(e, t), $e(e, he()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, ze, _t),
    $e(e, he()),
    null
  );
}
function gc(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((gr = he() + 500), zs && hn());
  }
}
function Rn(e) {
  Xt !== null && Xt.tag === 0 && !(W & 6) && lr();
  var t = W;
  W |= 1;
  var n = nt.transition,
    r = K;
  try {
    if (((nt.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (nt.transition = n), (W = t), !(W & 6) && hn();
  }
}
function yc() {
  (Be = qn.current), q(qn);
}
function Cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pw(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Zu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qo();
          break;
        case 3:
          mr(), q(Ve), q(be), ac();
          break;
        case 5:
          sc(r);
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
          nc(r.type._context);
          break;
        case 22:
        case 23:
          yc();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (me = e = sn(e.current, null)),
    (Pe = Be = t),
    (ge = 0),
    (ki = null),
    (mc = $s = Dn = 0),
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
function Lv(e, t) {
  do {
    var n = me;
    try {
      if ((tc(), (Mo.current = ss), os)) {
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
        (hc.current = null),
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
          var v = sd(s);
          if (v !== null) {
            (v.flags &= -257),
              ad(v, s, a, o, t),
              v.mode & 1 && od(o, u, t),
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
              od(o, u, t), wc();
              break e;
            }
            l = Error(O(426));
          }
        } else if (ee && a.mode & 1) {
          var x = sd(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              ad(x, s, a, o, t),
              Ju(vr(l, a));
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
              var h = hv(o, l, t);
              Zf(o, h);
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
                var w = mv(o, a, t);
                Zf(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Rv(n);
    } catch (S) {
      (t = S), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jv() {
  var e = as.current;
  return (as.current = ss), e === null ? ss : e;
}
function wc() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    we === null || (!(Dn & 268435455) && !($s & 268435455)) || Qt(we, Pe);
}
function cs(e, t) {
  var n = W;
  W |= 2;
  var r = jv();
  (we !== e || Pe !== t) && ((_t = null), Cn(e, t));
  do
    try {
      Iw();
      break;
    } catch (i) {
      Lv(e, i);
    }
  while (!0);
  if ((tc(), (W = n), (as.current = r), me !== null)) throw Error(O(261));
  return (we = null), (Pe = 0), ge;
}
function Iw() {
  for (; me !== null; ) Dv(me);
}
function Vw() {
  for (; me !== null && !c1(); ) Dv(me);
}
function Dv(e) {
  var t = Nv(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Rv(e) : (me = t),
    (hc.current = null);
}
function Rv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = jw(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (me = null);
        return;
      }
    } else if (((n = Lw(n, t, Be)), n !== null)) {
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
    (nt.transition = null), (K = 1), Fw(e, t, n, r);
  } finally {
    (nt.transition = i), (K = r);
  }
  return null;
}
function Fw(e, t, n, r) {
  do lr();
  while (Xt !== null);
  if (W & 6) throw Error(O(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (S1(e, o),
    e === we && ((me = we = null), (Pe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      po ||
      ((po = !0),
      zv(Uo, function () {
        return lr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = nt.transition), (nt.transition = null);
    var s = K;
    K = 1;
    var a = W;
    (W |= 4),
      (hc.current = null),
      Rw(e, n),
      Ov(n, e),
      sw(jl),
      (Qo = !!Ll),
      (jl = Ll = null),
      (e.current = n),
      Aw(n),
      f1(),
      (W = a),
      (K = s),
      (nt.transition = o);
  } else e.current = n;
  if (
    (po && ((po = !1), (Xt = e), (us = i)),
    (o = e.pendingLanes),
    o === 0 && (rn = null),
    h1(n.stateNode),
    $e(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ls) throw ((ls = !1), (e = Zl), (Zl = null), e);
  return (
    us & 1 && e.tag !== 0 && lr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Jl ? ni++ : ((ni = 0), (Jl = e))) : (ni = 0),
    hn(),
    null
  );
}
function lr() {
  if (Xt !== null) {
    var e = pm(us),
      t = nt.transition,
      n = K;
    try {
      if (((nt.transition = null), (K = 16 > e ? 16 : e), Xt === null))
        var r = !1;
      else {
        if (((e = Xt), (Xt = null), (us = 0), W & 6)) throw Error(O(331));
        var i = W;
        for (W |= 4, L = e.current; L !== null; ) {
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
                      if ((Ev(c), c === u)) {
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
          ((W = i), hn(), wt && typeof wt.onPostCommitFiberRoot == "function")
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
function Sd(e, t, n) {
  (t = vr(n, t)),
    (t = hv(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = De()),
    e !== null && (Ri(e, 1, t), $e(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Sd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (rn === null || !rn.has(r)))
        ) {
          (e = vr(n, e)),
            (e = mv(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = De()),
            t !== null && (Ri(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $w(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Pe & n) === n &&
      (ge === 4 || (ge === 3 && (Pe & 130023424) === Pe && 500 > he() - vc)
        ? Cn(e, 0)
        : (mc |= n)),
    $e(e, t);
}
function Av(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = no), (no <<= 1), !(no & 130023424) && (no = 4194304))
      : (t = 1));
  var n = De();
  (e = At(e, t)), e !== null && (Ri(e, t, n), $e(e, n));
}
function Bw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Av(e, n);
}
function Hw(e, t) {
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
  r !== null && r.delete(t), Av(e, n);
}
var Nv;
Nv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), Mw(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), ee && t.flags & 1048576 && Vm(t, es, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      jo(e, t), (e = t.pendingProps);
      var i = dr(t, be.current);
      ar(t, n), (i = uc(null, t, r, e, i, n));
      var o = cc();
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
            ic(t),
            (i.updater = Is),
            (t.stateNode = i),
            (i._reactInternals = t),
            $l(t, r, e, n),
            (t = Wl(null, t, r, !0, o, n)))
          : ((t.tag = 0), ee && o && qu(t), Le(null, t, i, n), (t = t.child)),
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
          (i = t.tag = Uw(r)),
          (e = at(r, e)),
          i)
        ) {
          case 0:
            t = Hl(null, t, r, e, n);
            break e;
          case 1:
            t = cd(null, t, r, e, n);
            break e;
          case 11:
            t = ld(null, t, r, e, n);
            break e;
          case 14:
            t = ud(null, t, r, at(r.type, e), n);
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
        Hl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        cd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((wv(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Hm(e, t),
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
            (i = vr(Error(O(423)), t)), (t = fd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = vr(Error(O(424)), t)), (t = fd(e, t, r, n, i));
            break e;
          } else
            for (
              He = tn(t.stateNode.containerInfo.firstChild),
                We = t,
                ee = !0,
                ct = null,
                n = Qm(t, null, r, n),
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
        Gm(t),
        e === null && Il(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Dl(r, i) ? (s = null) : o !== null && Dl(r, o) && (t.flags |= 32),
        yv(e, t),
        Le(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Il(t), null;
    case 13:
      return Sv(e, t, n);
    case 4:
      return (
        oc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        ld(e, t, r, i, n)
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
          G(ts, r._currentValue),
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
                      Vl(o.return, n, t),
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
                  Vl(s, n, t),
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
        ud(e, t, r, i, n)
      );
    case 15:
      return vv(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : at(r, i)),
        jo(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Zo(t)) : (e = !1),
        ar(t, n),
        Um(t, r, i),
        $l(t, r, i, n),
        Wl(null, t, r, !0, e, n)
      );
    case 19:
      return xv(e, t, n);
    case 22:
      return gv(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function zv(e, t) {
  return um(e, t);
}
function Ww(e, t, n, r) {
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
  return new Ww(e, t, n, r);
}
function Sc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uw(e) {
  if (typeof e == "function") return Sc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Vu)) return 11;
    if (e === Fu) return 14;
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
  if (((r = e), typeof e == "function")) Sc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case $n:
        return On(n.children, i, o, t);
      case Iu:
        (s = 8), (i |= 8);
        break;
      case fl:
        return (
          (e = tt(12, n, t, i | 2)), (e.elementType = fl), (e.lanes = o), e
        );
      case dl:
        return (e = tt(13, n, t, i)), (e.elementType = dl), (e.lanes = o), e;
      case pl:
        return (e = tt(19, n, t, i)), (e.elementType = pl), (e.lanes = o), e;
      case Kh:
        return Bs(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Wh:
              s = 10;
              break e;
            case Uh:
              s = 9;
              break e;
            case Vu:
              s = 11;
              break e;
            case Fu:
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
    (e.elementType = Kh),
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
function Kw(e, t, n, r, i) {
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
function xc(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Kw(e, t, n, a, l)),
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
    ic(o),
    e
  );
}
function Qw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Iv(e) {
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
    if (Fe(n)) return zm(e, n, t);
  }
  return t;
}
function Vv(e, t, n, r, i, o, s, a, l) {
  return (
    (e = xc(n, r, !0, e, i, o, s, a, l)),
    (e.context = Iv(null)),
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
    (n = Iv(n)),
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
function xd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pc(e, t) {
  xd(e, t), (e = e.alternate) && xd(e, t);
}
function Gw() {
  return null;
}
var Fv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Tc(e) {
  this._internalRoot = e;
}
Ws.prototype.render = Tc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Hs(e, t, null, null);
};
Ws.prototype.unmount = Tc.prototype.unmount = function () {
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
function Ws(e) {
  this._internalRoot = e;
}
Ws.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), n === 0 && ym(e);
  }
};
function kc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Us(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pd() {}
function Yw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = fs(s);
        o.call(u);
      };
    }
    var s = Vv(t, r, e, 0, null, !1, !1, "", Pd);
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
  var l = xc(e, 0, !1, null, null, !1, !1, "", Pd);
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
  } else s = Yw(n, t, e, i, r);
  return fs(s);
}
hm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 &&
          (Hu(t, n | 1), $e(t, he()), !(W & 6) && ((gr = he() + 500), hn()));
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
        Pc(e, 1);
  }
};
Wu = function (e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = De();
      dt(t, e, 134217728, n);
    }
    Pc(e, 134217728);
  }
};
mm = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = At(e, t);
    if (n !== null) {
      var r = De();
      dt(n, e, t, r);
    }
    Pc(e, t);
  }
};
vm = function () {
  return K;
};
gm = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Tl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vl(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            Gh(r), vl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Xh(e, n);
      break;
    case "select":
      (t = n.value), t != null && rr(e, !!n.multiple, t, !1);
  }
};
rm = gc;
im = Rn;
var Xw = { usingClientEntryPoint: !1, Events: [Ni, Un, Ns, tm, nm, gc] },
  Vr = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  qw = {
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
      return (e = am(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vr.findFiberByHostInstance || Gw,
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
      (js = ho.inject(qw)), (wt = ho);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xw;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!kc(t)) throw Error(O(200));
  return Qw(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!kc(e)) throw Error(O(299));
  var n = !1,
    r = "",
    i = Fv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = xc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Rt] = t.current),
    vi(e.nodeType === 8 ? e.parentNode : e),
    new Tc(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = am(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return Rn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Us(t)) throw Error(O(200));
  return Ks(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!kc(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Fv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Vv(t, null, e, 1, n ?? null, i, !1, o, s)),
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
  return new Ws(t);
};
Qe.render = function (e, t, n) {
  if (!Us(t)) throw Error(O(200));
  return Ks(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Us(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Rn(function () {
        Ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = gc;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Us(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ks(e, t, n, !1, r);
};
Qe.version = "18.2.0-next-9e3b772b8-20220608";
function $v() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($v);
    } catch (e) {
      console.error(e);
    }
}
$v(), (Vh.exports = Qe);
var Bv = Vh.exports,
  Td = Bv;
(ul.createRoot = Td.createRoot), (ul.hydrateRoot = Td.hydrateRoot);
const Zw = () =>
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
              ", with a Bachelor's in Information Technology from Poornima College of Engineering. I'm a tech enthusiast passionate about merging the worlds of technology and innovation.",
              " ",
              T.jsx("span", {
                className: "font-semibold text-blue-300",
                children:
                  "My skill set revolves around a fusion of Frontend Development, Data Science, Data Analytics, and Machine Learning. I have expertise spanning diverse domains.",
              }),
            ],
          }),
          T.jsx("p", {
            className: "text-sm sm:text-base md:text-lg mt-4 text-justify",
            children:
              "On one hand, I excel in optimizing product applications, ensuring they are robust, reliable, and efficient through rigorous application monitoring and production support. My technical expertise allows me to design and implement solutions that keep systems performing at their peak. On the other hand, my fascination with both frontend development and data science enables me to create captivating, user-friendly interfaces and extract meaningful insights from complex data sets, blending creativity with analytical precision.",
          }),
          T.jsxs("p", {
            className: "text-sm sm:text-base md:text-lg mt-4 text-justify",
            children: [
              "I'm not just about skills;",
              " ",
              T.jsx("span", {
                className: "font-bold text-blue-300",
                children:
                  "I'm driven by the desire to apply these proficiencies in meaningful ways.",
              }),
              " ",
              "Ranging from ML engineering to frontend development, DevOps, and diving deep into data analytics. My motivation stems from the convergence of these diverse fields, constantly seeking to combine user-centric design with data-driven insights and incorporate the complexities of machine learning into reliable systems.",
            ],
          }),
        ],
      }),
    }),
  Jw = () =>
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
  eS = "./assets/hexagon_technology_sdn_bhd_logo-BNb8k9eD.jpeg",
  tS = "./assets/logo-decurtis-corporation-ryFhlHtS.png",
  nS = () =>
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
              logo: eS,
              responsibilities: [
                "Monitored and troubleshot applications and Kubernetes services using tools like Robusta, Argo CD, Lens, Graylog, and Kibana.",
                "Automated alerting for critical Kubernetes events using Prometheus and Alertmanager, reducing response time by 60%.",
                "Developed comprehensive dashboards and alerts in Grafana and New Relic to improve monitoring efficiency.",
                "Defined, monitored, and improved SLOs, SLIs, and SLAs to ensure alignment with business goals.",
              ],
            },
            {
              company: "Decurtis Corporation",
              role: "Associate Site Reliability Engineer",
              duration: "02/2023 - 12/2023",
              logo: tS,
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
var Hv = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  kd = qt.createContext && qt.createContext(Hv),
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
  rS = function (e, t) {
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
function Wv(e) {
  return (
    e &&
    e.map(function (t, n) {
      return qt.createElement(t.tag, an({ key: n }, t.attr), Wv(t.child));
    })
  );
}
function mn(e) {
  return function (t) {
    return qt.createElement(iS, an({ attr: an({}, e.attr) }, t), Wv(e.child));
  };
}
function iS(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = rS(e, ["attr", "size", "title"]),
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
  return kd !== void 0
    ? qt.createElement(kd.Consumer, null, function (n) {
        return t(n);
      })
    : t(Hv);
}
function Uv(e) {
  return mn({
    tag: "svg",
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
function Kv(e) {
  return mn({
    tag: "svg",
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
function Qv(e) {
  return mn({
    tag: "svg",
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
function oS(e) {
  return mn({
    tag: "svg",
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
function sS(e) {
  return mn({
    tag: "svg",
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
function Ed(e) {
  return mn({
    tag: "svg",
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
function Gv(e) {
  return mn({
    tag: "svg",
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
const aS = () => {
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
              children: T.jsx(Qv, { size: 30 }),
            }),
            T.jsx("a", { href: "", children: T.jsx(Kv, { size: 30 }) }),
            T.jsx("a", {
              href: "mailto:mathurprakhar1@gmail.com",
              children: T.jsx(Gv, { size: 30 }),
            }),
            T.jsx("a", { href: "", children: T.jsx(Uv, { size: 30 }) }),
          ],
        }),
        T.jsxs("p", {
          className: " text-center py-5",
          children: ["© ", e, " Prakhar Mathur. All Rights Reserved."],
        }),
      ],
    });
  },
  Yv = R.createContext({});
function lS(e) {
  const t = R.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ec = R.createContext(null),
  Xv = R.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function uS(e = !0) {
  const t = R.useContext(Ec);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = R.useId();
  R.useEffect(() => {
    e && i(o);
  }, [e]);
  const s = R.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const _c = typeof window < "u",
  cS = _c ? R.useLayoutEffect : R.useEffect,
  Ue = (e) => e;
let nu = Ue;
function Cc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const yr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Lt = (e) => e * 1e3,
  jt = (e) => e / 1e3,
  fS = { skipAnimations: !1, useManualTiming: !1 },
  mo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  _d = { value: null, addProjectionMetrics: null };
function dS(e, t) {
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
        t && _d.value && _d.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(f));
    },
  };
  return c;
}
const pS = 40;
function qv(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = mo.reduce((h, p) => ((h[p] = dS(o, t ? p : void 0)), h), {}),
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
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, pS), 1)),
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
  } = qv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0),
  Zv = R.createContext({ strict: !1 }),
  Cd = {
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
for (const e in Cd) wr[e] = { isEnabled: (t) => Cd[e].some((n) => !!t[n]) };
function hS(e) {
  for (const t in e) wr[t] = { ...wr[t], ...e[t] };
}
const mS = new Set([
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
    mS.has(e)
  );
}
let Jv = (e) => !ds(e);
function vS(e) {
  e && (Jv = (t) => (t.startsWith("on") ? !ds(t) : e(t)));
}
try {
  vS(require("@emotion/is-prop-valid").default);
} catch {}
function gS(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Jv(i) ||
        (n === !0 && ds(i)) ||
        (!t && !ds(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function yS(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Qs = R.createContext({});
function Gs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ei(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Oc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  bc = ["initial", ...Oc];
function Ys(e) {
  return Gs(e.animate) || bc.some((t) => Ei(e[t]));
}
function eg(e) {
  return !!(Ys(e) || e.variants);
}
function wS(e, t) {
  if (Ys(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ei(n) ? n : void 0,
      animate: Ei(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function SS(e) {
  const { initial: t, animate: n } = wS(e, R.useContext(Qs));
  return R.useMemo(() => ({ initial: t, animate: n }), [Od(t), Od(n)]);
}
function Od(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const xS = Symbol.for("motionComponentSymbol");
function Zn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function PS(e, t, n) {
  return R.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Zn(n) && (n.current = r));
    },
    [t]
  );
}
const Mc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  TS = "framerAppearId",
  tg = "data-" + Mc(TS),
  { schedule: Lc, cancel: lO } = qv(queueMicrotask, !1),
  ng = R.createContext({});
function kS(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = R.useContext(Qs),
    l = R.useContext(Zv),
    u = R.useContext(Ec),
    c = R.useContext(Xv).reducedMotion,
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
    v = R.useContext(ng);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    ES(f.current, n, i, v);
  const y = R.useRef(!1);
  R.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const g = n[tg],
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
    cS(() => {
      d &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Lc.render(d.render),
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
function ES(e, t, n, r) {
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
    t["data-framer-portal-id"] ? void 0 : rg(e.parent)
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
function rg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : rg(e.parent);
}
function _S({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var o, s;
  e && hS(e);
  function a(u, c) {
    let f;
    const d = { ...R.useContext(Xv), ...u, layoutId: CS(u) },
      { isStatic: v } = d,
      y = SS(u),
      g = r(u, v);
    if (!v && _c) {
      OS();
      const x = bS(d);
      (f = x.MeasureLayout),
        (y.visualElement = kS(i, g, d, t, x.ProjectionNode));
    }
    return T.jsxs(Qs.Provider, {
      value: y,
      children: [
        f && y.visualElement
          ? T.jsx(f, { visualElement: y.visualElement, ...d })
          : null,
        n(i, u, PS(g, y.visualElement, c), g, v, y.visualElement),
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
  return (l[xS] = i), l;
}
function CS({ layoutId: e }) {
  const t = R.useContext(Yv).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function OS(e, t) {
  R.useContext(Zv).strict;
}
function bS(e) {
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
const ig = (e) => (t) => typeof t == "string" && t.startsWith(e),
  jc = ig("--"),
  MS = ig("var(--"),
  Dc = (e) => (MS(e) ? LS.test(e.split("/*")[0].trim()) : !1),
  LS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  _i = {};
function jS(e) {
  for (const t in e) (_i[t] = e[t]), jc(t) && (_i[t].isCSSVariable = !0);
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
function og(e, { layout: t, layoutId: n }) {
  return (
    In.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!_i[e] || e === "opacity"))
  );
}
const Oe = (e) => !!(e && e.getVelocity),
  sg = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
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
  DS = Ii("vh"),
  RS = Ii("vw"),
  bd = {
    ...xt,
    parse: (e) => xt.parse(e) / 100,
    transform: (e) => xt.transform(e * 100),
  },
  AS = {
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
  NS = {
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
    originX: bd,
    originY: bd,
    originZ: V,
  },
  Md = { ...Mr, transform: Math.round },
  Rc = {
    ...AS,
    ...NS,
    zIndex: Md,
    size: V,
    fillOpacity: Ci,
    strokeOpacity: Ci,
    numOctaves: Md,
  },
  zS = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  IS = br.length;
function VS(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < IS; o++) {
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
      const u = sg(a, Rc[s]);
      if (!l) {
        i = !1;
        const c = zS[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Ac(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (In.has(l)) {
      s = !0;
      continue;
    } else if (jc(l)) {
      i[l] = u;
      continue;
    } else {
      const c = sg(u, Rc[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = VS(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Nc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ag(e, t, n) {
  for (const r in t) !Oe(t[r]) && !og(r, n) && (e[r] = t[r]);
}
function FS({ transformTemplate: e }, t) {
  return R.useMemo(() => {
    const n = Nc();
    return Ac(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function $S(e, t) {
  const n = e.style || {},
    r = {};
  return ag(r, n, e), Object.assign(r, FS(e, t)), r;
}
function BS(e, t) {
  const n = {},
    r = $S(e, t);
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
const HS = [
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
function zc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(HS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
const WS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  US = { offset: "strokeDashoffset", array: "strokeDasharray" };
function KS(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? WS : US;
  e[o.offset] = V.transform(-r);
  const s = V.transform(t),
    a = V.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Ld(e, t, n) {
  return typeof e == "string" ? e : V.transform(t + n * e);
}
function QS(e, t, n) {
  const r = Ld(t, e.x, e.width),
    i = Ld(n, e.y, e.height);
  return `${r} ${i}`;
}
function Ic(
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
  if ((Ac(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: v, dimensions: y } = e;
  d.transform && (y && (v.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = QS(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && KS(d, s, a, l, !1);
}
const lg = () => ({ ...Nc(), attrs: {} }),
  Vc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function GS(e, t, n, r) {
  const i = R.useMemo(() => {
    const o = lg();
    return (
      Ic(o, t, Vc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    ag(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function YS(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (zc(n) ? GS : BS)(r, o, s, n),
      u = gS(r, typeof n == "string", e),
      c = n !== R.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = R.useMemo(() => (Oe(f) ? f.get() : f), [f]);
    return R.createElement(n, { ...c, children: d });
  };
}
function jd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Fc(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = jd(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = jd(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
const ru = (e) => Array.isArray(e),
  XS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  qS = (e) => (ru(e) ? e[e.length - 1] || 0 : e);
function No(e) {
  const t = Oe(e) ? e.get() : e;
  return XS(t) ? t.toValue() : t;
}
function ZS(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  o
) {
  const s = { latestValues: JS(r, i, o, e), renderState: t() };
  return (
    n &&
      ((s.onMount = (a) => n({ props: r, current: a, ...s })),
      (s.onUpdate = (a) => n(a))),
    s
  );
}
const ug = (e) => (t, n) => {
  const r = R.useContext(Qs),
    i = R.useContext(Ec),
    o = () => ZS(e, t, r, i);
  return n ? o() : lS(o);
};
function JS(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = No(o[d]);
  let { initial: s, animate: a } = e;
  const l = Ys(e),
    u = eg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !Gs(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let v = 0; v < d.length; v++) {
      const y = Fc(e, d[v]);
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
function $c(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Oe(i[s]) ||
      (t.style && Oe(t.style[s])) ||
      og(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
const ex = {
  useVisualState: ug({
    scrapeMotionValuesFromProps: $c,
    createRenderState: Nc,
  }),
};
function cg(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
function fg(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const dg = new Set([
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
function pg(e, t, n, r) {
  fg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(dg.has(i) ? i : Mc(i), t.attrs[i]);
}
function hg(e, t, n) {
  const r = $c(e, t, n);
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
const Dd = ["x", "y", "width", "height", "cx", "cy", "r"],
  tx = {
    useVisualState: ug({
      scrapeMotionValuesFromProps: hg,
      createRenderState: lg,
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
          for (let a = 0; a < Dd.length; a++) {
            const l = Dd[a];
            e[l] !== t[l] && (s = !0);
          }
        s &&
          Y.read(() => {
            cg(n, r),
              Y.render(() => {
                Ic(r, i, Vc(n.tagName), e.transformTemplate), pg(n, r);
              });
          });
      },
    }),
  };
function nx(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(zc(r) ? tx : ex),
      preloadedFeatures: e,
      useRender: YS(i),
      createVisualElement: t,
      Component: r,
    };
    return _S(s);
  };
}
function Oi(e, t, n) {
  const r = e.getProps();
  return Fc(r, t, n !== void 0 ? n : r.custom, e);
}
const rx = Cc(() => window.ScrollTimeline !== void 0);
class ix {
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
      if (rx() && i.attachTimeline) return i.attachTimeline(t);
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
class ox extends ix {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Bc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const iu = 2e4;
function mg(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < iu; ) (t += n), (r = e.next(t));
  return t >= iu ? 1 / 0 : t;
}
function Hc(e) {
  return typeof e == "function";
}
function Rd(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Wc = (e) => Array.isArray(e) && typeof e[0] == "number",
  sx = { linearEasing: void 0 };
function ax(e, t) {
  const n = Cc(e);
  return () => {
    var r;
    return (r = sx[t]) !== null && r !== void 0 ? r : n();
  };
}
const ps = ax(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  vg = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++) r += e(yr(0, i - 1, o)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function gg(e) {
  return !!(
    (typeof e == "function" && ps()) ||
    !e ||
    (typeof e == "string" && (e in ou || ps())) ||
    Wc(e) ||
    (Array.isArray(e) && e.every(gg))
  );
}
const Ur = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  ou = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ur([0, 0.65, 0.55, 1]),
    circOut: Ur([0.55, 0, 1, 0.45]),
    backIn: Ur([0.31, 0.01, 0.66, -0.59]),
    backOut: Ur([0.33, 1.53, 0.69, 0.99]),
  };
function yg(e, t) {
  if (e)
    return typeof e == "function" && ps()
      ? vg(e, t)
      : Wc(e)
      ? Ur(e)
      : Array.isArray(e)
      ? e.map((n) => yg(n, t) || ou.easeOut)
      : ou[e];
}
const st = { x: !1, y: !1 };
function wg() {
  return st.x || st.y;
}
function lx(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const o = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return o ? Array.from(o) : [];
  }
  return Array.from(e);
}
function Sg(e, t) {
  const n = lx(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Ad(e) {
  return !(e.pointerType === "touch" || wg());
}
function ux(e, t, n = {}) {
  const [r, i, o] = Sg(e, n),
    s = (a) => {
      if (!Ad(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != "function" || !l) return;
      const c = (f) => {
        Ad(f) && (u(f), l.removeEventListener("pointerleave", c));
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
const xg = (e, t) => (t ? (e === t ? !0 : xg(e, t.parentElement)) : !1),
  Uc = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  cx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function fx(e) {
  return cx.has(e.tagName) || e.tabIndex !== -1;
}
const Kr = new WeakSet();
function Nd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Na(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const dx = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Nd(() => {
    if (Kr.has(n)) return;
    Na(n, "down");
    const i = Nd(() => {
        Na(n, "up");
      }),
      o = () => Na(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function zd(e) {
  return Uc(e) && !wg();
}
function px(e, t, n = {}) {
  const [r, i, o] = Sg(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!zd(a) || Kr.has(l)) return;
      Kr.add(l);
      const u = t(l, a),
        c = (v, y) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!zd(v) || !Kr.has(l)) &&
              (Kr.delete(l), typeof u == "function" && u(v, { success: y }));
        },
        f = (v) => {
          c(v, n.useGlobalTarget || xg(l, v.target));
        },
        d = (v) => {
          c(v, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i);
    };
  return (
    r.forEach((a) => {
      !fx(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        a.addEventListener("focus", (u) => dx(u, i), i);
    }),
    o
  );
}
function hx(e) {
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
const Pg = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...br,
]);
let zo;
function mx() {
  zo = void 0;
}
const Pt = {
  now: () => (
    zo === void 0 &&
      Pt.set(
        xe.isProcessing || fS.useManualTiming ? xe.timestamp : performance.now()
      ),
    zo
  ),
  set: (e) => {
    (zo = e), queueMicrotask(mx);
  },
};
function Kc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Qc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Gc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Kc(this.subscriptions, t), () => Qc(this.subscriptions, t);
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
function Tg(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Id = 30,
  vx = (e) => !isNaN(parseFloat(e));
class gx {
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
        (this.canTrackVelocity = vx(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Gc());
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
      t - this.updatedAt > Id
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Id);
    return Tg(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
  return new gx(e, t);
}
function yx(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, bi(n));
}
function wx(e, t) {
  const n = Oi(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = qS(o[s]);
    yx(e, s, a);
  }
}
function Sx(e) {
  return !!(Oe(e) && e.add);
}
function su(e, t) {
  const n = e.getValue("willChange");
  if (Sx(n)) return n.add(t);
}
function kg(e) {
  return e.props[tg];
}
const Eg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  xx = 1e-7,
  Px = 12;
function Tx(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Eg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > xx && ++a < Px);
  return s;
}
function Vi(e, t, n, r) {
  if (e === t && n === r) return Ue;
  const i = (o) => Tx(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Eg(i(o), t, r));
}
const _g = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Cg = (e) => (t) => 1 - e(1 - t),
  Og = Vi(0.33, 1.53, 0.69, 0.99),
  Yc = Cg(Og),
  bg = _g(Yc),
  Mg = (e) =>
    (e *= 2) < 1 ? 0.5 * Yc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Xc = (e) => 1 - Math.sin(Math.acos(e)),
  Lg = Cg(Xc),
  jg = _g(Xc),
  Dg = (e) => /^0[^.\s]+$/u.test(e);
function kx(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Dg(e)
    : !0;
}
const ri = (e) => Math.round(e * 1e5) / 1e5,
  qc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ex(e) {
  return e == null;
}
const _x =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Zc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && _x.test(n) && n.startsWith(e)) ||
      (t && !Ex(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Rg = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(qc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Cx = (e) => zt(0, 255, e),
  za = { ...Mr, transform: (e) => Math.round(Cx(e)) },
  _n = {
    test: Zc("rgb", "red"),
    parse: Rg("red", "green", "blue"),
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
function Ox(e) {
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
const au = { test: Zc("#"), parse: Ox, transform: _n.transform },
  Jn = {
    test: Zc("hsl", "hue"),
    parse: Rg("hue", "saturation", "lightness"),
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
    test: (e) => _n.test(e) || au.test(e) || Jn.test(e),
    parse: (e) =>
      _n.test(e) ? _n.parse(e) : Jn.test(e) ? Jn.parse(e) : au.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? _n.transform(e)
        : Jn.transform(e),
  },
  bx =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Mx(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(qc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(bx)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ag = "number",
  Ng = "color",
  Lx = "var",
  jx = "var(",
  Vd = "${}",
  Dx =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Mi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      Dx,
      (l) => (
        _e.test(l)
          ? (r.color.push(o), i.push(Ng), n.push(_e.parse(l)))
          : l.startsWith(jx)
          ? (r.var.push(o), i.push(Lx), n.push(l))
          : (r.number.push(o), i.push(Ag), n.push(parseFloat(l))),
        ++o,
        Vd
      )
    )
    .split(Vd);
  return { values: n, split: a, indexes: r, types: i };
}
function zg(e) {
  return Mi(e).values;
}
function Ig(e) {
  const { split: t, types: n } = Mi(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Ag
          ? (o += ri(i[s]))
          : a === Ng
          ? (o += _e.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const Rx = (e) => (typeof e == "number" ? 0 : e);
function Ax(e) {
  const t = zg(e);
  return Ig(e)(t.map(Rx));
}
const fn = {
    test: Mx,
    parse: zg,
    createTransformer: Ig,
    getAnimatableNone: Ax,
  },
  Nx = new Set(["brightness", "contrast", "saturate", "opacity"]);
function zx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(qc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Nx.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Ix = /\b([a-z-]*)\(.*?\)/gu,
  lu = {
    ...fn,
    getAnimatableNone: (e) => {
      const t = e.match(Ix);
      return t ? t.map(zx).join(" ") : e;
    },
  },
  Vx = {
    ...Rc,
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
    filter: lu,
    WebkitFilter: lu,
  },
  Jc = (e) => Vx[e];
function Vg(e, t) {
  let n = Jc(e);
  return (
    n !== lu && (n = fn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Fx = new Set(["auto", "none", "0"]);
function $x(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !Fx.has(o) && Mi(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = Vg(n, i);
}
const Fd = (e) => e === Mr || e === V,
  $d = (e, t) => parseFloat(e.split(", ")[t]),
  Bd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return $d(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? $d(o[1], e) : 0;
      }
    },
  Bx = new Set(["x", "y", "z"]),
  Hx = br.filter((e) => !Bx.has(e));
function Wx(e) {
  const t = [];
  return (
    Hx.forEach((n) => {
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
  x: Bd(4, 13),
  y: Bd(5, 14),
};
Sr.translateX = Sr.x;
Sr.translateY = Sr.y;
const bn = new Set();
let uu = !1,
  cu = !1;
function Fg() {
  if (cu) {
    const e = Array.from(bn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Wx(r);
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
  (cu = !1), (uu = !1), bn.forEach((e) => e.complete()), bn.clear();
}
function $g() {
  bn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (cu = !0);
  });
}
function Ux() {
  $g(), Fg();
}
class ef {
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
        ? (bn.add(this), uu || ((uu = !0), Y.read($g), Y.resolveKeyframes(Fg)))
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
const Bg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Kx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Qx(e) {
  const t = Kx.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Hg(e, t, n = 1) {
  const [r, i] = Qx(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Bg(s) ? parseFloat(s) : s;
  }
  return Dc(i) ? Hg(i, t, n + 1) : i;
}
const Wg = (e) => (t) => t.test(e),
  Gx = { test: (e) => e === "auto", parse: (e) => e },
  Ug = [Mr, V, xt, Bt, RS, DS, Gx],
  Hd = (e) => Ug.find(Wg(e));
class Kg extends ef {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Dc(u))) {
        const c = Hg(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Pg.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Hd(i),
      a = Hd(o);
    if (s !== a)
      if (Fd(s) && Fd(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) kx(t[i]) && r.push(i);
    r.length && $x(t, r, n);
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
const Wd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (fn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Yx(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Xx(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Wd(i, t),
    a = Wd(o, t);
  return !s || !a ? !1 : Yx(e) || ((n === "spring" || Hc(n)) && r);
}
const qx = (e) => e !== null;
function Xs(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(qx),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const Zx = 40;
class Qg {
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
      ? this.resolvedAt - this.createdAt > Zx
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ux(), this._resolved;
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
    if (!u && !Xx(t, r, i, o))
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
function Jx({ hue: e, saturation: t, lightness: n, alpha: r }) {
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
  eP = [au, _n, Jn],
  tP = (e) => eP.find((t) => t.test(e));
function Ud(e) {
  const t = tP(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Jn && (n = Jx(n)), n;
}
const Kd = (e, t) => {
    const n = Ud(e),
      r = Ud(t);
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
  nP = (e, t) => (n) => t(e(n)),
  Fi = (...e) => e.reduce(nP),
  fu = new Set(["none", "hidden"]);
function rP(e, t) {
  return fu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function iP(e, t) {
  return (n) => oe(e, t, n);
}
function tf(e) {
  return typeof e == "number"
    ? iP
    : typeof e == "string"
    ? Dc(e)
      ? hs
      : _e.test(e)
      ? Kd
      : aP
    : Array.isArray(e)
    ? Gg
    : typeof e == "object"
    ? _e.test(e)
      ? Kd
      : oP
    : hs;
}
function Gg(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => tf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function oP(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = tf(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function sP(e, t) {
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
const aP = (e, t) => {
  const n = fn.createTransformer(t),
    r = Mi(e),
    i = Mi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (fu.has(e) && !i.values.length) || (fu.has(t) && !r.values.length)
      ? rP(e, t)
      : Fi(Gg(sP(r, i), i.values), n)
    : hs(e, t);
};
function Yg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? oe(e, t, n)
    : tf(e)(e, t);
}
const lP = 5;
function Xg(e, t, n) {
  const r = Math.max(t - lP, 0);
  return Tg(n - e(r), t - r);
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
  Fa = 0.001;
function uP({
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
            v = du(u, s),
            y = Math.exp(-f);
          return Fa - (d / v) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            v = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            g = du(Math.pow(u, 2), s);
          return ((-i(u) + Fa > 0 ? -1 : 1) * ((d - v) * y)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Fa + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = fP(i, o, a);
  if (((e = Lt(e)), isNaN(l)))
    return { stiffness: le.stiffness, damping: le.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const cP = 12;
function fP(e, t, n) {
  let r = n;
  for (let i = 1; i < cP; i++) r = r - e(r) / t(r);
  return r;
}
function du(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const dP = ["duration", "bounce"],
  pP = ["stiffness", "damping", "mass"];
function Qd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function hP(e) {
  let t = {
    velocity: le.velocity,
    stiffness: le.stiffness,
    damping: le.damping,
    mass: le.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Qd(e, pP) && Qd(e, dP))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * zt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: le.mass, stiffness: i, damping: o };
    } else {
      const n = uP(e);
      (t = { ...t, ...n, mass: le.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function qg(e = le.visualDuration, t = le.bounce) {
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
    } = hP({ ...n, velocity: -jt(n.velocity || 0) }),
    y = d || 0,
    g = u / (2 * Math.sqrt(l * c)),
    x = s - o,
    h = jt(Math.sqrt(l / c)),
    p = Math.abs(x) < 5;
  r || (r = p ? le.restSpeed.granular : le.restSpeed.default),
    i || (i = p ? le.restDelta.granular : le.restDelta.default);
  let m;
  if (g < 1) {
    const S = du(h, g);
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
        g < 1 && (E = S === 0 ? Lt(y) : Xg(m, S, P));
        const _ = Math.abs(E) <= r,
          C = Math.abs(s - P) <= i;
        a.done = _ && C;
      }
      return (a.value = a.done ? s : P), a;
    },
    toString: () => {
      const S = Math.min(mg(w), iu),
        P = vg((E) => w.next(S * E).value, S, 30);
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
      (P = qg({
        keyframes: [d.value, y(d.value)],
        velocity: Xg(m, _, d.value),
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
const mP = Vi(0.42, 0, 1, 1),
  vP = Vi(0, 0, 0.58, 1),
  Zg = Vi(0.42, 0, 0.58, 1),
  gP = (e) => Array.isArray(e) && typeof e[0] != "number",
  Yd = {
    linear: Ue,
    easeIn: mP,
    easeInOut: Zg,
    easeOut: vP,
    circIn: Xc,
    circInOut: jg,
    circOut: Lg,
    backIn: Yc,
    backInOut: bg,
    backOut: Og,
    anticipate: Mg,
  },
  Xd = (e) => {
    if (Wc(e)) {
      nu(e.length === 4);
      const [t, n, r, i] = e;
      return Vi(t, n, r, i);
    } else if (typeof e == "string") return nu(Yd[e] !== void 0), Yd[e];
    return e;
  };
function yP(e, t, n) {
  const r = [],
    i = n || Yg,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ue : t;
      a = Fi(l, a);
    }
    r.push(a);
  }
  return r;
}
function wP(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((nu(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = yP(t, r, i),
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
function SP(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = yr(0, t, r);
    e.push(oe(n, 1, i));
  }
}
function xP(e) {
  const t = [0];
  return SP(t, e.length - 1), t;
}
function PP(e, t) {
  return e.map((n) => n * t);
}
function TP(e, t) {
  return e.map(() => t || Zg).splice(0, e.length - 1);
}
function ms({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = gP(r) ? r.map(Xd) : Xd(r),
    o = { done: !1, value: t[0] },
    s = PP(n && n.length === t.length ? n : xP(t), e),
    a = wP(s, t, { ease: Array.isArray(i) ? i : TP(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const kP = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Y.update(t, !0),
      stop: () => cn(t),
      now: () => (xe.isProcessing ? xe.timestamp : Pt.now()),
    };
  },
  EP = { decay: Gd, inertia: Gd, tween: ms, keyframes: ms, spring: qg },
  _P = (e) => e / 100;
class nf extends Qg {
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
      s = (i == null ? void 0 : i.KeyframeResolver) || ef,
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
      a = Hc(n) ? n : EP[n] || ms;
    let l, u;
    a !== ms &&
      typeof t[0] != "number" &&
      ((l = Fi(_P, Yg(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = mg(c));
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
    const { driver: t = kP, onPlay: n, startTime: r } = this.options;
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
const CP = new Set(["opacity", "clipPath", "filter", "transform"]);
function OP(
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
  const c = yg(a, i);
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
const bP = Cc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  vs = 10,
  MP = 2e4;
function LP(e) {
  return Hc(e.type) || e.type === "spring" || !gg(e.ease);
}
function jP(e, t) {
  const n = new nf({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < MP; ) (r = n.sample(o)), i.push(r.value), (o += vs);
  return { times: void 0, keyframes: i, duration: o - vs, ease: "linear" };
}
const Jg = { anticipate: Mg, backInOut: bg, circInOut: jg };
function DP(e) {
  return e in Jg;
}
class qd extends Qg {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new Kg(
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
      (typeof o == "string" && ps() && DP(o) && (o = Jg[o]), LP(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: d,
          motionValue: v,
          element: y,
          ...g
        } = this.options,
        x = jP(t, g);
      (t = x.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = x.duration),
        (i = x.times),
        (o = x.ease),
        (s = "keyframes");
    }
    const c = OP(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Rd(c, this.pendingTimeline), (this.pendingTimeline = void 0))
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
      if (!n) return Ue;
      const { animation: r } = n;
      Rd(r, t);
    }
    return Ue;
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
        y = new nf({
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
      bP() &&
      r &&
      CP.has(r) &&
      !l &&
      !u &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const RP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  AP = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  NP = { type: "keyframes", duration: 0.8 },
  zP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  IP = (e, { keyframes: t }) =>
    t.length > 2
      ? NP
      : In.has(e)
      ? e.startsWith("scale")
        ? AP(t[1])
        : RP
      : zP;
function VP({
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
const rf =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = Bc(r, e) || {},
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
    VP(a) || (c = { ...c, ...IP(e, c) }),
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
          new ox([])
        );
    }
    return !o && qd.supports(c) ? new qd(c) : new nf(c);
  };
function FP({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function ey(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
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
    if (v === void 0 || (c && FP(c, f))) continue;
    const y = { delay: n, ...Bc(s || {}, f) };
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const h = kg(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, f, Y);
        p !== null && ((y.startTime = p), (g = !0));
      }
    }
    su(e, f),
      d.start(
        rf(f, d, v, e.shouldReduceMotion && Pg.has(f) ? { type: !1 } : y, e, g)
      );
    const x = d.animation;
    x && u.push(x);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        Y.update(() => {
          a && wx(e, a);
        });
      }),
    u
  );
}
function pu(e, t, n = {}) {
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
  const s = i ? () => Promise.all(ey(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return $P(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function $P(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(BP)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            pu(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function BP(e, t) {
  return e.sortNodePosition(t);
}
function HP(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => pu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = pu(e, t, n);
  else {
    const i = typeof t == "function" ? Oi(e, t, n.custom) : t;
    r = Promise.all(ey(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function ty(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const WP = bc.length;
function ny(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? ny(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < WP; n++) {
    const r = bc[n],
      i = e.props[r];
    (Ei(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const UP = [...Oc].reverse(),
  KP = Oc.length;
function QP(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => HP(e, n, r)));
}
function GP(e) {
  let t = QP(e),
    n = Zd(),
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
      c = ny(e.parent) || {},
      f = [],
      d = new Set();
    let v = {},
      y = 1 / 0;
    for (let x = 0; x < KP; x++) {
      const h = UP[x],
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
          Gs(m) ||
          typeof m == "boolean")
      )
        continue;
      const E = YP(p.prevProp, m);
      let _ = E || (h === l && p.isActive && !P && w) || (x > y && w),
        C = !1;
      const k = Array.isArray(m) ? m : [m];
      let j = k.reduce(i(h), {});
      S === !1 && (j = {});
      const { prevResolvedValues: D = {} } = p,
        N = { ...D, ...j },
        z = (U) => {
          (_ = !0),
            d.has(U) && ((C = !0), d.delete(U)),
            (p.needsAnimating[U] = !0);
          const b = e.getValue(U);
          b && (b.liveStyle = !1);
        };
      for (const U in N) {
        const b = j[U],
          A = D[U];
        if (v.hasOwnProperty(U)) continue;
        let F = !1;
        ru(b) && ru(A) ? (F = !ty(b, A)) : (F = b !== A),
          F
            ? b != null
              ? z(U)
              : d.add(U)
            : b !== void 0 && d.has(U)
            ? z(U)
            : (p.protectedKeys[U] = !0);
      }
      (p.prevProp = m),
        (p.prevResolvedValues = j),
        p.isActive && (v = { ...v, ...j }),
        r && e.blockInitialAnimation && (_ = !1),
        _ &&
          (!(P && E) || C) &&
          f.push(...k.map((U) => ({ animation: U, options: { type: h } })));
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
      (n = Zd()), (r = !0);
    },
  };
}
function YP(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ty(t, e) : !1;
}
function yn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Zd() {
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
class XP extends vn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = GP(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Gs(t) && (this.unmountControls = t.subscribe(this.node));
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
let qP = 0;
class ZP extends vn {
  constructor() {
    super(...arguments), (this.id = qP++);
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
const JP = { animation: { Feature: XP }, exit: { Feature: ZP } };
function Li(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function $i(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const eT = (e) => (t) => Uc(t) && e(t, $i(t));
function ii(e, t, n, r) {
  return Li(e, t, eT(n), r);
}
const Jd = (e, t) => Math.abs(e - t);
function tT(e, t) {
  const n = Jd(e.x, t.x),
    r = Jd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ry {
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
        const f = Ba(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          v = tT(f.offset, { x: 0, y: 0 }) >= 3;
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
          (this.lastMoveEventInfo = $a(d, this.transformPagePoint)),
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
        const x = Ba(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : $a(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(f, x), y && y(f, x);
      }),
      !Uc(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = $i(t),
      a = $a(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = xe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Ba(a, this.history)),
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
function $a(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ep(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ba({ point: e }, t) {
  return {
    point: e,
    delta: ep(e, iy(t)),
    offset: ep(e, nT(t)),
    velocity: rT(t, 0.1),
  };
}
function nT(e) {
  return e[0];
}
function iy(e) {
  return e[e.length - 1];
}
function rT(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = iy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Lt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = jt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
const oy = 1e-4,
  iT = 1 - oy,
  oT = 1 + oy,
  sy = 0.01,
  sT = 0 - sy,
  aT = 0 + sy;
function je(e) {
  return e.max - e.min;
}
function lT(e, t, n) {
  return Math.abs(e - t) <= n;
}
function tp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = oe(t.min, t.max, e.origin)),
    (e.scale = je(n) / je(t)),
    (e.translate = oe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= iT && e.scale <= oT) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= sT && e.translate <= aT) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function oi(e, t, n, r) {
  tp(e.x, t.x, n.x, r ? r.originX : void 0),
    tp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function np(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + je(t));
}
function uT(e, t, n) {
  np(e.x, t.x, n.x), np(e.y, t.y, n.y);
}
function rp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + je(t));
}
function si(e, t, n) {
  rp(e.x, t.x, n.x), rp(e.y, t.y, n.y);
}
function cT(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? oe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? oe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ip(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function fT(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: ip(e.x, n, i), y: ip(e.y, t, r) };
}
function op(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function dT(e, t) {
  return { x: op(e.x, t.x), y: op(e.y, t.y) };
}
function pT(e, t) {
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
function hT(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const hu = 0.35;
function mT(e = hu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = hu),
    { x: sp(e, "left", "right"), y: sp(e, "top", "bottom") }
  );
}
function sp(e, t, n) {
  return { min: ap(e, t), max: ap(e, n) };
}
function ap(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const lp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  er = () => ({ x: lp(), y: lp() }),
  up = () => ({ min: 0, max: 0 }),
  pe = () => ({ x: up(), y: up() });
function Ze(e) {
  return [e("x"), e("y")];
}
function ay({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function vT({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function gT(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ha(e) {
  return e === void 0 || e === 1;
}
function mu({ scale: e, scaleX: t, scaleY: n }) {
  return !Ha(e) || !Ha(t) || !Ha(n);
}
function Pn(e) {
  return (
    mu(e) ||
    ly(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function ly(e) {
  return cp(e.x) || cp(e.y);
}
function cp(e) {
  return e && e !== "0%";
}
function gs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function fp(e, t, n, r, i) {
  return i !== void 0 && (e = gs(e, i, r)), gs(e, n, r) + t;
}
function vu(e, t = 0, n = 1, r, i) {
  (e.min = fp(e.min, t, n, r, i)), (e.max = fp(e.max, t, n, r, i));
}
function uy(e, { x: t, y: n }) {
  vu(e.x, t.translate, t.scale, t.originPoint),
    vu(e.y, n.translate, n.scale, n.originPoint);
}
const dp = 0.999999999999,
  pp = 1.0000000000001;
function yT(e, t, n, r = !1) {
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
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), uy(e, s)),
      r && Pn(o.latestValues) && nr(e, o.latestValues));
  }
  t.x < pp && t.x > dp && (t.x = 1), t.y < pp && t.y > dp && (t.y = 1);
}
function tr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function hp(e, t, n, r, i = 0.5) {
  const o = oe(e.min, e.max, i);
  vu(e, t, n, o, r);
}
function nr(e, t) {
  hp(e.x, t.x, t.scaleX, t.scale, t.originX),
    hp(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function cy(e, t) {
  return ay(gT(e.getBoundingClientRect(), t));
}
function wT(e, t, n) {
  const r = cy(e, n),
    { scroll: i } = t;
  return i && (tr(r.x, i.offset.x), tr(r.y, i.offset.y)), r;
}
const fy = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ST = new WeakMap();
class xT {
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
          (this.openDragLock = hx(d)),
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
          su(this.visualElement, "transform");
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
          (this.currentDirection = PT(x)),
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
    this.panSession = new ry(
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
        contextWindow: fy(this.visualElement),
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
      (s = cT(s, this.constraints[t], this.elastic[t])),
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
      ? (this.constraints = fT(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = mT(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ze((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = hT(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Zn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = wT(r, i.root, this.visualElement.getTransformPagePoint());
    let s = dT(i.layout.layoutBox, o);
    if (n) {
      const a = n(vT(s));
      (this.hasMutatedConstraints = !!a), a && (s = ay(a));
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
      su(this.visualElement, t), r.start(rf(t, r, 0, n, this.visualElement, !1))
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
        i[s] = pT({ min: l, max: l }, this.constraints[s]);
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
    ST.set(this.visualElement, this);
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
        dragElastic: s = hu,
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
function PT(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class TT extends vn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ue),
      (this.removeListeners = Ue),
      (this.controls = new xT(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ue);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const mp = (e) => (t, n) => {
  e && Y.postRender(() => e(t, n));
};
class kT extends vn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ue);
  }
  onPointerDown(t) {
    this.session = new ry(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: fy(this.node),
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
      onSessionStart: mp(t),
      onStart: mp(n),
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
function vp(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Fr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const n = vp(e, t.target.x),
        r = vp(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  ET = {
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
class _T extends R.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    jS(CT),
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
      Lc.postRender(() => {
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
function dy(e) {
  const [t, n] = uS(),
    r = R.useContext(Yv);
  return T.jsx(_T, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: R.useContext(ng),
    isPresent: t,
    safeToRemove: n,
  });
}
const CT = {
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
  boxShadow: ET,
};
function OT(e, t, n) {
  const r = Oe(e) ? e : bi(e);
  return r.start(rf("", r, t, n)), r.animation;
}
function bT(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const MT = (e, t) => e.depth - t.depth;
class LT {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Kc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Qc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(MT),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function jT(e, t) {
  const n = Pt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (cn(r), e(o - t));
    };
  return Y.read(r, !0), () => cn(r);
}
const py = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  DT = py.length,
  gp = (e) => (typeof e == "string" ? parseFloat(e) : e),
  yp = (e) => typeof e == "number" || V.test(e);
function RT(e, t, n, r, i, o) {
  i
    ? ((e.opacity = oe(0, n.opacity !== void 0 ? n.opacity : 1, AT(r))),
      (e.opacityExit = oe(t.opacity !== void 0 ? t.opacity : 1, 0, NT(r))))
    : o &&
      (e.opacity = oe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < DT; s++) {
    const a = `border${py[s]}Radius`;
    let l = wp(t, a),
      u = wp(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || yp(l) === yp(u)
        ? ((e[a] = Math.max(oe(gp(l), gp(u), r), 0)),
          (xt.test(u) || xt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = oe(t.rotate || 0, n.rotate || 0, r));
}
function wp(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const AT = hy(0, 0.5, Lg),
  NT = hy(0.5, 0.95, Ue);
function hy(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yr(e, t, r)));
}
function Sp(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function qe(e, t) {
  Sp(e.x, t.x), Sp(e.y, t.y);
}
function xp(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Pp(e, t, n, r, i) {
  return (
    (e -= t), (e = gs(e, 1 / n, r)), i !== void 0 && (e = gs(e, 1 / i, r)), e
  );
}
function zT(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (xt.test(t) &&
      ((t = parseFloat(t)), (t = oe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = oe(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Pp(e.min, t, n, a, i)),
    (e.max = Pp(e.max, t, n, a, i));
}
function Tp(e, t, [n, r, i], o, s) {
  zT(e, t[n], t[r], t[i], t.scale, o, s);
}
const IT = ["x", "scaleX", "originX"],
  VT = ["y", "scaleY", "originY"];
function kp(e, t, n, r) {
  Tp(e.x, t, IT, n ? n.x : void 0, r ? r.x : void 0),
    Tp(e.y, t, VT, n ? n.y : void 0, r ? r.y : void 0);
}
function Ep(e) {
  return e.translate === 0 && e.scale === 1;
}
function my(e) {
  return Ep(e.x) && Ep(e.y);
}
function _p(e, t) {
  return e.min === t.min && e.max === t.max;
}
function FT(e, t) {
  return _p(e.x, t.x) && _p(e.y, t.y);
}
function Cp(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function vy(e, t) {
  return Cp(e.x, t.x) && Cp(e.y, t.y);
}
function Op(e) {
  return je(e.x) / je(e.y);
}
function bp(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class $T {
  constructor() {
    this.members = [];
  }
  add(t) {
    Kc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Qc(this.members, t),
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
function BT(e, t, n) {
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
const Wa = ["", "X", "Y", "Z"],
  HT = { visibility: "hidden" },
  Mp = 1e3;
let WT = 0;
function Ua(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function gy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = kg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", Y, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && gy(r);
}
function yy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = WT++),
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
            this.nodes.forEach(QT),
            this.nodes.forEach(ZT),
            this.nodes.forEach(JT),
            this.nodes.forEach(GT);
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
      this.root === this && (this.nodes = new LT());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Gc()),
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
      (this.isSVG = bT(s)), (this.instance = s);
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
            (f = jT(d, 250)),
            Io.hasAnimatedSinceResize &&
              ((Io.hasAnimatedSinceResize = !1), this.nodes.forEach(jp));
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
                  this.options.transition || c.getDefaultTransition() || ik,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: h } =
                  c.getProps(),
                p = !this.targetLayout || !vy(this.targetLayout, y),
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
                const w = { ...Bc(g, "layout"), onPlay: x, onComplete: h };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || jp(this),
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
        this.nodes && this.nodes.forEach(ek),
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
          gy(this),
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Lp);
        return;
      }
      this.isUpdating || this.nodes.forEach(XT),
        (this.isUpdating = !1),
        this.nodes.forEach(qT),
        this.nodes.forEach(UT),
        this.nodes.forEach(KT),
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
        ((this.updateScheduled = !0), Lc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(YT), this.sharedNodes.forEach(tk);
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
        a = this.projectionDelta && !my(this.projectionDelta),
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
        ok(l),
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
          this.path.some(sk)
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
        mu(u.latestValues) && u.updateSnapshot();
        const c = pe(),
          f = u.measurePageBox();
        qe(c, f),
          kp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Pn(this.latestValues) && kp(a, this.latestValues), a;
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
              uT(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : qe(this.target, this.layout.layoutBox),
              uy(this.target, this.targetDelta))
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
          mu(this.parent.latestValues) ||
          ly(this.parent.latestValues)
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
      yT(this.layoutCorrected, this.treeScale, this.path, l),
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
        : (xp(this.prevProjectionDelta.x, this.projectionDelta.x),
          xp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        oi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== v ||
          !bp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !bp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
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
        p = !!(g && !h && this.options.crossfade === !0 && !this.path.some(rk));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Dp(f.x, s.x, S),
          Dp(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (si(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            nk(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && FT(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = pe()),
            qe(m, this.relativeTarget)),
          g &&
            ((this.animationValues = c), RT(c, u, this.latestValues, S, p, h)),
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
            (this.currentAnimation = OT(0, Mp, {
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
        (this.mixTargetDelta && this.mixTargetDelta(Mp),
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
          wy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
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
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new $T()),
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
      for (let c = 0; c < Wa.length; c++)
        Ua(`rotate${Wa[c]}`, s, u, this.animationValues),
          Ua(`skew${Wa[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return HT;
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
        (u.transform = BT(
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
        this.root.nodes.forEach(Lp),
        this.root.sharedNodes.clear();
    }
  };
}
function UT(e) {
  e.updateLayout();
}
function KT(e) {
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
      : wy(o, n.layoutBox, r) &&
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
    const u = !my(a);
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
            vy(y, g) || (c = !0),
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
function QT(e) {
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
function GT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function YT(e) {
  e.clearSnapshot();
}
function Lp(e) {
  e.clearMeasurements();
}
function XT(e) {
  e.isLayoutDirty = !1;
}
function qT(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function jp(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function ZT(e) {
  e.resolveTargetDelta();
}
function JT(e) {
  e.calcProjection();
}
function ek(e) {
  e.resetSkewAndRotation();
}
function tk(e) {
  e.removeLeadSnapshot();
}
function Dp(e, t, n) {
  (e.translate = oe(t.translate, 0, n)),
    (e.scale = oe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Rp(e, t, n, r) {
  (e.min = oe(t.min, n.min, r)), (e.max = oe(t.max, n.max, r));
}
function nk(e, t, n, r) {
  Rp(e.x, t.x, n.x, r), Rp(e.y, t.y, n.y, r);
}
function rk(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ik = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Ap = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Np = Ap("applewebkit/") && !Ap("chrome/") ? Math.round : Ue;
function zp(e) {
  (e.min = Np(e.min)), (e.max = Np(e.max));
}
function ok(e) {
  zp(e.x), zp(e.y);
}
function wy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !lT(Op(t), Op(n), 0.2))
  );
}
function sk(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const ak = yy({
    attachResizeListener: (e, t) => Li(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ka = { current: void 0 },
  Sy = yy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ka.current) {
        const e = new ak({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ka.current = e);
      }
      return Ka.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  lk = {
    pan: { Feature: kT },
    drag: { Feature: TT, ProjectionNode: Sy, MeasureLayout: dy },
  };
function Ip(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && Y.postRender(() => o(t, $i(t)));
}
class uk extends vn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = ux(
        t,
        (n, r) => (Ip(this.node, r, "Start"), (i) => Ip(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class ck extends vn {
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
function Vp(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && Y.postRender(() => o(t, $i(t)));
}
class fk extends vn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = px(
        t,
        (n, r) => (
          Vp(this.node, r, "Start"),
          (i, { success: o }) => Vp(this.node, i, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const gu = new WeakMap(),
  Qa = new WeakMap(),
  dk = (e) => {
    const t = gu.get(e.target);
    t && t(e);
  },
  pk = (e) => {
    e.forEach(dk);
  };
function hk({ root: e, ...t }) {
  const n = e || document;
  Qa.has(n) || Qa.set(n, {});
  const r = Qa.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(pk, { root: e, ...t })), r[i];
}
function mk(e, t, n) {
  const r = hk(t);
  return (
    gu.set(e, n),
    r.observe(e),
    () => {
      gu.delete(e), r.unobserve(e);
    }
  );
}
const vk = { some: 0, all: 1 };
class gk extends vn {
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
        threshold: typeof i == "number" ? i : vk[i],
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
    return mk(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(yk(t, n)) && this.startObserver();
  }
  unmount() {}
}
function yk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const wk = {
    inView: { Feature: gk },
    tap: { Feature: fk },
    focus: { Feature: ck },
    hover: { Feature: uk },
  },
  Sk = { layout: { ProjectionNode: Sy, MeasureLayout: dy } },
  yu = { current: null },
  xy = { current: !1 };
function xk() {
  if (((xy.current = !0), !!_c))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (yu.current = e.matches);
      e.addListener(t), t();
    } else yu.current = !1;
}
const Pk = [...Ug, _e, fn],
  Tk = (e) => Pk.find(Wg(e)),
  kk = new WeakMap();
function Ek(e, t, n) {
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
const Fp = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class _k {
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
      (this.KeyframeResolver = ef),
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
      (this.isVariantNode = eg(n)),
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
      kk.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      xy.current || xk(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : yu.current),
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
    for (let r = 0; r < Fp.length; r++) {
      const i = Fp[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = Ek(
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
        (typeof i == "string" && (Bg(i) || Dg(i))
          ? (i = parseFloat(i))
          : !Tk(i) && fn.test(n) && (i = Vg(t, n)),
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
      const s = Fc(
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
    return this.events[t] || (this.events[t] = new Gc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Py extends _k {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Kg);
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
function Ck(e) {
  return window.getComputedStyle(e);
}
class Ok extends Py {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = fg);
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = Jc(n);
      return (r && r.default) || 0;
    } else {
      const r = Ck(t),
        i = (jc(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return cy(t, n);
  }
  build(t, n, r) {
    Ac(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return $c(t, n, r);
  }
}
class bk extends Py {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = pe),
      (this.updateDimensions = () => {
        this.current &&
          !this.renderState.dimensions &&
          cg(this.current, this.renderState);
      });
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (In.has(n)) {
      const r = Jc(n);
      return (r && r.default) || 0;
    }
    return (n = dg.has(n) ? n : Mc(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return hg(t, n, r);
  }
  onBindTransform() {
    this.current &&
      !this.renderState.dimensions &&
      Y.postRender(this.updateDimensions);
  }
  build(t, n, r) {
    Ic(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    pg(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Vc(t.tagName)), super.mount(t);
  }
}
const Mk = (e, t) =>
    zc(e) ? new bk(t) : new Ok(t, { allowProjection: e !== R.Fragment }),
  Lk = nx({ ...JP, ...wk, ...lk, ...Sk }, Mk),
  ai = yS(Lk);
function jk(e) {
  return mn({
    tag: "svg",
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
  of = {},
  Bi = {},
  Hi = {},
  Ty = "Expected a function",
  $p = NaN,
  Dk = "[object Symbol]",
  Rk = /^\s+|\s+$/g,
  Ak = /^[-+]0x[0-9a-f]+$/i,
  Nk = /^0b[01]+$/i,
  zk = /^0o[0-7]+$/i,
  Ik = parseInt,
  Vk = typeof Gt == "object" && Gt && Gt.Object === Object && Gt,
  Fk = typeof self == "object" && self && self.Object === Object && self,
  $k = Vk || Fk || Function("return this")(),
  Bk = Object.prototype,
  Hk = Bk.toString,
  Wk = Math.max,
  Uk = Math.min,
  Ga = function () {
    return $k.Date.now();
  };
function Kk(e, t, n) {
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
  if (typeof e != "function") throw new TypeError(Ty);
  (t = Bp(t) || 0),
    ys(n) &&
      ((c = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? Wk(Bp(n.maxWait) || 0, t) : o),
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
    return f ? Uk(C, o - _) : C;
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
function Qk(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(Ty);
  return (
    ys(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    Kk(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function ys(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function Gk(e) {
  return !!e && typeof e == "object";
}
function Yk(e) {
  return typeof e == "symbol" || (Gk(e) && Hk.call(e) == Dk);
}
function Bp(e) {
  if (typeof e == "number") return e;
  if (Yk(e)) return $p;
  if (ys(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ys(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(Rk, "");
  var n = Nk.test(e);
  return n || zk.test(e) ? Ik(e.slice(2), n ? 2 : 8) : Ak.test(e) ? $p : +e;
}
var Xk = Qk,
  Wi = {};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.addPassiveEventListener = function (t, n, r) {
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
Wi.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), Vo.get(n).delete(r.name || n);
};
var Vo = new Map();
Object.defineProperty(Hi, "__esModule", { value: !0 });
var qk = Xk,
  Zk = eE(qk),
  Jk = Wi;
function eE(e) {
  return e && e.__esModule ? e : { default: e };
}
var tE = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, Zk.default)(t, n);
  },
  ne = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = tE(function (i) {
          ne.scrollHandler(t);
        }, n);
        ne.scrollSpyContainers.push(t),
          (0, Jk.addPassiveEventListener)(t, "scroll", r);
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
  Ui = {};
Object.defineProperty(Ui, "__esModule", { value: !0 });
var nE = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t,
      i = r ? "#" + r : "",
      o = window && window.location,
      s = i ? o.pathname + o.search + i : o.pathname + o.search;
    n
      ? history.pushState(history.state, "", s)
      : history.replaceState(history.state, "", s);
  },
  rE = function () {
    return window.location.hash.replace(/^#/, "");
  },
  iE = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  oE = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  Ya = function (t, n) {
    for (var r = t.offsetTop, i = t.offsetParent; i && !n(i); )
      (r += i.offsetTop), (i = i.offsetParent);
    return { offsetTop: r, offsetParent: i };
  },
  sE = function (t, n, r) {
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
    if (oE(t)) {
      if (n.offsetParent !== t) {
        var i = function (c) {
            return c === t || c === document;
          },
          o = Ya(n, i),
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
    return Ya(n, l).offsetTop - Ya(t, l).offsetTop;
  };
Ui.default = {
  updateHash: nE,
  getHash: rE,
  filterElementInContainer: iE,
  scrollOffset: sE,
};
var qs = {},
  sf = {};
Object.defineProperty(sf, "__esModule", { value: !0 });
sf.default = {
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
var af = {};
Object.defineProperty(af, "__esModule", { value: !0 });
var aE = Wi,
  lE = ["mousedown", "mousewheel", "touchmove", "keydown"];
af.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      lE.forEach(function (n) {
        return (0, aE.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
var wu = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      wu.registered[t] = n;
    },
    remove: function (t) {
      wu.registered[t] = null;
    },
  },
};
Ki.default = wu;
Object.defineProperty(qs, "__esModule", { value: !0 });
var uE =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  cE = Ui;
Zs(cE);
var fE = sf,
  Hp = Zs(fE),
  dE = af,
  pE = Zs(dE),
  hE = Ki,
  gt = Zs(hE);
function Zs(e) {
  return e && e.__esModule ? e : { default: e };
}
var ky = function (t) {
    return Hp.default[t.smooth] || Hp.default.defaultEasing;
  },
  mE = function (t) {
    return typeof t == "function"
      ? t
      : function () {
          return t;
        };
  },
  vE = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  Su = (function () {
    return (
      vE() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  Ey = function () {
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
  _y = function (t) {
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
  Cy = function (t) {
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
  gE = function (t) {
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
  yE = function (t) {
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
  wE = function e(t, n, r) {
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
      Su.call(window, o);
      return;
    }
    gt.default.registered.end &&
      gt.default.registered.end(i.to, i.target, i.currentPosition);
  },
  lf = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
        ? t.container
        : document
      : null;
  },
  Qi = function (t, n, r, i) {
    (n.data = n.data || Ey()), window.clearTimeout(n.data.delayTimeout);
    var o = function () {
      n.data.cancel = !0;
    };
    if (
      (pE.default.subscribe(o),
      lf(n),
      (n.data.start = null),
      (n.data.cancel = !1),
      (n.data.startPosition = n.horizontal ? _y(n) : Cy(n)),
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
      (n.data.duration = mE(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = i);
    var s = ky(n),
      a = wE.bind(null, s, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        gt.default.registered.begin &&
          gt.default.registered.begin(n.data.to, n.data.target),
          Su.call(window, a);
      }, n.delay);
      return;
    }
    gt.default.registered.begin &&
      gt.default.registered.begin(n.data.to, n.data.target),
      Su.call(window, a);
  },
  Js = function (t) {
    return (t = uE({}, t)), (t.data = t.data || Ey()), (t.absolute = !0), t;
  },
  SE = function (t) {
    Qi(0, Js(t));
  },
  xE = function (t, n) {
    Qi(t, Js(n));
  },
  PE = function (t) {
    (t = Js(t)), lf(t), Qi(t.horizontal ? gE(t) : yE(t), t);
  },
  TE = function (t, n) {
    (n = Js(n)), lf(n);
    var r = n.horizontal ? _y(n) : Cy(n);
    Qi(t + r, n);
  };
qs.default = {
  animateTopScroll: Qi,
  getAnimationType: ky,
  scrollToTop: SE,
  scrollToBottom: PE,
  scrollTo: xE,
  scrollMore: TE,
};
Object.defineProperty(Lr, "__esModule", { value: !0 });
var kE =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  EE = Ui,
  _E = uf(EE),
  CE = qs,
  OE = uf(CE),
  bE = Ki,
  yo = uf(bE);
function uf(e) {
  return e && e.__esModule ? e : { default: e };
}
var wo = {},
  Wp = void 0;
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
    return (Wp = t);
  },
  getActiveLink: function () {
    return Wp;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = kE({}, n, { absolute: !1 });
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
      l = _E.default.scrollOffset(s, r, a) + (n.offset || 0);
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
    OE.default.animateTopScroll(l, n, t, r);
  },
};
var Oy = { exports: {} },
  ME = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  LE = ME,
  jE = LE;
function by() {}
function My() {}
My.resetWarningCache = by;
var DE = function () {
  function e(r, i, o, s, a, l) {
    if (l !== jE) {
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
    checkPropTypes: My,
    resetWarningCache: by,
  };
  return (n.PropTypes = n), n;
};
Oy.exports = DE();
var ea = Oy.exports,
  ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
var RE = Ui,
  Xa = AE(RE);
function AE(e) {
  return e && e.__esModule ? e : { default: e };
}
var NE = {
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
    return Xa.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      Xa.default.getHash() !== t &&
      Xa.default.updateHash(t, n);
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
ta.default = NE;
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
  zE = (function () {
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
  IE = R,
  Up = Gi(IE),
  VE = Hi,
  xo = Gi(VE),
  FE = Lr,
  $E = Gi(FE),
  BE = ea,
  Z = Gi(BE),
  HE = ta,
  Ft = Gi(HE);
function Gi(e) {
  return e && e.__esModule ? e : { default: e };
}
function WE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UE(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function KE(e, t) {
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
var Kp = {
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
  var n = t || $E.default,
    r = (function (o) {
      KE(s, o);
      function s(a) {
        WE(this, s);
        var l = UE(
          this,
          (s.__proto__ || Object.getPrototypeOf(s)).call(this, a)
        );
        return i.call(l), (l.state = { active: !1 }), l;
      }
      return (
        zE(s, [
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
              for (var f in Kp) c.hasOwnProperty(f) && delete c[f];
              return (
                (c.className = l),
                (c.style = u),
                (c.onClick = this.handleClick),
                Up.default.createElement(e, c)
              );
            },
          },
        ]),
        s
      );
    })(Up.default.PureComponent),
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
  return (r.propTypes = Kp), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(of, "__esModule", { value: !0 });
var QE = R,
  Qp = Ly(QE),
  GE = Bi,
  YE = Ly(GE);
function Ly(e) {
  return e && e.__esModule ? e : { default: e };
}
function XE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gp(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function qE(e, t) {
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
var ZE = (function (e) {
  qE(t, e);
  function t() {
    var n, r, i, o;
    XE(this, t);
    for (var s = arguments.length, a = Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    return (
      (o =
        ((r =
          ((i = Gp(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(a)
            )
          )),
          i)),
        (i.render = function () {
          return Qp.default.createElement("a", i.props, i.props.children);
        }),
        r)),
      Gp(i, o)
    );
  }
  return t;
})(Qp.default.Component);
of.default = (0, YE.default)(ZE);
var cf = {};
Object.defineProperty(cf, "__esModule", { value: !0 });
var JE = (function () {
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
  e_ = R,
  Yp = jy(e_),
  t_ = Bi,
  n_ = jy(t_);
function jy(e) {
  return e && e.__esModule ? e : { default: e };
}
function r_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function i_(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function o_(e, t) {
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
var s_ = (function (e) {
  o_(t, e);
  function t() {
    return (
      r_(this, t),
      i_(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    JE(t, [
      {
        key: "render",
        value: function () {
          return Yp.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        },
      },
    ]),
    t
  );
})(Yp.default.Component);
cf.default = (0, n_.default)(s_);
var ff = {},
  na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
var a_ =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  l_ = (function () {
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
  u_ = R,
  Xp = ra(u_),
  c_ = Bv;
ra(c_);
var f_ = Lr,
  qp = ra(f_),
  d_ = ea,
  Zp = ra(d_);
function ra(e) {
  return e && e.__esModule ? e : { default: e };
}
function p_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h_(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function m_(e, t) {
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
    m_(r, n);
    function r(i) {
      p_(this, r);
      var o = h_(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return (o.childBindings = { domNode: null }), o;
    }
    return (
      l_(r, [
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
            qp.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (o) {
            qp.default.register(o, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return Xp.default.createElement(
              e,
              a_({}, this.props, { parentBindings: this.childBindings })
            );
          },
        },
      ]),
      r
    );
  })(Xp.default.Component);
  return (t.propTypes = { name: Zp.default.string, id: Zp.default.string }), t;
};
Object.defineProperty(ff, "__esModule", { value: !0 });
var Jp =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  v_ = (function () {
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
  g_ = R,
  eh = df(g_),
  y_ = na,
  w_ = df(y_),
  S_ = ea,
  th = df(S_);
function df(e) {
  return e && e.__esModule ? e : { default: e };
}
function x_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function P_(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function T_(e, t) {
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
var Dy = (function (e) {
  T_(t, e);
  function t() {
    return (
      x_(this, t),
      P_(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    v_(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            i = Jp({}, this.props);
          return (
            delete i.name,
            i.parentBindings && delete i.parentBindings,
            eh.default.createElement(
              "div",
              Jp({}, i, {
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
})(eh.default.Component);
Dy.propTypes = { name: th.default.string, id: th.default.string };
ff.default = (0, w_.default)(Dy);
var qa =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  nh = (function () {
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
function rh(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ih(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function oh(e, t) {
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
  Za = Lr,
  re = ea,
  $t = ta,
  sh = {
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
  k_ = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || Za,
        i = (function (s) {
          oh(a, s);
          function a(l) {
            rh(this, a);
            var u = ih(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, l)
            );
            return o.call(u), (u.state = { active: !1 }), u;
          }
          return (
            nh(a, [
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
                  var c = qa({}, this.props);
                  for (var f in sh) c.hasOwnProperty(f) && delete c[f];
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
            r.scrollTo(l, qa({}, a.state, u));
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
      return (i.propTypes = sh), (i.defaultProps = { offset: 0 }), i;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        oh(i, r);
        function i(o) {
          rh(this, i);
          var s = ih(
            this,
            (i.__proto__ || Object.getPrototypeOf(i)).call(this, o)
          );
          return (s.childBindings = { domNode: null }), s;
        }
        return (
          nh(i, [
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
                Za.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (s) {
                Za.register(s, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return Po.createElement(
                  t,
                  qa({}, this.props, { parentBindings: this.childBindings })
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
  E_ = k_;
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
var __ = of,
  Ry = Tt(__),
  C_ = cf,
  Ay = Tt(C_),
  O_ = ff,
  Ny = Tt(O_),
  b_ = Lr,
  zy = Tt(b_),
  M_ = Ki,
  Iy = Tt(M_),
  L_ = Hi,
  Vy = Tt(L_),
  j_ = qs,
  Fy = Tt(j_),
  D_ = Bi,
  $y = Tt(D_),
  R_ = na,
  By = Tt(R_),
  A_ = E_,
  Hy = Tt(A_);
function Tt(e) {
  return e && e.__esModule ? e : { default: e };
}
var ws = (ue.Link = Ry.default);
ue.Button = Ay.default;
ue.Element = Ny.default;
ue.scroller = zy.default;
ue.Events = Iy.default;
ue.scrollSpy = Vy.default;
ue.animateScroll = Fy.default;
ue.ScrollLink = $y.default;
ue.ScrollElement = By.default;
ue.Helpers = Hy.default;
ue.default = {
  Link: Ry.default,
  Button: Ay.default,
  Element: Ny.default,
  scroller: zy.default,
  Events: Iy.default,
  scrollSpy: Vy.default,
  animateScroll: Fy.default,
  ScrollLink: $y.default,
  ScrollElement: By.default,
  Helpers: Hy.default,
};
var Fo = {},
  Wy;
Object.defineProperty(Fo, "__esModule", { value: !0 });
var Qr = T,
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
function N_(e, t) {
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
var ah = function (e) {
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
      g = mt.useReducer(N_, { speed: s, text: "", count: 0 }),
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
  z_ = "styles-module_blinkingCursor__yugAC",
  I_ = "styles-module_blinking__9VXRT";
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
var lh = mt.memo(function (e) {
  var t = e.cursorBlinking,
    n = t === void 0 || t,
    r = e.cursorStyle,
    i = r === void 0 ? "|" : r,
    o = e.cursorColor,
    s = o === void 0 ? "inherit" : o;
  return Qr.jsx(
    "span",
    lt(
      {
        style: { color: s },
        className: "".concat(z_, " ").concat(n ? I_ : ""),
      },
      { children: i }
    )
  );
});
(Fo.Cursor = lh),
  (Wy = Fo.Typewriter =
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
        E = ah({
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
      return Qr.jsxs(Qr.Fragment, {
        children: [
          Qr.jsx("span", { children: E }),
          d &&
            Qr.jsx(lh, { cursorStyle: y, cursorColor: x, cursorBlinking: p }),
        ],
      });
    }),
  (Fo.useTypewriter = ah);
const V_ = "./assets/Myimage2-BdVew8Z0.jpg",
  F_ = () =>
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
                  children: T.jsx(Wy, {
                    words: [
                      "Site Reliability Engineer",
                      "DevOps",
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
                      children: T.jsx(jk, { size: 25, className: "ml-1" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          T.jsx("div", {
            className: "w-full md:w-1/2 flex justify-center items-center",
            children: T.jsx("div", {
              className:
                "rounded-2xl overflow-hidden w-full md:w-10/12 lg:w-11/12 xl:w-full",
              children: T.jsx("img", {
                src: V_,
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
  $_ = "./assets/Prakhar_mathur_logoWhite-C_FdjS5F.png",
  B_ = () => {
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
              src: $_,
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
                  href: "https://drive.google.com/file/d/1tSEY1NWGAf4EGPlyCFDC09mNp7bIvPsz/view?usp=sharing",
                  className:
                    "relative text-white w-fit px-4 py-2 lg:px-5 lg:py-3 flex items-center overflow-hidden rounded-md bg-gradient-to-l from-[#60efff] to-[#0061ff] cursor-pointer",
                  children: [
                    T.jsxs("span", {
                      className: "relative z-10 flex items-center",
                      children: [
                        "Resume",
                        T.jsx(Ed, { size: 20, className: "ml-1 lg:ml-2" }),
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
          children: e ? T.jsx(sS, { size: 30 }) : T.jsx(oS, { size: 30 }),
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
                          T.jsx(Ed, { size: 20, className: "ml-2" }),
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
var Uy = {},
  Ky = {},
  ia = {},
  Qy = {};
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
})(Qy);
var H_ = "Expected a function",
  uh = NaN,
  W_ = "[object Symbol]",
  U_ = /^\s+|\s+$/g,
  K_ = /^[-+]0x[0-9a-f]+$/i,
  Q_ = /^0b[01]+$/i,
  G_ = /^0o[0-7]+$/i,
  Y_ = parseInt,
  X_ = typeof Gt == "object" && Gt && Gt.Object === Object && Gt,
  q_ = typeof self == "object" && self && self.Object === Object && self,
  Z_ = X_ || q_ || Function("return this")(),
  J_ = Object.prototype,
  e2 = J_.toString,
  t2 = Math.max,
  n2 = Math.min,
  Ja = function () {
    return Z_.Date.now();
  };
function r2(e, t, n) {
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
  if (typeof e != "function") throw new TypeError(H_);
  (t = ch(t) || 0),
    xu(n) &&
      ((c = !!n.leading),
      (f = "maxWait" in n),
      (o = f ? t2(ch(n.maxWait) || 0, t) : o),
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
    return f ? n2(C, o - _) : C;
  }
  function x(P) {
    var E = P - l,
      _ = P - u;
    return l === void 0 || E >= t || E < 0 || (f && _ >= o);
  }
  function h() {
    var P = Ja();
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
    return a === void 0 ? s : p(Ja());
  }
  function S() {
    var P = Ja(),
      E = x(P);
    if (((r = arguments), (i = this), (l = P), E)) {
      if (a === void 0) return y(l);
      if (f) return (a = setTimeout(h, t)), v(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), s;
  }
  return (S.cancel = m), (S.flush = w), S;
}
function xu(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function i2(e) {
  return !!e && typeof e == "object";
}
function o2(e) {
  return typeof e == "symbol" || (i2(e) && e2.call(e) == W_);
}
function ch(e) {
  if (typeof e == "number") return e;
  if (o2(e)) return uh;
  if (xu(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xu(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(U_, "");
  var n = Q_.test(e);
  return n || G_.test(e) ? Y_(e.slice(2), n ? 2 : 8) : K_.test(e) ? uh : +e;
}
var s2 = r2,
  Gy = { exports: {} };
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
})(Gy);
var oa = Gy.exports,
  M = {},
  pf = {};
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
})(pf);
Object.defineProperty(M, "__esModule", { value: !0 });
M.checkSpecKeys =
  M.checkNavigable =
  M.changeSlide =
  M.canUseDOM =
  M.canGoNext =
    void 0;
M.clamp = Xy;
M.extractObject = void 0;
M.filterSettings = x2;
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
var a2 = Yy(R),
  l2 = Yy(pf);
function Yy(e) {
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
function fh(e, t) {
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
      ? fh(Object(n), !0).forEach(function (r) {
          u2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : fh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function u2(e, t, n) {
  return (
    (t = c2(t)),
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
function c2(e) {
  var t = f2(e, "string");
  return ji(t) == "symbol" ? t : String(t);
}
function f2(e, t) {
  if (ji(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ji(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Xy(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
var ur = (M.safePreventDefault = function (t) {
    var n = ["onTouchStart", "onTouchMove", "onWheel"];
    n.includes(t._reactName) || t.preventDefault();
  }),
  qy = (M.getOnDemandLazySlides = function (t) {
    for (var n = [], r = Zy(t), i = Jy(t), o = r; o < i; o++)
      t.lazyLoadedList.indexOf(o) < 0 && n.push(o);
    return n;
  });
M.getRequiredLazySlides = function (t) {
  for (var n = [], r = Zy(t), i = Jy(t), o = r; o < i; o++) n.push(o);
  return n;
};
var Zy = (M.lazyStartIndex = function (t) {
    return t.currentSlide - d2(t);
  }),
  Jy = (M.lazyEndIndex = function (t) {
    return t.currentSlide + p2(t);
  }),
  d2 = (M.lazySlidesOnLeft = function (t) {
    return t.centerMode
      ? Math.floor(t.slidesToShow / 2) + (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  p2 = (M.lazySlidesOnRight = function (t) {
    return t.centerMode
      ? Math.floor((t.slidesToShow - 1) / 2) +
          1 +
          (parseInt(t.centerPadding) > 0 ? 1 : 0)
      : t.slidesToShow;
  }),
  Pu = (M.getWidth = function (t) {
    return (t && t.offsetWidth) || 0;
  }),
  e0 = (M.getHeight = function (t) {
    return (t && t.offsetHeight) || 0;
  }),
  t0 = (M.getSwipeDirection = function (t) {
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
  n0 = (M.canGoNext = function (t) {
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
  var n = a2.default.Children.count(t.children),
    r = t.listRef,
    i = Math.ceil(Pu(r)),
    o = t.trackRef && t.trackRef.node,
    s = Math.ceil(Pu(o)),
    a;
  if (t.vertical) a = i;
  else {
    var l = t.centerMode && parseInt(t.centerPadding) * 2;
    typeof t.centerPadding == "string" &&
      t.centerPadding.slice(-1) === "%" &&
      (l *= i / 100),
      (a = Math.ceil((i - l) / t.slidesToShow));
  }
  var u = r && e0(r.querySelector('[data-index="0"]')),
    c = u * t.slidesToShow,
    f = t.currentSlide === void 0 ? t.initialSlide : t.currentSlide;
  t.rtl && t.currentSlide === void 0 && (f = n - 1 - t.initialSlide);
  var d = t.lazyLoadedList || [],
    v = qy(J(J({}, t), {}, { currentSlide: f, lazyLoadedList: d }));
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
    S = o ? s : Xy(s, 0, a - 1);
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
        : !n0(t) && g > u
        ? (g = x = u)
        : c && g >= a
        ? ((g = o ? a : a - 1), (x = o ? 0 : a - 1))
        : g >= a && ((x = g - a), o ? a % f !== 0 && (x = 0) : (x = a - d)),
      !o && g + d >= a && (x = a - d),
      (h = xs(J(J({}, t), {}, { slideIndex: g }))),
      (p = xs(J(J({}, t), {}, { slideIndex: x }))),
      o || (h === p && (g = x), (h = p)),
      l && (y = y.concat(qy(J(J({}, t), {}, { currentSlide: g })))),
      v
        ? ((m = {
            animating: !0,
            currentSlide: x,
            trackStyle: r0(J(J({}, t), {}, { left: h })),
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
      var g = g2(J(J({}, t), {}, { targetSlide: a }));
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
      D = t0(n.touchObject, a),
      N = p.swipeLength;
    return (
      h ||
        (((u === 0 && (D === "right" || D === "down")) ||
          (u + 1 >= j && (D === "left" || D === "up")) ||
          (!n0(n) && (D === "left" || D === "up"))) &&
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
    h = t0(o, l),
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
        (w = S + ph(n)), (m = c ? dh(n, w) : w), (p.currentDirection = 0);
        break;
      case "right":
      case "down":
        (w = S - ph(n)), (m = c ? dh(n, w) : w), (p.currentDirection = 1);
        break;
      default:
        m = S;
    }
    p.triggerSlideHandler = m;
  } else {
    var P = xs(n);
    p.trackStyle = r0(J(J({}, n), {}, { left: P }));
  }
  return p;
};
var h2 = (M.getNavigableIndexes = function (t) {
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
  dh = (M.checkNavigable = function (t, n) {
    var r = h2(t),
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
  ph = (M.getSlideCount = function (t) {
    var n = t.centerMode ? t.slideWidth * Math.floor(t.slidesToShow / 2) : 0;
    if (t.swipeToSlide) {
      var r,
        i = t.listRef,
        o = (i.querySelectorAll && i.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(o).every(function (l) {
          if (t.vertical) {
            if (l.offsetTop + e0(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
          } else if (l.offsetLeft - n + Pu(l) / 2 > t.swipeLeft * -1) return (r = l), !1;
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
  hf = (M.checkSpecKeys = function (t, n) {
    return n.reduce(function (r, i) {
      return r && t.hasOwnProperty(i);
    }, !0)
      ? null
      : console.error("Keys Missing:", t);
  }),
  Ss = (M.getTrackCSS = function (t) {
    hf(t, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var n,
      r,
      i = t.slideCount + 2 * t.slidesToShow;
    t.vertical ? (r = i * t.slideHeight) : (n = v2(t) * t.slideWidth);
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
  r0 = (M.getTrackAnimateCSS = function (t) {
    hf(t, [
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
    hf(t, [
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
  m2 = (M.getPostClones = function (t) {
    return t.unslick || !t.infinite ? 0 : t.slideCount;
  }),
  v2 = (M.getTotalSlides = function (t) {
    return t.slideCount === 1 ? 1 : $o(t) + t.slideCount + m2(t);
  }),
  g2 = (M.siblingDirection = function (t) {
    return t.targetSlide > t.currentSlide
      ? t.targetSlide > t.currentSlide + y2(t)
        ? "left"
        : "right"
      : t.targetSlide < t.currentSlide - w2(t)
      ? "right"
      : "left";
  }),
  y2 = (M.slidesOnRight = function (t) {
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
  w2 = (M.slidesOnLeft = function (t) {
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
var S2 = (M.validSettings = Object.keys(l2.default));
function x2(e) {
  return S2.reduce(function (t, n) {
    return e.hasOwnProperty(n) && (t[n] = e[n]), t;
  }, {});
}
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.Track = void 0;
var Ut = i0(R),
  el = i0(oa),
  tl = M;
function i0(e) {
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
function Tu() {
  return (
    (Tu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tu.apply(this, arguments)
  );
}
function P2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function T2(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, s0(r.key), r);
  }
}
function k2(e, t, n) {
  return (
    t && T2(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function E2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && ku(e, t);
}
function ku(e, t) {
  return (
    (ku = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    ku(e, t)
  );
}
function _2(e) {
  var t = o0();
  return function () {
    var r = Ps(e),
      i;
    if (t) {
      var o = Ps(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return C2(this, i);
  };
}
function C2(e, t) {
  if (t && (xr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Eu(e);
}
function Eu(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function o0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (o0 = function () {
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
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hh(Object(n), !0).forEach(function (r) {
          _u(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function _u(e, t, n) {
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
function s0(e) {
  var t = O2(e, "string");
  return xr(t) == "symbol" ? t : String(t);
}
function O2(e, t) {
  if (xr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (xr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var nl = function (t) {
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
  b2 = function (t) {
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
  rl = function (t, n) {
    return t.key || n;
  },
  M2 = function (t) {
    var n,
      r = [],
      i = [],
      o = [],
      s = Ut.default.Children.count(t.children),
      a = (0, tl.lazyStartIndex)(t),
      l = (0, tl.lazyEndIndex)(t);
    return (
      Ut.default.Children.forEach(t.children, function (u, c) {
        var f,
          d = {
            message: "children",
            index: c,
            slidesToScroll: t.slidesToScroll,
            currentSlide: t.currentSlide,
          };
        !t.lazyLoad || (t.lazyLoad && t.lazyLoadedList.indexOf(c) >= 0)
          ? (f = u)
          : (f = Ut.default.createElement("div", null));
        var v = b2(Ne(Ne({}, t), {}, { index: c })),
          y = f.props.className || "",
          g = nl(Ne(Ne({}, t), {}, { index: c }));
        if (
          (r.push(
            Ut.default.cloneElement(f, {
              key: "original" + rl(f, c),
              "data-index": c,
              className: (0, el.default)(g, y),
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
          x <= (0, tl.getPreClones)(t) &&
            ((n = -x),
            n >= a && (f = u),
            (g = nl(Ne(Ne({}, t), {}, { index: n }))),
            i.push(
              Ut.default.cloneElement(f, {
                key: "precloned" + rl(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, el.default)(g, y),
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
            (g = nl(Ne(Ne({}, t), {}, { index: n }))),
            o.push(
              Ut.default.cloneElement(f, {
                key: "postcloned" + rl(f, n),
                "data-index": n,
                tabIndex: "-1",
                className: (0, el.default)(g, y),
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
  E2(n, e);
  var t = _2(n);
  function n() {
    var r;
    P2(this, n);
    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
      o[s] = arguments[s];
    return (
      (r = t.call.apply(t, [this].concat(o))),
      _u(Eu(r), "node", null),
      _u(Eu(r), "handleRef", function (a) {
        r.node = a;
      }),
      r
    );
  }
  return (
    k2(n, [
      {
        key: "render",
        value: function () {
          var i = M2(this.props),
            o = this.props,
            s = o.onMouseEnter,
            a = o.onMouseOver,
            l = o.onMouseLeave,
            u = { onMouseEnter: s, onMouseOver: a, onMouseLeave: l };
          return Ut.default.createElement(
            "div",
            Tu(
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
})(Ut.default.PureComponent);
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
var To = a0(R),
  L2 = a0(oa),
  mh = M;
function a0(e) {
  return e && e.__esModule ? e : { default: e };
}
function vh(e, t) {
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
function j2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vh(Object(n), !0).forEach(function (r) {
          D2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function D2(e, t, n) {
  return (
    (t = l0(t)),
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
function R2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function A2(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, l0(r.key), r);
  }
}
function N2(e, t, n) {
  return (
    t && A2(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function l0(e) {
  var t = z2(e, "string");
  return Pr(t) == "symbol" ? t : String(t);
}
function z2(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Pr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function I2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Cu(e, t);
}
function Cu(e, t) {
  return (
    (Cu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Cu(e, t)
  );
}
function V2(e) {
  var t = u0();
  return function () {
    var r = Ts(e),
      i;
    if (t) {
      var o = Ts(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return F2(this, i);
  };
}
function F2(e, t) {
  if (t && (Pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return $2(e);
}
function $2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function u0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (u0 = function () {
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
var B2 = function (t) {
  var n;
  return (
    t.infinite
      ? (n = Math.ceil(t.slideCount / t.slidesToScroll))
      : (n = Math.ceil((t.slideCount - t.slidesToShow) / t.slidesToScroll) + 1),
    n
  );
};
aa.Dots = (function (e) {
  I2(n, e);
  var t = V2(n);
  function n() {
    return R2(this, n), t.apply(this, arguments);
  }
  return (
    N2(n, [
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
              v = B2({
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
              p = l ? h : (0, mh.clamp)(h, 0, f - 1),
              m = p - (u - 1),
              w = l ? m : (0, mh.clamp)(m, 0, f - 1),
              S = (0, L2.default)({
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
            j2({ className: this.props.dotsClass }, y)
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
var cr = f0(R),
  c0 = f0(oa),
  H2 = M;
function f0(e) {
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
function gh(e, t) {
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
      ? gh(Object(n), !0).forEach(function (r) {
          W2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function W2(e, t, n) {
  return (
    (t = h0(t)),
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
function d0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U2(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, h0(r.key), r);
  }
}
function p0(e, t, n) {
  return (
    t && U2(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function h0(e) {
  var t = K2(e, "string");
  return kr(t) == "symbol" ? t : String(t);
}
function K2(e, t) {
  if (kr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (kr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function m0(e, t) {
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
function v0(e) {
  var t = g0();
  return function () {
    var r = _s(e),
      i;
    if (t) {
      var o = _s(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return Q2(this, i);
  };
}
function Q2(e, t) {
  if (t && (kr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return G2(e);
}
function G2(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function g0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (g0 = function () {
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
  m0(n, e);
  var t = v0(n);
  function n() {
    return d0(this, n), t.apply(this, arguments);
  }
  return (
    p0(n, [
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
              className: (0, c0.default)(i),
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
  m0(n, e);
  var t = v0(n);
  function n() {
    return d0(this, n), t.apply(this, arguments);
  }
  return (
    p0(n, [
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
          (0, H2.canGoNext)(this.props) ||
            ((i["slick-disabled"] = !0), (o = null));
          var s = {
              key: "1",
              "data-role": "none",
              className: (0, c0.default)(i),
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
var y0 = (function () {
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
  bu =
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
  Y2 = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(Cs)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now());
          }, 1e3 / 60);
        };
  })(),
  X2 = 2;
function q2(e, t) {
  var n = !1,
    r = !1,
    i = 0;
  function o() {
    n && ((n = !1), e()), r && a();
  }
  function s() {
    Y2(o);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - i < X2) return;
      r = !0;
    } else (n = !0), (r = !1), setTimeout(s, t);
    i = l;
  }
  return a;
}
var Z2 = 20,
  J2 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  eC = typeof MutationObserver < "u",
  tC = (function () {
    function e() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = q2(this.refresh.bind(this), Z2));
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
        !bu ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          eC
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
        !bu ||
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
          i = J2.some(function (o) {
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
  w0 = function (e, t) {
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
  S0 = la(0, 0, 0, 0);
function Os(e) {
  return parseFloat(e) || 0;
}
function yh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function (r, i) {
    var o = e["border-" + i + "-width"];
    return r + Os(o);
  }, 0);
}
function nC(e) {
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
function rC(e) {
  var t = e.getBBox();
  return la(0, 0, t.width, t.height);
}
function iC(e) {
  var t = e.clientWidth,
    n = e.clientHeight;
  if (!t && !n) return S0;
  var r = Er(e).getComputedStyle(e),
    i = nC(r),
    o = i.left + i.right,
    s = i.top + i.bottom,
    a = Os(r.width),
    l = Os(r.height);
  if (
    (r.boxSizing === "border-box" &&
      (Math.round(a + o) !== t && (a -= yh(r, "left", "right") + o),
      Math.round(l + s) !== n && (l -= yh(r, "top", "bottom") + s)),
    !sC(e))
  ) {
    var u = Math.round(a + o) - t,
      c = Math.round(l + s) - n;
    Math.abs(u) !== 1 && (a -= u), Math.abs(c) !== 1 && (l -= c);
  }
  return la(i.left, i.top, a, l);
}
var oC = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (e) {
        return e instanceof Er(e).SVGGraphicsElement;
      }
    : function (e) {
        return e instanceof Er(e).SVGElement && typeof e.getBBox == "function";
      };
})();
function sC(e) {
  return e === Er(e).document.documentElement;
}
function aC(e) {
  return bu ? (oC(e) ? rC(e) : iC(e)) : S0;
}
function lC(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    s = Object.create(o.prototype);
  return (
    w0(s, {
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
var uC = (function () {
    function e(t) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = la(0, 0, 0, 0)),
        (this.target = t);
    }
    return (
      (e.prototype.isActive = function () {
        var t = aC(this.target);
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
  cC = (function () {
    function e(t, n) {
      var r = lC(n);
      w0(this, { target: t, contentRect: r });
    }
    return e;
  })(),
  fC = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new y0()),
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
            (n.set(t, new uC(t)),
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
              return new cC(r.target, r.broadcastRect());
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
  x0 = typeof WeakMap < "u" ? new WeakMap() : new y0(),
  P0 = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = tC.getInstance(),
        r = new fC(t, n, this);
      x0.set(this, r);
    }
    return e;
  })();
["observe", "unobserve", "disconnect"].forEach(function (e) {
  P0.prototype[e] = function () {
    var t;
    return (t = x0.get(this))[e].apply(t, arguments);
  };
});
var dC = (function () {
  return typeof Cs.ResizeObserver < "u" ? Cs.ResizeObserver : P0;
})();
const pC = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dC },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hC = C0(pC);
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.InnerSlider = void 0;
var Me = Yi(R),
  mC = Yi(Qy),
  vC = Yi(s2),
  gC = Yi(oa),
  te = M,
  yC = sa,
  wC = aa,
  wh = Tr,
  SC = Yi(hC);
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
function xC(e, t) {
  if (e == null) return {};
  var n = PC(e, t),
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
function PC(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Sh(e, t) {
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
      ? Sh(Object(n), !0).forEach(function (r) {
          B(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Sh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function TC(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kC(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, k0(r.key), r);
  }
}
function EC(e, t, n) {
  return (
    t && kC(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function _C(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && Mu(e, t);
}
function Mu(e, t) {
  return (
    (Mu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Mu(e, t)
  );
}
function CC(e) {
  var t = T0();
  return function () {
    var r = Ms(e),
      i;
    if (t) {
      var o = Ms(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return OC(this, i);
  };
}
function OC(e, t) {
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
function T0() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (T0 = function () {
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
    (t = k0(t)),
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
function k0(e) {
  var t = bC(e, "string");
  return An(t) == "symbol" ? t : String(t);
}
function bC(e, t) {
  if (An(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (An(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
ia.InnerSlider = (function (e) {
  _C(n, e);
  var t = CC(n);
  function n(r) {
    var i;
    TC(this, n),
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
          (i.ro = new SC.default(function () {
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
          (i.debouncedResize = (0, vC.default)(function () {
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
                      w = xC(h, ["animating"]);
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
        var s = (0, gC.default)("slick-slider", i.props.className, {
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
            (c = Me.default.createElement(wC.Dots, f));
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
            ((v = Me.default.createElement(wh.PrevArrow, g)),
            (y = Me.default.createElement(wh.NextArrow, g)));
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
                yC.Track,
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
        I({}, mC.default),
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
    EC(n, [
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
var MC = function (e) {
    return e
      .replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      })
      .toLowerCase();
  },
  LC = MC,
  jC = LC,
  DC = function (e) {
    var t = /[height|width]$/;
    return t.test(e);
  },
  xh = function (e) {
    var t = "",
      n = Object.keys(e);
    return (
      n.forEach(function (r, i) {
        var o = e[r];
        (r = jC(r)),
          DC(r) && typeof o == "number" && (o = o + "px"),
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
  RC = function (e) {
    var t = "";
    return typeof e == "string"
      ? e
      : e instanceof Array
      ? (e.forEach(function (n, r) {
          (t += xh(n)), r < e.length - 1 && (t += ", ");
        }),
        t)
      : xh(e);
  },
  AC = RC,
  il,
  Ph;
function NC() {
  if (Ph) return il;
  Ph = 1;
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
    (il = e),
    il
  );
}
var ol, Th;
function E0() {
  if (Th) return ol;
  Th = 1;
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
  return (ol = { isFunction: n, isArray: t, each: e }), ol;
}
var sl, kh;
function zC() {
  if (kh) return sl;
  kh = 1;
  var e = NC(),
    t = E0().each;
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
    (sl = n),
    sl
  );
}
var al, Eh;
function IC() {
  if (Eh) return al;
  Eh = 1;
  var e = zC(),
    t = E0(),
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
    (al = o),
    al
  );
}
var ll, _h;
function VC() {
  if (_h) return ll;
  _h = 1;
  var e = IC();
  return (ll = new e()), ll;
}
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = s(R),
    n = ia,
    r = s(AC),
    i = s(pf),
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
      var D = j.call(C, k || "default");
      if (a(D) != "object") return D;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (k === "string" ? String : Number)(C);
  }
  var _ = (0, o.canUseDOM)() && VC();
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
              z.sort(function (fe, U) {
                return fe - U;
              }),
                z.forEach(function (fe, U) {
                  var b;
                  U === 0
                    ? (b = (0, r.default)({ minWidth: 0, maxWidth: fe }))
                    : (b = (0, r.default)({
                        minWidth: z[U - 1] + 1,
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
              var U = [], b = null, A = 0;
              A < fe.length;
              A += z.rows * z.slidesPerRow
            ) {
              for (
                var F = [], Q = A;
                Q < A + z.rows * z.slidesPerRow;
                Q += z.slidesPerRow
              ) {
                for (
                  var de = [], Xe = Q;
                  Xe < Q + z.slidesPerRow &&
                  (z.variableWidth &&
                    fe[Xe].props.style &&
                    (b = fe[Xe].props.style.width),
                  !(Xe >= fe.length));
                  Xe += 1
                )
                  de.push(
                    t.default.cloneElement(fe[Xe], {
                      key: 100 * A + 10 * Q + Xe,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / z.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                F.push(t.default.createElement("div", { key: 10 * A + Q }, de));
              }
              z.variableWidth
                ? U.push(
                    t.default.createElement(
                      "div",
                      { key: A, style: { width: b } },
                      F
                    )
                  )
                : U.push(t.default.createElement("div", { key: A }, F));
            }
            if (z === "unslick") {
              var kt = "regular slider " + (this.props.className || "");
              return t.default.createElement("div", { className: kt }, fe);
            } else
              U.length <= z.slidesToShow && !z.infinite && (z.unslick = !0);
            return t.default.createElement(
              n.InnerSlider,
              l(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, o.filterSettings)(z)
              ),
              U
            );
          },
        },
      ]),
      j
    );
  })(t.default.Component);
})(Ky);
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
  var t = n(Ky);
  function n(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.default = t.default;
})(Uy);
const _0 = Oh(Uy),
  FC = "./assets/Gymwebsite-BYuAf9fK.png",
  $C = "./assets/ecom-CrxL78MH.png",
  BC = "./assets/jobportal-pAwUoUaG.png",
  HC = "./assets/signlang-D9UarpfI.png",
  WC = () => {
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
          src: HC,
        },
        {
          id: 4,
          name: "Ecommerce Project",
          domain: "Frontend Website with Ecommerce functionality",
          link: "https://6570a7f90f58ec161970fb6f--aquamarine-malabi-a15292.netlify.app/",
          src: $C,
        },
        {
          id: 5,
          name: "Job Portal",
          domain: "Fullstack website using Firebase",
          link: "https://pcas-job-portal.vercel.app/",
          src: BC,
        },
        {
          id: 6,
          name: "Fitclub Gym Website",
          domain: "Frontend Website",
          link: "https://65664545a7cccb0c94a37575--phenomenal-queijadas-e0a852.netlify.app/",
          src: FC,
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
          T.jsx(_0, {
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
  UC = "./assets/HTML5-C1jQn4QC.png",
  KC = "./assets/aws-_96mvvw2.png",
  QC = "./assets/c__-COLDLYDH.png",
  GC = "./assets/css-CjQniWua.png",
  Ch = "./assets/github-BR5NuBbG.png",
  YC = "./assets/javscript-CLdV-RIe.png",
  XC = "./assets/keras-CV7jTyoE.png",
  qC = "./assets/mysql-D1fmG43W.png",
  ZC = "./assets/postgresql-Dy5BWNJI.png",
  JC = "./assets/powerbi-B08B-lin.png",
  eO = "./assets/python-Bxi4hHvr.png",
  tO = "./assets/reactjs-4gEGafqw.png",
  nO = "./assets/sklearn-CmrvMMgx.png",
  rO = "./assets/tailwindcss-BMTYlt07.png",
  iO = "./assets/tensorflow-5ti5fQJB.png",
  oO = () => {
    const e = [
        { id: 1, src: QC, title: "C++" },
        { id: 2, src: eO, title: "Python" },
        { id: 3, src: qC, title: "MySQL" },
        { id: 4, src: ZC, title: "PostgreSQL" },
        { id: 5, src: UC, title: "HTML" },
        { id: 6, src: GC, title: "CSS" },
        { id: 7, src: YC, title: "JavaScript" },
        { id: 8, src: tO, title: "ReactJS" },
        { id: 9, src: rO, title: "TailwindCSS" },
        { id: 10, src: iO, title: "Tensorflow" },
        { id: 11, src: XC, title: "Keras" },
        { id: 12, src: nO, title: "Scikit-Learn" },
        { id: 13, src: KC, title: "AWS" },
        { id: 14, src: JC, title: "Power BI" },
        { id: 15, src: Ch, title: "GitHub" },
        { id: 16, src: Ch, title: "Kubernetes" },
      ],
      t = {
        infinite: !0,
        speed: 4e3,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: !0,
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
                children: "These are the technologies I've worked with",
              }),
            ],
          }),
          T.jsx(_0, {
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
  sO = () => {
    const e = [
      {
        id: 1,
        child: T.jsxs(T.Fragment, {
          children: ["LinkedIn ", T.jsx(Qv, { size: 30 })],
        }),
        href: "https://www.linkedin.com/in/mathurprakhar1/",
        style: "rounded-tr-md",
      },
      {
        id: 2,
        child: T.jsxs(T.Fragment, {
          children: ["GitHub ", T.jsx(Kv, { size: 30 })],
        }),
        href: "https://github.com/prakhar-mathur4",
      },
      {
        id: 3,
        child: T.jsxs(T.Fragment, {
          children: ["Mail ", T.jsx(Gv, { size: 30 })],
        }),
        href: "mailto:mathurprakhar1@gmail.com",
      },
      {
        id: 4,
        child: T.jsxs(T.Fragment, {
          children: ["Resume ", T.jsx(Uv, { size: 30 })],
        }),
        href: "#",
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
function aO() {
  return (
    R.useState(0),
    T.jsxs(T.Fragment, {
      children: [
        T.jsx(B_, {}),
        T.jsx(F_, {}),
        T.jsx(Zw, {}),
        T.jsx(WC, {}),
        T.jsx(oO, {}),
        T.jsx(nS, {}),
        T.jsx(Jw, {}),
        T.jsx(aS, {}),
        T.jsx(sO, {}),
      ],
    })
  );
}
ul.createRoot(document.getElementById("root")).render(
  T.jsx(qt.StrictMode, { children: T.jsx(aO, {}) })
);
