let JSONBinEndpoint = "https://api.jsonbin.io/v3/b/616b18089548541c29c419c8/"
let tkn = '$2b$10$TFvMDeo9hgI5wq3utUw5x.BQTV1LZSxuqRXlSUqrtnffRkOL3fEmu'

let CurrentLoadedScoreboard = []

export function GetScores() {



    fetch(JSONBinEndpoint + "latest", {
        headers: {
            'X-Master-Key': tkn
        },
    }).then(res => res.json()).then(data => {
        CurrentLoadedScoreboard = extractScores(data)
        console.log(CurrentLoadedScoreboard);

        CurrentLoadedScoreboard.sort((a, b) => {
            return (b.score - a.score)
        })

        loadTable(CurrentLoadedScoreboard)
        return data
    }).catch(err => console.log(err))
}

export function UpdateScores(scoreObj) {

    CurrentLoadedScoreboard.push(scoreObj);

    fetch(JSONBinEndpoint, {
        method: "PUT",
        headers: {
            'X-Master-Key': tkn,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(CurrentLoadedScoreboard)
    }).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(err => console.log(err))
}

function loadTable(data) {
    //let table = document.getElementsByClassName("leaderboardtable")
    let table = document.getElementById("leaderboardtable");
    console.log(table.rows.length)
    for (let i = table.rows.length - 1; i >= 1; i--) {
        table.deleteRow(i);
    }

    for (let i = 9; i !== -1; i--) {
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = `${i+1}`;
        cell2.innerHTML = `${data[i].username}`;
        cell3.innerHTML = `${data[i].score}`;
    }
}


function extractScores(data) {
    return data.record
}