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

const titleCased = (array) => {
  return tutorials.map(tutorial => {
    // split string into array of separate words
    let words = tutorial.split(" ")
    // capilize first character of each word and append rest of word to character
    let capitalizedWords =
        words.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
    // join the array of words together and return
    let response = capitalizedWords.join(" ")
  return response
  })
}

// below function not used
function capitalize(element) {
  return element.map(token => token.charAt(0).toUpperCase() + token.slice(1))
}

// couldn't quite get the syntax right, had to look at solution