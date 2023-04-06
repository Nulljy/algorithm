console.log(solution('1 - 20 + 30 - 4')); // 
// 문자열 계산하기


//my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
function solution(str) {
    let arr = str.split(" ");
    let tmp = '+'
    let op = arr.filter(operator => operator === '+' || operator === '-');
    let num = arr.filter(v => v !== '+' && v !== '-');

    return num.reduce((acc, cur, i) => {
        if(i === 0) return acc = Number(cur);
        tmp = op.length !== 0 ? op.splice(0, 1) : tmp;
        if(tmp == '+'){
            console.log(acc + tmp + cur);
            return acc += Number(cur);
        } else {
            console.log(acc + tmp + cur);
            return acc -= Number(cur);
        }
    }, 0)
}


// 쉽게 푸는법
function solution(str) {
    const arr = str.split(' ');
    while(arr.length > 1) {
        arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    }
    return arr.length > 1;
}
//1. arr.unshift => 배열의 맨 앞에 넣어준다. 2. +arr.shift() => 배열의 맨 앞에서 뺀 것을 integer 3. (arr.shift() === "+" ? 1 : -1) * arr.shift()) => 배열의 맨 앞에서 다시 뺀 것이 +면 1을, -면 -1을 다시 배열의 맨 앞에서 뺀 것에 곱해준다. 
