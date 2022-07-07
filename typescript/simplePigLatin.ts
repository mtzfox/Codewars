/*
https://www.codewars.com/kata/54da539698b8a2ad76000228

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

---

Lots of added weirdness to this, I don't love my answer. 
- created a word array from the string provided and empty string
- iterate with for...of
- look for any words, assign first letter and rest of word to vars
- Add new string composed of those combined with "ay"
- if not a word, return with space after
- return completed string minus last value (to avoid extra space)

*/

export function inArray(a1: string[], a2: string[]): string[] {
	let matching = [];
	for (let sub of a1) {
	  for (let str of a2) {
		if (str.includes(sub)) {
		  matching.push(sub);
		}
	  }
	}
	let newMatch: string[] = Array.from(new Set(matching)).sort();
  
	return newMatch;
  }
  
  inArray(
	['arp', 'live', 'strong'],
	['lively', 'alive', 'harp', 'sharp', 'armstrong']
  ); // ["arp", "live", "strong"]