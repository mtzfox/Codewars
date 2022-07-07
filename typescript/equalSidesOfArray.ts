/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

---

My solution works but it feels a bit like brute force.

Going through the array, it compares 0-mid point's product to mid point to end's product.
- if left and right are equal, return the index.
- If the arrays entire product is equal to the first index, return that index (0)
- if the final value is equal to the total, return the final index
- if nothing matches, return the default value of -1
- and if the length of the array is only 1, return index 0;

*/

export function findEvenIndex(arr: number[]): number {
	if (arr.length === 1) return 0;
	let num: number = -1;
	let total = arr.reduce((a, b) => a + b);
	if (total == arr[0]) return 0;
  
	for (let i = 1; i <= arr.length - 1; i++) {
	  let mid: any = i + 1;
	  let left: any = arr.slice(0, mid).reduce((a, b) => a + b);
	  let right: any = arr.slice(i).reduce((a, b) => a + b);
  
	  if (left === right) {
		num = i;
		break;
	  }
	}
	return num;
  }