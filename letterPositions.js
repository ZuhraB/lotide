const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log( `😍Assertion Passed: ${actual}  === ${expected}`)
  } else{
      console.log(`🥺Assertion Failed:  ${actual}  !==  + ${expected}`)
  }

};

const eqArrays = function(array1, array2){
  if (array1.length !== array2.length){
    return false
  } 

  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false
    }
  }
  return true
}


 
const letterPositions = function(sentence) {
  const results = {};
  for(let i of sentence){
    results[i] = [];
  }
  for(var j in results){
    for(var k  = 0; k < sentence.length;k++)
      {
          if(j === sentence[k])
          {
              results[j].push(k);
          }
      }
  }
  
  return results;
};
console.log(letterPositions("hello"))
assertEqual(letterPositions("hello").e, [1])