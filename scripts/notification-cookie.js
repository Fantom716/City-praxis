'use strict';

const layout = '<div id="cookie" class="n-c__wrapper"><div class="n-c"><p class="n-c__main-text">Wir verwenden Cookies. Wenn Sie weiter unsere Website besuchen, stimmen Sie der Cookie-Nutzung zu.</p><div class="n-c__controls"><a href="https://ru.wikipedia.org/wiki/Cookie" class="n-c__link">Detailiert</a><button class="n-c__button">Akzeptiert</button></div></div></div>';
const checkCookie = document.cookie.split("; ").find((row) => row.startsWith("notificationCookie"));

if (checkCookie === undefined) {

    window.onload = function() {
        document.body.insertAdjacentHTML("afterbegin", layout);
        const notificationBtn = document.querySelector(".n-c__button");

        notificationBtn.addEventListener('click', popupCookie);
    }

    function popupCookie() {
        let dateAcceptCookie = new Date();
        let expiresCookie = new Date();
        expiresCookie.getFullYear(expiresCookie.setFullYear(dateAcceptCookie.getFullYear() + 1));
        document.cookie = `notificationCookie=${dateAcceptCookie};expires=${expiresCookie};samesite=lax`;
        const notificationWrapper = document.querySelector(".n-c__wrapper").classList.add("n-c-hide");
        const cookie = document.querySelector("#cookie")
        setTimeout(() => { cookie.remove() }, 1000);
    }
} else {
    {};
}