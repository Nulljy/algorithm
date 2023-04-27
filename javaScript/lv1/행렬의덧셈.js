// 행렬의 덧셈

// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

console.log(solution([[1,2],[2,3]],[[3,4],[5,6]])); //	[[4,6],[7,9]]
console.log(solution([[1],[2]], [[3],[4]])); //	[[4],[6]]

function solution(a, b) {
    let result = [];
    for(let i=0; i<a.length; i++) {
        let tmp = [];
        for(let j=0; j<a[0].length; j++) {
            let sum =  a[i][j] + b[i][j];
            tmp.push(sum);
        }
        result.push(tmp);
    }
    return result;
}

// 다른방법
function solution(a, b) {
    return a.map((sec, idx2) => sec.map((one, idx1) => one + b[idx2][idx1]));
}
