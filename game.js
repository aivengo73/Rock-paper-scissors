'use strict';
(() => {
	// const FIGURES_ENG = ['rock', 'scissors', 'paper'];
	const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

	const verifyResponseString = (str) => {
	return	FIGURES_RUS.includes(str.toLocaleLowerCase());
	};
	const game = () => {
		const result = {
			player: 0,
			computer: 0,
			tie: 0,
			get newComputer() {
				result.computer;
			},
			get newPlayer() {
				result.player;
			},
		};

		//функция формирующая случайный ответ компьютера
		const getRandomIntInclusive = () => {
			return FIGURES_RUS[Math.floor(Math.random() * FIGURES_RUS.length)];
		};
    // фнкция принимающая ответ от пользователя
		const askPlayer = () => {
			let player = prompt('камень, ножницы, бумага?');

			if (player === null) {
				askExit();
			}
		
		 if (verifyResponseString(player)) {
				return player.toLowerCase();	
			} else {
				alert('Введите камень, ножницы, бумага');
				return askPlayer();
			}
		};
    // функция для выхода из программы
		function askExit() {
			const exit = confirm('Точно хотите выйти?');
			if (exit) {
				alert(`Ваши очки: ${result.player} \nКомпьютер: ${result.computer}`);
				return;
			} else {
				start();
			}
		};

		//функция сравнивает ответы пользователя и компьютера, показывает результат игры
		const compareResponses = (computerVariant, userVariant) => {

			if (userVariant === computerVariant) {
				alert(`Компьютер: ${computerVariant} \nВы: ${userVariant}\n \nНичья`);
				result.tie++;
			}
			else if (
				(userVariant === 'камень' && computerVariant === 'ножницы') || 
				(userVariant === 'бумага' && computerVariant === 'камень') ||
				(userVariant === 'ножницы' && computerVariant === 'бумага')
			) {
				alert(`Компьютер: ${computerVariant} \nВы: ${userVariant} \n \nВы: выиграли`);
				result.player++;

			} else if (
				(userVariant === 'камень' && computerVariant === 'бумага') || 
				(userVariant === 'бумага' && computerVariant === 'ножницы') ||
				(userVariant === 'ножницы' && computerVariant === 'камень')
			) {
				alert(`Компьютер: ${computerVariant} \nВы: ${userVariant} \n \nКомпьютер: выиграл`);
				result.computer++
			} 
		};
		//функция старта игры
		return function start() {
			const computerVariant = getRandomIntInclusive(FIGURES_RUS);
			console.log(computerVariant);
			
			let userVariant = askPlayer();
			const resultGame = compareResponses(computerVariant, userVariant);
			result[resultGame]++;
			
			if (userVariant === null) {
				askExit();
			}

			if (typeof userVariant === 'string') {
				const askMore = confirm('Ещё?')
				if (!askMore) {
					alert(`Ваши очки: ${result.player} \nКомпьютер: ${result.computer}`);
					return;
				} else {
					start();
				}
			}
		}
		
	};
	
	window.rps = game;
})();







