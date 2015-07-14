//var words = ['batman', 'joker', 'robin', 'catwoman'];
var emptyObj = {};
var emptyStr = "";
var answerObj = {letter: '', number: 0};

function frequency(array) {
	var combine = array.join("");
	for (var i = 0; i < combine.length; i++) {
		emptyObj[combine.charAt(i)] = (emptyObj[combine.charAt(i)]) ? emptyObj[combine.charAt(i)] += 1 : 1;
		//if (emptyObj[combine.charAt(i)] > emptyObj[combine.charAt(i + 1)]) {
		//	return emptyObj[combine.charAt(i)];
		//}
	}
	for (var prop in emptyObj) {
		if (emptyObj[prop] > answerObj.number) {
			answerObj.number = emptyObj[prop];
			answerObj.letter = prop;
		}
	}
	return 'The letter that is used the most is ' + answerObj.letter +
	'. It is used ' + answerObj.number + ' times.';
}
//console.log(frequency(words));
module.exports = frequency;
