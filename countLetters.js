// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( `😍Assertion Passed: ${actual}  === ${expected}`)
  }
    else{
      console.log(`🥺Assertion Failed:  ${actual}  !==   ${expected}`)
    }

};
const countLetters = function(letters){
  letters = letters.replace(/\s/g, '')
  var result = {}
  for(var i of letters){
    if(!result[i]){
      result[i] = 1
    }
    else{
      result[i] += 1 
    }
    
  }
  return result
  
}
assertEqual(countLetters("lighthouse in thehouse"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1})

 