
$(function () {
    var ids = ["customer-pics", "sales-pics", "product-pics", "money-pics", "agent-pics", "report-pics", "system-pics"];
    for (var i = 0; i < ids.length; i++) {
        BindTouchSlider(ids[i]);
    }

});

function BindTouchSlider(id) {
    $("#"+id+" .main_image").touchSlider({
        flexible: true,
        speed: 200,
        paging: $("#"+id+" .flicking_con a"),
        counter: function (e) {
            $("#"+id+" .flicking_con a").removeClass("on").eq(e.current - 1).addClass("on");
        }
    });
}