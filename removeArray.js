var anArray = [1, 3, 6, 8, 9, 4, 6, 7, 3];

function unique(array) {
	var sorted = array.sort();
	for (var i = 0; i < array.length; i++) {
		if (sorted[i] == sorted[i + 1]) {
			sorted.splice(i, 1);
		}
	}
	return sorted;
}

console.log(unique(anArray));
