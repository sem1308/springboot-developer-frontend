function searchParam(key) {
    return new URLSearchParams(location.search).get(key);
}

// 쿠키를 가져오는 함수
function getCookie(key) {
    let result = null;
    let cookie = document.cookie.split(";");

    cookie.some(function (item) {
        item = item.replace(" ", "");

        let dic = item.split("=");

        if (key === dic[0]) {
            result = dic[1];
            return true;
        }
    });

    return result;
}

export {
    searchParam,
    getCookie
}