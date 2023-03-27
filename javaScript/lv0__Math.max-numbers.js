// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
// 배열 정렬후, 가장 앞 두개 (마이너스), 가장 뒤 두개를 곱한후 더 큰쪽 리턴, 0이 존재하면 빼주기
function solution(numbers) {
    let arr = numbers.toString().split(',');
    let index = arr.indexOf('0');
    if(index !== -1) {
        arr.splice(index, 1);
    }
    let result = arr.map(v => v*1);
    result.sort((a,b) => a-b);
    return result[0]*result[1] < result[result.length-2]*result[result.length-1] ? result[result.length-2]*result[result.length-1] : result[0]*result[1];
}

// 다른 방법
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}

// 나는 0이 존재하면 0을 곱하게되서 0이 되는 경우를 생각했는데, 다른 사람들이 푼 방법을 보니 그런 경우의 수가 존재하지 않는지 0을 제외하지 않았다.
// 위의 다른 방법이 가장 좋은 방법인 것 같다.
