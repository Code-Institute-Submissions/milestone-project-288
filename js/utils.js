//Utils is for any functions shared across html files

//insertUnderline() detects the page that is active and adds the active class to that nav
//list item. 
export function insertUnderline() {
    let page = window.location.pathname.split("/").pop().split(".");
    document.getElementById(page[0]).classList.add("active");
}
//hamburgerMenu is an anonymous function that handles the animations
//for the hamburger menu on Mobil view
// Tempered fade-in of each link, fade in of burger menu element,
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