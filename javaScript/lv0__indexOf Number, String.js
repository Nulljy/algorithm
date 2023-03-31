console.log(solution([3, 76, 24]));
//진료 순서 정하기
//외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// 새로운 배열에 중요도 넣어서 리턴
function solution(arr) {
    let tmp = [...arr].sort((a, b) => b - a).map(v => String(v)); // 중요도를 tmp에 넣었다.
    // arr에서 tmp 비교해서 tmp의 index + 1 을 리턴
    return arr.map(v => tmp.indexOf(String(v)) + 1);
}

// 정수형 배열도 indexOf가 된다.
function solution(arr) {
    return arr.indexOf(24);
}

function solution(arr) {
    let tmp = [...arr].sort((a, b) => b - a); // 중요도를 tmp에 넣었다.
    // arr에서 tmp 비교해서 tmp의 index + 1 을 리턴
    return arr.map(v => tmp.indexOf(v) + 1);
}
