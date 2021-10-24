<h1 align="center">The METAL GEAR GAUNTLET</h1>
[Milestone Project](TODO: Link when deployed)

This project is inspired by my love and enjoyment of the [Metal Gear®](https://en.wikipedia.org/wiki/Metal_Gear) series.

The Metal Gear Gauntlet is a website is for fans of the series, or anyone else who needs a 15 minute break from whatever they are focusing on. In the [PLAY](Link to Play) Section, the user will have to run the through a gauntlet of Javascript browser games, to try and claim the top score!
The current live leaderboard can be found here: [Leaderboard](link to leaderboard)

## UX 
TODO: Design
TODO: WireFrames
TODO: User stories (First time? Returning Guest? Frequent Guest?)

### {Interesting Functionalty highlight?}
TODO: 
## Features
TODO: 

### Existing Features
TODO: DOM, API, Form Validation etc...

insertUnderline()
hamburgerMenu()

GetLeaderboard()
UpdateLeaderboard()

### Features Left to Implement
- Javascript driven underlining of active page nav-element


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
- [Google Fonts]()
- [Github]()
- [Balsamiq]()
- [Hexcol](https://hexcol.com/)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
    I used Live Server with Gitpod and Vs Code desktop to ensure live update in my testing environment throughout development. This extension offers an on-save server reload feature, which I use in my everyday work. 

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
TODO: Html

TODO: CSS

TODO: Javascript

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
