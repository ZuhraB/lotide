const eqArrays = function(array1, array2){
  for(var i = 0; i < array1.length; i++){
  }
  for(var j = 0; j < array2.length; j++){

  }
  if(array1[i] === array2[j]){
    return true
  }
  else{
    return false
  }
}
const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1,arr2)){
    console.log( '😍Assertion Passed: $[actual]  === $[expected]')
  }
  else{
    console.log('🥺Assertion Failed:  $[actual]  !==  + $[expected]')
  }
}  


assertArraysEqual(eqArrays([1,2,3],[1,2,3]),true)
assertArraysEqual(eqArrays([1,2,3],[1,3,4]),false)
//console.log("Please return true or false")