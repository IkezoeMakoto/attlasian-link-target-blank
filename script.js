window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    function jsLoaded() {
        if (document.querySelector('a') != null) {
            clearInterval(jsInitCheckTimer);
            const $origin = $("a[href^=https\\:\\/\\/sample\\.jp]");
            const $https = $("a[href^=https\\:\\/\\/]");
            const $http = $("a[href^=http\\:\\/\\/]");
            $https.not($origin).each((_, e) => {
                addTargetBlank(e);
            });
            $http.not($origin).each((_, e) => {
                addTargetBlank(e);
            });
        }
    }
}

/**
 * @param e element
 */
addTargetBlank = (e) => {
    // 削除してから追加しないと正しく追加されない
    $(e).removeAttr('target');
    $(e).attr('target', '_blank');
};