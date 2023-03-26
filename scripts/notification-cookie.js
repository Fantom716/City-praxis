'use strict';

const layoutCookie = '<div id="cookie" class="n-c__wrapper"><div class="n-c"> <p class="n-c__main-text">Wir verwenden Cookies. Wenn Sie weiter unsere Websitebesuchen, stimmen Sie der Cookie-Nutzung zu.</p><div class="n-c__controls"><a href="https://ru.wikipedia.org/wiki/Cookie" class="n-c__link">Detailiert</a><button class="n-c__button_agreement n-c__button">Akzeptiert</button><button class="n-c__button_refusal n-c__button">Verweigern</button></></div></div>';
const checkCookie = document.cookie.split("; ").find((row) => row.startsWith("notificationCookie"));

if (checkCookie === undefined) {

    window.onload = function() {
        document.body.insertAdjacentHTML("beforeend", layoutCookie);
        const notifiAgreeBtn = document.querySelector(".n-c__button_agreement");
        const notifiRefuseBtn = document.querySelector('.n-c__button_refusal');
        const cookieNotification = document.querySelector("#cookie");
        const notificationWrapper = document.querySelector(".n-c__wrapper");

        notifiAgreeBtn.addEventListener('click', () => {

            let dateAcceptCookie = new Date();
            let expiresCookie = new Date();

            expiresCookie.getFullYear(expiresCookie.setFullYear(dateAcceptCookie.getFullYear() + 1));
            document.cookie = `notificationCookie=${dateAcceptCookie};expires=${expiresCookie};samesite=lax`;
            notificationWrapper.classList.add("n-c-hide");
            setTimeout(() => { cookieNotification.remove() }, 1000);
        });

        notifiRefuseBtn.addEventListener('click', () => {
            notificationWrapper.classList.add("n-c-hide");
            setTimeout(() => { cookieNotification.remove() }, 1000);
        })
    }
} else {
    {};
}