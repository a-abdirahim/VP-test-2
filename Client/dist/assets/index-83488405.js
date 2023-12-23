function jv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
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
var ze =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Ur(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var um = { exports: {} },
  zl = {},
  cm = { exports: {} },
  ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xo = Symbol.for("react.element"),
  kv = Symbol.for("react.portal"),
  bv = Symbol.for("react.fragment"),
  Pv = Symbol.for("react.strict_mode"),
  Nv = Symbol.for("react.profiler"),
  Ov = Symbol.for("react.provider"),
  Rv = Symbol.for("react.context"),
  Lv = Symbol.for("react.forward_ref"),
  Av = Symbol.for("react.suspense"),
  Mv = Symbol.for("react.memo"),
  Fv = Symbol.for("react.lazy"),
  Pf = Symbol.iterator;
function Dv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pf && e[Pf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var dm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fm = Object.assign,
  pm = {};
function zi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pm),
    (this.updater = n || dm);
}
zi.prototype.isReactComponent = {};
zi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
zi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hm() {}
hm.prototype = zi.prototype;
function Yc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pm),
    (this.updater = n || dm);
}
var Xc = (Yc.prototype = new hm());
Xc.constructor = Yc;
fm(Xc, zi.prototype);
Xc.isPureReactComponent = !0;
var Nf = Array.isArray,
  mm = Object.prototype.hasOwnProperty,
  Zc = { current: null },
  gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function vm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      mm.call(t, r) && !gm.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Xo,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Zc.current,
  };
}
function Iv(e, t) {
  return {
    $$typeof: Xo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Jc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xo;
}
function $v(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Of = /\/+/g;
function qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? $v("" + e.key)
    : t.toString(36);
}
function Wa(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xo:
          case kv:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + qs(a, 0) : r),
      Nf(i)
        ? ((n = ""),
          e != null && (n = e.replace(Of, "$&/") + "/"),
          Wa(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Jc(i) &&
            (i = Iv(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Of, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Nf(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var s = r + qs(o, l);
      a += Wa(o, t, n, s, i);
    }
  else if (((s = Dv(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + qs(o, l++)), (a += Wa(o, t, n, s, i));
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
  return a;
}
function ha(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Wa(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function zv(e) {
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
var ft = { current: null },
  qa = { transition: null },
  Bv = {
    ReactCurrentDispatcher: ft,
    ReactCurrentBatchConfig: qa,
    ReactCurrentOwner: Zc,
  };
ce.Children = {
  map: ha,
  forEach: function (e, t, n) {
    ha(
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
      ha(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ha(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Jc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ce.Component = zi;
ce.Fragment = bv;
ce.Profiler = Nv;
ce.PureComponent = Yc;
ce.StrictMode = Pv;
ce.Suspense = Av;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bv;
ce.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = fm({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Zc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      mm.call(t, s) &&
        !gm.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var c = 0; c < s; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Xo, type: e.type, key: i, ref: o, props: r, _owner: a };
};
ce.createContext = function (e) {
  return (
    (e = {
      $$typeof: Rv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ov, _context: e }),
    (e.Consumer = e)
  );
};
ce.createElement = vm;
ce.createFactory = function (e) {
  var t = vm.bind(null, e);
  return (t.type = e), t;
};
ce.createRef = function () {
  return { current: null };
};
ce.forwardRef = function (e) {
  return { $$typeof: Lv, render: e };
};
ce.isValidElement = Jc;
ce.lazy = function (e) {
  return { $$typeof: Fv, _payload: { _status: -1, _result: e }, _init: zv };
};
ce.memo = function (e, t) {
  return { $$typeof: Mv, type: e, compare: t === void 0 ? null : t };
};
ce.startTransition = function (e) {
  var t = qa.transition;
  qa.transition = {};
  try {
    e();
  } finally {
    qa.transition = t;
  }
};
ce.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ce.useCallback = function (e, t) {
  return ft.current.useCallback(e, t);
};
ce.useContext = function (e) {
  return ft.current.useContext(e);
};
ce.useDebugValue = function () {};
ce.useDeferredValue = function (e) {
  return ft.current.useDeferredValue(e);
};
ce.useEffect = function (e, t) {
  return ft.current.useEffect(e, t);
};
ce.useId = function () {
  return ft.current.useId();
};
ce.useImperativeHandle = function (e, t, n) {
  return ft.current.useImperativeHandle(e, t, n);
};
ce.useInsertionEffect = function (e, t) {
  return ft.current.useInsertionEffect(e, t);
};
ce.useLayoutEffect = function (e, t) {
  return ft.current.useLayoutEffect(e, t);
};
ce.useMemo = function (e, t) {
  return ft.current.useMemo(e, t);
};
ce.useReducer = function (e, t, n) {
  return ft.current.useReducer(e, t, n);
};
ce.useRef = function (e) {
  return ft.current.useRef(e);
};
ce.useState = function (e) {
  return ft.current.useState(e);
};
ce.useSyncExternalStore = function (e, t, n) {
  return ft.current.useSyncExternalStore(e, t, n);
};
ce.useTransition = function () {
  return ft.current.useTransition();
};
ce.version = "18.2.0";
cm.exports = ce;
var S = cm.exports;
const de = Ur(S),
  Uv = jv({ __proto__: null, default: de }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vv = S,
  Hv = Symbol.for("react.element"),
  Wv = Symbol.for("react.fragment"),
  qv = Object.prototype.hasOwnProperty,
  Gv = Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kv = { key: !0, ref: !0, __self: !0, __source: !0 };
function ym(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) qv.call(t, r) && !Kv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Hv,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Gv.current,
  };
}
zl.Fragment = Wv;
zl.jsx = ym;
zl.jsxs = ym;
um.exports = zl;
var u = um.exports,
  Du = {},
  xm = { exports: {} },
  Ot = {},
  wm = { exports: {} },
  Em = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, N) {
    var j = A.length;
    A.push(N);
    e: for (; 0 < j; ) {
      var G = (j - 1) >>> 1,
        $ = A[G];
      if (0 < i($, N)) (A[G] = N), (A[j] = $), (j = G);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var N = A[0],
      j = A.pop();
    if (j !== N) {
      A[0] = j;
      e: for (var G = 0, $ = A.length, Y = $ >>> 1; G < Y; ) {
        var W = 2 * (G + 1) - 1,
          se = A[W],
          ge = W + 1,
          Fe = A[ge];
        if (0 > i(se, j))
          ge < $ && 0 > i(Fe, se)
            ? ((A[G] = Fe), (A[ge] = j), (G = ge))
            : ((A[G] = se), (A[W] = j), (G = W));
        else if (ge < $ && 0 > i(Fe, j)) (A[G] = Fe), (A[ge] = j), (G = ge);
        else break e;
      }
    }
    return N;
  }
  function i(A, N) {
    var j = A.sortIndex - N.sortIndex;
    return j !== 0 ? j : A.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    c = [],
    d = 1,
    f = null,
    p = 3,
    x = !1,
    y = !1,
    v = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(A) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= A)
        r(c), (N.sortIndex = N.expirationTime), t(s, N);
      else break;
      N = n(c);
    }
  }
  function h(A) {
    if (((v = !1), w(A), !y))
      if (n(s) !== null) (y = !0), le(C);
      else {
        var N = n(c);
        N !== null && me(h, N.startTime - A);
      }
  }
  function C(A, N) {
    (y = !1), v && ((v = !1), m(M), (M = -1)), (x = !0);
    var j = p;
    try {
      for (
        w(N), f = n(s);
        f !== null && (!(f.expirationTime > N) || (A && !oe()));

      ) {
        var G = f.callback;
        if (typeof G == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var $ = G(f.expirationTime <= N);
          (N = e.unstable_now()),
            typeof $ == "function" ? (f.callback = $) : f === n(s) && r(s),
            w(N);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var Y = !0;
      else {
        var W = n(c);
        W !== null && me(h, W.startTime - N), (Y = !1);
      }
      return Y;
    } finally {
      (f = null), (p = j), (x = !1);
    }
  }
  var P = !1,
    k = null,
    M = -1,
    U = 5,
    I = -1;
  function oe() {
    return !(e.unstable_now() - I < U);
  }
  function R() {
    if (k !== null) {
      var A = e.unstable_now();
      I = A;
      var N = !0;
      try {
        N = k(!0, A);
      } finally {
        N ? D() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var D;
  if (typeof g == "function")
    D = function () {
      g(R);
    };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      X = H.port2;
    (H.port1.onmessage = R),
      (D = function () {
        X.postMessage(null);
      });
  } else
    D = function () {
      E(R, 0);
    };
  function le(A) {
    (k = A), P || ((P = !0), D());
  }
  function me(A, N) {
    M = E(function () {
      A(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), le(C));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (U = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (A) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = p;
      }
      var j = p;
      p = N;
      try {
        return A();
      } finally {
        p = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, N) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var j = p;
      p = A;
      try {
        return N();
      } finally {
        p = j;
      }
    }),
    (e.unstable_scheduleCallback = function (A, N, j) {
      var G = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? G + j : G))
          : (j = G),
        A)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = j + $),
        (A = {
          id: d++,
          callback: N,
          priorityLevel: A,
          startTime: j,
          expirationTime: $,
          sortIndex: -1,
        }),
        j > G
          ? ((A.sortIndex = j),
            t(c, A),
            n(s) === null &&
              A === n(c) &&
              (v ? (m(M), (M = -1)) : (v = !0), me(h, j - G)))
          : ((A.sortIndex = $), t(s, A), y || x || ((y = !0), le(C))),
        A
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (A) {
      var N = p;
      return function () {
        var j = p;
        p = N;
        try {
          return A.apply(this, arguments);
        } finally {
          p = j;
        }
      };
    });
})(Em);
wm.exports = Em;
var Qv = wm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sm = S,
  Nt = Qv;
function F(e) {
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
var Cm = new Set(),
  bo = {};
function Vr(e, t) {
  Ni(e, t), Ni(e + "Capture", t);
}
function Ni(e, t) {
  for (bo[e] = t, e = 0; e < t.length; e++) Cm.add(t[e]);
}
var Pn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Iu = Object.prototype.hasOwnProperty,
  Yv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Rf = {},
  Lf = {};
function Xv(e) {
  return Iu.call(Lf, e)
    ? !0
    : Iu.call(Rf, e)
    ? !1
    : Yv.test(e)
    ? (Lf[e] = !0)
    : ((Rf[e] = !0), !1);
}
function Zv(e, t, n, r) {
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
function Jv(e, t, n, r) {
  if (t === null || typeof t > "u" || Zv(e, t, n, r)) return !0;
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
function pt(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var it = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    it[e] = new pt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  it[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  it[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  it[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    it[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  it[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  it[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  it[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  it[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ed = /[\-:]([a-z])/g;
function td(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ed, td);
    it[t] = new pt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ed, td);
    it[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ed, td);
  it[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  it[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
it.xlinkHref = new pt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  it[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function nd(e, t, n, r) {
  var i = it.hasOwnProperty(t) ? it[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Jv(t, n, i, r) && (n = null),
    r || i === null
      ? Xv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Mn = Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ma = Symbol.for("react.element"),
  oi = Symbol.for("react.portal"),
  ai = Symbol.for("react.fragment"),
  rd = Symbol.for("react.strict_mode"),
  $u = Symbol.for("react.profiler"),
  _m = Symbol.for("react.provider"),
  Tm = Symbol.for("react.context"),
  id = Symbol.for("react.forward_ref"),
  zu = Symbol.for("react.suspense"),
  Bu = Symbol.for("react.suspense_list"),
  od = Symbol.for("react.memo"),
  Vn = Symbol.for("react.lazy"),
  jm = Symbol.for("react.offscreen"),
  Af = Symbol.iterator;
function Ki(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Af && e[Af]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Le = Object.assign,
  Gs;
function lo(e) {
  if (Gs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gs = (t && t[1]) || "";
    }
  return (
    `
` +
    Gs +
    e
  );
}
var Ks = !1;
function Qs(e, t) {
  if (!e || Ks) return "";
  Ks = !0;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          l = o.length - 1;
        1 <= a && 0 <= l && i[a] !== o[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (i[a] !== o[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || i[a] !== o[l])) {
                var s =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Ks = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? lo(e) : "";
}
function ey(e) {
  switch (e.tag) {
    case 5:
      return lo(e.type);
    case 16:
      return lo("Lazy");
    case 13:
      return lo("Suspense");
    case 19:
      return lo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qs(e.type, !1)), e;
    case 11:
      return (e = Qs(e.type.render, !1)), e;
    case 1:
      return (e = Qs(e.type, !0)), e;
    default:
      return "";
  }
}
function Uu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ai:
      return "Fragment";
    case oi:
      return "Portal";
    case $u:
      return "Profiler";
    case rd:
      return "StrictMode";
    case zu:
      return "Suspense";
    case Bu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tm:
        return (e.displayName || "Context") + ".Consumer";
      case _m:
        return (e._context.displayName || "Context") + ".Provider";
      case id:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case od:
        return (
          (t = e.displayName || null), t !== null ? t : Uu(e.type) || "Memo"
        );
      case Vn:
        (t = e._payload), (e = e._init);
        try {
          return Uu(e(t));
        } catch {}
    }
  return null;
}
function ty(e) {
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
      return Uu(t);
    case 8:
      return t === rd ? "StrictMode" : "Mode";
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
function or(e) {
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
function km(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ny(e) {
  var t = km(e) ? "checked" : "value",
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
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ga(e) {
  e._valueTracker || (e._valueTracker = ny(e));
}
function bm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = km(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function sl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Vu(e, t) {
  var n = t.checked;
  return Le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = or(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Pm(e, t) {
  (t = t.checked), t != null && nd(e, "checked", t, !1);
}
function Hu(e, t) {
  Pm(e, t);
  var n = or(t.value),
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
    ? Wu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Wu(e, t.type, or(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ff(e, t, n) {
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
function Wu(e, t, n) {
  (t !== "number" || sl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var so = Array.isArray;
function Si(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + or(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function qu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Df(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(F(92));
      if (so(n)) {
        if (1 < n.length) throw Error(F(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: or(n) };
}
function Nm(e, t) {
  var n = or(t.value),
    r = or(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function If(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Om(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Om(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var va,
  Rm = (function (e) {
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
        va = va || document.createElement("div"),
          va.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = va.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Po(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ho = {
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
  ry = ["Webkit", "ms", "Moz", "O"];
Object.keys(ho).forEach(function (e) {
  ry.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ho[t] = ho[e]);
  });
});
function Lm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ho.hasOwnProperty(e) && ho[e])
    ? ("" + t).trim()
    : t + "px";
}
function Am(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Lm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var iy = Le(
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
function Ku(e, t) {
  if (t) {
    if (iy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(F(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(F(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(F(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(F(62));
  }
}
function Qu(e, t) {
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
var Yu = null;
function ad(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xu = null,
  Ci = null,
  _i = null;
function $f(e) {
  if ((e = ea(e))) {
    if (typeof Xu != "function") throw Error(F(280));
    var t = e.stateNode;
    t && ((t = Wl(t)), Xu(e.stateNode, e.type, t));
  }
}
function Mm(e) {
  Ci ? (_i ? _i.push(e) : (_i = [e])) : (Ci = e);
}
function Fm() {
  if (Ci) {
    var e = Ci,
      t = _i;
    if (((_i = Ci = null), $f(e), t)) for (e = 0; e < t.length; e++) $f(t[e]);
  }
}
function Dm(e, t) {
  return e(t);
}
function Im() {}
var Ys = !1;
function $m(e, t, n) {
  if (Ys) return e(t, n);
  Ys = !0;
  try {
    return Dm(e, t, n);
  } finally {
    (Ys = !1), (Ci !== null || _i !== null) && (Im(), Fm());
  }
}
function No(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wl(n);
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
  if (n && typeof n != "function") throw Error(F(231, t, typeof n));
  return n;
}
var Zu = !1;
if (Pn)
  try {
    var Qi = {};
    Object.defineProperty(Qi, "passive", {
      get: function () {
        Zu = !0;
      },
    }),
      window.addEventListener("test", Qi, Qi),
      window.removeEventListener("test", Qi, Qi);
  } catch {
    Zu = !1;
  }
function oy(e, t, n, r, i, o, a, l, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var mo = !1,
  ul = null,
  cl = !1,
  Ju = null,
  ay = {
    onError: function (e) {
      (mo = !0), (ul = e);
    },
  };
function ly(e, t, n, r, i, o, a, l, s) {
  (mo = !1), (ul = null), oy.apply(ay, arguments);
}
function sy(e, t, n, r, i, o, a, l, s) {
  if ((ly.apply(this, arguments), mo)) {
    if (mo) {
      var c = ul;
      (mo = !1), (ul = null);
    } else throw Error(F(198));
    cl || ((cl = !0), (Ju = c));
  }
}
function Hr(e) {
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
function zm(e) {
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
function zf(e) {
  if (Hr(e) !== e) throw Error(F(188));
}
function uy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Hr(e)), t === null)) throw Error(F(188));
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
        if (o === n) return zf(i), e;
        if (o === r) return zf(i), t;
        o = o.sibling;
      }
      throw Error(F(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, l = i.child; l; ) {
        if (l === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = o.child; l; ) {
          if (l === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(F(189));
      }
    }
    if (n.alternate !== r) throw Error(F(190));
  }
  if (n.tag !== 3) throw Error(F(188));
  return n.stateNode.current === n ? e : t;
}
function Bm(e) {
  return (e = uy(e)), e !== null ? Um(e) : null;
}
function Um(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Um(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Vm = Nt.unstable_scheduleCallback,
  Bf = Nt.unstable_cancelCallback,
  cy = Nt.unstable_shouldYield,
  dy = Nt.unstable_requestPaint,
  $e = Nt.unstable_now,
  fy = Nt.unstable_getCurrentPriorityLevel,
  ld = Nt.unstable_ImmediatePriority,
  Hm = Nt.unstable_UserBlockingPriority,
  dl = Nt.unstable_NormalPriority,
  py = Nt.unstable_LowPriority,
  Wm = Nt.unstable_IdlePriority,
  Bl = null,
  hn = null;
function hy(e) {
  if (hn && typeof hn.onCommitFiberRoot == "function")
    try {
      hn.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var on = Math.clz32 ? Math.clz32 : vy,
  my = Math.log,
  gy = Math.LN2;
function vy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((my(e) / gy) | 0)) | 0;
}
var ya = 64,
  xa = 4194304;
function uo(e) {
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
function fl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~i;
    l !== 0 ? (r = uo(l)) : ((o &= a), o !== 0 && (r = uo(o)));
  } else (a = n & ~i), a !== 0 ? (r = uo(a)) : o !== 0 && (r = uo(o));
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
      (n = 31 - on(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function yy(e, t) {
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
function xy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - on(o),
      l = 1 << a,
      s = i[a];
    s === -1
      ? (!(l & n) || l & r) && (i[a] = yy(l, t))
      : s <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function ec(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qm() {
  var e = ya;
  return (ya <<= 1), !(ya & 4194240) && (ya = 64), e;
}
function Xs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - on(t)),
    (e[t] = n);
}
function wy(e, t) {
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
    var i = 31 - on(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function sd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - on(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ye = 0;
function Gm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Km,
  ud,
  Qm,
  Ym,
  Xm,
  tc = !1,
  wa = [],
  Yn = null,
  Xn = null,
  Zn = null,
  Oo = new Map(),
  Ro = new Map(),
  Wn = [],
  Ey =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Uf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      Xn = null;
      break;
    case "mouseover":
    case "mouseout":
      Zn = null;
      break;
    case "pointerover":
    case "pointerout":
      Oo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ro.delete(t.pointerId);
  }
}
function Yi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ea(t)), t !== null && ud(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Sy(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Yn = Yi(Yn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Xn = Yi(Xn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Zn = Yi(Zn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Oo.set(o, Yi(Oo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ro.set(o, Yi(Ro.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Zm(e) {
  var t = jr(e.target);
  if (t !== null) {
    var n = Hr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zm(n)), t !== null)) {
          (e.blockedOn = t),
            Xm(e.priority, function () {
              Qm(n);
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
function Ga(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = nc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Yu = r), n.target.dispatchEvent(r), (Yu = null);
    } else return (t = ea(n)), t !== null && ud(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Vf(e, t, n) {
  Ga(e) && n.delete(t);
}
function Cy() {
  (tc = !1),
    Yn !== null && Ga(Yn) && (Yn = null),
    Xn !== null && Ga(Xn) && (Xn = null),
    Zn !== null && Ga(Zn) && (Zn = null),
    Oo.forEach(Vf),
    Ro.forEach(Vf);
}
function Xi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tc ||
      ((tc = !0),
      Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, Cy)));
}
function Lo(e) {
  function t(i) {
    return Xi(i, e);
  }
  if (0 < wa.length) {
    Xi(wa[0], e);
    for (var n = 1; n < wa.length; n++) {
      var r = wa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yn !== null && Xi(Yn, e),
      Xn !== null && Xi(Xn, e),
      Zn !== null && Xi(Zn, e),
      Oo.forEach(t),
      Ro.forEach(t),
      n = 0;
    n < Wn.length;
    n++
  )
    (r = Wn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Wn.length && ((n = Wn[0]), n.blockedOn === null); )
    Zm(n), n.blockedOn === null && Wn.shift();
}
var Ti = Mn.ReactCurrentBatchConfig,
  pl = !0;
function _y(e, t, n, r) {
  var i = ye,
    o = Ti.transition;
  Ti.transition = null;
  try {
    (ye = 1), cd(e, t, n, r);
  } finally {
    (ye = i), (Ti.transition = o);
  }
}
function Ty(e, t, n, r) {
  var i = ye,
    o = Ti.transition;
  Ti.transition = null;
  try {
    (ye = 4), cd(e, t, n, r);
  } finally {
    (ye = i), (Ti.transition = o);
  }
}
function cd(e, t, n, r) {
  if (pl) {
    var i = nc(e, t, n, r);
    if (i === null) lu(e, t, r, hl, n), Uf(e, r);
    else if (Sy(i, e, t, n, r)) r.stopPropagation();
    else if ((Uf(e, r), t & 4 && -1 < Ey.indexOf(e))) {
      for (; i !== null; ) {
        var o = ea(i);
        if (
          (o !== null && Km(o),
          (o = nc(e, t, n, r)),
          o === null && lu(e, t, r, hl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else lu(e, t, r, null, n);
  }
}
var hl = null;
function nc(e, t, n, r) {
  if (((hl = null), (e = ad(r)), (e = jr(e)), e !== null))
    if (((t = Hr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (hl = e), null;
}
function Jm(e) {
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
      switch (fy()) {
        case ld:
          return 1;
        case Hm:
          return 4;
        case dl:
        case py:
          return 16;
        case Wm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Gn = null,
  dd = null,
  Ka = null;
function e0() {
  if (Ka) return Ka;
  var e,
    t = dd,
    n = t.length,
    r,
    i = "value" in Gn ? Gn.value : Gn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Ka = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Qa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ea() {
  return !0;
}
function Hf() {
  return !1;
}
function Rt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ea
        : Hf),
      (this.isPropagationStopped = Hf),
      this
    );
  }
  return (
    Le(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ea));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ea));
      },
      persist: function () {},
      isPersistent: Ea,
    }),
    t
  );
}
var Bi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  fd = Rt(Bi),
  Jo = Le({}, Bi, { view: 0, detail: 0 }),
  jy = Rt(Jo),
  Zs,
  Js,
  Zi,
  Ul = Le({}, Jo, {
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
    getModifierState: pd,
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
        : (e !== Zi &&
            (Zi && e.type === "mousemove"
              ? ((Zs = e.screenX - Zi.screenX), (Js = e.screenY - Zi.screenY))
              : (Js = Zs = 0),
            (Zi = e)),
          Zs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Js;
    },
  }),
  Wf = Rt(Ul),
  ky = Le({}, Ul, { dataTransfer: 0 }),
  by = Rt(ky),
  Py = Le({}, Jo, { relatedTarget: 0 }),
  eu = Rt(Py),
  Ny = Le({}, Bi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Oy = Rt(Ny),
  Ry = Le({}, Bi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ly = Rt(Ry),
  Ay = Le({}, Bi, { data: 0 }),
  qf = Rt(Ay),
  My = {
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
  Fy = {
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
  Dy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Iy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dy[e]) ? !!t[e] : !1;
}
function pd() {
  return Iy;
}
var $y = Le({}, Jo, {
    key: function (e) {
      if (e.key) {
        var t = My[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Fy[e.keyCode] || "Unidentified"
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
    getModifierState: pd,
    charCode: function (e) {
      return e.type === "keypress" ? Qa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  zy = Rt($y),
  By = Le({}, Ul, {
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
  Gf = Rt(By),
  Uy = Le({}, Jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pd,
  }),
  Vy = Rt(Uy),
  Hy = Le({}, Bi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wy = Rt(Hy),
  qy = Le({}, Ul, {
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
  Gy = Rt(qy),
  Ky = [9, 13, 27, 32],
  hd = Pn && "CompositionEvent" in window,
  go = null;
Pn && "documentMode" in document && (go = document.documentMode);
var Qy = Pn && "TextEvent" in window && !go,
  t0 = Pn && (!hd || (go && 8 < go && 11 >= go)),
  Kf = String.fromCharCode(32),
  Qf = !1;
function n0(e, t) {
  switch (e) {
    case "keyup":
      return Ky.indexOf(t.keyCode) !== -1;
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
function r0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var li = !1;
function Yy(e, t) {
  switch (e) {
    case "compositionend":
      return r0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qf = !0), Kf);
    case "textInput":
      return (e = t.data), e === Kf && Qf ? null : e;
    default:
      return null;
  }
}
function Xy(e, t) {
  if (li)
    return e === "compositionend" || (!hd && n0(e, t))
      ? ((e = e0()), (Ka = dd = Gn = null), (li = !1), e)
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
      return t0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zy = {
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
function Yf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zy[e.type] : t === "textarea";
}
function i0(e, t, n, r) {
  Mm(r),
    (t = ml(t, "onChange")),
    0 < t.length &&
      ((n = new fd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var vo = null,
  Ao = null;
function Jy(e) {
  m0(e, 0);
}
function Vl(e) {
  var t = ci(e);
  if (bm(t)) return e;
}
function e2(e, t) {
  if (e === "change") return t;
}
var o0 = !1;
if (Pn) {
  var tu;
  if (Pn) {
    var nu = "oninput" in document;
    if (!nu) {
      var Xf = document.createElement("div");
      Xf.setAttribute("oninput", "return;"),
        (nu = typeof Xf.oninput == "function");
    }
    tu = nu;
  } else tu = !1;
  o0 = tu && (!document.documentMode || 9 < document.documentMode);
}
function Zf() {
  vo && (vo.detachEvent("onpropertychange", a0), (Ao = vo = null));
}
function a0(e) {
  if (e.propertyName === "value" && Vl(Ao)) {
    var t = [];
    i0(t, Ao, e, ad(e)), $m(Jy, t);
  }
}
function t2(e, t, n) {
  e === "focusin"
    ? (Zf(), (vo = t), (Ao = n), vo.attachEvent("onpropertychange", a0))
    : e === "focusout" && Zf();
}
function n2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vl(Ao);
}
function r2(e, t) {
  if (e === "click") return Vl(t);
}
function i2(e, t) {
  if (e === "input" || e === "change") return Vl(t);
}
function o2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ln = typeof Object.is == "function" ? Object.is : o2;
function Mo(e, t) {
  if (ln(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Iu.call(t, i) || !ln(e[i], t[i])) return !1;
  }
  return !0;
}
function Jf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ep(e, t) {
  var n = Jf(e);
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
    n = Jf(n);
  }
}
function l0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? l0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function s0() {
  for (var e = window, t = sl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = sl(e.document);
  }
  return t;
}
function md(e) {
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
function a2(e) {
  var t = s0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    l0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && md(n)) {
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
          (i = ep(n, o));
        var a = ep(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
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
var l2 = Pn && "documentMode" in document && 11 >= document.documentMode,
  si = null,
  rc = null,
  yo = null,
  ic = !1;
function tp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ic ||
    si == null ||
    si !== sl(r) ||
    ((r = si),
    "selectionStart" in r && md(r)
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
    (yo && Mo(yo, r)) ||
      ((yo = r),
      (r = ml(rc, "onSelect")),
      0 < r.length &&
        ((t = new fd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = si))));
}
function Sa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ui = {
    animationend: Sa("Animation", "AnimationEnd"),
    animationiteration: Sa("Animation", "AnimationIteration"),
    animationstart: Sa("Animation", "AnimationStart"),
    transitionend: Sa("Transition", "TransitionEnd"),
  },
  ru = {},
  u0 = {};
Pn &&
  ((u0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ui.animationend.animation,
    delete ui.animationiteration.animation,
    delete ui.animationstart.animation),
  "TransitionEvent" in window || delete ui.transitionend.transition);
function Hl(e) {
  if (ru[e]) return ru[e];
  if (!ui[e]) return e;
  var t = ui[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in u0) return (ru[e] = t[n]);
  return e;
}
var c0 = Hl("animationend"),
  d0 = Hl("animationiteration"),
  f0 = Hl("animationstart"),
  p0 = Hl("transitionend"),
  h0 = new Map(),
  np =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function dr(e, t) {
  h0.set(e, t), Vr(t, [e]);
}
for (var iu = 0; iu < np.length; iu++) {
  var ou = np[iu],
    s2 = ou.toLowerCase(),
    u2 = ou[0].toUpperCase() + ou.slice(1);
  dr(s2, "on" + u2);
}
dr(c0, "onAnimationEnd");
dr(d0, "onAnimationIteration");
dr(f0, "onAnimationStart");
dr("dblclick", "onDoubleClick");
dr("focusin", "onFocus");
dr("focusout", "onBlur");
dr(p0, "onTransitionEnd");
Ni("onMouseEnter", ["mouseout", "mouseover"]);
Ni("onMouseLeave", ["mouseout", "mouseover"]);
Ni("onPointerEnter", ["pointerout", "pointerover"]);
Ni("onPointerLeave", ["pointerout", "pointerover"]);
Vr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Vr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Vr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Vr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var co =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  c2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
function rp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), sy(r, t, void 0, e), (e.currentTarget = null);
}
function m0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
          rp(i, l, c), (o = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          rp(i, l, c), (o = s);
        }
    }
  }
  if (cl) throw ((e = Ju), (cl = !1), (Ju = null), e);
}
function ke(e, t) {
  var n = t[uc];
  n === void 0 && (n = t[uc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (g0(t, e, 2, !1), n.add(r));
}
function au(e, t, n) {
  var r = 0;
  t && (r |= 4), g0(n, e, r, t);
}
var Ca = "_reactListening" + Math.random().toString(36).slice(2);
function Fo(e) {
  if (!e[Ca]) {
    (e[Ca] = !0),
      Cm.forEach(function (n) {
        n !== "selectionchange" && (c2.has(n) || au(n, !1, e), au(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ca] || ((t[Ca] = !0), au("selectionchange", !1, t));
  }
}
function g0(e, t, n, r) {
  switch (Jm(t)) {
    case 1:
      var i = _y;
      break;
    case 4:
      i = Ty;
      break;
    default:
      i = cd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Zu ||
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
function lu(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = jr(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = o = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  $m(function () {
    var c = o,
      d = ad(n),
      f = [];
    e: {
      var p = h0.get(e);
      if (p !== void 0) {
        var x = fd,
          y = e;
        switch (e) {
          case "keypress":
            if (Qa(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = zy;
            break;
          case "focusin":
            (y = "focus"), (x = eu);
            break;
          case "focusout":
            (y = "blur"), (x = eu);
            break;
          case "beforeblur":
          case "afterblur":
            x = eu;
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
            x = Wf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = by;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Vy;
            break;
          case c0:
          case d0:
          case f0:
            x = Oy;
            break;
          case p0:
            x = Wy;
            break;
          case "scroll":
            x = jy;
            break;
          case "wheel":
            x = Gy;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Ly;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Gf;
        }
        var v = (t & 4) !== 0,
          E = !v && e === "scroll",
          m = v ? (p !== null ? p + "Capture" : null) : p;
        v = [];
        for (var g = c, w; g !== null; ) {
          w = g;
          var h = w.stateNode;
          if (
            (w.tag === 5 &&
              h !== null &&
              ((w = h),
              m !== null && ((h = No(g, m)), h != null && v.push(Do(g, h, w)))),
            E)
          )
            break;
          g = g.return;
        }
        0 < v.length &&
          ((p = new x(p, y, null, n, d)), f.push({ event: p, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Yu &&
            (y = n.relatedTarget || n.fromElement) &&
            (jr(y) || y[Nn]))
        )
          break e;
        if (
          (x || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = c),
              (y = y ? jr(y) : null),
              y !== null &&
                ((E = Hr(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = c)),
          x !== y)
        ) {
          if (
            ((v = Wf),
            (h = "onMouseLeave"),
            (m = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Gf),
              (h = "onPointerLeave"),
              (m = "onPointerEnter"),
              (g = "pointer")),
            (E = x == null ? p : ci(x)),
            (w = y == null ? p : ci(y)),
            (p = new v(h, g + "leave", x, n, d)),
            (p.target = E),
            (p.relatedTarget = w),
            (h = null),
            jr(d) === c &&
              ((v = new v(m, g + "enter", y, n, d)),
              (v.target = w),
              (v.relatedTarget = E),
              (h = v)),
            (E = h),
            x && y)
          )
            t: {
              for (v = x, m = y, g = 0, w = v; w; w = ei(w)) g++;
              for (w = 0, h = m; h; h = ei(h)) w++;
              for (; 0 < g - w; ) (v = ei(v)), g--;
              for (; 0 < w - g; ) (m = ei(m)), w--;
              for (; g--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = ei(v)), (m = ei(m));
              }
              v = null;
            }
          else v = null;
          x !== null && ip(f, p, x, v, !1),
            y !== null && E !== null && ip(f, E, y, v, !0);
        }
      }
      e: {
        if (
          ((p = c ? ci(c) : window),
          (x = p.nodeName && p.nodeName.toLowerCase()),
          x === "select" || (x === "input" && p.type === "file"))
        )
          var C = e2;
        else if (Yf(p))
          if (o0) C = i2;
          else {
            C = n2;
            var P = t2;
          }
        else
          (x = p.nodeName) &&
            x.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = r2);
        if (C && (C = C(e, c))) {
          i0(f, C, n, d);
          break e;
        }
        P && P(e, p, c),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            Wu(p, "number", p.value);
      }
      switch (((P = c ? ci(c) : window), e)) {
        case "focusin":
          (Yf(P) || P.contentEditable === "true") &&
            ((si = P), (rc = c), (yo = null));
          break;
        case "focusout":
          yo = rc = si = null;
          break;
        case "mousedown":
          ic = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ic = !1), tp(f, n, d);
          break;
        case "selectionchange":
          if (l2) break;
        case "keydown":
        case "keyup":
          tp(f, n, d);
      }
      var k;
      if (hd)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        li
          ? n0(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M &&
        (t0 &&
          n.locale !== "ko" &&
          (li || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && li && (k = e0())
            : ((Gn = d),
              (dd = "value" in Gn ? Gn.value : Gn.textContent),
              (li = !0))),
        (P = ml(c, M)),
        0 < P.length &&
          ((M = new qf(M, e, null, n, d)),
          f.push({ event: M, listeners: P }),
          k ? (M.data = k) : ((k = r0(n)), k !== null && (M.data = k)))),
        (k = Qy ? Yy(e, n) : Xy(e, n)) &&
          ((c = ml(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new qf("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = k)));
    }
    m0(f, t);
  });
}
function Do(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = No(e, n)),
      o != null && r.unshift(Do(e, o, i)),
      (o = No(e, t)),
      o != null && r.push(Do(e, o, i))),
      (e = e.return);
  }
  return r;
}
function ei(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ip(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      c = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((s = No(n, o)), s != null && a.unshift(Do(n, s, l)))
        : i || ((s = No(n, o)), s != null && a.push(Do(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var d2 = /\r\n?/g,
  f2 = /\u0000|\uFFFD/g;
function op(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      d2,
      `
`
    )
    .replace(f2, "");
}
function _a(e, t, n) {
  if (((t = op(t)), op(e) !== t && n)) throw Error(F(425));
}
function gl() {}
var oc = null,
  ac = null;
function lc(e, t) {
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
var sc = typeof setTimeout == "function" ? setTimeout : void 0,
  p2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ap = typeof Promise == "function" ? Promise : void 0,
  h2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ap < "u"
      ? function (e) {
          return ap.resolve(null).then(e).catch(m2);
        }
      : sc;
function m2(e) {
  setTimeout(function () {
    throw e;
  });
}
function su(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Lo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Lo(t);
}
function Jn(e) {
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
function lp(e) {
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
var Ui = Math.random().toString(36).slice(2),
  fn = "__reactFiber$" + Ui,
  Io = "__reactProps$" + Ui,
  Nn = "__reactContainer$" + Ui,
  uc = "__reactEvents$" + Ui,
  g2 = "__reactListeners$" + Ui,
  v2 = "__reactHandles$" + Ui;
function jr(e) {
  var t = e[fn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nn] || n[fn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lp(e); e !== null; ) {
          if ((n = e[fn])) return n;
          e = lp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ea(e) {
  return (
    (e = e[fn] || e[Nn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(F(33));
}
function Wl(e) {
  return e[Io] || null;
}
var cc = [],
  di = -1;
function fr(e) {
  return { current: e };
}
function Pe(e) {
  0 > di || ((e.current = cc[di]), (cc[di] = null), di--);
}
function je(e, t) {
  di++, (cc[di] = e.current), (e.current = t);
}
var ar = {},
  ut = fr(ar),
  xt = fr(!1),
  Mr = ar;
function Oi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ar;
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
function wt(e) {
  return (e = e.childContextTypes), e != null;
}
function vl() {
  Pe(xt), Pe(ut);
}
function sp(e, t, n) {
  if (ut.current !== ar) throw Error(F(168));
  je(ut, t), je(xt, n);
}
function v0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(F(108, ty(e) || "Unknown", i));
  return Le({}, n, r);
}
function yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ar),
    (Mr = ut.current),
    je(ut, e),
    je(xt, xt.current),
    !0
  );
}
function up(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(F(169));
  n
    ? ((e = v0(e, t, Mr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Pe(xt),
      Pe(ut),
      je(ut, e))
    : Pe(xt),
    je(xt, n);
}
var Tn = null,
  ql = !1,
  uu = !1;
function y0(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function y2(e) {
  (ql = !0), y0(e);
}
function pr() {
  if (!uu && Tn !== null) {
    uu = !0;
    var e = 0,
      t = ye;
    try {
      var n = Tn;
      for (ye = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Tn = null), (ql = !1);
    } catch (i) {
      throw (Tn !== null && (Tn = Tn.slice(e + 1)), Vm(ld, pr), i);
    } finally {
      (ye = t), (uu = !1);
    }
  }
  return null;
}
var fi = [],
  pi = 0,
  xl = null,
  wl = 0,
  Bt = [],
  Ut = 0,
  Fr = null,
  jn = 1,
  kn = "";
function wr(e, t) {
  (fi[pi++] = wl), (fi[pi++] = xl), (xl = e), (wl = t);
}
function x0(e, t, n) {
  (Bt[Ut++] = jn), (Bt[Ut++] = kn), (Bt[Ut++] = Fr), (Fr = e);
  var r = jn;
  e = kn;
  var i = 32 - on(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - on(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (jn = (1 << (32 - on(t) + i)) | (n << i) | r),
      (kn = o + e);
  } else (jn = (1 << o) | (n << i) | r), (kn = e);
}
function gd(e) {
  e.return !== null && (wr(e, 1), x0(e, 1, 0));
}
function vd(e) {
  for (; e === xl; )
    (xl = fi[--pi]), (fi[pi] = null), (wl = fi[--pi]), (fi[pi] = null);
  for (; e === Fr; )
    (Fr = Bt[--Ut]),
      (Bt[Ut] = null),
      (kn = Bt[--Ut]),
      (Bt[Ut] = null),
      (jn = Bt[--Ut]),
      (Bt[Ut] = null);
}
var Pt = null,
  bt = null,
  Ne = !1,
  nn = null;
function w0(e, t) {
  var n = Vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Pt = e), (bt = Jn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Pt = e), (bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fr !== null ? { id: jn, overflow: kn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Vt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Pt = e),
            (bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function dc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fc(e) {
  if (Ne) {
    var t = bt;
    if (t) {
      var n = t;
      if (!cp(e, t)) {
        if (dc(e)) throw Error(F(418));
        t = Jn(n.nextSibling);
        var r = Pt;
        t && cp(e, t)
          ? w0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ne = !1), (Pt = e));
      }
    } else {
      if (dc(e)) throw Error(F(418));
      (e.flags = (e.flags & -4097) | 2), (Ne = !1), (Pt = e);
    }
  }
}
function dp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Pt = e;
}
function Ta(e) {
  if (e !== Pt) return !1;
  if (!Ne) return dp(e), (Ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lc(e.type, e.memoizedProps))),
    t && (t = bt))
  ) {
    if (dc(e)) throw (E0(), Error(F(418)));
    for (; t; ) w0(e, t), (t = Jn(t.nextSibling));
  }
  if ((dp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(F(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              bt = Jn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      bt = null;
    }
  } else bt = Pt ? Jn(e.stateNode.nextSibling) : null;
  return !0;
}
function E0() {
  for (var e = bt; e; ) e = Jn(e.nextSibling);
}
function Ri() {
  (bt = Pt = null), (Ne = !1);
}
function yd(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
var x2 = Mn.ReactCurrentBatchConfig;
function Jt(e, t) {
  if (e && e.defaultProps) {
    (t = Le({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var El = fr(null),
  Sl = null,
  hi = null,
  xd = null;
function wd() {
  xd = hi = Sl = null;
}
function Ed(e) {
  var t = El.current;
  Pe(El), (e._currentValue = t);
}
function pc(e, t, n) {
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
function ji(e, t) {
  (Sl = e),
    (xd = hi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (vt = !0), (e.firstContext = null));
}
function Wt(e) {
  var t = e._currentValue;
  if (xd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hi === null)) {
      if (Sl === null) throw Error(F(308));
      (hi = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else hi = hi.next = e;
  return t;
}
var kr = null;
function Sd(e) {
  kr === null ? (kr = [e]) : kr.push(e);
}
function S0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Sd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    On(e, r)
  );
}
function On(e, t) {
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
var Hn = !1;
function Cd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function C0(e, t) {
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
function bn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function er(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), pe & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      On(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Sd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    On(e, n)
  );
}
function Ya(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sd(e, n);
  }
}
function fp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
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
function Cl(e, t, n, r) {
  var i = e.updateQueue;
  Hn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      c = s.next;
    (s.next = null), a === null ? (o = c) : (a.next = c), (a = s);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== a &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
        (d.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = i.baseState;
    (a = 0), (d = c = s = null), (l = o);
    do {
      var p = l.lane,
        x = l.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: x,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((p = t), (x = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(x, f, p);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (p = typeof y == "function" ? y.call(x, f, p) : y),
                p == null)
              )
                break e;
              f = Le({}, f, p);
              break e;
            case 2:
              Hn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (x = {
          eventTime: x,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = x), (s = f)) : (d = d.next = x),
          (a |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (d === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ir |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function pp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(F(191, i));
        i.call(r);
      }
    }
}
var _0 = new Sm.Component().refs;
function hc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Le({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Gl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Hr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      i = nr(e),
      o = bn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = er(e, o, i)),
      t !== null && (an(t, e, i, r), Ya(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      i = nr(e),
      o = bn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = er(e, o, i)),
      t !== null && (an(t, e, i, r), Ya(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = dt(),
      r = nr(e),
      i = bn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = er(e, i, r)),
      t !== null && (an(t, e, r, n), Ya(t, e, r));
  },
};
function hp(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Mo(n, r) || !Mo(i, o)
      : !0
  );
}
function T0(e, t, n) {
  var r = !1,
    i = ar,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Wt(o))
      : ((i = wt(t) ? Mr : ut.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Oi(e, i) : ar)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Gl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function mp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Gl.enqueueReplaceState(t, t.state, null);
}
function mc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = _0), Cd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Wt(o))
    : ((o = wt(t) ? Mr : ut.current), (i.context = Oi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (hc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Gl.enqueueReplaceState(i, i.state, null),
      Cl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ji(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(F(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(F(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var l = i.refs;
            l === _0 && (l = i.refs = {}),
              a === null ? delete l[o] : (l[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(F(284));
    if (!n._owner) throw Error(F(290, e));
  }
  return e;
}
function ja(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      F(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gp(e) {
  var t = e._init;
  return t(e._payload);
}
function j0(e) {
  function t(m, g) {
    if (e) {
      var w = m.deletions;
      w === null ? ((m.deletions = [g]), (m.flags |= 16)) : w.push(g);
    }
  }
  function n(m, g) {
    if (!e) return null;
    for (; g !== null; ) t(m, g), (g = g.sibling);
    return null;
  }
  function r(m, g) {
    for (m = new Map(); g !== null; )
      g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling);
    return m;
  }
  function i(m, g) {
    return (m = rr(m, g)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, g, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null
            ? ((w = w.index), w < g ? ((m.flags |= 2), g) : w)
            : ((m.flags |= 2), g))
        : ((m.flags |= 1048576), g)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, g, w, h) {
    return g === null || g.tag !== 6
      ? ((g = gu(w, m.mode, h)), (g.return = m), g)
      : ((g = i(g, w)), (g.return = m), g);
  }
  function s(m, g, w, h) {
    var C = w.type;
    return C === ai
      ? d(m, g, w.props.children, h, w.key)
      : g !== null &&
        (g.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Vn &&
            gp(C) === g.type))
      ? ((h = i(g, w.props)), (h.ref = Ji(m, g, w)), (h.return = m), h)
      : ((h = nl(w.type, w.key, w.props, null, m.mode, h)),
        (h.ref = Ji(m, g, w)),
        (h.return = m),
        h);
  }
  function c(m, g, w, h) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== w.containerInfo ||
      g.stateNode.implementation !== w.implementation
      ? ((g = vu(w, m.mode, h)), (g.return = m), g)
      : ((g = i(g, w.children || [])), (g.return = m), g);
  }
  function d(m, g, w, h, C) {
    return g === null || g.tag !== 7
      ? ((g = Rr(w, m.mode, h, C)), (g.return = m), g)
      : ((g = i(g, w)), (g.return = m), g);
  }
  function f(m, g, w) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = gu("" + g, m.mode, w)), (g.return = m), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ma:
          return (
            (w = nl(g.type, g.key, g.props, null, m.mode, w)),
            (w.ref = Ji(m, null, g)),
            (w.return = m),
            w
          );
        case oi:
          return (g = vu(g, m.mode, w)), (g.return = m), g;
        case Vn:
          var h = g._init;
          return f(m, h(g._payload), w);
      }
      if (so(g) || Ki(g))
        return (g = Rr(g, m.mode, w, null)), (g.return = m), g;
      ja(m, g);
    }
    return null;
  }
  function p(m, g, w, h) {
    var C = g !== null ? g.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return C !== null ? null : l(m, g, "" + w, h);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ma:
          return w.key === C ? s(m, g, w, h) : null;
        case oi:
          return w.key === C ? c(m, g, w, h) : null;
        case Vn:
          return (C = w._init), p(m, g, C(w._payload), h);
      }
      if (so(w) || Ki(w)) return C !== null ? null : d(m, g, w, h, null);
      ja(m, w);
    }
    return null;
  }
  function x(m, g, w, h, C) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (m = m.get(w) || null), l(g, m, "" + h, C);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ma:
          return (m = m.get(h.key === null ? w : h.key) || null), s(g, m, h, C);
        case oi:
          return (m = m.get(h.key === null ? w : h.key) || null), c(g, m, h, C);
        case Vn:
          var P = h._init;
          return x(m, g, w, P(h._payload), C);
      }
      if (so(h) || Ki(h)) return (m = m.get(w) || null), d(g, m, h, C, null);
      ja(g, h);
    }
    return null;
  }
  function y(m, g, w, h) {
    for (
      var C = null, P = null, k = g, M = (g = 0), U = null;
      k !== null && M < w.length;
      M++
    ) {
      k.index > M ? ((U = k), (k = null)) : (U = k.sibling);
      var I = p(m, k, w[M], h);
      if (I === null) {
        k === null && (k = U);
        break;
      }
      e && k && I.alternate === null && t(m, k),
        (g = o(I, g, M)),
        P === null ? (C = I) : (P.sibling = I),
        (P = I),
        (k = U);
    }
    if (M === w.length) return n(m, k), Ne && wr(m, M), C;
    if (k === null) {
      for (; M < w.length; M++)
        (k = f(m, w[M], h)),
          k !== null &&
            ((g = o(k, g, M)), P === null ? (C = k) : (P.sibling = k), (P = k));
      return Ne && wr(m, M), C;
    }
    for (k = r(m, k); M < w.length; M++)
      (U = x(k, m, M, w[M], h)),
        U !== null &&
          (e && U.alternate !== null && k.delete(U.key === null ? M : U.key),
          (g = o(U, g, M)),
          P === null ? (C = U) : (P.sibling = U),
          (P = U));
    return (
      e &&
        k.forEach(function (oe) {
          return t(m, oe);
        }),
      Ne && wr(m, M),
      C
    );
  }
  function v(m, g, w, h) {
    var C = Ki(w);
    if (typeof C != "function") throw Error(F(150));
    if (((w = C.call(w)), w == null)) throw Error(F(151));
    for (
      var P = (C = null), k = g, M = (g = 0), U = null, I = w.next();
      k !== null && !I.done;
      M++, I = w.next()
    ) {
      k.index > M ? ((U = k), (k = null)) : (U = k.sibling);
      var oe = p(m, k, I.value, h);
      if (oe === null) {
        k === null && (k = U);
        break;
      }
      e && k && oe.alternate === null && t(m, k),
        (g = o(oe, g, M)),
        P === null ? (C = oe) : (P.sibling = oe),
        (P = oe),
        (k = U);
    }
    if (I.done) return n(m, k), Ne && wr(m, M), C;
    if (k === null) {
      for (; !I.done; M++, I = w.next())
        (I = f(m, I.value, h)),
          I !== null &&
            ((g = o(I, g, M)), P === null ? (C = I) : (P.sibling = I), (P = I));
      return Ne && wr(m, M), C;
    }
    for (k = r(m, k); !I.done; M++, I = w.next())
      (I = x(k, m, M, I.value, h)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? M : I.key),
          (g = o(I, g, M)),
          P === null ? (C = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        k.forEach(function (R) {
          return t(m, R);
        }),
      Ne && wr(m, M),
      C
    );
  }
  function E(m, g, w, h) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === ai &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case ma:
          e: {
            for (var C = w.key, P = g; P !== null; ) {
              if (P.key === C) {
                if (((C = w.type), C === ai)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (g = i(P, w.props.children)),
                      (g.return = m),
                      (m = g);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Vn &&
                    gp(C) === P.type)
                ) {
                  n(m, P.sibling),
                    (g = i(P, w.props)),
                    (g.ref = Ji(m, P, w)),
                    (g.return = m),
                    (m = g);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            w.type === ai
              ? ((g = Rr(w.props.children, m.mode, h, w.key)),
                (g.return = m),
                (m = g))
              : ((h = nl(w.type, w.key, w.props, null, m.mode, h)),
                (h.ref = Ji(m, g, w)),
                (h.return = m),
                (m = h));
          }
          return a(m);
        case oi:
          e: {
            for (P = w.key; g !== null; ) {
              if (g.key === P)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === w.containerInfo &&
                  g.stateNode.implementation === w.implementation
                ) {
                  n(m, g.sibling),
                    (g = i(g, w.children || [])),
                    (g.return = m),
                    (m = g);
                  break e;
                } else {
                  n(m, g);
                  break;
                }
              else t(m, g);
              g = g.sibling;
            }
            (g = vu(w, m.mode, h)), (g.return = m), (m = g);
          }
          return a(m);
        case Vn:
          return (P = w._init), E(m, g, P(w._payload), h);
      }
      if (so(w)) return y(m, g, w, h);
      if (Ki(w)) return v(m, g, w, h);
      ja(m, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        g !== null && g.tag === 6
          ? (n(m, g.sibling), (g = i(g, w)), (g.return = m), (m = g))
          : (n(m, g), (g = gu(w, m.mode, h)), (g.return = m), (m = g)),
        a(m))
      : n(m, g);
  }
  return E;
}
var Li = j0(!0),
  k0 = j0(!1),
  ta = {},
  mn = fr(ta),
  $o = fr(ta),
  zo = fr(ta);
function br(e) {
  if (e === ta) throw Error(F(174));
  return e;
}
function _d(e, t) {
  switch ((je(zo, t), je($o, e), je(mn, ta), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gu(t, e));
  }
  Pe(mn), je(mn, t);
}
function Ai() {
  Pe(mn), Pe($o), Pe(zo);
}
function b0(e) {
  br(zo.current);
  var t = br(mn.current),
    n = Gu(t, e.type);
  t !== n && (je($o, e), je(mn, n));
}
function Td(e) {
  $o.current === e && (Pe(mn), Pe($o));
}
var Oe = fr(0);
function _l(e) {
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
var cu = [];
function jd() {
  for (var e = 0; e < cu.length; e++)
    cu[e]._workInProgressVersionPrimary = null;
  cu.length = 0;
}
var Xa = Mn.ReactCurrentDispatcher,
  du = Mn.ReactCurrentBatchConfig,
  Dr = 0,
  Re = null,
  qe = null,
  Xe = null,
  Tl = !1,
  xo = !1,
  Bo = 0,
  w2 = 0;
function at() {
  throw Error(F(321));
}
function kd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ln(e[n], t[n])) return !1;
  return !0;
}
function bd(e, t, n, r, i, o) {
  if (
    ((Dr = o),
    (Re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xa.current = e === null || e.memoizedState === null ? _2 : T2),
    (e = n(r, i)),
    xo)
  ) {
    o = 0;
    do {
      if (((xo = !1), (Bo = 0), 25 <= o)) throw Error(F(301));
      (o += 1),
        (Xe = qe = null),
        (t.updateQueue = null),
        (Xa.current = j2),
        (e = n(r, i));
    } while (xo);
  }
  if (
    ((Xa.current = jl),
    (t = qe !== null && qe.next !== null),
    (Dr = 0),
    (Xe = qe = Re = null),
    (Tl = !1),
    t)
  )
    throw Error(F(300));
  return e;
}
function Pd() {
  var e = Bo !== 0;
  return (Bo = 0), e;
}
function dn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Xe === null ? (Re.memoizedState = Xe = e) : (Xe = Xe.next = e), Xe;
}
function qt() {
  if (qe === null) {
    var e = Re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = qe.next;
  var t = Xe === null ? Re.memoizedState : Xe.next;
  if (t !== null) (Xe = t), (qe = e);
  else {
    if (e === null) throw Error(F(310));
    (qe = e),
      (e = {
        memoizedState: qe.memoizedState,
        baseState: qe.baseState,
        baseQueue: qe.baseQueue,
        queue: qe.queue,
        next: null,
      }),
      Xe === null ? (Re.memoizedState = Xe = e) : (Xe = Xe.next = e);
  }
  return Xe;
}
function Uo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fu(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = qe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      c = o;
    do {
      var d = c.lane;
      if ((Dr & d) === d)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((l = s = f), (a = r)) : (s = s.next = f),
          (Re.lanes |= d),
          (Ir |= d);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (a = r) : (s.next = l),
      ln(r, t.memoizedState) || (vt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Re.lanes |= o), (Ir |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pu(e) {
  var t = qt(),
    n = t.queue;
  if (n === null) throw Error(F(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    ln(o, t.memoizedState) || (vt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function P0() {}
function N0(e, t) {
  var n = Re,
    r = qt(),
    i = t(),
    o = !ln(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (vt = !0)),
    (r = r.queue),
    Nd(L0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Xe !== null && Xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vo(9, R0.bind(null, n, r, i, t), void 0, null),
      Ze === null)
    )
      throw Error(F(349));
    Dr & 30 || O0(n, t, i);
  }
  return i;
}
function O0(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function R0(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), A0(t) && M0(e);
}
function L0(e, t, n) {
  return n(function () {
    A0(t) && M0(e);
  });
}
function A0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ln(e, n);
  } catch {
    return !0;
  }
}
function M0(e) {
  var t = On(e, 1);
  t !== null && an(t, e, 1, -1);
}
function vp(e) {
  var t = dn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Uo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = C2.bind(null, Re, e)),
    [t.memoizedState, e]
  );
}
function Vo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Re.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Re.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function F0() {
  return qt().memoizedState;
}
function Za(e, t, n, r) {
  var i = dn();
  (Re.flags |= e),
    (i.memoizedState = Vo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Kl(e, t, n, r) {
  var i = qt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (qe !== null) {
    var a = qe.memoizedState;
    if (((o = a.destroy), r !== null && kd(r, a.deps))) {
      i.memoizedState = Vo(t, n, o, r);
      return;
    }
  }
  (Re.flags |= e), (i.memoizedState = Vo(1 | t, n, o, r));
}
function yp(e, t) {
  return Za(8390656, 8, e, t);
}
function Nd(e, t) {
  return Kl(2048, 8, e, t);
}
function D0(e, t) {
  return Kl(4, 2, e, t);
}
function I0(e, t) {
  return Kl(4, 4, e, t);
}
function $0(e, t) {
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
function z0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Kl(4, 4, $0.bind(null, t, e), n)
  );
}
function Od() {}
function B0(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function U0(e, t) {
  var n = qt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && kd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function V0(e, t, n) {
  return Dr & 21
    ? (ln(n, t) || ((n = qm()), (Re.lanes |= n), (Ir |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (vt = !0)), (e.memoizedState = n));
}
function E2(e, t) {
  var n = ye;
  (ye = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = du.transition;
  du.transition = {};
  try {
    e(!1), t();
  } finally {
    (ye = n), (du.transition = r);
  }
}
function H0() {
  return qt().memoizedState;
}
function S2(e, t, n) {
  var r = nr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    W0(e))
  )
    q0(t, n);
  else if (((n = S0(e, t, n, r)), n !== null)) {
    var i = dt();
    an(n, e, r, i), G0(n, t, r);
  }
}
function C2(e, t, n) {
  var r = nr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (W0(e)) q0(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), ln(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Sd(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = S0(e, t, i, r)),
      n !== null && ((i = dt()), an(n, e, r, i), G0(n, t, r));
  }
}
function W0(e) {
  var t = e.alternate;
  return e === Re || (t !== null && t === Re);
}
function q0(e, t) {
  xo = Tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function G0(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), sd(e, n);
  }
}
var jl = {
    readContext: Wt,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useInsertionEffect: at,
    useLayoutEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useMutableSource: at,
    useSyncExternalStore: at,
    useId: at,
    unstable_isNewReconciler: !1,
  },
  _2 = {
    readContext: Wt,
    useCallback: function (e, t) {
      return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Wt,
    useEffect: yp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Za(4194308, 4, $0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Za(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Za(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dn();
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
        (e = e.dispatch = S2.bind(null, Re, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: vp,
    useDebugValue: Od,
    useDeferredValue: function (e) {
      return (dn().memoizedState = e);
    },
    useTransition: function () {
      var e = vp(!1),
        t = e[0];
      return (e = E2.bind(null, e[1])), (dn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Re,
        i = dn();
      if (Ne) {
        if (n === void 0) throw Error(F(407));
        n = n();
      } else {
        if (((n = t()), Ze === null)) throw Error(F(349));
        Dr & 30 || O0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        yp(L0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Vo(9, R0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dn(),
        t = Ze.identifierPrefix;
      if (Ne) {
        var n = kn,
          r = jn;
        (n = (r & ~(1 << (32 - on(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = w2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  T2 = {
    readContext: Wt,
    useCallback: B0,
    useContext: Wt,
    useEffect: Nd,
    useImperativeHandle: z0,
    useInsertionEffect: D0,
    useLayoutEffect: I0,
    useMemo: U0,
    useReducer: fu,
    useRef: F0,
    useState: function () {
      return fu(Uo);
    },
    useDebugValue: Od,
    useDeferredValue: function (e) {
      var t = qt();
      return V0(t, qe.memoizedState, e);
    },
    useTransition: function () {
      var e = fu(Uo)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: P0,
    useSyncExternalStore: N0,
    useId: H0,
    unstable_isNewReconciler: !1,
  },
  j2 = {
    readContext: Wt,
    useCallback: B0,
    useContext: Wt,
    useEffect: Nd,
    useImperativeHandle: z0,
    useInsertionEffect: D0,
    useLayoutEffect: I0,
    useMemo: U0,
    useReducer: pu,
    useRef: F0,
    useState: function () {
      return pu(Uo);
    },
    useDebugValue: Od,
    useDeferredValue: function (e) {
      var t = qt();
      return qe === null ? (t.memoizedState = e) : V0(t, qe.memoizedState, e);
    },
    useTransition: function () {
      var e = pu(Uo)[0],
        t = qt().memoizedState;
      return [e, t];
    },
    useMutableSource: P0,
    useSyncExternalStore: N0,
    useId: H0,
    unstable_isNewReconciler: !1,
  };
function Mi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ey(r)), (r = r.return);
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
function hu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var k2 = typeof WeakMap == "function" ? WeakMap : Map;
function K0(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bl || ((bl = !0), (jc = r)), gc(e, t);
    }),
    n
  );
}
function Q0(e, t, n) {
  (n = bn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        gc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        gc(e, t),
          typeof r != "function" &&
            (tr === null ? (tr = new Set([this])) : tr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function xp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new k2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = B2.bind(null, e, t, n)), t.then(e, e));
}
function wp(e) {
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
function Ep(e, t, n, r, i) {
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
              : ((t = bn(-1, 1)), (t.tag = 2), er(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var b2 = Mn.ReactCurrentOwner,
  vt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? k0(t, null, n, r) : Li(t, e.child, n, r);
}
function Sp(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ji(t, i),
    (r = bd(e, t, n, r, o, i)),
    (n = Pd()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rn(e, t, i))
      : (Ne && n && gd(t), (t.flags |= 1), ct(e, t, r, i), t.child)
  );
}
function Cp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !$d(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Y0(e, t, o, r, i))
      : ((e = nl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Mo), n(a, r) && e.ref === t.ref)
    )
      return Rn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = rr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Y0(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Mo(o, r) && e.ref === t.ref)
      if (((vt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (vt = !0);
      else return (t.lanes = e.lanes), Rn(e, t, i);
  }
  return vc(e, t, n, r, i);
}
function X0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        je(gi, jt),
        (jt |= n);
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
          je(gi, jt),
          (jt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        je(gi, jt),
        (jt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      je(gi, jt),
      (jt |= r);
  return ct(e, t, i, n), t.child;
}
function Z0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vc(e, t, n, r, i) {
  var o = wt(n) ? Mr : ut.current;
  return (
    (o = Oi(t, o)),
    ji(t, i),
    (n = bd(e, t, n, r, o, i)),
    (r = Pd()),
    e !== null && !vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rn(e, t, i))
      : (Ne && r && gd(t), (t.flags |= 1), ct(e, t, n, i), t.child)
  );
}
function _p(e, t, n, r, i) {
  if (wt(n)) {
    var o = !0;
    yl(t);
  } else o = !1;
  if ((ji(t, i), t.stateNode === null))
    Ja(e, t), T0(t, n, r), mc(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Wt(c))
      : ((c = wt(n) ? Mr : ut.current), (c = Oi(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== c) && mp(t, a, r, c)),
      (Hn = !1);
    var p = t.memoizedState;
    (a.state = p),
      Cl(t, r, a, i),
      (s = t.memoizedState),
      l !== r || p !== s || xt.current || Hn
        ? (typeof d == "function" && (hc(t, n, d, r), (s = t.memoizedState)),
          (l = Hn || hp(t, n, l, r, p, s, c))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = c),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      C0(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Jt(t.type, l)),
      (a.props = c),
      (f = t.pendingProps),
      (p = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Wt(s))
        : ((s = wt(n) ? Mr : ut.current), (s = Oi(t, s)));
    var x = n.getDerivedStateFromProps;
    (d =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== f || p !== s) && mp(t, a, r, s)),
      (Hn = !1),
      (p = t.memoizedState),
      (a.state = p),
      Cl(t, r, a, i);
    var y = t.memoizedState;
    l !== f || p !== y || xt.current || Hn
      ? (typeof x == "function" && (hc(t, n, x, r), (y = t.memoizedState)),
        (c = Hn || hp(t, n, c, r, p, y, s) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = s),
        (r = c))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yc(e, t, n, r, o, i);
}
function yc(e, t, n, r, i, o) {
  Z0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && up(t, n, !1), Rn(e, t, o);
  (r = t.stateNode), (b2.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Li(t, e.child, null, o)), (t.child = Li(t, null, l, o)))
      : ct(e, t, l, o),
    (t.memoizedState = r.state),
    i && up(t, n, !0),
    t.child
  );
}
function J0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sp(e, t.context, !1),
    _d(e, t.containerInfo);
}
function Tp(e, t, n, r, i) {
  return Ri(), yd(i), (t.flags |= 256), ct(e, t, n, r), t.child;
}
var xc = { dehydrated: null, treeContext: null, retryLane: 0 };
function wc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function eg(e, t, n) {
  var r = t.pendingProps,
    i = Oe.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    je(Oe, i & 1),
    e === null)
  )
    return (
      fc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = Xl(a, r, 0, null)),
              (e = Rr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = wc(n)),
              (t.memoizedState = xc),
              e)
            : Rd(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return P2(e, t, a, r, l, i, n);
  if (o) {
    (o = r.fallback), (a = t.mode), (i = e.child), (l = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = rr(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = rr(l, o)) : ((o = Rr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? wc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = xc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = rr(o, { mode: "visible", children: r.children })),
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
function Rd(e, t) {
  return (
    (t = Xl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ka(e, t, n, r) {
  return (
    r !== null && yd(r),
    Li(t, e.child, null, n),
    (e = Rd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function P2(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hu(Error(F(422)))), ka(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Xl({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Rr(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Li(t, e.child, null, a),
        (t.child.memoizedState = wc(a)),
        (t.memoizedState = xc),
        o);
  if (!(t.mode & 1)) return ka(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(F(419))), (r = hu(o, r, void 0)), ka(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), vt || l)) {
    if (((r = Ze), r !== null)) {
      switch (a & -a) {
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
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), On(e, i), an(r, e, i, -1));
    }
    return Id(), (r = hu(Error(F(421)))), ka(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = U2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (bt = Jn(i.nextSibling)),
      (Pt = t),
      (Ne = !0),
      (nn = null),
      e !== null &&
        ((Bt[Ut++] = jn),
        (Bt[Ut++] = kn),
        (Bt[Ut++] = Fr),
        (jn = e.id),
        (kn = e.overflow),
        (Fr = t)),
      (t = Rd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function jp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pc(e.return, t, n);
}
function mu(e, t, n, r, i) {
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
function tg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ct(e, t, r.children, n), (r = Oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jp(e, n, t);
        else if (e.tag === 19) jp(e, n, t);
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
  if ((je(Oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && _l(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          mu(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && _l(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        mu(t, !0, n, null, o);
        break;
      case "together":
        mu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ja(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ir |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(F(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function N2(e, t, n) {
  switch (t.tag) {
    case 3:
      J0(t), Ri();
      break;
    case 5:
      b0(t);
      break;
    case 1:
      wt(t.type) && yl(t);
      break;
    case 4:
      _d(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      je(El, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (je(Oe, Oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? eg(e, t, n)
          : (je(Oe, Oe.current & 1),
            (e = Rn(e, t, n)),
            e !== null ? e.sibling : null);
      je(Oe, Oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return tg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        je(Oe, Oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), X0(e, t, n);
  }
  return Rn(e, t, n);
}
var ng, Ec, rg, ig;
ng = function (e, t) {
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
Ec = function () {};
rg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), br(mn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Vu(e, i)), (r = Vu(e, r)), (o = []);
        break;
      case "select":
        (i = Le({}, i, { value: void 0 })),
          (r = Le({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = qu(e, i)), (r = qu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gl);
    }
    Ku(n, r);
    var a;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (bo.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && s !== l && (s != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (bo.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && ke("scroll", e),
                  o || l === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ig = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function eo(e, t) {
  if (!Ne)
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
function lt(e) {
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
function O2(e, t, n) {
  var r = t.pendingProps;
  switch ((vd(t), t.tag)) {
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
      return lt(t), null;
    case 1:
      return wt(t.type) && vl(), lt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ai(),
        Pe(xt),
        Pe(ut),
        jd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ta(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nn !== null && (Pc(nn), (nn = null)))),
        Ec(e, t),
        lt(t),
        null
      );
    case 5:
      Td(t);
      var i = br(zo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        rg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(F(166));
          return lt(t), null;
        }
        if (((e = br(mn.current)), Ta(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[fn] = t), (r[Io] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < co.length; i++) ke(co[i], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke("error", r), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              Mf(r, o), ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ke("invalid", r);
              break;
            case "textarea":
              Df(r, o), ke("invalid", r);
          }
          Ku(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var l = o[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      _a(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      _a(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : bo.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              ga(r), Ff(r, o, !0);
              break;
            case "textarea":
              ga(r), If(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = gl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Om(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[fn] = t),
            (e[Io] = r),
            ng(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Qu(n, r)), n)) {
              case "dialog":
                ke("cancel", e), ke("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < co.length; i++) ke(co[i], e);
                i = r;
                break;
              case "source":
                ke("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", e), ke("load", e), (i = r);
                break;
              case "details":
                ke("toggle", e), (i = r);
                break;
              case "input":
                Mf(e, r), (i = Vu(e, r)), ke("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Le({}, r, { value: void 0 })),
                  ke("invalid", e);
                break;
              case "textarea":
                Df(e, r), (i = qu(e, r)), ke("invalid", e);
                break;
              default:
                i = r;
            }
            Ku(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var s = l[o];
                o === "style"
                  ? Am(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Rm(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Po(e, s)
                    : typeof s == "number" && Po(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (bo.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && ke("scroll", e)
                      : s != null && nd(e, o, s, a));
              }
            switch (n) {
              case "input":
                ga(e), Ff(e, r, !1);
                break;
              case "textarea":
                ga(e), If(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + or(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Si(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Si(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = gl);
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
      return lt(t), null;
    case 6:
      if (e && t.stateNode != null) ig(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(F(166));
        if (((n = br(zo.current)), br(mn.current), Ta(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[fn] = t),
            (o = r.nodeValue !== n) && ((e = Pt), e !== null))
          )
            switch (e.tag) {
              case 3:
                _a(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _a(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[fn] = t),
            (t.stateNode = r);
      }
      return lt(t), null;
    case 13:
      if (
        (Pe(Oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ne && bt !== null && t.mode & 1 && !(t.flags & 128))
          E0(), Ri(), (t.flags |= 98560), (o = !1);
        else if (((o = Ta(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(F(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(F(317));
            o[fn] = t;
          } else
            Ri(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          lt(t), (o = !1);
        } else nn !== null && (Pc(nn), (nn = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Oe.current & 1 ? Ge === 0 && (Ge = 3) : Id())),
          t.updateQueue !== null && (t.flags |= 4),
          lt(t),
          null);
    case 4:
      return (
        Ai(), Ec(e, t), e === null && Fo(t.stateNode.containerInfo), lt(t), null
      );
    case 10:
      return Ed(t.type._context), lt(t), null;
    case 17:
      return wt(t.type) && vl(), lt(t), null;
    case 19:
      if ((Pe(Oe), (o = t.memoizedState), o === null)) return lt(t), null;
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) eo(o, !1);
        else {
          if (Ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = _l(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    eo(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return je(Oe, (Oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            $e() > Fi &&
            ((t.flags |= 128), (r = !0), eo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _l(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              eo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !Ne)
            )
              return lt(t), null;
          } else
            2 * $e() - o.renderingStartTime > Fi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), eo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = $e()),
          (t.sibling = null),
          (n = Oe.current),
          je(Oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (lt(t), null);
    case 22:
    case 23:
      return (
        Dd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? jt & 1073741824 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : lt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, t.tag));
}
function R2(e, t) {
  switch ((vd(t), t.tag)) {
    case 1:
      return (
        wt(t.type) && vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ai(),
        Pe(xt),
        Pe(ut),
        jd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Td(t), null;
    case 13:
      if (
        (Pe(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(F(340));
        Ri();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Pe(Oe), null;
    case 4:
      return Ai(), null;
    case 10:
      return Ed(t.type._context), null;
    case 22:
    case 23:
      return Dd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ba = !1,
  st = !1,
  L2 = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function mi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Me(e, t, r);
      }
    else n.current = null;
}
function Sc(e, t, n) {
  try {
    n();
  } catch (r) {
    Me(e, t, r);
  }
}
var kp = !1;
function A2(e, t) {
  if (((oc = pl), (e = s0()), md(e))) {
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
          var a = 0,
            l = -1,
            s = -1,
            c = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (p = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++c === i && (l = a),
                p === o && ++d === r && (s = a),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = x;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ac = { focusedElem: e, selectionRange: n }, pl = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
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
                  var v = y.memoizedProps,
                    E = y.memoizedState,
                    m = t.stateNode,
                    g = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Jt(t.type, v),
                      E
                    );
                  m.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(F(163));
            }
        } catch (h) {
          Me(t, t.return, h);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (y = kp), (kp = !1), y;
}
function wo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Sc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ql(e, t) {
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
function Cc(e) {
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
function og(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), og(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[fn], delete t[Io], delete t[uc], delete t[g2], delete t[v2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ag(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ag(e.return)) return null;
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
function _c(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = gl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_c(e, t, n), e = e.sibling; e !== null; ) _c(e, t, n), (e = e.sibling);
}
function Tc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tc(e, t, n), e = e.sibling; e !== null; ) Tc(e, t, n), (e = e.sibling);
}
var nt = null,
  en = !1;
function Un(e, t, n) {
  for (n = n.child; n !== null; ) lg(e, t, n), (n = n.sibling);
}
function lg(e, t, n) {
  if (hn && typeof hn.onCommitFiberUnmount == "function")
    try {
      hn.onCommitFiberUnmount(Bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      st || mi(n, t);
    case 6:
      var r = nt,
        i = en;
      (nt = null),
        Un(e, t, n),
        (nt = r),
        (en = i),
        nt !== null &&
          (en
            ? ((e = nt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : nt.removeChild(n.stateNode));
      break;
    case 18:
      nt !== null &&
        (en
          ? ((e = nt),
            (n = n.stateNode),
            e.nodeType === 8
              ? su(e.parentNode, n)
              : e.nodeType === 1 && su(e, n),
            Lo(e))
          : su(nt, n.stateNode));
      break;
    case 4:
      (r = nt),
        (i = en),
        (nt = n.stateNode.containerInfo),
        (en = !0),
        Un(e, t, n),
        (nt = r),
        (en = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !st &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Sc(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Un(e, t, n);
      break;
    case 1:
      if (
        !st &&
        (mi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Me(n, t, l);
        }
      Un(e, t, n);
      break;
    case 21:
      Un(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((st = (r = st) || n.memoizedState !== null), Un(e, t, n), (st = r))
        : Un(e, t, n);
      break;
    default:
      Un(e, t, n);
  }
}
function Pp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new L2()),
      t.forEach(function (r) {
        var i = V2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (nt = l.stateNode), (en = !1);
              break e;
            case 3:
              (nt = l.stateNode.containerInfo), (en = !0);
              break e;
            case 4:
              (nt = l.stateNode.containerInfo), (en = !0);
              break e;
          }
          l = l.return;
        }
        if (nt === null) throw Error(F(160));
        lg(o, a, i), (nt = null), (en = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (c) {
        Me(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) sg(t, e), (t = t.sibling);
}
function sg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Yt(t, e), cn(e), r & 4)) {
        try {
          wo(3, e, e.return), Ql(3, e);
        } catch (v) {
          Me(e, e.return, v);
        }
        try {
          wo(5, e, e.return);
        } catch (v) {
          Me(e, e.return, v);
        }
      }
      break;
    case 1:
      Yt(t, e), cn(e), r & 512 && n !== null && mi(n, n.return);
      break;
    case 5:
      if (
        (Yt(t, e),
        cn(e),
        r & 512 && n !== null && mi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Po(i, "");
        } catch (v) {
          Me(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Pm(i, o),
              Qu(l, a);
            var c = Qu(l, o);
            for (a = 0; a < s.length; a += 2) {
              var d = s[a],
                f = s[a + 1];
              d === "style"
                ? Am(i, f)
                : d === "dangerouslySetInnerHTML"
                ? Rm(i, f)
                : d === "children"
                ? Po(i, f)
                : nd(i, d, f, c);
            }
            switch (l) {
              case "input":
                Hu(i, o);
                break;
              case "textarea":
                Nm(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? Si(i, !!o.multiple, x, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Si(i, !!o.multiple, o.defaultValue, !0)
                      : Si(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Io] = o;
          } catch (v) {
            Me(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Yt(t, e), cn(e), r & 4)) {
        if (e.stateNode === null) throw Error(F(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Me(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Yt(t, e), cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Lo(t.containerInfo);
        } catch (v) {
          Me(e, e.return, v);
        }
      break;
    case 4:
      Yt(t, e), cn(e);
      break;
    case 13:
      Yt(t, e),
        cn(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Md = $e())),
        r & 4 && Pp(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((st = (c = st) || d), Yt(t, e), (st = c)) : Yt(t, e),
        cn(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (B = e, d = e.child; d !== null; ) {
            for (f = B = d; B !== null; ) {
              switch (((p = B), (x = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  wo(4, p, p.return);
                  break;
                case 1:
                  mi(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      Me(r, n, v);
                    }
                  }
                  break;
                case 5:
                  mi(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Op(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = p), (B = x)) : Op(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Lm("display", a)));
              } catch (v) {
                Me(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                Me(e, e.return, v);
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
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Yt(t, e), cn(e), r & 4 && Pp(e);
      break;
    case 21:
      break;
    default:
      Yt(t, e), cn(e);
  }
}
function cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ag(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(F(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Po(i, ""), (r.flags &= -33));
          var o = bp(e);
          Tc(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = bp(e);
          _c(e, l, a);
          break;
        default:
          throw Error(F(161));
      }
    } catch (s) {
      Me(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function M2(e, t, n) {
  (B = e), ug(e);
}
function ug(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var i = B,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || ba;
      if (!a) {
        var l = i.alternate,
          s = (l !== null && l.memoizedState !== null) || st;
        l = ba;
        var c = st;
        if (((ba = a), (st = s) && !c))
          for (B = i; B !== null; )
            (a = B),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Rp(i)
                : s !== null
                ? ((s.return = a), (B = s))
                : Rp(i);
        for (; o !== null; ) (B = o), ug(o), (o = o.sibling);
        (B = i), (ba = l), (st = c);
      }
      Np(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (B = o)) : Np(e);
  }
}
function Np(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || Ql(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !st)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && pp(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                pp(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Lo(f);
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
              throw Error(F(163));
          }
        st || (t.flags & 512 && Cc(t));
      } catch (p) {
        Me(t, t.return, p);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Op(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function Rp(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ql(4, t);
          } catch (s) {
            Me(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Me(t, i, s);
            }
          }
          var o = t.return;
          try {
            Cc(t);
          } catch (s) {
            Me(t, o, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            Cc(t);
          } catch (s) {
            Me(t, a, s);
          }
      }
    } catch (s) {
      Me(t, t.return, s);
    }
    if (t === e) {
      B = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (B = l);
      break;
    }
    B = t.return;
  }
}
var F2 = Math.ceil,
  kl = Mn.ReactCurrentDispatcher,
  Ld = Mn.ReactCurrentOwner,
  Ht = Mn.ReactCurrentBatchConfig,
  pe = 0,
  Ze = null,
  Ue = null,
  rt = 0,
  jt = 0,
  gi = fr(0),
  Ge = 0,
  Ho = null,
  Ir = 0,
  Yl = 0,
  Ad = 0,
  Eo = null,
  gt = null,
  Md = 0,
  Fi = 1 / 0,
  Cn = null,
  bl = !1,
  jc = null,
  tr = null,
  Pa = !1,
  Kn = null,
  Pl = 0,
  So = 0,
  kc = null,
  el = -1,
  tl = 0;
function dt() {
  return pe & 6 ? $e() : el !== -1 ? el : (el = $e());
}
function nr(e) {
  return e.mode & 1
    ? pe & 2 && rt !== 0
      ? rt & -rt
      : x2.transition !== null
      ? (tl === 0 && (tl = qm()), tl)
      : ((e = ye),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Jm(e.type))),
        e)
    : 1;
}
function an(e, t, n, r) {
  if (50 < So) throw ((So = 0), (kc = null), Error(F(185)));
  Zo(e, n, r),
    (!(pe & 2) || e !== Ze) &&
      (e === Ze && (!(pe & 2) && (Yl |= n), Ge === 4 && qn(e, rt)),
      Et(e, r),
      n === 1 && pe === 0 && !(t.mode & 1) && ((Fi = $e() + 500), ql && pr()));
}
function Et(e, t) {
  var n = e.callbackNode;
  xy(e, t);
  var r = fl(e, e === Ze ? rt : 0);
  if (r === 0)
    n !== null && Bf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Bf(n), t === 1))
      e.tag === 0 ? y2(Lp.bind(null, e)) : y0(Lp.bind(null, e)),
        h2(function () {
          !(pe & 6) && pr();
        }),
        (n = null);
    else {
      switch (Gm(r)) {
        case 1:
          n = ld;
          break;
        case 4:
          n = Hm;
          break;
        case 16:
          n = dl;
          break;
        case 536870912:
          n = Wm;
          break;
        default:
          n = dl;
      }
      n = vg(n, cg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function cg(e, t) {
  if (((el = -1), (tl = 0), pe & 6)) throw Error(F(327));
  var n = e.callbackNode;
  if (ki() && e.callbackNode !== n) return null;
  var r = fl(e, e === Ze ? rt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Nl(e, r);
  else {
    t = r;
    var i = pe;
    pe |= 2;
    var o = fg();
    (Ze !== e || rt !== t) && ((Cn = null), (Fi = $e() + 500), Or(e, t));
    do
      try {
        $2();
        break;
      } catch (l) {
        dg(e, l);
      }
    while (1);
    wd(),
      (kl.current = o),
      (pe = i),
      Ue !== null ? (t = 0) : ((Ze = null), (rt = 0), (t = Ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ec(e)), i !== 0 && ((r = i), (t = bc(e, i)))), t === 1)
    )
      throw ((n = Ho), Or(e, 0), qn(e, r), Et(e, $e()), n);
    if (t === 6) qn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !D2(i) &&
          ((t = Nl(e, r)),
          t === 2 && ((o = ec(e)), o !== 0 && ((r = o), (t = bc(e, o)))),
          t === 1))
      )
        throw ((n = Ho), Or(e, 0), qn(e, r), Et(e, $e()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          Er(e, gt, Cn);
          break;
        case 3:
          if (
            (qn(e, r), (r & 130023424) === r && ((t = Md + 500 - $e()), 10 < t))
          ) {
            if (fl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              dt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = sc(Er.bind(null, e, gt, Cn), t);
            break;
          }
          Er(e, gt, Cn);
          break;
        case 4:
          if ((qn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - on(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = $e() - r),
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
                : 1960 * F2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sc(Er.bind(null, e, gt, Cn), r);
            break;
          }
          Er(e, gt, Cn);
          break;
        case 5:
          Er(e, gt, Cn);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return Et(e, $e()), e.callbackNode === n ? cg.bind(null, e) : null;
}
function bc(e, t) {
  var n = Eo;
  return (
    e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256),
    (e = Nl(e, t)),
    e !== 2 && ((t = gt), (gt = n), t !== null && Pc(t)),
    e
  );
}
function Pc(e) {
  gt === null ? (gt = e) : gt.push.apply(gt, e);
}
function D2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!ln(o(), i)) return !1;
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
function qn(e, t) {
  for (
    t &= ~Ad,
      t &= ~Yl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - on(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Lp(e) {
  if (pe & 6) throw Error(F(327));
  ki();
  var t = fl(e, 0);
  if (!(t & 1)) return Et(e, $e()), null;
  var n = Nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ec(e);
    r !== 0 && ((t = r), (n = bc(e, r)));
  }
  if (n === 1) throw ((n = Ho), Or(e, 0), qn(e, t), Et(e, $e()), n);
  if (n === 6) throw Error(F(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Er(e, gt, Cn),
    Et(e, $e()),
    null
  );
}
function Fd(e, t) {
  var n = pe;
  pe |= 1;
  try {
    return e(t);
  } finally {
    (pe = n), pe === 0 && ((Fi = $e() + 500), ql && pr());
  }
}
function $r(e) {
  Kn !== null && Kn.tag === 0 && !(pe & 6) && ki();
  var t = pe;
  pe |= 1;
  var n = Ht.transition,
    r = ye;
  try {
    if (((Ht.transition = null), (ye = 1), e)) return e();
  } finally {
    (ye = r), (Ht.transition = n), (pe = t), !(pe & 6) && pr();
  }
}
function Dd() {
  (jt = gi.current), Pe(gi);
}
function Or(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), p2(n)), Ue !== null))
    for (n = Ue.return; n !== null; ) {
      var r = n;
      switch ((vd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vl();
          break;
        case 3:
          Ai(), Pe(xt), Pe(ut), jd();
          break;
        case 5:
          Td(r);
          break;
        case 4:
          Ai();
          break;
        case 13:
          Pe(Oe);
          break;
        case 19:
          Pe(Oe);
          break;
        case 10:
          Ed(r.type._context);
          break;
        case 22:
        case 23:
          Dd();
      }
      n = n.return;
    }
  if (
    ((Ze = e),
    (Ue = e = rr(e.current, null)),
    (rt = jt = t),
    (Ge = 0),
    (Ho = null),
    (Ad = Yl = Ir = 0),
    (gt = Eo = null),
    kr !== null)
  ) {
    for (t = 0; t < kr.length; t++)
      if (((n = kr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    kr = null;
  }
  return e;
}
function dg(e, t) {
  do {
    var n = Ue;
    try {
      if ((wd(), (Xa.current = jl), Tl)) {
        for (var r = Re.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Tl = !1;
      }
      if (
        ((Dr = 0),
        (Xe = qe = Re = null),
        (xo = !1),
        (Bo = 0),
        (Ld.current = null),
        n === null || n.return === null)
      ) {
        (Ge = 1), (Ho = t), (Ue = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = rt),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var x = wp(a);
          if (x !== null) {
            (x.flags &= -257),
              Ep(x, a, l, o, t),
              x.mode & 1 && xp(o, c, t),
              (t = x),
              (s = c);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              xp(o, c, t), Id();
              break e;
            }
            s = Error(F(426));
          }
        } else if (Ne && l.mode & 1) {
          var E = wp(a);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Ep(E, a, l, o, t),
              yd(Mi(s, l));
            break e;
          }
        }
        (o = s = Mi(s, l)),
          Ge !== 4 && (Ge = 2),
          Eo === null ? (Eo = [o]) : Eo.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = K0(o, s, t);
              fp(o, m);
              break e;
            case 1:
              l = s;
              var g = o.type,
                w = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (tr === null || !tr.has(w))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = Q0(o, l, t);
                fp(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      hg(n);
    } catch (C) {
      (t = C), Ue === n && n !== null && (Ue = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function fg() {
  var e = kl.current;
  return (kl.current = jl), e === null ? jl : e;
}
function Id() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
    Ze === null || (!(Ir & 268435455) && !(Yl & 268435455)) || qn(Ze, rt);
}
function Nl(e, t) {
  var n = pe;
  pe |= 2;
  var r = fg();
  (Ze !== e || rt !== t) && ((Cn = null), Or(e, t));
  do
    try {
      I2();
      break;
    } catch (i) {
      dg(e, i);
    }
  while (1);
  if ((wd(), (pe = n), (kl.current = r), Ue !== null)) throw Error(F(261));
  return (Ze = null), (rt = 0), Ge;
}
function I2() {
  for (; Ue !== null; ) pg(Ue);
}
function $2() {
  for (; Ue !== null && !cy(); ) pg(Ue);
}
function pg(e) {
  var t = gg(e.alternate, e, jt);
  (e.memoizedProps = e.pendingProps),
    t === null ? hg(e) : (Ue = t),
    (Ld.current = null);
}
function hg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = R2(n, t)), n !== null)) {
        (n.flags &= 32767), (Ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ge = 6), (Ue = null);
        return;
      }
    } else if (((n = O2(n, t, jt)), n !== null)) {
      Ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ue = t;
      return;
    }
    Ue = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function Er(e, t, n) {
  var r = ye,
    i = Ht.transition;
  try {
    (Ht.transition = null), (ye = 1), z2(e, t, n, r);
  } finally {
    (Ht.transition = i), (ye = r);
  }
  return null;
}
function z2(e, t, n, r) {
  do ki();
  while (Kn !== null);
  if (pe & 6) throw Error(F(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(F(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (wy(e, o),
    e === Ze && ((Ue = Ze = null), (rt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pa ||
      ((Pa = !0),
      vg(dl, function () {
        return ki(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ht.transition), (Ht.transition = null);
    var a = ye;
    ye = 1;
    var l = pe;
    (pe |= 4),
      (Ld.current = null),
      A2(e, n),
      sg(n, e),
      a2(ac),
      (pl = !!oc),
      (ac = oc = null),
      (e.current = n),
      M2(n),
      dy(),
      (pe = l),
      (ye = a),
      (Ht.transition = o);
  } else e.current = n;
  if (
    (Pa && ((Pa = !1), (Kn = e), (Pl = i)),
    (o = e.pendingLanes),
    o === 0 && (tr = null),
    hy(n.stateNode),
    Et(e, $e()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (bl) throw ((bl = !1), (e = jc), (jc = null), e);
  return (
    Pl & 1 && e.tag !== 0 && ki(),
    (o = e.pendingLanes),
    o & 1 ? (e === kc ? So++ : ((So = 0), (kc = e))) : (So = 0),
    pr(),
    null
  );
}
function ki() {
  if (Kn !== null) {
    var e = Gm(Pl),
      t = Ht.transition,
      n = ye;
    try {
      if (((Ht.transition = null), (ye = 16 > e ? 16 : e), Kn === null))
        var r = !1;
      else {
        if (((e = Kn), (Kn = null), (Pl = 0), pe & 6)) throw Error(F(331));
        var i = pe;
        for (pe |= 4, B = e.current; B !== null; ) {
          var o = B,
            a = o.child;
          if (B.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var c = l[s];
                for (B = c; B !== null; ) {
                  var d = B;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wo(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (B = f);
                  else
                    for (; B !== null; ) {
                      d = B;
                      var p = d.sibling,
                        x = d.return;
                      if ((og(d), d === c)) {
                        B = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = x), (B = p);
                        break;
                      }
                      B = x;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var E = v.sibling;
                    (v.sibling = null), (v = E);
                  } while (v !== null);
                }
              }
              B = o;
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (B = a);
          else
            e: for (; B !== null; ) {
              if (((o = B), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    wo(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (B = m);
                break e;
              }
              B = o.return;
            }
        }
        var g = e.current;
        for (B = g; B !== null; ) {
          a = B;
          var w = a.child;
          if (a.subtreeFlags & 2064 && w !== null) (w.return = a), (B = w);
          else
            e: for (a = g; B !== null; ) {
              if (((l = B), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ql(9, l);
                  }
                } catch (C) {
                  Me(l, l.return, C);
                }
              if (l === a) {
                B = null;
                break e;
              }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (B = h);
                break e;
              }
              B = l.return;
            }
        }
        if (
          ((pe = i), pr(), hn && typeof hn.onPostCommitFiberRoot == "function")
        )
          try {
            hn.onPostCommitFiberRoot(Bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ye = n), (Ht.transition = t);
    }
  }
  return !1;
}
function Ap(e, t, n) {
  (t = Mi(n, t)),
    (t = K0(e, t, 1)),
    (e = er(e, t, 1)),
    (t = dt()),
    e !== null && (Zo(e, 1, t), Et(e, t));
}
function Me(e, t, n) {
  if (e.tag === 3) Ap(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ap(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tr === null || !tr.has(r)))
        ) {
          (e = Mi(n, e)),
            (e = Q0(t, e, 1)),
            (t = er(t, e, 1)),
            (e = dt()),
            t !== null && (Zo(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function B2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ze === e &&
      (rt & n) === n &&
      (Ge === 4 || (Ge === 3 && (rt & 130023424) === rt && 500 > $e() - Md)
        ? Or(e, 0)
        : (Ad |= n)),
    Et(e, t);
}
function mg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = xa), (xa <<= 1), !(xa & 130023424) && (xa = 4194304))
      : (t = 1));
  var n = dt();
  (e = On(e, t)), e !== null && (Zo(e, t, n), Et(e, n));
}
function U2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), mg(e, n);
}
function V2(e, t) {
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
      throw Error(F(314));
  }
  r !== null && r.delete(t), mg(e, n);
}
var gg;
gg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xt.current) vt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (vt = !1), N2(e, t, n);
      vt = !!(e.flags & 131072);
    }
  else (vt = !1), Ne && t.flags & 1048576 && x0(t, wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ja(e, t), (e = t.pendingProps);
      var i = Oi(t, ut.current);
      ji(t, n), (i = bd(null, t, r, e, i, n));
      var o = Pd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            wt(r) ? ((o = !0), yl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Cd(t),
            (i.updater = Gl),
            (t.stateNode = i),
            (i._reactInternals = t),
            mc(t, r, e, n),
            (t = yc(null, t, r, !0, o, n)))
          : ((t.tag = 0), Ne && o && gd(t), ct(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ja(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = W2(r)),
          (e = Jt(r, e)),
          i)
        ) {
          case 0:
            t = vc(null, t, r, e, n);
            break e;
          case 1:
            t = _p(null, t, r, e, n);
            break e;
          case 11:
            t = Sp(null, t, r, e, n);
            break e;
          case 14:
            t = Cp(null, t, r, Jt(r.type, e), n);
            break e;
        }
        throw Error(F(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        vc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        _p(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((J0(t), e === null)) throw Error(F(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          C0(e, t),
          Cl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Mi(Error(F(423)), t)), (t = Tp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Mi(Error(F(424)), t)), (t = Tp(e, t, r, n, i));
            break e;
          } else
            for (
              bt = Jn(t.stateNode.containerInfo.firstChild),
                Pt = t,
                Ne = !0,
                nn = null,
                n = k0(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ri(), r === i)) {
            t = Rn(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        b0(t),
        e === null && fc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        lc(r, i) ? (a = null) : o !== null && lc(r, o) && (t.flags |= 32),
        Z0(e, t),
        ct(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && fc(t), null;
    case 13:
      return eg(e, t, n);
    case 4:
      return (
        _d(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Li(t, null, r, n)) : ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        Sp(e, t, r, i, n)
      );
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          je(El, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (ln(o.value, a)) {
            if (o.children === i.children && !xt.current) {
              t = Rn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                a = o.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = bn(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (s.next = s)
                          : ((s.next = d.next), (d.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      pc(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(F(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  pc(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        ct(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ji(t, n),
        (i = Wt(i)),
        (r = r(i)),
        (t.flags |= 1),
        ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Jt(r, t.pendingProps)),
        (i = Jt(r.type, i)),
        Cp(e, t, r, i, n)
      );
    case 15:
      return Y0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Jt(r, i)),
        Ja(e, t),
        (t.tag = 1),
        wt(r) ? ((e = !0), yl(t)) : (e = !1),
        ji(t, n),
        T0(t, r, i),
        mc(t, r, i, n),
        yc(null, t, r, !0, e, n)
      );
    case 19:
      return tg(e, t, n);
    case 22:
      return X0(e, t, n);
  }
  throw Error(F(156, t.tag));
};
function vg(e, t) {
  return Vm(e, t);
}
function H2(e, t, n, r) {
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
function Vt(e, t, n, r) {
  return new H2(e, t, n, r);
}
function $d(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function W2(e) {
  if (typeof e == "function") return $d(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === id)) return 11;
    if (e === od) return 14;
  }
  return 2;
}
function rr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Vt(e.tag, t, e.key, e.mode)),
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
function nl(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) $d(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case ai:
        return Rr(n.children, i, o, t);
      case rd:
        (a = 8), (i |= 8);
        break;
      case $u:
        return (
          (e = Vt(12, n, t, i | 2)), (e.elementType = $u), (e.lanes = o), e
        );
      case zu:
        return (e = Vt(13, n, t, i)), (e.elementType = zu), (e.lanes = o), e;
      case Bu:
        return (e = Vt(19, n, t, i)), (e.elementType = Bu), (e.lanes = o), e;
      case jm:
        return Xl(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case _m:
              a = 10;
              break e;
            case Tm:
              a = 9;
              break e;
            case id:
              a = 11;
              break e;
            case od:
              a = 14;
              break e;
            case Vn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(F(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Vt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rr(e, t, n, r) {
  return (e = Vt(7, e, r, t)), (e.lanes = n), e;
}
function Xl(e, t, n, r) {
  return (
    (e = Vt(22, e, r, t)),
    (e.elementType = jm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function gu(e, t, n) {
  return (e = Vt(6, e, null, t)), (e.lanes = n), e;
}
function vu(e, t, n) {
  return (
    (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function q2(e, t, n, r, i) {
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
    (this.eventTimes = Xs(0)),
    (this.expirationTimes = Xs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function zd(e, t, n, r, i, o, a, l, s) {
  return (
    (e = new q2(e, t, n, l, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Vt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Cd(o),
    e
  );
}
function G2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: oi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function yg(e) {
  if (!e) return ar;
  e = e._reactInternals;
  e: {
    if (Hr(e) !== e || e.tag !== 1) throw Error(F(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (wt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(F(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (wt(n)) return v0(e, n, t);
  }
  return t;
}
function xg(e, t, n, r, i, o, a, l, s) {
  return (
    (e = zd(n, r, !0, e, i, o, a, l, s)),
    (e.context = yg(null)),
    (n = e.current),
    (r = dt()),
    (i = nr(n)),
    (o = bn(r, i)),
    (o.callback = t ?? null),
    er(n, o, i),
    (e.current.lanes = i),
    Zo(e, i, r),
    Et(e, r),
    e
  );
}
function Zl(e, t, n, r) {
  var i = t.current,
    o = dt(),
    a = nr(i);
  return (
    (n = yg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = bn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = er(i, t, a)),
    e !== null && (an(e, i, a, o), Ya(e, i, a)),
    a
  );
}
function Ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Bd(e, t) {
  Mp(e, t), (e = e.alternate) && Mp(e, t);
}
function K2() {
  return null;
}
var wg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ud(e) {
  this._internalRoot = e;
}
Jl.prototype.render = Ud.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(F(409));
  Zl(e, t, null, null);
};
Jl.prototype.unmount = Ud.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $r(function () {
      Zl(null, e, null, null);
    }),
      (t[Nn] = null);
  }
};
function Jl(e) {
  this._internalRoot = e;
}
Jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ym();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++);
    Wn.splice(n, 0, e), n === 0 && Zm(e);
  }
};
function Vd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function es(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fp() {}
function Q2(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Ol(a);
        o.call(c);
      };
    }
    var a = xg(t, r, e, 0, null, !1, !1, "", Fp);
    return (
      (e._reactRootContainer = a),
      (e[Nn] = a.current),
      Fo(e.nodeType === 8 ? e.parentNode : e),
      $r(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = Ol(s);
      l.call(c);
    };
  }
  var s = zd(e, 0, !1, null, null, !1, !1, "", Fp);
  return (
    (e._reactRootContainer = s),
    (e[Nn] = s.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    $r(function () {
      Zl(t, s, n, r);
    }),
    s
  );
}
function ts(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var s = Ol(a);
        l.call(s);
      };
    }
    Zl(t, a, e, i);
  } else a = Q2(n, t, e, i, r);
  return Ol(a);
}
Km = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = uo(t.pendingLanes);
        n !== 0 &&
          (sd(t, n | 1), Et(t, $e()), !(pe & 6) && ((Fi = $e() + 500), pr()));
      }
      break;
    case 13:
      $r(function () {
        var r = On(e, 1);
        if (r !== null) {
          var i = dt();
          an(r, e, 1, i);
        }
      }),
        Bd(e, 1);
  }
};
ud = function (e) {
  if (e.tag === 13) {
    var t = On(e, 134217728);
    if (t !== null) {
      var n = dt();
      an(t, e, 134217728, n);
    }
    Bd(e, 134217728);
  }
};
Qm = function (e) {
  if (e.tag === 13) {
    var t = nr(e),
      n = On(e, t);
    if (n !== null) {
      var r = dt();
      an(n, e, t, r);
    }
    Bd(e, t);
  }
};
Ym = function () {
  return ye;
};
Xm = function (e, t) {
  var n = ye;
  try {
    return (ye = e), t();
  } finally {
    ye = n;
  }
};
Xu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Hu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Wl(r);
            if (!i) throw Error(F(90));
            bm(r), Hu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Nm(e, n);
      break;
    case "select":
      (t = n.value), t != null && Si(e, !!n.multiple, t, !1);
  }
};
Dm = Fd;
Im = $r;
var Y2 = { usingClientEntryPoint: !1, Events: [ea, ci, Wl, Mm, Fm, Fd] },
  to = {
    findFiberByHostInstance: jr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  X2 = {
    bundleType: to.bundleType,
    version: to.version,
    rendererPackageName: to.rendererPackageName,
    rendererConfig: to.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Bm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: to.findFiberByHostInstance || K2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Na.isDisabled && Na.supportsFiber)
    try {
      (Bl = Na.inject(X2)), (hn = Na);
    } catch {}
}
Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y2;
Ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vd(t)) throw Error(F(200));
  return G2(e, t, null, n);
};
Ot.createRoot = function (e, t) {
  if (!Vd(e)) throw Error(F(299));
  var n = !1,
    r = "",
    i = wg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = zd(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nn] = t.current),
    Fo(e.nodeType === 8 ? e.parentNode : e),
    new Ud(t)
  );
};
Ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(F(188))
      : ((e = Object.keys(e).join(",")), Error(F(268, e)));
  return (e = Bm(t)), (e = e === null ? null : e.stateNode), e;
};
Ot.flushSync = function (e) {
  return $r(e);
};
Ot.hydrate = function (e, t, n) {
  if (!es(t)) throw Error(F(200));
  return ts(null, e, t, !0, n);
};
Ot.hydrateRoot = function (e, t, n) {
  if (!Vd(e)) throw Error(F(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = wg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = xg(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Nn] = t.current),
    Fo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Jl(t);
};
Ot.render = function (e, t, n) {
  if (!es(t)) throw Error(F(200));
  return ts(null, e, t, !1, n);
};
Ot.unmountComponentAtNode = function (e) {
  if (!es(e)) throw Error(F(40));
  return e._reactRootContainer
    ? ($r(function () {
        ts(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nn] = null);
        });
      }),
      !0)
    : !1;
};
Ot.unstable_batchedUpdates = Fd;
Ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!es(n)) throw Error(F(200));
  if (e == null || e._reactInternals === void 0) throw Error(F(38));
  return ts(e, t, n, !1, r);
};
Ot.version = "18.2.0-next-9e3b772b8-20220608";
function Eg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Eg);
    } catch (e) {
      console.error(e);
    }
}
Eg(), (xm.exports = Ot);
var Sg = xm.exports;
const Nc = Ur(Sg);
var Dp = Sg;
(Du.createRoot = Dp.createRoot), (Du.hydrateRoot = Dp.hydrateRoot);
const Z2 = "modulepreload",
  J2 = function (e) {
    return "/" + e;
  },
  Ip = {},
  Fn = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = J2(o)), o in Ip)) return;
        Ip[o] = !0;
        const a = o.endsWith(".css"),
          l = a ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let d = i.length - 1; d >= 0; d--) {
            const f = i[d];
            if (f.href === o && (!a || f.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${l}`)) return;
        const c = document.createElement("link");
        if (
          ((c.rel = a ? "stylesheet" : Z2),
          a || ((c.as = "script"), (c.crossOrigin = "")),
          (c.href = o),
          document.head.appendChild(c),
          a)
        )
          return new Promise((d, f) => {
            c.addEventListener("load", d),
              c.addEventListener("error", () =>
                f(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    )
      .then(() => t())
      .catch((o) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
          throw o;
      });
  };
/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Te() {
  return (
    (Te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Te.apply(this, arguments)
  );
}
var Be;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Be || (Be = {}));
const $p = "popstate";
function ex(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: a, hash: l } = r.location;
    return Wo(
      "",
      { pathname: o, search: a, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : lr(i);
  }
  return nx(t, n, null, e);
}
function ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Di(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function tx() {
  return Math.random().toString(36).substr(2, 8);
}
function zp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Wo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Te(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dn(t) : t,
      { state: n, key: (t && t.key) || r || tx() }
    )
  );
}
function lr(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function nx(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    l = Be.Pop,
    s = null,
    c = d();
  c == null && ((c = 0), a.replaceState(Te({}, a.state, { idx: c }), ""));
  function d() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    l = Be.Pop;
    let E = d(),
      m = E == null ? null : E - c;
    (c = E), s && s({ action: l, location: v.location, delta: m });
  }
  function p(E, m) {
    l = Be.Push;
    let g = Wo(v.location, E, m);
    n && n(g, E), (c = d() + 1);
    let w = zp(g, c),
      h = v.createHref(g);
    try {
      a.pushState(w, "", h);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(h);
    }
    o && s && s({ action: l, location: v.location, delta: 1 });
  }
  function x(E, m) {
    l = Be.Replace;
    let g = Wo(v.location, E, m);
    n && n(g, E), (c = d());
    let w = zp(g, c),
      h = v.createHref(g);
    a.replaceState(w, "", h),
      o && s && s({ action: l, location: v.location, delta: 0 });
  }
  function y(E) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      g = typeof E == "string" ? E : lr(E);
    return (
      ie(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          g
      ),
      new URL(g, m)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(i, a);
    },
    listen(E) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener($p, f),
        (s = E),
        () => {
          i.removeEventListener($p, f), (s = null);
        }
      );
    },
    createHref(E) {
      return t(i, E);
    },
    createURL: y,
    encodeLocation(E) {
      let m = y(E);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: x,
    go(E) {
      return a.go(E);
    },
  };
  return v;
}
var Ie;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ie || (Ie = {}));
const rx = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function ix(e) {
  return e.index === !0;
}
function Oc(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, o) => {
      let a = [...n, o],
        l = typeof i.id == "string" ? i.id : a.join("-");
      if (
        (ie(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        ie(
          !r[l],
          'Found a route id collision on id "' +
            l +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        ix(i))
      ) {
        let s = Te({}, i, t(i), { id: l });
        return (r[l] = s), s;
      } else {
        let s = Te({}, i, t(i), { id: l, children: void 0 });
        return (
          (r[l] = s), i.children && (s.children = Oc(i.children, t, a, r)), s
        );
      }
    })
  );
}
function vi(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dn(t) : t,
    i = sr(r.pathname || "/", n);
  if (i == null) return null;
  let o = Cg(e);
  ox(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) a = hx(o[l], vx(i));
  return a;
}
function Cg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, a, l) => {
    let s = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (ie(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let c = gn([r, s.relativePath]),
      d = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (ie(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      Cg(o.children, t, d, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: fx(c, o.index), routesMeta: d });
  };
  return (
    e.forEach((o, a) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, a);
      else for (let s of _g(o.path)) i(o, a, s);
    }),
    t
  );
}
function _g(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let a = _g(r.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? o : [o, s].join("/")))),
    i && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function ox(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : px(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ax = /^:\w+$/,
  lx = 3,
  sx = 2,
  ux = 1,
  cx = 10,
  dx = -2,
  Bp = (e) => e === "*";
function fx(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Bp) && (r += dx),
    t && (r += sx),
    n
      .filter((i) => !Bp(i))
      .reduce((i, o) => i + (ax.test(o) ? lx : o === "" ? ux : cx), r)
  );
}
function px(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function hx(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = mx(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        c
      );
    if (!d) return null;
    Object.assign(r, d.params);
    let f = l.route;
    o.push({
      params: r,
      pathname: gn([i, d.pathname]),
      pathnameBase: Ex(gn([i, d.pathnameBase])),
      route: f,
    }),
      d.pathnameBase !== "/" && (i = gn([i, d.pathnameBase]));
  }
  return o;
}
function mx(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = gx(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    a = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      if (d === "*") {
        let p = l[f] || "";
        a = o.slice(0, o.length - p.length).replace(/(.)\/+$/, "$1");
      }
      return (c[d] = yx(l[f] || "", d)), c;
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  };
}
function gx(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Di(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function vx(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Di(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function yx(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Di(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function sr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function xx(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Dn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : wx(n, t)) : t,
    search: Sx(r),
    hash: Cx(i),
  };
}
function wx(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function yu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ns(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Dn(e))
    : ((i = Te({}, e)),
      ie(
        !i.pathname || !i.pathname.includes("?"),
        yu("?", "pathname", "search", i)
      ),
      ie(
        !i.pathname || !i.pathname.includes("#"),
        yu("#", "pathname", "hash", i)
      ),
      ie(!i.search || !i.search.includes("#"), yu("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    a = o ? "/" : i.pathname,
    l;
  if (r || a == null) l = n;
  else {
    let f = t.length - 1;
    if (a.startsWith("..")) {
      let p = a.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let s = xx(i, l),
    c = a && a !== "/" && a.endsWith("/"),
    d = (o || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (c || d) && (s.pathname += "/"), s;
}
const gn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ex = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Sx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Cx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e),
  _x = function (t, n) {
    n === void 0 && (n = {});
    let r = typeof n == "number" ? { status: n } : n,
      i = new Headers(r.headers);
    return (
      i.has("Content-Type") ||
        i.set("Content-Type", "application/json; charset=utf-8"),
      new Response(JSON.stringify(t), Te({}, r, { headers: i }))
    );
  },
  rs = function (t, n) {
    n === void 0 && (n = 302);
    let r = n;
    typeof r == "number"
      ? (r = { status: r })
      : typeof r.status > "u" && (r.status = 302);
    let i = new Headers(r.headers);
    return i.set("Location", t), new Response(null, Te({}, r, { headers: i }));
  };
class Wd {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Tg(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const jg = ["post", "put", "patch", "delete"],
  Tx = new Set(jg),
  jx = ["get", ...jg],
  kx = new Set(jx),
  bx = new Set([301, 302, 303, 307, 308]),
  Px = new Set([307, 308]),
  xu = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Nx = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  no = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  kg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ox = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Rx(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ie(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties) i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let T = e.detectErrorBoundary;
    i = (b) => ({ hasErrorBoundary: T(b) });
  } else i = Ox;
  let o = {},
    a = Oc(e.routes, i, void 0, o),
    l,
    s = e.basename || "/",
    c = Te({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    d = null,
    f = new Set(),
    p = null,
    x = null,
    y = null,
    v = e.hydrationData != null,
    E = vi(a, e.history.location, s),
    m = null;
  if (E == null) {
    let T = $t(404, { pathname: e.history.location.pathname }),
      { matches: b, route: L } = Qp(a);
    (E = b), (m = { [L.id]: T });
  }
  let g =
      !E.some((T) => T.route.lazy) &&
      (!E.some((T) => T.route.loader) || e.hydrationData != null),
    w,
    h = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: E,
      initialized: g,
      navigation: xu,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || m,
      fetchers: new Map(),
      blockers: new Map(),
    },
    C = Be.Pop,
    P = !1,
    k,
    M = !1,
    U = !1,
    I = [],
    oe = [],
    R = new Map(),
    D = 0,
    H = -1,
    X = new Map(),
    le = new Set(),
    me = new Map(),
    A = new Map(),
    N = new Map(),
    j = !1;
  function G() {
    return (
      (d = e.history.listen((T) => {
        let { action: b, location: L, delta: V } = T;
        if (j) {
          j = !1;
          return;
        }
        Di(
          N.size === 0 || V != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let re = he({
          currentLocation: h.location,
          nextLocation: L,
          historyAction: b,
        });
        if (re && V != null) {
          (j = !0),
            e.history.go(V * -1),
            ne(re, {
              state: "blocked",
              location: L,
              proceed() {
                ne(re, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: L,
                }),
                  e.history.go(V);
              },
              reset() {
                let ee = new Map(h.blockers);
                ee.set(re, no), W({ blockers: ee });
              },
            });
          return;
        }
        return Ke(b, L);
      })),
      h.initialized || Ke(Be.Pop, h.location),
      w
    );
  }
  function $() {
    d && d(),
      f.clear(),
      k && k.abort(),
      h.fetchers.forEach((T, b) => Dt(b)),
      h.blockers.forEach((T, b) => Q(b));
  }
  function Y(T) {
    return f.add(T), () => f.delete(T);
  }
  function W(T) {
    (h = Te({}, h, T)), f.forEach((b) => b(h));
  }
  function se(T, b) {
    var L, V;
    let re =
        h.actionData != null &&
        h.navigation.formMethod != null &&
        tn(h.navigation.formMethod) &&
        h.navigation.state === "loading" &&
        ((L = T.state) == null ? void 0 : L._isRedirect) !== !0,
      ee;
    b.actionData
      ? Object.keys(b.actionData).length > 0
        ? (ee = b.actionData)
        : (ee = null)
      : re
      ? (ee = h.actionData)
      : (ee = null);
    let te = b.loaderData
        ? Kp(h.loaderData, b.loaderData, b.matches || [], b.errors)
        : h.loaderData,
      Z = h.blockers;
    Z.size > 0 && ((Z = new Map(Z)), Z.forEach((Se, tt) => Z.set(tt, no)));
    let K =
      P === !0 ||
      (h.navigation.formMethod != null &&
        tn(h.navigation.formMethod) &&
        ((V = T.state) == null ? void 0 : V._isRedirect) !== !0);
    l && ((a = l), (l = void 0)),
      M ||
        C === Be.Pop ||
        (C === Be.Push
          ? e.history.push(T, T.state)
          : C === Be.Replace && e.history.replace(T, T.state)),
      W(
        Te({}, b, {
          actionData: ee,
          loaderData: te,
          historyAction: C,
          location: T,
          initialized: !0,
          navigation: xu,
          revalidation: "idle",
          restoreScrollPosition: fa(T, b.matches || h.matches),
          preventScrollReset: K,
          blockers: Z,
        })
      ),
      (C = Be.Pop),
      (P = !1),
      (M = !1),
      (U = !1),
      (I = []),
      (oe = []);
  }
  async function ge(T, b) {
    if (typeof T == "number") {
      e.history.go(T);
      return;
    }
    let L = Rc(
        h.location,
        h.matches,
        s,
        c.v7_prependBasename,
        T,
        b == null ? void 0 : b.fromRouteId,
        b == null ? void 0 : b.relative
      ),
      {
        path: V,
        submission: re,
        error: ee,
      } = Up(c.v7_normalizeFormMethod, !1, L, b),
      te = h.location,
      Z = Wo(h.location, V, b && b.state);
    Z = Te({}, Z, e.history.encodeLocation(Z));
    let K = b && b.replace != null ? b.replace : void 0,
      Se = Be.Push;
    K === !0
      ? (Se = Be.Replace)
      : K === !1 ||
        (re != null &&
          tn(re.formMethod) &&
          re.formAction === h.location.pathname + h.location.search &&
          (Se = Be.Replace));
    let tt =
        b && "preventScrollReset" in b ? b.preventScrollReset === !0 : void 0,
      we = he({ currentLocation: te, nextLocation: Z, historyAction: Se });
    if (we) {
      ne(we, {
        state: "blocked",
        location: Z,
        proceed() {
          ne(we, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Z,
          }),
            ge(T, b);
        },
        reset() {
          let De = new Map(h.blockers);
          De.set(we, no), W({ blockers: De });
        },
      });
      return;
    }
    return await Ke(Se, Z, {
      submission: re,
      pendingError: ee,
      preventScrollReset: tt,
      replace: b && b.replace,
    });
  }
  function Fe() {
    if (
      (He(),
      W({ revalidation: "loading" }),
      h.navigation.state !== "submitting")
    ) {
      if (h.navigation.state === "idle") {
        Ke(h.historyAction, h.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Ke(C || h.historyAction, h.navigation.location, {
        overrideNavigation: h.navigation,
      });
    }
  }
  async function Ke(T, b, L) {
    k && k.abort(),
      (k = null),
      (C = T),
      (M = (L && L.startUninterruptedRevalidation) === !0),
      Wi(h.location, h.matches),
      (P = (L && L.preventScrollReset) === !0);
    let V = l || a,
      re = L && L.overrideNavigation,
      ee = vi(V, b, s);
    if (!ee) {
      let De = $t(404, { pathname: b.pathname }),
        { matches: Qe, route: vr } = Qp(V);
      Ae(), se(b, { matches: Qe, loaderData: {}, errors: { [vr.id]: De } });
      return;
    }
    if (
      h.initialized &&
      !U &&
      Dx(h.location, b) &&
      !(L && L.submission && tn(L.submission.formMethod))
    ) {
      se(b, { matches: ee });
      return;
    }
    k = new AbortController();
    let te = io(e.history, b, k.signal, L && L.submission),
      Z,
      K;
    if (L && L.pendingError) K = { [yi(ee).route.id]: L.pendingError };
    else if (L && L.submission && tn(L.submission.formMethod)) {
      let De = await un(te, b, L.submission, ee, { replace: L.replace });
      if (De.shortCircuited) return;
      (Z = De.pendingActionData),
        (K = De.pendingActionError),
        (re = Oa(b, L.submission)),
        (te = new Request(te.url, { signal: te.signal }));
    }
    let {
      shortCircuited: Se,
      loaderData: tt,
      errors: we,
    } = await At(
      te,
      b,
      ee,
      re,
      L && L.submission,
      L && L.fetcherSubmission,
      L && L.replace,
      Z,
      K
    );
    Se ||
      ((k = null),
      se(
        b,
        Te({ matches: ee }, Z ? { actionData: Z } : {}, {
          loaderData: tt,
          errors: we,
        })
      ));
  }
  async function un(T, b, L, V, re) {
    re === void 0 && (re = {}), He();
    let ee = Ux(b, L);
    W({ navigation: ee });
    let te,
      Z = Ac(V, b);
    if (!Z.route.action && !Z.route.lazy)
      te = {
        type: Ie.error,
        error: $t(405, {
          method: T.method,
          pathname: b.pathname,
          routeId: Z.route.id,
        }),
      };
    else if (((te = await ro("action", T, Z, V, o, i, s)), T.signal.aborted))
      return { shortCircuited: !0 };
    if (bi(te)) {
      let K;
      return (
        re && re.replace != null
          ? (K = re.replace)
          : (K = te.location === h.location.pathname + h.location.search),
        await ve(h, te, { submission: L, replace: K }),
        { shortCircuited: !0 }
      );
    }
    if (Co(te)) {
      let K = yi(V, Z.route.id);
      return (
        (re && re.replace) !== !0 && (C = Be.Push),
        {
          pendingActionData: {},
          pendingActionError: { [K.route.id]: te.error },
        }
      );
    }
    if (Pr(te)) throw $t(400, { type: "defer-action" });
    return { pendingActionData: { [Z.route.id]: te.data } };
  }
  async function At(T, b, L, V, re, ee, te, Z, K) {
    let Se = V || Oa(b, re),
      tt = re || ee || Zp(Se),
      we = l || a,
      [De, Qe] = Vp(e.history, h, L, tt, b, U, I, oe, me, le, we, s, Z, K);
    if (
      (Ae(
        (Ee) =>
          !(L && L.some((Qt) => Qt.route.id === Ee)) ||
          (De && De.some((Qt) => Qt.route.id === Ee))
      ),
      (H = ++D),
      De.length === 0 && Qe.length === 0)
    ) {
      let Ee = _();
      return (
        se(
          b,
          Te(
            { matches: L, loaderData: {}, errors: K || null },
            Z ? { actionData: Z } : {},
            Ee ? { fetchers: new Map(h.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!M) {
      Qe.forEach((Qt) => {
        let Bn = h.fetchers.get(Qt.key),
          Ws = oo(void 0, Bn ? Bn.data : void 0);
        h.fetchers.set(Qt.key, Ws);
      });
      let Ee = Z || h.actionData;
      W(
        Te(
          { navigation: Se },
          Ee
            ? Object.keys(Ee).length === 0
              ? { actionData: null }
              : { actionData: Ee }
            : {},
          Qe.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
        )
      );
    }
    Qe.forEach((Ee) => {
      R.has(Ee.key) && mt(Ee.key),
        Ee.controller && R.set(Ee.key, Ee.controller);
    });
    let vr = () => Qe.forEach((Ee) => mt(Ee.key));
    k && k.signal.addEventListener("abort", vr);
    let {
      results: yr,
      loaderResults: qi,
      fetcherResults: Bs,
    } = await et(h.matches, L, De, Qe, T);
    if (T.signal.aborted) return { shortCircuited: !0 };
    k && k.signal.removeEventListener("abort", vr),
      Qe.forEach((Ee) => R.delete(Ee.key));
    let En = Yp(yr);
    if (En) {
      if (En.idx >= De.length) {
        let Ee = Qe[En.idx - De.length].key;
        le.add(Ee);
      }
      return await ve(h, En.result, { replace: te }), { shortCircuited: !0 };
    }
    let { loaderData: Sn, errors: pa } = Gp(h, L, De, qi, K, Qe, Bs, A);
    A.forEach((Ee, Qt) => {
      Ee.subscribe((Bn) => {
        (Bn || Ee.done) && A.delete(Qt);
      });
    });
    let Us = _(),
      Vs = z(H),
      Hs = Us || Vs || Qe.length > 0;
    return Te(
      { loaderData: Sn, errors: pa },
      Hs ? { fetchers: new Map(h.fetchers) } : {}
    );
  }
  function Ve(T) {
    return h.fetchers.get(T) || Nx;
  }
  function Mt(T, b, L, V) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    R.has(T) && mt(T);
    let re = l || a,
      ee = Rc(
        h.location,
        h.matches,
        s,
        c.v7_prependBasename,
        L,
        b,
        V == null ? void 0 : V.relative
      ),
      te = vi(re, ee, s);
    if (!te) {
      Ce(T, b, $t(404, { pathname: ee }));
      return;
    }
    let {
      path: Z,
      submission: K,
      error: Se,
    } = Up(c.v7_normalizeFormMethod, !0, ee, V);
    if (Se) {
      Ce(T, b, Se);
      return;
    }
    let tt = Ac(te, Z);
    if (((P = (V && V.preventScrollReset) === !0), K && tn(K.formMethod))) {
      Ct(T, b, Z, tt, te, K);
      return;
    }
    me.set(T, { routeId: b, path: Z }), Ft(T, b, Z, tt, te, K);
  }
  async function Ct(T, b, L, V, re, ee) {
    if ((He(), me.delete(T), !V.route.action && !V.route.lazy)) {
      let We = $t(405, { method: ee.formMethod, pathname: L, routeId: b });
      Ce(T, b, We);
      return;
    }
    let te = h.fetchers.get(T),
      Z = Vx(ee, te);
    h.fetchers.set(T, Z), W({ fetchers: new Map(h.fetchers) });
    let K = new AbortController(),
      Se = io(e.history, L, K.signal, ee);
    R.set(T, K);
    let tt = D,
      we = await ro("action", Se, V, re, o, i, s);
    if (Se.signal.aborted) {
      R.get(T) === K && R.delete(T);
      return;
    }
    if (bi(we))
      if ((R.delete(T), H > tt)) {
        let We = ii(void 0);
        h.fetchers.set(T, We), W({ fetchers: new Map(h.fetchers) });
        return;
      } else {
        le.add(T);
        let We = oo(ee);
        return (
          h.fetchers.set(T, We),
          W({ fetchers: new Map(h.fetchers) }),
          ve(h, we, { submission: ee, isFetchActionRedirect: !0 })
        );
      }
    if (Co(we)) {
      Ce(T, b, we.error);
      return;
    }
    if (Pr(we)) throw $t(400, { type: "defer-action" });
    let De = h.navigation.location || h.location,
      Qe = io(e.history, De, K.signal),
      vr = l || a,
      yr =
        h.navigation.state !== "idle"
          ? vi(vr, h.navigation.location, s)
          : h.matches;
    ie(yr, "Didn't find any matches after fetcher action");
    let qi = ++D;
    X.set(T, qi);
    let Bs = oo(ee, we.data);
    h.fetchers.set(T, Bs);
    let [En, Sn] = Vp(
      e.history,
      h,
      yr,
      ee,
      De,
      U,
      I,
      oe,
      me,
      le,
      vr,
      s,
      { [V.route.id]: we.data },
      void 0
    );
    Sn.filter((We) => We.key !== T).forEach((We) => {
      let Gi = We.key,
        bf = h.fetchers.get(Gi),
        Tv = oo(void 0, bf ? bf.data : void 0);
      h.fetchers.set(Gi, Tv),
        R.has(Gi) && mt(Gi),
        We.controller && R.set(Gi, We.controller);
    }),
      W({ fetchers: new Map(h.fetchers) });
    let pa = () => Sn.forEach((We) => mt(We.key));
    K.signal.addEventListener("abort", pa);
    let {
      results: Us,
      loaderResults: Vs,
      fetcherResults: Hs,
    } = await et(h.matches, yr, En, Sn, Qe);
    if (K.signal.aborted) return;
    K.signal.removeEventListener("abort", pa),
      X.delete(T),
      R.delete(T),
      Sn.forEach((We) => R.delete(We.key));
    let Ee = Yp(Us);
    if (Ee) {
      if (Ee.idx >= En.length) {
        let We = Sn[Ee.idx - En.length].key;
        le.add(We);
      }
      return ve(h, Ee.result);
    }
    let { loaderData: Qt, errors: Bn } = Gp(
      h,
      h.matches,
      En,
      Vs,
      void 0,
      Sn,
      Hs,
      A
    );
    if (h.fetchers.has(T)) {
      let We = ii(we.data);
      h.fetchers.set(T, We);
    }
    let Ws = z(qi);
    h.navigation.state === "loading" && qi > H
      ? (ie(C, "Expected pending action"),
        k && k.abort(),
        se(h.navigation.location, {
          matches: yr,
          loaderData: Qt,
          errors: Bn,
          fetchers: new Map(h.fetchers),
        }))
      : (W(
          Te(
            { errors: Bn, loaderData: Kp(h.loaderData, Qt, yr, Bn) },
            Ws || Sn.length > 0 ? { fetchers: new Map(h.fetchers) } : {}
          )
        ),
        (U = !1));
  }
  async function Ft(T, b, L, V, re, ee) {
    let te = h.fetchers.get(T),
      Z = oo(ee, te ? te.data : void 0);
    h.fetchers.set(T, Z), W({ fetchers: new Map(h.fetchers) });
    let K = new AbortController(),
      Se = io(e.history, L, K.signal);
    R.set(T, K);
    let tt = D,
      we = await ro("loader", Se, V, re, o, i, s);
    if (
      (Pr(we) && (we = (await Ng(we, Se.signal, !0)) || we),
      R.get(T) === K && R.delete(T),
      Se.signal.aborted)
    )
      return;
    if (bi(we))
      if (H > tt) {
        let Qe = ii(void 0);
        h.fetchers.set(T, Qe), W({ fetchers: new Map(h.fetchers) });
        return;
      } else {
        le.add(T), await ve(h, we);
        return;
      }
    if (Co(we)) {
      let Qe = yi(h.matches, b);
      h.fetchers.delete(T),
        W({
          fetchers: new Map(h.fetchers),
          errors: { [Qe.route.id]: we.error },
        });
      return;
    }
    ie(!Pr(we), "Unhandled fetcher deferred data");
    let De = ii(we.data);
    h.fetchers.set(T, De), W({ fetchers: new Map(h.fetchers) });
  }
  async function ve(T, b, L) {
    let {
      submission: V,
      replace: re,
      isFetchActionRedirect: ee,
    } = L === void 0 ? {} : L;
    b.revalidate && (U = !0);
    let te = Wo(
      T.location,
      b.location,
      Te({ _isRedirect: !0 }, ee ? { _isFetchActionRedirect: !0 } : {})
    );
    if ((ie(te, "Expected a location on the redirect navigation"), n)) {
      let Se = !1;
      if (b.reloadDocument) Se = !0;
      else if (kg.test(b.location)) {
        const tt = e.history.createURL(b.location);
        Se = tt.origin !== t.location.origin || sr(tt.pathname, s) == null;
      }
      if (Se) {
        re ? t.location.replace(b.location) : t.location.assign(b.location);
        return;
      }
    }
    k = null;
    let Z = re === !0 ? Be.Replace : Be.Push,
      K = V || Zp(T.navigation);
    if (Px.has(b.status) && K && tn(K.formMethod))
      await Ke(Z, te, {
        submission: Te({}, K, { formAction: b.location }),
        preventScrollReset: P,
      });
    else if (ee)
      await Ke(Z, te, {
        overrideNavigation: Oa(te),
        fetcherSubmission: K,
        preventScrollReset: P,
      });
    else {
      let Se = Oa(te, K);
      await Ke(Z, te, { overrideNavigation: Se, preventScrollReset: P });
    }
  }
  async function et(T, b, L, V, re) {
    let ee = await Promise.all([
        ...L.map((K) => ro("loader", re, K, b, o, i, s)),
        ...V.map((K) =>
          K.matches && K.match && K.controller
            ? ro(
                "loader",
                io(e.history, K.path, K.controller.signal),
                K.match,
                K.matches,
                o,
                i,
                s
              )
            : { type: Ie.error, error: $t(404, { pathname: K.path }) }
        ),
      ]),
      te = ee.slice(0, L.length),
      Z = ee.slice(L.length);
    return (
      await Promise.all([
        Xp(
          T,
          L,
          te,
          te.map(() => re.signal),
          !1,
          h.loaderData
        ),
        Xp(
          T,
          V.map((K) => K.match),
          Z,
          V.map((K) => (K.controller ? K.controller.signal : null)),
          !0
        ),
      ]),
      { results: ee, loaderResults: te, fetcherResults: Z }
    );
  }
  function He() {
    (U = !0),
      I.push(...Ae()),
      me.forEach((T, b) => {
        R.has(b) && (oe.push(b), mt(b));
      });
  }
  function Ce(T, b, L) {
    let V = yi(h.matches, b);
    Dt(T), W({ errors: { [V.route.id]: L }, fetchers: new Map(h.fetchers) });
  }
  function Dt(T) {
    let b = h.fetchers.get(T);
    R.has(T) && !(b && b.state === "loading" && X.has(T)) && mt(T),
      me.delete(T),
      X.delete(T),
      le.delete(T),
      h.fetchers.delete(T);
  }
  function mt(T) {
    let b = R.get(T);
    ie(b, "Expected fetch controller: " + T), b.abort(), R.delete(T);
  }
  function _t(T) {
    for (let b of T) {
      let L = Ve(b),
        V = ii(L.data);
      h.fetchers.set(b, V);
    }
  }
  function _() {
    let T = [],
      b = !1;
    for (let L of le) {
      let V = h.fetchers.get(L);
      ie(V, "Expected fetcher: " + L),
        V.state === "loading" && (le.delete(L), T.push(L), (b = !0));
    }
    return _t(T), b;
  }
  function z(T) {
    let b = [];
    for (let [L, V] of X)
      if (V < T) {
        let re = h.fetchers.get(L);
        ie(re, "Expected fetcher: " + L),
          re.state === "loading" && (mt(L), X.delete(L), b.push(L));
      }
    return _t(b), b.length > 0;
  }
  function q(T, b) {
    let L = h.blockers.get(T) || no;
    return N.get(T) !== b && N.set(T, b), L;
  }
  function Q(T) {
    h.blockers.delete(T), N.delete(T);
  }
  function ne(T, b) {
    let L = h.blockers.get(T) || no;
    ie(
      (L.state === "unblocked" && b.state === "blocked") ||
        (L.state === "blocked" && b.state === "blocked") ||
        (L.state === "blocked" && b.state === "proceeding") ||
        (L.state === "blocked" && b.state === "unblocked") ||
        (L.state === "proceeding" && b.state === "unblocked"),
      "Invalid blocker state transition: " + L.state + " -> " + b.state
    );
    let V = new Map(h.blockers);
    V.set(T, b), W({ blockers: V });
  }
  function he(T) {
    let { currentLocation: b, nextLocation: L, historyAction: V } = T;
    if (N.size === 0) return;
    N.size > 1 && Di(!1, "A router only supports one blocker at a time");
    let re = Array.from(N.entries()),
      [ee, te] = re[re.length - 1],
      Z = h.blockers.get(ee);
    if (
      !(Z && Z.state === "proceeding") &&
      te({ currentLocation: b, nextLocation: L, historyAction: V })
    )
      return ee;
  }
  function Ae(T) {
    let b = [];
    return (
      A.forEach((L, V) => {
        (!T || T(V)) && (L.cancel(), b.push(V), A.delete(V));
      }),
      b
    );
  }
  function Kt(T, b, L) {
    if (((p = T), (y = b), (x = L || null), !v && h.navigation === xu)) {
      v = !0;
      let V = fa(h.location, h.matches);
      V != null && W({ restoreScrollPosition: V });
    }
    return () => {
      (p = null), (y = null), (x = null);
    };
  }
  function Jr(T, b) {
    return (
      (x &&
        x(
          T,
          b.map((V) => Bx(V, h.loaderData))
        )) ||
      T.key
    );
  }
  function Wi(T, b) {
    if (p && y) {
      let L = Jr(T, b);
      p[L] = y();
    }
  }
  function fa(T, b) {
    if (p) {
      let L = Jr(T, b),
        V = p[L];
      if (typeof V == "number") return V;
    }
    return null;
  }
  function kf(T) {
    (o = {}), (l = Oc(T, i, void 0, o));
  }
  return (
    (w = {
      get basename() {
        return s;
      },
      get state() {
        return h;
      },
      get routes() {
        return a;
      },
      initialize: G,
      subscribe: Y,
      enableScrollRestoration: Kt,
      navigate: ge,
      fetch: Mt,
      revalidate: Fe,
      createHref: (T) => e.history.createHref(T),
      encodeLocation: (T) => e.history.encodeLocation(T),
      getFetcher: Ve,
      deleteFetcher: Dt,
      dispose: $,
      getBlocker: q,
      deleteBlocker: Q,
      _internalFetchControllers: R,
      _internalActiveDeferreds: A,
      _internalSetRoutes: kf,
    }),
    w
  );
}
function Lx(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Rc(e, t, n, r, i, o, a) {
  let l, s;
  if (o != null && a !== "path") {
    l = [];
    for (let d of t)
      if ((l.push(d), d.route.id === o)) {
        s = d;
        break;
      }
  } else (l = t), (s = t[t.length - 1]);
  let c = Hd(
    i || ".",
    ns(l).map((d) => d.pathnameBase),
    sr(e.pathname, n) || e.pathname,
    a === "path"
  );
  return (
    i == null && ((c.search = e.search), (c.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      s &&
      s.route.index &&
      !qd(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : gn([n, c.pathname])),
    lr(c)
  );
}
function Up(e, t, n, r) {
  if (!r || !Lx(r)) return { path: n };
  if (r.formMethod && !zx(r.formMethod))
    return { path: n, error: $t(405, { method: r.formMethod }) };
  let i = () => ({ path: n, error: $t(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    a = e ? o.toUpperCase() : o.toLowerCase(),
    l = Pg(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!tn(a)) return i();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((x, y) => {
              let [v, E] = y;
              return (
                "" +
                x +
                v +
                "=" +
                E +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: a,
          formAction: l,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!tn(a)) return i();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: a,
            formAction: l,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ie(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, c;
  if (r.formData) (s = Lc(r.formData)), (c = r.formData);
  else if (r.body instanceof FormData) (s = Lc(r.body)), (c = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (c = qp(s));
  else if (r.body == null) (s = new URLSearchParams()), (c = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (c = qp(s));
    } catch {
      return i();
    }
  let d = {
    formMethod: a,
    formAction: l,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0,
  };
  if (tn(d.formMethod)) return { path: n, submission: d };
  let f = Dn(n);
  return (
    t && f.search && qd(f.search) && s.append("index", ""),
    (f.search = "?" + s),
    { path: lr(f), submission: d }
  );
}
function Ax(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Vp(e, t, n, r, i, o, a, l, s, c, d, f, p, x) {
  let y = x ? Object.values(x)[0] : p ? Object.values(p)[0] : void 0,
    v = e.createURL(t.location),
    E = e.createURL(i),
    m = x ? Object.keys(x)[0] : void 0,
    w = Ax(n, m).filter((C, P) => {
      if (C.route.lazy) return !0;
      if (C.route.loader == null) return !1;
      if (Mx(t.loaderData, t.matches[P], C) || a.some((U) => U === C.route.id))
        return !0;
      let k = t.matches[P],
        M = C;
      return Hp(
        C,
        Te(
          {
            currentUrl: v,
            currentParams: k.params,
            nextUrl: E,
            nextParams: M.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              o ||
              v.pathname + v.search === E.pathname + E.search ||
              v.search !== E.search ||
              bg(k, M),
          }
        )
      );
    }),
    h = [];
  return (
    s.forEach((C, P) => {
      if (!n.some((oe) => oe.route.id === C.routeId)) return;
      let k = vi(d, C.path, f);
      if (!k) {
        h.push({
          key: P,
          routeId: C.routeId,
          path: C.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let M = t.fetchers.get(P),
        U = Ac(k, C.path),
        I = !1;
      c.has(P)
        ? (I = !1)
        : l.includes(P)
        ? (I = !0)
        : M && M.state !== "idle" && M.data === void 0
        ? (I = o)
        : (I = Hp(
            U,
            Te(
              {
                currentUrl: v,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: E,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: o }
            )
          )),
        I &&
          h.push({
            key: P,
            routeId: C.routeId,
            path: C.path,
            matches: k,
            match: U,
            controller: new AbortController(),
          });
    }),
    [w, h]
  );
}
function Mx(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function bg(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Hp(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Wp(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  ie(i, "No route found in manifest");
  let o = {};
  for (let a in r) {
    let s = i[a] !== void 0 && a !== "hasErrorBoundary";
    Di(
      !s,
      'Route "' +
        i.id +
        '" has a static property "' +
        a +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + a + '" will be ignored.')
    ),
      !s && !rx.has(a) && (o[a] = r[a]);
  }
  Object.assign(i, o), Object.assign(i, Te({}, t(i), { lazy: void 0 }));
}
async function ro(e, t, n, r, i, o, a, l) {
  l === void 0 && (l = {});
  let s,
    c,
    d,
    f = (y) => {
      let v,
        E = new Promise((m, g) => (v = g));
      return (
        (d = () => v()),
        t.signal.addEventListener("abort", d),
        Promise.race([
          y({ request: t, params: n.params, context: l.requestContext }),
          E,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) c = (await Promise.all([f(y), Wp(n.route, o, i)]))[0];
      else if ((await Wp(n.route, o, i), (y = n.route[e]), y)) c = await f(y);
      else if (e === "action") {
        let v = new URL(t.url),
          E = v.pathname + v.search;
        throw $t(405, { method: t.method, pathname: E, routeId: n.route.id });
      } else return { type: Ie.data, data: void 0 };
    else if (y) c = await f(y);
    else {
      let v = new URL(t.url),
        E = v.pathname + v.search;
      throw $t(404, { pathname: E });
    }
    ie(
      c !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (y) {
    (s = Ie.error), (c = y);
  } finally {
    d && t.signal.removeEventListener("abort", d);
  }
  if ($x(c)) {
    let y = c.status;
    if (bx.has(y)) {
      let m = c.headers.get("Location");
      if (
        (ie(
          m,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !kg.test(m))
      )
        m = Rc(new URL(t.url), r.slice(0, r.indexOf(n) + 1), a, !0, m);
      else if (!l.isStaticRequest) {
        let g = new URL(t.url),
          w = m.startsWith("//") ? new URL(g.protocol + m) : new URL(m),
          h = sr(w.pathname, a) != null;
        w.origin === g.origin && h && (m = w.pathname + w.search + w.hash);
      }
      if (l.isStaticRequest) throw (c.headers.set("Location", m), c);
      return {
        type: Ie.redirect,
        status: y,
        location: m,
        revalidate: c.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: c.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (l.isRouteRequest)
      throw { type: s === Ie.error ? Ie.error : Ie.data, response: c };
    let v,
      E = c.headers.get("Content-Type");
    return (
      E && /\bapplication\/json\b/.test(E)
        ? (v = await c.json())
        : (v = await c.text()),
      s === Ie.error
        ? { type: s, error: new Wd(y, c.statusText, v), headers: c.headers }
        : { type: Ie.data, data: v, statusCode: c.status, headers: c.headers }
    );
  }
  if (s === Ie.error) return { type: s, error: c };
  if (Ix(c)) {
    var p, x;
    return {
      type: Ie.deferred,
      deferredData: c,
      statusCode: (p = c.init) == null ? void 0 : p.status,
      headers:
        ((x = c.init) == null ? void 0 : x.headers) &&
        new Headers(c.init.headers),
    };
  }
  return { type: Ie.data, data: c };
}
function io(e, t, n, r) {
  let i = e.createURL(Pg(t)).toString(),
    o = { signal: n };
  if (r && tn(r.formMethod)) {
    let { formMethod: a, formEncType: l } = r;
    (o.method = a.toUpperCase()),
      l === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": l })),
          (o.body = JSON.stringify(r.json)))
        : l === "text/plain"
        ? (o.body = r.text)
        : l === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = Lc(r.formData))
        : (o.body = r.formData);
  }
  return new Request(i, o);
}
function Lc(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function qp(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Fx(e, t, n, r, i) {
  let o = {},
    a = null,
    l,
    s = !1,
    c = {};
  return (
    n.forEach((d, f) => {
      let p = t[f].route.id;
      if (
        (ie(!bi(d), "Cannot handle redirect results in processLoaderData"),
        Co(d))
      ) {
        let x = yi(e, p),
          y = d.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (a = a || {}),
          a[x.route.id] == null && (a[x.route.id] = y),
          (o[p] = void 0),
          s || ((s = !0), (l = Tg(d.error) ? d.error.status : 500)),
          d.headers && (c[p] = d.headers);
      } else
        Pr(d)
          ? (i.set(p, d.deferredData), (o[p] = d.deferredData.data))
          : (o[p] = d.data),
          d.statusCode != null &&
            d.statusCode !== 200 &&
            !s &&
            (l = d.statusCode),
          d.headers && (c[p] = d.headers);
    }),
    r && ((a = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: a, statusCode: l || 200, loaderHeaders: c }
  );
}
function Gp(e, t, n, r, i, o, a, l) {
  let { loaderData: s, errors: c } = Fx(t, n, r, i, l);
  for (let d = 0; d < o.length; d++) {
    let { key: f, match: p, controller: x } = o[d];
    ie(
      a !== void 0 && a[d] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = a[d];
    if (!(x && x.signal.aborted))
      if (Co(y)) {
        let v = yi(e.matches, p == null ? void 0 : p.route.id);
        (c && c[v.route.id]) || (c = Te({}, c, { [v.route.id]: y.error })),
          e.fetchers.delete(f);
      } else if (bi(y)) ie(!1, "Unhandled fetcher revalidation redirect");
      else if (Pr(y)) ie(!1, "Unhandled fetcher deferred data");
      else {
        let v = ii(y.data);
        e.fetchers.set(f, v);
      }
  }
  return { loaderData: s, errors: c };
}
function Kp(e, t, n, r) {
  let i = Te({}, t);
  for (let o of n) {
    let a = o.route.id;
    if (
      (t.hasOwnProperty(a)
        ? t[a] !== void 0 && (i[a] = t[a])
        : e[a] !== void 0 && o.route.loader && (i[a] = e[a]),
      r && r.hasOwnProperty(a))
    )
      break;
  }
  return i;
}
function yi(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Qp(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function $t(e, t) {
  let { pathname: n, routeId: r, method: i, type: o } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    l = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i && n && r
          ? (l =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (l = "defer() is not supported in actions")
          : o === "invalid-body" && (l = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (l = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (l = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        i && n && r
          ? (l =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
    new Wd(e || 500, a, new Error(l), !0)
  );
}
function Yp(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (bi(n)) return { result: n, idx: t };
  }
}
function Pg(e) {
  let t = typeof e == "string" ? Dn(e) : e;
  return lr(Te({}, t, { hash: "" }));
}
function Dx(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function Pr(e) {
  return e.type === Ie.deferred;
}
function Co(e) {
  return e.type === Ie.error;
}
function bi(e) {
  return (e && e.type) === Ie.redirect;
}
function Ix(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function $x(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function zx(e) {
  return kx.has(e.toLowerCase());
}
function tn(e) {
  return Tx.has(e.toLowerCase());
}
async function Xp(e, t, n, r, i, o) {
  for (let a = 0; a < n.length; a++) {
    let l = n[a],
      s = t[a];
    if (!s) continue;
    let c = e.find((f) => f.route.id === s.route.id),
      d = c != null && !bg(c, s) && (o && o[s.route.id]) !== void 0;
    if (Pr(l) && (i || d)) {
      let f = r[a];
      ie(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Ng(l, f, i).then((p) => {
          p && (n[a] = p || n[a]);
        });
    }
  }
}
async function Ng(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: Ie.data, data: e.deferredData.unwrappedData };
      } catch (i) {
        return { type: Ie.error, error: i };
      }
    return { type: Ie.data, data: e.deferredData.data };
  }
}
function qd(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Bx(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle };
}
function Ac(e, t) {
  let n = typeof t == "string" ? Dn(t).search : t.search;
  if (e[e.length - 1].route.index && qd(n || "")) return e[e.length - 1];
  let r = ns(e);
  return r[r.length - 1];
}
function Zp(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: o,
    json: a,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (a !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: a,
        text: void 0,
      };
  }
}
function Oa(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Ux(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function oo(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      };
}
function Vx(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
    " _hasFetcherDoneAnything ": !0,
  };
}
function ii(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
    " _hasFetcherDoneAnything ": !0,
  };
}
/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rl() {
  return (
    (Rl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rl.apply(this, arguments)
  );
}
const na = S.createContext(null),
  Gd = S.createContext(null),
  In = S.createContext(null),
  is = S.createContext(null),
  xn = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Og = S.createContext(null);
function Hx(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ra() || ie(!1);
  let { basename: r, navigator: i } = S.useContext(In),
    { hash: o, pathname: a, search: l } = os(e, { relative: n }),
    s = a;
  return (
    r !== "/" && (s = a === "/" ? r : gn([r, a])),
    i.createHref({ pathname: s, search: l, hash: o })
  );
}
function ra() {
  return S.useContext(is) != null;
}
function Wr() {
  return ra() || ie(!1), S.useContext(is).location;
}
function Rg(e) {
  S.useContext(In).static || S.useLayoutEffect(e);
}
function Wx() {
  let { isDataRoute: e } = S.useContext(xn);
  return e ? ow() : qx();
}
function qx() {
  ra() || ie(!1);
  let e = S.useContext(na),
    { basename: t, navigator: n } = S.useContext(In),
    { matches: r } = S.useContext(xn),
    { pathname: i } = Wr(),
    o = JSON.stringify(ns(r).map((s) => s.pathnameBase)),
    a = S.useRef(!1);
  return (
    Rg(() => {
      a.current = !0;
    }),
    S.useCallback(
      function (s, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let d = Hd(s, JSON.parse(o), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : gn([t, d.pathname])),
          (c.replace ? n.replace : n.push)(d, c.state, c);
      },
      [t, n, o, i, e]
    )
  );
}
const Gx = S.createContext(null);
function Kx(e) {
  let t = S.useContext(xn).outlet;
  return t && S.createElement(Gx.Provider, { value: e }, t);
}
function qr() {
  let { matches: e } = S.useContext(xn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function os(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = S.useContext(xn),
    { pathname: i } = Wr(),
    o = JSON.stringify(ns(r).map((a) => a.pathnameBase));
  return S.useMemo(() => Hd(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Qx(e, t, n) {
  ra() || ie(!1);
  let { navigator: r } = S.useContext(In),
    { matches: i } = S.useContext(xn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let s = Wr(),
    c;
  if (t) {
    var d;
    let v = typeof t == "string" ? Dn(t) : t;
    l === "/" || ((d = v.pathname) != null && d.startsWith(l)) || ie(!1),
      (c = v);
  } else c = s;
  let f = c.pathname || "/",
    p = l === "/" ? f : f.slice(l.length) || "/",
    x = vi(e, { pathname: p }),
    y = ew(
      x &&
        x.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, a, v.params),
            pathname: gn([
              l,
              r.encodeLocation
                ? r.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? l
                : gn([
                    l,
                    r.encodeLocation
                      ? r.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && y
    ? S.createElement(
        is.Provider,
        {
          value: {
            location: Rl(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Be.Pop,
          },
        },
        y
      )
    : y;
}
function Yx() {
  let e = iw(),
    t = Tg(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return S.createElement(
    S.Fragment,
    null,
    S.createElement("h2", null, "Unexpected Application Error!"),
    S.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? S.createElement("pre", { style: i }, n) : null,
    o
  );
}
const Xx = S.createElement(Yx, null);
class Zx extends S.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? S.createElement(
          xn.Provider,
          { value: this.props.routeContext },
          S.createElement(Og.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Jx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = S.useContext(na);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    S.createElement(xn.Provider, { value: t }, r)
  );
}
function ew(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    a = (r = n) == null ? void 0 : r.errors;
  if (a != null) {
    let l = o.findIndex(
      (s) => s.route.id && (a == null ? void 0 : a[s.route.id])
    );
    l >= 0 || ie(!1), (o = o.slice(0, Math.min(o.length, l + 1)));
  }
  return o.reduceRight((l, s, c) => {
    let d = s.route.id ? (a == null ? void 0 : a[s.route.id]) : null,
      f = null;
    n && (f = s.route.errorElement || Xx);
    let p = t.concat(o.slice(0, c + 1)),
      x = () => {
        let y;
        return (
          d
            ? (y = f)
            : s.route.Component
            ? (y = S.createElement(s.route.Component, null))
            : s.route.element
            ? (y = s.route.element)
            : (y = l),
          S.createElement(Jx, {
            match: s,
            routeContext: { outlet: l, matches: p, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || c === 0)
      ? S.createElement(Zx, {
          location: n.location,
          revalidation: n.revalidation,
          component: f,
          error: d,
          children: x(),
          routeContext: { outlet: null, matches: p, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var Lg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Lg || {}),
  Ln = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ln || {});
function tw(e) {
  let t = S.useContext(na);
  return t || ie(!1), t;
}
function as(e) {
  let t = S.useContext(Gd);
  return t || ie(!1), t;
}
function nw(e) {
  let t = S.useContext(xn);
  return t || ie(!1), t;
}
function ls(e) {
  let t = nw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ie(!1), n.route.id;
}
function rw() {
  return ls(Ln.UseRouteId);
}
function ia() {
  return as(Ln.UseNavigation).navigation;
}
function V_() {
  let e = as(Ln.UseLoaderData),
    t = ls(Ln.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
    );
    return;
  }
  return e.loaderData[t];
}
function sn(e) {
  return as(Ln.UseRouteLoaderData).loaderData[e];
}
function iw() {
  var e;
  let t = S.useContext(Og),
    n = as(Ln.UseRouteError),
    r = ls(Ln.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function ow() {
  let { router: e } = tw(Lg.UseNavigateStable),
    t = ls(Ln.UseNavigateStable),
    n = S.useRef(!1);
  return (
    Rg(() => {
      n.current = !0;
    }),
    S.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Rl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const aw = "startTransition",
  Jp = Uv[aw];
function lw(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [i, o] = S.useState(n.state),
    { v7_startTransition: a } = r || {},
    l = S.useCallback(
      (f) => {
        a && Jp ? Jp(() => o(f)) : o(f);
      },
      [o, a]
    );
  S.useLayoutEffect(() => n.subscribe(l), [n, l]);
  let s = S.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (f) => n.navigate(f),
        push: (f, p, x) =>
          n.navigate(f, {
            state: p,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
        replace: (f, p, x) =>
          n.navigate(f, {
            replace: !0,
            state: p,
            preventScrollReset: x == null ? void 0 : x.preventScrollReset,
          }),
      }),
      [n]
    ),
    c = n.basename || "/",
    d = S.useMemo(
      () => ({ router: n, navigator: s, static: !1, basename: c }),
      [n, s, c]
    );
  return S.createElement(
    S.Fragment,
    null,
    S.createElement(
      na.Provider,
      { value: d },
      S.createElement(
        Gd.Provider,
        { value: i },
        S.createElement(
          uw,
          {
            basename: c,
            location: i.location,
            navigationType: i.historyAction,
            navigator: s,
          },
          i.initialized
            ? S.createElement(sw, { routes: n.routes, state: i })
            : t
        )
      )
    ),
    null
  );
}
function sw(e) {
  let { routes: t, state: n } = e;
  return Qx(t, void 0, n);
}
function Ag(e) {
  return Kx(e.context);
}
function uw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Be.Pop,
    navigator: o,
    static: a = !1,
  } = e;
  ra() && ie(!1);
  let l = t.replace(/^\/*/, "/"),
    s = S.useMemo(() => ({ basename: l, navigator: o, static: a }), [l, o, a]);
  typeof r == "string" && (r = Dn(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: p = null,
      key: x = "default",
    } = r,
    y = S.useMemo(() => {
      let v = sr(c, l);
      return v == null
        ? null
        : {
            location: { pathname: v, search: d, hash: f, state: p, key: x },
            navigationType: i,
          };
    }, [l, c, d, f, p, x, i]);
  return y == null
    ? null
    : S.createElement(
        In.Provider,
        { value: s },
        S.createElement(is.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function cw(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: S.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: S.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function An() {
  return (
    (An = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    An.apply(this, arguments)
  );
}
function Kd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const rl = "get",
  wu = "application/x-www-form-urlencoded";
function ss(e) {
  return e != null && typeof e.tagName == "string";
}
function dw(e) {
  return ss(e) && e.tagName.toLowerCase() === "button";
}
function fw(e) {
  return ss(e) && e.tagName.toLowerCase() === "form";
}
function pw(e) {
  return ss(e) && e.tagName.toLowerCase() === "input";
}
function hw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !hw(e);
}
let Ra = null;
function gw() {
  if (Ra === null)
    try {
      new FormData(document.createElement("form"), 0), (Ra = !1);
    } catch {
      Ra = !0;
    }
  return Ra;
}
const vw = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Eu(e) {
  return e != null && !vw.has(e) ? null : e;
}
function yw(e, t) {
  let n, r, i, o, a;
  if (fw(e)) {
    let l = e.getAttribute("action");
    (r = l ? sr(l, t) : null),
      (n = e.getAttribute("method") || rl),
      (i = Eu(e.getAttribute("enctype")) || wu),
      (o = new FormData(e));
  } else if (dw(e) || (pw(e) && (e.type === "submit" || e.type === "image"))) {
    let l = e.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let s = e.getAttribute("formaction") || l.getAttribute("action");
    if (
      ((r = s ? sr(s, t) : null),
      (n = e.getAttribute("formmethod") || l.getAttribute("method") || rl),
      (i =
        Eu(e.getAttribute("formenctype")) ||
        Eu(l.getAttribute("enctype")) ||
        wu),
      (o = new FormData(l, e)),
      !gw())
    ) {
      let { name: c, type: d, value: f } = e;
      if (d === "image") {
        let p = c ? c + "." : "";
        o.append(p + "x", "0"), o.append(p + "y", "0");
      } else c && o.append(c, f);
    }
  } else {
    if (ss(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (n = rl), (r = null), (i = wu), (a = e);
  }
  return (
    o && i === "text/plain" && ((a = o), (o = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: o, body: a }
  );
}
const xw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  ww = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ],
  Ew = [
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "submit",
    "relative",
    "preventScrollReset",
  ];
function Sw(e, t) {
  return Rx({
    basename: t == null ? void 0 : t.basename,
    future: An({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: ex({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Cw(),
    routes: e,
    mapRouteProperties: cw,
  }).initialize();
}
function Cw() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = An({}, t, { errors: _w(t.errors) })), t;
}
function _w(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Wd(i.status, i.statusText, i.data, i.internal === !0);
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let o = window[i.__subType];
        if (typeof o == "function")
          try {
            let a = new o(i.message);
            (a.stack = ""), (n[r] = a);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(i.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = i;
  return n;
}
const Tw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  jw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xi = S.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: l,
        target: s,
        to: c,
        preventScrollReset: d,
      } = t,
      f = Kd(t, xw),
      { basename: p } = S.useContext(In),
      x,
      y = !1;
    if (typeof c == "string" && jw.test(c) && ((x = c), Tw))
      try {
        let g = new URL(window.location.href),
          w = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          h = sr(w.pathname, p);
        w.origin === g.origin && h != null
          ? (c = h + w.search + w.hash)
          : (y = !0);
      } catch {}
    let v = Hx(c, { relative: i }),
      E = Pw(c, {
        replace: a,
        state: l,
        target: s,
        preventScrollReset: d,
        relative: i,
      });
    function m(g) {
      r && r(g), g.defaultPrevented || E(g);
    }
    return S.createElement(
      "a",
      An({}, f, { href: x || v, onClick: y || o ? r : m, ref: n, target: s })
    );
  }),
  J = S.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: i = !1,
        className: o = "",
        end: a = !1,
        style: l,
        to: s,
        children: c,
      } = t,
      d = Kd(t, ww),
      f = os(s, { relative: d.relative }),
      p = Wr(),
      x = S.useContext(Gd),
      { navigator: y } = S.useContext(In),
      v = y.encodeLocation ? y.encodeLocation(f).pathname : f.pathname,
      E = p.pathname,
      m =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    i ||
      ((E = E.toLowerCase()),
      (m = m ? m.toLowerCase() : null),
      (v = v.toLowerCase()));
    let g = E === v || (!a && E.startsWith(v) && E.charAt(v.length) === "/"),
      w =
        m != null &&
        (m === v || (!a && m.startsWith(v) && m.charAt(v.length) === "/")),
      h = g ? r : void 0,
      C;
    typeof o == "function"
      ? (C = o({ isActive: g, isPending: w }))
      : (C = [o, g ? "active" : null, w ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let P = typeof l == "function" ? l({ isActive: g, isPending: w }) : l;
    return S.createElement(
      xi,
      An({}, d, { "aria-current": h, className: C, ref: n, style: P, to: s }),
      typeof c == "function" ? c({ isActive: g, isPending: w }) : c
    );
  }),
  us = S.forwardRef((e, t) => {
    let n = Ow();
    return S.createElement(kw, An({}, e, { submit: n, ref: t }));
  }),
  kw = S.forwardRef((e, t) => {
    let {
        reloadDocument: n,
        replace: r,
        state: i,
        method: o = rl,
        action: a,
        onSubmit: l,
        submit: s,
        relative: c,
        preventScrollReset: d,
      } = e,
      f = Kd(e, Ew),
      p = o.toLowerCase() === "get" ? "get" : "post",
      x = Rw(a, { relative: c }),
      y = (v) => {
        if ((l && l(v), v.defaultPrevented)) return;
        v.preventDefault();
        let E = v.nativeEvent.submitter,
          m = (E == null ? void 0 : E.getAttribute("formmethod")) || o;
        s(E || v.currentTarget, {
          method: m,
          replace: r,
          state: i,
          relative: c,
          preventScrollReset: d,
        });
      };
    return S.createElement(
      "form",
      An({ ref: t, method: p, action: x, onSubmit: n ? l : y }, f)
    );
  });
var Mc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(Mc || (Mc = {}));
var eh;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(eh || (eh = {}));
function bw(e) {
  let t = S.useContext(na);
  return t || ie(!1), t;
}
function Pw(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
    } = t === void 0 ? {} : t,
    l = Wx(),
    s = Wr(),
    c = os(e, { relative: a });
  return S.useCallback(
    (d) => {
      if (mw(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : lr(s) === lr(c);
        l(e, { replace: f, state: i, preventScrollReset: o, relative: a });
      }
    },
    [s, l, c, r, i, n, e, o, a]
  );
}
function Nw() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
    );
}
function Ow() {
  let { router: e } = bw(Mc.UseSubmit),
    { basename: t } = S.useContext(In),
    n = rw();
  return S.useCallback(
    function (r, i) {
      i === void 0 && (i = {}), Nw();
      let { action: o, method: a, encType: l, formData: s, body: c } = yw(r, t);
      e.navigate(i.action || o, {
        preventScrollReset: i.preventScrollReset,
        formData: s,
        body: c,
        formMethod: i.method || a,
        formEncType: i.encType || l,
        replace: i.replace,
        state: i.state,
        fromRouteId: n,
      });
    },
    [e, t, n]
  );
}
function Rw(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = S.useContext(In),
    i = S.useContext(xn);
  i || ie(!1);
  let [o] = i.matches.slice(-1),
    a = An({}, os(e || ".", { relative: n })),
    l = Wr();
  if (e == null && ((a.search = l.search), o.route.index)) {
    let s = new URLSearchParams(a.search);
    s.delete("index"), (a.search = s.toString() ? "?" + s.toString() : "");
  }
  return (
    (!e || e === ".") &&
      o.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (a.pathname = a.pathname === "/" ? r : gn([r, a.pathname])),
    lr(a)
  );
}
var Mg = {},
  Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.cssValue = Ii.parseLengthAndUnit = void 0;
var Lw = {
  cm: !0,
  mm: !0,
  in: !0,
  px: !0,
  pt: !0,
  pc: !0,
  em: !0,
  ex: !0,
  ch: !0,
  rem: !0,
  vw: !0,
  vh: !0,
  vmin: !0,
  vmax: !0,
  "%": !0,
};
function Fg(e) {
  if (typeof e == "number") return { value: e, unit: "px" };
  var t,
    n = (e.match(/^[0-9.]*/) || "").toString();
  n.includes(".") ? (t = parseFloat(n)) : (t = parseInt(n, 10));
  var r = (e.match(/[^0-9]*$/) || "").toString();
  return Lw[r]
    ? { value: t, unit: r }
    : (console.warn(
        "React Spinners: "
          .concat(e, " is not a valid css value. Defaulting to ")
          .concat(t, "px.")
      ),
      { value: t, unit: "px" });
}
Ii.parseLengthAndUnit = Fg;
function Aw(e) {
  var t = Fg(e);
  return "".concat(t.value).concat(t.unit);
}
Ii.cssValue = Aw;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.createAnimation = void 0;
var Mw = function (e, t, n) {
  var r = "react-spinners-".concat(e, "-").concat(n);
  if (typeof window > "u" || !window.document) return r;
  var i = document.createElement("style");
  document.head.appendChild(i);
  var o = i.sheet,
    a = `
    @keyframes `
      .concat(
        r,
        ` {
      `
      )
      .concat(
        t,
        `
    }
  `
      );
  return o && o.insertRule(a, 0), r;
};
cs.createAnimation = Mw;
var Ll =
    (ze && ze.__assign) ||
    function () {
      return (
        (Ll =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Ll.apply(this, arguments)
      );
    },
  Fw =
    (ze && ze.__createBinding) ||
    (Object.create
      ? function (e, t, n, r) {
          r === void 0 && (r = n);
          var i = Object.getOwnPropertyDescriptor(t, n);
          (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) &&
            (i = {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }),
            Object.defineProperty(e, r, i);
        }
      : function (e, t, n, r) {
          r === void 0 && (r = n), (e[r] = t[n]);
        }),
  Dw =
    (ze && ze.__setModuleDefault) ||
    (Object.create
      ? function (e, t) {
          Object.defineProperty(e, "default", { enumerable: !0, value: t });
        }
      : function (e, t) {
          e.default = t;
        }),
  Iw =
    (ze && ze.__importStar) ||
    function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (e != null)
        for (var n in e)
          n !== "default" &&
            Object.prototype.hasOwnProperty.call(e, n) &&
            Fw(t, e, n);
      return Dw(t, e), t;
    },
  $w =
    (ze && ze.__rest) ||
    function (e, t) {
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
Object.defineProperty(Mg, "__esModule", { value: !0 });
var ti = Iw(S),
  La = Ii,
  zw = cs,
  Bw = (0, zw.createAnimation)(
    "ScaleLoader",
    "0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}",
    "scale"
  );
function Uw(e) {
  var t = e.loading,
    n = t === void 0 ? !0 : t,
    r = e.color,
    i = r === void 0 ? "#000000" : r,
    o = e.speedMultiplier,
    a = o === void 0 ? 1 : o,
    l = e.cssOverride,
    s = l === void 0 ? {} : l,
    c = e.height,
    d = c === void 0 ? 35 : c,
    f = e.width,
    p = f === void 0 ? 4 : f,
    x = e.radius,
    y = x === void 0 ? 2 : x,
    v = e.margin,
    E = v === void 0 ? 2 : v,
    m = $w(e, [
      "loading",
      "color",
      "speedMultiplier",
      "cssOverride",
      "height",
      "width",
      "radius",
      "margin",
    ]),
    g = Ll({ display: "inherit" }, s),
    w = function (h) {
      return {
        backgroundColor: i,
        width: (0, La.cssValue)(p),
        height: (0, La.cssValue)(d),
        margin: (0, La.cssValue)(E),
        borderRadius: (0, La.cssValue)(y),
        display: "inline-block",
        animation: ""
          .concat(Bw, " ")
          .concat(1 / a, "s ")
          .concat(h * 0.1, "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),
        animationFillMode: "both",
      };
    };
  return n
    ? ti.createElement(
        "span",
        Ll({ style: g }, m),
        ti.createElement("span", { style: w(1) }),
        ti.createElement("span", { style: w(2) }),
        ti.createElement("span", { style: w(3) }),
        ti.createElement("span", { style: w(4) }),
        ti.createElement("span", { style: w(5) })
      )
    : null;
}
var Dg = (Mg.default = Uw),
  Ig = { exports: {} },
  Vw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Hw = Vw,
  Ww = Hw;
function $g() {}
function zg() {}
zg.resetWarningCache = $g;
var qw = function () {
  function e(r, i, o, a, l, s) {
    if (s !== Ww) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
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
    checkPropTypes: zg,
    resetWarningCache: $g,
  };
  return (n.PropTypes = n), n;
};
Ig.exports = qw();
var O = Ig.exports;
const pn = Ur(O),
  ds = (e) =>
    u.jsx("button", {
      type: e.type,
      onClick: e.onClick,
      className: e.className,
      children: e.label,
    });
ds.propTypes = {
  label: pn.string.isRequired,
  type: pn.string,
  onClick: pn.func,
  className: pn.string,
};
var Bg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  th = de.createContext && de.createContext(Bg),
  ir =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ir =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        ir.apply(this, arguments)
      );
    },
  Gw =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
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
function Ug(e) {
  return (
    e &&
    e.map(function (t, n) {
      return de.createElement(t.tag, ir({ key: n }, t.attr), Ug(t.child));
    })
  );
}
function ae(e) {
  return function (t) {
    return de.createElement(Kw, ir({ attr: ir({}, e.attr) }, t), Ug(e.child));
  };
}
function Kw(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      a = Gw(e, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      de.createElement(
        "svg",
        ir(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          a,
          {
            className: s,
            style: ir(ir({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && de.createElement("title", null, o),
        e.children
      )
    );
  };
  return th !== void 0
    ? de.createElement(th.Consumer, null, function (n) {
        return t(n);
      })
    : t(Bg);
}
function Qw(e) {
  return ae({
    tag: "svg",
    attr: {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      "aria-hidden": "true",
    },
    child: [
      {
        tag: "path",
        attr: {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25",
        },
      },
    ],
  })(e);
}
const Qd = "/assets/logo-c7458c35.svg";
function oa(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z",
        },
      },
    ],
  })(e);
}
function H_(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z",
        },
      },
    ],
  })(e);
}
function W_(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z",
        },
      },
    ],
  })(e);
}
function q_(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z",
        },
      },
    ],
  })(e);
}
function aa(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z",
        },
      },
    ],
  })(e);
}
function G_(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z",
        },
      },
    ],
  })(e);
}
function K_(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z",
        },
      },
    ],
  })(e);
}
function Yw(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765l-6-3.2ZM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516ZM0 13.373l5.693-3.163L0 6.873v6.5Z",
        },
      },
    ],
  })(e);
}
function Xw(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z",
        },
      },
    ],
  })(e);
}
function Vg(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
        },
      },
    ],
  })(e);
}
function Hg(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
        },
      },
    ],
  })(e);
}
function Q_(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z",
        },
      },
    ],
  })(e);
}
function Zw(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z",
        },
      },
    ],
  })(e);
}
function Jw(e) {
  return ae({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
        },
      },
    ],
  })(e);
}
function Y_(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
      },
    ],
  })(e);
}
function Wg(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
      },
    ],
  })(e);
}
function e3(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
        },
      },
    ],
  })(e);
}
function X_(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
function Z_(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z",
        },
      },
    ],
  })(e);
}
function J_(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z",
        },
      },
    ],
  })(e);
}
function qg(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z",
        },
      },
    ],
  })(e);
}
function eT(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z",
        },
      },
    ],
  })(e);
}
function t3(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 1024 1024" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
        },
      },
    ],
  })(e);
}
const n3 = () =>
  u.jsx("div", {
    className: "nav-details-wrapper",
    children: u.jsxs("div", {
      className: "nav-container",
      children: [
        u.jsxs("div", {
          className: "email-details",
          children: [
            u.jsx(Yw, { className: "icons" }),
            u.jsx("p", { children: "support@vitalmediquip.co.ke" }),
          ],
        }),
        u.jsxs("div", {
          className: "socials",
          children: [
            u.jsx("a", {
              href: "https://www.facebook.com/VitalMediquip/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: u.jsx(Vg, { className: "icons" }),
            }),
            u.jsx("a", {
              href: "https://www.instagram.com/vital_mediquip/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: u.jsx(Wg, { className: "icons" }),
            }),
            u.jsx("a", {
              href: "https://www.linkedin.com/company/vital-mediquip/",
              target: "_blank",
              rel: "noopener noreferrer",
              children: u.jsx(Hg, { className: "icons" }),
            }),
            u.jsx("a", {
              href: "https://twitter.com/Vital_Mediquip",
              target: "_blank",
              rel: "noopener noreferrer",
              children: u.jsx(qg, { className: "icons" }),
            }),
          ],
        }),
      ],
    }),
  });
function r3(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          stroke: "#000",
          strokeWidth: "2",
          d: "M7,7 L17,17 M7,17 L17,7",
        },
      },
    ],
  })(e);
}
const i3 = ({ onClose: e }) =>
    u.jsx("div", { className: "backdrop-side", onClick: e }),
  o3 = document.getElementById("overlays"),
  a3 = ({ className: e, onClose: t, onShow: n }) =>
    u.jsxs(S.Fragment, {
      children: [
        e && Nc.createPortal(u.jsx(i3, { onClose: t }), o3),
        u.jsxs("div", {
          className: `sidebar ${e === "active" ? "active" : ""}`,
          children: [
            u.jsxs("div", {
              className: "logo",
              children: [
                u.jsx("div", {
                  className: "image",
                  children: u.jsx("img", { src: Qd, alt: "" }),
                }),
                u.jsx("div", {
                  className: "close-icon",
                  onClick: t,
                  children: u.jsx(r3, { className: "icon" }),
                }),
              ],
            }),
            u.jsxs("ul", {
              className: "side-items",
              children: [
                u.jsx(J, {
                  to: "/about",
                  onClick: t,
                  children: u.jsx("li", { children: "About" }),
                }),
                u.jsx(J, {
                  to: "/allProducts",
                  onClick: t,
                  children: u.jsx("li", { children: "Products" }),
                }),
                u.jsx(J, {
                  to: "/Faqs",
                  onClick: t,
                  children: u.jsx("li", { children: "Faqs" }),
                }),
                u.jsx(J, {
                  to: "/contact-us",
                  onClick: t,
                  children: u.jsx("li", { children: "Contact us" }),
                }),
              ],
            }),
            u.jsxs("div", {
              className: "get-container",
              children: [
                u.jsxs("div", {
                  className: "socials",
                  children: [
                    u.jsx("a", {
                      href: "https://www.facebook.com/VitalMediquip/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: u.jsx(Vg, { className: "icons" }),
                    }),
                    u.jsx("a", {
                      href: "https://www.instagram.com/vital_mediquip/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: u.jsx(Wg, { className: "icons" }),
                    }),
                    u.jsx("a", {
                      href: "https://www.linkedin.com/company/vital-mediquip/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: u.jsx(Hg, { className: "icons" }),
                    }),
                    u.jsx("a", {
                      href: "https://twitter.com/Vital_Mediquip",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: u.jsx(qg, { className: "icons" }),
                    }),
                  ],
                }),
                u.jsx("button", {
                  className: "get-btn",
                  onClick: n,
                  children: u.jsx(J, { children: "Get Quote" }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Gg = ({ onShowForm: e }) => {
    const [t, n] = S.useState(!1),
      r = () => {
        n(!t), console.log(t);
      },
      i = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(a3, { className: t ? "active" : "", onClose: r, onShow: e }),
        u.jsxs("div", {
          className: "nav-wrapper",
          children: [
            u.jsx(n3, {}),
            u.jsx("nav", {
              children: u.jsxs("div", {
                className: "nav-bar",
                children: [
                  u.jsx("div", {}),
                  u.jsx(J, {
                    to: "/",
                    className: "logo",
                    children: u.jsx("img", { src: Qd, alt: "" }),
                  }),
                  u.jsxs("div", {
                    className: "nav-links",
                    children: [
                      u.jsx("div", {
                        className: "bars",
                        children: u.jsx(Qw, {
                          className: "hamburger",
                          onClick: r,
                        }),
                      }),
                      u.jsxs("ul", {
                        className: "nav-items",
                        children: [
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/",
                              className: ({ isActive: o }) =>
                                o ? "active" : void 0,
                              onClick: i,
                              children: "Home",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts",
                              onClick: i,
                              children: "Products",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/about",
                              onClick: i,
                              children: "About Us",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/faqs",
                              onClick: i,
                              children: "FAQS",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/contact-us",
                              onClick: i,
                              children: "Contact us",
                            }),
                          }),
                        ],
                      }),
                      u.jsx(ds, {
                        label: "Get Quote",
                        className: "get-quote",
                        onClick: e,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
Gg.propTypes = { onShowForm: pn.func };
function l3(e) {
  return ae({
    tag: "svg",
    attr: { version: "1.1", viewBox: "0 0 17 17" },
    child: [
      { tag: "g", attr: {}, child: [] },
      {
        tag: "path",
        attr: {
          d: "M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z",
        },
      },
    ],
  })(e);
}
function s3(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z",
        },
      },
    ],
  })(e);
}
function tT(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zm65.83 264H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zm65.66 31.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z",
        },
      },
    ],
  })(e);
}
const u3 = () =>
  u.jsxs("div", {
    className: "contact-container",
    children: [
      u.jsxs("div", {
        className: "contact-wrapper",
        children: [
          u.jsx("span", { children: u.jsx(l3, { className: "contact-icon" }) }),
          u.jsxs("div", {
            className: "address-description",
            children: [
              u.jsx("h3", { children: "Address" }),
              u.jsx("p", {
                children: "Showbe Plaza , Muranga Road, Pangani, Nairobi",
              }),
            ],
          }),
        ],
      }),
      u.jsxs("div", {
        className: "contact-wrapper",
        children: [
          u.jsx("span", { children: u.jsx(s3, { className: "contact-icon" }) }),
          u.jsxs("div", {
            className: "address-description",
            children: [
              u.jsx("h3", { children: "Call us" }),
              u.jsx("p", { children: "+254 705562383" }),
            ],
          }),
        ],
      }),
      u.jsxs("div", {
        className: "contact-wrapper",
        children: [
          u.jsx("span", { children: u.jsx(Xw, { className: "contact-icon" }) }),
          u.jsxs("div", {
            className: "address-description",
            children: [
              u.jsx("h3", { children: "Email us" }),
              u.jsx("p", { children: "support@vitalmediquip.co.ke" }),
            ],
          }),
        ],
      }),
    ],
  });
function c3(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
        },
      },
    ],
  })(e);
}
function Kg(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
      },
    ],
  })(e);
}
function Yd(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        },
      },
    ],
  })(e);
}
function Qg(e) {
  return ae({
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
function Xd(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
function nT(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z",
        },
      },
    ],
  })(e);
}
function d3(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
      },
    ],
  })(e);
}
const f3 = () => {
    const e = () => {
      window.scrollTo({ top: -100, behavior: "smooth" });
    };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(u3, {}),
        u.jsx("footer", {
          children: u.jsxs("div", {
            className: "footer-items",
            children: [
              u.jsxs("div", {
                className: "logo",
                children: [
                  u.jsx(J, {
                    to: "/",
                    onClick: e,
                    children: u.jsx("img", { src: Qd, alt: "" }),
                  }),
                  u.jsx("p", {
                    children:
                      "Premier medical supplier for top-quality healthcare solutions.",
                  }),
                ],
              }),
              u.jsxs("ul", {
                className: "footer-links",
                children: [
                  u.jsxs("li", {
                    children: [
                      u.jsx("h3", { children: "Our Products" }),
                      u.jsxs("ul", {
                        children: [
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/laboratory",
                              onClick: e,
                              children: "Laboratory",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/general-hospital",
                              onClick: e,
                              children: "General Hospital",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/theatre-and-icu/all",
                              onClick: e,
                              children: "Theater & ICU",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/physiotherapy-and-orthopedic/all",
                              onClick: e,
                              children: "Physiotherapy",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/dental/all",
                              onClick: e,
                              children: "Dental",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/imaging/all",
                              onClick: e,
                              children: "Imaging",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/maternity/all",
                              onClick: e,
                              children: "Maternity",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/Hospitality",
                              onClick: e,
                              children: "Hospitality",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts/schools&universities",
                              onClick: e,
                              children: "Schools and Universities",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("h3", { children: "Service & maintenance" }),
                      u.jsxs("ul", {
                        children: [
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allproducts/services-&-maitenance",
                              onClick: e,
                              children: "Laboratory machines",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allproducts/services-&-maitenance ",
                              onClick: e,
                              children: "Dental machines",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allproducts/services-&-maitenance",
                              onClick: e,
                              children: "Theatre & ICU machines",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allproducts/services-&-maitenance",
                              onClick: e,
                              children: "Radiology machines",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    children: [
                      u.jsx("h3", { children: "Quick links" }),
                      u.jsxs("ul", {
                        children: [
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/",
                              onClick: e,
                              children: "Home",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/about",
                              onClick: e,
                              children: "About us",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/allProducts",
                              onClick: e,
                              children: "Products",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/contact-us",
                              onClick: e,
                              children: "Contacts",
                            }),
                          }),
                          u.jsx("li", {
                            children: u.jsx(J, {
                              to: "/faqs",
                              onClick: e,
                              children: "FAQ",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("li", {
                    className: "socials",
                    children: [
                      u.jsx("h3", { children: "Get in touch" }),
                      u.jsxs("ul", {
                        children: [
                          u.jsx(xi, {
                            to: "https://www.facebook.com/VitalMediquip/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsxs("li", {
                              children: [
                                u.jsx(c3, { className: "social-icon" }),
                                u.jsx("span", { children: "Facebook" }),
                              ],
                            }),
                          }),
                          u.jsx(xi, {
                            to: "https://www.instagram.com/vital_mediquip/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsxs("li", {
                              children: [
                                u.jsx(Yd, { className: "social-icon" }),
                                u.jsx("span", { children: "instagram" }),
                              ],
                            }),
                          }),
                          u.jsx(xi, {
                            to: "https://twitter.com/Vital_Mediquip",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsxs("li", {
                              children: [
                                u.jsx(Xd, { className: "social-icon" }),
                                u.jsx("span", { children: "Twitter" }),
                              ],
                            }),
                          }),
                          u.jsx(xi, {
                            to: "https://www.linkedin.com/company/vital-mediquip/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsxs("li", {
                              children: [
                                u.jsx(e3, { className: "social-icon" }),
                                u.jsx("span", { children: "LinkedIn" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsxs("div", {
          className: "copyrights",
          children: [
            u.jsx("p", { children: "Copyright © 2023 Vitalmediquip" }),
            u.jsx("p", { children: "All right Reservered Vitalmediquip" }),
          ],
        }),
      ],
    });
  },
  qo = { _origin: "https://api.emailjs.com" },
  p3 = (e, t = "https://api.emailjs.com") => {
    (qo._userID = e), (qo._origin = t);
  },
  Yg = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class nh {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t ? t.responseText : "Network Error");
  }
}
const Xg = (e, t, n = {}) =>
    new Promise((r, i) => {
      const o = new XMLHttpRequest();
      o.addEventListener("load", ({ target: a }) => {
        const l = new nh(a);
        l.status === 200 || l.text === "OK" ? r(l) : i(l);
      }),
        o.addEventListener("error", ({ target: a }) => {
          i(new nh(a));
        }),
        o.open("POST", qo._origin + e, !0),
        Object.keys(n).forEach((a) => {
          o.setRequestHeader(a, n[a]);
        }),
        o.send(t);
    }),
  h3 = (e, t, n, r) => {
    const i = r || qo._userID;
    return (
      Yg(i, e, t),
      Xg(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.11.0",
          user_id: i,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  m3 = (e) => {
    let t;
    if (
      (typeof e == "string" ? (t = document.querySelector(e)) : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  g3 = (e, t, n, r) => {
    const i = r || qo._userID,
      o = m3(n);
    Yg(i, e, t);
    const a = new FormData(o);
    return (
      a.append("lib_version", "3.11.0"),
      a.append("service_id", e),
      a.append("template_id", t),
      a.append("user_id", i),
      Xg("/api/v1.0/email/send-form", a)
    );
  },
  v3 = { init: p3, send: h3, sendForm: g3 };
var y3 = function (t) {
  return x3(t) && !w3(t);
};
function x3(e) {
  return !!e && typeof e == "object";
}
function w3(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || C3(e);
}
var E3 = typeof Symbol == "function" && Symbol.for,
  S3 = E3 ? Symbol.for("react.element") : 60103;
function C3(e) {
  return e.$$typeof === S3;
}
function _3(e) {
  return Array.isArray(e) ? [] : {};
}
function Al(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Go(_3(e), e, t) : e;
}
function T3(e, t, n) {
  return e.concat(t).map(function (r) {
    return Al(r, n);
  });
}
function j3(e, t, n) {
  var r = {};
  return (
    n.isMergeableObject(e) &&
      Object.keys(e).forEach(function (i) {
        r[i] = Al(e[i], n);
      }),
    Object.keys(t).forEach(function (i) {
      !n.isMergeableObject(t[i]) || !e[i]
        ? (r[i] = Al(t[i], n))
        : (r[i] = Go(e[i], t[i], n));
    }),
    r
  );
}
function Go(e, t, n) {
  (n = n || {}),
    (n.arrayMerge = n.arrayMerge || T3),
    (n.isMergeableObject = n.isMergeableObject || y3);
  var r = Array.isArray(t),
    i = Array.isArray(e),
    o = r === i;
  return o ? (r ? n.arrayMerge(e, t, n) : j3(e, t, n)) : Al(t, n);
}
Go.all = function (t, n) {
  if (!Array.isArray(t)) throw new Error("first argument should be an array");
  return t.reduce(function (r, i) {
    return Go(r, i, n);
  }, {});
};
var Fc = Go,
  k3 =
    typeof global == "object" && global && global.Object === Object && global;
const Zg = k3;
var b3 = typeof self == "object" && self && self.Object === Object && self,
  P3 = Zg || b3 || Function("return this")();
const wn = P3;
var N3 = wn.Symbol;
const ur = N3;
var Jg = Object.prototype,
  O3 = Jg.hasOwnProperty,
  R3 = Jg.toString,
  ao = ur ? ur.toStringTag : void 0;
function L3(e) {
  var t = O3.call(e, ao),
    n = e[ao];
  try {
    e[ao] = void 0;
    var r = !0;
  } catch {}
  var i = R3.call(e);
  return r && (t ? (e[ao] = n) : delete e[ao]), i;
}
var A3 = Object.prototype,
  M3 = A3.toString;
function F3(e) {
  return M3.call(e);
}
var D3 = "[object Null]",
  I3 = "[object Undefined]",
  rh = ur ? ur.toStringTag : void 0;
function Gr(e) {
  return e == null
    ? e === void 0
      ? I3
      : D3
    : rh && rh in Object(e)
    ? L3(e)
    : F3(e);
}
function e1(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var $3 = e1(Object.getPrototypeOf, Object);
const Zd = $3;
function Kr(e) {
  return e != null && typeof e == "object";
}
var z3 = "[object Object]",
  B3 = Function.prototype,
  U3 = Object.prototype,
  t1 = B3.toString,
  V3 = U3.hasOwnProperty,
  H3 = t1.call(Object);
function ih(e) {
  if (!Kr(e) || Gr(e) != z3) return !1;
  var t = Zd(e);
  if (t === null) return !0;
  var n = V3.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && t1.call(n) == H3;
}
var oh = Array.isArray,
  ah = Object.keys,
  W3 = Object.prototype.hasOwnProperty,
  q3 = typeof Element < "u";
function Dc(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    var n = oh(e),
      r = oh(t),
      i,
      o,
      a;
    if (n && r) {
      if (((o = e.length), o != t.length)) return !1;
      for (i = o; i-- !== 0; ) if (!Dc(e[i], t[i])) return !1;
      return !0;
    }
    if (n != r) return !1;
    var l = e instanceof Date,
      s = t instanceof Date;
    if (l != s) return !1;
    if (l && s) return e.getTime() == t.getTime();
    var c = e instanceof RegExp,
      d = t instanceof RegExp;
    if (c != d) return !1;
    if (c && d) return e.toString() == t.toString();
    var f = ah(e);
    if (((o = f.length), o !== ah(t).length)) return !1;
    for (i = o; i-- !== 0; ) if (!W3.call(t, f[i])) return !1;
    if (q3 && e instanceof Element && t instanceof Element) return e === t;
    for (i = o; i-- !== 0; )
      if (((a = f[i]), !(a === "_owner" && e.$$typeof) && !Dc(e[a], t[a])))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var G3 = function (t, n) {
  try {
    return Dc(t, n);
  } catch (r) {
    if (
      (r.message && r.message.match(/stack|recursion/i)) ||
      r.number === -2146828260
    )
      return (
        console.warn(
          "Warning: react-fast-compare does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
};
const Sr = Ur(G3);
var K3 = !0;
function Q3(e, t) {
  if (!K3) {
    if (e) return;
    var n = "Warning: " + t;
    typeof console < "u" && console.warn(n);
    try {
      throw Error(n);
    } catch {}
  }
}
function Y3() {
  (this.__data__ = []), (this.size = 0);
}
function n1(e, t) {
  return e === t || (e !== e && t !== t);
}
function fs(e, t) {
  for (var n = e.length; n--; ) if (n1(e[n][0], t)) return n;
  return -1;
}
var X3 = Array.prototype,
  Z3 = X3.splice;
function J3(e) {
  var t = this.__data__,
    n = fs(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Z3.call(t, n, 1), --this.size, !0;
}
function e4(e) {
  var t = this.__data__,
    n = fs(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function t4(e) {
  return fs(this.__data__, e) > -1;
}
function n4(e, t) {
  var n = this.__data__,
    r = fs(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
function $n(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
$n.prototype.clear = Y3;
$n.prototype.delete = J3;
$n.prototype.get = e4;
$n.prototype.has = t4;
$n.prototype.set = n4;
function r4() {
  (this.__data__ = new $n()), (this.size = 0);
}
function i4(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function o4(e) {
  return this.__data__.get(e);
}
function a4(e) {
  return this.__data__.has(e);
}
function la(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var l4 = "[object AsyncFunction]",
  s4 = "[object Function]",
  u4 = "[object GeneratorFunction]",
  c4 = "[object Proxy]";
function r1(e) {
  if (!la(e)) return !1;
  var t = Gr(e);
  return t == s4 || t == u4 || t == l4 || t == c4;
}
var d4 = wn["__core-js_shared__"];
const Su = d4;
var lh = (function () {
  var e = /[^.]+$/.exec((Su && Su.keys && Su.keys.IE_PROTO) || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function f4(e) {
  return !!lh && lh in e;
}
var p4 = Function.prototype,
  h4 = p4.toString;
function Qr(e) {
  if (e != null) {
    try {
      return h4.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var m4 = /[\\^$.*+?()[\]{}|]/g,
  g4 = /^\[object .+?Constructor\]$/,
  v4 = Function.prototype,
  y4 = Object.prototype,
  x4 = v4.toString,
  w4 = y4.hasOwnProperty,
  E4 = RegExp(
    "^" +
      x4
        .call(w4)
        .replace(m4, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function S4(e) {
  if (!la(e) || f4(e)) return !1;
  var t = r1(e) ? E4 : g4;
  return t.test(Qr(e));
}
function C4(e, t) {
  return e == null ? void 0 : e[t];
}
function Yr(e, t) {
  var n = C4(e, t);
  return S4(n) ? n : void 0;
}
var _4 = Yr(wn, "Map");
const Ko = _4;
var T4 = Yr(Object, "create");
const Qo = T4;
function j4() {
  (this.__data__ = Qo ? Qo(null) : {}), (this.size = 0);
}
function k4(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var b4 = "__lodash_hash_undefined__",
  P4 = Object.prototype,
  N4 = P4.hasOwnProperty;
function O4(e) {
  var t = this.__data__;
  if (Qo) {
    var n = t[e];
    return n === b4 ? void 0 : n;
  }
  return N4.call(t, e) ? t[e] : void 0;
}
var R4 = Object.prototype,
  L4 = R4.hasOwnProperty;
function A4(e) {
  var t = this.__data__;
  return Qo ? t[e] !== void 0 : L4.call(t, e);
}
var M4 = "__lodash_hash_undefined__";
function F4(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Qo && t === void 0 ? M4 : t),
    this
  );
}
function zr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
zr.prototype.clear = j4;
zr.prototype.delete = k4;
zr.prototype.get = O4;
zr.prototype.has = A4;
zr.prototype.set = F4;
function D4() {
  (this.size = 0),
    (this.__data__ = {
      hash: new zr(),
      map: new (Ko || $n)(),
      string: new zr(),
    });
}
function I4(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
function ps(e, t) {
  var n = e.__data__;
  return I4(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function $4(e) {
  var t = ps(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function z4(e) {
  return ps(this, e).get(e);
}
function B4(e) {
  return ps(this, e).has(e);
}
function U4(e, t) {
  var n = ps(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
function hr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
hr.prototype.clear = D4;
hr.prototype.delete = $4;
hr.prototype.get = z4;
hr.prototype.has = B4;
hr.prototype.set = U4;
var V4 = 200;
function H4(e, t) {
  var n = this.__data__;
  if (n instanceof $n) {
    var r = n.__data__;
    if (!Ko || r.length < V4 - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new hr(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function Vi(e) {
  var t = (this.__data__ = new $n(e));
  this.size = t.size;
}
Vi.prototype.clear = r4;
Vi.prototype.delete = i4;
Vi.prototype.get = o4;
Vi.prototype.has = a4;
Vi.prototype.set = H4;
function W4(e, t) {
  for (
    var n = -1, r = e == null ? 0 : e.length;
    ++n < r && t(e[n], n, e) !== !1;

  );
  return e;
}
var q4 = (function () {
  try {
    var e = Yr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {}
})();
const sh = q4;
function i1(e, t, n) {
  t == "__proto__" && sh
    ? sh(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var G4 = Object.prototype,
  K4 = G4.hasOwnProperty;
function o1(e, t, n) {
  var r = e[t];
  (!(K4.call(e, t) && n1(r, n)) || (n === void 0 && !(t in e))) && i1(e, t, n);
}
function hs(e, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var o = -1, a = t.length; ++o < a; ) {
    var l = t[o],
      s = r ? r(n[l], e[l], l, n, e) : void 0;
    s === void 0 && (s = e[l]), i ? i1(n, l, s) : o1(n, l, s);
  }
  return n;
}
function Q4(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var Y4 = "[object Arguments]";
function uh(e) {
  return Kr(e) && Gr(e) == Y4;
}
var a1 = Object.prototype,
  X4 = a1.hasOwnProperty,
  Z4 = a1.propertyIsEnumerable,
  J4 = uh(
    (function () {
      return arguments;
    })()
  )
    ? uh
    : function (e) {
        return Kr(e) && X4.call(e, "callee") && !Z4.call(e, "callee");
      };
const eE = J4;
var tE = Array.isArray;
const sa = tE;
function nE() {
  return !1;
}
var l1 = typeof exports == "object" && exports && !exports.nodeType && exports,
  ch = l1 && typeof module == "object" && module && !module.nodeType && module,
  rE = ch && ch.exports === l1,
  dh = rE ? wn.Buffer : void 0,
  iE = dh ? dh.isBuffer : void 0,
  oE = iE || nE;
const s1 = oE;
var aE = 9007199254740991,
  lE = /^(?:0|[1-9]\d*)$/;
function sE(e, t) {
  var n = typeof e;
  return (
    (t = t ?? aE),
    !!t &&
      (n == "number" || (n != "symbol" && lE.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var uE = 9007199254740991;
function u1(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= uE;
}
var cE = "[object Arguments]",
  dE = "[object Array]",
  fE = "[object Boolean]",
  pE = "[object Date]",
  hE = "[object Error]",
  mE = "[object Function]",
  gE = "[object Map]",
  vE = "[object Number]",
  yE = "[object Object]",
  xE = "[object RegExp]",
  wE = "[object Set]",
  EE = "[object String]",
  SE = "[object WeakMap]",
  CE = "[object ArrayBuffer]",
  _E = "[object DataView]",
  TE = "[object Float32Array]",
  jE = "[object Float64Array]",
  kE = "[object Int8Array]",
  bE = "[object Int16Array]",
  PE = "[object Int32Array]",
  NE = "[object Uint8Array]",
  OE = "[object Uint8ClampedArray]",
  RE = "[object Uint16Array]",
  LE = "[object Uint32Array]",
  be = {};
be[TE] =
  be[jE] =
  be[kE] =
  be[bE] =
  be[PE] =
  be[NE] =
  be[OE] =
  be[RE] =
  be[LE] =
    !0;
be[cE] =
  be[dE] =
  be[CE] =
  be[fE] =
  be[_E] =
  be[pE] =
  be[hE] =
  be[mE] =
  be[gE] =
  be[vE] =
  be[yE] =
  be[xE] =
  be[wE] =
  be[EE] =
  be[SE] =
    !1;
function AE(e) {
  return Kr(e) && u1(e.length) && !!be[Gr(e)];
}
function Jd(e) {
  return function (t) {
    return e(t);
  };
}
var c1 = typeof exports == "object" && exports && !exports.nodeType && exports,
  _o = c1 && typeof module == "object" && module && !module.nodeType && module,
  ME = _o && _o.exports === c1,
  Cu = ME && Zg.process,
  FE = (function () {
    try {
      var e = _o && _o.require && _o.require("util").types;
      return e || (Cu && Cu.binding && Cu.binding("util"));
    } catch {}
  })();
const $i = FE;
var fh = $i && $i.isTypedArray,
  DE = fh ? Jd(fh) : AE;
const IE = DE;
var $E = Object.prototype,
  zE = $E.hasOwnProperty;
function d1(e, t) {
  var n = sa(e),
    r = !n && eE(e),
    i = !n && !r && s1(e),
    o = !n && !r && !i && IE(e),
    a = n || r || i || o,
    l = a ? Q4(e.length, String) : [],
    s = l.length;
  for (var c in e)
    (t || zE.call(e, c)) &&
      !(
        a &&
        (c == "length" ||
          (i && (c == "offset" || c == "parent")) ||
          (o && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
          sE(c, s))
      ) &&
      l.push(c);
  return l;
}
var BE = Object.prototype;
function ef(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || BE;
  return e === n;
}
var UE = e1(Object.keys, Object);
const VE = UE;
var HE = Object.prototype,
  WE = HE.hasOwnProperty;
function qE(e) {
  if (!ef(e)) return VE(e);
  var t = [];
  for (var n in Object(e)) WE.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function f1(e) {
  return e != null && u1(e.length) && !r1(e);
}
function tf(e) {
  return f1(e) ? d1(e) : qE(e);
}
function GE(e, t) {
  return e && hs(t, tf(t), e);
}
function KE(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var QE = Object.prototype,
  YE = QE.hasOwnProperty;
function XE(e) {
  if (!la(e)) return KE(e);
  var t = ef(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !YE.call(e, r))) || n.push(r);
  return n;
}
function nf(e) {
  return f1(e) ? d1(e, !0) : XE(e);
}
function ZE(e, t) {
  return e && hs(t, nf(t), e);
}
var p1 = typeof exports == "object" && exports && !exports.nodeType && exports,
  ph = p1 && typeof module == "object" && module && !module.nodeType && module,
  JE = ph && ph.exports === p1,
  hh = JE ? wn.Buffer : void 0,
  mh = hh ? hh.allocUnsafe : void 0;
function eS(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = mh ? mh(n) : new e.constructor(n);
  return e.copy(r), r;
}
function h1(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
function tS(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, o = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (o[i++] = a);
  }
  return o;
}
function m1() {
  return [];
}
var nS = Object.prototype,
  rS = nS.propertyIsEnumerable,
  gh = Object.getOwnPropertySymbols,
  iS = gh
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            tS(gh(e), function (t) {
              return rS.call(e, t);
            }));
      }
    : m1;
const rf = iS;
function oS(e, t) {
  return hs(e, rf(e), t);
}
function g1(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
}
var aS = Object.getOwnPropertySymbols,
  lS = aS
    ? function (e) {
        for (var t = []; e; ) g1(t, rf(e)), (e = Zd(e));
        return t;
      }
    : m1;
const v1 = lS;
function sS(e, t) {
  return hs(e, v1(e), t);
}
function y1(e, t, n) {
  var r = t(e);
  return sa(e) ? r : g1(r, n(e));
}
function uS(e) {
  return y1(e, tf, rf);
}
function cS(e) {
  return y1(e, nf, v1);
}
var dS = Yr(wn, "DataView");
const Ic = dS;
var fS = Yr(wn, "Promise");
const $c = fS;
var pS = Yr(wn, "Set");
const zc = pS;
var hS = Yr(wn, "WeakMap");
const Bc = hS;
var vh = "[object Map]",
  mS = "[object Object]",
  yh = "[object Promise]",
  xh = "[object Set]",
  wh = "[object WeakMap]",
  Eh = "[object DataView]",
  gS = Qr(Ic),
  vS = Qr(Ko),
  yS = Qr($c),
  xS = Qr(zc),
  wS = Qr(Bc),
  Cr = Gr;
((Ic && Cr(new Ic(new ArrayBuffer(1))) != Eh) ||
  (Ko && Cr(new Ko()) != vh) ||
  ($c && Cr($c.resolve()) != yh) ||
  (zc && Cr(new zc()) != xh) ||
  (Bc && Cr(new Bc()) != wh)) &&
  (Cr = function (e) {
    var t = Gr(e),
      n = t == mS ? e.constructor : void 0,
      r = n ? Qr(n) : "";
    if (r)
      switch (r) {
        case gS:
          return Eh;
        case vS:
          return vh;
        case yS:
          return yh;
        case xS:
          return xh;
        case wS:
          return wh;
      }
    return t;
  });
const of = Cr;
var ES = Object.prototype,
  SS = ES.hasOwnProperty;
function CS(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == "string" &&
      SS.call(e, "index") &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
var _S = wn.Uint8Array;
const Sh = _S;
function af(e) {
  var t = new e.constructor(e.byteLength);
  return new Sh(t).set(new Sh(e)), t;
}
function TS(e, t) {
  var n = t ? af(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var jS = /\w*$/;
function kS(e) {
  var t = new e.constructor(e.source, jS.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var Ch = ur ? ur.prototype : void 0,
  _h = Ch ? Ch.valueOf : void 0;
function bS(e) {
  return _h ? Object(_h.call(e)) : {};
}
function PS(e, t) {
  var n = t ? af(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var NS = "[object Boolean]",
  OS = "[object Date]",
  RS = "[object Map]",
  LS = "[object Number]",
  AS = "[object RegExp]",
  MS = "[object Set]",
  FS = "[object String]",
  DS = "[object Symbol]",
  IS = "[object ArrayBuffer]",
  $S = "[object DataView]",
  zS = "[object Float32Array]",
  BS = "[object Float64Array]",
  US = "[object Int8Array]",
  VS = "[object Int16Array]",
  HS = "[object Int32Array]",
  WS = "[object Uint8Array]",
  qS = "[object Uint8ClampedArray]",
  GS = "[object Uint16Array]",
  KS = "[object Uint32Array]";
function QS(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case IS:
      return af(e);
    case NS:
    case OS:
      return new r(+e);
    case $S:
      return TS(e, n);
    case zS:
    case BS:
    case US:
    case VS:
    case HS:
    case WS:
    case qS:
    case GS:
    case KS:
      return PS(e, n);
    case RS:
      return new r();
    case LS:
    case FS:
      return new r(e);
    case AS:
      return kS(e);
    case MS:
      return new r();
    case DS:
      return bS(e);
  }
}
var Th = Object.create,
  YS = (function () {
    function e() {}
    return function (t) {
      if (!la(t)) return {};
      if (Th) return Th(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })();
const XS = YS;
function ZS(e) {
  return typeof e.constructor == "function" && !ef(e) ? XS(Zd(e)) : {};
}
var JS = "[object Map]";
function eC(e) {
  return Kr(e) && of(e) == JS;
}
var jh = $i && $i.isMap,
  tC = jh ? Jd(jh) : eC;
const nC = tC;
var rC = "[object Set]";
function iC(e) {
  return Kr(e) && of(e) == rC;
}
var kh = $i && $i.isSet,
  oC = kh ? Jd(kh) : iC;
const aC = oC;
var lC = 1,
  sC = 2,
  uC = 4,
  x1 = "[object Arguments]",
  cC = "[object Array]",
  dC = "[object Boolean]",
  fC = "[object Date]",
  pC = "[object Error]",
  w1 = "[object Function]",
  hC = "[object GeneratorFunction]",
  mC = "[object Map]",
  gC = "[object Number]",
  E1 = "[object Object]",
  vC = "[object RegExp]",
  yC = "[object Set]",
  xC = "[object String]",
  wC = "[object Symbol]",
  EC = "[object WeakMap]",
  SC = "[object ArrayBuffer]",
  CC = "[object DataView]",
  _C = "[object Float32Array]",
  TC = "[object Float64Array]",
  jC = "[object Int8Array]",
  kC = "[object Int16Array]",
  bC = "[object Int32Array]",
  PC = "[object Uint8Array]",
  NC = "[object Uint8ClampedArray]",
  OC = "[object Uint16Array]",
  RC = "[object Uint32Array]",
  _e = {};
_e[x1] =
  _e[cC] =
  _e[SC] =
  _e[CC] =
  _e[dC] =
  _e[fC] =
  _e[_C] =
  _e[TC] =
  _e[jC] =
  _e[kC] =
  _e[bC] =
  _e[mC] =
  _e[gC] =
  _e[E1] =
  _e[vC] =
  _e[yC] =
  _e[xC] =
  _e[wC] =
  _e[PC] =
  _e[NC] =
  _e[OC] =
  _e[RC] =
    !0;
_e[pC] = _e[w1] = _e[EC] = !1;
function il(e, t, n, r, i, o) {
  var a,
    l = t & lC,
    s = t & sC,
    c = t & uC;
  if ((n && (a = i ? n(e, r, i, o) : n(e)), a !== void 0)) return a;
  if (!la(e)) return e;
  var d = sa(e);
  if (d) {
    if (((a = CS(e)), !l)) return h1(e, a);
  } else {
    var f = of(e),
      p = f == w1 || f == hC;
    if (s1(e)) return eS(e, l);
    if (f == E1 || f == x1 || (p && !i)) {
      if (((a = s || p ? {} : ZS(e)), !l))
        return s ? sS(e, ZE(a, e)) : oS(e, GE(a, e));
    } else {
      if (!_e[f]) return i ? e : {};
      a = QS(e, f, l);
    }
  }
  o || (o = new Vi());
  var x = o.get(e);
  if (x) return x;
  o.set(e, a),
    aC(e)
      ? e.forEach(function (E) {
          a.add(il(E, t, n, E, e, o));
        })
      : nC(e) &&
        e.forEach(function (E, m) {
          a.set(m, il(E, t, n, m, e, o));
        });
  var y = c ? (s ? cS : uS) : s ? nf : tf,
    v = d ? void 0 : y(e);
  return (
    W4(v || e, function (E, m) {
      v && ((m = E), (E = e[m])), o1(a, m, il(E, t, n, m, e, o));
    }),
    a
  );
}
var LC = 4;
function bh(e) {
  return il(e, LC);
}
function S1(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
    i[n] = t(e[n], n, e);
  return i;
}
var AC = "[object Symbol]";
function lf(e) {
  return typeof e == "symbol" || (Kr(e) && Gr(e) == AC);
}
var MC = "Expected a function";
function sf(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(MC);
  var n = function () {
    var r = arguments,
      i = t ? t.apply(this, r) : r[0],
      o = n.cache;
    if (o.has(i)) return o.get(i);
    var a = e.apply(this, r);
    return (n.cache = o.set(i, a) || o), a;
  };
  return (n.cache = new (sf.Cache || hr)()), n;
}
sf.Cache = hr;
var FC = 500;
function DC(e) {
  var t = sf(e, function (r) {
      return n.size === FC && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var IC =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  $C = /\\(\\)?/g,
  zC = DC(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(IC, function (n, r, i, o) {
        t.push(i ? o.replace($C, "$1") : r || n);
      }),
      t
    );
  });
const BC = zC;
var UC = 1 / 0;
function VC(e) {
  if (typeof e == "string" || lf(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -UC ? "-0" : t;
}
var HC = 1 / 0,
  Ph = ur ? ur.prototype : void 0,
  Nh = Ph ? Ph.toString : void 0;
function C1(e) {
  if (typeof e == "string") return e;
  if (sa(e)) return S1(e, C1) + "";
  if (lf(e)) return Nh ? Nh.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -HC ? "-0" : t;
}
function WC(e) {
  return e == null ? "" : C1(e);
}
function _1(e) {
  return sa(e) ? S1(e, VC) : lf(e) ? [e] : h1(BC(WC(e)));
}
var T1 = { exports: {} },
  xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Je = typeof Symbol == "function" && Symbol.for,
  uf = Je ? Symbol.for("react.element") : 60103,
  cf = Je ? Symbol.for("react.portal") : 60106,
  ms = Je ? Symbol.for("react.fragment") : 60107,
  gs = Je ? Symbol.for("react.strict_mode") : 60108,
  vs = Je ? Symbol.for("react.profiler") : 60114,
  ys = Je ? Symbol.for("react.provider") : 60109,
  xs = Je ? Symbol.for("react.context") : 60110,
  df = Je ? Symbol.for("react.async_mode") : 60111,
  ws = Je ? Symbol.for("react.concurrent_mode") : 60111,
  Es = Je ? Symbol.for("react.forward_ref") : 60112,
  Ss = Je ? Symbol.for("react.suspense") : 60113,
  qC = Je ? Symbol.for("react.suspense_list") : 60120,
  Cs = Je ? Symbol.for("react.memo") : 60115,
  _s = Je ? Symbol.for("react.lazy") : 60116,
  GC = Je ? Symbol.for("react.block") : 60121,
  KC = Je ? Symbol.for("react.fundamental") : 60117,
  QC = Je ? Symbol.for("react.responder") : 60118,
  YC = Je ? Symbol.for("react.scope") : 60119;
function Lt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case uf:
        switch (((e = e.type), e)) {
          case df:
          case ws:
          case ms:
          case vs:
          case gs:
          case Ss:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case xs:
              case Es:
              case _s:
              case Cs:
              case ys:
                return e;
              default:
                return t;
            }
        }
      case cf:
        return t;
    }
  }
}
function j1(e) {
  return Lt(e) === ws;
}
xe.AsyncMode = df;
xe.ConcurrentMode = ws;
xe.ContextConsumer = xs;
xe.ContextProvider = ys;
xe.Element = uf;
xe.ForwardRef = Es;
xe.Fragment = ms;
xe.Lazy = _s;
xe.Memo = Cs;
xe.Portal = cf;
xe.Profiler = vs;
xe.StrictMode = gs;
xe.Suspense = Ss;
xe.isAsyncMode = function (e) {
  return j1(e) || Lt(e) === df;
};
xe.isConcurrentMode = j1;
xe.isContextConsumer = function (e) {
  return Lt(e) === xs;
};
xe.isContextProvider = function (e) {
  return Lt(e) === ys;
};
xe.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === uf;
};
xe.isForwardRef = function (e) {
  return Lt(e) === Es;
};
xe.isFragment = function (e) {
  return Lt(e) === ms;
};
xe.isLazy = function (e) {
  return Lt(e) === _s;
};
xe.isMemo = function (e) {
  return Lt(e) === Cs;
};
xe.isPortal = function (e) {
  return Lt(e) === cf;
};
xe.isProfiler = function (e) {
  return Lt(e) === vs;
};
xe.isStrictMode = function (e) {
  return Lt(e) === gs;
};
xe.isSuspense = function (e) {
  return Lt(e) === Ss;
};
xe.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ms ||
    e === ws ||
    e === vs ||
    e === gs ||
    e === Ss ||
    e === qC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === _s ||
        e.$$typeof === Cs ||
        e.$$typeof === ys ||
        e.$$typeof === xs ||
        e.$$typeof === Es ||
        e.$$typeof === KC ||
        e.$$typeof === QC ||
        e.$$typeof === YC ||
        e.$$typeof === GC))
  );
};
xe.typeOf = Lt;
T1.exports = xe;
var XC = T1.exports,
  k1 = XC,
  ZC = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  JC = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  b1 = {};
b1[k1.ForwardRef] = ZC;
b1[k1.Memo] = JC;
function Ye() {
  return (
    (Ye =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    Ye.apply(this, arguments)
  );
}
function P1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Ts = S.createContext(void 0);
Ts.displayName = "FormikContext";
Ts.Provider;
Ts.Consumer;
function e5() {
  var e = S.useContext(Ts);
  return e || Q3(!1), e;
}
var Xt = function (t) {
    return typeof t == "function";
  },
  js = function (t) {
    return t !== null && typeof t == "object";
  },
  t5 = function (t) {
    return String(Math.floor(Number(t))) === t;
  },
  _u = function (t) {
    return Object.prototype.toString.call(t) === "[object String]";
  },
  Tu = function (t) {
    return js(t) && Xt(t.then);
  };
function Tt(e, t, n, r) {
  r === void 0 && (r = 0);
  for (var i = _1(t); e && r < i.length; ) e = e[i[r++]];
  return (r !== i.length && !e) || e === void 0 ? n : e;
}
function Lr(e, t, n) {
  for (var r = bh(e), i = r, o = 0, a = _1(t); o < a.length - 1; o++) {
    var l = a[o],
      s = Tt(e, a.slice(0, o + 1));
    if (s && (js(s) || Array.isArray(s))) i = i[l] = bh(s);
    else {
      var c = a[o + 1];
      i = i[l] = t5(c) && Number(c) >= 0 ? [] : {};
    }
  }
  return (o === 0 ? e : i)[a[o]] === n
    ? e
    : (n === void 0 ? delete i[a[o]] : (i[a[o]] = n),
      o === 0 && n === void 0 && delete r[a[o]],
      r);
}
function N1(e, t, n, r) {
  n === void 0 && (n = new WeakMap()), r === void 0 && (r = {});
  for (var i = 0, o = Object.keys(e); i < o.length; i++) {
    var a = o[i],
      l = e[a];
    js(l)
      ? n.get(l) ||
        (n.set(l, !0), (r[a] = Array.isArray(l) ? [] : {}), N1(l, t, n, r[a]))
      : (r[a] = t);
  }
  return r;
}
function n5(e, t) {
  switch (t.type) {
    case "SET_VALUES":
      return Ye({}, e, { values: t.payload });
    case "SET_TOUCHED":
      return Ye({}, e, { touched: t.payload });
    case "SET_ERRORS":
      return Sr(e.errors, t.payload) ? e : Ye({}, e, { errors: t.payload });
    case "SET_STATUS":
      return Ye({}, e, { status: t.payload });
    case "SET_ISSUBMITTING":
      return Ye({}, e, { isSubmitting: t.payload });
    case "SET_ISVALIDATING":
      return Ye({}, e, { isValidating: t.payload });
    case "SET_FIELD_VALUE":
      return Ye({}, e, {
        values: Lr(e.values, t.payload.field, t.payload.value),
      });
    case "SET_FIELD_TOUCHED":
      return Ye({}, e, {
        touched: Lr(e.touched, t.payload.field, t.payload.value),
      });
    case "SET_FIELD_ERROR":
      return Ye({}, e, {
        errors: Lr(e.errors, t.payload.field, t.payload.value),
      });
    case "RESET_FORM":
      return Ye({}, e, t.payload);
    case "SET_FORMIK_STATE":
      return t.payload(e);
    case "SUBMIT_ATTEMPT":
      return Ye({}, e, {
        touched: N1(e.values, !0),
        isSubmitting: !0,
        submitCount: e.submitCount + 1,
      });
    case "SUBMIT_FAILURE":
      return Ye({}, e, { isSubmitting: !1 });
    case "SUBMIT_SUCCESS":
      return Ye({}, e, { isSubmitting: !1 });
    default:
      return e;
  }
}
var xr = {},
  Aa = {};
function r5(e) {
  var t = e.validateOnChange,
    n = t === void 0 ? !0 : t,
    r = e.validateOnBlur,
    i = r === void 0 ? !0 : r,
    o = e.validateOnMount,
    a = o === void 0 ? !1 : o,
    l = e.isInitialValid,
    s = e.enableReinitialize,
    c = s === void 0 ? !1 : s,
    d = e.onSubmit,
    f = P1(e, [
      "validateOnChange",
      "validateOnBlur",
      "validateOnMount",
      "isInitialValid",
      "enableReinitialize",
      "onSubmit",
    ]),
    p = Ye(
      {
        validateOnChange: n,
        validateOnBlur: i,
        validateOnMount: a,
        onSubmit: d,
      },
      f
    ),
    x = S.useRef(p.initialValues),
    y = S.useRef(p.initialErrors || xr),
    v = S.useRef(p.initialTouched || Aa),
    E = S.useRef(p.initialStatus),
    m = S.useRef(!1),
    g = S.useRef({});
  S.useEffect(function () {
    return (
      (m.current = !0),
      function () {
        m.current = !1;
      }
    );
  }, []);
  var w = S.useState(0),
    h = w[1],
    C = S.useRef({
      values: p.initialValues,
      errors: p.initialErrors || xr,
      touched: p.initialTouched || Aa,
      status: p.initialStatus,
      isSubmitting: !1,
      isValidating: !1,
      submitCount: 0,
    }),
    P = C.current,
    k = S.useCallback(function (_) {
      var z = C.current;
      (C.current = n5(z, _)),
        z !== C.current &&
          h(function (q) {
            return q + 1;
          });
    }, []),
    M = S.useCallback(
      function (_, z) {
        return new Promise(function (q, Q) {
          var ne = p.validate(_, z);
          ne == null
            ? q(xr)
            : Tu(ne)
            ? ne.then(
                function (he) {
                  q(he || xr);
                },
                function (he) {
                  Q(he);
                }
              )
            : q(ne);
        });
      },
      [p.validate]
    ),
    U = S.useCallback(
      function (_, z) {
        var q = p.validationSchema,
          Q = Xt(q) ? q(z) : q,
          ne = z && Q.validateAt ? Q.validateAt(z, _) : o5(_, Q);
        return new Promise(function (he, Ae) {
          ne.then(
            function () {
              he(xr);
            },
            function (Kt) {
              Kt.name === "ValidationError" ? he(i5(Kt)) : Ae(Kt);
            }
          );
        });
      },
      [p.validationSchema]
    ),
    I = S.useCallback(function (_, z) {
      return new Promise(function (q) {
        return q(g.current[_].validate(z));
      });
    }, []),
    oe = S.useCallback(
      function (_) {
        var z = Object.keys(g.current).filter(function (Q) {
            return Xt(g.current[Q].validate);
          }),
          q =
            z.length > 0
              ? z.map(function (Q) {
                  return I(Q, Tt(_, Q));
                })
              : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
        return Promise.all(q).then(function (Q) {
          return Q.reduce(function (ne, he, Ae) {
            return (
              he === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                (he && (ne = Lr(ne, z[Ae], he))),
              ne
            );
          }, {});
        });
      },
      [I]
    ),
    R = S.useCallback(
      function (_) {
        return Promise.all([
          oe(_),
          p.validationSchema ? U(_) : {},
          p.validate ? M(_) : {},
        ]).then(function (z) {
          var q = z[0],
            Q = z[1],
            ne = z[2],
            he = Fc.all([q, Q, ne], { arrayMerge: a5 });
          return he;
        });
      },
      [p.validate, p.validationSchema, oe, M, U]
    ),
    D = It(function (_) {
      return (
        _ === void 0 && (_ = P.values),
        k({ type: "SET_ISVALIDATING", payload: !0 }),
        R(_).then(function (z) {
          return (
            m.current &&
              (k({ type: "SET_ISVALIDATING", payload: !1 }),
              k({ type: "SET_ERRORS", payload: z })),
            z
          );
        })
      );
    });
  S.useEffect(
    function () {
      a && m.current === !0 && Sr(x.current, p.initialValues) && D(x.current);
    },
    [a, D]
  );
  var H = S.useCallback(
    function (_) {
      var z = _ && _.values ? _.values : x.current,
        q =
          _ && _.errors
            ? _.errors
            : y.current
            ? y.current
            : p.initialErrors || {},
        Q =
          _ && _.touched
            ? _.touched
            : v.current
            ? v.current
            : p.initialTouched || {},
        ne = _ && _.status ? _.status : E.current ? E.current : p.initialStatus;
      (x.current = z), (y.current = q), (v.current = Q), (E.current = ne);
      var he = function () {
        k({
          type: "RESET_FORM",
          payload: {
            isSubmitting: !!_ && !!_.isSubmitting,
            errors: q,
            touched: Q,
            status: ne,
            values: z,
            isValidating: !!_ && !!_.isValidating,
            submitCount:
              _ && _.submitCount && typeof _.submitCount == "number"
                ? _.submitCount
                : 0,
          },
        });
      };
      if (p.onReset) {
        var Ae = p.onReset(P.values, Ct);
        Tu(Ae) ? Ae.then(he) : he();
      } else he();
    },
    [p.initialErrors, p.initialStatus, p.initialTouched]
  );
  S.useEffect(
    function () {
      m.current === !0 &&
        !Sr(x.current, p.initialValues) &&
        c &&
        ((x.current = p.initialValues), H(), a && D(x.current));
    },
    [c, p.initialValues, H, a, D]
  ),
    S.useEffect(
      function () {
        c &&
          m.current === !0 &&
          !Sr(y.current, p.initialErrors) &&
          ((y.current = p.initialErrors || xr),
          k({ type: "SET_ERRORS", payload: p.initialErrors || xr }));
      },
      [c, p.initialErrors]
    ),
    S.useEffect(
      function () {
        c &&
          m.current === !0 &&
          !Sr(v.current, p.initialTouched) &&
          ((v.current = p.initialTouched || Aa),
          k({ type: "SET_TOUCHED", payload: p.initialTouched || Aa }));
      },
      [c, p.initialTouched]
    ),
    S.useEffect(
      function () {
        c &&
          m.current === !0 &&
          !Sr(E.current, p.initialStatus) &&
          ((E.current = p.initialStatus),
          k({ type: "SET_STATUS", payload: p.initialStatus }));
      },
      [c, p.initialStatus, p.initialTouched]
    );
  var X = It(function (_) {
      if (g.current[_] && Xt(g.current[_].validate)) {
        var z = Tt(P.values, _),
          q = g.current[_].validate(z);
        return Tu(q)
          ? (k({ type: "SET_ISVALIDATING", payload: !0 }),
            q
              .then(function (Q) {
                return Q;
              })
              .then(function (Q) {
                k({ type: "SET_FIELD_ERROR", payload: { field: _, value: Q } }),
                  k({ type: "SET_ISVALIDATING", payload: !1 });
              }))
          : (k({ type: "SET_FIELD_ERROR", payload: { field: _, value: q } }),
            Promise.resolve(q));
      } else if (p.validationSchema)
        return (
          k({ type: "SET_ISVALIDATING", payload: !0 }),
          U(P.values, _)
            .then(function (Q) {
              return Q;
            })
            .then(function (Q) {
              k({
                type: "SET_FIELD_ERROR",
                payload: { field: _, value: Tt(Q, _) },
              }),
                k({ type: "SET_ISVALIDATING", payload: !1 });
            })
        );
      return Promise.resolve();
    }),
    le = S.useCallback(function (_, z) {
      var q = z.validate;
      g.current[_] = { validate: q };
    }, []),
    me = S.useCallback(function (_) {
      delete g.current[_];
    }, []),
    A = It(function (_, z) {
      k({ type: "SET_TOUCHED", payload: _ });
      var q = z === void 0 ? i : z;
      return q ? D(P.values) : Promise.resolve();
    }),
    N = S.useCallback(function (_) {
      k({ type: "SET_ERRORS", payload: _ });
    }, []),
    j = It(function (_, z) {
      var q = Xt(_) ? _(P.values) : _;
      k({ type: "SET_VALUES", payload: q });
      var Q = z === void 0 ? n : z;
      return Q ? D(q) : Promise.resolve();
    }),
    G = S.useCallback(function (_, z) {
      k({ type: "SET_FIELD_ERROR", payload: { field: _, value: z } });
    }, []),
    $ = It(function (_, z, q) {
      k({ type: "SET_FIELD_VALUE", payload: { field: _, value: z } });
      var Q = q === void 0 ? n : q;
      return Q ? D(Lr(P.values, _, z)) : Promise.resolve();
    }),
    Y = S.useCallback(
      function (_, z) {
        var q = z,
          Q = _,
          ne;
        if (!_u(_)) {
          _.persist && _.persist();
          var he = _.target ? _.target : _.currentTarget,
            Ae = he.type,
            Kt = he.name,
            Jr = he.id,
            Wi = he.value,
            fa = he.checked,
            kf = he.outerHTML,
            T = he.options,
            b = he.multiple;
          (q = z || Kt || Jr),
            (Q = /number|range/.test(Ae)
              ? ((ne = parseFloat(Wi)), isNaN(ne) ? "" : ne)
              : /checkbox/.test(Ae)
              ? s5(Tt(P.values, q), fa, Wi)
              : T && b
              ? l5(T)
              : Wi);
        }
        q && $(q, Q);
      },
      [$, P.values]
    ),
    W = It(function (_) {
      if (_u(_))
        return function (z) {
          return Y(z, _);
        };
      Y(_);
    }),
    se = It(function (_, z, q) {
      z === void 0 && (z = !0),
        k({ type: "SET_FIELD_TOUCHED", payload: { field: _, value: z } });
      var Q = q === void 0 ? i : q;
      return Q ? D(P.values) : Promise.resolve();
    }),
    ge = S.useCallback(
      function (_, z) {
        _.persist && _.persist();
        var q = _.target,
          Q = q.name,
          ne = q.id,
          he = q.outerHTML,
          Ae = z || Q || ne;
        se(Ae, !0);
      },
      [se]
    ),
    Fe = It(function (_) {
      if (_u(_))
        return function (z) {
          return ge(z, _);
        };
      ge(_);
    }),
    Ke = S.useCallback(function (_) {
      Xt(_)
        ? k({ type: "SET_FORMIK_STATE", payload: _ })
        : k({
            type: "SET_FORMIK_STATE",
            payload: function () {
              return _;
            },
          });
    }, []),
    un = S.useCallback(function (_) {
      k({ type: "SET_STATUS", payload: _ });
    }, []),
    At = S.useCallback(function (_) {
      k({ type: "SET_ISSUBMITTING", payload: _ });
    }, []),
    Ve = It(function () {
      return (
        k({ type: "SUBMIT_ATTEMPT" }),
        D().then(function (_) {
          var z = _ instanceof Error,
            q = !z && Object.keys(_).length === 0;
          if (q) {
            var Q;
            try {
              if (((Q = Ft()), Q === void 0)) return;
            } catch (ne) {
              throw ne;
            }
            return Promise.resolve(Q)
              .then(function (ne) {
                return m.current && k({ type: "SUBMIT_SUCCESS" }), ne;
              })
              .catch(function (ne) {
                if (m.current) throw (k({ type: "SUBMIT_FAILURE" }), ne);
              });
          } else if (m.current && (k({ type: "SUBMIT_FAILURE" }), z)) throw _;
        })
      );
    }),
    Mt = It(function (_) {
      _ && _.preventDefault && Xt(_.preventDefault) && _.preventDefault(),
        _ && _.stopPropagation && Xt(_.stopPropagation) && _.stopPropagation(),
        Ve().catch(function (z) {
          console.warn(
            "Warning: An unhandled error was caught from submitForm()",
            z
          );
        });
    }),
    Ct = {
      resetForm: H,
      validateForm: D,
      validateField: X,
      setErrors: N,
      setFieldError: G,
      setFieldTouched: se,
      setFieldValue: $,
      setStatus: un,
      setSubmitting: At,
      setTouched: A,
      setValues: j,
      setFormikState: Ke,
      submitForm: Ve,
    },
    Ft = It(function () {
      return d(P.values, Ct);
    }),
    ve = It(function (_) {
      _ && _.preventDefault && Xt(_.preventDefault) && _.preventDefault(),
        _ && _.stopPropagation && Xt(_.stopPropagation) && _.stopPropagation(),
        H();
    }),
    et = S.useCallback(
      function (_) {
        return {
          value: Tt(P.values, _),
          error: Tt(P.errors, _),
          touched: !!Tt(P.touched, _),
          initialValue: Tt(x.current, _),
          initialTouched: !!Tt(v.current, _),
          initialError: Tt(y.current, _),
        };
      },
      [P.errors, P.touched, P.values]
    ),
    He = S.useCallback(
      function (_) {
        return {
          setValue: function (q, Q) {
            return $(_, q, Q);
          },
          setTouched: function (q, Q) {
            return se(_, q, Q);
          },
          setError: function (q) {
            return G(_, q);
          },
        };
      },
      [$, se, G]
    ),
    Ce = S.useCallback(
      function (_) {
        var z = js(_),
          q = z ? _.name : _,
          Q = Tt(P.values, q),
          ne = { name: q, value: Q, onChange: W, onBlur: Fe };
        if (z) {
          var he = _.type,
            Ae = _.value,
            Kt = _.as,
            Jr = _.multiple;
          he === "checkbox"
            ? Ae === void 0
              ? (ne.checked = !!Q)
              : ((ne.checked = !!(Array.isArray(Q) && ~Q.indexOf(Ae))),
                (ne.value = Ae))
            : he === "radio"
            ? ((ne.checked = Q === Ae), (ne.value = Ae))
            : Kt === "select" &&
              Jr &&
              ((ne.value = ne.value || []), (ne.multiple = !0));
        }
        return ne;
      },
      [Fe, W, P.values]
    ),
    Dt = S.useMemo(
      function () {
        return !Sr(x.current, P.values);
      },
      [x.current, P.values]
    ),
    mt = S.useMemo(
      function () {
        return typeof l < "u"
          ? Dt
            ? P.errors && Object.keys(P.errors).length === 0
            : l !== !1 && Xt(l)
            ? l(p)
            : l
          : P.errors && Object.keys(P.errors).length === 0;
      },
      [l, Dt, P.errors, p]
    ),
    _t = Ye({}, P, {
      initialValues: x.current,
      initialErrors: y.current,
      initialTouched: v.current,
      initialStatus: E.current,
      handleBlur: Fe,
      handleChange: W,
      handleReset: ve,
      handleSubmit: Mt,
      resetForm: H,
      setErrors: N,
      setFormikState: Ke,
      setFieldTouched: se,
      setFieldValue: $,
      setFieldError: G,
      setStatus: un,
      setSubmitting: At,
      setTouched: A,
      setValues: j,
      submitForm: Ve,
      validateForm: D,
      validateField: X,
      isValid: mt,
      dirty: Dt,
      unregisterField: me,
      registerField: le,
      getFieldProps: Ce,
      getFieldMeta: et,
      getFieldHelpers: He,
      validateOnBlur: i,
      validateOnChange: n,
      validateOnMount: a,
    });
  return _t;
}
function i5(e) {
  var t = {};
  if (e.inner) {
    if (e.inner.length === 0) return Lr(t, e.path, e.message);
    for (
      var i = e.inner,
        n = Array.isArray(i),
        r = 0,
        i = n ? i : i[Symbol.iterator]();
      ;

    ) {
      var o;
      if (n) {
        if (r >= i.length) break;
        o = i[r++];
      } else {
        if (((r = i.next()), r.done)) break;
        o = r.value;
      }
      var a = o;
      Tt(t, a.path) || (t = Lr(t, a.path, a.message));
    }
  }
  return t;
}
function o5(e, t, n, r) {
  n === void 0 && (n = !1);
  var i = Uc(e);
  return t[n ? "validateSync" : "validate"](i, {
    abortEarly: !1,
    context: r || i,
  });
}
function Uc(e) {
  var t = Array.isArray(e) ? [] : {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      var r = String(n);
      Array.isArray(e[r]) === !0
        ? (t[r] = e[r].map(function (i) {
            return Array.isArray(i) === !0 || ih(i)
              ? Uc(i)
              : i !== ""
              ? i
              : void 0;
          }))
        : ih(e[r])
        ? (t[r] = Uc(e[r]))
        : (t[r] = e[r] !== "" ? e[r] : void 0);
    }
  return t;
}
function a5(e, t, n) {
  var r = e.slice();
  return (
    t.forEach(function (o, a) {
      if (typeof r[a] > "u") {
        var l = n.clone !== !1,
          s = l && n.isMergeableObject(o);
        r[a] = s ? Fc(Array.isArray(o) ? [] : {}, o, n) : o;
      } else n.isMergeableObject(o) ? (r[a] = Fc(e[a], o, n)) : e.indexOf(o) === -1 && r.push(o);
    }),
    r
  );
}
function l5(e) {
  return Array.from(e)
    .filter(function (t) {
      return t.selected;
    })
    .map(function (t) {
      return t.value;
    });
}
function s5(e, t, n) {
  if (typeof e == "boolean") return !!t;
  var r = [],
    i = !1,
    o = -1;
  if (Array.isArray(e)) (r = e), (o = e.indexOf(n)), (i = o >= 0);
  else if (!n || n == "true" || n == "false") return !!t;
  return t && n && !i
    ? r.concat(n)
    : i
    ? r.slice(0, o).concat(r.slice(o + 1))
    : r;
}
var u5 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u"
    ? S.useLayoutEffect
    : S.useEffect;
function It(e) {
  var t = S.useRef(e);
  return (
    u5(function () {
      t.current = e;
    }),
    S.useCallback(function () {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return t.current.apply(void 0, r);
    }, [])
  );
}
var c5 = S.forwardRef(function (e, t) {
  var n = e.action,
    r = P1(e, ["action"]),
    i = n ?? "#",
    o = e5(),
    a = o.handleReset,
    l = o.handleSubmit;
  return S.createElement(
    "form",
    Ye({ onSubmit: l, ref: t, onReset: a, action: i }, r)
  );
});
c5.displayName = "Form";
function Xr(e) {
  (this._maxSize = e), this.clear();
}
Xr.prototype.clear = function () {
  (this._size = 0), (this._values = Object.create(null));
};
Xr.prototype.get = function (e) {
  return this._values[e];
};
Xr.prototype.set = function (e, t) {
  return (
    this._size >= this._maxSize && this.clear(),
    e in this._values || this._size++,
    (this._values[e] = t)
  );
};
var d5 = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
  O1 = /^\d+$/,
  f5 = /^\d/,
  p5 = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
  h5 = /^\s*(['"]?)(.*?)(\1)\s*$/,
  ff = 512,
  Oh = new Xr(ff),
  Rh = new Xr(ff),
  Lh = new Xr(ff),
  Ar = {
    Cache: Xr,
    split: Vc,
    normalizePath: ju,
    setter: function (e) {
      var t = ju(e);
      return (
        Rh.get(e) ||
        Rh.set(e, function (r, i) {
          for (var o = 0, a = t.length, l = r; o < a - 1; ) {
            var s = t[o];
            if (s === "__proto__" || s === "constructor" || s === "prototype")
              return r;
            l = l[t[o++]];
          }
          l[t[o]] = i;
        })
      );
    },
    getter: function (e, t) {
      var n = ju(e);
      return (
        Lh.get(e) ||
        Lh.set(e, function (i) {
          for (var o = 0, a = n.length; o < a; )
            if (i != null || !t) i = i[n[o++]];
            else return;
          return i;
        })
      );
    },
    join: function (e) {
      return e.reduce(function (t, n) {
        return t + (pf(n) || O1.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
      }, "");
    },
    forEach: function (e, t, n) {
      m5(Array.isArray(e) ? e : Vc(e), t, n);
    },
  };
function ju(e) {
  return (
    Oh.get(e) ||
    Oh.set(
      e,
      Vc(e).map(function (t) {
        return t.replace(h5, "$2");
      })
    )
  );
}
function Vc(e) {
  return e.match(d5) || [""];
}
function m5(e, t, n) {
  var r = e.length,
    i,
    o,
    a,
    l;
  for (o = 0; o < r; o++)
    (i = e[o]),
      i &&
        (y5(i) && (i = '"' + i + '"'),
        (l = pf(i)),
        (a = !l && /^\d+$/.test(i)),
        t.call(n, i, l, a, o, e));
}
function pf(e) {
  return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
}
function g5(e) {
  return e.match(f5) && !e.match(O1);
}
function v5(e) {
  return p5.test(e);
}
function y5(e) {
  return !pf(e) && (g5(e) || v5(e));
}
const x5 =
    /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
  ks = (e) => e.match(x5) || [],
  bs = (e) => e[0].toUpperCase() + e.slice(1),
  hf = (e, t) => ks(e).join(t).toLowerCase(),
  R1 = (e) =>
    ks(e).reduce(
      (t, n) =>
        `${t}${
          t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()
        }`,
      ""
    ),
  w5 = (e) => bs(R1(e)),
  E5 = (e) => hf(e, "_"),
  S5 = (e) => hf(e, "-"),
  C5 = (e) => bs(hf(e, " ")),
  _5 = (e) => ks(e).map(bs).join(" ");
var ku = {
    words: ks,
    upperFirst: bs,
    camelCase: R1,
    pascalCase: w5,
    snakeCase: E5,
    kebabCase: S5,
    sentenceCase: C5,
    titleCase: _5,
  },
  mf = { exports: {} };
mf.exports = function (e) {
  return L1(T5(e), e);
};
mf.exports.array = L1;
function L1(e, t) {
  var n = e.length,
    r = new Array(n),
    i = {},
    o = n,
    a = j5(t),
    l = k5(e);
  for (
    t.forEach(function (c) {
      if (!l.has(c[0]) || !l.has(c[1]))
        throw new Error(
          "Unknown node. There is an unknown node in the supplied edges."
        );
    });
    o--;

  )
    i[o] || s(e[o], o, new Set());
  return r;
  function s(c, d, f) {
    if (f.has(c)) {
      var p;
      try {
        p = ", node was:" + JSON.stringify(c);
      } catch {
        p = "";
      }
      throw new Error("Cyclic dependency" + p);
    }
    if (!l.has(c))
      throw new Error(
        "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
          JSON.stringify(c)
      );
    if (!i[d]) {
      i[d] = !0;
      var x = a.get(c) || new Set();
      if (((x = Array.from(x)), (d = x.length))) {
        f.add(c);
        do {
          var y = x[--d];
          s(y, l.get(y), f);
        } while (d);
        f.delete(c);
      }
      r[--n] = c;
    }
  }
}
function T5(e) {
  for (var t = new Set(), n = 0, r = e.length; n < r; n++) {
    var i = e[n];
    t.add(i[0]), t.add(i[1]);
  }
  return Array.from(t);
}
function j5(e) {
  for (var t = new Map(), n = 0, r = e.length; n < r; n++) {
    var i = e[n];
    t.has(i[0]) || t.set(i[0], new Set()),
      t.has(i[1]) || t.set(i[1], new Set()),
      t.get(i[0]).add(i[1]);
  }
  return t;
}
function k5(e) {
  for (var t = new Map(), n = 0, r = e.length; n < r; n++) t.set(e[n], n);
  return t;
}
var b5 = mf.exports;
const P5 = Ur(b5),
  N5 = Object.prototype.toString,
  O5 = Error.prototype.toString,
  R5 = RegExp.prototype.toString,
  L5 = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
  A5 = /^Symbol\((.*)\)(.*)$/;
function M5(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function Ah(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const n = typeof e;
  if (n === "number") return M5(e);
  if (n === "string") return t ? `"${e}"` : e;
  if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (n === "symbol") return L5.call(e).replace(A5, "Symbol($1)");
  const r = N5.call(e).slice(8, -1);
  return r === "Date"
    ? isNaN(e.getTime())
      ? "" + e
      : e.toISOString(e)
    : r === "Error" || e instanceof Error
    ? "[" + O5.call(e) + "]"
    : r === "RegExp"
    ? R5.call(e)
    : null;
}
function Pi(e, t) {
  let n = Ah(e, t);
  return n !== null
    ? n
    : JSON.stringify(
        e,
        function (r, i) {
          let o = Ah(this[r], t);
          return o !== null ? o : i;
        },
        2
      );
}
function A1(e) {
  return e == null ? [] : [].concat(e);
}
let F5 = /\$\{\s*(\w+)\s*\}/g;
class kt extends Error {
  static formatError(t, n) {
    const r = n.label || n.path || "this";
    return (
      r !== n.path && (n = Object.assign({}, n, { path: r })),
      typeof t == "string"
        ? t.replace(F5, (i, o) => Pi(n[o]))
        : typeof t == "function"
        ? t(n)
        : t
    );
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, n, r, i) {
    super(),
      (this.value = void 0),
      (this.path = void 0),
      (this.type = void 0),
      (this.errors = void 0),
      (this.params = void 0),
      (this.inner = void 0),
      (this.name = "ValidationError"),
      (this.value = n),
      (this.path = r),
      (this.type = i),
      (this.errors = []),
      (this.inner = []),
      A1(t).forEach((o) => {
        kt.isError(o)
          ? (this.errors.push(...o.errors),
            (this.inner = this.inner.concat(o.inner.length ? o.inner : o)))
          : this.errors.push(o);
      }),
      (this.message =
        this.errors.length > 1
          ? `${this.errors.length} errors occurred`
          : this.errors[0]),
      Error.captureStackTrace && Error.captureStackTrace(this, kt);
  }
}
let _n = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({ path: e, type: t, value: n, originalValue: r }) => {
      const i =
        r != null && r !== n ? ` (cast from the value \`${Pi(r, !0)}\`).` : ".";
      return t !== "mixed"
        ? `${e} must be a \`${t}\` type, but the final value was: \`${Pi(
            n,
            !0
          )}\`` + i
        : `${e} must match the configured type. The validated value was: \`${Pi(
            n,
            !0
          )}\`` + i;
    },
  },
  Zt = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string",
  },
  D5 = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer",
  },
  Hc = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}",
  },
  I5 = { isValue: "${path} field must be ${value}" },
  Wc = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
  $5 = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items",
  };
Object.assign(Object.create(null), {
  mixed: _n,
  string: Zt,
  number: D5,
  date: Hc,
  object: Wc,
  array: $5,
  boolean: I5,
});
const gf = (e) => e && e.__isYupSchema__;
class Ml {
  static fromOptions(t, n) {
    if (!n.then && !n.otherwise)
      throw new TypeError(
        "either `then:` or `otherwise:` is required for `when()` conditions"
      );
    let { is: r, then: i, otherwise: o } = n,
      a = typeof r == "function" ? r : (...l) => l.every((s) => s === r);
    return new Ml(t, (l, s) => {
      var c;
      let d = a(...l) ? i : o;
      return (c = d == null ? void 0 : d(s)) != null ? c : s;
    });
  }
  constructor(t, n) {
    (this.fn = void 0), (this.refs = t), (this.refs = t), (this.fn = n);
  }
  resolve(t, n) {
    let r = this.refs.map((o) =>
        o.getValue(
          n == null ? void 0 : n.value,
          n == null ? void 0 : n.parent,
          n == null ? void 0 : n.context
        )
      ),
      i = this.fn(r, t, n);
    if (i === void 0 || i === t) return t;
    if (!gf(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(n);
  }
}
const Ma = { context: "$", value: "." };
class Zr {
  constructor(t, n = {}) {
    if (
      ((this.key = void 0),
      (this.isContext = void 0),
      (this.isValue = void 0),
      (this.isSibling = void 0),
      (this.path = void 0),
      (this.getter = void 0),
      (this.map = void 0),
      typeof t != "string")
    )
      throw new TypeError("ref must be a string, got: " + t);
    if (((this.key = t.trim()), t === ""))
      throw new TypeError("ref must be a non-empty string");
    (this.isContext = this.key[0] === Ma.context),
      (this.isValue = this.key[0] === Ma.value),
      (this.isSibling = !this.isContext && !this.isValue);
    let r = this.isContext ? Ma.context : this.isValue ? Ma.value : "";
    (this.path = this.key.slice(r.length)),
      (this.getter = this.path && Ar.getter(this.path, !0)),
      (this.map = n.map);
  }
  getValue(t, n, r) {
    let i = this.isContext ? r : this.isValue ? t : n;
    return (
      this.getter && (i = this.getter(i || {})),
      this.map && (i = this.map(i)),
      i
    );
  }
  cast(t, n) {
    return this.getValue(
      t,
      n == null ? void 0 : n.parent,
      n == null ? void 0 : n.context
    );
  }
  resolve() {
    return this;
  }
  describe() {
    return { type: "ref", key: this.key };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
Zr.prototype.__isYupRef = !0;
const Nr = (e) => e == null;
function ni(e) {
  function t(
    { value: n, path: r = "", options: i, originalValue: o, schema: a },
    l,
    s
  ) {
    const { name: c, test: d, params: f, message: p, skipAbsent: x } = e;
    let { parent: y, context: v, abortEarly: E = a.spec.abortEarly } = i;
    function m(I) {
      return Zr.isRef(I) ? I.getValue(n, y, v) : I;
    }
    function g(I = {}) {
      const oe = Object.assign(
        {
          value: n,
          originalValue: o,
          label: a.spec.label,
          path: I.path || r,
          spec: a.spec,
        },
        f,
        I.params
      );
      for (const D of Object.keys(oe)) oe[D] = m(oe[D]);
      const R = new kt(
        kt.formatError(I.message || p, oe),
        n,
        oe.path,
        I.type || c
      );
      return (R.params = oe), R;
    }
    const w = E ? l : s;
    let h = {
      path: r,
      parent: y,
      type: c,
      from: i.from,
      createError: g,
      resolve: m,
      options: i,
      originalValue: o,
      schema: a,
    };
    const C = (I) => {
        kt.isError(I) ? w(I) : I ? s(null) : w(g());
      },
      P = (I) => {
        kt.isError(I) ? w(I) : l(I);
      },
      k = x && Nr(n);
    if (!i.sync) {
      try {
        Promise.resolve(k ? !0 : d.call(h, n, h)).then(C, P);
      } catch (I) {
        P(I);
      }
      return;
    }
    let M;
    try {
      var U;
      if (
        ((M = k ? !0 : d.call(h, n, h)),
        typeof ((U = M) == null ? void 0 : U.then) == "function")
      )
        throw new Error(
          `Validation test of type: "${h.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
        );
    } catch (I) {
      P(I);
      return;
    }
    C(M);
  }
  return (t.OPTIONS = e), t;
}
function z5(e, t, n, r = n) {
  let i, o, a;
  return t
    ? (Ar.forEach(t, (l, s, c) => {
        let d = s ? l.slice(1, l.length - 1) : l;
        e = e.resolve({ context: r, parent: i, value: n });
        let f = e.type === "tuple",
          p = c ? parseInt(d, 10) : 0;
        if (e.innerType || f) {
          if (f && !c)
            throw new Error(
              `Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`
            );
          if (n && p >= n.length)
            throw new Error(
              `Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `
            );
          (i = n), (n = n && n[p]), (e = f ? e.spec.types[p] : e.innerType);
        }
        if (!c) {
          if (!e.fields || !e.fields[d])
            throw new Error(
              `The schema does not contain the path: ${t}. (failed at: ${a} which is a type: "${e.type}")`
            );
          (i = n), (n = n && n[d]), (e = e.fields[d]);
        }
        (o = d), (a = s ? "[" + l + "]" : "." + l);
      }),
      { schema: e, parent: i, parentPath: o })
    : { parent: i, parentPath: t, schema: e };
}
class Fl extends Set {
  describe() {
    const t = [];
    for (const n of this.values()) t.push(Zr.isRef(n) ? n.describe() : n);
    return t;
  }
  resolveAll(t) {
    let n = [];
    for (const r of this.values()) n.push(t(r));
    return n;
  }
  clone() {
    return new Fl(this.values());
  }
  merge(t, n) {
    const r = this.clone();
    return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
  }
}
function wi(e, t = new Map()) {
  if (gf(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let n;
  if (e instanceof Date) (n = new Date(e.getTime())), t.set(e, n);
  else if (e instanceof RegExp) (n = new RegExp(e)), t.set(e, n);
  else if (Array.isArray(e)) {
    (n = new Array(e.length)), t.set(e, n);
    for (let r = 0; r < e.length; r++) n[r] = wi(e[r], t);
  } else if (e instanceof Map) {
    (n = new Map()), t.set(e, n);
    for (const [r, i] of e.entries()) n.set(r, wi(i, t));
  } else if (e instanceof Set) {
    (n = new Set()), t.set(e, n);
    for (const r of e) n.add(wi(r, t));
  } else if (e instanceof Object) {
    (n = {}), t.set(e, n);
    for (const [r, i] of Object.entries(e)) n[r] = wi(i, t);
  } else throw Error(`Unable to clone ${e}`);
  return n;
}
class vn {
  constructor(t) {
    (this.type = void 0),
      (this.deps = []),
      (this.tests = void 0),
      (this.transforms = void 0),
      (this.conditions = []),
      (this._mutate = void 0),
      (this.internalTests = {}),
      (this._whitelist = new Fl()),
      (this._blacklist = new Fl()),
      (this.exclusiveTests = Object.create(null)),
      (this._typeCheck = void 0),
      (this.spec = void 0),
      (this.tests = []),
      (this.transforms = []),
      this.withMutation(() => {
        this.typeError(_n.notType);
      }),
      (this.type = t.type),
      (this._typeCheck = t.check),
      (this.spec = Object.assign(
        {
          strip: !1,
          strict: !1,
          abortEarly: !0,
          recursive: !0,
          nullable: !1,
          optional: !0,
          coerce: !0,
        },
        t == null ? void 0 : t.spec
      )),
      this.withMutation((n) => {
        n.nonNullable();
      });
  }
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate) return t && Object.assign(this.spec, t), this;
    const n = Object.create(Object.getPrototypeOf(this));
    return (
      (n.type = this.type),
      (n._typeCheck = this._typeCheck),
      (n._whitelist = this._whitelist.clone()),
      (n._blacklist = this._blacklist.clone()),
      (n.internalTests = Object.assign({}, this.internalTests)),
      (n.exclusiveTests = Object.assign({}, this.exclusiveTests)),
      (n.deps = [...this.deps]),
      (n.conditions = [...this.conditions]),
      (n.tests = [...this.tests]),
      (n.transforms = [...this.transforms]),
      (n.spec = wi(Object.assign({}, this.spec, t))),
      n
    );
  }
  label(t) {
    let n = this.clone();
    return (n.spec.label = t), n;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let n = this.clone();
    return (n.spec.meta = Object.assign(n.spec.meta || {}, t[0])), n;
  }
  withMutation(t) {
    let n = this._mutate;
    this._mutate = !0;
    let r = t(this);
    return (this._mutate = n), r;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed")
      throw new TypeError(
        `You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`
      );
    let n = this,
      r = t.clone();
    const i = Object.assign({}, n.spec, r.spec);
    return (
      (r.spec = i),
      (r.internalTests = Object.assign({}, n.internalTests, r.internalTests)),
      (r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist)),
      (r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist)),
      (r.tests = n.tests),
      (r.exclusiveTests = n.exclusiveTests),
      r.withMutation((o) => {
        t.tests.forEach((a) => {
          o.test(a.OPTIONS);
        });
      }),
      (r.transforms = [...n.transforms, ...r.transforms]),
      r
    );
  }
  isType(t) {
    return t == null
      ? !!(
          (this.spec.nullable && t === null) ||
          (this.spec.optional && t === void 0)
        )
      : this._typeCheck(t);
  }
  resolve(t) {
    let n = this;
    if (n.conditions.length) {
      let r = n.conditions;
      (n = n.clone()),
        (n.conditions = []),
        (n = r.reduce((i, o) => o.resolve(i, t), n)),
        (n = n.resolve(t));
    }
    return n;
  }
  resolveOptions(t) {
    var n, r, i;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (n = t.strict) != null ? n : this.spec.strict,
      abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (i = t.recursive) != null ? i : this.spec.recursive,
    });
  }
  cast(t, n = {}) {
    let r = this.resolve(Object.assign({ value: t }, n)),
      i = n.assert === "ignore-optionality",
      o = r._cast(t, n);
    if (n.assert !== !1 && !r.isType(o)) {
      if (i && Nr(o)) return o;
      let a = Pi(t),
        l = Pi(o);
      throw new TypeError(
        `The value of ${
          n.path || "field"
        } could not be cast to a value that satisfies the schema type: "${
          r.type
        }". 

attempted value: ${a} 
` + (l !== a ? `result of cast: ${l}` : "")
      );
    }
    return o;
  }
  _cast(t, n) {
    let r =
      t === void 0
        ? t
        : this.transforms.reduce((i, o) => o.call(this, i, t, this), t);
    return r === void 0 && (r = this.getDefault(n)), r;
  }
  _validate(t, n = {}, r, i) {
    let { path: o, originalValue: a = t, strict: l = this.spec.strict } = n,
      s = t;
    l || (s = this._cast(s, Object.assign({ assert: !1 }, n)));
    let c = [];
    for (let d of Object.values(this.internalTests)) d && c.push(d);
    this.runTests(
      { path: o, value: s, originalValue: a, options: n, tests: c },
      r,
      (d) => {
        if (d.length) return i(d, s);
        this.runTests(
          {
            path: o,
            value: s,
            originalValue: a,
            options: n,
            tests: this.tests,
          },
          r,
          i
        );
      }
    );
  }
  runTests(t, n, r) {
    let i = !1,
      { tests: o, value: a, originalValue: l, path: s, options: c } = t,
      d = (v) => {
        i || ((i = !0), n(v, a));
      },
      f = (v) => {
        i || ((i = !0), r(v, a));
      },
      p = o.length,
      x = [];
    if (!p) return f([]);
    let y = { value: a, originalValue: l, path: s, options: c, schema: this };
    for (let v = 0; v < o.length; v++) {
      const E = o[v];
      E(y, d, function (g) {
        g && (x = x.concat(g)), --p <= 0 && f(x);
      });
    }
  }
  asNestedTest({
    key: t,
    index: n,
    parent: r,
    parentPath: i,
    originalParent: o,
    options: a,
  }) {
    const l = t ?? n;
    if (l == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const s = typeof l == "number";
    let c = r[l];
    const d = Object.assign({}, a, {
      strict: !0,
      parent: r,
      value: c,
      originalValue: o[l],
      key: void 0,
      [s ? "index" : "key"]: l,
      path:
        s || l.includes(".")
          ? `${i || ""}[${c ? l : `"${l}"`}]`
          : (i ? `${i}.` : "") + t,
    });
    return (f, p, x) => this.resolve(d)._validate(c, d, p, x);
  }
  validate(t, n) {
    let r = this.resolve(Object.assign({}, n, { value: t }));
    return new Promise((i, o) =>
      r._validate(
        t,
        n,
        (a, l) => {
          kt.isError(a) && (a.value = l), o(a);
        },
        (a, l) => {
          a.length ? o(new kt(a, l)) : i(l);
        }
      )
    );
  }
  validateSync(t, n) {
    let r = this.resolve(Object.assign({}, n, { value: t })),
      i;
    return (
      r._validate(
        t,
        Object.assign({}, n, { sync: !0 }),
        (o, a) => {
          throw (kt.isError(o) && (o.value = a), o);
        },
        (o, a) => {
          if (o.length) throw new kt(o, t);
          i = a;
        }
      ),
      i
    );
  }
  isValid(t, n) {
    return this.validate(t, n).then(
      () => !0,
      (r) => {
        if (kt.isError(r)) return !1;
        throw r;
      }
    );
  }
  isValidSync(t, n) {
    try {
      return this.validateSync(t, n), !0;
    } catch (r) {
      if (kt.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let n = this.spec.default;
    return n == null ? n : typeof n == "function" ? n.call(this, t) : wi(n);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0
      ? this._getDefault()
      : this.clone({ default: t });
  }
  strict(t = !0) {
    return this.clone({ strict: t });
  }
  nullability(t, n) {
    const r = this.clone({ nullable: t });
    return (
      (r.internalTests.nullable = ni({
        message: n,
        name: "nullable",
        test(i) {
          return i === null ? this.schema.spec.nullable : !0;
        },
      })),
      r
    );
  }
  optionality(t, n) {
    const r = this.clone({ optional: t });
    return (
      (r.internalTests.optionality = ni({
        message: n,
        name: "optionality",
        test(i) {
          return i === void 0 ? this.schema.spec.optional : !0;
        },
      })),
      r
    );
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = _n.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = _n.notNull) {
    return this.nullability(!1, t);
  }
  required(t = _n.required) {
    return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let n = this.clone();
    return n.transforms.push(t), n;
  }
  test(...t) {
    let n;
    if (
      (t.length === 1
        ? typeof t[0] == "function"
          ? (n = { test: t[0] })
          : (n = t[0])
        : t.length === 2
        ? (n = { name: t[0], test: t[1] })
        : (n = { name: t[0], message: t[1], test: t[2] }),
      n.message === void 0 && (n.message = _n.default),
      typeof n.test != "function")
    )
      throw new TypeError("`test` is a required parameters");
    let r = this.clone(),
      i = ni(n),
      o = n.exclusive || (n.name && r.exclusiveTests[n.name] === !0);
    if (n.exclusive && !n.name)
      throw new TypeError(
        "Exclusive tests must provide a unique `name` identifying the test"
      );
    return (
      n.name && (r.exclusiveTests[n.name] = !!n.exclusive),
      (r.tests = r.tests.filter(
        (a) =>
          !(
            a.OPTIONS.name === n.name &&
            (o || a.OPTIONS.test === i.OPTIONS.test)
          )
      )),
      r.tests.push(i),
      r
    );
  }
  when(t, n) {
    !Array.isArray(t) && typeof t != "string" && ((n = t), (t = "."));
    let r = this.clone(),
      i = A1(t).map((o) => new Zr(o));
    return (
      i.forEach((o) => {
        o.isSibling && r.deps.push(o.key);
      }),
      r.conditions.push(
        typeof n == "function" ? new Ml(i, n) : Ml.fromOptions(i, n)
      ),
      r
    );
  }
  typeError(t) {
    let n = this.clone();
    return (
      (n.internalTests.typeError = ni({
        message: t,
        name: "typeError",
        skipAbsent: !0,
        test(r) {
          return this.schema._typeCheck(r)
            ? !0
            : this.createError({ params: { type: this.schema.type } });
        },
      })),
      n
    );
  }
  oneOf(t, n = _n.oneOf) {
    let r = this.clone();
    return (
      t.forEach((i) => {
        r._whitelist.add(i), r._blacklist.delete(i);
      }),
      (r.internalTests.whiteList = ni({
        message: n,
        name: "oneOf",
        skipAbsent: !0,
        test(i) {
          let o = this.schema._whitelist,
            a = o.resolveAll(this.resolve);
          return a.includes(i)
            ? !0
            : this.createError({
                params: { values: Array.from(o).join(", "), resolved: a },
              });
        },
      })),
      r
    );
  }
  notOneOf(t, n = _n.notOneOf) {
    let r = this.clone();
    return (
      t.forEach((i) => {
        r._blacklist.add(i), r._whitelist.delete(i);
      }),
      (r.internalTests.blacklist = ni({
        message: n,
        name: "notOneOf",
        test(i) {
          let o = this.schema._blacklist,
            a = o.resolveAll(this.resolve);
          return a.includes(i)
            ? this.createError({
                params: { values: Array.from(o).join(", "), resolved: a },
              })
            : !0;
        },
      })),
      r
    );
  }
  strip(t = !0) {
    let n = this.clone();
    return (n.spec.strip = t), n;
  }
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(),
      { label: r, meta: i, optional: o, nullable: a } = n.spec;
    return {
      meta: i,
      label: r,
      optional: o,
      nullable: a,
      default: n.getDefault(t),
      type: n.type,
      oneOf: n._whitelist.describe(),
      notOneOf: n._blacklist.describe(),
      tests: n.tests
        .map((s) => ({ name: s.OPTIONS.name, params: s.OPTIONS.params }))
        .filter((s, c, d) => d.findIndex((f) => f.name === s.name) === c),
    };
  }
}
vn.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
  vn.prototype[`${e}At`] = function (t, n, r = {}) {
    const { parent: i, parentPath: o, schema: a } = z5(this, t, n, r.context);
    return a[e](i && i[o], Object.assign({}, r, { parent: i, path: t }));
  };
for (const e of ["equals", "is"]) vn.prototype[e] = vn.prototype.oneOf;
for (const e of ["not", "nope"]) vn.prototype[e] = vn.prototype.notOneOf;
let B5 =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  U5 =
    /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  V5 =
    /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
  H5 = (e) => Nr(e) || e === e.trim(),
  W5 = {}.toString();
function ol() {
  return new M1();
}
class M1 extends vn {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      },
    }),
      this.withMutation(() => {
        this.transform((t, n, r) => {
          if (!r.spec.coerce || r.isType(t) || Array.isArray(t)) return t;
          const i = t != null && t.toString ? t.toString() : t;
          return i === W5 ? t : i;
        });
      });
  }
  required(t) {
    return super
      .required(t)
      .withMutation((n) =>
        n.test({
          message: t || _n.required,
          name: "required",
          skipAbsent: !0,
          test: (r) => !!r.length,
        })
      );
  }
  notRequired() {
    return super
      .notRequired()
      .withMutation(
        (t) => (
          (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required")), t
        )
      );
  }
  length(t, n = Zt.length) {
    return this.test({
      message: n,
      name: "length",
      exclusive: !0,
      params: { length: t },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(t);
      },
    });
  }
  min(t, n = Zt.min) {
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: { min: t },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(t);
      },
    });
  }
  max(t, n = Zt.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: n,
      params: { max: t },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(t);
      },
    });
  }
  matches(t, n) {
    let r = !1,
      i,
      o;
    return (
      n &&
        (typeof n == "object"
          ? ({ excludeEmptyString: r = !1, message: i, name: o } = n)
          : (i = n)),
      this.test({
        name: o || "matches",
        message: i || Zt.matches,
        params: { regex: t },
        skipAbsent: !0,
        test: (a) => (a === "" && r) || a.search(t) !== -1,
      })
    );
  }
  email(t = Zt.email) {
    return this.matches(B5, {
      name: "email",
      message: t,
      excludeEmptyString: !0,
    });
  }
  url(t = Zt.url) {
    return this.matches(U5, {
      name: "url",
      message: t,
      excludeEmptyString: !0,
    });
  }
  uuid(t = Zt.uuid) {
    return this.matches(V5, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1,
    });
  }
  ensure() {
    return this.default("").transform((t) => (t === null ? "" : t));
  }
  trim(t = Zt.trim) {
    return this.transform((n) => (n != null ? n.trim() : n)).test({
      message: t,
      name: "trim",
      test: H5,
    });
  }
  lowercase(t = Zt.lowercase) {
    return this.transform((n) => (Nr(n) ? n : n.toLowerCase())).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => Nr(n) || n === n.toLowerCase(),
    });
  }
  uppercase(t = Zt.uppercase) {
    return this.transform((n) => (Nr(n) ? n : n.toUpperCase())).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => Nr(n) || n === n.toUpperCase(),
    });
  }
}
ol.prototype = M1.prototype;
var q5 =
  /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function G5(e) {
  var t = [1, 4, 5, 6, 7, 10, 11],
    n = 0,
    r,
    i;
  if ((i = q5.exec(e))) {
    for (var o = 0, a; (a = t[o]); ++o) i[a] = +i[a] || 0;
    (i[2] = (+i[2] || 1) - 1),
      (i[3] = +i[3] || 1),
      (i[7] = i[7] ? String(i[7]).substr(0, 3) : 0),
      (i[8] === void 0 || i[8] === "") && (i[9] === void 0 || i[9] === "")
        ? (r = +new Date(i[1], i[2], i[3], i[4], i[5], i[6], i[7]))
        : (i[8] !== "Z" &&
            i[9] !== void 0 &&
            ((n = i[10] * 60 + i[11]), i[9] === "+" && (n = 0 - n)),
          (r = Date.UTC(i[1], i[2], i[3], i[4], i[5] + n, i[6], i[7])));
  } else r = Date.parse ? Date.parse(e) : NaN;
  return r;
}
let K5 = new Date(""),
  Q5 = (e) => Object.prototype.toString.call(e) === "[object Date]";
class Ps extends vn {
  constructor() {
    super({
      type: "date",
      check(t) {
        return Q5(t) && !isNaN(t.getTime());
      },
    }),
      this.withMutation(() => {
        this.transform((t, n, r) =>
          !r.spec.coerce || r.isType(t) || t === null
            ? t
            : ((t = G5(t)), isNaN(t) ? Ps.INVALID_DATE : new Date(t))
        );
      });
  }
  prepareParam(t, n) {
    let r;
    if (Zr.isRef(t)) r = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i))
        throw new TypeError(
          `\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`
        );
      r = i;
    }
    return r;
  }
  min(t, n = Hc.min) {
    let r = this.prepareParam(t, "min");
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: { min: t },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(r);
      },
    });
  }
  max(t, n = Hc.max) {
    let r = this.prepareParam(t, "max");
    return this.test({
      message: n,
      name: "max",
      exclusive: !0,
      params: { max: t },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(r);
      },
    });
  }
}
Ps.INVALID_DATE = K5;
Ps.prototype;
function Y5(e, t = []) {
  let n = [],
    r = new Set(),
    i = new Set(t.map(([a, l]) => `${a}-${l}`));
  function o(a, l) {
    let s = Ar.split(a)[0];
    r.add(s), i.has(`${l}-${s}`) || n.push([l, s]);
  }
  for (const a of Object.keys(e)) {
    let l = e[a];
    r.add(a),
      Zr.isRef(l) && l.isSibling
        ? o(l.path, a)
        : gf(l) && "deps" in l && l.deps.forEach((s) => o(s, a));
  }
  return P5.array(Array.from(r), n).reverse();
}
function Mh(e, t) {
  let n = 1 / 0;
  return (
    e.some((r, i) => {
      var o;
      if ((o = t.path) != null && o.includes(r)) return (n = i), !0;
    }),
    n
  );
}
function F1(e) {
  return (t, n) => Mh(e, t) - Mh(e, n);
}
const X5 = (e, t, n) => {
  if (typeof e != "string") return e;
  let r = e;
  try {
    r = JSON.parse(e);
  } catch {}
  return n.isType(r) ? r : e;
};
function al(e) {
  if ("fields" in e) {
    const t = {};
    for (const [n, r] of Object.entries(e.fields)) t[n] = al(r);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = al(t.innerType)), t;
  }
  return e.type === "tuple"
    ? e.optional().clone({ types: e.spec.types.map(al) })
    : "optional" in e
    ? e.optional()
    : e;
}
const Z5 = (e, t) => {
  const n = [...Ar.normalizePath(t)];
  if (n.length === 1) return n[0] in e;
  let r = n.pop(),
    i = Ar.getter(Ar.join(n), !0)(e);
  return !!(i && r in i);
};
let Fh = (e) => Object.prototype.toString.call(e) === "[object Object]";
function J5(e, t) {
  let n = Object.keys(e.fields);
  return Object.keys(t).filter((r) => n.indexOf(r) === -1);
}
const e8 = F1([]);
function D1(e) {
  return new I1(e);
}
class I1 extends vn {
  constructor(t) {
    super({
      type: "object",
      check(n) {
        return Fh(n) || typeof n == "function";
      },
    }),
      (this.fields = Object.create(null)),
      (this._sortErrors = e8),
      (this._nodes = []),
      (this._excludedEdges = []),
      this.withMutation(() => {
        t && this.shape(t);
      });
  }
  _cast(t, n = {}) {
    var r;
    let i = super._cast(t, n);
    if (i === void 0) return this.getDefault(n);
    if (!this._typeCheck(i)) return i;
    let o = this.fields,
      a = (r = n.stripUnknown) != null ? r : this.spec.noUnknown,
      l = [].concat(
        this._nodes,
        Object.keys(i).filter((f) => !this._nodes.includes(f))
      ),
      s = {},
      c = Object.assign({}, n, {
        parent: s,
        __validating: n.__validating || !1,
      }),
      d = !1;
    for (const f of l) {
      let p = o[f],
        x = f in i;
      if (p) {
        let y,
          v = i[f];
        (c.path = (n.path ? `${n.path}.` : "") + f),
          (p = p.resolve({ value: v, context: n.context, parent: s }));
        let E = p instanceof vn ? p.spec : void 0,
          m = E == null ? void 0 : E.strict;
        if (E != null && E.strip) {
          d = d || f in i;
          continue;
        }
        (y = !n.__validating || !m ? p.cast(i[f], c) : i[f]),
          y !== void 0 && (s[f] = y);
      } else x && !a && (s[f] = i[f]);
      (x !== f in s || s[f] !== i[f]) && (d = !0);
    }
    return d ? s : i;
  }
  _validate(t, n = {}, r, i) {
    let {
      from: o = [],
      originalValue: a = t,
      recursive: l = this.spec.recursive,
    } = n;
    (n.from = [{ schema: this, value: a }, ...o]),
      (n.__validating = !0),
      (n.originalValue = a),
      super._validate(t, n, r, (s, c) => {
        if (!l || !Fh(c)) {
          i(s, c);
          return;
        }
        a = a || c;
        let d = [];
        for (let f of this._nodes) {
          let p = this.fields[f];
          !p ||
            Zr.isRef(p) ||
            d.push(
              p.asNestedTest({
                options: n,
                key: f,
                parent: c,
                parentPath: n.path,
                originalParent: a,
              })
            );
        }
        this.runTests(
          { tests: d, value: c, originalValue: a, options: n },
          r,
          (f) => {
            i(f.sort(this._sortErrors).concat(s), c);
          }
        );
      });
  }
  clone(t) {
    const n = super.clone(t);
    return (
      (n.fields = Object.assign({}, this.fields)),
      (n._nodes = this._nodes),
      (n._excludedEdges = this._excludedEdges),
      (n._sortErrors = this._sortErrors),
      n
    );
  }
  concat(t) {
    let n = super.concat(t),
      r = n.fields;
    for (let [i, o] of Object.entries(this.fields)) {
      const a = r[i];
      r[i] = a === void 0 ? o : a;
    }
    return n.withMutation((i) =>
      i.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
    );
  }
  _getDefault(t) {
    if ("default" in this.spec) return super._getDefault(t);
    if (!this._nodes.length) return;
    let n = {};
    return (
      this._nodes.forEach((r) => {
        var i;
        const o = this.fields[r];
        let a = t;
        (i = a) != null &&
          i.value &&
          (a = Object.assign({}, a, { parent: a.value, value: a.value[r] })),
          (n[r] = o && "getDefault" in o ? o.getDefault(a) : void 0);
      }),
      n
    );
  }
  setFields(t, n) {
    let r = this.clone();
    return (
      (r.fields = t),
      (r._nodes = Y5(t, n)),
      (r._sortErrors = F1(Object.keys(t))),
      n && (r._excludedEdges = n),
      r
    );
  }
  shape(t, n = []) {
    return this.clone().withMutation((r) => {
      let i = r._excludedEdges;
      return (
        n.length &&
          (Array.isArray(n[0]) || (n = [n]), (i = [...r._excludedEdges, ...n])),
        r.setFields(Object.assign(r.fields, t), i)
      );
    });
  }
  partial() {
    const t = {};
    for (const [n, r] of Object.entries(this.fields))
      t[n] =
        "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(t);
  }
  deepPartial() {
    return al(this);
  }
  pick(t) {
    const n = {};
    for (const r of t) this.fields[r] && (n[r] = this.fields[r]);
    return this.setFields(n);
  }
  omit(t) {
    const n = Object.assign({}, this.fields);
    for (const r of t) delete n[r];
    return this.setFields(n);
  }
  from(t, n, r) {
    let i = Ar.getter(t, !0);
    return this.transform((o) => {
      if (!o) return o;
      let a = o;
      return (
        Z5(o, t) &&
          ((a = Object.assign({}, o)), r || delete a[t], (a[n] = i(o))),
        a
      );
    });
  }
  json() {
    return this.transform(X5);
  }
  noUnknown(t = !0, n = Wc.noUnknown) {
    typeof t != "boolean" && ((n = t), (t = !0));
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: n,
      test(i) {
        if (i == null) return !0;
        const o = J5(this.schema, i);
        return (
          !t ||
          o.length === 0 ||
          this.createError({ params: { unknown: o.join(", ") } })
        );
      },
    });
    return (r.spec.noUnknown = t), r;
  }
  unknown(t = !0, n = Wc.noUnknown) {
    return this.noUnknown(!t, n);
  }
  transformKeys(t) {
    return this.transform((n) => {
      if (!n) return n;
      const r = {};
      for (const i of Object.keys(n)) r[t(i)] = n[i];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(ku.camelCase);
  }
  snakeCase() {
    return this.transformKeys(ku.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => ku.snakeCase(t).toUpperCase());
  }
  describe(t) {
    let n = super.describe(t);
    n.fields = {};
    for (const [i, o] of Object.entries(this.fields)) {
      var r;
      let a = t;
      (r = a) != null &&
        r.value &&
        (a = Object.assign({}, a, { parent: a.value, value: a.value[i] })),
        (n.fields[i] = o.describe(a));
    }
    return n;
  }
}
D1.prototype = I1.prototype;
function $1(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = $1(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Qn() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = $1(e)) && (r && (r += " "), (r += t));
  return r;
}
const To = (e) => typeof e == "number" && !isNaN(e),
  Br = (e) => typeof e == "string",
  yt = (e) => typeof e == "function",
  ll = (e) => (Br(e) || yt(e) ? e : null),
  bu = (e) => S.isValidElement(e) || Br(e) || yt(e) || To(e);
function t8(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function Ns(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: o = 300,
  } = e;
  return function (a) {
    let {
      children: l,
      position: s,
      preventExitTransition: c,
      done: d,
      nodeRef: f,
      isIn: p,
    } = a;
    const x = r ? `${t}--${s}` : t,
      y = r ? `${n}--${s}` : n,
      v = S.useRef(0);
    return (
      S.useLayoutEffect(() => {
        const E = f.current,
          m = x.split(" "),
          g = (w) => {
            w.target === f.current &&
              (E.dispatchEvent(new Event("d")),
              E.removeEventListener("animationend", g),
              E.removeEventListener("animationcancel", g),
              v.current === 0 &&
                w.type !== "animationcancel" &&
                E.classList.remove(...m));
          };
        E.classList.add(...m),
          E.addEventListener("animationend", g),
          E.addEventListener("animationcancel", g);
      }, []),
      S.useEffect(() => {
        const E = f.current,
          m = () => {
            E.removeEventListener("animationend", m), i ? t8(E, d, o) : d();
          };
        p ||
          (c
            ? m()
            : ((v.current = 1),
              (E.className += ` ${y}`),
              E.addEventListener("animationend", m)));
      }, [p]),
      de.createElement(de.Fragment, null, l)
    );
  };
}
function Dh(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const zt = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return (
        this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
      );
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((r) => r !== t);
        return this.list.set(e, n), this;
      }
      return this.list.delete(e), this;
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e);
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this;
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1));
          }, 0);
          this.emitQueue.has(e) || this.emitQueue.set(e, []),
            this.emitQueue.get(e).push(n);
        });
    },
  },
  Fa = (e) => {
    let { theme: t, type: n, ...r } = e;
    return de.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...r,
    });
  },
  Pu = {
    info: function (e) {
      return de.createElement(
        Fa,
        { ...e },
        de.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return de.createElement(
        Fa,
        { ...e },
        de.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return de.createElement(
        Fa,
        { ...e },
        de.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return de.createElement(
        Fa,
        { ...e },
        de.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return de.createElement("div", { className: "Toastify__spinner" });
    },
  };
function n8(e) {
  const [, t] = S.useReducer((x) => x + 1, 0),
    [n, r] = S.useState([]),
    i = S.useRef(null),
    o = S.useRef(new Map()).current,
    a = (x) => n.indexOf(x) !== -1,
    l = S.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: a,
      getToast: (x) => o.get(x),
    }).current;
  function s(x) {
    let { containerId: y } = x;
    const { limit: v } = l.props;
    !v ||
      (y && l.containerId !== y) ||
      ((l.count -= l.queue.length), (l.queue = []));
  }
  function c(x) {
    r((y) => (x == null ? [] : y.filter((v) => v !== x)));
  }
  function d() {
    const { toastContent: x, toastProps: y, staleId: v } = l.queue.shift();
    p(x, y, v);
  }
  function f(x, y) {
    let { delay: v, staleId: E, ...m } = y;
    if (
      !bu(x) ||
      (function (R) {
        return (
          !i.current ||
          (l.props.enableMultiContainer &&
            R.containerId !== l.props.containerId) ||
          (o.has(R.toastId) && R.updateId == null)
        );
      })(m)
    )
      return;
    const { toastId: g, updateId: w, data: h } = m,
      { props: C } = l,
      P = () => c(g),
      k = w == null;
    k && l.count++;
    const M = {
      ...C,
      style: C.toastStyle,
      key: l.toastKey++,
      ...Object.fromEntries(
        Object.entries(m).filter((R) => {
          let [D, H] = R;
          return H != null;
        })
      ),
      toastId: g,
      updateId: w,
      data: h,
      closeToast: P,
      isIn: !1,
      className: ll(m.className || C.toastClassName),
      bodyClassName: ll(m.bodyClassName || C.bodyClassName),
      progressClassName: ll(m.progressClassName || C.progressClassName),
      autoClose:
        !m.isLoading &&
        ((U = m.autoClose),
        (I = C.autoClose),
        U === !1 || (To(U) && U > 0) ? U : I),
      deleteToast() {
        const R = Dh(o.get(g), "removed");
        o.delete(g), zt.emit(4, R);
        const D = l.queue.length;
        if (
          ((l.count = g == null ? l.count - l.displayedToast : l.count - 1),
          l.count < 0 && (l.count = 0),
          D > 0)
        ) {
          const H = g == null ? l.props.limit : 1;
          if (D === 1 || H === 1) l.displayedToast++, d();
          else {
            const X = H > D ? D : H;
            l.displayedToast = X;
            for (let le = 0; le < X; le++) d();
          }
        } else t();
      },
    };
    var U, I;
    (M.iconOut = (function (R) {
      let { theme: D, type: H, isLoading: X, icon: le } = R,
        me = null;
      const A = { theme: D, type: H };
      return (
        le === !1 ||
          (yt(le)
            ? (me = le(A))
            : S.isValidElement(le)
            ? (me = S.cloneElement(le, A))
            : Br(le) || To(le)
            ? (me = le)
            : X
            ? (me = Pu.spinner())
            : ((N) => N in Pu)(H) && (me = Pu[H](A))),
        me
      );
    })(M)),
      yt(m.onOpen) && (M.onOpen = m.onOpen),
      yt(m.onClose) && (M.onClose = m.onClose),
      (M.closeButton = C.closeButton),
      m.closeButton === !1 || bu(m.closeButton)
        ? (M.closeButton = m.closeButton)
        : m.closeButton === !0 &&
          (M.closeButton = !bu(C.closeButton) || C.closeButton);
    let oe = x;
    S.isValidElement(x) && !Br(x.type)
      ? (oe = S.cloneElement(x, { closeToast: P, toastProps: M, data: h }))
      : yt(x) && (oe = x({ closeToast: P, toastProps: M, data: h })),
      C.limit && C.limit > 0 && l.count > C.limit && k
        ? l.queue.push({ toastContent: oe, toastProps: M, staleId: E })
        : To(v)
        ? setTimeout(() => {
            p(oe, M, E);
          }, v)
        : p(oe, M, E);
  }
  function p(x, y, v) {
    const { toastId: E } = y;
    v && o.delete(v);
    const m = { content: x, props: y };
    o.set(E, m),
      r((g) => [...g, E].filter((w) => w !== v)),
      zt.emit(4, Dh(m, m.props.updateId == null ? "added" : "updated"));
  }
  return (
    S.useEffect(
      () => (
        (l.containerId = e.containerId),
        zt
          .cancelEmit(3)
          .on(0, f)
          .on(1, (x) => i.current && c(x))
          .on(5, s)
          .emit(2, l),
        () => {
          o.clear(), zt.emit(3, l);
        }
      ),
      []
    ),
    S.useEffect(() => {
      (l.props = e), (l.isToastActive = a), (l.displayedToast = n.length);
    }),
    {
      getToastToRender: function (x) {
        const y = new Map(),
          v = Array.from(o.values());
        return (
          e.newestOnTop && v.reverse(),
          v.forEach((E) => {
            const { position: m } = E.props;
            y.has(m) || y.set(m, []), y.get(m).push(E);
          }),
          Array.from(y, (E) => x(E[0], E[1]))
        );
      },
      containerRef: i,
      isToastActive: a,
    }
  );
}
function Ih(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientX
    : e.clientX;
}
function $h(e) {
  return e.targetTouches && e.targetTouches.length >= 1
    ? e.targetTouches[0].clientY
    : e.clientY;
}
function r8(e) {
  const [t, n] = S.useState(!1),
    [r, i] = S.useState(!1),
    o = S.useRef(null),
    a = S.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1,
    }).current,
    l = S.useRef(e),
    {
      autoClose: s,
      pauseOnHover: c,
      closeToast: d,
      onClick: f,
      closeOnClick: p,
    } = e;
  function x(h) {
    if (e.draggable) {
      h.nativeEvent.type === "touchstart" && h.nativeEvent.preventDefault(),
        (a.didMove = !1),
        document.addEventListener("mousemove", m),
        document.addEventListener("mouseup", g),
        document.addEventListener("touchmove", m),
        document.addEventListener("touchend", g);
      const C = o.current;
      (a.canCloseOnClick = !0),
        (a.canDrag = !0),
        (a.boundingRect = C.getBoundingClientRect()),
        (C.style.transition = ""),
        (a.x = Ih(h.nativeEvent)),
        (a.y = $h(h.nativeEvent)),
        e.draggableDirection === "x"
          ? ((a.start = a.x),
            (a.removalDistance = C.offsetWidth * (e.draggablePercent / 100)))
          : ((a.start = a.y),
            (a.removalDistance =
              C.offsetHeight *
              (e.draggablePercent === 80
                ? 1.5 * e.draggablePercent
                : e.draggablePercent / 100)));
    }
  }
  function y(h) {
    if (a.boundingRect) {
      const { top: C, bottom: P, left: k, right: M } = a.boundingRect;
      h.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      a.x >= k &&
      a.x <= M &&
      a.y >= C &&
      a.y <= P
        ? E()
        : v();
    }
  }
  function v() {
    n(!0);
  }
  function E() {
    n(!1);
  }
  function m(h) {
    const C = o.current;
    a.canDrag &&
      C &&
      ((a.didMove = !0),
      t && E(),
      (a.x = Ih(h)),
      (a.y = $h(h)),
      (a.delta = e.draggableDirection === "x" ? a.x - a.start : a.y - a.start),
      a.start !== a.x && (a.canCloseOnClick = !1),
      (C.style.transform = `translate${e.draggableDirection}(${a.delta}px)`),
      (C.style.opacity = "" + (1 - Math.abs(a.delta / a.removalDistance))));
  }
  function g() {
    document.removeEventListener("mousemove", m),
      document.removeEventListener("mouseup", g),
      document.removeEventListener("touchmove", m),
      document.removeEventListener("touchend", g);
    const h = o.current;
    if (a.canDrag && a.didMove && h) {
      if (((a.canDrag = !1), Math.abs(a.delta) > a.removalDistance))
        return i(!0), void e.closeToast();
      (h.style.transition = "transform 0.2s, opacity 0.2s"),
        (h.style.transform = `translate${e.draggableDirection}(0)`),
        (h.style.opacity = "1");
    }
  }
  S.useEffect(() => {
    l.current = e;
  }),
    S.useEffect(
      () => (
        o.current && o.current.addEventListener("d", v, { once: !0 }),
        yt(e.onOpen) &&
          e.onOpen(S.isValidElement(e.children) && e.children.props),
        () => {
          const h = l.current;
          yt(h.onClose) &&
            h.onClose(S.isValidElement(h.children) && h.children.props);
        }
      ),
      []
    ),
    S.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || E(),
          window.addEventListener("focus", v),
          window.addEventListener("blur", E)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener("focus", v),
            window.removeEventListener("blur", E));
        }
      ),
      [e.pauseOnFocusLoss]
    );
  const w = { onMouseDown: x, onTouchStart: x, onMouseUp: y, onTouchEnd: y };
  return (
    s && c && ((w.onMouseEnter = E), (w.onMouseLeave = v)),
    p &&
      (w.onClick = (h) => {
        f && f(h), a.canCloseOnClick && d();
      }),
    {
      playToast: v,
      pauseToast: E,
      isRunning: t,
      preventExitTransition: r,
      toastRef: o,
      eventHandlers: w,
    }
  );
}
function z1(e) {
  let { closeToast: t, theme: n, ariaLabel: r = "close" } = e;
  return de.createElement(
    "button",
    {
      className: `Toastify__close-button Toastify__close-button--${n}`,
      type: "button",
      onClick: (i) => {
        i.stopPropagation(), t(i);
      },
      "aria-label": r,
    },
    de.createElement(
      "svg",
      { "aria-hidden": "true", viewBox: "0 0 14 16" },
      de.createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
      })
    )
  );
}
function i8(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: o,
    className: a,
    style: l,
    controlledProgress: s,
    progress: c,
    rtl: d,
    isIn: f,
    theme: p,
  } = e;
  const x = o || (s && c === 0),
    y = {
      ...l,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
      opacity: x ? 0 : 1,
    };
  s && (y.transform = `scaleX(${c})`);
  const v = Qn(
      "Toastify__progress-bar",
      s
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${p}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": d }
    ),
    E = yt(a) ? a({ rtl: d, type: i, defaultClassName: v }) : Qn(v, a);
  return de.createElement("div", {
    role: "progressbar",
    "aria-hidden": x ? "true" : "false",
    "aria-label": "notification timer",
    className: E,
    style: y,
    [s && c >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
      s && c < 1
        ? null
        : () => {
            f && r();
          },
  });
}
const o8 = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
      } = r8(e),
      {
        closeButton: o,
        children: a,
        autoClose: l,
        onClick: s,
        type: c,
        hideProgressBar: d,
        closeToast: f,
        transition: p,
        position: x,
        className: y,
        style: v,
        bodyClassName: E,
        bodyStyle: m,
        progressClassName: g,
        progressStyle: w,
        updateId: h,
        role: C,
        progress: P,
        rtl: k,
        toastId: M,
        deleteToast: U,
        isIn: I,
        isLoading: oe,
        iconOut: R,
        closeOnClick: D,
        theme: H,
      } = e,
      X = Qn(
        "Toastify__toast",
        `Toastify__toast-theme--${H}`,
        `Toastify__toast--${c}`,
        { "Toastify__toast--rtl": k },
        { "Toastify__toast--close-on-click": D }
      ),
      le = yt(y)
        ? y({ rtl: k, position: x, type: c, defaultClassName: X })
        : Qn(X, y),
      me = !!P || !l,
      A = { closeToast: f, type: c, theme: H };
    let N = null;
    return (
      o === !1 ||
        (N = yt(o) ? o(A) : S.isValidElement(o) ? S.cloneElement(o, A) : z1(A)),
      de.createElement(
        p,
        { isIn: I, done: U, position: x, preventExitTransition: n, nodeRef: r },
        de.createElement(
          "div",
          { id: M, onClick: s, className: le, ...i, style: v, ref: r },
          de.createElement(
            "div",
            {
              ...(I && { role: C }),
              className: yt(E) ? E({ type: c }) : Qn("Toastify__toast-body", E),
              style: m,
            },
            R != null &&
              de.createElement(
                "div",
                {
                  className: Qn("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !oe,
                  }),
                },
                R
              ),
            de.createElement("div", null, a)
          ),
          N,
          de.createElement(i8, {
            ...(h && !me ? { key: `pb-${h}` } : {}),
            rtl: k,
            theme: H,
            delay: l,
            isRunning: t,
            isIn: I,
            closeToast: f,
            hide: d,
            type: c,
            style: w,
            className: g,
            controlledProgress: me,
            progress: P || 0,
          })
        )
      )
    );
  },
  Os = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  a8 = Ns(Os("bounce", !0));
Ns(Os("slide", !0));
Ns(Os("zoom"));
Ns(Os("flip"));
const cr = S.forwardRef((e, t) => {
  const { getToastToRender: n, containerRef: r, isToastActive: i } = n8(e),
    { className: o, style: a, rtl: l, containerId: s } = e;
  function c(d) {
    const f = Qn(
      "Toastify__toast-container",
      `Toastify__toast-container--${d}`,
      { "Toastify__toast-container--rtl": l }
    );
    return yt(o)
      ? o({ position: d, rtl: l, defaultClassName: f })
      : Qn(f, ll(o));
  }
  return (
    S.useEffect(() => {
      t && (t.current = r.current);
    }, []),
    de.createElement(
      "div",
      { ref: r, className: "Toastify", id: s },
      n((d, f) => {
        const p = f.length ? { ...a } : { ...a, pointerEvents: "none" };
        return de.createElement(
          "div",
          { className: c(d), style: p, key: `container-${d}` },
          f.map((x, y) => {
            let { content: v, props: E } = x;
            return de.createElement(
              o8,
              {
                ...E,
                isIn: i(E.toastId),
                style: { ...E.style, "--nth": y + 1, "--len": f.length },
                key: `toast-${E.key}`,
              },
              v
            );
          })
        );
      })
    )
  );
});
(cr.displayName = "ToastContainer"),
  (cr.defaultProps = {
    position: "top-right",
    transition: a8,
    autoClose: 5e3,
    closeButton: z1,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
  });
let Nu,
  _r = new Map(),
  fo = [],
  l8 = 1;
function B1() {
  return "" + l8++;
}
function s8(e) {
  return e && (Br(e.toastId) || To(e.toastId)) ? e.toastId : B1();
}
function jo(e, t) {
  return (
    _r.size > 0 ? zt.emit(0, e, t) : fo.push({ content: e, options: t }),
    t.toastId
  );
}
function Dl(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: s8(t) };
}
function Da(e) {
  return (t, n) => jo(t, Dl(e, n));
}
function fe(e, t) {
  return jo(e, Dl("default", t));
}
(fe.loading = (e, t) =>
  jo(
    e,
    Dl("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (fe.promise = function (e, t, n) {
    let r,
      { pending: i, error: o, success: a } = t;
    i && (r = Br(i) ? fe.loading(i, n) : fe.loading(i.render, { ...n, ...i }));
    const l = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      s = (d, f, p) => {
        if (f == null) return void fe.dismiss(r);
        const x = { type: d, ...l, ...n, data: p },
          y = Br(f) ? { render: f } : f;
        return (
          r ? fe.update(r, { ...x, ...y }) : fe(y.render, { ...x, ...y }), p
        );
      },
      c = yt(e) ? e() : e;
    return c.then((d) => s("success", a, d)).catch((d) => s("error", o, d)), c;
  }),
  (fe.success = Da("success")),
  (fe.info = Da("info")),
  (fe.error = Da("error")),
  (fe.warning = Da("warning")),
  (fe.warn = fe.warning),
  (fe.dark = (e, t) => jo(e, Dl("default", { theme: "dark", ...t }))),
  (fe.dismiss = (e) => {
    _r.size > 0
      ? zt.emit(1, e)
      : (fo = fo.filter((t) => e != null && t.options.toastId !== e));
  }),
  (fe.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), zt.emit(5, e);
  }),
  (fe.isActive = (e) => {
    let t = !1;
    return (
      _r.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0);
      }),
      t
    );
  }),
  (fe.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (r, i) {
          let { containerId: o } = i;
          const a = _r.get(o || Nu);
          return a && a.getToast(r);
        })(e, t);
        if (n) {
          const { props: r, content: i } = n,
            o = {
              delay: 100,
              ...r,
              ...t,
              toastId: t.toastId || e,
              updateId: B1(),
            };
          o.toastId !== e && (o.staleId = e);
          const a = o.render || i;
          delete o.render, jo(a, o);
        }
      }, 0);
  }),
  (fe.done = (e) => {
    fe.update(e, { progress: 1 });
  }),
  (fe.onChange = (e) => (
    zt.on(4, e),
    () => {
      zt.off(4, e);
    }
  )),
  (fe.POSITION = {
    TOP_LEFT: "top-left",
    TOP_RIGHT: "top-right",
    TOP_CENTER: "top-center",
    BOTTOM_LEFT: "bottom-left",
    BOTTOM_RIGHT: "bottom-right",
    BOTTOM_CENTER: "bottom-center",
  }),
  (fe.TYPE = {
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    ERROR: "error",
    DEFAULT: "default",
  }),
  zt
    .on(2, (e) => {
      (Nu = e.containerId || e),
        _r.set(Nu, e),
        fo.forEach((t) => {
          zt.emit(0, t.content, t.options);
        }),
        (fo = []);
    })
    .on(3, (e) => {
      _r.delete(e.containerId || e), _r.size === 0 && zt.off(0).off(1).off(5);
    });
const U1 = ({ product: e }) => {
  const t = S.useRef(),
    [n, r] = S.useState(!1),
    i = r5({
      initialValues: { name: "", email: "", message: "" },
      validationSchema: D1({
        name: ol()
          .max(20, "Name should not be longer than 20 charachters")
          .required("Name is required"),
        email: ol()
          .email("Invalid Email address")
          .required("email is required"),
        message: ol().required("message is required"),
      }),
      onSubmit: (o, { resetForm: a }) => {
        r(!0),
          v3
            .sendForm(
              "service_y4a4o9q",
              "template_nvb77lx",
              t.current,
              "AfEovHkTNppUrc1A2"
            )
            .then(
              (l) => {
                fe.success("Message sent successfully"), r(!1);
              },
              (l) => {
                fe.error("Error sending message");
              }
            ),
          a({ values: "" });
      },
    });
  return u.jsxs("div", {
    className: "contact-form",
    children: [
      !e && u.jsx("h2", { children: "Send us a Message" }),
      e &&
        u.jsxs("h2", {
          children: ["Enquire About ", e == null ? void 0 : e.name],
        }),
      u.jsxs("form", {
        ref: t,
        className: "form-control",
        onSubmit: i.handleSubmit,
        children: [
          u.jsxs("label", {
            htmlFor: "name",
            children: [
              i.touched.name && i.errors.name
                ? u.jsx("p", { className: "error", children: i.errors.name })
                : u.jsxs("p", {
                    children: [
                      "Your name ",
                      u.jsx("span", { children: "(required)" }),
                    ],
                  }),
              u.jsx("input", {
                type: "text",
                placeholder: "enter your name",
                name: "name",
                value: i.values.name,
                onChange: i.handleChange,
                onBlur: i.handleBlur,
                className: i.touched.name && i.errors.name ? "input-error" : "",
              }),
            ],
          }),
          u.jsxs("label", {
            htmlFor: "Email",
            children: [
              i.touched.email && i.errors.email
                ? u.jsx("p", { className: "error", children: i.errors.email })
                : u.jsxs("p", {
                    children: [
                      "Email ",
                      u.jsx("span", { children: "(required)" }),
                    ],
                  }),
              u.jsx("input", {
                type: "email",
                placeholder: "example@gmail.com",
                name: "email",
                value: i.values.email,
                onChange: i.handleChange,
                className:
                  i.touched.email && i.errors.email ? "input-error" : "",
                onBlur: i.handleBlur,
              }),
            ],
          }),
          u.jsxs("label", {
            htmlFor: "message",
            children: [
              i.touched.message && i.errors.message
                ? u.jsx("p", { className: "error", children: i.errors.message })
                : u.jsxs("p", {
                    children: [
                      "Message ",
                      u.jsx("span", { children: "(required)" }),
                    ],
                  }),
              u.jsx("textarea", {
                name: "message",
                id: "message",
                cols: "30",
                rows: "10",
                placeholder: "type here...",
                className: "message",
                value: i.values.message,
                onChange: i.handleChange,
                onBlur: i.handleBlur,
              }),
              e &&
                u.jsx("input", {
                  type: "hidden",
                  name: "product_name",
                  value: e == null ? void 0 : e.name,
                }),
            ],
          }),
          u.jsxs("div", {
            className: "btn-container",
            children: [
              u.jsxs("button", {
                className: "send-email-btn",
                type: "submit",
                disabled: !(i.isValid && i.dirty),
                children: [" ", n ? "Sending..." : "Send Message"],
              }),
              i.errors.name || i.errors.email || i.errors.message
                ? u.jsx("p", {
                    className: "error",
                    children: "Please fill all input boxes!",
                  })
                : "",
            ],
          }),
        ],
      }),
    ],
  });
};
const V1 = ({ onClose: e }) =>
    u.jsx("div", { className: "backdrop", onClick: e }),
  zh = document.getElementById("overlays"),
  H1 = ({ children: e }) =>
    u.jsx("div", {
      className: "modal",
      children: u.jsx("div", { className: "content", children: e }),
    }),
  Rs = ({ onClose: e, children: t }) => (
    S.useEffect(() => {
      setTimeout(() => {
        const n = document.querySelector(".backdrop"),
          r = document.querySelector(".modal");
        (n.style.opacity = 1),
          (r.style.opacity = 1),
          (r.style.transform = "translateX(-50%) translateY(-50%)");
      }, 0);
    }, []),
    u.jsxs(S.Fragment, {
      children: [
        Nc.createPortal(u.jsx(V1, { onClose: e }), zh),
        Nc.createPortal(u.jsx(H1, { children: t }), zh),
      ],
    })
  );
V1.propTypes = { onClose: pn.func };
H1.propTypes = { children: pn.node };
Rs.propTypes = { children: pn.node.isRequired, onClose: pn.func };
const W1 = ({ onClose: e }) =>
  u.jsxs(u.Fragment, {
    children: [
      u.jsx(Rs, { onClose: e, children: u.jsx(U1, {}) }),
      u.jsx(cr, {}),
    ],
  });
W1.propTypes = { onClose: pn.func };
const u8 = () =>
    u.jsx("a", {
      href: "https://wa.me/+254705562383",
      target: "_blank",
      rel: "noopener noreferrer",
      children: u.jsx("button", {
        className: "whatsapp-btn",
        children: u.jsx(Jw, { className: "icon" }),
      }),
    }),
  c8 = () => {
    const e = ia();
    let [t, n] = S.useState(!1);
    const [r, i] = S.useState(!1),
      [o, a] = S.useState(!1);
    S.useEffect(
      () => (
        n(!0),
        setTimeout(() => {
          n(!1);
        }, 8e3),
        () => clearTimeout()
      ),
      [t]
    );
    const l = () => {
        i((f) => !f);
      },
      s = () => {
        i((f) => f !== !0);
      },
      c = () => {
        a(!0);
      },
      d = () => {
        a(!1);
      };
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx(Gg, { onShowForm: l, onShowSide: c, onCloseSide: d }),
        r && u.jsx(W1, { onClose: s }),
        u.jsxs("main", {
          children: [
            u.jsx(u8, {}),
            e.state === "loading" &&
              u.jsx(Dg, {
                className: "loader",
                color: "#1d9b47",
                loading: t,
                size: 800,
                "aria-label": "Loading Spinner",
                "data-testid": "loader",
              }),
            e.state === "idle" && u.jsx(Ag, {}),
          ],
        }),
        u.jsx(f3, {}),
      ],
    });
  },
  Hi = S.createContext();
function rT(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z",
        },
      },
    ],
  })(e);
}
function rn(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z",
        },
      },
    ],
  })(e);
}
function iT(e) {
  return ae({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z",
        },
      },
    ],
  })(e);
}
const d8 = ({ categories: e, subCategories: t }) => {
  const [n, r] = S.useState(""),
    i = t,
    o = e;
  S.useEffect(() => {
    r("All Products");
  }, [r]);
  const a = (c) => {
      r(c);
    },
    l = e.filter((c) => i.some((d) => d.category === c._id)),
    s = o.filter((c) => !i.some((d) => d.category === c._id));
  return u.jsx("div", {
    className: "categories-container",
    children: u.jsxs("div", {
      className: "categories-wrapper",
      children: [
        u.jsxs("ul", {
          className: "main-categories",
          children: [
            u.jsx("h3", { children: "General Categories" }),
            u.jsx(J, {
              to: "/allProducts",
              end: !0,
              children: u.jsxs("li", {
                children: [u.jsx(rn, {}), " All Products"],
              }),
            }),
            l.map((c) =>
              u.jsx(
                J,
                {
                  to: `/allProducts/${c.slug}`,
                  className: n === c.slug ? "active" : void 0,
                  onClick: () => a(c.name),
                  end: !0,
                  children: u.jsxs("li", {
                    children: [u.jsx(rn, {}), " ", c.name],
                  }),
                },
                c._id
              )
            ),
            s.map((c) =>
              u.jsx(
                J,
                {
                  to: `/allProducts/${c.slug}/all`,
                  className: n === c.slug ? "active" : void 0,
                  onClick: () => a(c.name),
                  end: !0,
                  children: u.jsxs("li", {
                    children: [u.jsx(rn, {}), " ", c.name],
                  }),
                },
                c._id
              )
            ),
          ],
        }),
        u.jsxs("ul", {
          className: "industry-categories",
          children: [
            u.jsx("h3", { children: "Industry" }),
            u.jsx(J, {
              to: "/allProducts/Hospitality",
              end: !0,
              children: u.jsxs("li", {
                children: [u.jsx(rn, {}), " Hospitality"],
              }),
            }),
            u.jsx(J, {
              to: "/allProducts/schools&universities",
              end: !0,
              children: u.jsxs("li", {
                children: [u.jsx(rn, {}), " Schools & university"],
              }),
            }),
          ],
        }),
        u.jsxs(J, {
          className: `services ${
            n === "services-&-maintenance" ? "active" : ""
          }`,
          to: "/allproducts/services-&-maitenance",
          end: !0,
          onClick: () => a("services-&-maintenance"),
          children: [u.jsx(rn, {}), " Services and Maintenance"],
        }),
      ],
    }),
  });
};
const f8 = () => {
    const t = Wr()
      .pathname.split("/")
      .filter((n) => n !== "");
    return u.jsx("div", {
      className: "navigation-routes",
      children: t.map((n, r) => {
        const o = decodeURIComponent(n).replace(/-/g, " ");
        return u.jsxs(
          de.Fragment,
          {
            children: [
              u.jsx(xi, { to: `/${t.slice(0, r + 1).join("/")}`, children: o }),
              r !== t.length - 1 &&
                u.jsxs("span", { children: [" ", "/", " "] }),
            ],
          },
          r
        );
      }),
    });
  },
  p8 = ({ onClose: e }) => {
    const { selectedProduct: t } = S.useContext(Hi);
    return u.jsx(u.Fragment, {
      children: u.jsxs(Rs, {
        onClose: e,
        children: [u.jsx(U1, { product: t }), u.jsx(cr, {})],
      }),
    });
  };
const h8 = ({ onClose: e, categories: t, subCategories: n }) => {
    const r = t.filter((o) => n.some((a) => a.category === o._id)),
      i = t.filter((o) => !n.some((a) => a.category === o._id));
    return u.jsx("div", {
      children: u.jsx(Rs, {
        onClose: e,
        children: u.jsxs("div", {
          className: "categories-wrapper",
          children: [
            u.jsxs("div", {
              className: "close-categories",
              children: [
                u.jsx("h3", { children: "Select Categories" }),
                u.jsx(t3, { className: "close-icon", onClick: e }),
              ],
            }),
            u.jsxs("ul", {
              className: "main-categories",
              children: [
                u.jsx("h4", { children: "Categories" }),
                r.map((o) =>
                  u.jsx(
                    J,
                    {
                      to: `/allProducts/${o.slug}`,
                      onClick: e,
                      end: !0,
                      children: u.jsxs("li", {
                        children: [u.jsx(rn, {}), " ", o.name],
                      }),
                    },
                    o._id
                  )
                ),
                i.map((o) =>
                  u.jsx(
                    J,
                    {
                      to: `/allProducts/${o.slug}/all`,
                      onClick: e,
                      end: !0,
                      children: u.jsxs("li", {
                        children: [u.jsx(rn, {}), " ", o.name],
                      }),
                    },
                    o._id
                  )
                ),
              ],
            }),
            u.jsxs("ul", {
              className: "industry-categories",
              children: [
                u.jsx("h3", { children: "Industry" }),
                u.jsx(J, {
                  to: "/allProducts/Hospitality",
                  onClick: e,
                  end: !0,
                  children: u.jsxs("li", {
                    children: [u.jsx(rn, {}), " Hospitality"],
                  }),
                }),
                u.jsx(J, {
                  to: "/allProducts/schools&universities",
                  onClick: e,
                  end: !0,
                  children: u.jsxs("li", {
                    children: [u.jsx(rn, {}), " Schools & university"],
                  }),
                }),
              ],
            }),
            u.jsxs(J, {
              onClick: e,
              to: "/allProducts/services-&-maitenance",
              children: [u.jsx(rn, {}), " Services and Maintenance"],
            }),
          ],
        }),
      }),
    });
  },
  m8 = ({ categories: e, subCategories: t }) => {
    const n = e,
      r = t,
      {
        showEnquire: i,
        openEnquireModal: o,
        closeModal: a,
        openCategoriesModal: l,
        showCategories: s,
      } = S.useContext(Hi);
    return u.jsxs(u.Fragment, {
      children: [
        i && u.jsx(p8, { onEnquire: o, onClose: a }),
        s &&
          u.jsx(h8, { categories: n, subCategories: r, onOpen: l, onClose: a }),
        u.jsxs("div", {
          className: "products",
          children: [
            u.jsx("h1", { children: "Our Products" }),
            u.jsx(f8, {}),
            u.jsxs("div", {
              className: "products-section",
              children: [
                u.jsx(d8, { categories: n, subCategories: r }),
                u.jsx("div", {
                  className: "left-product-section",
                  children: u.jsx(Ag, {}),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  g8 = ({ children: e }) => {
    const [t, n] = S.useState(!1),
      [r, i] = S.useState(!1),
      [o, a] = S.useState(null),
      l = () => {
        n(!0);
      },
      f = {
        showEnquire: t,
        showCategories: r,
        openEnquireModal: l,
        openCategoriesModal: () => {
          i(!0);
        },
        closeModal: () => {
          n(!1), i(!1);
        },
        selectedProduct: o,
        selectProduct: (p) => {
          a(p), l();
        },
      };
    return u.jsx(Hi.Provider, { value: f, children: e });
  },
  v8 = () => {
    const { data: e } = sn("root"),
      { categories: t, subCategories: n, products: r } = e;
    return u.jsx(g8, {
      children: u.jsx(m8, { categories: t, products: r, subCategories: n }),
    });
  },
  ri = async () => {
    const e = await fetch(
      "https://calm-rose-bikini.cyclic.app/api/v1/products"
    );
    if (e.ok) return { data: (await e.json()).data.data };
    throw _x({ message: "Could not fetch documents.." });
  };
var qc =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (qc =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        qc.apply(this, arguments)
      );
    },
  q1 = {
    onActivate: O.func,
    onAddUndo: O.func,
    onBeforeAddUndo: O.func,
    onBeforeExecCommand: O.func,
    onBeforeGetContent: O.func,
    onBeforeRenderUI: O.func,
    onBeforeSetContent: O.func,
    onBeforePaste: O.func,
    onBlur: O.func,
    onChange: O.func,
    onClearUndos: O.func,
    onClick: O.func,
    onContextMenu: O.func,
    onCommentChange: O.func,
    onCopy: O.func,
    onCut: O.func,
    onDblclick: O.func,
    onDeactivate: O.func,
    onDirty: O.func,
    onDrag: O.func,
    onDragDrop: O.func,
    onDragEnd: O.func,
    onDragGesture: O.func,
    onDragOver: O.func,
    onDrop: O.func,
    onExecCommand: O.func,
    onFocus: O.func,
    onFocusIn: O.func,
    onFocusOut: O.func,
    onGetContent: O.func,
    onHide: O.func,
    onInit: O.func,
    onKeyDown: O.func,
    onKeyPress: O.func,
    onKeyUp: O.func,
    onLoadContent: O.func,
    onMouseDown: O.func,
    onMouseEnter: O.func,
    onMouseLeave: O.func,
    onMouseMove: O.func,
    onMouseOut: O.func,
    onMouseOver: O.func,
    onMouseUp: O.func,
    onNodeChange: O.func,
    onObjectResizeStart: O.func,
    onObjectResized: O.func,
    onObjectSelected: O.func,
    onPaste: O.func,
    onPostProcess: O.func,
    onPostRender: O.func,
    onPreProcess: O.func,
    onProgressState: O.func,
    onRedo: O.func,
    onRemove: O.func,
    onReset: O.func,
    onSaveContent: O.func,
    onSelectionChange: O.func,
    onSetAttrib: O.func,
    onSetContent: O.func,
    onShow: O.func,
    onSubmit: O.func,
    onUndo: O.func,
    onVisualAid: O.func,
    onSkinLoadError: O.func,
    onThemeLoadError: O.func,
    onModelLoadError: O.func,
    onPluginLoadError: O.func,
    onIconsLoadError: O.func,
    onLanguageLoadError: O.func,
    onScriptsLoad: O.func,
    onScriptsLoadError: O.func,
  },
  y8 = qc(
    {
      apiKey: O.string,
      id: O.string,
      inline: O.bool,
      init: O.object,
      initialValue: O.string,
      onEditorChange: O.func,
      value: O.string,
      tagName: O.string,
      cloudChannel: O.string,
      plugins: O.oneOfType([O.string, O.array]),
      toolbar: O.oneOfType([O.string, O.array]),
      disabled: O.bool,
      textareaName: O.string,
      tinymceScriptSrc: O.oneOfType([
        O.string,
        O.arrayOf(O.string),
        O.arrayOf(O.shape({ src: O.string, async: O.bool, defer: O.bool })),
      ]),
      rollback: O.oneOfType([O.number, O.oneOf([!1])]),
      scriptLoading: O.shape({ async: O.bool, defer: O.bool, delay: O.number }),
    },
    q1
  ),
  Ou = function (e) {
    return typeof e == "function";
  },
  Bh = function (e) {
    return e in q1;
  },
  Uh = function (e) {
    return e.substr(2);
  },
  x8 = function (e, t, n, r, i, o, a) {
    var l = Object.keys(i).filter(Bh),
      s = Object.keys(o).filter(Bh),
      c = l.filter(function (f) {
        return o[f] === void 0;
      }),
      d = s.filter(function (f) {
        return i[f] === void 0;
      });
    c.forEach(function (f) {
      var p = Uh(f),
        x = a[p];
      n(p, x), delete a[p];
    }),
      d.forEach(function (f) {
        var p = r(e, f),
          x = Uh(f);
        (a[x] = p), t(x, p);
      });
  },
  w8 = function (e, t, n, r, i) {
    return x8(
      i,
      e.on.bind(e),
      e.off.bind(e),
      function (o, a) {
        return function (l) {
          var s;
          return (s = o(a)) === null || s === void 0 ? void 0 : s(l, e);
        };
      },
      t,
      n,
      r
    );
  },
  Vh = 0,
  G1 = function (e) {
    var t = Date.now(),
      n = Math.floor(Math.random() * 1e9);
    return Vh++, e + "_" + n + Vh + String(t);
  },
  Hh = function (e) {
    return (
      e !== null &&
      (e.tagName.toLowerCase() === "textarea" ||
        e.tagName.toLowerCase() === "input")
    );
  },
  Wh = function (e) {
    return typeof e > "u" || e === ""
      ? []
      : Array.isArray(e)
      ? e
      : e.split(" ");
  },
  E8 = function (e, t) {
    return Wh(e).concat(Wh(t));
  },
  S8 = function () {
    return (
      window.InputEvent &&
      typeof InputEvent.prototype.getTargetRanges == "function"
    );
  },
  C8 = function (e) {
    if (!("isConnected" in Node.prototype)) {
      for (var t = e, n = e.parentNode; n != null; )
        (t = n), (n = t.parentNode);
      return t === e.ownerDocument;
    }
    return e.isConnected;
  },
  qh = function (e, t) {
    e !== void 0 &&
      (e.mode != null &&
      typeof e.mode == "object" &&
      typeof e.mode.set == "function"
        ? e.mode.set(t)
        : e.setMode(t));
  },
  Gc =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Gc =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Gc.apply(this, arguments)
      );
    },
  _8 = function (e, t, n) {
    var r,
      i,
      o = e.createElement("script");
    (o.referrerPolicy = "origin"),
      (o.type = "application/javascript"),
      (o.id = t.id),
      (o.src = t.src),
      (o.async = (r = t.async) !== null && r !== void 0 ? r : !1),
      (o.defer = (i = t.defer) !== null && i !== void 0 ? i : !1);
    var a = function () {
        o.removeEventListener("load", a),
          o.removeEventListener("error", l),
          n(t.src);
      },
      l = function (s) {
        o.removeEventListener("load", a),
          o.removeEventListener("error", l),
          n(t.src, s);
      };
    o.addEventListener("load", a),
      o.addEventListener("error", l),
      e.head && e.head.appendChild(o);
  },
  T8 = function (e) {
    var t = {},
      n = function (a, l) {
        var s = t[a];
        (s.done = !0), (s.error = l);
        for (var c = 0, d = s.handlers; c < d.length; c++) {
          var f = d[c];
          f(a, l);
        }
        s.handlers = [];
      },
      r = function (a, l, s) {
        var c = function (g) {
          return s !== void 0 ? s(g) : console.error(g);
        };
        if (a.length === 0) {
          c(new Error("At least one script must be provided"));
          return;
        }
        for (
          var d = 0,
            f = !1,
            p = function (g, w) {
              f || (w ? ((f = !0), c(w)) : ++d === a.length && l());
            },
            x = 0,
            y = a;
          x < y.length;
          x++
        ) {
          var v = y[x],
            E = t[v.src];
          if (E) E.done ? p(v.src, E.error) : E.handlers.push(p);
          else {
            var m = G1("tiny-");
            (t[v.src] = {
              id: m,
              src: v.src,
              done: !1,
              error: null,
              handlers: [p],
            }),
              _8(e, Gc({ id: m }, v), n);
          }
        }
      },
      i = function () {
        for (var a, l = 0, s = Object.values(t); l < s.length; l++) {
          var c = s[l],
            d = e.getElementById(c.id);
          d != null &&
            d.tagName === "SCRIPT" &&
            ((a = d.parentNode) === null || a === void 0 || a.removeChild(d));
        }
        t = {};
      },
      o = function () {
        return e;
      };
    return { loadScripts: r, deleteScripts: i, getDocument: o };
  },
  j8 = function () {
    var e = [],
      t = function (i) {
        var o = e.find(function (a) {
          return a.getDocument() === i;
        });
        return o === void 0 && ((o = T8(i)), e.push(o)), o;
      },
      n = function (i, o, a, l, s) {
        var c = function () {
          return t(i).loadScripts(o, l, s);
        };
        a > 0 ? setTimeout(c, a) : c();
      },
      r = function () {
        for (var i = e.pop(); i != null; i = e.pop()) i.deleteScripts();
      };
    return { loadList: n, reinitialize: r };
  },
  k8 = j8(),
  Ru = function (e) {
    var t = e;
    return t && t.tinymce ? t.tinymce : null;
  },
  b8 =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  Il =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Il =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Il.apply(this, arguments)
      );
    },
  K1 = (function (e) {
    b8(t, e);
    function t(n) {
      var r = this,
        i,
        o,
        a;
      return (
        (r = e.call(this, n) || this),
        (r.rollbackTimer = void 0),
        (r.valueCursor = void 0),
        (r.rollbackChange = function () {
          var l = r.editor,
            s = r.props.value;
          l &&
            s &&
            s !== r.currentContent &&
            l.undoManager.ignore(function () {
              if (
                (l.setContent(s), r.valueCursor && (!r.inline || l.hasFocus()))
              )
                try {
                  l.selection.moveToBookmark(r.valueCursor);
                } catch {}
            }),
            (r.rollbackTimer = void 0);
        }),
        (r.handleBeforeInput = function (l) {
          if (
            r.props.value !== void 0 &&
            r.props.value === r.currentContent &&
            r.editor &&
            (!r.inline || r.editor.hasFocus())
          )
            try {
              r.valueCursor = r.editor.selection.getBookmark(3);
            } catch {}
        }),
        (r.handleBeforeInputSpecial = function (l) {
          (l.key === "Enter" || l.key === "Backspace" || l.key === "Delete") &&
            r.handleBeforeInput(l);
        }),
        (r.handleEditorChange = function (l) {
          var s = r.editor;
          if (s && s.initialized) {
            var c = s.getContent();
            r.props.value !== void 0 &&
              r.props.value !== c &&
              r.props.rollback !== !1 &&
              (r.rollbackTimer ||
                (r.rollbackTimer = window.setTimeout(
                  r.rollbackChange,
                  typeof r.props.rollback == "number" ? r.props.rollback : 200
                ))),
              c !== r.currentContent &&
                ((r.currentContent = c),
                Ou(r.props.onEditorChange) && r.props.onEditorChange(c, s));
          }
        }),
        (r.handleEditorChangeSpecial = function (l) {
          (l.key === "Backspace" || l.key === "Delete") &&
            r.handleEditorChange(l);
        }),
        (r.initialise = function (l) {
          var s, c, d;
          l === void 0 && (l = 0);
          var f = r.elementRef.current;
          if (f) {
            if (!C8(f)) {
              if (l === 0)
                setTimeout(function () {
                  return r.initialise(1);
                }, 1);
              else if (l < 100)
                setTimeout(function () {
                  return r.initialise(l + 1);
                }, 100);
              else
                throw new Error(
                  "tinymce can only be initialised when in a document"
                );
              return;
            }
            var p = Ru(r.view);
            if (!p)
              throw new Error(
                "tinymce should have been loaded into global scope"
              );
            var x = Il(Il({}, r.props.init), {
              selector: void 0,
              target: f,
              readonly: r.props.disabled,
              inline: r.inline,
              plugins: E8(
                (s = r.props.init) === null || s === void 0
                  ? void 0
                  : s.plugins,
                r.props.plugins
              ),
              toolbar:
                (c = r.props.toolbar) !== null && c !== void 0
                  ? c
                  : (d = r.props.init) === null || d === void 0
                  ? void 0
                  : d.toolbar,
              setup: function (y) {
                (r.editor = y),
                  r.bindHandlers({}),
                  r.inline &&
                    !Hh(f) &&
                    y.once("PostRender", function (v) {
                      y.setContent(r.getInitialValue(), { no_events: !0 });
                    }),
                  r.props.init &&
                    Ou(r.props.init.setup) &&
                    r.props.init.setup(y);
              },
              init_instance_callback: function (y) {
                var v,
                  E,
                  m = r.getInitialValue();
                (r.currentContent =
                  (v = r.currentContent) !== null && v !== void 0
                    ? v
                    : y.getContent()),
                  r.currentContent !== m &&
                    ((r.currentContent = m),
                    y.setContent(m),
                    y.undoManager.clear(),
                    y.undoManager.add(),
                    y.setDirty(!1));
                var g =
                  (E = r.props.disabled) !== null && E !== void 0 ? E : !1;
                qh(r.editor, g ? "readonly" : "design"),
                  r.props.init &&
                    Ou(r.props.init.init_instance_callback) &&
                    r.props.init.init_instance_callback(y);
              },
            });
            r.inline || (f.style.visibility = ""),
              Hh(f) && (f.value = r.getInitialValue()),
              p.init(x);
          }
        }),
        (r.id = r.props.id || G1("tiny-react")),
        (r.elementRef = S.createRef()),
        (r.inline =
          (a =
            (i = r.props.inline) !== null && i !== void 0
              ? i
              : (o = r.props.init) === null || o === void 0
              ? void 0
              : o.inline) !== null && a !== void 0
            ? a
            : !1),
        (r.boundHandlers = {}),
        r
      );
    }
    return (
      Object.defineProperty(t.prototype, "view", {
        get: function () {
          var n, r;
          return (r =
            (n = this.elementRef.current) === null || n === void 0
              ? void 0
              : n.ownerDocument.defaultView) !== null && r !== void 0
            ? r
            : window;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.componentDidUpdate = function (n) {
        var r = this,
          i,
          o;
        if (
          (this.rollbackTimer &&
            (clearTimeout(this.rollbackTimer), (this.rollbackTimer = void 0)),
          this.editor && (this.bindHandlers(n), this.editor.initialized))
        ) {
          if (
            ((this.currentContent =
              (i = this.currentContent) !== null && i !== void 0
                ? i
                : this.editor.getContent()),
            typeof this.props.initialValue == "string" &&
              this.props.initialValue !== n.initialValue)
          )
            this.editor.setContent(this.props.initialValue),
              this.editor.undoManager.clear(),
              this.editor.undoManager.add(),
              this.editor.setDirty(!1);
          else if (
            typeof this.props.value == "string" &&
            this.props.value !== this.currentContent
          ) {
            var a = this.editor;
            a.undoManager.transact(function () {
              var s;
              if (!r.inline || a.hasFocus())
                try {
                  s = a.selection.getBookmark(3);
                } catch {}
              var c = r.valueCursor;
              if ((a.setContent(r.props.value), !r.inline || a.hasFocus()))
                for (var d = 0, f = [s, c]; d < f.length; d++) {
                  var p = f[d];
                  if (p)
                    try {
                      a.selection.moveToBookmark(p), (r.valueCursor = p);
                      break;
                    } catch {}
                }
            });
          }
          if (this.props.disabled !== n.disabled) {
            var l = (o = this.props.disabled) !== null && o !== void 0 ? o : !1;
            qh(this.editor, l ? "readonly" : "design");
          }
        }
      }),
      (t.prototype.componentDidMount = function () {
        var n = this,
          r,
          i,
          o,
          a,
          l;
        if (Ru(this.view) !== null) this.initialise();
        else if (
          Array.isArray(this.props.tinymceScriptSrc) &&
          this.props.tinymceScriptSrc.length === 0
        )
          (i = (r = this.props).onScriptsLoadError) === null ||
            i === void 0 ||
            i.call(
              r,
              new Error(
                "No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."
              )
            );
        else if (
          !((o = this.elementRef.current) === null || o === void 0) &&
          o.ownerDocument
        ) {
          var s = function () {
              var d, f;
              (f = (d = n.props).onScriptsLoad) === null ||
                f === void 0 ||
                f.call(d),
                n.initialise();
            },
            c = function (d) {
              var f, p;
              (p = (f = n.props).onScriptsLoadError) === null ||
                p === void 0 ||
                p.call(f, d);
            };
          k8.loadList(
            this.elementRef.current.ownerDocument,
            this.getScriptSources(),
            (l =
              (a = this.props.scriptLoading) === null || a === void 0
                ? void 0
                : a.delay) !== null && l !== void 0
              ? l
              : 0,
            s,
            c
          );
        }
      }),
      (t.prototype.componentWillUnmount = function () {
        var n = this,
          r = this.editor;
        r &&
          (r.off(this.changeEvents(), this.handleEditorChange),
          r.off(this.beforeInputEvent(), this.handleBeforeInput),
          r.off("keypress", this.handleEditorChangeSpecial),
          r.off("keydown", this.handleBeforeInputSpecial),
          r.off("NewBlock", this.handleEditorChange),
          Object.keys(this.boundHandlers).forEach(function (i) {
            r.off(i, n.boundHandlers[i]);
          }),
          (this.boundHandlers = {}),
          r.remove(),
          (this.editor = void 0));
      }),
      (t.prototype.render = function () {
        return this.inline ? this.renderInline() : this.renderIframe();
      }),
      (t.prototype.changeEvents = function () {
        var n,
          r,
          i,
          o =
            (i =
              (r =
                (n = Ru(this.view)) === null || n === void 0
                  ? void 0
                  : n.Env) === null || r === void 0
                ? void 0
                : r.browser) === null || i === void 0
              ? void 0
              : i.isIE();
        return o
          ? "change keyup compositionend setcontent CommentChange"
          : "change input compositionend setcontent CommentChange";
      }),
      (t.prototype.beforeInputEvent = function () {
        return S8() ? "beforeinput SelectionChange" : "SelectionChange";
      }),
      (t.prototype.renderInline = function () {
        var n = this.props.tagName,
          r = n === void 0 ? "div" : n;
        return S.createElement(r, { ref: this.elementRef, id: this.id });
      }),
      (t.prototype.renderIframe = function () {
        return S.createElement("textarea", {
          ref: this.elementRef,
          style: { visibility: "hidden" },
          name: this.props.textareaName,
          id: this.id,
        });
      }),
      (t.prototype.getScriptSources = function () {
        var n,
          r,
          i =
            (n = this.props.scriptLoading) === null || n === void 0
              ? void 0
              : n.async,
          o =
            (r = this.props.scriptLoading) === null || r === void 0
              ? void 0
              : r.defer;
        if (this.props.tinymceScriptSrc !== void 0)
          return typeof this.props.tinymceScriptSrc == "string"
            ? [{ src: this.props.tinymceScriptSrc, async: i, defer: o }]
            : this.props.tinymceScriptSrc.map(function (c) {
                return typeof c == "string"
                  ? { src: c, async: i, defer: o }
                  : c;
              });
        var a = this.props.cloudChannel,
          l = this.props.apiKey ? this.props.apiKey : "no-api-key",
          s = "https://cdn.tiny.cloud/1/"
            .concat(l, "/tinymce/")
            .concat(a, "/tinymce.min.js");
        return [{ src: s, async: i, defer: o }];
      }),
      (t.prototype.getInitialValue = function () {
        return typeof this.props.initialValue == "string"
          ? this.props.initialValue
          : typeof this.props.value == "string"
          ? this.props.value
          : "";
      }),
      (t.prototype.bindHandlers = function (n) {
        var r = this;
        if (this.editor !== void 0) {
          w8(this.editor, n, this.props, this.boundHandlers, function (l) {
            return r.props[l];
          });
          var i = function (l) {
              return l.onEditorChange !== void 0 || l.value !== void 0;
            },
            o = i(n),
            a = i(this.props);
          !o && a
            ? (this.editor.on(this.changeEvents(), this.handleEditorChange),
              this.editor.on(this.beforeInputEvent(), this.handleBeforeInput),
              this.editor.on("keydown", this.handleBeforeInputSpecial),
              this.editor.on("keyup", this.handleEditorChangeSpecial),
              this.editor.on("NewBlock", this.handleEditorChange))
            : o &&
              !a &&
              (this.editor.off(this.changeEvents(), this.handleEditorChange),
              this.editor.off(this.beforeInputEvent(), this.handleBeforeInput),
              this.editor.off("keydown", this.handleBeforeInputSpecial),
              this.editor.off("keyup", this.handleEditorChangeSpecial),
              this.editor.off("NewBlock", this.handleEditorChange));
        }
      }),
      (t.propTypes = y8),
      (t.defaultProps = { cloudChannel: "6" }),
      t
    );
  })(S.Component);
const oT = ({ product: e, method: t }) => {
    const n = S.useRef(null),
      { data: r } = e,
      { products: i, subCategories: o, categories: a } = r,
      l = o,
      s = a,
      c = i,
      { id: d } = qr(),
      f = c.filter((m) => m._id === d),
      x = ia().state === "submitting",
      [y, v] = S.useState(""),
      E = (m) => {
        v(m.target.value);
      };
    return u.jsxs("div", {
      className: "add-products",
      children: [
        u.jsx("h1", { children: "Edit Product" }),
        u.jsxs(us, {
          method: t,
          className: "form-control",
          id: "edit-products-form",
          encType: "multipart/form-data",
          children: [
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "name", children: "Product Name" }),
                u.jsx("input", {
                  type: "text",
                  name: "name",
                  defaultValue: f ? f[0].name : "",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", {
                  htmlFor: "description",
                  children: "Description",
                }),
                u.jsx(K1, {
                  apiKey: "3p71zwg0resvp2vrirqjuhceayoskgdqkea8tjpm02kgx58k",
                  onInit: (m, g) => (n.current = g),
                  initialValue: f ? f[0].description : "",
                  textareaName: "description",
                  init: {
                    height: 400,
                    menubar: !0,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  },
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "category", children: "Category" }),
                u.jsxs("select", {
                  name: "category",
                  defaultValue: f ? f[0].category : "",
                  children: [
                    u.jsx("option", { value: "", children: "Select Category" }),
                    s == null
                      ? void 0
                      : s.map((m) =>
                          u.jsx(
                            "option",
                            { value: m._id, children: m.name },
                            m._id
                          )
                        ),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", {
                  htmlFor: "subCategory",
                  children: "SubCategory",
                }),
                u.jsxs("select", {
                  name: "subCategory",
                  defaultValue: f ? f[0].subCategory : "",
                  children: [
                    u.jsx("option", {
                      value: "",
                      children: "Select SubCategory",
                    }),
                    l == null
                      ? void 0
                      : l.map((m) =>
                          u.jsx(
                            "option",
                            {
                              value: m ? m._id : null,
                              children: m == null ? void 0 : m.name,
                            },
                            m._id
                          )
                        ),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", {
                  htmlFor: "tags",
                  children: "Tags (comma-separated)",
                }),
                u.jsx("input", {
                  type: "text",
                  name: "tags",
                  defaultValue: y,
                  onChange: E,
                  placeholder: f[0].tags[0] === "" ? "No tags found" : void 0,
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "image", children: "Product image" }),
                u.jsx("input", { type: "file", id: "image", name: "image" }),
              ],
            }),
            u.jsx("button", {
              type: "submit",
              className: "add-btn",
              disabled: x,
              children: x ? "Saving..." : "Edit Product",
            }),
            u.jsx(cr, {}),
          ],
        }),
      ],
    });
  },
  P8 = async ({ request: e, params: t }) => {
    const n = e.method,
      r = await e.formData(),
      o = r
        .get("tags")
        .split(",")
        .map((d) => d.trim()),
      a = r.get("subCategory"),
      l = new FormData();
    l.append("name", r.get("name")),
      l.append("description", r.get("description")),
      l.append("category", r.get("category")),
      l.append("image", r.get("image")),
      l.append("subCategory", a);
    for (const d of o) l.append("tags", d);
    let c = `https://calm-rose-bikini.cyclic.app/api/v1/products/${t.id}`;
    try {
      const d = await fetch(c, { method: n, body: l });
      if (d.ok) fe.success("Product Successfully Updated");
      else return fe.error(d.error);
      return rs("/admin/edit");
    } catch {
      return fe.error("error");
    }
  };
const N8 = () => {
    const e = S.useRef(null),
      { data: t } = sn("product-loader"),
      { subCategories: n, categories: r } = t,
      i = n,
      o = r,
      l = ia().state === "submitting",
      [s, c] = S.useState(""),
      d = (f) => {
        c(f.target.value);
      };
    return u.jsxs("div", {
      className: "add-products",
      children: [
        u.jsx("h1", { children: "Add Products" }),
        u.jsxs(us, {
          method: "POST",
          className: "form-control",
          id: "add-products-form",
          encType: "multipart/form-data",
          children: [
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "name", children: "Product Name" }),
                u.jsx("input", { type: "text", name: "name", required: !0 }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", {
                  htmlFor: "description",
                  children: "Description",
                }),
                u.jsx(K1, {
                  apiKey: "3p71zwg0resvp2vrirqjuhceayoskgdqkea8tjpm02kgx58k",
                  onInit: (f, p) => (e.current = p),
                  initialValue: "",
                  textareaName: "description",
                  init: {
                    height: 400,
                    menubar: !0,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  },
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "category", children: "Category" }),
                u.jsxs("select", {
                  name: "category",
                  children: [
                    u.jsx("option", { value: "", children: "Select Category" }),
                    o == null
                      ? void 0
                      : o.map((f) =>
                          u.jsx(
                            "option",
                            { value: f._id, children: f.name },
                            f._id
                          )
                        ),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", {
                  htmlFor: "subCategory",
                  children: "SubCategory",
                }),
                u.jsxs("select", {
                  name: "subCategory",
                  children: [
                    u.jsx("option", {
                      value: "",
                      children: "Select SubCategory",
                    }),
                    i == null
                      ? void 0
                      : i.map((f) =>
                          u.jsx(
                            "option",
                            {
                              value: f ? f._id : null,
                              children: f == null ? void 0 : f.name,
                            },
                            f._id
                          )
                        ),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", {
                  htmlFor: "tags",
                  children: "Tags (comma-separated)",
                }),
                u.jsx("input", {
                  type: "text",
                  name: "tags",
                  value: s,
                  onChange: d,
                }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "image", children: "Product image" }),
                u.jsx("input", { type: "file", id: "image", name: "image" }),
              ],
            }),
            u.jsx("button", {
              className: "add-btn",
              disabled: l,
              children: l ? "Adding..." : "Add Product",
            }),
            u.jsx(cr, {}),
          ],
        }),
      ],
    });
  },
  Q1 = async ({ request: e }) => {
    const t = e.method,
      n = await e.formData(),
      i = n
        .get("tags")
        .split(",")
        .map((c) => c.trim()),
      o = n.get("subCategory"),
      a = new FormData();
    a.append("name", n.get("name")),
      a.append("description", n.get("description")),
      a.append("category", n.get("category")),
      a.append("image", n.get("image")),
      a.append("subCategory", o);
    for (const c of i) a.append("tags", c);
    return (
      (
        await fetch(
          "https://calm-rose-bikini.cyclic.app/api/v1/products/create-products",
          { method: t, body: a }
        )
      ).ok
        ? fe.success("Product added Successfully")
        : fe.error("Failed, Something bad happened try again"),
      rs("/admin")
    );
  },
  O8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, action: Q1, default: N8 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  R8 = () => {
    const t = ia().state === "submitting";
    return u.jsxs("div", {
      className: "add-products",
      children: [
        u.jsx("h1", { children: "Add categories" }),
        u.jsxs(us, {
          method: "POST",
          className: "form-control",
          id: "add-products-form",
          children: [
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "name", children: "Category name" }),
                u.jsx("input", { type: "text", name: "name", required: !0 }),
              ],
            }),
            u.jsx("button", {
              className: "add-btn",
              disabled: t,
              children: t ? "Adding..." : "Add Product",
            }),
            u.jsx(cr, {}),
          ],
        }),
      ],
    });
  },
  L8 = async ({ request: e }) => {
    const t = e.method,
      r = { name: (await e.formData()).get("name") };
    return (
      (
        await fetch(
          "https://calm-rose-bikini.cyclic.app/api/v1/products/category/create-category",
          {
            method: t,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(r),
          }
        )
      ).ok
        ? fe.success("Product added Successfully")
        : fe.error("Failed, Something bad happened try again"),
      rs("/admin/add-categories")
    );
  },
  A8 = () => {
    const t = sn("product-loader").data.categories,
      r = ia().state === "submitting";
    return u.jsxs("div", {
      className: "add-products",
      children: [
        u.jsx("h1", { children: "Add Sub-Categories" }),
        u.jsxs(us, {
          method: "POST",
          className: "form-control",
          id: "add-products-form",
          children: [
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", {
                  htmlFor: "name",
                  children: "Sub-Category name",
                }),
                u.jsx("input", { type: "text", name: "name", required: !0 }),
              ],
            }),
            u.jsxs("div", {
              className: "input-container",
              children: [
                u.jsx("label", { htmlFor: "category", children: "Category" }),
                u.jsxs("select", {
                  name: "category",
                  children: [
                    u.jsx("option", { value: "", children: "Select Category" }),
                    t.map((i) =>
                      u.jsx("option", { value: i._id, children: i.name }, i._id)
                    ),
                  ],
                }),
              ],
            }),
            u.jsx("button", {
              className: "add-btn",
              disabled: r,
              children: r ? "Adding..." : "Add Product",
            }),
            u.jsx(cr, {}),
          ],
        }),
      ],
    });
  },
  Y1 = async ({ request: e }) => {
    const t = e.method,
      n = await e.formData(),
      r = { name: n.get("name"), category: n.get("category") };
    return (
      (
        await fetch(
          "https://calm-rose-bikini.cyclic.app/api/v1/products/subCategory/create-sub-category",
          {
            method: t,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(r),
          }
        )
      ).ok
        ? fe.success("Product added Successfully")
        : fe.error("Failed, Something went wrong! try again"),
      rs("/admin/add-sub-categories")
    );
  },
  M8 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, action: Y1, default: A8 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
const X1 = ({ products: e, categories: t, subCategories: n }) => {
  const { category: r, name: i, subCategory: o } = qr();
  let a, l;
  (a = t), (l = n);
  const s = {},
    c = {},
    d = {},
    f = {};
  a.forEach((E) => {
    s[E._id] = E.name;
  }),
    a.forEach((E) => {
      d[E._id] = E.slug;
    }),
    l == null ||
      l.forEach((E) => {
        c[E._id] = E.name;
      }),
    l == null ||
      l.forEach((E) => {
        f[E._id] = E.slug;
      });
  const p = r.split("-").join(" "),
    y = e.filter((E) => E.slug !== i).slice(0, 4),
    v = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx("div", {}),
      u.jsxs("div", {
        className: "related-container",
        children: [
          u.jsx("div", { className: "col" }),
          u.jsxs("div", {
            className: "col",
            children: [
              u.jsx("h2", { children: "Related Products" }),
              u.jsx("div", {
                className: "related-wrapper",
                children: y.map((E) => {
                  const m = c[E.subCategory] || "unKnown Category";
                  return u.jsx(
                    J,
                    {
                      to:
                        m === "unKnown Category"
                          ? `/allProducts/${d[E.category]}/all/${E.slug}`
                          : `/allProducts/${d[E.category]}/${
                              f[E.subCategory]
                            }/${E.slug}`,
                      onClick: v,
                      children: u.jsxs("div", {
                        className: "related-product",
                        children: [
                          u.jsx("div", {
                            className: "product-image",
                            children: u.jsx("img", {
                              src: `/public/uploads/products/${E.productImage}`,
                              alt: "product image",
                            }),
                          }),
                          u.jsxs("div", {
                            className: "related-details",
                            children: [
                              u.jsx("p", {
                                className: "category",
                                children: p,
                              }),
                              u.jsx("p", {
                                className: "sub-category",
                                children: E.name,
                              }),
                              u.jsx("button", {
                                className: "view-product",
                                children: "View product",
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    E._id
                  );
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
var vf = {},
  yf = {};
(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.Doctype =
      e.CDATA =
      e.Tag =
      e.Style =
      e.Script =
      e.Comment =
      e.Directive =
      e.Text =
      e.Root =
      e.isTag =
      e.ElementType =
        void 0);
  var t;
  (function (r) {
    (r.Root = "root"),
      (r.Text = "text"),
      (r.Directive = "directive"),
      (r.Comment = "comment"),
      (r.Script = "script"),
      (r.Style = "style"),
      (r.Tag = "tag"),
      (r.CDATA = "cdata"),
      (r.Doctype = "doctype");
  })((t = e.ElementType || (e.ElementType = {})));
  function n(r) {
    return r.type === t.Tag || r.type === t.Script || r.type === t.Style;
  }
  (e.isTag = n),
    (e.Root = t.Root),
    (e.Text = t.Text),
    (e.Directive = t.Directive),
    (e.Comment = t.Comment),
    (e.Script = t.Script),
    (e.Style = t.Style),
    (e.Tag = t.Tag),
    (e.CDATA = t.CDATA),
    (e.Doctype = t.Doctype);
})(yf);
var ue = {},
  mr =
    (ze && ze.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, i) {
                r.__proto__ = i;
              }) ||
            function (r, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
            }),
          e(t, n)
        );
      };
      return function (t, n) {
        if (typeof n != "function" && n !== null)
          throw new TypeError(
            "Class extends value " + String(n) + " is not a constructor or null"
          );
        e(t, n);
        function r() {
          this.constructor = t;
        }
        t.prototype =
          n === null
            ? Object.create(n)
            : ((r.prototype = n.prototype), new r());
      };
    })(),
  ko =
    (ze && ze.__assign) ||
    function () {
      return (
        (ko =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        ko.apply(this, arguments)
      );
    };
Object.defineProperty(ue, "__esModule", { value: !0 });
ue.cloneNode =
  ue.hasChildren =
  ue.isDocument =
  ue.isDirective =
  ue.isComment =
  ue.isText =
  ue.isCDATA =
  ue.isTag =
  ue.Element =
  ue.Document =
  ue.CDATA =
  ue.NodeWithChildren =
  ue.ProcessingInstruction =
  ue.Comment =
  ue.Text =
  ue.DataNode =
  ue.Node =
    void 0;
var St = yf,
  xf = (function () {
    function e() {
      (this.parent = null),
        (this.prev = null),
        (this.next = null),
        (this.startIndex = null),
        (this.endIndex = null);
    }
    return (
      Object.defineProperty(e.prototype, "parentNode", {
        get: function () {
          return this.parent;
        },
        set: function (t) {
          this.parent = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "previousSibling", {
        get: function () {
          return this.prev;
        },
        set: function (t) {
          this.prev = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "nextSibling", {
        get: function () {
          return this.next;
        },
        set: function (t) {
          this.next = t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.cloneNode = function (t) {
        return t === void 0 && (t = !1), wf(this, t);
      }),
      e
    );
  })();
ue.Node = xf;
var Ls = (function (e) {
  mr(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return (r.data = n), r;
  }
  return (
    Object.defineProperty(t.prototype, "nodeValue", {
      get: function () {
        return this.data;
      },
      set: function (n) {
        this.data = n;
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(xf);
ue.DataNode = Ls;
var Z1 = (function (e) {
  mr(t, e);
  function t() {
    var n = (e !== null && e.apply(this, arguments)) || this;
    return (n.type = St.ElementType.Text), n;
  }
  return (
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 3;
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(Ls);
ue.Text = Z1;
var J1 = (function (e) {
  mr(t, e);
  function t() {
    var n = (e !== null && e.apply(this, arguments)) || this;
    return (n.type = St.ElementType.Comment), n;
  }
  return (
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 8;
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(Ls);
ue.Comment = J1;
var ev = (function (e) {
  mr(t, e);
  function t(n, r) {
    var i = e.call(this, r) || this;
    return (i.name = n), (i.type = St.ElementType.Directive), i;
  }
  return (
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(Ls);
ue.ProcessingInstruction = ev;
var As = (function (e) {
  mr(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return (r.children = n), r;
  }
  return (
    Object.defineProperty(t.prototype, "firstChild", {
      get: function () {
        var n;
        return (n = this.children[0]) !== null && n !== void 0 ? n : null;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "lastChild", {
      get: function () {
        return this.children.length > 0
          ? this.children[this.children.length - 1]
          : null;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "childNodes", {
      get: function () {
        return this.children;
      },
      set: function (n) {
        this.children = n;
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(xf);
ue.NodeWithChildren = As;
var tv = (function (e) {
  mr(t, e);
  function t() {
    var n = (e !== null && e.apply(this, arguments)) || this;
    return (n.type = St.ElementType.CDATA), n;
  }
  return (
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 4;
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(As);
ue.CDATA = tv;
var nv = (function (e) {
  mr(t, e);
  function t() {
    var n = (e !== null && e.apply(this, arguments)) || this;
    return (n.type = St.ElementType.Root), n;
  }
  return (
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 9;
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(As);
ue.Document = nv;
var rv = (function (e) {
  mr(t, e);
  function t(n, r, i, o) {
    i === void 0 && (i = []),
      o === void 0 &&
        (o =
          n === "script"
            ? St.ElementType.Script
            : n === "style"
            ? St.ElementType.Style
            : St.ElementType.Tag);
    var a = e.call(this, i) || this;
    return (a.name = n), (a.attribs = r), (a.type = o), a;
  }
  return (
    Object.defineProperty(t.prototype, "nodeType", {
      get: function () {
        return 1;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "tagName", {
      get: function () {
        return this.name;
      },
      set: function (n) {
        this.name = n;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(t.prototype, "attributes", {
      get: function () {
        var n = this;
        return Object.keys(this.attribs).map(function (r) {
          var i, o;
          return {
            name: r,
            value: n.attribs[r],
            namespace:
              (i = n["x-attribsNamespace"]) === null || i === void 0
                ? void 0
                : i[r],
            prefix:
              (o = n["x-attribsPrefix"]) === null || o === void 0
                ? void 0
                : o[r],
          };
        });
      },
      enumerable: !1,
      configurable: !0,
    }),
    t
  );
})(As);
ue.Element = rv;
function iv(e) {
  return (0, St.isTag)(e);
}
ue.isTag = iv;
function ov(e) {
  return e.type === St.ElementType.CDATA;
}
ue.isCDATA = ov;
function av(e) {
  return e.type === St.ElementType.Text;
}
ue.isText = av;
function lv(e) {
  return e.type === St.ElementType.Comment;
}
ue.isComment = lv;
function sv(e) {
  return e.type === St.ElementType.Directive;
}
ue.isDirective = sv;
function uv(e) {
  return e.type === St.ElementType.Root;
}
ue.isDocument = uv;
function F8(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
ue.hasChildren = F8;
function wf(e, t) {
  t === void 0 && (t = !1);
  var n;
  if (av(e)) n = new Z1(e.data);
  else if (lv(e)) n = new J1(e.data);
  else if (iv(e)) {
    var r = t ? Lu(e.children) : [],
      i = new rv(e.name, ko({}, e.attribs), r);
    r.forEach(function (s) {
      return (s.parent = i);
    }),
      e.namespace != null && (i.namespace = e.namespace),
      e["x-attribsNamespace"] &&
        (i["x-attribsNamespace"] = ko({}, e["x-attribsNamespace"])),
      e["x-attribsPrefix"] &&
        (i["x-attribsPrefix"] = ko({}, e["x-attribsPrefix"])),
      (n = i);
  } else if (ov(e)) {
    var r = t ? Lu(e.children) : [],
      o = new tv(r);
    r.forEach(function (c) {
      return (c.parent = o);
    }),
      (n = o);
  } else if (uv(e)) {
    var r = t ? Lu(e.children) : [],
      a = new nv(r);
    r.forEach(function (c) {
      return (c.parent = a);
    }),
      e["x-mode"] && (a["x-mode"] = e["x-mode"]),
      (n = a);
  } else if (sv(e)) {
    var l = new ev(e.name, e.data);
    e["x-name"] != null &&
      ((l["x-name"] = e["x-name"]),
      (l["x-publicId"] = e["x-publicId"]),
      (l["x-systemId"] = e["x-systemId"])),
      (n = l);
  } else throw new Error("Not implemented yet: ".concat(e.type));
  return (
    (n.startIndex = e.startIndex),
    (n.endIndex = e.endIndex),
    e.sourceCodeLocation != null &&
      (n.sourceCodeLocation = e.sourceCodeLocation),
    n
  );
}
ue.cloneNode = wf;
function Lu(e) {
  for (
    var t = e.map(function (r) {
        return wf(r, !0);
      }),
      n = 1;
    n < t.length;
    n++
  )
    (t[n].prev = t[n - 1]), (t[n - 1].next = t[n]);
  return t;
}
(function (e) {
  var t =
      (ze && ze.__createBinding) ||
      (Object.create
        ? function (l, s, c, d) {
            d === void 0 && (d = c);
            var f = Object.getOwnPropertyDescriptor(s, c);
            (!f ||
              ("get" in f ? !s.__esModule : f.writable || f.configurable)) &&
              (f = {
                enumerable: !0,
                get: function () {
                  return s[c];
                },
              }),
              Object.defineProperty(l, d, f);
          }
        : function (l, s, c, d) {
            d === void 0 && (d = c), (l[d] = s[c]);
          }),
    n =
      (ze && ze.__exportStar) ||
      function (l, s) {
        for (var c in l)
          c !== "default" &&
            !Object.prototype.hasOwnProperty.call(s, c) &&
            t(s, l, c);
      };
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.DomHandler = void 0);
  var r = yf,
    i = ue;
  n(ue, e);
  var o = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
    a = (function () {
      function l(s, c, d) {
        (this.dom = []),
          (this.root = new i.Document(this.dom)),
          (this.done = !1),
          (this.tagStack = [this.root]),
          (this.lastNode = null),
          (this.parser = null),
          typeof c == "function" && ((d = c), (c = o)),
          typeof s == "object" && ((c = s), (s = void 0)),
          (this.callback = s ?? null),
          (this.options = c ?? o),
          (this.elementCB = d ?? null);
      }
      return (
        (l.prototype.onparserinit = function (s) {
          this.parser = s;
        }),
        (l.prototype.onreset = function () {
          (this.dom = []),
            (this.root = new i.Document(this.dom)),
            (this.done = !1),
            (this.tagStack = [this.root]),
            (this.lastNode = null),
            (this.parser = null);
        }),
        (l.prototype.onend = function () {
          this.done ||
            ((this.done = !0), (this.parser = null), this.handleCallback(null));
        }),
        (l.prototype.onerror = function (s) {
          this.handleCallback(s);
        }),
        (l.prototype.onclosetag = function () {
          this.lastNode = null;
          var s = this.tagStack.pop();
          this.options.withEndIndices && (s.endIndex = this.parser.endIndex),
            this.elementCB && this.elementCB(s);
        }),
        (l.prototype.onopentag = function (s, c) {
          var d = this.options.xmlMode ? r.ElementType.Tag : void 0,
            f = new i.Element(s, c, void 0, d);
          this.addNode(f), this.tagStack.push(f);
        }),
        (l.prototype.ontext = function (s) {
          var c = this.lastNode;
          if (c && c.type === r.ElementType.Text)
            (c.data += s),
              this.options.withEndIndices &&
                (c.endIndex = this.parser.endIndex);
          else {
            var d = new i.Text(s);
            this.addNode(d), (this.lastNode = d);
          }
        }),
        (l.prototype.oncomment = function (s) {
          if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
            this.lastNode.data += s;
            return;
          }
          var c = new i.Comment(s);
          this.addNode(c), (this.lastNode = c);
        }),
        (l.prototype.oncommentend = function () {
          this.lastNode = null;
        }),
        (l.prototype.oncdatastart = function () {
          var s = new i.Text(""),
            c = new i.CDATA([s]);
          this.addNode(c), (s.parent = c), (this.lastNode = s);
        }),
        (l.prototype.oncdataend = function () {
          this.lastNode = null;
        }),
        (l.prototype.onprocessinginstruction = function (s, c) {
          var d = new i.ProcessingInstruction(s, c);
          this.addNode(d);
        }),
        (l.prototype.handleCallback = function (s) {
          if (typeof this.callback == "function") this.callback(s, this.dom);
          else if (s) throw s;
        }),
        (l.prototype.addNode = function (s) {
          var c = this.tagStack[this.tagStack.length - 1],
            d = c.children[c.children.length - 1];
          this.options.withStartIndices &&
            (s.startIndex = this.parser.startIndex),
            this.options.withEndIndices && (s.endIndex = this.parser.endIndex),
            c.children.push(s),
            d && ((s.prev = d), (d.next = s)),
            (s.parent = c),
            (this.lastNode = null);
        }),
        l
      );
    })();
  (e.DomHandler = a), (e.default = a);
})(vf);
var Gh = "html",
  Kh = "head",
  Ia = "body",
  D8 = /<([a-zA-Z]+[0-9]?)/,
  Qh = /<head[^]*>/i,
  Yh = /<body[^]*>/i,
  $l = function () {
    throw new Error(
      "This browser does not support `document.implementation.createHTMLDocument`"
    );
  },
  Kc = function () {
    throw new Error(
      "This browser does not support `DOMParser.prototype.parseFromString`"
    );
  },
  Xh = typeof window == "object" && window.DOMParser;
if (typeof Xh == "function") {
  var I8 = new Xh(),
    $8 = "text/html";
  (Kc = function (e, t) {
    return (
      t && (e = "<" + t + ">" + e + "</" + t + ">"), I8.parseFromString(e, $8)
    );
  }),
    ($l = Kc);
}
if (typeof document == "object" && document.implementation) {
  var $a = document.implementation.createHTMLDocument();
  $l = function (e, t) {
    if (t) {
      var n = $a.documentElement.querySelector(t);
      return (n.innerHTML = e), $a;
    }
    return ($a.documentElement.innerHTML = e), $a;
  };
}
var Au = typeof document == "object" ? document.createElement("template") : {},
  Qc;
Au.content &&
  (Qc = function (e) {
    return (Au.innerHTML = e), Au.content.childNodes;
  });
function z8(e) {
  var t,
    n = e.match(D8);
  n && n[1] && (t = n[1].toLowerCase());
  var r, i, o;
  switch (t) {
    case Gh:
      return (
        (r = Kc(e)),
        Qh.test(e) ||
          ((i = r.querySelector(Kh)), i && i.parentNode.removeChild(i)),
        Yh.test(e) ||
          ((i = r.querySelector(Ia)), i && i.parentNode.removeChild(i)),
        r.querySelectorAll(Gh)
      );
    case Kh:
    case Ia:
      return (
        (r = $l(e)),
        (o = r.querySelectorAll(t)),
        Yh.test(e) && Qh.test(e) ? o[0].parentNode.childNodes : o
      );
    default:
      return Qc ? Qc(e) : ((i = $l(e, Ia).querySelector(Ia)), i.childNodes);
  }
}
var B8 = z8,
  Ef = {},
  cv = {};
cv.CASE_SENSITIVE_TAG_NAMES = [
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "linearGradient",
  "radialGradient",
  "textPath",
];
var Ms = vf,
  U8 = cv,
  Zh = U8.CASE_SENSITIVE_TAG_NAMES,
  V8 = Ms.Comment,
  H8 = Ms.Element,
  W8 = Ms.ProcessingInstruction,
  q8 = Ms.Text,
  dv = {},
  Mu;
for (var Fu = 0, G8 = Zh.length; Fu < G8; Fu++)
  (Mu = Zh[Fu]), (dv[Mu.toLowerCase()] = Mu);
function K8(e) {
  return dv[e];
}
function fv(e) {
  for (var t = {}, n, r = 0, i = e.length; r < i; r++)
    (n = e[r]), (t[n.name] = n.value);
  return t;
}
function Q8(e) {
  e = e.toLowerCase();
  var t = K8(e);
  return t || e;
}
function pv(e, t, n) {
  t = t || null;
  for (var r = [], i, o = 0, a = e.length; o < a; o++) {
    var l = e[o],
      s;
    switch (l.nodeType) {
      case 1:
        (i = Q8(l.nodeName)),
          (s = new H8(i, fv(l.attributes))),
          (s.children = pv(
            i === "template" ? l.content.childNodes : l.childNodes,
            s
          ));
        break;
      case 3:
        s = new q8(l.nodeValue);
        break;
      case 8:
        s = new V8(l.nodeValue);
        break;
      default:
        continue;
    }
    var c = r[o - 1] || null;
    c && (c.next = s), (s.parent = t), (s.prev = c), (s.next = null), r.push(s);
  }
  return (
    n &&
      ((s = new W8(n.substring(0, n.indexOf(" ")).toLowerCase(), n)),
      (s.next = r[0] || null),
      (s.parent = t),
      r.unshift(s),
      r[1] && (r[1].prev = r[0])),
    r
  );
}
Ef.formatAttributes = fv;
Ef.formatDOM = pv;
var Y8 = B8,
  X8 = Ef,
  Z8 = X8.formatDOM,
  J8 = /<(![a-zA-Z\s]+)>/;
function e6(e) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (e === "") return [];
  var t = e.match(J8),
    n;
  return t && t[1] && (n = t[1]), Z8(Y8(e), null, n);
}
var t6 = e6,
  Gt = {},
  Fs = {},
  n6 = 0;
Fs.SAME = n6;
var r6 = 1;
Fs.CAMELCASE = r6;
Fs.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  "accept-charset": "acceptCharset",
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: "className",
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: "htmlFor",
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  "http-equiv": "httpEquiv",
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  "accent-height": "accentHeight",
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  "alignment-baseline": "alignmentBaseline",
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  "arabic-form": "arabicForm",
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  "baseline-shift": "baselineShift",
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  "cap-height": "capHeight",
  clip: 0,
  clipPath: 1,
  "clip-path": "clipPath",
  clipPathUnits: 1,
  clipRule: 1,
  "clip-rule": "clipRule",
  color: 0,
  colorInterpolation: 1,
  "color-interpolation": "colorInterpolation",
  colorInterpolationFilters: 1,
  "color-interpolation-filters": "colorInterpolationFilters",
  colorProfile: 1,
  "color-profile": "colorProfile",
  colorRendering: 1,
  "color-rendering": "colorRendering",
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  "dominant-baseline": "dominantBaseline",
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  "enable-background": "enableBackground",
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  "fill-opacity": "fillOpacity",
  fillRule: 1,
  "fill-rule": "fillRule",
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  "flood-opacity": "floodOpacity",
  floodColor: 1,
  "flood-color": "floodColor",
  focusable: 0,
  fontFamily: 1,
  "font-family": "fontFamily",
  fontSize: 1,
  "font-size": "fontSize",
  fontSizeAdjust: 1,
  "font-size-adjust": "fontSizeAdjust",
  fontStretch: 1,
  "font-stretch": "fontStretch",
  fontStyle: 1,
  "font-style": "fontStyle",
  fontVariant: 1,
  "font-variant": "fontVariant",
  fontWeight: 1,
  "font-weight": "fontWeight",
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  "glyph-name": "glyphName",
  glyphOrientationHorizontal: 1,
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphOrientationVertical: 1,
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  "horiz-adv-x": "horizAdvX",
  horizOriginX: 1,
  "horiz-origin-x": "horizOriginX",
  ideographic: 0,
  imageRendering: 1,
  "image-rendering": "imageRendering",
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  "letter-spacing": "letterSpacing",
  lightingColor: 1,
  "lighting-color": "lightingColor",
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  "marker-end": "markerEnd",
  markerHeight: 1,
  markerMid: 1,
  "marker-mid": "markerMid",
  markerStart: 1,
  "marker-start": "markerStart",
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  "overline-position": "overlinePosition",
  overlineThickness: 1,
  "overline-thickness": "overlineThickness",
  paintOrder: 1,
  "paint-order": "paintOrder",
  panose1: 0,
  "panose-1": "panose1",
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  "pointer-events": "pointerEvents",
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  "rendering-intent": "renderingIntent",
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  "shape-rendering": "shapeRendering",
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  "stop-color": "stopColor",
  stopOpacity: 1,
  "stop-opacity": "stopOpacity",
  strikethroughPosition: 1,
  "strikethrough-position": "strikethroughPosition",
  strikethroughThickness: 1,
  "strikethrough-thickness": "strikethroughThickness",
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  "stroke-dasharray": "strokeDasharray",
  strokeDashoffset: 1,
  "stroke-dashoffset": "strokeDashoffset",
  strokeLinecap: 1,
  "stroke-linecap": "strokeLinecap",
  strokeLinejoin: 1,
  "stroke-linejoin": "strokeLinejoin",
  strokeMiterlimit: 1,
  "stroke-miterlimit": "strokeMiterlimit",
  strokeWidth: 1,
  "stroke-width": "strokeWidth",
  strokeOpacity: 1,
  "stroke-opacity": "strokeOpacity",
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  "text-anchor": "textAnchor",
  textDecoration: 1,
  "text-decoration": "textDecoration",
  textLength: 1,
  textRendering: 1,
  "text-rendering": "textRendering",
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  "underline-position": "underlinePosition",
  underlineThickness: 1,
  "underline-thickness": "underlineThickness",
  unicode: 0,
  unicodeBidi: 1,
  "unicode-bidi": "unicodeBidi",
  unicodeRange: 1,
  "unicode-range": "unicodeRange",
  unitsPerEm: 1,
  "units-per-em": "unitsPerEm",
  unselectable: 0,
  vAlphabetic: 1,
  "v-alphabetic": "vAlphabetic",
  values: 0,
  vectorEffect: 1,
  "vector-effect": "vectorEffect",
  version: 0,
  vertAdvY: 1,
  "vert-adv-y": "vertAdvY",
  vertOriginX: 1,
  "vert-origin-x": "vertOriginX",
  vertOriginY: 1,
  "vert-origin-y": "vertOriginY",
  vHanging: 1,
  "v-hanging": "vHanging",
  vIdeographic: 1,
  "v-ideographic": "vIdeographic",
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  "v-mathematical": "vMathematical",
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  "word-spacing": "wordSpacing",
  writingMode: 1,
  "writing-mode": "writingMode",
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  "x-height": "xHeight",
  xlinkActuate: 1,
  "xlink:actuate": "xlinkActuate",
  xlinkArcrole: 1,
  "xlink:arcrole": "xlinkArcrole",
  xlinkHref: 1,
  "xlink:href": "xlinkHref",
  xlinkRole: 1,
  "xlink:role": "xlinkRole",
  xlinkShow: 1,
  "xlink:show": "xlinkShow",
  xlinkTitle: 1,
  "xlink:title": "xlinkTitle",
  xlinkType: 1,
  "xlink:type": "xlinkType",
  xmlBase: 1,
  "xml:base": "xmlBase",
  xmlLang: 1,
  "xml:lang": "xmlLang",
  xmlns: 0,
  "xml:space": "xmlSpace",
  xmlnsXlink: 1,
  "xmlns:xlink": "xmlnsXlink",
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1,
};
Object.defineProperty(Gt, "__esModule", { value: !0 });
function i6(e, t) {
  return o6(e) || a6(e, t) || l6(e, t) || s6();
}
function o6(e) {
  if (Array.isArray(e)) return e;
}
function a6(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      o = !1,
      a,
      l;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (s) {
      (o = !0), (l = s);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (o) throw l;
      }
    }
    return r;
  }
}
function l6(e, t) {
  if (e) {
    if (typeof e == "string") return Jh(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Jh(e, t);
  }
}
function Jh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function s6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var hv = 0,
  gr = 1,
  Ds = 2,
  Is = 3,
  Sf = 4,
  mv = 5,
  gv = 6;
function u6(e) {
  return ot.hasOwnProperty(e) ? ot[e] : null;
}
function ht(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === Ds || t === Is || t === Sf),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var ot = {},
  c6 = [
    "children",
    "dangerouslySetInnerHTML",
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style",
  ];
c6.forEach(function (e) {
  ot[e] = new ht(e, hv, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = i6(e, 2),
    n = t[0],
    r = t[1];
  ot[n] = new ht(n, gr, !1, r, null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ot[e] = new ht(e, Ds, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ot[e] = new ht(e, Ds, !1, e, null, !1, !1);
});
[
  "allowFullScreen",
  "async",
  "autoFocus",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  "itemScope",
].forEach(function (e) {
  ot[e] = new ht(e, Is, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ot[e] = new ht(e, Is, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ot[e] = new ht(e, Sf, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ot[e] = new ht(e, gv, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ot[e] = new ht(e, mv, !1, e.toLowerCase(), null, !1, !1);
});
var Cf = /[\-\:]([a-z])/g,
  _f = function (t) {
    return t[1].toUpperCase();
  };
[
  "accent-height",
  "alignment-baseline",
  "arabic-form",
  "baseline-shift",
  "cap-height",
  "clip-path",
  "clip-rule",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill-opacity",
  "fill-rule",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "horiz-adv-x",
  "horiz-origin-x",
  "image-rendering",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "overline-position",
  "overline-thickness",
  "paint-order",
  "panose-1",
  "pointer-events",
  "rendering-intent",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "underline-position",
  "underline-thickness",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "vector-effect",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "word-spacing",
  "writing-mode",
  "xmlns:xlink",
  "x-height",
].forEach(function (e) {
  var t = e.replace(Cf, _f);
  ot[t] = new ht(t, gr, !1, e, null, !1, !1);
});
[
  "xlink:actuate",
  "xlink:arcrole",
  "xlink:role",
  "xlink:show",
  "xlink:title",
  "xlink:type",
].forEach(function (e) {
  var t = e.replace(Cf, _f);
  ot[t] = new ht(t, gr, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cf, _f);
  ot[t] = new ht(t, gr, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ot[e] = new ht(e, gr, !1, e.toLowerCase(), null, !1, !1);
});
var d6 = "xlinkHref";
ot[d6] = new ht(
  "xlinkHref",
  gr,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ot[e] = new ht(e, gr, !1, e.toLowerCase(), null, !0, !0);
});
var Tf = Fs,
  f6 = Tf.CAMELCASE,
  p6 = Tf.SAME,
  em = Tf.possibleStandardNames,
  h6 =
    ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
  m6 = h6 + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
  g6 = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + m6 + "]*$")),
  v6 = Object.keys(em).reduce(function (e, t) {
    var n = em[t];
    return (
      n === p6 ? (e[t] = t) : n === f6 ? (e[t.toLowerCase()] = t) : (e[t] = n),
      e
    );
  }, {});
Gt.BOOLEAN = Is;
Gt.BOOLEANISH_STRING = Ds;
Gt.NUMERIC = mv;
Gt.OVERLOADED_BOOLEAN = Sf;
Gt.POSITIVE_NUMERIC = gv;
Gt.RESERVED = hv;
Gt.STRING = gr;
Gt.getPropertyInfo = u6;
Gt.isCustomAttribute = g6;
Gt.possibleStandardNames = v6;
var vv = {},
  jf = { exports: {} },
  tm = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  y6 = /\n/g,
  x6 = /^\s*/,
  w6 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  E6 = /^:\s*/,
  S6 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  C6 = /^[;\s]*/,
  _6 = /^\s+|\s+$/g,
  T6 = `
`,
  nm = "/",
  rm = "*",
  Tr = "",
  j6 = "comment",
  k6 = "declaration",
  b6 = function (e, t) {
    if (typeof e != "string")
      throw new TypeError("First argument must be a string");
    if (!e) return [];
    t = t || {};
    var n = 1,
      r = 1;
    function i(y) {
      var v = y.match(y6);
      v && (n += v.length);
      var E = y.lastIndexOf(T6);
      r = ~E ? y.length - E : r + y.length;
    }
    function o() {
      var y = { line: n, column: r };
      return function (v) {
        return (v.position = new a(y)), c(), v;
      };
    }
    function a(y) {
      (this.start = y),
        (this.end = { line: n, column: r }),
        (this.source = t.source);
    }
    a.prototype.content = e;
    function l(y) {
      var v = new Error(t.source + ":" + n + ":" + r + ": " + y);
      if (
        ((v.reason = y),
        (v.filename = t.source),
        (v.line = n),
        (v.column = r),
        (v.source = e),
        !t.silent)
      )
        throw v;
    }
    function s(y) {
      var v = y.exec(e);
      if (v) {
        var E = v[0];
        return i(E), (e = e.slice(E.length)), v;
      }
    }
    function c() {
      s(x6);
    }
    function d(y) {
      var v;
      for (y = y || []; (v = f()); ) v !== !1 && y.push(v);
      return y;
    }
    function f() {
      var y = o();
      if (!(nm != e.charAt(0) || rm != e.charAt(1))) {
        for (
          var v = 2;
          Tr != e.charAt(v) && (rm != e.charAt(v) || nm != e.charAt(v + 1));

        )
          ++v;
        if (((v += 2), Tr === e.charAt(v - 1)))
          return l("End of comment missing");
        var E = e.slice(2, v - 2);
        return (
          (r += 2),
          i(E),
          (e = e.slice(v)),
          (r += 2),
          y({ type: j6, comment: E })
        );
      }
    }
    function p() {
      var y = o(),
        v = s(w6);
      if (v) {
        if ((f(), !s(E6))) return l("property missing ':'");
        var E = s(S6),
          m = y({
            type: k6,
            property: im(v[0].replace(tm, Tr)),
            value: E ? im(E[0].replace(tm, Tr)) : Tr,
          });
        return s(C6), m;
      }
    }
    function x() {
      var y = [];
      d(y);
      for (var v; (v = p()); ) v !== !1 && (y.push(v), d(y));
      return y;
    }
    return c(), x();
  };
function im(e) {
  return e ? e.replace(_6, Tr) : Tr;
}
var P6 = b6;
function yv(e, t) {
  var n = null;
  if (!e || typeof e != "string") return n;
  for (
    var r, i = P6(e), o = typeof t == "function", a, l, s = 0, c = i.length;
    s < c;
    s++
  )
    (r = i[s]),
      (a = r.property),
      (l = r.value),
      o ? t(a, l, r) : l && (n || (n = {}), (n[a] = l));
  return n;
}
jf.exports = yv;
jf.exports.default = yv;
var N6 = jf.exports,
  $s = {};
$s.__esModule = !0;
$s.camelCase = void 0;
var O6 = /^--[a-zA-Z0-9-]+$/,
  R6 = /-([a-z])/g,
  L6 = /^[^-]+$/,
  A6 = /^-(webkit|moz|ms|o|khtml)-/,
  M6 = /^-(ms)-/,
  F6 = function (e) {
    return !e || L6.test(e) || O6.test(e);
  },
  D6 = function (e, t) {
    return t.toUpperCase();
  },
  om = function (e, t) {
    return "".concat(t, "-");
  },
  I6 = function (e, t) {
    return (
      t === void 0 && (t = {}),
      F6(e)
        ? e
        : ((e = e.toLowerCase()),
          t.reactCompat ? (e = e.replace(M6, om)) : (e = e.replace(A6, om)),
          e.replace(R6, D6))
    );
  };
$s.camelCase = I6;
(function (e) {
  var t =
    (ze && ze.__importDefault) ||
    function (o) {
      return o && o.__esModule ? o : { default: o };
    };
  e.__esModule = !0;
  var n = t(N6),
    r = $s;
  function i(o, a) {
    var l = {};
    return (
      !o ||
        typeof o != "string" ||
        (0, n.default)(o, function (s, c) {
          s && c && (l[(0, r.camelCase)(s, a)] = c);
        }),
      l
    );
  }
  e.default = i;
})(vv);
var $6 = S,
  z6 = vv.default;
function B6(e, t) {
  if (!e || typeof e != "object")
    throw new TypeError("First argument must be an object");
  var n = typeof t == "function",
    r = {},
    i = {};
  for (var o in e) {
    var a = e[o];
    if (n && ((r = t(o, a)), r && r.length === 2)) {
      i[r[0]] = r[1];
      continue;
    }
    typeof a == "string" && (i[a] = o);
  }
  return i;
}
var U6 = new Set([
  "annotation-xml",
  "color-profile",
  "font-face",
  "font-face-src",
  "font-face-uri",
  "font-face-format",
  "font-face-name",
  "missing-glyph",
]);
function V6(e, t) {
  return e.indexOf("-") === -1 ? t && typeof t.is == "string" : !U6.has(e);
}
var H6 = { reactCompat: !0 };
function W6(e, t) {
  if (e != null)
    try {
      t.style = z6(e, H6);
    } catch {
      t.style = {};
    }
}
var q6 = $6.version.split(".")[0] >= 16,
  xv = new Set([
    "tr",
    "tbody",
    "thead",
    "tfoot",
    "colgroup",
    "table",
    "head",
    "html",
    "frameset",
  ]);
function G6(e) {
  return !xv.has(e.name);
}
function K6(e) {
  return e;
}
var wv = {
    PRESERVE_CUSTOM_ATTRIBUTES: q6,
    ELEMENTS_WITH_NO_TEXT_CHILDREN: xv,
    invertObject: B6,
    isCustomComponent: V6,
    setStyleProp: W6,
    canTextBeChildOfNode: G6,
    returnFirstArg: K6,
  },
  po = Gt,
  am = wv,
  Q6 = ["checked", "value"],
  Y6 = ["input", "select", "textarea"],
  X6 = { reset: !0, submit: !0 },
  Ev = function (t, n) {
    t = t || {};
    var r,
      i,
      o,
      a,
      l,
      s = {},
      c = t.type && X6[t.type];
    for (r in t) {
      if (((o = t[r]), po.isCustomAttribute(r))) {
        s[r] = o;
        continue;
      }
      if (((i = r.toLowerCase()), (a = lm(i)), a)) {
        switch (
          ((l = po.getPropertyInfo(a)),
          Q6.indexOf(a) !== -1 &&
            Y6.indexOf(n) !== -1 &&
            !c &&
            (a = lm("default" + i)),
          (s[a] = o),
          l && l.type)
        ) {
          case po.BOOLEAN:
            s[a] = !0;
            break;
          case po.OVERLOADED_BOOLEAN:
            o === "" && (s[a] = !0);
            break;
        }
        continue;
      }
      am.PRESERVE_CUSTOM_ATTRIBUTES && (s[r] = o);
    }
    return am.setStyleProp(t.style, s), s;
  };
function lm(e) {
  return po.possibleStandardNames[e];
}
var Z6 = S,
  J6 = Ev,
  Yo = wv,
  e_ = Yo.setStyleProp,
  t_ = Yo.canTextBeChildOfNode;
function Sv(e, t) {
  t = t || {};
  for (
    var n = t.library || Z6,
      r = n.cloneElement,
      i = n.createElement,
      o = n.isValidElement,
      a = [],
      l,
      s,
      c = typeof t.replace == "function",
      d = t.transform || Yo.returnFirstArg,
      f,
      p,
      x,
      y = t.trim,
      v = 0,
      E = e.length;
    v < E;
    v++
  ) {
    if (((l = e[v]), c && ((f = t.replace(l)), o(f)))) {
      E > 1 && (f = r(f, { key: f.key || v })), a.push(d(f, l, v));
      continue;
    }
    if (l.type === "text") {
      if (
        ((s = !l.data.trim().length),
        (s && l.parent && !t_(l.parent)) || (y && s))
      )
        continue;
      a.push(d(l.data, l, v));
      continue;
    }
    switch (
      ((p = l.attribs),
      n_(l) ? e_(p.style, p) : p && (p = J6(p, l.name)),
      (x = null),
      l.type)
    ) {
      case "script":
      case "style":
        l.children[0] &&
          (p.dangerouslySetInnerHTML = { __html: l.children[0].data });
        break;
      case "tag":
        l.name === "textarea" && l.children[0]
          ? (p.defaultValue = l.children[0].data)
          : l.children && l.children.length && (x = Sv(l.children, t));
        break;
      default:
        continue;
    }
    E > 1 && (p.key = v), a.push(d(i(l.name, p, x), l, v));
  }
  return a.length === 1 ? a[0] : a;
}
function n_(e) {
  return (
    Yo.PRESERVE_CUSTOM_ATTRIBUTES &&
    e.type === "tag" &&
    Yo.isCustomComponent(e.name, e.attribs)
  );
}
var r_ = Sv,
  zs = vf,
  Ei = t6,
  i_ = Ev,
  Cv = r_;
Ei = typeof Ei.default == "function" ? Ei.default : Ei;
var o_ = { lowerCaseAttributeNames: !1 };
function yn(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  return e === "" ? [] : ((t = t || {}), Cv(Ei(e, t.htmlparser2 || o_), t));
}
yn.domToReact = Cv;
yn.htmlToDOM = Ei;
yn.attributesToProps = i_;
yn.Comment = zs.Comment;
yn.Element = zs.Element;
yn.ProcessingInstruction = zs.ProcessingInstruction;
yn.Text = zs.Text;
var a_ = yn;
yn.default = yn;
const zn = Ur(a_);
zn.domToReact;
zn.htmlToDOM;
zn.attributesToProps;
zn.Comment;
zn.Element;
zn.ProcessingInstruction;
zn.Text;
const l_ = () => {
    const { selectProduct: e } = S.useContext(Hi),
      { data: t } = sn("root"),
      { products: n, subCategories: r, categories: i } = t,
      o = n,
      a = i,
      l = r,
      { name: s, category: c, subCategory: d } = qr(),
      f = o.filter((h) => h.slug === s),
      p = a.find((h) => h.slug === c),
      x = l.find((h) => h.slug === d),
      y = o.find((h) => h.slug === s && h.category === p._id),
      v = o.filter((h) => h.subCategory === x._id);
    if (!f)
      return u.jsx("p", { children: "No product found with that adress" });
    const { name: E, description: m, productImage: g } = y,
      w = zn(m);
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("div", {
          className: "product-details",
          children: u.jsxs("div", {
            className: "product",
            children: [
              u.jsx("div", {
                className: "product-image",
                children: u.jsx("img", {
                  src: `/public/uploads/products/${g}`,
                  alt: "product",
                }),
              }),
              u.jsxs("div", {
                className: "product-description",
                children: [
                  u.jsx("h1", { className: "product-name", children: E }),
                  u.jsxs("div", {
                    className: "des",
                    children: [
                      u.jsx("label", {
                        children: u.jsxs("p", {
                          children: [
                            "Category: ",
                            u.jsx("span", {
                              className: "category-name",
                              children: c,
                            }),
                          ],
                        }),
                      }),
                      u.jsxs("div", {
                        className: "specs",
                        children: [
                          u.jsx("h2", {
                            className: "des-header",
                            children: "Description",
                          }),
                          u.jsx("div", {
                            className: "description",
                            children: w,
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx(ds, {
                    label: "Enquire about this product",
                    className: "enquire-btn",
                    onClick: () => e(y),
                  }),
                  u.jsxs("div", {
                    className: "share-socials",
                    children: [
                      u.jsx("p", { children: "Follow:" }),
                      u.jsxs("div", {
                        className: "socials",
                        children: [
                          u.jsx("a", {
                            href: "https://www.facebook.com/VitalMediquip/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Kg, { className: "icons" }),
                          }),
                          u.jsx("a", {
                            href: "https://www.instagram.com/vital_mediquip/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Yd, { className: "icons" }),
                          }),
                          u.jsx("a", {
                            href: "https://twitter.com/Vital_Mediquip",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Xd, { className: "icons" }),
                          }),
                          u.jsx("a", {
                            href: "https://www.linkedin.com/company/97941302/admin/feed/posts/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Qg, { className: "icons" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        v && u.jsx(X1, { products: v, categories: i, subCategories: r }),
      ],
    });
  },
  s_ = () => {
    const { openCategoriesModal: e } = S.useContext(Hi);
    return u.jsx(u.Fragment, {
      children: u.jsxs("div", {
        className: "filters",
        onClick: e,
        children: [
          u.jsx(Zw, { className: "icons" }),
          u.jsx("p", { children: " Categories" }),
        ],
      }),
    });
  };
const ua = ({ onSearch: e }) => {
  const [t, n] = S.useState(""),
    r = (i) => {
      const o = i.target.value;
      n(o), e(o);
    };
  return u.jsxs("div", {
    className: "category-section",
    children: [
      u.jsxs("div", {
        className: "search-bar",
        children: [
          u.jsx("input", {
            type: "text",
            placeholder: "search...",
            onChange: r,
            value: t,
          }),
          u.jsx(d3, { className: "search-icon" }),
        ],
      }),
      u.jsx(s_, {}),
    ],
  });
};
var _v = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(S);
  })(ze, (n) =>
    (() => {
      var r = {
          703: (l, s, c) => {
            var d = c(414);
            function f() {}
            function p() {}
            (p.resetWarningCache = f),
              (l.exports = function () {
                function x(E, m, g, w, h, C) {
                  if (C !== d) {
                    var P = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((P.name = "Invariant Violation"), P);
                  }
                }
                function y() {
                  return x;
                }
                x.isRequired = x;
                var v = {
                  array: x,
                  bigint: x,
                  bool: x,
                  func: x,
                  number: x,
                  object: x,
                  string: x,
                  symbol: x,
                  any: x,
                  arrayOf: y,
                  element: x,
                  elementType: x,
                  instanceOf: y,
                  node: x,
                  objectOf: y,
                  oneOf: y,
                  oneOfType: y,
                  shape: y,
                  exact: y,
                  checkPropTypes: p,
                  resetWarningCache: f,
                };
                return (v.PropTypes = v), v;
              });
          },
          697: (l, s, c) => {
            l.exports = c(703)();
          },
          414: (l) => {
            l.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          98: (l) => {
            l.exports = n;
          },
        },
        i = {};
      function o(l) {
        var s = i[l];
        if (s !== void 0) return s.exports;
        var c = (i[l] = { exports: {} });
        return r[l](c, c.exports, o), c.exports;
      }
      (o.n = (l) => {
        var s = l && l.__esModule ? () => l.default : () => l;
        return o.d(s, { a: s }), s;
      }),
        (o.d = (l, s) => {
          for (var c in s)
            o.o(s, c) &&
              !o.o(l, c) &&
              Object.defineProperty(l, c, { enumerable: !0, get: s[c] });
        }),
        (o.o = (l, s) => Object.prototype.hasOwnProperty.call(l, s)),
        (o.r = (l) => {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(l, "__esModule", { value: !0 });
        });
      var a = {};
      return (
        (() => {
          o.r(a), o.d(a, { default: () => oe });
          var l = o(98),
            s = o.n(l),
            c = o(697),
            d = o.n(c);
          function f() {
            return (
              (f = Object.assign
                ? Object.assign.bind()
                : function (R) {
                    for (var D = 1; D < arguments.length; D++) {
                      var H = arguments[D];
                      for (var X in H)
                        Object.prototype.hasOwnProperty.call(H, X) &&
                          (R[X] = H[X]);
                    }
                    return R;
                  }),
              f.apply(this, arguments)
            );
          }
          var p = function (R) {
            var D = R.pageClassName,
              H = R.pageLinkClassName,
              X = R.page,
              le = R.selected,
              me = R.activeClassName,
              A = R.activeLinkClassName,
              N = R.getEventListener,
              j = R.pageSelectedHandler,
              G = R.href,
              $ = R.extraAriaContext,
              Y = R.pageLabelBuilder,
              W = R.rel,
              se = R.ariaLabel || "Page " + X + ($ ? " " + $ : ""),
              ge = null;
            return (
              le &&
                ((ge = "page"),
                (se = R.ariaLabel || "Page " + X + " is your current page"),
                (D = D !== void 0 ? D + " " + me : me),
                H !== void 0 ? A !== void 0 && (H = H + " " + A) : (H = A)),
              s().createElement(
                "li",
                { className: D },
                s().createElement(
                  "a",
                  f(
                    {
                      rel: W,
                      role: G ? void 0 : "button",
                      className: H,
                      href: G,
                      tabIndex: le ? "-1" : "0",
                      "aria-label": se,
                      "aria-current": ge,
                      onKeyPress: j,
                    },
                    N(j)
                  ),
                  Y(X)
                )
              )
            );
          };
          p.propTypes = {
            pageSelectedHandler: d().func.isRequired,
            selected: d().bool.isRequired,
            pageClassName: d().string,
            pageLinkClassName: d().string,
            activeClassName: d().string,
            activeLinkClassName: d().string,
            extraAriaContext: d().string,
            href: d().string,
            ariaLabel: d().string,
            page: d().number.isRequired,
            getEventListener: d().func.isRequired,
            pageLabelBuilder: d().func.isRequired,
            rel: d().string,
          };
          const x = p;
          function y() {
            return (
              (y = Object.assign
                ? Object.assign.bind()
                : function (R) {
                    for (var D = 1; D < arguments.length; D++) {
                      var H = arguments[D];
                      for (var X in H)
                        Object.prototype.hasOwnProperty.call(H, X) &&
                          (R[X] = H[X]);
                    }
                    return R;
                  }),
              y.apply(this, arguments)
            );
          }
          var v = function (R) {
            var D = R.breakLabel,
              H = R.breakAriaLabel,
              X = R.breakClassName,
              le = R.breakLinkClassName,
              me = R.breakHandler,
              A = R.getEventListener,
              N = X || "break";
            return s().createElement(
              "li",
              { className: N },
              s().createElement(
                "a",
                y(
                  {
                    className: le,
                    role: "button",
                    tabIndex: "0",
                    "aria-label": H,
                    onKeyPress: me,
                  },
                  A(me)
                ),
                D
              )
            );
          };
          v.propTypes = {
            breakLabel: d().oneOfType([d().string, d().node]),
            breakAriaLabel: d().string,
            breakClassName: d().string,
            breakLinkClassName: d().string,
            breakHandler: d().func.isRequired,
            getEventListener: d().func.isRequired,
          };
          const E = v;
          function m(R) {
            var D =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "";
            return R ?? D;
          }
          function g(R) {
            return (
              (g =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (D) {
                      return typeof D;
                    }
                  : function (D) {
                      return D &&
                        typeof Symbol == "function" &&
                        D.constructor === Symbol &&
                        D !== Symbol.prototype
                        ? "symbol"
                        : typeof D;
                    }),
              g(R)
            );
          }
          function w() {
            return (
              (w = Object.assign
                ? Object.assign.bind()
                : function (R) {
                    for (var D = 1; D < arguments.length; D++) {
                      var H = arguments[D];
                      for (var X in H)
                        Object.prototype.hasOwnProperty.call(H, X) &&
                          (R[X] = H[X]);
                    }
                    return R;
                  }),
              w.apply(this, arguments)
            );
          }
          function h(R, D) {
            for (var H = 0; H < D.length; H++) {
              var X = D[H];
              (X.enumerable = X.enumerable || !1),
                (X.configurable = !0),
                "value" in X && (X.writable = !0),
                Object.defineProperty(R, X.key, X);
            }
          }
          function C(R, D) {
            return (
              (C = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (H, X) {
                    return (H.__proto__ = X), H;
                  }),
              C(R, D)
            );
          }
          function P(R, D) {
            if (D && (g(D) === "object" || typeof D == "function")) return D;
            if (D !== void 0)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return k(R);
          }
          function k(R) {
            if (R === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return R;
          }
          function M(R) {
            return (
              (M = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (D) {
                    return D.__proto__ || Object.getPrototypeOf(D);
                  }),
              M(R)
            );
          }
          function U(R, D, H) {
            return (
              D in R
                ? Object.defineProperty(R, D, {
                    value: H,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (R[D] = H),
              R
            );
          }
          var I = (function (R) {
            (function (N, j) {
              if (typeof j != "function" && j !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (N.prototype = Object.create(j && j.prototype, {
                constructor: { value: N, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(N, "prototype", { writable: !1 }),
                j && C(N, j);
            })(A, R);
            var D,
              H,
              X,
              le,
              me =
                ((X = A),
                (le = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var N,
                    j = M(X);
                  if (le) {
                    var G = M(this).constructor;
                    N = Reflect.construct(j, arguments, G);
                  } else N = j.apply(this, arguments);
                  return P(this, N);
                });
            function A(N) {
              var j, G;
              return (
                (function ($, Y) {
                  if (!($ instanceof Y))
                    throw new TypeError("Cannot call a class as a function");
                })(this, A),
                U(
                  k((j = me.call(this, N))),
                  "handlePreviousPage",
                  function ($) {
                    var Y = j.state.selected;
                    j.handleClick($, null, Y > 0 ? Y - 1 : void 0, {
                      isPrevious: !0,
                    });
                  }
                ),
                U(k(j), "handleNextPage", function ($) {
                  var Y = j.state.selected,
                    W = j.props.pageCount;
                  j.handleClick($, null, Y < W - 1 ? Y + 1 : void 0, {
                    isNext: !0,
                  });
                }),
                U(k(j), "handlePageSelected", function ($, Y) {
                  if (j.state.selected === $)
                    return (
                      j.callActiveCallback($),
                      void j.handleClick(Y, null, void 0, { isActive: !0 })
                    );
                  j.handleClick(Y, null, $);
                }),
                U(k(j), "handlePageChange", function ($) {
                  j.state.selected !== $ &&
                    (j.setState({ selected: $ }), j.callCallback($));
                }),
                U(k(j), "getEventListener", function ($) {
                  return U({}, j.props.eventListener, $);
                }),
                U(k(j), "handleClick", function ($, Y, W) {
                  var se =
                      arguments.length > 3 && arguments[3] !== void 0
                        ? arguments[3]
                        : {},
                    ge = se.isPrevious,
                    Fe = ge !== void 0 && ge,
                    Ke = se.isNext,
                    un = Ke !== void 0 && Ke,
                    At = se.isBreak,
                    Ve = At !== void 0 && At,
                    Mt = se.isActive,
                    Ct = Mt !== void 0 && Mt;
                  $.preventDefault ? $.preventDefault() : ($.returnValue = !1);
                  var Ft = j.state.selected,
                    ve = j.props.onClick,
                    et = W;
                  if (ve) {
                    var He = ve({
                      index: Y,
                      selected: Ft,
                      nextSelectedPage: W,
                      event: $,
                      isPrevious: Fe,
                      isNext: un,
                      isBreak: Ve,
                      isActive: Ct,
                    });
                    if (He === !1) return;
                    Number.isInteger(He) && (et = He);
                  }
                  et !== void 0 && j.handlePageChange(et);
                }),
                U(k(j), "handleBreakClick", function ($, Y) {
                  var W = j.state.selected;
                  j.handleClick(
                    Y,
                    $,
                    W < $ ? j.getForwardJump() : j.getBackwardJump(),
                    { isBreak: !0 }
                  );
                }),
                U(k(j), "callCallback", function ($) {
                  j.props.onPageChange !== void 0 &&
                    typeof j.props.onPageChange == "function" &&
                    j.props.onPageChange({ selected: $ });
                }),
                U(k(j), "callActiveCallback", function ($) {
                  j.props.onPageActive !== void 0 &&
                    typeof j.props.onPageActive == "function" &&
                    j.props.onPageActive({ selected: $ });
                }),
                U(k(j), "getElementPageRel", function ($) {
                  var Y = j.state.selected,
                    W = j.props,
                    se = W.nextPageRel,
                    ge = W.prevPageRel,
                    Fe = W.selectedPageRel;
                  return Y - 1 === $
                    ? ge
                    : Y === $
                    ? Fe
                    : Y + 1 === $
                    ? se
                    : void 0;
                }),
                U(k(j), "pagination", function () {
                  var $ = [],
                    Y = j.props,
                    W = Y.pageRangeDisplayed,
                    se = Y.pageCount,
                    ge = Y.marginPagesDisplayed,
                    Fe = Y.breakLabel,
                    Ke = Y.breakClassName,
                    un = Y.breakLinkClassName,
                    At = Y.breakAriaLabels,
                    Ve = j.state.selected;
                  if (se <= W)
                    for (var Mt = 0; Mt < se; Mt++)
                      $.push(j.getPageElement(Mt));
                  else {
                    var Ct = W / 2,
                      Ft = W - Ct;
                    Ve > se - W / 2
                      ? (Ct = W - (Ft = se - Ve))
                      : Ve < W / 2 && (Ft = W - (Ct = Ve));
                    var ve,
                      et,
                      He = function (_t) {
                        return j.getPageElement(_t);
                      },
                      Ce = [];
                    for (ve = 0; ve < se; ve++) {
                      var Dt = ve + 1;
                      if (Dt <= ge)
                        Ce.push({ type: "page", index: ve, display: He(ve) });
                      else if (Dt > se - ge)
                        Ce.push({ type: "page", index: ve, display: He(ve) });
                      else if (
                        ve >= Ve - Ct &&
                        ve <= Ve + (Ve === 0 && W > 1 ? Ft - 1 : Ft)
                      )
                        Ce.push({ type: "page", index: ve, display: He(ve) });
                      else if (
                        Fe &&
                        Ce.length > 0 &&
                        Ce[Ce.length - 1].display !== et &&
                        (W > 0 || ge > 0)
                      ) {
                        var mt = ve < Ve ? At.backward : At.forward;
                        (et = s().createElement(E, {
                          key: ve,
                          breakAriaLabel: mt,
                          breakLabel: Fe,
                          breakClassName: Ke,
                          breakLinkClassName: un,
                          breakHandler: j.handleBreakClick.bind(null, ve),
                          getEventListener: j.getEventListener,
                        })),
                          Ce.push({ type: "break", index: ve, display: et });
                      }
                    }
                    Ce.forEach(function (_t, _) {
                      var z = _t;
                      _t.type === "break" &&
                        Ce[_ - 1] &&
                        Ce[_ - 1].type === "page" &&
                        Ce[_ + 1] &&
                        Ce[_ + 1].type === "page" &&
                        Ce[_ + 1].index - Ce[_ - 1].index <= 2 &&
                        (z = {
                          type: "page",
                          index: _t.index,
                          display: He(_t.index),
                        }),
                        $.push(z.display);
                    });
                  }
                  return $;
                }),
                N.initialPage !== void 0 &&
                  N.forcePage !== void 0 &&
                  console.warn(
                    "(react-paginate): Both initialPage ("
                      .concat(N.initialPage, ") and forcePage (")
                      .concat(
                        N.forcePage,
                        ") props are provided, which is discouraged."
                      ) +
                      ` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`
                  ),
                (G = N.initialPage
                  ? N.initialPage
                  : N.forcePage
                  ? N.forcePage
                  : 0),
                (j.state = { selected: G }),
                j
              );
            }
            return (
              (D = A),
              (H = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var N = this.props,
                      j = N.initialPage,
                      G = N.disableInitialCallback,
                      $ = N.extraAriaContext,
                      Y = N.pageCount,
                      W = N.forcePage;
                    j === void 0 || G || this.callCallback(j),
                      $ &&
                        console.warn(
                          "DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."
                        ),
                      Number.isInteger(Y) ||
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            Y,
                            "). Did you forget a Math.ceil()?"
                          )
                        ),
                      j !== void 0 &&
                        j > Y - 1 &&
                        console.warn(
                          "(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(j, " > ")
                            .concat(Y - 1, ").")
                        ),
                      W !== void 0 &&
                        W > Y - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(W, " > ")
                            .concat(Y - 1, ").")
                        );
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (N) {
                    this.props.forcePage !== void 0 &&
                      this.props.forcePage !== N.forcePage &&
                      (this.props.forcePage > this.props.pageCount - 1 &&
                        console.warn(
                          "(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop ("
                            .concat(this.props.forcePage, " > ")
                            .concat(this.props.pageCount - 1, ").")
                        ),
                      this.setState({ selected: this.props.forcePage })),
                      Number.isInteger(N.pageCount) &&
                        !Number.isInteger(this.props.pageCount) &&
                        console.warn(
                          "(react-paginate): The pageCount prop value provided is not an integer (".concat(
                            this.props.pageCount,
                            "). Did you forget a Math.ceil()?"
                          )
                        );
                  },
                },
                {
                  key: "getForwardJump",
                  value: function () {
                    var N = this.state.selected,
                      j = this.props,
                      G = j.pageCount,
                      $ = N + j.pageRangeDisplayed;
                    return $ >= G ? G - 1 : $;
                  },
                },
                {
                  key: "getBackwardJump",
                  value: function () {
                    var N = this.state.selected - this.props.pageRangeDisplayed;
                    return N < 0 ? 0 : N;
                  },
                },
                {
                  key: "getElementHref",
                  value: function (N) {
                    var j = this.props,
                      G = j.hrefBuilder,
                      $ = j.pageCount,
                      Y = j.hrefAllControls;
                    if (G)
                      return Y || (N >= 0 && N < $)
                        ? G(N + 1, $, this.state.selected)
                        : void 0;
                  },
                },
                {
                  key: "ariaLabelBuilder",
                  value: function (N) {
                    var j = N === this.state.selected;
                    if (
                      this.props.ariaLabelBuilder &&
                      N >= 0 &&
                      N < this.props.pageCount
                    ) {
                      var G = this.props.ariaLabelBuilder(N + 1, j);
                      return (
                        this.props.extraAriaContext &&
                          !j &&
                          (G = G + " " + this.props.extraAriaContext),
                        G
                      );
                    }
                  },
                },
                {
                  key: "getPageElement",
                  value: function (N) {
                    var j = this.state.selected,
                      G = this.props,
                      $ = G.pageClassName,
                      Y = G.pageLinkClassName,
                      W = G.activeClassName,
                      se = G.activeLinkClassName,
                      ge = G.extraAriaContext,
                      Fe = G.pageLabelBuilder;
                    return s().createElement(x, {
                      key: N,
                      pageSelectedHandler: this.handlePageSelected.bind(
                        null,
                        N
                      ),
                      selected: j === N,
                      rel: this.getElementPageRel(N),
                      pageClassName: $,
                      pageLinkClassName: Y,
                      activeClassName: W,
                      activeLinkClassName: se,
                      extraAriaContext: ge,
                      href: this.getElementHref(N),
                      ariaLabel: this.ariaLabelBuilder(N),
                      page: N + 1,
                      pageLabelBuilder: Fe,
                      getEventListener: this.getEventListener,
                    });
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var N = this.props.renderOnZeroPageCount;
                    if (this.props.pageCount === 0 && N !== void 0)
                      return N && N(this.props);
                    var j = this.props,
                      G = j.disabledClassName,
                      $ = j.disabledLinkClassName,
                      Y = j.pageCount,
                      W = j.className,
                      se = j.containerClassName,
                      ge = j.previousLabel,
                      Fe = j.previousClassName,
                      Ke = j.previousLinkClassName,
                      un = j.previousAriaLabel,
                      At = j.prevRel,
                      Ve = j.nextLabel,
                      Mt = j.nextClassName,
                      Ct = j.nextLinkClassName,
                      Ft = j.nextAriaLabel,
                      ve = j.nextRel,
                      et = this.state.selected,
                      He = et === 0,
                      Ce = et === Y - 1,
                      Dt = "".concat(m(Fe)).concat(He ? " ".concat(m(G)) : ""),
                      mt = "".concat(m(Mt)).concat(Ce ? " ".concat(m(G)) : ""),
                      _t = "".concat(m(Ke)).concat(He ? " ".concat(m($)) : ""),
                      _ = "".concat(m(Ct)).concat(Ce ? " ".concat(m($)) : ""),
                      z = He ? "true" : "false",
                      q = Ce ? "true" : "false";
                    return s().createElement(
                      "ul",
                      {
                        className: W || se,
                        role: "navigation",
                        "aria-label": "Pagination",
                      },
                      s().createElement(
                        "li",
                        { className: Dt },
                        s().createElement(
                          "a",
                          w(
                            {
                              className: _t,
                              href: this.getElementHref(et - 1),
                              tabIndex: He ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handlePreviousPage,
                              "aria-disabled": z,
                              "aria-label": un,
                              rel: At,
                            },
                            this.getEventListener(this.handlePreviousPage)
                          ),
                          ge
                        )
                      ),
                      this.pagination(),
                      s().createElement(
                        "li",
                        { className: mt },
                        s().createElement(
                          "a",
                          w(
                            {
                              className: _,
                              href: this.getElementHref(et + 1),
                              tabIndex: Ce ? "-1" : "0",
                              role: "button",
                              onKeyPress: this.handleNextPage,
                              "aria-disabled": q,
                              "aria-label": Ft,
                              rel: ve,
                            },
                            this.getEventListener(this.handleNextPage)
                          ),
                          Ve
                        )
                      )
                    );
                  },
                },
              ]) && h(D.prototype, H),
              Object.defineProperty(D, "prototype", { writable: !1 }),
              A
            );
          })(l.Component);
          U(I, "propTypes", {
            pageCount: d().number.isRequired,
            pageRangeDisplayed: d().number,
            marginPagesDisplayed: d().number,
            previousLabel: d().node,
            previousAriaLabel: d().string,
            prevPageRel: d().string,
            prevRel: d().string,
            nextLabel: d().node,
            nextAriaLabel: d().string,
            nextPageRel: d().string,
            nextRel: d().string,
            breakLabel: d().oneOfType([d().string, d().node]),
            breakAriaLabels: d().shape({
              forward: d().string,
              backward: d().string,
            }),
            hrefBuilder: d().func,
            hrefAllControls: d().bool,
            onPageChange: d().func,
            onPageActive: d().func,
            onClick: d().func,
            initialPage: d().number,
            forcePage: d().number,
            disableInitialCallback: d().bool,
            containerClassName: d().string,
            className: d().string,
            pageClassName: d().string,
            pageLinkClassName: d().string,
            pageLabelBuilder: d().func,
            activeClassName: d().string,
            activeLinkClassName: d().string,
            previousClassName: d().string,
            nextClassName: d().string,
            previousLinkClassName: d().string,
            nextLinkClassName: d().string,
            disabledClassName: d().string,
            disabledLinkClassName: d().string,
            breakClassName: d().string,
            breakLinkClassName: d().string,
            extraAriaContext: d().string,
            ariaLabelBuilder: d().func,
            eventListener: d().string,
            renderOnZeroPageCount: d().func,
            selectedPageRel: d().string,
          }),
            U(I, "defaultProps", {
              pageRangeDisplayed: 2,
              marginPagesDisplayed: 3,
              activeClassName: "selected",
              previousLabel: "Previous",
              previousClassName: "previous",
              previousAriaLabel: "Previous page",
              prevPageRel: "prev",
              prevRel: "prev",
              nextLabel: "Next",
              nextClassName: "next",
              nextAriaLabel: "Next page",
              nextPageRel: "next",
              nextRel: "next",
              breakLabel: "...",
              breakAriaLabels: {
                forward: "Jump forward",
                backward: "Jump backward",
              },
              disabledClassName: "disabled",
              disableInitialCallback: !1,
              pageLabelBuilder: function (R) {
                return R;
              },
              eventListener: "onClick",
              renderOnZeroPageCount: void 0,
              selectedPageRel: "canonical",
              hrefAllControls: !1,
            });
          const oe = I;
        })(),
        a
      );
    })()
  );
})(_v);
var u_ = _v.exports;
const ca = Ur(u_);
function da(e = "") {
  const [t, n] = S.useState(e);
  return {
    searchText: t,
    handleSearch: (i) => {
      n(i);
    },
  };
}
const za = 8,
  c_ = () => {
    const { data: e } = sn("root"),
      { products: t, categories: n, subCategories: r } = e,
      i = t,
      o = r,
      a = n,
      l = {},
      s = {},
      c = {},
      d = {};
    a.forEach((h) => {
      l[h._id] = h.name;
    }),
      a.forEach((h) => {
        c[h._id] = h.slug;
      }),
      o.forEach((h) => {
        s[h._id] = h.name;
      }),
      o.forEach((h) => {
        d[h._id] = h.slug;
      });
    const [f, p] = S.useState(0),
      x = ({ selected: h }) => {
        p(h);
      },
      { searchText: y, handleSearch: v } = da(""),
      E = f * za,
      m = i.slice(E, E + za),
      g = m.filter((h) => h.name.toLowerCase().includes(y.toLowerCase())),
      w = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return u.jsxs("div", {
      className: "all-products-section",
      children: [
        u.jsxs("div", {
          className: "all-product-wrapper",
          children: [
            u.jsx(ua, { onSearch: v }),
            u.jsx("div", {
              className: "product-wrapper",
              children:
                y === ""
                  ? m.map((h) => {
                      const C = l[h.category] || "unknown Category",
                        P = s[h.subCategory] || "unknown Category";
                      return u.jsxs(
                        J,
                        {
                          to:
                            P === "unknown Category"
                              ? `/allProducts/${c[h.category]}/all/${h.slug}`
                              : `/allProducts/${c[h.category]}/${
                                  d[h.subCategory]
                                }/${h.slug}`,
                          className: "all-products-container",
                          children: [
                            u.jsx("div", {
                              className: "product-image",
                              children: u.jsx("img", {
                                src: `/public/uploads/products/${h.productImage}`,
                                alt: "microscope",
                                crossOrigin: "anonymous",
                              }),
                            }),
                            u.jsxs("div", {
                              className: "product-detail",
                              children: [
                                u.jsx("p", {
                                  className: "category",
                                  children: C,
                                }),
                                u.jsx("p", {
                                  className: "sub-category",
                                  children: h.name,
                                }),
                              ],
                            }),
                          ],
                        },
                        h._id
                      );
                    })
                  : g.length > 0
                  ? g.map((h) => {
                      const C = l[h.category] || "unknown Category",
                        P = s[h.subCategory] || "unknown Category",
                        k = `/public/uploads/products/${h.productImage}`;
                      return u.jsxs(
                        J,
                        {
                          to:
                            P === "unknown Category"
                              ? `/allProducts/${c[h.category]}/all/${h.slug}`
                              : `/allProducts/${c[h.category]}/${
                                  d[h.subCategory]
                                }/${h.slug}`,
                          className: "all-products-container",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: [
                            u.jsx("div", {
                              className: "product-image",
                              children: u.jsx("img", {
                                src: k,
                                alt: h.name,
                                crossOrigin: "anonymous",
                              }),
                            }),
                            u.jsxs("div", {
                              className: "product-detail",
                              children: [
                                u.jsx("p", {
                                  className: "category",
                                  children: C,
                                }),
                                u.jsx("p", {
                                  className: "sub-category",
                                  children: h.name,
                                }),
                              ],
                            }),
                          ],
                        },
                        h._id
                      );
                    })
                  : u.jsxs("p", {
                      className: "nothing-found",
                      children: [
                        "No product with that name ",
                        u.jsx("br", {}),
                        " try ",
                        u.jsx("a", {
                          href: "/contact-us",
                          children: "contacting",
                        }),
                        " us for more info",
                      ],
                    }),
            }),
          ],
        }),
        i.length > za &&
          u.jsx("div", {
            className: "paginate",
            children: u.jsx(ca, {
              previousLabel: u.jsx(aa, {}),
              nextLabel: u.jsx(oa, {}),
              pageCount: Math.ceil(i.length / za),
              onPageChange: x,
              containerClassName: "pagination",
              activeClassName: "active",
              onClick: w,
            }),
          }),
      ],
    });
  };
const d_ = "/assets/equipments-d2f1572b.jpg",
  f_ = "/assets/Furniture-0a13cacb.png",
  p_ = "/assets/Hospital-a365ca17.png",
  h_ = "/assets/Detergents-8a70c274.png",
  m_ = "/assets/LabEquipment-06533276.png",
  g_ = "/assets/LinenProtective-30efa347.png",
  v_ = "/assets/LabConsumables-dc23d993.png",
  y_ = "/assets/Rapiddiagnostic-84777da3.png",
  x_ = "/assets/Reagents-26abeb6b.png",
  w_ = "/assets/SensitivityDrugsMicrobiology-7a3ced78.png",
  E_ = "/assets/Surgicaltems-eac02f29.png",
  S_ = "/assets/WasteManagement-1cb1b13d.png",
  C_ = {
    funiture: f_,
    "equipment & instruments": p_,
    "linen & personal protective items": g_,
    "waste management ": S_,
    "detergents, disinfectant, & spirits": h_,
    "surgical products": E_,
    "rapid diagnostic tests & serolgy": y_,
    reagents: x_,
    microbiology: w_,
    "lab consumables": v_,
    "lab equipments and machines": m_,
  },
  __ = () => {
    const { data: e } = sn("root"),
      { subCategories: t, categories: n, products: r } = e,
      i = t,
      o = n,
      a = r,
      { category: l } = qr(),
      s = o.find((d) => d.slug === l);
    if (!s) return;
    const c = i.filter((d) => d.category === s._id);
    return u.jsx("div", {
      className: "product-section",
      children:
        c.length > 0
          ? c.map((d) => {
              const f = a.filter((x) => x.subCategory === d._id),
                p = C_[d.name] || d_;
              return u.jsx(
                J,
                {
                  to: `/allProducts/${s.slug}/${d.slug}`,
                  children: u.jsxs("div", {
                    className: "products-container",
                    children: [
                      u.jsx("div", {
                        className: "product-image",
                        children: u.jsx("img", { src: p, alt: "microscope" }),
                      }),
                      u.jsxs("div", {
                        className: "product-details",
                        children: [
                          u.jsx("p", {
                            className: "category",
                            children: s.name,
                          }),
                          u.jsxs("p", {
                            className: "sub-category",
                            children: [
                              d.name,
                              u.jsx("br", {}),
                              " ",
                              u.jsxs("span", {
                                children: ["(", f.length, ")"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                d._id
              );
            })
          : u.jsxs("div", {
              className: "product-container",
              children: [
                u.jsx("h3", {
                  className: "fall-back-header",
                  children: "Sorry for the inconvenience😥 ",
                }),
                u.jsx("p", {
                  className: "fall-back",
                  children: "No Products in this subcategory",
                }),
              ],
            }),
    });
  };
const Ba = 8,
  T_ = () => {
    const { data: e } = sn("root"),
      { products: t, subCategories: n, categories: r } = e,
      i = n,
      o = r,
      a = t,
      { subCategory: l, category: s } = qr(),
      c = i.find((C) => C.slug === l),
      d = o.find((C) => C.slug === s),
      [f, p] = S.useState(0),
      { searchText: x, handleSearch: y } = da(""),
      v = ({ selected: C }) => {
        p(C);
      },
      E = f * Ba,
      m = a.filter((C) => C.subCategory === c._id),
      g = m.slice(E, E + Ba),
      w = g.filter((C) => C.name.toLowerCase().includes(x.toLowerCase())),
      h = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return u.jsxs("div", {
      className: "all-product-section",
      children: [
        u.jsx(ua, { onSearch: y }),
        u.jsx("div", {
          className: "product-wrapper",
          children:
            x === ""
              ? g.map((C) =>
                  u.jsx(
                    sm,
                    { product: C, selectedCategory: d, selectedSubCategory: c },
                    C._id
                  )
                )
              : w.length > 0
              ? w.map((C) =>
                  u.jsx(
                    sm,
                    { product: C, selectedCategory: d, selectedSubCategory: c },
                    C._id
                  )
                )
              : u.jsxs("p", {
                  className: "nothing-found",
                  children: [
                    "No product with that name ",
                    u.jsx("br", {}),
                    " try ",
                    u.jsx("a", { href: "/contact-us", children: "contacting" }),
                    " us for more info",
                  ],
                }),
        }),
        m.length > Ba &&
          u.jsx("div", {
            className: "paginate",
            children: u.jsx(ca, {
              previousLabel: u.jsx(aa, {}),
              nextLabel: u.jsx(oa, {}),
              pageCount: Math.ceil(m.length / Ba),
              onPageChange: v,
              containerClassName: "pagination",
              activeClassName: "active",
              onClick: h,
            }),
          }),
      ],
    });
  };
function sm({ product: e, selectedCategory: t, selectedSubCategory: n }) {
  return u.jsx(J, {
    to: `/allProducts/${t.slug}/${n.slug}/${e.slug}`,
    children: u.jsxs("div", {
      className: "products-container",
      children: [
        u.jsx("div", {
          className: "product-image",
          children: u.jsx("img", {
            src: `/public/uploads/products/${e.productImage}`,
            alt: "microscope",
            crossOrigin: "anonymous",
          }),
        }),
        u.jsxs("div", {
          className: "product-details",
          children: [
            u.jsx("p", { className: "category", children: t.name }),
            u.jsx("p", { className: "sub-category", children: e.name }),
          ],
        }),
      ],
    }),
  });
}
const Ua = 8,
  j_ = () => {
    const { data: e } = sn("root"),
      { subCategories: t, categories: n, products: r } = e,
      i = n,
      o = t,
      a = r,
      { category: l } = qr(),
      [s, c] = S.useState(0),
      { searchText: d, handleSearch: f } = da(""),
      p = {};
    o.forEach((h) => {
      p[h._id] = h.name;
    });
    const x = ({ selected: h }) => {
        c(h);
      },
      y = i.find((h) => h.slug === l),
      v = a.filter((h) => h.category === y._id),
      E = s * Ua,
      m = v.slice(E, E + Ua),
      g = m.filter((h) => h.name.toLowerCase().includes(d.toLowerCase())),
      w = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return u.jsxs("div", {
      className: "all-product-section",
      children: [
        u.jsx(ua, { onSearch: f }),
        u.jsx("div", {
          className: "product-wrapper",
          children:
            g.length === 0
              ? u.jsx("p", {
                  className: "nothing-found",
                  children: "No product found with that name",
                })
              : g.map((h) =>
                  u.jsx(
                    k_,
                    {
                      product: h,
                      category: l,
                      selectedCategory: y,
                      imageUrl: h.productImage,
                    },
                    h._id
                  )
                ),
        }),
        m.length > Ua &&
          u.jsx("div", {
            className: "paginate",
            children: u.jsx(ca, {
              previousLabel: u.jsx(aa, {}),
              nextLabel: u.jsx(oa, {}),
              pageCount: Math.ceil(a.length / Ua),
              onPageChange: x,
              containerClassName: "pagination",
              activeClassName: "active",
              onClick: w,
            }),
          }),
      ],
    });
  };
function k_({ product: e, category: t, selectedCategory: n, imageUrl: r }) {
  return u.jsx(
    J,
    {
      to: `/allProducts/${t}/all/${e.slug}`,
      children: u.jsxs("div", {
        className: "products-container",
        children: [
          u.jsx("div", {
            className: "product-image",
            children: u.jsx("img", {
              src: r,
              alt: "microscope",
              crossOrigin: "anonymous",
            }),
          }),
          u.jsxs("div", {
            className: "product-detail",
            children: [
              u.jsx("p", { className: "category", children: n.name }),
              u.jsx("p", { className: "sub-category", children: e.name }),
            ],
          }),
        ],
      }),
    },
    e._id
  );
}
const Va = 8,
  b_ = () => {
    const { data: e } = sn("root"),
      { products: t, subCategories: n, categories: r } = e,
      i = {},
      o = {};
    n.map((E) => {
      o[E._id] = E.name;
    }),
      r.forEach((E) => {
        i[E._id] = E.name;
      });
    const [a, l] = S.useState(0),
      s = a * Va,
      c = t.filter((E) => E.tags.includes("horeca")),
      { searchText: d, handleSearch: f } = da(""),
      p = ({ selected: E }) => {
        l(E);
      },
      x = c.slice(s, s + Va),
      y = x.filter((E) => E.name.toLowerCase().includes(d.toLowerCase())),
      v = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return u.jsxs("div", {
      className: "product-section",
      children: [
        u.jsx(ua, { onSearch: f }),
        y.length === 0
          ? c.length === 0
            ? u.jsx("p", {
                className: "nothing-found",
                children: "No product found in this category",
              })
            : u.jsxs("p", {
                className: "nothing-found",
                children: [
                  "No product with that name ",
                  u.jsx("br", {}),
                  " try ",
                  u.jsx("a", { href: "/contact-us", children: "contacting" }),
                  " us for more info",
                ],
              })
          : x.map((E) => {
              const m = i[E.category] || "unKnown Category",
                g = o[E.subCategory] || "unKnown Category";
              return u.jsx(
                J,
                {
                  to:
                    g === "unKnown Category"
                      ? `/allProducts/${m}/all/${E.slug}`
                      : `/allProducts/${m}/${g}/${E.slug}`,
                  children: u.jsxs("div", {
                    className: "products-container",
                    children: [
                      u.jsx("div", {
                        className: "product-image",
                        children: u.jsx("img", {
                          src: E.productImage,
                          alt: "microscope",
                        }),
                      }),
                      u.jsxs("div", {
                        className: "product-details",
                        children: [
                          u.jsx("p", { className: "category", children: m }),
                          u.jsx("p", {
                            className: "sub-category",
                            children: E.name,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                E._id
              );
            }),
        c.length > Va &&
          u.jsx("div", {
            className: "paginate",
            children: u.jsx(ca, {
              previousLabel: u.jsx(aa, {}),
              nextLabel: u.jsx(oa, {}),
              pageCount: Math.ceil(c.length / Va),
              onPageChange: p,
              containerClassName: "pagination",
              activeClassName: "active",
              onClick: v,
            }),
          }),
      ],
    });
  },
  P_ = () => {
    const { selectProduct: e } = S.useContext(Hi),
      { data: t } = sn("root"),
      { products: n, categories: r } = t,
      i = r,
      { category: o, name: a } = qr(),
      l = i.find((y) => y.slug === o),
      s = n.find((y) => y.slug === a),
      c = n.filter((y) => y.category === l._id),
      d = c;
    if (!c)
      return u.jsx("p", { children: "No product found with that adress" });
    const { name: f, description: p, productImage: x } = s;
    return u.jsxs(u.Fragment, {
      children: [
        u.jsx("div", {
          className: "product-details",
          children: u.jsxs("div", {
            className: "product",
            children: [
              u.jsx("div", {
                className: "product-image",
                children: u.jsx("img", { src: x, alt: "product" }),
              }),
              u.jsxs("div", {
                className: "product-description",
                children: [
                  u.jsx("h3", { className: "product-name", children: f }),
                  u.jsxs("div", {
                    className: "des",
                    children: [
                      u.jsx("label", {
                        children: u.jsxs("p", {
                          children: [
                            "Category: ",
                            u.jsx("span", {
                              className: "category-name",
                              children: o,
                            }),
                          ],
                        }),
                      }),
                      u.jsxs("div", {
                        className: "specs",
                        children: [
                          u.jsx("span", {
                            className: "des-header",
                            children: "Description",
                          }),
                          u.jsx("p", {
                            className: "description",
                            children: zn(p),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx(ds, {
                    label: "Enquire about this product",
                    className: "enquire-btn",
                    onClick: () => e(s),
                  }),
                  u.jsxs("div", {
                    className: "share-socials",
                    children: [
                      u.jsx("p", { children: "Follow:" }),
                      u.jsxs("div", {
                        className: "socials",
                        children: [
                          u.jsx("a", {
                            href: "https://www.facebook.com/VitalMediquip/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: u.jsx(Kg, { className: "icons" }),
                          }),
                          u.jsx("a", {
                            href: "https://www.instagram.com/vital_mediquip/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Yd, { className: "icons" }),
                          }),
                          u.jsx("a", {
                            href: "https://twitter.com/Vital_Mediquip",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Xd, { className: "icons" }),
                          }),
                          u.jsx("a", {
                            href: "https://www.linkedin.com/company/97941302/admin/feed/posts/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: u.jsx(Qg, { className: "icons" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        d.length > 1 && u.jsx(X1, { products: d, categories: i, id: s._id }),
      ],
    });
  },
  Ha = 8,
  N_ = () => {
    const { data: e } = sn("root"),
      { products: t, subCategories: n, categories: r } = e,
      i = n,
      o = r,
      a = t,
      l = {},
      s = {};
    i.map((w) => {
      s[w._id] = w.slug;
    }),
      o.forEach((w) => {
        l[w._id] = w.slug;
      });
    const [c, d] = S.useState(0),
      f = c * Ha,
      { searchText: p, handleSearch: x } = da(""),
      y = a.filter((w) => w.tags.includes("school")),
      v = ({ selected: w }) => {
        d(w);
      },
      m = y
        .filter((w) => w.name.toLowerCase().includes(p.toLowerCase()))
        .slice(f, f + Ha),
      g = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return u.jsxs("div", {
      className: "product-section",
      children: [
        u.jsx(ua, { onSearch: x }),
        m.length === 0
          ? y.length === 0
            ? u.jsx("p", {
                className: "nothing-found",
                children: "No product found in this category",
              })
            : u.jsxs("p", {
                className: "nothing-found",
                children: [
                  "No product with that name ",
                  u.jsx("br", {}),
                  " try ",
                  u.jsx("a", { href: "/contact-us", children: "contacting" }),
                  " us for more info",
                ],
              })
          : m.map((w) => {
              const h = l[w.category] || "unKnown Category",
                C = s[w.subCategory] || "unKnown Category";
              return u.jsx(
                J,
                {
                  to:
                    C === "unKnown Category"
                      ? `/allProducts/${h}/all/${w.slug}`
                      : `/allProducts/${h}/${C}/${w.slug}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: u.jsxs("div", {
                    className: "products-container",
                    children: [
                      u.jsx("div", {
                        className: "product-image",
                        children: u.jsx("img", {
                          src: `/public/uploads/products/${w.productImage}`,
                          alt: "microscope",
                          crossOrigin: "anonymous",
                        }),
                      }),
                      u.jsxs("div", {
                        className: "product-details",
                        children: [
                          u.jsx("p", { className: "category", children: h }),
                          u.jsx("p", {
                            className: "sub-category",
                            children: w.name,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                w._id
              );
            }),
        y.length > Ha &&
          u.jsx("div", {
            className: "paginate",
            children: u.jsx(ca, {
              previousLabel: u.jsx(aa, {}),
              nextLabel: u.jsx(oa, {}),
              pageCount: Math.ceil(y.length / Ha),
              onPageChange: v,
              containerClassName: "pagination",
              activeClassName: "active",
              onClick: g,
            }),
          }),
      ],
    });
  };
const O_ = () =>
    u.jsx(u.Fragment, {
      children: u.jsxs("div", {
        className: "services-container",
        children: [
          u.jsx("h1", {
            children:
              "Get in touch with us if you need any machine serviced or repaired. ",
          }),
          u.jsxs("table", {
            children: [
              u.jsxs("tr", {
                children: [
                  u.jsx("th", { children: "Laboratory" }),
                  u.jsx("th", { children: "Theater" }),
                  u.jsx("th", { children: "Dental" }),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Hematology analyzer" }),
                  u.jsx("td", { children: "Anesthesia machine" }),
                  u.jsx("td", { children: "Dental chair" }),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Biochemistry" }),
                  u.jsx("td", { children: "Ventilator" }),
                  u.jsx("td", { children: "Compressor" }),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Immunoassay" }),
                  u.jsx("td", { children: "Theatre light" }),
                  u.jsx("td", { children: "Dental autoclave" }),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Electrolyte" }),
                  u.jsx("td", { children: "Patient monitor" }),
                  u.jsx("td", {}),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Urine analyzer" }),
                  u.jsx("td", { children: "Incubator table" }),
                  u.jsx("td", {}),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Lab incubator" }),
                  u.jsx("td", { children: "Diathermy" }),
                  u.jsx("td", {}),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Centrifuge" }),
                  u.jsx("td", {}),
                  u.jsx("td", {}),
                ],
              }),
              u.jsxs("tr", {
                children: [
                  u.jsx("td", { children: "Microscope" }),
                  u.jsx("td", {}),
                  u.jsx("td", {}),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  R_ = S.lazy(
    () =>
      new Promise((e) => {
        setTimeout(
          () =>
            e(
              Fn(
                () => import("./HomePage-f6c0fa97.js"),
                [
                  "assets/HomePage-f6c0fa97.js",
                  "assets/testimonials-296f97f8.js",
                  "assets/index.esm-9ce2fec6.js",
                  "assets/Partners-bdbf9166.js",
                  "assets/Partners-71d0d88b.css",
                  "assets/HomePage-627cd45d.css",
                ]
              )
            ),
          1e3
        );
      })
  ),
  L_ = S.lazy(
    () =>
      new Promise((e) => {
        setTimeout(
          () =>
            e(
              Fn(
                () => import("./ContactPage-5f0072c6.js"),
                [
                  "assets/ContactPage-5f0072c6.js",
                  "assets/index.esm-9ce2fec6.js",
                  "assets/ContactPage-c88d2d82.css",
                ]
              )
            ),
          1e3
        );
      })
  ),
  A_ = S.lazy(
    () =>
      new Promise((e) => {
        setTimeout(
          () =>
            e(
              Fn(
                () => import("./AboutPage-55783498.js"),
                [
                  "assets/AboutPage-55783498.js",
                  "assets/index.esm-9ce2fec6.js",
                  "assets/Partners-bdbf9166.js",
                  "assets/Partners-71d0d88b.css",
                  "assets/AboutPage-46362ca9.css",
                ]
              )
            ),
          1e3
        );
      })
  ),
  M_ = S.lazy(
    () =>
      new Promise((e) => {
        setTimeout(
          () =>
            e(
              Fn(
                () => import("./Faq-ca58f9ef.js"),
                [
                  "assets/Faq-ca58f9ef.js",
                  "assets/testimonials-296f97f8.js",
                  "assets/Faq-d4b38129.css",
                ]
              )
            ),
          1e3
        );
      })
  ),
  F_ = S.lazy(() =>
    Fn(
      () => import("./AdminPage-934d991a.js"),
      ["assets/AdminPage-934d991a.js", "assets/AdminPage-30fc5775.css"]
    )
  ),
  D_ = S.lazy(() => Fn(() => Promise.resolve().then(() => O8), void 0)),
  I_ = S.lazy(() => Fn(() => Promise.resolve().then(() => M8), void 0)),
  $_ = S.lazy(() =>
    Fn(
      () => import("./EditProducts-556980e2.js"),
      ["assets/EditProducts-556980e2.js", "assets/EditProducts-ec8cfda7.css"]
    )
  ),
  z_ = S.lazy(() => Fn(() => import("./EditProductPage-6b8ac194.js"), [])),
  B_ = Sw([
    {
      path: "/admin",
      element: u.jsx(F_, {}),
      id: "product-loader",
      loader: ri,
      children: [
        { index: !0, element: u.jsx(D_, {}), action: Q1 },
        { path: "/admin/add-categories", element: u.jsx(R8, {}), action: L8 },
        {
          path: "/admin/add-sub-categories",
          element: u.jsx(I_, {}),
          action: Y1,
        },
        { path: "/admin/edit", element: u.jsx($_, {}) },
        { path: "/admin/edit/:id", element: u.jsx(z_, {}), action: P8 },
      ],
    },
    {
      path: "/",
      element: u.jsx(c8, {}),
      children: [
        { path: "/", element: u.jsx(R_, {}), loader: ri },
        {
          path: "/allProducts",
          element: u.jsx(v8, {}),
          id: "root",
          loader: ri,
          children: [
            { index: !0, element: u.jsx(c_, {}), loader: ri },
            {
              path: "/allProducts/services-&-maitenance",
              element: u.jsx(O_, {}),
            },
            { path: "/allProducts/:category", element: u.jsx(__, {}) },
            { path: "/allProducts/:category/all", element: u.jsx(j_, {}) },
            {
              path: "/allProducts/:category/all/:name",
              element: u.jsx(P_, {}),
            },
            {
              path: "/allProducts/:category/:subCategory",
              element: u.jsx(T_, {}),
            },
            { path: "/allProducts/Hospitality", element: u.jsx(b_, {}) },
            {
              path: "/allProducts/schools&universities",
              element: u.jsx(N_, {}),
              loader: ri,
            },
            {
              path: "/allProducts/:category/:subCategory/:name",
              element: u.jsx(l_, {}),
              loader: ri,
            },
          ],
        },
        { path: "/contact-us", element: u.jsx(L_, {}) },
        { path: "/about", element: u.jsx(A_, {}) },
        { path: "/Faqs", element: u.jsx(M_, {}) },
      ],
    },
  ]);
function U_() {
  return u.jsx(S.Suspense, {
    fallback: u.jsx(Dg, {
      className: "loader",
      color: "#1d9b47",
      size: 800,
      "aria-label": "Loading Spinner",
      "data-testid": "loader",
    }),
    children: u.jsx(lw, { router: B_ }),
  });
}
Du.createRoot(document.getElementById("root")).render(
  u.jsx(de.StrictMode, { children: u.jsx(U_, {}) })
);
export {
  eT as A,
  oa as B,
  J_ as F,
  ae as G,
  zn as H,
  s3 as I,
  xi as L,
  J as N,
  Ag as O,
  fe as Q,
  de as R,
  oT as S,
  Q_ as a,
  Z_ as b,
  rT as c,
  K_ as d,
  Jw as e,
  H_ as f,
  Y_ as g,
  Wg as h,
  e3 as i,
  u as j,
  X_ as k,
  U1 as l,
  cr as m,
  q_ as n,
  G_ as o,
  iT as p,
  W_ as q,
  nT as r,
  tT as s,
  S as t,
  V_ as u,
  sn as v,
  d3 as w,
};
