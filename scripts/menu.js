"use strict";

const aboutMeBtn = document.querySelector(".about-me__button-menu");
const aboutMeMenuList = document.querySelector(".about-me__menu-list");
const aboutMeItemList = document.querySelectorAll(".about-me-menu__item-list");
const aboutMeTopLine = document.querySelector(".about-me__top-line");
const aboutMeMiddleLine = document.querySelector(".about-me__middle-line");
const aboutMeBottomLine = document.querySelector(".about-me__bottom-line");

const locateBtn = document.querySelector(".locate__button-menu");
const locateMenuList = document.querySelector(".locate__menu-list");
const locateItemList = document.querySelectorAll(".locate-menu__item-list");
const locateTopLine = document.querySelector(".locate__top-line");
const locateMiddleLine = document.querySelector(".locate__middle-line");
const locateBottomLine = document.querySelector(".locate__bottom-line");

const conclusionBtn = document.querySelector(".conclusion__button-menu");
const conclusionMenuList = document.querySelector(".conclusion__menu-list");
const conclusionItemList = document.querySelectorAll(".conclusion-menu__item-list");
const conclusionTopLine = document.querySelector(".conclusion__top-line");
const conclusionMiddleLine = document.querySelector(".conclusion__middle-line");
const conclusionBottomLine = document.querySelector(".conclusion__bottom-line");

const dataProtectionBtn = document.querySelector(".data-protection__button-menu");
const dataProtectionMenuList = document.querySelector(".data-protection__menu-list");
const dataProtectionItemList = document.querySelectorAll(".data-protection-menu__item-list");
const dataProtectionTopLine = document.querySelector(".data-protection__top-line");
const dataProtectionMiddleLine = document.querySelector(".data-protection__middle-line");
const dataProtectionBottomLine = document.querySelector(".data-protection__bottom-line");

function deleteClass(nameButton, nameMenuList, nameItemList, nameTopLine, nameMiddleLine, nameBottomLine) {
    nameButton.classList.remove("active");
    nameMenuList.classList.replace("menu-list_active", "menu-list_disable");
    for (let elem of nameItemList) {
        elem.classList.replace("item-list_active", "item-list_disable");
    }
    nameTopLine.classList.replace("top-line_active", "top-line_disable");
    nameMiddleLine.classList.replace("middle-line_active", "middle-line_disable");
    nameBottomLine.classList.replace("bottom-line_active", "bottom-line_disable");
}

function changeClass(nameButton, nameMenuList, nameItemList, nameTopLine, nameMiddleLine, nameBottomLine) {
    nameButton.classList.toggle("active");
    if (nameButton.classList.contains("active")) {
        nameMenuList.classList.replace("menu-list_disable", "menu-list_active");
        nameTopLine.classList.replace("top-line_disable", "top-line_active");
        nameMiddleLine.classList.replace("middle-line_disable", "middle-line_active");
        nameBottomLine.classList.replace("bottom-line_disable", "bottom-line_active");
        for (let elem of nameItemList) {
            elem.classList.replace("item-list_disable", "item-list_active");
            elem.onclick = function() {
                deleteClass(nameButton, nameMenuList, nameItemList, nameTopLine, nameMiddleLine, nameBottomLine);
            }
        }
        if (nameButton === locateBtn) {
            const locateTitle = document.querySelector(".locate__title").style.margin = "0px 0px 20px 0px";
        }
    }
    else {
        deleteClass(nameButton, nameMenuList, nameItemList, nameTopLine, nameMiddleLine, nameBottomLine);
    }
}

aboutMeBtn.onclick = function () {
    changeClass(aboutMeBtn, aboutMeMenuList, aboutMeItemList, aboutMeTopLine, aboutMeMiddleLine, aboutMeBottomLine);
    deleteClass(locateBtn, locateMenuList, locateItemList, locateTopLine, locateMiddleLine, locateBottomLine);
    deleteClass(conclusionBtn, conclusionMenuList, conclusionItemList, conclusionTopLine, conclusionMiddleLine, conclusionBottomLine);
    deleteClass(dataProtectionBtn, dataProtectionMenuList, dataProtectionItemList, dataProtectionTopLine, dataProtectionMiddleLine, dataProtectionBottomLine);
}
locateBtn.onclick = function () {
    changeClass(locateBtn, locateMenuList, locateItemList, locateTopLine, locateMiddleLine, locateBottomLine);
    deleteClass(aboutMeBtn, aboutMeMenuList, aboutMeItemList, aboutMeTopLine, aboutMeMiddleLine, aboutMeBottomLine);
    deleteClass(conclusionBtn, conclusionMenuList, conclusionItemList, conclusionTopLine, conclusionMiddleLine, conclusionBottomLine);
    deleteClass(dataProtectionBtn, dataProtectionMenuList, dataProtectionItemList, dataProtectionTopLine, dataProtectionMiddleLine, dataProtectionBottomLine);
}
conclusionBtn.onclick = function () {
    changeClass(conclusionBtn, conclusionMenuList, conclusionItemList, conclusionTopLine, conclusionMiddleLine, conclusionBottomLine);
    deleteClass(aboutMeBtn, aboutMeMenuList, aboutMeItemList, aboutMeTopLine, aboutMeMiddleLine, aboutMeBottomLine);
    deleteClass(locateBtn, locateMenuList, locateItemList, locateTopLine, locateMiddleLine, locateBottomLine);
    deleteClass(dataProtectionBtn, dataProtectionMenuList, dataProtectionItemList, dataProtectionTopLine, dataProtectionMiddleLine, dataProtectionBottomLine);
}
dataProtectionBtn.onclick = function () {
    changeClass(dataProtectionBtn, dataProtectionMenuList, dataProtectionItemList, dataProtectionTopLine, dataProtectionMiddleLine, dataProtectionBottomLine);
    deleteClass(aboutMeBtn, aboutMeMenuList, aboutMeItemList, aboutMeTopLine, aboutMeMiddleLine, aboutMeBottomLine);
    deleteClass(locateBtn, locateMenuList, locateItemList, locateTopLine, locateMiddleLine, locateBottomLine);
    deleteClass(conclusionBtn, conclusionMenuList, conclusionItemList, conclusionTopLine, conclusionMiddleLine, conclusionBottomLine);
}
