
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
const middle = function(array) {
  var arrayToFill = []
  for(var i = 0; i < array.length;i++){ 
  
    if(array.length > 2){
      if(array.length % 2 === 0){
        var middelIndex = array.length / 2 -1;

        arrayToFill.push(array[middelIndex], array[middelIndex + 1])
        return arrayToFill
      }
      else{
        middelIndex = Math.floor(array.length /2 ) 
        arrayToFill.push(array[middelIndex])
        return arrayToFill
      }
    }
    else{
      return []
    }
  }
}
assertArraysEqual(middle([1, 2, 3]), [2])// => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])// => [3, 4]))
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) 
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)