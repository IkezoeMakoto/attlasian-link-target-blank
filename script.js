window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);

    function jsLoaded() {
        if (document.querySelector('a') != null) {
            clearInterval(jsInitCheckTimer);
            const host = getHost();
            bulkAddTargetBlank(https, host);
            bulkAddTargetBlank(http, host);
        }
    }

    const bulkAddTargetBlank = (proto, host) => {
        urlSelector(proto('')).not(urlSelector(proto(host))).each((_, e) => {
            addTargetBlank(e);
        });
    };

    const urlSelector = (s) => {
        return $(aTagSelector(selectorEscape(s)));
    };

    const aTagSelector = (s) => {
        return 'a[href^=' + s + ']';
    };

    const http = (host) => {
        return 'http://' + host;
    };

    const https = (host) => {
        return 'https://' + host;
    };

    const getHost = () => {
        return location.host;
    };

    /**
     * @param e element
     */
    const addTargetBlank = (e) => {
        // 削除してから追加しないと正しく追加されない
        $(e).removeAttr('target');
        $(e).attr('target', '_blank');
    };

    /**
     * @param {string} s
     * @returns {string}
     */
    const selectorEscape = (s) => {
        return s.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, '\\$&');
    };
}
