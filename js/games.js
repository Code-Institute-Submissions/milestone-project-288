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

    const cardArray = [{
            name: "Mgs1",
            img: "assets/images/MGS1.jpg",
        },
        {
            name: "Mgs2",
            img: "assets/images/MGS2.jpg",
        },
        {
            name: "Mgs3",
            img: "assets/images/MGS3.jpg",
        },
        {
            name: "Mgs4",
            img: "assets/images/MGS4.jpg",
        },
        {
            name: "Mgs5",
            img: "assets/images/MGS5.jpg",
        },
        {
            name: "Mgsgz",
            img: "assets/images/MGSGZ.jpg",
        },
        {
            name: "Mgs1",
            img: "assets/images/MGS1.jpg",
        },
        {
            name: "Mgs2",
            img: "assets/images/MGS2.jpg",
        },
        {
            name: "Mgs3",
            img: "assets/images/MGS3.jpg",
        },
        {
            name: "Mgs4",
            img: "assets/images/MGS4.jpg",
        },
        {
            name: "Mgs5",
            img: "assets/images/MGS5.jpg",
        },
        {
            name: "Mgsgz",
            img: "assets/images/MGSGZ.jpg",
        }
    ]

    document.addEventListener('DOMContentLoaded', () => { //once DOM content loads
        //card options
        cardArray.sort(() => 0.5 - Math.random()) //Randomly Sort the cards
        //if true insert grid
        const grid = document.querySelector('.grid') //get grid
        const resultDisplay = document.querySelector('#result')
        let cardsChosen = []
        let cardsChosenId = []
        let cardsWon = []

        //create your board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                const card = document.createElement('img')
                card.setAttribute('src', 'assets/images/foxhound.png') //Setting image
                card.setAttribute('data-id', i) //adding unique ID to each image
                card.addEventListener('click', flipCard) //Adding click event listener to every image
                grid.appendChild(card)
            }
        }

        //check for matches
        function checkForMatch() {
            const cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]

            if (optionOneId == optionTwoId) { // Handle if you click the same img twice 
                cards[optionOneId].setAttribute('src', 'assets/images/foxhound.png')
                cards[optionTwoId].setAttribute('src', 'assets/images/foxhound.png')
                alert('You have clicked the same image!')

            } else if (cardsChosen[0] === cardsChosen[1]) { // Handle match by name: IF MATCH
                //Set cards to Success card
                cards[optionOneId].setAttribute('src', 'assets/images/white.png')
                cards[optionTwoId].setAttribute('src', 'assets/images/white.png')

                //Remove event listeners so you can't click it again
                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionTwoId].removeEventListener('click', flipCard)
                cardsWon.push(cardsChosen)
            } else {
                //No match so set two clicked back to blank card
                cards[optionOneId].setAttribute('src', 'assets/images/foxhound.png')
                cards[optionTwoId].setAttribute('src', 'assets/images/foxhound.png')

                alert('Sorry, try again')
            }

            //reset arrays
            cardsChosen = []
            cardsChosenId = []


            //Increment Score: REDO
            resultDisplay.textContent = cardsWon.length
            if (cardsWon.length === cardArray.length / 2) {
                resultDisplay.textContent = 'Congratulations! You found them all!'
            }
        }

        //flip your card
        function flipCard() {
            let cardId = this.getAttribute('data-id') //The card flipped 
            cardsChosen.push(cardArray[cardId].name) // Add to "Chosen" Line59
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 250) // wait and check if both match
            }
        }

        createBoard()
    })

}