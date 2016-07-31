define(function (require,exports,module) {
    var ObjectJS = {};
    ObjectJS.init = function () {
        ObjectJS.bindEvent();        
    }

    ObjectJS.bindEvent = function () {   

        //$(window).scroll(function () {
        //    if (document.body.scrollTop > 50) {
        //        if ($(".header-menu").data("isbg") == 0) {
        //            $(".header-menu").data("isbg", 1);
        //            $(".header-menu").css("background", "rgba(55,55,55,0.4)");
        //        }
        //    } else {
        //        $(".header-menu").data("isbg",0);
        //        $(".header-menu").css("background", "none");
        //    }
        //});

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
                $(".jxc-img img").fadeOut(function () {
                    $(this).fadeIn().attr("src", url);
                })
            }            
            ObjectJS.clickBind(this);
        });

        $(".agent-details li").hover(function () {
            var _this = $(this), url = _this.data("url");
            if ($(".agent-img img").attr("src")!=url) {
                $(".agent-img img").fadeOut(function () {
                    $(this).fadeIn().attr("src", url);
                })
            }            
            ObjectJS.clickBind(this);
        });
    }

    ObjectJS.clickBind = function (thisclick) {        
        if (!$(thisclick).hasClass("hover")) {
            $(thisclick).addClass("hover").siblings().removeClass("hover");
        }                
    }

    module.exports = ObjectJS;
})