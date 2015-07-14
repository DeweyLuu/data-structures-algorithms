var expect = require('chai').expect;
var popIt = require('../popIt');
var pushIt = require('../pushIt');
var shiftIt = require('../shiftIt');
var unshiftIt = require('../unshiftIt');

var words = ['batman', 'joker', 'robin', 'catwoman'];

describe('pop it', function() {
	it('will pop off last word in array', function() {
		expect(popIt(words)).to.equal('catwoman');
	});
});
//describe('push-it', function() {
//	it('this will push a word to the end of the array', function() {
//		expect(pushIt('fire', words)).to.equal(words);
//	});
//});
describe('shift it', function() {
	it('will remove the first item in the array', function() {
		expect(shiftIt(words)).to.equal('batman');
	});
});
describe('unshift it', function() {
	it('will add an item to the front of the array', function() {
		expect(unshiftIt('ice', words)).to.equal(['ice', 'batman', 'joker', 'robin', 'catwoman']);
	});
});

