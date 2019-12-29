const titleCased = tutorials.map(function (tutorial) {
    sentence = titleCase(tutorial)
    tutorials = []
    tutorials.push(sentence.join(" "))    
    return tutorials
 })
  

function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence
//  titleCased = []
//  titleCased.push(sentence.join(" "))
}
