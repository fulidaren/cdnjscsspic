(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], 
    {
        "+V+j": function (t, e, n) {
            "use strict";

            function i() {
                return -1 !== navigator.userAgent.indexOf("MSIE")
            }

            function r() {
                var t = document.body || document.getElementsByTagName("body")[0],
                    e = "",
                    n = "",
                    i = t;
                return t.msRequestFullscreen !== undefined ? (e = "ms", n = "msRequestFullscreen", i = t) : t.webkitRequestFullscreen !== undefined ? (e = "webkit", n = "webkitRequestFullscreen", i = t) : t.mozRequestFullScreen !== undefined || t.oRequestFullscreen !== undefined && (e = "o", n = "oRequestFullscreen", i = t), {
                    prefix: e.toLowerCase(),
                    method: n,
                    target: i
                }
            }

            function a() {
                var t = r().prefix;
                return document[t + "FullScreen"] || document[t + "IsFullScreen"] || document.msFullscreenElement
            }

            function o(t) {
                var e = t;
                e = e === undefined ? !a() : !!e;
                document.body || document.getElementsByTagName("body")[0];
                var n = r(),
                    o = n.prefix,
                    s = n.method,
                    c = n.target;
                return !(i() || !o) && (e ? c[s]() : document["ms" === o ? "msExitFullscreen" : o + "CancelFullScreen"](), !0)
            }
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("V+eJ");
            var s = {
                isFull: a,
                isSupport: function () {
                    var t = r().prefix;
                    return !(i() || !t)
                },
                prefix: function () {
                    return r().prefix
                },
                target: function () {
                    return r().target
                },
                toggle: function () {
                    return o()
                },
                open: function () {
                    o(!0)
                },
                close: function () {
                    o(!1)
                }
            };
            e["default"] = s
        },
        "+q+r": function (t, e, n) {
            "use strict";
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = function (t) {
                var e = (+new Date).toString(16) + parseInt(1e3 * Math.random()).toString(16) + "-" + Math.random().toString(16).replace(".", "") + "-" + function () {
                        function t(t, e) {
                            var n, i = 0;
                            for (n = 0; n < e.length; n++) i |= r[n] << 8 * n;
                            return t ^ i
                        }
                        var e, n, i = window.navigator.userAgent,
                            r = [],
                            a = 0;
                        for (e = 0; e < i.length; e++) n = i.charCodeAt(e), r.unshift(255 & n), 4 <= r.length && (a = t(a, r), r = []);
                        return 0 < r.length && (a = t(a, r)), a.toString(16)
                    }() + "-" + (window.screen.height * window.screen.width).toString(16) + "-" + (+new Date).toString(16) + parseInt(1e3 * Math.random()).toString(16),
                    n = parseInt(new Date / 1e3),
                    i = parseInt(2147483648 * Math.random()) + "-" + n + "-",
                    r = window.screen.width + "x" + window.screen.height,
                    a = siteConf.cnzz.evt,
                    o = t.join("|");
                (new Image).src = "//ei.cnzz.com/stat.htm?id=" + a + "&r=&lg=zh-cn&ntime=" + n + "&cnzz_eid=" + i + "&showp=" + r + "&ei=" + encodeURIComponent(encodeURIComponent(o)).replace(/%257C/gi, "%7C") + "&t=&umuuid=" + e + "&h=1&rnd=" + parseInt(2147483648 * Math.random())
            }, n("pIFo"), n("a1Th"), n("h7Nl"), n("Btvt")
        },
        "/02M": function (t, e, n) {
            "use strict";
            e.SyncHook = n("EkJ7")
        },
        13: function (t, e, n) {
            t.exports = n("QJ5W")
        },
        "1MBn": function (t, e, n) {
            var i = n("DVgA"),
                r = n("JiEa"),
                a = n("UqcF");
            t.exports = function (t) {
                var e = i(t),
                    n = r.f;
                if (n)
                    for (var o, s = n(t), c = a.f, u = 0; s.length > u;) c.call(t, o = s[u++]) && e.push(o);
                return e
            }
        },
        "2vKP": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0;
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = new(function () {
                    function t() {
                        (0, r["default"])(this, t), this.polyfillRequestAnimationFrame()
                    }
                    return (0, a["default"])(t, [{
                        key: "polyfillRequestAnimationFrame",
                        value: function () {
                            ! function () {
                                for (var t = 0, e = ["webkit", "moz"], n = 0; n < e.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[e[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[n] + "CancelAnimationFrame"] || window[e[n] + "CancelRequestAnimationFrame"];
                                window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
                                    var n = (new Date).getTime(),
                                        i = Math.max(0, 16 - (n - t)),
                                        r = window.setTimeout(function () {
                                            e(n + i)
                                        }, i);
                                    return t = n + i, r
                                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
                                    clearTimeout(t)
                                })
                            }()
                        }
                    }]), t
                }());
            e["default"] = o
        },
        "3GXt": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0;
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = n("/02M"),
                s = function () {
                    function t(e) {
                        (0, r["default"])(this, t), e.hooks = this.hooks
                    }
                    return (0, a["default"])(t, [{
                        key: "hooks",
                        get: function () {
                            return {
                                $emit: new o.SyncHook(["eventName", "args"]),
                                afterPlugins: new o.SyncHook,
                                run: new o.SyncHook,
                                runChapterApiLoad: new o.SyncHook(["chapterInfo"]),
                                afterChapterApiLoad: new o.SyncHook(["chapterList"]),
                                onContainerTouchStart: new o.SyncHook(["event"]),
                                onContainerTouchMove: new o.SyncHook(["event"]),
                                onContainerTouchEnd: new o.SyncHook(["event"]),
                                onContainerClick: new o.SyncHook(["event"]),
                                onContainerClickCenter: new o.SyncHook(["info"]),
                                onContainerScroll: new o.SyncHook,
                                runImageObserver: new o.SyncHook(["doms"]),
                                cancelImageObserve: new o.SyncHook(["sourceImage"]),
                                afterImageObserver: new o.SyncHook(["sourceImage"]),
                                afterChapterIndexChange: new o.SyncHook,
                                afterChapterImageIndexChange: new o.SyncHook,
                                unlockCharpterObserver: new o.SyncHook(["chapterLockInfo"]),
                                runChapterImageSlot: new o.SyncHook(["sourceImage"]),
                                afterChapterDomInstall: new o.SyncHook(["chapterInfo"]),
                                directChapterImageIndex: new o.SyncHook(["index"]),
                                directChapterIndex: new o.SyncHook(["chapterInfo"]),
                                directChapterDistance: new o.SyncHook(["distance"]),
                                afterEntryInit: new o.SyncHook,
                                updateImageDistance: new o.SyncHook,
                                directNextPage: new o.SyncHook,
                                directPrevPage: new o.SyncHook,
                                runImageLineLoad: new o.SyncHook(["lineInfo"]),
                                runImageLoad: new o.SyncHook,
                                beforeImageLoad: new o.SyncHook(["sourceImage"]),
                                afterImageloadSucc: new o.SyncHook(["sourceImage"]),
                                afterImageloadFail: new o.SyncHook(["sourceImage"]),
                                closeMenuControl: new o.SyncHook,
                                afterScaleChange: new o.SyncHook(["scaleNum"]),
                                afterFullScreenChange: new o.SyncHook,
                                stopAutoRead: new o.SyncHook,
                                closeCatalog: new o.SyncHook
                            }
                        }
                    }]), t
                }();
            e["default"] = s
        },
        "3P17": function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("SRfc"), n("2Spj"), n("dRSK");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = function () {
                        function e(n, i) {
                            var a = this;
                            if ((0, r["default"])(this, e), this.elem = t(n), !this.elem.length || !this.elem.hasClass("rd-progress")) throw Error("no elem:" + n);
                            this.line = this.elem.find(".rd-progress-cursor"), this.cursor = this.elem.find(".cursor"), this.supportTouches = "ontouchend" in document, this._status = 0, this._callback = function () {}, this._touchEnd = function () {}, this._startPercent = 0, i <= 100 && i - 1 >= -1 && (this._startPercent = i), this._startPercent && this.update(this._startPercent), this.startLeft = null, this.startX = null, this.moveX = null, this.drag = !1, this.bindEvent(this.cursor, "down", this.mousedown.bind(this)), this.bindEvent(this.cursor, "move", this.mousemove.bind(this)), this.bindEvent(this.cursor, "up", function (t) {
                                t.stopPropagation(), a.mouseup(!0)
                            }), this.bindEvent(t(document), "move", this.mousemove.bind(this)), this.bindEvent(t(document), "up", function (t) {
                                a.mouseup()
                            }), this.initCliEvent()
                        }
                        return (0, a["default"])(e, [{
                            key: "initCliEvent",
                            value: function () {
                                var e = this;
                                this.elem.on("click", function (n) {
                                    if (!t(n.target).hasClass("cursor")) {
                                        var i = e._getOfsLeft(n.target) + n.offsetX;
                                        e.go(i), e._callback(e._status), e._touchEnd(!0)
                                    }
                                })
                            }
                        }, {
                            key: "bindEvent",
                            value: function (t, e, n) {
                                this.supportTouches ? t.get(0).addEventListener(this.events[e], n, !1) : t.bind(this.events[e], n)
                            }
                        }, {
                            key: "mousedown",
                            value: function (t) {
                                this.startLeft = this.line.css("left"), null !== this.startLeft.match("%") ? this.startLeft = this.maxW * parseInt(this.startLeft, 10) / 100 : this.startLeft = parseInt(this.startLeft, 10), this.drag = !0;
                                var e = this._getPageCoords(t);
                                this.startX = e.x
                            }
                        }, {
                            key: "mousemove",
                            value: function (t) {
                                if (this.drag) {
                                    t.preventDefault();
                                    var e = this._getPageCoords(t);
                                    this.moveX = parseInt(e.x - this.startX), this.go(this.startLeft + this.moveX), this._callback(this._status)
                                }
                            }
                        }, {
                            key: "mouseup",
                            value: function (t) {
                                this.drag = !1, this.startLeft = null, this.startX = null, this.moveX = null, this._touchEnd(t)
                            }
                        }, {
                            key: "_getPageCoords",
                            value: function (t) {
                                return t.targetTouches && t.targetTouches[0] ? {
                                    x: t.targetTouches[0].pageX,
                                    y: t.targetTouches[0].pageY
                                } : {
                                    x: t.pageX,
                                    y: t.pageY
                                }
                            }
                        }, {
                            key: "_getOfsLeft",
                            value: function (e) {
                                var n = t(e),
                                    i = 0;
                                if (n.parents(".rd-progress").length)
                                    for (; !n.hasClass("rd-progress");) i += n[0].offsetLeft, n = n.parent();
                                return i
                            }
                        }, {
                            key: "go",
                            value: function (t) {
                                t < 0 && (t = 0), t > this.maxW && (t = this.maxW);
                                var e = Math.min(100, parseInt(t / this.maxW * 100, 10));
                                this._status = e, this.line.css("left", t + "px")
                            }
                        }, {
                            key: "update",
                            value: function (t) {
                                t <= 100 && t - 1 >= -1 && (this.toolIsHidden(this.elem) ? this.line.css("left", parseInt(t, 10) + "%") : this.line.css("left", parseInt(this.maxW * t / 100, 10) + "px"), this._status = t)
                            }
                        }, {
                            key: "toolIsHidden",
                            value: function (e) {
                                for (var n = !1, i = t(e);
                                    (i = i.parent()) && 0 !== i.length && "BODY" !== i[0].nodeName;)
                                    if ("none" !== i.css("display")) {
                                        n = !0;
                                        break
                                    } return n
                            }
                        }, {
                            key: "now",
                            value: function () {
                                return this._status
                            }
                        }, {
                            key: "bind",
                            value: function (t) {
                                "function" == typeof t && (this._callback = t)
                            }
                        }, {
                            key: "touchEnd",
                            value: function (t) {
                                "function" == typeof t && (this._touchEnd = t)
                            }
                        }, {
                            key: "trigger",
                            value: function () {
                                this._callback(this._status)
                            }
                        }, {
                            key: "events",
                            get: function () {
                                return {
                                    click: this.supportTouches ? "touchstart" : "click",
                                    down: this.supportTouches ? "touchstart" : "mousedown",
                                    move: this.supportTouches ? "touchmove" : "mousemove",
                                    up: this.supportTouches ? "touchend" : "mouseup"
                                }
                            }
                        }, {
                            key: "maxW",
                            get: function () {
                                return parseInt(this.elem.width())
                            }
                        }]), e
                    }();
                e["default"] = o
            }).call(this, n("+2Rf"))
        },
        "3uL8": function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "菜单控制", a.isShowMenu = !1, a.footMemuDom = t("#js_footMenu"), a.headMenuDom = t("#js_headMenu"), a.height = 0, a.hoverHeight = 64, a.hasEntryInit = !1, a.isHoverMenu = !1, a
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["closeMenuControl", "onContainerScroll", "afterEntryInit"]), this.initEvent(), this.show()
                        }
                    }, {
                        key: "onContainerScroll",
                        value: function () {
                            this.hasEntryInit && !this.isHoverMenu && this.close()
                        }
                    }, {
                        key: "afterEntryInit",
                        value: function () {
                            var t = this;
                            setTimeout(function () {
                                t.hasEntryInit = !0
                            }, 500)
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            this.height = this.states.container.height(), n.on("click", "#readerContainer", function () {
                                e.onReaderClick()
                            }), n.on("mouseleave", "#js_footMenu", function () {
                                e.mouseLeave()
                            }), n.on("mouseleave", "#js_headMenu", function () {
                                e.mouseLeave()
                            }), n.on("mousemove", function (t) {
                                e.bodyMouseMove(t)
                            })
                        }
                    }, {
                        key: "bodyMouseMove",
                        value: function (t) {
                            var e = t.pageY;
                            if (e <= this.hoverHeight || e > this.height - this.hoverHeight) return this.show(), void(this.isHoverMenu = !0);
                            this.isHoverMenu = !1
                        }
                    }, {
                        key: "mouseLeave",
                        value: function () {
                            this.$emit.call("closeCatalog"), this.close()
                        }
                    }, {
                        key: "onReaderClick",
                        value: function () {
                            var t = this;
                            setTimeout(function () {
                                t.isShowMenu ? t.close() : t.show()
                            }, 100)
                        }
                    }, {
                        key: "closeMenuControl",
                        value: function () {
                            this.close()
                        }
                    }, {
                        key: "show",
                        value: function () {
                            this.isShowMenu || (this.isShowMenu = !0, this.headMenuDom.addClass("show"), this.footMemuDom.addClass("show"))
                        }
                    }, {
                        key: "close",
                        value: function () {
                            this.isShowMenu && (this.isShowMenu = !1, this.headMenuDom.removeClass("show"), this.footMemuDom.removeClass("show"))
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        "4F9g": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("iWIM")),
                s = i(n("7W2i")),
                c = i(n("a1gu")),
                u = i(n("Nsbk"));

            function l(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, u["default"])(t);
                    if (e) {
                        var r = (0, u["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, c["default"])(this, n)
                }
            }
            var h = function (t) {
                (0, s["default"])(n, t);
                var e = l(n);

                function n(t) {
                    var i;
                    return (0, r["default"])(this, n), (i = e.call(this, t)).name = "阅读模式切换基类", i.isFixV = !1, i
                }
                return (0, a["default"])(n, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, u["default"])(n.prototype), "apply", this).call(this, t), this.installHistoryInfo(), this.initData(), this.initEvent(), this.updateDom()
                    }
                }, {
                    key: "installHistoryInfo",
                    value: function () {
                        var t = JSON.parse(ACGN.util.cookie(this.types.cookieHabit)) || {};
                        t.mode && (this.states.readMode = t.mode, this.states.isSwiperReverse = t.mode === this.$reader.types.mode.HL)
                    }
                }, {
                    key: "changeMode",
                    value: function (t) {
                        this.sendCnzzEvent("阅读模式切换_".concat(t)), this.$utils.setHabit(this.types.cookieHabit, "mode", t), window.location.reload()
                    }
                }, {
                    key: "initData",
                    value: function () {
                        this.isFixV = 1 === this.states.comicInfo.comicReadType, this.isFixV && (this.states.readMode = this.$reader.types.mode.V, this.states.isSwiperReverse = !1, this.$utils.setHabit(this.types.cookieHabit, "mode", this.states.readMode))
                    }
                }]), n
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        "4LiD": function (t, e, n) {
            "use strict";
            var i = n("dyZX"),
                r = n("XKFU"),
                a = n("KroJ"),
                o = n("3Lyj"),
                s = n("Z6vF"),
                c = n("SlkY"),
                u = n("9gX7"),
                l = n("0/R4"),
                h = n("eeVq"),
                f = n("XMVh"),
                d = n("fyDq"),
                p = n("Xbzi");
            t.exports = function (t, e, n, v, m, y) {
                var g = i[t],
                    I = g,
                    C = m ? "set" : "add",
                    k = I && I.prototype,
                    b = {},
                    w = function (t) {
                        var e = k[t];
                        a(k, t, "delete" == t ? function (t) {
                            return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t)
                        } : "has" == t ? function (t) {
                            return !(y && !l(t)) && e.call(this, 0 === t ? 0 : t)
                        } : "get" == t ? function (t) {
                            return y && !l(t) ? undefined : e.call(this, 0 === t ? 0 : t)
                        } : "add" == t ? function (t) {
                            return e.call(this, 0 === t ? 0 : t), this
                        } : function (t, n) {
                            return e.call(this, 0 === t ? 0 : t, n), this
                        })
                    };
                if ("function" == typeof I && (y || k.forEach && !h(function () {
                        (new I).entries().next()
                    }))) {
                    var _ = new I,
                        S = _[C](y ? {} : -0, 1) != _,
                        x = h(function () {
                            _.has(1)
                        }),
                        R = f(function (t) {
                            new I(t)
                        }),
                        P = !y && h(function () {
                            for (var t = new I, e = 5; e--;) t[C](e, e);
                            return !t.has(-0)
                        });
                    R || ((I = e(function (e, n) {
                        u(e, I, t);
                        var i = p(new g, e, I);
                        return n != undefined && c(n, m, i[C], i), i
                    })).prototype = k, k.constructor = I), (x || P) && (w("delete"), w("has"), m && w("get")), (P || S) && w(C), y && k.clear && delete k.clear
                } else I = v.getConstructor(e, t, m, C), o(I.prototype, n), s.NEED = !0;
                return d(I, t), b[t] = I, r(r.G + r.W + r.F * (I != g), b), y || v.setStrong(I, t, m), I
            }
        },
        "54q3": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0;
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = function () {
                    function t(e) {
                        (0, r["default"])(this, t), e.types = this.types
                    }
                    return (0, a["default"])(t, [{
                        key: "types",
                        get: function () {
                            return {
                                mode: {
                                    H: "swipe",
                                    HR: "swipe-right",
                                    HL: "swipe-left",
                                    V: "scroll"
                                },
                                cookieHabit: "kmh-habit",
                                advert: "advert",
                                interact: "interact",
                                chapterSlot: "chapter-slot"
                            }
                        }
                    }]), t
                }();
            e["default"] = o
        },
        "5hgx": function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("dRSK");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).staticChapterDom = t("#js_headChapterName"), a.template = '<p class="acgn-reader-chapter__index-footer">{0}</p>', a.indexFooterDom = null, a.isV = !0, a
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterImageIndexChange", "afterChapterIndexChange", "afterScaleChange"]), this.isV = this.states.readMode === this.types.mode.V, this.init()
                        }
                    }, {
                        key: "afterScaleChange",
                        value: function () {
                            this.indexFooterDom.css("left", this.getPostionLeft())
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var e = this,
                                n = this.states.currentChapter;
                            this.indexFooterDom = t(this.template.format(this.getPageIndexRangeShow())), t("#readerContainer").append(this.indexFooterDom), this.staticChapterDom.html(n.chapterName), setTimeout(function () {
                                e.indexFooterDom.css("left", e.getPostionLeft() + (e.isV ? 0 : 8))
                            })
                        }
                    }, {
                        key: "getPostionLeft",
                        value: function () {
                            var t = this.states,
                                e = t.currentChapter.chapterId,
                                n = t.currentChapterImageIndex,
                                i = this.states.container.find('[chapter-index="'.concat(n, '"][chapter-pid="').concat(e, '"]'));
                            return i.eq(i.length - 1).offset().left
                        }
                    }, {
                        key: "setHtml",
                        value: function () {
                            var t = this.states.currentChapter;
                            this.indexFooterDom.html(this.getPageIndexRangeShow()), this.staticChapterDom.html(t.chapterName)
                        }
                    }, {
                        key: "getPageIndexRangeShow",
                        value: function () {
                            var t = this.states,
                                e = t.currentChapter.totalPage,
                                n = t.currentChapterImageIndex,
                                i = this.$reader.$options.read.swiperImageNum,
                                r = "";
                            return this.states.isVerticalMode || 1 === i || n === e || (r = "-" + (n + 1)), n + r + "/" + e
                        }
                    }, {
                        key: "afterChapterImageIndexChange",
                        value: function () {
                            this.setHtml()
                        }
                    }, {
                        key: "afterChapterIndexChange",
                        value: function () {
                            this.setHtml()
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        "68Y+": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("pIFo"), n("V+eJ"), n("8+KV"), n("Vd3H"), n("0l/t"), n("f3/d");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("iWIM")),
                s = i(n("7W2i")),
                c = i(n("a1gu")),
                u = i(n("Nsbk"));

            function l(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, u["default"])(t);
                    if (e) {
                        var r = (0, u["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, c["default"])(this, n)
                }
            }
            var h = function (t) {
                (0, s["default"])(n, t);
                var e = l(n);

                function n(t) {
                    var i;
                    return (0, r["default"])(this, n), (i = e.call(this, t)).name = "图片加载器插件", i.maxLen = 3, i.runing = !1, i.requestQueue = [], i
                }
                return (0, a["default"])(n, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, u["default"])(n.prototype), "apply", this).call(this, t), this.installTaps(["runImageLoad"])
                    }
                }, {
                    key: "runImageLoad",
                    value: function () {
                        this.runing || (this.runing = !0, this.loadImageBatch())
                    }
                }, {
                    key: "loadImageBatch",
                    value: function () {
                        var t = this,
                            e = this.states,
                            n = e.chapterImageList,
                            i = e.loadLine,
                            r = n.filter(function (t) {
                                return !t.isInited && !t.isLock && i[t.domain]
                            });
                        if (0 !== r.length) {
                            if (this.requestQueue.length != this.maxLen) {
                                var a = r.sort(function (t, e) {
                                        return e.priority - t.priority
                                    }),
                                    o = this.maxLen - this.requestQueue.length;
                                a.slice(0, o).forEach(function (e) {
                                    t.requestImg(e)
                                })
                            }
                        } else this.runing = !1
                    }
                }, {
                    key: "requestImg",
                    value: function (t) {
                        var e = this;
                        t.priority, this.$emit.call("beforeImageLoad", t), t.isInited = !0, this.requestQueue.push(t);
                        var n = new Image;
                        n.onload = function () {
                            t.isSucceed = !0, t.imgObj = n, e.finishImgLoad(t)
                        }, n.onerror = function () {
                            t.faileCount += 1, e.finishImgLoad(t)
                        }, n.src = encodeURI(this.getImageUrl(t)), t.originUrl = n.src
                    }
                }, {
                    key: "finishImgLoad",
                    value: function (t) {
                        var e = t.priority;
                        t.imgObj ? this.$emit.call("afterImageloadSucc", t) : (this.$emit.call("cancelImageObserve", t), this.$emit.call("afterImageloadFail", t)), e > 0 && this.$emit.call("cancelImageObserve", t), this.updateRequestQueue(t), this.loadImageBatch()
                    }
                }, {
                    key: "updateRequestQueue",
                    value: function (t) {
                        var e = this.requestQueue.indexOf(t); - 1 === e && this.$message("图片资源队列加载异常！".concat(JSON.stringify(t))), this.requestQueue.splice(e, 1)
                    }
                }, {
                    key: "getImageUrl",
                    value: function (t) {
                        var e = this.states.loadLine[t.domain],
                            n = t.chapterPath.replace(/\$\$/, t.index),
                            i = "//".concat(e).concat(n);
                        return ACGN.util.switchWebp(i, t.chapterDomainSuffix || this.states.definitionFix)
                    }
                }]), n
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        "6Ixs": function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("Tze0"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "目录基类", a.catalogListDom = t("#js_catalogList"), a.catalogBtnDom = t("#js_catalogBtn"), a.tplListChapter = t("#tpl_listChapter").html().trim(), a.data = [], a.initData = !1, a
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.comicId = this.states.comicInfo.comicId, this.initEvent(), this.initSelfEvent(), this.installSelfTaps()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            this.catalogBtnDom.on("click", function (n) {
                                n.stopPropagation(), e.catalogBtnDom.hasClass("order-reverse") ? (e.catalogBtnDom.removeClass("order-reverse"), t("#js_catalogText").text("升序"), e.sendCnzzEvent("章节目录排序升序")) : (e.catalogBtnDom.addClass("order-reverse"), t("#js_catalogText").text("降序"), e.sendCnzzEvent("章节目录排序降序")), e.setHtml(), e.afterSort()
                            })
                        }
                    }, {
                        key: "getChapterList",
                        value: function () {
                            var t = this;
                            if (!this.initData) {
                                this.initData = !0;
                                var e = {
                                    comic_id: this.comicId
                                };
                                ACGN.ajax({
                                    url: this.options.api.getChapterList,
                                    cache: !1,
                                    data: e,
                                    dataType: "json"
                                }, function (e, n) {
                                    e || (t.data = n.reverse(), t.data.length <= 0 && ACGN.layer.toast("没有获取到章节信息，请刷新重试试。。。"), t.catalogListDom.html(t.renderHtml()), t.selfCallBack())
                                })
                            }
                        }
                    }, {
                        key: "setHtml",
                        value: function () {
                            this.data = this.data.reverse(), this.catalogListDom.html(this.renderHtml())
                        }
                    }, {
                        key: "renderHtml",
                        value: function () {
                            return ACGN.ejs.render(this.tplListChapter, {
                                comicId: ACGN.util.getComicId(siteConf, window.comicInfo),
                                catalogList: this.data,
                                isInsideMode: this.states.isInsideMode
                            })
                        }
                    }, {
                        key: "selfCallBack",
                        value: function () {}
                    }, {
                        key: "afterSort",
                        value: function () {}
                    }, {
                        key: "$options",
                        get: function () {
                            return {
                                api: {
                                    getChapterList: "/api/getchapterlist"
                                }
                            }
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        "6cS9": function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("rGqo"), n("LK8F"), n("rE2o"), n("ioFf"), n("XfO3"), n("HEwt"), n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("8+KV"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t, e) {
                    var n;
                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (n = function (t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return h(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === n && t.constructor && (n = t.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(t);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var i = 0,
                                r = function () {};
                            return {
                                s: r,
                                n: function () {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function (t) {
                                    throw t
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, o = !0,
                        s = !1;
                    return {
                        s: function () {
                            n = t[Symbol.iterator]()
                        },
                        n: function () {
                            var t = n.next();
                            return o = t.done, t
                        },
                        e: function (t) {
                            s = !0, a = t
                        },
                        f: function () {
                            try {
                                o || null == n["return"] || n["return"]()
                            } finally {
                                if (s) throw a
                            }
                        }
                    }
                }

                function h(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                    return i
                }

                function f(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var d = function (e) {
                    (0, s["default"])(i, e);
                    var n = f(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "广告插件", e.inited = !1, e.formatFn = e.options.formatFn, e.template = e.options.template, e.height = 0, e.timerCount = 0, e.baseTemplate = '<div class="acgn-reader-chapter__item no-chapter acgn-thrid__advertbox" style="width:{0}px">{1}</div>', e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.checkRun() && this.installTaps(["runChapterImageSlot"])
                        }
                    }, {
                        key: "checkRun",
                        value: function () {
                            if (!window._ACGN_P) return !1;
                            var t, e = l(this.options.checkKeys);
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value;
                                    if (window._ACGN_P[n]) return !0
                                }
                            } catch (i) {
                                e.e(i)
                            } finally {
                                e.f()
                            }
                            return !1
                        }
                    }, {
                        key: "installTemplate",
                        value: function (t) {
                            return this.tplAdvert || (this.tplAdvert = this.baseTemplate.format(t, this.template)), this.formatFn(this.tplAdvert)
                        }
                    }, {
                        key: "makeAdverInfo",
                        value: function () {
                            var t = this;
                            setTimeout(function () {
                                t.setAdvertDomInfo() || t.timerCount > 60 || (t.makeAdverInfo(), t.timerCount++)
                            }, 1e3)
                        }
                    }, {
                        key: "setAdvertDomInfo",
                        value: function () {
                            var e = t(".acgn-thrid__advertbox").first().height();
                            return 0 !== e && (this.height = e, this.updateImgSlot(), !0)
                        }
                    }, {
                        key: "updateImgSlot",
                        value: function () {
                            var t = this;
                            this.states.chapterImageList.forEach(function (e) {
                                e.slots.forEach(function (e) {
                                    e.type, t.types.advert, e.height = t.height
                                })
                            }), this.$emit.call("updateImageDistance")
                        }
                    }, {
                        key: "runChapterImageSlot",
                        value: function (t) {
                            if (t.isLast) {
                                var e = this.states.fillInfo.fillWidth,
                                    n = this.installTemplate(e),
                                    i = this.$reader.entitys.getImageSlot({
                                        type: this.types.advert,
                                        width: e,
                                        height: this.height,
                                        template: n
                                    });
                                t.slots.push(i), this.inited || (this.inited = !0, this.makeAdverInfo())
                            }
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = d
            }).call(this, n("+2Rf"))
        },
        "7W2i": function (t, e, n) {
            var i = n("SksO");
            t.exports = function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && i(t, e)
            }
        },
        "8OQS": function (t, e) {
            t.exports = function (t, e) {
                if (null == t) return {};
                var n, i, r = {},
                    a = Object.keys(t);
                for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
                return r
            }
        },
        "8a7r": function (t, e, n) {
            "use strict";
            var i = n("hswa"),
                r = n("RjD/");
            t.exports = function (t, e, n) {
                e in t ? i.f(t, e, r(0, n)) : t[e] = n
            }
        },
        "9ljg": function (t, e, n) {},
        A7l5: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("I5cv"), n("VRzm"), n("Btvt");
                var r = i(n("o0o1"));
                n("eM6i"), n("ls82");
                var a = i(n("yXPU"));
                n("Tze0"), n("f3/d");
                var o = i(n("lwsE")),
                    s = i(n("W8MJ")),
                    c = i(n("iWIM")),
                    u = i(n("7W2i")),
                    l = i(n("a1gu")),
                    h = i(n("Nsbk"));

                function f(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, h["default"])(t);
                        if (e) {
                            var r = (0, h["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, l["default"])(this, n)
                    }
                }
                var d = function (e) {
                    (0, u["default"])(i, e);
                    var n = f(i);

                    function i(e) {
                        var r;
                        return (0, o["default"])(this, i), (r = n.call(this, e)).name = "互动插件基类", r.isCollected = !1, r.bookCollectModule = null, r.sendThingsModule = null, r.comicRecordModule = null, r.shareModule = null, r.tplInteract = t("#tpl_interact").html().trim(), r.tplInteractExtendOver = t("#tpl_interactExtendOver").html().trim(), r.tplInteractExtendNext = t("#tpl_interactExtendNext").html().trim(), r.template = '<div class="acgn-reader-chapter__item no-chapter acgn-chapter__interact {0}" style="width:{1}px">{2}</div>', r
                    }
                    return (0, s["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, c["default"])((0, h["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["runChapterImageSlot"]), this.initTemplate(), this.initEvent(), this.initModules(), this.initCollectionInfo()
                        }
                    }, {
                        key: "initTemplate",
                        value: function () {
                            var t = ACGN.util.getTimeSpan(this.states.comicInfo.comicUpdateTime, "yyyy.MM.dd");
                            this.tplInteractExtendOver = this.tplInteractExtendOver.format(t), this.tplInteractExtendNext = this.tplInteractExtendNext.format(t)
                        }
                    }, {
                        key: "initModules",
                        value: function () {
                            var t = this.modules,
                                e = t.ComicRecord,
                                n = t.SendThings,
                                i = t.Share;
                            e && (this.comicRecordModule = this.$utils.getInstance(e)), n && (this.sendThingsModule = this.$utils.getInstance(n)), i && (this.shareModule = this.$utils.getInstance(i))
                        }
                    }, {
                        key: "doCollection",
                        value: function () {
                            var t = (0, a["default"])(r["default"].mark(function e() {
                                var t;
                                return r["default"].wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (ACGN.isLogin()) {
                                                e.next = 3;
                                                break
                                            }
                                            return ACGN.$eventHub.trigger("EV_SHOW_LOGIN"), e.abrupt("return");
                                        case 3:
                                            if (!this.isCollected) {
                                                e.next = 6;
                                                break
                                            }
                                            return ACGN.layer.toast("已收藏!"), e.abrupt("return");
                                        case 6:
                                            if (e.t0 = !this.bookCollectModule, !e.t0) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 10, this.initCollectionModule();
                                        case 10:
                                            e.t0 = !e.sent;
                                        case 11:
                                            if (!e.t0) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 13:
                                            t = this.states.comicInfo, this.bookCollectModule.initShow([{
                                                comic_id: t.comicId,
                                                comic_name: t.comicName,
                                                last_chapter_id: t.comicLastChapterId,
                                                last_chapter_name: t.comicLastChapterName,
                                                read_time: Date.now(),
                                                update_time: t.comicUpdateTime
                                            }]);
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "initCollectionInfo",
                        value: function () {
                            var t = this;
                            this.comicRecordModule.getUserCollect({
                                comic_id: this.states.comicInfo.comicId
                            }, function (e, n) {
                                !e && n && (t.isCollected = !0, t.updateCollectedDom())
                            })
                        }
                    }, {
                        key: "initCollectionModule",
                        value: function () {
                            var t = this;
                            return new Promise(function (e) {
                                ACGN.user.getUserInfo({}, function (n, i) {
                                    if (n) return ACGN.layer.toast("请先登录后再操作!"), void e(!1);
                                    var r = t.modules.BookCollect;
                                    t.bookCollectModule = new r({
                                        userInfo: i,
                                        collectCallback: function () {
                                            t.updateCollectedDom(), t.isCollected = !0, ACGN.layer.toast("已添加至 我的收藏!")
                                        }
                                    }), e(!0)
                                })
                            })
                        }
                    }, {
                        key: "doSendAppreciate",
                        value: function () {
                            var t = this;
                            ACGN.isLogin() ? ACGN.user.getUserInfo({}, function (e, n) {
                                e ? ACGN.layer.toast("请先登录后再操作!") : t.sendThingsModule.sendAppreciate({
                                    openid: n.openid,
                                    type: n.type,
                                    comicId: t.states.comicInfo.comicId
                                })
                            }) : ACGN.$eventHub.trigger("EV_SHOW_LOGIN")
                        }
                    }, {
                        key: "updateCollectedDom",
                        value: function () {
                            t(".icon-read-collection").removeClass("icon-read-collection").addClass("icon-read-collection-active"), t('[collecte-booktext="1"]').text("已收藏")
                        }
                    }, {
                        key: "installTemplate",
                        value: function (t, e) {
                            var n = ACGN.ejs.render(this.getSlotTpl(t.chapterId), {
                                comicInfo: this.states.comicInfo,
                                isCollected: this.isCollected
                            });
                            return this.template.format(this.isLastChapter(t.chapterId) ? "is-last-chapter" : "", e, n)
                        }
                    }, {
                        key: "isLastChapter",
                        value: function (t) {
                            return t === this.states.comicInfo.comicLastChapterId
                        }
                    }, {
                        key: "getSlotTpl",
                        value: function (t) {
                            var e = this.states.comicInfo.comicStatus;
                            return this.isLastChapter(t) ? 1 === e ? this.tplInteract + this.tplInteractExtendNext : this.tplInteract + this.tplInteractExtendOver : this.tplInteract
                        }
                    }, {
                        key: "runChapterImageSlot",
                        value: function (t) {
                            this.installSlot(t)
                        }
                    }, {
                        key: "installSlot",
                        value: function (t) {
                            if (t.isLast) {
                                var e = this.states.fillInfo.fillWidth,
                                    n = this.installTemplate(t, e),
                                    i = this.$reader.entitys.getImageSlot({
                                        type: this.types.interact,
                                        width: e,
                                        height: this.getSlotHeight(t.chapterId),
                                        template: n
                                    });
                                t.slots.push(i)
                            }
                        }
                    }, {
                        key: "initEvent",
                        value: function () {}
                    }, {
                        key: "updateCollectedDom",
                        value: function () {}
                    }, {
                        key: "getSlotHeight",
                        value: function () {}
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = d
            }).call(this, n("+2Rf"))
        },
        AcyU: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("HAE/"), n("WLL4"), n("jm62"), n("0l/t"), n("ioFf"), n("rGqo"), n("yt8O"), n("RW0V"), n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("DNiP"), n("dRSK"), n("XfO3"), n("HEwt"), n("8+KV");
            var r = i(n("lSNA"));
            n("f3/d");
            var a = i(n("lwsE")),
                o = i(n("W8MJ")),
                s = i(n("iWIM")),
                c = i(n("7W2i")),
                u = i(n("a1gu")),
                l = i(n("Nsbk"));

            function h(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function f(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, l["default"])(t);
                    if (e) {
                        var r = (0, l["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, u["default"])(this, n)
                }
            }
            var d = function (t) {
                (0, c["default"])(n, t);
                var e = f(n);

                function n(t) {
                    var i;
                    return (0, a["default"])(this, n), (i = e.call(this, t)).name = "竖向阅读插件", i
                }
                return (0, o["default"])(n, [{
                    key: "apply",
                    value: function (t) {
                        (0, s["default"])((0, l["default"])(n.prototype), "apply", this).call(this, t)
                    }
                }, {
                    key: "installSelfTaps",
                    value: function () {
                        this.installTaps(["directChapterDistance", "afterScaleChange"])
                    }
                }, {
                    key: "initSelfEvent",
                    value: function () {
                        var t = this;
                        this.container.on("scroll", function (e) {
                            t.onScroll()
                        })
                    }
                }, {
                    key: "directChapterDistance",
                    value: function (t) {
                        this.moveTo(t)
                    }
                }, {
                    key: "afterScaleChange",
                    value: function () {
                        this.refreshScale()
                    }
                }, {
                    key: "refreshScale",
                    value: function () {
                        var t = this,
                            e = function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? h(Object(n), !0).forEach(function (e) {
                                        (0, r["default"])(t, e, n[e])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    })
                                }
                                return t
                            }({}, this.currentScroll),
                            n = this.getChapterImageDistance(e.chapter, e.chapterImageIndex, 0);
                        this.states.chapterImageList.forEach(function (e) {
                            t.resizeImg(e)
                        }), this.updateDistance(), this.refreshDom(), this.refreshScroll(e, n)
                    }
                }, {
                    key: "refreshScroll",
                    value: function (t, e) {
                        var n = t.distance,
                            i = t.chapter,
                            r = t.chapterImageIndex,
                            a = e - n,
                            o = this.getChapterImageDistance(i, r, 0);
                        this.safeMove(o - a)
                    }
                }, {
                    key: "refreshDom",
                    value: function () {
                        for (var t, e = this, n = document.createDocumentFragment(), i = this.boxContainer[0]; t = i.firstElementChild || i.firstChild;) n.appendChild(t);
                        Array.from(n.querySelectorAll(".acgn-reader-chapter__swiper-box")).forEach(function (t) {
                            var n = t.getAttribute("chapter-index") - 0,
                                i = t.getAttribute("chapter-pid"),
                                r = e.states.chapterImageList.find(function (t) {
                                    return t.chapterId === i && t.index === n
                                });
                            t.style.width = r.showWidth + "px", r.showHeight && (t.style.height = r.showHeight + "px")
                        }), i.appendChild(n)
                    }
                }, {
                    key: "canRun",
                    value: function () {
                        return this.isV
                    }
                }, {
                    key: "getRelationList",
                    value: function (t) {
                        return t
                    }
                }, {
                    key: "installResizeImg",
                    value: function (t) {
                        var e = t.imgObj,
                            n = e.width,
                            i = e.height,
                            r = Math.min(n, this.getWrapBoxWidth()),
                            a = Math.floor(r / n * i),
                            o = r * this.states.scaleRatio,
                            s = Math.floor(o / n * i);
                        t.originWidth = n, t.originHeight = i, t.originShowWidth = r, t.originShowHeight = a, t.showWidth = o, t.showHeight = s
                    }
                }, {
                    key: "resizeImg",
                    value: function (t) {
                        var e = t.originShowWidth,
                            n = t.originShowHeight,
                            i = (e = e || this.getWrapBoxWidth()) * this.states.scaleRatio,
                            r = Math.floor(i / e * n);
                        t.showWidth = i, t.showHeight = r
                    }
                }, {
                    key: "installChapterDom",
                    value: function (t, e) {
                        this.boxContainer[t ? "prepend" : "append"](e)
                    }
                }, {
                    key: "installSlotStr",
                    value: function (t, e, n) {
                        return t + e + n
                    }
                }, {
                    key: "onScroll",
                    value: function () {
                        var t = this.currentScroll.distance,
                            e = this.container.scrollTop(),
                            n = e < t;
                        this.currentScroll.isPrev = n, this.currentScroll.distance = this.states.currentDistance = e, n && e <= 0 && !this.hasMoreChapter() ? ACGN.layer.toast("已经是第一章了！") : !n && e + this.fillInfo.fillHeight >= this.states.totalDistance && !this.hasMoreChapter(!0) ? ACGN.layer.toast("已经是最新一章了！") : (this.updateCurrentChapter(e), this.$emit.call("onContainerScroll"))
                    }
                }, {
                    key: "getPerDistance",
                    value: function (t) {
                        return t.slots.reduce(function (t, e) {
                            return t + e.height
                        }, 0) + (t.showHeight ? t.showHeight + this.options.perImageDistance : this.options.defaultDistanceV)
                    }
                }, {
                    key: "updateDistance",
                    value: function () {
                        var t = this,
                            e = 0;
                        this.states.chapterImageList.forEach(function (n) {
                            e += t.getPerDistance(n), n.endDistance = e
                        }), this.states.totalDistance = e
                    }
                }, {
                    key: "repairSingleHeight",
                    value: function (t, e) {
                        var n = this.options.defaultDistanceV - e.showHeight;
                        this.safeMove(t - n)
                    }
                }, {
                    key: "safeMove",
                    value: function (t) {
                        var e = this;
                        this.container.addClass("none-scroll"), this.states.isKeepMenu = !0, this.moveTo(t), setTimeout(function () {
                            e.container.removeClass("none-scroll"), e.states.isKeepMenu = !1
                        }, 500)
                    }
                }, {
                    key: "repairPrevMove",
                    value: function (t) {
                        this.safeMove(t)
                    }
                }, {
                    key: "moveTo",
                    value: function (t) {
                        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        arguments.length > 2 && arguments[2] !== undefined && arguments[2];
                        this.container.animate({
                            scrollTop: t
                        }, e)
                    }
                }, {
                    key: "$options",
                    get: function () {
                        return {
                            initPreloadNum: 1,
                            defaultDistanceV: 720,
                            imageSwitchDistance: 300,
                            perImageDistance: 0,
                            preloadChapterScope: 5,
                            directImageDistance: 3,
                            verticalWidth: null,
                            initVerticalWidth: null,
                            internalVerticalWidth: 600
                        }
                    }
                }]), n
            }(i(n("kMti"))["default"]);
            e["default"] = d
        },
        Bnag: function (t, e) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        Cbd8: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv");
                var r = i(n("cDf5"));
                n("Tze0"), n("f3/d");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ")),
                    s = i(n("iWIM")),
                    c = i(n("7W2i")),
                    u = i(n("a1gu")),
                    l = i(n("Nsbk"));

                function h(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, l["default"])(t);
                        if (e) {
                            var r = (0, l["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, u["default"])(this, n)
                    }
                }
                var f = function (e) {
                    (0, c["default"])(i, e);
                    var n = h(i);

                    function i(e) {
                        var r;
                        return (0, a["default"])(this, i), (r = n.call(this, e)).name = "弹幕模块基类", r.dmSpeed = r.options.dmSpeed, r.danmuModule = null, r.cacheUser = null, r.cacheToken = null, r.cacheData = {}, r.isSending = !1, r.tplDm = t("#tpl_chapterDm").html().trim(), r.dmScreenDom = t("#js_dmScreen"), r.countDom = t("#js_dmCount"), r.isShowDm = !1, r
                    }
                    return (0, o["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, s["default"])((0, l["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterEntryInit", "afterChapterImageIndexChange"]), this.initModules(), this.installHistoryInfo(), this.initSelf()
                        }
                    }, {
                        key: "afterChapterImageIndexChange",
                        value: function () {
                            this.setChapterDm()
                        }
                    }, {
                        key: "initModules",
                        value: function () {
                            var t = this.modules.Bullets;
                            t && (this.danmuModule = new t(this.dmScreenDom, {
                                speed: this.dmSpeed,
                                max: 12
                            }))
                        }
                    }, {
                        key: "afterEntryInit",
                        value: function () {
                            var t = this;
                            ACGN.user.getUserInfo({}, function (e, n) {
                                !e && ACGN.isLogin() && (t.showMenuDom(), t.cacheUser = n, t.getDmToken(function () {
                                    t.setChapterDm()
                                }))
                            })
                        }
                    }, {
                        key: "installHistoryInfo",
                        value: function () {
                            var t = JSON.parse(ACGN.util.cookie(this.types.cookieHabit)) || {};
                            t.danmu ? this.setDanMuState(t.danmu) : this.hideDmUi()
                        }
                    }, {
                        key: "setDanMuState",
                        value: function (t) {
                            this.states.danmu = this.isShowDm = t, this.$utils.setHabit(this.types.cookieHabit, "danmu", t)
                        }
                    }, {
                        key: "getDmToken",
                        value: function (t) {
                            var e = this;
                            ACGN.ajax({
                                url: this.options.api.gettokeninfo,
                                type: "get",
                                data: {
                                    type: this.cacheUser.type,
                                    openid: this.cacheUser.openid
                                },
                                dataType: "json"
                            }, function (n, i) {
                                n || i.token && i.appid && (e.cacheToken = {
                                    token: i.token,
                                    appId: i.appid
                                }, t())
                            })
                        }
                    }, {
                        key: "setChapterDm",
                        value: function () {
                            var t = this,
                                e = this.states.currentChapter;
                            this.fetchDmData(e, function (e) {
                                e && (t.showCountText(), t.shoot(), t.isShowDm && t.danmuModule.play())
                            })
                        }
                    }, {
                        key: "showCountText",
                        value: function () {
                            var t = this.states,
                                e = t.currentChapter.chapterId,
                                n = t.currentChapterImageIndex,
                                i = this.cacheData[e],
                                r = i ? i[n - 1] : null,
                                a = r && r.data.length || 0;
                            this.countDom.text(a > 99 ? "99+" : a)
                        }
                    }, {
                        key: "shoot",
                        value: function () {
                            var t = this.states,
                                e = t.currentChapter,
                                n = t.currentChapterImageIndex,
                                i = e.chapterId,
                                a = n - 1,
                                o = this.cacheData[i];
                            if (this.danmuModule.removeBullets(), o && "object" === (0, r["default"])(o) && o[a] && o[a].data && o[a].data.length) {
                                for (var s = o[a].data, c = [], u = 0; u < s.length; u++) c[u] = {
                                    data: s[u],
                                    template: this.tplDm
                                };
                                this.danmuModule.addBullets(c)
                            }
                        }
                    }, {
                        key: "fetchDmData",
                        value: function (t, e) {
                            var n = this,
                                i = t.chapterId,
                                a = t.startPage,
                                o = t.endPage;
                            return this.cacheToken ? this.cacheData[i] ? "object" !== (0, r["default"])(this.cacheData[i]) ? e(!1) : e(!0) : (this.cacheData[i] = "loading", void ACGN.ajax({
                                url: this.options.api.getBarrage,
                                type: "get",
                                data: {
                                    appId: this.cacheToken.appId,
                                    sourceId: this.states.comicInfo.comicId + "_" + i,
                                    order: 1,
                                    startPageId: a,
                                    endPageId: o
                                }
                            }, function (t, r) {
                                if (t) return e(!1);
                                n.transferData(r), n.cacheData[i] = r, e(!0)
                            })) : e(!1)
                        }
                    }, {
                        key: "transferData",
                        value: function (t) {
                            for (var e = 0; e < t.length; e++)
                                for (var n = 0; n < t[e].data.length; n++) t[e].data[n].face = ACGN.util.getHeadCover(siteConf, t[e].data[n].uId), t[e].data[n].isVIP !== undefined && null !== t[e].data[n].isVIP || (t[e].data[n].isVIP = 0)
                        }
                    }, {
                        key: "sendDm",
                        value: function (t, e) {
                            var n = this;
                            if (this.isSending) ACGN.layer.toast("弹幕正在发送中，请稍候再试！");
                            else {
                                this.isSending = !0;
                                var i = this.cacheUser,
                                    r = i.Uid,
                                    a = i.isvip,
                                    o = this.states,
                                    s = o.currentChapter.chapterId,
                                    c = o.currentChapterImageIndex,
                                    u = {
                                        uId: r,
                                        token: this.cacheToken.token,
                                        sourceId: this.states.comicInfo.comicId + "_" + s,
                                        pageId: c,
                                        fontColor: "ffffff",
                                        isVIP: a,
                                        msg: t
                                    };
                                ACGN.ajax({
                                    url: this.options.api.sendBarrage,
                                    type: "post",
                                    data: u,
                                    dataType: "json"
                                }, function (i, o) {
                                    if (n.isSending = !1, i) return e(!1, i);
                                    n.insertDm({
                                        face: ACGN.util.getHeadCover(siteConf, r),
                                        fontColor: "ffffff",
                                        fontSize: "",
                                        isVIP: a,
                                        msg: t,
                                        uId: r
                                    }), e(!0)
                                }), this.sendCnzzEvent("发送弹幕")
                            }
                        }
                    }, {
                        key: "swichDm",
                        value: function () {
                            this.isShowDm ? (this.danmuModule.stop(), this.danmuModule.clear(), this.setDanMuState(!1), this.sendCnzzEvent("切换弹幕关")) : (this.danmuModule.play(), this.setDanMuState(!0), this.sendCnzzEvent("切换弹幕开")), this.selfDmSwitch()
                        }
                    }, {
                        key: "insertDm",
                        value: function (t) {
                            if ("object" !== (0, r["default"])(t)) return !1;
                            var e = this.states,
                                n = e.currentChapter,
                                i = e.currentChapterImageIndex,
                                a = n.chapterId,
                                o = i - 1,
                                s = this.cacheData[a];
                            s && "object" === (0, r["default"])(s) && s[o].data.splice(0, 0, t), this.danmuModule.insertNewBullet({
                                data: t,
                                template: this.tplDm
                            })
                        }
                    }, {
                        key: "initSelf",
                        value: function () {}
                    }, {
                        key: "showMenuDom",
                        value: function () {}
                    }, {
                        key: "selfDmSwitch",
                        value: function () {}
                    }, {
                        key: "hideDmUi",
                        value: function () {}
                    }, {
                        key: "$options",
                        get: function () {
                            return {
                                dmSpeed: 6,
                                api: {
                                    gettokeninfo: "/api/gettokeninfo",
                                    getBarrage: "/api/getBarrage",
                                    sendBarrage: "/api/sendBarrage/"
                                }
                            }
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = f
            }).call(this, n("+2Rf"))
        },
        DOXx: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "亮度设置", a.nightModeStr = "nightMode", a.isDark = null, a.nightDom = t("#js_nightMode"), a.dayDom = t("#js_dayMode"), a.readerContainerDom = t("#readerContainer"), a
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.installHistoryInfo(), this.refresh(), this.initEvent()
                        }
                    }, {
                        key: "installHistoryInfo",
                        value: function () {
                            var t = ACGN.util.cookie(this.nightModeStr);
                            null !== t && t !== undefined && (t = t ? parseInt(t) : 0, this.isDark = t)
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            n.on("click", "#js_nightMode", function () {
                                e.change()
                            }), n.on("click", "#js_dayMode", function () {
                                e.change()
                            })
                        }
                    }, {
                        key: "change",
                        value: function () {
                            null === this.isDark ? this.isDark = 1 : this.isDark = this.isDark ? 0 : 1, this.refresh(), this.sendCnzzEvent("亮度模式切换_".concat(this.isDark)), ACGN.util.cookie(this.nightModeStr, this.isDark, {
                                expires: 24
                            })
                        }
                    }, {
                        key: "refresh",
                        value: function () {
                            var t = this.isDark;
                            if (null === t) {
                                var e = ((new Date).getUTCHours() + 8) % 24;
                                t = e > 7 && e < 19 ? 0 : 1, this.isDark = t
                            }
                            t ? (this.readerContainerDom.addClass("night"), this.nightDom.hide(), this.dayDom.show()) : (this.dayDom.hide(), this.nightDom.show(), this.readerContainerDom.removeClass("night"))
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        EbDI: function (t, e) {
            t.exports = function (t) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
            }
        },
        EkJ7: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("7W2i")),
                s = i(n("a1gu")),
                c = i(n("Nsbk"));

            function u(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, c["default"])(t);
                    if (e) {
                        var r = (0, c["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, s["default"])(this, n)
                }
            }
            var l = n("etg0"),
                h = new(function (t) {
                    (0, o["default"])(n, t);
                    var e = u(n);

                    function n() {
                        return (0, r["default"])(this, n), e.apply(this, arguments)
                    }
                    return (0, a["default"])(n, [{
                        key: "content",
                        value: function (t) {
                            var e = t.onError,
                                n = t.onDone,
                                i = t.rethrowIfPossible;
                            return this.callTapsSeries({
                                onError: function (t, n) {
                                    return e(n)
                                },
                                onDone: n,
                                rethrowIfPossible: i
                            })
                        }
                    }]), n
                }(n("nNe2"))),
                f = function (t) {
                    (0, o["default"])(n, t);
                    var e = u(n);

                    function n() {
                        return (0, r["default"])(this, n), e.apply(this, arguments)
                    }
                    return (0, a["default"])(n, [{
                        key: "tapAsync",
                        value: function () {
                            throw new Error("tapAsync is not supported on a SyncHook")
                        }
                    }, {
                        key: "tapPromise",
                        value: function () {
                            throw new Error("tapPromise is not supported on a SyncHook")
                        }
                    }, {
                        key: "compile",
                        value: function (t) {
                            return h.setup(this, t), h.create(t)
                        }
                    }]), n
                }(l);
            t.exports = f
        },
        GZEu: function (t, e, n) {
            var i, r, a, o = n("m0Pp"),
                s = n("MfQN"),
                c = n("+rLv"),
                u = n("Iw71"),
                l = n("dyZX"),
                h = l.process,
                f = l.setImmediate,
                d = l.clearImmediate,
                p = l.MessageChannel,
                v = l.Dispatch,
                m = 0,
                y = {},
                g = function () {
                    var t = +this;
                    if (y.hasOwnProperty(t)) {
                        var e = y[t];
                        delete y[t], e()
                    }
                },
                I = function (t) {
                    g.call(t.data)
                };
            f && d || (f = function (t) {
                for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
                return y[++m] = function () {
                    s("function" == typeof t ? t : Function(t), e)
                }, i(m), m
            }, d = function (t) {
                delete y[t]
            }, "process" == n("LZWt")(h) ? i = function (t) {
                h.nextTick(o(g, t, 1))
            } : v && v.now ? i = function (t) {
                v.now(o(g, t, 1))
            } : p ? (a = (r = new p).port2, r.port1.onmessage = I, i = o(a.postMessage, a, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function (t) {
                l.postMessage(t + "", "*")
            }, l.addEventListener("message", I, !1)) : i = "onreadystatechange" in u("script") ? function (t) {
                c.appendChild(u("script")).onreadystatechange = function () {
                    c.removeChild(this), g.call(t)
                }
            } : function (t) {
                setTimeout(o(g, t, 1), 0)
            }), t.exports = {
                set: f,
                clear: d
            }
        },
        H6hf: function (t, e, n) {
            var i = n("y3w9");
            t.exports = function (t, e, n, r) {
                try {
                    return r ? e(i(n)[0], n[1]) : e(n)
                } catch (o) {
                    var a = t["return"];
                    throw a !== undefined && i(a.call(t)), o
                }
            }
        },
        HEwt: function (t, e, n) {
            "use strict";
            var i = n("m0Pp"),
                r = n("XKFU"),
                a = n("S/j/"),
                o = n("H6hf"),
                s = n("M6Qj"),
                c = n("ne8i"),
                u = n("8a7r"),
                l = n("J+6e");
            r(r.S + r.F * !n("XMVh")(function (t) {
                Array.from(t)
            }), "Array", {
                from: function (t) {
                    var e, n, r, h, f = a(t),
                        d = "function" == typeof this ? this : Array,
                        p = arguments.length,
                        v = p > 1 ? arguments[1] : undefined,
                        m = v !== undefined,
                        y = 0,
                        g = l(f);
                    if (m && (v = i(v, p > 2 ? arguments[2] : undefined, 2)), g == undefined || d == Array && s(g))
                        for (n = new d(e = c(f.length)); e > y; y++) u(n, y, m ? v(f[y], y) : f[y]);
                    else
                        for (h = g.call(f), n = new d; !(r = h.next()).done; y++) u(n, y, m ? o(h, v, [r.value, y], !0) : r.value);
                    return n.length = y, n
                }
            })
        },
        HTiG: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0;
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = function () {
                        function e(n, i) {
                            var a = this;
                            if ((0, r["default"])(this, e), this.elem = t(n), !this.elem.length || !this.elem.hasClass("rd-turning")) throw Error("no elem:" + n);
                            this._status = !!i, this.elem[this._status ? "addClass" : "removeClass"]("turning-on"), this.elem.on("click", function (t) {
                                a.val(!a._status), a._callback(a._status)
                            })
                        }
                        return (0, a["default"])(e, [{
                            key: "val",
                            value: function (t) {
                                return t !== undefined && t !== this._status ? (this._status = !this._status, this.elem[this._status ? "addClass" : "removeClass"]("turning-on"), null) : this._status
                            }
                        }, {
                            key: "bind",
                            value: function (t) {
                                "function" == typeof t && (this._callback = t)
                            }
                        }]), e
                    }();
                e["default"] = o
            }).call(this, n("+2Rf"))
        },
        I5cv: function (t, e, n) {
            var i = n("XKFU"),
                r = n("Kuth"),
                a = n("2OiF"),
                o = n("y3w9"),
                s = n("0/R4"),
                c = n("eeVq"),
                u = n("8MEG"),
                l = (n("dyZX").Reflect || {}).construct,
                h = c(function () {
                    function t() {}
                    return !(l(function () {}, [], t) instanceof t)
                }),
                f = !c(function () {
                    l(function () {})
                });
            i(i.S + i.F * (h || f), "Reflect", {
                construct: function (t, e) {
                    a(t), o(e);
                    var n = arguments.length < 3 ? t : a(arguments[2]);
                    if (f && !h) return l(t, e, n);
                    if (t == n) {
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3])
                        }
                        var i = [null];
                        return i.push.apply(i, e), new(u.apply(t, i))
                    }
                    var c = n.prototype,
                        d = r(s(c) ? c : Object.prototype),
                        p = Function.apply.call(t, d, e);
                    return s(p) ? p : d
                }
            })
        },
        IDzT: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("OG14"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "4399模块", e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.init()
                        }
                    }, {
                        key: "init",
                        value: function () {
                            /referer\=4399/g.test(location.search) && t("#js_guessSidebarBtn,#js_dmBox,#js_footMenu,#js_headMenu").remove()
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        INYr: function (t, e, n) {
            "use strict";
            var i = n("XKFU"),
                r = n("CkkT")(6),
                a = "findIndex",
                o = !0;
            a in [] && Array(1)[a](function () {
                o = !1
            }), i(i.P + i.F * o, "Array", {
                findIndex: function (t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : undefined)
                }
            }), n("nGyu")(a)
        },
        IenY: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("eM6i"), n("f3/d");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("iWIM")),
                s = i(n("7W2i")),
                c = i(n("a1gu")),
                u = i(n("Nsbk"));

            function l(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, u["default"])(t);
                    if (e) {
                        var r = (0, u["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, c["default"])(this, n)
                }
            }
            var h = function (t) {
                (0, s["default"])(n, t);
                var e = l(n);

                function n(t) {
                    var i;
                    return (0, r["default"])(this, n), (i = e.call(this, t)).name = "历史记录", i.recordModule = null, i
                }
                return (0, a["default"])(n, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, u["default"])(n.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterIndexChange", "afterChapterImageIndexChange", "afterEntryInit"]), this.initModules(), this.installHistoryInfo()
                    }
                }, {
                    key: "afterEntryInit",
                    value: function () {
                        var t = this,
                            e = this.states,
                            n = e.comicInfo,
                            i = e.currentChapterImageIndex,
                            r = e.currentChapter;
                        this.recordModule.getReadHistory({
                            comic_id: n.comicId
                        }, function (e, n) {
                            if (!e && (t.afterChapterIndexChange(), n && r.chapterId === n.chapter_newid)) {
                                var a = n.chapter_page,
                                    o = void 0 === a ? 1 : a;
                                o !== i && setTimeout(function () {
                                    t.$emit.call("directChapterImageIndex", {
                                        index: o,
                                        duration: 300
                                    })
                                })
                            }
                        })
                    }
                }, {
                    key: "initModules",
                    value: function () {
                        var t = this.modules.ComicRecord;
                        t && (this.recordModule = this.$utils.getInstance(t))
                    }
                }, {
                    key: "installHistoryInfo",
                    value: function () {
                        var t = this.states.comicInfo;
                        this.recordModule.getReadHistory({
                            comic_id: t.comicId
                        }, function (t, e) {})
                    }
                }, {
                    key: "afterChapterIndexChange",
                    value: function () {
                        this.recordModule && this.handleRecord(!0)
                    }
                }, {
                    key: "afterChapterImageIndexChange",
                    value: function () {
                        this.recordModule && this.handleRecord(!1)
                    }
                }, {
                    key: "handleRecord",
                    value: function (t) {
                        var e = this.states,
                            n = e.comicInfo,
                            i = e.currentChapter,
                            r = e.currentChapterImageIndex,
                            a = {
                                comic_id: n.comicId,
                                comic_newid: n.comicNewId,
                                comic_name: n.comicName,
                                chapter_id: i.chapterNatureId,
                                chapter_newid: i.chapterId,
                                chapter_name: i.chapterName,
                                read_time: Date.now(),
                                chapter_page: r,
                                last_chapter_id: n.comicLastChapterNatureId,
                                last_chapter_newid: n.comicLastChapterId,
                                last_chapter_name: n.comicLastChapterName
                            };
                        this.recordModule.addReadHistory(a, !!t, function (t, e) {})
                    }
                }]), n
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        Ijbi: function (t, e, n) {
            var i = n("WkPL");
            t.exports = function (t) {
                if (Array.isArray(t)) return i(t)
            }
        },
        JRrf: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("2Spj"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk")),
                    l = i(n("W/Tl")),
                    h = i(n("3P17"));

                function f(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var d = function (e) {
                    (0, s["default"])(i, e);
                    var n = f(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "章节滑块", a.swiperTxtDom = t("#js_pageInfoText"), a
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterImageIndexChange"]), this.initLightProgress(), this.initEvent(), this.setDirectChapterStyle()
                        }
                    }, {
                        key: "afterChapterImageIndexChange",
                        value: function () {
                            this.update()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            t("#js_pagePrevBtn").on("click", function () {
                                var t = !!e.states.isSwiperReverse;
                                e.directChapter(t), e.setDirectChapterStyle(), e.sendCnzzEvent("上一话")
                            }), t("#js_pageNextBtn").on("click", function () {
                                var t = !e.states.isSwiperReverse;
                                e.directChapter(t), e.setDirectChapterStyle(), e.sendCnzzEvent("下一话")
                            })
                        }
                    }, {
                        key: "setDirectChapterStyle",
                        value: function () {
                            var e = this.states.currentChapter,
                                n = e.nextChapterId,
                                i = e.prevChapterId,
                                r = !!this.states.isSwiperReverse;
                            t("#js_pageNextBtn").removeClass("disabled"), t("#js_pagePrevBtn").removeClass("disabled"), n || t("#".concat(r ? "js_pagePrevBtn" : "js_pageNextBtn")).addClass("disabled"), i || t("#".concat(r ? "js_pageNextBtn" : "js_pagePrevBtn")).addClass("disabled")
                        }
                    }, {
                        key: "directChapter",
                        value: function (t) {
                            var e = this,
                                n = this.states.currentChapter,
                                i = n.nextChapterId,
                                r = n.prevChapterId,
                                a = n.isLock,
                                o = t ? i : r,
                                s = this.states.chapterListMap[r];
                            o ? a && (t || s && s.isLock) ? ACGN.layer.toast("当前章节需要付费，不支持切换章节") : (this.states.isKeepMenu = !0, this.$emit.call("directChapterIndex", {
                                chapterId: o,
                                isNext: t
                            }), setTimeout(function () {
                                e.update(), e.states.isKeepMenu = !1
                            }, 500)) : ACGN.layer.toast(t ? "已经是最新一章了" : "已经是第一章了")
                        }
                    }, {
                        key: "update",
                        value: function () {
                            var t = this.getSplitInfo(),
                                e = t.all,
                                n = t.index,
                                i = this.$utils.toolGetNumSplit(n, e),
                                r = this.pagePro.now();
                            (r < i[0] || r > i[2]) && this.pagePro.update(i[1]), this.swiperTxtDom.text(n + "/" + e)
                        }
                    }, {
                        key: "initLightProgress",
                        value: function () {
                            var t = this;
                            this.pagePro = new h["default"]("#js_pageProgress", 1), this.pagePro.bind(function (e) {
                                var n = t.getSplitInfo(),
                                    i = n.all,
                                    r = n.index,
                                    a = n.totalPage,
                                    o = t.$utils.toolGetPercentSplit(e, i);
                                if (o !== r) {
                                    o > r ? t.pagePro.update(e + 1) : t.pagePro.update(e - 1), t.swiperTxtDom.text(o + "/" + i), t.states.isKeepMenu = !0;
                                    var s = o * t.swiperImageNum;
                                    s = s > a ? a : s, t.$emit.call("directChapterImageIndex", {
                                        index: s
                                    })
                                }
                            }), this.pagePro.touchEnd(function (e) {
                                e && t.sendCnzzEvent("滑块拖动"), setTimeout(function () {
                                    t.states.isKeepMenu = !1
                                }, 500)
                            }), this.update()
                        }
                    }, {
                        key: "getSplitInfo",
                        value: function () {
                            var t = this.states,
                                e = t.currentChapter.totalPage,
                                n = t.currentChapterImageIndex;
                            return {
                                totalPage: e,
                                currentChapterImageIndex: n,
                                all: Math.ceil(e / this.swiperImageNum),
                                index: Math.ceil(n / this.swiperImageNum)
                            }
                        }
                    }, {
                        key: "swiperImageNum",
                        get: function () {
                            return this.states.readMode === this.$reader.types.mode.V ? 1 : this.$reader.$options.read.swiperImageNum
                        }
                    }]), i
                }(l["default"]);
                e["default"] = d
            }).call(this, n("+2Rf"))
        },
        "K/0x": function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "图片线路管理插件", e.definition = e.options.definition || 0, e.lines = [], e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["runImageLineLoad"]), this.installHistoryInfo()
                        }
                    }, {
                        key: "runImageLineLoad",
                        value: function (t) {
                            var e = t.domain;
                            this.addDomain(e)
                        }
                    }, {
                        key: "installHistoryInfo",
                        value: function () {
                            var t = this.getDefinitionsConfig(),
                                e = JSON.parse(ACGN.util.cookie(this.types.cookieHabit)) || {};
                            e.definition !== undefined && (this.definition = e.definition), this.states.definitionFix = t[this.definition]
                        }
                    }, {
                        key: "getDomainData",
                        value: function (e, n) {
                            var i = this;
                            window.callbackLineTab = function (t) {
                                var e = t.data;
                                0 === t.status && e && e.length ? n({
                                    all_line: e,
                                    use_line: e[0].domain,
                                    index: 0
                                }) : (i.$message("线路获取失败，使用本地默认数据"), n({
                                    all_line: i.options.defaultAllLines,
                                    use_line: i.options.defaultAllLines[0].domain,
                                    index: 0
                                }))
                            }, t.ajax({
                                url: "//server." + e + "/mhpic.asp?callback=window.callbackLineTab",
                                dataType: "script",
                                scriptCharset: "utf-8",
                                isResponse: !0
                            })
                        }
                    }, {
                        key: "saveCk",
                        value: function (t, e) {
                            ACGN.util.cookie(t, JSON.stringify(e), {
                                expires: this.options.expires / 3600
                            })
                        }
                    }, {
                        key: "getCk",
                        value: function (t) {
                            try {
                                var e = JSON.parse(ACGN.util.cookie(t));
                                return !(!e.all_line || !e.all_line.length) && e
                            } catch (n) {
                                return !1
                            }
                        }
                    }, {
                        key: "addDomain",
                        value: function (t) {
                            var e = this;
                            if (!this.lines[t]) {
                                var n = this.getCk(t);
                                if (n) return this.lines[t] = n, void(this.states.loadLine[t] = n.use_line);
                                this.options.simpleLine ? this.saveLine(t, {
                                    use_line: t
                                }) : this.getDomainData(t, function (n) {
                                    e.saveLine(t, n)
                                })
                            }
                        }
                    }, {
                        key: "saveLine",
                        value: function (t, e) {
                            this.lines[t] = e, this.saveCk(t, e), this.states.loadLine[t] = e.use_line, this.$emit.call("runImageLoad")
                        }
                    }, {
                        key: "getDefinitionsConfig",
                        value: function () {
                            if (!window.$definitions) return this.$message("未找到线路清晰度配置，使用本地默认配置"), this.options.definitions;
                            var t = [];
                            for (var e in $definitions) t.push($definitions[e]);
                            return t
                        }
                    }, {
                        key: "$options",
                        get: function () {
                            return {
                                expires: 720,
                                defaultAllLines: [{
                                    domain: "mhpic.jumanhua.com",
                                    name: "阿里",
                                    status: "0"
                                }]
                            }
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        "M+ny": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Screen", {
                enumerable: !0,
                get: function () {
                    return r["default"]
                }
            }), Object.defineProperty(e, "Entry4399", {
                enumerable: !0,
                get: function () {
                    return a["default"]
                }
            }), Object.defineProperty(e, "ForYourLove", {
                enumerable: !0,
                get: function () {
                    return o["default"]
                }
            }), Object.defineProperty(e, "SwichLight", {
                enumerable: !0,
                get: function () {
                    return s["default"]
                }
            }), Object.defineProperty(e, "SwichReadModel", {
                enumerable: !0,
                get: function () {
                    return c["default"]
                }
            }), Object.defineProperty(e, "AutoRead", {
                enumerable: !0,
                get: function () {
                    return u["default"]
                }
            }), Object.defineProperty(e, "Pay", {
                enumerable: !0,
                get: function () {
                    return l["default"]
                }
            }), Object.defineProperty(e, "Interact", {
                enumerable: !0,
                get: function () {
                    return h["default"]
                }
            }), Object.defineProperty(e, "Barrage", {
                enumerable: !0,
                get: function () {
                    return f["default"]
                }
            }), Object.defineProperty(e, "PanelInfo", {
                enumerable: !0,
                get: function () {
                    return d["default"]
                }
            }), Object.defineProperty(e, "FreeRead", {
                enumerable: !0,
                get: function () {
                    return p["default"]
                }
            }), Object.defineProperty(e, "HotKey", {
                enumerable: !0,
                get: function () {
                    return v["default"]
                }
            }), Object.defineProperty(e, "MenuControl", {
                enumerable: !0,
                get: function () {
                    return m["default"]
                }
            }), Object.defineProperty(e, "Catalog", {
                enumerable: !0,
                get: function () {
                    return y["default"]
                }
            });
            var r = i(n("TfRW")),
                a = i(n("IDzT")),
                o = i(n("RSB0")),
                s = i(n("DOXx")),
                c = i(n("WWSq")),
                u = i(n("ZPkV")),
                l = i(n("S7M0")),
                h = i(n("QPRz")),
                f = i(n("UBmF")),
                d = i(n("5hgx")),
                p = i(n("gFQe")),
                v = i(n("ge8p")),
                m = i(n("3uL8")),
                y = i(n("NAQh"))
        },
        N8g3: function (t, e, n) {
            e.f = n("K0xU")
        },
        NAQh: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("dRSK"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("7W2i")),
                    s = i(n("a1gu")),
                    c = i(n("Nsbk"));

                function u(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, c["default"])(t);
                        if (e) {
                            var r = (0, c["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, s["default"])(this, n)
                    }
                }
                var l = function (e) {
                    (0, o["default"])(i, e);
                    var n = u(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "目录模块", a.chapterCatalogDom = t("#js_chapterCatalog"), a.btnCatalogDom = t("#js_btnCatalog"), a.show = !1, a
                    }
                    return (0, a["default"])(i, [{
                        key: "installSelfTaps",
                        value: function () {
                            this.installTaps(["afterChapterIndexChange", "closeCatalog"])
                        }
                    }, {
                        key: "closeCatalog",
                        value: function () {
                            this.show && (this.show = !1, this.toggleClass())
                        }
                    }, {
                        key: "initSelfEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            n.on("click", "#js_chapterCatalog", function (t) {
                                t.stopPropagation()
                            }), n.on("click", "#js_btnCatalog", function () {
                                e.getChapterList(), e.show = !e.show, e.$emit.call("stopAutoRead"), e.toggleClass(), e.show && e.sendCnzzEvent("章节目录显示"), e.showInfo()
                            })
                        }
                    }, {
                        key: "showInfo",
                        value: function () {
                            if (this.show) {
                                var t = this.states.currentChapter.chapterId,
                                    e = this.catalogListDom.find('[data-chapter="'.concat(t, '"]')),
                                    n = this.catalogListDom.height(),
                                    i = e.height(),
                                    r = e.index() * i;
                                this.catalogListDom.scrollTop(r - (n - i) / 2), this.catalogListDom.find(".inner-option").removeClass("active"), e.addClass("active")
                            }
                        }
                    }, {
                        key: "afterSort",
                        value: function () {
                            this.showInfo()
                        }
                    }, {
                        key: "toggleClass",
                        value: function () {
                            this.btnCatalogDom.toggleClass("active"), this.chapterCatalogDom.toggleClass("show")
                        }
                    }, {
                        key: "selfCallBack",
                        value: function () {
                            this.afterChapterIndexChange()
                        }
                    }, {
                        key: "afterChapterIndexChange",
                        value: function () {
                            this.showInfo()
                        }
                    }]), i
                }(i(n("6Ixs"))["default"]);
                e["default"] = l
            }).call(this, n("+2Rf"))
        },
        Nsbk: function (t, e) {
            function n(e) {
                return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, n(e)
            }
            t.exports = n
        },
        Oln6: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("HAE/"), n("WLL4"), n("jm62"), n("0l/t"), n("ioFf"), n("rGqo"), n("yt8O"), n("RW0V"), n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("V+eJ"), n("8+KV");
                var r = i(n("lSNA"));
                n("Tze0"), n("f3/d");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ")),
                    s = i(n("iWIM")),
                    c = i(n("7W2i")),
                    u = i(n("a1gu")),
                    l = i(n("Nsbk"));

                function h(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        e && (i = i.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), n.push.apply(n, i)
                    }
                    return n
                }

                function f(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? h(Object(n), !0).forEach(function (e) {
                            (0, r["default"])(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }

                function d(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, l["default"])(t);
                        if (e) {
                            var r = (0, l["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, u["default"])(this, n)
                    }
                }
                var p = function (e) {
                    (0, c["default"])(i, e);
                    var n = d(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "付费阅读插件基类", e.cacheUser = null, e.payChapters = null, e.tplPayChapter = "", e.isShowPop = !1, e.isAutoBuying = !1, e.virtualCoinModule = {}, e.readFreeModule = null, e.cookieAutoPurchase = "autoPurchase", e.queueFetchChapters = [], e
                    }
                    return (0, o["default"])(i, [{
                        key: "apply",
                        value: function (e) {
                            (0, s["default"])((0, l["default"])(i.prototype), "apply", this).call(this, e), e.states.enablePay = !0, this.installTaps(["run", "afterChapterApiLoad", "afterChapterIndexChange", "afterChapterImageIndexChange"]), this.tplPayChapter = t("#tpl_payChapter").html().trim()
                        }
                    }, {
                        key: "run",
                        value: function () {
                            this.initModules(), this.afterChapterApiLoad({
                                apiChapterId: this.states.currentChapter.chapterId
                            }), this.initSelfEvent()
                        }
                    }, {
                        key: "initModules",
                        value: function () {
                            var e = this.modules,
                                n = e.VirtualCoinModule,
                                i = e.ReadFreeModule;
                            if (i && (this.readFreeModule = new i, this.readFreeModule.$baseTemplate = t("#tpl_readFree").html().trim()), n) {
                                var r = this.states.comicInfo.comicId;
                                this.virtualCoinModule = new n({
                                    comicId: r
                                })
                            }
                        }
                    }, {
                        key: "afterChapterIndexChange",
                        value: function () {
                            this.doCheck()
                        }
                    }, {
                        key: "afterChapterImageIndexChange",
                        value: function () {
                            this.doCheck()
                        }
                    }, {
                        key: "doCheck",
                        value: function () {
                            var t = this.states.currentChapter;
                            t.isLock || !this.isShowPop ? this.afterChapterApiLoad({
                                apiChapterId: t.chapterId
                            }) : this.close(!1)
                        }
                    }, {
                        key: "showChapterPay",
                        value: function (t) {
                            this.clearPopDom();
                            var e = "";
                            this.readFreeModule && ACGN.isLogin() && (e = this.readFreeModule.getFreeNav());
                            var n = {
                                    userInfo: this.cacheUser,
                                    comicInfo: this.states.comicInfo,
                                    chapterInfo: t,
                                    config: {
                                        lgGold: siteConf.language.gold,
                                        lgCoin: siteConf.language.coins,
                                        lgUserName: siteConf.language.highness
                                    },
                                    readFreeEntryHtml: e
                                },
                                i = this.getExtendOption(t);
                            n = f(f({}, n), i);
                            var r = ACGN.ejs.render(this.tplPayChapter, n);
                            this.open(r), this.initReadFree(t), this.show()
                        }
                    }, {
                        key: "initReadFree",
                        value: function (t) {
                            if (this.readFreeModule) {
                                var e = this.readFreeModule.getPopTemplate(),
                                    n = this.readFreeModule.$baseTemplate.format(e);
                                this.readFreeModule.setPopOpts({
                                    popHtml: n
                                }), this.readFreeModule.open(this, t)
                            }
                        }
                    }, {
                        key: "cliBuy",
                        value: function () {
                            var t = this;
                            this.buyChapter(function (e, n) {
                                e ? (t.close(!0), ACGN.layer.toast("购买章节成功"), ACGN.user.getUserInfo({
                                    refresh: !0
                                }, function (e, n) {
                                    t.cacheUser = e ? null : n
                                })) : ACGN.layer.toast(n)
                            })
                        }
                    }, {
                        key: "afterChapterApiLoad",
                        value: function (t) {
                            var e = this,
                                n = t.apiChapterId;
                            setTimeout(function () {
                                ACGN.user.getUserInfo(function (t, i) {
                                    t || (e.cacheUser = i, null === e.payChapters ? e.getPayChapters(function () {
                                        e.checkLock(n)
                                    }) : e.checkLock(n))
                                })
                            })
                        }
                    }, {
                        key: "getPayChapters",
                        value: function (t) {
                            var e = this;
                            if (this.queueFetchChapters.push(t), !(this.queueFetchChapters.length > 1)) {
                                if (!ACGN.isLogin()) return this.payChapters = [], void this.callbackFetchChapters();
                                var n = {
                                    openid: this.cacheUser.openid,
                                    type: this.cacheUser.type,
                                    comic_id: this.states.comicInfo.comicId
                                };
                                ACGN.ajax({
                                    url: this.options.api.getPurChasedChapters,
                                    cache: !1,
                                    data: n,
                                    dataType: "json"
                                }, function (t, n) {
                                    setTimeout(function () {
                                        e.callbackFetchChapters()
                                    }), t || (e.payChapters = n)
                                })
                            }
                        }
                    }, {
                        key: "callbackFetchChapters",
                        value: function () {
                            this.queueFetchChapters.forEach(function (t) {
                                return t()
                            }), this.queueFetchChapters.length = 0
                        }
                    }, {
                        key: "checkLock",
                        value: function (t) {
                            var e = this.states.currentChapter,
                                n = this.states.chapterListMap[t],
                                i = n.chapterId,
                                r = n.chapterNatureId,
                                a = n.isLock;
                            (this.isShowPop || this.isAutoBuying) && e.chapterId === i || (a ? this.isEnableVirtualCoinModule && this.virtualCoinModule.checkChapter(r) ? this.$emit.call("unlockCharpterObserver", {
                                chapterId: i,
                                isLock: !1
                            }) : null !== this.cacheUser && null !== this.payChapters ? -1 === this.payChapters.indexOf(r) ? (this.$emit.call("unlockCharpterObserver", {
                                chapterId: i,
                                isLock: !0
                            }), i === e.chapterId && this.openPay(n)) : this.$emit.call("unlockCharpterObserver", {
                                chapterId: i,
                                isLock: !1
                            }) : ACGN.layer.toast("获取用户付费信息失败，如果要使用付费功能请刷新页面") : this.$emit.call("unlockCharpterObserver", {
                                chapterId: i,
                                isLock: !1
                            }))
                        }
                    }, {
                        key: "openPay",
                        value: function (t) {
                            var e = this;
                            if (this.isAutoBuy()) return this.isAutoBuying = !0, ACGN.layer.toast("自动付费购买中..."), void setTimeout(function () {
                                e.doAutoPay(t)
                            }, 300);
                            this.freeTimeAndNormalPay(t)
                        }
                    }, {
                        key: "doUserPay",
                        value: function (t) {
                            this.$emit.call("stopAutoRead"), this.hasPopDom(t.chapterId) ? this.show() : this.showChapterPay(t)
                        }
                    }, {
                        key: "doAutoPay",
                        value: function (t) {
                            var e = this;
                            this.buyChapter(function (n) {
                                e.isAutoBuying = !1, n ? setTimeout(function () {
                                    e.close(!0)
                                }, 300) : e.freeTimeAndNormalPay(t)
                            }, !0)
                        }
                    }, {
                        key: "isAutoBuy",
                        value: function () {
                            return "1" === ACGN.util.cookie(this.cookieAutoPurchase)
                        }
                    }, {
                        key: "freeTimeAndNormalPay",
                        value: function (t) {
                            var e = this;
                            this.readFreeModule ? (this.isShowPop = !0, this.readFreeModule.getReadFreetTime(function () {
                                if (e.readFreeModule.isFreeTime()) return e.close(!0), void ACGN.layer.toast("免费看漫画时间段，开启篇章");
                                e.doUserPay(t)
                            })) : this.doUserPay(t)
                        }
                    }, {
                        key: "buyChapter",
                        value: function (t, e) {
                            var n = this,
                                i = this.states.comicInfo.comicId,
                                r = this.states.currentChapter;
                            if (this.isEnableVirtualCoinModule) this.virtualCoinModule.pay(r, function () {
                                t(!0)
                            }, "chapterNatureId");
                            else if (!e || this.checkAutoEnough(r)) {
                                var a = r.chapterNatureId,
                                    o = this.cacheUser,
                                    s = {
                                        openid: o.openid,
                                        type: o.type,
                                        comic_id: i,
                                        chapter_ids: a
                                    };
                                ACGN.ajax({
                                    url: this.options.api.purchase,
                                    type: "post",
                                    data: s,
                                    dataType: "json",
                                    isResponse: !0
                                }, function (e, i) {
                                    i && -1 !== [0, 1].indexOf(i.status) ? (n.payChapters.push(a), t(!0)) : t(!1, i.msg || "购买失败")
                                })
                            } else t(!1)
                        }
                    }, {
                        key: "checkAutoEnough",
                        value: function (t) {
                            var e = this.states.comicInfo.comicCoinFree,
                                n = this.cacheUser,
                                i = n.Cgold,
                                r = n.coins,
                                a = parseInt(i),
                                o = parseInt(r),
                                s = a;
                            return e && (s += o), s >= t.price
                        }
                    }, {
                        key: "close",
                        value: function (t) {
                            if (this.isShowPop = !1, this.selfClose(), t) {
                                this.afterBuySucc();
                                var e = this.states.currentChapter.chapterId;
                                this.$emit.call("unlockCharpterObserver", {
                                    chapterId: e,
                                    isLock: !1
                                })
                            }
                        }
                    }, {
                        key: "show",
                        value: function () {
                            this.isShowPop = !0, this.selfShow()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {}
                    }, {
                        key: "clearPopDom",
                        value: function () {}
                    }, {
                        key: "selfShow",
                        value: function () {}
                    }, {
                        key: "selfClose",
                        value: function () {}
                    }, {
                        key: "open",
                        value: function () {}
                    }, {
                        key: "getExtendOption",
                        value: function () {}
                    }, {
                        key: "hasPopDom",
                        value: function (t) {}
                    }, {
                        key: "afterBuySucc",
                        value: function () {}
                    }, {
                        key: "$options",
                        get: function () {
                            return {
                                api: {
                                    getPurChasedChapters: "/api/getPurChasedChapters",
                                    purchase: "/api/purchase_chapters_diamonds_coin/"
                                }
                            }
                        }
                    }, {
                        key: "isEnableVirtualCoinModule",
                        get: function () {
                            return this.virtualCoinModule.enabled && window.comicInfo.boo_virtual_coin
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = p
            }).call(this, n("+2Rf"))
        },
        OnI7: function (t, e, n) {
            var i = n("dyZX"),
                r = n("g3g5"),
                a = n("LQAc"),
                o = n("N8g3"),
                s = n("hswa").f;
            t.exports = function (t) {
                var e = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});
                "_" == t.charAt(0) || t in e || s(e, t, {
                    value: o.f(t)
                })
            }
        },
        PJYZ: function (t, e) {
            t.exports = function (t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }
        },
        QILm: function (t, e, n) {
            var i = n("8OQS");
            t.exports = function (t, e) {
                if (null == t) return {};
                var n, r, a = i(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
        },
        QJ5W: function (t, e, n) {
            "use strict";
            (function (t) {
                var e = n("TqRt");
                n("2Spj"), n("j9mN"), n("9ljg"), n("EZfX");
                var i = e(n("+V+j")),
                    r = e(n("f+/7")),
                    a = e(n("zi4Q")),
                    o = e(n("dc4x")),
                    s = e(n("+q+r")),
                    c = e(n("wXuM")),
                    u = n("cmuy"),
                    l = n("M+ny");
                ejs.delimiter = "$", ACGN.layer = ACGN.layer || {}, ACGN.layer.toast = ACGN.layer.toast || ACGN.business.msg, ACGN.user = ACGN.user || {}, ACGN.user.getUserInfo = ACGN.user.getUserInfo || ACGN.business.header.getUserInfo.bind(ACGN.business.header), ACGN.isLogin = ACGN.isLogin || ACGN.business.isLogin, new c["default"]({
                    container: t("#readerContainer"),
                    read: {
                        defaultDistanceV: 720,
                        swiperImageNum: 2,
                        swiperWidth: 1200,
                        initVerticalWidth: 800,
                        internalVerticalWidth: 600
                    },
                    plugins: [new l.Pay({
                        modules: {
                            VirtualCoinModule: r["default"],
                            ReadFreeModule: a["default"]
                        }
                    }), new l.FreeRead, new u.ComicLoader, new l.SwichReadModel, new u.ImageLoadLine({
                        options: {
                            definition: 1,
                            definitions: ["-kmh.low", "-kmh.middle", "-kmh.high"]
                        }
                    }), new u.ReadModeV, new u.ReadModeH, new u.HistoryRecord({
                        modules: {
                            ComicRecord: ACGN.business.comicRecord
                        }
                    }), new l.Catalog, new u.ChapterObserver, new u.ImageLoader, new l.MenuControl, new l.SwichLight, new l.AutoRead, new u.Slider({
                        options: {
                            disableAct: !1
                        }
                    }), new l.Barrage({
                        modules: {
                            Bullets: o["default"]
                        }
                    }), new l.PanelInfo, new l.ForYourLove, new u.BomSet, new l.Interact({
                        options: {
                            nextHeight: 292,
                            overHeight: 366
                        },
                        modules: {
                            ComicRecord: ACGN.business.comicRecord,
                            BookCollect: ACGN.business.bookCollect,
                            SendThings: ACGN.business.SendThings,
                            Share: ACGN.business.SendThings
                        }
                    }), new l.Screen({
                        modules: {
                            fullscreen: i["default"]
                        }
                    }), new l.Entry4399, new l.HotKey, new u.CnzzCount({
                        modules: {
                            cnzzCount: s["default"]
                        }
                    })]
                }).run()
            }).call(this, n("+2Rf"))
        },
        QPRz: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("7W2i")),
                    s = i(n("a1gu")),
                    c = i(n("Nsbk"));

                function u(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, c["default"])(t);
                        if (e) {
                            var r = (0, c["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, s["default"])(this, n)
                    }
                }
                var l = function (e) {
                    (0, o["default"])(i, e);
                    var n = u(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "互动插件", e
                    }
                    return (0, a["default"])(i, [{
                        key: "initEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            n.on("click", ".e-ending-collection", function (t) {
                                t.stopPropagation(), e.doCollection()
                            }), n.on("click", "#collectionBtn", function (t) {
                                t.stopPropagation(), e.doCollection()
                            }), n.on("click", ".e-ending-good", function (t) {
                                t.stopPropagation(), e.doSendAppreciate()
                            }), n.on("click", ".e-ending-share", function (t) {
                                t.stopPropagation(), e.shareModule.openShareDialog()
                            })
                        }
                    }, {
                        key: "updateCollectedDom",
                        value: function () {
                            t("#collectionBtn").addClass("active"), t("#collectionStatusText").text("已收藏"), t(".icon-read-collection").removeClass("icon-read-collection").addClass("icon-read-collection-active"), t('[collecte-booktext="1"]').text("已收藏")
                        }
                    }, {
                        key: "getSlotHeight",
                        value: function (t) {
                            var e = this.states.comicInfo,
                                n = e.comicStatus;
                            if (t != e.comicLastChapterId) return 200;
                            var i = this.options,
                                r = i.nextHeight,
                                a = i.overHeight;
                            return 1 === n ? 200 + r : 200 + a
                        }
                    }, {
                        key: "$options",
                        get: function () {
                            return {
                                nextHeight: 0,
                                overHeight: 0
                            }
                        }
                    }]), i
                }(i(n("A7l5"))["default"]);
                e["default"] = l
            }).call(this, n("+2Rf"))
        },
        RIqP: function (t, e, n) {
            var i = n("Ijbi"),
                r = n("EbDI"),
                a = n("ZhPi"),
                o = n("Bnag");
            t.exports = function (t) {
                return i(t) || r(t) || a(t) || o()
            }
        },
        RSB0: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "猜你喜欢", a.guessSidebarDom = t("#js_guessSidebar"), a.sidebarMainDom = t("#sidebarMain"), a.guessSidebarBtnDom = t("#js_guessSidebarBtn"), a
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.guessSidebarDom.show(), this.initEvent()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            t("body").on("click", "#js_guessSidebarBtn", function () {
                                (e.$emit.call("closeMenuControl"), e.guessSidebarDom.hasClass("sidebar-show")) ? e.guessSidebarDom.removeClass("sidebar-narrow sidebar-show"): (t("body").width() < 1760 && e.guessSidebarDom.addClass("sidebar-narrow"), e.guessSidebarDom.addClass("sidebar-show"), e.sendCnzzEvent("猜你喜欢"))
                            });
                            var n = this;
                            this.guessSidebarDom.on("mousemove", function (e) {
                                var i = t(e.target);
                                i.hasClass("sidebar-item") || i.parents(".sidebar-item").length ? n.sidebarMainDom.css("right", -294) : n.sidebarMainDom.css("right", 0)
                            })
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        S7M0: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("91GP"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("7W2i")),
                    s = i(n("a1gu")),
                    c = i(n("Nsbk"));

                function u(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, c["default"])(t);
                        if (e) {
                            var r = (0, c["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, s["default"])(this, n)
                    }
                }
                var l = function (e) {
                    (0, o["default"])(i, e);
                    var n = u(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "付费阅读插件", e.popType = "", e
                    }
                    return (0, a["default"])(i, [{
                        key: "initSelfEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            n.on("click", ".icon-pop-comm-close", function () {
                                e.close(!1)
                            }), n.on("click", "#js_payChapterBuy", function () {
                                e.cliAll()
                            }), n.on("click", "#js_goPay", function () {
                                e.openCharge()
                            });
                            var i = this;
                            n.on("click", "#js_autoBuy", function () {
                                var e = t(this),
                                    n = e.hasClass("active");
                                e[n ? "removeClass" : "addClass"]("active"), ACGN.util.cookie(i.cookieAutoPurchase, n ? 0 : 1, {
                                    expires: 8760
                                })
                            })
                        }
                    }, {
                        key: "openCharge",
                        value: function () {
                            if (!ACGN.isLogin()) return ACGN.layer.closeAll(), void ACGN.$eventHub.trigger("EV_SHOW_LOGIN");
                            window.comicPay.payRecharge()
                        }
                    }, {
                        key: "cliAll",
                        value: function () {
                            "recharge" !== this.popType ? "pay" !== this.popType ? (this.layerClose(), ACGN.layerLogin()) : this.cliBuy() : window.comicPay.payRecharge()
                        }
                    }, {
                        key: "getExtendOption",
                        value: function (t) {
                            var e = this.states.comicInfo,
                                n = "";
                            if (this.cacheUser) {
                                var i = parseInt(this.cacheUser.Cgold),
                                    r = parseInt(this.cacheUser.coins),
                                    a = parseInt(t.price),
                                    o = i;
                                if (e && (o += r), this.isEnableVirtualCoinModule && (o += this.virtualCoinModule.virtualCoinNum), o >= a) this.popType = "pay", n = "购买此章节";
                                else {
                                    this.popType = "recharge";
                                    var s = siteConf.language.gold;
                                    n = s + "不足，充值" + s
                                }
                            } else this.popType = "login", n = "登录购买";
                            return {
                                type: this.popType,
                                btnStr: n,
                                coinFree: e,
                                autoBuy: this.isAutoBuy(),
                                virtualCoinNum: this.isEnableVirtualCoinModule && this.virtualCoinModule.virtualCoinNum || 0
                            }
                        }
                    }, {
                        key: "afterBuySucc",
                        value: function () {
                            ACGN.business.header.refreshUser(!0)
                        }
                    }, {
                        key: "open",
                        value: function (t) {
                            var e = this,
                                n = window.comicPay;
                            if (!n) {
                                var i = this.states.currentChapter,
                                    r = this.states.comicInfo;
                                n = new ACGN.business.PayChapter({
                                    comicId: r.comicId,
                                    comicName: r.comicName,
                                    comicPaid: r.comicPaid,
                                    comicCoinFree: r.comicCoinFree,
                                    comicAllPrice: i.price
                                })
                            }
                            this.layerWin({
                                content: t,
                                cancel: function () {
                                    e.close(!1)
                                }
                            })
                        }
                    }, {
                        key: "finishPayCall",
                        value: function () {
                            this.close(!0)
                        }
                    }, {
                        key: "layerClose",
                        value: function () {
                            layer.closeAll()
                        }
                    }, {
                        key: "layerWin",
                        value: function (t) {
                            return layer.open(Object.assign({
                                type: 1,
                                title: !1,
                                shade: .75,
                                shadeClose: !1,
                                skin: "transparent-bg",
                                closeBtn: !1,
                                zIndex: 140,
                                time: 0
                            }, t))
                        }
                    }, {
                        key: "hasPopDom",
                        value: function () {
                            return !1
                        }
                    }, {
                        key: "clearPopDom",
                        value: function () {}
                    }, {
                        key: "selfShow",
                        value: function () {}
                    }, {
                        key: "selfClose",
                        value: function () {
                            this.layerClose()
                        }
                    }]), i
                }(i(n("Oln6"))["default"]);
                e["default"] = l
            }).call(this, n("+2Rf"))
        },
        SjK1: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("dRSK"), n("INYr"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "章节图片视窗插件", e.intersectionObserver = null, e.preloadScope = 2, e.loading = !1, e.entryQueue = [], e.ignoreDuration = 150, e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.initObserver(), this.installTaps(["runImageObserver", "cancelImageObserve"])
                        }
                    }, {
                        key: "initObserver",
                        value: function () {
                            var e = this;
                            this.intersectionObserver = new IntersectionObserver(function (n) {
                                t.each(n, function (t, n) {
                                    var i = n.target,
                                        r = e.getTargetAttr(i),
                                        a = r.chapterId,
                                        o = r.chapterIndex,
                                        s = e.entryQueue.findIndex(function (t) {
                                            return t.chapterId === a && t.chapterIndex === o
                                        });
                                    if (-1 !== s && !n.isIntersecting) return e.entryQueue.splice(s, 1), void e.$message("忽略加载" + o + "/" + a); - 1 === s && n.isIntersecting && e.entryQueue.push({
                                        chapterId: a,
                                        chapterIndex: o
                                    })
                                }), setTimeout(function () {
                                    e.loadObserverLazy()
                                }, e.ignoreDuration)
                            })
                        }
                    }, {
                        key: "getTargetAttr",
                        value: function (t) {
                            return {
                                chapterId: t.getAttribute("chapter-pid"),
                                chapterIndex: t.getAttribute("chapter-index") - 0
                            }
                        }
                    }, {
                        key: "loadObserverLazy",
                        value: function () {
                            var e = this;
                            if (!this.loading) {
                                this.$time("执行一次观察加载耗时"), this.loading = !0;
                                var n = this.states.chapterImageList;
                                t.each(this.entryQueue, function (t, i) {
                                    var r = i.chapterId,
                                        a = i.chapterIndex,
                                        o = n.find(function (t) {
                                            return t.chapterId === r && t.index === a
                                        });
                                    o.priority = 2, o.isSucceed && e.cancelImageObserve(o)
                                }), this.entryQueue.length = 0, this.$emit.call("runImageLoad"), this.loading = !1, this.$time("执行一次观察加载耗时", !0)
                            }
                        }
                    }, {
                        key: "loadPreObserver",
                        value: function (t, e) {
                            for (var n = e.chapterId, i = e.index, r = t.findIndex(function (t) {
                                    return t.chapterId === n && t.index === i
                                }), a = this.preloadScope, o = Math.max(r - a, 0), s = Math.min(r + a, t.length - 1), c = o; c <= s; c++) {
                                var u = t[c];
                                u && !u.isObserved && (u.priority = 1, u.isSucceed && this.cancelImageObserve(u))
                            }
                            this.$emit.call("runImageLoad")
                        }
                    }, {
                        key: "runImageObserver",
                        value: function (e) {
                            var n = this;
                            t.each(e, function (t, e) {
                                n.intersectionObserver.observe(e)
                            })
                        }
                    }, {
                        key: "cancelImageObserve",
                        value: function (t) {
                            var e = this;
                            if (2 === t.priority) {
                                t.isObserved = !0;
                                var n = this.states.container.find('[chapter-index="'.concat(t.index, '"][chapter-pid="').concat(t.chapterId, '"]'));
                                this.intersectionObserver.unobserve(n[0]), setTimeout(function () {
                                    e.loadPreObserver(e.states.chapterImageList, t)
                                }, 100)
                            }
                            t.isCreateDom || (t.isCreateDom = !0, this.$emit.call("afterImageObserver", t))
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        SksO: function (t, e) {
            function n(e, i) {
                return t.exports = n = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                }, n(e, i)
            }
            t.exports = n
        },
        SlkY: function (t, e, n) {
            var i = n("m0Pp"),
                r = n("H6hf"),
                a = n("M6Qj"),
                o = n("y3w9"),
                s = n("ne8i"),
                c = n("J+6e"),
                u = {},
                l = {};
            (e = t.exports = function (t, e, n, h, f) {
                var d, p, v, m, y = f ? function () {
                        return t
                    } : c(t),
                    g = i(n, h, e ? 2 : 1),
                    I = 0;
                if ("function" != typeof y) throw TypeError(t + " is not iterable!");
                if (a(y)) {
                    for (d = s(t.length); d > I; I++)
                        if ((m = e ? g(o(p = t[I])[0], p[1]) : g(t[I])) === u || m === l) return m
                } else
                    for (v = y.call(t); !(p = v.next()).done;)
                        if ((m = r(v, g, p.value, e)) === u || m === l) return m
            }).BREAK = u, e.RETURN = l
        },
        T39b: function (t, e, n) {
            "use strict";
            var i = n("wmvG"),
                r = n("s5qY");
            t.exports = n("4LiD")("Set", function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : undefined)
                }
            }, {
                add: function (t) {
                    return i.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
                }
            }, i)
        },
        TfRW: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "屏幕管理", a.fullScreenModule = {}, a.scale = 1, a.showTxt = t("#scaleStatusText"), a.isV = null, a
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (e) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, e), this.initEvent(), this.initModules(), this.isV = this.states.readMode === this.$reader.types.mode.V, this.isV || t(".setting-btn__scale").addClass("disabled")
                        }
                    }, {
                        key: "initModules",
                        value: function () {
                            var t = this.modules.fullscreen;
                            t && (this.fullScreenModule = t)
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            n.on("click", "#scaleReduceBtn", function () {
                                e.resize()
                            }), n.on("click", "#scaleAddBtn", function () {
                                e.resize(!0)
                            }), n.on("click", "#scaleFullscreenBtn", function () {
                                e.fullscreen()
                            })
                        }
                    }, {
                        key: "fullscreen",
                        value: function () {
                            if (this.fullScreenModule.isSupport()) {
                                var e = this.fullScreenModule.toggle();
                                return !!e && (this.sendCnzzEvent("全屏"), t("body")[e ? "addClass" : "removeClass"]("fullscreen-body"), !1)
                            }
                            ACGN.layer.toast("暂时不支持当前浏览器的全屏模式, 请尝试按F11")
                        }
                    }, {
                        key: "resize",
                        value: function (t) {
                            this.isV && (t && this.scale < 1.5 && (this.sendCnzzEvent("屏幕放大"), this.scale += .1), !t && this.scale > .5 && (this.sendCnzzEvent("屏幕缩小"), this.scale -= .1), this.scale = this.scale.toFixed(1) - 0, this.states.scaleRatio = this.scale, this.showTxt.html(1 === this.scale ? "默认" : Math.floor(100 * this.scale) + "%"), this.$emit.call("afterScaleChange", this.scale))
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        UBmF: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("Tze0"), n("pIFo"), n("KKXr"), n("2Spj"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("7W2i")),
                    s = i(n("a1gu")),
                    c = i(n("Nsbk")),
                    u = i(n("HTiG"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, c["default"])(t);
                        if (e) {
                            var r = (0, c["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, s["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, o["default"])(i, e);
                    var n = l(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "弹幕模块", a.editInputDom = t("#js_dmEditInput"), a.dmEditDom = t(".danmu-editer-box"), a
                    }
                    return (0, a["default"])(i, [{
                        key: "initSelf",
                        value: function () {
                            this.initEvent(), this.initTurn()
                        }
                    }, {
                        key: "initTurn",
                        value: function () {
                            var e = this;
                            t("#js_dmOnoffBtn").attr("checked", this.isShowDm), this.dmHeadOnoff = new u["default"]("#js_dmOnoffBtn", !0), this.dmHeadOnoff.bind(function (t) {
                                e.swichDm()
                            }), this.dmHeadOnoff = new u["default"]("#js_dmFaceBtn", !0), this.dmHeadOnoff.bind(function (t) {
                                t ? (e.sendCnzzEvent("切换弹幕头像打开"), e.dmScreenDom.removeClass("face-hide")) : (e.sendCnzzEvent("切换弹幕头像关闭"), e.dmScreenDom.addClass("face-hide"))
                            })
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            t("body").on("mouseenter mouseleave", "#js_danmuItem", function (t) {
                                "mouseenter" == t.type ? e.dmEditDom.addClass("active") : "mouseleave" == t.type && e.dmEditDom.removeClass("active")
                            }), n.on("click", "#dmTextCancelBtn", function () {
                                e.dmEditDom.removeClass("active")
                            }), n.on("click", "#dmTexrSendBtn", function () {
                                e.cliSendDm()
                            }), this.editInputDom.on("input propertychange", function () {
                                var e = this.value.length;
                                t("#dmTextTotal").text(Math.min(e, 20) + "/20"), e > 20 && (this.value = this.value.split("").slice(0, 20).join(""), t(this).focus())
                            })
                        }
                    }, {
                        key: "cliSendDm",
                        value: function () {
                            var e = this.editInputDom.val().trim().replace(/\n/g, "");
                            e.length ? this.sendDm(e, function (e, n) {
                                e ? (t("#js_danmuItem").removeClass("on"), ACGN.layer.toast("弹幕发送成功!")) : ACGN.layer.toast(n || "弹幕发送失败!")
                            }) : ACGN.layer.toast("发送内容不能为空")
                        }
                    }, {
                        key: "showMenuDom",
                        value: function () {
                            t("#js_dmBox").show()
                        }
                    }, {
                        key: "selfDmSwitch",
                        value: function () {}
                    }, {
                        key: "hideDmUi",
                        value: function () {}
                    }]), i
                }(i(n("Cbd8"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        Uvps: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("I5cv"), n("VRzm"), n("Btvt");
            var r = i(n("o0o1"));
            n("ls82");
            var a = i(n("yXPU")),
                o = i(n("QILm"));
            n("f3/d");
            var s = i(n("lwsE")),
                c = i(n("W8MJ")),
                u = i(n("iWIM")),
                l = i(n("7W2i")),
                h = i(n("a1gu")),
                f = i(n("Nsbk"));

            function d(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, f["default"])(t);
                    if (e) {
                        var r = (0, f["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, h["default"])(this, n)
                }
            }
            var p = function (t) {
                (0, l["default"])(n, t);
                var e = d(n);

                function n(t) {
                    var i;
                    return (0, s["default"])(this, n), (i = e.call(this, t)).name = "漫画数据加载管理插件", i
                }
                return (0, c["default"])(n, [{
                    key: "apply",
                    value: function (t) {
                        (0, u["default"])((0, f["default"])(n.prototype), "apply", this).call(this, t), this.installTaps(["runChapterApiLoad"]);
                        var e = this.getInitChapterInfo(),
                            i = e.prev_chapter,
                            r = e.current_chapter,
                            a = e.next_chapter,
                            s = (0, o["default"])(e, ["prev_chapter", "current_chapter", "next_chapter"]);
                        t.states.comicInfo = t.entitys.getComicModel(s);
                        var c = this.installChapterInfo(i, r, a);
                        this.installHistoryInfo(c[1])
                    }
                }, {
                    key: "installHistoryInfo",
                    value: function (t) {
                        this.$reader.states.currentChapter = t
                    }
                }, {
                    key: "runChapterApiLoad",
                    value: function () {
                        var t = (0, a["default"])(r["default"].mark(function e(t) {
                            var n, i, a, o, s, c, u, l, h;
                            return r["default"].wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.sourceChapterId, i = t.apiChapterId, a = t.callback, e.next = 3, this.getChapterInfo(i);
                                    case 3:
                                        o = e.sent, s = o.data, c = s.prev_chapter, u = s.current_chapter, l = s.next_chapter, h = this.installChapterInfo(c, u, l), this.$emit.call("afterChapterApiLoad", {
                                            apiChapterId: i,
                                            sourceChapterId: n,
                                            chapter: h[1]
                                        }), a && a();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "installChapterInfo",
                    value: function (t, e, n) {
                        var i = this.transferChapterData(t),
                            r = this.transferChapterData(e),
                            a = this.transferChapterData(n);
                        return this.installWithRelationInfo(null, i, r), this.installWithRelationInfo(i, r, a), this.installWithRelationInfo(r, a, null), r.isInited = !0, [i, r, a]
                    }
                }, {
                    key: "installWithRelationInfo",
                    value: function (t, e, n) {
                        null !== e && (t && (e.prevChapterId = t.chapterId, e.prevChapterName = t.chapterName), n && (e.nextChapterId = n.chapterId, e.nextChapterName = n.chapterName), this.$reader.states.chapterListMap[e.chapterId] = e)
                    }
                }, {
                    key: "transferChapterData",
                    value: function (t) {
                        if (null === t) return t;
                        var e = t.chapter_newid,
                            n = this.$reader.states.chapterListMap[e];
                        return n || this.$reader.entitys.getChapterModel(t, this.states.enablePay)
                    }
                }, {
                    key: "getChapterInfo",
                    value: function () {
                        var t = (0, a["default"])(r["default"].mark(function e(t) {
                            var n, i, a = this;
                            return r["default"].wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = this.states.comicInfo.comicId, i = {
                                            comic_id: n,
                                            chapter_newid: t
                                        }, e.abrupt("return", new Promise(function (t) {
                                            ACGN.ajax({
                                                url: a.options.api.getChapterInfo,
                                                data: i,
                                                success: function (e) {
                                                    t(e)
                                                },
                                                error: function (t) {
                                                    ACGN.layer.toast("章节数据加载失败，请刷新重试")
                                                }
                                            })
                                        }));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getInitChapterInfo",
                    value: function () {
                        return window.comicInfo || this.$error("阅读器初始化失败，缺少必要的章节初始数据"), window.comicInfo
                    }
                }, {
                    key: "$options",
                    get: function () {
                        return {
                            api: {
                                getChapterInfo: "/api/getchapterinfo"
                            }
                        }
                    }
                }]), n
            }(i(n("W/Tl"))["default"]);
            e["default"] = p
        },
        VRzm: function (t, e, n) {
            "use strict";
            var i, r, a, o, s = n("LQAc"),
                c = n("dyZX"),
                u = n("m0Pp"),
                l = n("I8a+"),
                h = n("XKFU"),
                f = n("0/R4"),
                d = n("2OiF"),
                p = n("9gX7"),
                v = n("SlkY"),
                m = n("69bn"),
                y = n("GZEu").set,
                g = n("gHnn")(),
                I = n("pbhE"),
                C = n("nICZ"),
                k = n("ol8x"),
                b = n("vKrd"),
                w = c.TypeError,
                _ = c.process,
                S = _ && _.versions,
                x = S && S.v8 || "",
                R = c.Promise,
                P = "process" == l(_),
                M = function () {},
                E = r = I.f,
                O = !! function () {
                    try {
                        var t = R.resolve(1),
                            e = (t.constructor = {})[n("K0xU")("species")] = function (t) {
                                t(M, M)
                            };
                        return (P || "function" == typeof PromiseRejectionEvent) && t.then(M) instanceof e && 0 !== x.indexOf("6.6") && -1 === k.indexOf("Chrome/66")
                    } catch (i) {}
                }(),
                T = function (t) {
                    var e;
                    return !(!f(t) || "function" != typeof (e = t.then)) && e
                },
                A = function (t, e) {
                    if (!t._n) {
                        t._n = !0;
                        var n = t._c;
                        g(function () {
                            for (var i = t._v, r = 1 == t._s, a = 0, o = function (e) {
                                    var n, a, o, s = r ? e.ok : e.fail,
                                        c = e.resolve,
                                        u = e.reject,
                                        l = e.domain;
                                    try {
                                        s ? (r || (2 == t._h && j(t), t._h = 1), !0 === s ? n = i : (l && l.enter(), n = s(i), l && (l.exit(), o = !0)), n === e.promise ? u(w("Promise-chain cycle")) : (a = T(n)) ? a.call(n, c, u) : c(n)) : u(i)
                                    } catch (h) {
                                        l && !o && l.exit(), u(h)
                                    }
                                }; n.length > a;) o(n[a++]);
                            t._c = [], t._n = !1, e && !t._h && D(t)
                        })
                    }
                },
                D = function (t) {
                    y.call(c, function () {
                        var e, n, i, r = t._v,
                            a = N(t);
                        if (a && (e = C(function () {
                                P ? _.emit("unhandledRejection", r, t) : (n = c.onunhandledrejection) ? n({
                                    promise: t,
                                    reason: r
                                }) : (i = c.console) && i.error && i.error("Unhandled promise rejection", r)
                            }), t._h = P || N(t) ? 2 : 1), t._a = undefined, a && e.e) throw e.v
                    })
                },
                N = function (t) {
                    return 1 !== t._h && 0 === (t._a || t._c).length
                },
                j = function (t) {
                    y.call(c, function () {
                        var e;
                        P ? _.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                            promise: t,
                            reason: t._v
                        })
                    })
                },
                L = function (t) {
                    var e = this;
                    e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0))
                },
                H = function (t) {
                    var e, n = this;
                    if (!n._d) {
                        n._d = !0, n = n._w || n;
                        try {
                            if (n === t) throw w("Promise can't be resolved itself");
                            (e = T(t)) ? g(function () {
                                var i = {
                                    _w: n,
                                    _d: !1
                                };
                                try {
                                    e.call(t, u(H, i, 1), u(L, i, 1))
                                } catch (r) {
                                    L.call(i, r)
                                }
                            }): (n._v = t, n._s = 1, A(n, !1))
                        } catch (i) {
                            L.call({
                                _w: n,
                                _d: !1
                            }, i)
                        }
                    }
                };
            O || (R = function (t) {
                p(this, R, "Promise", "_h"), d(t), i.call(this);
                try {
                    t(u(H, this, 1), u(L, this, 1))
                } catch (e) {
                    L.call(this, e)
                }
            }, (i = function (t) {
                this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, this._h = 0, this._n = !1
            }).prototype = n("3Lyj")(R.prototype, {
                then: function (t, e) {
                    var n = E(m(this, R));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = P ? _.domain : undefined, this._c.push(n), this._a && this._a.push(n), this._s && A(this, !1), n.promise
                },
                "catch": function (t) {
                    return this.then(undefined, t)
                }
            }), a = function () {
                var t = new i;
                this.promise = t, this.resolve = u(H, t, 1), this.reject = u(L, t, 1)
            }, I.f = E = function (t) {
                return t === R || t === o ? new a(t) : r(t)
            }), h(h.G + h.W + h.F * !O, {
                Promise: R
            }), n("fyDq")(R, "Promise"), n("elZq")("Promise"), o = n("g3g5").Promise, h(h.S + h.F * !O, "Promise", {
                reject: function (t) {
                    var e = E(this);
                    return (0, e.reject)(t), e.promise
                }
            }), h(h.S + h.F * (s || !O), "Promise", {
                resolve: function (t) {
                    return b(s && this === o ? R : this, t)
                }
            }), h(h.S + h.F * !(O && n("XMVh")(function (t) {
                R.all(t)["catch"](M)
            })), "Promise", {
                all: function (t) {
                    var e = this,
                        n = E(e),
                        i = n.resolve,
                        r = n.reject,
                        a = C(function () {
                            var n = [],
                                a = 0,
                                o = 1;
                            v(t, !1, function (t) {
                                var s = a++,
                                    c = !1;
                                n.push(undefined), o++, e.resolve(t).then(function (t) {
                                    c || (c = !0, n[s] = t, --o || i(n))
                                }, r)
                            }), --o || i(n)
                        });
                    return a.e && r(a.v), n.promise
                },
                race: function (t) {
                    var e = this,
                        n = E(e),
                        i = n.reject,
                        r = C(function () {
                            v(t, !1, function (t) {
                                e.resolve(t).then(n.resolve, i)
                            })
                        });
                    return r.e && i(r.v), n.promise
                }
            })
        },
        "W/Tl": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("HAE/"), n("WLL4"), n("jm62"), n("0l/t"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("2Spj"), n("8+KV");
            var r = i(n("lSNA"));
            n("f3/d");
            var a = i(n("lwsE")),
                o = i(n("W8MJ")),
                s = i(n("dtkt")),
                c = i(n("zNPx"));

            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(n), !0).forEach(function (e) {
                        (0, r["default"])(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            var h = function () {
                function t() {
                    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    (0, a["default"])(this, t), this.name = "插件基础类", this.$emit = null, this.$time = s["default"].$time, this.$error = s["default"].$error, this.$message = s["default"].$message, this.$utils = c["default"], this.modules = this.getArgs(e, "modules"), this.options = l(l({}, this.$options), this.getArgs(e, "options"))
                }
                return (0, o["default"])(t, [{
                    key: "apply",
                    value: function (t) {
                        this.$emit = t.hooks.$emit, this.$reader = t, this.$message("加载插件:" + this.name)
                    }
                }, {
                    key: "getArgs",
                    value: function (t, e) {
                        return t && t[e] || {}
                    }
                }, {
                    key: "sendCnzzEvent",
                    value: function (t) {
                        if (_czc) {
                            var e = c["default"].isMobileHanddle() ? "m" : "pc";
                            _czc.push(["_trackEvent", "阅读器事件_" + e, t])
                        }
                    }
                }, {
                    key: "installTaps",
                    value: function (t) {
                        var e = this;
                        t.forEach(function (t) {
                            e.$reader.hooks[t].tap(t, e[t].bind(e))
                        })
                    }
                }, {
                    key: "installSelfTaps",
                    value: function () {}
                }, {
                    key: "initSelfEvent",
                    value: function () {}
                }, {
                    key: "states",
                    get: function () {
                        return this.$reader.states
                    }
                }, {
                    key: "types",
                    get: function () {
                        return this.$reader.types
                    }
                }, {
                    key: "$options",
                    get: function () {
                        return {}
                    }
                }]), t
            }();
            e["default"] = h
        },
        WLL4: function (t, e, n) {
            var i = n("XKFU");
            i(i.S + i.F * !n("nh4g"), "Object", {
                defineProperties: n("FJW5")
            })
        },
        WWSq: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("7W2i")),
                    s = i(n("a1gu")),
                    c = i(n("Nsbk"));

                function u(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, c["default"])(t);
                        if (e) {
                            var r = (0, c["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, s["default"])(this, n)
                    }
                }
                var l = function (e) {
                    (0, o["default"])(i, e);
                    var n = u(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "阅读模式切换", a.swichVDom = t("#js_swichV"), a.swichHDom = t("#js_swichH"), a
                    }
                    return (0, a["default"])(i, [{
                        key: "initEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            n.on("click", "#js_swichH", function () {
                                e.isFixV || e.changeMode(e.$reader.types.mode.H)
                            }), n.on("click", "#js_swichV", function () {
                                e.changeMode(e.$reader.types.mode.V)
                            })
                        }
                    }, {
                        key: "updateDom",
                        value: function () {
                            this.isFixV && this.swichHDom.addClass("disabled"), this.states.readMode == this.$reader.types.mode.V ? (this.swichVDom.addClass("hide"), this.swichHDom.removeClass("hide")) : (this.swichVDom.removeClass("hide"), this.swichHDom.addClass("hide"))
                        }
                    }]), i
                }(i(n("4F9g"))["default"]);
                e["default"] = l
            }).call(this, n("+2Rf"))
        },
        WkPL: function (t, e) {
            t.exports = function (t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }
        },
        Wr5T: function (t, e) {
            ! function () {
                "use strict";
                if ("object" == typeof window)
                    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                        get: function () {
                            return this.intersectionRatio > 0
                        }
                    });
                    else {
                        var t = window.document,
                            e = [];
                        i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.USE_MUTATION_OBSERVER = !0, i.prototype.observe = function (t) {
                            if (!this._observationTargets.some(function (e) {
                                    return e.element == t
                                })) {
                                if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: t,
                                    entry: null
                                }), this._monitorIntersections(), this._checkForIntersections()
                            }
                        }, i.prototype.unobserve = function (t) {
                            this._observationTargets = this._observationTargets.filter(function (e) {
                                return e.element != t
                            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                        }, i.prototype.disconnect = function () {
                            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                        }, i.prototype.takeRecords = function () {
                            var t = this._queuedEntries.slice();
                            return this._queuedEntries = [], t
                        }, i.prototype._initThresholds = function (t) {
                            var e = t || [0];
                            return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, n) {
                                if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return t !== n[e - 1]
                            })
                        }, i.prototype._parseRootMargin = function (t) {
                            var e = (t || "0px").split(/\s+/).map(function (t) {
                                var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                                if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                                return {
                                    value: parseFloat(e[1]),
                                    unit: e[2]
                                }
                            });
                            return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                        }, i.prototype._monitorIntersections = function () {
                            this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(window, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            }))))
                        }, i.prototype._unmonitorIntersections = function () {
                            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(window, "resize", this._checkForIntersections, !0), a(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                        }, i.prototype._checkForIntersections = function () {
                            var t = this._rootIsInDom(),
                                e = t ? this._getRootRect() : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                };
                            this._observationTargets.forEach(function (i) {
                                var r = i.element,
                                    a = o(r),
                                    s = this._rootContainsTarget(r),
                                    c = i.entry,
                                    u = t && s && this._computeTargetAndRootIntersection(r, e),
                                    l = i.entry = new n({
                                        time: window.performance && performance.now && performance.now(),
                                        target: r,
                                        boundingClientRect: a,
                                        rootBounds: e,
                                        intersectionRect: u
                                    });
                                c ? t && s ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }, i.prototype._computeTargetAndRootIntersection = function (e, n) {
                            if ("none" != window.getComputedStyle(e).display) {
                                for (var i, r, a, s, u, l, h, f, d = o(e), p = c(e), v = !1; !v;) {
                                    var m = null,
                                        y = 1 == p.nodeType ? window.getComputedStyle(p) : {};
                                    if ("none" == y.display) return;
                                    if (p == this.root || p == t ? (v = !0, m = n) : p != t.body && p != t.documentElement && "visible" != y.overflow && (m = o(p)), m && (i = m, r = d, void 0, void 0, void 0, void 0, void 0, void 0, a = Math.max(i.top, r.top), s = Math.min(i.bottom, r.bottom), u = Math.max(i.left, r.left), l = Math.min(i.right, r.right), f = s - a, !(d = (h = l - u) >= 0 && f >= 0 && {
                                            top: a,
                                            bottom: s,
                                            left: u,
                                            right: l,
                                            width: h,
                                            height: f
                                        }))) break;
                                    p = c(p)
                                }
                                return d
                            }
                        }, i.prototype._getRootRect = function () {
                            var e;
                            if (this.root) e = o(this.root);
                            else {
                                var n = t.documentElement,
                                    i = t.body;
                                e = {
                                    top: 0,
                                    left: 0,
                                    right: n.clientWidth || i.clientWidth,
                                    width: n.clientWidth || i.clientWidth,
                                    bottom: n.clientHeight || i.clientHeight,
                                    height: n.clientHeight || i.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(e)
                        }, i.prototype._expandRectByRootMargin = function (t) {
                            var e = this._rootMarginValues.map(function (e, n) {
                                    return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
                                }),
                                n = {
                                    top: t.top - e[0],
                                    right: t.right + e[1],
                                    bottom: t.bottom + e[2],
                                    left: t.left - e[3]
                                };
                            return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                        }, i.prototype._hasCrossedThreshold = function (t, e) {
                            var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                                i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                            if (n !== i)
                                for (var r = 0; r < this.thresholds.length; r++) {
                                    var a = this.thresholds[r];
                                    if (a == n || a == i || a < n != a < i) return !0
                                }
                        }, i.prototype._rootIsInDom = function () {
                            return !this.root || s(t, this.root)
                        }, i.prototype._rootContainsTarget = function (e) {
                            return s(this.root || t, e)
                        }, i.prototype._registerInstance = function () {
                            e.indexOf(this) < 0 && e.push(this)
                        }, i.prototype._unregisterInstance = function () {
                            var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
                        }, window.IntersectionObserver = i, window.IntersectionObserverEntry = n
                    }
                function n(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }, this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        n = e.width * e.height,
                        i = this.intersectionRect,
                        r = i.width * i.height;
                    this.intersectionRatio = n ? Number((r / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function i(t, e) {
                    var n, i, r, a = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (a.root && 1 != a.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, r = null, function () {
                        r || (r = setTimeout(function () {
                            n(), r = null
                        }, i))
                    }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(a.rootMargin), this.thresholds = this._initThresholds(a.threshold), this.root = a.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
                        return t.value + t.unit
                    }).join(" ")
                }

                function r(t, e, n, i) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, i || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }

                function a(t, e, n, i) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, i || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }

                function o(t) {
                    var e;
                    try {
                        e = t.getBoundingClientRect()
                    } catch (n) {}
                    return e ? (e.width && e.height || (e = {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.right - e.left,
                        height: e.bottom - e.top
                    }), e) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function s(t, e) {
                    for (var n = e; n;) {
                        if (n == t) return !0;
                        n = c(n)
                    }
                    return !1
                }

                function c(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
                }
            }()
        },
        X7qu: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("pIFo"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "Bom设置", e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterIndexChange"])
                        }
                    }, {
                        key: "afterChapterIndexChange",
                        value: function () {
                            this.replaceBom()
                        }
                    }, {
                        key: "replaceBom",
                        value: function () {
                            var e = this.states,
                                n = e.comicInfo.comicName,
                                i = e.currentChapter,
                                r = window.comicInfo.seoTitleTemplate,
                                a = ACGN.util.chapterNameHanddle(n, i.chapterName),
                                o = a.chapterName,
                                s = a.chapterNumber,
                                c = "";
                            if (c = s ? r.title.format(n, s, o) : r["default"].format(n, o), t("head title").html(c), history.replaceState) {
                                var u = location.href.replace(/\/[^\/]*?\.html/, "/" + i.chapterId + ".html");
                                history.replaceState({}, "漫画阅读", u)
                            }
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        XXVv: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("iWIM")),
                s = i(n("7W2i")),
                c = i(n("a1gu")),
                u = i(n("Nsbk"));

            function l(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, u["default"])(t);
                    if (e) {
                        var r = (0, u["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, c["default"])(this, n)
                }
            }
            var h = function (t) {
                (0, s["default"])(n, t);
                var e = l(n);

                function n(t) {
                    var i;
                    return (0, r["default"])(this, n), (i = e.call(this, t)).name = "自动阅读模块基类", i.isAuto = !1, i.speed = 1, i.timerHandle = null, i.isV = !0, i
                }
                return (0, a["default"])(n, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, u["default"])(n.prototype), "apply", this).call(this, t), this.isV = this.states.readMode === this.types.mode.V, this.installHistoryInfo(), this.installSelfTaps(), this.installTaps(["stopAutoRead"]), this.initEvent()
                    }
                }, {
                    key: "stopAutoRead",
                    value: function () {
                        this.doStopAutoRead()
                    }
                }, {
                    key: "installHistoryInfo",
                    value: function () {
                        var t = JSON.parse(ACGN.util.cookie(this.types.cookieHabit)) || {};
                        t.speed ? this.setSpeed(t.speed) : t.speed = 1
                    }
                }, {
                    key: "changeSpeed",
                    value: function (t) {
                        var e = t ? this.speed + 1 : this.speed - 1;
                        this.setSpeed(e)
                    }
                }, {
                    key: "setSpeed",
                    value: function (t) {
                        t <= 0 || t > 20 || (this.states.readSpeed = this.speed = t, this.afterChangeSpeed(t), this.$utils.setHabit(this.types.cookieHabit, "speed", t))
                    }
                }, {
                    key: "cliAutoRead",
                    value: function () {
                        if (this.isAuto) this.doStopAutoRead();
                        else {
                            var t = this.states.readSpeed;
                            this.startAutoRead(t)
                        }
                    }
                }, {
                    key: "startAutoRead",
                    value: function () {
                        var t = this;
                        this.isAuto || this.isV && (this.isAuto = !0, this.states.enableAutoRead = !0, this.atferStartAutoRead(), this.timerHandle = requestAnimationFrame(function () {
                            t.timerAutoSpeed()
                        }), this.sendCnzzEvent("自动滚动"))
                    }
                }, {
                    key: "timerAutoSpeed",
                    value: function () {
                        var t = this,
                            e = this.states,
                            n = e.currentDistance,
                            i = e.totalDistance,
                            r = e.fillInfo,
                            a = n + Math.max(parseInt(this.speed / 3), 1),
                            o = Math.max(i - r.fillHeight, 0);
                        if (a = Math.min(a, o), this.$emit.call("directChapterDistance", a), a === o) return ACGN.layer.toast("已阅读至最新章节，自动阅读结束"), void this.doStopAutoRead();
                        this.timerHandle = requestAnimationFrame(function () {
                            t.timerAutoSpeed()
                        })
                    }
                }, {
                    key: "doStopAutoRead",
                    value: function () {
                        var t = this;
                        this.isAuto && (cancelAnimationFrame(this.timerHandle), this.isAuto = !1, setTimeout(function () {
                            t.states.enableAutoRead = !1
                        }, 100), this.atferStopAutoRead())
                    }
                }, {
                    key: "afterChangeSpeed",
                    value: function () {}
                }]), n
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        XfO3: function (t, e, n) {
            "use strict";
            var i = n("AvRE")(!0);
            n("Afnz")(String, "String", function (t) {
                this._t = String(t), this._i = 0
            }, function () {
                var t, e = this._t,
                    n = this._i;
                return n >= e.length ? {
                    value: undefined,
                    done: !0
                } : (t = i(e, n), this._i += t.length, {
                    value: t,
                    done: !1
                })
            })
        },
        "Ybj/": function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("xfY5");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = function () {
                    function t(e) {
                        (0, r["default"])(this, t), e.entitys = this
                    }
                    return (0, a["default"])(t, [{
                        key: "getComicModel",
                        value: function (t) {
                            return {
                                comicId: t.comic_id,
                                comicNewId: t.comic_newid,
                                comicName: t.comic_name,
                                comicStatus: t.comic_status,
                                comicPaid: t.charge_paid,
                                comicCoinFree: t.charge_coin_free,
                                comicLastChapterId: t.last_chapter_newid,
                                comicLastChapterNatureId: Number(t.last_chapter_id),
                                comicLastChapterName: t.last_chapter_name,
                                comicUpdateTime: t.update_time,
                                comicReadType: t.readtype !== undefined ? parseInt(t.readtype) : 0,
                                comicNoCopyright: 0 === t.is_copyright && (t.comic_copyright_desc || "抱歉，应版权方要求暂时不能提供该漫画阅读，我们正在玩命争取版权中...")
                            }
                        }
                    }, {
                        key: "getChapterModel",
                        value: function (t, e) {
                            return {
                                isInited: !1,
                                chapterId: t.chapter_newid,
                                chapterPath: t.rule,
                                chapterNatureId: t.chapter_id,
                                chapterName: t.chapter_name,
                                startPage: t.start_num,
                                endPage: t.end_num,
                                totalPage: t.end_num - t.start_num + 1,
                                domain: t.chapter_domain || siteConf.pathRules.comic_domain,
                                chapterDomainSuffix: t.chapter_domain_suffix,
                                price: t.price,
                                isLock: !!e && t.price > 0,
                                prevChapterId: null,
                                prevChapterName: null,
                                nextChapterId: null,
                                nextChapterName: null
                            }
                        }
                    }, {
                        key: "getChapterImageModel",
                        value: function (t, e) {
                            var n = arguments.length > 2 && arguments[2] !== undefined && arguments[2],
                                i = t.chapterId,
                                r = t.chapterPath,
                                a = t.domain,
                                o = t.endPage,
                                s = t.isLock;
                            return {
                                chapterId: i,
                                chapterPath: r,
                                domain: a,
                                chapterDomainSuffix: t.chapterDomainSuffix,
                                index: e,
                                originUrl: "",
                                originWidth: 0,
                                originHeight: 0,
                                showWidth: 0,
                                showHeight: 0,
                                originShowWidth: 0,
                                originShowHeight: 0,
                                isInited: !1,
                                isSucceed: !1,
                                faileCount: 0,
                                priority: 0,
                                endDistance: 0,
                                imgObj: null,
                                isObserved: !1,
                                isCreateDom: !1,
                                isLast: e === o,
                                slots: [],
                                isHide: n,
                                isLock: s,
                                isPushCnzz: !1
                            }
                        }
                    }, {
                        key: "getImageSlot",
                        value: function (t) {
                            var e = t.width,
                                n = t.height,
                                i = t.template,
                                r = t.isBefore,
                                a = void 0 !== r && r;
                            return {
                                type: t.type,
                                isBefore: a,
                                width: e,
                                height: n,
                                template: i
                            }
                        }
                    }]), t
                }();
            e["default"] = o
        },
        Z6vF: function (t, e, n) {
            var i = n("ylqs")("meta"),
                r = n("0/R4"),
                a = n("aagx"),
                o = n("hswa").f,
                s = 0,
                c = Object.isExtensible || function () {
                    return !0
                },
                u = !n("eeVq")(function () {
                    return c(Object.preventExtensions({}))
                }),
                l = function (t) {
                    o(t, i, {
                        value: {
                            i: "O" + ++s,
                            w: {}
                        }
                    })
                },
                h = t.exports = {
                    KEY: i,
                    NEED: !1,
                    fastKey: function (t, e) {
                        if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!a(t, i)) {
                            if (!c(t)) return "F";
                            if (!e) return "E";
                            l(t)
                        }
                        return t[i].i
                    },
                    getWeak: function (t, e) {
                        if (!a(t, i)) {
                            if (!c(t)) return !0;
                            if (!e) return !1;
                            l(t)
                        }
                        return t[i].w
                    },
                    onFreeze: function (t) {
                        return u && h.NEED && c(t) && !a(t, i) && l(t), t
                    }
                }
        },
        ZPkV: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("7W2i")),
                    s = i(n("a1gu")),
                    c = i(n("Nsbk"));

                function u(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, c["default"])(t);
                        if (e) {
                            var r = (0, c["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, s["default"])(this, n)
                    }
                }
                var l = function (e) {
                    (0, o["default"])(i, e);
                    var n = u(i);

                    function i(e) {
                        var a;
                        return (0, r["default"])(this, i), (a = n.call(this, e)).name = "自动阅读模块", a.autoBtnDom = t("#js_ftAutoBtn"), a
                    }
                    return (0, a["default"])(i, [{
                        key: "initEvent",
                        value: function () {
                            var e = this,
                                n = t("body");
                            n.on("click", "#readerContainer", function () {
                                e.$emit.call("stopAutoRead")
                            }), n.on("click", "#js_ftAutoBtn", function () {
                                e.isV && e.cliAutoRead()
                            }), this.isV || this.autoBtnDom.addClass("disabled")
                        }
                    }, {
                        key: "atferStartAutoRead",
                        value: function () {
                            this.$emit.call("closeCatalog"), this.autoBtnDom.addClass("active")
                        }
                    }, {
                        key: "atferStopAutoRead",
                        value: function () {
                            this.autoBtnDom.removeClass("active")
                        }
                    }, {
                        key: "afterChangeSpeed",
                        value: function () {}
                    }]), i
                }(i(n("XXVv"))["default"]);
                e["default"] = l
            }).call(this, n("+2Rf"))
        },
        ZhPi: function (t, e, n) {
            var i = n("WkPL");
            t.exports = function (t, e) {
                if (t) {
                    if ("string" == typeof t) return i(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                }
            }
        },
        a1gu: function (t, e, n) {
            var i = n("cDf5"),
                r = n("PJYZ");
            t.exports = function (t, e) {
                return !e || "object" !== i(e) && "function" != typeof e ? r(t) : e
            }
        },
        ciVm: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("pIFo"), n("dRSK"), n("f3/d");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("iWIM")),
                s = i(n("7W2i")),
                c = i(n("a1gu")),
                u = i(n("Nsbk"));

            function l(t) {
                var e = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var n, i = (0, u["default"])(t);
                    if (e) {
                        var r = (0, u["default"])(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, c["default"])(this, n)
                }
            }
            var h = function (t) {
                (0, s["default"])(n, t);
                var e = l(n);

                function n(t) {
                    var i;
                    return (0, r["default"])(this, n), (i = e.call(this, t)).name = "cnzz统计", i.cnzzModule = {}, i
                }
                return (0, a["default"])(n, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, u["default"])(n.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterImageIndexChange"]), this.initModules()
                    }
                }, {
                    key: "initModules",
                    value: function () {
                        var t = this.modules.cnzzCount;
                        t && (this.cnzzModule = t)
                    }
                }, {
                    key: "afterChapterImageIndexChange",
                    value: function () {
                        if (window.cnzz) {
                            var t = this.states,
                                e = t.currentChapter.chapterId,
                                n = t.currentChapterImageIndex,
                                i = this.states.chapterImageList.find(function (t) {
                                    return t.chapterId === e && t.index === n
                                });
                            i.isPushCnzz || (this.cnzzModule(cnzz), _czc.push(["_trackPageview", location.href.replace(location.origin, ""), location.href]), i.isPushCnzz = !0)
                        }
                    }
                }]), n
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        cmuy: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "ImageLoader", {
                enumerable: !0,
                get: function () {
                    return r["default"]
                }
            }), Object.defineProperty(e, "ComicLoader", {
                enumerable: !0,
                get: function () {
                    return a["default"]
                }
            }), Object.defineProperty(e, "ReadModeV", {
                enumerable: !0,
                get: function () {
                    return o["default"]
                }
            }), Object.defineProperty(e, "ReadModeH", {
                enumerable: !0,
                get: function () {
                    return s["default"]
                }
            }), Object.defineProperty(e, "ChapterObserver", {
                enumerable: !0,
                get: function () {
                    return c["default"]
                }
            }), Object.defineProperty(e, "ImageLoadLine", {
                enumerable: !0,
                get: function () {
                    return u["default"]
                }
            }), Object.defineProperty(e, "Advert", {
                enumerable: !0,
                get: function () {
                    return l["default"]
                }
            }), Object.defineProperty(e, "Slider", {
                enumerable: !0,
                get: function () {
                    return h["default"]
                }
            }), Object.defineProperty(e, "HistoryRecord", {
                enumerable: !0,
                get: function () {
                    return f["default"]
                }
            }), Object.defineProperty(e, "CnzzCount", {
                enumerable: !0,
                get: function () {
                    return d["default"]
                }
            }), Object.defineProperty(e, "BomSet", {
                enumerable: !0,
                get: function () {
                    return p["default"]
                }
            });
            var r = i(n("68Y+")),
                a = i(n("Uvps")),
                o = i(n("AcyU")),
                s = i(n("ziw+")),
                c = i(n("SjK1")),
                u = i(n("K/0x")),
                l = i(n("6cS9")),
                h = i(n("JRrf")),
                f = i(n("IenY")),
                d = i(n("ciVm")),
                p = i(n("X7qu"))
        },
        dc4x: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("SRfc"), n("pIFo"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("V+eJ"), n("KKXr");
                var r = i(n("cDf5"));
                n("dRSK");
                var a, o, s, c, u, l, h, f = i(n("lwsE")),
                    d = i(n("W8MJ")),
                    p = i(n("a2c0")),
                    v = (a = ACGN.ejs, o = 96, s = 50, c = 30, u = 120, l = 100, h = {
                        wrap: '<div class="barrages-wrap"></div>',
                        bulletStart: '<div id="bullet<$= id $>" class="bullet" data-id="<$= id $>"><div class="bullet-inside">',
                        bulletEnd: "</div></div>"
                    }, function () {
                        function e(n, i) {
                            var a = this;
                            (0, f["default"])(this, e);
                            var o = t(n);
                            if (!o.length) throw Error("没有找到指定的container");
                            this.container = o, this.container.html(h.wrap), this.wrap = this.container.find(".barrages-wrap"), this.win = t(window), this.body = t("body"), this.options = {
                                height: this.win,
                                speed: 5,
                                max: 10
                            }, "object" === (0, r["default"])(i) && (i.speed && this.changeSpeed(i.speed), i.height && (this.options.height = i.height), i.max && (this.options.max = i.max)), this._destroyed = !1, this.moveType = p["default"].supportCss3("transform") ? "transform" : "position", this.bullets = {}, this.rows = {}, this.cache = [], this.memory = {
                                mainCount: 0,
                                cacheCount: 0,
                                groupCount: 0,
                                bulletCount: 0,
                                mainInterval: null,
                                bulletsLength: 0,
                                activeIndex: -1,
                                emptyRows: ",",
                                validRow: 0
                            }, this.event = {
                                bulletClick: [],
                                bulletHoverIn: [],
                                bulletHoverOut: []
                            };
                            var s = null;
                            this.evtContainerClick = function (e) {
                                var n = t(e.target),
                                    i = n.hasClass("bullet") ? n : n.parents(".bullet");
                                if (i.length) {
                                    var r = parseInt(i.data("id"));
                                    a.trigger("bulletClick", {
                                        id: a.bullets[r].id,
                                        data: t.extend(!0, {}, a.bullets[r].data)
                                    })
                                }
                            }, this.evtContainerMove = function (e) {
                                e.stopPropagation();
                                var n = t(e.target),
                                    i = null,
                                    r = n.hasClass("bullet") ? n : n.parents(".bullet");
                                if (r.length && (i = r[0]), i !== s) {
                                    if (s) {
                                        var o = parseInt(t(s).data("id")),
                                            c = a.bullets[o];
                                        c && a.trigger("bulletHoverOut", {
                                            id: c.id,
                                            data: t.extend(!0, {}, c.data)
                                        })
                                    }
                                    if (i) {
                                        var u = parseInt(r.data("id")),
                                            l = a.bullets[u];
                                        l && (a.trigger("bulletHoverIn", {
                                            id: l.id,
                                            data: t.extend(!0, {}, l.data)
                                        }), s = i)
                                    } else s = null
                                }
                            }, this.evtBodyMove = function (e) {
                                if (s) {
                                    var n = parseInt(t(s).data("id")),
                                        i = a.bullets[n];
                                    i && a.trigger("bulletHoverOut", {
                                        id: i.id,
                                        data: t.extend(!0, {}, i.data)
                                    }), s = null
                                }
                            }, this.container.on("click", this.evtContainerClick).on("mousemove", this.evtContainerMove), this.body.on("mousemove", this.evtBodyMove)
                        }
                        return (0, d["default"])(e, [{
                            key: "walk",
                            value: function () {
                                var t = this,
                                    e = this.memory,
                                    n = this.options;
                                if (e.mainCount++, e.mainCount % parseInt("432121212".charAt(this.options.speed - 1)) == 0 && (this._updataBullets(), this._updateRows(), e.bulletsLength < n.max && "," !== this.memory.emptyRows)) {
                                    var i = this.memory.emptyRows.slice(1, -1).split(","),
                                        r = i[parseInt(Math.random() * i.length)];
                                    this._insertBullet(r)
                                }
                                this.memory.mainInterval = requestAnimationFrame(function () {
                                    t.walk()
                                })
                            }
                        }, {
                            key: "play",
                            value: function () {
                                var t = this;
                                return !this._destroyed && !this.memory.mainInterval && void(this.memory.mainInterval = requestAnimationFrame(function () {
                                    t.walk()
                                }))
                            }
                        }, {
                            key: "stop",
                            value: function () {
                                if (this._destroyed) return !1;
                                cancelAnimationFrame(this.memory.mainInterval), this.memory.mainInterval = null
                            }
                        }, {
                            key: "clear",
                            value: function () {
                                for (var t in this.bullets) this._removeBullet(t)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                if (this._destroyed) return !1;
                                this.container.off("click", this.evtContainerClick).off("mousemove", this.evtContainerMove), this.body.off("mousemove", this.evtBodyMove), this.stop(), this.clear(), this.cache = [], this.rows = {}, this.bullets = {}, this._destroyed = !0
                            }
                        }, {
                            key: "addBullets",
                            value: function (e) {
                                if (this._destroyed) return !1;
                                if (e && e.length) {
                                    for (var n = t.extend(!0, [], e), i = ++this.memory.groupCount, a = 0; a < n.length; a++) {
                                        if ("object" !== (0, r["default"])(n[a])) throw Error("传入了错误的弹幕内容");
                                        if ("string" != typeof n[a].template || "object" !== (0, r["default"])(n[a].data)) throw Error("传入了错误的弹幕内容");
                                        n[a].status = !1, n[a].groupId = i, n[a].id = ++this.memory.cacheCount, this.cache = this.cache.concat([n[a]])
                                    }
                                    return i
                                }
                            }
                        }, {
                            key: "insertBullet",
                            value: function (t, e, n) {
                                if (!this.cache.length) {
                                    var i = ++this.memory.cacheCount,
                                        a = ++this.memory.groupCount;
                                    return t.status = !1, t.id = i, t.groupId = a, this.cache[0] = t, a
                                }
                                if (e > this.cache.length + 1) return !1;
                                if (e < 0) return !1;
                                var o = parseInt(e);
                                if ("object" === (0, r["default"])(t) && "string" == typeof t.template && "object" === (0, r["default"])(t.data)) {
                                    t.status = !1, t.id = ++this.memory.cacheCount;
                                    var s = null,
                                        c = null;
                                    o - 1 >= 0 && (s = this.cache[o - 1].groupId), o + 1 < this.cache.length && (c = this.cache[o + 1].groupId);
                                    var u = null,
                                        l = n || "auto";
                                    return null !== u || "before" !== l && "auto" !== l || null !== s && (u = s), null !== u || "after" !== l && "auto" !== l || null !== c && (u = c), null !== u || "new" !== l && "auto" !== l || (u = ++this.memory.groupCount), !!u && (t.groupId = u, this.cache.splice(o, 0, t), u)
                                }
                                return !1
                            }
                        }, {
                            key: "insertNewBullet",
                            value: function (t) {
                                var e = this.memory.activeIndex + 1;
                                return this.insertBullet(t, e, "auto")
                            }
                        }, {
                            key: "removeBullets",
                            value: function (t) {
                                if (this._destroyed) return !1;
                                if (t) {
                                    if (!("number" == typeof t && t > 0) || isNaN(t)) throw Error("传入了错误的group");
                                    for (var e = 0; e < this.cache.length; e++) this.cache[e].groupId === t && (this.cache.splice(e, 1), e--)
                                } else this.cache = [];
                                var n = "," + this.cache.join(",") + ",",
                                    i = null;
                                for (var r in this.bullets) i = this.bullets[r].cacheId, -1 === n.indexOf("," + i + ",") && (this.bullets[r].action = "move!!")
                            }
                        }, {
                            key: "pauseBullet",
                            value: function (t) {
                                if (this._destroyed) return !1;
                                this.bullets[t] && -1 !== "moving,start,end".indexOf(this.bullets[t].status) && (this.bullets[t].action = "pause")
                            }
                        }, {
                            key: "changeSpeed",
                            value: function (t) {
                                t >= 1 && t <= 9 && (this.options.speed = parseInt(t))
                            }
                        }, {
                            key: "addSpeed",
                            value: function () {
                                this.changeSpeed(this.options.speed + 1)
                            }
                        }, {
                            key: "reduceSpeed",
                            value: function () {
                                this.changeSpeed(this.options.speed - 1)
                            }
                        }, {
                            key: "playBullet",
                            value: function (t) {
                                if (this._destroyed) return !1;
                                this.bullets[t] && -1 !== "pausing".indexOf(this.bullets[t].status) && (this.bullets[t].action = "move")
                            }
                        }, {
                            key: "on",
                            value: function (t, e) {
                                var n = this.event[t];
                                if (!n) throw Error("不存在事件类型:" + n);
                                if ("function" != typeof e) throw Error("必须传入一个事件函数");
                                n.push(e)
                            }
                        }, {
                            key: "off",
                            value: function (t, e) {
                                var n = this.event[t];
                                if (!n) throw Error("不存在事件类型:" + n);
                                if (e) {
                                    if ("function" != typeof e) throw Error("必须传入一个事件函数");
                                    for (var i = 0; i < n.length; i++) e === n[i] && (n.splice(i, 1), i--)
                                } else this.event[t] = []
                            }
                        }, {
                            key: "trigger",
                            value: function (t, e) {
                                var n = this.event[t];
                                if (n && n.length)
                                    for (var i = 0; i < n.length && n[i](e); i++);
                            }
                        }, {
                            key: "_updateRows",
                            value: function () {
                                var t = 0;
                                "number" == typeof this.options.height ? t = this.options.height : "object" === (0, r["default"])(this.options.height) && (t = parseInt(this.options.height.height() / 2));
                                for (var e = parseInt(t / o), n = Object.keys(this.rows).length, i = this.memory.validRow !== e, a = null, s = null, c = ",", u = 0; u < n; u++) {
                                    var l = !1;
                                    if ((a = this.rows[u]).bullets.length) {
                                        s = null;
                                        for (var h = null, f = 0; f < a.bullets.length; f++) h = a.bullets[f], this.bullets[h.id] && "over" !== h.status ? "begin" !== h.status && "start" !== h.status || (l = !0) : (a.bullets.splice(f, 1), f--)
                                    }!l && a.use && (c += u + ","), i && (u <= e ? a.use = !0 : (a.use = !1, null === s && (s = u)))
                                }
                                if (e + 1 < n) {
                                    if (null !== s)
                                        for (var d = s; d < n; d++) delete this.rows[d], c.replace("," + d, "")
                                } else
                                    for (var p = n; p < e; p++) this.rows[p] = {
                                        use: !0,
                                        bullets: []
                                    }, c += p + ",";
                                this.memory.validRow = e, this.memory.emptyRows = c
                            }
                        }, {
                            key: "_updataBullets",
                            value: function () {
                                var t = this.wrap.width(),
                                    e = Math.max(parseInt("111132537".charAt(this.options.speed - 1)), 1),
                                    n = e / l,
                                    i = null;
                                for (var r in this.bullets) {
                                    if ("begin" === (i = this.bullets[r]).status && (i.action = "insert"), "insert" === i.action && (this._moveBullet(i.el, t + parseInt(Math.random() * u + c)), this.wrap.append(i.el), i.status = "start", i.action = "move"), "move" === i.action || "move!!" === i.action) {
                                        var a = i.el,
                                            o = a.width(),
                                            h = this._getbulletLeft(a),
                                            f = parseFloat(a.css("opacity"));
                                        isNaN(h) && (h = t), isNaN(f) && (f = 1), "move!!" === i.action ? h -= 9 * e : h -= e, this._moveBullet(a, h), h < -o && f <= 0 ? i.action = "delete" : h < 0 ? (f > 0 && (f = Math.max(f - n, 0)), a.css("opacity", f), i.status = "end") : h < t - o - s ? i.status = "moving" : (f < 1 && (f = Math.min(f + n, 1)), a.css("opacity", f), i.status = "start")
                                    }
                                    "pause" === i.action && (i.el.css("opacity", 1), i.status = "pausing"), "delete" === i.action && (i.status = "over", this._removeBullet(r)), i.el.attr("class", "bullet bullet-" + i.status)
                                }
                                this.memory.bulletsLength = Object.keys(this.bullets).length
                            }
                        }, {
                            key: "_insertBullet",
                            value: function (e) {
                                if (!this.cache.length) return !1;
                                if (!this.rows[e]) return !1;
                                var n = this._getNextCache(this.memory.activeIndex + 1);
                                if (null === n) return !1;
                                var i = this.memory.bulletCount + 1,
                                    r = this.cache[n],
                                    s = r.id,
                                    c = null;
                                try {
                                    c = a.render(r.template, r.data, {
                                        delimiter: "$"
                                    })
                                } catch (d) {}
                                c || (c = r.template = "数据错误");
                                var u = a.render(h.bulletStart, {
                                        id: i
                                    }, {
                                        delimiter: "$"
                                    }) + c + h.bulletEnd,
                                    l = t(u).css("top", e * o + "px"),
                                    f = {
                                        id: i,
                                        cacheId: s,
                                        data: r.data,
                                        template: r.template,
                                        el: l,
                                        row: e,
                                        action: null,
                                        status: "begin"
                                    };
                                this.bullets[i] = f, this.rows[e].bullets.push(f), this.memory.bulletCount++, this.memory.activeIndex = n, r.status = !0
                            }
                        }, {
                            key: "_removeBullet",
                            value: function (t) {
                                var e = this.bullets[t],
                                    n = e.cacheId;
                                e.el.remove();
                                var i = this.cache.length;
                                if (delete this.bullets[t], i)
                                    for (var r = 0; r < i; r++)
                                        if (this.cache[r].id === n) {
                                            this.cache[r].status = !1;
                                            break
                                        }
                            }
                        }, {
                            key: "_getbulletLeft",
                            value: function (t) {
                                if ("transform" === this.moveType) {
                                    var e = t.css("transform"),
                                        n = null;
                                    return null === e.match(/matrix3d/) ? (n = e.match(/\-?\d*?(px)*\,\s\-?\d*?\)$/)) && n.length ? parseInt(n[0].split(",")[0]) : 0 : (n = e.match(/\-?\d*?(px)*\,\s\-?\d*?,\s\-?\d*?,\s\-?\d*?\)$/)) && n.length ? parseInt(n[0].split(",")[0]) : 0
                                }
                                return parseInt(t.css("left"))
                            }
                        }, {
                            key: "_moveBullet",
                            value: function (t, e) {
                                "transform" === this.moveType ? t.css("transform", "translate3d(" + e + "px, 0, 0)") : t.css("left", e + "px")
                            }
                        }, {
                            key: "_getNextCache",
                            value: function (t) {
                                var e = this.cache.length;
                                if (!e) return null;
                                var n = t;
                                n >= e && (n = 0);
                                for (var i = null, r = 0; r < e; r++)
                                    if ((i = n + r) >= e && (i = 0), !1 === this.cache[i].status) return i;
                                return null
                            }
                        }]), e
                    }());
                e["default"] = v
            }).call(this, n("+2Rf"))
        },
        dtkt: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0;
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = new(function () {
                    function t() {
                        (0, r["default"])(this, t)
                    }
                    return (0, a["default"])(t, [{
                        key: "$error",
                        value: function (t) {}
                    }, {
                        key: "$message",
                        value: function (t) {}
                    }, {
                        key: "$time",
                        value: function (t, e) {}
                    }]), t
                }());
            e["default"] = o
        },
        e7yV: function (t, e, n) {
            var i = n("aCFj"),
                r = n("kJMx").f,
                a = {}.toString,
                o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function (t) {
                return o && "[object Window]" == a.call(t) ? function (t) {
                    try {
                        return r(t)
                    } catch (e) {
                        return o.slice()
                    }
                }(t) : r(i(t))
            }
        },
        etg0: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("WLL4"), n("rE2o"), n("ioFf"), n("HEwt"), n("a1Th"), n("h7Nl"), n("rGqo"), n("yt8O"), n("Btvt"), n("XfO3"), n("T39b"), n("hHhE"), n("f3/d"), n("91GP");
            var r = i(n("cDf5"));
            n("LK8F");
            var a = i(n("lwsE")),
                o = i(n("W8MJ"));

            function s(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    s = !1;
                return {
                    s: function () {
                        n = t[Symbol.iterator]()
                    },
                    n: function () {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function (t) {
                        s = !0, a = t
                    },
                    f: function () {
                        try {
                            o || null == n["return"] || n["return"]()
                        } finally {
                            if (s) throw a
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }
            var u = function () {
                function t(e) {
                    (0, a["default"])(this, t), Array.isArray(e) || (e = []), this._args = e, this.taps = [], this.interceptors = [], this.call = this._call, this.promise = this._promise, this.callAsync = this._callAsync, this._x = undefined
                }
                return (0, o["default"])(t, [{
                    key: "compile",
                    value: function (t) {
                        throw new Error("Abstract: should be overriden")
                    }
                }, {
                    key: "_createCall",
                    value: function (t) {
                        return this.compile({
                            taps: this.taps,
                            interceptors: this.interceptors,
                            args: this._args,
                            type: t
                        })
                    }
                }, {
                    key: "tap",
                    value: function (t, e) {
                        if ("string" == typeof t && (t = {
                                name: t
                            }), "object" !== (0, r["default"])(t) || null === t) throw new Error("Invalid arguments to tap(options: Object, fn: function)");
                        if ("string" != typeof (t = Object.assign({
                                type: "sync",
                                fn: e
                            }, t)).name || "" === t.name) throw new Error("Missing name for tap");
                        t = this._runRegisterInterceptors(t), this._insert(t)
                    }
                }, {
                    key: "tapAsync",
                    value: function (t, e) {
                        if ("string" == typeof t && (t = {
                                name: t
                            }), "object" !== (0, r["default"])(t) || null === t) throw new Error("Invalid arguments to tapAsync(options: Object, fn: function)");
                        if ("string" != typeof (t = Object.assign({
                                type: "async",
                                fn: e
                            }, t)).name || "" === t.name) throw new Error("Missing name for tapAsync");
                        t = this._runRegisterInterceptors(t), this._insert(t)
                    }
                }, {
                    key: "tapPromise",
                    value: function (t, e) {
                        if ("string" == typeof t && (t = {
                                name: t
                            }), "object" !== (0, r["default"])(t) || null === t) throw new Error("Invalid arguments to tapPromise(options: Object, fn: function)");
                        if ("string" != typeof (t = Object.assign({
                                type: "promise",
                                fn: e
                            }, t)).name || "" === t.name) throw new Error("Missing name for tapPromise");
                        t = this._runRegisterInterceptors(t), this._insert(t)
                    }
                }, {
                    key: "_runRegisterInterceptors",
                    value: function (t) {
                        var e, n = s(this.interceptors);
                        try {
                            for (n.s(); !(e = n.n()).done;) {
                                var i = e.value;
                                if (i.register) {
                                    var r = i.register(t);
                                    r !== undefined && (t = r)
                                }
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                        return t
                    }
                }, {
                    key: "withOptions",
                    value: function (t) {
                        var e = function (e) {
                            return Object.assign({}, t, "string" == typeof e ? {
                                name: e
                            } : e)
                        };
                        t = Object.assign({}, t, this._withOptions);
                        var n = this._withOptionsBase || this,
                            i = Object.create(n);
                        return i.tapAsync = function (t, i) {
                            return n.tapAsync(e(t), i)
                        }, i.tap = function (t, i) {
                            return n.tap(e(t), i)
                        }, i.tapPromise = function (t, i) {
                            return n.tapPromise(e(t), i)
                        }, i._withOptions = t, i._withOptionsBase = n, i
                    }
                }, {
                    key: "isUsed",
                    value: function () {
                        return this.taps.length > 0 || this.interceptors.length > 0
                    }
                }, {
                    key: "intercept",
                    value: function (t) {
                        if (this._resetCompilation(), this.interceptors.push(Object.assign({}, t)), t.register)
                            for (var e = 0; e < this.taps.length; e++) this.taps[e] = t.register(this.taps[e])
                    }
                }, {
                    key: "_resetCompilation",
                    value: function () {
                        this.call = this._call, this.callAsync = this._callAsync, this.promise = this._promise
                    }
                }, {
                    key: "_insert",
                    value: function (t) {
                        var e;
                        this._resetCompilation(), "string" == typeof t.before ? e = new Set([t.before]) : Array.isArray(t.before) && (e = new Set(t.before));
                        var n = 0;
                        "number" == typeof t.stage && (n = t.stage);
                        for (var i = this.taps.length; i > 0;) {
                            i--;
                            var r = this.taps[i];
                            this.taps[i + 1] = r;
                            var a = r.stage || 0;
                            if (e) {
                                if (e.has(r.name)) {
                                    e["delete"](r.name);
                                    continue
                                }
                                if (e.size > 0) continue
                            }
                            if (!(a > n)) {
                                i++;
                                break
                            }
                        }
                        this.taps[i] = t
                    }
                }]), t
            }();

            function l(t, e) {
                return function () {
                    return this[t] = this._createCall(e), this[t].apply(this, arguments)
                }
            }
            Object.defineProperties(u.prototype, {
                _call: {
                    value: l("call", "sync"),
                    configurable: !0,
                    writable: !0
                },
                _promise: {
                    value: l("promise", "promise"),
                    configurable: !0,
                    writable: !0
                },
                _callAsync: {
                    value: l("callAsync", "async"),
                    configurable: !0,
                    writable: !0
                }
            }), t.exports = u
        },
        gFQe: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("OG14"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "FreeRead模块", e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.init()
                        }
                    }, {
                        key: "init",
                        value: function () {
                            /islimit\=false/g.test(location.search) && (this.states.isInsideMode = !0, this.states.enablePay = !1, setTimeout(function () {
                                t("#js_guessSidebarBtn,#js_dmBox").remove()
                            }))
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        gHnn: function (t, e, n) {
            var i = n("dyZX"),
                r = n("GZEu").set,
                a = i.MutationObserver || i.WebKitMutationObserver,
                o = i.process,
                s = i.Promise,
                c = "process" == n("LZWt")(o);
            t.exports = function () {
                var t, e, n, u = function () {
                    var i, r;
                    for (c && (i = o.domain) && i.exit(); t;) {
                        r = t.fn, t = t.next;
                        try {
                            r()
                        } catch (a) {
                            throw t ? n() : e = undefined, a
                        }
                    }
                    e = undefined, i && i.enter()
                };
                if (c) n = function () {
                    o.nextTick(u)
                };
                else if (!a || i.navigator && i.navigator.standalone)
                    if (s && s.resolve) {
                        var l = s.resolve(undefined);
                        n = function () {
                            l.then(u)
                        }
                    } else n = function () {
                        r.call(i, u)
                    };
                else {
                    var h = !0,
                        f = document.createTextNode("");
                    new a(u).observe(f, {
                        characterData: !0
                    }), n = function () {
                        f.data = h = !h
                    }
                }
                return function (i) {
                    var r = {
                        fn: i,
                        next: undefined
                    };
                    e && (e.next = r), t || (t = r, n()), e = r
                }
            }
        },
        ge8p: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("f3/d");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ")),
                    o = i(n("iWIM")),
                    s = i(n("7W2i")),
                    c = i(n("a1gu")),
                    u = i(n("Nsbk"));

                function l(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, u["default"])(t);
                        if (e) {
                            var r = (0, u["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, c["default"])(this, n)
                    }
                }
                var h = function (e) {
                    (0, s["default"])(i, e);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "热键操作", e.isV = !0, e.fire = !1, e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.isV = this.states.readMode === this.types.mode.V, this.initEvent()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            t(document).keydown(function (t) {
                                if (!e.fire) {
                                    switch (t.keyCode) {
                                        case 37:
                                            !e.isV && e.cliPrevPage(), e.isV && e.cliPrev();
                                            break;
                                        case 39:
                                            !e.isV && e.cliNextPage(), e.isV && e.cliNext();
                                            break;
                                        case 38:
                                            !e.isV && e.cliPrev();
                                            break;
                                        case 40:
                                            !e.isV && e.cliNext()
                                    }
                                    e.fire = !0
                                }
                            }), t(document).keyup(function (t) {
                                e.fire = !1
                            })
                        }
                    }, {
                        key: "cliNextPage",
                        value: function () {
                            this.$emit.call("directNextPage")
                        }
                    }, {
                        key: "cliPrevPage",
                        value: function () {
                            this.$emit.call("directPrevPage")
                        }
                    }, {
                        key: "cliPrev",
                        value: function () {
                            var t = !!this.states.isSwiperReverse;
                            this.directChapter(t)
                        }
                    }, {
                        key: "cliNext",
                        value: function () {
                            var t = !this.states.isSwiperReverse;
                            this.directChapter(t)
                        }
                    }, {
                        key: "directChapter",
                        value: function (t) {
                            var e = this.states.currentChapter,
                                n = e.nextChapterId,
                                i = e.prevChapterId,
                                r = e.isLock,
                                a = t ? n : i,
                                o = this.states.chapterListMap[i];
                            a ? r && (t || o && o.isLock) ? ACGN.layer.toast("当前章节需要付费，不支持切换章节") : this.$emit.call("directChapterIndex", {
                                chapterId: a,
                                isNext: t
                            }) : ACGN.layer.toast(t ? "已经是最新一章了" : "已经是第一章了")
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = h
            }).call(this, n("+2Rf"))
        },
        hHhE: function (t, e, n) {
            var i = n("XKFU");
            i(i.S, "Object", {
                create: n("Kuth")
            })
        },
        iWIM: function (t, e, n) {
            var i = n("n3AX");

            function r(e, n, a) {
                return "undefined" != typeof Reflect && Reflect.get ? t.exports = r = Reflect.get : t.exports = r = function (t, e, n) {
                    var r = i(t, e);
                    if (r) {
                        var a = Object.getOwnPropertyDescriptor(r, e);
                        return a.get ? a.get.call(n) : a.value
                    }
                }, r(e, n, a || e)
            }
            t.exports = r
        },
        ioFf: function (t, e, n) {
            "use strict";
            var i = n("dyZX"),
                r = n("aagx"),
                a = n("nh4g"),
                o = n("XKFU"),
                s = n("KroJ"),
                c = n("Z6vF").KEY,
                u = n("eeVq"),
                l = n("VTer"),
                h = n("fyDq"),
                f = n("ylqs"),
                d = n("K0xU"),
                p = n("N8g3"),
                v = n("OnI7"),
                m = n("1MBn"),
                y = n("EWmC"),
                g = n("y3w9"),
                I = n("0/R4"),
                C = n("S/j/"),
                k = n("aCFj"),
                b = n("apmT"),
                w = n("RjD/"),
                _ = n("Kuth"),
                S = n("e7yV"),
                x = n("EemH"),
                R = n("JiEa"),
                P = n("hswa"),
                M = n("DVgA"),
                E = x.f,
                O = P.f,
                T = S.f,
                A = i.Symbol,
                D = i.JSON,
                N = D && D.stringify,
                j = d("_hidden"),
                L = d("toPrimitive"),
                H = {}.propertyIsEnumerable,
                W = l("symbol-registry"),
                F = l("symbols"),
                B = l("op-symbols"),
                $ = Object.prototype,
                G = "function" == typeof A && !!R.f,
                V = i.QObject,
                q = !V || !V.prototype || !V.prototype.findChild,
                z = a && u(function () {
                    return 7 != _(O({}, "a", {
                        get: function () {
                            return O(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function (t, e, n) {
                    var i = E($, e);
                    i && delete $[e], O(t, e, n), i && t !== $ && O($, e, i)
                } : O,
                U = function (t) {
                    var e = F[t] = _(A.prototype);
                    return e._k = t, e
                },
                J = G && "symbol" == typeof A.iterator ? function (t) {
                    return "symbol" == typeof t
                } : function (t) {
                    return t instanceof A
                },
                K = function (t, e, n) {
                    return t === $ && K(B, e, n), g(t), e = b(e, !0), g(n), r(F, e) ? (n.enumerable ? (r(t, j) && t[j][e] && (t[j][e] = !1), n = _(n, {
                        enumerable: w(0, !1)
                    })) : (r(t, j) || O(t, j, w(1, {})), t[j][e] = !0), z(t, e, n)) : O(t, e, n)
                },
                X = function (t, e) {
                    g(t);
                    for (var n, i = m(e = k(e)), r = 0, a = i.length; a > r;) K(t, n = i[r++], e[n]);
                    return t
                },
                Q = function (t) {
                    var e = H.call(this, t = b(t, !0));
                    return !(this === $ && r(F, t) && !r(B, t)) && (!(e || !r(this, t) || !r(F, t) || r(this, j) && this[j][t]) || e)
                },
                Y = function (t, e) {
                    if (t = k(t), e = b(e, !0), t !== $ || !r(F, e) || r(B, e)) {
                        var n = E(t, e);
                        return !n || !r(F, e) || r(t, j) && t[j][e] || (n.enumerable = !0), n
                    }
                },
                Z = function (t) {
                    for (var e, n = T(k(t)), i = [], a = 0; n.length > a;) r(F, e = n[a++]) || e == j || e == c || i.push(e);
                    return i
                },
                tt = function (t) {
                    for (var e, n = t === $, i = T(n ? B : k(t)), a = [], o = 0; i.length > o;) !r(F, e = i[o++]) || n && !r($, e) || a.push(F[e]);
                    return a
                };
            G || (s((A = function () {
                if (this instanceof A) throw TypeError("Symbol is not a constructor!");
                var t = f(arguments.length > 0 ? arguments[0] : undefined),
                    e = function (n) {
                        this === $ && e.call(B, n), r(this, j) && r(this[j], t) && (this[j][t] = !1), z(this, t, w(1, n))
                    };
                return a && q && z($, t, {
                    configurable: !0,
                    set: e
                }), U(t)
            }).prototype, "toString", function () {
                return this._k
            }), x.f = Y, P.f = K, n("kJMx").f = S.f = Z, n("UqcF").f = Q, R.f = tt, a && !n("LQAc") && s($, "propertyIsEnumerable", Q, !0), p.f = function (t) {
                return U(d(t))
            }), o(o.G + o.W + o.F * !G, {
                Symbol: A
            });
            for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
            for (var it = M(d.store), rt = 0; it.length > rt;) v(it[rt++]);
            o(o.S + o.F * !G, "Symbol", {
                "for": function (t) {
                    return r(W, t += "") ? W[t] : W[t] = A(t)
                },
                keyFor: function (t) {
                    if (!J(t)) throw TypeError(t + " is not a symbol!");
                    for (var e in W)
                        if (W[e] === t) return e
                },
                useSetter: function () {
                    q = !0
                },
                useSimple: function () {
                    q = !1
                }
            }), o(o.S + o.F * !G, "Object", {
                create: function (t, e) {
                    return e === undefined ? _(t) : X(_(t), e)
                },
                defineProperty: K,
                defineProperties: X,
                getOwnPropertyDescriptor: Y,
                getOwnPropertyNames: Z,
                getOwnPropertySymbols: tt
            });
            var at = u(function () {
                R.f(1)
            });
            o(o.S + o.F * at, "Object", {
                getOwnPropertySymbols: function (t) {
                    return R.f(C(t))
                }
            }), D && o(o.S + o.F * (!G || u(function () {
                var t = A();
                return "[null]" != N([t]) || "{}" != N({
                    a: t
                }) || "{}" != N(Object(t))
            })), "JSON", {
                stringify: function (t) {
                    for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
                    if (n = e = i[1], (I(e) || t !== undefined) && !J(t)) return y(e) || (e = function (t, e) {
                        if ("function" == typeof n && (e = n.call(this, t, e)), !J(e)) return e
                    }), i[1] = e, N.apply(D, i)
                }
            }), A.prototype[L] || n("Mukb")(A.prototype, L, A.prototype.valueOf), h(A, "Symbol"), h(Math, "Math", !0), h(i.JSON, "JSON", !0)
        },
        j9mN: function (t, e, n) {},
        jm62: function (t, e, n) {
            var i = n("XKFU"),
                r = n("mQtv"),
                a = n("aCFj"),
                o = n("EemH"),
                s = n("8a7r");
            i(i.S, "Object", {
                getOwnPropertyDescriptors: function (t) {
                    for (var e, n, i = a(t), c = o.f, u = r(i), l = {}, h = 0; u.length > h;)(n = c(i, e = u[h++])) !== undefined && s(l, e, n);
                    return l
                }
            })
        },
        "k/JI": function (t, e, n) {},
        kCDH: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("HAE/"), n("WLL4"), n("jm62"), n("8+KV"), n("0l/t"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var r = i(n("lSNA")),
                a = i(n("lwsE")),
                o = i(n("W8MJ"));

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }
            var c = function () {
                function t(e) {
                    (0, a["default"])(this, t), e.states = function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? s(Object(n), !0).forEach(function (e) {
                                (0, r["default"])(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }({}, this.states())
                }
                return (0, o["default"])(t, [{
                    key: "states",
                    value: function () {
                        return {
                            container: null,
                            fillInfo: {
                                fillWidth: 0,
                                fillHeight: 0
                            },
                            enablePay: !1,
                            isForceStop: !1,
                            comicInfo: {},
                            chapterListMap: {},
                            chapterImageList: [],
                            totalDistance: 0,
                            currentDistance: 0,
                            currentChapter: null,
                            currentChapterImageIndex: 1,
                            scaleRatio: 1,
                            lightNumber: 1,
                            loadLine: {},
                            definitionFix: "",
                            readSpeed: 1,
                            readMode: "scroll",
                            isVerticalMode: !0,
                            enablePcFullScreen: !1,
                            enableAutoRead: !1,
                            enableBarrage: !1,
                            isSwiperReverse: !1,
                            isKeepMenu: !1,
                            isInsideMode: !1
                        }
                    }
                }]), t
            }();
            e["default"] = c
        },
        kMti: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("RW0V"), n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv"), n("Z2Ku"), n("L9s1");
                var r = i(n("RIqP"));
                n("INYr"), n("8+KV"), n("0l/t"), n("dRSK"), n("2Spj");
                var a = i(n("lSNA"));
                n("Tze0");
                var o = i(n("lwsE")),
                    s = i(n("W8MJ")),
                    c = i(n("iWIM")),
                    u = i(n("7W2i")),
                    l = i(n("a1gu")),
                    h = i(n("Nsbk"));

                function f(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        e && (i = i.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), n.push.apply(n, i)
                    }
                    return n
                }

                function d(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(Object(n), !0).forEach(function (e) {
                            (0, a["default"])(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }

                function p(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, h["default"])(t);
                        if (e) {
                            var r = (0, h["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, l["default"])(this, n)
                    }
                }
                var v = function (e) {
                    (0, u["default"])(i, e);
                    var n = p(i);

                    function i(t) {
                        var e;
                        return (0, o["default"])(this, i), (e = n.call(this, t)).initStates(), e.isIe = e.$utils.isIE(), e
                    }
                    return (0, s["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, c["default"])((0, h["default"])(i.prototype), "apply", this).call(this, t), this.hasCopyrightAndShowInfo() && (this.installHistoryInfo(), this.canRun() && (this.states.isVerticalMode = this.isV, this.installSelfTaps(), this.installTaps(["run", "afterChapterApiLoad", "updateImageDistance", "afterImageObserver", "directChapterImageIndex", "directChapterIndex", "unlockCharpterObserver"])))
                        }
                    }, {
                        key: "run",
                        value: function () {
                            this.initOptions(), this.initContainer(), this.initEvent(), this.initImageErrorEvent(), this.initChapter()
                        }
                    }, {
                        key: "directChapterImageIndex",
                        value: function (t) {
                            var e = t.index,
                                n = t.duration,
                                i = void 0 === n ? 0 : n,
                                r = t.offset,
                                a = void 0 === r ? 0 : r;
                            this.directChapterImageIndexNum(e, a, i)
                        }
                    }, {
                        key: "hasCopyrightAndShowInfo",
                        value: function () {
                            var e = t("#tpl_noCopyright");
                            0 === e.length && this.$error("缺少必要的#tpl_noCopyright模板");
                            var n = this.states.comicInfo;
                            if (!n.comicNoCopyright) return !0;
                            var i = e.html().trim();
                            return this.container.html(ejs.render(i, {
                                msg: n.comicNoCopyright,
                                delimiter: "$"
                            })), this.states.isForceStop = !0, !1
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var t = this;
                            this.container.on("touchstart", function (e) {
                                t.$emit.call("onContainerTouchStart", e)
                            }), this.container.on("touchmove", function (e) {
                                t.$emit.call("onContainerTouchMove", e)
                            }), this.container.on("touchend", function (e) {
                                t.$emit.call("onContainerTouchEnd", e)
                            }), this.container.on("click", function (e) {
                                t.$emit.call("onContainerClick", e)
                            }), this.initSelfEvent()
                        }
                    }, {
                        key: "initContainer",
                        value: function () {
                            this.container.addClass(this.isH ? "h" : "v"), this.container.addClass(this.states.isSwiperReverse ? "hl" : "");
                            var e = this.isV ? this.container : this.boxContainer.parent(),
                                n = Math.floor(e.width()),
                                i = this.states.fillInfo;
                            i.fillWidth = this.isV ? n : n / this.options.swiperImageNum, i.fillHeight = Math.floor(e.height()), this.isH && t(".acgn-reader-chapter__swiper-btns").show()
                        }
                    }, {
                        key: "initStates",
                        value: function () {
                            this.options = null, this.currentScroll = {
                                distance: 0,
                                chapter: null,
                                chapterImageIndex: 1,
                                isPrev: !1
                            }, this.loadingChapterApi = !1, this.chapterApiQueue = [], this.initQueue = [], this.chapterImageObserverQueue = [], this.isSupportCssTransform = this.$utils.supportCss3("transform")
                        }
                    }, {
                        key: "initOptions",
                        value: function () {
                            var t = this.getTemplate();
                            this.options = d(d({}, this.$options), {}, {
                                template: t
                            }, this.$reader.$options.read)
                        }
                    }, {
                        key: "initImageErrorEvent",
                        value: function () {
                            this.container.on("click", this.imageErrCli.bind(this))
                        }
                    }, {
                        key: "imageErrCli",
                        value: function (e) {
                            var n = this.$utils.getEventTarget(e),
                                i = t(n);
                            if (i.hasClass("tip-error-btn")) {
                                var r = i.attr("chapter-index") - 0,
                                    a = i.attr("chapter-pid"),
                                    o = this.states.chapterImageList.find(function (t) {
                                        return t.chapterId === a && t.index === r
                                    });
                                if (o) {
                                    o.isInited = !1, o.isCreateDom = !1;
                                    var s = i.parent().parent();
                                    s.html("".concat(o.chapterId, "-").concat(o.index)), s.removeClass("error"), this.$emit.call("runImageLoad")
                                }
                            }
                        }
                    }, {
                        key: "getTemplate",
                        value: function () {
                            var e = t("#tpl_chapterImgbox"),
                                n = t("#tpl_chapterImg");
                            return 0 !== e.length && 0 !== n.length || this.$error("阅读器初始化失败，缺少必要的#tpl_chapterImgbox,#tpl_chapterImg模板"), {
                                boxTemplate: e.html().trim(),
                                imgTemplate: n.html().trim()
                            }
                        }
                    }, {
                        key: "installHistoryInfo",
                        value: function () {
                            this.currentScroll.chapter = this.states.currentChapter, this.currentScroll.chapterImageIndex = this.states.currentChapterImageIndex
                        }
                    }, {
                        key: "initChapter",
                        value: function () {
                            var t = this,
                                e = this.currentScroll.chapter;
                            this.initQueue.push(e.chapterId);
                            var n = this.currentScroll.chapter,
                                i = n.chapterId,
                                r = n.nextChapterId,
                                a = n.prevChapterId;
                            !this.isV && a && (this.initQueue.push(a), setTimeout(function () {
                                t.$emit.call("runChapterApiLoad", {
                                    sourceChapterId: i,
                                    apiChapterId: a
                                })
                            })), r && (this.initQueue.push(r), setTimeout(function () {
                                t.$emit.call("runChapterApiLoad", {
                                    sourceChapterId: i,
                                    apiChapterId: r
                                })
                            })), this.afterChapterApiLoad({
                                sourceChapterId: e.chapterId,
                                chapter: e
                            }, !0)
                        }
                    }, {
                        key: "afterChapterApiLoad",
                        value: function (t, e) {
                            var n = t.chapter,
                                i = t.sourceChapterId,
                                r = this.states.chapterListMap[i],
                                a = n.chapterId === r.prevChapterId;
                            this.$emit.call("runImageLineLoad", {
                                domain: n.domain
                            });
                            var o = this.installDomAndImageList(t);
                            if (a) {
                                var s = this.states.chapterImageList.filter(function (t) {
                                        return t.chapterId === n.chapterId
                                    }),
                                    c = s[s.length - 1].endDistance;
                                this.repairPrevMove(this.currentScroll.distance + c)
                            }
                            e && this.isV && this.moveTo(50), this.finishLoadChapterApi();
                            var u = o.find('.acgn-reader-chapter__item:not(".no-chapter")');
                            n.isLock ? this.chapterImageObserverQueue[n.chapterId] = u : this.$emit.call("runImageObserver", u), this.readyCheck(t)
                        }
                    }, {
                        key: "unlockCharpterObserver",
                        value: function (t) {
                            var e = t.chapterId,
                                n = t.isLock,
                                i = this.$reader.states.chapterListMap[e];
                            if (i) {
                                var r = i.isLock;
                                if (i.isLock = n, n) return this.states.chapterImageList.filter(function (t) {
                                    return t.chapterId === e
                                }).forEach(function (t) {
                                    t.isCreateDom = !0
                                }), void this.lockChapterImage(e);
                                r && this.states.chapterImageList.filter(function (t) {
                                    return t.chapterId === e
                                }).forEach(function (t) {
                                    t.isLock = n, t.isCreateDom = !1
                                });
                                var a = this.chapterImageObserverQueue[e];
                                this.$emit.call("runImageObserver", a), delete this.chapterImageObserverQueue[e]
                            }
                        }
                    }, {
                        key: "updateImageDistance",
                        value: function () {
                            this.updateDistance()
                        }
                    }, {
                        key: "lockChapterImage",
                        value: function (t) {
                            for (var e = this.container.find('[chapter-pid="'.concat(t, '"]')), n = 0; n < e.length; n++) {
                                e.eq(n).find(".acgn-reader-chapter__loading-tip").addClass("lock").html("章节已锁定，请付费后浏览")
                            }
                        }
                    }, {
                        key: "createSlotsHtml",
                        value: function (t, e) {
                            var n = "",
                                i = "";
                            return this.getRelationList(t.slots).forEach(function (t) {
                                t.isBefore ? n += t.template : i += t.template
                            }), this.installSlotStr(n, e, i)
                        }
                    }, {
                        key: "afterImageObserver",
                        value: function (t) {
                            var e = t.chapterId,
                                n = t.index,
                                i = t.imgObj,
                                r = this.container.find('[chapter-index="'.concat(n, '"][chapter-pid="').concat(e, '"]')),
                                a = r.eq(0);
                            if (i) this.openImageDom(r.eq(r.length - 1), t), a.removeClass("loading");
                            else {
                                var o = this.states.comicInfo.comicName,
                                    s = this.states.chapterListMap[e];
                                a.find(".acgn-reader-chapter__loading-tip").addClass("error").html('\n        <p class="tip-error-msg">\n        《'.concat(o, "》").concat(s.chapterName, " 第").concat(t.index, '页 加载失败，您可以:\n          <br>\n         <span class="tip-error-btn" chapter-pid="').concat(e, '" chapter-index="').concat(n, '">重试</span>\n        </p>'))
                            }
                        }
                    }, {
                        key: "openImageDom",
                        value: function (t, e) {
                            this.installResizeImg(e);
                            var n = this.currentScroll.distance;
                            this.isV && t.css({
                                width: e.showWidth,
                                height: e.showHeight
                            });
                            var i = this.states.isInsideMode ? '<img class="acgn-reader-chapter__inside-img" src="'.concat(e.originUrl, '"/><span class="acgn-reader-chapter__inside-toast">').concat(e.index, "</span>") : e.index;
                            (t.html(i), t.css({
                                "background-image": "url(".concat(e.originUrl, ")")
                            }), e.imgObj = null, this.isV) && (this.updateDistance(), this.currentScroll.isPrev && this.isIniteQueueComplete && this.repairSingleHeight(n, e))
                        }
                    }, {
                        key: "getPrevChapter",
                        value: function () {
                            if (this.isIniteQueueComplete) {
                                var t = this.currentScroll.chapter,
                                    e = t.chapterId,
                                    n = t.prevChapterId,
                                    i = {
                                        sourceChapterId: e,
                                        apiChapterId: n
                                    };
                                this.validChapterAndUpdateQueue(n, "getPrevChapter") || (this.loadingChapterApi = !0, this.$emit.call("runChapterApiLoad", i))
                            }
                        }
                    }, {
                        key: "getNextChapter",
                        value: function () {
                            if (this.isIniteQueueComplete) {
                                var t = this.currentScroll.chapter,
                                    e = t.chapterId,
                                    n = t.nextChapterId,
                                    i = {
                                        sourceChapterId: e,
                                        apiChapterId: n
                                    };
                                this.validChapterAndUpdateQueue(n, "getNextChapter") || (this.loadingChapterApi = !0, this.$emit.call("runChapterApiLoad", i))
                            }
                        }
                    }, {
                        key: "hasMoreChapter",
                        value: function (t) {
                            var e = this.states.currentChapter,
                                n = e.nextChapterId,
                                i = e.prevChapterId;
                            return !!(t ? n : i)
                        }
                    }, {
                        key: "installDomAndImageList",
                        value: function (e) {
                            for (var n = e.sourceChapterId, i = e.chapter, r = this.options.template, a = r.boxTemplate, o = r.imgTemplate, s = this.states.chapterListMap[n], c = i.chapterId === s.prevChapterId, u = [], l = i.startPage; l <= i.endPage; l++) {
                                var h = this.$reader.entitys.getChapterImageModel(i, l);
                                u.push(h), this.$emit.call("runChapterImageSlot", h), this.fixSwiperNum(u, h, i)
                            }
                            this.updateImageList(u, n, c), this.updateDistance();
                            for (var f = this.getRelationList(u), d = "", p = 0; p < f.length; p++) {
                                var v = f[p],
                                    m = o.format(this.isV ? "auto" : this.fillInfo.fillWidth + "px", v.index, i.chapterId, v.index, this.getSwiperPositionClass(v), this.getWrapBoxWidth() * this.states.scaleRatio);
                                d += this.createSlotsHtml(v, m)
                            }
                            var y = a.format(i.chapterId, i.chapterName, d),
                                g = t(y);
                            return this.installChapterDom(c, g), this.$emit.call("afterChapterDomInstall", e), g
                        }
                    }, {
                        key: "getWrapBoxWidth",
                        value: function () {
                            return this.isV ? this.states.isInsideMode ? this.options.internalVerticalWidth : this.options.initVerticalWidth || this.fillInfo.fillWidth : this.options.swiperWidth / this.options.swiperImageNum
                        }
                    }, {
                        key: "getSwiperWidth",
                        value: function () {
                            return this.fillInfo.fillWidth * this.options.swiperImageNum
                        }
                    }, {
                        key: "getSwiperPositionClass",
                        value: function (t) {
                            return (t.endDistance - t.slots.length * this.fillInfo.fillWidth) % this.getSwiperWidth() == 0 ? "right" : "left"
                        }
                    }, {
                        key: "updateImageList",
                        value: function (t, e, n) {
                            var i, a = this.states.chapterImageList.findIndex(function (t) {
                                    return t.chapterId === e
                                }),
                                o = -1 === a,
                                s = this.currentScroll.chapter;
                            a = o ? 0 : a, a = n || o ? a : a + s.totalPage, (i = this.states.chapterImageList).splice.apply(i, [a, 0].concat((0, r["default"])(t)))
                        }
                    }, {
                        key: "validChapterAndUpdateQueue",
                        value: function (t, e) {
                            return !t || (!!this.chapterApiQueue.find(function (e) {
                                return e.chapterId === t
                            }) || (!!this.states.chapterListMap[t].isInited || (this.chapterApiQueue.push({
                                chapterId: t,
                                fn: e
                            }), !!this.loadingChapterApi)))
                        }
                    }, {
                        key: "updateCurrentChapter",
                        value: function () {
                            var t = this.states,
                                e = t.chapterImageList,
                                n = t.chapterListMap;
                            if (0 !== e.length) {
                                var i = this.currentScroll,
                                    r = i.chapter,
                                    a = i.chapterImageIndex,
                                    o = i.isPrev,
                                    s = i.distance,
                                    c = Math.min(s, e[e.length - 1].endDistance),
                                    u = this.options,
                                    l = u.preloadChapterScope,
                                    h = u.imageSwitchDistance,
                                    f = e.find(function (t) {
                                        return t.endDistance > c + h
                                    }),
                                    d = n[f.chapterId];
                                r !== d && (this.setCurrentChapter(d), this.$emit.call("afterChapterIndexChange"));
                                var p = f.index;
                                a !== p && (this.setCurrentChapterIndex(p), this.$emit.call("afterChapterImageIndexChange")), r.isLock || (!o && d.endPage - p <= l ? this.getNextChapter() : o && p <= l && this.getPrevChapter(), this.showLoadingTipBreak())
                            }
                        }
                    }, {
                        key: "setCurrentChapter",
                        value: function (t) {
                            this.currentScroll.chapter = this.states.currentChapter = t
                        }
                    }, {
                        key: "setCurrentChapterIndex",
                        value: function (t) {
                            this.currentScroll.chapterImageIndex = this.states.currentChapterImageIndex = t
                        }
                    }, {
                        key: "showLoadingTipBreak",
                        value: function () {
                            if (this.loadingChapterApi) {
                                var t = this.currentScroll.distance,
                                    e = this.states.totalDistance,
                                    n = this.isV ? this.fillInfo.fillHeight : this.fillInfo.fillWidth;
                                (0 === t || t + n >= e) && ACGN.layer.toast("加载中...")
                            }
                        }
                    }, {
                        key: "finishLoadChapterApi",
                        value: function () {
                            var t = this;
                            this.isIniteQueueComplete && setTimeout(function () {
                                t.loadingChapterApi = !1, t.chapterApiQueue.length = 0
                            }, 1e3)
                        }
                    }, {
                        key: "directChapterIndex",
                        value: function (t) {
                            var e = this,
                                n = t.chapterId,
                                i = t.isNext,
                                r = this.states.chapterListMap[n];
                            if (this.loadingChapterApi) ACGN.layer.toast("请不要频繁操作");
                            else {
                                var a = {
                                    chapter: r,
                                    isNext: i
                                };
                                r.isInited ? this.fire(a) : this.$emit.call("runChapterApiLoad", {
                                    sourceChapterId: i ? r.prevChapterId : r.nextChapterId,
                                    apiChapterId: n,
                                    callback: function () {
                                        e.fire(a)
                                    }
                                })
                            }
                        }
                    }, {
                        key: "fire",
                        value: function (t) {
                            var e = t.chapter,
                                n = t.isNext;
                            this.setCurrentChapter(e), this.setCurrentChapterIndex(1), this.directChapterImageIndexNum(1, this.isV ? 100 : 0), this.$emit.call("afterChapterIndexChange"), n ? this.getNextChapter() : this.getPrevChapter()
                        }
                    }, {
                        key: "directChapterImageIndexNum",
                        value: function (t) {
                            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0,
                                n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0,
                                i = this.currentScroll.chapter,
                                r = this.options.directImageDistance,
                                a = this.getChapterImageDistance(i, t, r);
                            this.moveTo(a + e, n)
                        }
                    }, {
                        key: "getChapterImageDistance",
                        value: function (t, e, n) {
                            var i = this.states.chapterImageList,
                                r = i.findIndex(function (n) {
                                    return n.chapterId === t.chapterId && n.index === e
                                }) - 1;
                            r >= 0 && (n += i[r].endDistance);
                            return n
                        }
                    }, {
                        key: "readyCheck",
                        value: function (t) {
                            if (!this.isIniteQueueComplete) {
                                var e = t.chapter,
                                    n = this.initQueue.findIndex(function (t) {
                                        return t === e.chapterId
                                    }); - 1 !== n && this.initQueue.splice(n, 1), this.isIniteQueueComplete && (this.currentScroll.chapter.isLock ? this.finishInitLoading() : this.checkLoading())
                            }
                        }
                    }, {
                        key: "checkLoading",
                        value: function () {
                            var t = this,
                                e = this.states.chapterImageList,
                                n = this.currentScroll,
                                i = n.chapter,
                                r = n.chapterImageIndex,
                                a = e.findIndex(function (t) {
                                    return t.chapterId === i.chapterId && t.index === r
                                }),
                                o = Math.min(a + this.options.initPreloadNum, e.length - 1);
                            e.slice(a, o + 1).find(function (t) {
                                return !t.isCreateDom
                            }) ? setTimeout(function () {
                                t.checkLoading()
                            }, 200) : this.finishInitLoading()
                        }
                    }, {
                        key: "finishInitLoading",
                        value: function () {
                            if (this.isH) {
                                var t = this.currentScroll.chapterImageIndex;
                                this.directChapterImageIndexNum(t)
                            }
                            this.$emit.call("afterEntryInit")
                        }
                    }, {
                        key: "canRun",
                        value: function () {}
                    }, {
                        key: "installChapterDom",
                        value: function (t, e) {}
                    }, {
                        key: "installResizeImg",
                        value: function (t) {}
                    }, {
                        key: "installSlotStr",
                        value: function (t, e, n) {}
                    }, {
                        key: "updateDistance",
                        value: function () {}
                    }, {
                        key: "getPerDistance",
                        value: function (t) {}
                    }, {
                        key: "repairPrevLoad",
                        value: function (t, e) {}
                    }, {
                        key: "repairSingleHeight",
                        value: function (t) {}
                    }, {
                        key: "moveTo",
                        value: function (t) {
                            arguments.length > 1 && arguments[1] !== undefined && arguments[1], arguments.length > 2 && arguments[2] !== undefined && arguments[2]
                        }
                    }, {
                        key: "getRelationList",
                        value: function (t) {}
                    }, {
                        key: "fixSwiperNum",
                        value: function (t, e, n) {}
                    }, {
                        key: "container",
                        get: function () {
                            return this.states.container
                        }
                    }, {
                        key: "boxContainer",
                        get: function () {
                            return this.states.boxContainer
                        }
                    }, {
                        key: "fillInfo",
                        get: function () {
                            return this.states.fillInfo
                        }
                    }, {
                        key: "isH",
                        get: function () {
                            return [this.$reader.types.mode.H, this.$reader.types.mode.HR, this.$reader.types.mode.HL].includes(this.states.readMode)
                        }
                    }, {
                        key: "isV",
                        get: function () {
                            return this.states.readMode === this.$reader.types.mode.V
                        }
                    }, {
                        key: "isIniteQueueComplete",
                        get: function () {
                            return 0 === this.initQueue.length
                        }
                    }]), i
                }(i(n("W/Tl"))["default"]);
                e["default"] = v
            }).call(this, n("+2Rf"))
        },
        lSNA: function (t, e) {
            t.exports = function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
        },
        ls82: function (t, e, n) {
            var i = function (t) {
                "use strict";
                var e, n = Object.prototype,
                    i = n.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

                function c(t, e, n, i) {
                    var r = e && e.prototype instanceof v ? e : v,
                        a = Object.create(r.prototype),
                        o = new R(i || []);
                    return a._invoke = function (t, e, n) {
                        var i = l;
                        return function (r, a) {
                            if (i === f) throw new Error("Generator is already running");
                            if (i === d) {
                                if ("throw" === r) throw a;
                                return M()
                            }
                            for (n.method = r, n.arg = a;;) {
                                var o = n.delegate;
                                if (o) {
                                    var s = _(o, n);
                                    if (s) {
                                        if (s === p) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (i === l) throw i = d, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                i = f;
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (i = n.done ? d : h, c.arg === p) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (i = d, n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, o), a
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (i) {
                        return {
                            type: "throw",
                            arg: i
                        }
                    }
                }
                t.wrap = c;
                var l = "suspendedStart",
                    h = "suspendedYield",
                    f = "executing",
                    d = "completed",
                    p = {};

                function v() {}

                function m() {}

                function y() {}
                var g = {};
                g[a] = function () {
                    return this
                };
                var I = Object.getPrototypeOf,
                    C = I && I(I(P([])));
                C && C !== n && i.call(C, a) && (g = C);
                var k = y.prototype = v.prototype = Object.create(g);

                function b(t) {
                    ["next", "throw", "return"].forEach(function (e) {
                        t[e] = function (t) {
                            return this._invoke(e, t)
                        }
                    })
                }

                function w(t, e) {
                    var n;
                    this._invoke = function (r, a) {
                        function o() {
                            return new e(function (n, o) {
                                ! function s(n, r, a, o) {
                                    var c = u(t[n], t, r);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            h = l.value;
                                        return h && "object" == typeof h && i.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
                                            s("next", t, a, o)
                                        }, function (t) {
                                            s("throw", t, a, o)
                                        }) : e.resolve(h).then(function (t) {
                                            l.value = t, a(l)
                                        }, function (t) {
                                            return s("throw", t, a, o)
                                        })
                                    }
                                    o(c.arg)
                                }(r, a, n, o)
                            })
                        }
                        return n = n ? n.then(o, o) : o()
                    }
                }

                function _(t, n) {
                    var i = t.iterator[n.method];
                    if (i === e) {
                        if (n.delegate = null, "throw" === n.method) {
                            if (t.iterator["return"] && (n.method = "return", n.arg = e, _(t, n), "throw" === n.method)) return p;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var r = u(i, t.iterator, n.arg);
                    if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, p;
                    var a = r.arg;
                    return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, p) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, p)
                }

                function S(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function R(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(S, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var n = t[a];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                o = function n() {
                                    for (; ++r < t.length;)
                                        if (i.call(t, r)) return n.value = t[r], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: M
                    }
                }

                function M() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return m.prototype = k.constructor = y, y.constructor = m, y[s] = m.displayName = "GeneratorFunction", t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(k), t
                }, t.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, b(w.prototype), w.prototype[o] = function () {
                    return this
                }, t.AsyncIterator = w, t.async = function (e, n, i, r, a) {
                    void 0 === a && (a = Promise);
                    var o = new w(c(e, n, i, r), a);
                    return t.isGeneratorFunction(n) ? o : o.next().then(function (t) {
                        return t.done ? t.value : o.next()
                    })
                }, b(k), k[s] = "Generator", k[a] = function () {
                    return this
                }, k.toString = function () {
                    return "[object Generator]"
                }, t.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function i() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return i.value = n, i.done = !1, i
                            }
                            return i.done = !0, i
                        }
                }, t.values = P, R.prototype = {
                    constructor: R,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(x), !t)
                            for (var n in this) "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var n = this;

                        function r(i, r) {
                            return s.type = "throw", s.arg = t, n.next = i, r && (n.method = "next", n.arg = e), !!r
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                s = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var c = i.call(o, "catchLoc"),
                                    u = i.call(o, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (c) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var a = r;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = t, o.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(o)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), p
                        }
                    },
                    "catch": function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var r = i.arg;
                                    x(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, n, i) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: n,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = e), p
                    }
                }, t
            }(t.exports);
            try {
                regeneratorRuntime = i
            } catch (r) {
                Function("r", "regeneratorRuntime = r")(i)
            }
        },
        mQtv: function (t, e, n) {
            var i = n("kJMx"),
                r = n("JiEa"),
                a = n("y3w9"),
                o = n("dyZX").Reflect;
            t.exports = o && o.ownKeys || function (t) {
                var e = i.f(a(t)),
                    n = r.f;
                return n ? e.concat(n(t)) : e
            }
        },
        n3AX: function (t, e, n) {
            var i = n("Nsbk");
            t.exports = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = i(t)););
                return t
            }
        },
        nICZ: function (t, e) {
            t.exports = function (t) {
                try {
                    return {
                        e: !1,
                        v: t()
                    }
                } catch (e) {
                    return {
                        e: !0,
                        v: e
                    }
                }
            }
        },
        nNe2: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("rGqo"), n("LK8F"), n("rE2o"), n("ioFf"), n("XfO3"), n("HEwt"), n("f3/d"), n("a1Th"), n("h7Nl"), n("Btvt"), n("INYr"), n("bWfx");
            var r = i(n("lwsE")),
                a = i(n("W8MJ"));

            function o(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return s(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function () {};
                        return {
                            s: r,
                            n: function () {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function (t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, o = !0,
                    c = !1;
                return {
                    s: function () {
                        n = t[Symbol.iterator]()
                    },
                    n: function () {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function (t) {
                        c = !0, a = t
                    },
                    f: function () {
                        try {
                            o || null == n["return"] || n["return"]()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }
            var c = function () {
                function t(e) {
                    (0, r["default"])(this, t), this.config = e, this.options = undefined, this._args = undefined
                }
                return (0, a["default"])(t, [{
                    key: "create",
                    value: function (t) {
                        var e;
                        switch (this.init(t), this.options.type) {
                            case "sync":
                                e = new Function(this.args(), this.header() + this.content({
                                    onError: function (t) {
                                        return "throw ".concat(t, ";\n")
                                    },
                                    onResult: function (t) {
                                        return "return ".concat(t, ";\n")
                                    },
                                    onDone: function () {
                                        return ""
                                    }
                                }))
                        }
                        return this.deinit(), e
                    }
                }, {
                    key: "setup",
                    value: function (t, e) {
                        t._x = e.taps.map(function (t) {
                            return t.fn
                        })
                    }
                }, {
                    key: "init",
                    value: function (t) {
                        this.options = t, this._args = t.args.slice()
                    }
                }, {
                    key: "deinit",
                    value: function () {
                        this.options = undefined, this._args = undefined
                    }
                }, {
                    key: "header",
                    value: function () {
                        var t = "";
                        this.needContext() ? t += "var _context = {};\n" : t += "var _context;\n", t += "var _x = this._x;\n", this.options.interceptors.length > 0 && (t += "var _taps = this.taps;\n", t += "var _interceptors = this.interceptors;\n");
                        for (var e = 0; e < this.options.interceptors.length; e++) {
                            var n = this.options.interceptors[e];
                            n.call && (t += "".concat(this.getInterceptor(e), ".call(").concat(this.args({
                                before: n.context ? "_context" : undefined
                            }), ");\n"))
                        }
                        return t
                    }
                }, {
                    key: "needContext",
                    value: function () {
                        var t, e = o(this.options.taps);
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                if (t.value.context) return !0
                            }
                        } catch (n) {
                            e.e(n)
                        } finally {
                            e.f()
                        }
                        return !1
                    }
                }, {
                    key: "callTap",
                    value: function (t, e) {
                        for (var n = e.onError, i = e.onResult, r = e.onDone, a = e.rethrowIfPossible, o = "", s = !1, c = 0; c < this.options.interceptors.length; c++) {
                            var u = this.options.interceptors[c];
                            u.tap && (s || (o += "var _tap".concat(t, " = ").concat(this.getTap(t), ";\n"), s = !0), o += "".concat(this.getInterceptor(c), ".tap(").concat(u.context ? "_context, " : "", "_tap").concat(t, ");\n"))
                        }
                        o += "var _fn".concat(t, " = ").concat(this.getTapFn(t), ";\n");
                        var l = this.options.taps[t];
                        switch (l.type) {
                            case "sync":
                                a || (o += "var _hasError".concat(t, " = false;\n"), o += "try {\n"), o += i ? "var _result".concat(t, " = _fn").concat(t, "(").concat(this.args({
                                    before: l.context ? "_context" : undefined
                                }), ");\n") : "_fn".concat(t, "(").concat(this.args({
                                    before: l.context ? "_context" : undefined
                                }), ");\n"), a || (o += "} catch(_err) {\n", o += "_hasError".concat(t, " = true;\n"), o += n("_err"), o += "}\n", o += "if(!_hasError".concat(t, ") {\n")), i && (o += i("_result".concat(t))), r && (o += r()), a || (o += "}\n")
                        }
                        return o
                    }
                }, {
                    key: "callTapsSeries",
                    value: function (t) {
                        var e = this,
                            n = t.onError,
                            i = t.onResult,
                            r = t.resultReturns,
                            a = t.onDone,
                            o = t.doneReturns,
                            s = t.rethrowIfPossible;
                        if (0 === this.options.taps.length) return a();
                        for (var c = this.options.taps.findIndex(function (t) {
                                return "sync" !== t.type
                            }), u = r || o || !1, l = "", h = a, f = function (t) {
                                var r = t;
                                h !== a && "sync" !== e.options.taps[r].type && (l += "function _next".concat(r, "() {\n"), l += h(), l += "}\n", h = function () {
                                    return "".concat(u ? "return " : "", "_next").concat(r, "();\n")
                                });
                                var o = h,
                                    f = function (t) {
                                        return t ? "" : a()
                                    },
                                    d = e.callTap(r, {
                                        onError: function (t) {
                                            return n(r, t, o, f)
                                        },
                                        onResult: i && function (t) {
                                            return i(r, t, o, f)
                                        },
                                        onDone: !i && o,
                                        rethrowIfPossible: s && (c < 0 || r < c)
                                    });
                                h = function () {
                                    return d
                                }
                            }, d = this.options.taps.length - 1; d >= 0; d--) f(d);
                        return l += h()
                    }
                }, {
                    key: "args",
                    value: function () {
                        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                            e = t.before,
                            n = t.after,
                            i = this._args;
                        return e && (i = [e].concat(i)), n && (i = i.concat(n)), 0 === i.length ? "" : i.join(", ")
                    }
                }, {
                    key: "getTapFn",
                    value: function (t) {
                        return "_x[".concat(t, "]")
                    }
                }, {
                    key: "getTap",
                    value: function (t) {
                        return "_taps[".concat(t, "]")
                    }
                }, {
                    key: "getInterceptor",
                    value: function (t) {
                        return "_interceptors[".concat(t, "]")
                    }
                }]), t
            }();
            t.exports = c
        },
        o0o1: function (t, e, n) {
            t.exports = n("ls82")
        },
        ol8x: function (t, e, n) {
            var i = n("dyZX").navigator;
            t.exports = i && i.userAgent || ""
        },
        pbhE: function (t, e, n) {
            "use strict";
            var i = n("2OiF");
            t.exports.f = function (t) {
                return new function (t) {
                    var e, n;
                    this.promise = new t(function (t, i) {
                        if (e !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
                        e = t, n = i
                    }), this.resolve = i(e), this.reject = i(n)
                }(t)
            }
        },
        rE2o: function (t, e, n) {
            n("OnI7")("asyncIterator")
        },
        s5qY: function (t, e, n) {
            var i = n("0/R4");
            t.exports = function (t, e) {
                if (!i(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
                return t
            }
        },
        vKrd: function (t, e, n) {
            var i = n("y3w9"),
                r = n("0/R4"),
                a = n("pbhE");
            t.exports = function (t, e) {
                if (i(t), r(e) && e.constructor === t) return e;
                var n = a.f(t);
                return (0, n.resolve)(e), n.promise
            }
        },
        wXuM: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("8+KV"), n("dRSK");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("3GXt")),
                s = i(n("kCDH")),
                c = i(n("54q3")),
                u = i(n("Ybj/")),
                l = i(n("dtkt"));
            n("2vKP"), n("Wr5T");
            var h = function () {
                function t(e) {
                    (0, r["default"])(this, t), this.assert(e), this.init(e), this.applyPlugins(), this.initEventProxy()
                }
                return (0, a["default"])(t, [{
                    key: "init",
                    value: function (t) {
                        l["default"].$time("初始化阅读资源耗时"), this.$options = t, new c["default"](this), new o["default"](this), new s["default"](this), new u["default"](this), this.states.container = t.container, this.states.boxContainer = t.container.find(".acgn-reader-chapter__scroll-box"), l["default"].$time("初始化阅读资源耗时", !0)
                    }
                }, {
                    key: "assert",
                    value: function (t) {
                        t.container || l["default"].$error("阅读器初始化失败，未找到根元素:container")
                    }
                }, {
                    key: "applyPlugins",
                    value: function () {
                        var t = this;
                        l["default"].$time("初始化插件耗时");
                        var e = this.$options.plugins;
                        (void 0 === e ? [] : e).forEach(function (e) {
                            t.states.isForceStop || e.apply(t)
                        }), this.hooks.afterPlugins.call(), l["default"].$time("初始化插件耗时", !0)
                    }
                }, {
                    key: "initEventProxy",
                    value: function () {
                        var t = this;
                        this.hooks.$emit.tap("pluginEvent", function (e, n) {
                            t.hooks[e] ? t.hooks[e].call(n) : l["default"].$error("找不到指定hook：".concat(e))
                        })
                    }
                }, {
                    key: "run",
                    value: function () {
                        this.hooks.run.call()
                    }
                }]), t
            }();
            e["default"] = h
        },
        wmvG: function (t, e, n) {
            "use strict";
            var i = n("hswa").f,
                r = n("Kuth"),
                a = n("3Lyj"),
                o = n("m0Pp"),
                s = n("9gX7"),
                c = n("SlkY"),
                u = n("Afnz"),
                l = n("1TsA"),
                h = n("elZq"),
                f = n("nh4g"),
                d = n("Z6vF").fastKey,
                p = n("s5qY"),
                v = f ? "_s" : "size",
                m = function (t, e) {
                    var n, i = d(e);
                    if ("F" !== i) return t._i[i];
                    for (n = t._f; n; n = n.n)
                        if (n.k == e) return n
                };
            t.exports = {
                getConstructor: function (t, e, n, u) {
                    var l = t(function (t, i) {
                        s(t, l, e, "_i"), t._t = e, t._i = r(null), t._f = undefined, t._l = undefined, t[v] = 0, i != undefined && c(i, n, t[u], t)
                    });
                    return a(l.prototype, {
                        clear: function () {
                            for (var t = p(this, e), n = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = undefined), delete n[i.i];
                            t._f = t._l = undefined, t[v] = 0
                        },
                        "delete": function (t) {
                            var n = p(this, e),
                                i = m(n, t);
                            if (i) {
                                var r = i.n,
                                    a = i.p;
                                delete n._i[i.i], i.r = !0, a && (a.n = r), r && (r.p = a), n._f == i && (n._f = r), n._l == i && (n._l = a), n[v]--
                            }
                            return !!i
                        },
                        forEach: function (t) {
                            p(this, e);
                            for (var n, i = o(t, arguments.length > 1 ? arguments[1] : undefined, 3); n = n ? n.n : this._f;)
                                for (i(n.v, n.k, this); n && n.r;) n = n.p
                        },
                        has: function (t) {
                            return !!m(p(this, e), t)
                        }
                    }), f && i(l.prototype, "size", {
                        get: function () {
                            return p(this, e)[v]
                        }
                    }), l
                },
                def: function (t, e, n) {
                    var i, r, a = m(t, e);
                    return a ? a.v = n : (t._l = a = {
                        i: r = d(e, !0),
                        k: e,
                        v: n,
                        p: i = t._l,
                        n: undefined,
                        r: !1
                    }, t._f || (t._f = a), i && (i.n = a), t[v]++, "F" !== r && (t._i[r] = a)), t
                },
                getEntry: m,
                setStrong: function (t, e, n) {
                    u(t, e, function (t, n) {
                        this._t = p(t, e), this._k = n, this._l = undefined
                    }, function () {
                        for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                        return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = undefined, l(1))
                    }, n ? "entries" : "values", !n, !0), h(e)
                }
            }
        },
        yXPU: function (t, e) {
            function n(t, e, n, i, r, a, o) {
                try {
                    var s = t[a](o),
                        c = s.value
                } catch (u) {
                    return void n(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, r)
            }
            t.exports = function (t) {
                return function () {
                    var e = this,
                        i = arguments;
                    return new Promise(function (r, a) {
                        var o = t.apply(e, i);

                        function s(t) {
                            n(o, r, a, s, c, "next", t)
                        }

                        function c(t) {
                            n(o, r, a, s, c, "throw", t)
                        }
                        s(undefined)
                    })
                }
            }
        },
        zNPx: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("Btvt"), n("Oyvg"), n("V+eJ"), n("pIFo"), n("KKXr");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = new(function () {
                    function t() {
                        (0, r["default"])(this, t), this.cssVendors = ["ms", "moz", "webkit", "o"]
                    }
                    return (0, a["default"])(t, [{
                        key: "supportCss3",
                        value: function (t) {
                            var e = document.createElement("div"),
                                n = "Ms O Moz Webkit".split(" "),
                                i = n.length;
                            if (t in e.style) return !0;
                            for (t = t.replace(/^[a-z]/, function (t) {
                                    return t.toUpperCase()
                                }); i--;)
                                if (n[i] + t in e.style) return !0;
                            return !1
                        }
                    }, {
                        key: "addClassPrefix",
                        value: function (t, e, n) {
                            for (var i in this.cssVendors) t["-".concat(this.cssVendors[i], "-").concat(e)] = "".concat(n)
                        }
                    }, {
                        key: "manualReSize",
                        value: function () {
                            if (document.createEvent) {
                                var t = document.createEvent("HTMLEvents");
                                t.initEvent("resize", !0, !0), window.dispatchEvent(t)
                            } else document.createEventObject && window.fireEvent("onresize")
                        }
                    }, {
                        key: "isIE",
                        value: function () {
                            return window.navigator.userAgent.indexOf("MSIE") >= 1
                        }
                    }, {
                        key: "isFullIEVersion",
                        value: function () {
                            var t = navigator.userAgent,
                                e = t.indexOf("compatible") > -1 && t.indexOf("MSIE") > -1,
                                n = t.indexOf("Edge") > -1 && !e,
                                i = t.indexOf("Trident") > -1 && t.indexOf("rv:11.0") > -1;
                            if (e) {
                                new RegExp("MSIE (\\d+\\.\\d+);").test(t);
                                var r = parseFloat(RegExp.$1);
                                return 7 == r ? 7 : 8 == r ? 8 : 9 == r ? 9 : 10 == r ? 10 : 6
                            }
                            return n ? "edge" : i ? 11 : -1
                        }
                    }, {
                        key: "rafThrottle",
                        value: function (t) {
                            var e = !1,
                                n = function () {
                                    e = !1, t && t.apply(this, arguments)
                                };
                            e || requestAnimationFrame(n), e = !0
                        }
                    }, {
                        key: "getEventTarget",
                        value: function (t) {
                            var e = t || window.event;
                            return e.srcElement || e.target
                        }
                    }, {
                        key: "mouseArea",
                        value: function (t, e) {
                            var n = (e = e || window.event).pageX - t.offset().left,
                                i = e.pageY - t.offset().top,
                                r = t.width() / 2,
                                a = t.height() / 2,
                                o = t.width() / 3,
                                s = t.height() / 4,
                                c = [];
                            return n <= r ? c[0] = "left" : n > r && (c[0] = "right"), i <= a ? c[1] = "top" : i >= a && (c[1] = "bottom"), n > o && n < 2 * o && i > s && i < 3 * s && (c = ["center"]), c
                        }
                    }, {
                        key: "toolGetPercentSplit",
                        value: function (t, e) {
                            for (var n = e - 1, i = 100 / n / 2, r = 0, a = 0; a <= n; a++)
                                if (t <= (r = 100 * a / n) + i && t >= r - i) return a + 1;
                            return 1
                        }
                    }, {
                        key: "toolGetNumSplit",
                        value: function (t, e) {
                            var n = e - 1,
                                i = 100 / n / 2,
                                r = 100 * (t - 1) / n;
                            return [Math.max(0, r - i + 1e-13), r, Math.min(100, r + i)]
                        }
                    }, {
                        key: "setHabit",
                        value: function (t, e, n) {
                            var i = JSON.parse(ACGN.util.cookie(t)) || {};
                            i[e] = n, ACGN.util.cookie(t, JSON.stringify(i))
                        }
                    }, {
                        key: "getInstance",
                        value: function (t, e) {
                            return this.couldBeClass(t) ? new t(e) : t
                        }
                    }, {
                        key: "couldBeClass",
                        value: function (t, e) {
                            if ("function" != typeof t) return !1;
                            var n = t.toString();
                            return t.prototype !== undefined && (t.prototype.constructor === t && ("class" == n.slice(0, 5) || (Object.getOwnPropertyNames(t.prototype).length >= 2 || !/^function\s+\(|^function\s+anonymous\(/.test(n) && (!(!e || !/^function\s+[A-Z]/.test(n)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(n) && (!(e && !/classCallCheck\(this/.test(n)) || /^function\sdefault_\d+\s*\(/.test(n))))))
                        }
                    }, {
                        key: "isMobileHanddle",
                        value: function () {
                            var t = navigator.userAgent;
                            return (screen.width / screen.height < 1 || /AppleWebKit.*Mobile/i.test(t) || /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(t)) && !/ipad/gi.test(t)
                        }
                    }]), t
                }());
            e["default"] = o
        },
        zi4Q: function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("dRSK"), n("pIFo"), n("Oyvg"), n("eM6i");
                var r = i(n("lwsE")),
                    a = i(n("W8MJ"));
                n("k/JI");
                var o = function () {
                    function e() {
                        var t = this;
                        (0, r["default"])(this, e), this.template = "", this.popHtml = "", this.btnIconClass = "", this.freeSetting = null, setTimeout(function () {
                            t.init()
                        })
                    }
                    return (0, a["default"])(e, [{
                        key: "init",
                        value: function () {
                            this.setTemplate()
                        }
                    }, {
                        key: "open",
                        value: function (e, n) {
                            var i = this;
                            t("#__acgn-read-free-nav__").click(function () {
                                i.initPop(e), i.initFreeTime(e), i.initFreeNum(e, n)
                            })
                        }
                    }, {
                        key: "postVedioRead",
                        value: function (t, e) {
                            ACGN.business.header.getUserInfo({}, function (n, i) {
                                n ? ACGN.business.msg(n) : ACGN.ajax({
                                    url: "/api/advertise_free/",
                                    type: "post",
                                    headers: {
                                        userauth: i.auth_data.authcode
                                    },
                                    data: {
                                        chapter_id: t
                                    }
                                }, function (t, n) {
                                    t ? ACGN.business.msg(t) : e(n)
                                })
                            })
                        }
                    }, {
                        key: "initPop",
                        value: function (t) {
                            var e = ejs.render(this.popHtml);
                            t.layerClose(), t.layerWin({
                                content: e,
                                cancel: function () {
                                    t.layerClose()
                                }
                            })
                        }
                    }, {
                        key: "initFreeTime",
                        value: function (e) {
                            var n = this,
                                i = t("#__acgn-read-free-timebox__"),
                                r = t("#__acgn-read-free-lock-time__"),
                                a = t("#__acgn-read-free-lock-btn-1__");
                            if (comicInfo.charge_limittime_free) {
                                var o = ACGN.util.formatDate(this.freeSetting.freetime_start, "hh:mm"),
                                    s = ACGN.util.formatDate(this.freeSetting.freetime_end + 1e3, "hh:mm");
                                r.text("".concat(o, "~").concat(s)), this.freeSetting.isfreetime && (a.removeClass("disabled"), a.text("点击解锁"), a.click(function () {
                                    n.setReadFreeTimeCli(1), e.finishPayCall(!0), e.layerClose(), ACGN.business.msg("解锁成功，开启篇章")
                                }))
                            } else i.hide()
                        }
                    }, {
                        key: "initFreeNum",
                        value: function (e, n) {
                            var i = this,
                                r = t("#__acgn-read-free-numbox__"),
                                a = t("#__acgn-read-free-lock-num__"),
                                o = t("#__acgn-read-free-lock-btn__");
                            comicInfo.charge_advertise_free ? this.getFreeNum(function (t) {
                                0 !== t && (a.text(t), o.text("观看解锁"), o.removeClass("disabled"), o.click(function () {
                                    i.showAds(e, n)
                                }))
                            }) : r.hide()
                        }
                    }, {
                        key: "showAds",
                        value: function (e, n) {
                            var i = this,
                                r = ejs.render(this.template.ad),
                                a = Date.now(),
                                o = new RegExp("__DYN_ID__", "g");
                            r = r.replace(o, "read_script_" + a), e.layerClose(), e.layerWin({
                                content: r,
                                cancel: function () {
                                    e.layerClose()
                                }
                            });
                            var s = t(".acgn-dynamic-read__ad-btn"),
                                c = s.find("span"),
                                u = window.__ACGN_READ_AD_TIMER__ || 20;
                            this.showTime(u, function (t) {
                                0 === t ? (c.text(""), s.removeClass("disabled"), s.click(function () {
                                    i.postVedioRead(n.chapterNatureId, function () {
                                        e.finishPayCall(!0), e.layerClose(), ACGN.business.msg("解锁成功，开启篇章")
                                    })
                                })) : c.text("(".concat(t, ")s"))
                            })
                        }
                    }, {
                        key: "getFreeNav",
                        value: function () {
                            return comicInfo.charge_advertise_free || comicInfo.charge_limittime_free ? this.template.nav : ""
                        }
                    }, {
                        key: "getPopTemplate",
                        value: function () {
                            return this.template.pop
                        }
                    }, {
                        key: "getReadFreetTime",
                        value: function (t) {
                            var e = this;
                            comicInfo.charge_limittime_free ? ACGN.ajax({
                                url: "/api/getservertime/",
                                cache: !1
                            }, function (n, i) {
                                e.freeSetting = n ? null : i, t && t()
                            }) : t()
                        }
                    }, {
                        key: "showTime",
                        value: function (t, e) {
                            var n = this;
                            e(t), 0 !== t && setTimeout(function () {
                                n.showTime(--t, e)
                            }, 1e3)
                        }
                    }, {
                        key: "getFreeNum",
                        value: function (t) {
                            ACGN.business.header.getUserInfo({}, function (e, n) {
                                e ? ACGN.business.msg(e) : ACGN.ajax({
                                    cache: !1,
                                    url: "/api/getadvertise_times/",
                                    headers: {
                                        userauth: n.auth_data.authcode
                                    }
                                }, function (e, n) {
                                    t(e ? 0 : n)
                                })
                            })
                        }
                    }, {
                        key: "setReadFreeTimeCli",
                        value: function (t) {
                            ACGN.util.limitStore("readFreeTimeCli", t, {
                                expires: 24
                            })
                        }
                    }, {
                        key: "getReadFreeTimeCli",
                        value: function () {
                            return ACGN.util.limitStore("readFreeTimeCli")
                        }
                    }, {
                        key: "isFreeTime",
                        value: function () {
                            return !!this.freeSetting && (comicInfo.charge_limittime_free && this.freeSetting.isfreetime && 1 === this.getReadFreeTimeCli())
                        }
                    }, {
                        key: "setPopOpts",
                        value: function (t) {
                            var e = t.popHtml,
                                n = t.btnIcon;
                            this.popHtml = e, this.btnIconClass = n, this.setTemplate()
                        }
                    }, {
                        key: "setTemplate",
                        value: function () {
                            this.template = {
                                nav: '<div id="__acgn-read-free-nav__" class="acgn-dynamic-read acgn-dynamic-read__free-nav">点此免费读></div>',
                                pop: '  \n        <div class="acgn-dynamic-read">\n          <div class="acgn-dynamic-read__lock-item" id="__acgn-read-free-numbox__">\n            <p class="acgn-dynamic-read__lock-item-title">每日看广告</p>\n            <p class="acgn-dynamic-read__lock-item-info">观看指定时长广告后，即可解锁当前章节</p>\n            <div class="acgn-dynamic-read__lock-item-op">\n              <span class="acgn-dynamic-read__lock-item-num">\n                今日剩余\n                <span id="__acgn-read-free-lock-num__">0</span>\n                次\n              </span>\n              <a href="javascript:void(0);" class="acgn-dynamic-read__lock-item-btn disabled" id="__acgn-read-free-lock-btn__">资格用尽</a>\n            </div>\n          </div>\n          <div class="acgn-dynamic-read__lock-item more-bottom" id="__acgn-read-free-timebox__">\n            <p class="acgn-dynamic-read__lock-item-title">限时免费看</p>\n            <p class="acgn-dynamic-read__lock-item-info">\n              每日\n              <span id="__acgn-read-free-lock-time__">00:00~00:00</span>\n              时段为限免阅读时间\n            </p>\n            <div class="acgn-dynamic-read__lock-item-op">\n              <a href="javascript:void(0);" class="acgn-dynamic-read__lock-item-btn disabled" id="__acgn-read-free-lock-btn-1__">时间未到</a>\n            </div>\n          </div>\n        </div>',
                                ad: '\n        <div class="acgn-dynamic-read">\n          <div class="acgn-dynamic-read__ad-box">\n            <div class="acgn-dynamic-read__ad-content" id="__DYN_ID__">\n            <script>\n              window._ACGN_P && window._ACGN_P.p_3 && _ACGN_P.p_3(\'__DYN_ID__\');\n            <\/script>\n            </div>\n            <div class="acgn-dynamic-read__ad-op">\n              <a href="javascript:void(0);" class="acgn-dynamic-read__ad-btn disabled">\n                '.concat(this.btnIconClass ? '<i class="'.concat(this.btnIconClass, '"></i>') : "", "\n                解锁章节<span></span>\n              </a>\n            </div>\n          </div>\n        </div>")
                            }
                        }
                    }]), e
                }();
                e["default"] = o
            }).call(this, n("+2Rf"))
        },
        "ziw+": function (t, e, n) {
            "use strict";
            (function (t) {
                var i = n("TqRt");
                n("HAE/"), Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e["default"] = void 0, n("LK8F"), n("rE2o"), n("ioFf"), n("XfO3"), n("HEwt"), n("a1Th"), n("h7Nl"), n("I5cv"), n("DNiP"), n("dRSK"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("8+KV");
                var r = i(n("RIqP"));
                n("f3/d");
                var a = i(n("lwsE")),
                    o = i(n("W8MJ")),
                    s = i(n("iWIM")),
                    c = i(n("7W2i")),
                    u = i(n("a1gu")),
                    l = i(n("Nsbk"));

                function h(t, e) {
                    var n;
                    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (n = function (t, e) {
                                if (!t) return;
                                if ("string" == typeof t) return f(t, e);
                                var n = Object.prototype.toString.call(t).slice(8, -1);
                                "Object" === n && t.constructor && (n = t.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(t);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
                            }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var i = 0,
                                r = function () {};
                            return {
                                s: r,
                                n: function () {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function (t) {
                                    throw t
                                },
                                f: r
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var a, o = !0,
                        s = !1;
                    return {
                        s: function () {
                            n = t[Symbol.iterator]()
                        },
                        n: function () {
                            var t = n.next();
                            return o = t.done, t
                        },
                        e: function (t) {
                            s = !0, a = t
                        },
                        f: function () {
                            try {
                                o || null == n["return"] || n["return"]()
                            } finally {
                                if (s) throw a
                            }
                        }
                    }
                }

                function f(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                    return i
                }

                function d(t) {
                    var e = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function () {
                        var n, i = (0, l["default"])(t);
                        if (e) {
                            var r = (0, l["default"])(this).constructor;
                            n = Reflect.construct(i, arguments, r)
                        } else n = i.apply(this, arguments);
                        return (0, u["default"])(this, n)
                    }
                }
                var p = function (e) {
                    (0, c["default"])(i, e);
                    var n = d(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "横向阅读插件", e.startPageX = 0, e
                    }
                    return (0, o["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, s["default"])((0, l["default"])(i.prototype), "apply", this).call(this, t)
                        }
                    }, {
                        key: "installSelfTaps",
                        value: function () {
                            this.installTaps(["onContainerTouchStart", "onContainerTouchMove", "onContainerTouchEnd", "directPrevPage", "directNextPage"])
                        }
                    }, {
                        key: "directPrevPage",
                        value: function () {
                            this.cliPre()
                        }
                    }, {
                        key: "directNextPage",
                        value: function () {
                            this.cliNext()
                        }
                    }, {
                        key: "canRun",
                        value: function () {
                            return this.isH
                        }
                    }, {
                        key: "initSelfEvent",
                        value: function () {
                            var e = this;
                            t("body").on("click", "#jsPrev", function (t) {
                                t.stopPropagation(), e.cliPre()
                            }), t("body").on("click", "#jsNext", function (t) {
                                t.stopPropagation(), e.cliNext()
                            })
                        }
                    }, {
                        key: "onContainerTouchStart",
                        value: function (t) {
                            this.startPageX = this.getTouch(t).pageX
                        }
                    }, {
                        key: "onContainerTouchMove",
                        value: function (t) {
                            t.preventDefault(), t.stopPropagation();
                            var e = this.getTouchDistance(this.getTouch(t).pageX),
                                n = this.currentScroll.distance;
                            n -= e, this.$utils.rafThrottle(this.moveTo(n, 0, !0))
                        }
                    }, {
                        key: "onContainerTouchEnd",
                        value: function (t) {
                            var e = this.getTouchDistance(this.getTouch(t).pageX),
                                n = Math.abs(e);
                            if (0 !== n) return n < this.options.touchAvailableDistance ? (this.$message("想拖动我，你得够格~~~"), void this.moveTo(this.currentScroll.distance)) : void(e < 0 ? this.cliNext() : e > 0 && this.cliPre())
                        }
                    }, {
                        key: "getTouch",
                        value: function (t) {
                            return t.originalEvent.changedTouches[0]
                        }
                    }, {
                        key: "getTouchDistance",
                        value: function (t) {
                            return this.states.isSwiperReverse ? this.startPageX - t : t - this.startPageX
                        }
                    }, {
                        key: "cliPre",
                        value: function () {
                            var t = this.currentScroll.distance;
                            if (t <= 0) return this.moveTo(0), void(this.hasMoreChapter() || ACGN.layer.toast("已经是第一章了！"));
                            this.currentScroll.isPrev = !0, this.moveTo(t - this.getSwiperWidth())
                        }
                    }, {
                        key: "cliNext",
                        value: function () {
                            var t = this.currentScroll.distance,
                                e = this.states.totalDistance,
                                n = this.getSwiperWidth();
                            if (t + n >= e) return this.moveTo(e - n), void(this.hasMoreChapter(!0) || ACGN.layer.toast("已经是最新一章了！"));
                            this.currentScroll.isPrev = !1, this.moveTo(t + n)
                        }
                    }, {
                        key: "getRelationList",
                        value: function (t) {
                            return this.states.isSwiperReverse ? (0, r["default"])(t).reverse() : t
                        }
                    }, {
                        key: "updateDistance",
                        value: function () {
                            var t = this,
                                e = 0,
                                n = {};
                            this.states.chapterImageList.forEach(function (i) {
                                i.index;
                                var r = i.chapterId,
                                    a = t.getPerDistance(i);
                                e += a, i.endDistance = e, n[r] || (n[r] = {
                                    distance: 0
                                }), n[r].distance += a
                            }), this.states.totalDistance = e, Object.keys(n).forEach(function (e) {
                                t.container.find('[chapter-id="'.concat(e, '"]')).width(n[e].distance)
                            }), this.boxContainer.width(e)
                        }
                    }, {
                        key: "installResizeImg",
                        value: function (t) {}
                    }, {
                        key: "installChapterDom",
                        value: function (t, e) {
                            this.states.isSwiperReverse ? this.boxContainer[t ? "append" : "prepend"](e) : this.boxContainer[t ? "prepend" : "append"](e)
                        }
                    }, {
                        key: "installSlotStr",
                        value: function (t, e, n) {
                            return this.states.isSwiperReverse ? n + e + t : t + e + n
                        }
                    }, {
                        key: "getPerDistance",
                        value: function (t) {
                            return t.slots.reduce(function (t, e) {
                                return t + e.width
                            }, 0) + this.fillInfo.fillWidth
                        }
                    }, {
                        key: "repairPrevMove",
                        value: function (t) {
                            var e = this;
                            this.states.isKeepMenu = !0, this.moveTo(t, 0), setTimeout(function () {
                                e.states.isKeepMenu = !1
                            }, 500)
                        }
                    }, {
                        key: "moveTo",
                        value: function (t) {
                            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300,
                                n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
                            t % this.getSwiperWidth() === this.fillInfo.fillWidth && (t -= this.fillInfo.fillWidth);
                            var i = -t;
                            if (this.states.isSwiperReverse && (i = t), this.isSupportCssTransform) {
                                var r = {};
                                this.$utils.addClassPrefix(r, "transition", "transform ".concat(e / 1e3, "s ease-out 0s")), this.$utils.addClassPrefix(r, "transform", "translate3d(".concat(i, "px, 0px, 0px)")), this.boxContainer.css(r)
                            } else this.boxContainer.animate({
                                left: i
                            }, e);
                            n || (this.currentScroll.distance = t, this.updateCurrentChapter(), this.isIe && this.$utils.manualReSize(), this.$emit.call("onContainerScroll"))
                        }
                    }, {
                        key: "fixSwiperNum",
                        value: function (t, e, n) {
                            if (e.isLast) {
                                var i, r = 0,
                                    a = h(t);
                                try {
                                    for (a.s(); !(i = a.n()).done;) {
                                        var o = i.value;
                                        r++;
                                        var s, c = h(o.slots);
                                        try {
                                            for (c.s(); !(s = c.n()).done;) {
                                                s.value;
                                                r++
                                            }
                                        } catch (f) {
                                            c.e(f)
                                        } finally {
                                            c.f()
                                        }
                                    }
                                } catch (f) {
                                    a.e(f)
                                } finally {
                                    a.f()
                                }
                                if (r % this.options.swiperImageNum != 0) {
                                    var u = this.fillInfo.fillWidth,
                                        l = '\n    <div class="acgn-reader-chapter__item no-chapter acgn-chapter__fix" style="width:'.concat(u, 'px">\n      <div class="acgn-chapter__fix-content">\n        <p> ').concat(n.nextChapterName ? "即将进入" : "", " </p>\n        <p> ").concat(n.nextChapterName || "", " </p>\n      </div>\n    </div>");
                                    e.slots.push({
                                        type: this.types.chapterSlot,
                                        width: u,
                                        height: 0,
                                        template: l
                                    })
                                }
                            }
                        }
                    }, {
                        key: "$options",
                        get: function () {
                            return {
                                swiperImageNum: 1,
                                imageSwitchDistance: 0,
                                initPreloadNum: 1,
                                preloadChapterScope: 5,
                                directImageDistance: 0,
                                touchAvailableDistance: 33
                            }
                        }
                    }]), i
                }(i(n("kMti"))["default"]);
                e["default"] = p
            }).call(this, n("+2Rf"))
        }
    },
    [
        [13, 0, 1]
    ]
]);
