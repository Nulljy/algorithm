console.log(solution("I love you", 3, 6));

// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(str, num1, num2) {
    const tmp = str[num2];
    let result;
    result = str.replace(str[num2], str[num1]);
    result = result.replace(str[num1], tmp);
    return tmp;
}

// 다른방법 - 구조분해할당
function solution(str, num1, num2) {
    let result = str.split('');
    [result[num1], result[num2]] = [result[num2], result[num1]];
    return result.join('');
}
