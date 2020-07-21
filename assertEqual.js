// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( "😍Assertion Passed:" +  actual + "===" +expected)
  }
    else{
      console.log("🥺Assertion Failed:" + actual + " !== " + expected)
    }

};

console.assert(assertEqual())
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);