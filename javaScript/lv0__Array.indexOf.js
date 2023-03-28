console.log(solution([1, 8, 3]));
//1, 8, 3 중 가장 큰 수는 8이고 인덱스 1에 있습니다.

//정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(arr) {
    //깊은배열복사
    let result = arr.slice(0, arr.length);
    for(let i=0; i<result.length; i++) {
        for(let j=0; j<result.length-i; j++) {
            if(result[j] > result[j+1]){
                let tmp = result[j+1];
                result[j+1] = result[j];
                result[j] = tmp;
            }
        }
    }
    return [result[result.length-1], arr.indexOf(result[result.length-1])];
}

// 다른방법
function solution(arr) {
    return [Math.max(...arr), arr.indexOf(Math.max(...arr))];
}
