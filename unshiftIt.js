var answer = [];

function unshiftIt(item, array) {
	answer[0] = item;
	for (var i = 1; i <= array.length; i++) {
		answer[i] = array[i - 1];
	}
	return answer;
}

module.exports = unshiftIt;
