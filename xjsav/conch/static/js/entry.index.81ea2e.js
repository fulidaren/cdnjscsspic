(window.webpackJsonp = window.webpackJsonp || []).push([
    [23], {
        21: function (e, t, n) {
            e.exports = n("j4qn")
        },
        "7h0T": function (e, t, n) {
            var a = n("XKFU");
            a(a.S, "Number", {
                isNaN: function (e) {
                    return e != e
                }
            })
        },
        RMK3: function (e, t, n) {
            "use strict";
            n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("DNiP"), n("V+eJ"), n("Vd3H"), n("LK8F"), n("7h0T"), n("xfY5"), n("pIFo");
            var a = [" diw", " siw", " biw"],
                i = [" dow", " sow", " bow"];
            var o = {
                imageScale: function (e) {
                    switch (e) {
                        case "2:1":
                        case "16:8":
                            return " r16x8";
                        case "16:7":
                            return " r16x7";
                        case "16:9":
                            return " r16x9";
                        case "4:3":
                            return " r16x12";
                        case "1:1":
                            return " r16x16";
                        case "16:3":
                            return " r16x3";
                        case "3:4":
                        default:
                            return e.replace(/(\d+):(\d+)/, function (e, t, n) {
                                return " r".concat(t, "x").concat(n)
                            })
                    }
                },
                getClass: function (e, t) {
                    var n = e[t % e.length];
                    return n ? " " + n : ""
                },
                padding: function (e) {
                    return e = Number(e), e = Number.isNaN(e) ? 0 : e, a[e]
                },
                margin: function (e) {
                    return e = Number(e), e = Number.isNaN(e) ? 0 : e, i[e]
                },
                orderby: function (e, t) {
                    if (Array.isArray(e)) {
                        var n = "";
                        switch (Number(t)) {
                            case 0:
                                return void
                                function (e) {
                                    for (var t = e.length - 1; 0 < t; t--) {
                                        var n = Math.floor(Math.random() * (t + 1)),
                                            a = e[t];
                                        e[t] = e[n], e[n] = a
                                    }
                                }(e);
                            case 2:
                                n = "update_time";
                                break;
                            case 3:
                                n = "total_view_num";
                                break;
                            case 4:
                                n = "pingfen";
                                break;
                            case 1:
                            default:
                                return void(n = "ordernum")
                        }
                        e.sort((a = n, i = !0, function (e, t) {
                            return i ? ~~(+e[a] < +t[a]) : ~~(+e[a] > +t[a])
                        }))
                    }
                    var a, i
                },
                DEFAULT: {
                    display_type: 2,
                    isautoslide: 0,
                    isshowtitle: 1,
                    horizonratio: "3:4",
                    interwidth: 1,
                    outerwidth: 1,
                    order_type: 1,
                    isshowchange: 1,
                    isshowdetail: 3
                },
                assignOptions: function (e) {
                    var t = 1 < arguments.length && arguments[1] !== undefined ? arguments[1] : {}; - 1 < [10, 19].indexOf(t.display_type) ? t.outerwidth = 0 : 0 === t.outerwidth && 0 !== t.interwidth ? t.outerwidth = 1 : 1 === t.isautoslide ? (t.outerwidth = 0, t.interwidth = 0) : t.outerwidth = 0;
                    var n = {};
                    for (var a in e) n[a] = e[a];
                    for (var i in t) "isshowchange" === i && (t[i] = 0), n[i] = t[i];
                    return n
                },
                appendMoreStyleFunc: function (e) {
                    if (e.config.isshowmore && e.book_id) {
                        var t = e.config.show_more_url || ["/book/", e.bookcomic_imgstyle, "/", e.book_id, "/"].join("");
                        return '<a class="mult-more" href="'.concat(t, '" title="').concat(e.title.addEnd("漫画"), '">更多</a>')
                    }
                    return ""
                },
                appendChangeStyleFunc: function (e) {
                    return e.config.isshowchange && e.book_id ? '<div class="mult-change" key="'.concat(e.book_id, '" horizonratio="').concat(e.config.horizonratio, '"><i class="icon-change"></i></div>') : ""
                },
                bookStyleFuncMap: {
                    isshowchange: "appendChangeStyleFunc",
                    isshowmore: "appendMoreStyleFunc"
                },
                appendStyleFuncHTML: function (a) {
                    var i = this,
                        e = Object.keys(i.bookStyleFuncMap).reduce(function (e, t) {
                            var n;
                            return a.config[t] && (n = i.bookStyleFuncMap[t], e.push(i[n](a))), e
                        }, ['<div class="mult-style-func">']);
                    return e.push("</div>"), e.join("")
                }
            };
            e.exports = o
        },
        XO8Y: function (e, t, n) {},
        j4qn: function (e, t, m) {
            "use strict";
            (function (b) {
                var e = m("TqRt");
                m("a1Th"), m("h7Nl"), m("I5cv"), m("eM6i"), m("dRSK");
                var v = e(m("o0o1"));
                m("VRzm"), m("Btvt");
                var s = e(m("284h"));
                m("SRfc"), m("ls82");
                var r = e(m("yXPU"));
                m("91GP");
                var l = e(m("lwsE")),
                    c = e(m("W8MJ")),
                    u = e(m("7W2i")),
                    o = e(m("a1gu")),
                    d = e(m("Nsbk"));
                m("XO8Y");
                var t = e(m("ixR2")),
                    p = e(m("RMK3")),
                    h = e(m("VyCv")),
                    f = e(m("8nAb")),
                    g = e(m("CFsG"));

                function w(a) {
                    var i = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function () {
                        var e, t, n = (0, d["default"])(a);
                        return t = i ? (e = (0, d["default"])(this).constructor, Reflect.construct(n, arguments, e)) : n.apply(this, arguments), (0, o["default"])(this, t)
                    }
                }
                new(function (e) {
                    (0, u["default"])(i, e);
                    var t, n, a = w(i);

                    function i() {
                        var e;
                        (0, l["default"])(this, i), e = a.call(this, {
                            ejs: {
                                delimiter: "%"
                            }
                        });
                        var t = {
                            staticRoot: siteConf.staticRoot,
                            siteConf: siteConf,
                            tool: p["default"]
                        };
                        return e.LOCALS = Object.assign(t, {
                            utils: e.util
                        }), e.currentPage = 2, e.pagesize = 20, e.isLoading = !1, e.isLastPage = b("[data-pagesize]").data("pagesize") < e.pagesize, e.layerIndex = null, e.modeCache = {}, e.sex = e.util.cookie("sex") || "boy", e.bookType = siteConf.bookType[e.sex], e.allSwiper = [], e.$scorllBody = b("#js_body"), e.$warpMainBox = b("#js_main_box"), e.$warpContent = b("#js_content"), e.loadingHtml = '<div class="loading js_loading_box">\n      <div class="js_loading"><i class="load-pic"></i></div>\n      <p class="nomore js_nomore">'.concat(siteConf.language.highness).concat(siteConf.language.nomore, "</p>\n    </div>"), e.$warpMainBox.append(e.loadingHtml), e.$loadingBox = b(".js_loading_box"), e.$loading = b(".js_loading"), e.$nomore = b(".js_nomore"), e.noticeHanddle(), e.init(), e
                    }
                    return (0, c["default"])(i, [{
                        key: "init",
                        value: (n = (0, r["default"])(v["default"].mark(function o() {
                            var t, n, a;
                            return v["default"].wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = this, n = window.navigator.userAgent, a = !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), g["default"].init("hd-banner", {
                                            action: "push",
                                            target: "#js_content",
                                            offsetDiv: ".btn-search",
                                            title: "打开看漫画APP",
                                            desc: "阅读体验更好哦～",
                                            closeImg: "".concat(siteConf.staticRoot, "images/comm/close.png"),
                                            logoImg: "".concat(siteConf.staticRoot, "images/comm/").concat(a ? "tj_" : "", "logo.png"),
                                            callback: function () {
                                                f["default"].handle()
                                            }
                                        }), t.initScrollHandler(), 
                                        // b(".btn-search").on("click", function () {
                                        //     t.util.lazyImport(Promise.resolve().then(function () {
                                        //         return (0, s["default"])(m("hGq7"))
                                        //     }), {
                                        //         webpackChunkName: "search-center",
                                        //         instance: !0
                                        //     }).then(function (e) {
                                        //         e.show()
                                        //     })
                                        //     window.location.href="{:mac_url('art/search')}"
                                        // }), 
                                        t.initSexHanddle(), t.autoCarousel();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, o, this)
                        })), function () {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "initSpecialSlide",
                        value: function () {
                            var t = {
                                    stretch: 15,
                                    depth: 120,
                                    modifier: 1,
                                    slideShadows: !1,
                                    rotate: -50
                                },
                                n = this;
                            b.each(b(".swiper-spacial-3d"), function () {
                                var e = new h["default"](this, {
                                    observer: !0,
                                    observeParents: !0,
                                    effect: "coverflow",
                                    slidesPerView: "auto",
                                    centeredSlides: !0,
                                    loop: !0,
                                    replaceState: !0,
                                    coverflowEffect: t
                                });
                                n.allSwiper.push(e)
                            });
                            var e = new h["default"](".swiper-3d-75", {
                                slidesPerView: 4,
                                spaceBetween: 6,
                                loop: !0,
                                loopedSlides: 5,
                                watchSlidesProgress: !0,
                                watchSlidesVisibility: !0
                            });
                            n.allSwiper.push(e);
                            var a = new h["default"](".swiper-container-76", {
                                autoplay: !b(".swiper-container-76").hasClass("not-auto-play") && {
                                    delay: 3e3,
                                    disableOnInteraction: !1
                                },
                                loop: !0,
                                pagination: {
                                    el: b(".js_slide_bar_76"),
                                    type: "bullets",
                                    bulletElement: "li"
                                }
                            });
                            n.allSwiper.push(a);
                            var i = new h["default"](".swiper-container-75", {
                                autoplay: !b(".swiper-container-75").hasClass("not-auto-play") && {
                                    delay: 3e3,
                                    disableOnInteraction: !1
                                },
                                spaceBetween: 6,
                                loop: !0,
                                loopedSlides: 5,
                                touchMoveStopPropagation: !0,
                                thumbs: {
                                    swiper: e
                                }
                            });
                            n.allSwiper.push(i)
                        }
                    }, {
                        key: "initScrollHandler",
                        value: function () {
                            var n = this,
                                a = n.$scorllBody.height();
                            n.$scorllBody.on("scroll", function (e) {
                                var t = b(this).scrollTop();
                                return n.$warpContent.height() - a - 50 < t && n.getChannelData(0), !0
                            })
                        }
                    }, {
                        key: "initSexHanddle",
                        value: function () {
                            var e = this,
                                t = e.sex,
                                n = b("#js_toggle_sex");
                            n.find(".icon-".concat("boy" === t ? "girl" : "boy", "_small")).addClass("noselect").siblings().removeClass("noselect"), b("body").on("click", "#js_toggle_sex", function () {
                                t = "boy" === t ? "girl" : "boy", e.util.cookie("sex", t), e.sex = t, e.bookType = siteConf.bookType[t], e.currentPage = 1, e.isLastPage = !1, e.isLoading = !1, n.find(".icon-".concat("boy" === t ? "girl" : "boy", "_small")).addClass("noselect").siblings().removeClass("noselect"), e.getChannelData(3)
                            })
                        }
                    }, {
                        key: "getChannelData",
                        value: (t = (0, r["default"])(v["default"].mark(function y() {
                            var t, n, a, i, o, s, r, l, c, u, d, p, h, f, g, w = arguments;
                            return v["default"].wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = 0 < w.length && w[0] !== undefined ? w[0] : 0, (n = this).isLoading || n.isLastPage) return b(".js_noinfo").length ? n.loadingStauts(!1, !1) : n.loadingStauts(!1, 3 !== t), e.abrupt("return");
                                        e.next = 5;
                                        break;
                                    case 5:
                                        return a = n.$warpContent, 3 === t && (n.layerIndex = n.layer.loading()), n.isLoading = n.loadingStauts(!0, 3 !== t), e.next = 10, n.ajaxPromise({
                                            url: "/api/getBookByType",
                                            data: Object.assign({
                                                pagesize: n.pagesize,
                                                page: n.currentPage,
                                                pytype: "tuijian",
                                                booktype: n.bookType
                                            }, n.util.parseQuery())
                                        });
                                    case 10:
                                        if (i = e.sent, o = [], r = i.book || [], (l = r.length) || 1 !== n.currentPage) {
                                            e.next = 22;
                                            break
                                        }
                                        return n.isLastPage = !0, a.html(n.noInfo()), 3 === t && this.layer.closeAll(n.layerIndex), n.isLoading = n.loadingStauts(!1, 3 !== t), e.abrupt("return");
                                    case 22:
                                        l < n.pagesize ? n.isLastPage = !0 : n.currentPage++;
                                    case 23:
                                        c = 0;
                                    case 24:
                                        if (!(c < l)) {
                                            e.next = 33;
                                            break
                                        }
                                        if (u = r[c], (d = u.config.display_type) in this.modeCache) return e.abrupt("continue", 30);
                                        e.next = 29;
                                        break;
                                    case 29:
                                        o.push(d);
                                    case 30:
                                        c++, e.next = 24;
                                        break;
                                    case 33:
                                        if (o.length) return e.next = 36, b.get("/tpl/comic/?tpl=" + o.join(",") + "&t=" + Date.now());
                                        e.next = 38;
                                        break;
                                    case 36:
                                        s = e.sent, Object.assign(this.modeCache, s);
                                    case 38:
                                        for (p = "", h = 0; h < l; h++) f = r[h], g = f.config.display_type, p += ejs.render(this.modeCache[g], Object.assign({}, {
                                            book: f
                                        }, this.LOCALS, {
                                            delimiter: "%"
                                        }));
                                        3 === t ? (a.html(p), this.layer.closeAll(n.layerIndex)) : a.append(p), n.isLoading = n.loadingStauts(!1, 3 !== t), n.autoCarousel();
                                    case 43:
                                    case "end":
                                        return e.stop()
                                }
                            }, y, this)
                        })), function () {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "loadingStauts",
                        value: function (e, t) {
                            return this.$loading[e ? "show" : "hide"](), this.$nomore[e ? "hide" : "show"](), this.$loadingBox[t ? "show" : "hide"](), e
                        }
                    }, {
                        key: "autoCarousel",
                        value: function () {
                            for (var n = this, e = 0; e < n.allSwiper.length; e++) this.allSwiper[e].destroy(!0, !0);
                            n.allSwiper = [];
                            var t = n.$scorllBody.find(".swiper-container");
                            b.each(t, function () {
                                var e, t = b(this);
                                1 < t.find(".swiper-slide").length && (e = new h["default"](this, {
                                    loop: !t.hasClass("no-loop"),
                                    autoplay: !t.hasClass("not-auto-play") && {
                                        delay: 3e3,
                                        disableOnInteraction: !1
                                    },
                                    spaceBetween: t.hasClass("swipe-space-between") ? 10 : 0,
                                    centeredSlides: !!t.hasClass("centered-sliders"),
                                    freeMode: !!t.hasClass("slider-free-mode"),
                                    direction: t.hasClass("swiper-container-vertical") ? "vertical" : "horizontal",
                                    touchMoveStopPropagation: !0,
                                    slidesOffsetBefore: t.hasClass("slides-offset-before") ? 1.6 * t.find(".swiper-slide").width() : 0,
                                    slidesPerView: t.hasClass("slides-view-auto") ? "auto" : 1,
                                    pagination: {
                                        el: b(this).find(".js_slide_bar"),
                                        type: "bullets",
                                        bulletElement: "li"
                                    }
                                }), n.allSwiper.push(e))
                            }), this.initSpecialSlide()
                        }
                    }]), i
                }(t["default"]))
            }).call(this, m("+2Rf"))
        }
    },
    [
        [21, 0, 1]
    ]
]);