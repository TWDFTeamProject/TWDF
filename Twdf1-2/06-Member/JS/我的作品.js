var WK_bn_ts = document.querySelectorAll('.WK_bn_t')
var WK_pages = document.querySelectorAll('.WK_page')

for (var i = 0; i < WK_bn_ts.length; i++) {

    const WK_bn_t = WK_bn_ts[i];
    const WK_page = WK_pages[i];

    WK_bn_t.onclick = function () {
        remove_WK_active()

        WK_bn_t.classList.add('WK_active')
        WK_page.classList.add('WK_active')
    }
}

function remove_WK_active() {
    for (var i = 0; i < WK_bn_ts.length; i++) {
        const WK_bn_t = WK_bn_ts[i];
        const WK_page = WK_pages[i];

        WK_bn_t.classList.remove('WK_active')
        WK_page.classList.remove('WK_active')
    }
}


var WK_bn_ds = document.querySelectorAll('.WK_bn_d')
var WK_pages = document.querySelectorAll('.WK_page')

for (var i = 0; i < WK_bn_ds.length; i++) {

    const WK_bn_d = WK_bn_ds[i];
    const WK_page = WK_pages[i];

    WK_bn_d.onclick = function () {
        remove_WK_active()

        WK_bn_d.classList.add('WK_active')
        WK_page.classList.add('WK_active')
    }
}

function remove_WK_active() {
    for (var i = 0; i < WK_bn_ds.length; i++) {
        const WK_bn_d = WK_bn_ds[i];
        const WK_page = WK_pages[i];

        WK_bn_d.classList.remove('WK_active')
        WK_page.classList.remove('WK_active')
    }
}
