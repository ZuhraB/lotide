// FUNCTION IMPLEMENTATION
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
const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1,arr2)){
    console.log( '😍Assertion Passed: $[actual]  === $[expected]')
  }
  else{
    console.log('🥺Assertion Failed:  $[actual]  !==  + $[expected]')
  }
}  

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1)
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't'])
