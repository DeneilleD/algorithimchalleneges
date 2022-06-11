/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/
//P function that takes in a string
//R return most recurring character
//E e.g maxRecurringChar('aabacada') // will return 'a'
//P create a function that takes in a string and returns the most recurring charcter. split to turn string into list to further compare. ForEach to account for each character. return value. 

function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''
    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}


module.exports = maxRecurringChar;