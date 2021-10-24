//Utilities is for functions shared across games/files

//insertUnderline() detects the page that is active and adds the active class to that nav
//list item. 
export function insertUnderline() {
    let page = window.location.pathname.split("/").pop().split(".");
    document.getElementById(page[0]).classList.add("active");
}

//hamburgerMenu is an anonymous function that handles the animations
// for the hamburger menu on Mobil view
//Tempered fade-in of each link, fade in of burger menu element,
// and toggling the toggle class on the hamburger lines 
export const hamburgerMenu = () => {
    const burg = document.querySelector(".burgermenu");
    const navElement = document.querySelector(".navlinks");
    const navlinks = document.querySelectorAll(".navlinks li");

    burg.addEventListener('click', () => {
        navElement.classList.toggle("burgeractive");

        navlinks.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.3s ease forwards ${i / 7 + 0.4}s`;
            }
        });
        burg.classList.toggle("toggle")
    });
}

//Timer() populates to countdown element while a game is running

export function Timer(time, interval) {
    //Get Timer Element

    //SetTimeout -> 1000
    //  Compare time to interval 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    //  Update timer element with value until interval is complete
}