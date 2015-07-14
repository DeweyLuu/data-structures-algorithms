var answer = [];

function popIt(array) {
	var shifted = array[array.length - 1];
	for (var i = 0; i < array.length - 1; i++) {
		answer[i] = array[i];
	}
	return shifted;
}

module.exports = popIt;
