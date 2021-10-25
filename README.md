<h1 align="center">The METAL GEAR GAUNTLET</h1>
[Milestone Project](TODO: Link when deployed)

This project is inspired by my love and enjoyment of the [Metal Gear®](https://en.wikipedia.org/wiki/Metal_Gear) series.

The Metal Gear Gauntlet is a website is for fans of the series, or anyone else who needs a 15 minute break from whatever they are focusing on. In the [PLAY](Link to Play) Section, the user will have to run the through a gauntlet of Javascript browser games, to try and claim the top score!
The current live leaderboard can be found here: [Leaderboard](link to leaderboard)

## UX 
Core Audience: 
This site is for anybody looking to burn 15 minutes winding down or anybody looking to reach the top score spot.

The goal of the website: 
The goal of this site is to offer up a multi-game point based gauntlet, built mostly in Javascript to highlight my understanding of the language, and how it can be used for general enjoyment. It also is designed after a game series I’ve enjoyed and would like to convey my appreciation for. 

________________ 
The Design of the Site: 
I wanted a basic design for this site, leaning heavily on the themes and colours from Metal Gear Solid 4: Guns of the Patriots - with the majority of my assets and color schemes being taken directly from the game series. 

_______________
Content Sections; 
Home
- Intro to the site
- Intro to each game
- Intro to the Leaderboard
- Intro to the Contact me section

Play
- codec
- Welcome screen
- Game 1 Rules
- Game 1 wrap-up
- Game 2 Rules
- Game 2 wrap-up
- Game 3 Rules
- Game 3 wrap-up
- Game 4 Rules
- Game 4 wrap-up

Leaderboard
- Pre-loaded Leaderboard table 

Contact 
- Thank you for visiting & get in touch section 
- Form 

WireFrames
![Home Wireframe](images/readme_imgs/wireframe-home.png)
![Play Wireframe](images/readme_imgs/wireframe-play.png)
![Play-Game1 Wireframe](images/readme_imgs/wireframe-play-game1.png)
![Play-Game2 Wireframe](images/readme_imgs/wireframe-play-game2.png)
![Play-Game3 Wireframe](images/readme_imgs/wireframe-play-game3.png)
![Leaderboard Wireframe](images/readme_imgs/wireframe-leaderboard.png)
![Contact Wireframe](images/readme_imgs/wireframe-contact.png)

## Features
Shared
- Timer
- Hamburger Menu 
- Underline Nav-List element
- UpdateCodec

Play
Game 1
Rock Paper Scissors
- LoadGame
- Create Grid (Both player options)
- Display Round Result
- IncreaseScore
- Check Streak

Game 2
Wack-An-Ocelot 
- LoadGame
- Create Grid 
- DisplayRandomOcelot
- IsSpecialCheck
- UpdateScore
- DisplayRaiden

Game 3
Mantis Memory Game 
- Load
- RandomSort (array of pictures)
- Create Grid
- FlipCard
- CheckMatch

Leaderboard
- Fetch Leaderboard
- Sort Leaderboard
- Display Leaderboard 
- Add navigation buttons to Leaderboard Table

Contact
- Contact Me to Discord Webhook
### Existing Features
insertUnderline()

hamburgerMenu()

GetLeaderboard()

UpdateLeaderboard()

### Features Left to Implement
- I would like to add more games. I will likely continue work on this in my own time, adding more MGS Themed javascript-based games such as;
    - Tetris
    - Blackjack (Beat the dealer) 
    - Pacman-like roaming game to collect items 
    - Space invaders styled game themed 

- I would also like to implement a database for the leaderboard, and offer a login and game-history section where the user can see previous scores and attempts. 

## Technologies Used TODO: 
- [HTML](https://www.w3schools.com/html/)
    - The project uses **HTML**.
- [CSS](https://www.w3schools.com/)
    - The project uses **CSS**.
- [Javascript](https://www.javascript.com/)
    - The project uses **Javascript**.
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstap** to simplify the content structure and provide pre-built functionalities such as navigational templates and grid-classes.
- [Jquery](https://jquery.com/)
    - The project uses **Jquery**.
- [Github](https://www.github.com/)
    I used **Githu** as my Version Constrol Software. 
- [Gitpod](https://www.gitpod.io/)
    I used **Gitpod** for active development
- [Balsamiq](https://balsamiq.cloud/)
    I used **Balsamiq** to construct my Wireframes
- [Hexcol](https://hexcol.com/)
    I used **Hexcol** for reviewing color shades and values. 
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    I used **Live Server** with **Gitpod** to ensure live update in my testing environment throughout development. This extension offers an on-save server reload feature, which I use in my everyday work. 

## Testing
#Hamburger menu: 
Issue: 
* I initially had issues resetting the animation for each navigation `<li>` element
```
function hamburgerMenu {
    const burg = document.querySelector(".burgermenu");
    const navElement = document.querySelector(".navlinks");
    const navlinks = document.querySelectorAll(".navlinks li");

    burg.addEventListener('click', () => {
        navElement.classList.toggle("burgeractive");
        navlinks.forEach((link, i) => {
                link.style.animation = `navLinkFade 0.3s ease forwards ${i / 7}s`;
        });
        burg.classList.toggle("toggle")
    });

}

```
Resolved: 
* This was resolved with a conditional statement to reset the style animation to nothing. 3 
```
...hamburgerMenu = () => {
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
```


# Validation Error;
(Html)[https://validator.w3.org/]
(Commit)[]
![htmlValCheck1](images/readme_imgs/htmlvalcheck1.png)
(Commit)[]
![htmlValCheck2](images/readme_imgs/htmlvalcheck2.png)
(Commit)[]
![htmlValCheck3](images/readme_imgs/htmlvalcheck3.png)
(Commit)[]
![htmlValCheck4](images/readme_imgs/htmlvalcheck4.png)
(Commit)[]
![htmlValCheck5](images/readme_imgs/htmlvalcheck5.png)
(Commit)[]
![htmlValCheckFinal](images/readme_imgs/htmlvalcheckFinal.png)

(CSS)[https://jigsaw.w3.org/css-validator/]
(Commit)[]
![cssValCheck1](images/readme_imgs/cssvalcheck1.png)
(Commit)[]
![cssValCheck2](images/readme_imgs/cssvalcheck2.png)
(Commit)[]
![cssValCheck3](images/readme_imgs/cssvalcheck3.png)
(Commit)[]
![csslValCheck4](images/readme_imgs/cssvalcheck4.png)
(Commit)[]
![cssValCheck5](images/readme_imgs/cssvalcheck5.png)
(Commit)[]
![cssValCheckFinal](images/readme_imgs/cssvalcheckFinal.png)

(Javascript)[https://beautifytools.com/javascript-validator.php]
![jsValCheck1](images/readme_imgs/jsvalcheck1.png)

![jsValCheck2](images/readme_imgs/jsvalcheck2.png)

![jsValCheck3](images/readme_imgs/jsvalcheck3.png)

![jsValCheck4](images/readme_imgs/jsvalcheck4.png)

![jsValCheck5](images/readme_imgs/jsvalcheck5.png)

![jsValCheckFinal](images/readme_imgs/jsvalcheckFinal.png)


### Navigation / Hamburger Menu
TODO: 

### Per page-section breakdown (as built)
TODO: 

## Deployment
TODO: Github Pages

### Content
TODO: 

### Media
TODO: 

## images folder
TODO: 

## readme_imgs folder
TODO: 

### Acknowledgements
TODO: 

## Credits
TODO:
https://keycode.info/
