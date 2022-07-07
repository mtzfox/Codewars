/*
https://www.codewars.com/kata/54da5a58ea159efa38000836

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

---

My solution uses reduce to count each item and return count of each to array.
Then I loop over with for...of through Object.entries()
if matching key is odd, number variable will be equal to the key converted to a number
return number
*/

export const findOdd = (xs: number[]): number => {
	let number: number = 0;
	let count = xs.reduce(function (items:any, item:any) {
	  if (item in items) {
		items[item]++;
	  } else {
		items[item] = 1;
	  }
	  return items;
	}, {});
	for (let [key, value] of Object.entries(count)) {
	  if (count[key] % 2 !== 0) {
		number = Number(key);
	  }
	}
	return number;
  };
  
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
  findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);