/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

//P function taking in string
//R return the number of vowels within the string
//E e.g vowelsCounter('anehizxcv') // will return 3

//P create a function that takes in text.
  //use the split method to turn string into list of characters
  //create a variable storing the vowels value(s) into an array
  //create a variable to act as a counter for vowels
  //create loop to iterate through string and check for array
  //return counter


function vowelsCounter(text) {
    // Code goes here
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let text = text.split()
    let counter = 0
    for(let i = 0; i <= text.length; i++){
        if( text === vowels[i]){
            counter ++
        }
        return counter
    }
}



module.exports = vowelsCounter;
