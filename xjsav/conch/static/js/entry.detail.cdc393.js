(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        "0G41": function (t, e, a) {},
        19: function (t, e, a) {
            t.exports = a("YKjc")
        },
        "3h++": function (t, s, f) {
            "use strict";
            (function (o) {
                var t = f("TqRt");
                f("HAE/"), Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s["default"] = void 0, f("8+KV"), f("0l/t"), f("xfY5"), f("dRSK"), f("VRzm"), f("rGqo"), f("yt8O"), f("Btvt"), f("XfO3");
                var e = t(f("lwsE")),
                    a = t(f("W8MJ"));
                f("bxIh");
                var l = t(f("YaYm")),
                    c = t(f("zmgo")),
                    r = t(f("rntF")),
                    u = t(f("ht3t")),
                    d = t(f("WJvy")),
                    i = function () {
                        function t() {
                            (0, e["default"])(this, t), this.layerIndex = null, this.userRead = null, this.collectData = null, this.bookListData = null, this.createLayerData = null, this.hasCollect = !1, this.language = siteConf.language, this.$collect = null, this.collectType = null
                        }
                        return (0, a["default"])(t, [{
                            key: "init",
                            value: function () {
                                var n = this,
                                    t = o(".js_collect"),
                                    s = t.data("comicid");
                                n.$collect = t, n.comicId = s, n.lastChapter = t.data("lastchapter"), n.collectType = ACGN.options.recordType.collect, n.userCollectRecod = u["default"].limitStore(n.collectType), n.userCollectRecod ? n.setCollectIconStyle(n.userCollectRecod, s) : c["default"].getUserInfo(function (t, e) {
                                    var a;
                                    ACGN.isLogin() && (t ? l["default"].toast(siteConf.language.netError) : (a = {
                                        comicid: s,
                                        userid: e.Uid,
                                        type: e.type,
                                        openid: e.openid
                                    }, r["default"].getUserRecord({
                                        type: a.type,
                                        openid: a.openid,
                                        myuid: a.userid,
                                        comicid: a.comicid
                                    }).then(function (t) {
                                        u["default"].limitStore(n.collectType, void 0, {
                                            expires: 1
                                        });
                                        var e = t.user_collect;
                                        n.userCollectRecod = e, n.setCollectIconStyle(e, a.comicid)
                                    })))
                                }), t.on("click", function () {
                                    if (!ACGN.isLogin()) return ACGN.$eventHub.trigger("EV_SHOW_LOGIN");
                                    var i = l["default"].loading();
                                    c["default"].getUserInfo(function (t, e) {
                                        var a;
                                        t ? l["default"].toast(siteConf.language.netError) : (a = {
                                            comicid: s,
                                            userid: e.Uid,
                                            type: e.type,
                                            openid: e.openid
                                        }, n.allRequestHanddle(a).then(function (t) {
                                            l["default"].close(i), n.layerIndex = l["default"].custom(d["default"].collectTemplate(), t, {
                                                type: 1,
                                                anim: "up",
                                                style: "position:fixed;bottom:0;left:0;width:100%;"
                                            })
                                        })["catch"](function (t) {
                                            l["default"].close(i)
                                        }))
                                    })
                                }), o("body").on("click", ".btn-cancel", function () {
                                    l["default"].close(n.layerIndex)
                                }), n.addBookToSubScribe(), n.addBookToBookList(), n.createBookEvent()
                            }
                        }, {
                            key: "createBookEvent",
                            value: function () {
                                var t, e = this,
                                    a = !1;
                                o("body").on("click", ".btn-create", function () {
                                    l["default"].closeAll(), t = l["default"].open({
                                        type: 1,
                                        style: "background:transparent",
                                        content: d["default"].createBook()
                                    })
                                }).on("click", ".js_cancel_book", function () {
                                    l["default"].close(t)
                                }).on("click", ".js_submit_book", function () {
                                    e.createBook()
                                }).on("compositionstart", "#js_book_name", function () {
                                    a = !0
                                }).on("compositionend", "#js_book_name", function () {
                                    a = !1, o(this).trigger("input")
                                }).on("input propertychange", "#js_book_name", function () {
                                    var t;
                                    a || (20 < (t = this.value).length && (t = t.slice(0, 20), o(this).val(t)), o("#js_book_count").text("".concat(t.length, "/").concat(20)))
                                })
                            }
                        }, {
                            key: "createBook",
                            value: function () {
                                var a = this,
                                    i = o("#js_book_name").val();
                                if ("" === i) return l["default"].toast(a.language.detail.noName), "";
                                c["default"].getUserInfo(function (t, e) {
                                    t && l["default"].toast("请先登陆再操作~"), r["default"].createBook({
                                        comic_id_list: a.comicId,
                                        type: e.type,
                                        openid: e.openid,
                                        myuid: e.Uid,
                                        book_title: i
                                    }).then(function (t) {
                                        l["default"].closeAll(), t.status, l["default"].toast(t.msg)
                                    })["catch"](function (t) {
                                        l["default"].toast("好像连不上数据了~")
                                    })
                                })
                            }
                        }, {
                            key: "allRequestHanddle",
                            value: function (a) {
                                var i = this,
                                    t = [r["default"].getUserInfoBook(a.userid)];
                                return i.collectData ? t.push(null) : t.push(r["default"].getCollectMsg(a.comicid)), i.userCollectRecod ? t.push(null) : t.push(r["default"].getUserRecord({
                                    type: a.type,
                                    openid: a.openid,
                                    myuid: a.userid,
                                    comicid: a.comicid
                                })), Promise.all(t).then(function (t) {
                                    i.bookListData = t[0];
                                    var e = i.collectData;
                                    return i.collectData || (e = i.collectData = t[1]), i.userCollectRecod || i.setCollectIconStyle(t[2].user_collect, a.comicid), i.createLayerData = {
                                        collectNum: e && e.ranklist.shoucang || 0,
                                        topuser: e && e.topuser,
                                        utils: u["default"],
                                        comic_id: a.comicid,
                                        bookList: i.bookListData.book_list,
                                        bookCollectNum: i.userCollectRecod.length,
                                        hasCollect: i.hasCollect,
                                        hasInBook: i.hasInCollect
                                    }, i.createLayerData
                                })
                            }
                        }, {
                            key: "setCollectIconStyle",
                            value: function (t, e) {
                                this.hasCollect = this.hasInCollect(t, e), this.$collect.find("i").attr("class", "ift-heart".concat(this.hasCollect ? "" : "-line"))
                            }
                        }, {
                            key: "hasInCollect",
                            value: function () {
                                for (var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : [], e = 1 < arguments.length ? arguments[1] : undefined, a = !1, i = 0; i < t.length; i++) {
                                    if (t[i].comic_id === e) {
                                        a = !0;
                                        break
                                    }
                                }
                                return a
                            }
                        }, {
                            key: "addBookToSubScribe",
                            value: function () {
                                var i = this;
                                o("body").on("click", ".js_subscribe", function () {
                                    for (var a = o(this), t = i.userCollectRecod, e = 0; e < t.length; e++)
                                        if (Number(t[e].comic_id) === Number(i.comicId)) return void l["default"].toast(i.language.detail.alreadyExist);
                                    c["default"].getUserInfo(function (t, e) {
                                        t ? location.href = "/login.htm" : r["default"].setUserCollect({
                                            comic_id: i.comicId,
                                            type: e.type,
                                            openid: e.openid,
                                            myuid: e.Uid,
                                            action: "add"
                                        }).then(function (t) {
                                            var e = u["default"].limitStore(i.collectType) || [];
                                            e.unshift(i.lastChapter), i.userCollectRecod.unshift(i.lastChapter), u["default"].limitStore(i.collectType, e, {
                                                expires: 1
                                            }), 0 === t.status ? (l["default"].toast(i.language.detail.putBookInfoSub), a.find("i").attr("class", "ift-heart"), a.find(".num").text(e.length), i.setCollectIconStyle(e, i.comicId)) : l["default"].toast(i.language.netError)
                                        })["catch"](function (t) {
                                            l["default"].toast(i.language.netError)
                                        })
                                    })
                                })
                            }
                        }, {
                            key: "addBookToBookList",
                            value: function () {
                                var s = this;
                                o("body").on("click", ".js_booklist", function () {
                                    var t = o(this),
                                        a = t.data("bookid"),
                                        i = t.data("listname"),
                                        n = s.bookListData.book_list.filter(function (t) {
                                            return t.book_id === a
                                        })[0];
                                    c["default"].getUserInfo(function (t, e) {
                                        t ? l["default"].toast("请登录后再操作~") : (l["default"].closeAll(), r["default"].setBookInfo({
                                            type: e.type,
                                            openid: e.openid,
                                            myuid: e.Uid,
                                            book_id: a,
                                            comic_id_list: s.comicId,
                                            action: "addcomic"
                                        }).then(function (t) {
                                            0 === t.status ? (n.comic_info.filter(function (t) {
                                                return t.comic_id === s.comicId
                                            }).length || s.bookListData.book_list.forEach(function (t) {
                                                t.book_id === a && t.comic_info.unshift(s.lastChapter)
                                            }), l["default"].toast("已添加至: ".concat(i, "~"))) : l["default"].toast(t.msg)
                                        })["catch"](function (t) {
                                            l["default"].toast(s.language.netError)
                                        }))
                                    })
                                })
                            }
                        }]), t
                    }(),
                    n = u["default"].singleton(i)();
                s["default"] = n
            }).call(this, f("+2Rf"))
        },
        "60dg": function (t, s, o) {
            "use strict";
            (function (d) {
                var t = o("TqRt");
                o("HAE/"), Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s["default"] = void 0, o("pIFo"), o("dRSK"), o("Vd3H");
                var e = t(o("lwsE")),
                    a = t(o("W8MJ"));
                o("7JlR");
                var l = t(o("YaYm")),
                    c = t(o("zmgo")),
                    f = t(o("ht3t")),
                    i = function () {
                        function t() {
                            (0, e["default"])(this, t), this.language = siteConf.language, this.comicId = d("[data-comicid]").data("comicid"), this.layerIndex = null, this.reward = {}, this.gift = {}, this.currentGiftId = null, this.data = {
                                title: "作者大大需要您的支持<br>ヾ(●°∇°●)ﾉﾞ",
                                data: [{
                                    icon: "ift-zanshang",
                                    id: "js_zs",
                                    txt: "赞赏"
                                }, {
                                    icon: "ift-liwu",
                                    id: "js_lw",
                                    txt: "礼物"
                                }, {
                                    icon: "ift-ypx",
                                    id: "js_yp",
                                    txt: "月票"
                                }, {
                                    icon: "ift-tjx",
                                    id: "js_tj",
                                    txt: "推荐"
                                }, {
                                    icon: "ift-star-line",
                                    id: "js_pf",
                                    txt: "评分"
                                }, {
                                    icon: "ift-share",
                                    id: "js_fx",
                                    txt: "分享"
                                }]
                            }
                        }
                        return (0, a["default"])(t, [{
                            key: "init",
                            value: function () {
                                var t = this,
                                    e = d(".js_call_layer"),
                                    a = t.data;
                                e.on("click", function () {
                                    l["default"].custom(t.callTpl(), a, {
                                        type: 1,
                                        anim: "up",
                                        style: "background:transparent"
                                    })
                                }), t.bindEvent()
                            }
                        }, {
                            key: "bindEvent",
                            value: function () {
                                var a = this;
                                d("body").on("click", "#js_zs", function () {
                                    ACGN.userInfo && "device" === ACGN.userInfo.type ? location.href = "/login.htm" : a.createReward()
                                }).on("click", "#js_lw", function () {
                                    a.showGiftDialog()
                                }).on("click", "#js_pl", function () {
                                    l["default"].closeAll();
                                    var t = "#";
                                    location.hash && (t = location.hash = ""), location.href = "".concat(location.href).concat(t, "COMMENT")
                                }).on("click", "#js_fx", function () {
                                    l["default"].closeAll(), d(".js_share").click()
                                }).on("click", "#js_yp", function () {
                                    ACGN.userInfo && "device" === ACGN.userInfo.type ? location.href = "/login.htm" : a.createTicket("ticket")
                                }).on("click", "#js_tj", function () {
                                    return ACGN.userInfo && "device" === ACGN.userInfo.type ? ACGN.$eventHub.trigger("EV_SHOW_LOGIN") : void a.createTicket("recommend")
                                }).on("click", ".js_cancel_ticket", function () {
                                    l["default"].closeAll()
                                }).on("click", ".js_submit_ticket", function () {
                                    var t = d(this).data("type"),
                                        e = d("#js_ticket_num").val();
                                    a.submitTicket(t, e)
                                }).on("input", "#js_ticket_num", function () {
                                    a.numInput(d(this))
                                }), a.giftRewardEvent(), d("body").on("click", "#js_btn_close_gift", function () {
                                    l["default"].close(a.layerIndex)
                                })
                            }
                        }, {
                            key: "createReward",
                            value: function () {
                                var n = this;
                                l["default"].closeAll(), n.layerIndex = l["default"].loading(), c["default"].getUserInfo(function (t, e) {
                                    if (t) return l["default"].close(n.layerIndex), void l["default"].toast("没有获取到用户信息， 请登录后再试");
                                    var a = [10, 66, 666, 233, 1111, 9999],
                                        i = e.diamonds;
                                    n.reward.enough = 0 < i && a[0] < i, l["default"].close(n.layerIndex), n.layerIndex = l["default"].custom(n.giftTpl(), {
                                        coins: i,
                                        router: "zanshang",
                                        title: "赞赏",
                                        icon: "icon-jewel2",
                                        type: "reward",
                                        data: a,
                                        comicId: n.comicId,
                                        inputDOM: '<div class="gift-input"><input data-type="reward" class="set-num" id="js_set_num" type="text" maxlength="5" placeholder="自定义金额"></div>'
                                    }, {
                                        type: 1,
                                        anim: "up",
                                        style: "position:fixed;bottom:0;left:0;width:100%;background:transparent;",
                                        success: function () {
                                            n.watchData("reward")
                                        },
                                        end: function () {
                                            n.reward = {}
                                        }
                                    })
                                })
                            }
                        }, {
                            key: "showGiftDialog",
                            value: function () {
                                l["default"].closeAll();
                                this.layerIndex = l["default"].custom('<div class="gift-dialog">\n                <span id="js_btn_close_gift" class="btn-close"><i class="ift-close"></i></span>\n                <div class="hd"></div>\n                <p class="text">抱歉，送礼物请前往APP上操作，给您带来的不便敬请谅解哦~</p>\n                <a href="https://app.321mh.com/app/scheme?pkgname=com.wbxm.icartoon" class="btn-download">立即下载</a>\n                <p class="tips">点击按钮下载APP</p>\n              </div>', {}, {
                                    type: 1,
                                    anim: "up",
                                    style: "background:transparent;"
                                })
                            }
                        }, {
                            key: "createGift",
                            value: function () {
                                var n = this;
                                l["default"].closeAll(), n.layerIndex = l["default"].loading(), c["default"].getUserInfo(function (t, i) {
                                    return t ? (l["default"].close(n.layerIndex), void l["default"].toast("没有获取到用户信息， 请登录后再试")) : void f["default"].ajaxPromise({
                                        url: "/api/getgifts/"
                                    }).then(function (t) {
                                        l["default"].close(n.layerIndex);
                                        var e = i.coins,
                                            a = t.length && t.sort(function (t, e) {
                                                return t.Gprice > e.Gprice
                                            })[0].Gprice || 0;
                                        n.gift.enough = 0 < e && a < e, n.layerIndex = l["default"].custom(n.giftTpl(), {
                                            coins: e,
                                            router: "gift",
                                            title: "礼物",
                                            icon: "icon-lw",
                                            comicId: n.comicId,
                                            type: "gift",
                                            data: t,
                                            util: f["default"],
                                            inputDOM: n.giftInputDOM()
                                        }, {
                                            type: 1,
                                            anim: "up",
                                            style: "position:fixed;bottom:0;left:0;width:100%;background:transparent;",
                                            success: function () {
                                                n.watchData("gift")
                                            },
                                            end: function () {
                                                n.gift = {}
                                            }
                                        })
                                    })["catch"](function (t) {
                                        l["default"].close(n.layerIndex), l["default"].toast(siteConf.language.netError)
                                    })
                                })
                            }
                        }, {
                            key: "giftRewardEvent",
                            value: function () {
                                var u = this;
                                d("body").on("click dbclick", ".js_gift_item", function (t) {
                                    t.stopPropagation();
                                    var e, a, i, n, s = d(this),
                                        o = s.data("giftid"),
                                        l = s.data("price"),
                                        c = 0,
                                        r = d("#js_set_num");
                                    o ? ((a = u.gift[o]) ? (s.hasClass("active") && ++a.num, c = a.num, e = c * l, u.gift[o].num = c, u.gift[o].totalPrice = e, u.gift.enough = ACGN.userInfo.coins >= e) : (e = (c = 1) * l, u.gift[o] = {
                                        num: c,
                                        price: l,
                                        totalPrice: e
                                    }, f["default"].watch(u.gift[o], "num", function (t) {
                                        t = t || 1, s.find(".js_num").text(t), u.setSubNumStyle(t), u.gift.enough = ACGN.userInfo.coins >= t * e
                                    })), u.currentGiftId = o, r.val(c), u.setSubNumStyle(c)) : (i = s.data("reward-index"), (n = u.reward[i]) ? (e = n.totalPrice, u.reward.enough = ACGN.userInfo.diamonds >= e) : (e = (c = 1) * l, u.reward[i] = {
                                        num: c,
                                        price: l,
                                        totalPrice: e
                                    }, f["default"].watch(u.reward[i], "num", function (t) {
                                        u.reward.enough = ACGN.userInfo.diamonds >= e
                                    })), r.val(e)), s.addClass("active").siblings().removeClass("active")
                                }).on("click", ".js_submit_gift", function () {
                                    c["default"].getUserInfo(function (t, e) {
                                        var a, i;
                                        t ? l["default"].toast(siteConf.language.netError) : (a = d("[data-gift-type]").data("gift-type"), i = parseInt(d("#js_set_num").val(), 10) || 0, "gift" === a ? u.submitGift(i, e) : u.submitReward(i, e))
                                    })
                                }).on("input", "#js_set_num", function () {
                                    var t = d(this),
                                        e = u.numInput(t);
                                    if ("gift" === t.data("type")) {
                                        if (!u.currentGiftId) return void l["default"].toast(u.language.detail.noGift);
                                        u.gift[u.currentGiftId].num = e
                                    }
                                }).on("click", ".js_sub_num", function () {
                                    var t, e, a;
                                    u.selectGiftTips() && (t = d(this), e = d("#js_set_num"), 1 < (a = parseInt(e.val(), 10)) ? (t.hasClass("disabled") && t.removeClass("disabled"), a--) : (l["default"].toast("礼物数量不能少于1个"), t.addClass("disabled"), a = 1), e.val(a), u.gift[u.currentGiftId].num = a)
                                }).on("click", ".js_add_num", function () {
                                    var t, e, a;
                                    u.selectGiftTips() && (t = d("#js_set_num"), e = d(this), a = parseInt(t.val(), 10) || 0, 99 < ++a ? (a = 99, e.addClass("disabled"), l["default"].toast("礼物数量不能大于99个")) : e.hasClass("disabled") && e.removeClass("disabled"), t.val(a), u.gift[u.currentGiftId].num = a)
                                })
                            }
                        }, {
                            key: "numInput",
                            value: function (t, e) {
                                var a = (a = t.val()).replace(/[^\d]/g, "");
                                return t.val(a), a
                            }
                        }, {
                            key: "watchData",
                            value: function (t) {
                                var e = this[t],
                                    a = d(".js_submit_gift");
                                a.text(e.enough ? "确定" : "去充值"), f["default"].watch(e, "enough", function (t) {
                                    a.text(t ? "确定" : "去充值")
                                })
                            }
                        }, {
                            key: "setSubNumStyle",
                            value: function (t) {
                                var e = d(".js_sub_num");
                                t < 2 ? e.addClass("disabled") : e.removeClass("disabled")
                            }
                        }, {
                            key: "selectGiftTips",
                            value: function () {
                                var t = d(".gift-list").find("li").hasClass("active");
                                return t || l["default"].toast(this.language.detail.noGift), t
                            }
                        }, {
                            key: "createTicket",
                            value: function (i) {
                                var n = this;
                                l["default"].closeAll();
                                var s = l["default"].loading();
                                c["default"].getUserInfo(function (t, e) {
                                    var a;
                                    l["default"].close(s), t ? l["default"].toast(LOGINTXT) : (a = "ticket" === i ? "Cticket" : i, l["default"].custom(n.createTicketTpl(), {
                                        num: e[a] || 0,
                                        type_name: n.language[i],
                                        type: i
                                    }, {
                                        type: 1,
                                        style: "background:transparent"
                                    }))
                                })
                            }
                        }, {
                            key: "submitGift",
                            value: function (t, e) {
                                var a, i, n = this;
                                n.gift.enough ? (a = n.language, (i = n.currentGiftId) ? t * n.gift[i].price > e.coins ? l["default"].toast(a.noCoins) : t <= 0 ? l["default"].toast(a.detail.errorNumber) : (f["default"].ajaxPromise({
                                    url: "/api/givegift/",
                                    type: "post",
                                    isResponse: !0,
                                    data: {
                                        type: e.type,
                                        openid: e.openid,
                                        comicid: n.comicId,
                                        giftid: i,
                                        count: t
                                    }
                                }).then(function (t) {
                                    0 === t.status ? (l["default"].toast(a.detail.sentSuccess), c["default"].refreshUser()) : l["default"].toast(t.msg)
                                })["catch"](function (t) {
                                    l["default"].toast(a.netError)
                                }), n.currentGiftId = null, n.gift = null, l["default"].closeAll()) : l["default"].toast(a.detail.noGift)) : location.href = "/uc/pay.html"
                            }
                        }, {
                            key: "submitReward",
                            value: function (t, e) {
                                var a, i = this;
                                i.reward.enough ? (a = i.language, t > e.diamonds ? l["default"].toast(i.language.noDiamond) : t < 10 || 99999 < t ? l["default"].toast(i.language.detail.diamondErr) : (f["default"].ajaxPromise({
                                    url: "/api/giveappreciate/",
                                    data: {
                                        gold: t,
                                        comicId: i.comicId,
                                        openid: e.openid,
                                        type: e.type,
                                        myuid: e.Uid
                                    },
                                    type: "post",
                                    isResponse: !0
                                }).then(function (t) {
                                    0 === t.status ? (l["default"].toast(a.detail.sentSuccess), c["default"].refreshUser()) : l["default"].toast(t.msg)
                                })["catch"](function (t) {
                                    l["default"].toast(a.netError)
                                }), l["default"].closeAll())) : location.href = "/uc/pay.html"
                            }
                        }, {
                            key: "submitTicket",
                            value: function (n, s) {
                                var o = this;
                                c["default"].getUserInfo(function (t, e) {
                                    if (t) l["default"].toast(siteConf.language.netError);
                                    else {
                                        var a = {
                                                type: e.type,
                                                openid: e.openid,
                                                myuid: e.Uid,
                                                comicid: o.comicId
                                            },
                                            i = "/api/";
                                        if (s = parseInt(s, 10), "ticket" === n) {
                                            if (e.Cticket < s) return void l["default"].toast(o.language.noYuePiao);
                                            i += "addyuepiao/", a.yuepiao = s
                                        } else {
                                            if (e.recommend < s) return void l["default"].toast(o.language.noRecommend);
                                            i += "addtuijian/", a.tuijian = s
                                        }
                                        f["default"].ajax({
                                            url: i,
                                            data: a,
                                            type: "post",
                                            isResponse: !0
                                        }, function (t, e) {
                                            t ? l["default"].toast(o.language.detail.sentFailed) : (0 === e.status && l["default"].toast("(*^∇^*)收下主人打赏的".concat(o.language[n], "啦~")), c["default"].refreshUser())
                                        }), l["default"].closeAll()
                                    }
                                })
                            }
                        }, {
                            key: "giftTpl",
                            value: function () {
                                return '<div class="gift-box">\n      <div class="hd">\n        <div class="title-box">\n          <div class="icon"><i class="<$=icon$>"></i></div>\n          <h2 class="title"><$=title$>\x3c!--<i class="ift-right"></i>--\x3e</h2>\n        </div>\n      </div>\n      <div class="bd">\n        <$\n        var len = data.length;\n        if (len > 0) {\n        $>\n        <ul class="gift-list">\n          <$\n            for(var i=0; i<len; i++) {\n            var item = data[i];\n            if(type !== \'gift\') {\n          $>\n          <li class="item js_gift_item" data-reward-index="<$=i$>" data-price="<$=item$>">\n            <div class="thumb">\n            <i class="icon-jewel"></i>\n            </div>\n            <div class="price-box">\n              <span class="price"><$=item$></span>\n            </div>\n          </li>\n          <$ } else {\n            var giftImage = (item.images || siteConf.pathRules.gift_cover.format(util.getPathById(item.Gid))) + (siteConf.image_size_suffix.head_cover || \'\');\n          $>\n          <li class="item js_gift_item" data-giftid="<$=item.Gid$>" data-price="<$=item.Gprice$>">\n            <div class="thumb">\n              <img alt="<$=item.Gname$>" src="<$=siteConf.staticRoot$>images/comm/space.gif" data-src="<$=giftImage$>">\n            </div>\n            <h4 class="title"><$=item.Gname$></h4>\n            <div class="price-box">\n              <i class="icon-jb16"></i>\n              <span class="price"><$=item.Gprice$></price>\n            </div>\n            <span class="num js_num">1</span>\n          </li>\n          <$}}$>\n        </ul>\n        <$} else { $>\n        <p class="no-info">抱歉，暂未获得数据！</p>\n        <$}$>\n      </div>\n      <div class="ft">\n        <div class="user-coins">\n          <i class="icon-<$=type !== \'gift\' ? \'jewel\': \'jb64\'$>"></i>\n          <span class="coins"><$= coins $></span>\n        </div>\n        <$- inputDOM $>\n        <span class="btn-submit js_submit_gift" data-gift-type="<$=type$>">确定</span>\n      </div>\n    </div>'
                            }
                        }, {
                            key: "giftInputDOM",
                            value: function () {
                                return '<div class="gift-input">\n      <span class="sub-num js_sub_num disabled">-</span>\n      <input class="set-num" data-type="gift" id="js_set_num" type="text" maxlength="2" value="1">\n      <span class="add-num js_add_num">+</span>\n    </div>'
                            }
                        }, {
                            key: "callTpl",
                            value: function () {
                                return '<div class="call-layer">\n      <div class="hd"><$- title $></div>\n      <div class="bd">\n        <ul class="call-list">\n          <$\n          for(var i=0; i< data.length; i++) {\n            var item = data[i];\n          $>\n          <li class="item" id="<$= item.id $>"><i class="<$= item.icon $> color<$= i+1 $>"></i><span class="txt"><$=item.txt$></span></li>\n          <$ } $>\n        </ul>\n      </div>\n    </div>'
                            }
                        }, {
                            key: "createTicketTpl",
                            value: function () {
                                return '<i class="modify-cat"></i>\n    <div class="layer-form ticket-box">\n      <div class="hd">\n        <h2 class="title">共有<$=num$>张<$=type_name$></h2>\n      </div>\n      <div class="bd">\n        <input class="input" type="text" id="js_ticket_num" placeholder="输入<$=type_name$>数量">\n      </div>\n      <div class="ft">\n        <span class="btn btn-gray is-radius is-line js_cancel_ticket">取消</span>\n        <span class="btn btn-gray is-radius is-line js_submit_ticket" data-type="<$=type$>">确定</span>\n      </div>\n    </div>'
                            }
                        }]), t
                    }(),
                    n = f["default"].singleton(i)();
                s["default"] = n
            }).call(this, o("+2Rf"))
        },
        "7JlR": function (t, e, a) {},
        Taxo: function (t, e, a) {},
        VeD3: function (t, e, a) {},
        WJvy: function (t, e, a) {
            "use strict";
            a("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0;
            e["default"] = {
                collectTemplate: function () {
                    return '<div class="collect-layer">\n        <div class="hd" id="js_collect_header">\n          <h2 class="title">收藏到</h2>\n          <div class="collect-user">\n            <ul class="collect-user-list">\n              <$ var userLength=topuser.length>3?3:topuser.length;\n              for(var i=0;i<userLength;i++){\n              $>\n                <li class="item">\n                  <img class="thumb" src="<$=siteConf.staticRoot$>images/comm/space.gif" data-src="<$= utils.getHeadCover(siteConf, topuser[i].Uid) $>" alt="用户<$=topuser[i].Uid$>">\n                </li>\n              <$}$>\n            </ul>\n            <span class="collect-num">等<$=utils.numberToUnitStr(collectNum)$>人已收藏</span>\n          </div>\n        </div>\n        <div class="bd">\n          <ul class="collect-list">\n            <li class="item js_subscribe">\n              <div class="left">\n                <i class="ift-heart<$=hasCollect?\'\':\'-line\'$>"></i>\n                <span class="title">我的订阅</span>\n              </div>\n              <div class="right">\n                <span class="num"><$=bookCollectNum$></span>\n                \x3c!--<i class="ift-right"></i>--\x3e\n              </div>\n            </li>\n            <$\n            for(var i=0;i<bookList.length;i++){\n              var item = bookList[i];\n              var hasIn = hasInBook(item.comic_info, comic_id);\n            $>\n            <li class="item js_booklist" data-listname="<$=item.title$>" data-bookid="<$=item.book_id$>">\n              <div class="left">\n                <i class="ift-book<$=hasIn?\' primary\': \'\'$>"></i>\n                <span class="title"><$=item.title$></span>\n              </div>\n              <div class="right">\n                <span class="num"><$=item.comic_num$></span>\n                \x3c!--<i class="ift-right"></i>--\x3e\n              </div>\n            </li>\n            <$}$>\n          </ul>\n        </div>\n        <div class="ft">\n          <span class="btn btn-cancel">取消</span>\n          <span class="btn btn-create">创建书单</span>\n        </div>\n      </div>'
                },
                createBook: function () {
                    return '<i class="modify-cat"></i>\n    <div class="layer-form create-book">\n      <div class="hd">\n        <h2 class="title">创建书单</h2>\n      </div>\n      <div class="bd">\n        <div class="input-underline">\n          <input class="input" type="text" id="js_book_name" placeholder="给我起个名字~">\n          <span class="input-count" id="js_book_count">0/20</span>\n        </div>\n      </div>\n      <div class="ft">\n        <span class="btn btn-gray is-radius is-line btn-lx js_cancel_book">取消</span>\n        <span class="btn btn-gray is-radius is-line js_submit_book">确定</span>\n      </div>\n    </div>'
                }
            }
        },
        YKjc: function (t, e, a) {
            "use strict";
            (function (c) {
                var t = a("TqRt");
                a("a1Th"), a("h7Nl"), a("Btvt"), a("I5cv"), a("eM6i"), a("KKXr");
                var i = t(a("lSNA"));
                a("f3/d"), a("8+KV"), a("Vd3H"), a("0l/t"), a("dRSK"), a("xfY5"), a("SRfc");
                var n = t(a("lwsE")),
                    s = t(a("W8MJ")),
                    o = t(a("7W2i")),
                    l = t(a("a1gu")),
                    r = t(a("Nsbk"));
                a("0G41"), a("Taxo");
                var u = t(a("PRRQ")),
                    e = t(a("ixR2")),
                    d = t(a("VyCv")),
                    f = t(a("60dg")),
                    p = t(a("3h++")),
                    h = t(a("BeMS")),
                    m = t(a("do27")),
                    g = t(a("T7Xx")),
                    v = t(a("8nAb")),
                    y = t(a("CFsG"));

                function _(i) {
                    var n = function () {
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
                        var t, e, a = (0, r["default"])(i);
                        return e = n ? (t = (0, r["default"])(this).constructor, Reflect.construct(a, arguments, t)) : a.apply(this, arguments), (0, l["default"])(this, e)
                    }
                }
                new(function (t) {
                    (0, o["default"])(a, t);
                    var e = _(a);

                    function a() {
                        var t;
                        return (0, n["default"])(this, a), (t = e.call(this)).comicId = c("#js_comic_id").data("comicid"), t.readHistoryChapter = 0, t.chapterInfo = null, t.language = siteConf.language, t.comicRecord = new u["default"], t.init(), t
                    }
                    return (0, s["default"])(a, [{
                        key: "init",
                        value: function () {
                            var a = this;
                            a.$chapterList = c("#js_chapter_list li"), a.$chapterPages = c("#js_chapter_pages"), a.$chapterRank = c("#js_chapter_rank");
                            var t = !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                            y["default"].init("hd-banner", {
                                action: "top",
                                target: "#js_top_nav",
                                offsetDiv: "#js_top_nav",
                                title: "打开看漫画APP",
                                desc: "阅读《".concat(c("#js_comic_id").text(), "》更方便哦～"),
                                closeImg: "".concat(siteConf.staticRoot, "images/comm/close.png"),
                                logoImg: "".concat(siteConf.staticRoot, "images/comm/").concat(t ? "tj_" : "", "logo.png"),
                                callback: function () {
                                    v["default"].handle({
                                        page: "dir",
                                        comic_id: (location.pathname || "").match(/^\/(\d+)/)[1] || ""
                                    })
                                }
                            }), this.noticeHanddle(this.comicId), a.comicRecord.getReadHistory({
                                comic_id: Number(a.comicId)
                            }, function (t, e) {
                                t ? a.chapterInfo = {} : (a.chapterInfo = e || {}, a.initReadInfo(), p["default"].init(a.util.limitStore(a.options.recordType.collect)), a.initBuyChapter())
                            }), a.initWrapperHandlerListener(), a.toggleDesc(), a.roleAndAuth(), a.selectChapter(), a.chapterLikeHanddle(), a.bindEvents(), a.initHashScorll(), a.initTags(), a.sortChapter(), c.each(c(".swiper-container"), function () {
                                var t = c(this);
                                1 < t.find(".swiper-slide").length && new d["default"](this, {
                                    loop: !t.hasClass("no-loop"),
                                    autoplay: !t.hasClass("not-auto-play") && {
                                        delay: 3e3,
                                        disableOnInteraction: !1
                                    },
                                    freeMode: !!t.hasClass("slider-free-mode"),
                                    direction: t.hasClass("swiper-container-vertical") ? "vertical" : "horizontal",
                                    touchMoveStopPropagation: !0,
                                    slidesPerView: t.hasClass("slides-view-auto") ? "auto" : 1,
                                    pagination: {
                                        el: ".js_slide_bar",
                                        bulletElement: "li"
                                    }
                                })
                            })
                        }
                    }, {
                        key: "initHashScorll",
                        value: function () {
                            var s = c("#js_top_nav").outerHeight(),
                                a = c("#js_comic_main"),
                                i = c("#js_hash_menu"),
                                o = !1;
                            c("body").on("click", 'a[href^="#"]', function () {
                                c(this);
                                var t = c(this.hash),
                                    e = this.hash;
                                return t && (o = !0, a.animate({
                                    scrollTop: a.scrollTop() + t.offset().top - s
                                }, function () {
                                    i.find('a[href^="'.concat(e, '"]')).parent().addClass("active").siblings().removeClass("active"), setTimeout(function () {
                                        o = !1
                                    }, 200)
                                })), !1
                            });
                            var t = c(location.hash);
                            t.length && a.animate({
                                scrollTop: a.scrollTop() + t.offset().top - s
                            }, {
                                queue: !1,
                                duration: 1e3
                            });
                            var l = [];
                            c("#js_hash_menu").find('a[href^="#"]').each(function (t, e) {
                                l.push(c(e.hash))
                            }), a.on("scroll", function (t) {
                                var e, a, i, n;
                                o || (1 < (a = (e = l.filter(function (t) {
                                    if (t.offset().top - s < 0) return !0
                                })).length) && (e = e.sort(function (t, e) {
                                    return e.offset().top - t.offset().top
                                })), a && (i = e[0], (n = c('a[href^="#'.concat(i.attr("id"), '"]')).parent()).hasClass("active") || n.addClass("active").siblings().removeClass("active")))
                            })
                        }
                    }, {
                        key: "initTags",
                        value: function () {
                            var a, i = this,
                                t = c(".js_tags_more");
                            t.length && (a = "", t.on("click", function () {
                                var t, e = c(this);
                                a || (t = e.data("tags"), a = '<i class="modify-cat"></i><ul class="tags-more">', t.forEach(function (t) {
                                    a += '<li class="item"><a href="/sort/'.concat(t[siteConf.classIdType], '.html">').concat(t.name, "</a></li>")
                                }), a += "</ul>"), i.layer.custom(a, null, {
                                    type: 1,
                                    style: "background:transparent"
                                })
                            }))
                        }
                    }, {
                        key: "initReadInfo",
                        value: function () {
                            var s = this,
                                o = s.chapterInfo,
                                l = o.chapter_id || 0;
                            (s.readHistoryChapter = l) && s.$chapterList.each(function (t, e) {
                                var a = c(e),
                                    i = a.data("index");
                                if (a.data("chapterid") === l) {
                                    s.$chapterPages.find(".item").each(function () {
                                        var t = c(this),
                                            e = t.data("index"),
                                            a = s._getDisPage(e);
                                        a.min <= i && i <= a.max && (t.trigger("click"), s.$chapterRank.hasClass("asc") && s.$chapterRank.trigger("click"))
                                    });
                                    var n = c("#js_read_chapter");
                                    if (n.attr("href", "/".concat(s.comicId, "/").concat(o[siteConf.chapterIdType], ".html")).find(".read-chapter").text(o.chapter_name), n.find(".txt").text("继续阅读"), a.addClass("active").find(".ift-eye-open2").length) return;
                                    a.find(".chapter-name").append('<i class="ift-eye-open2"></i>'), a.find(".js_badge").remove()
                                }
                            })
                        }
                    }, {
                        key: "initWrapperHandlerListener",
                        value: function () {
                            var i = c("#js_change_bg"),
                                n = c("#detail").outerHeight(),
                                s = n / 4,
                                o = c(".js_top_title");
                            c("#js_comic_main").on("scroll", function (t) {
                                var e = c(this).scrollTop(),
                                    a = (e < s ? 0 : e - s) / n;
                                i.css("opacity", 1 < a ? 1 : a), o.css({
                                    visibility: .75 < a ? "visible" : "hidden"
                                })
                            })
                        }
                    }, {
                        key: "toggleDesc",
                        value: function () {
                            var e = c("#js_toggle_desc"),
                                a = c("#js_desc_content");
                            e.on("click", function (t) {
                                e.hasClass("ift-down") ? (e.removeClass("ift-down").addClass("ift-top"), a.height("auto")) : (e.removeClass("ift-top").addClass("ift-down"), a.attr("style", ""))
                            })
                        }
                    }, {
                        key: "roleAndAuth",
                        value: function () {
                            c.each(c(".swiper-container-role"), function () {
                                var t;
                                3 < c(this).find(".swiper-slide").length && new d["default"](this, (t = {
                                    slidesPerView: 3
                                }, (0, i["default"])(t, "slidesPerView", "auto"), (0, i["default"])(t, "freeMode", !0), (0, i["default"])(t, "resistanceRatio", 0), t))
                            })
                        }
                    }, {
                        key: "sortChapter",
                        value: function () {
                            var e = this;
                            e.$chapterRank.on("click", function () {
                                var t = c(this),
                                    n = t.hasClass("asc");
                                c("#js_chapter_list li").removeClass("hide"), n ? t.removeClass("asc").addClass("desc") : t.removeClass("desc").addClass("asc"), e.$chapterList.sort(function (t, e) {
                                    var a = c(t).data("index"),
                                        i = c(e).data("index");
                                    return n ? i - a : a - i
                                }), e.$chapterList.detach().appendTo(c("#js_chapter_list"))
                            })
                        }
                    }, {
                        key: "selectChapter",
                        value: function () {
                            var t = c("#js_select_chapter"),
                                e = this.$chapterPages;
                            t.on("click", function (t) {
                                t.stopPropagation(), e.is(":hidden") ? e.show() : e.hide()
                            }), e.on("click", ".item", function () {
                                c(this);
                                e.hide()
                            }), c("body").on("click", function () {
                                e.hide()
                            })
                        }
                    }, {
                        key: "_getDisPage",
                        value: function (t) {
                            return t = t.split("-"), {
                                min: parseInt(t[0], 10) || 0,
                                max: parseInt(t[1], 10) || 0
                            }
                        }
                    }, {
                        key: "_showPagesList",
                        value: function (a) {
                            a = this._getDisPage(a), this.$chapterList.each(function () {
                                var t = c(this),
                                    e = t.data("index");
                                a.min <= e && e <= a.max ? t.removeClass("hide") : t.addClass("hide")
                            })
                        }
                    }, {
                        key: "chapterLikeHanddle",
                        value: function () {
                            var s = this;
                            c("body").on("click", ".js_chapter_like", function () {
                                var i = c(this),
                                    n = i.data("chapterid");
                                i.find(".ift-support").length || s.user.getUserInfo(function (t, e) {
                                    if (t) s.layer.toast("请登录后再试~");
                                    else {
                                        if (!ACGN.isLogin()) return ACGN.$eventHub.trigger("EV_SHOW_LOGIN");
                                        var a = e.auth_data.authcode;
                                        s.ajax({
                                            url: "/api/addchapterlike",
                                            data: {
                                                userauth: a,
                                                comic_id: s.comicId,
                                                chapter_id: n
                                            }
                                        }, function (t, e) {
                                            t || (i.find(".num").text(e.num), i.find("i").attr("class", "ift-support"), s.layer.toast("点赞成功"))
                                        })
                                    }
                                })
                            })
                        }
                    }, {
                        key: "initBuyChapter",
                        value: function () {
                            var a = this,
                                i = this;
                            0 < c("[data-allprice]").data("allprice") && i.user.getUserInfo(function (t, e) {
                                t ? i.layer.toast(i.language.netError) : a.isLogin() ? i.ajax({
                                    url: "/api/getPurChasedChapters",
                                    cache: !1,
                                    data: {
                                        comic_id: i.comicId,
                                        openid: e.openid,
                                        type: e.type
                                    }
                                }, function (t, e) {
                                    t ? i.layer.toast(i.language.netError) : a.showChapterList(e)
                                }) : a.showChapterList()
                            })
                        }
                    }, {
                        key: "showChapterList",
                        value: function () {
                            var t = 0 < arguments.length && arguments[0] !== undefined ? arguments[0] : [],
                                e = new g["default"]({
                                    comicId: this.comicId
                                });
                            e.enabled && (t = t.concat(e.getRecordList()));
                            for (var a = 0; a < t.length; a++) {
                                var i = t[a],
                                    n = this.$chapterList.parent().find("li[data-chapterid=" + i + "] .js_lock");
                                n.hasClass("ift-lock") && n.removeClass("ift-lock").addClass("ift-unlock")
                            }
                        }
                    }, {
                        key: "bindEvents",
                        value: function () {
                            f["default"].init(), m["default"].init(), h["default"].init()
                        }
                    }, {
                        key: "comments",
                        value: function () {
                            var t = c("#COMMENT"),
                                i = 0;
                            window.COMMENT_CONFIG = {
                                title: t.data("title"),
                                appId: siteConf.product_id,
                                ssid: t.data("ssid"),
                                ssidType: 0,
                                currentPage: 1,
                                commentType: 0,
                                hotCommentCount: 10,
                                url: "",
                                starId: "",
                                satelliteId: "",
                                getUserHanddle: function (t) {
                                    var e, a = ACGN.userInfo;
                                    a && "device" !== a.type ? t(null, a) : ((e = ACGN.util.cookieParse("user")) && "device" !== e.type ? ACGN.user.getUserInfo(e, t) : 0 < i && (location.href = "/login.htm"), i++, t("没有获取用户"))
                                },
                                theme: ["#fc6976", "#fc6976", "#999", "#fff", "#999", "#eee", "#999", "#999"],
                                sort: 1,
                                commentPosition: 1,
                                maxCharacter: 500,
                                style: {
                                    header: "border:none",
                                    showTitle: !1
                                }
                            }, ACGN.util.loadjs("//static.321mh.com/comment/comments.min.js?t=" + Date.now(), {
                                async: !0
                            })
                        }
                    }]), a
                }(e["default"]))
            }).call(this, a("+2Rf"))
        },
        bxIh: function (t, e, a) {},
        do27: function (t, r, u) {
            "use strict";
            (function (n) {
                var t = u("TqRt");
                u("HAE/"), Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r["default"] = void 0, u("dRSK");
                var e = t(u("lwsE")),
                    a = t(u("W8MJ"));
                u("VeD3");
                var s = t(u("YaYm")),
                    o = t(u("ht3t")),
                    l = t(u("zmgo")),
                    i = function () {
                        function t() {
                            (0, e["default"])(this, t), this.scorenum = 5, this.comicId = null, this.layerIndex = null
                        }
                        return (0, a["default"])(t, [{
                            key: "init",
                            value: function (t) {
                                var e = this,
                                    a = t || "#js_pf",
                                    i = e.comicId = n("[data-comicid]").data("comicid");
                                n("body").on("click", a, function () {
                                    return ACGN.isLogin() ? (s["default"].closeAll(), e.layerIndex = s["default"].loading(), void e.requestScore(i).then(function (t) {
                                        s["default"].close(e.layerIndex), e.layerIndex = s["default"].custom(e.template(), t, {
                                            type: 1,
                                            style: "background:transparent",
                                            shade: "background-color:rgba(0, 0, 0, 0.2);",
                                            success: function () {
                                                e.setProgress(t.starList)
                                            }
                                        })
                                    })) : ACGN.$eventHub.trigger("EV_SHOW_LOGIN")
                                }).on("click", ".js_cancel_score", function () {
                                    s["default"].close(e.layerIndex)
                                }), e.selectStart(), e.submitScore()
                            }
                        }, {
                            key: "requestScore",
                            value: function (e) {
                                return o["default"].ajaxPromise({
                                    url: "/api/getrankmsg/",
                                    data: {
                                        comic_id: e
                                    },
                                    isResponse: !0
                                }).then(function (t) {
                                    return {
                                        starList: t.data.ranklist,
                                        topuser: t.data.topuser,
                                        ratingLevel: ["差劲", "无聊", "一般", "好看", "超酷"],
                                        util: o["default"],
                                        comicId: e
                                    }
                                })
                            }
                        }, {
                            key: "setProgress",
                            value: function (t) {
                                for (var e = n(".js_percent_5").parent().width() - 60, a = 5; 0 < a; a--) {
                                    var i = Math.ceil(e * (t["pingfen_".concat(a)] / t.pingfen_all));
                                    n(".js_percent_".concat(a)).css("width", i)
                                }
                            }
                        }, {
                            key: "selectStart",
                            value: function () {
                                var a = this;
                                n("body").on("click", ".js_select_star .item", function () {
                                    var t = n(".js_select_star"),
                                        e = n(this).index();
                                    t.find("i").attr("class", "ift-star"), t.find("i:gt(".concat(e, ")")).attr("class", "ift-star-line"), a.scorenum = e + 1, t = null
                                })
                            }
                        }, {
                            key: "submitScore",
                            value: function () {
                                var i = this;
                                n("body").on("click", ".js_submit_score", function (t) {
                                    var a = i.scorenum;
                                    l["default"].getUserInfo(function (t, e) {
                                        t ? s["default"].toast("请登录") : o["default"].ajax({
                                            type: "post",
                                            url: "/api/addpingfen",
                                            data: {
                                                openid: e.openid,
                                                type: e.type,
                                                myuid: e.Uid,
                                                pingfen: a,
                                                comicid: i.comicId
                                            }
                                        }, function (t, e) {
                                            return t ? s["default"].toast(siteConf.language.netError) : void(1 !== e.status ? s["default"].toast(siteConf.language.detail.addPinfen) : s["default"].toast(e.msg))
                                        })
                                    }), s["default"].closeAll()
                                })
                            }
                        }, {
                            key: "template",
                            value: function () {
                                return '<i class="modify-cat"></i>\n    <div class="layer-form score-box">\n      <div class="hd">\n        <h2 class="title">评分</h2>\n        <ul class="score-user">\n          <$\n          var userLength=topuser.length>3?3:topuser.length\n          for(var i=0;i<userLength;i++){\n          $>\n          <li class="item">\n            <img class="thumb" src="<$=siteConf.staticRoot$>images/comm/space.gif" data-src="<$= util.getHeadCover(siteConf, topuser[i].Uid) $>" alt="好评">\n          </li>\n          <$ } $>\n        </ul>\n        <p class="score-desc">等<$=util.numberToUnitStr(starList[ "pingfen_all"])$>人参与评分<i class="ift-right"></i></p>\n      </div>\n      <div class="bd">\n        <dl class="score-list">\n          <$\n          for(var i=5;i>0;i--) {\n          var pingfen="pingfen_" +i\n          $>\n          <dt class="score-level">\n            <$=ratingLevel[i-1]$>\n          </dt>\n          <dd>\n            <span class="score-percent js_percent_<$=i$>"></span>\n            <span class="score-num js_score_num"><$=util.numberToUnitStr(starList[pingfen])$>人</span>\n          </dd>\n          <$}$>\n        </dl>\n        <ul class="stars js_select_star">\n          <$ for(var i=0; i<5; i++) { $>\n            <li class="item">\n              <i class="ift-star"></i>\n            </li>\n          <$}$>\n        </ul>\n      </div>\n      <div class="ft">\n        <span class="btn btn-primary btn-lg is-radius js_cancel_score">取消</span>\n        <span class="btn btn-primary btn-lg is-radius js_submit_score">确定</span>\n      </div>\n    </div>'
                            }
                        }]), t
                    }(),
                    c = o["default"].singleton(i)();
                r["default"] = c
            }).call(this, u("+2Rf"))
        },
        rntF: function (t, e, a) {
            "use strict";
            var i = a("TqRt");
            a("HAE/"), Object.defineProperty(e, "__esModule", {
                value: !0
            }), e["default"] = void 0;
            var n = i(a("ht3t")),
                s = {
                    getCollectMsg: function (t) {
                        return n["default"].ajaxPromise({
                            url: "/api/getcollectmsg",
                            data: {
                                comic_id: t
                            }
                        })
                    },
                    getUserInfoBook: function (t) {
                        return n["default"].ajaxPromise({
                            url: "/api/getuserinfo_book/",
                            cache: !1,
                            data: {
                                refresh: !0,
                                user_id: t
                            }
                        })
                    },
                    getUserRecord: function (t) {
                        return n["default"].ajaxPromise({
                            url: "/api/getuserrecord",
                            data: t
                        })
                    },
                    setUserCollect: function (t) {
                        return n["default"].ajaxPromise({
                            type: "post",
                            url: "/api/setusercollect",
                            data: t,
                            isResponse: !0
                        })
                    },
                    setBookInfo: function (t) {
                        return n["default"].ajaxPromise({
                            url: "/api/setbookinfo/",
                            data: t,
                            isResponse: !0
                        })
                    },
                    createBook: function (t) {
                        return n["default"].ajaxPromise({
                            method: "post",
                            url: "/api/book_create/",
                            data: t,
                            isResponse: !0
                        })
                    }
                };
            e["default"] = s
        }
    },
    [
        [19, 0, 1]
    ]
]);