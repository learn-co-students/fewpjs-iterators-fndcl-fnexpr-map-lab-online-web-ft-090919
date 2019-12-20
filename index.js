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
  return tutorials.map(str => {
    // do this to each thing in the array
    return str.split(" ").map(titleCase).join(" ")
    // split each string in an array words, do titlecase to each word in the array
        // title case splits each word in the array into an array of letters and capitalizes the first letter at position 0 index
        // then joins the word together then the whole array of words is joined back into a string.
  })
}

function titleCase(str) {
  return str.split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
