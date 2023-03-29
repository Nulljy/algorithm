console.log(solution(7));
//i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

function factorial(el) {
    let result = 1;
    for(let i = 2; i<=el; i++) {
        result *= i;
    }
    return result;
}
// n을 입력받고 그보다 낮거나 같은 값을 리턴해주는 팩토리얼을 찾아서 리턴
function solution(n, fa=2) {
    return n <= factorial(fa) ? (n === factorial(fa) ? fa : fa-1) : solution(n, ++fa);
}
