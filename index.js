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
  let newTutorials = tutorials.map(function (el) {
    let el_array = el.split(" ")
    el_array.forEach((word) => {
      word = word[0].toUpperCase()
    })
    el = el_array.join(" ")
  })
  return newTutorials
}
