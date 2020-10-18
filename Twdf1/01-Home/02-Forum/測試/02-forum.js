
// <!-- ---------點擊愛心收藏-------------- -->
function check_A_1() {
    var e = document.getElementById("A_1");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(2, 0, 37)") {
        document.getElementById("A_1").style.color = "rgb(221, 51, 39)";
    } else {
        document.getElementById("A_1").style.color = "rgb(2, 0, 37)";
    }
}
function check_A_2() {
    var e = document.getElementById("A_2");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(2, 0, 37)") {
        document.getElementById("A_2").style.color = "rgb(221, 51, 39)";
    } else {
        document.getElementById("A_2").style.color = "rgb(2, 0, 37)";
    }
}
function check_A_3() {
    var e = document.getElementById("A_3");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(2, 0, 37)") {
        document.getElementById("A_3").style.color = "rgb(221, 51, 39)";
    } else {
        document.getElementById("A_3").style.color = "rgb(2, 0, 37)";
    }
}
function check_A_4() {
    var e = document.getElementById("A_4");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(2, 0, 37)") {
        document.getElementById("A_4").style.color = "rgb(221, 51, 39)";
    } else {
        document.getElementById("A_4").style.color = "rgb(2, 0, 37)";
    }
}
function check_A_5() {
    var e = document.getElementById("A_5");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(2, 0, 37)") {
        document.getElementById("A_5").style.color = "rgb(221, 51, 39)";
    } else {
        document.getElementById("A_5").style.color = "rgb(2, 0, 37)";
    }
}
function check_A_6() {
    var e = document.getElementById("A_6");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(2, 0, 37)") {
        document.getElementById("A_6").style.color = "rgb(221, 51, 39)";
    } else {
        document.getElementById("A_6").style.color = "rgb(2, 0, 37)";
    }
}
function check_A_7() {
    var e = document.getElementById("A_7");
    var c = window.getComputedStyle(e).color;
    if (c === "rgb(2, 0, 37)") {
        document.getElementById("A_7").style.color = "rgb(221, 51, 39)";
    } else {
        document.getElementById("A_7").style.color = "rgb(2, 0, 37)";
    }
}


// <!-- ---------點擊切換Div-------------- -->
//  ------------更新時間切換-------------
function show_newtime(obj) {
    if (obj.style.display == 'block') {
        obj.style.display = 'none';
    }
    else {
        obj.style.display = 'block';
    }
}

var sh = document.getElementById("show_newtime");
sh.onclick = function () {
    var t = document.getElementById("newtime_t");
    var d = document.getElementById("newtime_d");
    show_newtime(t);
    show_newtime(d);
    return false;
}
//  ------------留言人數切換-------------
function show_browse(obj) {
    if (obj.style.display == 'block') {
        obj.style.display = 'none';
    }
    else {
        obj.style.display = 'block';
    }
}

var sh = document.getElementById("show_browse");
sh.onclick = function () {
    var t = document.getElementById("browse_t");
    var d = document.getElementById("browse_d");
    show_browse(t);
    show_browse(d);
    return false;
}
//  ------------收藏人數切換-------------
function show_favorites(obj) {
    if (obj.style.display == 'block') {
        obj.style.display = 'none';
    }
    else {
        obj.style.display = 'block';
    }
}

var sh = document.getElementById("show_favorites");
sh.onclick = function () {
    var t = document.getElementById("favorites_t");
    var d = document.getElementById("favorites_d");
    show_favorites(t);
    show_favorites(d);
    return false;
}

// <!-- ----作品頁面切換----------------------- -->
// ----頁面切換上----
var Qt_bn_ts = document.querySelectorAll('.Qt_bn_t')
var Qt_pag_gs = document.querySelectorAll('.Qt_pag_g')
// ----添加顯示------
for (var i = 0; i < Qt_bn_ts.length; i++) {
    const Qt_bn_t = Qt_bn_ts[i];
    const Qt_pag_g = Qt_pag_gs[i];

    Qt_bn_t.onclick = function () {
        remove_Qt_active_t()
        Qt_bn_t.classList.add('Qt_active')
        Qt_pag_g.classList.add('Qt_active')
    }
}
// ----移除顯示------
function remove_Qt_active_t() {
    for (var i = 0; i < Qt_bn_ts.length; i++) {
        const Qt_bn_t = Qt_bn_ts[i];
        const Qt_pag_g = Qt_pag_gs[i];
        Qt_bn_t.classList.remove('Qt_active')
        Qt_pag_g.classList.remove('Qt_active')
    }
}
// ----頁面切換下----
var Qt_bn_ds = document.querySelectorAll('.Qt_bn_d')
var Qt_pag_gs = document.querySelectorAll('.Qt_pag_g')
// ----添加顯示------
for (var i = 0; i < Qt_bn_ds.length; i++) {
    const Qt_bn_d = Qt_bn_ds[i];
    const Qt_pag_g = Qt_pag_gs[i];

    Qt_bn_d.onclick = function () {
        remove_Qt_active_d()
        Qt_bn_d.classList.add('Qt_active')
        Qt_pag_g.classList.add('Qt_active')
    }
}
// ----移除顯示------
function remove_Qt_active_d() {
    for (var i = 0; i < Qt_bn_ds.length; i++) {
        const Qt_bn_d = Qt_bn_ds[i];
        const Qt_pag_g = Qt_pag_gs[i];
        Qt_bn_d.classList.remove('Qt_active')
        Qt_pag_g.classList.remove('Qt_active')
    }
}


