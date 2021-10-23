//insertUnderline() detects the page that is active and adds the active class to that nav
//list item. 
function insertUnderline() {
    let page = window.location.pathname.split("/").pop().split(".");
    document.getElementById(page[0]).classList.add("active");
}

insertUnderline()