function average(list) {
  var sum = 0;

  list.forEach(function(i){
    sum += i
  });
  return sum / list.length;
}
console.log(average([3, 5, 7]));