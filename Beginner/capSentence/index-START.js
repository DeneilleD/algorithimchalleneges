/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised
*/
//P:: Paramater taking in a string of [2 + words]
//R:: return same string but capitalized
//E:: string method toUpperCase()

  /*  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'  */
//P:: 1. create a function  2.takes in string of 2+ words 3.return a new string of paramater string with all letters capitalized. 


function capSentence(text) {
  let wordsArray = text.toLowerCase().split(' ')
  let capsArray = []

  wordsArray.forEach(word => {
      capsArray.push(word[0].toUpperCase() + word.slice(1))
  });

  return capsArray.join(' ')
}





// function capSentence(text){ 
//     let words = text.split('').toLowerCase()
//     let capWords = []

//     if(words >= 2){
//     capWords.push[0] + capWords[].slice(1)
//    }
// }



module.exports = capSentence