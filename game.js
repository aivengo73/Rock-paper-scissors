'use strict';
(() => {
	const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
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

		//функция формирующая ответ игрока
		const askPlayer = () => {
			let player = prompt('камень, ножницы, бумага?');
			return player.toLowerCase();
		};

		//Вспомогательная функция для обработки выхода из игры
		const askExit = () => {
			const exit = confirm('Точно хотите выйти?');
			if (exit) {
				alert(`Ваши очки: ${result.player} \n Компьютер: ${result.computer}`);
				console.log(`Ваши очки: ${result.player} \nКомпьютер: ${result.computer}`);
				
				return
			} else {
				start();
			}
		};

		//функция сравнивает ответы пользователя и компьютера, показывает результат игры
		const compareResponses = (computerVariant, userVariant) => {
			if (userVariant === null) {
				return;
			}
			if (userVariant === computerVariant) {
				alert(`Компьютер: ${computerVariant} \n Вы: ${userVariant} \n Ничья`);
				result.tie++;
			}
			else if (
				(userVariant === 'камень' && computerVariant === 'ножницы') || 
				(userVariant === 'бумага' && computerVariant === 'камень') ||
				(userVariant === 'ножницы' && computerVariant === 'бумага')
			) {
				alert(`Компьютер: ${computerVariant} \n Вы: ${userVariant} \n Вы: выграли`);
				result.player++;

			} else if (
				(userVariant === 'камень' && computerVariant === 'бумага') || 
				(userVariant === 'бумага' && computerVariant === 'ножницы') ||
				(userVariant === 'ножницы' && computerVariant === 'камень')
			) {
				alert(`Компьютер: ${computerVariant} \n Вы: ${userVariant} \n Компьютер: выграл`);
				result.computer++
			} else {
				alert (`Введите камень, ножницы, бумага`);
			}
		};

		//функция старта игры
		return function start() {
			const computerVariant = getRandomIntInclusive(FIGURES_RUS);
			console.log('Компьютер: ', computerVariant);
			let userVariant = askPlayer();
			console.log('Игрок: ', userVariant);
			
			const resultGame = compareResponses(computerVariant, userVariant);
			result[resultGame]++;
			console.log('Результат:',result);
			

			if (userVariant === null) {
				askExit();
			}
			const askMore = confirm('Ещё?')
			if (!askMore) {
				askExit();
			} else {
				start();
			}
		};
		
	};
	
	window.rps = game;
})();






