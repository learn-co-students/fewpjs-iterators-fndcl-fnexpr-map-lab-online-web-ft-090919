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


function titleCaseWord(word){
  let firstLetter = word.charAt(0).toUpperCase()
  let remainingLetters = word.slice(1)
  return (firstLetter+remainingLetters)
}

const titleCase = function(line){
  return line.split(' ').map(titleCaseWord).join(' ')
}

const titleCased = () => {
  return tutorials.map(titleCase)
}
