var superCounter = function(str) {
  var counterObj = {};
  counterObj.spaces = 0;
  counterObj.words = str.split('').length;
  str.split('').forEach(function(e) {
    if(e === '') {
      counterObj.spaces += 1;
    }
  });
  counterObj.chars = str.length;
  return counterObj;
} ;
console.log(superCounter("Count me in"));
