/*
Your task, is to create NxN multiplication table, of size provided in parameter.



*/

multiplicationTable = function (size) {
	// array for all returned num arrays
	const tables = [];
	// counts the first few number keys, then slices the everything but the first number (0)
	let first = [...Array(size + 1).keys()].slice(1, size.length);

	// starting with 2nd item until equal to last number index,
	// pushes multiplication of first array that is mapped to be multiplied by the index (*2, *3, etc)
	for (let i = 1; i <= size; i++) {
		tables.push([...first].map((num) => num * i));
	}
	return tables;
};
