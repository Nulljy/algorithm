/**242. Valid Anagram

 * https://leetcode.com/problems/valid-anagram/
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

    anagram : 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 것이다.
 * 
 */

//Sample 59 ms submission

let s = "car", t = "rat";
var isAnagram = function(s, t) {
    // 길이가 다르면 false
    if(s.length !== t.length) return false;
    // 알파벳 갯수만큼 int array 생성
    const alphabet = Array(26).fill(0);
    for(let i = 0; i<s.length; i++) {
        alphabet[s.charCodeAt(i) - 97]++;
        alphabet[t.charCodeAt(i) - 97]--;
    }
    for(let i = 0; i<alphabet.length; i++) {
        if(alphabet[i] !== 0) return false;
    }
    return true;
};
console.log(isAnagram(s, t));




//Sample 43 ms submission
// Array.prototype.every() 함수 사용
// syntax  every(callbackFn)

// let s = "car", t = "rat";
let s1 = "car", t1 = "rac";
var isAnagram = function(s1, t1) {
    if(s.length !== t.length) return false;
    let freq = Array(26).fill(0);
    for(let i=0; i<s.length; i++) {
        const tmpS = s.charCodeAt(i) - 97;
        const tmpT = t.charCodeAt(i) - 97;
        freq[tmpS]++;
        freq[tmpT]--;
    }
    return freq.every(v => v === 0);
};
console.log(isAnagram(s1, t1)); // true