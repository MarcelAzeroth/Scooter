//Navbar Menu.
const hamburger = document.querySelector(".navbar__hamburger img");
const sidebar = document.querySelector(".navbar__menu-box");
const body = document.querySelector("body")


    //Handle click event on menu button.
    hamburger.addEventListener("click", () => {
        if(hamburger.getAttribute("src") === "./assets/icons/hamburger.svg"){
            hamburger.setAttribute("src", "./assets/icons/close.svg");
            sidebar.classList.remove("hide");
            body.classList.add("overflow");
            return;
        }

        hamburger.setAttribute("src", "./assets/icons/hamburger.svg");
        sidebar.classList.add("hide");
        body.classList.remove("overflow");
    })

    //Handle click event shadow realm.
    const shadow = document.querySelector(".navbar__menu-box__shadowrealm")
    shadow.addEventListener("click", ()=> {
        hamburger.setAttribute("src", "./assets/icons/hamburger.svg");
        sidebar.classList.add("hide");
        body.classList.remove("overflow");
    })

//FAQs.
const questionBoxes = document.querySelectorAll(".faq__section__item")

    questionBoxes.forEach(qBox => {
        qBox.addEventListener("click", event => {
            let box = event.currentTarget;
            box.querySelector(".faq__section__item__answer").classList.toggle("hide");
            box.querySelector(".faq__section__item__question").classList.toggle("bottom-margin");
            box.querySelector(".faq__section__item__question img").classList.toggle("rotate")
        })
    })

//Set map on Locations depending on screensize.
const worldMap = document.querySelector(".locations__info__item__picture img")

document.addEventListener("DOMContentLoaded", () => {
    let screenSize = window.innerWidth;

    if(screenSize >= 768 && screenSize < 1440){
        worldMap.setAttribute("src", "./assets/images/world-map-tablet.png");
    }
    if(screenSize >= 1440){
        worldMap.setAttribute("src", "./assets/images/world-map-desktop.png")
    }
})