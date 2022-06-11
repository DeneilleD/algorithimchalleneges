/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/

//P  parameters take in two strings
//R calculate:: return hamming distance 
//E E.g hammingDistance('rover', 'river') // should return 1
//P create a function which returns the differences ('count') in characters of two strings of equal length

function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {

        for (let i = 0; i < stringA.length; i++) {
            if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
                result++
            }
        }
        return result
    } else {
        throw new Error('Strings do not have equal length')
    }
}



module.exports = hammingDistance