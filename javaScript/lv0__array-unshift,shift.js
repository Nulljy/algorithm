console.log(solution([1, 2, 3],"right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6],"left"));

function app(num, index, dir) {
    let result = num.splice(index, 1)[0];
    if(dir === "right") {
        num.unshift(result);
    } else if(dir === "left") {
        num.push(result);
    }
    return num;
}

// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
function solution(num, dir) {
    let start = 0;
    let end = num.length-1;
    // 빼고 합쳐주는식으로
    if(dir === "right") {
        return app(num, end, dir);
    } else if(dir === "left") {
        return app(num, start, dir);
    }
}

//다른 풀이법
function solution(numbers, direction) {
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}
