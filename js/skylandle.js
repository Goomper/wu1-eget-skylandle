const urlParams = new URLSearchParams(window.location.search);
const skylanderValue = urlParams.get('skylander');
const skylander = document.getElementById("#skylander");
const skylanders = ["bash", "boomer", "camo", "chop-chop", "cynder", "dino-rang", "double-trouble", "drill-sergeant", "drobot", "eruptor", "flameslinger", "ghost-roaster", "gill-grunt", "hex", "ignitor", "lightning-rod", "prism-break", "slam-bam", "sonic-boom", "spyro", "stealth-elf", "stump-smash", "sunburn", "terrafin", "trigger-happy", "voodood", "warnado", "wham-shell", "whirlwind", "wrecking-ball", "zap", "zook"]
const gameOverlay = document.getElementById("gameoverlay").style.backgroundColor;


let skylanderLowerCase = skylanderValue.toLowerCase();
const randSkylander = skylanders[Math.floor(Math.random() * 32)];

function validateForm() {
    let x = document.forms["skylanderinput"]["skylander"].value.toLowerCase();
    if (x == "") {
        alert("Name must be filled out");
      return false;
    } else if (skylanders.includes(x) == false) {
        alert("Invalid skylander");
        return false;
    }
  }

console.log(skylanderLowerCase)
console.log(randSkylander.toLowerCase())

const games = ["spyros-adventure", "giants", "swap-force", "trap-team", "super-chargers", "imaginators"]
const elements = ["water", "fire", "earth", "life", "death", "technology", "wind", "magic", "light", "dark"]
const types = ["normal", "giant", "swap-force", "trap-master", "mini", "supercharger", "veichle", "skylander-sensei", "villain-sensei", "chase-variant", "in-game-variant", "lightcore"]
const series = ["series 1", "series 2", "series 3", "series 4", "series 5"]

if (skylanders.includes(skylanderLowerCase)) {
    console.log(skylanderLowerCase)
} else {
    let ERROR = document.getElementsByClassName("ERROR");
    ERROR.textContent += "ERROR";
}

class skylanderClass {
    constructor(game, element, type, variant) {
        this.skylandersGame = games[game];
        this.skylandersElement = elements[element];
        this.skylandersType = types[type];
        this.skylandersVariant = series[variant];
    }
    gamevalue() {
        return this.skylandersGame;
        
    }
    elementvalue() {
        this.skylandersElement;
    }
    typevalue() {
        this.skylandersType;
    }
    variantvalue() {
        this.skylandersVariant;
    }
}


let currentSkylanderAnswer = new skylanderClass("0", "0", "trap-team", "none");

console.log(currentSkylanderAnswer.gamevalue());
console.log(currentSkylanderAnswer.elementvalue());
console.log(currentSkylanderAnswer.typevalue());
console.log(currentSkylanderAnswer.variantvalue());