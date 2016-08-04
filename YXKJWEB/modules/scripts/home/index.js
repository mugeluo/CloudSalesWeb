define(function (require,exports,module) {
    var ObjectJS = {};
    ObjectJS.init = function () {
        ObjectJS.bindEvent();
        //ObjectJS.getWidthSize();
    }

    ObjectJS.bindEvent = function () {        

        //$(window).resize(function(){
        //    ObjectJS.getWidthSize();
        //});        

        var array = [{ ask: "问：二当家帮助企业解决了哪些问题？<div class='ask-line'></div>", answer: "<div>答：有些企业需要同时购买CRM、进销存、分销等应用，来支撑企业运营，现在一个二当家就够了</div>" }, { ask: "问：二当家解决了企业哪些问题？<div class='ask-line'></div>", answer: "<div>答：第一，二当家提供CRM（客户管理）</div><div>第二，二当家还提供进销存管理</div><div>第三，二当家同时也提供了会员管理</div><div>一个应用解决了企业运营管理需求，实现企业多元化发展战略</div>" }, { ask: "问：使用二当家有哪些好处？<div class='ask-line'></div>", answer: "<div>答：第一，企业无需花费高额的研发费用定制软件，只需支出少量成本即可享受功能全面的二当家</div><div>第二，无需安装客户端，任何能网络良好的环境下都可登录二当家，实时查看和使用</div><div>第三，二当家还提供移动app，手机也能使用二当家</div>" }, { ask: "问：客户管理不便捷，用五当家怎么处理？<div class='ask-line'></div>", answer: "<div>答：可以使用五当家的CRM模块来管理客户信息，自定义客户阶段，随时随地处理跟进</div>" }];

        $(".sove-img div").click(function () {
            var _this = $(this), id = _this.data("id");
            if (!_this.hasClass("hover")) {
                $(".sove-img div").removeClass("hover");
                _this.addClass("hover");
            };
            var txt = array[id];
            $(".ask").html(txt.ask);
            $(".answer").html(txt.answer);
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

        //$(".agent-details li").hover(function () {
        //    var _this = $(this), url = _this.data("url");
        //    if ($(".agent-img img").attr("src")!=url) {
        //        $(".agent-img img").fadeOut(500,function () {
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

        $(".sove-img div:first").click();
    }

    ObjectJS.clickBind = function (thisclick) {        
        if (!$(thisclick).hasClass("hover")) {
            $(thisclick).addClass("hover").siblings().removeClass("hover");
        }                
    }

    ObjectJS.getWidthSize = function () {
        if ($(window).height()>=1200) {
            $(".index-br").height(1200);
            $("#img-head").height(1200);
            $("#playBox").height(1200);
            $(".oUlplay .oUlplay-img img").height(1200);
        } else {
            $(".index-br").height($(window).height());
            $("#img-head").height($(window).height());
            $("#playBox").height($(window).height());
            $(".oUlplay .oUlplay-img img").height($(window).height());
        }

        $(".oUlplay .oUlplay-img img").width($(window).width());
        $(".cloud-left").width($(window).width());       
        
        $(".customer-bevel").css("border-left", "" + $(window).width() + "px solid #4a91e3");
        $(".repertory-bevel-down").css("border-right", "" + $(window).width() + "px solid #F0EFEE");
    }

    module.exports = ObjectJS;
})