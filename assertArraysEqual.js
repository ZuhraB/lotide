const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1,arr2)){
    console.log( '😍Assertion Passed: $[actual]  === $[expected]')
  }
  else{
    console.log('🥺Assertion Failed:  $[actual]  !==  + $[expected]')
  }
}  
