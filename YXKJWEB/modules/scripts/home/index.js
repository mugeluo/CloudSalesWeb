define(function (require,exports,module) {
    var ObjectJS = {};
    ObjectJS.init = function () {
        ObjectJS.bindEvent();
    }

    ObjectJS.bindEvent = function () {
        $(".customer-details li").click(function () {
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
    }

    module.exports = ObjectJS;
})