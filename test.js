const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function askQuestion(query) {
	return new Promise(resolve => rl.question(query, resolve));
}

async function calculator() {
	while (true) {
		const num1 = parseFloat(await askQuestion('Ingrese el primer número: '));
		const operator = await askQuestion('Ingrese el operador (+, -, *, /): ');
		const num2 = parseFloat(await askQuestion('Ingrese el segundo número: '));

		let result;
		switch (operator) {
			case '+':
				result = num1 + num2;
				break;
			case '-':
				result = num1 - num2;
				break;
			case '*':
				result = num1 * num2;
				break;
			case '/':
				if (num2 === 0) {
					console.log('Error: División por cero');
					continue;
				}
				result = num1 / num2;
				break;
			default:
				console.log('Operador no válido');
				continue;
		}

		console.log(`Resultado: ${result}`);
		const anotherCalculation = await askQuestion('¿Desea realizar otra operación? (s/n): ');
		if (anotherCalculation.toLowerCase() !== 's') {
			break;
		}
	}

	rl.close();
}

calculator();