console.log(solution(1, 13, 1));
// k의 개수
//1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(n, j, k) {
    let cnt = 0;
    for(let i=n; i<=j; i++) {
        if(i.toString().length !== 1) {
            let tmp = i.toString().split('').filter(c => Number(c) === k);
            cnt += tmp.length;
        } else {
            if(i === k) cnt+=1;
        }
    }
    return cnt;
} // => 이 방식으로 하면 너무 느리다.


// split의 여집합
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
        console.log(a);
    }

    return console.log(a.split(k));
    // return a.split(k).length-1;
}
