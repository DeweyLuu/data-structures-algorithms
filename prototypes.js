var popIt = require('./popit.js');
var pushIt = require('./pushit.js');
var shiftIt = require('./shiftit.js');
var unshiftIt = require('./unshiftit.js');
var unique = require('./unique');
var frequency = require('./frequency2');

var words = ['batman', 'joker', 'robin', 'catwoman'];
var anArray = [1, 3, 6, 8, 9, 4, 6, 7, 3];

console.log(frequency(words));
console.log(popIt(words));
console.log(pushIt('fire', words));
console.log(shiftIt(words));
console.log(unshiftIt('ice', words));
console.log(unique(anArray));
