// nav
var scrollPos = $(window).scrollTop();
$('.navTrigger').click(function() {
	if (!$(this).hasClass('open')) {
		scrollPos = $(window).scrollTop();
		$(this).addClass('open');
		$('.bar').addClass('cross');
		$('nav').stop().animate({
			top: 0
		},600).promise().done(function() {
			$('body').css({
				height: $(window).height(),
// 				overflow: 'hidden',
				position: 'fixed',
			});
		});
	} else {
		$('body').removeAttr('style');
		$(window).scrollTop(scrollPos);
		$(this).removeClass('open');
		$('.bar').removeClass('cross');
		$('nav').stop().animate({
			top: '-200%'
		}, 1000);
	}
});

function resetNav($this) {
	$('body').removeAttr('style');
	$('.navTrigger').removeClass('open');
	$('.bar').removeClass('cross');	
	$('nav').removeAttr('style').promise().done(function () { 
		setTimeout(function() {
			$this.siblings("a")[0].click();
		}, 400);
	});
}


$('nav a').click(function(){
	resetNav($(this));
});




// FAQs
$('.question').each(function() {
	$(this).click(function() {
		if (!$(this).find('.answer').hasClass('closed')) {
			$(this).parents().find('.answer').stop().slideUp().addClass('closed');
			$(this).parent().find('.icon').stop().removeClass('rotateOpen').addClass('rotateClose');
		} else {
			$(this).parents().find('.answer').stop().slideUp('fast').addClass('closed');
			$(this).find('.answer').stop().slideDown('fast').removeClass('closed');
			$(this).parents().find('.icon').stop().addClass('rotateClose').removeClass('rotateOpen');
			$(this).parent().find('.icon').stop().removeClass('rotateClose').addClass('rotateOpen');
		}
	});
});


var $body = $('body');
var $medBp = 840;

//line up grid function start
$('.heroBand').hover(function() {
	$(this).each(function() {
		if ($(this).find('.bandInnerWrap').hasClass('closed')) {
			$(this).find('.bandInnerWrap').removeClass('closed');
			$(this).find('.bandInnerWrap').addClass('open');
		} else {
			$(this).find('.bandInnerWrap').removeClass('open');
			$(this).find('.bandInnerWrap').addClass('closed');
		}
	});
});
$('.button').hover(function() {
	$(this).each(function() {
		if (!$(this).hasClass('buttonSolid')) {
			$(this).addClass('buttonSolid');
			$(this).removeClass('buttonStroke');
		} else {
			$(this).addClass('buttonStroke');
			$(this).removeClass('buttonSolid');
		}
	});
});
//line up grid function end



document.addEventListener("touchstart", function() {}, true);



// filter
$(function() {
	var selectedClass;
	$(".fil-cat").click(function() {
		$(this).parent('.toolbar').find('.fil-cat').css({
			'backgroundColor': 'transparent',
			'color': '#f0e234'
		});
		$(this).css({
			'backgroundColor': '#f0e234',
			'color': '#1a1919'
		});
		selectedClass = $(this).attr("data-rel");
		$(".lineUp p").not("." + selectedClass).hide();
		$("." + selectedClass).show();
	});
});