var answer = [];

function shiftIt(array) {
	var shifted = array[0];
	for (var i = 0; i < array.length - 1; i++) {
		answer[i] = array[i + 1];
	}
	return shifted;
}

module.exports = shiftIt;
