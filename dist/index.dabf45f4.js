/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ !function(e1, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e1.document ? t(e1, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e1);
}("undefined" != typeof window ? window : this, function(e2, t1) {
    "use strict";
    var n1 = [], r1 = e2.document, i1 = Object.getPrototypeOf, o1 = n1.slice, a1 = n1.concat, s1 = n1.push, u1 = n1.indexOf, l1 = {}, c1 = l1.toString, f1 = l1.hasOwnProperty, p1 = f1.toString, d1 = p1.call(Object), h1 = {}, g1 = function e(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
    }, y1 = function e(t) {
        return null != t && t === t.window;
    }, v1 = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function m1(e, t, n) {
        var i, o = (t = t || r1).createElement("script");
        if (o.text = e, n) for(i in v1)n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x1(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l1[c1.call(e)] || "object" : typeof e;
    }
    var b1 = "3.3.1", w1 = function(e, t) {
        return new w1.fn.init(e, t);
    }, T1 = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w1.fn = w1.prototype = {
        jquery: "3.3.1",
        constructor: w1,
        length: 0,
        toArray: function() {
            return o1.call(this);
        },
        get: function(e) {
            return null == e ? o1.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = w1.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return w1.each(this, e);
        },
        map: function(e) {
            return this.pushStack(w1.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(o1.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [
                this[n]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: s1,
        sort: n1.sort,
        splice: n1.splice
    }, w1.extend = w1.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g1(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (e = arguments[s])) for(t in e)n = a[t], a !== (r = e[t]) && (l && r && (w1.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w1.isPlainObject(n) ? n : {}, a[t] = w1.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, w1.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c1.call(e)) && (!(t = i1(e)) || "function" == typeof (n = f1.call(t, "constructor") && t.constructor) && p1.call(n) === d1);
        },
        isEmptyObject: function(e) {
            var t;
            for(t in e)return !1;
            return !0;
        },
        globalEval: function(e) {
            m1(e);
        },
        each: function(e, t) {
            var n, r = 0;
            if (C1(e)) {
                for(n = e.length; r < n; r++)if (!1 === t.call(e[r], r, e[r])) break;
            } else for(r in e)if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(T1, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (C1(Object(e)) ? w1.merge(n, "string" == typeof e ? [
                e
            ] : e) : s1.call(n, e)), n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u1.call(t, e, n);
        },
        merge: function(e, t) {
            for(var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for(var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (C1(e)) for(r = e.length; o < r; o++)null != (i = t(e[o], o, n)) && s.push(i);
            else for(o in e)null != (i = t(e[o], o, n)) && s.push(i);
            return a1.apply([], s);
        },
        guid: 1,
        support: h1
    }), "function" == typeof Symbol && (w1.fn[Symbol.iterator] = n1[Symbol.iterator]), w1.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l1["[object " + t + "]"] = t.toLowerCase();
    });
    function C1(e) {
        var t = !!e && "length" in e && e.length, n = x1(e);
        return !g1(e) && !y1(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    var E1 = function(e3) {
        var t2, n2, r2, i2, o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, y2, v2, m2, x2, b2 = "sizzle" + 1 * new Date, w2 = e3.document, T2 = 0, C2 = 0, E2 = ae(), k2 = ae(), S = ae(), D = function(e, t) {
            return e === t && (f2 = !0), 0;
        }, N = {}.hasOwnProperty, A = [], j = A.pop, q = A.push, L = A.push, H = A.slice, O = function(e, t) {
            for(var n = 0, r = e.length; n < r; n++)if (e[n] === t) return n;
            return -1;
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]", W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + P + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, re = function() {
            p2();
        }, ie = me(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(A = H.call(w2.childNodes), w2.childNodes), A[w2.childNodes.length].nodeType;
        } catch (e4) {
            L = {
                apply: A.length ? function(e, t) {
                    q.apply(e, H.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while(e[n++] = t[r++]);
                    e.length = n - 1;
                }
            };
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w2) !== d2 && p2(t), t = t || d2, g2)) {
                if (11 !== T && (f = J.exec(e))) {
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x2(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n2.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                }
                if (n2.qsa && !S[e + " "] && (!y2 || !y2.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b2), s = (h = a2(e)).length;
                        while(s--)h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r;
                    } catch (e) {} finally{
                        c === b2 && t.removeAttribute("id");
                    }
                }
            }
            return u2(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r2.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }
            return t;
        }
        function se(e) {
            return e[b2] = !0, e;
        }
        function ue(e) {
            var t = d2.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e5) {
                return !1;
            } finally{
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function le(e, t) {
            var n = e.split("|"), i = n.length;
            while(i--)r2.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) {
                while(n = n.nextSibling)if (n === t) return -1;
            }
            return e ? 1 : -1;
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while(a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        n2 = oe.support = {}, o2 = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, p2 = oe.setDocument = function(e6) {
            var t3, i3, a3 = e6 ? e6.ownerDocument || e6 : w2;
            return a3 !== d2 && 9 === a3.nodeType && a3.documentElement ? (d2 = a3, h2 = d2.documentElement, g2 = !o2(d2), w2 !== d2 && (i3 = d2.defaultView) && i3.top !== i3 && (i3.addEventListener ? i3.addEventListener("unload", re, !1) : i3.attachEvent && i3.attachEvent("onunload", re)), n2.attributes = ue(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), n2.getElementsByTagName = ue(function(e) {
                return e.appendChild(d2.createComment("")), !e.getElementsByTagName("*").length;
            }), n2.getElementsByClassName = Q.test(d2.getElementsByClassName), n2.getById = ue(function(e) {
                return h2.appendChild(e).id = b2, !d2.getElementsByName || !d2.getElementsByName(b2).length;
            }), n2.getById ? (r2.filter.ID = function(e7) {
                var t = e7.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, r2.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g2) {
                    var n = t.getElementById(e);
                    return n ? [
                        n
                    ] : [];
                }
            }) : (r2.filter.ID = function(e8) {
                var t = e8.replace(Z, ee);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, r2.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g2) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [
                            o
                        ];
                        i = t.getElementsByName(e), r = 0;
                        while(o = i[r++])if ((n = o.getAttributeNode("id")) && n.value === e) return [
                            o
                        ];
                    }
                    return [];
                }
            }), r2.find.TAG = n2.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n2.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while(n = o[i++])1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, r2.find.CLASS = n2.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g2) return t.getElementsByClassName(e);
            }, v2 = [], y2 = [], (n2.qsa = Q.test(d2.querySelectorAll)) && (ue(function(e) {
                h2.appendChild(e).innerHTML = "<a id='" + b2 + "'></a><select id='" + b2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y2.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y2.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b2 + "-]").length || y2.push("~="), e.querySelectorAll(":checked").length || y2.push(":checked"), e.querySelectorAll("a#" + b2 + "+*").length || y2.push(".#.+[+~]");
            }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d2.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y2.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y2.push(":enabled", ":disabled"), h2.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y2.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y2.push(",.*:");
            })), (n2.matchesSelector = Q.test(m2 = h2.matches || h2.webkitMatchesSelector || h2.mozMatchesSelector || h2.oMatchesSelector || h2.msMatchesSelector)) && ue(function(e) {
                n2.disconnectedMatch = m2.call(e, "*"), m2.call(e, "[s!='']:x"), v2.push("!=", W);
            }), y2 = y2.length && new RegExp(y2.join("|")), v2 = v2.length && new RegExp(v2.join("|")), t3 = Q.test(h2.compareDocumentPosition), x2 = t3 || Q.test(h2.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) {
                    while(t = t.parentNode)if (t === e) return !0;
                }
                return !1;
            }, D = t3 ? function(e, t) {
                if (e === t) return f2 = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n2.sortDetached && t.compareDocumentPosition(e) === r ? e === d2 || e.ownerDocument === w2 && x2(w2, e) ? -1 : t === d2 || t.ownerDocument === w2 && x2(w2, t) ? 1 : c2 ? O(c2, e) - O(c2, t) : 0 : 4 & r ? -1 : 1);
            } : function(e, t) {
                if (e === t) return f2 = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [
                    e
                ], s = [
                    t
                ];
                if (!i || !o) return e === d2 ? -1 : t === d2 ? 1 : i ? -1 : o ? 1 : c2 ? O(c2, e) - O(c2, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while(n = n.parentNode)a.unshift(n);
                n = t;
                while(n = n.parentNode)s.unshift(n);
                while(a[r] === s[r])r++;
                return r ? ce(a[r], s[r]) : a[r] === w2 ? -1 : s[r] === w2 ? 1 : 0;
            }, d2) : d2;
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d2 && p2(e), t = t.replace(z, "='$1']"), n2.matchesSelector && g2 && !S[t + " "] && (!v2 || !v2.test(t)) && (!y2 || !y2.test(t))) try {
                var r = m2.call(e, t);
                if (r || n2.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e9) {}
            return oe(t, d2, null, [
                e
            ]).length > 0;
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d2 && p2(e), x2(e, t);
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d2 && p2(e);
            var i = r2.attrHandle[t.toLowerCase()], o = i && N.call(r2.attrHandle, t.toLowerCase()) ? i(e, t, !g2) : void 0;
            return void 0 !== o ? o : n2.attributes || !g2 ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne);
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f2 = !n2.detectDuplicates, c2 = !n2.sortStable && e.slice(0), e.sort(D), f2) {
                while(t = e[o++])t === e[o] && (i = r.push(o));
                while(i--)e.splice(r[i], 1);
            }
            return c2 = null, e;
        }, i2 = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for(e = e.firstChild; e; e = e.nextSibling)n += i2(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else while(t = e[r++])n += i2(t);
            return n;
        }, (r2 = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a2(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e10) {
                    var t = e10.replace(Z, ee).toLowerCase();
                    return "*" === e10 ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e11) {
                    var t = E2[e11 + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e11 + "(" + M + "|$)"), E2(e11, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    }));
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(e12, t4, n, r, i) {
                    var o = "nth" !== e12.slice(0, 3), a = "last" !== e12.slice(-4), s = "of-type" === t4;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", y = t.parentNode, v = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (y) {
                            if (o) {
                                while(g){
                                    p = t;
                                    while(p = p[g])if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e12 && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [
                                a ? y.firstChild : y.lastChild
                            ], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b2] || (p[b2] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e12] || [])[0] === T2 && l[1]) && l[2], p = d && y.childNodes[d];
                                while(p = ++d && p && p[g] || (x = d = 0) || h.pop())if (1 === p.nodeType && ++x && p === t) {
                                    c[e12] = [
                                        T2,
                                        d,
                                        x
                                    ];
                                    break;
                                }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b2] || (p[b2] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e12] || [])[0] === T2 && l[1]), !1 === x) {
                                while(p = ++d && p && p[g] || (x = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b2] || (p[b2] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e12] = [
                                    T2,
                                    x
                                ]), p === t)) break;
                            }
                            return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e13, t) {
                    var n3, i = r2.pseudos[e13] || r2.setFilters[e13.toLowerCase()] || oe.error("unsupported pseudo: " + e13);
                    return i[b2] ? i(t) : i.length > 1 ? (n3 = [
                        e13,
                        e13,
                        "",
                        t
                    ], r2.setFilters.hasOwnProperty(e13.toLowerCase()) ? se(function(e, n) {
                        var r, o = i(e, t), a = o.length;
                        while(a--)e[r = O(e, o[a])] = !(n[r] = o[a]);
                    }) : function(e) {
                        return i(e, 0, n3);
                    }) : i;
                }
            },
            pseudos: {
                not: se(function(e14) {
                    var t5 = [], n = [], r = s2(e14.replace(B, "$1"));
                    return r[b2] ? se(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while(s--)(o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, i, o) {
                        return t5[0] = e, r(t5, null, o, n), t5[0] = null, !n.pop();
                    };
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0;
                    };
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee), function(t) {
                        return (t.textContent || t.innerText || i2(t)).indexOf(e) > -1;
                    };
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function(t) {
                        var n;
                        do {
                            if (n = g2 ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        }while ((t = t.parentNode) && 1 === t.nodeType)
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e3.location && e3.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === h2;
                },
                focus: function(e) {
                    return e === d2.activeElement && (!d2.hasFocus || d2.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for(e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !r2.pseudos.empty(e);
                },
                header: function(e) {
                    return Y.test(e.nodeName);
                },
                input: function(e) {
                    return G.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: he(function() {
                    return [
                        0
                    ];
                }),
                last: he(function(e, t) {
                    return [
                        t - 1
                    ];
                }),
                eq: he(function(e, t, n) {
                    return [
                        n < 0 ? n + t : n
                    ];
                }),
                even: he(function(e, t) {
                    for(var n = 0; n < t; n += 2)e.push(n);
                    return e;
                }),
                odd: he(function(e, t) {
                    for(var n = 1; n < t; n += 2)e.push(n);
                    return e;
                }),
                lt: he(function(e, t, n) {
                    for(var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                    return e;
                }),
                gt: he(function(e, t, n) {
                    for(var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = r2.pseudos.eq;
        for(t2 in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })r2.pseudos[t2] = fe(t2);
        for(t2 in {
            submit: !0,
            reset: !0
        })r2.pseudos[t2] = pe(t2);
        function ye() {}
        ye.prototype = r2.filters = r2.pseudos, r2.setFilters = new ye, a2 = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k2[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r2.preFilter;
            while(s){
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for(a in r2.filter)!(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break;
            }
            return t ? s.length : s ? oe.error(e) : k2(e, u).slice(0);
        };
        function ve(e) {
            for(var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
            return r;
        }
        function me(e, t6, n4) {
            var r = t6.dir, i4 = t6.next, o = i4 || r, a = n4 && "parentNode" === o, s = C2++;
            return t6.first ? function(t, n, i) {
                while(t = t[r])if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
            } : function(t, n, u) {
                var l, c, f, p = [
                    T2,
                    s
                ];
                if (u) {
                    while(t = t[r])if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else while(t = t[r])if (1 === t.nodeType || a) {
                    if (f = t[b2] || (t[b2] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i4 && i4 === t.nodeName.toLowerCase()) t = t[r] || t;
                    else {
                        if ((l = c[o]) && l[0] === T2 && l[1] === s) return p[2] = l[2];
                        if (c[o] = p, p[2] = e(t, n, u)) return !0;
                    }
                }
                return !1;
            };
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while(i--)if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function be(e, t, n) {
            for(var r = 0, i = t.length; r < i; r++)oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for(var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o3) {
            return r && !r[b2] && (r = Te(r)), i && !i[b2] && (i = Te(i, o3)), se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || be(t || "*", s.nodeType ? [
                    s
                ] : s, []), y = !e || !o && t ? g : we(g, p, e, s, u), v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while(c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while(c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u);
                        }
                        c = v.length;
                        while(c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
            });
        }
        function Ce(e15) {
            for(var t, n5, i5, o = e15.length, a = r2.relative[e15[0].type], s = a || r2.relative[" "], u = a ? 1 : 0, c = me(function(e) {
                return e === t;
            }, s, !0), f = me(function(e) {
                return O(t, e) > -1;
            }, s, !0), p = [
                function(e, n, r) {
                    var i = !a && (r || n !== l2) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i;
                }
            ]; u < o; u++)if (n5 = r2.relative[e15[u].type]) p = [
                me(xe(p), n5)
            ];
            else {
                if ((n5 = r2.filter[e15[u].type].apply(null, e15[u].matches))[b2]) {
                    for(i5 = ++u; i5 < o; i5++)if (r2.relative[e15[i5].type]) break;
                    return Te(u > 1 && xe(p), u > 1 && ve(e15.slice(0, u - 1).concat({
                        value: " " === e15[u - 2].type ? "*" : ""
                    })).replace(B, "$1"), n5, u < i5 && Ce(e15.slice(u, i5)), i5 < o && Ce(e15 = e15.slice(i5)), i5 < o && ve(e15));
                }
                p.push(n5);
            }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0, i = e.length > 0, o4 = function(o, a, s, u, c) {
                var f, h, y, v = 0, m = "0", x = o && [], b = [], w = l2, C = o || i && r2.find.TAG("*", c), E = T2 += null == w ? 1 : Math.random() || .1, k = C.length;
                for(c && (l2 = a === d2 || a || c); m !== k && null != (f = C[m]); m++){
                    if (i && f) {
                        h = 0, a || f.ownerDocument === d2 || (p2(f), s = !g2);
                        while(y = e[h++])if (y(f, a || d2, s)) {
                            u.push(f);
                            break;
                        }
                        c && (T2 = E);
                    }
                    n && ((f = !y && f) && v--, o && x.push(f));
                }
                if (v += m, n && m !== v) {
                    h = 0;
                    while(y = t[h++])y(x, b, a, s);
                    if (o) {
                        if (v > 0) while(m--)x[m] || b[m] || (b[m] = j.call(u));
                        b = we(b);
                    }
                    L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                }
                return c && (T2 = E, l2 = w), x;
            };
            return n ? se(o4) : o4;
        }
        return s2 = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = a2(e)), n = t.length;
                while(n--)(o = Ce(t[n]))[b2] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e;
            }
            return o;
        }, u2 = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a2(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g2 && r2.relative[u[1].type]) {
                    if (!(t = (r2.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length);
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while(o--){
                    if (l = u[o], r2.relative[c = l.type]) break;
                    if ((f = r2.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break;
                    }
                }
            }
            return (p || s2(e, d))(i, t, !g2, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, n2.sortStable = b2.split("").sort(D).join("") === b2, n2.detectDuplicates = !!f2, p2(), n2.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d2.createElement("fieldset"));
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n2.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function(e) {
            return null == e.getAttribute("disabled");
        }) || le(P, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(e2);
    w1.find = E1, w1.expr = E1.selectors, w1.expr[":"] = w1.expr.pseudos, w1.uniqueSort = w1.unique = E1.uniqueSort, w1.text = E1.getText, w1.isXMLDoc = E1.isXML, w1.contains = E1.contains, w1.escapeSelector = E1.escape;
    var k1 = function(e, t, n) {
        var r = [], i = void 0 !== n;
        while((e = e[t]) && 9 !== e.nodeType)if (1 === e.nodeType) {
            if (i && w1(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, S1 = function(e, t) {
        for(var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, D1 = w1.expr.match.needsContext;
    function N1(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A1 = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j1(e16, t, n) {
        return g1(t) ? w1.grep(e16, function(e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? w1.grep(e16, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? w1.grep(e16, function(e) {
            return u1.call(t, e) > -1 !== n;
        }) : w1.filter(t, e16, n);
    }
    w1.filter = function(e17, t, n) {
        var r = t[0];
        return n && (e17 = ":not(" + e17 + ")"), 1 === t.length && 1 === r.nodeType ? w1.find.matchesSelector(r, e17) ? [
            r
        ] : [] : w1.find.matches(e17, w1.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, w1.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(w1(e).filter(function() {
                for(t = 0; t < r; t++)if (w1.contains(i[t], this)) return !0;
            }));
            for(n = this.pushStack([]), t = 0; t < r; t++)w1.find(e, i[t], n);
            return r > 1 ? w1.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(j1(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(j1(this, e || [], !0));
        },
        is: function(e) {
            return !!j1(this, "string" == typeof e && D1.test(e) ? w1(e) : e || [], !1).length;
        }
    });
    var q1, L1 = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w1.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q1, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [
                null,
                e,
                null
            ] : L1.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w1 ? t[0] : t, w1.merge(this, w1.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r1, !0)), A1.test(i[1]) && w1.isPlainObject(t)) for(i in t)g1(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r1.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g1(e) ? void 0 !== n.ready ? n.ready(e) : e(w1) : w1.makeArray(e, this);
    }).prototype = w1.fn, q1 = w1(r1);
    var H1 = /^(?:parents|prev(?:Until|All))/, O1 = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    w1.fn.extend({
        has: function(e18) {
            var t = w1(e18, this), n = t.length;
            return this.filter(function() {
                for(var e = 0; e < n; e++)if (w1.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w1(e);
            if (!D1.test(e)) {
                for(; r < i; r++)for(n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w1.find.matchesSelector(n, e))) {
                    o.push(n);
                    break;
                }
            }
            return this.pushStack(o.length > 1 ? w1.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? u1.call(w1(e), this[0]) : u1.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(w1.uniqueSort(w1.merge(this.get(), w1(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function P1(e, t) {
        while((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w1.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return k1(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return k1(e, "parentNode", n);
        },
        next: function(e) {
            return P1(e, "nextSibling");
        },
        prev: function(e) {
            return P1(e, "previousSibling");
        },
        nextAll: function(e) {
            return k1(e, "nextSibling");
        },
        prevAll: function(e) {
            return k1(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return k1(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return k1(e, "previousSibling", n);
        },
        siblings: function(e) {
            return S1((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return S1(e.firstChild);
        },
        contents: function(e) {
            return N1(e, "iframe") ? e.contentDocument : (N1(e, "template") && (e = e.content || e), w1.merge([], e.childNodes));
        }
    }, function(e, t) {
        w1.fn[e] = function(n, r) {
            var i = w1.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w1.filter(r, i)), this.length > 1 && (O1[e] || w1.uniqueSort(i), H1.test(e) && i.reverse()), this.pushStack(i);
        };
    });
    var M1 = /[^\x20\t\r\n\f]+/g;
    function R1(e) {
        var t = {};
        return w1.each(e.match(M1) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    w1.Callbacks = function(e19) {
        e19 = "string" == typeof e19 ? R1(e19) : w1.extend({}, e19);
        var t7, n6, r3, i, o = [], a = [], s = -1, u = function() {
            for(i = i || e19.once, r3 = t7 = !0; a.length; s = -1){
                n6 = a.shift();
                while(++s < o.length)!1 === o[s].apply(n6[0], n6[1]) && e19.stopOnFalse && (s = o.length, n6 = !1);
            }
            e19.memory || (n6 = !1), t7 = !1, i && (o = n6 ? [] : "");
        }, l = {
            add: function() {
                return o && (n6 && !t7 && (s = o.length - 1, a.push(n6)), function t(n) {
                    w1.each(n, function(n, r) {
                        g1(r) ? e19.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x1(r) && t(r);
                    });
                }(arguments), n6 && !t7 && u()), this;
            },
            remove: function() {
                return w1.each(arguments, function(e, t) {
                    var n;
                    while((n = w1.inArray(t, o, n)) > -1)o.splice(n, 1), n <= s && s--;
                }), this;
            },
            has: function(e) {
                return e ? w1.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return i = a = [], o = n6 = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return i = a = [], n6 || t7 || (o = n6 = ""), this;
            },
            locked: function() {
                return !!i;
            },
            fireWith: function(e, n) {
                return i || (n = [
                    e,
                    (n = n || []).slice ? n.slice() : n
                ], a.push(n), t7 || u()), this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r3;
            }
        };
        return l;
    };
    function I1(e) {
        return e;
    }
    function W1(e) {
        throw e;
    }
    function $1(e, t, n, r) {
        var i;
        try {
            e && g1(i = e.promise) ? i.call(e).done(t).fail(n) : e && g1(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [
                e
            ].slice(r));
        } catch (e20) {
            n.apply(void 0, [
                e20
            ]);
        }
    }
    w1.extend({
        Deferred: function(t8) {
            var n7 = [
                [
                    "notify",
                    "progress",
                    w1.Callbacks("memory"),
                    w1.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    w1.Callbacks("once memory"),
                    w1.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    w1.Callbacks("once memory"),
                    w1.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], r4 = "pending", i6 = {
                state: function() {
                    return r4;
                },
                always: function() {
                    return o5.done(arguments).fail(arguments), this;
                },
                "catch": function(e) {
                    return i6.then(null, e);
                },
                pipe: function() {
                    var e21 = arguments;
                    return w1.Deferred(function(t) {
                        w1.each(n7, function(n, r) {
                            var i = g1(e21[r[4]]) && e21[r[4]];
                            o5[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && g1(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [
                                    e
                                ] : arguments);
                            });
                        }), e21 = null;
                    }).promise();
                },
                then: function(t9, r5, i7) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this, u = arguments, l3 = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then, g1(l) ? i ? l.call(e, a(o, n, I1, i), a(o, n, W1, i)) : (o++, l.call(e, a(o, n, I1, i), a(o, n, W1, i), a(o, n, I1, n.notifyWith))) : (r !== I1 && (s = void 0, u = [
                                        e
                                    ]), (i || n.resolveWith)(s, u));
                                }
                            }, c = i ? l3 : function() {
                                try {
                                    l3();
                                } catch (e) {
                                    w1.Deferred.exceptionHook && w1.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W1 && (s = void 0, u = [
                                        e
                                    ]), n.rejectWith(s, u));
                                }
                            };
                            t ? c() : (w1.Deferred.getStackHook && (c.stackTrace = w1.Deferred.getStackHook()), e2.setTimeout(c));
                        };
                    }
                    return w1.Deferred(function(e) {
                        n7[0][3].add(a(0, e, g1(i7) ? i7 : I1, e.notifyWith)), n7[1][3].add(a(0, e, g1(t9) ? t9 : I1)), n7[2][3].add(a(0, e, g1(r5) ? r5 : W1));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? w1.extend(e, i6) : i6;
                }
            }, o5 = {};
            return w1.each(n7, function(e, t) {
                var a = t[2], s = t[5];
                i6[t[1]] = a.add, s && a.add(function() {
                    r4 = s;
                }, n7[3 - e][2].disable, n7[3 - e][3].disable, n7[0][2].lock, n7[0][3].lock), a.add(t[3].fire), o5[t[0]] = function() {
                    return o5[t[0] + "With"](this === o5 ? void 0 : this, arguments), this;
                }, o5[t[0] + "With"] = a.fireWith;
            }), i6.promise(o5), t8 && t8.call(o5, o5), o5;
        },
        when: function(e22) {
            var t = arguments.length, n8 = t, r = Array(n8), i = o1.call(arguments), a = w1.Deferred(), s = function(e) {
                return function(n) {
                    r[e] = this, i[e] = arguments.length > 1 ? o1.call(arguments) : n, --t || a.resolveWith(r, i);
                };
            };
            if (t <= 1 && ($1(e22, a.done(s(n8)).resolve, a.reject, !t), "pending" === a.state() || g1(i[n8] && i[n8].then))) return a.then();
            while(n8--)$1(i[n8], s(n8), a.reject);
            return a.promise();
        }
    });
    var B1 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w1.Deferred.exceptionHook = function(t, n) {
        e2.console && e2.console.warn && t && B1.test(t.name) && e2.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, w1.readyException = function(t) {
        e2.setTimeout(function() {
            throw t;
        });
    };
    var F1 = w1.Deferred();
    w1.fn.ready = function(e23) {
        return F1.then(e23)["catch"](function(e) {
            w1.readyException(e);
        }), this;
    }, w1.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --w1.readyWait : w1.isReady) || (w1.isReady = !0, !0 !== e && --w1.readyWait > 0 || F1.resolveWith(r1, [
                w1
            ]));
        }
    }), w1.ready.then = F1.then;
    function _1() {
        r1.removeEventListener("DOMContentLoaded", _1), e2.removeEventListener("load", _1), w1.ready();
    }
    "complete" === r1.readyState || "loading" !== r1.readyState && !r1.documentElement.doScroll ? e2.setTimeout(w1.ready) : (r1.addEventListener("DOMContentLoaded", _1), e2.addEventListener("load", _1));
    var z1 = function(e24, t, n9, r, i, o, a) {
        var s = 0, u = e24.length, l = null == n9;
        if ("object" === x1(n9)) {
            i = !0;
            for(s in n9)z1(e24, t, s, n9[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, g1(r) || (a = !0), l && (a ? (t.call(e24, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(w1(e), n);
        })), t)) for(; s < u; s++)t(e24[s], n9, a ? r : r.call(e24[s], s, t(e24[s], n9)));
        return i ? e24 : l ? t.call(e24) : u ? t(e24[0], n9) : o;
    }, X1 = /^-ms-/, U1 = /-([a-z])/g;
    function V1(e, t) {
        return t.toUpperCase();
    }
    function G1(e) {
        return e.replace(X1, "ms-").replace(U1, V1);
    }
    var Y1 = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q1() {
        this.expando = w1.expando + Q1.uid++;
    }
    Q1.uid = 1, Q1.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Y1(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G1(t)] = n;
            else for(r in t)i[G1(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G1(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G1) : (t = G1(t)) in r ? [
                        t
                    ] : t.match(M1) || []).length;
                    while(n--)delete r[t[n]];
                }
                (void 0 === t || w1.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !w1.isEmptyObject(t);
        }
    };
    var J1 = new Q1, K1 = new Q1, Z1 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee1 = /[A-Z]/g;
    function te1(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z1.test(e) ? JSON.parse(e) : e);
    }
    function ne1(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) {
            if (r = "data-" + t.replace(ee1, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te1(n);
                } catch (e25) {}
                K1.set(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    w1.extend({
        hasData: function(e) {
            return K1.hasData(e) || J1.hasData(e);
        },
        data: function(e, t, n) {
            return K1.access(e, t, n);
        },
        removeData: function(e, t) {
            K1.remove(e, t);
        },
        _data: function(e, t, n) {
            return J1.access(e, t, n);
        },
        _removeData: function(e, t) {
            J1.remove(e, t);
        }
    }), w1.fn.extend({
        data: function(e, t10) {
            var n10, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K1.get(o), 1 === o.nodeType && !J1.get(o, "hasDataAttrs"))) {
                    n10 = a.length;
                    while(n10--)a[n10] && 0 === (r = a[n10].name).indexOf("data-") && (r = G1(r.slice(5)), ne1(o, r, i[r]));
                    J1.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof e ? this.each(function() {
                K1.set(this, e);
            }) : z1(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K1.get(o, e))) return n;
                    if (void 0 !== (n = ne1(o, e))) return n;
                } else this.each(function() {
                    K1.set(this, e, t);
                });
            }, null, t10, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                K1.remove(this, e);
            });
        }
    }), w1.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J1.get(e, t), n && (!r || Array.isArray(n) ? r = J1.access(e, t, w1.makeArray(n)) : r.push(n)), r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = w1.queue(e, t), r = n.length, i = n.shift(), o = w1._queueHooks(e, t), a = function() {
                w1.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return J1.get(e, n) || J1.access(e, n, {
                empty: w1.Callbacks("once memory").add(function() {
                    J1.remove(e, [
                        t + "queue",
                        n
                    ]);
                })
            });
        }
    }), w1.fn.extend({
        queue: function(e, t) {
            var n11 = 2;
            return "string" != typeof e && (t = e, e = "fx", n11--), arguments.length < n11 ? w1.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = w1.queue(this, e, t);
                w1._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w1.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                w1.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = w1.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [
                    o
                ]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while(a--)(n = J1.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var re1 = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie1 = new RegExp("^(?:([+-])=|)(" + re1 + ")([a-z%]*)$", "i"), oe1 = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ], ae1 = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && w1.contains(e.ownerDocument, e) && "none" === w1.css(e, "display");
    }, se1 = function(e, t, n, r) {
        var i, o, a = {};
        for(o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for(o in t)e.style[o] = a[o];
        return i;
    };
    function ue1(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return w1.css(e, t, "");
        }, u = s(), l = n && n[3] || (w1.cssNumber[t] ? "" : "px"), c = (w1.cssNumber[t] || "px" !== l && +u) && ie1.exec(w1.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while(a--)w1.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w1.style(e, t, c + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
    }
    var le1 = {};
    function ce1(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le1[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w1.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le1[r] = i, i);
    }
    function fe1(e, t) {
        for(var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J1.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae1(r) && (i[o] = ce1(r))) : "none" !== n && (i[o] = "none", J1.set(r, "display", n)));
        for(o = 0; o < a; o++)null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w1.fn.extend({
        show: function() {
            return fe1(this, !0);
        },
        hide: function() {
            return fe1(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae1(this) ? w1(this).show() : w1(this).hide();
            });
        }
    });
    var pe1 = /^(?:checkbox|radio)$/i, de1 = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he1 = /^$|^module$|\/(?:java|ecma)script/i, ge1 = {
        option: [
            1,
            "<select multiple='multiple'>",
            "</select>"
        ],
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    ge1.optgroup = ge1.option, ge1.tbody = ge1.tfoot = ge1.colgroup = ge1.caption = ge1.thead, ge1.th = ge1.td;
    function ye1(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N1(e, t) ? w1.merge([
            e
        ], n) : n;
    }
    function ve1(e, t) {
        for(var n = 0, r = e.length; n < r; n++)J1.set(e[n], "globalEval", !t || J1.get(t[n], "globalEval"));
    }
    var me1 = /<|&#?\w+;/;
    function xe1(e, t, n, r, i) {
        for(var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)if ((o = e[d]) || 0 === o) {
            if ("object" === x1(o)) w1.merge(p, o.nodeType ? [
                o
            ] : o);
            else if (me1.test(o)) {
                a = a || f.appendChild(t.createElement("div")), s = (de1.exec(o) || [
                    "",
                    ""
                ])[1].toLowerCase(), u = ge1[s] || ge1._default, a.innerHTML = u[1] + w1.htmlPrefilter(o) + u[2], c = u[0];
                while(c--)a = a.lastChild;
                w1.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
            } else p.push(t.createTextNode(o));
        }
        f.textContent = "", d = 0;
        while(o = p[d++])if (r && w1.inArray(o, r) > -1) i && i.push(o);
        else if (l = w1.contains(o.ownerDocument, o), a = ye1(f.appendChild(o), "script"), l && ve1(a), n) {
            c = 0;
            while(o = a[c++])he1.test(o.type || "") && n.push(o);
        }
        return f;
    }
    !function() {
        var e = r1.createDocumentFragment().appendChild(r1.createElement("div")), t = r1.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h1.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h1.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var be1 = r1.documentElement, we1 = /^key/, Te1 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce1 = /^([^.]*)(?:\.(.+)|)/;
    function Ee1() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r1.activeElement;
        } catch (e) {}
    }
    function De(e27, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for(s in t)De(e27, s, n, r, t[s], o);
            return e27;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e27;
        return 1 === o && (a = i, (i = function(e) {
            return w1().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w1.guid++)), e27.each(function() {
            w1.event.add(this, t, i, r, n);
        });
    }
    w1.event = {
        global: {},
        add: function(e, t11, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J1.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w1.find.matchesSelector(be1, i), n.guid || (n.guid = w1.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
                    return "undefined" != typeof w1 && w1.event.triggered !== t.type ? w1.event.dispatch.apply(e, arguments) : void 0;
                }), l = (t11 = (t11 || "").match(M1) || [
                    ""
                ]).length;
                while(l--)d = g = (s = Ce1.exec(t11[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w1.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w1.event.special[d] || {}, c = w1.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w1.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w1.event.global[d] = !0);
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J1.hasData(e) && J1.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M1) || [
                    ""
                ]).length;
                while(l--)if (s = Ce1.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    f = w1.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while(o--)c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w1.removeEvent(e, d, y.handle), delete u[d]);
                } else for(d in u)w1.event.remove(e, d + t[l], n, r, !0);
                w1.isEmptyObject(u) && J1.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t = w1.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J1.get(this, "events") || {})[t.type] || [], c = w1.event.special[t.type] || {};
            for(u[0] = t, n = 1; n < arguments.length; n++)u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w1.event.handlers.call(this, t, l), n = 0;
                while((o = s[n++]) && !t.isPropagationStopped()){
                    t.currentTarget = o.elem, r = 0;
                    while((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w1.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) {
                for(; l !== this; l = l.parentNode || this)if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for(o = [], a = {}, n = 0; n < u; n++)void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w1(i, this).index(l) > -1 : w1.find(i, this, null, [
                        l
                    ]).length), a[i] && o.push(r);
                    o.length && s.push({
                        elem: l,
                        handlers: o
                    });
                }
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(e, t12) {
            Object.defineProperty(w1.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g1(t12) ? function() {
                    if (this.originalEvent) return t12(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[w1.expando] ? e : new w1.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N1(this, "input")) return this.click(), !1;
                },
                _default: function(e) {
                    return N1(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, w1.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, w1.Event = function(e, t) {
        if (!(this instanceof w1.Event)) return new w1.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee1 : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w1.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w1.expando] = !0;
    }, w1.Event.prototype = {
        constructor: w1.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee1, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee1, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee1, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
    }, w1.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we1.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te1.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, w1.event.addProp), w1.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e28, t) {
        w1.event.special[e28] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || w1.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
        };
    }), w1.fn.extend({
        on: function(e, t, n, r) {
            return De(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return De(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w1(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for(i in e)this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function() {
                w1.event.remove(this, e, n, t);
            });
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N1(e, "table") && N1(11 !== t.nodeType ? t : t.firstChild, "tr") ? w1(e).children("tbody")[0] || e : e;
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J1.hasData(e) && (o = J1.access(e), a = J1.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for(i in l)for(n = 0, r = l[i].length; n < r; n++)w1.event.add(t, i, l[i][n]);
            }
            K1.hasData(e) && (s = K1.access(e), u = w1.extend({}, s), K1.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe1.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a1.apply([], t);
        var i8, o6, s, u, l, c, f = 0, p = e.length, d = p - 1, y = t[0], v = g1(y);
        if (v || p > 1 && "string" == typeof y && !h1.checkClone && je.test(y)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
        });
        if (p && (i8 = xe1(t, e[0].ownerDocument, !1, e, r), o6 = i8.firstChild, 1 === i8.childNodes.length && (i8 = o6), o6 || r)) {
            for(u = (s = w1.map(ye1(i8, "script"), He)).length; f < p; f++)l = i8, f !== d && (l = w1.clone(l, !0, !0), u && w1.merge(s, ye1(l, "script"))), n.call(e[f], l, f);
            if (u) for(c = s[s.length - 1].ownerDocument, w1.map(s, Oe), f = 0; f < u; f++)l = s[f], he1.test(l.type || "") && !J1.access(l, "globalEval") && w1.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w1._evalUrl && w1._evalUrl(l.src) : m1(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for(var r, i = t ? w1.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || w1.cleanData(ye1(r)), r.parentNode && (n && w1.contains(r.ownerDocument, r) && ve1(ye1(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w1.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = w1.contains(e.ownerDocument, e);
            if (!(h1.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w1.isXMLDoc(e))) for(a = ye1(s), r = 0, i = (o = ye1(e)).length; r < i; r++)Me(o[r], a[r]);
            if (t) {
                if (n) for(o = o || ye1(e), a = a || ye1(s), r = 0, i = o.length; r < i; r++)Pe(o[r], a[r]);
                else Pe(e, s);
            }
            return (a = ye1(s, "script")).length > 0 && ve1(a, !u && ye1(e, "script")), s;
        },
        cleanData: function(e) {
            for(var t, n, r, i = w1.event.special, o = 0; void 0 !== (n = e[o]); o++)if (Y1(n)) {
                if (t = n[J1.expando]) {
                    if (t.events) for(r in t.events)i[r] ? w1.event.remove(n, r) : w1.removeEvent(n, r, t.handle);
                    n[J1.expando] = void 0;
                }
                n[K1.expando] && (n[K1.expando] = void 0);
            }
        }
    }), w1.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0);
        },
        remove: function(e) {
            return Ie(this, e);
        },
        text: function(e29) {
            return z1(this, function(e) {
                return void 0 === e ? w1.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e29, arguments.length);
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for(var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (w1.cleanData(ye1(e, !1)), e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return w1.clone(this, e, t);
            });
        },
        html: function(e30) {
            return z1(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge1[(de1.exec(e) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    e = w1.htmlPrefilter(e);
                    try {
                        for(; n < r; n++)1 === (t = this[n] || {}).nodeType && (w1.cleanData(ye1(t, !1)), t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e30, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return Re(this, arguments, function(t) {
                var n = this.parentNode;
                w1.inArray(this, e) < 0 && (w1.cleanData(ye1(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), w1.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e31, t) {
        w1.fn[e31] = function(e) {
            for(var n, r = [], i = w1(e), o = i.length - 1, a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), w1(i[a])[t](n), s1.apply(r, n.get());
            return this.pushStack(r);
        };
    });
    var We = new RegExp("^(" + re1 + ")(?!px)[a-z%]+$", "i"), $e = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e2), n.getComputedStyle(t);
    }, Be = new RegExp(oe1.join("|"), "i");
    !function() {
        function t13() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be1.appendChild(l).appendChild(c);
                var t = e2.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be1.removeChild(l), c = null;
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i, o, a, s, u, l = r1.createElement("div"), c = r1.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h1.clearCloneStyle = "content-box" === c.style.backgroundClip, w1.extend(h1, {
            boxSizingReliable: function() {
                return t13(), o;
            },
            pixelBoxStyles: function() {
                return t13(), s;
            },
            pixelPosition: function() {
                return t13(), i;
            },
            reliableMarginLeft: function() {
                return t13(), u;
            },
            scrollboxSize: function() {
                return t13(), a;
            }
        }));
    }();
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w1.contains(e.ownerDocument, e) || (a = w1.style(e, t)), !h1.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ve = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ge = [
        "Webkit",
        "Moz",
        "ms"
    ], Ye = r1.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while(n--)if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w1.cssProps[e];
        return t || (t = w1.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie1.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for(; a < 4; a += 2)"margin" === n && (u += w1.css(e, n + oe1[a], !0, i)), r ? ("content" === n && (u -= w1.css(e, "padding" + oe1[a], !0, i)), "margin" !== n && (u -= w1.css(e, "border" + oe1[a] + "Width", !0, i))) : (u += w1.css(e, "padding" + oe1[a], !0, i), "padding" !== n ? u += w1.css(e, "border" + oe1[a] + "Width", !0, i) : s += w1.css(e, "border" + oe1[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
    }
    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = "border-box" === w1.css(e, "boxSizing", !1, r), a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return a = a && (h1.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w1.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
    }
    w1.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G1(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = w1.cssHooks[t] || w1.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie1.exec(n)) && i[1] && (n = ue1(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w1.cssNumber[s] ? "" : "px")), h1.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = G1(t);
            return Xe.test(t) || (t = Je(s)), (a = w1.cssHooks[t] || w1.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), w1.each([
        "height",
        "width"
    ], function(e32, t) {
        w1.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !ze.test(w1.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se1(e, Ue, function() {
                    return et(e, t, r);
                });
            },
            set: function(e, n, r) {
                var i, o = $e(e), a = "border-box" === w1.css(e, "boxSizing", !1, o), s = r && Ze(e, t, r, a, o);
                return a && h1.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie1.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w1.css(e, t)), Ke(e, n, s);
            }
        };
    }), w1.cssHooks.marginLeft = _e(h1.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se1(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), w1.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w1.cssHooks[e + t] = {
            expand: function(n) {
                for(var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [
                    n
                ]; r < 4; r++)i[e + oe1[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, "margin" !== e && (w1.cssHooks[e + t].set = Ke);
    }), w1.fn.extend({
        css: function(e33, t14) {
            return z1(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for(r = $e(e), i = t.length; a < i; a++)o[t[a]] = w1.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? w1.style(e, t, n) : w1.css(e, t);
            }, e33, t14, arguments.length > 1);
        }
    });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    w1.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w1.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w1.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w1.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w1.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                w1.fx.step[e.prop] ? w1.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w1.cssProps[e.prop]] && !w1.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w1.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, w1.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, w1.fx = tt.prototype.init, w1.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;
    function at() {
        rt && (!1 === r1.hidden && e2.requestAnimationFrame ? e2.requestAnimationFrame(at) : e2.setTimeout(at, w1.fx.interval), w1.fx.tick());
    }
    function st() {
        return e2.setTimeout(function() {
            nt = void 0;
        }), nt = Date.now();
    }
    function ut(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for(t = t ? 1 : 0; r < 4; r += 2 - t)i["margin" + (n = oe1[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for(var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)if (r = i[o].call(n, t, e)) return r;
    }
    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae1(e), y = J1.get(e, "fxshow");
        n.queue || (null == (a = w1._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
            a.unqueued || s();
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, w1.queue(e, "fx").length || a.empty.fire();
            });
        }));
        for(r in t)if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0;
            }
            d[r] = y && y[r] || w1.style(e, r);
        }
        if ((u = !w1.isEmptyObject(t)) || !w1.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [
                h.overflow,
                h.overflowX,
                h.overflowY
            ], null == (l = y && y.display) && (l = J1.get(e, "display")), "none" === (c = w1.css(e, "display")) && (l ? c = l : (fe1([
                e
            ], !0), l = e.style.display || l, c = w1.css(e, "display"), fe1([
                e
            ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w1.css(e, "float") && (u || (p.done(function() {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;
            for(r in d)u || (y ? "hidden" in y && (g = y.hidden) : y = J1.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe1([
                e
            ], !0), p.done(function() {
                g || fe1([
                    e
                ]), J1.remove(e, "fxshow");
                for(r in d)w1.style(e, r, d[r]);
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for(n in e)if (r = G1(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w1.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for(n in o)n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function pt(e, t15, n12) {
        var r6, i, o7 = 0, a4 = pt.prefilters.length, s = w1.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for(var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)l.tweens[o].run(r);
            return s.notifyWith(e, [
                l,
                r,
                n
            ]), r < 1 && a ? n : (a || s.notifyWith(e, [
                l,
                1,
                0
            ]), s.resolveWith(e, [
                l
            ]), !1);
        }, l = s.promise({
            elem: e,
            props: w1.extend({}, t15),
            opts: w1.extend(!0, {
                specialEasing: {},
                easing: w1.easing._default
            }, n12),
            originalProperties: t15,
            originalOptions: n12,
            startTime: nt || st(),
            duration: n12.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = w1.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for(i = !0; n < r; n++)l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [
                    l,
                    1,
                    0
                ]), s.resolveWith(e, [
                    l,
                    t
                ])) : s.rejectWith(e, [
                    l,
                    t
                ]), this;
            }
        }), c = l.props;
        for(ft(c, l.opts.specialEasing); o7 < a4; o7++)if (r6 = pt.prefilters[o7].call(l, e, c, l.opts)) return g1(r6.stop) && (w1._queueHooks(l.elem, l.opts.queue).stop = r6.stop.bind(r6)), r6;
        return w1.map(c, lt, l), g1(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w1.fx.timer(w1.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    w1.Animation = w1.extend(pt, {
        tweeners: {
            "*": [
                function(e, t) {
                    var n = this.createTween(e, t);
                    return ue1(n.elem, e, ie1.exec(t), n), n;
                }
            ]
        },
        tweener: function(e, t) {
            g1(e) ? (t = e, e = [
                "*"
            ]) : e = e.match(M1);
            for(var n, r = 0, i = e.length; r < i; r++)n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
        },
        prefilters: [
            ct
        ],
        prefilter: function(e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        }
    }), w1.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? w1.extend({}, e) : {
            complete: n || !n && t || g1(e) && e,
            duration: e,
            easing: n && t || t && !g1(t) && t
        };
        return w1.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w1.fx.speeds ? r.duration = w1.fx.speeds[r.duration] : r.duration = w1.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            g1(r.old) && r.old.call(this), r.queue && w1.dequeue(this, r.queue);
        }, r;
    }, w1.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae1).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t16, n, r) {
            var i = w1.isEmptyObject(e), o = w1.speed(t16, n, r), a = function() {
                var t = pt(this, w1.extend({}, e), o);
                (i || J1.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e34, t17, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e34 && (n = t17, t17 = e34, e34 = void 0), t17 && !1 !== e34 && this.queue(e34 || "fx", []), this.each(function() {
                var t = !0, i = null != e34 && e34 + "queueHooks", o = w1.timers, a = J1.get(this);
                if (i) a[i] && a[i].stop && r(a[i]);
                else for(i in a)a[i] && a[i].stop && ot.test(i) && r(a[i]);
                for(i = o.length; i--;)o[i].elem !== this || null != e34 && o[i].queue !== e34 || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || w1.dequeue(this, e34);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = J1.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w1.timers, a = r ? r.length : 0;
                for(n.finish = !0, w1.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for(t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), w1.each([
        "toggle",
        "show",
        "hide"
    ], function(e35, t) {
        var n = w1.fn[t];
        w1.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
        };
    }), w1.each({
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e36, t) {
        w1.fn[e36] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), w1.timers = [], w1.fx.tick = function() {
        var e, t = 0, n = w1.timers;
        for(nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w1.fx.stop(), nt = void 0;
    }, w1.fx.timer = function(e) {
        w1.timers.push(e), w1.fx.start();
    }, w1.fx.interval = 13, w1.fx.start = function() {
        rt || (rt = !0, at());
    }, w1.fx.stop = function() {
        rt = null;
    }, w1.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, w1.fn.delay = function(t, n13) {
        return t = w1.fx ? w1.fx.speeds[t] || t : t, n13 = n13 || "fx", this.queue(n13, function(n, r) {
            var i = e2.setTimeout(n, t);
            r.stop = function() {
                e2.clearTimeout(i);
            };
        });
    }, function() {
        var e = r1.createElement("input"), t = r1.createElement("select").appendChild(r1.createElement("option"));
        e.type = "checkbox", h1.checkOn = "" !== e.value, h1.optSelected = t.selected, (e = r1.createElement("input")).value = "t", e.type = "radio", h1.radioValue = "t" === e.value;
    }();
    var dt, ht = w1.expr.attrHandle;
    w1.fn.extend({
        attr: function(e, t) {
            return z1(this, w1.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                w1.removeAttr(this, e);
            });
        }
    }), w1.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w1.prop(e, t, n) : (1 === o && w1.isXMLDoc(e) || (i = w1.attrHooks[t.toLowerCase()] || (w1.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w1.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w1.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h1.radioValue && "radio" === t && N1(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(M1);
            if (i && 1 === e.nodeType) while(n = i[r++])e.removeAttribute(n);
        }
    }), dt = {
        set: function(e, t, n) {
            return !1 === t ? w1.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, w1.each(w1.expr.match.bool.source.match(/\w+/g), function(e37, t18) {
        var n = ht[t18] || w1.find.attr;
        ht[t18] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
        };
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    w1.fn.extend({
        prop: function(e, t) {
            return z1(this, w1.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[w1.propFix[e] || e];
            });
        }
    }), w1.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w1.isXMLDoc(e) || (t = w1.propFix[t] || t, i = w1.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w1.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h1.optSelected || (w1.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), w1.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        w1.propFix[this.toLowerCase()] = this;
    });
    function vt(e) {
        return (e.match(M1) || []).join(" ");
    }
    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M1) || [] : [];
    }
    w1.fn.extend({
        addClass: function(e) {
            var t19, n, r, i, o, a, s, u = 0;
            if (g1(e)) return this.each(function(t) {
                w1(this).addClass(e.call(this, t, mt(this)));
            });
            if ((t19 = xt(e)).length) {
                while(n = this[u++])if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;
                    while(o = t19[a++])r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }
            return this;
        },
        removeClass: function(e) {
            var t20, n, r, i, o, a, s, u = 0;
            if (g1(e)) return this.each(function(t) {
                w1(this).removeClass(e.call(this, t, mt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t20 = xt(e)).length) {
                while(n = this[u++])if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                    a = 0;
                    while(o = t20[a++])while(r.indexOf(" " + o + " ") > -1)r = r.replace(" " + o + " ", " ");
                    i !== (s = vt(r)) && n.setAttribute("class", s);
                }
            }
            return this;
        },
        toggleClass: function(e, t21) {
            var n14 = typeof e, r = "string" === n14 || Array.isArray(e);
            return "boolean" == typeof t21 && r ? t21 ? this.addClass(e) : this.removeClass(e) : g1(e) ? this.each(function(n) {
                w1(this).toggleClass(e.call(this, n, mt(this), t21), t21);
            }) : this.each(function() {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w1(this), a = xt(e);
                    while(t = a[i++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                } else void 0 !== e && "boolean" !== n14 || ((t = mt(this)) && J1.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J1.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while(n = this[r++])if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var bt = /\r/g;
    w1.fn.extend({
        val: function(e38) {
            var t, n15, r, i9 = this[0];
            if (arguments.length) return r = g1(e38), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e38.call(this, n, w1(this).val()) : e38) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w1.map(i, function(e) {
                    return null == e ? "" : e + "";
                })), (t = w1.valHooks[this.type] || w1.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
            });
            if (i9) return (t = w1.valHooks[i9.type] || w1.valHooks[i9.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n15 = t.get(i9, "value")) ? n15 : "string" == typeof (n15 = i9.value) ? n15.replace(bt, "") : null == n15 ? "" : n15;
        }
    }), w1.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w1.find.attr(e, "value");
                    return null != t ? t : vt(w1.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for(r = o < 0 ? u : a ? o : 0; r < u; r++)if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N1(n.parentNode, "optgroup"))) {
                        if (t = w1(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = w1.makeArray(t), a = i.length;
                    while(a--)((r = i[a]).selected = w1.inArray(w1.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), w1.each([
        "radio",
        "checkbox"
    ], function() {
        w1.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = w1.inArray(w1(e).val(), t) > -1;
            }
        }, h1.checkOn || (w1.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), h1.focusin = "onfocusin" in e2;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function(e) {
        e.stopPropagation();
    };
    w1.extend(w1.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [
                i || r1
            ], m = f1.call(t, "type") ? t.type : t, x = f1.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r1, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w1.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w1.expando] ? t : new w1.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [
                t
            ] : w1.makeArray(n, [
                t
            ]), d = w1.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y1(i)) {
                    for(l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode)v.push(s), u = s;
                    u === (i.ownerDocument || r1) && v.push(u.defaultView || u.parentWindow || e2);
                }
                a = 0;
                while((s = v[a++]) && !t.isPropagationStopped())h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J1.get(s, "events") || {})[t.type] && J1.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y1(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y1(i) || c && g1(i[m]) && !y1(i) && ((u = i[c]) && (i[c] = null), w1.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w1.event.triggered = void 0, u && (i[c] = u)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var r = w1.extend(new w1.Event, n, {
                type: e,
                isSimulated: !0
            });
            w1.event.trigger(r, null, t);
        }
    }), w1.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                w1.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return w1.event.trigger(e, t, n, !0);
        }
    }), h1.focusin || w1.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e39, t) {
        var n = function(e) {
            w1.event.simulate(t, e.target, w1.event.fix(e));
        };
        w1.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this, i = J1.access(r, t);
                i || r.addEventListener(e39, n, !0), J1.access(r, t, (i || 0) + 1);
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = J1.access(r, t) - 1;
                i ? J1.access(r, t, i) : (r.removeEventListener(e39, n, !0), J1.remove(r, t));
            }
        };
    });
    var Ct = e2.location, Et = Date.now(), kt = /\?/;
    w1.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e2.DOMParser).parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || w1.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t22, n, r) {
        var i10;
        if (Array.isArray(t22)) w1.each(t22, function(t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
        });
        else if (n || "object" !== x1(t22)) r(e, t22);
        else for(i10 in t22)jt(e + "[" + i10 + "]", t22[i10], n, r);
    }
    w1.param = function(e40, t23) {
        var n16, r = [], i = function(e, t) {
            var n = g1(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (Array.isArray(e40) || e40.jquery && !w1.isPlainObject(e40)) w1.each(e40, function() {
            i(this.name, this.value);
        });
        else for(n16 in e40)jt(n16, e40[n16], t23, i);
        return r.join("&");
    }, w1.fn.extend({
        serialize: function() {
            return w1.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w1.prop(this, "elements");
                return e ? w1.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !w1(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe1.test(e));
            }).map(function(e41, t) {
                var n = w1(this).val();
                return null == n ? null : Array.isArray(n) ? w1.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                };
            }).get();
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {}, $t = "*/".concat("*"), Bt = r1.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(M1) || [];
            if (g1(n)) while(r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {}, o = e === Wt;
        function a(s3) {
            var u;
            return i[s3] = !0, w1.each(e[s3] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
            }), u;
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*");
    }
    function zt(e, t) {
        var n, r, i = w1.ajaxSettings.flatOptions || {};
        for(n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w1.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while("*" === u[0])u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) {
            for(i in s)if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break;
            }
        }
        if (u[0] in n) o = u[0];
        else {
            for(i in n){
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for(a in e.converters)l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while(o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) {
            if ("*" === o) o = u;
            else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) {
                    for(i in l)if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break;
                    }
                }
                if (!0 !== a) {
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t);
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + u + " to " + o
                        };
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    w1.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w1.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, w1.ajaxSettings), t) : zt(w1.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function(t24, n17) {
            "object" == typeof t24 && (n17 = t24, t24 = void 0), n17 = n17 || {};
            var i, o, a, s4, u, l4, c, f, p3, d3, h = w1.ajaxSetup({}, n17), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? w1(g) : w1.event, v = w1.Deferred(), m = w1.Callbacks("once memory"), x = h.statusCode || {}, b3 = {}, T3 = {}, C3 = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s4) {
                            s4 = {};
                            while(t = Ot.exec(a))s4[t[1].toLowerCase()] = t[2];
                        }
                        t = s4[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return c ? a : null;
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T3[e.toLowerCase()] = T3[e.toLowerCase()] || e, b3[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (c) E.always(e[E.status]);
                        else for(t in e)x[t] = [
                            x[t],
                            e[t]
                        ];
                    }
                    return this;
                },
                abort: function(e) {
                    var t = e || C3;
                    return i && i.abort(t), k(0, t), this;
                }
            };
            if (v.promise(E), h.url = ((t24 || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n17.method || n17.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M1) || [
                ""
            ], null == h.crossDomain) {
                l4 = r1.createElement("a");
                try {
                    l4.href = h.url, l4.href = l4.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l4.protocol + "//" + l4.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w1.param(h.data, h.traditional)), _t(It, h, n17, E), c) return E;
            (f = w1.event && h.global) && 0 == w1.active++ && w1.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d3 = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d3 = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d3), h.url = o + d3), h.ifModified && (w1.lastModified[o] && E.setRequestHeader("If-Modified-Since", w1.lastModified[o]), w1.etag[o] && E.setRequestHeader("If-None-Match", w1.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n17.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for(p3 in h.headers)E.setRequestHeader(p3, h.headers[p3]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C3 = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n17, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [
                    E,
                    h
                ]), c) return E;
                h.async && h.timeout > 0 && (u = e2.setTimeout(function() {
                    E.abort("timeout");
                }, h.timeout));
                try {
                    c = !1, i.send(b3, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e2.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w1.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w1.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [
                    p,
                    C,
                    E
                ]) : v.rejectWith(g, [
                    E,
                    C,
                    d
                ]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [
                    E,
                    h,
                    l ? p : d
                ]), m.fireWith(g, [
                    E,
                    C
                ]), f && (y.trigger("ajaxComplete", [
                    E,
                    h
                ]), --w1.active || w1.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function(e, t, n) {
            return w1.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return w1.get(e, void 0, t, "script");
        }
    }), w1.each([
        "get",
        "post"
    ], function(e42, t) {
        w1[t] = function(e, n, r, i) {
            return g1(n) && (i = i || r, r = n, n = void 0), w1.ajax(w1.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w1.isPlainObject(e) && e));
        };
    }), w1._evalUrl = function(e) {
        return w1.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        });
    }, w1.fn.extend({
        wrapAll: function(e43) {
            var t;
            return this[0] && (g1(e43) && (e43 = e43.call(this[0])), t = w1(e43, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while(e.firstElementChild)e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return g1(e) ? this.each(function(t) {
                w1(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = w1(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = g1(e);
            return this.each(function(n) {
                w1(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                w1(this).replaceWith(this.childNodes);
            }), this;
        }
    }), w1.expr.pseudos.hidden = function(e) {
        return !w1.expr.pseudos.visible(e);
    }, w1.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, w1.ajaxSettings.xhr = function() {
        try {
            return new e2.XMLHttpRequest;
        } catch (e) {}
    };
    var Vt = {
        0: 200,
        1223: 204
    }, Gt = w1.ajaxSettings.xhr();
    h1.cors = !!Gt && "withCredentials" in Gt, h1.ajax = Gt = !!Gt, w1.ajaxTransport(function(t) {
        var n, r;
        if (h1.cors || Gt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for(a in t.xhrFields)s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for(a in i)s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()));
                    };
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e2.setTimeout(function() {
                        n && r();
                    });
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), w1.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), w1.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return w1.globalEval(e), e;
            }
        }
    }), w1.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), w1.ajaxTransport("script", function(e44) {
        if (e44.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = w1("<script>").prop({
                        charset: e44.scriptCharset,
                        src: e44.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), r1.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    w1.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Yt.pop() || w1.expando + "_" + Et++;
            return this[e] = !0, e;
        }
    }), w1.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g1(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return a || w1.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e2[i], e2[i] = function() {
            a = arguments;
        }, r.always(function() {
            void 0 === o ? w1(e2).removeProp(i) : e2[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g1(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), h1.createHTMLDocument = function() {
        var e = r1.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), w1.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h1.createHTMLDocument ? ((i = (t = r1.implementation.createHTMLDocument("")).createElement("base")).href = r1.location.href, t.head.appendChild(i)) : t = r1), o = A1.exec(e), a = !n && [], o ? [
            t.createElement(o[1])
        ] : (o = xe1([
            e
        ], t, a), a && a.length && w1(a).remove(), w1.merge([], o.childNodes));
    }, w1.fn.load = function(e45, t25, n) {
        var r, i, o, a = this, s = e45.indexOf(" ");
        return s > -1 && (r = vt(e45.slice(s)), e45 = e45.slice(0, s)), g1(t25) ? (n = t25, t25 = void 0) : t25 && "object" == typeof t25 && (i = "POST"), a.length > 0 && w1.ajax({
            url: e45,
            type: i || "GET",
            dataType: "html",
            data: t25
        }).done(function(e) {
            o = arguments, a.html(r ? w1("<div>").append(w1.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [
                    e.responseText,
                    t,
                    e
                ]);
            });
        }), this;
    }, w1.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(e46, t) {
        w1.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), w1.expr.pseudos.animated = function(e) {
        return w1.grep(w1.timers, function(t) {
            return e === t.elem;
        }).length;
    }, w1.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = w1.css(e, "position"), f = w1(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w1.css(e, "top"), u = w1.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g1(t) && (t = t.call(e, n, w1.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        }
    }, w1.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                w1.offset.setOffset(this, e, t);
            });
            var t26, n, r = this[0];
            if (r) return r.getClientRects().length ? (t26 = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t26.top + n.pageYOffset,
                left: t26.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === w1.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while(e && (e === n.body || e === n.documentElement) && "static" === w1.css(e, "position"))e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w1(e).offset()).top += w1.css(e, "borderTopWidth", !0), i.left += w1.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - i.top - w1.css(r, "marginTop", !0),
                    left: t.left - i.left - w1.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while(e && "static" === w1.css(e, "position"))e = e.offsetParent;
                return e || be1;
            });
        }
    }), w1.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e47, t) {
        var n = "pageYOffset" === t;
        w1.fn[e47] = function(r7) {
            return z1(this, function(e, r, i) {
                var o;
                if (y1(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e47, r7, arguments.length);
        };
    }), w1.each([
        "top",
        "left"
    ], function(e48, t) {
        w1.cssHooks[t] = _e(h1.pixelPosition, function(e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w1(e).position()[t] + "px" : n;
        });
    }), w1.each({
        Height: "height",
        Width: "width"
    }, function(e, t27) {
        w1.each({
            padding: "inner" + e,
            content: t27,
            "": "outer" + e
        }, function(n18, r) {
            w1.fn[r] = function(i11, o8) {
                var a = arguments.length && (n18 || "boolean" != typeof i11), s = n18 || (!0 === i11 || !0 === o8 ? "margin" : "border");
                return z1(this, function(t, n, i) {
                    var o;
                    return y1(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w1.css(t, n, s) : w1.style(t, n, i, s);
                }, t27, a ? i11 : void 0, a);
            };
        });
    }), w1.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e49, t) {
        w1.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), w1.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), w1.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), w1.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g1(e)) return r = o1.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(o1.call(arguments)));
        }, i.guid = e.guid = e.guid || w1.guid++, i;
    }, w1.holdReady = function(e) {
        e ? w1.readyWait++ : w1.ready(!0);
    }, w1.isArray = Array.isArray, w1.parseJSON = JSON.parse, w1.nodeName = N1, w1.isFunction = g1, w1.isWindow = y1, w1.camelCase = G1, w1.type = x1, w1.now = Date.now, w1.isNumeric = function(e) {
        var t = w1.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return w1;
    });
    var Jt = e2.jQuery, Kt = e2.$;
    return w1.noConflict = function(t) {
        return e2.$ === w1 && (e2.$ = Kt), t && e2.jQuery === w1 && (e2.jQuery = Jt), w1;
    }, t1 || (e2.jQuery = e2.$ = w1), w1;
});

//# sourceMappingURL=index.dabf45f4.js.map
