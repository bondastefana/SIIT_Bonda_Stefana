let playerNames = ['John', 'Ana'];

const baseURL = 'http://deckofcardsapi.com/';
let deckID = '';
let newDeckURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

// two intances per round. Used to set the details of the game cards
class Card {
	constructor({ code, image, suit, value }) {
		this.code = code;
		this.image = image;
		this.suit = suit;
		this.value = value;
	}
}

// two instances per round. Used to display set players
class Player {
	constructor(name) {
		this.name = name;
	}
}

let roundCounter = 0;

const showWinner = (winner) => {
	let winnerContainer = document.getElementById('winner');
	winnerContainer.innerHTML = `
		Aaand the winner is: ${winner}
	`;
	let resultContainer = document.getElementsByClassName('result')[0];
	resultContainer.style.display = 'block';

	let gameContainer = document.getElementsByClassName('game-container')[0];
	gameContainer.style.display = 'none';
};

// Used a counter in order to count the rounds played/left. When roundsLeftElement is 0, there will appear a message with the winner/equality.
const incrementCounter = (name) => {
	roundCounter[name] += 1;
	let scoreContainer = document.getElementsByClassName(`score ${name}`)[0];
	scoreContainer.innerHTML = parseInt(scoreContainer.innerHTML) + 1;

	roundCounter += 1;
	let counterElement = document.getElementById('counter');
	counterElement.innerHTML = roundCounter;

	let roundsLeftElement = document.getElementById('rounds-left');
	roundsLeftElement.innerHTML = parseInt(roundsLeftElement.innerHTML) - 1;

	if (parseInt(roundsLeftElement.innerHTML) === 0) {
		let johnScore = parseInt(document.getElementsByClassName('John')[1].innerHTML);
		let anaScore = parseInt(document.getElementsByClassName('Ana')[1].innerHTML);
		console.log(johnScore, anaScore);

		let winner = '';
		if (johnScore > anaScore) {
			winner = 'John';
		} else if (johnScore < anaScore) {
			winner = 'Ana';
		} else {
			winner = 'Equality';
		}

		showWinner(winner);
	}
};

// set players name
const generatePlayerTemplate = (playerName) => {
	let gameContainer = document.getElementsByClassName('game-container')[0];
	let playerContainer = `
	<div
		<div class="${playerName}">${playerName}</div><span class="score ${playerName}">${0}</span>
	</div>
	`;

	gameContainer.insertAdjacentHTML('beforeEnd', playerContainer);
};

const generateCardTemplate = (imageURL, playerName) => {
	let cardImage = `<img class="card" src="${imageURL}"/>`;
	let playerContainer = document.getElementsByClassName(playerName)[0];

	playerContainer.insertAdjacentHTML('beforeEnd', cardImage);
};

// converting the 'string Card' into numbers in order to be compared
const convertStringToNumber = (string) => {
	switch (string) {
		case 'ACE':
			return 11;
		case 'JACK':
			return 2;
		case 'QUEEN':
			return 3;
		case 'KING':
			return 4;
		default:
	}
};

const decideWinner = (roundInfo) => {
	const johnCard = !isNaN(roundInfo[0].value) ? parseInt(roundInfo[0].value) : roundInfo[0].value;
	const anaCard = !isNaN(roundInfo[1].value) ? parseInt(roundInfo[1].value) : roundInfo[1].value;
	const isNumber = johnCard <= 10 && anaCard <= 10;
	const isString = isNaN(johnCard) && isNaN(anaCard);

	if (isNumber) {
		if (johnCard > anaCard) {
			return 'John';
		} else if (anaCard > johnCard) {
			return 'Ana';
		} else {
			return;
		}
	} else if (isString) {
		let johnValue = convertStringToNumber(johnCard);
		let anaValue = convertStringToNumber(anaCard);
		if (johnValue > anaValue) {
			return 'John';
		} else if (anaValue > johnValue) {
			return 'Ana';
		} else {
			return;
		}
	} else if (!isNumber && !isString) {
		if (typeof johnCard === 'string') {
			return 'John';
		} else {
			return 'Ana';
		}
	} else {
		return;
	}
};

window.addEventListener('DOMContentLoaded', () => {
	for (let i = 0; i < playerNames.length; i++) {
		let player = new Player(playerNames[i]);
		generatePlayerTemplate(player.name);
	}

	document.getElementById('counter').innerHTML = 0;
	document.getElementById('rounds-left').innerHTML = 26;
});

function getCards() {
	fetch(newDeckURL, { method: 'GET' })
		.then((response) => response.json())
		.then((parsedResponse) => {
			let deckID = parsedResponse.deck_id;
			return Promise.resolve(deckID);
		})
		.then((deckID) => {
			let drawCardURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`;
			return fetch(drawCardURL);
		})
		.then((response) => response.json())
		.then((parsedResponse) => {
			let roundInfo = [];
			for (let i = 0; i < parsedResponse.cards.length; i++) {
				let cardInfo = parsedResponse.cards[i];
				let card = new Card(cardInfo);
				let name = i === 0 ? 'John' : 'Ana';
				generateCardTemplate(card.image, name);

				let playerInfo = {
					suit: cardInfo.suit,
					value: cardInfo.value,
					playerName: name,
				};
				roundInfo.push(playerInfo);
			}

			const winner = decideWinner(roundInfo);
			incrementCounter(winner);
		});
}
