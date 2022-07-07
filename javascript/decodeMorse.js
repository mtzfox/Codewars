/*
https://www.codewars.com/kata/54b724efac3d5402db00065e

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')   //returns "HEY JUDE"

*/

// Second attempt - working

decodeMorse = function(morseCode){

  const decodeLetter = (letter) => {
    return MORSE_CODE[letter];
  }
  const decodeWord = (word) => {
    return word.split(' ').map(decodeLetter).join('');
  }
  
  return morseCode.trim().split('   ').map(decodeWord).join(' ');
}



// First attempt - couldn't get it to work

decodeMorse = function (morseCode) {
  //const MC = MORSE_CODE['.--']
  //const dot = String.fromCharCode(46);
  //const dash = String.fromCharCode(45);
  //const space = String.fromCharCode(32);
  const dot = '.'
  const dash = '-'
  const space = ' '
  const morseMap = [...morseCode]

  let message = ''

  for (let i = 0; i < morseMap.length; i++) {
    let morse = ''
    // if period
    if (morseMap[i] === dot) {
      morse += '.'
      console.log(morse)
    }
    // if dash
    else if (morseMap[i] === dash) {
      morse += '-'
      console.log(morse)
    }
    // if space
    if (morseMap[i] === space) {
      let spaceCount = 0
      spaceCount++
      if (spaceCount < 3) {
        console.log(space)
        message += space
        spaceCount = 0
      } else {
        let letter = MORSE_CODE[`${morse}`]
        spaceCount++
        console.log(letter)
        message += morse
        //morse = "";
      }
    }
  }
  return message
}

decodeMorse('.... . -.--   .--- ..- -.. .')
