const togameButton = document.querySelector('#togame-button');

function togame() {
    window.location.assign("http://127.0.0.1:5500/game.html")
}

togameButton.addEventListener('click', () => {
    togame();
})