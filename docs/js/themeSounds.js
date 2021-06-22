window.addEventListener('load', (event) => {
    console.log('The music theme is loaded');
});

const victorySound = new Audio('./sounds/safari_theme.mp3');

addEventListener("mouseover", playTheme, victorySound);
addEventListener("mouseout", stopTheme, victorySound);

function playTheme() {
    victorySound.play();
    console.log("Music theme activated!");
}

function stopTheme() {
    victorySound.play
    console.log("Music theme activated!");
}   