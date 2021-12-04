$(function () {
	
	/* data-hover="dropdown" */
    if ($('[data-hover="dropdown"]').length && $('[data-hover="dropdown"]').is(":visible")) {		
        var $allDropdowns = $();
        $allDropdowns = $allDropdowns.add($('[data-hover="dropdown"]').parent());
        $('[data-hover="dropdown"]').each(function () {			
            var $this = $(this),
                $parent = $this.parent(),
                delay = 200,
                timeoutHover;

            $parent.hover(function () {				
                window.clearTimeout(timeoutHover);
                $allDropdowns.removeClass('open');
                if (!$parent.hasClass('open')) {
                    $parent.addClass('open');
					$this.addClass('owl');
                }
            }, function () {
                timeoutHover = window.setTimeout(function () {
                    $parent.removeClass('open');
					$this.removeClass('owl');
                }, delay);
            });
        });
    }
	
	/* data-toggle="dropdown" */
    $('[data-toggle="dropdown"]').on('click', function (event) {
        event.preventDefault();
        if ($(this).is('.disabled, :disabled')) return;
        var $this = $(this),
            $alldrops = $(),
            $parent = $this.parent(),
            $menu = $parent.children('.dropdown-menu'),
            $parents = $('[data-toggle="dropdown"]').parent(),
            $menu = $parent.children('.dropdown-menu'),
            $alldrops = $alldrops.add($('[data-toggle="dropdown"]').parent()),
            isActive = $parent.hasClass('open'),
            animation = $this.data('animation'),
            $offsets = $this.offset().top,
            $height = $this.outerHeight() + $menu.outerHeight(),
            $window = $(window).height(),
            $scroll = $(window).scrollTop();

        if (!isActive) {
            $parents.removeClass('open');
            $parent.addClass('open');
            if (($offsets + $height) > $window && ($offsets - $scroll) > $height) {
                $menu.addClass('dropdown-menu-up');
            } else {
                $menu.removeClass('dropdown-menu-up');
            }
            if (animation) {
                $menu.addClass('animated ' + animation), $menu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $menu.removeClass('animated ' + animation);
                })
            }
        } else {
            $parent.removeClass('open');
            $menu.removeClass('dropdown-menu-up');
        }
        return false;
    });
    $(document).click(function (event) {
        var $target = $(event.target);
        if ($target.parents('.dropdown-menu').length < 1 || $target.parents('.dropdown-hidden').length > 0 || $target.hasClass('dropdown-hidden')) {
            $('[data-toggle="dropdown"]').parent('.open').removeClass('open');
            $('[data-hover="dropdown"]').closest(".open").removeClass('open');
            $('.dropdown-menu').removeClass('dropdown-menu-up');
        }
    });
	/* data-dismiss="dropdown" */
    $('[data-dismiss="dropdown"]').on('click', function (event) {
        event.preventDefault();
        var $this = $(this),
			selector = $this.attr('data-target');
        if (!selector) {
            selector = $this.closest('.open');
        }
        var $parent = $(selector);
        $('[data-toggle="dropdown"]').parent('.open').removeClass('open');
		$('[data-hover="dropdown"]').closest(".open").removeClass('open');
		$('.dropdown-menu').removeClass('dropdown-menu-up');
        return false;
    });
	
	/* matte */
    $('[data-toggle="matte"]').on('click', function (event) {
        event.preventDefault();
		if ($(this).is('.disabled, :disabled')) return;
        var selector = $(this).attr('data-target'),
			mask = $(this).attr('data-backdrop');
			
        if (!selector){
            selector = $(this).attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
        }	
		if(mask == "false"){
            if (!$(this).hasClass('owl')) {
				$('[data-toggle="matte"]').removeClass('owl');
                $('.matte').removeClass('in');
                $(this).addClass('owl');
                $(selector).addClass('in');
            } else {
                $(this).removeClass('owl');
                $(selector).removeClass('in');
            }
        } else {
			if(mask == "content"){
				var backdrop = $('.mycontent').find('#backdrop');	
				if (!backdrop.length) {
					$('#backdrop').remove();
					$('.mycontent').append('<div class="backdrop in" id="backdrop"></div>');
				}   		
			} else {
				var backdrop = $('body > #backdrop');	
				if (!backdrop.length) {
					$('#backdrop').remove();
					$(document.body).append('<div class="backdrop in" id="backdrop"></div>');
				}  
			}     
            if (!$(this).hasClass('owl')) {
                $('[data-toggle="matte"]').removeClass('owl');
                $('.matte').removeClass('in');
                $(this).addClass('owl');
                $(selector).addClass('in');
                backdrop.addClass('in');
            } else {
                $(this).removeClass('owl');
                $(selector).removeClass('in');
                backdrop.removeClass('in');
            }
            $('#backdrop').on('click', function (event) {
                event.preventDefault();
                $('[data-toggle="matte"]').removeClass('owl');
                $('.matte').removeClass('in');
                $(this).removeClass('in');
            });
        }
    });

    /* data-dismiss="matte" */
    $('[data-dismiss="matte"]').on('click', function (event) {
        event.preventDefault();
        var $this = $(this),
			selector = $this.attr('data-target'),
			backdrop = $('#backdrop');
        if (!selector) {
            selector = $this.attr('href');
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
        }
        var $parent = $(selector);
        if (!$parent.length) $parent = $this.closest('.matte');
        $('[data-toggle="matte"]').removeClass('owl');
        $parent.removeClass('in');
        if (backdrop.length) {
            backdrop.removeClass('in');
        }
        return false;
    });
});

// Javacsript Tab Change
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"active":"";
		con.style.display=i==cursel?"block":"none";
	}
}

function cookiesave(n, v, mins, dn, path){
	if(n){
		if(!mins) mins = 365 * 24 * 60;
		if(!path) path = "/";
		var date = new Date();

		date.setTime(date.getTime() + (mins * 60 * 60 * 1000));

		var expires = "; expires=" + date.toGMTString();

		if(dn) dn = "domain=" + dn + "; ";
		document.cookie = n + "=" + v + expires + "; " + dn + "path=" + path;
	}
}
function cookieget(n){
	var name = n + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i<ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
}
function closeclick(){
	$("#modal-popup").removeClass("in");
	cookiesave('closeclick','closeclick','3','','');
}
function clickclose(){		
	if(cookieget('closeclick')=='closeclick'){
		$("#modal-popup").removeClass("in");
	}else{
		$("#modal-popup").addClass("in");
	}
}
window.onload=clickclose;