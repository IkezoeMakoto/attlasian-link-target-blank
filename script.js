window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    function jsLoaded() {
        if (document.querySelector('a') != null) {
            clearInterval(jsInitCheckTimer);
            $("a[href^=https\\:\\/\\/]").not($("a[href^=https\\:\\/\\/sample\\.jp]")).each((_, e) => {
                $(e).attr('target', '_blank');
            });
        }
    }
}