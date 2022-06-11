/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/
//P function takes in string
//R return true or false if text if same word forward and backwords
//E e.g palindromeChecker('racecar') // will return true
//P create a function that takes in a string
    //for loop to iterate through string to look for same word
    //return true or false



function palindromeChecker(text) {
    // Code goes here
    let reverseText = text.toLowerCase().split('').reverse().join('')
    if(text === reverseText){
        return true
    }else{
        return false
    }
    
}



module.exports = palindromeChecker;