const gameButton = document.querySelector('#guess-button');

function togame() {
    window.location.assign("http://127.0.0.1:5500/game.html")
}

gameButton.addEventListener('click', () => {
    togame();
})