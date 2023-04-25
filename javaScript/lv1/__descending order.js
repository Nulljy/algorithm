// 문자열 내림차순으로 배치하기

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

console.log(solution("Zbcdefg")); //	"gfedcbZ"


function solution(s) {
    return [...s].sort((a, b) => {
        if(a.charCodeAt() < b.charCodeAt()) {
            return 1;
        }
        if(a.charCodeAt() > b.charCodeAt()) {
            return -1;
        }
        return 0;
    }).join('');
}

// function compare(a, b) {
//     if (a is less than b by some ordering criterion) {
//         return -1;
//       }
//       if (a is greater than b by the ordering criterion) {
//         return 1;
//       }
//       // a must be equal to b
//       return 0;
//     }
