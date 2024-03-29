var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0; // A, 2 + K -> 1 + 2 + 10

var hidden;
var deck; 

var canHit = true; // allows the player to draw while playerSum <= 21

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); // A-D -> K - D, A-C -> K-C
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0 - 1) * 52 => (0 - 52)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

function startGame() {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
}

function getValue(card) {
    let data = card.split("-"); // "4-C" -> ["4", "C"]
    let value = data[0];

    if (isNaN(value)) { // A J Q K
        if (value == "A") {
            return 11;
        } else {
            return 10;
        }
    }
    return parseInt(value);
}