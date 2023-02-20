'use strict';

const layout = '<div class="notification-cookie__wrapper"><div class="notification-cookie"><p class="notification-cookie__main-text">Wir verwenden Cookies. Wenn Sie weiter unsere Website besuchen, stimmen Sie der Cookie-Nutzung zu.</p><div class="notification-cookie__controls"><a href="https://ru.wikipedia.org/wiki/Cookie" class="notification-cookie__link">Detailiert</a><button class="notification-cookie__button">Akzeptiert</button></div></div></div>';

if (document.cookie === "") {

    function popupCookie() {
        let dateAcceptCookie = new Date();
        let expiresCookie = new Date();
        expiresCookie.getFullYear(expiresCookie.setFullYear(dateAcceptCookie.getFullYear() + 1));
        document.cookie = `notificationCookie=${dateAcceptCookie};expires=${expiresCookie}`;
        let notificationWrapper = document.querySelector(".notification-cookie__wrapper").remove();
    }

    window.onload = function() {
        document.body.insertAdjacentHTML("afterbegin", layout);
        const notificationBtn = document.querySelector(".notification-cookie__button");

        notificationBtn.addEventListener('click', popupCookie);
    }
}
else {
    {};
}