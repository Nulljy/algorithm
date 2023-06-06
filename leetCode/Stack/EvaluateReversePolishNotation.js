/**150. Evaluate Reverse Polish Notation
 * EvaluateReversePolishNotation



 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.
Note that:
The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 * 
 */

let tokens  = ["4","13","5","/","+"];
var evalRPN = function(tokens) {
    const operators = ["+", "-", "*", "/"];
    let numbers = [];
    let tmp = [];
    for(let i=0; i<tokens.length; i++) {
        if(operators.includes(tokens[i])){
            tmp = [];
            tmp.push(numbers.splice(numbers.length-2, 1)[0]); 
            tmp.push(numbers.splice(numbers.length-1, 1)[0]);
            switch(tokens[i]) {
                case "+" :
                    tmp = tmp[0] + tmp[1];
                    break;
                case "-" :
                    tmp = tmp[0] - tmp[1];
                    break;
                case "*" :
                    tmp = tmp[0] * tmp[1];
                    break;
                case "/" :
                    tmp = Math.trunc(tmp[0] / tmp[1]);
                    break;
            }
            numbers.push(tmp);
            console.log(tmp);
        } else {
            numbers.push(Number.parseInt(tokens[i]));
        }
    }
    return numbers[0];
};
console.log(evalRPN(tokens));

// Map Object 이용하기 runtime 
// Runtime 65ms