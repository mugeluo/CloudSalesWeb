define(function (require,exports,module) {
    var ObjectJS = {};
    ObjectJS.init = function () {
        ObjectJS.bindEvent();
    };

    ObjectJS.bindEvent = function () {
        $(".industry li").click(function () {
            var _this = $(this);
            if (!_this.hasClass("hover")) {
                _this.addClass("hover").siblings().removeClass("hover");
            }
            var id = _this.data("industry");
            $("#" + id).show().siblings().hide();
            $(".layer").hide();
            $(".layer-two").hide();
        });
        
        $(".example-img img").hover(            
            function () {                
                var className = $(this).data("id");
                $("." + className).slideDown();               
            },function () {
                var className = $(this).data("id");
                $("." + className).slideUp();                
            }
        )
    };

    module.exports = ObjectJS;
})