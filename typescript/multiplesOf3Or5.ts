/*
https://www.codewars.com/kata/514b92a657cdc65150000006

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

---

Solved easily. 
- Return 0 is number is negative
- Comparison number is = number-1
- While() number is % 3 or 5, add to total
- subtract 1
- return total

*/

class Challenge {
	static solution(number: number) {
	  if (number < 0) return 0;
	  let lessNum: number = number - 1;
  
	  let total: number = 0;
  
	  while (lessNum > 0) {
		if (lessNum % 3 === 0 || lessNum % 5 === 0) {
		  total += lessNum;
		}
		--lessNum;
	  }
	  return total;
	}
  }
  Challenge.solution(10);


  
  // before refactor

  export class ChallengeOld {
	static solution(number: number) {
	  if (number < 0) return 0;
	  let lessNum: number = number - 1;
  
	  const nums: number[] = [];
  
	  while (lessNum > 0) {
		if (lessNum % 3 === 0 || lessNum % 5 === 0) {
		  nums.push(lessNum);
		}
		--lessNum;
	  }
	  if (nums.length === 0) return 0;
	  return nums.reduce((a, b) => a + b);
	}
  }