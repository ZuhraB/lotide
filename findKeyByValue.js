const findKey = require("./findKey");

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
const findKeyByValue = function(obj, key1){
  for(var key in obj){
    if(obj[key] === key1){
      return key
    }
  }
}
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;