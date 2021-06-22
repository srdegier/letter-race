// Checks if script is running
window.addEventListener('load', (event) => {
    console.log('The music theme is loaded');
});
// Plays sound if player hovers or stops hovering over either the image or the button. Note: only works if user has click the image due to Chrome limitations 
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