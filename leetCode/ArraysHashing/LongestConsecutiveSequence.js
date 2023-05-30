/**128. Longest Consecutive Sequence


 * https://leetcode.com/problems/longest-consecutive-sequence/
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
연이은 숫자의 가장 긴 길이를 리턴하라
 */

let nums = [];

//brute
// var longestConsecutive = function(nums) {
//     if(nums.length === 0) return 0;
//     let max = 1;
//     let length = 1;
//     nums.sort((a,b) => a - b); // [0,0,1,2,3,4,6,7,8]
//     for(let i=0; i<nums.length; i++) {
//       // 이전과 같은 수라면 continue
//       if(nums[i] == nums[i-1]) continue;
//       if((nums[i] - nums[i-1]) === 1) {
//         length++;
//       } else {
//         length = 1;
//       }
//       max = Math.max(length, max);
//     }
//     return max;
// };

// console.log(longestConsecutive(nums));


//optimise
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    let max = 1;
    let length = 1;
    nums.sort((a,b) => a - b); // [0,0,1,2,3,4,6,7,8]
    for(let i=0; i<nums.length; i++) {
      // 이전과 같은 수라면 continue
      if(nums[i] == nums[i-1]) continue;
      if((nums[i] - nums[i-1]) === 1) {
        length++;
      } else {
        length = 1;
      }
      max = Math.max(length, max);
    }
    return max;
};

console.log(longestConsecutive(nums));