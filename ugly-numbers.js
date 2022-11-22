/**
 * @param {number} n
 * @return {boolean}
 */
 /*
 PARAMETERS: INTEGER, n, WHERE -231 <= n <= 231 - 1.
 RESULTS: TRUE OR FALSE IS THE PRIME FACTORS OF n ARE LIMITED TO 2, 3 AND 5.
 EXEMPLES:
    Input: n = 6
    Output: true

    Input: n = 1
    Output: true

    Input: n = 14
    Output: false
 PSOUDOCODE:
 divide the number 'n' by 2, then, 3, then 5, if the remainder number is not 1 and can be divided by another prime number, return false, else true.
 */
var isUgly = function(n) {
    let uglynumbers = [2, 3, 5]
    let rest = n
    let i = 0

    while(i < uglynumbers.length && rest > 0){
        console.log('rest: ' + rest + ' - i: ' + i)
        if (rest % uglynumbers[i] == 0){
            rest = rest / uglynumbers[i]
        } else {
            i++
        }
    }
    console.log(rest)
    if (rest == 1){
        return true
    } else {
        return false
    }
};
