const without = function(items1, items2){
  arrayToFill = []
  for(let i = 0; i < items1.length; i++){
    if(items1[i] !== items2[i]){
      arrayToFill.push(items1[i])
    }
  }
  return arrayToFill
}
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


//console.log(without([1, 2, 3], [1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
