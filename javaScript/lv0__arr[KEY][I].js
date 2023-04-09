// 캐릭터의 좌표

// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

// [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.


console.log(solution(["left", "right", "up", "right", "right"], [11, 11])) // [2, 1]

function solution(key, bo) {
    let result = [0, 0];
    let remit = [Math.floor(bo[0] / 2), Math.floor(bo[1] / 2)];
    let first = key.filter(str => str === 'left' || str === 'right');
    let second = key.filter(str => str === 'up' || str === 'down');
    result[0] = first.reduce((acc, cur) => {
        if(cur === 'left') return remit[0] * -1 < acc ? acc -= 1 : remit[0] * -1;
        if(cur === 'right') return remit[0] > acc ? acc += 1 : remit[0];
    }, 0)
    result[1] = second.reduce((acc, cur) => {
        if(cur === 'down') return remit[1] * -1 < acc ? acc -= 1 : remit[1] * -1;
        if(cur === 'up') return remit[1] > acc ? acc += 1 : remit[1];
    }, 0)
    return result;
}

// 다른 방식 - 이 문제의 의도에는 이게 더 잘 맞는 듯
function solution(key, [n, m]) {
    const CONTROL = {
        up: [0, 1],
        down: [0, -1],
        right: [1, 0],
        left: [-1, 0],
    }

    const [x1, x2] = [-(n-1) / 2, (n-1) / 2]; 
    const [y1, y2] = [-(m-1) / 2, (m-1) / 2];
    return key.reduce(([x, y], key) => {
        const [nx, ny] = [x + CONTROL[key][0], y + CONTROL[key][1]];
        if(x1 <= nx && nx <= x2 && y1 <= ny && ny <= y2) return [nx, ny];
        return [x, y];
    }, [0, 0])
}
