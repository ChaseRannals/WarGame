//Card class inputs the name, suit, and value to the cards.
class Card {
    constructor(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
}
//Deck class has the methods for creating, shuffling, and dealing the cards to players.
class Deck {
    constructor() {
        this.cards = [];
        this.suits = ["Heart", "Club", "Diamond", "Spade"];
        this.names = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.createDeck();
        this.shuffleDeck();
    }

    createDeck() {
        console.log("Creating the deck");
        for (let i = 0; i < this.suits.length; i++) {
            for (let n = 0; n < this.names.length; n++) {
                this.cards.push(new Card(this.suits[i], this.names[n], this.values[n]));
            }
        }
    }

    shuffleDeck() {
        console.log("Shuffling Cards");
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    dealDeck(players, shuffledCards) {
        console.log("Dealing Cards");
        let dealingCards1 = this.cards.splice(0, 26);
        players[0].hands.push(...dealingCards1);
        let dealingCards2 = this.cards.splice(0, 26);
        players[1].hands.push(...dealingCards2);
    }
}
//Gives the players a name and holds thier cards in the this.hands array.
class Players {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.hands = [];
    }
}

class Game {
    constructor() {
        this.players = [];
    }

    start() {
//creates players and deals a new deck.
        this.players.push(new Players("Jack"));
        this.players.push(new Players("Jim"));
        console.log("Lets Play War!!", this.players);

        let myDeck = new Deck();
        myDeck.dealDeck(this.players);
        this.playGame();
        this.endGame();
    }

    playGame() {
//starts game
        console.log("Lets Play!");
        let player1 = this.players[0];
        let player2 = this.players[1];
        let roundWinner = "";
        let turn = 0;

        while (player1.hands.length !== 0 && player2.hands.length !== 0) {
            let player1Card = player1.hands.pop();
            let player2Card = player2.hands.pop();
//determines the winner of the round
            if (player1Card.value > player2Card.value) {
                roundWinner = player1.name;
                player1.points += 1;
                console.log(
                    `Turn: ${(turn +=1)} \nPlayer 1 Card: ${player1Card.name} of ${player1Card.suit}
                    \nPlayer 2 Card: ${player2Card.name} of ${player2Card.suit}`
                );
            } else if (player2Card.value > player1Card.value) {
                roundWinner = player2.name;
                player2.points += 1;
                console.log(
                    `Turn: ${(turn += 1)} \nPlayer 1 Card:  ${player1Card.name} of ${player1Card.suit}
                    \nPlayer 2 Card: ${player2Card.name} of ${player2Card.suit}`
                );
            } else {
                console.log(
                    `Turn: ${(turn += 1)} \nPlayer 1 Card:  ${player1Card.name} of ${player1Card.suit}
                    \nPlayer 2 Card: ${player2Card.name} of ${player2Card.suit}`
                );
            }
        }
    }

    endGame() {
        let gameWinner = "";
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;
//determines the winner of the game.
        if (player1.points > player2.points) {
            gameWinner = player1.name;
            winnerPoints= player1.points;
            alert(
                `Game Over! ${gameWinner} won the duel!  \nFinal Score:\n ${player1.name} : ${player1.points} \nThanks for Playing War!`
            );
        } else if (player2.points > player1.points) {
            gameWinner = player2.name;
            winnerPoints = player2.points;
            alert(
                `Game Over! ${gameWinner} won the duel!  \nFinal Score:\n ${player2.name} : ${player2.points} \nThanks for Playing War!`
            );
        } else {
            alert(`Game Over! \nIt's A Tie!`);
        }
    }
}

let game = new Game();
game.start();
