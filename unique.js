function unique(array) {
	var sorted = array.sort();
	for (var i = 0; i < array.length; i++) {
		if (sorted[i] == sorted[i + 1]) {
			sorted.splice(i, 1);
		}
	}
	return sorted;
}

module.exports = unique;
