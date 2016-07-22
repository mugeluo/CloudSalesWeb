/*
*布局页JS
*/
define(function (require, exports, module) {
    var $ = require("jquery"),
        doT = require("dot"),
        Global = require("global")      

    var LayoutObject = {};
    //初始化数据
    LayoutObject.init = function () {  
        LayoutObject.bindEvent();
        LayoutObject.placeholderSupport();        
    }
    //绑定事件
    LayoutObject.bindEvent = function () {
        var _self = this;
              
        //窗体滚动 置顶头部
        $(window).scroll(function(){  
            if ($(window).scrollTop()>50){  
                $(".back-top").fadeIn(500);
            }  
            else  
            {  
                $(".back-top").fadeOut(1000);
             }  
        });  

        $(document).click(function (e) {

            if (!$(e.target).parents().hasClass("currentuser") && !$(e.target).hasClass("currentuser")) {
                $(".dropdown-userinfo").fadeOut("1000");
            }

            if (!$(e.target).parents().hasClass("companyname") && !$(e.target).hasClass("companyname")) {
                $(".dropdown-companyinfo").fadeOut("1000");
            }
        });   

        //返回顶部
        $(".back-top").click(function () {
             $('body,html').animate({scrollTop:0},300);  
            return false;  
        });

        //头部双击 返回顶部
        $("header").dblclick(function () {
            $('body,html').animate({ scrollTop: 0 }, 300);
            return false;
        });

        $(".nav li:gt(0)").click(function () {
            var _this = $(this);
            if (!_this.hasClass("hover")) {
                _this.addClass("hover").siblings().removeClass("hover");
            }
        });
    }

    // 判断浏览器是否支持 placeholder
    LayoutObject.placeholderSupport = function () {
        if (! ('placeholder' in document.createElement('input')) ) {   
            $('[placeholder]').focus(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                }
            }).blur(function () {
                var input = $(this);
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                }
            }).blur();
        };
    }

    module.exports = LayoutObject;
})