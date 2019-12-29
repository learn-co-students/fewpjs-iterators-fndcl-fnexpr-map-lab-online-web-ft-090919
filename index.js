// const tutorials = [
//   'what does the this keyword mean?',
//   'What is the Contutorialuctor OO pattern?',
//   'implementing Blockchain Web API',
//   'The Test Driven Development Workflow',
//   'What is NaN and how Can we Check for it',
//   'What is the difference between stopPropagation and preventDefault?',
//   'Immutable State and Pure Functions',
//   'what is the difference between == and ===?',
//   'what is the difference between event capturing and bubbling?',
//   'what is JSONP?'
// ];

// const titleCased = () => {
//   return tutorials
// }


const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCase(string) {
var sentence = string.split(" ");
for(var i = 0; i< sentence.length; i++){
   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
}
   let new_sentence = sentence.join(" ")
   return new_sentence
}

const titleCased = () => {
  return tutorials.map(tutorial => {
    return titleCase(tutorial)
  })
}