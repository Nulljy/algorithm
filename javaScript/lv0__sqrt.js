//어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.
// 같은 수를 곱했을 때, n보다 작으면 재귀 n과 같으면 1 
// n보다 크면 2
function solution(n, el=2) {
    return el * el < n ? solution(n, ++el) : el * el == n ? 1 : 2; 
}
