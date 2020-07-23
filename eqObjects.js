
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( `😍Assertion Passed: ${actual}  === ${expected}`)
  }
    else{
      console.log(`🥺Assertion Failed:  ${actual}  !==   ${expected}`)
    }

};
const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for(let i of Object.keys(object1)){
    if(object1[i] === object2[i]
  }
  
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc)); // => false