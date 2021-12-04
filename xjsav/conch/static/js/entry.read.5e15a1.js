(window.webpackJsonp = window.webpackJsonp || []).push([
    [33], {
        "/02M": function (t, e, n) {
            "use strict";
            e.SyncHook = n("EkJ7")
        },
        "/Bsm": function (t, i, h) {
            "use strict";
            (function (r) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv");
                var a = t(h("lwsE")),
                    e = t(h("W8MJ")),
                    o = t(h("iWIM")),
                    s = t(h("7W2i")),
                    u = t(h("a1gu")),
                    c = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).staticBlock = r("#js_staticBlock"), e.staticChapter = r("#js_staticChapter"), e.staticPage = r("#js_staticPage"), e.staticTime = r("#js_staticTime"), e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.init(), this.installTaps(["afterChapterImageIndexChange", "afterChapterIndexChange"])
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this;
                            this.setHtml(), this.staticTime.html((new Date).getHours() + ":" + (new Date).getMinutes()), this.staticBlock.show(), setInterval(function () {
                                t.staticTime.html((new Date).getHours() + ":" + (new Date).getMinutes())
                            }, 1e3)
                        }
                    }, {
                        key: "setHtml",
                        value: function () {
                            var t = this.states,
                                e = t.currentChapter,
                                n = t.currentChapterImageIndex;
                            this.staticChapter.html(e.chapterName), this.staticPage.html(n + "/" + e.totalPage)
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
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
        },
        "1MBn": function (t, e, n) {
            var s = n("DVgA"),
                u = n("JiEa"),
                c = n("UqcF");
            t.exports = function (t) {
                var e = s(t),
                    n = u.f;
                if (n)
                    for (var i, r = n(t), a = c.f, o = 0; r.length > o;) a.call(t, i = r[o++]) && e.push(i);
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
                                for (var r = 0, t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
                                window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
                                    var e = (new Date).getTime(),
                                        n = Math.max(0, 16 - (e - r)),
                                        i = window.setTimeout(function () {
                                            t(e + n)
                                        }, n);
                                    return r = e + n, i
                                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
                                    clearTimeout(t)
                                })
                            }()
                        }
                    }]), t
                }());
            e["default"] = o
        },
        31: function (t, e, n) {
            t.exports = n("QJ5W")
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
                    function e(t) {
                        (0, r["default"])(this, e), t.hooks = this.hooks
                    }
                    return (0, a["default"])(e, [{
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
                    }]), e
                }();
            e["default"] = s
        },
        "3P17": function (t, i, o) {
            "use strict";
            (function (r) {
                var t = o("TqRt");
                o("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, o("SRfc"), o("2Spj"), o("dRSK");
                var a = t(o("lwsE")),
                    e = t(o("W8MJ")),
                    n = function () {
                        function i(t, e) {
                            var n = this;
                            if ((0, a["default"])(this, i), this.elem = r(t), !this.elem.length || !this.elem.hasClass("rd-progress")) throw Error("no elem:" + t);
                            this.line = this.elem.find(".rd-progress-cursor"), this.cursor = this.elem.find(".cursor"), this.supportTouches = "ontouchend" in document, this._status = 0, this._callback = function () {}, this._touchEnd = function () {}, this._startPercent = 0, e <= 100 && -1 <= e - 1 && (this._startPercent = e), this._startPercent && this.update(this._startPercent), this.startLeft = null, this.startX = null, this.moveX = null, this.drag = !1, this.bindEvent(this.cursor, "down", this.mousedown.bind(this)), this.bindEvent(this.cursor, "move", this.mousemove.bind(this)), this.bindEvent(this.cursor, "up", function (t) {
                                t.stopPropagation(), n.mouseup(!0)
                            }), this.bindEvent(r(document), "move", this.mousemove.bind(this)), this.bindEvent(r(document), "up", function (t) {
                                n.mouseup()
                            }), this.initCliEvent()
                        }
                        return (0, e["default"])(i, [{
                            key: "initCliEvent",
                            value: function () {
                                var n = this;
                                this.elem.on("click", function (t) {
                                    var e;
                                    r(t.target).hasClass("cursor") || (e = n._getOfsLeft(t.target) + t.offsetX, n.go(e), n._callback(n._status), n._touchEnd(!0))
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
                                var e;
                                this.drag && (t.preventDefault(), e = this._getPageCoords(t), this.moveX = parseInt(e.x - this.startX), this.go(this.startLeft + this.moveX), this._callback(this._status))
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
                            value: function (t) {
                                var e = r(t),
                                    n = 0;
                                if (e.parents(".rd-progress").length)
                                    for (; !e.hasClass("rd-progress");) n += e[0].offsetLeft, e = e.parent();
                                return n
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
                                t <= 100 && -1 <= t - 1 && (this.toolIsHidden(this.elem) ? this.line.css("left", parseInt(t, 10) + "%") : this.line.css("left", parseInt(this.maxW * t / 100, 10) + "px"), this._status = t)
                            }
                        }, {
                            key: "toolIsHidden",
                            value: function (t) {
                                for (var e = !1, n = r(t);
                                    (n = n.parent()) && 0 !== n.length && "BODY" !== n[0].nodeName;)
                                    if ("none" !== n.css("display")) {
                                        e = !0;
                                        break
                                    } return e
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
                        }]), i
                    }();
                i["default"] = n
            }).call(this, o("+2Rf"))
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
                u = i(n("a1gu")),
                c = i(n("Nsbk"));

            function l(i) {
                var r = function () {
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
                    var t, e, n = (0, c["default"])(i);
                    return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                }
            }
            var h = function (t) {
                (0, s["default"])(i, t);
                var n = l(i);

                function i(t) {
                    var e;
                    return (0, r["default"])(this, i), (e = n.call(this, t)).name = "阅读模式切换基类", e.isFixV = !1, e
                }
                return (0, a["default"])(i, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installHistoryInfo(), this.initData(), this.initEvent(), this.updateDom()
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
                }]), i
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        "4QO+": function (t, i, f) {
            "use strict";
            (function (c) {
                var t = f("TqRt");
                f("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, f("I5cv"), f("eM6i"), f("8+KV");
                var e = t(f("cDf5"));
                f("a1Th"), f("h7Nl"), f("Btvt"), f("Tze0");
                var r = t(f("lwsE")),
                    a = t(f("W8MJ")),
                    o = t(f("iWIM")),
                    s = t(f("7W2i")),
                    u = t(f("a1gu")),
                    l = t(f("Nsbk"));

                function h(i) {
                    var r = function () {
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
                        var t, e, n = (0, l["default"])(i);
                        return e = r ? (t = (0, l["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = h(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).bookmarkCover = c("#js_bookmarkCover"), e.tplBookMark = "", e.bookmarkMain = c("#js_bookmarkMain"), e.bookmarkAddBtn = c("#js_bookmarkAddBtn"), e.cacheUser = null, e.data = [], e.initData = !1, e.maxLength = 5, e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, l["default"])(i.prototype), "apply", this).call(this, t), this.comicId = this.states.comicInfo.comicId, this.tplBookMark = c("#tpl_bookMark").html().trim(), this.initEvent()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var s = this;
                            c("#js_ftBookmarkBtn").on("click", function () {
                                s.sendCnzzEvent("书签点击"), ACGN.isLogin() ? (s.getMarkList(), s.$emit.call("closeMenuControl"), s.$emit.call("stopAutoRead"), s.bookmarkCover.show()) : ACGN.layer.toast("请登录后再操作~")
                            }), this.bookmarkCover.on("click", function () {
                                s.bookmarkCover.hide()
                            });
                            var u = this;
                            this.bookmarkMain.on("click", ".bookmark-list", function (t) {
                                t.stopPropagation();
                                var e, n, i, r, a = c(this),
                                    o = c(t.target);
                                o.hasClass("close") ? (e = parseInt(o.data("index")), u.delMark(e)) : (n = u.states.currentChapter.chapterId, i = a.data("chapter"), r = a.data("page"), n.toString() === i.toString() ? u.$emit.call("directChapterImageIndex", {
                                    index: r
                                }) : window.location.href = i + ".html")
                            }), this.bookmarkAddBtn.on("click", function (t) {
                                s.sendCnzzEvent("书签添加"), t.stopPropagation();
                                var e = s.states.currentChapter,
                                    n = e.chapterId,
                                    i = e.chapterNatureId,
                                    r = e.chapterName,
                                    a = s.states.currentChapterImageIndex,
                                    o = {
                                        comic_id: s.comicId,
                                        chapter_id: i,
                                        chapter_newid: n,
                                        picture: a
                                    };
                                return !!s.baseTest(o) && (!!s.userTest() && (!!s.markRepeatTest(o) && void ACGN.ajax({
                                    url: "/api/bookmark_create/",
                                    type: "post",
                                    dataType: "json",
                                    cache: !1,
                                    data: {
                                        type: s.cacheUser.type,
                                        openid: s.cacheUser.openid,
                                        myuid: s.cacheUser.Uid,
                                        comic_id: o.comic_id,
                                        chapter_id: o.chapter_id,
                                        picture: o.picture
                                    }
                                }, function (t) {
                                    return t ? (ACGN.layer.toast("新增书签失败"), !1) : void s.bindData(o, r)
                                })))
                            })
                        }
                    }, {
                        key: "baseTest",
                        value: function (t) {
                            return "object" !== (0, e["default"])(t) ? (ACGN.layer.toast("data必须为对象"), !1) : t.comic_id ? t.chapter_id ? !("number" != typeof t.picture || t.chapter_id - 1 <= 0) || (ACGN.layer.toast("picture必须为大于1的数字"), !1) : (ACGN.layer.toast("chapter_id必须存在"), !1) : (ACGN.layer.toast("comic_id必须存在"), !1)
                        }
                    }, {
                        key: "userTest",
                        value: function () {
                            return !!this.cacheUser || (null === this.cacheUser && ACGN.layer.toast("获取用户信息中，请稍候再试"), ACGN.layer.toast("未获取到用户信息"), !1)
                        }
                    }, {
                        key: "markRepeatTest",
                        value: function (n) {
                            n.picture = String(n.picture);
                            var i = !1;
                            return this.data.forEach(function (t, e) {
                                t.mark_chapterid.toString() === n.chapter_id.toString() && t.mark_picture === n.picture && (i = !0)
                            }), !i || (ACGN.layer.toast("已经存在相同的书签了哦"), !1)
                        }
                    }, {
                        key: "bindData",
                        value: function (t, e) {
                            this.data.length && this.data.length >= this.maxLength && this.data.splice(this.data.length - 1, 1), this.data.unshift({
                                mark_comicid: t.comic_id,
                                mark_chapterid: t.chapter_id,
                                chapter_newid: t.chapter_newid,
                                mark_picture: String(t.picture),
                                mark_time: Date.now(),
                                mark_userid: this.cacheUser.Uid,
                                chapter_name: e
                            }), ACGN.layer.toast("添加书签成功!"), this.setHtml()
                        }
                    }, {
                        key: "getMarkList",
                        value: function () {
                            var s = this;
                            this.initData || (this.initData = !0, ACGN.user.getUserInfo({
                                refresh: !0
                            }, function (t, e) {
                                var n, i, r, a, o;
                                t ? s.cacheUser = null : (s.cacheUser = e, i = (n = s.cacheUser).type, r = n.openid, a = n.Uid, o = {
                                    comic_id: s.comicId,
                                    type: i,
                                    openid: r,
                                    myuid: a
                                }, ACGN.ajax({
                                    url: "/api/bookmark_listbycomic/",
                                    cache: !1,
                                    data: o,
                                    type: "post",
                                    dataType: "json"
                                }, function (t, e) {
                                    t || (s.data = e, s.setHtml())
                                }))
                            }))
                        }
                    }, {
                        key: "setHtml",
                        value: function () {
                            var t = ACGN.ejs.render(this.tplBookMark, {
                                markList: this.data
                            });
                            this.bookmarkMain.html(t)
                        }
                    }, {
                        key: "delMark",
                        value: function (n) {
                            var i = this,
                                t = this.data[n];
                            return t ? !!this.userTest() && void ACGN.ajax({
                                url: "/api/bookmark_remove/",
                                type: "post",
                                dataType: "json",
                                cache: !1,
                                data: {
                                    type: this.cacheUser.type,
                                    openid: this.cacheUser.openid,
                                    myuid: this.cacheUser.Uid,
                                    comic_id: t.mark_comicid,
                                    chapter_id: t.mark_chapterid,
                                    picture: t.mark_picture
                                }
                            }, function (t, e) {
                                return t ? (ACGN.layer.toast("删除书签失败"), !1) : (i.data.splice(n, 1), ACGN.layer.toast("删除书签成功!"), void i.setHtml())
                            }) : (ACGN.layer.toast("没有指定索引的书签记录"), !1)
                        }
                    }]), i
                }(t(f("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, f("+2Rf"))
        },
        "4c25": function (t, i, l) {
            "use strict";
            (function (r) {
                var t = l("TqRt");
                l("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, l("a1Th"), l("h7Nl"), l("Btvt"), l("I5cv"), l("2Spj"), l("f3/d");
                var a = t(l("lwsE")),
                    e = t(l("W8MJ")),
                    o = t(l("7W2i")),
                    s = t(l("a1gu")),
                    u = t(l("Nsbk"));

                function c(i) {
                    var r = function () {
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
                        var t, e, n = (0, u["default"])(i);
                        return e = r ? (t = (0, u["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, s["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, o["default"])(i, t);
                    var n = c(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "阅读模式切换", e.modeDoms = r("#js_settingTurningBtns .turning-block"), e.settingDom = r("#js_settingCover"), e
                    }
                    return (0, e["default"])(i, [{
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            r("#js_ftSettingBtn").on("click", this.cliSet.bind(this)), this.settingDom.on("click", function (t) {
                                e.cliWhiteClose(t)
                            });
                            var n = this;
                            this.modeDoms.on("click", function (t) {
                                n.cliMode(r(this))
                            })
                        }
                    }, {
                        key: "cliWhiteClose",
                        value: function (t) {
                            "js_settingCover" === this.$utils.getEventTarget(t).id && this.settingDom.hide()
                        }
                    }, {
                        key: "cliSet",
                        value: function () {
                            this.$emit.call("closeMenuControl"), this.$emit.call("stopAutoRead"), this.settingDom.show(), this.sendCnzzEvent("设置点击")
                        }
                    }, {
                        key: "cliMode",
                        value: function (t) {
                            if (t.hasClass("disabled")) return !1;
                            var e = t.data("turn");
                            e !== this.states.readMode && this.changeMode(e)
                        }
                    }, {
                        key: "updateDom",
                        value: function () {
                            for (var t = 0; t < this.modeDoms.length; t++) {
                                var e = this.modeDoms.eq(t);
                                e.data("turn") !== this.states.readMode ? this.isFixV && e.addClass("disabled") : e.addClass("active")
                            }
                        }
                    }]), i
                }(t(l("4F9g"))["default"]);
                i["default"] = n
            }).call(this, l("+2Rf"))
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
                    function e(t) {
                        (0, r["default"])(this, e), t.types = this.types
                    }
                    return (0, a["default"])(e, [{
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
                    }]), e
                }();
            e["default"] = o
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
                u = i(n("a1gu")),
                c = i(n("Nsbk"));

            function l(i) {
                var r = function () {
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
                    var t, e, n = (0, c["default"])(i);
                    return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                }
            }
            var h = function (t) {
                (0, s["default"])(i, t);
                var n = l(i);

                function i(t) {
                    var e;
                    return (0, r["default"])(this, i), (e = n.call(this, t)).name = "图片加载器插件", e.maxLen = 3, e.runing = !1, e.requestQueue = [], e
                }
                return (0, a["default"])(i, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["runImageLoad"])
                    }
                }, {
                    key: "runImageLoad",
                    value: function () {
                        this.runing || (this.runing = !0, this.loadImageBatch())
                    }
                }, {
                    key: "loadImageBatch",
                    value: function () {
                        var t, e, n = this,
                            i = this.states,
                            r = i.chapterImageList,
                            a = i.loadLine,
                            o = r.filter(function (t) {
                                return !t.isInited && !t.isLock && a[t.domain]
                            });
                        0 !== o.length ? this.requestQueue.length != this.maxLen && (t = o.sort(function (t, e) {
                            return e.priority - t.priority
                        }), e = this.maxLen - this.requestQueue.length, t.slice(0, e).forEach(function (t) {
                            n.requestImg(t)
                        })) : this.runing = !1
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
                        t.imgObj ? this.$emit.call("afterImageloadSucc", t) : (this.$emit.call("cancelImageObserve", t), this.$emit.call("afterImageloadFail", t)), 0 < e && this.$emit.call("cancelImageObserve", t), this.updateRequestQueue(t), this.loadImageBatch()
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
                }]), i
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        "6Ixs": function (t, i, h) {
            "use strict";
            (function (r) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("Tze0"), h("f3/d");
                var a = t(h("lwsE")),
                    e = t(h("W8MJ")),
                    o = t(h("iWIM")),
                    s = t(h("7W2i")),
                    u = t(h("a1gu")),
                    c = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "目录基类", e.catalogListDom = r("#js_catalogList"), e.catalogBtnDom = r("#js_catalogBtn"), e.tplListChapter = r("#tpl_listChapter").html().trim(), e.data = [], e.initData = !1, e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.comicId = this.states.comicInfo.comicId, this.initEvent(), this.initSelfEvent(), this.installSelfTaps()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            this.catalogBtnDom.on("click", function (t) {
                                t.stopPropagation(), e.catalogBtnDom.hasClass("order-reverse") ? (e.catalogBtnDom.removeClass("order-reverse"), r("#js_catalogText").text("升序"), e.sendCnzzEvent("章节目录排序升序")) : (e.catalogBtnDom.addClass("order-reverse"), r("#js_catalogText").text("降序"), e.sendCnzzEvent("章节目录排序降序")), e.setHtml(), e.afterSort()
                            })
                        }
                    }, {
                        key: "getChapterList",
                        value: function () {
                            var t, n = this;
                            this.initData || (this.initData = !0, t = {
                                comic_id: this.comicId
                            }, ACGN.ajax({
                                url: this.options.api.getChapterList,
                                cache: !1,
                                data: t,
                                dataType: "json"
                            }, function (t, e) {
                                t || (n.data = e.reverse(), n.data.length <= 0 && ACGN.layer.toast("没有获取到章节信息，请刷新重试试。。。"), n.catalogListDom.html(n.renderHtml()), n.selfCallBack())
                            }))
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
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
        },
        "6KfV": function (t, i, l) {
            "use strict";
            (function (r) {
                var t = l("TqRt");
                l("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, l("a1Th"), l("h7Nl"), l("Btvt"), l("I5cv"), l("f3/d");
                var a = t(l("lwsE")),
                    e = t(l("W8MJ")),
                    o = t(l("7W2i")),
                    s = t(l("a1gu")),
                    u = t(l("Nsbk"));

                function c(i) {
                    var r = function () {
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
                        var t, e, n = (0, u["default"])(i);
                        return e = r ? (t = (0, u["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, s["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, o["default"])(i, t);
                    var n = c(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "付费阅读插件", e.currentPopBox = null, e.bodyDom = r("body"), e
                    }
                    return (0, e["default"])(i, [{
                        key: "initSelfEvent",
                        value: function () {
                            var t = this;
                            this.bodyDom.on("click", "#js_payChapterClose", function () {
                                t.close(!1)
                            }), this.bodyDom.on("click", "#js_goPay", function () {
                                t.cliPay()
                            }), this.bodyDom.on("click", "#js_payChapterBuy", function () {
                                t.cliBuy()
                            })
                        }
                    }, {
                        key: "cliPay",
                        value: function () {
                            ACGN.userInfo && "device" === ACGN.userInfo.type ? location.href = "/login.htm" : location.href = "/uc/pay.html"
                        }
                    }, {
                        key: "getExtendOption",
                        value: function () {
                            return {
                                virtualCoinNum: this.isEnableVirtualCoinModule && this.virtualCoinModule.virtualCoinNum || 0
                            }
                        }
                    }, {
                        key: "clearPopDom",
                        value: function () {
                            this.currentPopBox && (this.currentPopBox.hide(), this.currentPopBox.remove(), this.currentPopBox = null)
                        }
                    }, {
                        key: "open",
                        value: function (t) {
                            this.currentPopBox = r(t), this.bodyDom.append(this.currentPopBox)
                        }
                    }, {
                        key: "selfShow",
                        value: function () {
                            this.currentPopBox.show()
                        }
                    }, {
                        key: "selfClose",
                        value: function () {
                            this.currentPopBox && this.currentPopBox.hide()
                        }
                    }, {
                        key: "hasPopDom",
                        value: function (t) {
                            return this.currentPopBox && this.currentPopBox.attr("chapter-id") === t
                        }
                    }]), i
                }(t(l("Oln6"))["default"]);
                i["default"] = n
            }).call(this, l("+2Rf"))
        },
        "6cS9": function (t, i, d) {
            "use strict";
            (function (e) {
                var t = d("TqRt");
                d("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, d("rGqo"), d("LK8F"), d("rE2o"), d("ioFf"), d("XfO3"), d("HEwt"), d("a1Th"), d("h7Nl"), d("Btvt"), d("I5cv"), d("8+KV"), d("f3/d");
                var r = t(d("lwsE")),
                    a = t(d("W8MJ")),
                    o = t(d("iWIM")),
                    s = t(d("7W2i")),
                    u = t(d("a1gu")),
                    c = t(d("Nsbk"));

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
                                r = function r() {};
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

                function f(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = f(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "广告插件", e.inited = !1, e.formatFn = e.options.formatFn, e.template = e.options.template, e.height = 0, e.timerCount = 0, e.baseTemplate = '<div class="acgn-reader-chapter__item no-chapter acgn-thrid__advertbox" style="width:{0}px">{1}</div>', e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.checkRun() && this.installTaps(["runChapterImageSlot"])
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
                                t.setAdvertDomInfo() || 60 < t.timerCount || (t.makeAdverInfo(), t.timerCount++)
                            }, 1e3)
                        }
                    }, {
                        key: "setAdvertDomInfo",
                        value: function () {
                            var t = e(".acgn-thrid__advertbox").first().height();
                            return 0 !== t && (this.height = t, this.updateImgSlot(), !0)
                        }
                    }, {
                        key: "updateImgSlot",
                        value: function () {
                            var e = this;
                            this.states.chapterImageList.forEach(function (t) {
                                t.slots.forEach(function (t) {
                                    t.type, e.types.advert, t.height = e.height
                                })
                            }), this.$emit.call("updateImageDistance")
                        }
                    }, {
                        key: "runChapterImageSlot",
                        value: function (t) {
                            var e, n, i;
                            t.isLast && (e = this.states.fillInfo.fillWidth, n = this.installTemplate(e), i = this.$reader.entitys.getImageSlot({
                                type: this.types.advert,
                                width: e,
                                height: this.height,
                                template: n
                            }), t.slots.push(i), this.inited || (this.inited = !0, this.makeAdverInfo()))
                        }
                    }]), i
                }(t(d("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, d("+2Rf"))
        },
        "8OQS": function (t, e) {
            t.exports = function (t, e) {
                if (null == t) return {};
                for (var n, i = {}, r = Object.keys(t), a = 0; a < r.length; a++) n = r[a], 0 <= e.indexOf(n) || (i[n] = t[n]);
                return i
            }
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
                u = i(n("7W2i")),
                c = i(n("a1gu")),
                l = i(n("Nsbk"));

            function h(e, t) {
                var n, i = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), i.push.apply(i, n)), i
            }

            function f(i) {
                var r = function () {
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
                    var t, e, n = (0, l["default"])(i);
                    return e = r ? (t = (0, l["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, c["default"])(this, e)
                }
            }
            var d = function (t) {
                (0, u["default"])(i, t);
                var n = f(i);

                function i(t) {
                    var e;
                    return (0, a["default"])(this, i), (e = n.call(this, t)).name = "竖向阅读插件", e
                }
                return (0, o["default"])(i, [{
                    key: "apply",
                    value: function (t) {
                        (0, s["default"])((0, l["default"])(i.prototype), "apply", this).call(this, t)
                    }
                }, {
                    key: "installSelfTaps",
                    value: function () {
                        this.installTaps(["directChapterDistance", "afterScaleChange"])
                    }
                }, {
                    key: "initSelfEvent",
                    value: function () {
                        var e = this;
                        this.container.on("scroll", function (t) {
                            e.onScroll()
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
                        var e = this,
                            t = function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? h(Object(n), !0).forEach(function (t) {
                                        (0, r["default"])(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({}, this.currentScroll),
                            n = this.getChapterImageDistance(t.chapter, t.chapterImageIndex, 0);
                        this.states.chapterImageList.forEach(function (t) {
                            e.resizeImg(t)
                        }), this.updateDistance(), this.refreshDom(), this.refreshScroll(t, n)
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
                        for (var t, r = this, e = document.createDocumentFragment(), n = this.boxContainer[0]; t = n.firstElementChild || n.firstChild;) e.appendChild(t);
                        Array.from(e.querySelectorAll(".acgn-reader-chapter__swiper-box")).forEach(function (t) {
                            var e = +t.getAttribute("chapter-index"),
                                n = t.getAttribute("chapter-pid"),
                                i = r.states.chapterImageList.find(function (t) {
                                    return t.chapterId === n && t.index === e
                                });
                            t.style.width = i.showWidth + "px", i.showHeight && (t.style.height = i.showHeight + "px")
                        }), n.appendChild(e)
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
                        var e = this,
                            n = 0;
                        this.states.chapterImageList.forEach(function (t) {
                            n += e.getPerDistance(t), t.endDistance = n
                        }), this.states.totalDistance = n
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
                        var e = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : 0;
                        2 < arguments.length && undefined;
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
                }]), i
            }(i(n("kMti"))["default"]);
            e["default"] = d
        },
        Cbd8: function (t, i, f) {
            "use strict";
            (function (r) {
                var t = f("TqRt");
                f("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, f("a1Th"), f("h7Nl"), f("Btvt"), f("I5cv");
                var c = t(f("cDf5"));
                f("Tze0"), f("f3/d");
                var a = t(f("lwsE")),
                    e = t(f("W8MJ")),
                    o = t(f("iWIM")),
                    s = t(f("7W2i")),
                    u = t(f("a1gu")),
                    l = t(f("Nsbk"));

                function h(i) {
                    var r = function () {
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
                        var t, e, n = (0, l["default"])(i);
                        return e = r ? (t = (0, l["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = h(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "弹幕模块基类", e.dmSpeed = e.options.dmSpeed, e.danmuModule = null, e.cacheUser = null, e.cacheToken = null, e.cacheData = {}, e.isSending = !1, e.tplDm = r("#tpl_chapterDm").html().trim(), e.dmScreenDom = r("#js_dmScreen"), e.countDom = r("#js_dmCount"), e.isShowDm = !1, e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, l["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterEntryInit", "afterChapterImageIndexChange"]), this.initModules(), this.installHistoryInfo(), this.initSelf()
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
                            var n = this;
                            ACGN.user.getUserInfo({}, function (t, e) {
                                !t && ACGN.isLogin() && (n.showMenuDom(), n.cacheUser = e, n.getDmToken(function () {
                                    n.setChapterDm()
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
                        value: function (n) {
                            var i = this;
                            ACGN.ajax({
                                url: this.options.api.gettokeninfo,
                                type: "get",
                                data: {
                                    type: this.cacheUser.type,
                                    openid: this.cacheUser.openid
                                },
                                dataType: "json"
                            }, function (t, e) {
                                t || e.token && e.appid && (i.cacheToken = {
                                    token: e.token,
                                    appId: e.appid
                                }, n())
                            })
                        }
                    }, {
                        key: "setChapterDm",
                        value: function () {
                            var e = this,
                                t = this.states.currentChapter;
                            this.fetchDmData(t, function (t) {
                                t && (e.showCountText(), e.shoot(), e.isShowDm && e.danmuModule.play())
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
                            this.countDom.text(99 < a ? "99+" : a)
                        }
                    }, {
                        key: "shoot",
                        value: function () {
                            var t = this.states,
                                e = t.currentChapter,
                                n = t.currentChapterImageIndex,
                                i = e.chapterId,
                                r = n - 1,
                                a = this.cacheData[i];
                            if (this.danmuModule.removeBullets(), a && "object" === (0, c["default"])(a) && a[r] && a[r].data && a[r].data.length) {
                                for (var o = a[r].data, s = [], u = 0; u < o.length; u++) s[u] = {
                                    data: o[u],
                                    template: this.tplDm
                                };
                                this.danmuModule.addBullets(s)
                            }
                        }
                    }, {
                        key: "fetchDmData",
                        value: function (t, n) {
                            var i = this,
                                r = t.chapterId,
                                e = t.startPage,
                                a = t.endPage;
                            return this.cacheToken ? this.cacheData[r] ? "object" !== (0, c["default"])(this.cacheData[r]) ? n(!1) : n(!0) : (this.cacheData[r] = "loading", void ACGN.ajax({
                                url: this.options.api.getBarrage,
                                type: "get",
                                data: {
                                    appId: this.cacheToken.appId,
                                    sourceId: this.states.comicInfo.comicId + "_" + r,
                                    order: 1,
                                    startPageId: e,
                                    endPageId: a
                                }
                            }, function (t, e) {
                                return t ? n(!1) : (i.transferData(e), i.cacheData[r] = e, void n(!0))
                            })) : n(!1)
                        }
                    }, {
                        key: "transferData",
                        value: function (t) {
                            for (var e = 0; e < t.length; e++)
                                for (var n = 0; n < t[e].data.length; n++) t[e].data[n].face = ACGN.util.getHeadCover(siteConf, t[e].data[n].uId), t[e].data[n].isVIP !== undefined && null !== t[e].data[n].isVIP || (t[e].data[n].isVIP = 0)
                        }
                    }, {
                        key: "sendDm",
                        value: function (n, i) {
                            var t, r, a, e, o, s, u, c = this;
                            this.isSending ? ACGN.layer.toast("弹幕正在发送中，请稍候再试！") : (this.isSending = !0, t = this.cacheUser, r = t.Uid, a = t.isvip, o = (e = this.states).currentChapter.chapterId, s = e.currentChapterImageIndex, u = {
                                uId: r,
                                token: this.cacheToken.token,
                                sourceId: this.states.comicInfo.comicId + "_" + o,
                                pageId: s,
                                fontColor: "ffffff",
                                isVIP: a,
                                msg: n
                            }, ACGN.ajax({
                                url: this.options.api.sendBarrage,
                                type: "post",
                                data: u,
                                dataType: "json"
                            }, function (t, e) {
                                return c.isSending = !1, t ? i(!1, t) : (c.insertDm({
                                    face: ACGN.util.getHeadCover(siteConf, r),
                                    fontColor: "ffffff",
                                    fontSize: "",
                                    isVIP: a,
                                    msg: n,
                                    uId: r
                                }), void i(!0))
                            }), this.sendCnzzEvent("发送弹幕"))
                        }
                    }, {
                        key: "swichDm",
                        value: function () {
                            this.isShowDm ? (this.danmuModule.stop(), this.danmuModule.clear(), this.setDanMuState(!1), this.sendCnzzEvent("切换弹幕关")) : (this.danmuModule.play(), this.setDanMuState(!0), this.sendCnzzEvent("切换弹幕开")), this.selfDmSwitch()
                        }
                    }, {
                        key: "insertDm",
                        value: function (t) {
                            if ("object" !== (0, c["default"])(t)) return !1;
                            var e = this.states,
                                n = e.currentChapter,
                                i = e.currentChapterImageIndex,
                                r = n.chapterId,
                                a = i - 1,
                                o = this.cacheData[r];
                            o && "object" === (0, c["default"])(o) && o[a].data.splice(0, 0, t), this.danmuModule.insertNewBullet({
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
                }(t(f("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, f("+2Rf"))
        },
        EkJ7: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("a1Th"), n("h7Nl"), n("Btvt"), n("I5cv");
            var r = i(n("lwsE")),
                a = i(n("W8MJ")),
                o = i(n("7W2i")),
                s = i(n("a1gu")),
                u = i(n("Nsbk"));

            function c(i) {
                var r = function () {
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
                    var t, e, n = (0, u["default"])(i);
                    return e = r ? (t = (0, u["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, s["default"])(this, e)
                }
            }
            var l = n("etg0"),
                h = n("nNe2"),
                f = new(function () {
                    (0, o["default"])(e, h);
                    var t = c(e);

                    function e() {
                        return (0, r["default"])(this, e), t.apply(this, arguments)
                    }
                    return (0, a["default"])(e, [{
                        key: "content",
                        value: function (t) {
                            var n = t.onError,
                                e = t.onDone,
                                i = t.rethrowIfPossible;
                            return this.callTapsSeries({
                                onError: function (t, e) {
                                    return n(e)
                                },
                                onDone: e,
                                rethrowIfPossible: i
                            })
                        }
                    }]), e
                }()),
                d = function () {
                    (0, o["default"])(e, l);
                    var t = c(e);

                    function e() {
                        return (0, r["default"])(this, e), t.apply(this, arguments)
                    }
                    return (0, a["default"])(e, [{
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
                            return f.setup(this, t), f.create(t)
                        }
                    }]), e
                }();
            t.exports = d
        },
        HTiG: function (t, i, o) {
            "use strict";
            (function (r) {
                var t = o("TqRt");
                o("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0;
                var a = t(o("lwsE")),
                    e = t(o("W8MJ")),
                    n = function () {
                        function i(t, e) {
                            var n = this;
                            if ((0, a["default"])(this, i), this.elem = r(t), !this.elem.length || !this.elem.hasClass("rd-turning")) throw Error("no elem:" + t);
                            this._status = !!e, this.elem[this._status ? "addClass" : "removeClass"]("turning-on"), this.elem.on("click", function (t) {
                                n.val(!n._status), n._callback(n._status)
                            })
                        }
                        return (0, e["default"])(i, [{
                            key: "val",
                            value: function (t) {
                                return t !== undefined && t !== this._status ? (this._status = !this._status, this.elem[this._status ? "addClass" : "removeClass"]("turning-on"), null) : this._status
                            }
                        }, {
                            key: "bind",
                            value: function (t) {
                                "function" == typeof t && (this._callback = t)
                            }
                        }]), i
                    }();
                i["default"] = n
            }).call(this, o("+2Rf"))
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
                    return r(this, t, 1 < arguments.length ? arguments[1] : undefined)
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
                u = i(n("a1gu")),
                c = i(n("Nsbk"));

            function l(i) {
                var r = function () {
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
                    var t, e, n = (0, c["default"])(i);
                    return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                }
            }
            var h = function (t) {
                (0, s["default"])(i, t);
                var n = l(i);

                function i(t) {
                    var e;
                    return (0, r["default"])(this, i), (e = n.call(this, t)).name = "历史记录", e.recordModule = null, e
                }
                return (0, a["default"])(i, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterIndexChange", "afterChapterImageIndexChange", "afterEntryInit"]), this.initModules(), this.installHistoryInfo()
                    }
                }, {
                    key: "afterEntryInit",
                    value: function () {
                        var r = this,
                            t = this.states,
                            e = t.comicInfo,
                            a = t.currentChapterImageIndex,
                            o = t.currentChapter;
                        this.recordModule.getReadHistory({
                            comic_id: e.comicId
                        }, function (t, e) {
                            var n, i;
                            t || (r.afterChapterIndexChange(), e && o.chapterId === e.chapter_newid && (n = e.chapter_page, (i = void 0 === n ? 1 : n) !== a && setTimeout(function () {
                                r.$emit.call("directChapterImageIndex", {
                                    index: i,
                                    duration: 300
                                })
                            })))
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
                }]), i
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
        },
        JRrf: function (t, f, d) {
            "use strict";
            (function (r) {
                var t = d("TqRt");
                d("HAE/"), Object.defineProperty(f, "__esModule", {
                    value: !0
                }), f["default"] = void 0, d("a1Th"), d("h7Nl"), d("Btvt"), d("I5cv"), d("2Spj"), d("f3/d");
                var a = t(d("lwsE")),
                    e = t(d("W8MJ")),
                    o = t(d("iWIM")),
                    s = t(d("7W2i")),
                    u = t(d("a1gu")),
                    c = t(d("Nsbk")),
                    n = t(d("W/Tl")),
                    l = t(d("3P17"));

                function h(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var i = function (t) {
                    (0, s["default"])(i, t);
                    var n = h(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "章节滑块", e.swiperTxtDom = r("#js_pageInfoText"), e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterImageIndexChange"]), this.initLightProgress(), this.initEvent(), this.setDirectChapterStyle()
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
                            r("#js_pagePrevBtn").on("click", function () {
                                var t = !!e.states.isSwiperReverse;
                                e.directChapter(t), e.setDirectChapterStyle(), e.sendCnzzEvent("上一话")
                            }), r("#js_pageNextBtn").on("click", function () {
                                var t = !e.states.isSwiperReverse;
                                e.directChapter(t), e.setDirectChapterStyle(), e.sendCnzzEvent("下一话")
                            })
                        }
                    }, {
                        key: "setDirectChapterStyle",
                        value: function () {
                            var t = this.states.currentChapter,
                                e = t.nextChapterId,
                                n = t.prevChapterId,
                                i = !!this.states.isSwiperReverse;
                            r("#js_pageNextBtn").removeClass("disabled"), r("#js_pagePrevBtn").removeClass("disabled"), e || r("#".concat(i ? "js_pagePrevBtn" : "js_pageNextBtn")).addClass("disabled"), n || r("#".concat(i ? "js_pageNextBtn" : "js_pagePrevBtn")).addClass("disabled")
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
                            var s = this;
                            this.pagePro = new l["default"]("#js_pageProgress", 1), this.pagePro.bind(function (t) {
                                var e, n = s.getSplitInfo(),
                                    i = n.all,
                                    r = n.index,
                                    a = n.totalPage,
                                    o = s.$utils.toolGetPercentSplit(t, i);
                                o !== r && (r < o ? s.pagePro.update(t + 1) : s.pagePro.update(t - 1), s.swiperTxtDom.text(o + "/" + i), s.states.isKeepMenu = !0, e = a < (e = o * s.swiperImageNum) ? a : e, s.$emit.call("directChapterImageIndex", {
                                    index: e
                                }))
                            }), this.pagePro.touchEnd(function (t) {
                                t && s.sendCnzzEvent("滑块拖动"), setTimeout(function () {
                                    s.states.isKeepMenu = !1
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
                }(n["default"]);
                f["default"] = i
            }).call(this, d("+2Rf"))
        },
        "K/0x": function (t, i, h) {
            "use strict";
            (function (e) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("f3/d");
                var r = t(h("lwsE")),
                    a = t(h("W8MJ")),
                    o = t(h("iWIM")),
                    s = t(h("7W2i")),
                    u = t(h("a1gu")),
                    c = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "图片线路管理插件", e.definition = e.options.definition || 0, e.lines = [], e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["runImageLineLoad"]), this.installHistoryInfo()
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
                        value: function (t, n) {
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
                            }, e.ajax({
                                url: "//server." + t + "/mhpic.asp?callback=window.callbackLineTab",
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
                        value: function (e) {
                            var n = this;
                            if (!this.lines[e]) {
                                var t = this.getCk(e);
                                if (t) return this.lines[e] = t, void(this.states.loadLine[e] = t.use_line);
                                this.options.simpleLine ? this.saveLine(e, {
                                    use_line: e
                                }) : this.getDomainData(e, function (t) {
                                    n.saveLine(e, t)
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
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
        },
        M037: function (t, i, h) {
            "use strict";
            (function (r) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("f3/d");
                var a = t(h("lwsE")),
                    e = t(h("W8MJ")),
                    o = t(h("iWIM")),
                    s = t(h("7W2i")),
                    u = t(h("a1gu")),
                    c = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "帮助引导", e.helpDom = r("#js_helpCover"), e.howScroll = r(".how-scroll").eq(0), e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.initEvent()
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var t = this;
                            r("#js_settingHelpBtn").on("click", function () {
                                t.helpDom.show(), t.howScroll.show(), t.sendCnzzEvent("帮助")
                            }), this.helpDom.on("click", function () {
                                t.helpDom.hide(), t.howScroll.hide()
                            })
                        }
                    }]), i
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
        },
        N8g3: function (t, e, n) {
            e.f = n("K0xU")
        },
        Oln6: function (t, d, p) {
            "use strict";
            (function (r) {
                var t = p("TqRt");
                Object.defineProperty(d, "__esModule", {
                    value: !0
                }), d["default"] = void 0, p("HAE/"), p("WLL4"), p("jm62"), p("0l/t"), p("ioFf"), p("rGqo"), p("yt8O"), p("RW0V"), p("a1Th"), p("h7Nl"), p("Btvt"), p("I5cv"), p("V+eJ"), p("8+KV");
                var i = t(p("lSNA"));
                p("Tze0"), p("f3/d");
                var a = t(p("lwsE")),
                    e = t(p("W8MJ")),
                    o = t(p("iWIM")),
                    s = t(p("7W2i")),
                    u = t(p("a1gu")),
                    c = t(p("Nsbk"));

                function l(e, t) {
                    var n, i = Object.keys(e);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), i.push.apply(i, n)), i
                }

                function h(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach(function (t) {
                            (0, i["default"])(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function f(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = f(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "付费阅读插件基类", e.cacheUser = null, e.payChapters = null, e.tplPayChapter = "", e.isShowPop = !1, e.isAutoBuying = !1, e.virtualCoinModule = {}, e.readFreeModule = null, e.cookieAutoPurchase = "autoPurchase", e.queueFetchChapters = [], e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), t.states.enablePay = !0, this.installTaps(["run", "afterChapterApiLoad", "afterChapterIndexChange", "afterChapterImageIndexChange"]), this.tplPayChapter = r("#tpl_payChapter").html().trim()
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
                            var t, e = this.modules,
                                n = e.VirtualCoinModule,
                                i = e.ReadFreeModule;
                            i && (this.readFreeModule = new i, this.readFreeModule.$baseTemplate = r("#tpl_readFree").html().trim()), n && (t = this.states.comicInfo.comicId, this.virtualCoinModule = new n({
                                comicId: t
                            }))
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
                                i = this.getExtendOption(t),
                                n = h(h({}, n), i),
                                r = ACGN.ejs.render(this.tplPayChapter, n);
                            this.open(r), this.initReadFree(t), this.show()
                        }
                    }, {
                        key: "initReadFree",
                        value: function (t) {
                            var e, n;
                            this.readFreeModule && (e = this.readFreeModule.getPopTemplate(), n = this.readFreeModule.$baseTemplate.format(e), this.readFreeModule.setPopOpts({
                                popHtml: n
                            }), this.readFreeModule.open(this, t))
                        }
                    }, {
                        key: "cliBuy",
                        value: function () {
                            var n = this;
                            this.buyChapter(function (t, e) {
                                t ? (n.close(!0), ACGN.layer.toast("购买章节成功"), ACGN.user.getUserInfo({
                                    refresh: !0
                                }, function (t, e) {
                                    n.cacheUser = t ? null : e
                                })) : ACGN.layer.toast(e)
                            })
                        }
                    }, {
                        key: "afterChapterApiLoad",
                        value: function (t) {
                            var n = this,
                                i = t.apiChapterId;
                            setTimeout(function () {
                                ACGN.user.getUserInfo(function (t, e) {
                                    t || (n.cacheUser = e, null === n.payChapters ? n.getPayChapters(function () {
                                        n.checkLock(i)
                                    }) : n.checkLock(i))
                                })
                            })
                        }
                    }, {
                        key: "getPayChapters",
                        value: function (t) {
                            var n = this;
                            if (this.queueFetchChapters.push(t), !(1 < this.queueFetchChapters.length)) {
                                if (!ACGN.isLogin()) return this.payChapters = [], void this.callbackFetchChapters();
                                var e = {
                                    openid: this.cacheUser.openid,
                                    type: this.cacheUser.type,
                                    comic_id: this.states.comicInfo.comicId
                                };
                                ACGN.ajax({
                                    url: this.options.api.getPurChasedChapters,
                                    cache: !1,
                                    data: e,
                                    dataType: "json"
                                }, function (t, e) {
                                    setTimeout(function () {
                                        n.callbackFetchChapters()
                                    }), t || (n.payChapters = e)
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
                            (this.isShowPop || this.isAutoBuying) && e.chapterId === i || (!a || this.isEnableVirtualCoinModule && this.virtualCoinModule.checkChapter(r) ? this.$emit.call("unlockCharpterObserver", {
                                chapterId: i,
                                isLock: !1
                            }) : null !== this.cacheUser && null !== this.payChapters ? -1 === this.payChapters.indexOf(r) ? (this.$emit.call("unlockCharpterObserver", {
                                chapterId: i,
                                isLock: !0
                            }), i === e.chapterId && this.openPay(n)) : this.$emit.call("unlockCharpterObserver", {
                                chapterId: i,
                                isLock: !1
                            }) : ACGN.layer.toast("获取用户付费信息失败，如果要使用付费功能请刷新页面"))
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
                        value: function (e) {
                            var n = this;
                            this.buyChapter(function (t) {
                                n.isAutoBuying = !1, t ? setTimeout(function () {
                                    n.close(!0)
                                }, 300) : n.freeTimeAndNormalPay(e)
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
                                return e.readFreeModule.isFreeTime() ? (e.close(!0), void ACGN.layer.toast("免费看漫画时间段，开启篇章")) : void e.doUserPay(t)
                            })) : this.doUserPay(t)
                        }
                    }, {
                        key: "buyChapter",
                        value: function (n, t) {
                            var i, e, r, a = this,
                                o = this.states.comicInfo.comicId,
                                s = this.states.currentChapter;
                            this.isEnableVirtualCoinModule ? this.virtualCoinModule.pay(s, function () {
                                n(!0)
                            }, "chapterNatureId") : !t || this.checkAutoEnough(s) ? (i = s.chapterNatureId, r = {
                                openid: (e = this.cacheUser).openid,
                                type: e.type,
                                comic_id: o,
                                chapter_ids: i
                            }, ACGN.ajax({
                                url: this.options.api.purchase,
                                type: "post",
                                data: r,
                                dataType: "json",
                                isResponse: !0
                            }, function (t, e) {
                                e && -1 !== [0, 1].indexOf(e.status) ? (a.payChapters.push(i), n(!0)) : n(!1, e.msg || "购买失败")
                            })) : n(!1)
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
                            var e;
                            this.isShowPop = !1, this.selfClose(), t && (this.afterBuySucc(), e = this.states.currentChapter.chapterId, this.$emit.call("unlockCharpterObserver", {
                                chapterId: e,
                                isLock: !1
                            }))
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
                }(t(p("W/Tl"))["default"]);
                d["default"] = n
            }).call(this, p("+2Rf"))
        },
        OnI7: function (t, e, n) {
            var i = n("dyZX"),
                r = n("g3g5"),
                a = n("LQAc"),
                o = n("N8g3"),
                s = n("hswa").f;
            t.exports = function (t) {
                var e = r.Symbol || (r.Symbol = !a && i.Symbol || {});
                "_" == t.charAt(0) || t in e || s(e, t, {
                    value: o.f(t)
                })
            }
        },
        Ot2g: function (t, i, h) {
            "use strict";
            (function (r) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("f3/d");
                var a = t(h("lwsE")),
                    e = t(h("W8MJ")),
                    o = t(h("iWIM")),
                    s = t(h("7W2i")),
                    u = t(h("a1gu")),
                    c = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "菜单控制", e.isShowMenu = !1, e.footMemuDom = r("#js_footMenu"), e.headMenuDom = r("#js_headMenu"), e.headHeight = e.headMenuDom.outerHeight(), e.footHeight = e.footMemuDom.outerHeight(), e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["onContainerClick", "closeMenuControl", "onContainerScroll", "afterEntryInit"])
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
                        key: "onContainerScroll",
                        value: function () {
                            !this.hasEntryInit || this.states.isKeepMenu || this.states.enableAutoRead || this.close()
                        }
                    }, {
                        key: "onContainerClick",
                        value: function (t) {
                            var e = this.states,
                                n = e.container,
                                i = e.readMode === this.types.mode.V ? n : n.parent();
                            "center" === this.$utils.mouseArea(i, t)[0] && (this.$emit.call("onContainerClickCenter", {
                                headHeight: this.headHeight,
                                footHeight: this.footHeight
                            }), this.isShowMenu ? this.close() : this.show())
                        }
                    }, {
                        key: "closeMenuControl",
                        value: function () {
                            this.close()
                        }
                    }, {
                        key: "show",
                        value: function () {
                            this.isShowMenu = !0, this.headMenuDom.addClass("header-show").show(), this.footMemuDom.show()
                        }
                    }, {
                        key: "close",
                        value: function () {
                            this.isShowMenu = !1, this.headMenuDom.removeClass("header-show").hide(), this.footMemuDom.hide()
                        }
                    }]), i
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
        },
        PPyY: function (t, e, n) {},
        QILm: function (t, e, n) {
            var o = n("8OQS");
            t.exports = function (t, e) {
                if (null == t) return {};
                var n, i = o(t, e);
                if (Object.getOwnPropertySymbols)
                    for (var r = Object.getOwnPropertySymbols(t), a = 0; a < r.length; a++) n = r[a], 0 <= e.indexOf(n) || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
                return i
            }
        },
        QJ5W: function (t, e, d) {
            "use strict";
            (function (t) {
                var e = d("TqRt");
                d("pIFo"), d("Tze0"), d("eM6i"), d("SRfc"), d("j9mN"), d("TiqJ");
                var n = e(d("T7Xx")),
                    i = e(d("PRRQ")),
                    r = e(d("jnot")),
                    a = e(d("wXuM")),
                    o = e(d("ixR2")),
                    s = e(d("+q+r")),
                    u = e(d("8nAb")),
                    c = e(d("CFsG")),
                    l = d("cmuy"),
                    h = d("WnvN");
                new o["default"], ejs.delimiter = "$";
                var f = !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                new a["default"]({
                    container: t("#reader-scroll"),
                    read: {
                        defaultDistanceV: 720,
                        swiperImageNum: 1
                    },
                    plugins: [new h.Pay({
                        modules: {
                            VirtualCoinModule: n["default"]
                        }
                    }), new l.ComicLoader, new h.SwichReadModel, new l.ImageLoadLine({
                        options: {
                            definition: 0,
                            definitions: ["-kmh.low", "-kmh.middle", "-kmh.high"]
                        }
                    }), new l.ReadModeV, new l.ReadModeH, new l.HistoryRecord({
                        modules: {
                            ComicRecord: i["default"]
                        }
                    }), new h.Catalog, new l.ChapterObserver, new l.ImageLoader, new h.Header({
                        options: {
                            title: "打开看漫画APP",
                            desc: "阅读体验更好哦～",
                            logoImg: "".concat(siteConf.staticRoot, "images/comm/").concat(f ? "tj_" : "", "logo.png")
                        },
                        modules: {
                            appCtrl: u["default"],
                            guideCtrl: c["default"]
                        }
                    }), new h.MenuControl, new h.SwichLight, new h.AutoRead, new h.Help, new l.Slider, new h.Welcome, new h.Barrage({
                        modules: {
                            Bullets: r["default"]
                        }
                    }), new h.PanelInfo, new h.Bookmark, new l.Advert({
                        options: {
                            checkKeys: ["p_30", "p_52"],
                            formatFn: function (t) {
                                var e = Date.now();
                                return ACGN.ejs.render(t, {
                                    id1: e,
                                    id2: e + 1
                                })
                            },
                            template: t("#tpl_advert").html().replace(/__script__/g, "script").trim()
                        }
                    }), new l.BomSet, new l.CnzzCount({
                        modules: {
                            cnzzCount: s["default"]
                        }
                    })]
                }).run()
            }).call(this, d("+2Rf"))
        },
        QKcG: function (t, f, d) {
            "use strict";
            (function (r) {
                var t = d("TqRt");
                d("HAE/"), Object.defineProperty(f, "__esModule", {
                    value: !0
                }), f["default"] = void 0, d("a1Th"), d("h7Nl"), d("Btvt"), d("I5cv"), d("2Spj"), d("dRSK"), d("f3/d");
                var a = t(d("lwsE")),
                    e = t(d("W8MJ")),
                    o = t(d("iWIM")),
                    s = t(d("7W2i")),
                    u = t(d("a1gu")),
                    c = t(d("Nsbk")),
                    n = t(d("W/Tl")),
                    l = t(d("3P17"));

                function h(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var i = function (t) {
                    (0, s["default"])(i, t);
                    var n = h(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "亮度设置", e.lightDom = r("#js_lightCover"), e.lightOptionDom = e.lightDom.find(".light-option-btn"), e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.initLightProgress(), this.initEvent()
                        }
                    }, {
                        key: "initLightProgress",
                        value: function () {
                            var e = this;
                            this.lightPro = new l["default"]("#js_lightProgress", 100), this.lightPro.bind(function (t) {
                                e.lightOptionDom.removeClass("active"), e.states.boxContainer.css({
                                    opacity: t / 125 + .2
                                })
                            }), this.lightPro.touchEnd(function (t) {
                                t && e.sendCnzzEvent("亮度滑块拖动")
                            })
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            this.lightDom.on("click", function (t) {
                                e.cliWhiteClose(t)
                            }), r("#js_ftLightBtn").on("click", this.cliLight.bind(this)), r("#js_lightReduceBtn").on("click", function () {
                                e.cliChangeLight(0)
                            }), r("#js_lightAddBtn").on("click", function () {
                                e.cliChangeLight(1)
                            });
                            var t = this;
                            this.lightOptionDom.on("click", function () {
                                t.cliOptions(r(this))
                            })
                        }
                    }, {
                        key: "cliWhiteClose",
                        value: function (t) {
                            "js_lightCover" === this.$utils.getEventTarget(t).id && this.lightDom.hide()
                        }
                    }, {
                        key: "cliChangeLight",
                        value: function (t) {
                            var e = this.lightPro.now(),
                                n = t ? e + 5 : e - 5;
                            this.lightPro.update(n), this.lightPro.trigger(), this.sendCnzzEvent("亮度加减设置_" + n)
                        }
                    }, {
                        key: "cliLight",
                        value: function () {
                            this.$emit.call("closeMenuControl"), this.$emit.call("stopAutoRead"), this.lightDom.show(), this.sendCnzzEvent("亮度设置")
                        }
                    }, {
                        key: "cliOptions",
                        value: function (t) {
                            var e;
                            t.hasClass("active") || (e = t.data("percent"), this.lightPro.update(parseInt(e, 10)), this.lightPro.trigger(), this.lightOptionDom.removeClass("active"), t.addClass("active"), this.sendCnzzEvent("亮度设置_" + e))
                        }
                    }]), i
                }(n["default"]);
                f["default"] = i
            }).call(this, d("+2Rf"))
        },
        RQSO: function (t, i, l) {
            "use strict";
            (function (r) {
                var t = l("TqRt");
                l("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, l("a1Th"), l("h7Nl"), l("Btvt"), l("I5cv"), l("dRSK"), l("f3/d");
                var a = t(l("lwsE")),
                    e = t(l("W8MJ")),
                    o = t(l("7W2i")),
                    s = t(l("a1gu")),
                    u = t(l("Nsbk"));

                function c(i) {
                    var r = function () {
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
                        var t, e, n = (0, u["default"])(i);
                        return e = r ? (t = (0, u["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, s["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, o["default"])(i, t);
                    var n = c(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "目录模块", e.catalogCoverDom = r("#js_catalogCover"), e
                    }
                    return (0, e["default"])(i, [{
                        key: "initSelfEvent",
                        value: function () {
                            var e = this;
                            r("#js_ftMenuBtn").on("click", function () {
                                e.getChapterList(), e.$emit.call("closeMenuControl"), e.catalogCoverDom.show(), e.$emit.call("stopAutoRead"), e.sendCnzzEvent("章节目录显示")
                            }), this.catalogCoverDom.find(".cover-menu").on("click", function (t) {
                                t.stopPropagation()
                            }), this.catalogCoverDom.on("click", function (t) {
                                e.catalogCoverDom.hide()
                            })
                        }
                    }]), i
                }(t(l("6Ixs"))["default"]);
                i["default"] = n
            }).call(this, l("+2Rf"))
        },
        SjK1: function (t, i, h) {
            "use strict";
            (function (e) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("dRSK"), h("INYr"), h("f3/d");
                var r = t(h("lwsE")),
                    a = t(h("W8MJ")),
                    o = t(h("iWIM")),
                    s = t(h("7W2i")),
                    u = t(h("a1gu")),
                    c = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "章节图片视窗插件", e.intersectionObserver = null, e.preloadScope = 2, e.loading = !1, e.entryQueue = [], e.ignoreDuration = 150, e
                    }
                    return (0, a["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.initObserver(), this.installTaps(["runImageObserver", "cancelImageObserve"])
                        }
                    }, {
                        key: "initObserver",
                        value: function () {
                            var s = this;
                            this.intersectionObserver = new IntersectionObserver(function (t) {
                                e.each(t, function (t, e) {
                                    var n = e.target,
                                        i = s.getTargetAttr(n),
                                        r = i.chapterId,
                                        a = i.chapterIndex,
                                        o = s.entryQueue.findIndex(function (t) {
                                            return t.chapterId === r && t.chapterIndex === a
                                        });
                                    if (-1 !== o && !e.isIntersecting) return s.entryQueue.splice(o, 1), void s.$message("忽略加载" + a + "/" + r); - 1 === o && e.isIntersecting && s.entryQueue.push({
                                        chapterId: r,
                                        chapterIndex: a
                                    })
                                }), setTimeout(function () {
                                    s.loadObserverLazy()
                                }, s.ignoreDuration)
                            })
                        }
                    }, {
                        key: "getTargetAttr",
                        value: function (t) {
                            return {
                                chapterId: t.getAttribute("chapter-pid"),
                                chapterIndex: +t.getAttribute("chapter-index")
                            }
                        }
                    }, {
                        key: "loadObserverLazy",
                        value: function () {
                            var a, o = this;
                            this.loading || (this.$time("执行一次观察加载耗时"), this.loading = !0, a = this.states.chapterImageList, e.each(this.entryQueue, function (t, e) {
                                var n = e.chapterId,
                                    i = e.chapterIndex,
                                    r = a.find(function (t) {
                                        return t.chapterId === n && t.index === i
                                    });
                                r.priority = 2, r.isSucceed && o.cancelImageObserve(r)
                            }), this.entryQueue.length = 0, this.$emit.call("runImageLoad"), this.loading = !1, this.$time("执行一次观察加载耗时", !0))
                        }
                    }, {
                        key: "loadPreObserver",
                        value: function (t, e) {
                            for (var n = e.chapterId, i = e.index, r = t.findIndex(function (t) {
                                    return t.chapterId === n && t.index === i
                                }), a = this.preloadScope, o = Math.max(r - a, 0), s = Math.min(r + a, t.length - 1), u = o; u <= s; u++) {
                                var c = t[u];
                                c && !c.isObserved && (c.priority = 1, c.isSucceed && this.cancelImageObserve(c))
                            }
                            this.$emit.call("runImageLoad")
                        }
                    }, {
                        key: "runImageObserver",
                        value: function (t) {
                            var n = this;
                            e.each(t, function (t, e) {
                                n.intersectionObserver.observe(e)
                            })
                        }
                    }, {
                        key: "cancelImageObserve",
                        value: function (t) {
                            var e, n = this;
                            2 === t.priority && (t.isObserved = !0, e = this.states.container.find('[chapter-index="'.concat(t.index, '"][chapter-pid="').concat(t.chapterId, '"]')), this.intersectionObserver.unobserve(e[0]), setTimeout(function () {
                                n.loadPreObserver(n.states.chapterImageList, t)
                            }, 100)), t.isCreateDom || (t.isCreateDom = !0, this.$emit.call("afterImageObserver", t))
                        }
                    }]), i
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
        },
        TiqJ: function (t, e, n) {},
        Uvps: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("a1Th"), n("h7Nl"), n("I5cv"), n("VRzm"), n("Btvt");
            var f = i(n("o0o1"));
            n("ls82");
            var r = i(n("yXPU")),
                u = i(n("QILm"));
            n("f3/d");
            var o = i(n("lwsE")),
                c = i(n("W8MJ")),
                l = i(n("iWIM")),
                d = i(n("7W2i")),
                a = i(n("a1gu")),
                p = i(n("Nsbk"));

            function v(i) {
                var r = function () {
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
                    var t, e, n = (0, p["default"])(i);
                    return e = r ? (t = (0, p["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, a["default"])(this, e)
                }
            }
            var s = function (t) {
                (0, d["default"])(s, t);
                var e, n, i = v(s);

                function s(t) {
                    var e;
                    return (0, o["default"])(this, s), (e = i.call(this, t)).name = "漫画数据加载管理插件", e
                }
                return (0, c["default"])(s, [{
                    key: "apply",
                    value: function (t) {
                        (0, l["default"])((0, p["default"])(s.prototype), "apply", this).call(this, t), this.installTaps(["runChapterApiLoad"]);
                        var e = this.getInitChapterInfo(),
                            n = e.prev_chapter,
                            i = e.current_chapter,
                            r = e.next_chapter,
                            a = (0, u["default"])(e, ["prev_chapter", "current_chapter", "next_chapter"]);
                        t.states.comicInfo = t.entitys.getComicModel(a);
                        var o = this.installChapterInfo(n, i, r);
                        this.installHistoryInfo(o[1])
                    }
                }, {
                    key: "installHistoryInfo",
                    value: function (t) {
                        this.$reader.states.currentChapter = t
                    }
                }, {
                    key: "runChapterApiLoad",
                    value: (n = (0, r["default"])(f["default"].mark(function h(e) {
                        var n, i, r, a, o, s, u, c, l;
                        return f["default"].wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.sourceChapterId, i = e.apiChapterId, r = e.callback, t.next = 3, this.getChapterInfo(i);
                                case 3:
                                    a = t.sent, o = a.data, s = o.prev_chapter, u = o.current_chapter, c = o.next_chapter, l = this.installChapterInfo(s, u, c), this.$emit.call("afterChapterApiLoad", {
                                        apiChapterId: i,
                                        sourceChapterId: n,
                                        chapter: l[1]
                                    }), r && r();
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, h, this)
                    })), function (t) {
                        return n.apply(this, arguments)
                    })
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
                    value: (e = (0, r["default"])(f["default"].mark(function a(e) {
                        var n, i, r = this;
                        return f["default"].wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = this.states.comicInfo.comicId, i = {
                                        comic_id: n,
                                        chapter_newid: e
                                    }, t.abrupt("return", new Promise(function (e) {
                                        ACGN.ajax({
                                            url: r.options.api.getChapterInfo,
                                            data: i,
                                            success: function (t) {
                                                e(t)
                                            },
                                            error: function (t) {
                                                ACGN.layer.toast("章节数据加载失败，请刷新重试")
                                            }
                                        })
                                    }));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, a, this)
                    })), function (t) {
                        return e.apply(this, arguments)
                    })
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
                }]), s
            }(i(n("W/Tl"))["default"]);
            e["default"] = s
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
                u = i(n("zNPx"));

            function c(e, t) {
                var n, i = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), i.push.apply(i, n)), i
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach(function (t) {
                        (0, r["default"])(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var h = function () {
                function e() {
                    var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {};
                    (0, a["default"])(this, e), this.name = "插件基础类", this.$emit = null, this.$time = s["default"].$time, this.$error = s["default"].$error, this.$message = s["default"].$message, this.$utils = u["default"], this.modules = this.getArgs(t, "modules"), this.options = l(l({}, this.$options), this.getArgs(t, "options"))
                }
                return (0, o["default"])(e, [{
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
                        var e;
                        _czc && (e = u["default"].isMobileHanddle() ? "m" : "pc", _czc.push(["_trackEvent", "阅读器事件_" + e, t]))
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
                }]), e
            }();
            e["default"] = h
        },
        WLL4: function (t, e, n) {
            var i = n("XKFU");
            i(i.S + i.F * !n("nh4g"), "Object", {
                defineProperties: n("FJW5")
            })
        },
        WnvN: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            n("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "Bookmark", {
                enumerable: !0,
                get: function () {
                    return r["default"]
                }
            }), Object.defineProperty(e, "SwichReadModel", {
                enumerable: !0,
                get: function () {
                    return a["default"]
                }
            }), Object.defineProperty(e, "AutoRead", {
                enumerable: !0,
                get: function () {
                    return o["default"]
                }
            }), Object.defineProperty(e, "SwichLight", {
                enumerable: !0,
                get: function () {
                    return s["default"]
                }
            }), Object.defineProperty(e, "Pay", {
                enumerable: !0,
                get: function () {
                    return u["default"]
                }
            }), Object.defineProperty(e, "Barrage", {
                enumerable: !0,
                get: function () {
                    return c["default"]
                }
            }), Object.defineProperty(e, "PanelInfo", {
                enumerable: !0,
                get: function () {
                    return l["default"]
                }
            }), Object.defineProperty(e, "Header", {
                enumerable: !0,
                get: function () {
                    return h["default"]
                }
            }), Object.defineProperty(e, "MenuControl", {
                enumerable: !0,
                get: function () {
                    return f["default"]
                }
            }), Object.defineProperty(e, "Catalog", {
                enumerable: !0,
                get: function () {
                    return d["default"]
                }
            }), Object.defineProperty(e, "Welcome", {
                enumerable: !0,
                get: function () {
                    return p["default"]
                }
            }), Object.defineProperty(e, "Help", {
                enumerable: !0,
                get: function () {
                    return v["default"]
                }
            });
            var r = i(n("4QO+")),
                a = i(n("4c25")),
                o = i(n("gql0")),
                s = i(n("QKcG")),
                u = i(n("6KfV")),
                c = i(n("a81x")),
                l = i(n("/Bsm")),
                h = i(n("wdZT")),
                f = i(n("Ot2g")),
                d = i(n("RQSO")),
                p = i(n("qbCE")),
                v = i(n("M037"))
        },
        Wr5T: function (t, e) {
            ! function () {
                "use strict";
                var v, e;

                function c(t) {
                    this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || a(), this.isIntersecting = !!t.intersectionRect;
                    var e = this.boundingClientRect,
                        n = e.width * e.height,
                        i = this.intersectionRect,
                        r = i.width * i.height;
                    this.intersectionRatio = n ? Number((r / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function t(t, e) {
                    var n, i, r, a = e || {};
                    if ("function" != typeof t) throw new Error("callback must be a function");
                    if (a.root && 1 != a.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this), i = this.THROTTLE_TIMEOUT, r = null, function () {
                        r = r || setTimeout(function () {
                            n(), r = null
                        }, i)
                    }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(a.rootMargin), this.thresholds = this._initThresholds(a.threshold), this.root = a.root || null, this.rootMargin = this._rootMarginValues.map(function (t) {
                        return t.value + t.unit
                    }).join(" ")
                }

                function n(t, e, n, i) {
                    "function" == typeof t.addEventListener ? t.addEventListener(e, n, i || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
                }

                function i(t, e, n, i) {
                    "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, i || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
                }

                function m(t) {
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
                    }), e) : a()
                }

                function a() {
                    return {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function r(t, e) {
                    for (var n = e; n;) {
                        if (n == t) return !0;
                        n = y(n)
                    }
                    return !1
                }

                function y(t) {
                    var e = t.parentNode;
                    return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
                }
                "object" == typeof window && ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function () {
                        return 0 < this.intersectionRatio
                    }
                }) : (v = window.document, e = [], t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function (e) {
                    if (!this._observationTargets.some(function (t) {
                            return t.element == e
                        })) {
                        if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: e,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, t.prototype.unobserve = function (e) {
                    this._observationTargets = this._observationTargets.filter(function (t) {
                        return t.element != e
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, t.prototype.disconnect = function () {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, t.prototype.takeRecords = function () {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, t.prototype._initThresholds = function (t) {
                    var e = t || [0];
                    return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, n) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== n[e - 1]
                    })
                }, t.prototype._parseRootMargin = function (t) {
                    var e = (t || "0px").split(/\s+/).map(function (t) {
                        var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!e) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(e[1]),
                            unit: e[2]
                        }
                    });
                    return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
                }, t.prototype._monitorIntersections = function () {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (n(window, "resize", this._checkForIntersections, !0), n(v, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(v, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, t.prototype._unmonitorIntersections = function () {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(window, "resize", this._checkForIntersections, !0), i(v, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, t.prototype._checkForIntersections = function () {
                    var s = this._rootIsInDom(),
                        u = s ? this._getRootRect() : a();
                    this._observationTargets.forEach(function (t) {
                        var e = t.element,
                            n = m(e),
                            i = this._rootContainsTarget(e),
                            r = t.entry,
                            a = s && i && this._computeTargetAndRootIntersection(e, u),
                            o = t.entry = new c({
                                time: window.performance && performance.now && performance.now(),
                                target: e,
                                boundingClientRect: n,
                                rootBounds: u,
                                intersectionRect: a
                            });
                        r ? s && i ? this._hasCrossedThreshold(r, o) && this._queuedEntries.push(o) : r && r.isIntersecting && this._queuedEntries.push(o) : this._queuedEntries.push(o)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, t.prototype._computeTargetAndRootIntersection = function (t, e) {
                    if ("none" != window.getComputedStyle(t).display) {
                        for (var n, i, r, a, o, s, u, c, l = m(t), h = y(t), f = !1; !f;) {
                            var d = null,
                                p = 1 == h.nodeType ? window.getComputedStyle(h) : {};
                            if ("none" == p.display) return;
                            if (h == this.root || h == v ? (f = !0, d = e) : h != v.body && h != v.documentElement && "visible" != p.overflow && (d = m(h)), d && (n = d, i = l, c = u = s = o = a = r = void 0, r = Math.max(n.top, i.top), a = Math.min(n.bottom, i.bottom), o = Math.max(n.left, i.left), s = Math.min(n.right, i.right), c = a - r, !(l = 0 <= (u = s - o) && 0 <= c && {
                                    top: r,
                                    bottom: a,
                                    left: o,
                                    right: s,
                                    width: u,
                                    height: c
                                }))) break;
                            h = y(h)
                        }
                        return l
                    }
                }, t.prototype._getRootRect = function () {
                    var t, e, n;
                    return n = this.root ? m(this.root) : (t = v.documentElement, e = v.body, {
                        top: 0,
                        left: 0,
                        right: t.clientWidth || e.clientWidth,
                        width: t.clientWidth || e.clientWidth,
                        bottom: t.clientHeight || e.clientHeight,
                        height: t.clientHeight || e.clientHeight
                    }), this._expandRectByRootMargin(n)
                }, t.prototype._expandRectByRootMargin = function (n) {
                    var t = this._rootMarginValues.map(function (t, e) {
                            return "px" == t.unit ? t.value : t.value * (e % 2 ? n.width : n.height) / 100
                        }),
                        e = {
                            top: n.top - t[0],
                            right: n.right + t[1],
                            bottom: n.bottom + t[2],
                            left: n.left - t[3]
                        };
                    return e.width = e.right - e.left, e.height = e.bottom - e.top, e
                }, t.prototype._hasCrossedThreshold = function (t, e) {
                    var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        i = e.isIntersecting ? e.intersectionRatio || 0 : -1;
                    if (n !== i)
                        for (var r = 0; r < this.thresholds.length; r++) {
                            var a = this.thresholds[r];
                            if (a == n || a == i || a < n != a < i) return !0
                        }
                }, t.prototype._rootIsInDom = function () {
                    return !this.root || r(v, this.root)
                }, t.prototype._rootContainsTarget = function (t) {
                    return r(this.root || v, t)
                }, t.prototype._registerInstance = function () {
                    e.indexOf(this) < 0 && e.push(this)
                }, t.prototype._unregisterInstance = function () {
                    var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
                }, window.IntersectionObserver = t, window.IntersectionObserverEntry = c))
            }()
        },
        X7qu: function (t, i, h) {
            "use strict";
            (function (c) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("pIFo"), h("f3/d");
                var r = t(h("lwsE")),
                    e = t(h("W8MJ")),
                    a = t(h("iWIM")),
                    o = t(h("7W2i")),
                    s = t(h("a1gu")),
                    u = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, u["default"])(i);
                        return e = r ? (t = (0, u["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, s["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, o["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "Bom设置", e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, a["default"])((0, u["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterIndexChange"])
                        }
                    }, {
                        key: "afterChapterIndexChange",
                        value: function () {
                            this.replaceBom()
                        }
                    }, {
                        key: "replaceBom",
                        value: function () {
                            var t, e = this.states,
                                n = e.comicInfo.comicName,
                                i = e.currentChapter,
                                r = window.comicInfo.seoTitleTemplate,
                                a = ACGN.util.chapterNameHanddle(n, i.chapterName),
                                o = a.chapterName,
                                s = a.chapterNumber,
                                u = "",
                                u = s ? r.title.format(n, s, o) : r["default"].format(n, o);
                            c("head title").html(u), history.replaceState && (t = location.href.replace(/\/[^\/]*?\.html/, "/" + i.chapterId + ".html"), history.replaceState({}, "漫画阅读", t))
                        }
                    }]), i
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
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
                u = i(n("a1gu")),
                c = i(n("Nsbk"));

            function l(i) {
                var r = function () {
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
                    var t, e, n = (0, c["default"])(i);
                    return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                }
            }
            var h = function (t) {
                (0, s["default"])(i, t);
                var n = l(i);

                function i(t) {
                    var e;
                    return (0, r["default"])(this, i), (e = n.call(this, t)).name = "自动阅读模块基类", e.isAuto = !1, e.speed = 1, e.timerHandle = null, e.isV = !0, e
                }
                return (0, a["default"])(i, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.isV = this.states.readMode === this.types.mode.V, this.installHistoryInfo(), this.installSelfTaps(), this.installTaps(["stopAutoRead"]), this.initEvent()
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
                        t <= 0 || 20 < t || (this.states.readSpeed = this.speed = t, this.afterChangeSpeed(t), this.$utils.setHabit(this.types.cookieHabit, "speed", t))
                    }
                }, {
                    key: "cliAutoRead",
                    value: function () {
                        var t;
                        this.isAuto ? this.doStopAutoRead() : (t = this.states.readSpeed, this.startAutoRead(t))
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
                            o = Math.max(i - r.fillHeight, 0),
                            a = Math.min(a, o);
                        if (this.$emit.call("directChapterDistance", a), a === o) return ACGN.layer.toast("已阅读至最新章节，自动阅读结束"), void this.doStopAutoRead();
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
                }]), i
            }(i(n("W/Tl"))["default"]);
            e["default"] = h
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
                    function e(t) {
                        (0, r["default"])(this, e), t.entitys = this
                    }
                    return (0, a["default"])(e, [{
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
                                isLock: !!e && 0 < t.price,
                                prevChapterId: null,
                                prevChapterName: null,
                                nextChapterId: null,
                                nextChapterName: null
                            }
                        }
                    }, {
                        key: "getChapterImageModel",
                        value: function (t, e) {
                            var n = 2 < arguments.length && arguments[2] !== undefined && arguments[2],
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
                    }]), e
                }();
            e["default"] = o
        },
        a81x: function (t, i, h) {
            "use strict";
            (function (f) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("2Spj"), h("KKXr"), h("Tze0"), h("pIFo"), h("dRSK"), h("f3/d");
                var r = t(h("lwsE")),
                    e = t(h("W8MJ")),
                    a = t(h("7W2i")),
                    o = t(h("a1gu")),
                    s = t(h("Nsbk")),
                    u = t(h("HTiG")),
                    c = t(h("3P17"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, s["default"])(i);
                        return e = r ? (t = (0, s["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, o["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, a["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).name = "弹幕模块", e.menuDom = f("#js_dmMenu"), e.countDom = e.menuDom.find("#js_dmCount"), e.showBtnDom = e.menuDom.find("#js_dmHideBtn"), e.showBtnTextDom = e.menuDom.find("#js_dmHideText"), e.openBtnDom = e.menuDom.find(".dm-only-open"), e.dmSettingCoverDom = f("#js_dmToolCover"), e.menuPostion = {}, e.isReposition = !1, e.winInfo = null, e
                    }
                    return (0, e["default"])(i, [{
                        key: "initSelf",
                        value: function () {
                            this.installTaps(["onContainerClickCenter"]), this.menuInit(), this.initMenuEvent(), this.initSetting()
                        }
                    }, {
                        key: "onContainerClickCenter",
                        value: function (t) {
                            var e, n;
                            this.isReposition || (this.isReposition = !0, e = t.headHeight, n = t.footHeight, this.reMenuPosition(e, n))
                        }
                    }, {
                        key: "menuInit",
                        value: function () {
                            var a = this,
                                o = 0,
                                s = 0,
                                u = 0,
                                c = 0,
                                l = 0,
                                h = 0,
                                t = f(window);
                            this.winInfo = {
                                width: t.width(),
                                height: t.height()
                            }, this.selfSize = f("#js_dmFixBar").width(), this.menuPostion = {
                                right: parseInt(this.menuDom.css("right"), 10),
                                bottom: parseInt(this.menuDom.css("bottom"), 10)
                            }, this.menuDom.on("touchstart", function (t) {
                                t.stopPropagation();
                                var e = t.originalEvent;
                                o = e.touches[0].pageX, s = e.touches[0].pageY, l = a.menuPostion.right, h = a.menuPostion.bottom
                            }), this.menuDom.on("touchmove", function (t) {
                                t.stopPropagation(), t.preventDefault();
                                var e = t.originalEvent;
                                u = e.touches[0].pageX - o, c = e.touches[0].pageY - s;
                                var n = a.winInfo.width,
                                    i = a.winInfo.height,
                                    r = a.selfSize;
                                a.menuPostion.right = l - u, a.menuPostion.bottom = h - c, a.menuPostion.right < 0 && (a.menuPostion.right = 0), a.menuPostion.right > n - r && (a.menuPostion.right = n - r), a.menuPostion.bottom < 0 && (a.menuPostion.bottom = 0), a.menuPostion.bottom > i - r && (a.menuPostion.bottom = i - r), a.adjustPosition()
                            }), this.menuDom.on("touchend", function (t) {
                                o = s = u = c = l = h = null
                            })
                        }
                    }, {
                        key: "reMenuPosition",
                        value: function (t, e) {
                            var n = this.winInfo.height;
                            "number" == typeof t && -1 <= t - 1 && this.menuPostion.bottom > n - this.selfSize - t && (this.menuPostion.bottom = n - this.selfSize - t - 10), "number" == typeof e && -1 <= e - 1 && this.menuPostion.bottom < e && (this.menuPostion.bottom = e + 10), this.adjustPosition()
                        }
                    }, {
                        key: "initMenuEvent",
                        value: function () {
                            var n = this;
                            f("#js_dmOnoffBtn").on("click", function () {
                                n.swichShow()
                            }), this.showBtnDom.on("click", function () {
                                n.swichDm()
                            });
                            var e = f("#js_dmEditInput"),
                                i = f("#js_dmEditCover"),
                                r = this;
                            i.on("click", function (t) {
                                f(this).hide(), r.menuDom.show()
                            }), i.find(".cover-dm-edit").on("click", function (t) {
                                t.stopPropagation()
                            });
                            var a = f("#js_dmEditNum");
                            f("#js_dmSendBtn").on("click", function () {
                                n.menuDom.addClass("dm-menu-hide").hide(), e.val(""), a.text("0/20"), i.show(), n.$emit.call("closeMenuControl")
                            });
                            var o = f("#js_dmEditBtn");
                            o.on("click", function () {
                                var t = e.val().trim().replace(/\n/g, "");
                                t.length ? n.sendDm(t, function (t, e) {
                                    t ? (n.showCountText(), i.hide(), n.showMenuDom(), ACGN.layer.toast("弹幕发送成功!")) : ACGN.layer.toast(e || "弹幕发送失败!")
                                }) : ACGN.layer.toast("发送内容不能为空")
                            });
                            var s = !1;
                            e.on("compositionstart", function () {
                                s = !0
                            }).on("compositionend", function () {
                                s = !1, f(this).trigger("input")
                            }).on("input propertychange", function () {
                                var t;
                                s || (t = this.value.length, a.text(Math.min(t, 20) + "/20"), o[0 < t ? "addClass" : "removeClass"]("activation"), 20 < t && (this.value = this.value.split("").slice(0, 20).join(""), f(this).focus()))
                            }).on("click", function (t) {
                                var e = this;
                                setTimeout(function () {
                                    e.scrollIntoView(!0)
                                }, 300)
                            }), f("#js_dmSettingBtn").on("click", function () {
                                n.menuDom.addClass("dm-menu-hide").hide(), n.dmSettingCoverDom.show(), n.$emit.call("closeMenuControl"), n.sendCnzzEvent("弹幕设置点击")
                            })
                        }
                    }, {
                        key: "showMenuDom",
                        value: function () {
                            this.menuDom.show()
                        }
                    }, {
                        key: "initSetting",
                        value: function () {
                            var n = this;
                            this.dmOpacityPro = new c["default"]("#js_dmOpacityProgress", 100), this.dmOpacityPro.bind(function (t) {
                                f("#js_dmOpacityState").text(t + "%"), n.dmScreenDom.css("opacity", t / 100)
                            }), this.dmOpacityPro.touchEnd(function (t) {
                                t && n.sendCnzzEvent("弹幕亮度滑块拖动")
                            });
                            var t = this.$utils.toolGetNumSplit(this.dmSpeed, 9)[1],
                                i = f("#js_dmSpeedState");
                            i.text(2 * t + "%"), this.dmSpeedPro = new c["default"]("#js_dmSpeedProgress", t), this.dmSpeedPro.bind(function (t) {
                                i.text(2 * t + "%");
                                var e = n.$utils.toolGetPercentSplit(t, 9);
                                n.danmuModule.changeSpeed(e)
                            }), this.dmSpeedPro.touchEnd(function (t) {
                                t && n.sendCnzzEvent("弹幕速度滑块拖动")
                            });
                            var e = this;
                            this.dmSettingCoverDom.on("click", function (t) {
                                f(this).hide(), e.menuDom.show()
                            }), this.dmSettingCoverDom.find(".cover-dm-tool").on("click", function (t) {
                                t.stopPropagation()
                            }), this.dmHeadOnoff = new u["default"]("#js_dmHeadBtn", !0), this.dmHeadOnoff.bind(function (t) {
                                t ? (n.dmScreenDom.removeClass("face-hide"), n.sendCnzzEvent("弹幕头像显示")) : (n.dmScreenDom.addClass("face-hide"), n.sendCnzzEvent("弹幕头像关闭"))
                            }), f("#js_dmToolDefaultBtn").on("click", function () {
                                n.dmOpacityPro.update(100), n.dmOpacityPro.trigger(), n.dmSpeedPro.update(t), n.dmSpeedPro.trigger(), n.sendCnzzEvent("弹幕相关恢复默认")
                            })
                        }
                    }, {
                        key: "adjustPosition",
                        value: function () {
                            this.menuDom.css({
                                right: this.menuPostion.right + "px",
                                bottom: this.menuPostion.bottom + "px"
                            })
                        }
                    }, {
                        key: "swichShow",
                        value: function () {
                            this.isShowDm ? this.menuDom.addClass("dm-menu-hide") : this.menuDom.removeClass("dm-menu-hide"), this.isShowDm = !this.isShowDm, this.sendCnzzEvent("弹幕切换_" + this.isShowDm)
                        }
                    }, {
                        key: "selfDmSwitch",
                        value: function () {
                            this.isShowDm ? (this.showBtnDom.removeClass("eye-close"), this.showBtnTextDom.text("隐藏"), this.openBtnDom.show()) : this.hideDmUi()
                        }
                    }, {
                        key: "hideDmUi",
                        value: function () {
                            this.showBtnDom.addClass("eye-close"), this.showBtnTextDom.text("显示"), this.openBtnDom.hide()
                        }
                    }]), i
                }(t(h("Cbd8"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
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
                u = i(n("a1gu")),
                c = i(n("Nsbk"));

            function l(i) {
                var r = function () {
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
                    var t, e, n = (0, c["default"])(i);
                    return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                }
            }
            var h = function (t) {
                (0, s["default"])(i, t);
                var n = l(i);

                function i(t) {
                    var e;
                    return (0, r["default"])(this, i), (e = n.call(this, t)).name = "cnzz统计", e.cnzzModule = {}, e
                }
                return (0, a["default"])(i, [{
                    key: "apply",
                    value: function (t) {
                        (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["afterChapterImageIndexChange"]), this.initModules()
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
                        var t, e, n, i;
                        window.cnzz && (t = this.states, e = t.currentChapter.chapterId, n = t.currentChapterImageIndex, (i = this.states.chapterImageList.find(function (t) {
                            return t.chapterId === e && t.index === n
                        })).isPushCnzz || (this.cnzzModule(cnzz), _czc.push(["_trackPageview", location.href.replace(location.origin, ""), location.href]), i.isPushCnzz = !0))
                    }
                }]), i
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
                    return u["default"]
                }
            }), Object.defineProperty(e, "ImageLoadLine", {
                enumerable: !0,
                get: function () {
                    return c["default"]
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
                u = i(n("SjK1")),
                c = i(n("K/0x")),
                l = i(n("6cS9")),
                h = i(n("JRrf")),
                f = i(n("IenY")),
                d = i(n("ciVm")),
                p = i(n("X7qu"))
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
                            if ("string" == typeof t) return u(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function r() {};
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

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }
            var c = function () {
                function e(t) {
                    (0, a["default"])(this, e), Array.isArray(t) || (t = []), this._args = t, this.taps = [], this.interceptors = [], this.call = this._call, this.promise = this._promise, this.callAsync = this._callAsync, this._x = undefined
                }
                return (0, o["default"])(e, [{
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
                                var i, r = e.value;
                                !r.register || (i = r.register(t)) !== undefined && (t = i)
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
                    value: function (e) {
                        var n = function n(t) {
                            return Object.assign({}, e, "string" == typeof t ? {
                                name: t
                            } : t)
                        };
                        e = Object.assign({}, e, this._withOptions);
                        var i = this._withOptionsBase || this,
                            t = Object.create(i);
                        return t.tapAsync = function (t, e) {
                            return i.tapAsync(n(t), e)
                        }, t.tap = function (t, e) {
                            return i.tap(n(t), e)
                        }, t.tapPromise = function (t, e) {
                            return i.tapPromise(n(t), e)
                        }, t._withOptions = e, t._withOptionsBase = i, t
                    }
                }, {
                    key: "isUsed",
                    value: function () {
                        return 0 < this.taps.length || 0 < this.interceptors.length
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
                        for (var i = this.taps.length; 0 < i;) {
                            i--;
                            var r = this.taps[i],
                                a = (this.taps[i + 1] = r).stage || 0;
                            if (e) {
                                if (e.has(r.name)) {
                                    e["delete"](r.name);
                                    continue
                                }
                                if (0 < e.size) continue
                            }
                            if (!(n < a)) {
                                i++;
                                break
                            }
                        }
                        this.taps[i] = t
                    }
                }]), e
            }();

            function l(t, e) {
                return function () {
                    return this[t] = this._createCall(e), this[t].apply(this, arguments)
                }
            }
            Object.defineProperties(c.prototype, {
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
            }), t.exports = c
        },
        gql0: function (t, h, f) {
            "use strict";
            (function (r) {
                var t = f("TqRt");
                f("HAE/"), Object.defineProperty(h, "__esModule", {
                    value: !0
                }), h["default"] = void 0, f("a1Th"), f("h7Nl"), f("Btvt"), f("I5cv"), f("2Spj"), f("f3/d");
                var a = t(f("lwsE")),
                    e = t(f("W8MJ")),
                    o = t(f("7W2i")),
                    s = t(f("a1gu")),
                    u = t(f("Nsbk")),
                    n = t(f("XXVv")),
                    c = t(f("3P17"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, u["default"])(i);
                        return e = r ? (t = (0, u["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, s["default"])(this, e)
                    }
                }
                var i = function (t) {
                    (0, o["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "自动阅读模块", e.footMemuDom = r("#js_footMenu"), e.autoBtnDom = r("#js_ftAutoBtn"), e.initSpeedProgress(), e
                    }
                    return (0, e["default"])(i, [{
                        key: "installSelfTaps",
                        value: function () {
                            this.installTaps(["onContainerClickCenter"])
                        }
                    }, {
                        key: "onContainerClickCenter",
                        value: function () {}
                    }, {
                        key: "initEvent",
                        value: function () {
                            var t = this;
                            this.autoBtnDom.on("click", function () {
                                t.cliAutoRead()
                            }), r("#js_speedPrevBtn").on("click", function () {
                                t.changeSpeed()
                            }), r("#js_speedNextBtn").on("click", function () {
                                t.changeSpeed(!0)
                            }), this.isV || this.autoBtnDom.addClass("disabled")
                        }
                    }, {
                        key: "initSpeedProgress",
                        value: function () {
                            var n = this;
                            0 !== r("#js_speedProgress").length && (this.speedPro = new c["default"]("#js_speedProgress", this.speed), this.speedPro.bind(function (t) {
                                var e = parseInt(19 * t / 100 + 1);
                                n.setSpeed(e), n.startAutoRead(e)
                            }))
                        }
                    }, {
                        key: "atferStartAutoRead",
                        value: function () {
                            this.footMemuDom.removeClass("show-page").addClass("show-speed")
                        }
                    }, {
                        key: "atferStopAutoRead",
                        value: function () {
                            this.footMemuDom.removeClass("show-speed").addClass("show-page")
                        }
                    }, {
                        key: "afterChangeSpeed",
                        value: function (t) {
                            this.speedPro.update(parseInt(100 * (t - 1) / 19))
                        }
                    }]), i
                }(n["default"]);
                h["default"] = i
            }).call(this, f("+2Rf"))
        },
        hHhE: function (t, e, n) {
            var i = n("XKFU");
            i(i.S, "Object", {
                create: n("Kuth")
            })
        },
        iWIM: function (i, t, e) {
            var o = e("n3AX");

            function s(t, e, n) {
                return "undefined" != typeof Reflect && Reflect.get ? i.exports = s = Reflect.get : i.exports = s = function s(e, n, i) {
                    var r = o(e, n);
                    if (r) {
                        var a = Object.getOwnPropertyDescriptor(r, n);
                        return a.get ? a.get.call(i) : a.value
                    }
                }, s(t, e, n || t)
            }
            i.exports = s
        },
        ioFf: function (t, e, n) {
            "use strict";
            var i = n("dyZX"),
                o = n("aagx"),
                r = n("nh4g"),
                a = n("XKFU"),
                s = n("KroJ"),
                u = n("Z6vF").KEY,
                c = n("eeVq"),
                l = n("VTer"),
                h = n("fyDq"),
                f = n("ylqs"),
                d = n("K0xU"),
                p = n("N8g3"),
                v = n("OnI7"),
                m = n("1MBn"),
                y = n("EWmC"),
                g = n("y3w9"),
                k = n("0/R4"),
                I = n("S/j/"),
                C = n("aCFj"),
                b = n("apmT"),
                w = n("RjD/"),
                _ = n("Kuth"),
                S = n("e7yV"),
                P = n("EemH"),
                x = n("JiEa"),
                R = n("hswa"),
                D = n("DVgA"),
                M = P.f,
                O = R.f,
                T = S.f,
                E = i.Symbol,
                A = i.JSON,
                j = A && A.stringify,
                N = "prototype",
                L = d("_hidden"),
                H = d("toPrimitive"),
                W = {}.propertyIsEnumerable,
                B = l("symbol-registry"),
                $ = l("symbols"),
                F = l("op-symbols"),
                z = Object[N],
                q = "function" == typeof E && !!x.f,
                G = i.QObject,
                V = !G || !G[N] || !G[N].findChild,
                U = r && c(function () {
                    return 7 != _(O({}, "a", {
                        get: function () {
                            return O(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                }) ? function (t, e, n) {
                    var i = M(z, e);
                    i && delete z[e], O(t, e, n), i && t !== z && O(z, e, i)
                } : O,
                J = function (t) {
                    var e = $[t] = _(E[N]);
                    return e._k = t, e
                },
                K = q && "symbol" == typeof E.iterator ? function (t) {
                    return "symbol" == typeof t
                } : function (t) {
                    return t instanceof E
                },
                Q = function (t, e, n) {
                    return t === z && Q(F, e, n), g(t), e = b(e, !0), g(n), o($, e) ? (n.enumerable ? (o(t, L) && t[L][e] && (t[L][e] = !1), n = _(n, {
                        enumerable: w(0, !1)
                    })) : (o(t, L) || O(t, L, w(1, {})), t[L][e] = !0), U(t, e, n)) : O(t, e, n)
                },
                X = function (t, e) {
                    g(t);
                    for (var n, i = m(e = C(e)), r = 0, a = i.length; r < a;) Q(t, n = i[r++], e[n]);
                    return t
                },
                Y = function (t) {
                    var e = W.call(this, t = b(t, !0));
                    return !(this === z && o($, t) && !o(F, t)) && (!(e || !o(this, t) || !o($, t) || o(this, L) && this[L][t]) || e)
                },
                Z = function (t, e) {
                    if (t = C(t), e = b(e, !0), t !== z || !o($, e) || o(F, e)) {
                        var n = M(t, e);
                        return !n || !o($, e) || o(t, L) && t[L][e] || (n.enumerable = !0), n
                    }
                },
                tt = function (t) {
                    for (var e, n = T(C(t)), i = [], r = 0; n.length > r;) o($, e = n[r++]) || e == L || e == u || i.push(e);
                    return i
                },
                et = function (t) {
                    for (var e, n = t === z, i = T(n ? F : C(t)), r = [], a = 0; i.length > a;) !o($, e = i[a++]) || n && !o(z, e) || r.push($[e]);
                    return r
                };
            q || (s((E = function Symbol() {
                if (this instanceof E) throw TypeError("Symbol is not a constructor!");
                var e = f(0 < arguments.length ? arguments[0] : undefined),
                    n = function (t) {
                        this === z && n.call(F, t), o(this, L) && o(this[L], e) && (this[L][e] = !1), U(this, e, w(1, t))
                    };
                return r && V && U(z, e, {
                    configurable: !0,
                    set: n
                }), J(e)
            })[N], "toString", function () {
                return this._k
            }), P.f = Z, R.f = Q, n("kJMx").f = S.f = tt, n("UqcF").f = Y, x.f = et, r && !n("LQAc") && s(z, "propertyIsEnumerable", Y, !0), p.f = function (t) {
                return J(d(t))
            }), a(a.G + a.W + a.F * !q, {
                Symbol: E
            });
            for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), it = 0; nt.length > it;) d(nt[it++]);
            for (var rt = D(d.store), at = 0; rt.length > at;) v(rt[at++]);
            a(a.S + a.F * !q, "Symbol", {
                "for": function (t) {
                    return o(B, t += "") ? B[t] : B[t] = E(t)
                },
                keyFor: function (t) {
                    if (!K(t)) throw TypeError(t + " is not a symbol!");
                    for (var e in B)
                        if (B[e] === t) return e
                },
                useSetter: function () {
                    V = !0
                },
                useSimple: function () {
                    V = !1
                }
            }), a(a.S + a.F * !q, "Object", {
                create: function (t, e) {
                    return e === undefined ? _(t) : X(_(t), e)
                },
                defineProperty: Q,
                defineProperties: X,
                getOwnPropertyDescriptor: Z,
                getOwnPropertyNames: tt,
                getOwnPropertySymbols: et
            });
            var ot = c(function () {
                x.f(1)
            });
            a(a.S + a.F * ot, "Object", {
                getOwnPropertySymbols: function (t) {
                    return x.f(I(t))
                }
            }), A && a(a.S + a.F * (!q || c(function () {
                var t = E();
                return "[null]" != j([t]) || "{}" != j({
                    a: t
                }) || "{}" != j(Object(t))
            })), "JSON", {
                stringify: function (t) {
                    for (var e, n, i = [t], r = 1; r < arguments.length;) i.push(arguments[r++]);
                    if (n = e = i[1], (k(e) || t !== undefined) && !K(t)) return y(e) || (e = function (t, e) {
                        if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e
                    }), i[1] = e, j.apply(A, i)
                }
            }), E[N][H] || n("Mukb")(E[N], H, E[N].valueOf), h(E, "Symbol"), h(Math, "Math", !0), h(i.JSON, "JSON", !0)
        },
        j9mN: function (t, e, n) {},
        jm62: function (t, e, n) {
            var i = n("XKFU"),
                u = n("mQtv"),
                c = n("aCFj"),
                l = n("EemH"),
                h = n("8a7r");
            i(i.S, "Object", {
                getOwnPropertyDescriptors: function (t) {
                    for (var e, n, i = c(t), r = l.f, a = u(i), o = {}, s = 0; a.length > s;)(n = r(i, e = a[s++])) !== undefined && h(o, e, n);
                    return o
                }
            })
        },
        jnot: function (t, i, o) {
            "use strict";
            (function (l) {
                var t = o("TqRt");
                o("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, o("SRfc"), o("pIFo"), o("rGqo"), o("yt8O"), o("Btvt"), o("RW0V"), o("V+eJ"), o("KKXr");
                var d = t(o("cDf5"));
                o("dRSK");
                var r = t(o("lwsE")),
                    e = t(o("W8MJ"));
                o("PPyY");
                var h = t(o("3Umg")),
                    a = t(o("ht3t")),
                    p = parseInt(l(window).height() / 12),
                    c = 50,
                    f = 100,
                    v = 220,
                    m = 100,
                    y = {
                        wrap: '<div class="barrages-wrap"></div>',
                        bulletStart: '<div id="bullet<$= id $>" class="bullet" data-id="<$= id $>"><div class="bullet-inside">',
                        bulletEnd: "</div></div>"
                    },
                    n = function () {
                        function i(t, e) {
                            var u = this;
                            (0, r["default"])(this, i);
                            var n = l(t);
                            if (!n.length) throw Error("没有找到指定的container");
                            this.container = n, this.container.html(y.wrap), this.wrap = this.container.find(".barrages-wrap"), this.win = l(window), this.body = l("body"), this.options = {
                                height: this.win,
                                speed: 5,
                                max: 10
                            }, "object" === (0, d["default"])(e) && (e.speed && this.changeSpeed(e.speed), e.height && (this.options.height = e.height), e.max && (this.options.max = e.max)), this._destroyed = !1, this.moveType = a["default"].supportCss3("transform") ? "transform" : "position", this.bullets = {}, this.rows = {}, this.cache = [], this.memory = {
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
                            var c = null;
                            this.evtContainerClick = function (t) {
                                var e, n = l(t.target),
                                    i = n.hasClass("bullet") ? n : n.parents(".bullet");
                                i.length && (e = parseInt(i.data("id")), u.trigger("bulletClick", {
                                    id: u.bullets[e].id,
                                    data: l.extend(!0, {}, u.bullets[e].data)
                                }))
                            }, this.evtContainerMove = function (t) {
                                t.stopPropagation();
                                var e, n, i, r, a = l(t.target),
                                    o = null,
                                    s = a.hasClass("bullet") ? a : a.parents(".bullet");
                                s.length && (o = s[0]), o !== c && (c && (e = parseInt(l(c).data("id")), (n = u.bullets[e]) && u.trigger("bulletHoverOut", {
                                    id: n.id,
                                    data: l.extend(!0, {}, n.data)
                                })), o ? (i = parseInt(s.data("id")), (r = u.bullets[i]) && (u.trigger("bulletHoverIn", {
                                    id: r.id,
                                    data: l.extend(!0, {}, r.data)
                                }), c = o)) : c = null)
                            }, this.evtBodyMove = function (t) {
                                var e, n;
                                c && (e = parseInt(l(c).data("id")), (n = u.bullets[e]) && u.trigger("bulletHoverOut", {
                                    id: n.id,
                                    data: l.extend(!0, {}, n.data)
                                }), c = null)
                            }, this.container.on("click", this.evtContainerClick).on("mousemove", this.evtContainerMove), this.body.on("mousemove", this.evtBodyMove)
                        }
                        return (0, e["default"])(i, [{
                            key: "walk",
                            value: function () {
                                var t, e, n = this,
                                    i = this.memory,
                                    r = this.options;
                                i.mainCount++, i.mainCount % parseInt("543211111".charAt(this.options.speed - 1)) == 0 && (this._updataBullets(), this._updateRows(), i.bulletsLength < r.max && "," !== this.memory.emptyRows && (e = (t = this.memory.emptyRows.slice(1, -1).split(","))[parseInt(Math.random() * t.length)], this._insertBullet(e))), this.memory.mainInterval = requestAnimationFrame(function () {
                                    n.walk()
                                })
                            }
                        }, {
                            key: "play",
                            value: function () {
                                var t = this;
                                return !this._destroyed && (!this.memory.mainInterval && void(this.memory.mainInterval = requestAnimationFrame(function () {
                                    t.walk()
                                })))
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
                            value: function (t) {
                                if (this._destroyed) return !1;
                                if (t && t.length) {
                                    for (var e = l.extend(!0, [], t), n = ++this.memory.groupCount, i = 0; i < e.length; i++) {
                                        if ("object" !== (0, d["default"])(e[i])) throw Error("传入了错误的弹幕内容");
                                        if ("string" != typeof e[i].template || "object" !== (0, d["default"])(e[i].data)) throw Error("传入了错误的弹幕内容");
                                        e[i].status = !1, e[i].groupId = n, e[i].id = ++this.memory.cacheCount, this.cache = this.cache.concat([e[i]])
                                    }
                                    return n
                                }
                            }
                        }, {
                            key: "insertBullet",
                            value: function (t, e, n) {
                                if (!this.cache.length) {
                                    var i = ++this.memory.cacheCount,
                                        r = ++this.memory.groupCount;
                                    return t.status = !1, t.id = i, t.groupId = r, this.cache[0] = t, r
                                }
                                if (e > this.cache.length + 1) return !1;
                                if (e < 0) return !1;
                                var a = parseInt(e);
                                if ("object" !== (0, d["default"])(t) || "string" != typeof t.template || "object" !== (0, d["default"])(t.data)) return !1;
                                t.status = !1, t.id = ++this.memory.cacheCount;
                                var o = null,
                                    s = null;
                                0 <= a - 1 && (o = this.cache[a - 1].groupId), a + 1 < this.cache.length && (s = this.cache[a + 1].groupId);
                                var u = null,
                                    c = n || "auto";
                                return null !== u || "before" !== c && "auto" !== c || null !== o && (u = o), null !== u || "after" !== c && "auto" !== c || null !== s && (u = s), null !== u || "new" !== c && "auto" !== c || (u = ++this.memory.groupCount), !!u && (t.groupId = u, this.cache.splice(a, 0, t), u)
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
                                    if (!("number" == typeof t && 0 < t) || isNaN(t)) throw Error("传入了错误的group");
                                    for (var e = 0; e < this.cache.length; e++) this.cache[e].groupId === t && (this.cache.splice(e, 1), e--)
                                } else this.cache = [];
                                var n, i = "," + this.cache.join(",") + ",";
                                for (var r in this.bullets) n = this.bullets[r].cacheId, -1 === i.indexOf("," + n + ",") && (this.bullets[r].action = "move!!")
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
                                1 <= t && t <= 9 && (this.options.speed = parseInt(t))
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
                                "number" == typeof this.options.height ? t = this.options.height : "object" === (0, d["default"])(this.options.height) && (t = parseInt(this.options.height.height() / 2));
                                for (var e = parseInt(t / p), n = Object.keys(this.rows).length, i = this.memory.validRow !== e, r = null, a = null, o = ",", s = 0; s < n; s++) {
                                    var u = !1;
                                    if ((r = this.rows[s]).bullets.length)
                                        for (var c = a = null, l = 0; l < r.bullets.length; l++) c = r.bullets[l], this.bullets[c.id] && "over" !== c.status ? "begin" !== c.status && "start" !== c.status || (u = !0) : (r.bullets.splice(l, 1), l--);
                                    !u && r.use && (o += s + ","), i && (s <= e ? r.use = !0 : (r.use = !1, null === a && (a = s)))
                                }
                                if (e + 1 < n) {
                                    if (null !== a)
                                        for (var h = a; h < n; h++) delete this.rows[h], o.replace("," + h, "")
                                } else
                                    for (var f = n; f < e; f++) this.rows[f] = {
                                        use: !0,
                                        bullets: []
                                    }, o += f + ",";
                                this.memory.validRow = e, this.memory.emptyRows = o
                            }
                        }, {
                            key: "_updataBullets",
                            value: function () {
                                var t, e, n, i, r = this.wrap.width(),
                                    a = Math.max(parseInt("111112345".charAt(this.options.speed - 1)), 1),
                                    o = a / m,
                                    s = null;
                                for (var u in this.bullets) {
                                    "begin" === (s = this.bullets[u]).status && (s.action = "insert"), "insert" === s.action && (this._moveBullet(s.el, r + parseInt(Math.random() * v + f)), this.wrap.append(s.el), s.status = "start", s.action = "move"), "move" !== s.action && "move!!" !== s.action || (e = (t = s.el).width(), n = this._getbulletLeft(t), i = parseFloat(t.css("opacity")), isNaN(n) && (n = r), isNaN(i) && (i = 1), "move!!" === s.action ? n -= 3 * a : n -= a, this._moveBullet(t, n), n < -e && i <= 0 ? s.action = "delete" : n < 0 ? (0 < i && (i = Math.max(i - o, 0)), t.css("opacity", i), s.status = "end") : n < r - e - c ? s.status = "moving" : (i < 1 && (i = Math.min(i + o, 1)), t.css("opacity", i), s.status = "start")), "pause" === s.action && (s.el.css("opacity", 1), s.status = "pausing"), "delete" === s.action && (s.status = "over", this._removeBullet(u)), s.el.attr("class", "bullet bullet-" + s.status)
                                }
                                this.memory.bulletsLength = Object.keys(this.bullets).length
                            }
                        }, {
                            key: "_insertBullet",
                            value: function (t) {
                                if (!this.cache.length) return !1;
                                if (!this.rows[t]) return !1;
                                var e = this._getNextCache(this.memory.activeIndex + 1);
                                if (null === e) return !1;
                                var n = this.memory.bulletCount + 1,
                                    i = this.cache[e],
                                    r = i.id,
                                    a = null;
                                try {
                                    a = h["default"].render(i.template, i.data, {
                                        delimiter: "$"
                                    })
                                } catch (c) {}
                                a = a || (i.template = "数据错误");
                                var o = h["default"].render(y.bulletStart, {
                                        id: n
                                    }, {
                                        delimiter: "$"
                                    }) + a + y.bulletEnd,
                                    s = l(o).css("top", t * p + "px"),
                                    u = {
                                        id: n,
                                        cacheId: r,
                                        data: i.data,
                                        template: i.template,
                                        el: s,
                                        row: t,
                                        action: null,
                                        status: "begin"
                                    };
                                this.bullets[n] = u, this.rows[t].bullets.push(u), this.memory.bulletCount++, this.memory.activeIndex = e, i.status = !0
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
                                if ("transform" !== this.moveType) return parseInt(t.css("left"));
                                var e = t.css("transform"),
                                    n = null;
                                return null === e.match(/matrix3d/) ? (n = e.match(/\-?\d*?(px)*\,\s\-?\d*?(px)*\)$/)) && n.length ? parseInt(n[0].split(",")[0]) : 0 : (n = e.match(/\-?\d*?(px)*\,\s\-?\d*?,\s\-?\d*?,\s\-?\d*?\)$/)) && n.length ? parseInt(n[0].split(",")[0]) : 0
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
                                e <= n && (n = 0);
                                for (var i = null, r = 0; r < e; r++)
                                    if (e <= (i = n + r) && (i = 0), !1 === this.cache[i].status) return i;
                                return null
                            }
                        }]), i
                    }();
                i["default"] = n
            }).call(this, o("+2Rf"))
        },
        kCDH: function (t, e, n) {
            "use strict";
            var i = n("TqRt");
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0, n("HAE/"), n("WLL4"), n("jm62"), n("8+KV"), n("0l/t"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var r = i(n("lSNA")),
                a = i(n("lwsE")),
                o = i(n("W8MJ"));

            function s(e, t) {
                var n, i = Object.keys(e);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), i.push.apply(i, n)), i
            }
            var u = function () {
                function e(t) {
                    (0, a["default"])(this, e), t.states = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(Object(n), !0).forEach(function (t) {
                                (0, r["default"])(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, this.states())
                }
                return (0, o["default"])(e, [{
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
                }]), e
            }();
            e["default"] = u
        },
        kMti: function (t, d, p) {
            "use strict";
            (function (g) {
                var t = p("TqRt");
                Object.defineProperty(d, "__esModule", {
                    value: !0
                }), d["default"] = void 0, p("HAE/"), p("WLL4"), p("jm62"), p("ioFf"), p("rGqo"), p("yt8O"), p("RW0V"), p("a1Th"), p("h7Nl"), p("Btvt"), p("I5cv"), p("Z2Ku"), p("L9s1");
                var s = t(p("RIqP"));
                p("INYr"), p("8+KV"), p("0l/t"), p("dRSK"), p("2Spj");
                var i = t(p("lSNA"));
                p("Tze0");
                var r = t(p("lwsE")),
                    e = t(p("W8MJ")),
                    a = t(p("iWIM")),
                    o = t(p("7W2i")),
                    u = t(p("a1gu")),
                    c = t(p("Nsbk"));

                function l(e, t) {
                    var n, i = Object.keys(e);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), i.push.apply(i, n)), i
                }

                function h(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach(function (t) {
                            (0, i["default"])(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function f(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, o["default"])(i, t);
                    var n = f(i);

                    function i(t) {
                        var e;
                        return (0, r["default"])(this, i), (e = n.call(this, t)).initStates(), e.isIe = e.$utils.isIE(), e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, a["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.hasCopyrightAndShowInfo() && (this.installHistoryInfo(), this.canRun() && (this.states.isVerticalMode = this.isV, this.installSelfTaps(), this.installTaps(["run", "afterChapterApiLoad", "updateImageDistance", "afterImageObserver", "directChapterImageIndex", "directChapterIndex", "unlockCharpterObserver"])))
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
                            var t = g("#tpl_noCopyright");
                            0 === t.length && this.$error("缺少必要的#tpl_noCopyright模板");
                            var e = this.states.comicInfo;
                            if (!e.comicNoCopyright) return !0;
                            var n = t.html().trim();
                            return this.container.html(ejs.render(n, {
                                msg: e.comicNoCopyright,
                                delimiter: "$"
                            })), !(this.states.isForceStop = !0)
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            var e = this;
                            this.container.on("touchstart", function (t) {
                                e.$emit.call("onContainerTouchStart", t)
                            }), this.container.on("touchmove", function (t) {
                                e.$emit.call("onContainerTouchMove", t)
                            }), this.container.on("touchend", function (t) {
                                e.$emit.call("onContainerTouchEnd", t)
                            }), this.container.on("click", function (t) {
                                e.$emit.call("onContainerClick", t)
                            }), this.initSelfEvent()
                        }
                    }, {
                        key: "initContainer",
                        value: function () {
                            this.container.addClass(this.isH ? "h" : "v"), this.container.addClass(this.states.isSwiperReverse ? "hl" : "");
                            var t = this.isV ? this.container : this.boxContainer.parent(),
                                e = Math.floor(t.width()),
                                n = this.states.fillInfo;
                            n.fillWidth = this.isV ? e : e / this.options.swiperImageNum, n.fillHeight = Math.floor(t.height()), this.isH && g(".acgn-reader-chapter__swiper-btns").show()
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
                            this.options = h(h({}, this.$options), {}, {
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
                        value: function (t) {
                            var e, n, i, r, a = this.$utils.getEventTarget(t),
                                o = g(a);
                            o.hasClass("tip-error-btn") && (e = +o.attr("chapter-index"), n = o.attr("chapter-pid"), (i = this.states.chapterImageList.find(function (t) {
                                return t.chapterId === n && t.index === e
                            })) && (i.isInited = !1, i.isCreateDom = !1, (r = o.parent().parent()).html("".concat(i.chapterId, "-").concat(i.index)), r.removeClass("error"), this.$emit.call("runImageLoad")))
                        }
                    }, {
                        key: "getTemplate",
                        value: function () {
                            var t = g("#tpl_chapterImgbox"),
                                e = g("#tpl_chapterImg");
                            return 0 !== t.length && 0 !== e.length || this.$error("阅读器初始化失败，缺少必要的#tpl_chapterImgbox,#tpl_chapterImg模板"), {
                                boxTemplate: t.html().trim(),
                                imgTemplate: e.html().trim()
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
                            var o, s, u = this.installDomAndImageList(t);
                            a && (s = (o = this.states.chapterImageList.filter(function (t) {
                                return t.chapterId === n.chapterId
                            }))[o.length - 1].endDistance, this.repairPrevMove(this.currentScroll.distance + s)), e && this.isV && this.moveTo(50), this.finishLoadChapterApi();
                            var c = u.find('.acgn-reader-chapter__item:not(".no-chapter")');
                            n.isLock ? this.chapterImageObserverQueue[n.chapterId] = c : this.$emit.call("runImageObserver", c), this.readyCheck(t)
                        }
                    }, {
                        key: "unlockCharpterObserver",
                        value: function (t) {
                            var e = t.chapterId,
                                n = t.isLock,
                                i = this.$reader.states.chapterListMap[e];
                            if (i) {
                                var r = i.isLock;
                                if (i.isLock = n) return this.states.chapterImageList.filter(function (t) {
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
                            var e, n, i = t.chapterId,
                                r = t.index,
                                a = t.imgObj,
                                o = this.container.find('[chapter-index="'.concat(r, '"][chapter-pid="').concat(i, '"]')),
                                s = o.eq(0);
                            a ? (this.openImageDom(o.eq(o.length - 1), t), s.removeClass("loading")) : (e = this.states.comicInfo.comicName, n = this.states.chapterListMap[i], s.find(".acgn-reader-chapter__loading-tip").addClass("error").html('\n        <p class="tip-error-msg">\n        《'.concat(e, "》").concat(n.chapterName, " 第").concat(t.index, '页 加载失败，您可以:\n          <br>\n         <span class="tip-error-btn" chapter-pid="').concat(i, '" chapter-index="').concat(r, '">重试</span>\n        </p>')))
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
                            t.html(i), t.css({
                                "background-image": "url(".concat(e.originUrl, ")")
                            }), e.imgObj = null, this.isV && (this.updateDistance(), this.currentScroll.isPrev && this.isIniteQueueComplete && this.repairSingleHeight(n, e))
                        }
                    }, {
                        key: "getPrevChapter",
                        value: function () {
                            var t, e, n;
                            this.isIniteQueueComplete && (n = {
                                sourceChapterId: (t = this.currentScroll.chapter).chapterId,
                                apiChapterId: e = t.prevChapterId
                            }, this.validChapterAndUpdateQueue(e, "getPrevChapter") || (this.loadingChapterApi = !0, this.$emit.call("runChapterApiLoad", n)))
                        }
                    }, {
                        key: "getNextChapter",
                        value: function () {
                            var t, e, n;
                            this.isIniteQueueComplete && (n = {
                                sourceChapterId: (t = this.currentScroll.chapter).chapterId,
                                apiChapterId: e = t.nextChapterId
                            }, this.validChapterAndUpdateQueue(e, "getNextChapter") || (this.loadingChapterApi = !0, this.$emit.call("runChapterApiLoad", n)))
                        }
                    }, {
                        key: "hasMoreChapter",
                        value: function (t) {
                            var e = this.states.currentChapter,
                                n = e.nextChapterId,
                                i = e.prevChapterId;
                            return !(t ? !n : !i)
                        }
                    }, {
                        key: "installDomAndImageList",
                        value: function (t) {
                            for (var e = t.sourceChapterId, n = t.chapter, i = this.options.template, r = i.boxTemplate, a = i.imgTemplate, o = this.states.chapterListMap[e], s = n.chapterId === o.prevChapterId, u = [], c = n.startPage; c <= n.endPage; c++) {
                                var l = this.$reader.entitys.getChapterImageModel(n, c);
                                u.push(l), this.$emit.call("runChapterImageSlot", l), this.fixSwiperNum(u, l, n)
                            }
                            this.updateImageList(u, e, s), this.updateDistance();
                            for (var h = this.getRelationList(u), f = "", d = 0; d < h.length; d++) {
                                var p = h[d],
                                    v = a.format(this.isV ? "auto" : this.fillInfo.fillWidth + "px", p.index, n.chapterId, p.index, this.getSwiperPositionClass(p), this.getWrapBoxWidth() * this.states.scaleRatio);
                                f += this.createSlotsHtml(p, v)
                            }
                            var m = r.format(n.chapterId, n.chapterName, f),
                                y = g(m);
                            return this.installChapterDom(s, y), this.$emit.call("afterChapterDomInstall", t), y
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
                            var i, r = -1 === (o = this.states.chapterImageList.findIndex(function (t) {
                                    return t.chapterId === e
                                })),
                                a = this.currentScroll.chapter,
                                o = r ? 0 : o;
                            o = n || r ? o : o + a.totalPage, (i = this.states.chapterImageList).splice.apply(i, [o, 0].concat((0, s["default"])(t)))
                        }
                    }, {
                        key: "validChapterAndUpdateQueue",
                        value: function (e, t) {
                            return !e || (!!this.chapterApiQueue.find(function (t) {
                                return t.chapterId === e
                            }) || (!!this.states.chapterListMap[e].isInited || (this.chapterApiQueue.push({
                                chapterId: e,
                                fn: t
                            }), !!this.loadingChapterApi)))
                        }
                    }, {
                        key: "updateCurrentChapter",
                        value: function () {
                            var t, e, n, i, r, a, o, s, u, c, l, h, f = this.states,
                                d = f.chapterImageList,
                                p = f.chapterListMap;
                            0 !== d.length && (e = (t = this.currentScroll).chapter, n = t.chapterImageIndex, i = t.isPrev, r = t.distance, a = Math.min(r, d[d.length - 1].endDistance), s = (o = this.options).preloadChapterScope, u = o.imageSwitchDistance, e !== (l = p[(c = d.find(function (t) {
                                return t.endDistance > a + u
                            })).chapterId]) && (this.setCurrentChapter(l), this.$emit.call("afterChapterIndexChange")), n !== (h = c.index) && (this.setCurrentChapterIndex(h), this.$emit.call("afterChapterImageIndexChange")), e.isLock || (!i && l.endPage - h <= s ? this.getNextChapter() : i && h <= s && this.getPrevChapter(), this.showLoadingTipBreak()))
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
                            var t, e, n;
                            this.loadingChapterApi && (t = this.currentScroll.distance, e = this.states.totalDistance, n = this.isV ? this.fillInfo.fillHeight : this.fillInfo.fillWidth, (0 === t || e <= t + n) && ACGN.layer.toast("加载中..."))
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
                            var e, n = this,
                                i = t.chapterId,
                                r = t.isNext,
                                a = this.states.chapterListMap[i];
                            this.loadingChapterApi ? ACGN.layer.toast("请不要频繁操作") : (e = {
                                chapter: a,
                                isNext: r
                            }, a.isInited ? this.fire(e) : this.$emit.call("runChapterApiLoad", {
                                sourceChapterId: r ? a.prevChapterId : a.nextChapterId,
                                apiChapterId: i,
                                callback: function () {
                                    n.fire(e)
                                }
                            }))
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
                            var e = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : 0,
                                n = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : 0,
                                i = this.currentScroll.chapter,
                                r = this.options.directImageDistance,
                                a = this.getChapterImageDistance(i, t, r);
                            this.moveTo(a + e, n)
                        }
                    }, {
                        key: "getChapterImageDistance",
                        value: function (e, n, t) {
                            var i = this.states.chapterImageList,
                                r = i.findIndex(function (t) {
                                    return t.chapterId === e.chapterId && t.index === n
                                }) - 1;
                            return 0 <= r && (t += i[r].endDistance), t
                        }
                    }, {
                        key: "readyCheck",
                        value: function (t) {
                            var e, n;
                            this.isIniteQueueComplete || (e = t.chapter, -1 !== (n = this.initQueue.findIndex(function (t) {
                                return t === e.chapterId
                            })) && this.initQueue.splice(n, 1), this.isIniteQueueComplete && (this.currentScroll.chapter.isLock ? this.finishInitLoading() : this.checkLoading()))
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
                            var t;
                            this.isH && (t = this.currentScroll.chapterImageIndex, this.directChapterImageIndexNum(t)), this.$emit.call("afterEntryInit")
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
                            1 < arguments.length && undefined, 2 < arguments.length && undefined
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
                }(t(p("W/Tl"))["default"]);
                d["default"] = n
            }).call(this, p("+2Rf"))
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
                            if ("string" == typeof t) return u(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(t);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var i = 0,
                            r = function r() {};
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

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i
            }
            var s = function () {
                function e(t) {
                    (0, r["default"])(this, e), this.config = t, this.options = undefined, this._args = undefined
                }
                return (0, a["default"])(e, [{
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
                        this.needContext() ? t += "var _context = {};\n" : t += "var _context;\n", t += "var _x = this._x;\n", 0 < this.options.interceptors.length && (t += "var _taps = this.taps;\n", t += "var _interceptors = this.interceptors;\n");
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
                        for (var n = e.onError, i = e.onResult, r = e.onDone, a = e.rethrowIfPossible, o = "", s = !1, u = 0; u < this.options.interceptors.length; u++) {
                            var c = this.options.interceptors[u];
                            c.tap && (s || (o += "var _tap".concat(t, " = ").concat(this.getTap(t), ";\n"), s = !0), o += "".concat(this.getInterceptor(u), ".tap(").concat(c.context ? "_context, " : "", "_tap").concat(t, ");\n"))
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
                        var a = this,
                            o = t.onError,
                            s = t.onResult,
                            e = t.resultReturns,
                            u = t.onDone,
                            n = t.doneReturns,
                            c = t.rethrowIfPossible;
                        if (0 === this.options.taps.length) return u();
                        for (var l = this.options.taps.findIndex(function (t) {
                                return "sync" !== t.type
                            }), h = e || n || !1, f = "", d = u, p = function p(t) {
                                var e = t;
                                d !== u && "sync" !== a.options.taps[e].type && (f += "function _next".concat(e, "() {\n"), f += d(), f += "}\n", d = function d() {
                                    return "".concat(h ? "return " : "", "_next").concat(e, "();\n")
                                });
                                var n = d,
                                    i = function i(t) {
                                        return t ? "" : u()
                                    },
                                    r = a.callTap(e, {
                                        onError: function (t) {
                                            return o(e, t, n, i)
                                        },
                                        onResult: s && function (t) {
                                            return s(e, t, n, i)
                                        },
                                        onDone: !s && n,
                                        rethrowIfPossible: c && (l < 0 || e < l)
                                    });
                                d = function d() {
                                    return r
                                }
                            }, i = this.options.taps.length - 1; 0 <= i; i--) p(i);
                        return f += d()
                    }
                }, {
                    key: "args",
                    value: function () {
                        var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : {},
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
                }]), e
            }();
            t.exports = s
        },
        qbCE: function (t, i, h) {
            "use strict";
            (function (r) {
                var t = h("TqRt");
                h("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, h("a1Th"), h("h7Nl"), h("Btvt"), h("I5cv"), h("f3/d");
                var a = t(h("lwsE")),
                    e = t(h("W8MJ")),
                    o = t(h("iWIM")),
                    s = t(h("7W2i")),
                    u = t(h("a1gu")),
                    c = t(h("Nsbk"));

                function l(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = l(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).name = "欢迎页", e.state = 0, e.welcomeText = ["点击中间呼出菜单", "加载中，请稍候"], e.timer = null, e.welcomeTextDom = r("#js_welcomeHint"), e.welcomeDom = r("#js_welcomeCover"), e.welcomeProgressDom = r("#js_welcomeLine"), e.welcomeBtnDom = r("#js_welcomeBtn"), e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.installTaps(["run", "afterEntryInit"]), this.initEvent()
                        }
                    }, {
                        key: "run",
                        value: function () {
                            this.start()
                        }
                    }, {
                        key: "afterEntryInit",
                        value: function () {
                            this.to(100)
                        }
                    }, {
                        key: "initEvent",
                        value: function () {
                            this.welcomeBtnDom.on("click", function () {
                                location.href = "/feedback.html"
                            })
                        }
                    }, {
                        key: "start",
                        value: function () {
                            var t = this;
                            this.state = 0, this.to(0), this.welcomeTextDom.text(this.welcomeText[parseInt(Math.random() * this.welcomeText.length, 10)]), this._autoLoad(), setTimeout(function () {
                                t.welcomeDom.show()
                            }, 100)
                        }
                    }, {
                        key: "to",
                        value: function (t) {
                            if (!(t <= 100 && -1 <= t - 1)) return !1;
                            this.state = Math.max(parseInt(t, 10), this.state), this.welcomeProgressDom.css("right", 100 - this.state + "%"), 100 === this.state && this._loadOk()
                        }
                    }, {
                        key: "_stopLoad",
                        value: function () {
                            this.timer && (clearInterval(this.timer), this.timer = null)
                        }
                    }, {
                        key: "_autoLoad",
                        value: function () {
                            var t = this;
                            this._stopLoad(), this.timer = setInterval(function () {
                                t.state < 90 && t.to(t.state + 1)
                            }, 300)
                        }
                    }, {
                        key: "_loadOk",
                        value: function () {
                            var t = this;
                            this._stopLoad(), this.welcomeTextDom.text("加载完成"), setTimeout(function () {
                                t.welcomeDom.hide()
                            }, 600)
                        }
                    }, {
                        key: "error",
                        value: function () {
                            this._stopLoad(), this.welcomeProgressDom.css("right", 0), this.welcomeTextDom.text("与超次元空间通讯失败，未能获得数据"), this.welcomeBtnDom.show()
                        }
                    }]), i
                }(t(h("W/Tl"))["default"]);
                i["default"] = n
            }).call(this, h("+2Rf"))
        },
        rE2o: function (t, e, n) {
            n("OnI7")("asyncIterator")
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
                u = i(n("54q3")),
                c = i(n("Ybj/")),
                l = i(n("dtkt"));
            n("2vKP"), n("Wr5T");
            var h = function () {
                function e(t) {
                    (0, r["default"])(this, e), this.assert(t), this.init(t), this.applyPlugins(), this.initEventProxy()
                }
                return (0, a["default"])(e, [{
                    key: "init",
                    value: function (t) {
                        l["default"].$time("初始化阅读资源耗时"), this.$options = t, new u["default"](this), new o["default"](this), new s["default"](this), new c["default"](this), this.states.container = t.container, this.states.boxContainer = t.container.find(".acgn-reader-chapter__scroll-box"), l["default"].$time("初始化阅读资源耗时", !0)
                    }
                }, {
                    key: "assert",
                    value: function (t) {
                        t.container || l["default"].$error("阅读器初始化失败，未找到根元素:container")
                    }
                }, {
                    key: "applyPlugins",
                    value: function () {
                        var e = this;
                        l["default"].$time("初始化插件耗时");
                        var t = this.$options.plugins;
                        (void 0 === t ? [] : t).forEach(function (t) {
                            e.states.isForceStop || t.apply(e)
                        }), this.hooks.afterPlugins.call(), l["default"].$time("初始化插件耗时", !0)
                    }
                }, {
                    key: "initEventProxy",
                    value: function () {
                        var n = this;
                        this.hooks.$emit.tap("pluginEvent", function (t, e) {
                            n.hooks[t] ? n.hooks[t].call(e) : l["default"].$error("找不到指定hook：".concat(t))
                        })
                    }
                }, {
                    key: "run",
                    value: function () {
                        this.hooks.run.call()
                    }
                }]), e
            }();
            e["default"] = h
        },
        wdZT: function (t, d, p) {
            "use strict";
            (function (r) {
                var t = p("TqRt");
                Object.defineProperty(d, "__esModule", {
                    value: !0
                }), d["default"] = void 0, p("HAE/"), p("WLL4"), p("jm62"), p("8+KV"), p("0l/t"), p("ioFf"), p("rGqo"), p("yt8O"), p("RW0V"), p("a1Th"), p("h7Nl"), p("Btvt"), p("I5cv");
                var i = t(p("lSNA")),
                    a = t(p("lwsE")),
                    e = t(p("W8MJ")),
                    o = t(p("iWIM")),
                    s = t(p("7W2i")),
                    u = t(p("a1gu")),
                    c = t(p("Nsbk"));

                function l(e, t) {
                    var n, i = Object.keys(e);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), i.push.apply(i, n)), i
                }

                function h(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach(function (t) {
                            (0, i["default"])(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function f(i) {
                    var r = function () {
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
                        var t, e, n = (0, c["default"])(i);
                        return e = r ? (t = (0, c["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, u["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, s["default"])(i, t);
                    var n = f(i);

                    function i(t) {
                        var e;
                        return (0, a["default"])(this, i), (e = n.call(this, t)).headTitle = r("#js_headTitle"), e.appCtrlModule = null, e.guideCtrlModule = null, e
                    }
                    return (0, e["default"])(i, [{
                        key: "apply",
                        value: function (t) {
                            (0, o["default"])((0, c["default"])(i.prototype), "apply", this).call(this, t), this.initModules(), this.installTaps(["afterChapterIndexChange"]), this.init(), ACGN.share.init()
                        }
                    }, {
                        key: "initModules",
                        value: function () {
                            var t = this.modules,
                                e = t.appCtrl,
                                n = t.guideCtrl;
                            this.appCtrlModule = e, this.guideCtrlModule = n, this.appCtrlModule && this.guideCtrlModule && this.guideCtrl(this.appCtrlModule, this.guideCtrlModule)
                        }
                    }, {
                        key: "guideCtrl",
                        value: function (t, e) {
                            e.init("hd-banner", h(h({}, this.options), {}, {
                                callback: function () {
                                    t.handle(window.schemeParams)
                                }
                            }))
                        }
                    }, {
                        key: "init",
                        value: function () {
                            var t = this.states.currentChapter.chapterName;
                            this.headTitle.html(t)
                        }
                    }, {
                        key: "afterChapterIndexChange",
                        value: function () {
                            this.init()
                        }
                    }, {
                        key: "$options",
                        get: function () {
                            return {
                                action: "top",
                                target: "#js_headMenu",
                                offsetDiv: "#js_headMenu",
                                title: "优酱，用爱优漫APP",
                                desc: "高清日更无广告，热门漫画全都有！",
                                closeImg: "".concat(siteConf.staticRoot, "images/comm/close.png"),
                                logoImg: "".concat(siteConf.staticRoot, "images/comm/logo.png"),
                                btnColor: "#f25267"
                            }
                        }
                    }]), i
                }(t(p("W/Tl"))["default"]);
                d["default"] = n
            }).call(this, p("+2Rf"))
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
                            var t;
                            document.createEvent ? ((t = document.createEvent("HTMLEvents")).initEvent("resize", !0, !0), window.dispatchEvent(t)) : document.createEventObject && window.fireEvent("onresize")
                        }
                    }, {
                        key: "isIE",
                        value: function () {
                            return 1 <= window.navigator.userAgent.indexOf("MSIE")
                        }
                    }, {
                        key: "isFullIEVersion",
                        value: function () {
                            var t = navigator.userAgent,
                                e = -1 < t.indexOf("compatible") && -1 < t.indexOf("MSIE"),
                                n = -1 < t.indexOf("Edge") && !e,
                                i = -1 < t.indexOf("Trident") && -1 < t.indexOf("rv:11.0");
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
                                n = function n() {
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
                                u = [];
                            return n <= r ? u[0] = "left" : r < n && (u[0] = "right"), i <= a ? u[1] = "top" : a <= i && (u[1] = "bottom"), o < n && n < 2 * o && s < i && i < 3 * s && (u = ["center"]), u
                        }
                    }, {
                        key: "toolGetPercentSplit",
                        value: function (t, e) {
                            for (var n, i = e - 1, r = 100 / i / 2, a = 0; a <= i; a++)
                                if (t <= (n = 100 * a / i) + r && n - r <= t) return a + 1;
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
                            return t.prototype !== undefined && (t.prototype.constructor === t && ("class" == n.slice(0, 5) || (2 <= Object.getOwnPropertyNames(t.prototype).length || !/^function\s+\(|^function\s+anonymous\(/.test(n) && (!(!e || !/^function\s+[A-Z]/.test(n)) || !!/\b\(this\b|\bthis[\.\[]\b/.test(n) && (!(e && !/classCallCheck\(this/.test(n)) || /^function\sdefault_\d+\s*\(/.test(n))))))
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
        "ziw+": function (t, i, p) {
            "use strict";
            (function (r) {
                var t = p("TqRt");
                p("HAE/"), Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i["default"] = void 0, p("LK8F"), p("rE2o"), p("ioFf"), p("XfO3"), p("HEwt"), p("a1Th"), p("h7Nl"), p("I5cv"), p("DNiP"), p("dRSK"), p("rGqo"), p("yt8O"), p("Btvt"), p("RW0V"), p("8+KV");
                var e = t(p("RIqP"));
                p("f3/d");
                var a = t(p("lwsE")),
                    o = t(p("W8MJ")),
                    s = t(p("iWIM")),
                    u = t(p("7W2i")),
                    c = t(p("a1gu")),
                    l = t(p("Nsbk"));

                function f(t, e) {
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
                                r = function r() {};
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

                function d(i) {
                    var r = function () {
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
                        var t, e, n = (0, l["default"])(i);
                        return e = r ? (t = (0, l["default"])(this).constructor, Reflect.construct(n, arguments, t)) : n.apply(this, arguments), (0, c["default"])(this, e)
                    }
                }
                var n = function (t) {
                    (0, u["default"])(i, t);
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
                            r("body").on("click", "#jsPrev", function (t) {
                                t.stopPropagation(), e.cliPre()
                            }), r("body").on("click", "#jsNext", function (t) {
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
                            if (0 !== n) return n < this.options.touchAvailableDistance ? (this.$message("想拖动我，你得够格~~~"), void this.moveTo(this.currentScroll.distance)) : void(e < 0 ? this.cliNext() : 0 < e && this.cliPre())
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
                            if (e <= t + n) return this.moveTo(e - n), void(this.hasMoreChapter(!0) || ACGN.layer.toast("已经是最新一章了！"));
                            this.currentScroll.isPrev = !1, this.moveTo(t + n)
                        }
                    }, {
                        key: "getRelationList",
                        value: function (t) {
                            return this.states.isSwiperReverse ? (0, e["default"])(t).reverse() : t
                        }
                    }, {
                        key: "updateDistance",
                        value: function () {
                            var i = this,
                                r = 0,
                                a = {};
                            this.states.chapterImageList.forEach(function (t) {
                                t.index;
                                var e = t.chapterId,
                                    n = i.getPerDistance(t);
                                r += n, t.endDistance = r, a[e] || (a[e] = {
                                    distance: 0
                                }), a[e].distance += n
                            }), this.states.totalDistance = r, Object.keys(a).forEach(function (t) {
                                i.container.find('[chapter-id="'.concat(t, '"]')).width(a[t].distance)
                            }), this.boxContainer.width(r)
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
                            var e = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : 300,
                                n = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
                            t % this.getSwiperWidth() === this.fillInfo.fillWidth && (t -= this.fillInfo.fillWidth);
                            var i, r = this.states.isSwiperReverse ? t : -t;
                            this.isSupportCssTransform ? (i = {}, this.$utils.addClassPrefix(i, "transition", "transform ".concat(e / 1e3, "s ease-out 0s")), this.$utils.addClassPrefix(i, "transform", "translate3d(".concat(r, "px, 0px, 0px)")), this.boxContainer.css(i)) : this.boxContainer.animate({
                                left: r
                            }, e), n || (this.currentScroll.distance = t, this.updateCurrentChapter(), this.isIe && this.$utils.manualReSize(), this.$emit.call("onContainerScroll"))
                        }
                    }, {
                        key: "fixSwiperNum",
                        value: function (t, e, n) {
                            if (e.isLast) {
                                var i, r, a, o = 0,
                                    s = f(t);
                                try {
                                    for (s.s(); !(i = s.n()).done;) {
                                        var u = i.value;
                                        o++;
                                        var c, l = f(u.slots);
                                        try {
                                            for (l.s(); !(c = l.n()).done;) {
                                                c.value;
                                                o++
                                            }
                                        } catch (h) {
                                            l.e(h)
                                        } finally {
                                            l.f()
                                        }
                                    }
                                } catch (h) {
                                    s.e(h)
                                } finally {
                                    s.f()
                                }
                                o % this.options.swiperImageNum != 0 && (r = this.fillInfo.fillWidth, a = '\n    <div class="acgn-reader-chapter__item no-chapter acgn-chapter__fix" style="width:'.concat(r, 'px">\n      <div class="acgn-chapter__fix-content">\n        <p> ').concat(n.nextChapterName ? "即将进入" : "", " </p>\n        <p> ").concat(n.nextChapterName || "", " </p>\n      </div>\n    </div>"), e.slots.push({
                                    type: this.types.chapterSlot,
                                    width: r,
                                    height: 0,
                                    template: a
                                }))
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
                }(t(p("kMti"))["default"]);
                i["default"] = n
            }).call(this, p("+2Rf"))
        }
    },
    [
        [31, 0, 1]
    ]
]);