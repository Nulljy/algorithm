/**49. Group Anagrams

 * https://leetcode.com/problems/group-anagrams/
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 */

let strs = ["eat","tea","tan","ate","nat","bat"];
var groupAnagrams = function(strs) {
    // length가 1이라면 해당 배열만 배열안에 넣어서 리턴
    if(strs.length === 1) return [strs[0]];
    // 아니라면, 각각의 배열을 알파벳순 정렬을 한 후 map에 넣어서 (key는 중복불가능 value 중복가능)
    let map = {};
    for(let str of strs) {
        let tmp = str.split('').sort().join('');
        if(!map[tmp]) map[tmp] = [];
        map[tmp].push(str);
    }
    return Object.values(map);
};
console.log(groupAnagrams(strs));

// Map Object 이용하기 runtime 
// Runtime 65ms