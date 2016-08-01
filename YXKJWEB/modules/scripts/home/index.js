define(function (require,exports,module) {
    var ObjectJS = {};
    ObjectJS.init = function () {
        ObjectJS.bindEvent();        
    }

    ObjectJS.bindEvent = function () {   

        $(window).scroll(function () {
           if (document.body.scrollTop > 50) {
               $(".getback").show();
           }
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

        $(".applicable-industry img").hover(
            function () {
                var _this = $(this).parent();
                t = setInterval(function () {
                    _this.find("div:first").hide();
                    _this.find("div:last").parent().slideDown();
                },300);            
            }, function () {
                clearInterval(t);
                var _this = $(this).parent();
                _this.find("div:first").show();
                _this.find("div:last").parent().slideUp();
            }
        );             

        $(".getback").click(function () {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        })
    }

    ObjectJS.clickBind = function (thisclick) {        
        if (!$(thisclick).hasClass("hover")) {
            $(thisclick).addClass("hover").siblings().removeClass("hover");
        }                
    }

    module.exports = ObjectJS;
})