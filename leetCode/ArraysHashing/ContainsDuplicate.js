/**217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * 
 */

//Runtime 7768 ms

// let nums = [1,2,3,1];
// var containsDuplicate = function(nums) {
//     let arr = [];
//     for(let i=0; i<nums.length; i++) {
//         if(!arr.includes(nums[i])) arr.push(nums[i]);
//     }
//     return nums.length === arr.length ? false : true;
// };
// console.log(containsDuplicate(nums));

// //Runtime 100 ms
// // set을 사용한 Array element 중복 파악하기
// // 메모리는 for문이 덜 잡아먹는다.

// let nums1 = [1,2,3,1];
// var containsDuplicate = function(nums1) {
//     let set = new Set();
//     for(const num of nums1) {
//         if(set.has(num)) return true;
//         set.add(num);
//     }
//     return false;
// };
// console.log(containsDuplicate(nums1));

// 다시 풀어보기
let nums = [0, 0];
var containsDuplicate = function(nums) {
    // 맵객체에 다 넣어놓고 만약 map에 존재하는 단어를 가지고 있다면 true 리턴
    const map = new Map();
    for(let i=0; i<nums.length; i++) {
        if(map.has(nums[i])){
            return true;
        }
        map.set(nums[i], true);
    }
    return false;
};
console.log(containsDuplicate(nums));