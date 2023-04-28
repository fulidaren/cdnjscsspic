/*
 *  webui popover plugin  - v1.0.5
 *  A lightWeight popover plugin with jquery ,enchance the  popover plugin of bootstrap with some awesome new features. It works well with bootstrap ,but bootstrap is not necessary!
 *  https://github.com/sandywalker/webui-popover
 *
 *  Made by Sandy Duan
 *  Under MIT License
 */
!function(a,b,c){function d(b,c){this.$element=a(b),this.options=a.extend({},h,c),this._defaults=h,this._name=e,this.init()}var e="webuiPopover",f="webui-popover",g="webui.popover",h={placement:"auto",width:"auto",height:"auto",trigger:"click",style:"",delay:300,cache:!0,multi:!1,arrow:!0,title:"",content:"",closeable:!1,padding:!0,url:"",type:"html",template:'<div class="webui-popover"><div class="arrow"></div><div class="webui-popover-inner"><a href="#" class="close">x</a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="glyphicon glyphicon-refresh"></i> <p></p></div></div></div>'};d.prototype={init:function(){"click"===this.options.trigger?this.$element.off("click").on("click",a.proxy(this.toggle,this)):this.$element.off("mouseenter mouseleave").on("mouseenter",a.proxy(this.mouseenterHandler,this)).on("mouseleave",a.proxy(this.mouseleaveHandler,this)),this._poped=!1,this._inited=!0},destroy:function(){this.hide(),this.$element.data("plugin_"+e,null),this.$element.off(),this.$target&&this.$target.remove()},hide:function(b){b&&b.preventDefault();var c=a.Event("hide."+g);this.$element.trigger(c),this.$target&&this.$target.removeClass("in").hide(),this.$element.trigger("hidden."+g)},toggle:function(a){a&&a.preventDefault(),this[this.getTarget().hasClass("in")?"hide":"show"]()},hideAll:function(){a("div.webui-popover").removeClass("in").hide()},show:function(){var b=this.getElementPosition(),d=this.getTarget().removeClass().addClass(f),e=this.getContentElement(),h=d[0].offsetWidth,i=d[0].offsetHeight,j="bottom",k=a.Event("show."+g);this.options.multi||this.hideAll(),this.$element.trigger(k),this.options.cache&&this._poped||(this.isAsync()?this.setContentASync(this.options.content):this.setContent(this.getContent()),this.setTitle(this.getTitle()),this.options.closeable||d.find(".close").off("click").remove(),d.show()),"auto"!==this.options.width&&d.width(this.options.width),"auto"!==this.options.height&&e.height(this.options.height),this.options.arrow||d.find(".arrow").remove(),d.remove().css({top:-1e3,left:-1e3,display:"block"}).appendTo(c.body),h=d[0].offsetWidth,i=d[0].offsetHeight,j=this.getPlacement(b,i),this.initTargetEvents();var l=this.getTargetPositin(b,j,h,i);if(this.$target.css(l.position).addClass(j).addClass("in"),"iframe"===this.options.type){var m=d.find("iframe");m.width(d.width()).height(m.parent().height())}this.options.style&&this.$target.addClass(f+"-"+this.options.style),this.options.padding||(e.css("height",e.outerHeight()),this.$target.addClass("webui-no-padding")),this.options.arrow||this.$target.css({margin:0}),this.options.arrow&&l.arrowOffset&&this.$target.find(".arrow").css(l.arrowOffset),this._poped=!0,this.$element.trigger("shown."+g)},getTarget:function(){return this.$target||(this.$target=a(this.options.template)),this.$target},getTitleElement:function(){return this.getTarget().find("."+f+"-title")},getContentElement:function(){return this.getTarget().find("."+f+"-content")},getTitle:function(){return this.options.title||this.$element.attr("data-title")||this.$element.attr("title")},setTitle:function(a){var b=this.getTitleElement();a?b.html(a):b.remove()},hasContent:function(){return this.getContent()},getContent:function(){if(this.options.url)"iframe"===this.options.type&&(this.content=a('<iframe frameborder="0"></iframe>').attr("src",this.options.url));else if(!this.content){var b="";b=a.isFunction(this.options.content)?this.options.content.apply(this.$element[0],arguments):this.options.content,this.content=this.$element.attr("data-content")||b}return this.content},setContent:function(a){var b=this.getTarget();this.getContentElement().html(a),this.$target=b},isAsync:function(){return"async"===this.options.type},setContentASync:function(b){var c=this;a.ajax({url:this.options.url,type:"GET",cache:this.options.cache,success:function(d){c.content=b&&a.isFunction(b)?b.apply(c.$element[0],[d]):d,c.setContent(c.content)}})},mouseenterHandler:function(){var a=this;a._timeout&&clearTimeout(a._timeout),a.getTarget().is(":visible")||a.show()},mouseleaveHandler:function(){var a=this;a._timeout=setTimeout(function(){a.hide()},a.options.delay)},initTargetEvents:function(){"click"!==this.options.trigger&&this.$target.off("mouseenter mouseleave").on("mouseenter",a.proxy(this.mouseenterHandler,this)).on("mouseleave",a.proxy(this.mouseleaveHandler,this)),this.$target.find(".close").off("click").on("click",a.proxy(this.hide,this))},getPlacement:function(a,b){var d,e=c.documentElement,f=c.body,g=e.clientWidth,h=Math.max(f.scrollTop,e.scrollTop),i=Math.max(f.scrollLeft,e.scrollLeft),j=Math.max(0,a.left-i),k=Math.max(0,a.top-h),l=20;return d="function"==typeof this.options.placement?this.options.placement.call(this,this.getTarget()[0],this.$element[0]):this.$element.data("placement")||this.options.placement,"auto"===d&&(d=g/3>j?k>b+l?"top-right":"bottom-right":2*g/3>j?k>b+l?"top":"bottom":k>b+l?"top-left":"bottom-left"),d},getElementPosition:function(){return a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTargetPositin:function(a,b,c,d){var e=a,f=this.$element.outerWidth(),g={},h={},i=this.options.arrow?0:0;switch(b){case"bottom":g={top:e.top+e.height,left:e.left+e.width/2-c/2};break;case"top":g={top:e.top-d-i,left:e.left+e.width/2-c/2};break;case"left":g={top:e.top+e.height/2-d/2,left:e.left-c-i};break;case"right":g={top:e.top+e.height/2-d/2,left:e.left+e.width};break;case"top-right":g={top:e.top-d-i,left:e.left},h={left:f/2};break;case"top-left":g={top:e.top-d-i,left:e.left-c+e.width},h={left:c-f/2};break;case"bottom-right":g={top:e.top+e.height,left:e.left},h={left:f/2};break;case"bottom-left":g={top:e.top+e.height,left:e.left-c+e.width},h={left:c-f/2}}return{position:g,arrowOffset:h}}},a.fn[e]=function(b){return this.each(function(){var c=a.data(this,"plugin_"+e);c?"destroy"===b?c.destroy():"string"==typeof b&&c[b]():(b?"string"==typeof b?"destroy"!==b&&(c=new d(this,null),c[b]()):"object"==typeof b&&(c=new d(this,b)):c=new d(this,null),a.data(this,"plugin_"+e,c))})}}(jQuery,window,document);