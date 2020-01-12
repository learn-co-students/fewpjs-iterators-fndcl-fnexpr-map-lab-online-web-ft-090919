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

const titleCased = () => {
  return tutorials.map(tut => {
    tut = tut.split(" ")
    let tutParse = tut.map(word =>{
      let letter = word[0].toUpperCase()
      word = letter + word.substr(1)
      return word 
   })
    tut = tutParse.join(" ")
    debugger
    return tut
  })
}
