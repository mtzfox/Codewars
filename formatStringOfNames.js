function list(names) {
	let family = '';
	let count = names.length;
	Object.entries(names).forEach(([key, value]) => {
		return key > 0 && key < count - 1
			? (family += `, ${value.name}`)
			: key == count - 1 && names.length > 1
			? (family += ` & ${value.name}`)
			: (family += `${value.name}`);
	});
	return family;
}

list([
	{ name: 'Bart' },
	{ name: 'Lisa' },
	{ name: 'Maggie' },
	{ name: 'Homer' },
	{ name: 'Marge' },
]); // 'Bart, Lisa, Maggie, Homer & Marge'

list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]);

list([{ name: 'Bart' }, { name: 'Lisa' }]);

list([{ name: 'Bart' }]);
