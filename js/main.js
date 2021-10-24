import {
    insertUnderline,
    hamburgerMenu
} from "./utils.js";
import {
    GetScoreBoard,
    //UpdateScoreBoard
} from "./leaderboard.js";

insertUnderline()
hamburgerMenu()
let scoreboardData = GetScoreBoard()

if (scoreboardData) console.log(scoreboardData);