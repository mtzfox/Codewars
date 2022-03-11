/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?

A string of braces is considered valid if all braces are matched with the correct brace.
*/
function validBraces(braces) {
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  const values = Object.values(bracketMap)
  const array = []

  for (let i in braces) {
    let current = braces[i]
    if (values.indexOf(current) > -1) array.push(current)
    else if (array[array.length - 1] === bracketMap[current]) array.pop()
    else return false
  }
  return array.length > 0 ? false : true
}

validBraces('[(])') // false
validBraces('(){}[]') // true
validBraces('([{}])') // true
validBraces('(}') //false
validBraces('[(])') // false
validBraces('[({})](]') // false
