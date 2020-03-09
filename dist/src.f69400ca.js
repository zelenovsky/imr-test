// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = E;
exports.hydrate = H;
exports.h = exports.createElement = v;
exports.Fragment = d;
exports.createRef = p;
exports.Component = y;
exports.cloneElement = I;
exports.createContext = L;
exports.toChildArray = b;
exports._unmount = j;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    i,
    t,
    o,
    r,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(n, l, u) {
  var i,
      t = arguments,
      o = {};

  for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

  if (arguments.length > 3) for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
  if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps) for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
  return h(n, o, l && l.key, l && l.ref);
}

function h(l, u, i, t) {
  var o = {
    type: l,
    props: u,
    key: i,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(o), o;
}

function p() {
  return {};
}

function d(n) {
  return n.children;
}

function y(n, l) {
  this.props = n, this.context = l;
}

function m(n, l) {
  if (null == l) return n.__ ? m(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? m(n) : null;
}

function w(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return w(n);
  }
}

function g(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(k);
}

function k() {
  var n, l, i, t, o, r, f;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (i = void 0, t = void 0, r = (o = (l = n).__v).__e, (f = l.__P) && (i = [], t = z(f, o, s({}, o), l.__n, void 0 !== f.ownerSVGElement, null, i, null == r ? m(o) : r), A(i, o), t != r && w(o)));
}

function _(n, l, u, i, t, o, r, c, s) {
  var v,
      h,
      p,
      d,
      y,
      w,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == f && (c = null != o ? o[0] : _ ? m(u, 0) : null), v = 0, l.__k = b(l.__k, function (u) {
    if (null != u) {
      if (u.__ = l, u.__b = l.__b + 1, null === (p = k[v]) || p && u.key == p.key && u.type === p.type) k[v] = void 0;else for (h = 0; h < _; h++) {
        if ((p = k[h]) && u.key == p.key && u.type === p.type) {
          k[h] = void 0;
          break;
        }

        p = null;
      }

      if (d = z(n, u, p = p || f, i, t, o, r, c, s), (h = u.ref) && p.ref != h && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(h, u.__c || d, u)), null != d) {
        var e;
        if (null == w && (w = d), void 0 !== u.__d) e = u.__d, u.__d = void 0;else if (o == p || d != c || null == d.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(d), e = null;else {
            for (y = c, h = 0; (y = y.nextSibling) && h < _; h += 2) if (y == d) break n;

            n.insertBefore(d, c), e = c;
          }

          "option" == l.type && (n.value = "");
        }
        c = void 0 !== e ? e : d.nextSibling, "function" == typeof l.type && (l.__d = c);
      } else c && p.__e == c && c.parentNode != n && (c = m(p));
    }

    return v++, u;
  }), l.__e = w, null != o && "function" != typeof l.type) for (v = o.length; v--;) null != o[v] && a(o[v]);

  for (v = _; v--;) null != k[v] && j(k[v], k[v]);

  if (g) for (v = 0; v < g.length; v++) $(g[v], g[++v], g[++v]);
}

function b(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) b(n[i], l, u);else u.push(l ? l("string" == typeof n || "number" == typeof n ? h(null, n, null, null) : null != n.__e || null != n.__c ? h(n.type, n.props, n.key, null) : n) : n);
  return u;
}

