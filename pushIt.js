var answer = [];

function pushIt(item, array) {
	answer = array;
	answer[array.length] = item;
	return answer;
}

module.exports = pushIt;
