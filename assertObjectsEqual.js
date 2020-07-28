
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( `😍Assertion Passed: ${actual}  === ${expected}`)
  }
    else{
      console.log(`🥺Assertion Failed:  ${actual}  !==   ${expected}`)
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
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for (let i of Object.keys(object1)){
    if(Array.isArray(object1[i]) && Array.isArray(object2[i])){
      if(eqArrays(object1[i],object2[i])){
        return true
      }else{
        return false 
      }
    }
    if(object1[i] !== object2[i]){
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log( `✅✅✅ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`)
  }
    else{
      console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)}  !==   ${inspect (expected)}`)
    }
  
  // ...
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(eqObjects(ab, abc), false) ; // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(eqObjects(cd, cd2), false); // => false
module.exports = assertObjectsEqual;