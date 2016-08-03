define(function (require,exports,module) {
    var ObjectJS = {};
    ObjectJS.init = function () {
        ObjectJS.bindEvent();
        ObjectJS.getWidthSize();
    }

    ObjectJS.bindEvent = function () {        

        $(window).resize(function(){
            ObjectJS.getWidthSize();
        });        

        $(".sove-img div").click(function () {
            var _this = $(this), ask = _this.data("ask"), answer = _this.data("answer");
            if (!_this.hasClass("hover")) {
                $(".sove-img div").removeClass("hover");
                _this.addClass("hover");
            };
            $(".ask-answer .ask").html(ask);
            $(".ask-answer .answer").html(answer);
        });

        $(".dg-wrapper .outbound").click(function () {
            var _this = $(this);
            ObjectJS.clickBind($(".customer-details li").eq(_this.data("index")));
        });

        $(".customer-details li").hover(function () {
            var _self = $(this);
            $(".dg-wrapper .outbound").eq(_self.data("index")).click();
            ObjectJS.clickBind(this);
        });

        $(".repertory-details li").hover(function () {            
            var _this = $(this), url = _this.data("url");
            if ($(".jxc-img img").attr("src") != url) {
                $(".jxc-img img").fadeOut(500,function () {
                    $(this).fadeIn().attr("src", url);
                })
            }           
            ObjectJS.clickBind(this);
        });

        $(".agent-details li").hover(function () {
            var _this = $(this), url = _this.data("url");
            if ($(".agent-img img").attr("src")!=url) {
                $(".agent-img img").fadeOut(500,function () {
                    $(this).fadeIn().attr("src", url);
                })
            }            
            ObjectJS.clickBind(this);
        });
        
        $(".applicable-industry img").hover(function () {
            var _this = $(this).parent();            
            _this.find("div:first").hide();
            _this.find("div:last").parent().fadeIn();                          
        });

        $(".education-floating,.garment-floating").mouseleave(function () {
            $(".education,.garment").show();
            $(".education-floating,.garment-floating").fadeOut();
        });

        $(".sove-img div:first").click();
    }

    ObjectJS.clickBind = function (thisclick) {        
        if (!$(thisclick).hasClass("hover")) {
            $(thisclick).addClass("hover").siblings().removeClass("hover");
        }                
    }

    ObjectJS.getWidthSize = function () {        
        $("#playBox").height($(window).height());
        $(".imm img").height($(window).height());
        $("#playBox .oUlplay li img").height($(window).height());
        $("#playBox .oUlplay li").width($(window).width());       
        
        $(".customer-bevel").css("border-left", ""+$(window).width()+"px solid #008DDD");
        $(".repertory-bevel-down").css("border-right", "" + $(window).width() + "px solid #F0EFEE");
    }

    module.exports = ObjectJS;
})