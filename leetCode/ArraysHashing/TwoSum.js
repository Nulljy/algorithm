/**1. Two Sum

 * https://leetcode.com/problems/two-sum/
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    // 어레이에 담긴 수를 두개를 더했을 때에 타겟과 동일하다면 그 해당되는 두 수의 인덱스를 배열에 담아 리턴
    // 중복 수 허용
    Can you come up with an algorithm that is less than O(n2) time complexity?
    for문 두개 까지 허용 

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 */

// // Runtime 161 ms
// let nums = [2,7,11,15], target = 9;
// var twoSum = function(nums, target) {
//     let result = [];
//     for(let i=0; i<nums.length-1; i++) {
//         let first = nums[i];
//         for(let j=i+1; j<nums.length; j++) {
//             if(first + nums[j] === target) {
//                 result.push(i);
//                 result.push(j);
//             }
//         }
//     }
//     return result;
// };
// console.log(twoSum(nums, target));

// // Map Object 이용하기 runtime 
// // Runtime 65ms

// let nums1 = [2,7,11,15], target1 = 9;
// var twoSum = function(nums, target) {
//     // map 생성
//     let map = new Map();
//     for(let i=0; i<nums.length; i++) {
//         let aim = target - nums[i];
//         if(map.has(aim)) return [map.get(aim), i];
//         map.set(nums[i], i);
//     }
// };
// console.log(twoSum(nums1, target1));


// 다시풀어보기
let nums = [2,7,11,15], target = 9;
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum(nums, target));