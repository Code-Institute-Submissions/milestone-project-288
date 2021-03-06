import {
    insertUnderline,
    hamburgerMenu
} from "./utils.js";
import {
    GetScores,
    UpdateScores
} from "./leaderboard.js";
import {
    Game1RockPapScis
} from "./games.js"

//let playerscore = 0;
//let gamescore = 0;


document.addEventListener('DOMContentLoaded', () => {
    //Shared
    getActivePage();
    hamburgerMenu();
})

function buildPage(page) {
    if (page[0] === "home") {
        console.log(page[0]);
        insertUnderline(page[0]);
    } else if (page[0] === "play") {
        console.log(page[0]);
        insertUnderline(page[0]);
        LoadGames();
    } else if (page[0] === "leaderboard") {
        console.log(page[0]);
        insertUnderline(page[0]);
        GetScores()
    } else if (page[0] === "contact") {
        console.log(page[0]);
        insertUnderline(page[0]);
        ContactForm()
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
//ContactForm() handles majority of the validation and checks on the contact form
function ContactForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let text = document.getElementById("message");
    let myform = document.getElementById("myform");
    let errElement = document.getElementById("errmsg");

    myform.addEventListener("submit", (e) => {
        let errs = []
        if (name.value === "" || email.value == null) {
            errs.push("Name is required!");
        }
        if (email.value === "" || email.value == null) {
            errs.push("Email is required!");
        }
        if (text.value === "" || text.value == null) {
            errs.push("A message is required!");
        }
        if (!validateEmail(email.value)) errs.push("Invalid Email Address!");

        if (errs.length > 0) {
            e.preventDefault();
            errElement.innerHTML = `<p>${errs.join(", ")}</p>`
            errElement.style.padding = "10px";
            errElement.style.display = "block";
        } else if (errs.length == 0) {
            e.preventDefault();
            console.log(name.value);
            console.log(email.value);
            console.log(text.value);
            console.log("Submitted:");
            name.value = '';
            email.value = '';
            text.value = '';
            errElement.style.display = "none";
        }


    });
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



function LoadGames() {
    //Loadingbar
    let isloading = false

    document.getElementById("game").addEventListener("click", function() {
        if (!isloading) {
            isloading = true
            let loading = document.createElement("div")
            loading.classList.add("loader");

            game.appendChild(loading)

            setTimeout(function() {
                loading.remove();
                isloading = false
            }, 10000);
        }
    });

    let gp = document.getElementsByClassName("gamepane");
    let udiv = document.createElement("div");
    let ediv = document.createElement("div");
    udiv.classList.add("user");
    ediv.classList.add("enemy");

    // Game1RockPapScis()
}