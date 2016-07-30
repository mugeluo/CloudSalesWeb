define(function (require,exports,module) {
    var ObjectJS = {};
    ObjectJS.init = function () {
        ObjectJS.bindEvent();        
    }

    ObjectJS.bindEvent = function () {
       
        $(".img-interchange li").click(function () {
            var _this = $(this);
            _this.css({ "left": "40px", "top": "40px", "z-index": "502" });
            _this.next().css({ "left": "20px", "top": "20px", "z-index": "501" });
            _this.next().next().css({ "left": "0", "top": "0", "z-index": "500" });            
        });

        $(window).scroll(function () {
            if (document.body.scrollTop > 50) {
                if ($(".header-menu").data("isbg") == 0) {
                    $(".header-menu").data("isbg", 1);
                    $(".header-menu").css("background", "rgba(55,55,55,0.4)");
                }
            } else {
                $(".header-menu").data("isbg",0);
                $(".header-menu").css("background", "none");
            }
        });

        $(".dg-wrapper .outbound").click(function () {
            var _this = $(this);
            ObjectJS.clickBind($(".customer-details li").eq(_this.data("index")));
        });

        $(".customer-details li").click(function () {
            var _self = $(this);
            $(".dg-wrapper .outbound").eq(_self.data("index")).click();
            ObjectJS.clickBind(this);
        });

        $(".repertory-details li").click(function () {
            ObjectJS.clickBind(this);
        });

        $(".agent-details li").click(function () {
            ObjectJS.clickBind(this);
        });
    }

    ObjectJS.clickBind = function (thisclick) {        
        if (!$(thisclick).hasClass("hover")) {
            $(thisclick).addClass("hover").siblings().removeClass("hover");
        }        
        $("#featured-area ul ."+$(thisclick).data("name")).click();
    }

    module.exports = ObjectJS;
})