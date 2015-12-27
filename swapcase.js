var swapCase = function(letters){
  var newLetters = "";
  for(var i = 0; i<letters.length; i++){
      if(letters[i] === letters[i].toLowerCase()){

    newLetters += letters[i].toUpperCase();
  }else {
    newLetters += letters[i].toLowerCase();
  }
 }
console.log(newLetters);
return (newLetters);

};
var text = "Life is 10% what happens to you, and 90% of how  you REACT to  it";
var swappedText = swapCase(text);
