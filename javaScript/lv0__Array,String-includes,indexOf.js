console.log(solution(29183, 1));
//정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
// 숫자 찾기
function solution(num, k) {
    return String(num).includes(k) === true ? String(num).indexOf(k)+1 : -1;
}
