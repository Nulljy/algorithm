console.log(solution(45));

function solution(n) {
    const arr = [];
    while(n > 0) {
        arr.unshift(n%3);
        n = Math.floor(n / 3);
    }
    const result = arr.reduce((acc, cur, i) => {
        return acc += cur * Math.pow(3, i);
    }, 0);
    return result;
}