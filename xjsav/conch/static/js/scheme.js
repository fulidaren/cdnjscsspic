function Scheme(options) {
  this.timer = null;
  this.options = options;
  this.os = this.getOS();
  var _this = this;
  window.onload = function () {
    // 不在qq内或者不存在referrer或在自家app内
    if (_this.os.qq || !document.referrer || _this.os.inapp) {
      return;
    }
    //_this.openApp();
  }
  // 监听页面隐藏显示
  document.addEventListener('webkitvisibilitychange', function () {
    // 如果页面隐藏，则清楚定时器，说明APP已经唤起
    var tag = document.hidden || document.webkitHidden;
    if (tag) {
      clearTimeout(this.timer);
    }
  });
  window.addEventListener('pagehide', function () {
    clearTimeout(this.timer);
  });
}

Scheme.prototype = {
  getOS: function () {
    var UA = navigator.userAgent;
    var ios = !!UA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 是否为ios设备
    var pc = typeof window.orientation === 'undefined'; // 是否为PC端
    var android = UA.indexOf('Android') > -1 || UA.indexOf('Adr') > -1; // 是否为android端
    var weixin = !!/MicroMessenger/i.test(UA);
    var weibo = !!/WeiBo/i.test(UA);
    var qq = !!/QQ/i.test(UA);
    var product = UA.match(/(kanmanhua|kmh|manhuatai|mht|aiyouman|aym|shenmanhua|smh|aisamanhua|asmh);?/i);
    var inapp = product ? product[0] : null
    // 返回配置
    return {
      ios: ios,
      pc: pc,
      android: android,
      weixin: weixin,
      weibo: weibo,
      qq: qq,
      inapp: inapp
    }
  },
  /**
   * @function createIframe 创建动态漫画iframe
   * @param {String} src iframe路径
   * @param {Object} options 配置参数
   * @example
   * {
   * src: '创建iframe路径', // 必选
   * id: '指定iframe唯一id', // 可选
   * className: '指定iframe的classname', // 可选
   * isShow: false, // 是否显示iframe 可选
   * onload: undefined, // iframe加载完成后的callback 可选
   * append: false, // 是否在body中追加iframe 可选
   * element: undefined, // 将iframe追加到元素默认为body 可选
   * }
   */
  _createIframe: function (src, options = {}) {
    // 做参数转换
    if (typeof src === 'object') {
      options = src
      src = options.src;
    } else {
      options.src = src
    }
    // 参数验证
    if (!src) {
      throw new Error('not find src')
    }

    // 自动处理id
    if (!options.id) {
      options.id = src.replace(/[\.\?\:\=\/\&\#]/g, '');
    }

    // 获取参数id
    var ifm = document.getElementById(options.id)
    if (ifm) {
      ifm.src = src
      return
    }

    // 创建iframe
    ifm = document.createElement('iframe')
    // 默认不显示iframe
    if (!options.isShow) {
      ifm.style.height = 0
    }
    ifm.id = options.id
    ifm.setAttribute('frameborder', 0)
    options.className && ifm.setAttribute('class', options.className)
    ifm.src = src
    ifm.onload = function () {
      typeof options.onload === 'function' && options.onload(ifm)
    }
    if (options.append) {
      return ifm
    }
    var element = options.element || document.body
    element.appendChild(ifm)
  },
  /**
   * @function paramsHanddle 处理参数
   * @param {Object} params
   */
  _paramsHanddle: function (params = {}) {
    if (typeof params !== 'object') {
      throw new Error('params不是一个对象')
    }
    var objKeys = Object.keys(params)
    var arrParams = [],
      len = objKeys.length
    for (var i = 0; i < len; i++) {
      arrParams.push(`${objKeys[i]}=${params[objKeys[i]]}`)
    }
    return arrParams.join('&') || 'page=index'
  },

  openApp: function () {
    var _this = this,
      config = _this.options;
    var isIOS = _this.os.ios;
    var schemaURL = (isIOS ? config.iosSchemeRouter : config.schemeRouter) + '?' + _this._paramsHanddle(config.schemeParams);
    if (isIOS) {
      // window.location.href = schemaURL
    } else {
      _this._createIframe(schemaURL);
    }
  }
}
