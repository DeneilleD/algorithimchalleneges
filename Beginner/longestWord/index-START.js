/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//P function takes in string
//R returns text reversed in order recieved
//E reverseString('algorithms') // should return 'smhtirogla'
//P create a function that will reverse the input string and return it using split and using characters list to store into newwords variable. will then be sorted from descending order in terms of length to decide what comes first. wordB-wordA


function longestWord(text) {

    var reversedWord= text.split(' ')
                          .sort((wordA, wordB) => wordB.length - wordA.length)

    return reversedWord[0]
}


module.exports = longestWord