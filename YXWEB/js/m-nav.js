/*$(function(){
	$(document).click(function(e){

 if (!$(e.target).parents().hasClass("menu-m") && !$(e.target).hasClass("menu-m")) {
                 $(".m-nav").slideUp('100');
        		 $(".m-btu").removeClass('on');
		};
	});
	$(".m-btu").on("click",function(){
		$(".m-nav").slideToggle();
		if($(this).hasClass("on")){ $(this).removeClass('on');}
		else{$(this).addClass('on');}
		
        //var val = $(this).attr('class');
//        if(val.indexOf('on') == -1){
//            $(this).addClass('on');
//            $(".m-nav").show(0).stop().animate({
//                height:'auto'
//            },0);
//        }else{
//            $(this).removeClass('on');
//            $(".m-nav").hide(0).stop().animate({
//                height:'0'
//            },0);
//        }
    })
	
	$(".m-nav a").on("click",function(){
        $(this).parents(".m-nav").hide();
        $(".m-btu").removeClass('on');
    })
	
});
*/

$(function(){
	$(document).click(function(e){
     if (!$(e.target).parents().hasClass("menu-m") && !$(e.target).hasClass("menu-m")) {
            $(".m-nav").slideUp('100').removeClass('on');
		    };
	});

	$(".m-btu").bind("click",function(){
	    $(".m-nav").slideToggle();

		if($(this).hasClass("on")){ $(this).removeClass('on');}
		else{$(this).addClass('on');}
		
    })
	
	$(".m-nav a").bind("click",function(){
        $(this).parents(".m-nav").hide();
        $(".m-btu").removeClass('on');
	})

	$(".site-header").click(function () {
	    $('body,html').animate({ scrollTop: 0 }, 1000);
	});
	
});