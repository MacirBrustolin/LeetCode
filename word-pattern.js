/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 
 PARAMETERS: TWO STRINGS, THE FIRST REPRESENTS A PATTERN OF LENGTH  1 <= pattern.length <= 300.
 RESULTS: RETURN TRUE OR FALSE IF THE CONDITION IS MET. THE CONDITION IS IF THE SECOND STRING FOLLOWS THE SAME PATTERN OF THE FIRST
 EXEMPLES:
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true

    Input: pattern = "abba", s = "dog cat cat fish"
    Output: false

    Input: pattern = "aaaa", s = "dog cat cat dog"
    Output: false

PSEUDOCODE: 
TURN THE STRINGS INTO ARRAYS.
CREATE A CACHE VARIABLE TO STORE THE PATTERN-> STRING REPRESENTATION
SEE IF THE VALUE IS ALREADY ON THE CACHE, IF IS NOT ADD IT. IF IT IS, COMPARE THE STORED VALUE WITH ITS EQUIVALENT FROM THE STRING S. IF THEY ARE THE SAME, CONTINUE, IF NOT, RETURN FALSE.

 */
var wordPattern = function(pattern, s) {
    let patArr = pattern.split('')
    let sArr = s.split(' ')
    let cache = {}

    if (patArr.length != sArr.length) return false
    
    for(let i = 0; i < patArr.length; i++){
        if (patArr[i] in cache){
            if (cache[patArr[i]] != sArr[i]){
                console.log(cache)
                return false
            }
        } else if(Object.values(cache).includes(sArr[i])){
            console.log(Object.values(cache).includes(sArr[i]))
            console.log(Object.values(cache).indexOf(sArr[i]))
            if (Object.values(cache).indexOf(sArr[i]) != patArr[i]){
                return false
            }
        } else {
            cache[patArr[i]] = sArr[i]
        }
    }
    console.log(cache)
    return true
};
