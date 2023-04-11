class nickname {

	constructor(){
	this.playerName = "You";
	this.botName = "BOT(ak)";
	this.playerOption;
	this.botOption;
	this.winner;
	}

	set setPlayerOption(pilihan) {
		this.playerOption = pilihan;
	}

	get getPlayerOption() {
		return this.playerOption;
	}

	set setBotOption(pilihan) {
		this.botOption = pilihan;
	}

	get getBotOption() {
		return this.botOption;
	}

	pilihanBot(){
		const pilihan =["✌️", "🤚", "✊"];
		const bot = pilihan [Math.floor(Math.random() * pilihan.length)];
		return bot; 
	}

	winner(){
		if (this.botOption == "✌️" && this.playerOption == "🤚") {
				return this.winner = this.botName
		}if (this.botOption == "✌️" && this.playerOption == "✊") {
				return this.winner = this.playerName
		}if (this.botOption == "🤚" && this.playerOption == "✊") {
				return this.winner = this.botName
		}if (this.botOption == "🤚" && this.playerOption == "✌️") {
				return this.winner = this.playerName
		}if (this.botOption == "✊" && this.playerOption == "✌️") {
				return this.winner = this.botName
		}if (this.botOption == "✊" && this.playerOption == "🤚") {
				return this.winner = this.playerName
		}else {
			return this.winner = "SERI";
		}
	}

	hasil() {
		if (this.winner != "SERI") {
			return `${this.winner}, WIN`;
		} else {
			return `DRAW`;
		}
	}


}

function pilihan(hand) {
	const mulai = new nickname();
	mulai.setPlayerOption = hand;
	mulai.setBotOption = mulai.pilihanBot();
	mulai.winner();
	judul.style.color = 'yellow';
	judul.textContent = judul.style.color;
	judul.textContent = `⚔️`;
	result.style.color = 'yellow';
	result.textContent = result.style.color; 
	result.textContent = `...`;


	setTimeout(() => {
		judul.style.color = 'yellow';
		judul.textContent = judul.style.color;
		judul.textContent = `${mulai.getPlayerOption} VS ${mulai.getBotOption}`;
		result.style.color = 'yellow';
		result.textContent = result.style.color; 
		result.textContent = mulai.hasil();
	}, 1500);
}