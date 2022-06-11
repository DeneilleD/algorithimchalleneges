/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/
//P function taked in string
//R return reversed string 
//E E.g reverseString('algorithms') // should return 'smhtirogla'
//P create a function that taked in a string.
    //split string into list of characters
    //reverse string characters
    //rejoin string


function reverseString(text) {
    return text.split('')
    //create list of characters
    .reverse()
    //reverse the order of characters
    .join('')
    //rejoin string together
}



module.exports = reverseString