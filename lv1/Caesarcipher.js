/** 시저 암호
 * 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
 */
// console.log(solution("AB", 1)); // "BC"
// console.log(solution("z", 1	)); // "a"
console.log(solution("a B z",4)); // "e F d"

function solution(s, n) {
    // 배열을 받아서 char별로 분리
    // map 함수로 바꿔주기
    let tmp = s.split('').map((v, i) => {
        let code = v.charCodeAt();
        console.log('원본 코드: ' + code);
        if(65 <= code && code <= 90) {
            code += n;
            console.log('대문자 더한코드: ' + code);
            if(90 < code) {
                code = 65 + (code - 91);
            }
            return String.fromCharCode(code);
        } else if (97 <= code && code <= 122) {
            code += n;
            console.log('소문자 더한코드: ' + code);
            if(122 < code) {
                code = 97 + (code - 123);
                console.log('초과 소문자 더한코드: ' + code);
            }
            return String.fromCharCode(code);
        } else {
            return String.fromCharCode(code);
        }
    });
    
    return tmp.join('');
}


