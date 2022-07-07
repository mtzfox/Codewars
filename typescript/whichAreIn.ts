/*
https://www.codewars.com/kata/54da539698b8a2ad76000228

Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
- Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
- In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
- Beware: r must be without duplicates.



---

A little tricky.
- two for...of loops
- if a str includes a substring, push substring to matching
- new array will be made of new Set of matching to identify unique, then sort
- return new array

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