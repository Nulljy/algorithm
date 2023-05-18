/**347. Top K Frequent Elements


 * https://leetcode.com/problems/top-k-frequent-elements/
    Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]
 * 
 */

//Runtime 161 ms
let nums = [1,1,1,2,2,3,3,3,3], k = 2;
var topKFrequent = function(nums, k) {
    //담을 배열과 결과배열
    let map = new Map();
    let result = [];
    // 키와 밸류 형식으로 키에는 숫자, 밸류에는 카운트
    for(let num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }
    for(let [key, value] of map) {
        result.push([key, value]);
    }
    result.sort((a, b) => b[1] - a[1]);
    return result.splice(0, k).map(v => v[0]);
};

console.log(topKFrequent(nums, k));

