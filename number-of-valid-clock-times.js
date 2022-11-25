/*
You are given a string of length 5 called time, representing the current time on a digital clock in the format "hh:mm". The earliest possible time is "00:00" and the latest possible time is "23:59".

In the string time, the digits represented by the ? symbol are unknown, and must be replaced with a digit from 0 to 9.

Return an integer answer, the number of valid clock times that can be created by replacing every ? with a digit from 0 to 9.

 

Example 1:

Input: time = "?5:00"
Output: 2
Explanation: We can replace the ? with either a 0 or 1, producing "05:00" or "15:00". Note that we cannot replace it with a 2, since the time "25:00" is invalid. In total, we have two choices.
Example 2:

Input: time = "0?:0?"
Output: 100
Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.
Example 3:

Input: time = "??:??"
Output: 1440
Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.
 

Constraints:

time is a valid string of length 5 in the format "hh:mm".
"00" <= hh <= "23"
"00" <= mm <= "59"
Some of the digits might be replaced with '?' and need to be replaced with digits from 0 to 9.
*/

/**
 * @param {string} time
 * @return {number}
 */
 /*
 PARAMETERS: STRING O LENGTH 5 THAT REPRESENTS A TIME OF THE DAY, BETWEEN '00:00' AND '23:59' BUT THE NUMBERS CAN BE REPLACES BY A QUESTION MARK, THERE CAN BE MORE THAN ONE QUESTION MARK
 RESULTS: RETURN AN INTEGER THAT REPRESENT THE NUMBER OF COMBINATIONS OF VALID TIMES WHEN YOU SUBSTITUTE THE QUESTION MARK FOR NUMBERS 
 EXEMPLES: 
    Input: time = "?5:00"
    Output: 2

    Input: time = "0?:0?"
    Output: 100

    Input: time = "??:??"
    Output: 1440

PSOUDOCODE: DIVIDE THE STRING IN TWO PARTS. GO TROUGH EACH PART AND REPLACE THE QUESTION MARK FOR A NUMBER AND CHECK IF THE NUMBER FORMED IS VALID. IF IT IS, ADD ONE TO THE COUNTER. REPEAD FOR ALL COMBINATIONS
*/
var countTime = function(time) {
    let array = time.split('')
    let counterHour = 0
    let counterMinutes = 0

    if (time.search(/[?]/) === -1 ) return 1

    if (array[0] === '?'){
        if (array[1] === '?'){
            counterHour += 24
        } else {
            if (array[1] > 3){
                counterHour += 2
            } else {
                counterHour += 3
            }
        }
    }
    if (array[0] != '?' && array[1] === '?'){
        if (array[0] === '2'){
            counterHour += 4
        } else {
            counterHour += 10
        }
    }
    if (array[3] === '?'){
        if (array[4] === '?'){
            counterMinutes += 60
        } else {
            counterMinutes += 6
        }
    }
    if (array[3] != '?' && array[4] === '?'){
        if (array[3] < 6){
            counterMinutes += 10
        } else if (array[3] === '6'){
            counterMinutes += 1
        }
    }
    console.log(counterHour)
    console.log(counterMinutes)
    if (counterHour === 0 && counterMinutes != 0){
        return counterMinutes
    } else if (counterHour != 0 && counterMinutes === 0){
        return counterHour
    } else {
        return counterHour * counterMinutes
    }
};
