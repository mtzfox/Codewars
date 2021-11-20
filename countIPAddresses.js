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
