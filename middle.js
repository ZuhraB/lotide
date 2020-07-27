 
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

module.exports = middle;
