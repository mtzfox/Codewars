function alphabetPosition(text) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ]
  let letters = [...text.toLowerCase()]
  let numbers = letters.map((i) => alphabet.indexOf(i) + 1).filter((i) => i > 0)

  let stringOfNums = numbers.map((number) => number).join(' ')

  return stringOfNums
}

// Example
alphabetPosition("The sunset sets at twelve o' clock.")
//'20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
