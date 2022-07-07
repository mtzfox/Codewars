/*
https://www.codewars.com/kata/54da539698b8a2ad76000228

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

---

if you went for a 10 min walk, you should be able to return to the place that you started. 
- I first started with lat/long values, but then combined them into a distance variable.
- minutes start at 10 and go down one for each step of walk
- directions n,s,e,w are all mapped to positive/negative numbers
- big trick is that longitude values are 1, latitude values are 2 - this differentiates the distances so that they can be combined in one distance value
- for each item, add mapped value, subtract minutes.
- if both distance and minutes === 0, return true.

*/

function isValidWalk(walk: string[]) {
	let distance: number = 0,
	  min: number = 10;
  
	type MapType = {
	  [id: string]: number;
	};
	const map: MapType = { n: 1, s: -1, e: 2, w: -2 };
	for (let i of walk) {
	  distance += map[i];
	  min--;
	}
	if (distance === 0 && min === 0) return true;
	return false;
  }
  isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
  isValidWalk(['w']);
  isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);