/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
*/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let guess_value = Math.ceil(n/2)
    let minimum_value = 1
    let maximum_value = n
    while (true) {
        console.log(minimum_value, maximum_value)
        if (guess(guess_value) === -1){
            maximum_value = guess_value
            guess_value = Math.floor((guess_value - minimum_value)/2 + minimum_value)
        } else if (guess(guess_value) === 1){
            minimum_value = guess_value
            guess_value = Math.ceil((maximum_value - guess_value)/2 + guess_value)
        }
        console.log('guess value:' + guess_value)
        console.log('guess:' + guess(guess_value))
        if (guess(guess_value) === 0) return guess_value
    }
};
