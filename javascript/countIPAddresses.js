/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

*/

function ipsBetween(start, end) {
	let ip1 = start.split('.'),
		ip2 = end.split('.'),
		difference = [],
		host = 0,
		network = 0,
		octetClass = 3;

	for (let i in ip1) {
		ip2[i] != ip1[i] ? (difference[i] = ip2[i] - ip1[i]) : (difference[i] = 0);
	}
	host = difference.pop();

	for (let i = 0; i < difference.length; i++) {
		network += difference[i] * Math.pow(256, octetClass);
		octetClass--;
	}
	return network + host;
}
