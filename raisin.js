const raisinAlarm = function(cookie) {
  for(var i = 0; i < cookie.length; i++){
    if(cookie[i] == "🍇"){
      return "Rasin alert!"
    }
    
  }   
  return "All is good" 
  
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));