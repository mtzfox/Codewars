// It's very close, I think I know the issue.
/* 
Rather than simply totaling the amount (which could be done with reduce(), anyway) I need push each value to an array and then compare the two arrays. Because each point of the array has different values, so if the 3rd element is 1 different it's 255pts different than if the 4th element is 1 different. I need to identify which number has changed and then evaluate the difference of that value.
*/

const binToDec = (bit) => parseInt(bit, 2);
const decToBin = (dec) => Number(dec.toString(2));

function ipsBetween(start, end) {
	console.log(start, end);

	let ip1 = start.split('.');
	let ip2 = end.split('.');
	let ip1total = 0;
	let ip2total = 0;
	let difference = 0;
	//console.log(decToBin(10))
	for (let i in ip1) {
		ip1total += decToBin(Number(ip1[i]));
	}
	//console.log(ip2)
	for (let i in ip2) {
		ip2total += decToBin(Number(ip2[i]));

		// if (i.valueOf() == 3) {
		//   //console.log("I'm 3")
		// }
	}
	console.log(ip2total - ip1total);
	//difference = Number(binToDec(ip2total) - binToDec(ip1total))
	//difference = (binToDec(ip2total) - binToDec(ip1total));
	//return binToDec(difference)
}

//ipToBin(ip)
//decToBin(20)
ipsBetween('10.0.0.0', '10.0.0.50');
ipsBetween('10.0.0.0', '10.0.1.0');
