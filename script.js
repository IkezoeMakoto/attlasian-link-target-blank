$(() => {
    window.addEventListener("load", main, false);

    function main(e) {
        const jsInitCheckTimer = setInterval(jsLoaded, 1000);

        function jsLoaded() {
            if (document.querySelector('a') != null) {
                clearInterval(jsInitCheckTimer);

                const $origin = $(selectorEscape(aTagSelector(httpsUrl(getHost()))));
                const $https = $(selectorEscape(aTagSelector(httpsUrl())));
                const $http = $(selectorEscape(aTagSelector(httpUrl())));
                $https.not($origin).each((_, e) => {
                    addTargetBlank(e);
                });
                $http.not($origin).each((_, e) => {
                    addTargetBlank(e);
                });
            }
        }
    }

    aTagSelector = (s) => {
        return 'a[href^=' + s + ']';
    };

    httpUrl = (host) => {
        return 'http://' + host;
    };

    httpsUrl = (host) => {
        return 'https://' + host;
    };

    getHost = () => {
        return location.host;
    };

    /**
     * @param e element
     */
    addTargetBlank = (e) => {
        // 削除してから追加しないと正しく追加されない
        $(e).removeAttr('target');
        $(e).attr('target', '_blank');
    };

    /**
     * @param {string} s
     * @returns {string}
     */
    selectorEscape = (s) => {
        return s.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, '\\$&');
    };
});