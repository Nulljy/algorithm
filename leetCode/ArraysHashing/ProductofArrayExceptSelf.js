/**238. Product of Array Except Self

 * https://leetcode.com/problems/product-of-array-except-self/
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

answer[i]에 nums 배열에서 nums[i]를 제외해서 곱한 수를 리턴하라
 */

//시간초과로 제출 불가
// O(1) 시간의 상관없이 일관성을 가지는 복잡도 

// left[0] = 1 left[1] = 1 * nums[0] left[2] = 1 * nums[0] * nums[1] left[3] = 1 * nums[0] * nums[1] * nums[2]
// right[3] = 1 right[2] = 1 * nums[3] right[1] = 1 * nums[3] * nums[2] right[0] = 1 * nums[3] * nums[2] * nums[1]


let nums = [-1,1,0,-3,3];
var productExceptSelf = function(nums) {
    let result = [];
    // LEFT
    let left = []; // [-1]
    for(let i=0; i<nums.length; i++) {
        if(i === 0) {
            left[i] = 1;
        } else {
            left[i] = left[i-1] * nums[i-1];
        }
    }
    // RIGHT
    const right = [];
    for(let i=nums.length-1; i>=0; i--) {
        if(i === nums.length-1) {
            right[i] = 1;
        } else {
            right[i] = nums[i+1] * right[i+1];
        }
        result[i] = left[i] * right[i];
    }
    return result;
};
console.log(productExceptSelf(nums));
