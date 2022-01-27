'use strict';

class Bracket {
  constructor() {
    this.opening = 0;
    this.closing = 0;
  }
}
function validateBrackets(str) {

  let square = new Bracket();
  let curly = new Bracket();
  let round = new Bracket();

  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case '[':
        square.opening += 1;
        break;
      case ']':
        square.closing += 1;
        break;
      case '{':
        curly.opening += 1;
        break;
      case '}':
        curly.closing += 1;
        break;
      case '[':
        round.opening += 1;
        break;
      case ']':
        round.closing += 1;
        break;
      default:
        break;
    }
  }
  if ((square.opening === square.closing) && (curly.opening === curly.closing) && (round.opening === round.closing)) {
    return true;
  } else {
    return false;
  }
}

console.log(validateBrackets('[[((]]))]'));


