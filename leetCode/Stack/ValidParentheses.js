/**20. Valid Parentheses

 * https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true
 * 
 */

let s = "(]";
var isValid = function(s) {
    const stack = [];
    for(let c of s) {
        if(c === '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if(!stack.length ||
                (c === ')' && stack[stack.length-1] !== '(') ||
                (c === ']' && stack[stack.length-1] !== '[') ||
                (c === '}' && stack[stack.length-1] !== '{')) {
                    return false;
                }
            stack.pop();
        }
    }
    return !stack.length; // stack에 남아있는 (,[,{ 이 있다면 false 0이라면 true
};
console.log(isValid(s));

// Map Object 이용하기 runtime 
// Runtime 65ms