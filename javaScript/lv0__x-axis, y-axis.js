// 직사각형 넓이 구하기

// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.


console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]])) // 1

function solution(dots) {
    // y축이 같은 점이 가로, x축이 같지만, y축이 다르면 세로 
    // 한 점을 주축으로 잡고 시작
    let target = dots.splice(0, 1);
    let aim = dots.reduce(([x, y], cur) => {
        const [tX, tY] = [target[0][0], target[0][1]];
        if(cur[1] === tY) return [cur, y];
        if(cur[0] === tX && cur[1] !== tY) return [x, cur];
        return [x, y];
    }, [0, 0]);
    return Math.abs(target[0][0] - aim[0][0]) * Math.abs(target[0][1] - aim[1][1]);
}

// 다른방법
function solution(dots) {
    //x와 y를 분리
    const x = dots.map(n => n[0]);
    const y = dots.map(n => n[1]);
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
