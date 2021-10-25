export const Game1RockPapScis = () => {
    console.log("Running");
    const choices = [{
            val: "rock",
            imgpath: "assets/images/rock.png"
        },
        {
            val: "paper",
            imgpath: "assets/images/paper.png"
        },
        {
            val: "scissors",
            imgpath: "assets/images/scissors.png"
        }
    ]
    let enemyChoices = [];

    //  let streak = 0
    let userscore = 0
    let enemyscore = 0

    function checkWinner(playerChoice, enemyChoice) {
        if (playerChoice === enemyChoice) {
            return "Draw!"
        } else {

            if (playerChoice === "rock" && enemyChoice === "scissors") {
                userscore++
                return "You Win!"
            } else if (enemyChoice === "rock" && playerChoice === "scissors") {
                enemyscore++
                return "Enemy Wins!"

            } else if (playerChoice === "scissors" && enemyChoice === "paper") {
                userscore++
                return "You Win!"
            } else if (enemyChoice === "scissors" && playerChoice === "paper") {
                enemyscore++
                return "Enemy Wins!"

            } else if (playerChoice === "paper" && enemyChoice === "rock") {
                userscore++
                return "You Win!"
            } else if (enemyChoice === "paper" && playerChoice === "rock") {
                enemyscore++
                return "Enemy Wins!"
            }
        }
    }

    function logUserChoice() {
        let enemyChoice = logEnemyChoice()

        let res = document.getElementById("result").innerHTML = ""
        let result = checkWinner(this.title, enemyChoice)
        res = document.getElementById("result")

        let enemyRes = document.createElement("h3");
        enemyRes.setAttribute("id", "enemychoice")
        res.appendChild(enemyRes)
        enemyRes.innerText = "Enemy Choice: " + enemyChoice

        let userRes = document.createElement("h3");
        userRes.setAttribute("id", "userchoice")
        res.appendChild(userRes)
        userRes.innerText = "User Choice: " + this.title

        let userScore = document.createElement("h3");
        userScore.setAttribute("id", "userscore")
        res.appendChild(userScore)
        userScore.innerText = "User: Score: " + userscore


        let enemyScore = document.createElement("h3");
        enemyScore.setAttribute("id", "enemyscore")
        res.appendChild(enemyScore)
        enemyScore.innerText = "Enemy Score: " + enemyscore

        let winner = document.createElement("h3");
        winner.setAttribute("id", "Winner: ")
        res.appendChild(winner)
        winner.innerText = result
    }

    function logEnemyChoice() {
        return enemyChoices[Math.floor(Math.random() * enemyChoices.length)]
    }

    function setOptions(element) {
        let e = document.getElementById(element)
        for (let i = 0; i < choices.length; i++) {

            const option = document.createElement("div");
            const img = document.createElement("img");

            img.src = choices[i].imgpath
            img.title = choices[i].val

            option.appendChild(img)
            option.setAttribute("id", choices[i].val)
            e.appendChild(option)

            if (element === "user") {
                img.addEventListener("click", logUserChoice, this);
                enemyChoices.push(choices[i].val)
            }
        }
    }

    function setPlayerOptions() {
        setOptions("user");
        setOptions("enemy");
    }

    setPlayerOptions()
}

export const Game2WhackAnOcelot = () => {
    //To Do
}

export const Game3MantisMemory = () => {
    const cardArray = [{}]

}