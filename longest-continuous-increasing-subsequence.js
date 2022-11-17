/*
Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

 

Example 1:

Input: nums = [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
4.
Example 2:

Input: nums = [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
increasing.
 

Constraints:

1 <= nums.length <= 104
-109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 /*
 PARAMETERS: ARRAY OF INTEGERS WITH LENGTH 1 <= nums.length <= 10^4, CAN BE NEGATIVE (-10^9 <= nums[i] <= 10^9)
 RESULTS: RETURN AN INTEGER THAT REPRESENTS THE MAXIMUM CONTINUOUS INCREASING SEQUENCE
 EXEMPLES:
    Input: nums = [1,3,5,4,7]
    Output: 3

    Input: nums = [2,2,2,2,2]
    Output: 1

PSOUDOCODE: 
    SET A VARIABLE THAT STORES THE SEQUENCE OF INCREASING NUMBERS
    set a variable that the store the maximum number for the sequence of increasing numbers
    LOOP TRHOUGH THE ARRAY AND IF THE INDEX + 1 IS GREATER THAN INDEX, ADD ONE TO THE COUNT, IF NOT RESET COUNT TO ZERO
 */
var findLengthOfLCIS = function(nums) {
    let count = 1
    let max = 1
    for(let i = 0; i < nums.length - 1; i++){
        console.log(nums[i] + ' - ' + nums[i+1])
        if (nums[i] < nums[i + 1]){
            count += 1
        } else {
            count = 1
        }
        if (count > max){
            max = count
        }
    }
    return max
};
