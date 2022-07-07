// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
	let str1 = string.toUpperCase();
	let str2 = string;
	let regExp = /\s/;
	const letters = [];

	for (let i = 0; i < str1.length; i++) {
		if (str1[i] === str2[i]) {
			letters.push(str2[i]);
		}
	}
	for (let i in letters) {
		str2 = str2
			.split(letters[i])
			.join(`${regExp}${letters[i]}`)
			.replace(/^(\s{2,}$)/, 's');
	}
	//str2 = str2.replace(/^(\s{2,}$)/, '\s').trim();
	return str2;
}
