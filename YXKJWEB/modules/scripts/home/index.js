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

        $(".customer-details li").hover(function () {
            var _self = $(this);
            $(".dg-wrapper [data-index=" + _self.data("index") + "] ").click();
            ObjectJS.clickBind(this);
        });

        $(".dg-wrapper .outbound").click(function () {
            var _this = $(this);
            ObjectJS.clickBind($(".customer-details li").eq(_this.data("index")));
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

        /*会员*/
        //$(".member-details li").hover(function () {
        //    var _this = $(this), url = _this.data("url");
        //    if ($(".member-img img").attr("src")!=url) {
        //        $(".member-img img").fadeOut(500,function () {
        //            $(this).fadeIn().attr("src", url);
        //        })
        //    }            
        //    ObjectJS.clickBind(this);
        //});
        
        $(".applicable-industry img").hover(function () {
            var _this = $(this).parent();            
            _this.find("div:first").hide();
            _this.find("div:last").parent().fadeIn();           
        });

        $(".education-floating,.garment-floating").mouseleave(function () {
            $(".education,.garment").show();
            $(".education-floating,.garment-floating").fadeOut();
        });
    }

    ObjectJS.clickBind = function (thisclick) {        
        if (!$(thisclick).hasClass("hover")) {
            $(thisclick).addClass("hover").siblings().removeClass("hover");
        }                
    }

    ObjectJS.getWidthSize = function () {  
        $(".customer-bevel").css("border-left", "" + $(window).width() + "px solid #4a91e3");
        $(".repertory-bevel-down").css("border-right", "" + $(window).width() + "px solid #F0EFEE");
    }

    module.exports = ObjectJS;
})