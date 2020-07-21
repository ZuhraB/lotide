// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( '😍Assertion Passed: $[actual]  === $[expected]')
  }
    else{
      console.log('🥺Assertion Failed:  $[actual]  !==  + $[expected]')
    }

};
const head = function(array){
  return array[0]
  
}
assertEqual(head("h","i", "u"), "h")
assertEqual(head([5,6,7]), 5);
console.assert(assertEqual())
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);