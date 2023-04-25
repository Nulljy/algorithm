// 약수의 개수와 덧셈
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

console.log(solution(13, 17)); //		43

function check(target) {
    let cnt = 0;
    for(let i=1; i <= target; i++) {
        if(target % i == 0) cnt++; 
    }
    return cnt % 2 === 0 ? 1 : -1;
}

function solution(left, right) {
    let min = left;
    let result = 0;
    while(min <= right) {
        check(min) === 1 ? result += min : result -= min;
        min++;
    }
    return result;
}

// 다른방식
function solution(left, right) {
    let result = 0;
    for(let i=left; i<=right; i++) {
        if(Number.isInteger(Math.sqrt(i))) {
            result -= i;
        } else {
            result += i;
        }
    }
    return result;
}

//제곱근이 정수면 약수중 1이 하나 더 포함되기 때문에 약수의 갯수가 홀수이다.
// 제곱근이 정수가 아니면 약수의 갯수가 짝수
