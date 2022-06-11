/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/
//P parameters of two strings
//R return true or false if the letters are the same in both questions.
//E  isAnagram('silent', 'listen') // should return true
//P create a function that checks for the same characters in two strings passed in. if its true return true else return false


function isAnagram(stringA, stringB) {
    // Code goes here
    for(let i = 0; i <= stringA.length.toLowerCase(); i++){
        if(stringB[i] === stringA[i]){
            return true
        }else{
            return false
        }
    }
}


module.exports = isAnagram