function x(n, l, u, i, t) {
  var o;

  for (o in u) o in l || C(n, o, null, u[o], i);

  for (o in l) t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || C(n, o, l[o], u[o], i);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function C(n, l, u, i, t) {
  var o, r, f, e, c;
  if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l) ;else if ("style" === l) {
    if (o = n.style, "string" == typeof u) o.cssText = u;else {
      if ("string" == typeof i && (o.cssText = "", i = null), i) for (r in i) u && r in u || P(o, r, "");
      if (u) for (f in u) i && u[f] === i[f] || P(o, f, u[f]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, N, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, N, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function N(l) {
  this.l[l.type](n.event ? n.event(l) : l);
}

function z(l, u, i, t, o, r, f, e, c) {
  var a,
      v,
      h,
      p,
      m,
      w,
      g,
      k,
      b,
      x,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  (a = n.__b) && a(u);

  try {
    n: if ("function" == typeof P) {
      if (k = u.props, b = (a = P.contextType) && t[a.__c], x = a ? b ? b.props.value : a.__ : t, i.__c ? g = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(k, x) : (u.__c = v = new y(k, x), v.constructor = P, v.render = D), b && b.sub(v), v.props = k, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = s({}, v.__s)), s(v.__s, P.getDerivedStateFromProps(k, v.__s))), p = v.props, m = v.state, h) null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && k !== p && null != v.componentWillReceiveProps && v.componentWillReceiveProps(k, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(k, v.__s, x)) {
          for (v.props = k, v.state = v.__s, v.__d = !1, v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__ = u);

          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(k, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () {
          v.componentDidUpdate(p, m, w);
        });
      }
      v.context = x, v.props = k, v.state = v.__s, (a = n.__r) && a(u), v.__d = !1, v.__v = u, v.__P = l, a = v.render(v.props, v.state, v.context), u.__k = null != a && a.type == d && null == a.key ? a.props.children : Array.isArray(a) ? a : [a], null != v.getChildContext && (t = s(s({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(p, m)), _(l, u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), g && (v.__E = v.__ = null), v.__e = !1;
    } else u.__e = T(i.__e, u, i, t, o, r, f, c);

    (a = n.diffed) && a(u);
  } catch (l) {
    n.__e(l, u, i);
  }

  return u.__e;
}

function A(l, u) {
  n.__c && n.__c(u, l), l.some(function (u) {
    try {
      l = u.__h, u.__h = [], l.some(function (n) {
        n.call(u);
      });
    } catch (l) {
      n.__e(l, u.__v);
    }
  });
}

function T(n, l, u, i, t, o, r, c) {
  var s,
      a,
      v,
      h,
      p,
      d = u.props,
      y = l.props;
  if (t = "svg" === l.type || t, null != o) for (s = 0; s < o.length; s++) if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
    n = a, o[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(y);
    n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, y.is && {
      is: y.is
    }), o = null;
  }

  if (null === l.type) d !== y && n.data != y && (n.data = y);else if (l !== u) {
    if (null != o && (o = e.slice.call(n.childNodes)), v = (d = u.props || f).dangerouslySetInnerHTML, h = y.dangerouslySetInnerHTML, !c) {
      if (d === f) for (d = {}, p = 0; p < n.attributes.length; p++) d[n.attributes[p].name] = n.attributes[p].value;
      (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
    }

    x(n, y, d, t, c), l.__k = l.props.children, h || _(n, l, u, i, "foreignObject" !== l.type && t, o, r, f, c), c || ("value" in y && void 0 !== y.value && y.value !== n.value && (n.value = null == y.value ? "" : y.value), "checked" in y && void 0 !== y.checked && y.checked !== n.checked && (n.checked = y.checked));
  }
  return n;
}

function $(l, u, i) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, i);
  }
}

function j(l, u, i) {
  var t, o, r;

  if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || $(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    t.base = t.__P = null;
  }

  if (t = l.__k) for (r = 0; r < t.length; r++) t[r] && j(t[r], u, i);
  null != o && a(o);
}

function D(n, l, u) {
  return this.constructor(n, u);
}

function E(l, u, i) {
  var t, r, c;
  n.__ && n.__(l, u), r = (t = i === o) ? null : i && i.__k || u.__k, l = v(d, null, [l]), c = [], z(u, (t ? u : i || u).__k = l, r || f, f, void 0 !== u.ownerSVGElement, i && !t ? [i] : r ? null : e.slice.call(u.childNodes), c, i || f, t), A(c, l);
}

function H(n, l) {
  E(n, l, o);
}

function I(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), h(n.type, l, l.key || n.key, l.ref || n.ref);
}

function L(n) {
  var l = {},
      u = {
    __c: "__cC" + r++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var i,
          t = this;
      return this.getChildContext || (i = [], this.getChildContext = function () {
        return l[u.__c] = t, l;
      }, this.shouldComponentUpdate = function (l) {
        n.value !== l.value && i.some(function (n) {
          n.context = l.value, g(n);
        });
      }, this.sub = function (n) {
        i.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          i.splice(i.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {
  __e: function (n, l) {
    for (var u, i; l = l.__;) if ((u = l.__c) && !u.__) try {
      if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i) return g(u.__E = u);
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, y.prototype.setState = function (n, l) {
  var u;
  u = this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && s(u, n), null != n && this.__v && (l && this.__h.push(l), g(this));
}, y.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), g(this));
}, y.prototype.render = d, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = f, r = 0;
},{}],"data.json":[function(require,module,exports) {
module.exports = [{
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "4.4",
  "price": {
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://laska-family.ru/",
    "name": "Laska Family"
  }
}, {
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "4.8",
  "price": {
    "discount": {
      "value": "67 736 Р"
    },
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://dg-home.ru/",
    "name": "DG Home"
  }
}, {
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "4.8",
  "price": {
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://laska-family.ru/",
    "name": "Laska Family"
  }
}, {
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "3.1",
  "price": {
    "discount": {
      "value": "67 736 Р"
    },
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://dg-home.ru/",
    "name": "DG Home"
  }
}, {
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "4.8",
  "price": {
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://laska-family.ru/",
    "name": "Laska Family"
  }
}, {
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "4.8",
  "price": {
    "discount": {
      "value": "67 736 Р"
    },
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://dg-home.ru/",
    "name": "DG Home"
  }
}, {
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "4.8",
  "price": {
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://laska-family.ru/",
    "name": "Laska Family"
  }
}, {
  "image": {
    "url": "/images/sofa.jpg",
    "description": "Sofa"
  },
  "title": "Тумба прикроватная Rubus с двумя ящиками",
  "rating": "4.8",
  "price": {
    "discount": {
      "value": "67 736 Р"
    },
    "value": "56 720 Р"
  },
  "color": "Черный",
  "material": "Ткань",
  "sizes": "ш. 349 х в. 234 х г. 323",
  "mechanism": "Французская раскладушка",
  "seller": {
    "url": "https://dg-home.ru/",
    "name": "DG Home"
  }
}];
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/card-list/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/card/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/UI/rating/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./star.svg":[["star.048b30bb.svg","components/UI/rating/star.svg"],"components/UI/rating/star.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/UI/rating/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./style.css");

var Rating = function Rating(_ref) {
  var rating = _ref.rating;
  var starsNumber = Math.round(parseFloat(rating)).toString();
  return (0, _preact.h)("div", {
    className: "rating"
  }, (0, _preact.h)("div", {
    className: 'rating__stars rating__stars--' + starsNumber
  }), (0, _preact.h)("span", {
    className: "rating__number"
  }, rating));
};

var _default = Rating;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./style.css":"components/UI/rating/style.css"}],"components/UI/price/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/UI/price/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./style.css");

var Price = function Price(_ref) {
  var value = _ref.value,
      discount = _ref.discount;
  return discount ? (0, _preact.h)("div", {
    className: "price"
  }, (0, _preact.h)("div", {
    className: "price__value price__value--discount overflow-ellipsis"
  }, value), (0, _preact.h)("div", {
    className: "price__value price__value--old-value overflow-ellipsis"
  }, discount.value)) : (0, _preact.h)("div", {
    className: "price"
  }, (0, _preact.h)("div", {
    className: "price__value overflow-ellipsis"
  }, value));
};

var _default = Price;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./style.css":"components/UI/price/style.css"}],"components/card/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./style.css");

var _rating = _interopRequireDefault(require("../UI/rating"));

var _price = _interopRequireDefault(require("../UI/price"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  var image = props.image,
      title = props.title,
      rating = props.rating,
      price = props.price,
      color = props.color,
      material = props.material,
      sizes = props.sizes,
      mechanism = props.mechanism,
      seller = props.seller;
  return (0, _preact.h)("article", {
    className: "card"
  }, (0, _preact.h)("header", null, (0, _preact.h)("div", {
    className: "card__image",
    style: {
      backgroundImage: "url(".concat(image.url, ")")
    }
  }), (0, _preact.h)("h4", {
    className: "card__title"
  }, title)), (0, _preact.h)("div", {
    className: "card__main"
  }, (0, _preact.h)("div", {
    className: "card__row"
  }, (0, _preact.h)(_rating.default, {
    rating: rating
  })), (0, _preact.h)("div", {
    className: "card__row"
  }, (0, _preact.h)(_price.default, {
    value: price.value,
    discount: price.discount
  })), (0, _preact.h)("div", {
    className: "card__row"
  }, (0, _preact.h)("span", {
    className: "overflow-ellipsis"
  }, color)), (0, _preact.h)("div", {
    className: "card__row"
  }, (0, _preact.h)("span", {
    className: "overflow-ellipsis"
  }, material)), (0, _preact.h)("div", {
    className: "card__row"
  }, (0, _preact.h)("span", {
    className: "overflow-ellipsis"
  }, sizes)), (0, _preact.h)("div", {
    className: "card__row"
  }, (0, _preact.h)("span", {
    className: "overflow-ellipsis"
  }, mechanism)), (0, _preact.h)("div", {
    className: "card__row"
  }, (0, _preact.h)("a", {
    href: seller.url,
    className: "overflow-ellipsis"
  }, seller.name))), (0, _preact.h)("footer", null, (0, _preact.h)("button", {
    className: "btn-like",
    type: "button"
  }, (0, _preact.h)("svg", {
    width: "21",
    height: "18",
    viewBox: "0 0 21 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0, _preact.h)("path", {
    d: "M15.2817 0C16.896 0 18.3736 0.643222 19.4368 1.80929C20.4458 2.91603 21 4.39419 21 5.97066C21 7.68506 20.3095 9.27481 18.8441 10.9594C18.2393 11.6547 17.4908 12.3851 16.5242 13.238C15.7829 13.8922 15.1443 14.4268 13.5889 15.7077C12.3869 16.6979 11.8373 17.1537 11.1167 17.7631L11.0906 17.7854C10.9255 17.925 10.7158 18 10.5 18C10.2842 18 10.0745 17.925 9.90922 17.7854L9.88329 17.7633C9.16199 17.1533 8.60822 16.6938 7.41114 15.7079C5.85552 14.4266 5.21709 13.8922 4.47562 13.238C3.50923 12.3851 2.76045 11.6547 2.15593 10.9597C0.69028 9.27481 0 7.68506 0 5.97066C0 4.39419 0.554215 2.91603 1.56315 1.80929C2.62616 0.643222 4.104 0 5.71812 0C6.77404 0 7.71384 0.281879 8.5373 0.796802C9.20432 1.21384 9.76784 1.76517 10.2359 2.4039C10.4216 2.66607 10.3338 2.5352 10.5 2.79609C10.6662 2.5352 10.5784 2.66607 10.7639 2.4039C11.2322 1.76517 11.7957 1.21384 12.4625 0.796802C13.2862 0.281879 14.2257 0 15.2817 0ZM15.2817 1.73326C14.5821 1.73326 13.9603 1.92432 13.4071 2.27602C12.952 2.5654 12.5589 2.95331 12.2271 3.4059C11.8141 3.96944 11.5271 4.56918 11.3525 5.08711C11.2322 5.44374 10.8882 5.68535 10.5 5.68535C10.1118 5.68535 9.76762 5.44374 9.64751 5.08711C9.47289 4.56918 9.18592 3.96944 8.77286 3.4059C8.44113 2.95331 8.04801 2.5654 7.59263 2.27602C7.03974 1.92432 6.41793 1.73326 5.71812 1.73326C4.62343 1.73326 3.62779 2.16636 2.90848 2.95523C2.19028 3.74282 1.79318 4.81337 1.79318 5.97066C1.79318 7.30251 2.37465 8.53563 3.6094 9.93346C4.16428 10.5613 4.85478 11.2293 5.75602 12.0212C6.45694 12.6372 7.06566 13.1462 8.57409 14.3885C9.21739 14.9188 9.86135 15.4483 10.5 15.9842C11.1386 15.4487 11.7822 14.9186 12.4257 14.3887C13.9341 13.1462 14.5431 12.6372 15.244 12.0212C16.145 11.2293 16.8357 10.5613 17.3904 9.93346C18.6254 8.53563 19.2068 7.30251 19.2068 5.97066C19.2068 4.81337 18.8095 3.74282 18.0915 2.95523C17.3722 2.16636 16.3764 1.73326 15.2817 1.73326Z",
    fill: "#FF9F9F"
  }))), (0, _preact.h)("button", {
    className: "btn-buy",
    type: "button"
  }, (0, _preact.h)("span", null, "\u041A\u0443\u043F\u0438\u0442\u044C"))));
};

var _default = Card;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./style.css":"components/card/style.css","../UI/rating":"components/UI/rating/index.tsx","../UI/price":"components/UI/price/index.tsx"}],"components/card-list/index.tsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

require("./style.css");

var _card = _interopRequireDefault(require("../card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardList = function CardList(_ref) {
  var cards = _ref.cards;
  return (0, _preact.h)("ul", {
    className: "card-list"
  }, cards.map(function (cardOptions) {
    return (0, _preact.h)("li", null, (0, _preact.h)(_card.default, Object.assign({}, cardOptions)));
  }));
};

var _default = CardList;
exports.default = _default;
},{"preact":"../node_modules/preact/dist/preact.module.js","./style.css":"components/card-list/style.css","../card":"components/card/index.tsx"}],"style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.tsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _data = _interopRequireDefault(require("./data.json"));

var _cardList = _interopRequireDefault(require("./components/card-list"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return (0, _preact.h)("section", {
    className: "container app"
  }, (0, _preact.h)(_cardList.default, {
    cards: _data.default
  }));
};

(0, _preact.render)((0, _preact.h)(App, null), document.getElementById('root'));
},{"preact":"../node_modules/preact/dist/preact.module.js","./data.json":"data.json","./components/card-list":"components/card-list/index.tsx","./style.css":"style.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49385" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.tsx"], null)
//# sourceMappingURL=/src.f69400ca.js.map