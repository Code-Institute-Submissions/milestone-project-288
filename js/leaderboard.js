export function UpdateScoreBoard(score) {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
        }
    };

    req.open("PUT", "https://api.jsonbin.io/v3/b/616b18089548541c29c419c8", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$TFvMDeo9hgI5wq3utUw5x.BQTV1LZSxuqRXlSUqrtnffRkOL3fEmu");
    req.send(``);
}

export function GetScoreBoard() {
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
            let resp = req.responseText
            return resp
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/616b18089548541c29c419c8/latest", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2b$10$TFvMDeo9hgI5wq3utUw5x.BQTV1LZSxuqRXlSUqrtnffRkOL3fEmu");
    req.setRequestHeader("X-BIN-META", "FALSE");
    req.send();
}