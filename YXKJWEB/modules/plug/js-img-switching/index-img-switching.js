
var tt = null;
var kkk;
var n = 0;
var timer = 0;
window.onload = function () {    
    var li = document.getElementById("btn").getElementsByTagName("li");
    kkk = document.getElementById("imm").getElementsByTagName("a");
    for (var i = 0; i < kkk.length; i++) {
        if (i != 0) {
            kkk[i].style.opacity = 0;
        }
    }
    for (var j = 0; j < li.length; j++) {
        li[j].onmouseover = function () {
            var that = this;
            tt = setTimeout(function () {
                var index = that.getAttribute("data-id") - 1,

                    title = that.getAttribute("data-title"),
                    title2 = that.getAttribute("data-title2"),
                    txt = that.getAttribute("data-txt"),
                    txt2 = that.getAttribute("data-txt2");
                $(".title1").html(title);
                $(".title2").html(title2);
                $(".txt").html(txt);
                $(".txt2").html(txt2);

                n = index;
                if (index < kkk.length) {
                    for (var o = 0; o < li.length; o++) {
                        li[o].className = "";
                        kkk[o].style.opacity = 0;
                        kkk[o].style.zIndex = 9998;
                    }
                    that.className = "on";
                    kkk[index].style.opacity = 1;
                    kkk[index].style.zIndex = 9999;
                    kkk[index].style.transition = "opacity 0.8s";
                    leftf(-300, 0, kkk[index]);
                }
            }, 100);
        };
        li[j].onmouseout = function () {
            clearTimeout(tt)
        }
    }

    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var jiao = document.getElementById("jiao");
    var body = document.getElementById("img-head");

    timer = setInterval("autoplay()", 5000);
    body.onmouseover = function () {
        jiao.style.display = "block";
        //clearInterval(timer);
    };
    //body.onmouseout = function () {
    //    jiao.style.display = "none";
    //    timer = setInterval("autoplay()", 5000);
    //};
    
    left.onclick = function () {
        if (n > 0) {
            n--
        } else if (n == 0) {
            n = kkk.length - 1;
        }
        var li = document.getElementById("btn").getElementsByTagName("li");
        li[n].onmouseover()
    };
    right.onclick = function () {
        n = n >= (kkk.length - 1) ? 0 : ++n;
        var li = document.getElementById("btn").getElementsByTagName("li");
        li[n].onmouseover()
    }
}

function leftf(start, end, ele) {
    
    var tt = setInterval(function () {
        start += 10;
        ele.style.left = start + "px";
        if (start == end) {
            clearInterval(tt)
        }
    }, 20)
}

function autoplay() {
    n = n >= (kkk.length - 1) ? 0 : ++n;
    var li = document.getElementById("btn").getElementsByTagName("li");
    li[n].onmouseover()
};


