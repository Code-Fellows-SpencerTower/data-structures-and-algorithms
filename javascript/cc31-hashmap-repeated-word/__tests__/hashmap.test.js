'use strict';

// write at least 3 test assertions

let { repeatedWord } = require('../index.js');
let { str1, str2, str3, str4 } = require('../sample-strings');


describe('Testing repeatedWord function', () => {

  it('Should return the first word that is repeated in a string', () => {
    // let str1 = 'Once upon a time, there was a brave princess who...';
    let word1 = repeatedWord(str1);
    let word2 = repeatedWord(str2);
    let word3 = repeatedWord(str3);
    expect(word1).toEqual('a');
    expect(word2).toEqual('it');
    expect(word3).toEqual('summer');
  });

  it('Should remove punctuation from the string', () => {
    let word = 'hello,.,. hello""\'\'';
    word = repeatedWord(word);
    expect(word).toEqual('hello');
  });

  it('Should return a message if no duplicate words are found', () => {
    let message = repeatedWord(str4);
    expect(message).toEqual('No duplicate words found');
  });
});
