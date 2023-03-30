console.log(solution([10, 16], 13));
//가까운 수
//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(arr, n) {
    let min = arr.map(v => v - n).reduce((acc, cur) => {
        return Math.min(Math.abs(acc), Math.abs(cur));
    });
    let ans = arr.filter(v => Math.abs(v - n) === min).sort();
    return ans.length === 0 ? arr[0] : ans[0];
}

// 다른 풀이
function solution(array, n) {
    return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}
