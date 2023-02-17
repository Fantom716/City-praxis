const aboutMeBtn = document.querySelector(".about-me__button-menu");
const aboutMeMenuList = document.querySelector(".about-me__menu-list");
const aboutMeItemList = document.querySelectorAll(".about-me-menu__item-list");

const locateBtn = document.querySelector(".locate__button-menu");
const locateMenuList = document.querySelector(".locate__menu-list");
const locateItemList = document.querySelectorAll(".locate-menu__item-list");

const conclusionBtn = document.querySelector(".conclusion__button-menu");
const conclusionMenuList = document.querySelector(".conclusion__menu-list");
const conclusionItemList = document.querySelectorAll(".conclusion-menu__item-list");

const dataProtectionBtn = document.querySelector(".data-protection__button-menu");
const dataProtectionMenuList = document.querySelector(".data-protection__menu-list");
const dataProtectionItemList = document.querySelectorAll(".data-protection-menu__item-list");


function changeClass(nameButton, nameMenuList, nameItemList) {
    nameButton.classList.toggle("active");
    if (nameButton.classList.contains("active")) {
        nameMenuList.classList.replace("menu-list_disable", "menu-list_active");
        for (let elem of nameItemList) {
            elem.classList.replace("item-list_disable", "item-list_active");
        }
    }
    else {
        nameMenuList.classList.replace("menu-list_active", "menu-list_disable");
        for (let elem of nameItemList) {
            elem.classList.replace("item-list_active", "item-list_disable");
        }
    }
}

aboutMeBtn.onclick = function () { changeClass(aboutMeBtn, aboutMeMenuList, aboutMeItemList); }
locateBtn.onclick = function () { changeClass(locateBtn, locateMenuList, locateItemList); }
conclusionBtn.onclick = function () { changeClass(conclusionBtn, conclusionMenuList, conclusionItemList); }
dataProtectionBtn.onclick = function () { changeClass(dataProtectionBtn, dataProtectionMenuList, dataProtectionItemList); }