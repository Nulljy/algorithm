console.log(solution("olleh", "hello"));
console.log(solution("allpe", "apple"));
//문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

//A로 B 만들기
// 스펠링의 갯수가 동일한지만 체크하면 된다.

function solution(before, after) {
    let a = [...before].sort();
    let b = [...after].sort();
    return a.filter((v, i) => v !== b[i]).length === 0 ? 1 : 0 ;
}
