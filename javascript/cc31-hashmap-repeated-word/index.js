'use strict';

function repeatedWord(str) {

  // convert to lower case
  str = str.toLowerCase();
  // remove punctuation
  let regex = (/[A-Z]|[a-z]|\s/);
  let newStr = '';
  for (let char = 0; char < str.length; char += 1) {
    if (str[char].match(regex)) {
      newStr += str[char];
    }
  }
  let wordArr = newStr.split(' ');
  // console.log(wordArr);
  let trackerArr = [];

  for (let word = 0; word < wordArr.length; word += 1) {
    // check if word is already in trackerArr
    if (trackerArr.includes(wordArr[word])) {
      // return word if it is already in tracker array
      return wordArr[word];
    } else {
      trackerArr.push(wordArr[word]);
    }
  }
  return 'No duplicate words found';
}

// let str = 'Once upon a time, there was a brave princess who...';
// let word = repeatedWord(str);
// console.log(word);

module.exports = { repeatedWord };
