/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

 

Example 1:

Input: nums = [2,1,2]
Output: 5
Example 2:

Input: nums = [1,2,1]
Output: 0
 

Constraints:

3 <= nums.length <= 104
1 <= nums[i] <= 106
*/

//array of nums, are they whole nums? unsigned? are the array aways with the length equals to 3? always integer?
//return a number that represents the biggest perimeter that three of the nums can form
//[2, 1, 2] = 5
//[1, 2, 1] = 0, because it can not for a triangle
//[1, 2, 3, 4, 5, 6, 7] = 18
//confirm if the nums passed can form a triangle, if not return 0
//sort the array by decrescent order get the three first numbers, check if they form a triangle and return the number when calculating the perimeter

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a)
    let max = 0
    let a, b, c 

    for(let i = 0; i < nums.length - 2; i++){
        a = nums[i]
        for(let j = i + 1; j < nums.length - 1; j++){
            b = nums[j]
            for(let k= j + 1; k < nums.length; k++){
                c = nums[k]
                if (isTriangle(a, b, c) && (a + b + c > max)){
                    max = a + b + c
                    return max
                }
            }
        }
    }
    return max
};

function isTriangle(a, b, c){
if (Math.abs(a - b) < c && a + b > c){
        if (Math.abs(a - c) < b && a + c > b){
            if (Math.abs(b - c) < a && b + c > a){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}
