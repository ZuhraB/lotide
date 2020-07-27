const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head("h","i", "u"), "h")
assertEqual(head([5,6,7]), 5);
module.exports = assertEqual;

