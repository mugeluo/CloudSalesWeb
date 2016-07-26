﻿define(function (require, exports, module) {
    var Global = require("global");
    var ObjectJS = {};
    ObjectJS.controller = false;

    ObjectJS.init = function () {
        ObjectJS.bindEvent();
    };

    ObjectJS.bindEvent = function () {

        $(".login-trial").click(function () {
            window.location = "http://edj.yunxiaokeji.com/Home/Register";
        })

        $(".use-number-txt").click(function (e) {            
            e.preventDefault();
            var _this = $(this), offset = _this.offset(), containerWidth = _this.outerWidth(),
                handleWidth = _this.find("div:last").outerWidth();
            position = Math.round(((e.pageX - offset.left + handleWidth / 2) / containerWidth) * 100);
            if (position <= 1) {
                position = 1;
            }else if(position >= 100){
                position = 100;
            }
            _this.find("div:first").css("width", position + "%");
            _this.find("div:last").css("margin-left", (Number(position) - 2) + "%");
            _this.next().val(position);
            var mon = $(".user-time").val(), dis = $(".user-discount").val();
            ObjectJS.estimateCost(position, mon, dis);

        });
        $(".discount").click(function (e) {            
            e.preventDefault();
            var _this = $(this), offset = _this.offset(), containerWidth = _this.outerWidth(),
                handleWidth = _this.find("div:last").outerWidth()
            position = (((e.pageX - offset.left + handleWidth / 2) / containerWidth) * 10).toFixed(1);
            if (position <= 0.1) {
                position = 0.1;
            } else if (position >= 10) {
                position = 10;
            }
            _this.find("div:first").css("width", position*10 + "%");
            _this.find("div:last").css("margin-left", (Number(position)*10 - 2) + "%");
            _this.next().val(position);
            var mon = $(".user-time").val(), dis = $(".user-numb").val();
            ObjectJS.estimateCost(dis, mon, position);
        });
        $(".use-time").click(function (e) {            
            e.preventDefault();
            var _this = $(this), offset = _this.offset(), containerWidth = _this.outerWidth(),
                handleWidth = _this.find("div:last").outerWidth()
            position = Math.round(((e.pageX - offset.left + handleWidth / 2) / containerWidth)*36);
            if (position <= 1) {
                position = 1;
            } else if (position >= 36) {
                position = 36;
            }
            _this.find("div:first").css("width", position/36 * 100 + "%");
            _this.find("div:last").css("margin-left", (Number(position)/36 * 100 - 2) + "%");
            _this.next().val(position);
            var dis = $(".user-discount").val(), mon = $(".user-numb").val();
            ObjectJS.estimateCost(mon, position, dis);
        });

        $(".use-number-txt").mousedown(function (e) {
            e.preventDefault();            
            var _this = $(this), offset = _this.offset(), containerWidth = _this.outerWidth(),
                handleWidth = _this.find("div:last").outerWidth()
            ObjectJS.controller = true;
            _this.mousemove(function (e) {
                e.preventDefault();
                position = Math.round(((e.pageX - offset.left + handleWidth / 2) / containerWidth) * 100);
                if (position <= 1) {
                    position = 1;
                } else if (position >= 100) {
                    position = 100;
                }
                if (ObjectJS.controller) {
                    _this.find("div:first").css("width", position + "%");
                    _this.find("div:last").css("margin-left", position-2 + "%");
                    _this.next().val(position);
                    var mon = $(".user-time").val(), dis = $(".user-discount").val();
                    ObjectJS.estimateCost(position, mon, dis);
                }
            });
            $(document).mouseup(function () {
                e.preventDefault();
                ObjectJS.controller = false;
            });   
        });
        $(".discount").mousedown(function (e) {
            e.preventDefault();
            var _this = $(this), offset = _this.offset(), containerWidth = _this.outerWidth(),
                handleWidth = _this.find("div:last").outerWidth()
            ObjectJS.controller = true;
            _this.mousemove(function (e) {
                e.preventDefault();
                position = (((e.pageX - offset.left + handleWidth / 2) / containerWidth) * 10).toFixed(1);
                if (position <= 0.1) {
                    position = 0.1;
                } else if (position >= 10) {
                    position = 10;
                }
                if (ObjectJS.controller) {
                    _this.find("div:first").css("width", position*10 + "%");
                    _this.find("div:last").css("margin-left", position*10-2 + "%");
                    _this.next().val(position);
                    var mon = $(".user-time").val(), dis = $(".user-numb").val();
                    ObjectJS.estimateCost(dis, mon, position);
                }
            });
            $(document).mouseup(function () {
                e.preventDefault();
                ObjectJS.controller = false;
            });
        });
        $(".use-time").mousedown(function (e) {
            e.preventDefault();
            var _this = $(this), offset = _this.offset(), containerWidth = _this.outerWidth(),
                handleWidth = _this.find("div:last").outerWidth()
            ObjectJS.controller = true;
            _this.mousemove(function (e) {
                e.preventDefault();
                position = Math.round(((e.pageX - offset.left + handleWidth / 2) / containerWidth) * 36);
                if (position <= 1) {
                    position = 1;
                } else if (position >=36) {
                    position = 36;
                }
                if (ObjectJS.controller) {
                    _this.find("div:first").css("width", position/36 * 100 + "%");
                    _this.find("div:last").css("margin-left", position/36 * 100-2 + "%");
                    _this.next().val(position);
                    var dis = $(".user-discount").val(), mon = $(".user-numb").val();
                    ObjectJS.estimateCost(mon, position, dis);
                }
            });
            $(document).mouseup(function () {
                e.preventDefault();
                ObjectJS.controller = false;
            });
        });

        $(".user-numb").change(function () {
            var _this = $(this), val = _this.val();
            if (val > 100) {                
                alert("您的人数已超过100人，请联系我们，为您定制专业版");
                _this.parent().find(".use-line div:first").css("width", "100%");
                _this.parent().find(".use-line div:last").css("margin-left", "98%");
                _this.val(100);
            } else if (val < 1) {
                alert("最少1人");
                _this.parent().find(".use-line div:first").css("width", "1%");
                _this.parent().find(".use-line div:last").css("margin-left", "1%");
                _this.val(1);
            } else {                
                _this.parent().find(".use-line div:first").css("width", val + "%");
                _this.parent().find(".use-line div:last").css("margin-left", (Number(val)-2) + "%");
            }
            
            var mon=$(".user-time").val(),dis=$(".user-discount").val();
            ObjectJS.estimateCost(val, mon, dis);            
        });
        $(".user-discount").change(function () {
            var _this = $(this), val = _this.val();
            if (val > 10) {
                alert("最低10折");
                _this.parent().find(".use-line div:first").css("width", "100%");
                _this.parent().find(".use-line div:last").css("margin-left", "98%");
                _this.val(10);
            } else if (val < 0.1) {
                alert("最少0.1折");
                _this.parent().find(".use-line div:first").css("width", "1%");
                _this.parent().find(".use-line div:last").css("margin-left", "1%");
                _this.val(0.1);
            } else {
                _this.parent().find(".use-line div:first").css("width", val*10 + "%");
                _this.parent().find(".use-line div:last").css("margin-left", (Number(val)*10 - 2) + "%");
            }

            var mon = $(".user-time").val(), dis = $(".user-numb").val();
            ObjectJS.estimateCost(dis, mon, val);            
        });
        $(".user-time").change(function () {
            var _this = $(this), val = _this.val();
            if (val > 36) {
                alert("最高3年");
                _this.parent().find(".use-line div:first").css("width", "100%");
                _this.parent().find(".use-line div:last").css("margin-left", "98%");
                _this.val(36);
            } else if (val < 0.1) {
                alert("最底1个月");
                _this.parent().find(".use-line div:first").css("width", "1%");
                _this.parent().find(".use-line div:last").css("margin-left", "1%");
                _this.val(1);
            } else {
                _this.parent().find(".use-line div:first").css("width", val / 36*100 + "%");
                _this.parent().find(".use-line div:last").css("margin-left", (Number(val) / 36 * 100 - 2) + "%");
            }

            var dis = $(".user-discount").val(), mon = $(".user-numb").val();
            ObjectJS.estimateCost(mon, val, dis);            
        });

        $(".cost .check-box").click(function () {
            var _this = $(this);
            if (!_this.hasClass("hover")) {
                _this.addClass("hover")
            } else {
                _this.removeClass("hover");
            }
            
            var val = $(".user-numb").val(), dis = $(".user-discount").val(), mon = $(".user-numb").val();
            ObjectJS.estimateCost(val, mon, dis);
        });  
    };    

    ObjectJS.estimateCost = function (number, month, discount) {        
        var money = "";
        if (number =="") {
            alert("请输入人数");
            var countMoney = 0;
            return countMoney;
        }
        if (month=="") {
            month = 12;
        }
        if (discount==""||discount=="0") {
            discount = 10;
        }
        //if (!number.isInt() || !number.isDouble()) {
        //    alert("人数格式不正确");
        //    return;
        //}
        //if (!month.isInt() || !month.isDouble()) {
        //    alert("月份格式不正确");
        //    return;
        //}
        //if (!discount.isMoneyNumber()) {
        //    alert("折扣格式不正确");
        //    return;
        //}
        var year = Number(month / 12).toFixed(2);        
        var number = Number(number);    
        if (year<=1) {
            if (5>= number) {
                money = 1200;
            } else if (10>=number) {
                money = 2400;
            } else if (20>=number) {
                money = 4600;
            } else if (50 >=number) {
                money = 10800;
            } else if(100>=number){
                money = 19800;
            } else {
                money = 19800;
            }
        } else if (2>=year) {
            if (5 >= number) {
                money = 2400;
            } else if (10 >= number) {
                money = 4200;
            } else if (20 >= number) {
                money = 8200;
            } else if (50 >= number) {
                money = 19200;
            } else if (100 >= number) {
                money = 35600;
            } else {
                money = 35600;
            }
        } else {
            if (5 >= number) {
                money = 3600;
            } else if (10 >= number) {
                money = 5600;
            } else if (20 >= number) {
                money = 10800;
            } else if (50 >= number) {
                money = 25600;
            } else if (100 >= number) {
                money = 46800;
            } else {
                money = 46800;
            }
        }
        var countMoney = money * discount / 10;
        if ($(".cost .check-box:first").hasClass("hover")) {
            countMoney += 1000;
        }
        if ($(".cost .check-box:last").hasClass("hover")) {
            countMoney += 4000;
        }
        $(".cost .count span").html(countMoney.toFixed(2));
    }

    module.exports = ObjectJS;
})