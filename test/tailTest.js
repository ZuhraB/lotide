const assertEqual = require('../assertEqual');
const tail = require('../tail')

assertEqual(tail(["h","i", "u"]), "u")
assertEqual(tail([5,6,7]), 7);


