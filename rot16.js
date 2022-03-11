/*
https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
*/
function rot13(message) {
	let alpha = 'abcdefghijklmnopqrstuvwxyz';

	message = [...message]; // TODO - this is my todo

	for (let i in message) {
		let letter = message[i];
		let uppercase = letter != letter.toLowerCase();

		letter = letter.toLowerCase();

		let indexNum = alpha.indexOf(letter);

		if (indexNum == -1) {
			indexNum = indexNum + 0;
		} else {
			indexNum = indexNum + 13;
		}

		if (indexNum > 26) {
			indexNum = indexNum - 26;
		}

		letter = alpha[indexNum];

		if (uppercase) {
			letter = letter.toUpperCase();
		}

		if (indexNum == -1) {
			letter = message[i];
		}

		message[i] = letter;
	}
	message = message.join('');
	message = message.replace(/m/, ' ');
	return message;
}

rot13('test');
rot13('Test');
