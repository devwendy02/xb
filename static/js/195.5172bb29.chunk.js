/*! For license information please see 195.5172bb29.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkbridge = self.webpackChunkbridge || []).push([
    [195], {
        13195: function(e, t, n) {
            n.r(t), n.d(t, {
                EthereumProvider: function() {
                    return Ta
                },
                OPTIONAL_EVENTS: function() {
                    return wa
                },
                OPTIONAL_METHODS: function() {
                    return ma
                },
                REQUIRED_EVENTS: function() {
                    return ba
                },
                REQUIRED_METHODS: function() {
                    return ya
                },
                default: function() {
                    return Aa
                }
            });
            var r = n(29439),
                i = n(74165),
                s = n(15861),
                a = n(15671),
                o = n(43144),
                c = n(93433),
                u = n(4942),
                p = n(37762),
                l = n(68041),
                f = n.n(l),
                h = n(74533),
                d = n(81791),
                v = n(14701),
                g = n(49900),
                y = n(23539),
                m = n(91696),
                b = n(90876),
                w = n(93659),
                x = n(38783),
                _ = n(55210),
                k = n(31172),
                Z = n(10947),
                E = n(7490),
                I = ":";

            function P(e) {
                var t = e.split(I),
                    n = (0, r.Z)(t, 2);
                return {
                    namespace: n[0],
                    reference: n[1]
                }
            }

            function S(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = [];
                return Object.keys(e).forEach((function(r) {
                    if (!t.length || t.includes(r)) {
                        var i = e[r];
                        n.push.apply(n, (0, c.Z)(i.accounts))
                    }
                })), n
            }

            function R(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            var O = "base10",
                C = "base16",
                N = "base64pad",
                A = "utf8",
                T = 0,
                D = 1,
                q = 0,
                j = 1,
                U = 12,
                L = 32;

            function M() {
                var e = (0, v.randomBytes)(L);
                return (0, m.BB)(e, C)
            }

            function z(e) {
                var t = (0, g.vp)((0, m.mL)(e, C));
                return (0, m.BB)(t, C)
            }

            function V(e) {
                var t = (0, g.vp)((0, m.mL)(e, A));
                return (0, m.BB)(t, C)
            }

            function K(e) {
                return Number((0, m.BB)(e, O))
            }

            function H(e) {
                var t = function(e) {
                    return (0, m.mL)("".concat(e), O)
                }(typeof e.type < "u" ? e.type : T);
                if (K(t) === D && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                var n = typeof e.senderPublicKey < "u" ? (0, m.mL)(e.senderPublicKey, C) : void 0,
                    r = typeof e.iv < "u" ? (0, m.mL)(e.iv, C) : (0, v.randomBytes)(U);
                return function(e) {
                    if (K(e.type) === D) {
                        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
                        return (0, m.BB)((0, m.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), N)
                    }
                    return (0, m.BB)((0, m.zo)([e.type, e.iv, e.sealed]), N)
                }({
                    type: t,
                    sealed: new h.OK((0, m.mL)(e.symKey, C)).seal(r, (0, m.mL)(e.message, A)),
                    iv: r,
                    senderPublicKey: n
                })
            }

            function B(e) {
                var t = new h.OK((0, m.mL)(e.symKey, C)),
                    n = F(e.encoded),
                    r = n.sealed,
                    i = n.iv,
                    s = t.open(i, r);
                if (null === s) throw new Error("Failed to decrypt");
                return (0, m.BB)(s, A)
            }

            function F(e) {
                var t = (0, m.mL)(e, N),
                    n = t.slice(q, j),
                    r = j;
                if (K(n) === D) {
                    var i = r + L,
                        s = i + U,
                        a = t.slice(r, i),
                        o = t.slice(i, s);
                    return {
                        type: n,
                        sealed: t.slice(s),
                        iv: o,
                        senderPublicKey: a
                    }
                }
                var c = r + U,
                    u = t.slice(r, c);
                return {
                    type: n,
                    sealed: t.slice(c),
                    iv: u
                }
            }

            function G(e, t) {
                var n = F(e);
                return J({
                    type: K(n.type),
                    senderPublicKey: typeof n.senderPublicKey < "u" ? (0, m.BB)(n.senderPublicKey, C) : void 0,
                    receiverPublicKey: null === t || void 0 === t ? void 0 : t.receiverPublicKey
                })
            }

            function J(e) {
                var t = (null === e || void 0 === e ? void 0 : e.type) || T;
                if (t === D) {
                    if (typeof(null === e || void 0 === e ? void 0 : e.senderPublicKey) > "u") throw new Error("missing sender public key");
                    if (typeof(null === e || void 0 === e ? void 0 : e.receiverPublicKey) > "u") throw new Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: null === e || void 0 === e ? void 0 : e.senderPublicKey,
                    receiverPublicKey: null === e || void 0 === e ? void 0 : e.receiverPublicKey
                }
            }

            function W(e) {
                return e.type === D && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var Q = Object.defineProperty,
                Y = Object.getOwnPropertySymbols,
                $ = Object.prototype.hasOwnProperty,
                X = Object.prototype.propertyIsEnumerable,
                ee = function(e, t, n) {
                    return t in e ? Q(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                te = function(e, t) {
                    for (var n in t || (t = {})) $.call(t, n) && ee(e, n, t[n]);
                    if (Y) {
                        var r, i = (0, p.Z)(Y(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                X.call(t, n) && ee(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                ne = "ReactNative",
                re = {
                    reactNative: "react-native",
                    node: "node",
                    browser: "browser",
                    unknown: "unknown"
                },
                ie = "js";

            function se() {
                return typeof E < "u" && typeof E.versions < "u" && typeof E.versions.node < "u"
            }

            function ae() {
                return !(0, x.getDocument)() && !!(0, x.getNavigator)() && navigator.product === ne
            }

            function oe() {
                return !se() && !!(0, x.getNavigator)()
            }

            function ce() {
                return ae() ? re.reactNative : se() ? re.node : oe() ? re.browser : re.unknown
            }

            function ue(e, t, r) {
                var i = function() {
                        if (ce() === re.reactNative && typeof n.g < "u" && typeof(null == n.g ? void 0 : n.g.Platform) < "u") {
                            var e = n.g.Platform;
                            return [e.OS, e.Version].join("-")
                        }
                        var t = (0, b.qY)();
                        if (null === t) return "unknown";
                        var r = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
                        return "browser" === t.type ? [r, t.name, t.version].join("-") : [r, t.version].join("-")
                    }(),
                    s = function() {
                        var e, t = ce();
                        return t === re.browser ? [t, (null == (e = (0, x.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                    }();
                return [
                    [e, t].join("-"), [ie, r].join("-"), i, s
                ].join("/")
            }

            function pe(e) {
                var t = e.protocol,
                    n = e.version,
                    r = e.relayUrl,
                    i = e.sdkVersion,
                    s = e.auth,
                    a = e.projectId,
                    o = e.useOnCloseEvent,
                    c = r.split("?"),
                    u = {
                        auth: s,
                        ua: ue(t, n, i),
                        projectId: a,
                        useOnCloseEvent: o || void 0
                    },
                    p = function(e, t) {
                        var n = k.parse(e);
                        return n = te(te({}, n), t), k.stringify(n)
                    }(c[1] || "", u);
                return c[0] + "?" + p
            }

            function le(e, t) {
                return e.filter((function(e) {
                    return t.includes(e)
                })).length === e.length
            }

            function fe(e) {
                return Object.fromEntries(e.entries())
            }

            function he(e) {
                return new Map(Object.entries(e))
            }

            function de() {
                var e, t, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.FIVE_MINUTES,
                    i = arguments.length > 1 ? arguments[1] : void 0,
                    s = (0, w.toMiliseconds)(r || w.FIVE_MINUTES);
                return {
                    resolve: function(t) {
                        n && e && (clearTimeout(n), e(t))
                    },
                    reject: function(e) {
                        n && t && (clearTimeout(n), t(e))
                    },
                    done: function() {
                        return new Promise((function(r, a) {
                            n = setTimeout((function() {
                                a(new Error(i))
                            }), s), e = r, t = a
                        }))
                    }
                }
            }

            function ve(e, t, n) {
                return new Promise(function() {
                    var r = (0, s.Z)((0, i.Z)().mark((function r(s, a) {
                        var o, c;
                        return (0, i.Z)().wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return o = setTimeout((function() {
                                        return a(new Error(n))
                                    }), t), r.prev = 1, r.next = 4, e;
                                case 4:
                                    c = r.sent, s(c), r.next = 11;
                                    break;
                                case 8:
                                    r.prev = 8, r.t0 = r.catch(1), a(r.t0);
                                case 11:
                                    clearTimeout(o);
                                case 12:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [1, 8]
                        ])
                    })));
                    return function(e, t) {
                        return r.apply(this, arguments)
                    }
                }())
            }

            function ge(e, t) {
                if ("string" == typeof t && t.startsWith("".concat(e, ":"))) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw new Error('Value must be "string" for expirer target type: topic');
                    return "topic:".concat(t)
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw new Error('Value must be "number" for expirer target type: id');
                    return "id:".concat(t)
                }
                throw new Error("Unknown expirer target type: ".concat(e))
            }

            function ye(e) {
                var t = e.split(":"),
                    n = (0, r.Z)(t, 2),
                    i = n[0],
                    s = n[1],
                    a = {
                        id: void 0,
                        topic: void 0
                    };
                if ("topic" === i && "string" == typeof s) a.topic = s;
                else {
                    if ("id" !== i || !Number.isInteger(Number(s))) throw new Error("Invalid target, expected id:number or topic:string, got ".concat(i, ":").concat(s));
                    a.id = Number(s)
                }
                return a
            }

            function me(e, t) {
                return (0, w.fromMiliseconds)((t || Date.now()) + (0, w.toMiliseconds)(e))
            }

            function be(e) {
                return Date.now() >= (0, w.toMiliseconds)(e)
            }

            function we(e, t) {
                return "".concat(e).concat(t ? ":".concat(t) : "")
            }

            function xe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return (0, c.Z)(new Set([].concat((0, c.Z)(e), (0, c.Z)(t))))
            }

            function _e(e) {
                return ke.apply(this, arguments)
            }

            function ke() {
                return ke = (0, s.Z)((0, i.Z)().mark((function e(t) {
                    var r, s, a, o, c, u, p;
                    return (0, i.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (r = t.id, s = t.topic, a = t.wcDeepLink, e.prev = 1, a) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return");
                            case 4:
                                if (o = "string" == typeof a ? JSON.parse(a) : a, "string" == typeof(c = null === o || void 0 === o ? void 0 : o.href)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return");
                            case 8:
                                if (c.endsWith("/") && (c = c.slice(0, -1)), u = "".concat(c, "/wc?requestId=").concat(r, "&sessionTopic=").concat(s), (p = ce()) !== re.browser) {
                                    e.next = 14;
                                    break
                                }
                                u.startsWith("https://") ? window.open(u, "_blank", "noreferrer noopener") : window.open(u, "_self", "noreferrer noopener"), e.next = 18;
                                break;
                            case 14:
                                if (e.t0 = p === re.reactNative && typeof(null == n.g ? void 0 : n.g.Linking) < "u", !e.t0) {
                                    e.next = 18;
                                    break
                                }
                                return e.next = 18, n.g.Linking.openURL(u);
                            case 18:
                                e.next = 23;
                                break;
                            case 20:
                                e.prev = 20, e.t1 = e.catch(1), console.error(e.t1);
                            case 23:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 20]
                    ])
                }))), ke.apply(this, arguments)
            }

            function Ze(e) {
                return (null === e || void 0 === e ? void 0 : e.relay) || {
                    protocol: "irn"
                }
            }

            function Ee(e) {
                var t = Z.RELAY_JSONRPC[e];
                if (typeof t > "u") throw new Error("Relay Protocol not supported: ".concat(e));
                return t
            }
            var Ie = Object.defineProperty,
                Pe = Object.getOwnPropertySymbols,
                Se = Object.prototype.hasOwnProperty,
                Re = Object.prototype.propertyIsEnumerable,
                Oe = function(e, t, n) {
                    return t in e ? Ie(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                };

            function Ce(e) {
                var t = {},
                    n = "relay" + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-");
                return Object.keys(e).forEach((function(r) {
                    if (r.startsWith(n)) {
                        var i = r.replace(n, ""),
                            s = e[r];
                        t[i] = s
                    }
                })), t
            }

            function Ne(e) {
                var t = e.indexOf(":"),
                    n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    r = e.substring(0, t),
                    i = e.substring(t + 1, n).split("@"),
                    s = typeof n < "u" ? e.substring(n) : "",
                    a = k.parse(s);
                return {
                    protocol: r,
                    topic: Ae(i[0]),
                    version: parseInt(i[1], 10),
                    symKey: a.symKey,
                    relay: Ce(a)
                }
            }

            function Ae(e) {
                return e.startsWith("//") ? e.substring(2) : e
            }

            function Te(e) {
                return "".concat(e.protocol, ":").concat(e.topic, "@").concat(e.version, "?") + k.stringify(function(e, t) {
                    for (var n in t || (t = {})) Se.call(t, n) && Oe(e, n, t[n]);
                    if (Pe) {
                        var r, i = (0, p.Z)(Pe(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) n = r.value, Re.call(t, n) && Oe(e, n, t[n])
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                }({
                    symKey: e.symKey
                }, function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                        n = {};
                    return Object.keys(e).forEach((function(r) {
                        var i = "relay" + t + r;
                        e[r] && (n[i] = e[r])
                    })), n
                }(e.relay)))
            }
            Object.defineProperty, Object.defineProperties, Object.getOwnPropertyDescriptors, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

            function De(e) {
                var t = [];
                return e.forEach((function(e) {
                    var n = e.split(":"),
                        i = (0, r.Z)(n, 2),
                        s = i[0],
                        a = i[1];
                    t.push("".concat(s, ":").concat(a))
                })), t
            }

            function qe(e, t) {
                var n = tt(e, t);
                if (n) throw new Error(n.message);
                for (var i = {}, s = 0, a = Object.entries(e); s < a.length; s++) {
                    var o = (0, r.Z)(a[s], 2),
                        c = o[0],
                        u = o[1];
                    i[c] = {
                        methods: u.methods,
                        events: u.events,
                        chains: u.accounts.map((function(e) {
                            return "".concat(e.split(":")[0], ":").concat(e.split(":")[1])
                        }))
                    }
                }
                return i
            }

            function je(e) {
                return e.includes(":")
            }

            function Ue(e) {
                return je(e) ? e.split(":")[0] : e
            }
            var Le = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                Me = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function ze(e, t) {
                var n = Me[e],
                    r = n.message,
                    i = n.code;
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: i
                }
            }

            function Ve(e, t) {
                var n = Le[e],
                    r = n.message,
                    i = n.code;
                return {
                    message: t ? "".concat(r, " ").concat(t) : r,
                    code: i
                }
            }

            function Ke(e, t) {
                return !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
            }

            function He(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function Be(e) {
                return typeof e > "u"
            }

            function Fe(e, t) {
                return !(!t || !Be(e)) || "string" == typeof e && !!e.trim().length
            }

            function Ge(e, t) {
                return !(!t || !Be(e)) || "number" == typeof e && !isNaN(e)
            }

            function Je(e) {
                return !(!Fe(e, !1) || !e.includes(":")) && 2 === e.split(":").length
            }

            function We(e) {
                var t;
                return null == (t = null === e || void 0 === e ? void 0 : e.proposer) ? void 0 : t.publicKey
            }

            function Qe(e) {
                return null === e || void 0 === e ? void 0 : e.topic
            }

            function Ye(e) {
                var t = !0;
                return Ke(e) ? e.length && (t = e.every((function(e) {
                    return Fe(e, !1)
                }))) : t = !1, t
            }

            function $e(e, t, n) {
                var i = null;
                return Object.entries(e).forEach((function(e) {
                    var s = (0, r.Z)(e, 2),
                        a = s[0],
                        o = s[1];
                    if (!i) {
                        var c = function(e, t, n) {
                            var r = null;
                            return Ke(t) && t.length ? t.forEach((function(e) {
                                r || Je(e) || (r = Ve("UNSUPPORTED_CHAINS", "".concat(n, ", chain ").concat(e, ' should be a string and conform to "namespace:chainId" format')))
                            })) : Je(e) || (r = Ve("UNSUPPORTED_CHAINS", "".concat(n, ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'))), r
                        }(a, R(a, o), "".concat(t, " ").concat(n));
                        c && (i = c)
                    }
                })), i
            }

            function Xe(e, t) {
                var n = null;
                return Ke(e) ? e.forEach((function(e) {
                    n || function(e) {
                        if (Fe(e, !1) && e.includes(":")) {
                            var t = e.split(":");
                            if (3 === t.length) {
                                var n = t[0] + ":" + t[1];
                                return !!t[2] && Je(n)
                            }
                        }
                        return !1
                    }(e) || (n = Ve("UNSUPPORTED_ACCOUNTS", "".concat(t, ", account ").concat(e, ' should be a string and conform to "namespace:chainId:address" format')))
                })) : n = Ve("UNSUPPORTED_ACCOUNTS", "".concat(t, ', accounts should be an array of strings conforming to "namespace:chainId:address" format')), n
            }

            function et(e, t) {
                var n = null;
                return Object.values(e).forEach((function(e) {
                    if (!n) {
                        var r = function(e, t) {
                            var n = null;
                            return Ye(null === e || void 0 === e ? void 0 : e.methods) ? Ye(null === e || void 0 === e ? void 0 : e.events) || (n = Ve("UNSUPPORTED_EVENTS", "".concat(t, ", events should be an array of strings or empty array for no events"))) : n = Ve("UNSUPPORTED_METHODS", "".concat(t, ", methods should be an array of strings or empty array for no methods")), n
                        }(e, "".concat(t, ", namespace"));
                        r && (n = r)
                    }
                })), n
            }

            function tt(e, t) {
                var n = null;
                if (e && He(e)) {
                    var r = et(e, t);
                    r && (n = r);
                    var i = function(e, t) {
                        var n = null;
                        return Object.values(e).forEach((function(e) {
                            if (!n) {
                                var r = Xe(null === e || void 0 === e ? void 0 : e.accounts, "".concat(t, " namespace"));
                                r && (n = r)
                            }
                        })), n
                    }(e, t);
                    i && (n = i)
                } else n = ze("MISSING_OR_INVALID", "".concat(t, ", namespaces should be an object with data"));
                return n
            }

            function nt(e) {
                return Fe(e.protocol, !0)
            }

            function rt(e, t) {
                var n = !1;
                return t && !e ? n = !0 : e && Ke(e) && e.length && e.forEach((function(e) {
                    n = nt(e)
                })), n
            }

            function it(e) {
                return "number" == typeof e
            }

            function st(e) {
                return typeof e < "u" && null !== typeof e
            }

            function at(e) {
                return !(!e || "object" != typeof e || !e.code || !Ge(e.code, !1) || !e.message || !Fe(e.message, !1))
            }

            function ot(e) {
                return !(Be(e) || !Fe(e.method, !1))
            }

            function ct(e) {
                return !(Be(e) || Be(e.result) && Be(e.error) || !Ge(e.id, !1) || !Fe(e.jsonrpc, !1))
            }

            function ut(e) {
                return !(Be(e) || !Fe(e.name, !1))
            }

            function pt(e, t) {
                return !(!Je(t) || ! function(e) {
                    var t = [];
                    return Object.values(e).forEach((function(e) {
                        t.push.apply(t, (0, c.Z)(De(e.accounts)))
                    })), t
                }(e).includes(t))
            }

            function lt(e, t, n) {
                return !!Fe(n, !1) && function(e, t) {
                    var n = [];
                    return Object.values(e).forEach((function(e) {
                        De(e.accounts).includes(t) && n.push.apply(n, (0, c.Z)(e.methods))
                    })), n
                }(e, t).includes(n)
            }

            function ft(e, t, n) {
                return !!Fe(n, !1) && function(e, t) {
                    var n = [];
                    return Object.values(e).forEach((function(e) {
                        De(e.accounts).includes(t) && n.push.apply(n, (0, c.Z)(e.events))
                    })), n
                }(e, t).includes(n)
            }

            function ht(e, t, n) {
                var r = null,
                    i = function(e) {
                        var t = {};
                        return Object.keys(e).forEach((function(n) {
                            var r;
                            n.includes(":") ? t[n] = e[n] : null == (r = e[n].chains) || r.forEach((function(r) {
                                t[r] = {
                                    methods: e[n].methods,
                                    events: e[n].events
                                }
                            }))
                        })), t
                    }(e),
                    s = function(e) {
                        var t = {};
                        return Object.keys(e).forEach((function(n) {
                            if (n.includes(":")) t[n] = e[n];
                            else {
                                var r = De(e[n].accounts);
                                null === r || void 0 === r || r.forEach((function(r) {
                                    t[r] = {
                                        accounts: e[n].accounts.filter((function(e) {
                                            return e.includes("".concat(r, ":"))
                                        })),
                                        methods: e[n].methods,
                                        events: e[n].events
                                    }
                                }))
                            }
                        })), t
                    }(t),
                    a = Object.keys(i),
                    o = Object.keys(s),
                    c = dt(Object.keys(e)),
                    u = dt(Object.keys(t)),
                    p = c.filter((function(e) {
                        return !u.includes(e)
                    }));
                return p.length && (r = ze("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces keys don't satisfy requiredNamespaces.\n      Required: ").concat(p.toString(), "\n      Received: ").concat(Object.keys(t).toString()))), le(a, o) || (r = ze("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces chains don't satisfy required namespaces.\n      Required: ").concat(a.toString(), "\n      Approved: ").concat(o.toString()))), Object.keys(t).forEach((function(e) {
                    if (e.includes(":") && !r) {
                        var i = De(t[e].accounts);
                        i.includes(e) || (r = ze("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces accounts don't satisfy namespace accounts for ").concat(e, "\n        Required: ").concat(e, "\n        Approved: ").concat(i.toString())))
                    }
                })), a.forEach((function(e) {
                    r || (le(i[e].methods, s[e].methods) ? le(i[e].events, s[e].events) || (r = ze("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces events don't satisfy namespace events for ").concat(e))) : r = ze("NON_CONFORMING_NAMESPACES", "".concat(n, " namespaces methods don't satisfy namespace methods for ").concat(e)))
                })), r
            }

            function dt(e) {
                return (0, c.Z)(new Set(e.map((function(e) {
                    return e.includes(":") ? e.split(":")[0] : e
                }))))
            }

            function vt(e, t) {
                return Ge(e, !1) && e <= t.max && e >= t.min
            }

            function gt() {
                var e = ce();
                return new Promise((function(t) {
                    switch (e) {
                        case re.browser:
                            t(function() {
                                var e;
                                return oe() && (null === (e = navigator) || void 0 === e ? void 0 : e.onLine)
                            }());
                            break;
                        case re.reactNative:
                            t(function() {
                                return yt.apply(this, arguments)
                            }());
                            break;
                        case re.node:
                        default:
                            t(!0)
                    }
                }))
            }

            function yt() {
                return (yt = (0, s.Z)((0, i.Z)().mark((function e() {
                    var t;
                    return (0, i.Z)().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(ae() && typeof n.g < "u" && null != n.g && n.g.NetInfo)) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, null == n.g ? void 0 : n.g.NetInfo.fetch();
                            case 3:
                                return t = e.sent, e.abrupt("return", null === t || void 0 === t ? void 0 : t.isConnected);
                            case 5:
                                return e.abrupt("return", !0);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function mt(e) {
                switch (ce()) {
                    case re.browser:
                        ! function(e) {
                            !ae() && oe() && (window.addEventListener("online", (function() {
                                return e(!0)
                            })), window.addEventListener("offline", (function() {
                                return e(!1)
                            })))
                        }(e);
                        break;
                    case re.reactNative:
                        ! function(e) {
                            var t;
                            ae() && typeof n.g < "u" && null != n.g && n.g.NetInfo && (null === (t = n.g) || void 0 === t || t.NetInfo.addEventListener((function(t) {
                                return e(null === t || void 0 === t ? void 0 : t.isConnected)
                            })))
                        }(e);
                    case re.node:
                }
            }
            var bt = {},
                wt = function() {
                    function e() {
                        (0, a.Z)(this, e)
                    }
                    return (0, o.Z)(e, null, [{
                        key: "get",
                        value: function(e) {
                            return bt[e]
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            bt[e] = t
                        }
                    }, {
                        key: "delete",
                        value: function(e) {
                            delete bt[e]
                        }
                    }]), e
                }(),
                xt = n(97326),
                _t = n(60136),
                kt = n(29388),
                Zt = n(1413),
                Et = n(60074),
                It = n(1345),
                Pt = n(91451),
                St = n(23375),
                Rt = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e) {
                        var r;
                        return (0, a.Z)(this, n), (r = t.call(this)).opts = e, r.protocol = "wc", r.version = 2, r
                    }
                    return (0, o.Z)(n)
                }(St.q),
                Ot = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var i;
                        return (0, a.Z)(this, n), (i = t.call(this)).core = e, i.logger = r, i.records = new Map, i
                    }
                    return (0, o.Z)(n)
                }(St.q),
                Ct = (0, o.Z)((function e(t, n) {
                    (0, a.Z)(this, e), this.logger = t, this.core = n
                })),
                Nt = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var i;
                        return (0, a.Z)(this, n), (i = t.call(this)).relayer = e, i.logger = r, i
                    }
                    return (0, o.Z)(n)
                }(St.q),
                At = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e) {
                        return (0, a.Z)(this, n), t.call(this)
                    }
                    return (0, o.Z)(n)
                }(St.q),
                Tt = (0, o.Z)((function e(t, n, r, i) {
                    (0, a.Z)(this, e), this.core = t, this.logger = n, this.name = r
                })),
                Dt = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var i;
                        return (0, a.Z)(this, n), (i = t.call(this)).relayer = e, i.logger = r, i
                    }
                    return (0, o.Z)(n)
                }(St.q),
                qt = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var i;
                        return (0, a.Z)(this, n), (i = t.call(this)).core = e, i.logger = r, i
                    }
                    return (0, o.Z)(n)
                }(St.q),
                jt = (0, o.Z)((function e(t, n) {
                    (0, a.Z)(this, e), this.projectId = t, this.logger = n
                })),
                Ut = (0, o.Z)((function e(t) {
                    (0, a.Z)(this, e), this.opts = t, this.protocol = "wc", this.version = 2
                })),
                Lt = (0, o.Z)((function e(t) {
                    (0, a.Z)(this, e), this.client = t
                })),
                Mt = n(76090),
                zt = n(15650),
                Vt = n(13730),
                Kt = n(31567),
                Ht = n(13970),
                Bt = n(23108),
                Ft = n.n(Bt);
            var Gt = function(e, t) {
                    if (e.length >= 255) throw new TypeError("Alphabet too long");
                    for (var n = new Uint8Array(256), r = 0; r < n.length; r++) n[r] = 255;
                    for (var i = 0; i < e.length; i++) {
                        var s = e.charAt(i),
                            a = s.charCodeAt(0);
                        if (255 !== n[a]) throw new TypeError(s + " is ambiguous");
                        n[a] = i
                    }
                    var o = e.length,
                        c = e.charAt(0),
                        u = Math.log(o) / Math.log(256),
                        p = Math.log(256) / Math.log(o);

                    function l(e) {
                        if ("string" != typeof e) throw new TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[t]) {
                            for (var r = 0, i = 0; e[t] === c;) r++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, a = new Uint8Array(s); e[t];) {
                                var p = n[e.charCodeAt(t)];
                                if (255 === p) return;
                                for (var l = 0, f = s - 1;
                                    (0 !== p || l < i) && -1 !== f; f--, l++) p += o * a[f] >>> 0, a[f] = p % 256 >>> 0, p = p / 256 >>> 0;
                                if (0 !== p) throw new Error("Non-zero carry");
                                i = l, t++
                            }
                            if (" " !== e[t]) {
                                for (var h = s - i; h !== s && 0 === a[h];) h++;
                                for (var d = new Uint8Array(r + (s - h)), v = r; h !== s;) d[v++] = a[h++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var n = 0, r = 0, i = 0, s = t.length; i !== s && 0 === t[i];) i++, n++;
                            for (var a = (s - i) * p + 1 >>> 0, u = new Uint8Array(a); i !== s;) {
                                for (var l = t[i], f = 0, h = a - 1;
                                    (0 !== l || f < r) && -1 !== h; h--, f++) l += 256 * u[h] >>> 0, u[h] = l % o >>> 0, l = l / o >>> 0;
                                if (0 !== l) throw new Error("Non-zero carry");
                                r = f, i++
                            }
                            for (var d = a - r; d !== a && 0 === u[d];) d++;
                            for (var v = c.repeat(n); d < a; ++d) v += e.charAt(u[d]);
                            return v
                        },
                        decodeUnsafe: l,
                        decode: function(e) {
                            var n = l(e);
                            if (n) return n;
                            throw new Error("Non-".concat(t, " character"))
                        }
                    }
                },
                Jt = Gt,
                Wt = function(e) {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw new Error("Unknown type, must be binary type")
                },
                Qt = function() {
                    function e(t, n, r) {
                        (0, a.Z)(this, e), this.name = t, this.prefix = n, this.baseEncode = r
                    }
                    return (0, o.Z)(e, [{
                        key: "encode",
                        value: function(e) {
                            if (e instanceof Uint8Array) return "".concat(this.prefix).concat(this.baseEncode(e));
                            throw Error("Unknown type, must be binary type")
                        }
                    }]), e
                }(),
                Yt = function() {
                    function e(t, n, r) {
                        if ((0, a.Z)(this, e), this.name = t, this.prefix = n, void 0 === n.codePointAt(0)) throw new Error("Invalid prefix character");
                        this.prefixCodePoint = n.codePointAt(0), this.baseDecode = r
                    }
                    return (0, o.Z)(e, [{
                        key: "decode",
                        value: function(e) {
                            if ("string" == typeof e) {
                                if (e.codePointAt(0) !== this.prefixCodePoint) throw Error("Unable to decode multibase string ".concat(JSON.stringify(e), ", ").concat(this.name, " decoder only supports inputs prefixed with ").concat(this.prefix));
                                return this.baseDecode(e.slice(this.prefix.length))
                            }
                            throw Error("Can only multibase decode strings")
                        }
                    }, {
                        key: "or",
                        value: function(e) {
                            return Xt(this, e)
                        }
                    }]), e
                }(),
                $t = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.decoders = t
                    }
                    return (0, o.Z)(e, [{
                        key: "or",
                        value: function(e) {
                            return Xt(this, e)
                        }
                    }, {
                        key: "decode",
                        value: function(e) {
                            var t = e[0],
                                n = this.decoders[t];
                            if (n) return n.decode(e);
                            throw RangeError("Unable to decode multibase string ".concat(JSON.stringify(e), ", only inputs prefixed with ").concat(Object.keys(this.decoders), " are supported"))
                        }
                    }]), e
                }(),
                Xt = function(e, t) {
                    return new $t((0, Zt.Z)((0, Zt.Z)({}, e.decoders || (0, u.Z)({}, e.prefix, e)), t.decoders || (0, u.Z)({}, t.prefix, t)))
                },
                en = function() {
                    function e(t, n, r, i) {
                        (0, a.Z)(this, e), this.name = t, this.prefix = n, this.baseEncode = r, this.baseDecode = i, this.encoder = new Qt(t, n, r), this.decoder = new Yt(t, n, i)
                    }
                    return (0, o.Z)(e, [{
                        key: "encode",
                        value: function(e) {
                            return this.encoder.encode(e)
                        }
                    }, {
                        key: "decode",
                        value: function(e) {
                            return this.decoder.decode(e)
                        }
                    }]), e
                }(),
                tn = function(e) {
                    var t = e.name,
                        n = e.prefix,
                        r = e.encode,
                        i = e.decode;
                    return new en(t, n, r, i)
                },
                nn = function(e) {
                    var t = e.prefix,
                        n = e.name,
                        r = e.alphabet,
                        i = Jt(r, n),
                        s = i.encode,
                        a = i.decode;
                    return tn({
                        prefix: t,
                        name: n,
                        encode: s,
                        decode: function(e) {
                            return Wt(a(e))
                        }
                    })
                },
                rn = function(e) {
                    var t = e.name,
                        n = e.prefix,
                        r = e.bitsPerChar,
                        i = e.alphabet;
                    return tn({
                        prefix: n,
                        name: t,
                        encode: function(e) {
                            return function(e, t, n) {
                                for (var r = "=" === t[t.length - 1], i = (1 << n) - 1, s = "", a = 0, o = 0, c = 0; c < e.length; ++c)
                                    for (o = o << 8 | e[c], a += 8; a > n;) s += t[i & o >> (a -= n)];
                                if (a && (s += t[i & o << n - a]), r)
                                    for (; s.length * n & 7;) s += "=";
                                return s
                            }(e, i, r)
                        },
                        decode: function(e) {
                            return function(e, t, n, r) {
                                for (var i = {}, s = 0; s < t.length; ++s) i[t[s]] = s;
                                for (var a = e.length;
                                    "=" === e[a - 1];) --a;
                                for (var o = new Uint8Array(a * n / 8 | 0), c = 0, u = 0, p = 0, l = 0; l < a; ++l) {
                                    var f = i[e[l]];
                                    if (void 0 === f) throw new SyntaxError("Non-".concat(r, " character"));
                                    u = u << n | f, (c += n) >= 8 && (c -= 8, o[p++] = 255 & u >> c)
                                }
                                if (c >= n || 255 & u << 8 - c) throw new SyntaxError("Unexpected end of data");
                                return o
                            }(e, i, r, t)
                        }
                    })
                },
                sn = tn({
                    prefix: "\0",
                    name: "identity",
                    encode: function(e) {
                        return function(e) {
                            return (new TextDecoder).decode(e)
                        }(e)
                    },
                    decode: function(e) {
                        return function(e) {
                            return (new TextEncoder).encode(e)
                        }(e)
                    }
                }),
                an = Object.freeze({
                    __proto__: null,
                    identity: sn
                }),
                on = rn({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                cn = Object.freeze({
                    __proto__: null,
                    base2: on
                }),
                un = rn({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                pn = Object.freeze({
                    __proto__: null,
                    base8: un
                }),
                ln = nn({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                fn = Object.freeze({
                    __proto__: null,
                    base10: ln
                }),
                hn = rn({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                dn = rn({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                vn = Object.freeze({
                    __proto__: null,
                    base16: hn,
                    base16upper: dn
                }),
                gn = rn({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                yn = rn({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                mn = rn({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                bn = rn({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                wn = rn({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                xn = rn({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                _n = rn({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                kn = rn({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Zn = rn({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                En = Object.freeze({
                    __proto__: null,
                    base32: gn,
                    base32upper: yn,
                    base32pad: mn,
                    base32padupper: bn,
                    base32hex: wn,
                    base32hexupper: xn,
                    base32hexpad: _n,
                    base32hexpadupper: kn,
                    base32z: Zn
                }),
                In = nn({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                Pn = nn({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                Sn = Object.freeze({
                    __proto__: null,
                    base36: In,
                    base36upper: Pn
                }),
                Rn = nn({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                On = nn({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                Cn = Object.freeze({
                    __proto__: null,
                    base58btc: Rn,
                    base58flickr: On
                }),
                Nn = rn({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                An = rn({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Tn = rn({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Dn = rn({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                qn = Object.freeze({
                    __proto__: null,
                    base64: Nn,
                    base64pad: An,
                    base64url: Tn,
                    base64urlpad: Dn
                }),
                jn = Array.from("\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"),
                Un = jn.reduce((function(e, t, n) {
                    return e[n] = t, e
                }), []),
                Ln = jn.reduce((function(e, t, n) {
                    return e[t.codePointAt(0)] = n, e
                }), []);
            var Mn = tn({
                    prefix: "\ud83d\ude80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((function(e, t) {
                            return e += Un[t]
                        }), "")
                    },
                    decode: function(e) {
                        var t, n = [],
                            r = (0, p.Z)(e);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var i = t.value,
                                    s = Ln[i.codePointAt(0)];
                                if (void 0 === s) throw new Error("Non-base256emoji character: ".concat(i));
                                n.push(s)
                            }
                        } catch (a) {
                            r.e(a)
                        } finally {
                            r.f()
                        }
                        return new Uint8Array(n)
                    }
                }),
                zn = Object.freeze({
                    __proto__: null,
                    base256emoji: Mn
                }),
                Vn = function e(t, n, r) {
                    n = n || [];
                    for (var i = r = r || 0; t >= Bn;) n[r++] = 255 & t | Kn, t /= 128;
                    for (; t & Hn;) n[r++] = 255 & t | Kn, t >>>= 7;
                    return n[r] = 0 | t, e.bytes = r - i + 1, n
                },
                Kn = 128,
                Hn = -128,
                Bn = Math.pow(2, 31);
            var Fn = function e(t, n) {
                    var r, i = 0,
                        s = 0,
                        a = n = n || 0,
                        o = t.length;
                    do {
                        if (a >= o) throw e.bytes = 0, new RangeError("Could not decode varint");
                        r = t[a++], i += s < 28 ? (r & Jn) << s : (r & Jn) * Math.pow(2, s), s += 7
                    } while (r >= Gn);
                    return e.bytes = a - n, i
                },
                Gn = 128,
                Jn = 127;
            var Wn = Math.pow(2, 7),
                Qn = Math.pow(2, 14),
                Yn = Math.pow(2, 21),
                $n = Math.pow(2, 28),
                Xn = Math.pow(2, 35),
                er = Math.pow(2, 42),
                tr = Math.pow(2, 49),
                nr = Math.pow(2, 56),
                rr = Math.pow(2, 63),
                ir = {
                    encode: Vn,
                    decode: Fn,
                    encodingLength: function(e) {
                        return e < Wn ? 1 : e < Qn ? 2 : e < Yn ? 3 : e < $n ? 4 : e < Xn ? 5 : e < er ? 6 : e < tr ? 7 : e < nr ? 8 : e < rr ? 9 : 10
                    }
                },
                sr = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return ir.encode(e, t, n), t
                },
                ar = function(e) {
                    return ir.encodingLength(e)
                },
                or = function(e, t) {
                    var n = t.byteLength,
                        r = ar(e),
                        i = r + ar(n),
                        s = new Uint8Array(i + n);
                    return sr(e, s, 0), sr(n, s, r), s.set(t, i), new cr(e, n, t, s)
                },
                cr = (0, o.Z)((function e(t, n, r, i) {
                    (0, a.Z)(this, e), this.code = t, this.size = n, this.digest = r, this.bytes = i
                })),
                ur = function(e) {
                    var t = e.name,
                        n = e.code,
                        r = e.encode;
                    return new pr(t, n, r)
                },
                pr = function() {
                    function e(t, n, r) {
                        (0, a.Z)(this, e), this.name = t, this.code = n, this.encode = r
                    }
                    return (0, o.Z)(e, [{
                        key: "digest",
                        value: function(e) {
                            var t = this;
                            if (e instanceof Uint8Array) {
                                var n = this.encode(e);
                                return n instanceof Uint8Array ? or(this.code, n) : n.then((function(e) {
                                    return or(t.code, e)
                                }))
                            }
                            throw Error("Unknown type, must be binary type")
                        }
                    }]), e
                }(),
                lr = function(e) {
                    return function() {
                        var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                            return (0, i.Z)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.t0 = Uint8Array, t.next = 3, crypto.subtle.digest(e, n);
                                    case 3:
                                        return t.t1 = t.sent, t.abrupt("return", new t.t0(t.t1));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                },
                fr = ur({
                    name: "sha2-256",
                    code: 18,
                    encode: lr("SHA-256")
                }),
                hr = ur({
                    name: "sha2-512",
                    code: 19,
                    encode: lr("SHA-512")
                }),
                dr = Object.freeze({
                    __proto__: null,
                    sha256: fr,
                    sha512: hr
                }),
                vr = Wt,
                gr = {
                    code: 0,
                    name: "identity",
                    encode: vr,
                    digest: function(e) {
                        return or(0, vr(e))
                    }
                },
                yr = Object.freeze({
                    __proto__: null,
                    identity: gr
                });
            new TextEncoder, new TextDecoder;
            var mr = (0, Zt.Z)((0, Zt.Z)((0, Zt.Z)((0, Zt.Z)((0, Zt.Z)((0, Zt.Z)((0, Zt.Z)((0, Zt.Z)((0, Zt.Z)((0, Zt.Z)({}, an), cn), pn), fn), vn), En), Sn), Cn), qn), zn);

            function br(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function wr(e, t, n, r) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: n
                    },
                    decoder: {
                        decode: r
                    }
                }
            }(0, Zt.Z)((0, Zt.Z)({}, dr), yr);
            var xr = wr("utf8", "u", (function(e) {
                    return "u" + new TextDecoder("utf8").decode(e)
                }), (function(e) {
                    return (new TextEncoder).encode(e.substring(1))
                })),
                _r = wr("ascii", "a", (function(e) {
                    for (var t = "a", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
                    return t
                }), (function(e) {
                    for (var t = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? br(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                        }((e = e.substring(1)).length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
                    return t
                })),
                kr = (0, Zt.Z)({
                    utf8: xr,
                    "utf-8": xr,
                    hex: mr.base16,
                    latin1: _r,
                    ascii: _r,
                    binary: _r
                }, mr);

            function Zr(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "utf8",
                    n = kr[t];
                if (!n) throw new Error('Unsupported encoding "'.concat(t, '"'));
                return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? n.decoder.decode("".concat(n.prefix).concat(e)) : br(globalThis.Buffer.from(e, "utf-8"))
            }
            var Er = "core",
                Ir = "".concat("wc", "@2:").concat(Er, ":"),
                Pr = "error",
                Sr = {
                    database: ":memory:"
                },
                Rr = "client_ed25519_seed",
                Or = w.ONE_DAY,
                Cr = w.SIX_HOURS,
                Nr = "wss://relay.walletconnect.com",
                Ar = "wss://relay.walletconnect.org",
                Tr = "relayer_message",
                Dr = "relayer_message_ack",
                qr = "relayer_connect",
                jr = "relayer_disconnect",
                Ur = "relayer_error",
                Lr = "relayer_connection_stalled",
                Mr = "relayer_publish",
                zr = "payload",
                Vr = "connect",
                Kr = "disconnect",
                Hr = "error",
                Br = w.ONE_SECOND,
                Fr = "subscription_created",
                Gr = "subscription_deleted",
                Jr = "subscription_sync",
                Wr = "subscription_resubscribed",
                Qr = 1e3 * w.FIVE_SECONDS,
                Yr = {
                    wc_pairingDelete: {
                        req: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: w.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: w.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                $r = "pairing_create",
                Xr = "pairing_expire",
                ei = "pairing_delete",
                ti = "pairing_ping",
                ni = "history_created",
                ri = "history_updated",
                ii = "history_deleted",
                si = "history_sync",
                ai = "expirer_created",
                oi = "expirer_deleted",
                ci = "expirer_expired",
                ui = "expirer_sync",
                pi = "verify-api",
                li = "https://verify.walletconnect.com",
                fi = "https://verify.walletconnect.org",
                hi = function() {
                    function e(t, n) {
                        var r = this;
                        (0, a.Z)(this, e), this.core = t, this.logger = n, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Ir, this.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.initialized) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, r.getKeyChain();
                                    case 3:
                                        typeof(t = e.sent) < "u" && (r.keychain = t), r.initialized = !0;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.has = function(e) {
                            return r.isInitialized(), r.keychain.has(e)
                        }, this.set = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.isInitialized(), r.keychain.set(t, n), e.next = 4, r.persist();
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), this.get = function(e) {
                            r.isInitialized();
                            var t = r.keychain.get(e);
                            if (typeof t > "u") {
                                var n = ze("NO_MATCHING_KEY", "".concat(r.name, ": ").concat(e)).message;
                                throw new Error(n)
                            }
                            return t
                        }, this.del = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.isInitialized(), r.keychain.delete(t), e.next = 4, r.persist();
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.core = t, this.logger = (0, Pt.generateChildLogger)(n, this.name)
                    }
                    return (0, o.Z)(e, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                        }
                    }, {
                        key: "setKeyChain",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.setItem(this.storageKey, fe(t));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getKeyChain",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.getItem(this.storageKey);
                                        case 2:
                                            return t = e.sent, e.abrupt("return", typeof t < "u" ? he(t) : void 0);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "persist",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.setKeyChain(this.keychain);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }]), e
                }(),
                di = function() {
                    function e(t, n, r) {
                        var o = this;
                        (0, a.Z)(this, e), this.core = t, this.logger = n, this.name = "crypto", this.initialized = !1, this.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = o.initialized, e.t0) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 4, o.keychain.init();
                                    case 4:
                                        o.initialized = !0;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.hasKeys = function(e) {
                            return o.isInitialized(), o.keychain.has(e)
                        }, this.getClientId = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t, n;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o.isInitialized(), e.next = 3, o.getClientSeed();
                                    case 3:
                                        return t = e.sent, n = zt.generateKeyPair(t), e.abrupt("return", zt.encodeIss(n.publicKey));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.generateKeyPair = function() {
                            o.isInitialized();
                            var e = function() {
                                var e = y.Au();
                                return {
                                    privateKey: (0, m.BB)(e.secretKey, C),
                                    publicKey: (0, m.BB)(e.publicKey, C)
                                }
                            }();
                            return o.setPrivateKey(e.publicKey, e.privateKey)
                        }, this.signJWT = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.isInitialized(), e.next = 3, o.getClientSeed();
                                        case 3:
                                            return n = e.sent, r = zt.generateKeyPair(n), s = M(), a = Or, e.next = 9, zt.signJWT(s, t, a, r);
                                        case 9:
                                            return e.abrupt("return", e.sent);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.generateSharedKey = function(e, t, n) {
                            o.isInitialized();
                            var r = function(e, t) {
                                var n = y.gi((0, m.mL)(e, C), (0, m.mL)(t, C), !0),
                                    r = new d.t(g.mE, n).expand(L);
                                return (0, m.BB)(r, C)
                            }(o.getPrivateKey(e), t);
                            return o.setSymKey(r, n)
                        }, this.setSymKey = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.isInitialized(), r = n || z(t), e.next = 4, o.keychain.set(r, t);
                                        case 4:
                                            return e.abrupt("return", r);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), this.deleteKeyPair = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.isInitialized(), e.next = 3, o.keychain.del(t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.deleteSymKey = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.isInitialized(), e.next = 3, o.keychain.del(t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.encode = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, r) {
                                var s, a, c, u, p, l, f;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o.isInitialized(), s = J(r), a = (0, Mt.u)(n), !W(s)) {
                                                e.next = 7;
                                                break
                                            }
                                            return c = s.senderPublicKey, u = s.receiverPublicKey, e.next = 6, o.generateSharedKey(c, u);
                                        case 6:
                                            t = e.sent;
                                        case 7:
                                            return p = o.getSymKey(t), l = s.type, f = s.senderPublicKey, e.abrupt("return", H({
                                                type: l,
                                                symKey: p,
                                                message: a,
                                                senderPublicKey: f
                                            }));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.decode = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, r) {
                                var s, a, c, u, p;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o.isInitialized(), !W(s = G(n, r))) {
                                                e.next = 7;
                                                break
                                            }
                                            return a = s.receiverPublicKey, c = s.senderPublicKey, e.next = 6, o.generateSharedKey(a, c);
                                        case 6:
                                            t = e.sent;
                                        case 7:
                                            return e.prev = 7, u = o.getSymKey(t), p = B({
                                                symKey: u,
                                                encoded: n
                                            }), e.abrupt("return", (0, Mt.D)(p));
                                        case 12:
                                            return e.prev = 12, e.t0 = e.catch(7), e.t1 = o.logger, e.t2 = "Failed to decode message from topic: '".concat(t, "', clientId: '"), e.next = 18, o.getClientId();
                                        case 18:
                                            e.t3 = e.sent, e.t4 = e.t2.concat.call(e.t2, e.t3, "'"), e.t1.error.call(e.t1, e.t4), o.logger.error(e.t0);
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [7, 12]
                                ])
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.getPayloadType = function(e) {
                            return K(F(e).type)
                        }, this.getPayloadSenderPublicKey = function(e) {
                            var t = F(e);
                            return t.senderPublicKey ? (0, m.BB)(t.senderPublicKey, C) : void 0
                        }, this.core = t, this.logger = (0, Pt.generateChildLogger)(n, this.name), this.keychain = r || new hi(this.core, this.logger)
                    }
                    return (0, o.Z)(e, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "setPrivateKey",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.keychain.set(t, n);
                                        case 2:
                                            return e.abrupt("return", t);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getPrivateKey",
                        value: function(e) {
                            return this.keychain.get(e)
                        }
                    }, {
                        key: "getClientSeed",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t = "", e.prev = 1, t = this.keychain.get(Rr), e.next = 10;
                                            break;
                                        case 5:
                                            return e.prev = 5, e.t0 = e.catch(1), t = M(), e.next = 10, this.keychain.set(Rr, t);
                                        case 10:
                                            return e.abrupt("return", Zr(t, "base16"));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 5]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getSymKey",
                        value: function(e) {
                            return this.keychain.get(e)
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }]), e
                }(),
                vi = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var o;
                        return (0, a.Z)(this, n), (o = t.call(this, e, r)).logger = e, o.core = r, o.messages = new Map, o.name = "messages", o.version = "0.3", o.initialized = !1, o.storagePrefix = Ir, o.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o.initialized) {
                                            e.next = 15;
                                            break
                                        }
                                        return o.logger.trace("Initialized"), e.prev = 2, e.next = 5, o.getRelayerMessages();
                                    case 5:
                                        typeof(t = e.sent) < "u" && (o.messages = t), o.logger.debug("Successfully Restored records for ".concat(o.name)), o.logger.trace({
                                            type: "method",
                                            method: "restore",
                                            size: o.messages.size
                                        }), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), o.logger.debug("Failed to Restore records for ".concat(o.name)), o.logger.error(e.t0);
                                    case 12:
                                        return e.prev = 12, o.initialized = !0, e.finish(12);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9, 12, 15]
                            ])
                        }))), o.set = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o.isInitialized(), r = V(n), typeof(s = o.messages.get(t)) > "u" && (s = {}), e.t0 = typeof s[r] < "u", e.t0) {
                                                e.next = 10;
                                                break
                                            }
                                            return s[r] = n, o.messages.set(t, s), e.next = 10, o.persist();
                                        case 10:
                                            return e.abrupt("return", r);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), o.get = function(e) {
                            o.isInitialized();
                            var t = o.messages.get(e);
                            return typeof t > "u" && (t = {}), t
                        }, o.has = function(e, t) {
                            return o.isInitialized(), typeof o.get(e)[V(t)] < "u"
                        }, o.del = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.isInitialized(), o.messages.delete(t), e.next = 4, o.persist();
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), o.logger = (0, Pt.generateChildLogger)(e, o.name), o.core = r, o
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                        }
                    }, {
                        key: "setRelayerMessages",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.setItem(this.storageKey, fe(t));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getRelayerMessages",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.getItem(this.storageKey);
                                        case 2:
                                            return t = e.sent, e.abrupt("return", typeof t < "u" ? he(t) : void 0);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "persist",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.setRelayerMessages(this.messages);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }]), n
                }(Ct),
                gi = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var o;
                        return (0, a.Z)(this, n), (o = t.call(this, e, r)).relayer = e, o.logger = r, o.events = new l.EventEmitter, o.name = "publisher", o.queue = new Map, o.publishTimeout = (0, w.toMiliseconds)(w.TEN_SECONDS), o.needsTransportRestart = !1, o.publish = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, r) {
                                var s, a, c, u, p, l, f, h;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.logger.debug("Publishing Payload"), o.logger.trace({
                                                type: "method",
                                                method: "publish",
                                                params: {
                                                    topic: t,
                                                    message: n,
                                                    opts: r
                                                }
                                            }), e.prev = 1, a = (null === r || void 0 === r ? void 0 : r.ttl) || Cr, c = Ze(r), u = (null === r || void 0 === r ? void 0 : r.prompt) || !1, p = (null === r || void 0 === r ? void 0 : r.tag) || 0, l = (null === r || void 0 === r ? void 0 : r.id) || (0, Kt.getBigIntRpcId)().toString(), f = {
                                                topic: t,
                                                message: n,
                                                opts: {
                                                    ttl: a,
                                                    relay: c,
                                                    prompt: u,
                                                    tag: p,
                                                    id: l
                                                }
                                            }, h = setTimeout((function() {
                                                return o.queue.set(l, f)
                                            }), o.publishTimeout), e.prev = 3, e.next = 6, ve(o.rpcPublish(t, n, a, c, u, p, l), o.publishTimeout, "Failed to publish payload, please try again.");
                                        case 6:
                                            return e.next = 8, e.sent;
                                        case 8:
                                            o.removeRequestFromQueue(l), o.relayer.events.emit(Mr, f), e.next = 17;
                                            break;
                                        case 12:
                                            if (e.prev = 12, e.t0 = e.catch(3), o.logger.debug("Publishing Payload stalled"), o.needsTransportRestart = !0, null == (s = null === r || void 0 === r ? void 0 : r.internal) || !s.throwOnFailedPublish) {
                                                e.next = 16;
                                                break
                                            }
                                            throw o.removeRequestFromQueue(l), e.t0;
                                        case 16:
                                            return e.abrupt("return");
                                        case 17:
                                            return e.prev = 17, clearTimeout(h), e.finish(17);
                                        case 20:
                                            o.logger.debug("Successfully Published Payload"), o.logger.trace({
                                                type: "method",
                                                method: "publish",
                                                params: {
                                                    topic: t,
                                                    message: n,
                                                    opts: r
                                                }
                                            }), e.next = 26;
                                            break;
                                        case 23:
                                            throw e.prev = 23, e.t1 = e.catch(1), o.logger.debug("Failed to Publish Payload"), o.logger.error(e.t1), e.t1;
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 23],
                                    [3, 12, 17, 20]
                                ])
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), o.on = function(e, t) {
                            o.events.on(e, t)
                        }, o.once = function(e, t) {
                            o.events.once(e, t)
                        }, o.off = function(e, t) {
                            o.events.off(e, t)
                        }, o.removeListener = function(e, t) {
                            o.events.removeListener(e, t)
                        }, o.relayer = e, o.logger = (0, Pt.generateChildLogger)(r, o.name), o.registerEventListeners(), o
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "rpcPublish",
                        value: function(e, t, n, r, i, s, a) {
                            var o, c, u, p, l = {
                                method: Ee(r.protocol).publish,
                                params: {
                                    topic: e,
                                    message: t,
                                    ttl: n,
                                    prompt: i,
                                    tag: s
                                },
                                id: a
                            };
                            return Be(null == (o = l.params) ? void 0 : o.prompt) && (null == (c = l.params) || delete c.prompt), Be(null == (u = l.params) ? void 0 : u.tag) && (null == (p = l.params) || delete p.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                                type: "message",
                                direction: "outgoing",
                                request: l
                            }), this.relayer.request(l)
                        }
                    }, {
                        key: "removeRequestFromQueue",
                        value: function(e) {
                            this.queue.delete(e)
                        }
                    }, {
                        key: "checkQueue",
                        value: function() {
                            var e = this;
                            this.queue.forEach(function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    var r, s, a;
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = n.topic, s = n.message, a = n.opts, t.next = 3, e.publish(r, s, a);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var e = this;
                            this.relayer.core.heartbeat.on(It.HEARTBEAT_EVENTS.pulse, (function() {
                                if (e.needsTransportRestart) return e.needsTransportRestart = !1, void e.relayer.events.emit(Lr);
                                e.checkQueue()
                            })), this.relayer.on(Dr, (function(t) {
                                e.removeRequestFromQueue(t.id.toString())
                            }))
                        }
                    }]), n
                }(Nt),
                yi = function() {
                    function e() {
                        var t = this;
                        (0, a.Z)(this, e), this.map = new Map, this.set = function(e, n) {
                            var r = t.get(e);
                            t.exists(e, n) || t.map.set(e, [].concat((0, c.Z)(r), [n]))
                        }, this.get = function(e) {
                            return t.map.get(e) || []
                        }, this.exists = function(e, n) {
                            return t.get(e).includes(n)
                        }, this.delete = function(e, n) {
                            if (typeof n > "u") t.map.delete(e);
                            else if (t.map.has(e)) {
                                var r = t.get(e);
                                if (t.exists(e, n)) {
                                    var i = r.filter((function(e) {
                                        return e !== n
                                    }));
                                    i.length ? t.map.set(e, i) : t.map.delete(e)
                                }
                            }
                        }, this.clear = function() {
                            t.map.clear()
                        }
                    }
                    return (0, o.Z)(e, [{
                        key: "topics",
                        get: function() {
                            return Array.from(this.map.keys())
                        }
                    }]), e
                }(),
                mi = Object.defineProperty,
                bi = Object.defineProperties,
                wi = Object.getOwnPropertyDescriptors,
                xi = Object.getOwnPropertySymbols,
                _i = Object.prototype.hasOwnProperty,
                ki = Object.prototype.propertyIsEnumerable,
                Zi = function(e, t, n) {
                    return t in e ? mi(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Ei = function(e, t) {
                    for (var n in t || (t = {})) _i.call(t, n) && Zi(e, n, t[n]);
                    if (xi) {
                        var r, i = (0, p.Z)(xi(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                ki.call(t, n) && Zi(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                Ii = function(e, t) {
                    return bi(e, wi(t))
                },
                Pi = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var o;
                        return (0, a.Z)(this, n), (o = t.call(this, e, r)).relayer = e, o.logger = r, o.subscriptions = new Map, o.topicMap = new yi, o.events = new l.EventEmitter, o.name = "subscription", o.version = "0.3", o.pending = new Map, o.cached = [], o.initialized = !1, o.pendingSubscriptionWatchLabel = "pending_sub_watch_label", o.pollingInterval = 20, o.storagePrefix = Ir, o.subscribeTimeout = 1e4, o.restartInProgress = !1, o.batchSubscribeTopicsLimit = 500, o.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = o.initialized, e.t0) {
                                            e.next = 7;
                                            break
                                        }
                                        return o.logger.trace("Initialized"), o.registerEventListeners(), e.next = 6, o.relayer.core.crypto.getClientId();
                                    case 6:
                                        o.clientId = e.sent;
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), o.subscribe = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, o.restartToComplete();
                                        case 2:
                                            return o.isInitialized(), o.logger.debug("Subscribing Topic"), o.logger.trace({
                                                type: "method",
                                                method: "subscribe",
                                                params: {
                                                    topic: t,
                                                    opts: n
                                                }
                                            }), e.prev = 5, r = Ze(n), s = {
                                                topic: t,
                                                relay: r
                                            }, o.pending.set(t, s), e.next = 10, o.rpcSubscribe(t, r);
                                        case 10:
                                            return a = e.sent, e.abrupt("return", (o.onSubscribe(a, s), o.logger.debug("Successfully Subscribed Topic"), o.logger.trace({
                                                type: "method",
                                                method: "subscribe",
                                                params: {
                                                    topic: t,
                                                    opts: n
                                                }
                                            }), a));
                                        case 14:
                                            throw e.prev = 14, e.t0 = e.catch(5), o.logger.debug("Failed to Subscribe Topic"), o.logger.error(e.t0), e.t0;
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 14]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), o.unsubscribe = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, o.restartToComplete();
                                        case 2:
                                            if (o.isInitialized(), !(typeof(null === n || void 0 === n ? void 0 : n.id) < "u")) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 6, o.unsubscribeById(t, n.id, n);
                                        case 6:
                                            e.next = 10;
                                            break;
                                        case 8:
                                            return e.next = 10, o.unsubscribeByTopic(t, n);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), o.isSubscribed = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!o.topics.includes(t)) {
                                                e.next = 4;
                                                break
                                            }
                                            e.t0 = !0, e.next = 7;
                                            break;
                                        case 4:
                                            return e.next = 6, new Promise((function(e, n) {
                                                var r = new w.Watch;
                                                r.start(o.pendingSubscriptionWatchLabel);
                                                var i = setInterval((function() {
                                                    !o.pending.has(t) && o.topics.includes(t) && (clearInterval(i), r.stop(o.pendingSubscriptionWatchLabel), e(!0)), r.elapsed(o.pendingSubscriptionWatchLabel) >= Qr && (clearInterval(i), r.stop(o.pendingSubscriptionWatchLabel), n(new Error("Subscription resolution timeout")))
                                                }), o.pollingInterval)
                                            })).catch((function() {
                                                return !1
                                            }));
                                        case 6:
                                            e.t0 = e.sent;
                                        case 7:
                                            return e.abrupt("return", e.t0);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), o.on = function(e, t) {
                            o.events.on(e, t)
                        }, o.once = function(e, t) {
                            o.events.once(e, t)
                        }, o.off = function(e, t) {
                            o.events.off(e, t)
                        }, o.removeListener = function(e, t) {
                            o.events.removeListener(e, t)
                        }, o.restart = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o.restartInProgress = !0, e.next = 3, o.restore();
                                    case 3:
                                        return e.next = 5, o.reset();
                                    case 5:
                                        o.restartInProgress = !1;
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), o.relayer = e, o.logger = (0, Pt.generateChildLogger)(r, o.name), o.clientId = "", o
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this.subscriptions.size
                        }
                    }, {
                        key: "ids",
                        get: function() {
                            return Array.from(this.subscriptions.keys())
                        }
                    }, {
                        key: "values",
                        get: function() {
                            return Array.from(this.subscriptions.values())
                        }
                    }, {
                        key: "topics",
                        get: function() {
                            return this.topicMap.topics
                        }
                    }, {
                        key: "hasSubscription",
                        value: function(e, t) {
                            var n = !1;
                            try {
                                n = this.getSubscription(e).topic === t
                            } catch (r) {}
                            return n
                        }
                    }, {
                        key: "onEnable",
                        value: function() {
                            this.cached = [], this.initialized = !0
                        }
                    }, {
                        key: "onDisable",
                        value: function() {
                            this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                        }
                    }, {
                        key: "unsubscribeByTopic",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r, a = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = this.topicMap.get(t), e.next = 3, Promise.all(r.map(function() {
                                                var e = (0, s.Z)((0, i.Z)().mark((function e(r) {
                                                    return (0, i.Z)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, a.unsubscribeById(t, r, n);
                                                            case 2:
                                                                return e.abrupt("return", e.sent);
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "unsubscribeById",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, r) {
                                var s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                                                type: "method",
                                                method: "unsubscribe",
                                                params: {
                                                    topic: t,
                                                    id: n,
                                                    opts: r
                                                }
                                            }), e.prev = 1, s = Ze(r), e.next = 5, this.rpcUnsubscribe(t, n, s);
                                        case 5:
                                            return a = Ve("USER_DISCONNECTED", "".concat(this.name, ", ").concat(t)), e.next = 8, this.onUnsubscribe(t, n, a);
                                        case 8:
                                            this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                                                type: "method",
                                                method: "unsubscribe",
                                                params: {
                                                    topic: t,
                                                    id: n,
                                                    opts: r
                                                }
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            throw e.prev = 12, e.t0 = e.catch(1), this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e.t0), e.t0;
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 12]
                                ])
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "rpcSubscribe",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = {
                                                method: Ee(n.protocol).subscribe,
                                                params: {
                                                    topic: t
                                                }
                                            }, this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                                                type: "payload",
                                                direction: "outgoing",
                                                request: r
                                            }), e.prev = 2, e.next = 5, ve(this.relayer.request(r), this.subscribeTimeout);
                                        case 5:
                                            return e.next = 7, e.sent;
                                        case 7:
                                            e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(2), this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Lr);
                                        case 12:
                                            return e.abrupt("return", V(t + this.clientId));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [2, 9]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "rpcBatchSubscribe",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.length) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return n = t[0].relay, r = {
                                                method: Ee(n.protocol).batchSubscribe,
                                                params: {
                                                    topics: t.map((function(e) {
                                                        return e.topic
                                                    }))
                                                }
                                            }, this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                                                type: "payload",
                                                direction: "outgoing",
                                                request: r
                                            }), e.prev = 4, e.next = 7, ve(this.relayer.request(r), this.subscribeTimeout);
                                        case 7:
                                            return e.next = 9, e.sent;
                                        case 9:
                                            return e.abrupt("return", e.sent);
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(4), this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Lr);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 12]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "rpcUnsubscribe",
                        value: function(e, t, n) {
                            var r = {
                                method: Ee(n.protocol).unsubscribe,
                                params: {
                                    topic: e,
                                    id: t
                                }
                            };
                            return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                                type: "payload",
                                direction: "outgoing",
                                request: r
                            }), this.relayer.request(r)
                        }
                    }, {
                        key: "onSubscribe",
                        value: function(e, t) {
                            this.setSubscription(e, Ii(Ei({}, t), {
                                id: e
                            })), this.pending.delete(t.topic)
                        }
                    }, {
                        key: "onBatchSubscribe",
                        value: function(e) {
                            var t = this;
                            e.length && e.forEach((function(e) {
                                t.setSubscription(e.id, Ei({}, e)), t.pending.delete(e.topic)
                            }))
                        }
                    }, {
                        key: "onUnsubscribe",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, r) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.events.removeAllListeners(n), this.hasSubscription(n, t) && this.deleteSubscription(n, r), e.next = 4, this.relayer.messages.del(t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setRelayerSubscriptions",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.relayer.core.storage.setItem(this.storageKey, t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getRelayerSubscriptions",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.relayer.core.storage.getItem(this.storageKey);
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setSubscription",
                        value: function(e, t) {
                            this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                                type: "method",
                                method: "setSubscription",
                                id: e,
                                subscription: t
                            }), this.addSubscription(e, t))
                        }
                    }, {
                        key: "addSubscription",
                        value: function(e, t) {
                            this.subscriptions.set(e, Ei({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Fr, t)
                        }
                    }, {
                        key: "getSubscription",
                        value: function(e) {
                            this.logger.debug("Getting subscription"), this.logger.trace({
                                type: "method",
                                method: "getSubscription",
                                id: e
                            });
                            var t = this.subscriptions.get(e);
                            if (!t) {
                                var n = ze("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                                throw new Error(n)
                            }
                            return t
                        }
                    }, {
                        key: "deleteSubscription",
                        value: function(e, t) {
                            this.logger.debug("Deleting subscription"), this.logger.trace({
                                type: "method",
                                method: "deleteSubscription",
                                id: e,
                                reason: t
                            });
                            var n = this.getSubscription(e);
                            this.subscriptions.delete(e), this.topicMap.delete(n.topic, e), this.events.emit(Gr, Ii(Ei({}, n), {
                                reason: t
                            }))
                        }
                    }, {
                        key: "persist",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.setRelayerSubscriptions(this.values);
                                        case 2:
                                            this.events.emit(Jr);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "reset",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.cached.length) {
                                                e.next = 10;
                                                break
                                            }
                                            t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit), n = 0;
                                        case 3:
                                            if (!(n < t)) {
                                                e.next = 10;
                                                break
                                            }
                                            return r = this.cached.splice(0, this.batchSubscribeTopicsLimit), e.next = 7, this.batchSubscribe(r);
                                        case 7:
                                            n++, e.next = 3;
                                            break;
                                        case 10:
                                            this.events.emit(Wr);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restore",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getRelayerSubscriptions();
                                        case 3:
                                            if (!(typeof(t = e.sent) > "u") && t.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (!this.subscriptions.size) {
                                                e.next = 9;
                                                break
                                            }
                                            throw n = ze("RESTORE_WILL_OVERRIDE", this.name), r = n.message, this.logger.error(r), this.logger.error("".concat(this.name, ": ").concat(JSON.stringify(this.values))), new Error(r);
                                        case 9:
                                            this.cached = t, this.logger.debug("Successfully Restored subscriptions for ".concat(this.name)), this.logger.trace({
                                                type: "method",
                                                method: "restore",
                                                subscriptions: this.values
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), this.logger.debug("Failed to Restore subscriptions for ".concat(this.name)), this.logger.error(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 12]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "batchSubscribe",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.length) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, this.rpcBatchSubscribe(t);
                                        case 4:
                                            Ke(n = e.sent) && this.onBatchSubscribe(n.map((function(e, n) {
                                                return Ii(Ei({}, t[n]), {
                                                    id: e
                                                })
                                            })));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onConnect",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = this.restartInProgress, e.t0) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 4, this.restart();
                                        case 4:
                                            this.onEnable();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onDisconnect",
                        value: function() {
                            this.onDisable()
                        }
                    }, {
                        key: "checkPending",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.initialized && !this.relayer.transportExplicitlyClosed) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return t = [], this.pending.forEach((function(e) {
                                                t.push(e)
                                            })), e.next = 6, this.batchSubscribe(t);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var e = this;
                            this.relayer.core.heartbeat.on(It.HEARTBEAT_EVENTS.pulse, (0, s.Z)((0, i.Z)().mark((function t() {
                                return (0, i.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.checkPending();
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))), this.relayer.on(qr, (0, s.Z)((0, i.Z)().mark((function t() {
                                return (0, i.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.onConnect();
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))), this.relayer.on(jr, (function() {
                                e.onDisconnect()
                            })), this.events.on(Fr, function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    var r;
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = Fr, e.logger.info("Emitting ".concat(r)), e.logger.debug({
                                                    type: "event",
                                                    event: r,
                                                    data: n
                                                }), t.next = 5, e.persist();
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()), this.events.on(Gr, function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    var r;
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = Gr, e.logger.info("Emitting ".concat(r)), e.logger.debug({
                                                    type: "event",
                                                    event: r,
                                                    data: n
                                                }), t.next = 5, e.persist();
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }, {
                        key: "restartToComplete",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = this.restartInProgress, !e.t0) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, new Promise((function(e) {
                                                var n = setInterval((function() {
                                                    t.restartInProgress || (clearInterval(n), e())
                                                }), t.pollingInterval)
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), n
                }(Dt),
                Si = Object.defineProperty,
                Ri = Object.getOwnPropertySymbols,
                Oi = Object.prototype.hasOwnProperty,
                Ci = Object.prototype.propertyIsEnumerable,
                Ni = function(e, t, n) {
                    return t in e ? Si(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Ai = function(e, t) {
                    for (var n in t || (t = {})) Oi.call(t, n) && Ni(e, n, t[n]);
                    if (Ri) {
                        var r, i = (0, p.Z)(Ri(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                Ci.call(t, n) && Ni(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                Ti = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e) {
                        var r;
                        return (0, a.Z)(this, n), (r = t.call(this, e)).protocol = "wc", r.version = 2, r.events = new l.EventEmitter, r.name = "relayer", r.transportExplicitlyClosed = !1, r.initialized = !1, r.connectionAttemptInProgress = !1, r.connectionStatusPollingInterval = 20, r.staleConnectionErrors = ["socket hang up", "socket stalled"], r.hasExperiencedNetworkDisruption = !1, r.request = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.logger.debug("Publishing Request Payload"), e.prev = 1, e.next = 4, r.toEstablishConnection();
                                        case 4:
                                            return e.next = 6, r.provider.request(t);
                                        case 6:
                                            return e.abrupt("return", e.sent);
                                        case 9:
                                            throw e.prev = 9, e.t0 = e.catch(1), r.logger.debug("Failed to Publish Request"), r.logger.error(e.t0), e.t0;
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 9]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onPayloadHandler = function(e) {
                            r.onProviderPayload(e)
                        }, r.onConnectHandler = function() {
                            r.events.emit(qr)
                        }, r.onDisconnectHandler = function() {
                            r.onProviderDisconnect()
                        }, r.onProviderErrorHandler = function(e) {
                            r.logger.error(e), r.events.emit(Ur, e), r.logger.info("Fatal socket error received, closing transport"), r.transportClose()
                        }, r.registerProviderListeners = function() {
                            r.provider.on(zr, r.onPayloadHandler), r.provider.on(Vr, r.onConnectHandler), r.provider.on(Kr, r.onDisconnectHandler), r.provider.on(Hr, r.onProviderErrorHandler)
                        }, r.core = e.core, r.logger = typeof e.logger < "u" && "string" != typeof e.logger ? (0, Pt.generateChildLogger)(e.logger, r.name) : (0, Pt.pino)((0, Pt.getDefaultLoggerOptions)({
                            level: e.logger || "error"
                        })), r.messages = new vi(r.logger, e.core), r.subscriber = new Pi((0, xt.Z)(r), r.logger), r.publisher = new gi((0, xt.Z)(r), r.logger), r.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || Nr, r.projectId = e.projectId, r.provider = {}, r
                    }
                    return (0, o.Z)(n, [{
                        key: "init",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.logger.trace("Initialized"), this.registerEventListeners(), e.next = 4, this.createProvider();
                                        case 4:
                                            return e.next = 6, Promise.all([this.messages.init(), this.subscriber.init()]);
                                        case 6:
                                            return e.prev = 6, e.next = 9, this.transportOpen();
                                        case 9:
                                            e.next = 16;
                                            break;
                                        case 11:
                                            return e.prev = 11, e.t0 = e.catch(6), this.logger.warn("Connection via ".concat(this.relayUrl, " failed, attempting to connect via failover domain ").concat(Ar, "...")), e.next = 16, this.restartTransport(Ar);
                                        case 16:
                                            this.initialized = !0, setTimeout((0, s.Z)((0, i.Z)().mark((function e() {
                                                return (0, i.Z)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (e.t0 = 0 === t.subscriber.topics.length, !e.t0) {
                                                                e.next = 6;
                                                                break
                                                            }
                                                            return t.logger.info("No topics subscribed to after init, closing transport"), e.next = 5, t.transportClose();
                                                        case 5:
                                                            t.transportExplicitlyClosed = !1;
                                                        case 6:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), 1e4);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [6, 11]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "connected",
                        get: function() {
                            return this.provider.connection.connected
                        }
                    }, {
                        key: "connecting",
                        get: function() {
                            return this.provider.connection.connecting
                        }
                    }, {
                        key: "publish",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, r) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.isInitialized(), e.next = 3, this.publisher.publish(t, n, r);
                                        case 3:
                                            return e.next = 5, this.recordMessageEvent({
                                                topic: t,
                                                message: n,
                                                publishedAt: Date.now()
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "subscribe",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r, a, o, c, u = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.isInitialized(), !(a = (null == (r = this.subscriber.topicMap.get(t)) ? void 0 : r[0]) || "")) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return", a);
                                        case 4:
                                            return c = function e(n) {
                                                n.topic === t && (u.subscriber.off(Fr, e), o())
                                            }, e.next = 7, Promise.all([new Promise((function(e) {
                                                o = e, u.subscriber.on(Fr, c)
                                            })), new Promise(function() {
                                                var e = (0, s.Z)((0, i.Z)().mark((function e(r) {
                                                    return (0, i.Z)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, u.subscriber.subscribe(t, n);
                                                            case 2:
                                                                a = e.sent, r();
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }())]);
                                        case 7:
                                            return e.abrupt("return", a);
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "unsubscribe",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.isInitialized(), e.next = 3, this.subscriber.unsubscribe(t, n);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this.events.on(e, t)
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            this.events.once(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this.events.off(e, t)
                        }
                    }, {
                        key: "removeListener",
                        value: function(e, t) {
                            this.events.removeListener(e, t)
                        }
                    }, {
                        key: "transportClose",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.transportExplicitlyClosed = !0, !this.hasExperiencedNetworkDisruption || !this.connected) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, ve(this.provider.disconnect(), 1e3, "provider.disconnect()").catch((function() {
                                                return t.onProviderDisconnect()
                                            }));
                                        case 4:
                                            e.next = 10;
                                            break;
                                        case 6:
                                            if (e.t0 = this.connected, !e.t0) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 10, this.provider.disconnect();
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "transportOpen",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.transportExplicitlyClosed = !1, e.next = 3, this.confirmOnlineStateOrThrow();
                                        case 3:
                                            if (this.connectionAttemptInProgress) {
                                                e.next = 27;
                                                break
                                            }
                                            if (e.t0 = t && t !== this.relayUrl, !e.t0) {
                                                e.next = 11;
                                                break
                                            }
                                            return this.relayUrl = t, e.next = 9, this.transportClose();
                                        case 9:
                                            return e.next = 11, this.createProvider();
                                        case 11:
                                            return this.connectionAttemptInProgress = !0, e.prev = 12, e.next = 15, Promise.all([new Promise((function(e) {
                                                if (!r.initialized) return e();
                                                r.subscriber.once(Wr, (function() {
                                                    e()
                                                }))
                                            })), new Promise(function() {
                                                var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                                    return (0, i.Z)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.prev = 0, e.next = 3, ve(r.provider.connect(), 1e4, "Socket stalled when trying to connect to ".concat(r.relayUrl));
                                                            case 3:
                                                                e.next = 9;
                                                                break;
                                                            case 5:
                                                                return e.prev = 5, e.t0 = e.catch(0), n(e.t0), e.abrupt("return");
                                                            case 9:
                                                                t();
                                                            case 10:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e, null, [
                                                        [0, 5]
                                                    ])
                                                })));
                                                return function(t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }())]);
                                        case 15:
                                            e.next = 24;
                                            break;
                                        case 17:
                                            if (e.prev = 17, e.t1 = e.catch(12), this.logger.error(e.t1), n = e.t1, this.isConnectionStalled(n.message)) {
                                                e.next = 23;
                                                break
                                            }
                                            throw e.t1;
                                        case 23:
                                            this.provider.events.emit(Kr);
                                        case 24:
                                            return e.prev = 24, this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1, e.finish(24);
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [12, 17, 24, 27]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restartTransport",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.confirmOnlineStateOrThrow();
                                        case 2:
                                            if (e.t0 = !this.connectionAttemptInProgress, !e.t0) {
                                                e.next = 11;
                                                break
                                            }
                                            return this.relayUrl = t || this.relayUrl, e.next = 7, this.transportClose();
                                        case 7:
                                            return e.next = 9, this.createProvider();
                                        case 9:
                                            return e.next = 11, this.transportOpen();
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "confirmOnlineStateOrThrow",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, gt();
                                        case 2:
                                            if (e.sent) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("No internet connection detected. Please restart your network and try again.");
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isConnectionStalled",
                        value: function(e) {
                            return this.staleConnectionErrors.some((function(t) {
                                return e.includes(t)
                            }))
                        }
                    }, {
                        key: "createProvider",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.provider.connection && this.unregisterProviderListeners(), e.next = 3, this.core.crypto.signJWT(this.relayUrl);
                                        case 3:
                                            t = e.sent, this.provider = new Vt.r(new Ht.Z(pe({
                                                sdkVersion: "2.10.2",
                                                protocol: this.protocol,
                                                version: this.version,
                                                relayUrl: this.relayUrl,
                                                projectId: this.projectId,
                                                auth: t,
                                                useOnCloseEvent: !0
                                            }))), this.registerProviderListeners();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "recordMessageEvent",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.topic, r = t.message, e.next = 3, this.messages.set(n, r);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "shouldIgnoreMessageEvent",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = t.topic, (r = t.message) && 0 !== r.length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return", (this.logger.debug("Ignoring invalid/empty message: ".concat(r)), !0));
                                        case 3:
                                            return e.next = 5, this.subscriber.isSubscribed(n);
                                        case 5:
                                            if (e.sent) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return", (this.logger.debug("Ignoring message for non-subscribed topic ".concat(n)), !0));
                                        case 7:
                                            return s = this.messages.has(n, r), e.abrupt("return", (s && this.logger.debug("Ignoring duplicate message: ".concat(r)), s));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onProviderPayload",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s, a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                                                    type: "payload",
                                                    direction: "incoming",
                                                    payload: t
                                                }), !(0, Kt.isJsonRpcRequest)(t)) {
                                                e.next = 13;
                                                break
                                            }
                                            if (t.method.endsWith("_subscription")) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return n = t.params, r = n.data, s = r.topic, a = r.message, o = r.publishedAt, c = {
                                                topic: s,
                                                message: a,
                                                publishedAt: o
                                            }, this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Ai({
                                                type: "event",
                                                event: n.id
                                            }, c)), this.events.emit(n.id, c), e.next = 9, this.acknowledgePayload(t);
                                        case 9:
                                            return e.next = 11, this.onMessageEvent(c);
                                        case 11:
                                            e.next = 14;
                                            break;
                                        case 13:
                                            (0, Kt.isJsonRpcResponse)(t) && this.events.emit(Dr, t);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onMessageEvent",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.shouldIgnoreMessageEvent(t);
                                        case 2:
                                            if (e.t0 = e.sent, e.t0) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.events.emit(Tr, t), e.next = 7, this.recordMessageEvent(t);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "acknowledgePayload",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = (0, Kt.formatJsonRpcResult)(t.id, !0), e.next = 3, this.provider.connection.send(n);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "unregisterProviderListeners",
                        value: function() {
                            this.provider.off(zr, this.onPayloadHandler), this.provider.off(Vr, this.onConnectHandler), this.provider.off(Kr, this.onDisconnectHandler), this.provider.off(Hr, this.onProviderErrorHandler)
                        }
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.events.on(Lr, (function() {
                                                n.restartTransport().catch((function(e) {
                                                    return n.logger.error(e)
                                                }))
                                            })), e.next = 3, gt();
                                        case 3:
                                            t = e.sent, mt(function() {
                                                var e = (0, s.Z)((0, i.Z)().mark((function e(r) {
                                                    return (0, i.Z)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (e.t0 = n.initialized && t !== r, !e.t0) {
                                                                    e.next = 11;
                                                                    break
                                                                }
                                                                if (t = r, !r) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return e.next = 6, n.restartTransport().catch((function(e) {
                                                                    return n.logger.error(e)
                                                                }));
                                                            case 6:
                                                                e.next = 11;
                                                                break;
                                                            case 8:
                                                                return n.hasExperiencedNetworkDisruption = !0, e.next = 11, n.transportClose().catch((function(e) {
                                                                    return n.logger.error(e)
                                                                }));
                                                            case 11:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onProviderDisconnect",
                        value: function() {
                            this.events.emit(jr), this.attemptToReconnect()
                        }
                    }, {
                        key: "attemptToReconnect",
                        value: function() {
                            var e = this;
                            this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((0, s.Z)((0, i.Z)().mark((function t() {
                                return (0, i.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.restartTransport().catch((function(t) {
                                                return e.logger.error(t)
                                            }));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), (0, w.toMiliseconds)(Br)))
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }, {
                        key: "toEstablishConnection",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.confirmOnlineStateOrThrow();
                                        case 2:
                                            if (this.connected) {
                                                e.next = 9;
                                                break
                                            }
                                            if (!this.connectionAttemptInProgress) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 6, new Promise((function(e) {
                                                var n = setInterval((function() {
                                                    t.connected && (clearInterval(n), e())
                                                }), t.connectionStatusPollingInterval)
                                            }));
                                        case 6:
                                            return e.abrupt("return", e.sent);
                                        case 7:
                                            return e.next = 9, this.restartTransport();
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), n
                }(At),
                Di = Object.defineProperty,
                qi = Object.getOwnPropertySymbols,
                ji = Object.prototype.hasOwnProperty,
                Ui = Object.prototype.propertyIsEnumerable,
                Li = function(e, t, n) {
                    return t in e ? Di(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Mi = function(e, t) {
                    for (var n in t || (t = {})) ji.call(t, n) && Li(e, n, t[n]);
                    if (qi) {
                        var r, i = (0, p.Z)(qi(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                Ui.call(t, n) && Li(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                zi = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r, o) {
                        var c, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ir,
                            p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                        return (0, a.Z)(this, n), (c = t.call(this, e, r, o, u)).core = e, c.logger = r, c.name = o, c.map = new Map, c.version = "0.3", c.cached = [], c.initialized = !1, c.storagePrefix = Ir, c.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = c.initialized, e.t0) {
                                            e.next = 8;
                                            break
                                        }
                                        return c.logger.trace("Initialized"), e.next = 5, c.restore();
                                    case 5:
                                        c.cached.forEach((function(e) {
                                            c.getKey && null !== e && !Be(e) ? c.map.set(c.getKey(e), e) : We(e) ? c.map.set(e.id, e) : Qe(e) && c.map.set(e.topic, e)
                                        })), c.cached = [], c.initialized = !0;
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), c.set = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (c.isInitialized(), !c.map.has(t)) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 4, c.update(t, n);
                                        case 4:
                                            e.next = 11;
                                            break;
                                        case 6:
                                            return c.logger.debug("Setting value"), c.logger.trace({
                                                type: "method",
                                                method: "set",
                                                key: t,
                                                value: n
                                            }), c.map.set(t, n), e.next = 11, c.persist();
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), c.get = function(e) {
                            return c.isInitialized(), c.logger.debug("Getting value"), c.logger.trace({
                                type: "method",
                                method: "get",
                                key: e
                            }), c.getData(e)
                        }, c.getAll = function(e) {
                            return c.isInitialized(), e ? c.values.filter((function(t) {
                                return Object.keys(e).every((function(n) {
                                    return Ft()(t[n], e[n])
                                }))
                            })) : c.values
                        }, c.update = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return c.isInitialized(), c.logger.debug("Updating value"), c.logger.trace({
                                                type: "method",
                                                method: "update",
                                                key: t,
                                                update: n
                                            }), r = Mi(Mi({}, c.getData(t)), n), c.map.set(t, r), e.next = 5, c.persist();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), c.delete = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (c.isInitialized(), e.t0 = c.map.has(t), !e.t0) {
                                                e.next = 8;
                                                break
                                            }
                                            return c.logger.debug("Deleting value"), c.logger.trace({
                                                type: "method",
                                                method: "delete",
                                                key: t,
                                                reason: n
                                            }), c.map.delete(t), e.next = 8, c.persist();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), c.logger = (0, Pt.generateChildLogger)(r, c.name), c.storagePrefix = u, c.getKey = p, c
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this.map.size
                        }
                    }, {
                        key: "keys",
                        get: function() {
                            return Array.from(this.map.keys())
                        }
                    }, {
                        key: "values",
                        get: function() {
                            return Array.from(this.map.values())
                        }
                    }, {
                        key: "setDataStore",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.setItem(this.storageKey, t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getDataStore",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.getItem(this.storageKey);
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getData",
                        value: function(e) {
                            var t = this.map.get(e);
                            if (!t) {
                                var n = ze("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                                throw this.logger.error(n), new Error(n)
                            }
                            return t
                        }
                    }, {
                        key: "persist",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.setDataStore(this.values);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restore",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getDataStore();
                                        case 3:
                                            if (!(typeof(t = e.sent) > "u") && t.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (!this.map.size) {
                                                e.next = 9;
                                                break
                                            }
                                            throw n = ze("RESTORE_WILL_OVERRIDE", this.name), r = n.message, this.logger.error(r), new Error(r);
                                        case 9:
                                            this.cached = t, this.logger.debug("Successfully Restored value for ".concat(this.name)), this.logger.trace({
                                                type: "method",
                                                method: "restore",
                                                value: this.values
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), this.logger.debug("Failed to Restore value for ".concat(this.name)), this.logger.error(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 12]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }]), n
                }(Tt),
                Vi = function() {
                    function e(t, n) {
                        var r = this;
                        (0, a.Z)(this, e), this.core = t, this.logger = n, this.name = "pairing", this.version = "0.3", this.events = new(f()), this.initialized = !1, this.storagePrefix = Ir, this.ignoredPayloadTypes = [D], this.registeredMethods = [], this.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = r.initialized, e.t0) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 4, r.pairings.init();
                                    case 4:
                                        return e.next = 6, r.cleanup();
                                    case 6:
                                        r.registerRelayerEvents(), r.registerExpirerEvents(), r.initialized = !0, r.logger.trace("Initialized");
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.register = function(e) {
                            var t = e.methods;
                            r.isInitialized(), r.registeredMethods = (0, c.Z)(new Set([].concat((0, c.Z)(r.registeredMethods), (0, c.Z)(t))))
                        }, this.create = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t, n, s, a, o, c;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.isInitialized(), t = M(), e.next = 4, r.core.crypto.setSymKey(t);
                                    case 4:
                                        return n = e.sent, s = me(w.FIVE_MINUTES), o = {
                                            topic: n,
                                            expiry: s,
                                            relay: a = {
                                                protocol: "irn"
                                            },
                                            active: !1
                                        }, c = Te({
                                            protocol: r.core.protocol,
                                            version: r.core.version,
                                            topic: n,
                                            symKey: t,
                                            relay: a
                                        }), e.next = 11, r.pairings.set(n, o);
                                    case 11:
                                        return e.next = 13, r.core.relayer.subscribe(n);
                                    case 13:
                                        return r.core.expirer.set(n, s), e.abrupt("return", {
                                            topic: n,
                                            uri: c
                                        });
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.pair = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r.isInitialized(), r.isValidPair(t), n = Ne(t.uri), s = n.topic, a = n.symKey, o = n.relay, !r.pairings.keys.includes(s) || !r.pairings.get(s).active) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("Pairing already exists: ".concat(s, ". Please try again with a new connection URI."));
                                        case 4:
                                            if (e.t0 = r.core.crypto.keychain.has(s), e.t0) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 8, r.core.crypto.setSymKey(a, s);
                                        case 8:
                                            return e.next = 10, r.core.relayer.subscribe(s, {
                                                relay: o
                                            });
                                        case 10:
                                            return c = me(w.FIVE_MINUTES), u = {
                                                topic: s,
                                                relay: o,
                                                expiry: c,
                                                active: !1
                                            }, e.next = 13, r.pairings.set(s, u);
                                        case 13:
                                            if (r.core.expirer.set(s, c), e.t1 = t.activatePairing, !e.t1) {
                                                e.next = 18;
                                                break
                                            }
                                            return e.next = 18, r.activate({
                                                topic: s
                                            });
                                        case 18:
                                            return r.events.emit($r, u), e.abrupt("return", u);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.activate = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.topic, r.isInitialized(), s = me(w.THIRTY_DAYS), e.next = 5, r.pairings.update(n, {
                                                active: !0,
                                                expiry: s
                                            });
                                        case 5:
                                            r.core.expirer.set(n, s);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.ping = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.isInitialized(), e.next = 3, r.isValidPing(t);
                                        case 3:
                                            if (n = t.topic, !r.pairings.keys.includes(n)) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 7, r.sendRequest(n, "wc_pairingPing", {});
                                        case 7:
                                            return s = e.sent, a = de(), o = a.done, c = a.resolve, u = a.reject, r.events.once(we("pairing_ping", s), (function(e) {
                                                var t = e.error;
                                                t ? u(t) : c()
                                            })), e.next = 15, o();
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.updateExpiry = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.topic, s = t.expiry, r.isInitialized(), e.next = 4, r.pairings.update(n, {
                                                expiry: s
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.updateMetadata = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.topic, s = t.metadata, r.isInitialized(), e.next = 4, r.pairings.update(n, {
                                                peerMetadata: s
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.getPairings = function() {
                            return r.isInitialized(), r.pairings.values
                        }, this.disconnect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.isInitialized(), e.next = 3, r.isValidDisconnect(t);
                                        case 3:
                                            if (n = t.topic, e.t0 = r.pairings.keys.includes(n), !e.t0) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 8, r.sendRequest(n, "wc_pairingDelete", Ve("USER_DISCONNECTED"));
                                        case 8:
                                            return e.next = 10, r.deletePairing(n);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.sendRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, s) {
                                var a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = (0, Kt.formatJsonRpcRequest)(n, s), e.next = 3, r.core.crypto.encode(t, a);
                                        case 3:
                                            return o = e.sent, c = Yr[n].req, e.abrupt("return", (r.core.history.set(t, a), r.core.relayer.publish(t, o, c), a.id));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.sendResult = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, s) {
                                var a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = (0, Kt.formatJsonRpcResult)(t, s), e.next = 3, r.core.crypto.encode(n, a);
                                        case 3:
                                            return o = e.sent, e.next = 6, r.core.history.get(n, t);
                                        case 6:
                                            return c = e.sent, u = Yr[c.request.method].res, e.next = 10, r.core.relayer.publish(n, o, u);
                                        case 10:
                                            return e.next = 12, r.core.history.resolve(a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.sendError = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, s) {
                                var a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = (0, Kt.formatJsonRpcError)(t, s), e.next = 3, r.core.crypto.encode(n, a);
                                        case 3:
                                            return o = e.sent, e.next = 6, r.core.history.get(n, t);
                                        case 6:
                                            return c = e.sent, u = Yr[c.request.method] ? Yr[c.request.method].res : Yr.unregistered_method.res, e.next = 10, r.core.relayer.publish(n, o, u);
                                        case 10:
                                            return e.next = 12, r.core.history.resolve(a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.deletePairing = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.core.relayer.unsubscribe(t);
                                        case 2:
                                            return e.next = 4, Promise.all([r.pairings.delete(t, Ve("USER_DISCONNECTED")), r.core.crypto.deleteSymKey(t), n ? Promise.resolve() : r.core.expirer.del(t)]);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), this.cleanup = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = r.pairings.getAll().filter((function(e) {
                                            return be(e.expiry)
                                        })), e.next = 3, Promise.all(t.map((function(e) {
                                            return r.deletePairing(e.topic)
                                        })));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.onRelayEventRequest = function(e) {
                            var t = e.topic,
                                n = e.payload;
                            switch (n.method) {
                                case "wc_pairingPing":
                                    return r.onPairingPingRequest(t, n);
                                case "wc_pairingDelete":
                                    return r.onPairingDeleteRequest(t, n);
                                default:
                                    return r.onUnknownRpcMethodRequest(t, n)
                            }
                        }, this.onRelayEventResponse = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.topic, s = t.payload, e.next = 4, r.core.history.get(n, s.id);
                                        case 4:
                                            a = e.sent.request.method, e.t0 = a, e.next = "wc_pairingPing" === e.t0 ? 8 : 9;
                                            break;
                                        case 8:
                                            return e.abrupt("return", r.onPairingPingResponse(n, s));
                                        case 9:
                                            return e.abrupt("return", r.onUnknownRpcMethodResponse(a));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.onPairingPingRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = n.id, e.prev = 1, r.isValidPing({
                                                topic: t
                                            }), e.next = 5, r.sendResult(s, t, !0);
                                        case 5:
                                            r.events.emit(ti, {
                                                id: s,
                                                topic: t
                                            }), e.next = 13;
                                            break;
                                        case 8:
                                            return e.prev = 8, e.t0 = e.catch(1), e.next = 12, r.sendError(s, t, e.t0);
                                        case 12:
                                            r.logger.error(e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), this.onPairingPingResponse = function(e, t) {
                            var n = t.id;
                            setTimeout((function() {
                                (0, Kt.isJsonRpcResult)(t) ? r.events.emit(we("pairing_ping", n), {}): (0, Kt.isJsonRpcError)(t) && r.events.emit(we("pairing_ping", n), {
                                    error: t.error
                                })
                            }), 500)
                        }, this.onPairingDeleteRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = n.id, e.prev = 1, r.isValidDisconnect({
                                                topic: t
                                            }), e.next = 5, r.deletePairing(t);
                                        case 5:
                                            r.events.emit(ei, {
                                                id: s,
                                                topic: t
                                            }), e.next = 13;
                                            break;
                                        case 8:
                                            return e.prev = 8, e.t0 = e.catch(1), e.next = 12, r.sendError(s, t, e.t0);
                                        case 12:
                                            r.logger.error(e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), this.onUnknownRpcMethodRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = n.id, a = n.method, e.prev = 1, !r.registeredMethods.includes(a)) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            return o = Ve("WC_METHOD_UNSUPPORTED", a), e.next = 7, r.sendError(s, t, o);
                                        case 7:
                                            r.logger.error(o), e.next = 15;
                                            break;
                                        case 10:
                                            return e.prev = 10, e.t0 = e.catch(1), e.next = 14, r.sendError(s, t, e.t0);
                                        case 14:
                                            r.logger.error(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 10]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), this.onUnknownRpcMethodResponse = function(e) {
                            r.registeredMethods.includes(e) || r.logger.error(Ve("WC_METHOD_UNSUPPORTED", e))
                        }, this.isValidPair = function(e) {
                            if (!st(e)) {
                                var t = ze("MISSING_OR_INVALID", "pair() params: ".concat(e)).message;
                                throw new Error(t)
                            }
                            if (! function(e) {
                                    if (Fe(e, !1)) try {
                                        return typeof new URL(e) < "u"
                                    } catch (t) {
                                        return !1
                                    }
                                    return !1
                                }(e.uri)) {
                                var n = ze("MISSING_OR_INVALID", "pair() uri: ".concat(e.uri)).message;
                                throw new Error(n)
                            }
                        }, this.isValidPing = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "ping() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, e.next = 6, r.isValidPairingTopic(a);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.isValidDisconnect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "disconnect() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, e.next = 6, r.isValidPairingTopic(a);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.isValidPairingTopic = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Fe(t, !1)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            if (r.pairings.keys.includes(t)) {
                                                e.next = 6;
                                                break
                                            }
                                            throw a = ze("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(t)), o = a.message, new Error(o);
                                        case 6:
                                            if (!be(r.pairings.get(t).expiry)) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 9, r.deletePairing(t);
                                        case 9:
                                            throw c = ze("EXPIRED", "pairing topic: ".concat(t)), u = c.message, new Error(u);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.core = t, this.logger = (0, Pt.generateChildLogger)(n, this.name), this.pairings = new zi(this.core, this.logger, this.name, this.storagePrefix)
                    }
                    return (0, o.Z)(e, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }, {
                        key: "registerRelayerEvents",
                        value: function() {
                            var e = this;
                            this.core.relayer.on(Tr, function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    var r, s, a;
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (r = n.topic, s = n.message, e.pairings.keys.includes(r) && !e.ignoredPayloadTypes.includes(e.core.crypto.getPayloadType(s))) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 3:
                                                return t.next = 5, e.core.crypto.decode(r, s);
                                            case 5:
                                                if (a = t.sent, t.prev = 6, !(0, Kt.isJsonRpcRequest)(a)) {
                                                    t.next = 11;
                                                    break
                                                }
                                                e.core.history.set(r, a), e.onRelayEventRequest({
                                                    topic: r,
                                                    payload: a
                                                }), t.next = 18;
                                                break;
                                            case 11:
                                                if (t.t0 = (0, Kt.isJsonRpcResponse)(a), !t.t0) {
                                                    t.next = 18;
                                                    break
                                                }
                                                return t.next = 15, e.core.history.resolve(a);
                                            case 15:
                                                return t.next = 17, e.onRelayEventResponse({
                                                    topic: r,
                                                    payload: a
                                                });
                                            case 17:
                                                e.core.history.delete(r, a.id);
                                            case 18:
                                                t.next = 23;
                                                break;
                                            case 20:
                                                t.prev = 20, t.t1 = t.catch(6), e.logger.error(t.t1);
                                            case 23:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [6, 20]
                                    ])
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                    }, {
                        key: "registerExpirerEvents",
                        value: function() {
                            var e = this;
                            this.core.expirer.on(ci, function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    var r, s;
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (r = ye(n.target), s = r.topic, t.t0 = s && e.pairings.keys.includes(s), !t.t0) {
                                                    t.next = 6;
                                                    break
                                                }
                                                return t.next = 5, e.deletePairing(s, !0);
                                            case 5:
                                                e.events.emit(Xr, {
                                                    topic: s
                                                });
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                    }]), e
                }(),
                Ki = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var o;
                        return (0, a.Z)(this, n), (o = t.call(this, e, r)).core = e, o.logger = r, o.records = new Map, o.events = new l.EventEmitter, o.name = "history", o.version = "0.3", o.cached = [], o.initialized = !1, o.storagePrefix = Ir, o.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = o.initialized, e.t0) {
                                            e.next = 9;
                                            break
                                        }
                                        return o.logger.trace("Initialized"), e.next = 5, o.restore();
                                    case 5:
                                        o.cached.forEach((function(e) {
                                            return o.records.set(e.id, e)
                                        })), o.cached = [], o.registerEventListeners(), o.initialized = !0;
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), o.set = function(e, t, n) {
                            if (o.isInitialized(), o.logger.debug("Setting JSON-RPC request history record"), o.logger.trace({
                                    type: "method",
                                    method: "set",
                                    topic: e,
                                    request: t,
                                    chainId: n
                                }), !o.records.has(t.id)) {
                                var r = {
                                    id: t.id,
                                    topic: e,
                                    request: {
                                        method: t.method,
                                        params: t.params || null
                                    },
                                    chainId: n,
                                    expiry: me(w.THIRTY_DAYS)
                                };
                                o.records.set(r.id, r), o.events.emit(ni, r)
                            }
                        }, o.resolve = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o.isInitialized(), o.logger.debug("Updating JSON-RPC response history record"), o.logger.trace({
                                                    type: "method",
                                                    method: "update",
                                                    response: t
                                                }), o.records.has(t.id)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, o.getRecord(t.id);
                                        case 4:
                                            typeof(n = e.sent).response > "u" && (n.response = (0, Kt.isJsonRpcError)(t) ? {
                                                error: t.error
                                            } : {
                                                result: t.result
                                            }, o.records.set(n.id, n), o.events.emit(ri, n));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), o.get = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.isInitialized(), o.logger.debug("Getting record"), o.logger.trace({
                                                type: "method",
                                                method: "get",
                                                topic: t,
                                                id: n
                                            }), e.next = 5, o.getRecord(n);
                                        case 5:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), o.delete = function(e, t) {
                            o.isInitialized(), o.logger.debug("Deleting record"), o.logger.trace({
                                type: "method",
                                method: "delete",
                                id: t
                            }), o.values.forEach((function(n) {
                                if (n.topic === e) {
                                    if (typeof t < "u" && n.id !== t) return;
                                    o.records.delete(n.id), o.events.emit(ii, n)
                                }
                            }))
                        }, o.exists = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o.isInitialized(), !o.records.has(n)) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 4, o.getRecord(n);
                                        case 4:
                                            e.t1 = e.sent.topic, e.t2 = t, e.t0 = e.t1 === e.t2, e.next = 10;
                                            break;
                                        case 9:
                                            e.t0 = !1;
                                        case 10:
                                            return e.abrupt("return", e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), o.on = function(e, t) {
                            o.events.on(e, t)
                        }, o.once = function(e, t) {
                            o.events.once(e, t)
                        }, o.off = function(e, t) {
                            o.events.off(e, t)
                        }, o.removeListener = function(e, t) {
                            o.events.removeListener(e, t)
                        }, o.logger = (0, Pt.generateChildLogger)(r, o.name), o
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.records.size
                        }
                    }, {
                        key: "keys",
                        get: function() {
                            return Array.from(this.records.keys())
                        }
                    }, {
                        key: "values",
                        get: function() {
                            return Array.from(this.records.values())
                        }
                    }, {
                        key: "pending",
                        get: function() {
                            var e = [];
                            return this.values.forEach((function(t) {
                                if (!(typeof t.response < "u")) {
                                    var n = {
                                        topic: t.topic,
                                        request: (0, Kt.formatJsonRpcRequest)(t.request.method, t.request.params, t.id),
                                        chainId: t.chainId
                                    };
                                    return e.push(n)
                                }
                            })), e
                        }
                    }, {
                        key: "setJsonRpcRecords",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.setItem(this.storageKey, t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getJsonRpcRecords",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.getItem(this.storageKey);
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getRecord",
                        value: function(e) {
                            this.isInitialized();
                            var t = this.records.get(e);
                            if (!t) {
                                var n = ze("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                                throw new Error(n)
                            }
                            return t
                        }
                    }, {
                        key: "persist",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.setJsonRpcRecords(this.values);
                                        case 2:
                                            this.events.emit(si);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restore",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getJsonRpcRecords();
                                        case 3:
                                            if (!(typeof(t = e.sent) > "u") && t.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (!this.records.size) {
                                                e.next = 9;
                                                break
                                            }
                                            throw n = ze("RESTORE_WILL_OVERRIDE", this.name), r = n.message, this.logger.error(r), new Error(r);
                                        case 9:
                                            this.cached = t, this.logger.debug("Successfully Restored records for ".concat(this.name)), this.logger.trace({
                                                type: "method",
                                                method: "restore",
                                                records: this.values
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), this.logger.debug("Failed to Restore records for ".concat(this.name)), this.logger.error(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 12]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var e = this;
                            this.events.on(ni, (function(t) {
                                var n = ni;
                                e.logger.info("Emitting ".concat(n)), e.logger.debug({
                                    type: "event",
                                    event: n,
                                    record: t
                                }), e.persist()
                            })), this.events.on(ri, (function(t) {
                                var n = ri;
                                e.logger.info("Emitting ".concat(n)), e.logger.debug({
                                    type: "event",
                                    event: n,
                                    record: t
                                }), e.persist()
                            })), this.events.on(ii, (function(t) {
                                var n = ii;
                                e.logger.info("Emitting ".concat(n)), e.logger.debug({
                                    type: "event",
                                    event: n,
                                    record: t
                                }), e.persist()
                            })), this.core.heartbeat.on(It.HEARTBEAT_EVENTS.pulse, (function() {
                                e.cleanup()
                            }))
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            var e = this;
                            try {
                                this.records.forEach((function(t) {
                                    (0, w.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (e.logger.info("Deleting expired history log: ".concat(t.id)), e.delete(t.topic, t.id))
                                }))
                            } catch (t) {
                                this.logger.warn(t)
                            }
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }]), n
                }(Ot),
                Hi = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var o;
                        return (0, a.Z)(this, n), (o = t.call(this, e, r)).core = e, o.logger = r, o.expirations = new Map, o.events = new l.EventEmitter, o.name = "expirer", o.version = "0.3", o.cached = [], o.initialized = !1, o.storagePrefix = Ir, o.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = o.initialized, e.t0) {
                                            e.next = 9;
                                            break
                                        }
                                        return o.logger.trace("Initialized"), e.next = 5, o.restore();
                                    case 5:
                                        o.cached.forEach((function(e) {
                                            return o.expirations.set(e.target, e)
                                        })), o.cached = [], o.registerEventListeners(), o.initialized = !0;
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), o.has = function(e) {
                            try {
                                var t = o.formatTarget(e);
                                return typeof o.getExpiration(t) < "u"
                            } catch (n) {
                                return !1
                            }
                        }, o.set = function(e, t) {
                            o.isInitialized();
                            var n = o.formatTarget(e),
                                r = {
                                    target: n,
                                    expiry: t
                                };
                            o.expirations.set(n, r), o.checkExpiry(n, r), o.events.emit(ai, {
                                target: n,
                                expiration: r
                            })
                        }, o.get = function(e) {
                            o.isInitialized();
                            var t = o.formatTarget(e);
                            return o.getExpiration(t)
                        }, o.del = function(e) {
                            if (o.isInitialized(), o.has(e)) {
                                var t = o.formatTarget(e),
                                    n = o.getExpiration(t);
                                o.expirations.delete(t), o.events.emit(oi, {
                                    target: t,
                                    expiration: n
                                })
                            }
                        }, o.on = function(e, t) {
                            o.events.on(e, t)
                        }, o.once = function(e, t) {
                            o.events.once(e, t)
                        }, o.off = function(e, t) {
                            o.events.off(e, t)
                        }, o.removeListener = function(e, t) {
                            o.events.removeListener(e, t)
                        }, o.logger = (0, Pt.generateChildLogger)(r, o.name), o
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "storageKey",
                        get: function() {
                            return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                        }
                    }, {
                        key: "length",
                        get: function() {
                            return this.expirations.size
                        }
                    }, {
                        key: "keys",
                        get: function() {
                            return Array.from(this.expirations.keys())
                        }
                    }, {
                        key: "values",
                        get: function() {
                            return Array.from(this.expirations.values())
                        }
                    }, {
                        key: "formatTarget",
                        value: function(e) {
                            if ("string" == typeof e) return function(e) {
                                return ge("topic", e)
                            }(e);
                            if ("number" == typeof e) return function(e) {
                                return ge("id", e)
                            }(e);
                            var t = ze("UNKNOWN_TYPE", "Target type: ".concat(typeof e)).message;
                            throw new Error(t)
                        }
                    }, {
                        key: "setExpirations",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.setItem(this.storageKey, t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getExpirations",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.core.storage.getItem(this.storageKey);
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "persist",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.setExpirations(this.values);
                                        case 2:
                                            this.events.emit(ui);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "restore",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getExpirations();
                                        case 3:
                                            if (!(typeof(t = e.sent) > "u") && t.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (!this.expirations.size) {
                                                e.next = 9;
                                                break
                                            }
                                            throw n = ze("RESTORE_WILL_OVERRIDE", this.name), r = n.message, this.logger.error(r), new Error(r);
                                        case 9:
                                            this.cached = t, this.logger.debug("Successfully Restored expirations for ".concat(this.name)), this.logger.trace({
                                                type: "method",
                                                method: "restore",
                                                expirations: this.values
                                            }), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(0), this.logger.debug("Failed to Restore expirations for ".concat(this.name)), this.logger.error(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 12]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getExpiration",
                        value: function(e) {
                            var t = this.expirations.get(e);
                            if (!t) {
                                var n = ze("NO_MATCHING_KEY", "".concat(this.name, ": ").concat(e)).message;
                                throw this.logger.error(n), new Error(n)
                            }
                            return t
                        }
                    }, {
                        key: "checkExpiry",
                        value: function(e, t) {
                            var n = t.expiry;
                            (0, w.toMiliseconds)(n) - Date.now() <= 0 && this.expire(e, t)
                        }
                    }, {
                        key: "expire",
                        value: function(e, t) {
                            this.expirations.delete(e), this.events.emit(ci, {
                                target: e,
                                expiration: t
                            })
                        }
                    }, {
                        key: "checkExpirations",
                        value: function() {
                            var e = this;
                            this.core.relayer.connected && this.expirations.forEach((function(t, n) {
                                return e.checkExpiry(n, t)
                            }))
                        }
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var e = this;
                            this.core.heartbeat.on(It.HEARTBEAT_EVENTS.pulse, (function() {
                                return e.checkExpirations()
                            })), this.events.on(ai, (function(t) {
                                var n = ai;
                                e.logger.info("Emitting ".concat(n)), e.logger.debug({
                                    type: "event",
                                    event: n,
                                    data: t
                                }), e.persist()
                            })), this.events.on(ci, (function(t) {
                                var n = ci;
                                e.logger.info("Emitting ".concat(n)), e.logger.debug({
                                    type: "event",
                                    event: n,
                                    data: t
                                }), e.persist()
                            })), this.events.on(oi, (function(t) {
                                var n = oi;
                                e.logger.info("Emitting ".concat(n)), e.logger.debug({
                                    type: "event",
                                    event: n,
                                    data: t
                                }), e.persist()
                            }))
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            if (!this.initialized) {
                                var e = ze("NOT_INITIALIZED", this.name).message;
                                throw new Error(e)
                            }
                        }
                    }]), n
                }(qt),
                Bi = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var o;
                        return (0, a.Z)(this, n), (o = t.call(this, e, r)).projectId = e, o.logger = r, o.name = pi, o.initialized = !1, o.queue = [], o.verifyDisabled = !1, o.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!o.verifyDisabled && !ae() && oe()) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t = li, o.verifyUrl !== t && o.removeIframe(), o.verifyUrl = t, e.prev = 4, e.next = 7, o.createIframe();
                                    case 7:
                                        e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(4), o.logger.info("Verify iframe failed to load: ".concat(o.verifyUrl)), o.logger.info(e.t0);
                                    case 12:
                                        if (o.initialized) {
                                            e.next = 22;
                                            break
                                        }
                                        return o.removeIframe(), o.verifyUrl = fi, e.prev = 14, e.next = 17, o.createIframe();
                                    case 17:
                                        e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19, e.t1 = e.catch(14), o.logger.info("Verify iframe failed to load: ".concat(o.verifyUrl)), o.logger.info(e.t1), o.verifyDisabled = !0;
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 9],
                                [14, 19]
                            ])
                        }))), o.register = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!o.initialized) {
                                                e.next = 4;
                                                break
                                            }
                                            o.sendPost(t.attestationId), e.next = 7;
                                            break;
                                        case 4:
                                            return o.addToQueue(t.attestationId), e.next = 7, o.init();
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), o.resolve = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!o.isDevEnv) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", "");
                                        case 2:
                                            return n = (null === t || void 0 === t ? void 0 : t.verifyUrl) || li, e.prev = 3, e.next = 6, o.fetchAttestation(t.attestationId, n);
                                        case 6:
                                            r = e.sent, e.next = 16;
                                            break;
                                        case 9:
                                            return e.prev = 9, e.t0 = e.catch(3), o.logger.info("failed to resolve attestation: ".concat(t.attestationId, " from url: ").concat(n)), o.logger.info(e.t0), e.next = 15, o.fetchAttestation(t.attestationId, fi);
                                        case 15:
                                            r = e.sent;
                                        case 16:
                                            return e.abrupt("return", r);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 9]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), o.fetchAttestation = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var r, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o.logger.info("resolving attestation: ".concat(t, " from url: ").concat(n)), r = o.startAbortTimer(2 * w.ONE_SECOND), e.next = 4, fetch("".concat(n, "/attestation/").concat(t), {
                                                signal: o.abortController.signal
                                            });
                                        case 4:
                                            if (s = e.sent, clearTimeout(r), 200 !== s.status) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 9, s.json();
                                        case 9:
                                            e.t0 = e.sent, e.next = 13;
                                            break;
                                        case 12:
                                            e.t0 = void 0;
                                        case 13:
                                            return e.abrupt("return", e.t0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), o.addToQueue = function(e) {
                            o.queue.push(e)
                        }, o.processQueue = function() {
                            0 !== o.queue.length && (o.queue.forEach((function(e) {
                                return o.sendPost(e)
                            })), o.queue = [])
                        }, o.sendPost = function(e) {
                            var t;
                            try {
                                if (!o.iframe) return;
                                null == (t = o.iframe.contentWindow) || t.postMessage(e, "*"), o.logger.info("postMessage sent: ".concat(e, " ").concat(o.verifyUrl))
                            } catch (n) {}
                        }, o.createIframe = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t, n;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = function e(n) {
                                            "verify_ready" === n.data && (o.initialized = !0, o.processQueue(), window.removeEventListener("message", e), t())
                                        }, e.next = 3, Promise.race([new Promise((function(e) {
                                            if (document.getElementById(pi)) return e();
                                            window.addEventListener("message", n);
                                            var r = document.createElement("iframe");
                                            r.id = pi, r.src = "".concat(o.verifyUrl, "/").concat(o.projectId), r.style.display = "none", document.body.append(r), o.iframe = r, t = e
                                        })), new Promise((function(e, t) {
                                            return setTimeout((function() {
                                                window.removeEventListener("message", n), t("verify iframe load timeout")
                                            }), (0, w.toMiliseconds)(w.FIVE_SECONDS))
                                        }))]);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), o.removeIframe = function() {
                            o.iframe && (o.iframe.remove(), o.iframe = void 0, o.initialized = !1)
                        }, o.logger = (0, Pt.generateChildLogger)(r, o.name), o.verifyUrl = li, o.abortController = new AbortController, o.isDevEnv = se() && {
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0,
                            FAST_REFRESH: !0,
                            REACT_APP_SOCKET_SERVICE: "https://socket.xbridge.tech/",
                            REACT_APP_BACKEND_SERVICE: "https://prod-api.xbridge.tech/",
                            REACT_APP_FRONTEND_SERVICE: "https://xbridge.tech/",
                            REACT_APP_ENVIRONMENT: "production",
                            REACT_APP_PROJECT_ID: "f71492b62c17fee4f9bd300208c408ad",
                            REACT_APP_ETHEREUM_CHAIN_ID: "1",
                            REACT_APP_BSC_CHAIN_ID: "56",
                            REACT_APP_LIMIT: "10",
                            REACT_APP_ETHEREUM_RPC_URL: "https://ethereum.blockpi.network/v1/rpc/996652ba334d101f1095978e2939e4010ac00da3",
                            REACT_APP_BSC_RPC_URL: "https://bsc.blockpi.network/v1/rpc/a3841cc3a85e5054379d726cfbfe77a834f35771",
                            REACT_APP_ETHEREUM_EXPLORER_URL: "https://etherscan.io/",
                            REACT_APP_BSC_EXPLORER_URL: "https://bscscan.com/",
                            REACT_APP_ETHEREUM_BRIDGE_CONTRACT_ADDRESS: "0x47Ddb6A433B76117a98FBeAb5320D8b67D468e31",
                            REACT_APP_ETHEREUM_FACTORY_ADDRESS: "0x0FCF7fd693EE04fbE0695A71Ab50ec940cf7F240",
                            REACT_APP_BSC_BRIDGE_CONTRACT_ADDRESS: "0xdAC6EA96c440FE6050C2453E5956b264f88eeC6a",
                            REACT_APP_BSC_FACTORY_ADDRESS: "0x0FCF7fd693EE04fbE0695A71Ab50ec940cf7F240",
                            REACT_APP_PAYMENT_CONTRACT_ADDRESS: "0xDED90a5f665F33Dca1D77EfB83445D9180eF28bC",
                            REACT_APP_GOERLI_CHAIN_ID: "5",
                            REACT_APP_GOERLI_RPC_URL: "https://goerli.blockpi.network/v1/rpc/3109095023abfeb1fbd65d5e4f22528d2781fa75",
                            REACT_APP_GOERLI_EXPLORER_URL: "https://goerli.etherscan.io/",
                            REACT_APP_GOERLI_BRIDGE_CONTRACT_ADDRESS: "0x81519c207174d0E56A1327ee3199c23911876c80",
                            REACT_APP_GOERLI_FACTORY_ADDRESS: "0x5dDe61bcC7ED801F5fc589eBBA261D9792E6abA6"
                        }.IS_VITEST, o
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "startAbortTimer",
                        value: function(e) {
                            var t = this;
                            return this.abortController = new AbortController, setTimeout((function() {
                                return t.abortController.abort()
                            }), (0, w.toMiliseconds)(e))
                        }
                    }]), n
                }(jt),
                Fi = Object.defineProperty,
                Gi = Object.getOwnPropertySymbols,
                Ji = Object.prototype.hasOwnProperty,
                Wi = Object.prototype.propertyIsEnumerable,
                Qi = function(e, t, n) {
                    return t in e ? Fi(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Yi = function(e, t) {
                    for (var n in t || (t = {})) Ji.call(t, n) && Qi(e, n, t[n]);
                    if (Gi) {
                        var r, i = (0, p.Z)(Gi(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                Wi.call(t, n) && Qi(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                $i = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e) {
                        var r;
                        (0, a.Z)(this, n), (r = t.call(this, e)).protocol = "wc", r.version = 2, r.name = Er, r.events = new l.EventEmitter, r.initialized = !1, r.on = function(e, t) {
                            return r.events.on(e, t)
                        }, r.once = function(e, t) {
                            return r.events.once(e, t)
                        }, r.off = function(e, t) {
                            return r.events.off(e, t)
                        }, r.removeListener = function(e, t) {
                            return r.events.removeListener(e, t)
                        }, r.projectId = null === e || void 0 === e ? void 0 : e.projectId, r.relayUrl = (null === e || void 0 === e ? void 0 : e.relayUrl) || Nr, r.customStoragePrefix = null != e && e.customStoragePrefix ? ":".concat(e.customStoragePrefix) : "";
                        var i = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Pt.pino)((0, Pt.getDefaultLoggerOptions)({
                            level: (null === e || void 0 === e ? void 0 : e.logger) || Pr
                        }));
                        return r.logger = (0, Pt.generateChildLogger)(i, r.name), r.heartbeat = new It.HeartBeat, r.crypto = new di((0, xt.Z)(r), r.logger, null === e || void 0 === e ? void 0 : e.keychain), r.history = new Ki((0, xt.Z)(r), r.logger), r.expirer = new Hi((0, xt.Z)(r), r.logger), r.storage = null != e && e.storage ? e.storage : new Et.ZP(Yi(Yi({}, Sr), null === e || void 0 === e ? void 0 : e.storageOptions)), r.relayer = new Ti({
                            core: (0, xt.Z)(r),
                            logger: r.logger,
                            relayUrl: r.relayUrl,
                            projectId: r.projectId
                        }), r.pairing = new Vi((0, xt.Z)(r), r.logger), r.verify = new Bi(r.projectId || "", r.logger), r
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = this.initialized, e.t0) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, this.initialize();
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.logger.trace("Initialized"), e.prev = 1, e.next = 4, this.crypto.init();
                                        case 4:
                                            return e.next = 6, this.history.init();
                                        case 6:
                                            return e.next = 8, this.expirer.init();
                                        case 8:
                                            return e.next = 10, this.relayer.init();
                                        case 10:
                                            return e.next = 12, this.heartbeat.init();
                                        case 12:
                                            return e.next = 14, this.pairing.init();
                                        case 14:
                                            this.initialized = !0, this.logger.info("Core Initialization Success"), e.next = 21;
                                            break;
                                        case 18:
                                            throw e.prev = 18, e.t0 = e.catch(1), this.logger.warn("Core Initialization Failure at epoch ".concat(Date.now()), e.t0), this.logger.error(e.t0.message), e.t0;
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 18]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }], [{
                        key: "init",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var r, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = new n(t), e.next = 3, r.initialize();
                                        case 3:
                                            return e.next = 5, r.crypto.getClientId();
                                        case 5:
                                            return s = e.sent, e.next = 8, r.storage.setItem("WALLETCONNECT_CLIENT_ID", s);
                                        case 8:
                                            return e.abrupt("return", r);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), n
                }(Rt),
                Xi = $i,
                es = "client",
                ts = "".concat("wc", "@").concat(2, ":").concat(es, ":"),
                ns = es,
                rs = "error",
                is = "WALLETCONNECT_DEEPLINK_CHOICE",
                ss = "Proposal expired",
                as = w.SEVEN_DAYS,
                os = {
                    wc_sessionPropose: {
                        req: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: w.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: w.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: w.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: w.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                cs = {
                    min: w.FIVE_MINUTES,
                    max: w.SEVEN_DAYS
                },
                us = "IDLE",
                ps = "ACTIVE",
                ls = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
                fs = Object.defineProperty,
                hs = Object.defineProperties,
                ds = Object.getOwnPropertyDescriptors,
                vs = Object.getOwnPropertySymbols,
                gs = Object.prototype.hasOwnProperty,
                ys = Object.prototype.propertyIsEnumerable,
                ms = function(e, t, n) {
                    return t in e ? fs(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                bs = function(e, t) {
                    for (var n in t || (t = {})) gs.call(t, n) && ms(e, n, t[n]);
                    if (vs) {
                        var r, i = (0, p.Z)(vs(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                ys.call(t, n) && ms(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                ws = function(e, t) {
                    return hs(e, ds(t))
                },
                xs = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e) {
                        var r;
                        return (0, a.Z)(this, n), (r = t.call(this, e)).name = "engine", r.events = new(f()), r.initialized = !1, r.ignoredPayloadTypes = [D], r.requestQueue = {
                            state: us,
                            queue: []
                        }, r.sessionRequestQueue = {
                            state: us,
                            queue: []
                        }, r.requestQueueDelay = w.ONE_SECOND, r.init = (0, s.Z)((0, i.Z)().mark((function e() {
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.t0 = r.initialized, e.t0) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 4, r.cleanup();
                                    case 4:
                                        r.registerRelayerEvents(), r.registerExpirerEvents(), r.registerPairingEvents(), r.client.core.pairing.register({
                                            methods: Object.keys(os)
                                        }), r.initialized = !0, setTimeout((function() {
                                            r.sessionRequestQueue.queue = r.getPendingSessionRequests(), r.processSessionRequestQueue()
                                        }), (0, w.toMiliseconds)(r.requestQueueDelay));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), r.connect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, a, o, c, u, p, l, f, h, d, v, g, y, m, b, x, _, k, Z, E, I, P;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return n = ws(bs({}, t), {
                                                requiredNamespaces: t.requiredNamespaces || {},
                                                optionalNamespaces: t.optionalNamespaces || {}
                                            }), e.next = 5, r.isValidConnect(n);
                                        case 5:
                                            if (a = n.pairingTopic, o = n.requiredNamespaces, c = n.optionalNamespaces, u = n.sessionProperties, p = n.relays, h = !1, (l = a) && (h = r.client.core.pairing.pairings.get(l).active), l && h) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 10, r.client.core.pairing.create();
                                        case 10:
                                            d = e.sent, v = d.topic, g = d.uri, l = v, f = g;
                                        case 14:
                                            return e.next = 16, r.client.core.crypto.generateKeyPair();
                                        case 16:
                                            if (y = e.sent, m = bs({
                                                    requiredNamespaces: o,
                                                    optionalNamespaces: c,
                                                    relays: null !== p && void 0 !== p ? p : [{
                                                        protocol: "irn"
                                                    }],
                                                    proposer: {
                                                        publicKey: y,
                                                        metadata: r.client.metadata
                                                    }
                                                }, u && {
                                                    sessionProperties: u
                                                }), b = de(w.FIVE_MINUTES, ss), x = b.reject, _ = b.resolve, k = b.done, r.events.once(we("session_connect"), function() {
                                                    var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                                        var n, s, a;
                                                        return (0, i.Z)().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    if (n = t.error, s = t.session, !n) {
                                                                        e.next = 5;
                                                                        break
                                                                    }
                                                                    x(n), e.next = 17;
                                                                    break;
                                                                case 5:
                                                                    if (!s) {
                                                                        e.next = 17;
                                                                        break
                                                                    }
                                                                    return s.self.publicKey = y, a = ws(bs({}, s), {
                                                                        requiredNamespaces: s.requiredNamespaces,
                                                                        optionalNamespaces: s.optionalNamespaces
                                                                    }), e.next = 10, r.client.session.set(s.topic, a);
                                                                case 10:
                                                                    return e.next = 12, r.setExpiry(s.topic, s.expiry);
                                                                case 12:
                                                                    if (e.t0 = l, !e.t0) {
                                                                        e.next = 16;
                                                                        break
                                                                    }
                                                                    return e.next = 16, r.client.core.pairing.updateMetadata({
                                                                        topic: l,
                                                                        metadata: s.peer.metadata
                                                                    });
                                                                case 16:
                                                                    _(a);
                                                                case 17:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })));
                                                    return function(t) {
                                                        return e.apply(this, arguments)
                                                    }
                                                }()), l) {
                                                e.next = 25;
                                                break
                                            }
                                            throw Z = ze("NO_MATCHING_KEY", "connect() pairing topic: ".concat(l)), E = Z.message, new Error(E);
                                        case 25:
                                            return e.next = 27, r.sendRequest({
                                                topic: l,
                                                method: "wc_sessionPropose",
                                                params: m
                                            });
                                        case 27:
                                            return I = e.sent, P = me(w.FIVE_MINUTES), e.next = 31, r.setProposal(I, bs({
                                                id: I,
                                                expiry: P
                                            }, m));
                                        case 31:
                                            return e.abrupt("return", {
                                                uri: f,
                                                approval: k
                                            });
                                        case 32:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.pair = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.client.core.pairing.pair(t);
                                        case 4:
                                            return e.abrupt("return", e.sent);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.approve = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p, l, f, h, d, v, g, y;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidApprove(t);
                                        case 4:
                                            return n = t.id, s = t.relayProtocol, a = t.namespaces, o = t.sessionProperties, c = r.client.proposal.get(n), u = c.pairingTopic, p = c.proposer, l = c.requiredNamespaces, f = c.optionalNamespaces, u = u || "", He(l) || (l = qe(a, "approve()")), e.next = 9, r.client.core.crypto.generateKeyPair();
                                        case 9:
                                            return h = e.sent, d = p.publicKey, e.next = 13, r.client.core.crypto.generateSharedKey(h, d);
                                        case 13:
                                            if (v = e.sent, e.t0 = u && n, !e.t0) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 18, r.client.core.pairing.updateMetadata({
                                                topic: u,
                                                metadata: p.metadata
                                            });
                                        case 18:
                                            return e.next = 20, r.sendResult({
                                                id: n,
                                                topic: u,
                                                result: {
                                                    relay: {
                                                        protocol: null !== s && void 0 !== s ? s : "irn"
                                                    },
                                                    responderPublicKey: h
                                                }
                                            });
                                        case 20:
                                            return e.next = 22, r.client.proposal.delete(n, Ve("USER_DISCONNECTED"));
                                        case 22:
                                            return e.next = 24, r.client.core.pairing.activate({
                                                topic: u
                                            });
                                        case 24:
                                            return g = bs({
                                                relay: {
                                                    protocol: null !== s && void 0 !== s ? s : "irn"
                                                },
                                                namespaces: a,
                                                requiredNamespaces: l,
                                                optionalNamespaces: f,
                                                pairingTopic: u,
                                                controller: {
                                                    publicKey: h,
                                                    metadata: r.client.metadata
                                                },
                                                expiry: me(as)
                                            }, o && {
                                                sessionProperties: o
                                            }), e.next = 27, r.client.core.relayer.subscribe(v);
                                        case 27:
                                            return e.next = 29, r.sendRequest({
                                                topic: v,
                                                method: "wc_sessionSettle",
                                                params: g,
                                                throwOnFailedPublish: !0
                                            });
                                        case 29:
                                            return y = ws(bs({}, g), {
                                                topic: v,
                                                pairingTopic: u,
                                                acknowledged: !1,
                                                self: g.controller,
                                                peer: {
                                                    publicKey: p.publicKey,
                                                    metadata: p.metadata
                                                },
                                                controller: h
                                            }), e.next = 32, r.client.session.set(v, y);
                                        case 32:
                                            return e.next = 34, r.setExpiry(v, me(as));
                                        case 34:
                                            return e.abrupt("return", {
                                                topic: v,
                                                acknowledged: function() {
                                                    return new Promise((function(e) {
                                                        return setTimeout((function() {
                                                            return e(r.client.session.get(v))
                                                        }), 500)
                                                    }))
                                                }
                                            });
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.reject = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidReject(t);
                                        case 4:
                                            if (n = t.id, s = t.reason, a = r.client.proposal.get(n), o = a.pairingTopic, e.t0 = o, !e.t0) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 9, r.sendError(n, o, s);
                                        case 9:
                                            return e.next = 11, r.client.proposal.delete(n, Ve("USER_DISCONNECTED"));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.update = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidUpdate(t);
                                        case 4:
                                            return n = t.topic, s = t.namespaces, e.next = 8, r.sendRequest({
                                                topic: n,
                                                method: "wc_sessionUpdate",
                                                params: {
                                                    namespaces: s
                                                }
                                            });
                                        case 8:
                                            return a = e.sent, o = de(), c = o.done, u = o.resolve, p = o.reject, r.events.once(we("session_update", a), (function(e) {
                                                var t = e.error;
                                                t ? p(t) : u()
                                            })), e.next = 16, r.client.session.update(n, {
                                                namespaces: s
                                            });
                                        case 16:
                                            return e.abrupt("return", {
                                                acknowledged: c
                                            });
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.extend = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidExtend(t);
                                        case 4:
                                            return n = t.topic, e.next = 7, r.sendRequest({
                                                topic: n,
                                                method: "wc_sessionExtend",
                                                params: {}
                                            });
                                        case 7:
                                            return s = e.sent, a = de(), o = a.done, c = a.resolve, u = a.reject, r.events.once(we("session_extend", s), (function(e) {
                                                var t = e.error;
                                                t ? u(t) : c()
                                            })), e.next = 15, r.setExpiry(n, me(as));
                                        case 15:
                                            return e.abrupt("return", {
                                                acknowledged: o
                                            });
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.request = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, a, o, c, u, p, l, f, h;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidRequest(t);
                                        case 4:
                                            return n = t.chainId, a = t.request, o = t.topic, c = t.expiry, u = (0, Kt.payloadId)(), p = de(c, "Request expired. Please try again."), l = p.done, f = p.resolve, h = p.reject, r.events.once(we("session_request", u), (function(e) {
                                                var t = e.error,
                                                    n = e.result;
                                                t ? h(t) : f(n)
                                            })), e.next = 8, Promise.all([new Promise(function() {
                                                var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                                    return (0, i.Z)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, r.sendRequest({
                                                                    clientRpcId: u,
                                                                    topic: o,
                                                                    method: "wc_sessionRequest",
                                                                    params: {
                                                                        request: a,
                                                                        chainId: n
                                                                    },
                                                                    expiry: c,
                                                                    throwOnFailedPublish: !0
                                                                }).catch((function(e) {
                                                                    return h(e)
                                                                }));
                                                            case 2:
                                                                r.client.events.emit("session_request_sent", {
                                                                    topic: o,
                                                                    request: a,
                                                                    chainId: n,
                                                                    id: u
                                                                }), t();
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), new Promise(function() {
                                                var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                                    var n;
                                                    return (0, i.Z)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, r.client.core.storage.getItem(is);
                                                            case 2:
                                                                n = e.sent, _e({
                                                                    id: u,
                                                                    topic: o,
                                                                    wcDeepLink: n
                                                                }), t();
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()), l()]).then((function(e) {
                                                return e[2]
                                            }));
                                        case 8:
                                            return e.abrupt("return", e.sent);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.respond = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidRespond(t);
                                        case 4:
                                            if (n = t.topic, s = t.response, a = s.id, !(0, Kt.isJsonRpcResult)(s)) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 8, r.sendResult({
                                                id: a,
                                                topic: n,
                                                result: s.result,
                                                throwOnFailedPublish: !0
                                            });
                                        case 8:
                                            e.next = 14;
                                            break;
                                        case 10:
                                            if (e.t0 = (0, Kt.isJsonRpcError)(s), !e.t0) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.next = 14, r.sendError(a, n, s.error);
                                        case 14:
                                            r.cleanupAfterResponse(t);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.ping = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidPing(t);
                                        case 4:
                                            if (n = t.topic, !r.client.session.keys.includes(n)) {
                                                e.next = 18;
                                                break
                                            }
                                            return e.next = 8, r.sendRequest({
                                                topic: n,
                                                method: "wc_sessionPing",
                                                params: {}
                                            });
                                        case 8:
                                            return s = e.sent, a = de(), o = a.done, c = a.resolve, u = a.reject, r.events.once(we("session_ping", s), (function(e) {
                                                var t = e.error;
                                                t ? u(t) : c()
                                            })), e.next = 16, o();
                                        case 16:
                                            e.next = 22;
                                            break;
                                        case 18:
                                            if (e.t0 = r.client.core.pairing.pairings.keys.includes(n), !e.t0) {
                                                e.next = 22;
                                                break
                                            }
                                            return e.next = 22, r.client.core.pairing.ping({
                                                topic: n
                                            });
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.emit = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidEmit(t);
                                        case 4:
                                            return n = t.topic, s = t.event, a = t.chainId, e.next = 7, r.sendRequest({
                                                topic: n,
                                                method: "wc_sessionEvent",
                                                params: {
                                                    event: s,
                                                    chainId: a
                                                }
                                            });
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.disconnect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.isInitialized();
                                        case 2:
                                            return e.next = 4, r.isValidDisconnect(t);
                                        case 4:
                                            if (n = t.topic, !r.client.session.keys.includes(n)) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 8, r.sendRequest({
                                                topic: n,
                                                method: "wc_sessionDelete",
                                                params: Ve("USER_DISCONNECTED"),
                                                throwOnFailedPublish: !0
                                            });
                                        case 8:
                                            return e.next = 10, r.deleteSession(n);
                                        case 10:
                                            e.next = 14;
                                            break;
                                        case 12:
                                            return e.next = 14, r.client.core.pairing.disconnect({
                                                topic: n
                                            });
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.find = function(e) {
                            return r.isInitialized(), r.client.session.getAll().filter((function(t) {
                                return function(e, t) {
                                    var n = t.requiredNamespaces,
                                        r = Object.keys(e.namespaces),
                                        i = Object.keys(n),
                                        s = !0;
                                    return !!le(i, r) && (r.forEach((function(t) {
                                        var r = e.namespaces[t],
                                            i = r.accounts,
                                            a = r.methods,
                                            o = r.events,
                                            c = De(i),
                                            u = n[t];
                                        (!le(R(t, u), c) || !le(u.methods, a) || !le(u.events, o)) && (s = !1)
                                    })), s)
                                }(t, e)
                            }))
                        }, r.getPendingSessionRequests = function() {
                            return r.isInitialized(), r.client.pendingRequest.getAll()
                        }, r.cleanupDuplicatePairings = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.pairingTopic) {
                                                e.next = 14;
                                                break
                                            }
                                            if (e.prev = 1, n = r.client.core.pairing.pairings.get(t.pairingTopic), s = r.client.core.pairing.pairings.getAll().filter((function(e) {
                                                    var r, i;
                                                    return (null == (r = e.peerMetadata) ? void 0 : r.url) && (null == (i = e.peerMetadata) ? void 0 : i.url) === t.peer.metadata.url && e.topic && e.topic !== n.topic
                                                })), 0 !== s.length) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return r.client.logger.info("Cleaning up ".concat(s.length, " duplicate pairing(s)")), e.next = 8, Promise.all(s.map((function(e) {
                                                return r.client.core.pairing.disconnect({
                                                    topic: e.topic
                                                })
                                            })));
                                        case 8:
                                            r.client.logger.info("Duplicate pairings clean up finished"), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(1), r.client.logger.error(e.t0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 11]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.deleteSession = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = r.client.session.get(t), a = s.self, e.next = 3, r.client.core.relayer.unsubscribe(t);
                                        case 3:
                                            if (r.client.session.delete(t, Ve("USER_DISCONNECTED")), e.t0 = r.client.core.crypto.keychain.has(a.publicKey), !e.t0) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 8, r.client.core.crypto.deleteKeyPair(a.publicKey);
                                        case 8:
                                            if (e.t1 = r.client.core.crypto.keychain.has(t), !e.t1) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 12, r.client.core.crypto.deleteSymKey(t);
                                        case 12:
                                            n || r.client.core.expirer.del(t), r.client.core.storage.removeItem(is).catch((function(e) {
                                                return r.client.logger.warn(e)
                                            }));
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.deleteProposal = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Promise.all([r.client.proposal.delete(t, Ve("USER_DISCONNECTED")), n ? Promise.resolve() : r.client.core.expirer.del(t)]);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.deletePendingSessionRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a = arguments;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = a.length > 2 && void 0 !== a[2] && a[2], e.next = 3, Promise.all([r.client.pendingRequest.delete(t, n), s ? Promise.resolve() : r.client.core.expirer.del(t)]);
                                        case 3:
                                            r.sessionRequestQueue.queue = r.sessionRequestQueue.queue.filter((function(e) {
                                                return e.id !== t
                                            })), s && (r.sessionRequestQueue.state = us);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.setExpiry = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = r.client.session.keys.includes(t), !e.t0) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, r.client.session.update(t, {
                                                expiry: n
                                            });
                                        case 4:
                                            r.client.core.expirer.set(t, n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.setProposal = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.client.proposal.set(t, n);
                                        case 2:
                                            r.client.core.expirer.set(t, n.expiry);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.setPendingSessionRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = os.wc_sessionRequest.req.ttl, s = t.id, a = t.topic, o = t.params, c = t.verifyContext, e.next = 3, r.client.pendingRequest.set(s, {
                                                id: s,
                                                topic: a,
                                                params: o,
                                                verifyContext: c
                                            });
                                        case 3:
                                            n && r.client.core.expirer.set(s, me(n));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.sendRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p, l, f, h, d;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.topic, s = t.method, a = t.params, o = t.expiry, c = t.relayRpcId, u = t.clientRpcId, p = t.throwOnFailedPublish, l = (0, Kt.formatJsonRpcRequest)(s, a, u), oe() && ls.includes(s) && (f = V(JSON.stringify(l)), r.client.core.verify.register({
                                                attestationId: f
                                            })), e.next = 4, r.client.core.crypto.encode(n, l);
                                        case 4:
                                            if (h = e.sent, d = os[s].req, o && (d.ttl = o), c && (d.id = c), r.client.core.history.set(n, l), !p) {
                                                e.next = 15;
                                                break
                                            }
                                            return d.internal = ws(bs({}, d.internal), {
                                                throwOnFailedPublish: !0
                                            }), e.next = 13, r.client.core.relayer.publish(n, h, d);
                                        case 13:
                                            e.next = 16;
                                            break;
                                        case 15:
                                            r.client.core.relayer.publish(n, h, d).catch((function(e) {
                                                return r.client.logger.error(e)
                                            }));
                                        case 16:
                                            return e.abrupt("return", l.id);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.sendResult = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p, l;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.id, s = t.topic, a = t.result, o = t.throwOnFailedPublish, c = (0, Kt.formatJsonRpcResult)(n, a), e.next = 7, r.client.core.crypto.encode(s, c);
                                        case 7:
                                            return u = e.sent, e.next = 10, r.client.core.history.get(s, n);
                                        case 10:
                                            if (p = e.sent, l = os[p.request.method].res, !o) {
                                                e.next = 18;
                                                break
                                            }
                                            return l.internal = ws(bs({}, l.internal), {
                                                throwOnFailedPublish: !0
                                            }), e.next = 16, r.client.core.relayer.publish(s, u, l);
                                        case 16:
                                            e.next = 19;
                                            break;
                                        case 18:
                                            r.client.core.relayer.publish(s, u, l).catch((function(e) {
                                                return r.client.logger.error(e)
                                            }));
                                        case 19:
                                            return e.next = 21, r.client.core.history.resolve(c);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.sendError = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n, s) {
                                var a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = (0, Kt.formatJsonRpcError)(t, s), e.next = 3, r.client.core.crypto.encode(n, a);
                                        case 3:
                                            return o = e.sent, e.next = 6, r.client.core.history.get(n, t);
                                        case 6:
                                            return c = e.sent, u = os[c.request.method].res, r.client.core.relayer.publish(n, o, u), e.next = 11, r.client.core.history.resolve(a);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(), r.cleanup = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t, n;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = [], n = [], r.client.session.getAll().forEach((function(e) {
                                            be(e.expiry) && t.push(e.topic)
                                        })), r.client.proposal.getAll().forEach((function(e) {
                                            be(e.expiry) && n.push(e.id)
                                        })), e.next = 5, Promise.all([].concat((0, c.Z)(t.map((function(e) {
                                            return r.deleteSession(e)
                                        }))), (0, c.Z)(n.map((function(e) {
                                            return r.deleteProposal(e)
                                        })))));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), r.onRelayEventRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.requestQueue.queue.push(t), e.next = 3, r.processRequestsQueue();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.processRequestsQueue = (0, s.Z)((0, i.Z)().mark((function e() {
                            var t;
                            return (0, i.Z)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r.requestQueue.state !== ps) {
                                            e.next = 3;
                                            break
                                        }
                                        return r.client.logger.info("Request queue already active, skipping..."), e.abrupt("return");
                                    case 3:
                                        r.client.logger.info("Request queue starting with ".concat(r.requestQueue.queue.length, " requests"));
                                    case 4:
                                        if (!(r.requestQueue.queue.length > 0)) {
                                            e.next = 19;
                                            break
                                        }
                                        if (r.requestQueue.state = ps, !(t = r.requestQueue.queue.shift())) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.prev = 8, r.processRequest(t), e.next = 12, new Promise((function(e) {
                                            return setTimeout(e, 300)
                                        }));
                                    case 12:
                                        e.next = 17;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(8), r.client.logger.warn(e.t0);
                                    case 17:
                                        e.next = 4;
                                        break;
                                    case 19:
                                        r.requestQueue.state = us;
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [8, 14]
                            ])
                        }))), r.processRequest = function(e) {
                            var t = e.topic,
                                n = e.payload,
                                i = n.method;
                            switch (i) {
                                case "wc_sessionPropose":
                                    return r.onSessionProposeRequest(t, n);
                                case "wc_sessionSettle":
                                    return r.onSessionSettleRequest(t, n);
                                case "wc_sessionUpdate":
                                    return r.onSessionUpdateRequest(t, n);
                                case "wc_sessionExtend":
                                    return r.onSessionExtendRequest(t, n);
                                case "wc_sessionPing":
                                    return r.onSessionPingRequest(t, n);
                                case "wc_sessionDelete":
                                    return r.onSessionDeleteRequest(t, n);
                                case "wc_sessionRequest":
                                    return r.onSessionRequest(t, n);
                                case "wc_sessionEvent":
                                    return r.onSessionEventRequest(t, n);
                                default:
                                    return r.client.logger.info("Unsupported request method ".concat(i))
                            }
                        }, r.onRelayEventResponse = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.topic, s = t.payload, e.next = 4, r.client.core.history.get(n, s.id);
                                        case 4:
                                            a = e.sent.request.method, e.t0 = a, e.next = "wc_sessionPropose" === e.t0 ? 8 : "wc_sessionSettle" === e.t0 ? 9 : "wc_sessionUpdate" === e.t0 ? 10 : "wc_sessionExtend" === e.t0 ? 11 : "wc_sessionPing" === e.t0 ? 12 : "wc_sessionRequest" === e.t0 ? 13 : 14;
                                            break;
                                        case 8:
                                            return e.abrupt("return", r.onSessionProposeResponse(n, s));
                                        case 9:
                                            return e.abrupt("return", r.onSessionSettleResponse(n, s));
                                        case 10:
                                            return e.abrupt("return", r.onSessionUpdateResponse(n, s));
                                        case 11:
                                            return e.abrupt("return", r.onSessionExtendResponse(n, s));
                                        case 12:
                                            return e.abrupt("return", r.onSessionPingResponse(n, s));
                                        case 13:
                                            return e.abrupt("return", r.onSessionRequestResponse(n, s));
                                        case 14:
                                            return e.abrupt("return", r.client.logger.info("Unsupported response method ".concat(a)));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onRelayEventUnknownPayload = function(e) {
                            var t = e.topic,
                                n = ze("MISSING_OR_INVALID", "Decoded payload on topic ".concat(t, " is not identifiable as a JSON-RPC request or a response.")).message;
                            throw new Error(n)
                        }, r.onSessionProposeRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o, c, u, p;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = n.params, a = n.id, e.prev = 1, r.isValidConnect(bs({}, n.params)), o = me(w.FIVE_MINUTES), c = bs({
                                                id: a,
                                                pairingTopic: t,
                                                expiry: o
                                            }, s), e.next = 6, r.setProposal(a, c);
                                        case 6:
                                            return u = V(JSON.stringify(n)), e.next = 9, r.getVerifyContext(u, c.proposer.metadata);
                                        case 9:
                                            p = e.sent, r.client.events.emit("session_proposal", {
                                                id: a,
                                                params: c,
                                                verifyContext: p
                                            }), e.next = 18;
                                            break;
                                        case 13:
                                            return e.prev = 13, e.t0 = e.catch(1), e.next = 17, r.sendError(a, t, e.t0);
                                        case 17:
                                            r.client.logger.error(e.t0);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 13]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionProposeResponse = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o, c, u, p, l;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = n.id, !(0, Kt.isJsonRpcResult)(n)) {
                                                e.next = 22;
                                                break
                                            }
                                            return a = n.result, r.client.logger.trace({
                                                type: "method",
                                                method: "onSessionProposeResponse",
                                                result: a
                                            }), o = r.client.proposal.get(s), r.client.logger.trace({
                                                type: "method",
                                                method: "onSessionProposeResponse",
                                                proposal: o
                                            }), c = o.proposer.publicKey, r.client.logger.trace({
                                                type: "method",
                                                method: "onSessionProposeResponse",
                                                selfPublicKey: c
                                            }), u = a.responderPublicKey, r.client.logger.trace({
                                                type: "method",
                                                method: "onSessionProposeResponse",
                                                peerPublicKey: u
                                            }), e.next = 12, r.client.core.crypto.generateSharedKey(c, u);
                                        case 12:
                                            return p = e.sent, r.client.logger.trace({
                                                type: "method",
                                                method: "onSessionProposeResponse",
                                                sessionTopic: p
                                            }), e.next = 16, r.client.core.relayer.subscribe(p);
                                        case 16:
                                            return l = e.sent, r.client.logger.trace({
                                                type: "method",
                                                method: "onSessionProposeResponse",
                                                subscriptionId: l
                                            }), e.next = 20, r.client.core.pairing.activate({
                                                topic: t
                                            });
                                        case 20:
                                            e.next = 27;
                                            break;
                                        case 22:
                                            if (e.t0 = (0, Kt.isJsonRpcError)(n), !e.t0) {
                                                e.next = 27;
                                                break
                                            }
                                            return e.next = 26, r.client.proposal.delete(s, Ve("USER_DISCONNECTED"));
                                        case 26:
                                            r.events.emit(we("session_connect"), {
                                                error: n.error
                                            });
                                        case 27:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionSettleRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o, c, u, p, l, f, h, d, v, g;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = n.id, a = n.params, e.prev = 1, r.isValidSessionSettleRequest(a), o = n.params, c = o.relay, u = o.controller, p = o.expiry, l = o.namespaces, f = o.requiredNamespaces, h = o.optionalNamespaces, d = o.sessionProperties, v = o.pairingTopic, g = bs({
                                                topic: t,
                                                relay: c,
                                                expiry: p,
                                                namespaces: l,
                                                acknowledged: !0,
                                                pairingTopic: v,
                                                requiredNamespaces: f,
                                                optionalNamespaces: h,
                                                controller: u.publicKey,
                                                self: {
                                                    publicKey: "",
                                                    metadata: r.client.metadata
                                                },
                                                peer: {
                                                    publicKey: u.publicKey,
                                                    metadata: u.metadata
                                                }
                                            }, d && {
                                                sessionProperties: d
                                            }), e.next = 6, r.sendResult({
                                                id: n.id,
                                                topic: t,
                                                result: !0
                                            });
                                        case 6:
                                            r.events.emit(we("session_connect"), {
                                                session: g
                                            }), r.cleanupDuplicatePairings(g), e.next = 15;
                                            break;
                                        case 10:
                                            return e.prev = 10, e.t0 = e.catch(1), e.next = 14, r.sendError(s, t, e.t0);
                                        case 14:
                                            r.client.logger.error(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 10]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionSettleResponse = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = n.id, !(0, Kt.isJsonRpcResult)(n)) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.next = 4, r.client.session.update(t, {
                                                acknowledged: !0
                                            });
                                        case 4:
                                            r.events.emit(we("session_approve", s), {}), e.next = 12;
                                            break;
                                        case 7:
                                            if (e.t0 = (0, Kt.isJsonRpcError)(n), !e.t0) {
                                                e.next = 12;
                                                break
                                            }
                                            return e.next = 11, r.client.session.delete(t, Ve("USER_DISCONNECTED"));
                                        case 11:
                                            r.events.emit(we("session_approve", s), {
                                                error: n.error
                                            });
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionUpdateRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = n.params, a = n.id, e.prev = 1, o = "".concat(t, "_session_update"), !(c = wt.get(o)) || !r.isRequestOutOfSync(c, a)) {
                                                e.next = 6;
                                                break
                                            }
                                            return r.client.logger.info("Discarding out of sync request - ".concat(a)), e.abrupt("return");
                                        case 6:
                                            return r.isValidUpdate(bs({
                                                topic: t
                                            }, s)), e.next = 9, r.client.session.update(t, {
                                                namespaces: s.namespaces
                                            });
                                        case 9:
                                            return e.next = 11, r.sendResult({
                                                id: a,
                                                topic: t,
                                                result: !0
                                            });
                                        case 11:
                                            r.client.events.emit("session_update", {
                                                id: a,
                                                topic: t,
                                                params: s
                                            }), wt.set(o, a), e.next = 20;
                                            break;
                                        case 15:
                                            return e.prev = 15, e.t0 = e.catch(1), e.next = 19, r.sendError(a, t, e.t0);
                                        case 19:
                                            r.client.logger.error(e.t0);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 15]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isRequestOutOfSync = function(e, t) {
                            return parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3))
                        }, r.onSessionUpdateResponse = function(e, t) {
                            var n = t.id;
                            (0, Kt.isJsonRpcResult)(t) ? r.events.emit(we("session_update", n), {}): (0, Kt.isJsonRpcError)(t) && r.events.emit(we("session_update", n), {
                                error: t.error
                            })
                        }, r.onSessionExtendRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = n.id, e.prev = 1, r.isValidExtend({
                                                topic: t
                                            }), e.next = 5, r.setExpiry(t, me(as));
                                        case 5:
                                            return e.next = 7, r.sendResult({
                                                id: s,
                                                topic: t,
                                                result: !0
                                            });
                                        case 7:
                                            r.client.events.emit("session_extend", {
                                                id: s,
                                                topic: t
                                            }), e.next = 15;
                                            break;
                                        case 10:
                                            return e.prev = 10, e.t0 = e.catch(1), e.next = 14, r.sendError(s, t, e.t0);
                                        case 14:
                                            r.client.logger.error(e.t0);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 10]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionExtendResponse = function(e, t) {
                            var n = t.id;
                            (0, Kt.isJsonRpcResult)(t) ? r.events.emit(we("session_extend", n), {}): (0, Kt.isJsonRpcError)(t) && r.events.emit(we("session_extend", n), {
                                error: t.error
                            })
                        }, r.onSessionPingRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = n.id, e.prev = 1, r.isValidPing({
                                                topic: t
                                            }), e.next = 5, r.sendResult({
                                                id: s,
                                                topic: t,
                                                result: !0
                                            });
                                        case 5:
                                            r.client.events.emit("session_ping", {
                                                id: s,
                                                topic: t
                                            }), e.next = 13;
                                            break;
                                        case 8:
                                            return e.prev = 8, e.t0 = e.catch(1), e.next = 12, r.sendError(s, t, e.t0);
                                        case 12:
                                            r.client.logger.error(e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionPingResponse = function(e, t) {
                            var n = t.id;
                            setTimeout((function() {
                                (0, Kt.isJsonRpcResult)(t) ? r.events.emit(we("session_ping", n), {}): (0, Kt.isJsonRpcError)(t) && r.events.emit(we("session_ping", n), {
                                    error: t.error
                                })
                            }), 500)
                        }, r.onSessionDeleteRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = n.id, e.prev = 1, r.isValidDisconnect({
                                                topic: t,
                                                reason: n.params
                                            }), e.next = 5, Promise.all([new Promise((function(e) {
                                                r.client.core.relayer.once(Mr, (0, s.Z)((0, i.Z)().mark((function n() {
                                                    return (0, i.Z)().wrap((function(n) {
                                                        for (;;) switch (n.prev = n.next) {
                                                            case 0:
                                                                return n.t0 = e, n.next = 3, r.deleteSession(t);
                                                            case 3:
                                                                n.t1 = n.sent, (0, n.t0)(n.t1);
                                                            case 5:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                }))))
                                            })), r.sendResult({
                                                id: a,
                                                topic: t,
                                                result: !0
                                            })]);
                                        case 5:
                                            r.client.events.emit("session_delete", {
                                                id: a,
                                                topic: t
                                            }), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), r.client.logger.error(e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o, c, u, p;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = n.id, a = n.params, e.prev = 1, r.isValidRequest(bs({
                                                topic: t
                                            }, a)), o = V(JSON.stringify((0, Kt.formatJsonRpcRequest)("wc_sessionRequest", a, s))), c = r.client.session.get(t), e.next = 7, r.getVerifyContext(o, c.peer.metadata);
                                        case 7:
                                            return u = e.sent, p = {
                                                id: s,
                                                topic: t,
                                                params: a,
                                                verifyContext: u
                                            }, e.next = 11, r.setPendingSessionRequest(p);
                                        case 11:
                                            r.addSessionRequestToSessionRequestQueue(p), r.processSessionRequestQueue(), e.next = 20;
                                            break;
                                        case 15:
                                            return e.prev = 15, e.t0 = e.catch(1), e.next = 19, r.sendError(s, t, e.t0);
                                        case 19:
                                            r.client.logger.error(e.t0);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 15]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.onSessionRequestResponse = function(e, t) {
                            var n = t.id;
                            (0, Kt.isJsonRpcResult)(t) ? r.events.emit(we("session_request", n), {
                                result: t.result
                            }): (0, Kt.isJsonRpcError)(t) && r.events.emit(we("session_request", n), {
                                error: t.error
                            })
                        }, r.onSessionEventRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = n.id, a = n.params, e.prev = 1, o = "".concat(t, "_session_event_").concat(a.event.name), !(c = wt.get(o)) || !r.isRequestOutOfSync(c, s)) {
                                                e.next = 6;
                                                break
                                            }
                                            return r.client.logger.info("Discarding out of sync request - ".concat(s)), e.abrupt("return");
                                        case 6:
                                            r.isValidEmit(bs({
                                                topic: t
                                            }, a)), r.client.events.emit("session_event", {
                                                id: s,
                                                topic: t,
                                                params: a
                                            }), wt.set(o, s), e.next = 14;
                                            break;
                                        case 9:
                                            return e.prev = 9, e.t0 = e.catch(1), e.next = 13, r.sendError(s, t, e.t0);
                                        case 13:
                                            r.client.logger.error(e.t0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 9]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.addSessionRequestToSessionRequestQueue = function(e) {
                            r.sessionRequestQueue.queue.push(e)
                        }, r.cleanupAfterResponse = function(e) {
                            r.deletePendingSessionRequest(e.response.id, {
                                message: "fulfilled",
                                code: 0
                            }), setTimeout((function() {
                                r.sessionRequestQueue.state = us, r.processSessionRequestQueue()
                            }), (0, w.toMiliseconds)(r.requestQueueDelay))
                        }, r.processSessionRequestQueue = function() {
                            if (r.sessionRequestQueue.state !== ps) {
                                var e = r.sessionRequestQueue.queue[0];
                                if (e) try {
                                    r.sessionRequestQueue.state = ps, r.client.events.emit("session_request", e)
                                } catch (t) {
                                    r.client.logger.error(t)
                                } else r.client.logger.info("session request queue is empty.")
                            } else r.client.logger.info("session request queue is already active.")
                        }, r.onPairingCreated = function(e) {
                            if (!e.active) {
                                var t = r.client.proposal.getAll().find((function(t) {
                                    return t.pairingTopic === e.topic
                                }));
                                t && r.onSessionProposeRequest(e.topic, (0, Kt.formatJsonRpcRequest)("wc_sessionPropose", {
                                    requiredNamespaces: t.requiredNamespaces,
                                    optionalNamespaces: t.optionalNamespaces,
                                    relays: t.relays,
                                    proposer: t.proposer
                                }, t.id))
                            }
                        }, r.isValidConnect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p, l, f;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "connect() params: ".concat(JSON.stringify(t))), s = n.message, new Error(s);
                                        case 3:
                                            if (a = t.pairingTopic, o = t.requiredNamespaces, c = t.optionalNamespaces, u = t.sessionProperties, p = t.relays, e.t0 = Be(a), e.t0) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 8, r.isValidPairingTopic(a);
                                        case 8:
                                            if (rt(p, !0)) {
                                                e.next = 11;
                                                break
                                            }
                                            throw l = ze("MISSING_OR_INVALID", "connect() relays: ".concat(p)), f = l.message, new Error(f);
                                        case 11:
                                            !Be(o) && 0 !== He(o) && r.validateNamespaces(o, "requiredNamespaces"), !Be(c) && 0 !== He(c) && r.validateNamespaces(c, "optionalNamespaces"), Be(u) || r.validateSessionProps(u, "sessionProperties");
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.validateNamespaces = function(e, t) {
                            var n = function(e, t, n) {
                                var r = null;
                                if (e && He(e)) {
                                    var i = et(e, t);
                                    i && (r = i);
                                    var s = $e(e, t, n);
                                    s && (r = s)
                                } else r = ze("MISSING_OR_INVALID", "".concat(t, ", ").concat(n, " should be an object with data"));
                                return r
                            }(e, "connect()", t);
                            if (n) throw new Error(n.message)
                        }, r.isValidApprove = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p, l, f;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error(ze("MISSING_OR_INVALID", "approve() params: ".concat(t)).message);
                                        case 2:
                                            return n = t.id, s = t.namespaces, a = t.relayProtocol, o = t.sessionProperties, e.next = 5, r.isValidProposalId(n);
                                        case 5:
                                            if (c = r.client.proposal.get(n), !(u = tt(s, "approve()"))) {
                                                e.next = 8;
                                                break
                                            }
                                            throw new Error(u.message);
                                        case 8:
                                            if (!(p = ht(c.requiredNamespaces, s, "approve()"))) {
                                                e.next = 11;
                                                break
                                            }
                                            throw new Error(p.message);
                                        case 11:
                                            if (Fe(a, !0)) {
                                                e.next = 14;
                                                break
                                            }
                                            throw l = ze("MISSING_OR_INVALID", "approve() relayProtocol: ".concat(a)), f = l.message, new Error(f);
                                        case 14:
                                            Be(o) || r.validateSessionProps(o, "sessionProperties");
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidReject = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "reject() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.id, o = t.reason, e.next = 6, r.isValidProposalId(a);
                                        case 6:
                                            if (at(o)) {
                                                e.next = 9;
                                                break
                                            }
                                            throw c = ze("MISSING_OR_INVALID", "reject() reason: ".concat(JSON.stringify(o))), u = c.message, new Error(u);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidSessionSettleRequest = function(e) {
                            if (!st(e)) {
                                var t = ze("MISSING_OR_INVALID", "onSessionSettleRequest() params: ".concat(e)).message;
                                throw new Error(t)
                            }
                            var n = e.relay,
                                r = e.controller,
                                i = e.namespaces,
                                s = e.expiry;
                            if (!nt(n)) {
                                var a = ze("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string").message;
                                throw new Error(a)
                            }
                            var o = function(e, t) {
                                var n = null;
                                return Fe(null === e || void 0 === e ? void 0 : e.publicKey, !1) || (n = ze("MISSING_OR_INVALID", "".concat(t, " controller public key should be a string"))), n
                            }(r, "onSessionSettleRequest()");
                            if (o) throw new Error(o.message);
                            var c = tt(i, "onSessionSettleRequest()");
                            if (c) throw new Error(c.message);
                            if (be(s)) {
                                var u = ze("EXPIRED", "onSessionSettleRequest()").message;
                                throw new Error(u)
                            }
                        }, r.isValidUpdate = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "update() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, o = t.namespaces, e.next = 6, r.isValidSessionTopic(a);
                                        case 6:
                                            if (c = r.client.session.get(a), !(u = tt(o, "update()"))) {
                                                e.next = 9;
                                                break
                                            }
                                            throw new Error(u.message);
                                        case 9:
                                            if (!(p = ht(c.requiredNamespaces, o, "update()"))) {
                                                e.next = 12;
                                                break
                                            }
                                            throw new Error(p.message);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidExtend = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "extend() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, e.next = 6, r.isValidSessionTopic(a);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidRequest = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p, l, f, h, d, v, g, y, m, b;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "request() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, o = t.request, c = t.chainId, u = t.expiry, e.next = 6, r.isValidSessionTopic(a);
                                        case 6:
                                            if (p = r.client.session.get(a), pt(l = p.namespaces, c)) {
                                                e.next = 10;
                                                break
                                            }
                                            throw f = ze("MISSING_OR_INVALID", "request() chainId: ".concat(c)), h = f.message, new Error(h);
                                        case 10:
                                            if (ot(o)) {
                                                e.next = 13;
                                                break
                                            }
                                            throw d = ze("MISSING_OR_INVALID", "request() ".concat(JSON.stringify(o))), v = d.message, new Error(v);
                                        case 13:
                                            if (lt(l, c, o.method)) {
                                                e.next = 16;
                                                break
                                            }
                                            throw g = ze("MISSING_OR_INVALID", "request() method: ".concat(o.method)), y = g.message, new Error(y);
                                        case 16:
                                            if (!u || vt(u, cs)) {
                                                e.next = 19;
                                                break
                                            }
                                            throw m = ze("MISSING_OR_INVALID", "request() expiry: ".concat(u, ". Expiry must be a number (in seconds) between ").concat(cs.min, " and ").concat(cs.max)), b = m.message, new Error(b);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidRespond = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "respond() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, o = t.response, e.next = 6, r.isValidSessionTopic(a);
                                        case 6:
                                            if (ct(o)) {
                                                e.next = 9;
                                                break
                                            }
                                            throw c = ze("MISSING_OR_INVALID", "respond() response: ".concat(JSON.stringify(o))), u = c.message, new Error(u);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidPing = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "ping() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, e.next = 6, r.isValidSessionOrPairingTopic(a);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidEmit = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a, o, c, u, p, l, f, h, d, v, g;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "emit() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, o = t.event, c = t.chainId, e.next = 6, r.isValidSessionTopic(a);
                                        case 6:
                                            if (u = r.client.session.get(a), pt(p = u.namespaces, c)) {
                                                e.next = 10;
                                                break
                                            }
                                            throw l = ze("MISSING_OR_INVALID", "emit() chainId: ".concat(c)), f = l.message, new Error(f);
                                        case 10:
                                            if (ut(o)) {
                                                e.next = 13;
                                                break
                                            }
                                            throw h = ze("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(o))), d = h.message, new Error(d);
                                        case 13:
                                            if (ft(p, c, o.name)) {
                                                e.next = 16;
                                                break
                                            }
                                            throw v = ze("MISSING_OR_INVALID", "emit() event: ".concat(JSON.stringify(o))), g = v.message, new Error(g);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.isValidDisconnect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (st(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "disconnect() params: ".concat(t)), s = n.message, new Error(s);
                                        case 3:
                                            return a = t.topic, e.next = 6, r.isValidSessionOrPairingTopic(a);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.getVerifyContext = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return s = {
                                                verified: {
                                                    verifyUrl: n.verifyUrl || li,
                                                    validation: "UNKNOWN",
                                                    origin: n.url || ""
                                                }
                                            }, e.prev = 1, e.next = 4, r.client.core.verify.resolve({
                                                attestationId: t,
                                                verifyUrl: n.verifyUrl
                                            });
                                        case 4:
                                            (a = e.sent) && (s.verified.origin = a.origin, s.verified.isScam = a.isScam, s.verified.validation = a.origin === new URL(n.url).origin ? "VALID" : "INVALID"), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), r.client.logger.info(e.t0);
                                        case 11:
                                            return e.abrupt("return", (r.client.logger.info("Verify context: ".concat(JSON.stringify(s))), s));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), r.validateSessionProps = function(e, t) {
                            Object.values(e).forEach((function(e) {
                                if (!Fe(e, !1)) {
                                    var n = ze("MISSING_OR_INVALID", "".concat(t, " must be in Record<string, string> format. Received: ").concat(JSON.stringify(e))).message;
                                    throw new Error(n)
                                }
                            }))
                        }, r
                    }
                    return (0, o.Z)(n, [{
                        key: "isInitialized",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.initialized) {
                                                e.next = 3;
                                                break
                                            }
                                            throw t = ze("NOT_INITIALIZED", this.name), n = t.message, new Error(n);
                                        case 3:
                                            return e.next = 5, this.client.core.relayer.confirmOnlineStateOrThrow();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "registerRelayerEvents",
                        value: function() {
                            var e = this;
                            this.client.core.relayer.on(Tr, function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    var r, s, a;
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (r = n.topic, s = n.message, !e.ignoredPayloadTypes.includes(e.client.core.crypto.getPayloadType(s))) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 3:
                                                return t.next = 5, e.client.core.crypto.decode(r, s);
                                            case 5:
                                                if (a = t.sent, t.prev = 6, !(0, Kt.isJsonRpcRequest)(a)) {
                                                    t.next = 11;
                                                    break
                                                }
                                                e.client.core.history.set(r, a), e.onRelayEventRequest({
                                                    topic: r,
                                                    payload: a
                                                }), t.next = 20;
                                                break;
                                            case 11:
                                                if (!(0, Kt.isJsonRpcResponse)(a)) {
                                                    t.next = 19;
                                                    break
                                                }
                                                return t.next = 14, e.client.core.history.resolve(a);
                                            case 14:
                                                return t.next = 16, e.onRelayEventResponse({
                                                    topic: r,
                                                    payload: a
                                                });
                                            case 16:
                                                e.client.core.history.delete(r, a.id), t.next = 20;
                                                break;
                                            case 19:
                                                e.onRelayEventUnknownPayload({
                                                    topic: r,
                                                    payload: a
                                                });
                                            case 20:
                                                t.next = 25;
                                                break;
                                            case 22:
                                                t.prev = 22, t.t0 = t.catch(6), e.client.logger.error(t.t0);
                                            case 25:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [6, 22]
                                    ])
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                    }, {
                        key: "registerExpirerEvents",
                        value: function() {
                            var e = this;
                            this.client.core.expirer.on(ci, function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    var r, s, a;
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (r = ye(n.target), s = r.topic, !(a = r.id) || !e.client.pendingRequest.keys.includes(a)) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.next = 4, e.deletePendingSessionRequest(a, ze("EXPIRED"), !0);
                                            case 4:
                                                return t.abrupt("return", t.sent);
                                            case 5:
                                                if (!s) {
                                                    t.next = 13;
                                                    break
                                                }
                                                if (t.t0 = e.client.session.keys.includes(s), !t.t0) {
                                                    t.next = 11;
                                                    break
                                                }
                                                return t.next = 10, e.deleteSession(s, !0);
                                            case 10:
                                                e.client.events.emit("session_expire", {
                                                    topic: s
                                                });
                                            case 11:
                                                t.next = 18;
                                                break;
                                            case 13:
                                                if (t.t1 = a, !t.t1) {
                                                    t.next = 18;
                                                    break
                                                }
                                                return t.next = 17, e.deleteProposal(a, !0);
                                            case 17:
                                                e.client.events.emit("proposal_expire", {
                                                    id: a
                                                });
                                            case 18:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                    }, {
                        key: "registerPairingEvents",
                        value: function() {
                            var e = this;
                            this.client.core.pairing.events.on($r, (function(t) {
                                return e.onPairingCreated(t)
                            }))
                        }
                    }, {
                        key: "isValidPairingTopic",
                        value: function(e) {
                            if (!Fe(e, !1)) {
                                var t = ze("MISSING_OR_INVALID", "pairing topic should be a string: ".concat(e)).message;
                                throw new Error(t)
                            }
                            if (!this.client.core.pairing.pairings.keys.includes(e)) {
                                var n = ze("NO_MATCHING_KEY", "pairing topic doesn't exist: ".concat(e)).message;
                                throw new Error(n)
                            }
                            if (be(this.client.core.pairing.pairings.get(e).expiry)) {
                                var r = ze("EXPIRED", "pairing topic: ".concat(e)).message;
                                throw new Error(r)
                            }
                        }
                    }, {
                        key: "isValidSessionTopic",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s, a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (Fe(t, !1)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "session topic should be a string: ".concat(t)), r = n.message, new Error(r);
                                        case 3:
                                            if (this.client.session.keys.includes(t)) {
                                                e.next = 6;
                                                break
                                            }
                                            throw s = ze("NO_MATCHING_KEY", "session topic doesn't exist: ".concat(t)), a = s.message, new Error(a);
                                        case 6:
                                            if (!be(this.client.session.get(t).expiry)) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 9, this.deleteSession(t);
                                        case 9:
                                            throw o = ze("EXPIRED", "session topic: ".concat(t)), c = o.message, new Error(c);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isValidSessionOrPairingTopic",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.client.session.keys.includes(t)) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, this.isValidSessionTopic(t);
                                        case 3:
                                            e.next = 16;
                                            break;
                                        case 5:
                                            if (!this.client.core.pairing.pairings.keys.includes(t)) {
                                                e.next = 9;
                                                break
                                            }
                                            this.isValidPairingTopic(t), e.next = 16;
                                            break;
                                        case 9:
                                            if (!Fe(t, !1)) {
                                                e.next = 14;
                                                break
                                            }
                                            throw n = ze("NO_MATCHING_KEY", "session or pairing topic doesn't exist: ".concat(t)), r = n.message, new Error(r);
                                        case 14:
                                            throw s = ze("MISSING_OR_INVALID", "session or pairing topic should be a string: ".concat(t)), a = s.message, new Error(a);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isValidProposalId",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s, a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (it(t)) {
                                                e.next = 3;
                                                break
                                            }
                                            throw n = ze("MISSING_OR_INVALID", "proposal id should be a number: ".concat(t)), r = n.message, new Error(r);
                                        case 3:
                                            if (this.client.proposal.keys.includes(t)) {
                                                e.next = 6;
                                                break
                                            }
                                            throw s = ze("NO_MATCHING_KEY", "proposal id doesn't exist: ".concat(t)), a = s.message, new Error(a);
                                        case 6:
                                            if (!be(this.client.proposal.get(t).expiry)) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 9, this.deleteProposal(t);
                                        case 9:
                                            throw o = ze("EXPIRED", "proposal id: ".concat(t)), c = o.message, new Error(c);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), n
                }(Lt),
                _s = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var i;
                        return (0, a.Z)(this, n), (i = t.call(this, e, r, "proposal", ts)).core = e, i.logger = r, i
                    }
                    return (0, o.Z)(n)
                }(zi),
                ks = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var i;
                        return (0, a.Z)(this, n), (i = t.call(this, e, r, "session", ts)).core = e, i.logger = r, i
                    }
                    return (0, o.Z)(n)
                }(zi),
                Zs = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e, r) {
                        var i;
                        return (0, a.Z)(this, n), (i = t.call(this, e, r, "request", ts, (function(e) {
                            return e.id
                        }))).core = e, i.logger = r, i
                    }
                    return (0, o.Z)(n)
                }(zi),
                Es = function(e) {
                    (0, _t.Z)(n, e);
                    var t = (0, kt.Z)(n);

                    function n(e) {
                        var r;
                        (0, a.Z)(this, n), (r = t.call(this, e)).protocol = "wc", r.version = 2, r.name = ns, r.events = new l.EventEmitter, r.on = function(e, t) {
                            return r.events.on(e, t)
                        }, r.once = function(e, t) {
                            return r.events.once(e, t)
                        }, r.off = function(e, t) {
                            return r.events.off(e, t)
                        }, r.removeListener = function(e, t) {
                            return r.events.removeListener(e, t)
                        }, r.removeAllListeners = function(e) {
                            return r.events.removeAllListeners(e)
                        }, r.connect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.connect(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.pair = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.pair(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.approve = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.approve(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.reject = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.reject(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.update = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.update(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.extend = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.extend(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.request = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.request(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.respond = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.respond(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.ping = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.ping(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.emit = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.emit(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.disconnect = function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r.engine.disconnect(t);
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            throw e.prev = 6, e.t0 = e.catch(0), r.logger.error(e.t0.message), e.t0;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), r.find = function(e) {
                            try {
                                return r.engine.find(e)
                            } catch (t) {
                                throw r.logger.error(t.message), t
                            }
                        }, r.getPendingSessionRequests = function() {
                            try {
                                return r.engine.getPendingSessionRequests()
                            } catch (e) {
                                throw r.logger.error(e.message), e
                            }
                        }, r.name = (null === e || void 0 === e ? void 0 : e.name) || ns, r.metadata = (null === e || void 0 === e ? void 0 : e.metadata) || (0, _.D)() || {
                            name: "",
                            description: "",
                            url: "",
                            icons: [""]
                        };
                        var o = typeof(null === e || void 0 === e ? void 0 : e.logger) < "u" && "string" != typeof(null === e || void 0 === e ? void 0 : e.logger) ? e.logger : (0, Pt.pino)((0, Pt.getDefaultLoggerOptions)({
                            level: (null === e || void 0 === e ? void 0 : e.logger) || rs
                        }));
                        return r.core = (null === e || void 0 === e ? void 0 : e.core) || new Xi(e), r.logger = (0, Pt.generateChildLogger)(o, r.name), r.session = new ks(r.core, r.logger), r.proposal = new _s(r.core, r.logger), r.pendingRequest = new Zs(r.core, r.logger), r.engine = new xs((0, xt.Z)(r)), r
                    }
                    return (0, o.Z)(n, [{
                        key: "context",
                        get: function() {
                            return (0, Pt.getLoggerContext)(this.logger)
                        }
                    }, {
                        key: "pairing",
                        get: function() {
                            return this.core.pairing.pairings
                        }
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.logger.trace("Initialized"), e.prev = 1, e.next = 4, this.core.start();
                                        case 4:
                                            return e.next = 6, this.session.init();
                                        case 6:
                                            return e.next = 8, this.proposal.init();
                                        case 8:
                                            return e.next = 10, this.pendingRequest.init();
                                        case 10:
                                            return e.next = 12, this.engine.init();
                                        case 12:
                                            this.core.verify.init({
                                                verifyUrl: this.metadata.verifyUrl
                                            }), this.logger.info("SignClient Initialization Success"), e.next = 19;
                                            break;
                                        case 16:
                                            throw e.prev = 16, e.t0 = e.catch(1), this.logger.info("SignClient Initialization Failure"), this.logger.error(e.t0.message), e.t0;
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [1, 16]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }], [{
                        key: "init",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var r;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = new n(t), e.next = 3, r.initialize();
                                        case 3:
                                            return e.abrupt("return", r);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), n
                }(Ut),
                Is = n(17507),
                Ps = "error",
                Ss = "".concat("wc", "@2:").concat("universal_provider", ":"),
                Rs = "default_chain_changed",
                Os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof n.g < "u" ? n.g : typeof self < "u" ? self : {},
                Cs = {
                    exports: {}
                };
            ! function(e, t) {
                (function() {
                    var n, r = "Expected a function",
                        i = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        a = 16,
                        o = 32,
                        c = 64,
                        u = 128,
                        p = 256,
                        l = 1 / 0,
                        f = 9007199254740991,
                        h = NaN,
                        d = 4294967295,
                        v = [
                            ["ary", u],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", a],
                            ["flip", 512],
                            ["partial", o],
                            ["partialRight", c],
                            ["rearg", p]
                        ],
                        g = "[object Arguments]",
                        y = "[object Array]",
                        m = "[object Boolean]",
                        b = "[object Date]",
                        w = "[object Error]",
                        x = "[object Function]",
                        _ = "[object GeneratorFunction]",
                        k = "[object Map]",
                        Z = "[object Number]",
                        E = "[object Object]",
                        I = "[object Promise]",
                        P = "[object RegExp]",
                        S = "[object Set]",
                        R = "[object String]",
                        O = "[object Symbol]",
                        C = "[object WeakMap]",
                        N = "[object ArrayBuffer]",
                        A = "[object DataView]",
                        T = "[object Float32Array]",
                        D = "[object Float64Array]",
                        q = "[object Int8Array]",
                        j = "[object Int16Array]",
                        U = "[object Int32Array]",
                        L = "[object Uint8Array]",
                        M = "[object Uint8ClampedArray]",
                        z = "[object Uint16Array]",
                        V = "[object Uint32Array]",
                        K = /\b__p \+= '';/g,
                        H = /\b(__p \+=) '' \+/g,
                        B = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        F = /&(?:amp|lt|gt|quot|#39);/g,
                        G = /[&<>"']/g,
                        J = RegExp(F.source),
                        W = RegExp(G.source),
                        Q = /<%-([\s\S]+?)%>/g,
                        Y = /<%([\s\S]+?)%>/g,
                        $ = /<%=([\s\S]+?)%>/g,
                        X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        ee = /^\w*$/,
                        te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        ne = /[\\^$.*+?()[\]{}|]/g,
                        re = RegExp(ne.source),
                        ie = /^\s+/,
                        se = /\s/,
                        ae = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        oe = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        ce = /,? & /,
                        ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        pe = /[()=,{}\[\]\/\s]/,
                        le = /\\(\\)?/g,
                        fe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        he = /\w*$/,
                        de = /^[-+]0x[0-9a-f]+$/i,
                        ve = /^0b[01]+$/i,
                        ge = /^\[object .+?Constructor\]$/,
                        ye = /^0o[0-7]+$/i,
                        me = /^(?:0|[1-9]\d*)$/,
                        be = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        we = /($^)/,
                        xe = /['\n\r\u2028\u2029\\]/g,
                        _e = "\\ud800-\\udfff",
                        ke = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Ze = "\\u2700-\\u27bf",
                        Ee = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        Ie = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        Pe = "\\ufe0e\\ufe0f",
                        Se = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        Re = "['\u2019]",
                        Oe = "[" + _e + "]",
                        Ce = "[" + Se + "]",
                        Ne = "[" + ke + "]",
                        Ae = "\\d+",
                        Te = "[" + Ze + "]",
                        De = "[" + Ee + "]",
                        qe = "[^" + _e + Se + Ae + Ze + Ee + Ie + "]",
                        je = "\\ud83c[\\udffb-\\udfff]",
                        Ue = "[^" + _e + "]",
                        Le = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Me = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        ze = "[" + Ie + "]",
                        Ve = "\\u200d",
                        Ke = "(?:" + De + "|" + qe + ")",
                        He = "(?:" + ze + "|" + qe + ")",
                        Be = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        Fe = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        Ge = "(?:" + Ne + "|" + je + ")" + "?",
                        Je = "[" + Pe + "]?",
                        We = Je + Ge + ("(?:" + Ve + "(?:" + [Ue, Le, Me].join("|") + ")" + Je + Ge + ")*"),
                        Qe = "(?:" + [Te, Le, Me].join("|") + ")" + We,
                        Ye = "(?:" + [Ue + Ne + "?", Ne, Le, Me, Oe].join("|") + ")",
                        $e = RegExp(Re, "g"),
                        Xe = RegExp(Ne, "g"),
                        et = RegExp(je + "(?=" + je + ")|" + Ye + We, "g"),
                        tt = RegExp([ze + "?" + De + "+" + Be + "(?=" + [Ce, ze, "$"].join("|") + ")", He + "+" + Fe + "(?=" + [Ce, ze + Ke, "$"].join("|") + ")", ze + "?" + Ke + "+" + Be, ze + "+" + Fe, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ae, Qe].join("|"), "g"),
                        nt = RegExp("[" + Ve + _e + ke + Pe + "]"),
                        rt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        it = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        st = -1,
                        at = {};
                    at[T] = at[D] = at[q] = at[j] = at[U] = at[L] = at[M] = at[z] = at[V] = !0, at[g] = at[y] = at[N] = at[m] = at[A] = at[b] = at[w] = at[x] = at[k] = at[Z] = at[E] = at[P] = at[S] = at[R] = at[C] = !1;
                    var ot = {};
                    ot[g] = ot[y] = ot[N] = ot[A] = ot[m] = ot[b] = ot[T] = ot[D] = ot[q] = ot[j] = ot[U] = ot[k] = ot[Z] = ot[E] = ot[P] = ot[S] = ot[R] = ot[O] = ot[L] = ot[M] = ot[z] = ot[V] = !0, ot[w] = ot[x] = ot[C] = !1;
                    var ct = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        ut = parseFloat,
                        pt = parseInt,
                        lt = "object" == typeof Os && Os && Os.Object === Object && Os,
                        ft = "object" == typeof self && self && self.Object === Object && self,
                        ht = lt || ft || Function("return this")(),
                        dt = t && !t.nodeType && t,
                        vt = dt && e && !e.nodeType && e,
                        gt = vt && vt.exports === dt,
                        yt = gt && lt.process,
                        mt = function() {
                            try {
                                return vt && vt.require && vt.require("util").types || yt && yt.binding && yt.binding("util")
                            } catch (e) {}
                        }(),
                        bt = mt && mt.isArrayBuffer,
                        wt = mt && mt.isDate,
                        xt = mt && mt.isMap,
                        _t = mt && mt.isRegExp,
                        kt = mt && mt.isSet,
                        Zt = mt && mt.isTypedArray;

                    function Et(e, t, n) {
                        switch (n.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, n[0]);
                            case 2:
                                return e.call(t, n[0], n[1]);
                            case 3:
                                return e.call(t, n[0], n[1], n[2])
                        }
                        return e.apply(t, n)
                    }

                    function It(e, t, n, r) {
                        for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
                            var a = e[i];
                            t(r, a, n(a), e)
                        }
                        return r
                    }

                    function Pt(e, t) {
                        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
                        return e
                    }

                    function St(e, t) {
                        for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e););
                        return e
                    }

                    function Rt(e, t) {
                        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                            if (!t(e[n], n, e)) return !1;
                        return !0
                    }

                    function Ot(e, t) {
                        for (var n = -1, r = null == e ? 0 : e.length, i = 0, s = []; ++n < r;) {
                            var a = e[n];
                            t(a, n, e) && (s[i++] = a)
                        }
                        return s
                    }

                    function Ct(e, t) {
                        return !!(null == e ? 0 : e.length) && zt(e, t, 0) > -1
                    }

                    function Nt(e, t, n) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (n(t, e[r])) return !0;
                        return !1
                    }

                    function At(e, t) {
                        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
                        return i
                    }

                    function Tt(e, t) {
                        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                        return e
                    }

                    function Dt(e, t, n, r) {
                        var i = -1,
                            s = null == e ? 0 : e.length;
                        for (r && s && (n = e[++i]); ++i < s;) n = t(n, e[i], i, e);
                        return n
                    }

                    function qt(e, t, n, r) {
                        var i = null == e ? 0 : e.length;
                        for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
                        return n
                    }

                    function jt(e, t) {
                        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                            if (t(e[n], n, e)) return !0;
                        return !1
                    }
                    var Ut = Bt("length");

                    function Lt(e, t, n) {
                        var r;
                        return n(e, (function(e, n, i) {
                            if (t(e, n, i)) return r = n, !1
                        })), r
                    }

                    function Mt(e, t, n, r) {
                        for (var i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function zt(e, t, n) {
                        return t === t ? function(e, t, n) {
                            for (var r = n - 1, i = e.length; ++r < i;)
                                if (e[r] === t) return r;
                            return -1
                        }(e, t, n) : Mt(e, Kt, n)
                    }

                    function Vt(e, t, n, r) {
                        for (var i = n - 1, s = e.length; ++i < s;)
                            if (r(e[i], t)) return i;
                        return -1
                    }

                    function Kt(e) {
                        return e !== e
                    }

                    function Ht(e, t) {
                        var n = null == e ? 0 : e.length;
                        return n ? Jt(e, t) / n : h
                    }

                    function Bt(e) {
                        return function(t) {
                            return null == t ? n : t[e]
                        }
                    }

                    function Ft(e) {
                        return function(t) {
                            return null == e ? n : e[t]
                        }
                    }

                    function Gt(e, t, n, r, i) {
                        return i(e, (function(e, i, s) {
                            n = r ? (r = !1, e) : t(n, e, i, s)
                        })), n
                    }

                    function Jt(e, t) {
                        for (var r, i = -1, s = e.length; ++i < s;) {
                            var a = t(e[i]);
                            a !== n && (r = r === n ? a : r + a)
                        }
                        return r
                    }

                    function Wt(e, t) {
                        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                        return r
                    }

                    function Qt(e) {
                        return e && e.slice(0, hn(e) + 1).replace(ie, "")
                    }

                    function Yt(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function $t(e, t) {
                        return At(t, (function(t) {
                            return e[t]
                        }))
                    }

                    function Xt(e, t) {
                        return e.has(t)
                    }

                    function en(e, t) {
                        for (var n = -1, r = e.length; ++n < r && zt(t, e[n], 0) > -1;);
                        return n
                    }

                    function tn(e, t) {
                        for (var n = e.length; n-- && zt(t, e[n], 0) > -1;);
                        return n
                    }
                    var nn = Ft({
                            "\xc0": "A",
                            "\xc1": "A",
                            "\xc2": "A",
                            "\xc3": "A",
                            "\xc4": "A",
                            "\xc5": "A",
                            "\xe0": "a",
                            "\xe1": "a",
                            "\xe2": "a",
                            "\xe3": "a",
                            "\xe4": "a",
                            "\xe5": "a",
                            "\xc7": "C",
                            "\xe7": "c",
                            "\xd0": "D",
                            "\xf0": "d",
                            "\xc8": "E",
                            "\xc9": "E",
                            "\xca": "E",
                            "\xcb": "E",
                            "\xe8": "e",
                            "\xe9": "e",
                            "\xea": "e",
                            "\xeb": "e",
                            "\xcc": "I",
                            "\xcd": "I",
                            "\xce": "I",
                            "\xcf": "I",
                            "\xec": "i",
                            "\xed": "i",
                            "\xee": "i",
                            "\xef": "i",
                            "\xd1": "N",
                            "\xf1": "n",
                            "\xd2": "O",
                            "\xd3": "O",
                            "\xd4": "O",
                            "\xd5": "O",
                            "\xd6": "O",
                            "\xd8": "O",
                            "\xf2": "o",
                            "\xf3": "o",
                            "\xf4": "o",
                            "\xf5": "o",
                            "\xf6": "o",
                            "\xf8": "o",
                            "\xd9": "U",
                            "\xda": "U",
                            "\xdb": "U",
                            "\xdc": "U",
                            "\xf9": "u",
                            "\xfa": "u",
                            "\xfb": "u",
                            "\xfc": "u",
                            "\xdd": "Y",
                            "\xfd": "y",
                            "\xff": "y",
                            "\xc6": "Ae",
                            "\xe6": "ae",
                            "\xde": "Th",
                            "\xfe": "th",
                            "\xdf": "ss",
                            "\u0100": "A",
                            "\u0102": "A",
                            "\u0104": "A",
                            "\u0101": "a",
                            "\u0103": "a",
                            "\u0105": "a",
                            "\u0106": "C",
                            "\u0108": "C",
                            "\u010a": "C",
                            "\u010c": "C",
                            "\u0107": "c",
                            "\u0109": "c",
                            "\u010b": "c",
                            "\u010d": "c",
                            "\u010e": "D",
                            "\u0110": "D",
                            "\u010f": "d",
                            "\u0111": "d",
                            "\u0112": "E",
                            "\u0114": "E",
                            "\u0116": "E",
                            "\u0118": "E",
                            "\u011a": "E",
                            "\u0113": "e",
                            "\u0115": "e",
                            "\u0117": "e",
                            "\u0119": "e",
                            "\u011b": "e",
                            "\u011c": "G",
                            "\u011e": "G",
                            "\u0120": "G",
                            "\u0122": "G",
                            "\u011d": "g",
                            "\u011f": "g",
                            "\u0121": "g",
                            "\u0123": "g",
                            "\u0124": "H",
                            "\u0126": "H",
                            "\u0125": "h",
                            "\u0127": "h",
                            "\u0128": "I",
                            "\u012a": "I",
                            "\u012c": "I",
                            "\u012e": "I",
                            "\u0130": "I",
                            "\u0129": "i",
                            "\u012b": "i",
                            "\u012d": "i",
                            "\u012f": "i",
                            "\u0131": "i",
                            "\u0134": "J",
                            "\u0135": "j",
                            "\u0136": "K",
                            "\u0137": "k",
                            "\u0138": "k",
                            "\u0139": "L",
                            "\u013b": "L",
                            "\u013d": "L",
                            "\u013f": "L",
                            "\u0141": "L",
                            "\u013a": "l",
                            "\u013c": "l",
                            "\u013e": "l",
                            "\u0140": "l",
                            "\u0142": "l",
                            "\u0143": "N",
                            "\u0145": "N",
                            "\u0147": "N",
                            "\u014a": "N",
                            "\u0144": "n",
                            "\u0146": "n",
                            "\u0148": "n",
                            "\u014b": "n",
                            "\u014c": "O",
                            "\u014e": "O",
                            "\u0150": "O",
                            "\u014d": "o",
                            "\u014f": "o",
                            "\u0151": "o",
                            "\u0154": "R",
                            "\u0156": "R",
                            "\u0158": "R",
                            "\u0155": "r",
                            "\u0157": "r",
                            "\u0159": "r",
                            "\u015a": "S",
                            "\u015c": "S",
                            "\u015e": "S",
                            "\u0160": "S",
                            "\u015b": "s",
                            "\u015d": "s",
                            "\u015f": "s",
                            "\u0161": "s",
                            "\u0162": "T",
                            "\u0164": "T",
                            "\u0166": "T",
                            "\u0163": "t",
                            "\u0165": "t",
                            "\u0167": "t",
                            "\u0168": "U",
                            "\u016a": "U",
                            "\u016c": "U",
                            "\u016e": "U",
                            "\u0170": "U",
                            "\u0172": "U",
                            "\u0169": "u",
                            "\u016b": "u",
                            "\u016d": "u",
                            "\u016f": "u",
                            "\u0171": "u",
                            "\u0173": "u",
                            "\u0174": "W",
                            "\u0175": "w",
                            "\u0176": "Y",
                            "\u0177": "y",
                            "\u0178": "Y",
                            "\u0179": "Z",
                            "\u017b": "Z",
                            "\u017d": "Z",
                            "\u017a": "z",
                            "\u017c": "z",
                            "\u017e": "z",
                            "\u0132": "IJ",
                            "\u0133": "ij",
                            "\u0152": "Oe",
                            "\u0153": "oe",
                            "\u0149": "'n",
                            "\u017f": "s"
                        }),
                        rn = Ft({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function sn(e) {
                        return "\\" + ct[e]
                    }

                    function an(e) {
                        return nt.test(e)
                    }

                    function on(e) {
                        var t = -1,
                            n = Array(e.size);
                        return e.forEach((function(e, r) {
                            n[++t] = [r, e]
                        })), n
                    }

                    function cn(e, t) {
                        return function(n) {
                            return e(t(n))
                        }
                    }

                    function un(e, t) {
                        for (var n = -1, r = e.length, i = 0, a = []; ++n < r;) {
                            var o = e[n];
                            (o === t || o === s) && (e[n] = s, a[i++] = n)
                        }
                        return a
                    }

                    function pn(e) {
                        var t = -1,
                            n = Array(e.size);
                        return e.forEach((function(e) {
                            n[++t] = e
                        })), n
                    }

                    function ln(e) {
                        return an(e) ? function(e) {
                            for (var t = et.lastIndex = 0; et.test(e);) ++t;
                            return t
                        }(e) : Ut(e)
                    }

                    function fn(e) {
                        return an(e) ? function(e) {
                            return e.match(et) || []
                        }(e) : function(e) {
                            return e.split("")
                        }(e)
                    }

                    function hn(e) {
                        for (var t = e.length; t-- && se.test(e.charAt(t)););
                        return t
                    }
                    var dn = Ft({
                        "&amp;": "&",
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&#39;": "'"
                    });
                    var vn = function e(t) {
                        var se = (t = null == t ? ht : vn.defaults(ht.Object(), t, vn.pick(ht, it))).Array,
                            _e = t.Date,
                            ke = t.Error,
                            Ze = t.Function,
                            Ee = t.Math,
                            Ie = t.Object,
                            Pe = t.RegExp,
                            Se = t.String,
                            Re = t.TypeError,
                            Oe = se.prototype,
                            Ce = Ze.prototype,
                            Ne = Ie.prototype,
                            Ae = t["__core-js_shared__"],
                            Te = Ce.toString,
                            De = Ne.hasOwnProperty,
                            qe = 0,
                            je = function() {
                                var e = /[^.]+$/.exec(Ae && Ae.keys && Ae.keys.IE_PROTO || "");
                                return e ? "Symbol(src)_1." + e : ""
                            }(),
                            Ue = Ne.toString,
                            Le = Te.call(Ie),
                            Me = ht._,
                            ze = Pe("^" + Te.call(De).replace(ne, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                            Ve = gt ? t.Buffer : n,
                            Ke = t.Symbol,
                            He = t.Uint8Array,
                            Be = Ve ? Ve.allocUnsafe : n,
                            Fe = cn(Ie.getPrototypeOf, Ie),
                            Ge = Ie.create,
                            Je = Ne.propertyIsEnumerable,
                            We = Oe.splice,
                            Qe = Ke ? Ke.isConcatSpreadable : n,
                            Ye = Ke ? Ke.iterator : n,
                            et = Ke ? Ke.toStringTag : n,
                            nt = function() {
                                try {
                                    var e = ps(Ie, "defineProperty");
                                    return e({}, "", {}), e
                                } catch (t) {}
                            }(),
                            ct = t.clearTimeout !== ht.clearTimeout && t.clearTimeout,
                            lt = _e && _e.now !== ht.Date.now && _e.now,
                            ft = t.setTimeout !== ht.setTimeout && t.setTimeout,
                            dt = Ee.ceil,
                            vt = Ee.floor,
                            yt = Ie.getOwnPropertySymbols,
                            mt = Ve ? Ve.isBuffer : n,
                            Ut = t.isFinite,
                            Ft = Oe.join,
                            gn = cn(Ie.keys, Ie),
                            yn = Ee.max,
                            mn = Ee.min,
                            bn = _e.now,
                            wn = t.parseInt,
                            xn = Ee.random,
                            _n = Oe.reverse,
                            kn = ps(t, "DataView"),
                            Zn = ps(t, "Map"),
                            En = ps(t, "Promise"),
                            In = ps(t, "Set"),
                            Pn = ps(t, "WeakMap"),
                            Sn = ps(Ie, "create"),
                            Rn = Pn && new Pn,
                            On = {},
                            Cn = qs(kn),
                            Nn = qs(Zn),
                            An = qs(En),
                            Tn = qs(In),
                            Dn = qs(Pn),
                            qn = Ke ? Ke.prototype : n,
                            jn = qn ? qn.valueOf : n,
                            Un = qn ? qn.toString : n;

                        function Ln(e) {
                            if (Xa(e) && !Va(e) && !(e instanceof Kn)) {
                                if (e instanceof Vn) return e;
                                if (De.call(e, "__wrapped__")) return js(e)
                            }
                            return new Vn(e)
                        }
                        var Mn = function() {
                            function e() {}
                            return function(t) {
                                if (!$a(t)) return {};
                                if (Ge) return Ge(t);
                                e.prototype = t;
                                var r = new e;
                                return e.prototype = n, r
                            }
                        }();

                        function zn() {}

                        function Vn(e, t) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = n
                        }

                        function Kn(e) {
                            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = d, this.__views__ = []
                        }

                        function Hn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function Bn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function Fn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.clear(); ++t < n;) {
                                var r = e[t];
                                this.set(r[0], r[1])
                            }
                        }

                        function Gn(e) {
                            var t = -1,
                                n = null == e ? 0 : e.length;
                            for (this.__data__ = new Fn; ++t < n;) this.add(e[t])
                        }

                        function Jn(e) {
                            var t = this.__data__ = new Bn(e);
                            this.size = t.size
                        }

                        function Wn(e, t) {
                            var n = Va(e),
                                r = !n && za(e),
                                i = !n && !r && Fa(e),
                                s = !n && !r && !i && oo(e),
                                a = n || r || i || s,
                                o = a ? Wt(e.length, Se) : [],
                                c = o.length;
                            for (var u in e)(t || De.call(e, u)) && (!a || !("length" == u || i && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ys(u, c))) && o.push(u);
                            return o
                        }

                        function Qn(e) {
                            var t = e.length;
                            return t ? e[Gr(0, t - 1)] : n
                        }

                        function Yn(e, t) {
                            return As(Si(e), ar(t, 0, e.length))
                        }

                        function $n(e) {
                            return As(Si(e))
                        }

                        function Xn(e, t, r) {
                            (r !== n && !Ua(e[t], r) || r === n && !(t in e)) && ir(e, t, r)
                        }

                        function er(e, t, r) {
                            var i = e[t];
                            (!De.call(e, t) || !Ua(i, r) || r === n && !(t in e)) && ir(e, t, r)
                        }

                        function tr(e, t) {
                            for (var n = e.length; n--;)
                                if (Ua(e[n][0], t)) return n;
                            return -1
                        }

                        function nr(e, t, n, r) {
                            return lr(e, (function(e, i, s) {
                                t(r, e, n(e), s)
                            })), r
                        }

                        function rr(e, t) {
                            return e && Ri(t, Oo(t), e)
                        }

                        function ir(e, t, n) {
                            "__proto__" == t && nt ? nt(e, t, {
                                configurable: !0,
                                enumerable: !0,
                                value: n,
                                writable: !0
                            }) : e[t] = n
                        }

                        function sr(e, t) {
                            for (var r = -1, i = t.length, s = se(i), a = null == e; ++r < i;) s[r] = a ? n : Eo(e, t[r]);
                            return s
                        }

                        function ar(e, t, r) {
                            return e === e && (r !== n && (e = e <= r ? e : r), t !== n && (e = e >= t ? e : t)), e
                        }

                        function or(e, t, r, i, s, a) {
                            var o, c = 1 & t,
                                u = 2 & t,
                                p = 4 & t;
                            if (r && (o = s ? r(e, i, s, a) : r(e)), o !== n) return o;
                            if (!$a(e)) return e;
                            var l = Va(e);
                            if (l) {
                                if (o = function(e) {
                                        var t = e.length,
                                            n = new e.constructor(t);
                                        return t && "string" == typeof e[0] && De.call(e, "index") && (n.index = e.index, n.input = e.input), n
                                    }(e), !c) return Si(e, o)
                            } else {
                                var f = hs(e),
                                    h = f == x || f == _;
                                if (Fa(e)) return _i(e, c);
                                if (f == E || f == g || h && !s) {
                                    if (o = u || h ? {} : vs(e), !c) return u ? function(e, t) {
                                        return Ri(e, fs(e), t)
                                    }(e, function(e, t) {
                                        return e && Ri(t, Co(t), e)
                                    }(o, e)) : function(e, t) {
                                        return Ri(e, ls(e), t)
                                    }(e, rr(o, e))
                                } else {
                                    if (!ot[f]) return s ? e : {};
                                    o = function(e, t, n) {
                                        var r = e.constructor;
                                        switch (t) {
                                            case N:
                                                return ki(e);
                                            case m:
                                            case b:
                                                return new r(+e);
                                            case A:
                                                return function(e, t) {
                                                    var n = t ? ki(e.buffer) : e.buffer;
                                                    return new e.constructor(n, e.byteOffset, e.byteLength)
                                                }(e, n);
                                            case T:
                                            case D:
                                            case q:
                                            case j:
                                            case U:
                                            case L:
                                            case M:
                                            case z:
                                            case V:
                                                return Zi(e, n);
                                            case k:
                                                return new r;
                                            case Z:
                                            case R:
                                                return new r(e);
                                            case P:
                                                return function(e) {
                                                    var t = new e.constructor(e.source, he.exec(e));
                                                    return t.lastIndex = e.lastIndex, t
                                                }(e);
                                            case S:
                                                return new r;
                                            case O:
                                                return function(e) {
                                                    return jn ? Ie(jn.call(e)) : {}
                                                }(e)
                                        }
                                    }(e, f, c)
                                }
                            }
                            a || (a = new Jn);
                            var d = a.get(e);
                            if (d) return d;
                            a.set(e, o), io(e) ? e.forEach((function(n) {
                                o.add(or(n, t, r, n, e, a))
                            })) : eo(e) && e.forEach((function(n, i) {
                                o.set(i, or(n, t, r, i, e, a))
                            }));
                            var v = l ? n : (p ? u ? rs : ns : u ? Co : Oo)(e);
                            return Pt(v || e, (function(n, i) {
                                v && (n = e[i = n]), er(o, i, or(n, t, r, i, e, a))
                            })), o
                        }

                        function cr(e, t, r) {
                            var i = r.length;
                            if (null == e) return !i;
                            for (e = Ie(e); i--;) {
                                var s = r[i],
                                    a = t[s],
                                    o = e[s];
                                if (o === n && !(s in e) || !a(o)) return !1
                            }
                            return !0
                        }

                        function ur(e, t, i) {
                            if ("function" != typeof e) throw new Re(r);
                            return Rs((function() {
                                e.apply(n, i)
                            }), t)
                        }

                        function pr(e, t, n, r) {
                            var i = -1,
                                s = Ct,
                                a = !0,
                                o = e.length,
                                c = [],
                                u = t.length;
                            if (!o) return c;
                            n && (t = At(t, Yt(n))), r ? (s = Nt, a = !1) : t.length >= 200 && (s = Xt, a = !1, t = new Gn(t));
                            e: for (; ++i < o;) {
                                var p = e[i],
                                    l = null == n ? p : n(p);
                                if (p = r || 0 !== p ? p : 0, a && l === l) {
                                    for (var f = u; f--;)
                                        if (t[f] === l) continue e;
                                    c.push(p)
                                } else s(t, l, r) || c.push(p)
                            }
                            return c
                        }
                        Ln.templateSettings = {
                            escape: Q,
                            evaluate: Y,
                            interpolate: $,
                            variable: "",
                            imports: {
                                _: Ln
                            }
                        }, Ln.prototype = zn.prototype, Ln.prototype.constructor = Ln, Vn.prototype = Mn(zn.prototype), Vn.prototype.constructor = Vn, Kn.prototype = Mn(zn.prototype), Kn.prototype.constructor = Kn, Hn.prototype.clear = function() {
                            this.__data__ = Sn ? Sn(null) : {}, this.size = 0
                        }, Hn.prototype.delete = function(e) {
                            var t = this.has(e) && delete this.__data__[e];
                            return this.size -= t ? 1 : 0, t
                        }, Hn.prototype.get = function(e) {
                            var t = this.__data__;
                            if (Sn) {
                                var r = t[e];
                                return r === i ? n : r
                            }
                            return De.call(t, e) ? t[e] : n
                        }, Hn.prototype.has = function(e) {
                            var t = this.__data__;
                            return Sn ? t[e] !== n : De.call(t, e)
                        }, Hn.prototype.set = function(e, t) {
                            var r = this.__data__;
                            return this.size += this.has(e) ? 0 : 1, r[e] = Sn && t === n ? i : t, this
                        }, Bn.prototype.clear = function() {
                            this.__data__ = [], this.size = 0
                        }, Bn.prototype.delete = function(e) {
                            var t = this.__data__,
                                n = tr(t, e);
                            return !(n < 0) && (n == t.length - 1 ? t.pop() : We.call(t, n, 1), --this.size, !0)
                        }, Bn.prototype.get = function(e) {
                            var t = this.__data__,
                                r = tr(t, e);
                            return r < 0 ? n : t[r][1]
                        }, Bn.prototype.has = function(e) {
                            return tr(this.__data__, e) > -1
                        }, Bn.prototype.set = function(e, t) {
                            var n = this.__data__,
                                r = tr(n, e);
                            return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                        }, Fn.prototype.clear = function() {
                            this.size = 0, this.__data__ = {
                                hash: new Hn,
                                map: new(Zn || Bn),
                                string: new Hn
                            }
                        }, Fn.prototype.delete = function(e) {
                            var t = cs(this, e).delete(e);
                            return this.size -= t ? 1 : 0, t
                        }, Fn.prototype.get = function(e) {
                            return cs(this, e).get(e)
                        }, Fn.prototype.has = function(e) {
                            return cs(this, e).has(e)
                        }, Fn.prototype.set = function(e, t) {
                            var n = cs(this, e),
                                r = n.size;
                            return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                        }, Gn.prototype.add = Gn.prototype.push = function(e) {
                            return this.__data__.set(e, i), this
                        }, Gn.prototype.has = function(e) {
                            return this.__data__.has(e)
                        }, Jn.prototype.clear = function() {
                            this.__data__ = new Bn, this.size = 0
                        }, Jn.prototype.delete = function(e) {
                            var t = this.__data__,
                                n = t.delete(e);
                            return this.size = t.size, n
                        }, Jn.prototype.get = function(e) {
                            return this.__data__.get(e)
                        }, Jn.prototype.has = function(e) {
                            return this.__data__.has(e)
                        }, Jn.prototype.set = function(e, t) {
                            var n = this.__data__;
                            if (n instanceof Bn) {
                                var r = n.__data__;
                                if (!Zn || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                                n = this.__data__ = new Fn(r)
                            }
                            return n.set(e, t), this.size = n.size, this
                        };
                        var lr = Ni(br),
                            fr = Ni(wr, !0);

                        function hr(e, t) {
                            var n = !0;
                            return lr(e, (function(e, r, i) {
                                return n = !!t(e, r, i)
                            })), n
                        }

                        function dr(e, t, r) {
                            for (var i = -1, s = e.length; ++i < s;) {
                                var a = e[i],
                                    o = t(a);
                                if (null != o && (c === n ? o === o && !ao(o) : r(o, c))) var c = o,
                                    u = a
                            }
                            return u
                        }

                        function vr(e, t) {
                            var n = [];
                            return lr(e, (function(e, r, i) {
                                t(e, r, i) && n.push(e)
                            })), n
                        }

                        function gr(e, t, n, r, i) {
                            var s = -1,
                                a = e.length;
                            for (n || (n = gs), i || (i = []); ++s < a;) {
                                var o = e[s];
                                t > 0 && n(o) ? t > 1 ? gr(o, t - 1, n, r, i) : Tt(i, o) : r || (i[i.length] = o)
                            }
                            return i
                        }
                        var yr = Ai(),
                            mr = Ai(!0);

                        function br(e, t) {
                            return e && yr(e, t, Oo)
                        }

                        function wr(e, t) {
                            return e && mr(e, t, Oo)
                        }

                        function xr(e, t) {
                            return Ot(t, (function(t) {
                                return Wa(e[t])
                            }))
                        }

                        function _r(e, t) {
                            for (var r = 0, i = (t = mi(t, e)).length; null != e && r < i;) e = e[Ds(t[r++])];
                            return r && r == i ? e : n
                        }

                        function kr(e, t, n) {
                            var r = t(e);
                            return Va(e) ? r : Tt(r, n(e))
                        }

                        function Zr(e) {
                            return null == e ? e === n ? "[object Undefined]" : "[object Null]" : et && et in Ie(e) ? function(e) {
                                var t = De.call(e, et),
                                    r = e[et];
                                try {
                                    e[et] = n;
                                    var i = !0
                                } catch (a) {}
                                var s = Ue.call(e);
                                return i && (t ? e[et] = r : delete e[et]), s
                            }(e) : function(e) {
                                return Ue.call(e)
                            }(e)
                        }

                        function Er(e, t) {
                            return e > t
                        }

                        function Ir(e, t) {
                            return null != e && De.call(e, t)
                        }

                        function Pr(e, t) {
                            return null != e && t in Ie(e)
                        }

                        function Sr(e, t, r) {
                            for (var i = r ? Nt : Ct, s = e[0].length, a = e.length, o = a, c = se(a), u = 1 / 0, p = []; o--;) {
                                var l = e[o];
                                o && t && (l = At(l, Yt(t))), u = mn(l.length, u), c[o] = !r && (t || s >= 120 && l.length >= 120) ? new Gn(o && l) : n
                            }
                            l = e[0];
                            var f = -1,
                                h = c[0];
                            e: for (; ++f < s && p.length < u;) {
                                var d = l[f],
                                    v = t ? t(d) : d;
                                if (d = r || 0 !== d ? d : 0, !(h ? Xt(h, v) : i(p, v, r))) {
                                    for (o = a; --o;) {
                                        var g = c[o];
                                        if (!(g ? Xt(g, v) : i(e[o], v, r))) continue e
                                    }
                                    h && h.push(v), p.push(d)
                                }
                            }
                            return p
                        }

                        function Rr(e, t, r) {
                            var i = null == (e = Is(e, t = mi(t, e))) ? e : e[Ds(Js(t))];
                            return null == i ? n : Et(i, e, r)
                        }

                        function Or(e) {
                            return Xa(e) && Zr(e) == g
                        }

                        function Cr(e, t, r, i, s) {
                            return e === t || (null == e || null == t || !Xa(e) && !Xa(t) ? e !== e && t !== t : function(e, t, r, i, s, a) {
                                var o = Va(e),
                                    c = Va(t),
                                    u = o ? y : hs(e),
                                    p = c ? y : hs(t);
                                u = u == g ? E : u, p = p == g ? E : p;
                                var l = u == E,
                                    f = p == E,
                                    h = u == p;
                                if (h && Fa(e)) {
                                    if (!Fa(t)) return !1;
                                    o = !0, l = !1
                                }
                                if (h && !l) return a || (a = new Jn), o || oo(e) ? es(e, t, r, i, s, a) : function(e, t, n, r, i, s, a) {
                                    switch (n) {
                                        case A:
                                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                            e = e.buffer, t = t.buffer;
                                        case N:
                                            return !(e.byteLength != t.byteLength || !s(new He(e), new He(t)));
                                        case m:
                                        case b:
                                        case Z:
                                            return Ua(+e, +t);
                                        case w:
                                            return e.name == t.name && e.message == t.message;
                                        case P:
                                        case R:
                                            return e == t + "";
                                        case k:
                                            var o = on;
                                        case S:
                                            var c = 1 & r;
                                            if (o || (o = pn), e.size != t.size && !c) return !1;
                                            var u = a.get(e);
                                            if (u) return u == t;
                                            r |= 2, a.set(e, t);
                                            var p = es(o(e), o(t), r, i, s, a);
                                            return a.delete(e), p;
                                        case O:
                                            if (jn) return jn.call(e) == jn.call(t)
                                    }
                                    return !1
                                }(e, t, u, r, i, s, a);
                                if (!(1 & r)) {
                                    var d = l && De.call(e, "__wrapped__"),
                                        v = f && De.call(t, "__wrapped__");
                                    if (d || v) {
                                        var x = d ? e.value() : e,
                                            _ = v ? t.value() : t;
                                        return a || (a = new Jn), s(x, _, r, i, a)
                                    }
                                }
                                return !!h && (a || (a = new Jn), function(e, t, r, i, s, a) {
                                    var o = 1 & r,
                                        c = ns(e),
                                        u = c.length,
                                        p = ns(t),
                                        l = p.length;
                                    if (u != l && !o) return !1;
                                    for (var f = u; f--;) {
                                        var h = c[f];
                                        if (!(o ? h in t : De.call(t, h))) return !1
                                    }
                                    var d = a.get(e),
                                        v = a.get(t);
                                    if (d && v) return d == t && v == e;
                                    var g = !0;
                                    a.set(e, t), a.set(t, e);
                                    for (var y = o; ++f < u;) {
                                        var m = e[h = c[f]],
                                            b = t[h];
                                        if (i) var w = o ? i(b, m, h, t, e, a) : i(m, b, h, e, t, a);
                                        if (!(w === n ? m === b || s(m, b, r, i, a) : w)) {
                                            g = !1;
                                            break
                                        }
                                        y || (y = "constructor" == h)
                                    }
                                    if (g && !y) {
                                        var x = e.constructor,
                                            _ = t.constructor;
                                        x != _ && "constructor" in e && "constructor" in t && !("function" == typeof x && x instanceof x && "function" == typeof _ && _ instanceof _) && (g = !1)
                                    }
                                    return a.delete(e), a.delete(t), g
                                }(e, t, r, i, s, a))
                            }(e, t, r, i, Cr, s))
                        }

                        function Nr(e, t, r, i) {
                            var s = r.length,
                                a = s,
                                o = !i;
                            if (null == e) return !a;
                            for (e = Ie(e); s--;) {
                                var c = r[s];
                                if (o && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                            }
                            for (; ++s < a;) {
                                var u = (c = r[s])[0],
                                    p = e[u],
                                    l = c[1];
                                if (o && c[2]) {
                                    if (p === n && !(u in e)) return !1
                                } else {
                                    var f = new Jn;
                                    if (i) var h = i(p, l, u, e, t, f);
                                    if (!(h === n ? Cr(l, p, 3, i, f) : h)) return !1
                                }
                            }
                            return !0
                        }

                        function Ar(e) {
                            return !(!$a(e) || function(e) {
                                return !!je && je in e
                            }(e)) && (Wa(e) ? ze : ge).test(qs(e))
                        }

                        function Tr(e) {
                            return "function" == typeof e ? e : null == e ? nc : "object" == typeof e ? Va(e) ? Mr(e[0], e[1]) : Lr(e) : lc(e)
                        }

                        function Dr(e) {
                            if (!_s(e)) return gn(e);
                            var t = [];
                            for (var n in Ie(e)) De.call(e, n) && "constructor" != n && t.push(n);
                            return t
                        }

                        function qr(e) {
                            if (!$a(e)) return function(e) {
                                var t = [];
                                if (null != e)
                                    for (var n in Ie(e)) t.push(n);
                                return t
                            }(e);
                            var t = _s(e),
                                n = [];
                            for (var r in e) "constructor" == r && (t || !De.call(e, r)) || n.push(r);
                            return n
                        }

                        function jr(e, t) {
                            return e < t
                        }

                        function Ur(e, t) {
                            var n = -1,
                                r = Ha(e) ? se(e.length) : [];
                            return lr(e, (function(e, i, s) {
                                r[++n] = t(e, i, s)
                            })), r
                        }

                        function Lr(e) {
                            var t = us(e);
                            return 1 == t.length && t[0][2] ? Zs(t[0][0], t[0][1]) : function(n) {
                                return n === e || Nr(n, e, t)
                            }
                        }

                        function Mr(e, t) {
                            return bs(e) && ks(t) ? Zs(Ds(e), t) : function(r) {
                                var i = Eo(r, e);
                                return i === n && i === t ? Io(r, e) : Cr(t, i, 3)
                            }
                        }

                        function zr(e, t, r, i, s) {
                            e !== t && yr(t, (function(a, o) {
                                if (s || (s = new Jn), $a(a)) ! function(e, t, r, i, s, a, o) {
                                    var c = Ps(e, r),
                                        u = Ps(t, r),
                                        p = o.get(u);
                                    if (p) return void Xn(e, r, p);
                                    var l = a ? a(c, u, r + "", e, t, o) : n,
                                        f = l === n;
                                    if (f) {
                                        var h = Va(u),
                                            d = !h && Fa(u),
                                            v = !h && !d && oo(u);
                                        l = u, h || d || v ? Va(c) ? l = c : Ba(c) ? l = Si(c) : d ? (f = !1, l = _i(u, !0)) : v ? (f = !1, l = Zi(u, !0)) : l = [] : no(u) || za(u) ? (l = c, za(c) ? l = go(c) : (!$a(c) || Wa(c)) && (l = vs(u))) : f = !1
                                    }
                                    f && (o.set(u, l), s(l, u, i, a, o), o.delete(u)), Xn(e, r, l)
                                }(e, t, o, r, zr, i, s);
                                else {
                                    var c = i ? i(Ps(e, o), a, o + "", e, t, s) : n;
                                    c === n && (c = a), Xn(e, o, c)
                                }
                            }), Co)
                        }

                        function Vr(e, t) {
                            var r = e.length;
                            if (r) return ys(t += t < 0 ? r : 0, r) ? e[t] : n
                        }

                        function Kr(e, t, n) {
                            t = t.length ? At(t, (function(e) {
                                return Va(e) ? function(t) {
                                    return _r(t, 1 === e.length ? e[0] : e)
                                } : e
                            })) : [nc];
                            var r = -1;
                            t = At(t, Yt(os()));
                            var i = Ur(e, (function(e, n, i) {
                                var s = At(t, (function(t) {
                                    return t(e)
                                }));
                                return {
                                    criteria: s,
                                    index: ++r,
                                    value: e
                                }
                            }));
                            return function(e, t) {
                                var n = e.length;
                                for (e.sort(t); n--;) e[n] = e[n].value;
                                return e
                            }(i, (function(e, t) {
                                return function(e, t, n) {
                                    for (var r = -1, i = e.criteria, s = t.criteria, a = i.length, o = n.length; ++r < a;) {
                                        var c = Ei(i[r], s[r]);
                                        if (c) return r >= o ? c : c * ("desc" == n[r] ? -1 : 1)
                                    }
                                    return e.index - t.index
                                }(e, t, n)
                            }))
                        }

                        function Hr(e, t, n) {
                            for (var r = -1, i = t.length, s = {}; ++r < i;) {
                                var a = t[r],
                                    o = _r(e, a);
                                n(o, a) && $r(s, mi(a, e), o)
                            }
                            return s
                        }

                        function Br(e, t, n, r) {
                            var i = r ? Vt : zt,
                                s = -1,
                                a = t.length,
                                o = e;
                            for (e === t && (t = Si(t)), n && (o = At(e, Yt(n))); ++s < a;)
                                for (var c = 0, u = t[s], p = n ? n(u) : u;
                                    (c = i(o, p, c, r)) > -1;) o !== e && We.call(o, c, 1), We.call(e, c, 1);
                            return e
                        }

                        function Fr(e, t) {
                            for (var n = e ? t.length : 0, r = n - 1; n--;) {
                                var i = t[n];
                                if (n == r || i !== s) {
                                    var s = i;
                                    ys(i) ? We.call(e, i, 1) : pi(e, i)
                                }
                            }
                            return e
                        }

                        function Gr(e, t) {
                            return e + vt(xn() * (t - e + 1))
                        }

                        function Jr(e, t) {
                            var n = "";
                            if (!e || t < 1 || t > f) return n;
                            do {
                                t % 2 && (n += e), (t = vt(t / 2)) && (e += e)
                            } while (t);
                            return n
                        }

                        function Wr(e, t) {
                            return Os(Es(e, t, nc), e + "")
                        }

                        function Qr(e) {
                            return Qn(Lo(e))
                        }

                        function Yr(e, t) {
                            var n = Lo(e);
                            return As(n, ar(t, 0, n.length))
                        }

                        function $r(e, t, r, i) {
                            if (!$a(e)) return e;
                            for (var s = -1, a = (t = mi(t, e)).length, o = a - 1, c = e; null != c && ++s < a;) {
                                var u = Ds(t[s]),
                                    p = r;
                                if ("__proto__" === u || "constructor" === u || "prototype" === u) return e;
                                if (s != o) {
                                    var l = c[u];
                                    (p = i ? i(l, u, c) : n) === n && (p = $a(l) ? l : ys(t[s + 1]) ? [] : {})
                                }
                                er(c, u, p), c = c[u]
                            }
                            return e
                        }
                        var Xr = Rn ? function(e, t) {
                                return Rn.set(e, t), e
                            } : nc,
                            ei = nt ? function(e, t) {
                                return nt(e, "toString", {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: Xo(t),
                                    writable: !0
                                })
                            } : nc;

                        function ti(e) {
                            return As(Lo(e))
                        }

                        function ni(e, t, n) {
                            var r = -1,
                                i = e.length;
                            t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                            for (var s = se(i); ++r < i;) s[r] = e[r + t];
                            return s
                        }

                        function ri(e, t) {
                            var n;
                            return lr(e, (function(e, r, i) {
                                return !(n = t(e, r, i))
                            })), !!n
                        }

                        function ii(e, t, n) {
                            var r = 0,
                                i = null == e ? r : e.length;
                            if ("number" == typeof t && t === t && i <= 2147483647) {
                                for (; r < i;) {
                                    var s = r + i >>> 1,
                                        a = e[s];
                                    null !== a && !ao(a) && (n ? a <= t : a < t) ? r = s + 1 : i = s
                                }
                                return i
                            }
                            return si(e, t, nc, n)
                        }

                        function si(e, t, r, i) {
                            var s = 0,
                                a = null == e ? 0 : e.length;
                            if (0 === a) return 0;
                            for (var o = (t = r(t)) !== t, c = null === t, u = ao(t), p = t === n; s < a;) {
                                var l = vt((s + a) / 2),
                                    f = r(e[l]),
                                    h = f !== n,
                                    d = null === f,
                                    v = f === f,
                                    g = ao(f);
                                if (o) var y = i || v;
                                else y = p ? v && (i || h) : c ? v && h && (i || !d) : u ? v && h && !d && (i || !g) : !d && !g && (i ? f <= t : f < t);
                                y ? s = l + 1 : a = l
                            }
                            return mn(a, 4294967294)
                        }

                        function ai(e, t) {
                            for (var n = -1, r = e.length, i = 0, s = []; ++n < r;) {
                                var a = e[n],
                                    o = t ? t(a) : a;
                                if (!n || !Ua(o, c)) {
                                    var c = o;
                                    s[i++] = 0 === a ? 0 : a
                                }
                            }
                            return s
                        }

                        function oi(e) {
                            return "number" == typeof e ? e : ao(e) ? h : +e
                        }

                        function ci(e) {
                            if ("string" == typeof e) return e;
                            if (Va(e)) return At(e, ci) + "";
                            if (ao(e)) return Un ? Un.call(e) : "";
                            var t = e + "";
                            return "0" == t && 1 / e == -l ? "-0" : t
                        }

                        function ui(e, t, n) {
                            var r = -1,
                                i = Ct,
                                s = e.length,
                                a = !0,
                                o = [],
                                c = o;
                            if (n) a = !1, i = Nt;
                            else if (s >= 200) {
                                var u = t ? null : Ji(e);
                                if (u) return pn(u);
                                a = !1, i = Xt, c = new Gn
                            } else c = t ? [] : o;
                            e: for (; ++r < s;) {
                                var p = e[r],
                                    l = t ? t(p) : p;
                                if (p = n || 0 !== p ? p : 0, a && l === l) {
                                    for (var f = c.length; f--;)
                                        if (c[f] === l) continue e;
                                    t && c.push(l), o.push(p)
                                } else i(c, l, n) || (c !== o && c.push(l), o.push(p))
                            }
                            return o
                        }

                        function pi(e, t) {
                            return null == (e = Is(e, t = mi(t, e))) || delete e[Ds(Js(t))]
                        }

                        function li(e, t, n, r) {
                            return $r(e, t, n(_r(e, t)), r)
                        }

                        function fi(e, t, n, r) {
                            for (var i = e.length, s = r ? i : -1;
                                (r ? s-- : ++s < i) && t(e[s], s, e););
                            return n ? ni(e, r ? 0 : s, r ? s + 1 : i) : ni(e, r ? s + 1 : 0, r ? i : s)
                        }

                        function hi(e, t) {
                            var n = e;
                            return n instanceof Kn && (n = n.value()), Dt(t, (function(e, t) {
                                return t.func.apply(t.thisArg, Tt([e], t.args))
                            }), n)
                        }

                        function di(e, t, n) {
                            var r = e.length;
                            if (r < 2) return r ? ui(e[0]) : [];
                            for (var i = -1, s = se(r); ++i < r;)
                                for (var a = e[i], o = -1; ++o < r;) o != i && (s[i] = pr(s[i] || a, e[o], t, n));
                            return ui(gr(s, 1), t, n)
                        }

                        function vi(e, t, r) {
                            for (var i = -1, s = e.length, a = t.length, o = {}; ++i < s;) {
                                var c = i < a ? t[i] : n;
                                r(o, e[i], c)
                            }
                            return o
                        }

                        function gi(e) {
                            return Ba(e) ? e : []
                        }

                        function yi(e) {
                            return "function" == typeof e ? e : nc
                        }

                        function mi(e, t) {
                            return Va(e) ? e : bs(e, t) ? [e] : Ts(yo(e))
                        }
                        var bi = Wr;

                        function wi(e, t, r) {
                            var i = e.length;
                            return r = r === n ? i : r, !t && r >= i ? e : ni(e, t, r)
                        }
                        var xi = ct || function(e) {
                            return ht.clearTimeout(e)
                        };

                        function _i(e, t) {
                            if (t) return e.slice();
                            var n = e.length,
                                r = Be ? Be(n) : new e.constructor(n);
                            return e.copy(r), r
                        }

                        function ki(e) {
                            var t = new e.constructor(e.byteLength);
                            return new He(t).set(new He(e)), t
                        }

                        function Zi(e, t) {
                            var n = t ? ki(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.length)
                        }

                        function Ei(e, t) {
                            if (e !== t) {
                                var r = e !== n,
                                    i = null === e,
                                    s = e === e,
                                    a = ao(e),
                                    o = t !== n,
                                    c = null === t,
                                    u = t === t,
                                    p = ao(t);
                                if (!c && !p && !a && e > t || a && o && u && !c && !p || i && o && u || !r && u || !s) return 1;
                                if (!i && !a && !p && e < t || p && r && s && !i && !a || c && r && s || !o && s || !u) return -1
                            }
                            return 0
                        }

                        function Ii(e, t, n, r) {
                            for (var i = -1, s = e.length, a = n.length, o = -1, c = t.length, u = yn(s - a, 0), p = se(c + u), l = !r; ++o < c;) p[o] = t[o];
                            for (; ++i < a;)(l || i < s) && (p[n[i]] = e[i]);
                            for (; u--;) p[o++] = e[i++];
                            return p
                        }

                        function Pi(e, t, n, r) {
                            for (var i = -1, s = e.length, a = -1, o = n.length, c = -1, u = t.length, p = yn(s - o, 0), l = se(p + u), f = !r; ++i < p;) l[i] = e[i];
                            for (var h = i; ++c < u;) l[h + c] = t[c];
                            for (; ++a < o;)(f || i < s) && (l[h + n[a]] = e[i++]);
                            return l
                        }

                        function Si(e, t) {
                            var n = -1,
                                r = e.length;
                            for (t || (t = se(r)); ++n < r;) t[n] = e[n];
                            return t
                        }

                        function Ri(e, t, r, i) {
                            var s = !r;
                            r || (r = {});
                            for (var a = -1, o = t.length; ++a < o;) {
                                var c = t[a],
                                    u = i ? i(r[c], e[c], c, r, e) : n;
                                u === n && (u = e[c]), s ? ir(r, c, u) : er(r, c, u)
                            }
                            return r
                        }

                        function Oi(e, t) {
                            return function(n, r) {
                                var i = Va(n) ? It : nr,
                                    s = t ? t() : {};
                                return i(n, e, os(r, 2), s)
                            }
                        }

                        function Ci(e) {
                            return Wr((function(t, r) {
                                var i = -1,
                                    s = r.length,
                                    a = s > 1 ? r[s - 1] : n,
                                    o = s > 2 ? r[2] : n;
                                for (a = e.length > 3 && "function" == typeof a ? (s--, a) : n, o && ms(r[0], r[1], o) && (a = s < 3 ? n : a, s = 1), t = Ie(t); ++i < s;) {
                                    var c = r[i];
                                    c && e(t, c, i, a)
                                }
                                return t
                            }))
                        }

                        function Ni(e, t) {
                            return function(n, r) {
                                if (null == n) return n;
                                if (!Ha(n)) return e(n, r);
                                for (var i = n.length, s = t ? i : -1, a = Ie(n);
                                    (t ? s-- : ++s < i) && !1 !== r(a[s], s, a););
                                return n
                            }
                        }

                        function Ai(e) {
                            return function(t, n, r) {
                                for (var i = -1, s = Ie(t), a = r(t), o = a.length; o--;) {
                                    var c = a[e ? o : ++i];
                                    if (!1 === n(s[c], c, s)) break
                                }
                                return t
                            }
                        }

                        function Ti(e) {
                            return function(t) {
                                var r = an(t = yo(t)) ? fn(t) : n,
                                    i = r ? r[0] : t.charAt(0),
                                    s = r ? wi(r, 1).join("") : t.slice(1);
                                return i[e]() + s
                            }
                        }

                        function Di(e) {
                            return function(t) {
                                return Dt(Qo(Vo(t).replace($e, "")), e, "")
                            }
                        }

                        function qi(e) {
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return new e;
                                    case 1:
                                        return new e(t[0]);
                                    case 2:
                                        return new e(t[0], t[1]);
                                    case 3:
                                        return new e(t[0], t[1], t[2]);
                                    case 4:
                                        return new e(t[0], t[1], t[2], t[3]);
                                    case 5:
                                        return new e(t[0], t[1], t[2], t[3], t[4]);
                                    case 6:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                    case 7:
                                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                }
                                var n = Mn(e.prototype),
                                    r = e.apply(n, t);
                                return $a(r) ? r : n
                            }
                        }

                        function ji(e) {
                            return function(t, r, i) {
                                var s = Ie(t);
                                if (!Ha(t)) {
                                    var a = os(r, 3);
                                    t = Oo(t), r = function(e) {
                                        return a(s[e], e, s)
                                    }
                                }
                                var o = e(t, r, i);
                                return o > -1 ? s[a ? t[o] : o] : n
                            }
                        }

                        function Ui(e) {
                            return ts((function(t) {
                                var i = t.length,
                                    s = i,
                                    a = Vn.prototype.thru;
                                for (e && t.reverse(); s--;) {
                                    var o = t[s];
                                    if ("function" != typeof o) throw new Re(r);
                                    if (a && !c && "wrapper" == ss(o)) var c = new Vn([], !0)
                                }
                                for (s = c ? s : i; ++s < i;) {
                                    var u = ss(o = t[s]),
                                        p = "wrapper" == u ? is(o) : n;
                                    c = p && ws(p[0]) && 424 == p[1] && !p[4].length && 1 == p[9] ? c[ss(p[0])].apply(c, p[3]) : 1 == o.length && ws(o) ? c[u]() : c.thru(o)
                                }
                                return function() {
                                    var e = arguments,
                                        n = e[0];
                                    if (c && 1 == e.length && Va(n)) return c.plant(n).value();
                                    for (var r = 0, s = i ? t[r].apply(this, e) : n; ++r < i;) s = t[r].call(this, s);
                                    return s
                                }
                            }))
                        }

                        function Li(e, t, r, i, s, a, o, c, p, l) {
                            var f = t & u,
                                h = 1 & t,
                                d = 2 & t,
                                v = 24 & t,
                                g = 512 & t,
                                y = d ? n : qi(e);
                            return function u() {
                                for (var m = arguments.length, b = se(m), w = m; w--;) b[w] = arguments[w];
                                if (v) var x = as(u),
                                    _ = function(e, t) {
                                        for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                                        return r
                                    }(b, x);
                                if (i && (b = Ii(b, i, s, v)), a && (b = Pi(b, a, o, v)), m -= _, v && m < l) {
                                    var k = un(b, x);
                                    return Fi(e, t, Li, u.placeholder, r, b, k, c, p, l - m)
                                }
                                var Z = h ? r : this,
                                    E = d ? Z[e] : e;
                                return m = b.length, c ? b = function(e, t) {
                                    for (var r = e.length, i = mn(t.length, r), s = Si(e); i--;) {
                                        var a = t[i];
                                        e[i] = ys(a, r) ? s[a] : n
                                    }
                                    return e
                                }(b, c) : g && m > 1 && b.reverse(), f && p < m && (b.length = p), this && this !== ht && this instanceof u && (E = y || qi(E)), E.apply(Z, b)
                            }
                        }

                        function Mi(e, t) {
                            return function(n, r) {
                                return function(e, t, n, r) {
                                    return br(e, (function(e, i, s) {
                                        t(r, n(e), i, s)
                                    })), r
                                }(n, e, t(r), {})
                            }
                        }

                        function zi(e, t) {
                            return function(r, i) {
                                var s;
                                if (r === n && i === n) return t;
                                if (r !== n && (s = r), i !== n) {
                                    if (s === n) return i;
                                    "string" == typeof r || "string" == typeof i ? (r = ci(r), i = ci(i)) : (r = oi(r), i = oi(i)), s = e(r, i)
                                }
                                return s
                            }
                        }

                        function Vi(e) {
                            return ts((function(t) {
                                return t = At(t, Yt(os())), Wr((function(n) {
                                    var r = this;
                                    return e(t, (function(e) {
                                        return Et(e, r, n)
                                    }))
                                }))
                            }))
                        }

                        function Ki(e, t) {
                            var r = (t = t === n ? " " : ci(t)).length;
                            if (r < 2) return r ? Jr(t, e) : t;
                            var i = Jr(t, dt(e / ln(t)));
                            return an(t) ? wi(fn(i), 0, e).join("") : i.slice(0, e)
                        }

                        function Hi(e) {
                            return function(t, r, i) {
                                return i && "number" != typeof i && ms(t, r, i) && (r = i = n), t = lo(t), r === n ? (r = t, t = 0) : r = lo(r),
                                    function(e, t, n, r) {
                                        for (var i = -1, s = yn(dt((t - e) / (n || 1)), 0), a = se(s); s--;) a[r ? s : ++i] = e, e += n;
                                        return a
                                    }(t, r, i = i === n ? t < r ? 1 : -1 : lo(i), e)
                            }
                        }

                        function Bi(e) {
                            return function(t, n) {
                                return "string" == typeof t && "string" == typeof n || (t = vo(t), n = vo(n)), e(t, n)
                            }
                        }

                        function Fi(e, t, r, i, s, a, u, p, l, f) {
                            var h = 8 & t;
                            t |= h ? o : c, 4 & (t &= ~(h ? c : o)) || (t &= -4);
                            var d = [e, t, s, h ? a : n, h ? u : n, h ? n : a, h ? n : u, p, l, f],
                                v = r.apply(n, d);
                            return ws(e) && Ss(v, d), v.placeholder = i, Cs(v, e, t)
                        }

                        function Gi(e) {
                            var t = Ee[e];
                            return function(e, n) {
                                if (e = vo(e), (n = null == n ? 0 : mn(fo(n), 292)) && Ut(e)) {
                                    var r = (yo(e) + "e").split("e");
                                    return +((r = (yo(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                                }
                                return t(e)
                            }
                        }
                        var Ji = In && 1 / pn(new In([, -0]))[1] == l ? function(e) {
                            return new In(e)
                        } : oc;

                        function Wi(e) {
                            return function(t) {
                                var n = hs(t);
                                return n == k ? on(t) : n == S ? function(e) {
                                    var t = -1,
                                        n = Array(e.size);
                                    return e.forEach((function(e) {
                                        n[++t] = [e, e]
                                    })), n
                                }(t) : function(e, t) {
                                    return At(t, (function(t) {
                                        return [t, e[t]]
                                    }))
                                }(t, e(t))
                            }
                        }

                        function Qi(e, t, i, l, f, h, d, v) {
                            var g = 2 & t;
                            if (!g && "function" != typeof e) throw new Re(r);
                            var y = l ? l.length : 0;
                            if (y || (t &= -97, l = f = n), d = d === n ? d : yn(fo(d), 0), v = v === n ? v : fo(v), y -= f ? f.length : 0, t & c) {
                                var m = l,
                                    b = f;
                                l = f = n
                            }
                            var w = g ? n : is(e),
                                x = [e, t, i, l, f, m, b, h, d, v];
                            if (w && function(e, t) {
                                    var n = e[1],
                                        r = t[1],
                                        i = n | r,
                                        a = i < 131,
                                        o = r == u && 8 == n || r == u && n == p && e[7].length <= t[8] || 384 == r && t[7].length <= t[8] && 8 == n;
                                    if (!a && !o) return e;
                                    1 & r && (e[2] = t[2], i |= 1 & n ? 0 : 4);
                                    var c = t[3];
                                    if (c) {
                                        var l = e[3];
                                        e[3] = l ? Ii(l, c, t[4]) : c, e[4] = l ? un(e[3], s) : t[4]
                                    }
                                    c = t[5], c && (l = e[5], e[5] = l ? Pi(l, c, t[6]) : c, e[6] = l ? un(e[5], s) : t[6]), c = t[7], c && (e[7] = c), r & u && (e[8] = null == e[8] ? t[8] : mn(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = i
                                }(x, w), e = x[0], t = x[1], i = x[2], l = x[3], f = x[4], !(v = x[9] = x[9] === n ? g ? 0 : e.length : yn(x[9] - y, 0)) && 24 & t && (t &= -25), t && 1 != t) _ = 8 == t || t == a ? function(e, t, r) {
                                var i = qi(e);
                                return function s() {
                                    for (var a = arguments.length, o = se(a), c = a, u = as(s); c--;) o[c] = arguments[c];
                                    var p = a < 3 && o[0] !== u && o[a - 1] !== u ? [] : un(o, u);
                                    return (a -= p.length) < r ? Fi(e, t, Li, s.placeholder, n, o, p, n, n, r - a) : Et(this && this !== ht && this instanceof s ? i : e, this, o)
                                }
                            }(e, t, v) : t != o && 33 != t || f.length ? Li.apply(n, x) : function(e, t, n, r) {
                                var i = 1 & t,
                                    s = qi(e);
                                return function t() {
                                    for (var a = -1, o = arguments.length, c = -1, u = r.length, p = se(u + o), l = this && this !== ht && this instanceof t ? s : e; ++c < u;) p[c] = r[c];
                                    for (; o--;) p[c++] = arguments[++a];
                                    return Et(l, i ? n : this, p)
                                }
                            }(e, t, i, l);
                            else var _ = function(e, t, n) {
                                var r = 1 & t,
                                    i = qi(e);
                                return function t() {
                                    return (this && this !== ht && this instanceof t ? i : e).apply(r ? n : this, arguments)
                                }
                            }(e, t, i);
                            return Cs((w ? Xr : Ss)(_, x), e, t)
                        }

                        function Yi(e, t, r, i) {
                            return e === n || Ua(e, Ne[r]) && !De.call(i, r) ? t : e
                        }

                        function $i(e, t, r, i, s, a) {
                            return $a(e) && $a(t) && (a.set(t, e), zr(e, t, n, $i, a), a.delete(t)), e
                        }

                        function Xi(e) {
                            return no(e) ? n : e
                        }

                        function es(e, t, r, i, s, a) {
                            var o = 1 & r,
                                c = e.length,
                                u = t.length;
                            if (c != u && !(o && u > c)) return !1;
                            var p = a.get(e),
                                l = a.get(t);
                            if (p && l) return p == t && l == e;
                            var f = -1,
                                h = !0,
                                d = 2 & r ? new Gn : n;
                            for (a.set(e, t), a.set(t, e); ++f < c;) {
                                var v = e[f],
                                    g = t[f];
                                if (i) var y = o ? i(g, v, f, t, e, a) : i(v, g, f, e, t, a);
                                if (y !== n) {
                                    if (y) continue;
                                    h = !1;
                                    break
                                }
                                if (d) {
                                    if (!jt(t, (function(e, t) {
                                            if (!Xt(d, t) && (v === e || s(v, e, r, i, a))) return d.push(t)
                                        }))) {
                                        h = !1;
                                        break
                                    }
                                } else if (v !== g && !s(v, g, r, i, a)) {
                                    h = !1;
                                    break
                                }
                            }
                            return a.delete(e), a.delete(t), h
                        }

                        function ts(e) {
                            return Os(Es(e, n, Ks), e + "")
                        }

                        function ns(e) {
                            return kr(e, Oo, ls)
                        }

                        function rs(e) {
                            return kr(e, Co, fs)
                        }
                        var is = Rn ? function(e) {
                            return Rn.get(e)
                        } : oc;

                        function ss(e) {
                            for (var t = e.name + "", n = On[t], r = De.call(On, t) ? n.length : 0; r--;) {
                                var i = n[r],
                                    s = i.func;
                                if (null == s || s == e) return i.name
                            }
                            return t
                        }

                        function as(e) {
                            return (De.call(Ln, "placeholder") ? Ln : e).placeholder
                        }

                        function os() {
                            var e = Ln.iteratee || rc;
                            return e = e === rc ? Tr : e, arguments.length ? e(arguments[0], arguments[1]) : e
                        }

                        function cs(e, t) {
                            var n = e.__data__;
                            return function(e) {
                                var t = typeof e;
                                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                            }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                        }

                        function us(e) {
                            for (var t = Oo(e), n = t.length; n--;) {
                                var r = t[n],
                                    i = e[r];
                                t[n] = [r, i, ks(i)]
                            }
                            return t
                        }

                        function ps(e, t) {
                            var r = function(e, t) {
                                return null == e ? n : e[t]
                            }(e, t);
                            return Ar(r) ? r : n
                        }
                        var ls = yt ? function(e) {
                                return null == e ? [] : (e = Ie(e), Ot(yt(e), (function(t) {
                                    return Je.call(e, t)
                                })))
                            } : dc,
                            fs = yt ? function(e) {
                                for (var t = []; e;) Tt(t, ls(e)), e = Fe(e);
                                return t
                            } : dc,
                            hs = Zr;

                        function ds(e, t, n) {
                            for (var r = -1, i = (t = mi(t, e)).length, s = !1; ++r < i;) {
                                var a = Ds(t[r]);
                                if (!(s = null != e && n(e, a))) break;
                                e = e[a]
                            }
                            return s || ++r != i ? s : !!(i = null == e ? 0 : e.length) && Ya(i) && ys(a, i) && (Va(e) || za(e))
                        }

                        function vs(e) {
                            return "function" != typeof e.constructor || _s(e) ? {} : Mn(Fe(e))
                        }

                        function gs(e) {
                            return Va(e) || za(e) || !!(Qe && e && e[Qe])
                        }

                        function ys(e, t) {
                            var n, r = typeof e;
                            return !!(t = null !== (n = t) && void 0 !== n ? n : f) && ("number" == r || "symbol" != r && me.test(e)) && e > -1 && e % 1 == 0 && e < t
                        }

                        function ms(e, t, n) {
                            if (!$a(n)) return !1;
                            var r = typeof t;
                            return !!("number" == r ? Ha(n) && ys(t, n.length) : "string" == r && t in n) && Ua(n[t], e)
                        }

                        function bs(e, t) {
                            if (Va(e)) return !1;
                            var n = typeof e;
                            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ao(e)) || (ee.test(e) || !X.test(e) || null != t && e in Ie(t))
                        }

                        function ws(e) {
                            var t = ss(e),
                                n = Ln[t];
                            if ("function" != typeof n || !(t in Kn.prototype)) return !1;
                            if (e === n) return !0;
                            var r = is(n);
                            return !!r && e === r[0]
                        }(kn && hs(new kn(new ArrayBuffer(1))) != A || Zn && hs(new Zn) != k || En && hs(En.resolve()) != I || In && hs(new In) != S || Pn && hs(new Pn) != C) && (hs = function(e) {
                            var t = Zr(e),
                                r = t == E ? e.constructor : n,
                                i = r ? qs(r) : "";
                            if (i) switch (i) {
                                case Cn:
                                    return A;
                                case Nn:
                                    return k;
                                case An:
                                    return I;
                                case Tn:
                                    return S;
                                case Dn:
                                    return C
                            }
                            return t
                        });
                        var xs = Ae ? Wa : vc;

                        function _s(e) {
                            var t = e && e.constructor;
                            return e === ("function" == typeof t && t.prototype || Ne)
                        }

                        function ks(e) {
                            return e === e && !$a(e)
                        }

                        function Zs(e, t) {
                            return function(r) {
                                return null != r && (r[e] === t && (t !== n || e in Ie(r)))
                            }
                        }

                        function Es(e, t, r) {
                            return t = yn(t === n ? e.length - 1 : t, 0),
                                function() {
                                    for (var n = arguments, i = -1, s = yn(n.length - t, 0), a = se(s); ++i < s;) a[i] = n[t + i];
                                    i = -1;
                                    for (var o = se(t + 1); ++i < t;) o[i] = n[i];
                                    return o[t] = r(a), Et(e, this, o)
                                }
                        }

                        function Is(e, t) {
                            return t.length < 2 ? e : _r(e, ni(t, 0, -1))
                        }

                        function Ps(e, t) {
                            if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                        }
                        var Ss = Ns(Xr),
                            Rs = ft || function(e, t) {
                                return ht.setTimeout(e, t)
                            },
                            Os = Ns(ei);

                        function Cs(e, t, n) {
                            var r = t + "";
                            return Os(e, function(e, t) {
                                var n = t.length;
                                if (!n) return e;
                                var r = n - 1;
                                return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(ae, "{\n/* [wrapped with " + t + "] */\n")
                            }(r, function(e, t) {
                                return Pt(v, (function(n) {
                                    var r = "_." + n[0];
                                    t & n[1] && !Ct(e, r) && e.push(r)
                                })), e.sort()
                            }(function(e) {
                                var t = e.match(oe);
                                return t ? t[1].split(ce) : []
                            }(r), n)))
                        }

                        function Ns(e) {
                            var t = 0,
                                r = 0;
                            return function() {
                                var i = bn(),
                                    s = 16 - (i - r);
                                if (r = i, s > 0) {
                                    if (++t >= 800) return arguments[0]
                                } else t = 0;
                                return e.apply(n, arguments)
                            }
                        }

                        function As(e, t) {
                            var r = -1,
                                i = e.length,
                                s = i - 1;
                            for (t = t === n ? i : t; ++r < t;) {
                                var a = Gr(r, s),
                                    o = e[a];
                                e[a] = e[r], e[r] = o
                            }
                            return e.length = t, e
                        }
                        var Ts = function(e) {
                            var t = Na(e, (function(e) {
                                    return 500 === n.size && n.clear(), e
                                })),
                                n = t.cache;
                            return t
                        }((function(e) {
                            var t = [];
                            return 46 === e.charCodeAt(0) && t.push(""), e.replace(te, (function(e, n, r, i) {
                                t.push(r ? i.replace(le, "$1") : n || e)
                            })), t
                        }));

                        function Ds(e) {
                            if ("string" == typeof e || ao(e)) return e;
                            var t = e + "";
                            return "0" == t && 1 / e == -l ? "-0" : t
                        }

                        function qs(e) {
                            if (null != e) {
                                try {
                                    return Te.call(e)
                                } catch (t) {}
                                try {
                                    return e + ""
                                } catch (n) {}
                            }
                            return ""
                        }

                        function js(e) {
                            if (e instanceof Kn) return e.clone();
                            var t = new Vn(e.__wrapped__, e.__chain__);
                            return t.__actions__ = Si(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                        }
                        var Us = Wr((function(e, t) {
                                return Ba(e) ? pr(e, gr(t, 1, Ba, !0)) : []
                            })),
                            Ls = Wr((function(e, t) {
                                var r = Js(t);
                                return Ba(r) && (r = n), Ba(e) ? pr(e, gr(t, 1, Ba, !0), os(r, 2)) : []
                            })),
                            Ms = Wr((function(e, t) {
                                var r = Js(t);
                                return Ba(r) && (r = n), Ba(e) ? pr(e, gr(t, 1, Ba, !0), n, r) : []
                            }));

                        function zs(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            if (!r) return -1;
                            var i = null == n ? 0 : fo(n);
                            return i < 0 && (i = yn(r + i, 0)), Mt(e, os(t, 3), i)
                        }

                        function Vs(e, t, r) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var s = i - 1;
                            return r !== n && (s = fo(r), s = r < 0 ? yn(i + s, 0) : mn(s, i - 1)), Mt(e, os(t, 3), s, !0)
                        }

                        function Ks(e) {
                            return (null == e ? 0 : e.length) ? gr(e, 1) : []
                        }

                        function Hs(e) {
                            return e && e.length ? e[0] : n
                        }
                        var Bs = Wr((function(e) {
                                var t = At(e, gi);
                                return t.length && t[0] === e[0] ? Sr(t) : []
                            })),
                            Fs = Wr((function(e) {
                                var t = Js(e),
                                    r = At(e, gi);
                                return t === Js(r) ? t = n : r.pop(), r.length && r[0] === e[0] ? Sr(r, os(t, 2)) : []
                            })),
                            Gs = Wr((function(e) {
                                var t = Js(e),
                                    r = At(e, gi);
                                return (t = "function" == typeof t ? t : n) && r.pop(), r.length && r[0] === e[0] ? Sr(r, n, t) : []
                            }));

                        function Js(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? e[t - 1] : n
                        }
                        var Ws = Wr(Qs);

                        function Qs(e, t) {
                            return e && e.length && t && t.length ? Br(e, t) : e
                        }
                        var Ys = ts((function(e, t) {
                            var n = null == e ? 0 : e.length,
                                r = sr(e, t);
                            return Fr(e, At(t, (function(e) {
                                return ys(e, n) ? +e : e
                            })).sort(Ei)), r
                        }));

                        function $s(e) {
                            return null == e ? e : _n.call(e)
                        }
                        var Xs = Wr((function(e) {
                                return ui(gr(e, 1, Ba, !0))
                            })),
                            ea = Wr((function(e) {
                                var t = Js(e);
                                return Ba(t) && (t = n), ui(gr(e, 1, Ba, !0), os(t, 2))
                            })),
                            ta = Wr((function(e) {
                                var t = Js(e);
                                return t = "function" == typeof t ? t : n, ui(gr(e, 1, Ba, !0), n, t)
                            }));

                        function na(e) {
                            if (!e || !e.length) return [];
                            var t = 0;
                            return e = Ot(e, (function(e) {
                                if (Ba(e)) return t = yn(e.length, t), !0
                            })), Wt(t, (function(t) {
                                return At(e, Bt(t))
                            }))
                        }

                        function ra(e, t) {
                            if (!e || !e.length) return [];
                            var r = na(e);
                            return null == t ? r : At(r, (function(e) {
                                return Et(t, n, e)
                            }))
                        }
                        var ia = Wr((function(e, t) {
                                return Ba(e) ? pr(e, t) : []
                            })),
                            sa = Wr((function(e) {
                                return di(Ot(e, Ba))
                            })),
                            aa = Wr((function(e) {
                                var t = Js(e);
                                return Ba(t) && (t = n), di(Ot(e, Ba), os(t, 2))
                            })),
                            oa = Wr((function(e) {
                                var t = Js(e);
                                return t = "function" == typeof t ? t : n, di(Ot(e, Ba), n, t)
                            })),
                            ca = Wr(na);
                        var ua = Wr((function(e) {
                            var t = e.length,
                                r = t > 1 ? e[t - 1] : n;
                            return r = "function" == typeof r ? (e.pop(), r) : n, ra(e, r)
                        }));

                        function pa(e) {
                            var t = Ln(e);
                            return t.__chain__ = !0, t
                        }

                        function la(e, t) {
                            return t(e)
                        }
                        var fa = ts((function(e) {
                            var t = e.length,
                                r = t ? e[0] : 0,
                                i = this.__wrapped__,
                                s = function(t) {
                                    return sr(t, e)
                                };
                            return !(t > 1 || this.__actions__.length) && i instanceof Kn && ys(r) ? ((i = i.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                                func: la,
                                args: [s],
                                thisArg: n
                            }), new Vn(i, this.__chain__).thru((function(e) {
                                return t && !e.length && e.push(n), e
                            }))) : this.thru(s)
                        }));
                        var ha = Oi((function(e, t, n) {
                            De.call(e, n) ? ++e[n] : ir(e, n, 1)
                        }));
                        var da = ji(zs),
                            va = ji(Vs);

                        function ga(e, t) {
                            return (Va(e) ? Pt : lr)(e, os(t, 3))
                        }

                        function ya(e, t) {
                            return (Va(e) ? St : fr)(e, os(t, 3))
                        }
                        var ma = Oi((function(e, t, n) {
                            De.call(e, n) ? e[n].push(t) : ir(e, n, [t])
                        }));
                        var ba = Wr((function(e, t, n) {
                                var r = -1,
                                    i = "function" == typeof t,
                                    s = Ha(e) ? se(e.length) : [];
                                return lr(e, (function(e) {
                                    s[++r] = i ? Et(t, e, n) : Rr(e, t, n)
                                })), s
                            })),
                            wa = Oi((function(e, t, n) {
                                ir(e, n, t)
                            }));

                        function xa(e, t) {
                            return (Va(e) ? At : Ur)(e, os(t, 3))
                        }
                        var _a = Oi((function(e, t, n) {
                            e[n ? 0 : 1].push(t)
                        }), (function() {
                            return [
                                [],
                                []
                            ]
                        }));
                        var ka = Wr((function(e, t) {
                                if (null == e) return [];
                                var n = t.length;
                                return n > 1 && ms(e, t[0], t[1]) ? t = [] : n > 2 && ms(t[0], t[1], t[2]) && (t = [t[0]]), Kr(e, gr(t, 1), [])
                            })),
                            Za = lt || function() {
                                return ht.Date.now()
                            };

                        function Ea(e, t, r) {
                            return t = r ? n : t, t = e && null == t ? e.length : t, Qi(e, u, n, n, n, n, t)
                        }

                        function Ia(e, t) {
                            var i;
                            if ("function" != typeof t) throw new Re(r);
                            return e = fo(e),
                                function() {
                                    return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = n), i
                                }
                        }
                        var Pa = Wr((function(e, t, n) {
                                var r = 1;
                                if (n.length) {
                                    var i = un(n, as(Pa));
                                    r |= o
                                }
                                return Qi(e, r, t, n, i)
                            })),
                            Sa = Wr((function(e, t, n) {
                                var r = 3;
                                if (n.length) {
                                    var i = un(n, as(Sa));
                                    r |= o
                                }
                                return Qi(t, r, e, n, i)
                            }));

                        function Ra(e, t, i) {
                            var s, a, o, c, u, p, l = 0,
                                f = !1,
                                h = !1,
                                d = !0;
                            if ("function" != typeof e) throw new Re(r);

                            function v(t) {
                                var r = s,
                                    i = a;
                                return s = a = n, l = t, c = e.apply(i, r)
                            }

                            function g(e) {
                                var r = e - p;
                                return p === n || r >= t || r < 0 || h && e - l >= o
                            }

                            function y() {
                                var e = Za();
                                if (g(e)) return m(e);
                                u = Rs(y, function(e) {
                                    var n = t - (e - p);
                                    return h ? mn(n, o - (e - l)) : n
                                }(e))
                            }

                            function m(e) {
                                return u = n, d && s ? v(e) : (s = a = n, c)
                            }

                            function b() {
                                var e = Za(),
                                    r = g(e);
                                if (s = arguments, a = this, p = e, r) {
                                    if (u === n) return function(e) {
                                        return l = e, u = Rs(y, t), f ? v(e) : c
                                    }(p);
                                    if (h) return xi(u), u = Rs(y, t), v(p)
                                }
                                return u === n && (u = Rs(y, t)), c
                            }
                            return t = vo(t) || 0, $a(i) && (f = !!i.leading, o = (h = "maxWait" in i) ? yn(vo(i.maxWait) || 0, t) : o, d = "trailing" in i ? !!i.trailing : d), b.cancel = function() {
                                u !== n && xi(u), l = 0, s = p = a = u = n
                            }, b.flush = function() {
                                return u === n ? c : m(Za())
                            }, b
                        }
                        var Oa = Wr((function(e, t) {
                                return ur(e, 1, t)
                            })),
                            Ca = Wr((function(e, t, n) {
                                return ur(e, vo(t) || 0, n)
                            }));

                        function Na(e, t) {
                            if ("function" != typeof e || null != t && "function" != typeof t) throw new Re(r);
                            var n = function n() {
                                var r = arguments,
                                    i = t ? t.apply(this, r) : r[0],
                                    s = n.cache;
                                if (s.has(i)) return s.get(i);
                                var a = e.apply(this, r);
                                return n.cache = s.set(i, a) || s, a
                            };
                            return n.cache = new(Na.Cache || Fn), n
                        }

                        function Aa(e) {
                            if ("function" != typeof e) throw new Re(r);
                            return function() {
                                var t = arguments;
                                switch (t.length) {
                                    case 0:
                                        return !e.call(this);
                                    case 1:
                                        return !e.call(this, t[0]);
                                    case 2:
                                        return !e.call(this, t[0], t[1]);
                                    case 3:
                                        return !e.call(this, t[0], t[1], t[2])
                                }
                                return !e.apply(this, t)
                            }
                        }
                        Na.Cache = Fn;
                        var Ta = bi((function(e, t) {
                                var n = (t = 1 == t.length && Va(t[0]) ? At(t[0], Yt(os())) : At(gr(t, 1), Yt(os()))).length;
                                return Wr((function(r) {
                                    for (var i = -1, s = mn(r.length, n); ++i < s;) r[i] = t[i].call(this, r[i]);
                                    return Et(e, this, r)
                                }))
                            })),
                            Da = Wr((function(e, t) {
                                var r = un(t, as(Da));
                                return Qi(e, o, n, t, r)
                            })),
                            qa = Wr((function(e, t) {
                                var r = un(t, as(qa));
                                return Qi(e, c, n, t, r)
                            })),
                            ja = ts((function(e, t) {
                                return Qi(e, p, n, n, n, t)
                            }));

                        function Ua(e, t) {
                            return e === t || e !== e && t !== t
                        }
                        var La = Bi(Er),
                            Ma = Bi((function(e, t) {
                                return e >= t
                            })),
                            za = Or(function() {
                                return arguments
                            }()) ? Or : function(e) {
                                return Xa(e) && De.call(e, "callee") && !Je.call(e, "callee")
                            },
                            Va = se.isArray,
                            Ka = bt ? Yt(bt) : function(e) {
                                return Xa(e) && Zr(e) == N
                            };

                        function Ha(e) {
                            return null != e && Ya(e.length) && !Wa(e)
                        }

                        function Ba(e) {
                            return Xa(e) && Ha(e)
                        }
                        var Fa = mt || vc,
                            Ga = wt ? Yt(wt) : function(e) {
                                return Xa(e) && Zr(e) == b
                            };

                        function Ja(e) {
                            if (!Xa(e)) return !1;
                            var t = Zr(e);
                            return t == w || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !no(e)
                        }

                        function Wa(e) {
                            if (!$a(e)) return !1;
                            var t = Zr(e);
                            return t == x || t == _ || "[object AsyncFunction]" == t || "[object Proxy]" == t
                        }

                        function Qa(e) {
                            return "number" == typeof e && e == fo(e)
                        }

                        function Ya(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= f
                        }

                        function $a(e) {
                            var t = typeof e;
                            return null != e && ("object" == t || "function" == t)
                        }

                        function Xa(e) {
                            return null != e && "object" == typeof e
                        }
                        var eo = xt ? Yt(xt) : function(e) {
                            return Xa(e) && hs(e) == k
                        };

                        function to(e) {
                            return "number" == typeof e || Xa(e) && Zr(e) == Z
                        }

                        function no(e) {
                            if (!Xa(e) || Zr(e) != E) return !1;
                            var t = Fe(e);
                            if (null === t) return !0;
                            var n = De.call(t, "constructor") && t.constructor;
                            return "function" == typeof n && n instanceof n && Te.call(n) == Le
                        }
                        var ro = _t ? Yt(_t) : function(e) {
                            return Xa(e) && Zr(e) == P
                        };
                        var io = kt ? Yt(kt) : function(e) {
                            return Xa(e) && hs(e) == S
                        };

                        function so(e) {
                            return "string" == typeof e || !Va(e) && Xa(e) && Zr(e) == R
                        }

                        function ao(e) {
                            return "symbol" == typeof e || Xa(e) && Zr(e) == O
                        }
                        var oo = Zt ? Yt(Zt) : function(e) {
                            return Xa(e) && Ya(e.length) && !!at[Zr(e)]
                        };
                        var co = Bi(jr),
                            uo = Bi((function(e, t) {
                                return e <= t
                            }));

                        function po(e) {
                            if (!e) return [];
                            if (Ha(e)) return so(e) ? fn(e) : Si(e);
                            if (Ye && e[Ye]) return function(e) {
                                for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                                return n
                            }(e[Ye]());
                            var t = hs(e);
                            return (t == k ? on : t == S ? pn : Lo)(e)
                        }

                        function lo(e) {
                            return e ? (e = vo(e)) === l || e === -l ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
                        }

                        function fo(e) {
                            var t = lo(e),
                                n = t % 1;
                            return t === t ? n ? t - n : t : 0
                        }

                        function ho(e) {
                            return e ? ar(fo(e), 0, d) : 0
                        }

                        function vo(e) {
                            if ("number" == typeof e) return e;
                            if (ao(e)) return h;
                            if ($a(e)) {
                                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = $a(t) ? t + "" : t
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            e = Qt(e);
                            var n = ve.test(e);
                            return n || ye.test(e) ? pt(e.slice(2), n ? 2 : 8) : de.test(e) ? h : +e
                        }

                        function go(e) {
                            return Ri(e, Co(e))
                        }

                        function yo(e) {
                            return null == e ? "" : ci(e)
                        }
                        var mo = Ci((function(e, t) {
                                if (_s(t) || Ha(t)) Ri(t, Oo(t), e);
                                else
                                    for (var n in t) De.call(t, n) && er(e, n, t[n])
                            })),
                            bo = Ci((function(e, t) {
                                Ri(t, Co(t), e)
                            })),
                            wo = Ci((function(e, t, n, r) {
                                Ri(t, Co(t), e, r)
                            })),
                            xo = Ci((function(e, t, n, r) {
                                Ri(t, Oo(t), e, r)
                            })),
                            _o = ts(sr);
                        var ko = Wr((function(e, t) {
                                e = Ie(e);
                                var r = -1,
                                    i = t.length,
                                    s = i > 2 ? t[2] : n;
                                for (s && ms(t[0], t[1], s) && (i = 1); ++r < i;)
                                    for (var a = t[r], o = Co(a), c = -1, u = o.length; ++c < u;) {
                                        var p = o[c],
                                            l = e[p];
                                        (l === n || Ua(l, Ne[p]) && !De.call(e, p)) && (e[p] = a[p])
                                    }
                                return e
                            })),
                            Zo = Wr((function(e) {
                                return e.push(n, $i), Et(Ao, n, e)
                            }));

                        function Eo(e, t, r) {
                            var i = null == e ? n : _r(e, t);
                            return i === n ? r : i
                        }

                        function Io(e, t) {
                            return null != e && ds(e, t, Pr)
                        }
                        var Po = Mi((function(e, t, n) {
                                null != t && "function" != typeof t.toString && (t = Ue.call(t)), e[t] = n
                            }), Xo(nc)),
                            So = Mi((function(e, t, n) {
                                null != t && "function" != typeof t.toString && (t = Ue.call(t)), De.call(e, t) ? e[t].push(n) : e[t] = [n]
                            }), os),
                            Ro = Wr(Rr);

                        function Oo(e) {
                            return Ha(e) ? Wn(e) : Dr(e)
                        }

                        function Co(e) {
                            return Ha(e) ? Wn(e, !0) : qr(e)
                        }
                        var No = Ci((function(e, t, n) {
                                zr(e, t, n)
                            })),
                            Ao = Ci((function(e, t, n, r) {
                                zr(e, t, n, r)
                            })),
                            To = ts((function(e, t) {
                                var n = {};
                                if (null == e) return n;
                                var r = !1;
                                t = At(t, (function(t) {
                                    return t = mi(t, e), r || (r = t.length > 1), t
                                })), Ri(e, rs(e), n), r && (n = or(n, 7, Xi));
                                for (var i = t.length; i--;) pi(n, t[i]);
                                return n
                            }));
                        var Do = ts((function(e, t) {
                            return null == e ? {} : function(e, t) {
                                return Hr(e, t, (function(t, n) {
                                    return Io(e, n)
                                }))
                            }(e, t)
                        }));

                        function qo(e, t) {
                            if (null == e) return {};
                            var n = At(rs(e), (function(e) {
                                return [e]
                            }));
                            return t = os(t), Hr(e, n, (function(e, n) {
                                return t(e, n[0])
                            }))
                        }
                        var jo = Wi(Oo),
                            Uo = Wi(Co);

                        function Lo(e) {
                            return null == e ? [] : $t(e, Oo(e))
                        }
                        var Mo = Di((function(e, t, n) {
                            return t = t.toLowerCase(), e + (n ? zo(t) : t)
                        }));

                        function zo(e) {
                            return Wo(yo(e).toLowerCase())
                        }

                        function Vo(e) {
                            return (e = yo(e)) && e.replace(be, nn).replace(Xe, "")
                        }
                        var Ko = Di((function(e, t, n) {
                                return e + (n ? "-" : "") + t.toLowerCase()
                            })),
                            Ho = Di((function(e, t, n) {
                                return e + (n ? " " : "") + t.toLowerCase()
                            })),
                            Bo = Ti("toLowerCase");
                        var Fo = Di((function(e, t, n) {
                            return e + (n ? "_" : "") + t.toLowerCase()
                        }));
                        var Go = Di((function(e, t, n) {
                            return e + (n ? " " : "") + Wo(t)
                        }));
                        var Jo = Di((function(e, t, n) {
                                return e + (n ? " " : "") + t.toUpperCase()
                            })),
                            Wo = Ti("toUpperCase");

                        function Qo(e, t, r) {
                            return e = yo(e), (t = r ? n : t) === n ? function(e) {
                                return rt.test(e)
                            }(e) ? function(e) {
                                return e.match(tt) || []
                            }(e) : function(e) {
                                return e.match(ue) || []
                            }(e) : e.match(t) || []
                        }
                        var Yo = Wr((function(e, t) {
                                try {
                                    return Et(e, n, t)
                                } catch (r) {
                                    return Ja(r) ? r : new ke(r)
                                }
                            })),
                            $o = ts((function(e, t) {
                                return Pt(t, (function(t) {
                                    t = Ds(t), ir(e, t, Pa(e[t], e))
                                })), e
                            }));

                        function Xo(e) {
                            return function() {
                                return e
                            }
                        }
                        var ec = Ui(),
                            tc = Ui(!0);

                        function nc(e) {
                            return e
                        }

                        function rc(e) {
                            return Tr("function" == typeof e ? e : or(e, 1))
                        }
                        var ic = Wr((function(e, t) {
                                return function(n) {
                                    return Rr(n, e, t)
                                }
                            })),
                            sc = Wr((function(e, t) {
                                return function(n) {
                                    return Rr(e, n, t)
                                }
                            }));

                        function ac(e, t, n) {
                            var r = Oo(t),
                                i = xr(t, r);
                            null == n && (!$a(t) || !i.length && r.length) && (n = t, t = e, e = this, i = xr(t, Oo(t)));
                            var s = !($a(n) && "chain" in n) || !!n.chain,
                                a = Wa(e);
                            return Pt(i, (function(n) {
                                var r = t[n];
                                e[n] = r, a && (e.prototype[n] = function() {
                                    var t = this.__chain__;
                                    if (s || t) {
                                        var n = e(this.__wrapped__);
                                        return (n.__actions__ = Si(this.__actions__)).push({
                                            func: r,
                                            args: arguments,
                                            thisArg: e
                                        }), n.__chain__ = t, n
                                    }
                                    return r.apply(e, Tt([this.value()], arguments))
                                })
                            })), e
                        }

                        function oc() {}
                        var cc = Vi(At),
                            uc = Vi(Rt),
                            pc = Vi(jt);

                        function lc(e) {
                            return bs(e) ? Bt(Ds(e)) : function(e) {
                                return function(t) {
                                    return _r(t, e)
                                }
                            }(e)
                        }
                        var fc = Hi(),
                            hc = Hi(!0);

                        function dc() {
                            return []
                        }

                        function vc() {
                            return !1
                        }
                        var gc = zi((function(e, t) {
                                return e + t
                            }), 0),
                            yc = Gi("ceil"),
                            mc = zi((function(e, t) {
                                return e / t
                            }), 1),
                            bc = Gi("floor");
                        var wc = zi((function(e, t) {
                                return e * t
                            }), 1),
                            xc = Gi("round"),
                            _c = zi((function(e, t) {
                                return e - t
                            }), 0);
                        return Ln.after = function(e, t) {
                            if ("function" != typeof t) throw new Re(r);
                            return e = fo(e),
                                function() {
                                    if (--e < 1) return t.apply(this, arguments)
                                }
                        }, Ln.ary = Ea, Ln.assign = mo, Ln.assignIn = bo, Ln.assignInWith = wo, Ln.assignWith = xo, Ln.at = _o, Ln.before = Ia, Ln.bind = Pa, Ln.bindAll = $o, Ln.bindKey = Sa, Ln.castArray = function() {
                            if (!arguments.length) return [];
                            var e = arguments[0];
                            return Va(e) ? e : [e]
                        }, Ln.chain = pa, Ln.chunk = function(e, t, r) {
                            t = (r ? ms(e, t, r) : t === n) ? 1 : yn(fo(t), 0);
                            var i = null == e ? 0 : e.length;
                            if (!i || t < 1) return [];
                            for (var s = 0, a = 0, o = se(dt(i / t)); s < i;) o[a++] = ni(e, s, s += t);
                            return o
                        }, Ln.compact = function(e) {
                            for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
                                var s = e[t];
                                s && (i[r++] = s)
                            }
                            return i
                        }, Ln.concat = function() {
                            var e = arguments.length;
                            if (!e) return [];
                            for (var t = se(e - 1), n = arguments[0], r = e; r--;) t[r - 1] = arguments[r];
                            return Tt(Va(n) ? Si(n) : [n], gr(t, 1))
                        }, Ln.cond = function(e) {
                            var t = null == e ? 0 : e.length,
                                n = os();
                            return e = t ? At(e, (function(e) {
                                if ("function" != typeof e[1]) throw new Re(r);
                                return [n(e[0]), e[1]]
                            })) : [], Wr((function(n) {
                                for (var r = -1; ++r < t;) {
                                    var i = e[r];
                                    if (Et(i[0], this, n)) return Et(i[1], this, n)
                                }
                            }))
                        }, Ln.conforms = function(e) {
                            return function(e) {
                                var t = Oo(e);
                                return function(n) {
                                    return cr(n, e, t)
                                }
                            }(or(e, 1))
                        }, Ln.constant = Xo, Ln.countBy = ha, Ln.create = function(e, t) {
                            var n = Mn(e);
                            return null == t ? n : rr(n, t)
                        }, Ln.curry = function e(t, r, i) {
                            var s = Qi(t, 8, n, n, n, n, n, r = i ? n : r);
                            return s.placeholder = e.placeholder, s
                        }, Ln.curryRight = function e(t, r, i) {
                            var s = Qi(t, a, n, n, n, n, n, r = i ? n : r);
                            return s.placeholder = e.placeholder, s
                        }, Ln.debounce = Ra, Ln.defaults = ko, Ln.defaultsDeep = Zo, Ln.defer = Oa, Ln.delay = Ca, Ln.difference = Us, Ln.differenceBy = Ls, Ln.differenceWith = Ms, Ln.drop = function(e, t, r) {
                            var i = null == e ? 0 : e.length;
                            return i ? ni(e, (t = r || t === n ? 1 : fo(t)) < 0 ? 0 : t, i) : []
                        }, Ln.dropRight = function(e, t, r) {
                            var i = null == e ? 0 : e.length;
                            return i ? ni(e, 0, (t = i - (t = r || t === n ? 1 : fo(t))) < 0 ? 0 : t) : []
                        }, Ln.dropRightWhile = function(e, t) {
                            return e && e.length ? fi(e, os(t, 3), !0, !0) : []
                        }, Ln.dropWhile = function(e, t) {
                            return e && e.length ? fi(e, os(t, 3), !0) : []
                        }, Ln.fill = function(e, t, r, i) {
                            var s = null == e ? 0 : e.length;
                            return s ? (r && "number" != typeof r && ms(e, t, r) && (r = 0, i = s), function(e, t, r, i) {
                                var s = e.length;
                                for ((r = fo(r)) < 0 && (r = -r > s ? 0 : s + r), (i = i === n || i > s ? s : fo(i)) < 0 && (i += s), i = r > i ? 0 : ho(i); r < i;) e[r++] = t;
                                return e
                            }(e, t, r, i)) : []
                        }, Ln.filter = function(e, t) {
                            return (Va(e) ? Ot : vr)(e, os(t, 3))
                        }, Ln.flatMap = function(e, t) {
                            return gr(xa(e, t), 1)
                        }, Ln.flatMapDeep = function(e, t) {
                            return gr(xa(e, t), l)
                        }, Ln.flatMapDepth = function(e, t, r) {
                            return r = r === n ? 1 : fo(r), gr(xa(e, t), r)
                        }, Ln.flatten = Ks, Ln.flattenDeep = function(e) {
                            return (null == e ? 0 : e.length) ? gr(e, l) : []
                        }, Ln.flattenDepth = function(e, t) {
                            return (null == e ? 0 : e.length) ? gr(e, t = t === n ? 1 : fo(t)) : []
                        }, Ln.flip = function(e) {
                            return Qi(e, 512)
                        }, Ln.flow = ec, Ln.flowRight = tc, Ln.fromPairs = function(e) {
                            for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                                var i = e[t];
                                r[i[0]] = i[1]
                            }
                            return r
                        }, Ln.functions = function(e) {
                            return null == e ? [] : xr(e, Oo(e))
                        }, Ln.functionsIn = function(e) {
                            return null == e ? [] : xr(e, Co(e))
                        }, Ln.groupBy = ma, Ln.initial = function(e) {
                            return (null == e ? 0 : e.length) ? ni(e, 0, -1) : []
                        }, Ln.intersection = Bs, Ln.intersectionBy = Fs, Ln.intersectionWith = Gs, Ln.invert = Po, Ln.invertBy = So, Ln.invokeMap = ba, Ln.iteratee = rc, Ln.keyBy = wa, Ln.keys = Oo, Ln.keysIn = Co, Ln.map = xa, Ln.mapKeys = function(e, t) {
                            var n = {};
                            return t = os(t, 3), br(e, (function(e, r, i) {
                                ir(n, t(e, r, i), e)
                            })), n
                        }, Ln.mapValues = function(e, t) {
                            var n = {};
                            return t = os(t, 3), br(e, (function(e, r, i) {
                                ir(n, r, t(e, r, i))
                            })), n
                        }, Ln.matches = function(e) {
                            return Lr(or(e, 1))
                        }, Ln.matchesProperty = function(e, t) {
                            return Mr(e, or(t, 1))
                        }, Ln.memoize = Na, Ln.merge = No, Ln.mergeWith = Ao, Ln.method = ic, Ln.methodOf = sc, Ln.mixin = ac, Ln.negate = Aa, Ln.nthArg = function(e) {
                            return e = fo(e), Wr((function(t) {
                                return Vr(t, e)
                            }))
                        }, Ln.omit = To, Ln.omitBy = function(e, t) {
                            return qo(e, Aa(os(t)))
                        }, Ln.once = function(e) {
                            return Ia(2, e)
                        }, Ln.orderBy = function(e, t, r, i) {
                            return null == e ? [] : (Va(t) || (t = null == t ? [] : [t]), Va(r = i ? n : r) || (r = null == r ? [] : [r]), Kr(e, t, r))
                        }, Ln.over = cc, Ln.overArgs = Ta, Ln.overEvery = uc, Ln.overSome = pc, Ln.partial = Da, Ln.partialRight = qa, Ln.partition = _a, Ln.pick = Do, Ln.pickBy = qo, Ln.property = lc, Ln.propertyOf = function(e) {
                            return function(t) {
                                return null == e ? n : _r(e, t)
                            }
                        }, Ln.pull = Ws, Ln.pullAll = Qs, Ln.pullAllBy = function(e, t, n) {
                            return e && e.length && t && t.length ? Br(e, t, os(n, 2)) : e
                        }, Ln.pullAllWith = function(e, t, r) {
                            return e && e.length && t && t.length ? Br(e, t, n, r) : e
                        }, Ln.pullAt = Ys, Ln.range = fc, Ln.rangeRight = hc, Ln.rearg = ja, Ln.reject = function(e, t) {
                            return (Va(e) ? Ot : vr)(e, Aa(os(t, 3)))
                        }, Ln.remove = function(e, t) {
                            var n = [];
                            if (!e || !e.length) return n;
                            var r = -1,
                                i = [],
                                s = e.length;
                            for (t = os(t, 3); ++r < s;) {
                                var a = e[r];
                                t(a, r, e) && (n.push(a), i.push(r))
                            }
                            return Fr(e, i), n
                        }, Ln.rest = function(e, t) {
                            if ("function" != typeof e) throw new Re(r);
                            return Wr(e, t = t === n ? t : fo(t))
                        }, Ln.reverse = $s, Ln.sampleSize = function(e, t, r) {
                            return t = (r ? ms(e, t, r) : t === n) ? 1 : fo(t), (Va(e) ? Yn : Yr)(e, t)
                        }, Ln.set = function(e, t, n) {
                            return null == e ? e : $r(e, t, n)
                        }, Ln.setWith = function(e, t, r, i) {
                            return i = "function" == typeof i ? i : n, null == e ? e : $r(e, t, r, i)
                        }, Ln.shuffle = function(e) {
                            return (Va(e) ? $n : ti)(e)
                        }, Ln.slice = function(e, t, r) {
                            var i = null == e ? 0 : e.length;
                            return i ? (r && "number" != typeof r && ms(e, t, r) ? (t = 0, r = i) : (t = null == t ? 0 : fo(t), r = r === n ? i : fo(r)), ni(e, t, r)) : []
                        }, Ln.sortBy = ka, Ln.sortedUniq = function(e) {
                            return e && e.length ? ai(e) : []
                        }, Ln.sortedUniqBy = function(e, t) {
                            return e && e.length ? ai(e, os(t, 2)) : []
                        }, Ln.split = function(e, t, r) {
                            return r && "number" != typeof r && ms(e, t, r) && (t = r = n), (r = r === n ? d : r >>> 0) ? (e = yo(e)) && ("string" == typeof t || null != t && !ro(t)) && (!(t = ci(t)) && an(e)) ? wi(fn(e), 0, r) : e.split(t, r) : []
                        }, Ln.spread = function(e, t) {
                            if ("function" != typeof e) throw new Re(r);
                            return t = null == t ? 0 : yn(fo(t), 0), Wr((function(n) {
                                var r = n[t],
                                    i = wi(n, 0, t);
                                return r && Tt(i, r), Et(e, this, i)
                            }))
                        }, Ln.tail = function(e) {
                            var t = null == e ? 0 : e.length;
                            return t ? ni(e, 1, t) : []
                        }, Ln.take = function(e, t, r) {
                            return e && e.length ? ni(e, 0, (t = r || t === n ? 1 : fo(t)) < 0 ? 0 : t) : []
                        }, Ln.takeRight = function(e, t, r) {
                            var i = null == e ? 0 : e.length;
                            return i ? ni(e, (t = i - (t = r || t === n ? 1 : fo(t))) < 0 ? 0 : t, i) : []
                        }, Ln.takeRightWhile = function(e, t) {
                            return e && e.length ? fi(e, os(t, 3), !1, !0) : []
                        }, Ln.takeWhile = function(e, t) {
                            return e && e.length ? fi(e, os(t, 3)) : []
                        }, Ln.tap = function(e, t) {
                            return t(e), e
                        }, Ln.throttle = function(e, t, n) {
                            var i = !0,
                                s = !0;
                            if ("function" != typeof e) throw new Re(r);
                            return $a(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), Ra(e, t, {
                                leading: i,
                                maxWait: t,
                                trailing: s
                            })
                        }, Ln.thru = la, Ln.toArray = po, Ln.toPairs = jo, Ln.toPairsIn = Uo, Ln.toPath = function(e) {
                            return Va(e) ? At(e, Ds) : ao(e) ? [e] : Si(Ts(yo(e)))
                        }, Ln.toPlainObject = go, Ln.transform = function(e, t, n) {
                            var r = Va(e),
                                i = r || Fa(e) || oo(e);
                            if (t = os(t, 4), null == n) {
                                var s = e && e.constructor;
                                n = i ? r ? new s : [] : $a(e) && Wa(s) ? Mn(Fe(e)) : {}
                            }
                            return (i ? Pt : br)(e, (function(e, r, i) {
                                return t(n, e, r, i)
                            })), n
                        }, Ln.unary = function(e) {
                            return Ea(e, 1)
                        }, Ln.union = Xs, Ln.unionBy = ea, Ln.unionWith = ta, Ln.uniq = function(e) {
                            return e && e.length ? ui(e) : []
                        }, Ln.uniqBy = function(e, t) {
                            return e && e.length ? ui(e, os(t, 2)) : []
                        }, Ln.uniqWith = function(e, t) {
                            return t = "function" == typeof t ? t : n, e && e.length ? ui(e, n, t) : []
                        }, Ln.unset = function(e, t) {
                            return null == e || pi(e, t)
                        }, Ln.unzip = na, Ln.unzipWith = ra, Ln.update = function(e, t, n) {
                            return null == e ? e : li(e, t, yi(n))
                        }, Ln.updateWith = function(e, t, r, i) {
                            return i = "function" == typeof i ? i : n, null == e ? e : li(e, t, yi(r), i)
                        }, Ln.values = Lo, Ln.valuesIn = function(e) {
                            return null == e ? [] : $t(e, Co(e))
                        }, Ln.without = ia, Ln.words = Qo, Ln.wrap = function(e, t) {
                            return Da(yi(t), e)
                        }, Ln.xor = sa, Ln.xorBy = aa, Ln.xorWith = oa, Ln.zip = ca, Ln.zipObject = function(e, t) {
                            return vi(e || [], t || [], er)
                        }, Ln.zipObjectDeep = function(e, t) {
                            return vi(e || [], t || [], $r)
                        }, Ln.zipWith = ua, Ln.entries = jo, Ln.entriesIn = Uo, Ln.extend = bo, Ln.extendWith = wo, ac(Ln, Ln), Ln.add = gc, Ln.attempt = Yo, Ln.camelCase = Mo, Ln.capitalize = zo, Ln.ceil = yc, Ln.clamp = function(e, t, r) {
                            return r === n && (r = t, t = n), r !== n && (r = (r = vo(r)) === r ? r : 0), t !== n && (t = (t = vo(t)) === t ? t : 0), ar(vo(e), t, r)
                        }, Ln.clone = function(e) {
                            return or(e, 4)
                        }, Ln.cloneDeep = function(e) {
                            return or(e, 5)
                        }, Ln.cloneDeepWith = function(e, t) {
                            return or(e, 5, t = "function" == typeof t ? t : n)
                        }, Ln.cloneWith = function(e, t) {
                            return or(e, 4, t = "function" == typeof t ? t : n)
                        }, Ln.conformsTo = function(e, t) {
                            return null == t || cr(e, t, Oo(t))
                        }, Ln.deburr = Vo, Ln.defaultTo = function(e, t) {
                            return null == e || e !== e ? t : e
                        }, Ln.divide = mc, Ln.endsWith = function(e, t, r) {
                            e = yo(e), t = ci(t);
                            var i = e.length,
                                s = r = r === n ? i : ar(fo(r), 0, i);
                            return (r -= t.length) >= 0 && e.slice(r, s) == t
                        }, Ln.eq = Ua, Ln.escape = function(e) {
                            return (e = yo(e)) && W.test(e) ? e.replace(G, rn) : e
                        }, Ln.escapeRegExp = function(e) {
                            return (e = yo(e)) && re.test(e) ? e.replace(ne, "\\$&") : e
                        }, Ln.every = function(e, t, r) {
                            var i = Va(e) ? Rt : hr;
                            return r && ms(e, t, r) && (t = n), i(e, os(t, 3))
                        }, Ln.find = da, Ln.findIndex = zs, Ln.findKey = function(e, t) {
                            return Lt(e, os(t, 3), br)
                        }, Ln.findLast = va, Ln.findLastIndex = Vs, Ln.findLastKey = function(e, t) {
                            return Lt(e, os(t, 3), wr)
                        }, Ln.floor = bc, Ln.forEach = ga, Ln.forEachRight = ya, Ln.forIn = function(e, t) {
                            return null == e ? e : yr(e, os(t, 3), Co)
                        }, Ln.forInRight = function(e, t) {
                            return null == e ? e : mr(e, os(t, 3), Co)
                        }, Ln.forOwn = function(e, t) {
                            return e && br(e, os(t, 3))
                        }, Ln.forOwnRight = function(e, t) {
                            return e && wr(e, os(t, 3))
                        }, Ln.get = Eo, Ln.gt = La, Ln.gte = Ma, Ln.has = function(e, t) {
                            return null != e && ds(e, t, Ir)
                        }, Ln.hasIn = Io, Ln.head = Hs, Ln.identity = nc, Ln.includes = function(e, t, n, r) {
                            e = Ha(e) ? e : Lo(e), n = n && !r ? fo(n) : 0;
                            var i = e.length;
                            return n < 0 && (n = yn(i + n, 0)), so(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && zt(e, t, n) > -1
                        }, Ln.indexOf = function(e, t, n) {
                            var r = null == e ? 0 : e.length;
                            if (!r) return -1;
                            var i = null == n ? 0 : fo(n);
                            return i < 0 && (i = yn(r + i, 0)), zt(e, t, i)
                        }, Ln.inRange = function(e, t, r) {
                            return t = lo(t), r === n ? (r = t, t = 0) : r = lo(r),
                                function(e, t, n) {
                                    return e >= mn(t, n) && e < yn(t, n)
                                }(e = vo(e), t, r)
                        }, Ln.invoke = Ro, Ln.isArguments = za, Ln.isArray = Va, Ln.isArrayBuffer = Ka, Ln.isArrayLike = Ha, Ln.isArrayLikeObject = Ba, Ln.isBoolean = function(e) {
                            return !0 === e || !1 === e || Xa(e) && Zr(e) == m
                        }, Ln.isBuffer = Fa, Ln.isDate = Ga, Ln.isElement = function(e) {
                            return Xa(e) && 1 === e.nodeType && !no(e)
                        }, Ln.isEmpty = function(e) {
                            if (null == e) return !0;
                            if (Ha(e) && (Va(e) || "string" == typeof e || "function" == typeof e.splice || Fa(e) || oo(e) || za(e))) return !e.length;
                            var t = hs(e);
                            if (t == k || t == S) return !e.size;
                            if (_s(e)) return !Dr(e).length;
                            for (var n in e)
                                if (De.call(e, n)) return !1;
                            return !0
                        }, Ln.isEqual = function(e, t) {
                            return Cr(e, t)
                        }, Ln.isEqualWith = function(e, t, r) {
                            var i = (r = "function" == typeof r ? r : n) ? r(e, t) : n;
                            return i === n ? Cr(e, t, n, r) : !!i
                        }, Ln.isError = Ja, Ln.isFinite = function(e) {
                            return "number" == typeof e && Ut(e)
                        }, Ln.isFunction = Wa, Ln.isInteger = Qa, Ln.isLength = Ya, Ln.isMap = eo, Ln.isMatch = function(e, t) {
                            return e === t || Nr(e, t, us(t))
                        }, Ln.isMatchWith = function(e, t, r) {
                            return r = "function" == typeof r ? r : n, Nr(e, t, us(t), r)
                        }, Ln.isNaN = function(e) {
                            return to(e) && e != +e
                        }, Ln.isNative = function(e) {
                            if (xs(e)) throw new ke("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                            return Ar(e)
                        }, Ln.isNil = function(e) {
                            return null == e
                        }, Ln.isNull = function(e) {
                            return null === e
                        }, Ln.isNumber = to, Ln.isObject = $a, Ln.isObjectLike = Xa, Ln.isPlainObject = no, Ln.isRegExp = ro, Ln.isSafeInteger = function(e) {
                            return Qa(e) && e >= -f && e <= f
                        }, Ln.isSet = io, Ln.isString = so, Ln.isSymbol = ao, Ln.isTypedArray = oo, Ln.isUndefined = function(e) {
                            return e === n
                        }, Ln.isWeakMap = function(e) {
                            return Xa(e) && hs(e) == C
                        }, Ln.isWeakSet = function(e) {
                            return Xa(e) && "[object WeakSet]" == Zr(e)
                        }, Ln.join = function(e, t) {
                            return null == e ? "" : Ft.call(e, t)
                        }, Ln.kebabCase = Ko, Ln.last = Js, Ln.lastIndexOf = function(e, t, r) {
                            var i = null == e ? 0 : e.length;
                            if (!i) return -1;
                            var s = i;
                            return r !== n && (s = (s = fo(r)) < 0 ? yn(i + s, 0) : mn(s, i - 1)), t === t ? function(e, t, n) {
                                for (var r = n + 1; r--;)
                                    if (e[r] === t) return r;
                                return r
                            }(e, t, s) : Mt(e, Kt, s, !0)
                        }, Ln.lowerCase = Ho, Ln.lowerFirst = Bo, Ln.lt = co, Ln.lte = uo, Ln.max = function(e) {
                            return e && e.length ? dr(e, nc, Er) : n
                        }, Ln.maxBy = function(e, t) {
                            return e && e.length ? dr(e, os(t, 2), Er) : n
                        }, Ln.mean = function(e) {
                            return Ht(e, nc)
                        }, Ln.meanBy = function(e, t) {
                            return Ht(e, os(t, 2))
                        }, Ln.min = function(e) {
                            return e && e.length ? dr(e, nc, jr) : n
                        }, Ln.minBy = function(e, t) {
                            return e && e.length ? dr(e, os(t, 2), jr) : n
                        }, Ln.stubArray = dc, Ln.stubFalse = vc, Ln.stubObject = function() {
                            return {}
                        }, Ln.stubString = function() {
                            return ""
                        }, Ln.stubTrue = function() {
                            return !0
                        }, Ln.multiply = wc, Ln.nth = function(e, t) {
                            return e && e.length ? Vr(e, fo(t)) : n
                        }, Ln.noConflict = function() {
                            return ht._ === this && (ht._ = Me), this
                        }, Ln.noop = oc, Ln.now = Za, Ln.pad = function(e, t, n) {
                            e = yo(e);
                            var r = (t = fo(t)) ? ln(e) : 0;
                            if (!t || r >= t) return e;
                            var i = (t - r) / 2;
                            return Ki(vt(i), n) + e + Ki(dt(i), n)
                        }, Ln.padEnd = function(e, t, n) {
                            e = yo(e);
                            var r = (t = fo(t)) ? ln(e) : 0;
                            return t && r < t ? e + Ki(t - r, n) : e
                        }, Ln.padStart = function(e, t, n) {
                            e = yo(e);
                            var r = (t = fo(t)) ? ln(e) : 0;
                            return t && r < t ? Ki(t - r, n) + e : e
                        }, Ln.parseInt = function(e, t, n) {
                            return n || null == t ? t = 0 : t && (t = +t), wn(yo(e).replace(ie, ""), t || 0)
                        }, Ln.random = function(e, t, r) {
                            if (r && "boolean" != typeof r && ms(e, t, r) && (t = r = n), r === n && ("boolean" == typeof t ? (r = t, t = n) : "boolean" == typeof e && (r = e, e = n)), e === n && t === n ? (e = 0, t = 1) : (e = lo(e), t === n ? (t = e, e = 0) : t = lo(t)), e > t) {
                                var i = e;
                                e = t, t = i
                            }
                            if (r || e % 1 || t % 1) {
                                var s = xn();
                                return mn(e + s * (t - e + ut("1e-" + ((s + "").length - 1))), t)
                            }
                            return Gr(e, t)
                        }, Ln.reduce = function(e, t, n) {
                            var r = Va(e) ? Dt : Gt,
                                i = arguments.length < 3;
                            return r(e, os(t, 4), n, i, lr)
                        }, Ln.reduceRight = function(e, t, n) {
                            var r = Va(e) ? qt : Gt,
                                i = arguments.length < 3;
                            return r(e, os(t, 4), n, i, fr)
                        }, Ln.repeat = function(e, t, r) {
                            return t = (r ? ms(e, t, r) : t === n) ? 1 : fo(t), Jr(yo(e), t)
                        }, Ln.replace = function() {
                            var e = arguments,
                                t = yo(e[0]);
                            return e.length < 3 ? t : t.replace(e[1], e[2])
                        }, Ln.result = function(e, t, r) {
                            var i = -1,
                                s = (t = mi(t, e)).length;
                            for (s || (s = 1, e = n); ++i < s;) {
                                var a = null == e ? n : e[Ds(t[i])];
                                a === n && (i = s, a = r), e = Wa(a) ? a.call(e) : a
                            }
                            return e
                        }, Ln.round = xc, Ln.runInContext = e, Ln.sample = function(e) {
                            return (Va(e) ? Qn : Qr)(e)
                        }, Ln.size = function(e) {
                            if (null == e) return 0;
                            if (Ha(e)) return so(e) ? ln(e) : e.length;
                            var t = hs(e);
                            return t == k || t == S ? e.size : Dr(e).length
                        }, Ln.snakeCase = Fo, Ln.some = function(e, t, r) {
                            var i = Va(e) ? jt : ri;
                            return r && ms(e, t, r) && (t = n), i(e, os(t, 3))
                        }, Ln.sortedIndex = function(e, t) {
                            return ii(e, t)
                        }, Ln.sortedIndexBy = function(e, t, n) {
                            return si(e, t, os(n, 2))
                        }, Ln.sortedIndexOf = function(e, t) {
                            var n = null == e ? 0 : e.length;
                            if (n) {
                                var r = ii(e, t);
                                if (r < n && Ua(e[r], t)) return r
                            }
                            return -1
                        }, Ln.sortedLastIndex = function(e, t) {
                            return ii(e, t, !0)
                        }, Ln.sortedLastIndexBy = function(e, t, n) {
                            return si(e, t, os(n, 2), !0)
                        }, Ln.sortedLastIndexOf = function(e, t) {
                            if (null == e ? 0 : e.length) {
                                var n = ii(e, t, !0) - 1;
                                if (Ua(e[n], t)) return n
                            }
                            return -1
                        }, Ln.startCase = Go, Ln.startsWith = function(e, t, n) {
                            return e = yo(e), n = null == n ? 0 : ar(fo(n), 0, e.length), t = ci(t), e.slice(n, n + t.length) == t
                        }, Ln.subtract = _c, Ln.sum = function(e) {
                            return e && e.length ? Jt(e, nc) : 0
                        }, Ln.sumBy = function(e, t) {
                            return e && e.length ? Jt(e, os(t, 2)) : 0
                        }, Ln.template = function(e, t, r) {
                            var i = Ln.templateSettings;
                            r && ms(e, t, r) && (t = n), e = yo(e), t = wo({}, t, i, Yi);
                            var s, a, o = wo({}, t.imports, i.imports, Yi),
                                c = Oo(o),
                                u = $t(o, c),
                                p = 0,
                                l = t.interpolate || we,
                                f = "__p += '",
                                h = Pe((t.escape || we).source + "|" + l.source + "|" + (l === $ ? fe : we).source + "|" + (t.evaluate || we).source + "|$", "g"),
                                d = "//# sourceURL=" + (De.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++st + "]") + "\n";
                            e.replace(h, (function(t, n, r, i, o, c) {
                                return r || (r = i), f += e.slice(p, c).replace(xe, sn), n && (s = !0, f += "' +\n__e(" + n + ") +\n'"), o && (a = !0, f += "';\n" + o + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), p = c + t.length, t
                            })), f += "';\n";
                            var v = De.call(t, "variable") && t.variable;
                            if (v) {
                                if (pe.test(v)) throw new ke("Invalid `variable` option passed into `_.template`")
                            } else f = "with (obj) {\n" + f + "\n}\n";
                            f = (a ? f.replace(K, "") : f).replace(H, "$1").replace(B, "$1;"), f = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                            var g = Yo((function() {
                                return Ze(c, d + "return " + f).apply(n, u)
                            }));
                            if (g.source = f, Ja(g)) throw g;
                            return g
                        }, Ln.times = function(e, t) {
                            if ((e = fo(e)) < 1 || e > f) return [];
                            var n = d,
                                r = mn(e, d);
                            t = os(t), e -= d;
                            for (var i = Wt(r, t); ++n < e;) t(n);
                            return i
                        }, Ln.toFinite = lo, Ln.toInteger = fo, Ln.toLength = ho, Ln.toLower = function(e) {
                            return yo(e).toLowerCase()
                        }, Ln.toNumber = vo, Ln.toSafeInteger = function(e) {
                            return e ? ar(fo(e), -f, f) : 0 === e ? e : 0
                        }, Ln.toString = yo, Ln.toUpper = function(e) {
                            return yo(e).toUpperCase()
                        }, Ln.trim = function(e, t, r) {
                            if ((e = yo(e)) && (r || t === n)) return Qt(e);
                            if (!e || !(t = ci(t))) return e;
                            var i = fn(e),
                                s = fn(t);
                            return wi(i, en(i, s), tn(i, s) + 1).join("")
                        }, Ln.trimEnd = function(e, t, r) {
                            if ((e = yo(e)) && (r || t === n)) return e.slice(0, hn(e) + 1);
                            if (!e || !(t = ci(t))) return e;
                            var i = fn(e);
                            return wi(i, 0, tn(i, fn(t)) + 1).join("")
                        }, Ln.trimStart = function(e, t, r) {
                            if ((e = yo(e)) && (r || t === n)) return e.replace(ie, "");
                            if (!e || !(t = ci(t))) return e;
                            var i = fn(e);
                            return wi(i, en(i, fn(t))).join("")
                        }, Ln.truncate = function(e, t) {
                            var r = 30,
                                i = "...";
                            if ($a(t)) {
                                var s = "separator" in t ? t.separator : s;
                                r = "length" in t ? fo(t.length) : r, i = "omission" in t ? ci(t.omission) : i
                            }
                            var a = (e = yo(e)).length;
                            if (an(e)) {
                                var o = fn(e);
                                a = o.length
                            }
                            if (r >= a) return e;
                            var c = r - ln(i);
                            if (c < 1) return i;
                            var u = o ? wi(o, 0, c).join("") : e.slice(0, c);
                            if (s === n) return u + i;
                            if (o && (c += u.length - c), ro(s)) {
                                if (e.slice(c).search(s)) {
                                    var p, l = u;
                                    for (s.global || (s = Pe(s.source, yo(he.exec(s)) + "g")), s.lastIndex = 0; p = s.exec(l);) var f = p.index;
                                    u = u.slice(0, f === n ? c : f)
                                }
                            } else if (e.indexOf(ci(s), c) != c) {
                                var h = u.lastIndexOf(s);
                                h > -1 && (u = u.slice(0, h))
                            }
                            return u + i
                        }, Ln.unescape = function(e) {
                            return (e = yo(e)) && J.test(e) ? e.replace(F, dn) : e
                        }, Ln.uniqueId = function(e) {
                            var t = ++qe;
                            return yo(e) + t
                        }, Ln.upperCase = Jo, Ln.upperFirst = Wo, Ln.each = ga, Ln.eachRight = ya, Ln.first = Hs, ac(Ln, function() {
                            var e = {};
                            return br(Ln, (function(t, n) {
                                De.call(Ln.prototype, n) || (e[n] = t)
                            })), e
                        }(), {
                            chain: !1
                        }), Ln.VERSION = "4.17.21", Pt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(e) {
                            Ln[e].placeholder = Ln
                        })), Pt(["drop", "take"], (function(e, t) {
                            Kn.prototype[e] = function(r) {
                                r = r === n ? 1 : yn(fo(r), 0);
                                var i = this.__filtered__ && !t ? new Kn(this) : this.clone();
                                return i.__filtered__ ? i.__takeCount__ = mn(r, i.__takeCount__) : i.__views__.push({
                                    size: mn(r, d),
                                    type: e + (i.__dir__ < 0 ? "Right" : "")
                                }), i
                            }, Kn.prototype[e + "Right"] = function(t) {
                                return this.reverse()[e](t).reverse()
                            }
                        })), Pt(["filter", "map", "takeWhile"], (function(e, t) {
                            var n = t + 1,
                                r = 1 == n || 3 == n;
                            Kn.prototype[e] = function(e) {
                                var t = this.clone();
                                return t.__iteratees__.push({
                                    iteratee: os(e, 3),
                                    type: n
                                }), t.__filtered__ = t.__filtered__ || r, t
                            }
                        })), Pt(["head", "last"], (function(e, t) {
                            var n = "take" + (t ? "Right" : "");
                            Kn.prototype[e] = function() {
                                return this[n](1).value()[0]
                            }
                        })), Pt(["initial", "tail"], (function(e, t) {
                            var n = "drop" + (t ? "" : "Right");
                            Kn.prototype[e] = function() {
                                return this.__filtered__ ? new Kn(this) : this[n](1)
                            }
                        })), Kn.prototype.compact = function() {
                            return this.filter(nc)
                        }, Kn.prototype.find = function(e) {
                            return this.filter(e).head()
                        }, Kn.prototype.findLast = function(e) {
                            return this.reverse().find(e)
                        }, Kn.prototype.invokeMap = Wr((function(e, t) {
                            return "function" == typeof e ? new Kn(this) : this.map((function(n) {
                                return Rr(n, e, t)
                            }))
                        })), Kn.prototype.reject = function(e) {
                            return this.filter(Aa(os(e)))
                        }, Kn.prototype.slice = function(e, t) {
                            e = fo(e);
                            var r = this;
                            return r.__filtered__ && (e > 0 || t < 0) ? new Kn(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== n && (r = (t = fo(t)) < 0 ? r.dropRight(-t) : r.take(t - e)), r)
                        }, Kn.prototype.takeRightWhile = function(e) {
                            return this.reverse().takeWhile(e).reverse()
                        }, Kn.prototype.toArray = function() {
                            return this.take(d)
                        }, br(Kn.prototype, (function(e, t) {
                            var r = /^(?:filter|find|map|reject)|While$/.test(t),
                                i = /^(?:head|last)$/.test(t),
                                s = Ln[i ? "take" + ("last" == t ? "Right" : "") : t],
                                a = i || /^find/.test(t);
                            s && (Ln.prototype[t] = function() {
                                var t = this.__wrapped__,
                                    o = i ? [1] : arguments,
                                    c = t instanceof Kn,
                                    u = o[0],
                                    p = c || Va(t),
                                    l = function(e) {
                                        var t = s.apply(Ln, Tt([e], o));
                                        return i && f ? t[0] : t
                                    };
                                p && r && "function" == typeof u && 1 != u.length && (c = p = !1);
                                var f = this.__chain__,
                                    h = !!this.__actions__.length,
                                    d = a && !f,
                                    v = c && !h;
                                if (!a && p) {
                                    t = v ? t : new Kn(this);
                                    var g = e.apply(t, o);
                                    return g.__actions__.push({
                                        func: la,
                                        args: [l],
                                        thisArg: n
                                    }), new Vn(g, f)
                                }
                                return d && v ? e.apply(this, o) : (g = this.thru(l), d ? i ? g.value()[0] : g.value() : g)
                            })
                        })), Pt(["pop", "push", "shift", "sort", "splice", "unshift"], (function(e) {
                            var t = Oe[e],
                                n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                r = /^(?:pop|shift)$/.test(e);
                            Ln.prototype[e] = function() {
                                var e = arguments;
                                if (r && !this.__chain__) {
                                    var i = this.value();
                                    return t.apply(Va(i) ? i : [], e)
                                }
                                return this[n]((function(n) {
                                    return t.apply(Va(n) ? n : [], e)
                                }))
                            }
                        })), br(Kn.prototype, (function(e, t) {
                            var n = Ln[t];
                            if (n) {
                                var r = n.name + "";
                                De.call(On, r) || (On[r] = []), On[r].push({
                                    name: t,
                                    func: n
                                })
                            }
                        })), On[Li(n, 2).name] = [{
                            name: "wrapper",
                            func: n
                        }], Kn.prototype.clone = function() {
                            var e = new Kn(this.__wrapped__);
                            return e.__actions__ = Si(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Si(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Si(this.__views__), e
                        }, Kn.prototype.reverse = function() {
                            if (this.__filtered__) {
                                var e = new Kn(this);
                                e.__dir__ = -1, e.__filtered__ = !0
                            } else(e = this.clone()).__dir__ *= -1;
                            return e
                        }, Kn.prototype.value = function() {
                            var e = this.__wrapped__.value(),
                                t = this.__dir__,
                                n = Va(e),
                                r = t < 0,
                                i = n ? e.length : 0,
                                s = function(e, t, n) {
                                    for (var r = -1, i = n.length; ++r < i;) {
                                        var s = n[r],
                                            a = s.size;
                                        switch (s.type) {
                                            case "drop":
                                                e += a;
                                                break;
                                            case "dropRight":
                                                t -= a;
                                                break;
                                            case "take":
                                                t = mn(t, e + a);
                                                break;
                                            case "takeRight":
                                                e = yn(e, t - a)
                                        }
                                    }
                                    return {
                                        start: e,
                                        end: t
                                    }
                                }(0, i, this.__views__),
                                a = s.start,
                                o = s.end,
                                c = o - a,
                                u = r ? o : a - 1,
                                p = this.__iteratees__,
                                l = p.length,
                                f = 0,
                                h = mn(c, this.__takeCount__);
                            if (!n || !r && i == c && h == c) return hi(e, this.__actions__);
                            var d = [];
                            e: for (; c-- && f < h;) {
                                for (var v = -1, g = e[u += t]; ++v < l;) {
                                    var y = p[v],
                                        m = y.iteratee,
                                        b = y.type,
                                        w = m(g);
                                    if (2 == b) g = w;
                                    else if (!w) {
                                        if (1 == b) continue e;
                                        break e
                                    }
                                }
                                d[f++] = g
                            }
                            return d
                        }, Ln.prototype.at = fa, Ln.prototype.chain = function() {
                            return pa(this)
                        }, Ln.prototype.commit = function() {
                            return new Vn(this.value(), this.__chain__)
                        }, Ln.prototype.next = function() {
                            this.__values__ === n && (this.__values__ = po(this.value()));
                            var e = this.__index__ >= this.__values__.length;
                            return {
                                done: e,
                                value: e ? n : this.__values__[this.__index__++]
                            }
                        }, Ln.prototype.plant = function(e) {
                            for (var t, r = this; r instanceof zn;) {
                                var i = js(r);
                                i.__index__ = 0, i.__values__ = n, t ? s.__wrapped__ = i : t = i;
                                var s = i;
                                r = r.__wrapped__
                            }
                            return s.__wrapped__ = e, t
                        }, Ln.prototype.reverse = function() {
                            var e = this.__wrapped__;
                            if (e instanceof Kn) {
                                var t = e;
                                return this.__actions__.length && (t = new Kn(this)), (t = t.reverse()).__actions__.push({
                                    func: la,
                                    args: [$s],
                                    thisArg: n
                                }), new Vn(t, this.__chain__)
                            }
                            return this.thru($s)
                        }, Ln.prototype.toJSON = Ln.prototype.valueOf = Ln.prototype.value = function() {
                            return hi(this.__wrapped__, this.__actions__)
                        }, Ln.prototype.first = Ln.prototype.head, Ye && (Ln.prototype[Ye] = function() {
                            return this
                        }), Ln
                    }();
                    vt ? ((vt.exports = vn)._ = vn, dt._ = vn) : ht._ = vn
                }).call(Os)
            }(Cs, Cs.exports);
            var Ns = Object.defineProperty,
                As = Object.defineProperties,
                Ts = Object.getOwnPropertyDescriptors,
                Ds = Object.getOwnPropertySymbols,
                qs = Object.prototype.hasOwnProperty,
                js = Object.prototype.propertyIsEnumerable,
                Us = function(e, t, n) {
                    return t in e ? Ns(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Ls = function(e, t) {
                    for (var n in t || (t = {})) qs.call(t, n) && Us(e, n, t[n]);
                    if (Ds) {
                        var r, i = (0, p.Z)(Ds(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                js.call(t, n) && Us(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                Ms = function(e, t) {
                    return As(e, Ts(t))
                };

            function zs(e, t, n) {
                var r, i = P(e);
                return (null == (r = t.rpcMap) ? void 0 : r[i.reference]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=").concat(i.namespace, ":").concat(i.reference, "&projectId=").concat(n)
            }

            function Vs(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function Ks(e) {
                return e.map((function(e) {
                    return "".concat(e.split(":")[0], ":").concat(e.split(":")[1])
                }))
            }

            function Hs(e) {
                var t, n, i, s, a = {};
                if (!He(e)) return a;
                for (var o = 0, c = Object.entries(e); o < c.length; o++) {
                    var u = (0, r.Z)(c[o], 2),
                        p = u[0],
                        l = u[1],
                        f = je(p) ? [p] : l.chains,
                        h = l.methods || [],
                        d = l.events || [],
                        v = l.rpcMap || {},
                        g = Ue(p);
                    a[g] = Ms(Ls(Ls({}, a[g]), l), {
                        chains: xe(f, null == (t = a[g]) ? void 0 : t.chains),
                        methods: xe(h, null == (n = a[g]) ? void 0 : n.methods),
                        events: xe(d, null == (i = a[g]) ? void 0 : i.events),
                        rpcMap: Ls(Ls({}, v), null == (s = a[g]) ? void 0 : s.rpcMap)
                    })
                }
                return a
            }

            function Bs(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function Fs(e) {
                for (var t = {}, n = 0, i = Object.entries(e); n < i.length; n++) {
                    var s = (0, r.Z)(i[n], 2),
                        a = s[0],
                        o = s[1],
                        c = o.methods || [],
                        u = o.events || [],
                        p = o.accounts || [],
                        l = je(a) ? [a] : o.chains ? o.chains : Ks(o.accounts);
                    t[a] = {
                        chains: l,
                        methods: c,
                        events: u,
                        accounts: p
                    }
                }
                return t
            }

            function Gs(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
            }
            var Js = {},
                Ws = function(e) {
                    return Js[e]
                },
                Qs = function(e, t) {
                    Js[e] = t
                },
                Ys = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "polkadot", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                    }
                    return (0, o.Z)(e, [{
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId;
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Rs, "".concat(this.name, ":").concat(e))
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t && t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })) || []
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r, i = Vs(n);
                                t[i] = e.createHttpProvider(i, null == (r = e.namespace.rpcMap) ? void 0 : r[n])
                            })), t
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = "".concat(this.name, ":").concat(this.chainId),
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || zs(e, this.namespace, this.client.core.projectId);
                            if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                            return new Vt.r(new Is.Z(n, Ws("disableProviderPing")))
                        }
                    }]), e
                }(),
                $s = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "eip155", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                    }
                    return (0, o.Z)(e, [{
                        key: "request",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            e.t0 = t.request.method, e.next = "eth_requestAccounts" === e.t0 ? 3 : "eth_accounts" === e.t0 ? 4 : "wallet_switchEthereumChain" === e.t0 ? 5 : "eth_chainId" === e.t0 ? 8 : 9;
                                            break;
                                        case 3:
                                        case 4:
                                            return e.abrupt("return", this.getAccounts());
                                        case 5:
                                            return e.next = 7, this.handleSwitchChain(t);
                                        case 7:
                                            return e.abrupt("return", e.sent);
                                        case 8:
                                            return e.abrupt("return", parseInt(this.getDefaultChain()));
                                        case 9:
                                            if (!this.namespace.methods.includes(t.request.method)) {
                                                e.next = 15;
                                                break
                                            }
                                            return e.next = 12, this.client.request(t);
                                        case 12:
                                            e.t1 = e.sent, e.next = 16;
                                            break;
                                        case 15:
                                            e.t1 = this.getHttpProvider().request(t.request);
                                        case 16:
                                            return e.abrupt("return", e.t1);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(Rs, "".concat(this.name, ":").concat(e))
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId.toString();
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || zs("".concat(this.name, ":").concat(e), this.namespace, this.client.core.projectId);
                            if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                            return new Vt.r(new Is.k(n, Ws("disableProviderPing")))
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r, i = parseInt(Vs(n));
                                t[i] = e.createHttpProvider(i, null == (r = e.namespace.rpcMap) ? void 0 : r[n])
                            })), t
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t ? (0, c.Z)(new Set(t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })))) : []
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = this.chainId,
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "handleSwitchChain",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = (s = t.request.params ? null == (n = t.request.params[0]) ? void 0 : n.chainId : "0x0").startsWith("0x") ? s : "0x".concat(s), a = parseInt(s, 16), !this.isChainApproved(a)) {
                                                e.next = 7;
                                                break
                                            }
                                            this.setDefaultChain("".concat(a)), e.next = 14;
                                            break;
                                        case 7:
                                            if (!this.namespace.methods.includes("wallet_switchEthereumChain")) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 10, this.client.request({
                                                topic: t.topic,
                                                request: {
                                                    method: t.request.method,
                                                    params: [{
                                                        chainId: s
                                                    }]
                                                },
                                                chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                                            });
                                        case 10:
                                            this.setDefaultChain("".concat(a)), e.next = 14;
                                            break;
                                        case 13:
                                            throw new Error("Failed to switch to chain 'eip155:".concat(a, "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."));
                                        case 14:
                                            return e.abrupt("return", null);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isChainApproved",
                        value: function(e) {
                            return this.namespace.chains.includes("".concat(this.name, ":").concat(e))
                        }
                    }]), e
                }(),
                Xs = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "solana", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                    }
                    return (0, o.Z)(e, [{
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Rs, "".concat(this.name, ":").concat(e))
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId;
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t ? (0, c.Z)(new Set(t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })))) : []
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r, i = Vs(n);
                                t[i] = e.createHttpProvider(i, null == (r = e.namespace.rpcMap) ? void 0 : r[n])
                            })), t
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = "".concat(this.name, ":").concat(this.chainId),
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || zs(e, this.namespace, this.client.core.projectId);
                            if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                            return new Vt.r(new Is.Z(n, Ws("disableProviderPing")))
                        }
                    }]), e
                }(),
                ea = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "cosmos", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                    }
                    return (0, o.Z)(e, [{
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId;
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Rs, "".concat(this.name, ":").concat(this.chainId))
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t ? (0, c.Z)(new Set(t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })))) : []
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r, i = Vs(n);
                                t[i] = e.createHttpProvider(i, null == (r = e.namespace.rpcMap) ? void 0 : r[n])
                            })), t
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = "".concat(this.name, ":").concat(this.chainId),
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || zs(e, this.namespace, this.client.core.projectId);
                            if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                            return new Vt.r(new Is.Z(n, Ws("disableProviderPing")))
                        }
                    }]), e
                }(),
                ta = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "cip34", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                    }
                    return (0, o.Z)(e, [{
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId;
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Rs, "".concat(this.name, ":").concat(this.chainId))
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t ? (0, c.Z)(new Set(t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })))) : []
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r = e.getCardanoRPCUrl(n),
                                    i = Vs(n);
                                t[i] = e.createHttpProvider(i, r)
                            })), t
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = "".concat(this.name, ":").concat(this.chainId),
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "getCardanoRPCUrl",
                        value: function(e) {
                            var t = this.namespace.rpcMap;
                            if (t) return t[e]
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || this.getCardanoRPCUrl(e);
                            if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                            return new Vt.r(new Is.Z(n, Ws("disableProviderPing")))
                        }
                    }]), e
                }(),
                na = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "elrond", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                    }
                    return (0, o.Z)(e, [{
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Rs, "".concat(this.name, ":").concat(e))
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId;
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t ? (0, c.Z)(new Set(t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })))) : []
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r, i = Vs(n);
                                t[i] = e.createHttpProvider(i, null == (r = e.namespace.rpcMap) ? void 0 : r[n])
                            })), t
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = "".concat(this.name, ":").concat(this.chainId),
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || zs(e, this.namespace, this.client.core.projectId);
                            if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                            return new Vt.r(new Is.Z(n, Ws("disableProviderPing")))
                        }
                    }]), e
                }(),
                ra = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "multiversx", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                    }
                    return (0, o.Z)(e, [{
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(Rs, "".concat(this.name, ":").concat(e))
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId;
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t ? (0, c.Z)(new Set(t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })))) : []
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r, i = Vs(n);
                                t[i] = e.createHttpProvider(i, null == (r = e.namespace.rpcMap) ? void 0 : r[n])
                            })), t
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = "".concat(this.name, ":").concat(this.chainId),
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || zs(e, this.namespace, this.client.core.projectId);
                            if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                            return new Vt.r(new Is.Z(n, Ws("disableProviderPing")))
                        }
                    }]), e
                }(),
                ia = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.name = "near", this.namespace = t.namespace, this.events = Ws("events"), this.client = Ws("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                    }
                    return (0, o.Z)(e, [{
                        key: "updateNamespace",
                        value: function(e) {
                            this.namespace = Object.assign(this.namespace, e)
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            return this.getAccounts()
                        }
                    }, {
                        key: "getDefaultChain",
                        value: function() {
                            if (this.chainId) return this.chainId;
                            if (this.namespace.defaultChain) return this.namespace.defaultChain;
                            var e = this.namespace.chains[0];
                            if (!e) throw new Error("ChainId not found");
                            return e.split(":")[1]
                        }
                    }, {
                        key: "request",
                        value: function(e) {
                            return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                        }
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            if (this.chainId = e, !this.httpProviders[e]) {
                                var n = t || zs("".concat(this.name, ":").concat(e), this.namespace);
                                if (!n) throw new Error("No RPC url provided for chainId: ".concat(e));
                                this.setHttpProvider(e, n)
                            }
                            this.events.emit(Rs, "".concat(this.name, ":").concat(this.chainId))
                        }
                    }, {
                        key: "getAccounts",
                        value: function() {
                            var e = this,
                                t = this.namespace.accounts;
                            return t && t.filter((function(t) {
                                return t.split(":")[1] === e.chainId.toString()
                            })).map((function(e) {
                                return e.split(":")[2]
                            })) || []
                        }
                    }, {
                        key: "createHttpProviders",
                        value: function() {
                            var e = this,
                                t = {};
                            return this.namespace.chains.forEach((function(n) {
                                var r;
                                t[n] = e.createHttpProvider(n, null == (r = e.namespace.rpcMap) ? void 0 : r[n])
                            })), t
                        }
                    }, {
                        key: "getHttpProvider",
                        value: function() {
                            var e = "".concat(this.name, ":").concat(this.chainId),
                                t = this.httpProviders[e];
                            if (typeof t > "u") throw new Error("JSON-RPC provider for ".concat(e, " not found"));
                            return t
                        }
                    }, {
                        key: "setHttpProvider",
                        value: function(e, t) {
                            var n = this.createHttpProvider(e, t);
                            n && (this.httpProviders[e] = n)
                        }
                    }, {
                        key: "createHttpProvider",
                        value: function(e, t) {
                            var n = t || zs(e, this.namespace);
                            return typeof n > "u" ? void 0 : new Vt.r(new Is.Z(n, Ws("disableProviderPing")))
                        }
                    }]), e
                }(),
                sa = Object.defineProperty,
                aa = Object.defineProperties,
                oa = Object.getOwnPropertyDescriptors,
                ca = Object.getOwnPropertySymbols,
                ua = Object.prototype.hasOwnProperty,
                pa = Object.prototype.propertyIsEnumerable,
                la = function(e, t, n) {
                    return t in e ? sa(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                fa = function(e, t) {
                    for (var n in t || (t = {})) ua.call(t, n) && la(e, n, t[n]);
                    if (ca) {
                        var r, i = (0, p.Z)(ca(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                pa.call(t, n) && la(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                ha = function(e, t) {
                    return aa(e, oa(t))
                },
                da = function() {
                    function e(t) {
                        (0, a.Z)(this, e), this.events = new(f()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof(null === t || void 0 === t ? void 0 : t.logger) < "u" && "string" != typeof(null === t || void 0 === t ? void 0 : t.logger) ? t.logger : (0, Pt.pino)((0, Pt.getDefaultLoggerOptions)({
                            level: (null === t || void 0 === t ? void 0 : t.logger) || Ps
                        })), this.disableProviderPing = (null === t || void 0 === t ? void 0 : t.disableProviderPing) || !1
                    }
                    return (0, o.Z)(e, [{
                        key: "request",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t, n) {
                                var s, a, o, c;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (s = this.validateChain(n), a = (0, r.Z)(s, 2), o = a[0], c = a[1], this.session) {
                                                e.next = 3;
                                                break
                                            }
                                            throw new Error("Please call connect() before request()");
                                        case 3:
                                            return e.next = 5, this.getProvider(o).request({
                                                request: fa({}, t),
                                                chainId: "".concat(o, ":").concat(c),
                                                topic: this.session.topic
                                            });
                                        case 5:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "sendAsync",
                        value: function(e, t, n) {
                            this.request(e, n).then((function(e) {
                                return t(null, e)
                            })).catch((function(e) {
                                return t(e, void 0)
                            }))
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.client) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Sign Client not initialized");
                                        case 2:
                                            if (e.t0 = this.session, e.t0) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 6, this.connect({
                                                namespaces: this.namespaces,
                                                optionalNamespaces: this.optionalNamespaces,
                                                sessionProperties: this.sessionProperties
                                            });
                                        case 6:
                                            return e.next = 8, this.requestAccounts();
                                        case 8:
                                            return e.abrupt("return", e.sent);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "disconnect",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.session) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Please call connect() before enable()");
                                        case 2:
                                            return e.next = 4, this.client.disconnect({
                                                topic: null == (t = this.session) ? void 0 : t.topic,
                                                reason: Ve("USER_DISCONNECTED")
                                            });
                                        case 4:
                                            return e.next = 6, this.cleanup();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "connect",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.client) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Sign Client not initialized");
                                        case 2:
                                            return this.setNamespaces(t), e.next = 5, this.cleanupPendingPairings();
                                        case 5:
                                            if (t.skipPairing) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.next = 8, this.pair(t.pairingTopic);
                                        case 8:
                                            return e.abrupt("return", e.sent);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this.events.on(e, t)
                        }
                    }, {
                        key: "once",
                        value: function(e, t) {
                            this.events.once(e, t)
                        }
                    }, {
                        key: "removeListener",
                        value: function(e, t) {
                            this.events.removeListener(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this.events.off(e, t)
                        }
                    }, {
                        key: "isWalletConnect",
                        get: function() {
                            return !0
                        }
                    }, {
                        key: "pair",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, s, a, o = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            this.shouldAbortPairingAttempt = !1, n = 0;
                                        case 2:
                                            if (!this.shouldAbortPairingAttempt) {
                                                e.next = 4;
                                                break
                                            }
                                            throw new Error("Pairing aborted");
                                        case 4:
                                            if (!(n >= this.maxPairingAttempts)) {
                                                e.next = 6;
                                                break
                                            }
                                            throw new Error("Max auto pairing attempts reached");
                                        case 6:
                                            return e.next = 8, this.client.connect({
                                                pairingTopic: t,
                                                requiredNamespaces: this.namespaces,
                                                optionalNamespaces: this.optionalNamespaces,
                                                sessionProperties: this.sessionProperties
                                            });
                                        case 8:
                                            return r = e.sent, s = r.uri, a = r.approval, s && (this.uri = s, this.events.emit("display_uri", s)), e.next = 14, a().then((function(e) {
                                                o.session = e, o.namespaces || (o.namespaces = Fs(e.namespaces), o.persist("namespaces", o.namespaces))
                                            })).catch((function(e) {
                                                if (e.message !== ss) throw e;
                                                n++
                                            }));
                                        case 14:
                                            if (!this.session) {
                                                e.next = 2;
                                                break
                                            }
                                        case 15:
                                            return e.abrupt("return", (this.onConnect(), this.session));
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "setDefaultChain",
                        value: function(e, t) {
                            try {
                                if (!this.session) return;
                                var n = this.validateChain(e),
                                    i = (0, r.Z)(n, 2),
                                    s = i[0],
                                    a = i[1];
                                this.getProvider(s).setDefaultChain(a, t)
                            } catch (s) {
                                if (!/Please call connect/.test(s.message)) throw s
                            }
                        }
                    }, {
                        key: "cleanupPendingPairings",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n, r, s, a, o = arguments;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = o.length > 0 && void 0 !== o[0] ? o[0] : {}, this.logger.info("Cleaning up inactive pairings..."), !Ke(n = this.client.pairing.getAll())) {
                                                e.next = 26;
                                                break
                                            }
                                            r = (0, p.Z)(n), e.prev = 5, r.s();
                                        case 7:
                                            if ((s = r.n()).done) {
                                                e.next = 17;
                                                break
                                            }
                                            if (a = s.value, !t.deletePairings) {
                                                e.next = 13;
                                                break
                                            }
                                            this.client.core.expirer.set(a.topic, 0), e.next = 15;
                                            break;
                                        case 13:
                                            return e.next = 15, this.client.core.relayer.subscriber.unsubscribe(a.topic);
                                        case 15:
                                            e.next = 7;
                                            break;
                                        case 17:
                                            e.next = 22;
                                            break;
                                        case 19:
                                            e.prev = 19, e.t0 = e.catch(5), r.e(e.t0);
                                        case 22:
                                            return e.prev = 22, r.f(), e.finish(22);
                                        case 25:
                                            this.logger.info("Inactive pairings cleared: ".concat(n.length));
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [5, 19, 22, 25]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "abortPairingAttempt",
                        value: function() {
                            this.shouldAbortPairingAttempt = !0
                        }
                    }, {
                        key: "checkStorage",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.getFromStore("namespaces");
                                        case 2:
                                            return this.namespaces = e.sent, e.next = 5, this.getFromStore("optionalNamespaces");
                                        case 5:
                                            if (e.t0 = e.sent, e.t0) {
                                                e.next = 8;
                                                break
                                            }
                                            e.t0 = {};
                                        case 8:
                                            if (this.optionalNamespaces = e.t0, !this.client.session.length) {
                                                e.next = 12;
                                                break
                                            }
                                            t = this.client.session.keys.length - 1, this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders();
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.logger.trace("Initialized"), e.next = 3, this.createClient();
                                        case 3:
                                            return e.next = 5, this.checkStorage();
                                        case 5:
                                            this.registerEventListeners();
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "createClient",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = this.providerOpts.client, e.t0) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 4, Es.init({
                                                logger: this.providerOpts.logger || Ps,
                                                relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                                                projectId: this.providerOpts.projectId,
                                                metadata: this.providerOpts.metadata,
                                                storageOptions: this.providerOpts.storageOptions,
                                                storage: this.providerOpts.storage,
                                                name: this.providerOpts.name
                                            });
                                        case 4:
                                            e.t0 = e.sent;
                                        case 5:
                                            this.client = e.t0, this.logger.trace("SignClient Initialized");
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "createProviders",
                        value: function() {
                            var e = this;
                            if (!this.client) throw new Error("Sign Client not initialized");
                            if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                            var t = (0, c.Z)(new Set(Object.keys(this.session.namespaces).map((function(e) {
                                return Ue(e)
                            }))));
                            Qs("client", this.client), Qs("events", this.events), Qs("disableProviderPing", this.disableProviderPing), t.forEach((function(t) {
                                if (e.session) {
                                    var n = function(e, t) {
                                            var n = Object.keys(t.namespaces).filter((function(t) {
                                                return t.includes(e)
                                            }));
                                            if (!n.length) return [];
                                            var r = [];
                                            return n.forEach((function(e) {
                                                var n = t.namespaces[e].accounts;
                                                r.push.apply(r, (0, c.Z)(n))
                                            })), r
                                        }(t, e.session),
                                        r = Ks(n),
                                        i = function() {
                                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                t = Hs(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                                                n = Hs(e);
                                            return Cs.exports.merge(t, n)
                                        }(e.namespaces, e.optionalNamespaces),
                                        s = ha(fa({}, i[t]), {
                                            accounts: n,
                                            chains: r
                                        });
                                    switch (t) {
                                        case "eip155":
                                            e.rpcProviders[t] = new $s({
                                                namespace: s
                                            });
                                            break;
                                        case "solana":
                                            e.rpcProviders[t] = new Xs({
                                                namespace: s
                                            });
                                            break;
                                        case "cosmos":
                                            e.rpcProviders[t] = new ea({
                                                namespace: s
                                            });
                                            break;
                                        case "polkadot":
                                            e.rpcProviders[t] = new Ys({
                                                namespace: s
                                            });
                                            break;
                                        case "cip34":
                                            e.rpcProviders[t] = new ta({
                                                namespace: s
                                            });
                                            break;
                                        case "elrond":
                                            e.rpcProviders[t] = new na({
                                                namespace: s
                                            });
                                            break;
                                        case "multiversx":
                                            e.rpcProviders[t] = new ra({
                                                namespace: s
                                            });
                                            break;
                                        case "near":
                                            e.rpcProviders[t] = new ia({
                                                namespace: s
                                            })
                                    }
                                }
                            }))
                        }
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var e = this;
                            if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                            this.client.on("session_ping", (function(t) {
                                e.events.emit("session_ping", t)
                            })), this.client.on("session_event", (function(t) {
                                var n = t.params,
                                    r = n.event;
                                if ("accountsChanged" === r.name) {
                                    var i = r.data;
                                    i && Ke(i) && e.events.emit("accountsChanged", i.map(Bs))
                                } else if ("chainChanged" === r.name) {
                                    var s = n.chainId,
                                        a = n.event.data,
                                        o = Ue(s),
                                        c = Gs(s) !== Gs(a) ? "".concat(o, ":").concat(Gs(a)) : s;
                                    e.onChainChanged(c)
                                } else e.events.emit(r.name, r.data);
                                e.events.emit("session_event", t)
                            })), this.client.on("session_update", (function(t) {
                                var n, r = t.topic,
                                    i = t.params,
                                    s = i.namespaces,
                                    a = null == (n = e.client) ? void 0 : n.session.get(r);
                                e.session = ha(fa({}, a), {
                                    namespaces: s
                                }), e.onSessionUpdate(), e.events.emit("session_update", {
                                    topic: r,
                                    params: i
                                })
                            })), this.client.on("session_delete", function() {
                                var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                    return (0, i.Z)().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, e.cleanup();
                                            case 2:
                                                e.events.emit("session_delete", n), e.events.emit("disconnect", ha(fa({}, Ve("USER_DISCONNECTED")), {
                                                    data: n.topic
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }()), this.on(Rs, (function(t) {
                                e.onChainChanged(t, !0)
                            }))
                        }
                    }, {
                        key: "getProvider",
                        value: function(e) {
                            if (!this.rpcProviders[e]) throw new Error("Provider not found: ".concat(e));
                            return this.rpcProviders[e]
                        }
                    }, {
                        key: "onSessionUpdate",
                        value: function() {
                            var e = this;
                            Object.keys(this.rpcProviders).forEach((function(t) {
                                var n;
                                e.getProvider(t).updateNamespace(null == (n = e.session) ? void 0 : n.namespaces[t])
                            }))
                        }
                    }, {
                        key: "setNamespaces",
                        value: function(e) {
                            var t = e.namespaces,
                                n = e.optionalNamespaces,
                                r = e.sessionProperties;
                            t && Object.keys(t).length && (this.namespaces = t), n && Object.keys(n).length && (this.optionalNamespaces = n), this.sessionProperties = r, this.persist("namespaces", t), this.persist("optionalNamespaces", n)
                        }
                    }, {
                        key: "validateChain",
                        value: function(e) {
                            var t = (null === e || void 0 === e ? void 0 : e.split(":")) || ["", ""],
                                n = (0, r.Z)(t, 2),
                                i = n[0],
                                s = n[1];
                            if (!this.namespaces || !Object.keys(this.namespaces).length) return [i, s];
                            if (i && !Object.keys(this.namespaces || {}).map((function(e) {
                                    return Ue(e)
                                })).includes(i)) throw new Error("Namespace '".concat(i, "' is not configured. Please call connect() first with namespace config."));
                            if (i && s) return [i, s];
                            var a = Ue(Object.keys(this.namespaces)[0]);
                            return [a, this.rpcProviders[a].getDefaultChain()]
                        }
                    }, {
                        key: "requestAccounts",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n, s;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = this.validateChain(), n = (0, r.Z)(t, 1), s = n[0], e.next = 3, this.getProvider(s).requestAccounts();
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "onChainChanged",
                        value: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (this.namespaces) {
                                var i = this.validateChain(e),
                                    s = (0, r.Z)(i, 2),
                                    a = s[0],
                                    o = s[1];
                                n || this.getProvider(a).setDefaultChain(o), (null != (t = this.namespaces[a]) ? t : this.namespaces["".concat(a, ":").concat(o)]).defaultChain = o, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", o)
                            }
                        }
                    }, {
                        key: "onConnect",
                        value: function() {
                            this.createProviders(), this.events.emit("connect", {
                                session: this.session
                            })
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), e.next = 9, this.cleanupPendingPairings({
                                                deletePairings: !0
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "persist",
                        value: function(e, t) {
                            this.client.core.storage.setItem("".concat(Ss, "/").concat(e), t)
                        }
                    }, {
                        key: "getFromStore",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.client.core.storage.getItem("".concat(Ss, "/").concat(t));
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }], [{
                        key: "init",
                        value: function() {
                            var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                var r;
                                return (0, i.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return r = new e(n), t.next = 3, r.initialize();
                                        case 3:
                                            return t.abrupt("return", r);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), e
                }(),
                va = da,
                ga = "".concat("wc", "@2:").concat("ethereum_provider", ":"),
                ya = ["eth_sendTransaction", "personal_sign"],
                ma = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                ba = ["chainChanged", "accountsChanged"],
                wa = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"],
                xa = Object.defineProperty,
                _a = Object.defineProperties,
                ka = Object.getOwnPropertyDescriptors,
                Za = Object.getOwnPropertySymbols,
                Ea = Object.prototype.hasOwnProperty,
                Ia = Object.prototype.propertyIsEnumerable,
                Pa = function(e, t, n) {
                    return t in e ? xa(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                Sa = function(e, t) {
                    for (var n in t || (t = {})) Ea.call(t, n) && Pa(e, n, t[n]);
                    if (Za) {
                        var r, i = (0, p.Z)(Za(t));
                        try {
                            for (i.s(); !(r = i.n()).done;) {
                                n = r.value;
                                Ia.call(t, n) && Pa(e, n, t[n])
                            }
                        } catch (s) {
                            i.e(s)
                        } finally {
                            i.f()
                        }
                    }
                    return e
                },
                Ra = function(e, t) {
                    return _a(e, ka(t))
                };

            function Oa(e) {
                return Number(e[0].split(":")[1])
            }

            function Ca(e) {
                return "0x".concat(e.toString(16))
            }

            function Na(e) {
                var t = e.chains,
                    n = e.optionalChains,
                    r = e.methods,
                    i = e.optionalMethods,
                    s = e.events,
                    a = e.optionalEvents,
                    o = e.rpcMap;
                if (!Ke(t)) throw new Error("Invalid chains");
                var p = {
                        chains: t,
                        methods: r || ya,
                        events: s || ba,
                        rpcMap: Sa({}, t.length ? (0, u.Z)({}, Oa(t), o[Oa(t)]) : {})
                    },
                    l = null === s || void 0 === s ? void 0 : s.filter((function(e) {
                        return !ba.includes(e)
                    })),
                    f = null === r || void 0 === r ? void 0 : r.filter((function(e) {
                        return !ya.includes(e)
                    }));
                if (!n && !a && !i && (null == l || !l.length) && (null == f || !f.length)) return {
                    required: t.length ? p : void 0
                };
                var h = (null === l || void 0 === l ? void 0 : l.length) && (null === f || void 0 === f ? void 0 : f.length) || !n,
                    d = {
                        chains: (0, c.Z)(new Set(h ? p.chains.concat(n || []) : n)),
                        methods: (0, c.Z)(new Set(p.methods.concat(null != i && i.length ? i : ma))),
                        events: (0, c.Z)(new Set(p.events.concat(null != a && a.length ? a : wa))),
                        rpcMap: o
                    };
                return {
                    required: t.length ? p : void 0,
                    optional: n.length ? d : void 0
                }
            }
            var Aa = function() {
                    function e() {
                        var t = this;
                        (0, a.Z)(this, e), this.events = new l.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = ga, this.on = function(e, n) {
                            return t.events.on(e, n), t
                        }, this.once = function(e, n) {
                            return t.events.once(e, n), t
                        }, this.removeListener = function(e, n) {
                            return t.events.removeListener(e, n), t
                        }, this.off = function(e, n) {
                            return t.events.off(e, n), t
                        }, this.parseAccount = function(e) {
                            return t.isCompatibleChainId(e) ? t.parseAccountId(e).address : e
                        }, this.signer = {}, this.rpc = {}
                    }
                    return (0, o.Z)(e, [{
                        key: "request",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.signer.request(t, this.formatChainId(this.chainId));
                                        case 2:
                                            return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "sendAsync",
                        value: function(e, t) {
                            this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                        }
                    }, {
                        key: "connected",
                        get: function() {
                            return !!this.signer.client && this.signer.client.core.relayer.connected
                        }
                    }, {
                        key: "connecting",
                        get: function() {
                            return !!this.signer.client && this.signer.client.core.relayer.connecting
                        }
                    }, {
                        key: "enable",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = this.session, e.t0) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, this.connect();
                                        case 4:
                                            return e.next = 6, this.request({
                                                method: "eth_requestAccounts"
                                            });
                                        case 6:
                                            return e.abrupt("return", e.sent);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "connect",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var n, r, a, o, c, p = this;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.signer.client) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new Error("Provider not initialized. Call init() first");
                                        case 2:
                                            return this.loadConnectOpts(t), n = Na(this.rpc), r = n.required, a = n.optional, e.prev = 4, e.next = 7, new Promise(function() {
                                                var e = (0, s.Z)((0, i.Z)().mark((function e(n, s) {
                                                    var o;
                                                    return (0, i.Z)().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return p.rpc.showQrModal && (null == (o = p.modal) || o.subscribeModal((function(e) {
                                                                    !e.open && !p.signer.session && (p.signer.abortPairingAttempt(), s(new Error("Connection request reset. Please try again.")))
                                                                }))), e.next = 3, p.signer.connect(Ra(Sa({
                                                                    namespaces: Sa({}, r && (0, u.Z)({}, p.namespace, r))
                                                                }, a && {
                                                                    optionalNamespaces: (0, u.Z)({}, p.namespace, a)
                                                                }), {
                                                                    pairingTopic: null === t || void 0 === t ? void 0 : t.pairingTopic
                                                                })).then((function(e) {
                                                                    n(e)
                                                                })).catch((function(e) {
                                                                    s(new Error(e.message))
                                                                }));
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t, n) {
                                                    return e.apply(this, arguments)
                                                }
                                            }());
                                        case 7:
                                            if (o = e.sent) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 10:
                                            c = S(o.namespaces, [this.namespace]), this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c), this.setAccounts(c), this.events.emit("connect", {
                                                chainId: Ca(this.chainId)
                                            }), e.next = 17;
                                            break;
                                        case 14:
                                            throw e.prev = 14, e.t0 = e.catch(4), this.signer.logger.error(e.t0), e.t0;
                                        case 17:
                                            return e.prev = 17, this.modal && this.modal.closeModal(), e.finish(17);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 14, 17, 20]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "disconnect",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.t0 = this.session, !e.t0) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 4, this.signer.disconnect();
                                        case 4:
                                            this.reset();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "isWalletConnect",
                        get: function() {
                            return !0
                        }
                    }, {
                        key: "session",
                        get: function() {
                            return this.signer.session
                        }
                    }, {
                        key: "registerEventListeners",
                        value: function() {
                            var e = this;
                            this.signer.on("session_event", (function(t) {
                                var n = t.params.event;
                                "accountsChanged" === n.name ? (e.accounts = e.parseAccounts(n.data), e.events.emit("accountsChanged", e.accounts)) : "chainChanged" === n.name ? e.setChainId(e.formatChainId(n.data)) : e.events.emit(n.name, n.data), e.events.emit("session_event", t)
                            })), this.signer.on("chainChanged", (function(t) {
                                var n = parseInt(t);
                                e.chainId = n, e.events.emit("chainChanged", Ca(e.chainId)), e.persist()
                            })), this.signer.on("session_update", (function(t) {
                                e.events.emit("session_update", t)
                            })), this.signer.on("session_delete", (function(t) {
                                e.reset(), e.events.emit("session_delete", t), e.events.emit("disconnect", Ra(Sa({}, Ve("USER_DISCONNECTED")), {
                                    data: t.topic,
                                    name: "USER_DISCONNECTED"
                                }))
                            })), this.signer.on("display_uri", (function(t) {
                                var n, r;
                                e.rpc.showQrModal && (null == (n = e.modal) || n.closeModal(), null == (r = e.modal) || r.openModal({
                                    uri: t
                                })), e.events.emit("display_uri", t)
                            }))
                        }
                    }, {
                        key: "switchEthereumChain",
                        value: function(e) {
                            this.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: e.toString(16)
                                }]
                            })
                        }
                    }, {
                        key: "isCompatibleChainId",
                        value: function(e) {
                            return "string" == typeof e && e.startsWith("".concat(this.namespace, ":"))
                        }
                    }, {
                        key: "formatChainId",
                        value: function(e) {
                            return "".concat(this.namespace, ":").concat(e)
                        }
                    }, {
                        key: "parseChainId",
                        value: function(e) {
                            return Number(e.split(":")[1])
                        }
                    }, {
                        key: "setChainIds",
                        value: function(e) {
                            var t = this,
                                n = e.filter((function(e) {
                                    return t.isCompatibleChainId(e)
                                })).map((function(e) {
                                    return t.parseChainId(e)
                                }));
                            n.length && (this.chainId = n[0], this.events.emit("chainChanged", Ca(this.chainId)), this.persist())
                        }
                    }, {
                        key: "setChainId",
                        value: function(e) {
                            if (this.isCompatibleChainId(e)) {
                                var t = this.parseChainId(e);
                                this.chainId = t, this.switchEthereumChain(t)
                            }
                        }
                    }, {
                        key: "parseAccountId",
                        value: function(e) {
                            var t = e.split(":"),
                                n = (0, r.Z)(t, 3),
                                i = n[0],
                                s = n[1],
                                a = n[2];
                            return {
                                chainId: "".concat(i, ":").concat(s),
                                address: a
                            }
                        }
                    }, {
                        key: "setAccounts",
                        value: function(e) {
                            var t = this;
                            this.accounts = e.filter((function(e) {
                                return t.parseChainId(t.parseAccountId(e).chainId) === t.chainId
                            })).map((function(e) {
                                return t.parseAccountId(e).address
                            })), this.events.emit("accountsChanged", this.accounts)
                        }
                    }, {
                        key: "getRpcConfig",
                        value: function(e) {
                            var t, n, r = this,
                                i = null != (t = null === e || void 0 === e ? void 0 : e.chains) ? t : [],
                                s = null != (n = null === e || void 0 === e ? void 0 : e.optionalChains) ? n : [],
                                a = i.concat(s);
                            if (!a.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                            var o = i.length ? (null === e || void 0 === e ? void 0 : e.methods) || ya : [],
                                c = i.length ? (null === e || void 0 === e ? void 0 : e.events) || ba : [],
                                u = (null === e || void 0 === e ? void 0 : e.optionalMethods) || [],
                                p = (null === e || void 0 === e ? void 0 : e.optionalEvents) || [],
                                l = (null === e || void 0 === e ? void 0 : e.rpcMap) || this.buildRpcMap(a, e.projectId),
                                f = (null === e || void 0 === e ? void 0 : e.qrModalOptions) || void 0;
                            return {
                                chains: null === i || void 0 === i ? void 0 : i.map((function(e) {
                                    return r.formatChainId(e)
                                })),
                                optionalChains: s.map((function(e) {
                                    return r.formatChainId(e)
                                })),
                                methods: o,
                                events: c,
                                optionalMethods: u,
                                optionalEvents: p,
                                rpcMap: l,
                                showQrModal: !(null == e || !e.showQrModal),
                                qrModalOptions: f,
                                projectId: e.projectId,
                                metadata: e.metadata
                            }
                        }
                    }, {
                        key: "buildRpcMap",
                        value: function(e, t) {
                            var n = this,
                                r = {};
                            return e.forEach((function(e) {
                                r[e] = n.getRpcUrl(e, t)
                            })), r
                        }
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e(t) {
                                var r, s, a;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? Oa(this.rpc.chains) : Oa(this.rpc.optionalChains), e.next = 4, va.init({
                                                projectId: this.rpc.projectId,
                                                metadata: this.rpc.metadata,
                                                disableProviderPing: t.disableProviderPing,
                                                relayUrl: t.relayUrl,
                                                storageOptions: t.storageOptions
                                            });
                                        case 4:
                                            return this.signer = e.sent, this.registerEventListeners(), e.next = 8, this.loadPersistedSession();
                                        case 8:
                                            if (!this.rpc.showQrModal) {
                                                e.next = 28;
                                                break
                                            }
                                            return e.prev = 9, e.next = 12, n.e(199).then(n.bind(n, 41199));
                                        case 12:
                                            s = e.sent, a = s.WalletConnectModal, r = a, e.next = 20;
                                            break;
                                        case 17:
                                            throw e.prev = 17, e.t0 = e.catch(9), new Error("To use QR modal, please install @walletconnect/modal package");
                                        case 20:
                                            if (!r) {
                                                e.next = 28;
                                                break
                                            }
                                            e.prev = 21, this.modal = new r(Sa({
                                                walletConnectVersion: 2,
                                                projectId: this.rpc.projectId,
                                                standaloneChains: this.rpc.chains
                                            }, this.rpc.qrModalOptions)), e.next = 28;
                                            break;
                                        case 25:
                                            throw e.prev = 25, e.t1 = e.catch(21), this.signer.logger.error(e.t1), new Error("Could not generate WalletConnectModal Instance");
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [9, 17],
                                    [21, 25]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "loadConnectOpts",
                        value: function(e) {
                            var t = this;
                            if (e) {
                                var n = e.chains,
                                    r = e.optionalChains,
                                    i = e.rpcMap;
                                n && Ke(n) && (this.rpc.chains = n.map((function(e) {
                                    return t.formatChainId(e)
                                })), n.forEach((function(e) {
                                    t.rpc.rpcMap[e] = (null === i || void 0 === i ? void 0 : i[e]) || t.getRpcUrl(e)
                                }))), r && Ke(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = null === r || void 0 === r ? void 0 : r.map((function(e) {
                                    return t.formatChainId(e)
                                })), r.forEach((function(e) {
                                    t.rpc.rpcMap[e] = (null === i || void 0 === i ? void 0 : i[e]) || t.getRpcUrl(e)
                                })))
                            }
                        }
                    }, {
                        key: "getRpcUrl",
                        value: function(e, t) {
                            var n;
                            return (null == (n = this.rpc.rpcMap) ? void 0 : n[e]) || "".concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:").concat(e, "&projectId=").concat(t || this.rpc.projectId)
                        }
                    }, {
                        key: "loadPersistedSession",
                        value: function() {
                            var e = (0, s.Z)((0, i.Z)().mark((function e() {
                                var t, n;
                                return (0, i.Z)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.session) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, this.signer.client.core.storage.getItem("".concat(this.STORAGE_KEY, "/chainId"));
                                        case 4:
                                            t = e.sent, n = this.session.namespaces["".concat(this.namespace, ":").concat(t)] ? this.session.namespaces["".concat(this.namespace, ":").concat(t)] : this.session.namespaces[this.namespace], this.setChainIds(t ? [this.formatChainId(t)] : null === n || void 0 === n ? void 0 : n.accounts), this.setAccounts(null === n || void 0 === n ? void 0 : n.accounts);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "reset",
                        value: function() {
                            this.chainId = 1, this.accounts = []
                        }
                    }, {
                        key: "persist",
                        value: function() {
                            this.session && this.signer.client.core.storage.setItem("".concat(this.STORAGE_KEY, "/chainId"), this.chainId)
                        }
                    }, {
                        key: "parseAccounts",
                        value: function(e) {
                            var t = this;
                            return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map((function(e) {
                                return t.parseAccount(e)
                            }))
                        }
                    }], [{
                        key: "init",
                        value: function() {
                            var t = (0, s.Z)((0, i.Z)().mark((function t(n) {
                                var r;
                                return (0, i.Z)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return r = new e, t.next = 3, r.initialize(n);
                                        case 3:
                                            return t.abrupt("return", r);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), e
                }(),
                Ta = Aa
        }
    }
]);