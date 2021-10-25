import {
    insertUnderline,
    hamburgerMenu
} from "./utils.js";
import {
    GetScores,
    UpdateScores
} from "./leaderboard.js";

document.addEventListener('DOMContentLoaded', () => {
    //Shared
    getActivePage();
    insertUnderline();
    hamburgerMenu();
})

function buildPage(page) {
    if (page[0] === "home") {
        console.log(page[0]);

    } else if (page[0] === "play") {
        console.log(page[0]);

    } else if (page[0] === "leaderboard") {
        GetScores()
        console.log(page[0]);
    } else if (page[0] === "contact") {
        console.log(page[0]);
    }
}

function getActivePage() {
    let page = window.location.pathname.split("/").pop().split(".");
    buildPage(page)
}

function test(e) {
    if (e.keyCode === 49) {
        let temp = {
            username: "JimDoe1",
            score: "1101"
        }
        UpdateScores(temp);
    }
    if (e.keyCode === 50) {
        GetScores();

    }
}

document.addEventListener("keyup", test);