console.log(solution([7, 77, 17])); // 4
// 7의 개수
// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(arr) {
    let seven = '7';
    let tmp = arr.map(v => String(v));
    let result = tmp.reduce((acc, cur) => acc.concat(cur.split('')), [])
    return result.filter(v => v === seven).length;
}

// 쉬운 방법 1 
function solution(array) {
    return array.join('').split('7').length-1;
}

// 다른 방법 2 - 자바식으로
function solution(array) {
    let result = 0;
    array.map((item) => {
        while(item > 0) {
            if(item % 10 === 7) {
                result += 1;   
            }

            item = Math.floor(item/10);
        }
    });

    return result;
}
